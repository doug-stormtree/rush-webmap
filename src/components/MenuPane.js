import React, { useEffect } from 'react';
import { 
  Box,
  Flex,
  Heading,
  IconButton,
  StackDivider,
  useBoolean,
  HStack
} from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function MenuPane({onToggle, ...props}) {
  const [openFlag, setOpenFlag] = useBoolean(true);

  useEffect(() => {
    onToggle();
  }, [openFlag, onToggle])

  return (
    <HStack
      divider={<StackDivider borderColor='gray.200' />}
      spacing={2}
      p={2}
      {...props}
    >
      <Flex direction='column' h='100%'>
        <IconButton
          flex='1'
          variant='ghost'
          icon={openFlag ? <FaChevronRight /> : <FaChevronLeft />}
          onClick={setOpenFlag.toggle}
        />
      </Flex>
      {openFlag ? (
        <QuestionsList />
      ) : null}
    </HStack>
  )
}

function QuestionsList() {
  return (
    <Flex 
      direction='column'
      w='md'
      overflow='hidden'
    >
      <Box
        borderWidth='1px'
        borderRadius='lg'
        p={4}
        my={2}
      >
        <Heading>How to beat the heat?</Heading>
      </Box>
      <Box
        borderWidth='1px'
        borderRadius='lg'
        p={4}
        my={2}
      >
        <Heading>How can I eat local?</Heading>
      </Box>
      <Box
        borderWidth='1px'
        borderRadius='lg'
        p={4}
        my={2}
      >
        <Heading>Is development here a good idea?</Heading>
      </Box>
      <Box
        borderWidth='1px'
        borderRadius='lg'
        p={4}
        my={2}
      >
        <Heading>Who do I share my home with?</Heading>
      </Box>
      <Box
        borderWidth='1px'
        borderRadius='lg'
        p={4}
        my={2}
      >
        <Heading>What grows here?</Heading>
      </Box>
    </Flex>
  )
}