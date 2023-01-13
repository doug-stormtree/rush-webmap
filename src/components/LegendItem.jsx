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

const LegendItem = ({ name, description, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex direction='row' alignItems='center' gap={2}>
        <Switch />
        <FormLabel mb='0' textOverflow='ellipsis'>{name}</FormLabel>
        <Spacer />
        {children}
        <IconButton variant='ghost' icon={<FaInfoCircle />} onClick={isOpen ? onClose : onOpen}/>
      </Flex>
      { isOpen
        ? <LegendItemDetails description={description} children={children} />
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