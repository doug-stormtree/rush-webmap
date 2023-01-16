import React from 'react';
import {
  useDisclosure,
  Avatar,
  AvatarGroup,
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormLabel,
  Heading,
  IconButton,
  Spacer,
  Switch,
  Text,
} from '@chakra-ui/react';
import { IoMdInformationCircle, IoMdCloseCircleOutline } from 'react-icons/io';
import { useMapLayerStore } from '../data/Questions';

export const Legend = ({ activeQuestion }) => {
  const layers = useMapLayerStore((state) => state.layers);
  const legendEntries = [];
  for (const key of layers.keys()) {
    if (layers.get(key).question === activeQuestion) {
      legendEntries.push(<LegendItem key={key} layerId={key} mb={1} />);
    }
  }

  return (
    <>
      {legendEntries}
    </>
  )
}

export const LegendPane = ({ activeQuestion }) => {
  return (
    <Box w='lg' p={2} paddingInlineStart={4} overflowY='scroll'>
      <Heading size='md' align='center' >Legend</Heading>
      <Legend activeQuestion={activeQuestion} />
    </Box>
  )
}

export const LegendDrawer = ({ activeQuestion, btnRef, isOpen, onClose }) => {
  return (
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
          <Legend activeQuestion={activeQuestion} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export const LegendPatchPoints = ({ pointClasses }) => {
  return (
    <AvatarGroup size='sm' max={2} spacing='-0.5rem'>
      {Object.keys(pointClasses).map(key => 
        <Avatar
          key={key}
          icon={pointClasses[key]?.icon}
          fill={pointClasses[key]?.fill}
          stroke={pointClasses[key]?.stroke}
          bg='gray.200'
        />
      )}
    </AvatarGroup>
  );
}

export const LegendPatchPolygon = ({ fill }) => {
  return (
    <div style={{
      width: '1.5em',
      height: '1.25em',
      background: fill,
    }} />
  );
}

export const LegendItem = ({ layerId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const layer = useMapLayerStore((state) => state.layers.get(layerId));
  const toggleLayerActive = useMapLayerStore((state) => state.toggleLayerActive);

  return (
    <>
      <Flex direction='row' alignItems='center' gap={2}>
        <Switch
          isChecked={layer.active}
          onChange={(e) => toggleLayerActive(layerId)}
        />
        <FormLabel mb='0' textOverflow='ellipsis'>{layer.title}</FormLabel>
        <Spacer />
        {layer.format === 'polygon'
          ? <LegendPatchPolygon fill={layer.style.fillColor} />
          : isOpen
            ? null
            : <LegendPatchPoints pointClasses={layer.propertyMap} />
        }
        <IconButton
          variant='ghost'
          fontSize='20px'
          icon={isOpen ? <IoMdCloseCircleOutline /> : <IoMdInformationCircle />}
          onClick={isOpen ? onClose : onOpen}/>
      </Flex>
      { isOpen
        ? <LegendItemDetails
            description={layer.description}
            classes={layer.format === 'point' ? layer.propertyMap : null}
          />
        : null
      }
    </>
  );
}

const LegendItemDetails = ({ description, classes }) => {
  return (
    <Flex direction='column' gap={2} marginInlineStart={3} mb={3}>
      <Text>{description}</Text>
      {classes ? Object.entries(classes).map(([key, value]) => 
        <Flex key={key} direction='row' alignItems='center' >
          <div style={{
            borderRadius: '100%',
            backgroundColor: '#e3e8f0',
            fill: value.fill,
            stroke: value.stroke,
            padding: '3px',
            width: '32px',
            height: '32px',
          }}>{value.icon}</div>
          <Text marginInline={2} >{value.legendText}</Text>
        </Flex>
      ) : null}
    </Flex>
  );
}
