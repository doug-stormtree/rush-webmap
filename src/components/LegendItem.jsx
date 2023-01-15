import React from 'react';
import {
  useDisclosure,
  Flex,
  FormLabel,
  IconButton,
  Spacer,
  Switch,
  Text,
} from '@chakra-ui/react';
import { IoMdInformationCircle, IoMdCloseCircleOutline } from 'react-icons/io';
import { useMapLayerStore } from '../data/Questions';
import LegendPatchPolygon from './LegendPatchPolygon';
import LegendPatchPoints from './LegendPatchPoints';

const LegendItem = ({ layerId }) => {
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
export default LegendItem;

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
