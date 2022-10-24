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
import { Questions } from './MapData';

export default function MenuPane({
  onToggle, 
  activeQuestion, 
  setQuestion, 
  ...props
}) {
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
      {Object.values(Questions).map(q => {
        return q.title === "" ? (<></>) : (
          <Box
            borderWidth='1px'
            borderRadius='lg'
            p={4}
            my={2}
          >
            <Heading>{q.title}</Heading>
          </Box>
        )
      })}
    </Flex>
  )
}