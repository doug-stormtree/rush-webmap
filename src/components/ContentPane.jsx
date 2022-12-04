import React from 'react';
import {
  useBreakpointValue,
  Box,
  Flex,
  Heading,
  IconButton,
  ListItem,
  OrderedList,
  Spacer,
  StackDivider,
  Text,
  VStack
} from '@chakra-ui/react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import InitiativeButton from './InitiativeButton';
import { Questions } from '../App';

export default function ContentPane({openFlag, setOpenFlag, question, ...props}) {
  const contentDirection = useBreakpointValue({ lg: 'row', base: 'column' });
  const outerOverflow = useBreakpointValue({ lg: 'auto', base: 'auto' });
  const innerOverflow = useBreakpointValue({ lg: 'visible', base: 'visible' });
  const contentTitle = useBreakpointValue({ lg: Questions[question].question, base: Questions[question].title})
  return (
    <VStack
      divider={<StackDivider borderWidth='2px' borderColor='WhiteAlpha.700' />}
      spacing={4}
      p={4}
      bg='WhiteAlpha.100'
      {...props}
    >
      <Flex direction='row' w='100%'>
        <Spacer />
        <Heading>{contentTitle}</Heading>
        <Spacer />
        <IconButton
          icon={openFlag ? <FaChevronDown /> : <FaChevronUp />}
          onClick={setOpenFlag.toggle}
        />
      </Flex>
      {openFlag ? (
        <Flex
          h='100%'
          gap='10px'
          direction={contentDirection}
          overflow={outerOverflow}
        >
          <TextPane flex='1' overflowY={innerOverflow} content={Questions[question].learn}/>
          <ListPane flex='1' overflowY={innerOverflow} content={Questions[question].act}/>
        </Flex>
      ) : null}
    </VStack>
  )
}

function TextPane({content, ...props}) {
  return (
    <Box {...props} pe={2}>
      <Heading mb={1} textAlign='center'>Learn</Heading>
      {content.text.map(p =>
        <Text key={p} mb="1em">{p}</Text>
      )}
      <InitiativeList initiatives={content.initiatives} />
    </Box>
  )
}

function ListPane({content, ...props}) {
  return (
    <Box {...props} px={2}>
      <Heading mb={1} textAlign='center'>Act</Heading>
      <OrderedList mb="1em">
        {content.list.map(item =>
          <ListItem key={item}>{item}</ListItem>
        )}
      </OrderedList>
      <InitiativeList initiatives={content.initiatives} />
    </Box>
  )
}

function InitiativeList({initiatives}) {
  return (
    <Flex
      direction="row"
      flexWrap="wrap"
      gap="10px"
      margin="auto"
    >
      {initiatives.map(item =>
        <InitiativeButton key={item.title} initiative={item} />
      )}
    </Flex>
  )
}