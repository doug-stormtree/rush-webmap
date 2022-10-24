import React, { useEffect } from 'react';
import { 
  Box,
  Flex,
  Heading,
  IconButton,
  ListItem,
  OrderedList,
  Spacer,
  StackDivider,
  Text,
  useBoolean,
  VStack
} from '@chakra-ui/react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function ContentPane({onToggle, question, ...props}) {
  const [openFlag, setOpenFlag] = useBoolean();

  useEffect(() => {
    onToggle();
  }, [openFlag, onToggle])

  return (
    <VStack
      divider={<StackDivider borderColor='gray.200' />}
      spacing={4}
      p={4}
      {...props}
    >
      <Flex direction='row' w='100%'>
        <Heading>Details</Heading>
        <Spacer />
        <IconButton
          icon={openFlag ? <FaChevronDown /> : <FaChevronUp />}
          onClick={setOpenFlag.toggle}
        />
      </Flex>
      {openFlag ? (
        <Flex
          h='100%'
          gap='20px'
          overflow='hidden'
        >
          <TextPane flex='1' overflowY='scroll' paragraphList={question.story}/>
          <ListPane flex='1' overflowY='scroll' itemList={question.tips}/>
        </Flex>
      ) : null}
    </VStack>
  )
}

function TextPane({paragraphList, ...props}) {
  return (
    <Box {...props} px={2}>
        <Heading mb={1}>
          Story
        </Heading>
        {paragraphList.map(p =>
          <Text key={p} mb="2em">{p}</Text>
        )}
      </Box>
  )
}

function ListPane({itemList, ...props}) {
  return (
    <Box {...props} px={2}>
      <Heading mb={1}>
        Tips
      </Heading>
      <OrderedList>
        {itemList.map(item =>
          <ListItem key={item}>{item}</ListItem>
        )}
      </OrderedList>
    </Box>
  )
}