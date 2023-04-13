import React, { useRef } from 'react';
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
  Spinner,
  Switch,
  Text,
} from '@chakra-ui/react';
import { IoMdInformationCircle, IoMdCloseCircleOutline } from 'react-icons/io';
import { useMapLayerStore } from '../data/Questions';
import FormattedText from './FormattedText';

// Wraps Legend in a Box for large screen sizes.
export const LegendPane = ({ activeQuestion }) => {
  return (
    <Box
    w='lg'
      p={4}
      pe={2}
      overflowY='scroll'
      boxShadow='inset 0px 11px 8px -10px #CCC, inset 0px -11px 8px -10px #CCC'
      >
      <Heading size='md' align='center' mb={2}>Legend</Heading>
      <LegendList activeQuestion={activeQuestion} />
    </Box>
  )
}

// Wraps Legend in a collapsible Drawer for small screen sizes.
export const LegendDrawerButton = ({ activeQuestion }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const layersLoading = useMapLayerStore((state) => state.layersLoading());

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        isLoading={layersLoading}
        loadingText='Legend'
      >
        Legend
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        placement='right'
        size='sm'
        >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading size='md' align='center' >Legend</Heading>
          </DrawerHeader>
          <DrawerBody>
            <LegendList activeQuestion={activeQuestion} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

// LegendList Component
//   Builds list of LegendItem components for active question layers.
const LegendList = ({ activeQuestion }) => {
  const layers = useMapLayerStore((state) => state.layers);
  const legendEntries = [];
  for (const key of layers.keys()) {
    if (layers.get(key).question === activeQuestion) {
      legendEntries.push(<LegendItem key={key} layerId={key} mb={1} />);
    }
  }
  legendEntries.reverse();

  return (
    <>
      {legendEntries}
    </>
  )
}

// LegendItem Component
//   A single legend entry row with toggle, name, patch, and learn more button.
export const LegendItem = ({ layerId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const layer = useMapLayerStore((state) => state.layers.get(layerId));
  const toggleLayerActive = useMapLayerStore((state) => state.toggleLayerActive);

  return (
    <>
      <Flex direction='row' alignItems='center' gap={2}>
        {layer.layer === 'loading' //|| parseInt(layerId.slice(-1)) % 2 === 0
          ? <Spinner
              color='blue.500'
              emptyColor='gray.200'
              speed='1s'
              thickness='4px'
              marginInline='5px'
            />
          : <Switch
              isChecked={layer.active}
              onChange={(e) => toggleLayerActive(layerId)}
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
        >{layer.layer === 'loading' ? 'Loading...' : layer.title}</FormLabel>
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
        ? <LegendItemDetails layer={layer} />
        : null
      }
    </>
  );
}

const LegendItemDetails = ({ layer }) => {
  return (
    <Flex direction='column' gap='2' my='2' marginInlineStart='3' mb='3'>
      {layer.styleMap ? 
        <Flex direction='column' gap='1' mx='2' p='2' bgColor='gray.100' borderRadius='lg'>
          { layer.legendTitle ? <Heading size='sm'>{layer.legendTitle}</Heading> : null }
          {[...layer.styleMap.values()].map((val) => 
            <Flex key={val.legendText} direction='row' alignItems='center' >
              { layer.shape === 'point'
                  ? <SinglePatchPoint style={val} flex='0' />
                  : layer.shape === 'line'
                    ? <SinglePatchLine style={val} flex='0' />
                    : <SinglePatchPolygon style={val} flex='0' />
              }
              <Text marginInline={2} flex='1'>{val.legendText}</Text>
            </Flex>
          )}
        </Flex> : null }
      <LegendItemDescription description={layer.description} />
    </Flex>
  );
}

const LegendItemDescription = ({ description }) => {
  if (typeof description === 'string' || description instanceof String)
    return <Text>{description}</Text>;
  if (Array.isArray(description)) {
    return <FormattedText textArray={description} />;
  }
  return null;
}

// Legend Patch Components
const LegendPatch = ({ layerId }) => {
  const layer = useMapLayerStore((state) => state.layers.get(layerId));

  if (layer.symbology === 'classified') {
    return layer.shape === 'point' ? (
      <ClassifiedPatchPoint styleMap={layer.styleMap} />
    ) : (
      <ClassifiedPatchPolygon styleMap={layer.styleMap} />
    )
  }

  return layer.shape === 'point'
    ? <SinglePatchPoint style={layer.options.style} />
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
    />
  );
}

const ClassifiedPatchPoint = ({ styleMap }) => {
  const styles = [...styleMap.values()].slice(0,2);
  return (
    <HStack spacing={'-0.5rem'}>
      {styles.map((s, index) => {
        const { legendText, ...restStyle } = s;
        return (
          <SinglePatchPoint
            key={legendText}
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
  const styles = [...styleMap.values()].slice(0,5);
  return (
    <HStack spacing='0'>
      {styles.map((s) => {
        return (
          <div key={s.legendText} style={{
            width: (45 / styles.length) + 'px',
            height: '27px',
            background: s.fillColor ?? s.color ?? '#BBB'
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