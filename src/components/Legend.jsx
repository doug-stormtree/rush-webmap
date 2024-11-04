import React, { useEffect, useRef, useState } from 'react';
import {
  useDisclosure,
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  Spacer,
  Spinner,
  Switch,
  Text,
  Tooltip,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { IoMdInformationCircle, IoMdCloseCircleOutline } from 'react-icons/io';
import { FiX } from "react-icons/fi";
import FormattedText from './FormattedText';
import useScrollShadows from './useScrollShadows';
import { useActiveQuestionStore } from '../data/QuestionStore';
import {
  LAYER_STATUS,
  layerMap,
  useMapLayerDataStore,
  useMapLayerStyleStore,
} from '../data/MapLayerStore';
import { LegendGroups } from '../data/TextContent';

// Wraps Legend in a Box for large screen sizes.
export const LegendPane = () => {
  const scrollBoxRef = useRef()
  const scrollContainerProps = useScrollShadows(scrollBoxRef)
  
  return (
    <Box
      w='24rem'
      maxH='calc(100vh - 9.75rem)'
      p='1em'
      pe='0'
      overflowY='hidden'
      borderRadius='xl'
      backgroundColor='white'
      display='flex'
      flexDirection='column'
    >
      <Box flex='0'>
        <LegendHeader />
      </Box>
      <Box
        flex='1'
        display='flex'
        flexDirection='column'
        overflow='hidden'
        {...scrollContainerProps}
      >
        <Box
          flex='1'
          overflow='scroll'
          minH='0'
          pe='1em'
          ref={scrollBoxRef}
        >
          <LegendList />
        </Box>
      </Box>
    </Box>
  )
}

// Wraps Legend in a collapsible Drawer for small screen sizes.
export const LegendDrawerButton = () => {
  // render legend as drawer overlay for smaller screen sizes.
  const isDrawer = useBreakpointValue(
    [true, null, null, null, false, null],
    {ssr: false}
  )
  const { isOpen, onOpen, onClose } = useDisclosure({defaultIsOpen: !isDrawer});
  const btnRef = useRef();
  const layersLoading = useMapLayerDataStore((state) => state.areLayersLoading());
  const activeQuestion = useActiveQuestionStore(state => state.activeQuestion)

  return activeQuestion === undefined
    ? null
    : (
    <>
      { isOpen
        ? !isDrawer && (
          <>
            <LegendPane key={activeQuestion} />
            <IconButton
              aria-label='Close Legend'
              icon={<FiX size='1.5rem' />}
              onClick={onClose}
              position='absolute'
              top='0.75em'
              right='0.75em'
              variant='ghost'
              height='2.25rem'
              maxWidth='2.25rem'
              minWidth='2.25rem'
            />
          </>
        )
        : (
          <Button
            ref={btnRef}
            onClick={onOpen}
            isLoading={layersLoading}
            loadingText='Legend'
          >
            Legend
          </Button>
        )
      }
      <Drawer
        isOpen={isOpen && isDrawer}
        onClose={onClose}
        finalFocusRef={btnRef}
        placement='right'
        size='md'
        >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <LegendHeader />
          </DrawerHeader>
          <DrawerBody>
            <LegendList />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

const LegendHeader = () => {
  return (
    <>
      <Box
        fontFamily='var(--chakra-fonts-heading)'
        fontWeight='500'
        fontSize='2xl'
        lineHeight='130%'
        textAlign='center'
        textShadow='1px 1px 4px rgba(0,0,0,0.3)'
      >
        Legend
      </Box>
      <Box
        fontFamily='var(--chakra-fonts-subHeading)'
        fontSize='sm'
        align='right'
        marginY='2'
        marginEnd='14px'
      >
        Click here for information about each layer ⤵
      </Box>
    </>
  )
}

// LegendList Component
//   Builds list of LegendItem components for active question layers.
const LegendList = () => {
  const [activeQuestion, activeLayers] = useActiveQuestionStore(state => 
    [state.activeQuestion, state.activeLayers]
  )

  // Start empty map for all legend groups
  const legendEntries = new Map();
  
  activeLayers
    .filter((layer) => !layerMap.get(layer.key).noLegend)
    .forEach(({key, group}) => {
      const groupEntries = legendEntries.get(group) ?? [];
      groupEntries.push(
        layerMap.get(key)?.ogmMapId
        ? <LegendItemOGM key={key} layerId={key} mb={1} />
        : <LegendItem key={key} layerId={key} question={activeQuestion} mb={1} />
      );
      legendEntries.set(group, groupEntries);
    });
  
  // Make array with groups that have special positions
  const legendGroupsWithPositions = Object.values(LegendGroups).filter(g => Number.isInteger(g?.position))
  // Make array of group keys, filtering out any with special positions
  const legendGroupsWithoutPositions = [...legendEntries.keys()].filter(k => !legendGroupsWithPositions.some(g => g.group === k)).sort()

  // Splice in the keys with special positions
  legendGroupsWithPositions.forEach(g => legendGroupsWithoutPositions.splice(g.position, 0, g.group))
  // Create a component for each group
  const legendComponents = []
  legendGroupsWithoutPositions.forEach(
    (key) => legendComponents.push(<LegendGroup key={key} title={key}>{legendEntries.get(key)}</LegendGroup>)
  )

  return legendComponents
}

// LegendGroup Component
const LegendGroup = ({ title, children }) => {
  const subheading = Object.values(LegendGroups).find(g => g.group === title)?.subheading

  return children && children.length > 0 && (
    <VStack gap='0'>
      {title && <Text fontFamily='var(--chakra-fonts-heading)' fontWeight='bold' size='sm' width='100%'>{title}</Text>}
      {subheading && <Text fontFamily='var(--chakra-fonts-subHeading)' fontWeight='normal' size='xs' letterSpacing='wide'>{subheading}</Text>}
      {children}
    </VStack>
  )
}

// LegendItem Component
//   A single legend entry row with toggle, name, patch, and learn more button.
export const LegendItem = ({ layerId, question }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const layerStatus = useMapLayerDataStore((state) => state.layerDataMap.get(layerId).status);
  const [activeLayers, toggleLayerActive] = useActiveQuestionStore((state) => [state.activeLayers, state.toggleLayerActive]);

  return (
    <>
      <Flex direction='row' alignItems='center' gap={2} width='100%'>
        {layerStatus === LAYER_STATUS.Loading
          ? <Spinner
              color='blue.500'
              emptyColor='gray.200'
              speed='1s'
              thickness='4px'
              marginInline='5px'
            />
          : <Switch
              isChecked={activeLayers.find(l => l.key === layerId).active === true}
              onChange={() => toggleLayerActive(layerId)}
              flex='0'
            />
        }
        <FormLabel
          m='0'
          maxH='2.9rem'
          flex='1'
          overflow='hidden'
          textOverflow='ellipsis'
          display='-webkit-box !important; -webkit-line-clamp: 2; -webkit-box-orient: vertical;'
          whiteSpace='normal'
          fontFamily='var(--chakra-fonts-title)'
          fontSize='md'
        >{layerStatus === LAYER_STATUS.Loading ? 'Loading...' : layerMap.get(layerId).title}</FormLabel>
        <LegendPatch layerId={layerId} flex='0' />
        <IconButton
          variant='ghost'
          fontSize='20px'
          icon={isOpen ? <IoMdCloseCircleOutline /> : <IoMdInformationCircle />}
          onClick={isOpen ? onClose : onOpen}
          flex='0'
        />
      </Flex>
      { isOpen
        ? <LegendItemDetails layerId={layerId} />
        : null
      }
    </>
  );
}

const LegendItemDetails = ({ layerId }) => {
  const layer = layerMap.get(layerId)
  const styleMap = useMapLayerStyleStore((state) => state.getLayerStyleMap(layerId))

  return (
    <Flex direction='column' gap='2' my='2' marginInlineStart='3' mb='3'>
      {styleMap instanceof Map && styleMap.size > 0 ?
      <Flex direction='column' gap='1' mx='2' p='2' bgColor='gray.100' borderRadius='lg'>
        {layer.legendTitle ? <Heading size='sm'>{layer.legendTitle}</Heading> : null }
        {[...styleMap.entries()].map(([key, val]) => 
          <Flex key={key} direction='row' alignItems='center' >
            { layer.shape === 'point'
                ? <SinglePatchPoint style={val} flex='0' />
                : layer.shape === 'line'
                  ? <SinglePatchLine style={val} flex='0' />
                  : <SinglePatchPolygon style={val} flex='0' />
            }
            <Flex flex='1' marginInline={2} direction='column' alignItems='flex-start'>
              <Text>{val?.legendText ?? key}</Text>
              { val.subText?.map((text) => <Text key={text} marginInline={4} fontSize='sm' fontWeight='semibold'>{text}</Text>) }
            </Flex>
          </Flex>
        )}
      </Flex> : null }
      <LegendItemDescription description={layer.description} />
    </Flex>
  );
}

const LegendItemDescription = ({ description, noOfLines = undefined }) => {
  if (typeof description === 'string' || description instanceof String)
    return <Text noOfLines={noOfLines}>{description}</Text>;
  if (Array.isArray(description)) {
    return noOfLines
      ? <Text noOfLines={noOfLines}>{description[0].content}</Text>
      : <FormattedText textArray={description} />;
  }
  return null;
}

// Legend Patch Components
const LegendPatch = ({ layerId }) => {
  const layer = layerMap.get(layerId)
  const styleMap = useMapLayerStyleStore((state) => state.getLayerStyleMap(layerId))

  if (layer.symbology === 'classified') {
    return layer.shape === 'point' ? (
      <ClassifiedPatchPoint styleMap={styleMap} />
    ) : (
      <ClassifiedPatchPolygon styleMap={styleMap} />
    )
  }

  return layer.shape === 'point'
    ? <SinglePatchPoint style={layer.icon} />
    : layer.shape === 'line'
      ? <SinglePatchLine style={layer.options.style} />
      : <SinglePatchPolygon style={layer.options.style} />
}

const SinglePatchPoint = ({ style }) => {
  return (
    <Avatar
      size='sm'
      showBorder='true'
      bg='gray.200'
      icon={style.icon}
      fill={style.fill}
      stroke={style.stroke}
      src={style.src}
    />
  );
}

const ClassifiedPatchPoint = ({ styleMap }) => {
  const styles = [...styleMap.entries()].slice(0,3);
  return (
    <HStack spacing={'1'}>
      {styles.map(([key, style], index) => {
        const { legendText, ...restStyle } = style;
        return (
          <SinglePatchPoint
            key={legendText ?? key}
            style={restStyle}
            zIndex={2-index}
          />
        )
      })}
    </HStack>
  )
}

const SinglePatchPolygon = ({ style }) => {
  return (
    <PolygonPatchSVG
      fill={style?.fillColor ?? undefined}
      stroke={style?.color ?? undefined}
      dashed={style?.dashArray ? true : false}
    />
  )
}

const PolygonPatchSVG = ({ fill, stroke, dashed = false }) => (
  <svg width="45" height="27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="0"
      y="0"
      width="45"
      height="27"
      strokeWidth="6"
      strokeLinecap="butt"
      fill={fill}
      stroke={stroke}
      strokeDashoffset={dashed ? "3" : undefined}
      strokeDasharray={dashed ? "6 3" : undefined}
    />
  </svg>
)

const ClassifiedPatchPolygon = ({ styleMap }) => {
  const styles = [...styleMap.entries()].slice(0,6);
  return (
    <HStack spacing='0'>
      {styles.map(([key, style]) => {
        return (
          <div key={key} style={{
            width: (45 / styles.length) + 'px',
            height: '27px',
            background: style.fillColor ?? style.color ?? '#BBB'
          }} />
        )
      })}
    </HStack>
  )
}

const SinglePatchLine = ({ style }) => {
  return (
    <LinePatchSVG
      fill={style?.fillColor ?? undefined}
      stroke={style?.color ?? undefined}
      dashed={style?.dashArray ? true : false}
    />
  )
}

const LinePatchSVG = ({ fill, stroke, dashed = false }) => (
  <svg width="45" height="27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line
      x1="0"
      x2="45"
      y1="13.5"
      y2="13.5"
      width="45"
      height="27"
      strokeWidth="3"
      strokeLinecap="butt"
      fill={fill}
      stroke={stroke}
      strokeDashoffset={dashed ? "3" : undefined}
      strokeDasharray={dashed ? "6 3" : undefined}
    />
  </svg>
)

// LegendItemOGM Component
//   A single legend entry row for an OpenGreenMap layer.
export const LegendItemOGM = ({ layerId }) => {
  const { isOpen, onToggle } = useDisclosure();
  const layerStatus = useMapLayerDataStore((state) => state.layerDataMap.get(layerId).status);
  const layer = layerMap.get(layerId);
  const [activeLayers, toggleLayerActive] = useActiveQuestionStore((state) => [state.activeLayers, state.toggleLayerActive]);
  const active = activeLayers.find(l => l.key === layerId).active

  const [mapName, setMapName] = useState(layer.title)
  const [team, setTeam] = useState({ name: '', id: null, src: require('../data/png/Placeholder.png') })
  useEffect(() => {
    if (!layer?.ogmMapId || team.id !== null) return;

    // Fetch OGM Team Image
    fetch(`https://new.opengreenmap.org/api-v1/maps/${layer.ogmMapId}`)
      .then((response) => response.json())
      .then((json) => {
        const teamId = json.map?.visibility.team
        const resMapName = json.map?.name
        if (resMapName) setMapName(resMapName)
        if (teamId) {
          setTeam({ name: 'Loading...', id: 'loading', src: team.src })
          fetch(`https://new.opengreenmap.org/api-v1/teams/${teamId}`)
            .then((response) => response.json())
            .then((json) => {
              const teamName = json.team?.name
              const teamLogoId = json.team?.logo
              if (teamName && teamLogoId) {
                setTeam({
                  name: teamName,
                  id: teamId,
                  src: `https://new.opengreenmap.org/api-v1/pictures/${teamLogoId}/picture`
                })
              } else {
                setTeam({
                  name: '',
                  id: 'error',
                  src: team.src
                })
              }
            })
        }
      })
  }, [layer, mapName, setMapName, team, setTeam])

  return (
    <Flex
      marginTop='8px'
      direction='column'
      gap='8px'
      padding='8px'
      bgColor='gray.100'
      borderRadius='xl'
    >
      {/* Map icons and toggle */}
      <Flex direction='row' alignItems='center' justifyContent='space-between'>
        <LegendPatch layerId={layerId} flex='0' />
        <Spacer />
        {layerStatus === LAYER_STATUS.Loading
          ? <Spinner
              color='blue.500'
              emptyColor='gray.200'
              speed='1s'
              thickness='4px'
              marginInline='5px'
            />
          : <Switch
              isChecked={active}
              onChange={(e) => toggleLayerActive(layerId)}
            >{ active ? 'On' : 'Off' }</Switch>
        }
      </Flex>
      {/* Map title, team name, and team logo */}
      <Flex direction='row' alignItems='bottom' justifyContent='space-between'>
        <Flex direction='column' alignItems='left' justifyContent='flex-end'>
          <Link
            href={layer.liveOverride?.team?.url ?? `https://new.opengreenmap.org/browse/teams/${team.id}`}
            isExternal
          >
            <Text
              fontFamily='var(--chakra-fonts-subTitle)'
              fontSize='sm'
              fontWeight='light'
              noOfLines={1}
            >
              {layer.liveOverride?.team?.name ?? team.name}
            </Text>
          </Link>
          <Text
            fontFamily='var(--chakra-fonts-title)'
            fontSize='lg'
            fontWeight='bold'
            noOfLines={2}
          >
            {mapName}
          </Text>
        </Flex>
        <Link
          href={layer.liveOverride?.team?.url ?? `https://new.opengreenmap.org/browse/teams/${team.id}`}
          isExternal
        >
          <Image
            boxSize='100px'
            objectFit='contain'
            bgColor='white'
            borderRadius='xl'
            alt={team?.name ?? ''}
            src={team?.src ?? ''}
          />
        </Link>
      </Flex>
      {/* Description */}
      <Tooltip
        label='Click to Expand'
        placement='top'
        bg='green.600'
        hasArrow
        isDisabled={isOpen}
      >
        <Box
          onClick={onToggle}
          paddingBottom={isOpen ? 'unset' : '0.75em'}
          boxShadow={isOpen ? undefined : 'inset 0px -24px 16px -16px hsla(0,0%,0%,.25)'}
        >
          <LegendItemDescription
            description={layer.description}
            noOfLines={isOpen ? undefined : 2}
          />
        </Box>
      </Tooltip>
      { true || isOpen ? (
        <Flex direction='row' justifyContent='space-around' >
          <Link
            href={layer.liveOverride?.btn1?.url ?? `https://new.opengreenmap.org/browse/sites?map=${layer?.ogmMapId}`}
            isExternal
          >
            <Button colorScheme='green'>{layer.liveOverride?.btn1?.label ?? 'Visit Campaign'}</Button>
          </Link>
          <Link
            href={layer.liveOverride?.btn2?.url ?? `https://new.opengreenmap.org/manage/features/add?mapId=${layer?.ogmMapId}`}
            isExternal
          >
            { layer.liveOverride?.ogmNoAccountWarning ? (
              <Button colorScheme='green' >{layer.liveOverride?.btn2?.label ?? 'Add a Feature'}</Button>
            ) : (
              <Tooltip label='Will Require OpenGreenMap Account' placement='top' bg='orange.600' hasArrow>
                <Button colorScheme='green' >{layer.liveOverride?.btn2?.label ?? 'Add a Feature'}</Button>
              </Tooltip>
            )}
          </Link>
        </Flex>
      ) : null }
    </Flex>
  )
}