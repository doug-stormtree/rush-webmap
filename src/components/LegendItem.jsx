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
        ? <Text>{description}</Text>
        : null
      }
    </>
  );
}
export default LegendItem;