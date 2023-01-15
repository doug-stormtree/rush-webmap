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
import { FaInfoCircle } from 'react-icons/fa';
import { useMapLayerStore } from '../data/Questions';

const LegendItem = ({ layerId, children }) => {
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
        {children}
        <IconButton variant='ghost' icon={<FaInfoCircle />} onClick={isOpen ? onClose : onOpen}/>
      </Flex>
      { isOpen
        ? <LegendItemDetails description={"Placeholder."} children={children} />
        : null
      }
    </>
  );
}
export default LegendItem;

const LegendItemDetails = ({ description, children }) => {
  return (
    <Flex direction='column'>
      <Text>{description}</Text>
      {children}
    </Flex>
  );
}