import React from 'react';
import {
  useBreakpointValue,
  Box,
  Flex,
  Heading,
  IconButton,
  Spacer,
  StackDivider,
  Text,
  VStack
} from '@chakra-ui/react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Questions from '../data/Questions';
import ActPane from './ActPane';

export default function ContentPane({openFlag, setOpenFlag, question, ...props}) {
  const contentDirection = useBreakpointValue({ lg: 'row', base: 'column' });
  const outerOverflow = useBreakpointValue({ lg: 'auto', base: 'auto' });
  const contentTitle = useBreakpointValue({ lg: Questions.get(question).question, base: Questions.get(question).title})
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
        <Heading size='lg'>{contentTitle}</Heading>
        <Spacer />
        <IconButton
          icon={openFlag ? <FaChevronDown /> : <FaChevronUp />}
          onClick={setOpenFlag.toggle}
        />
      </Flex>
      {openFlag ? (
        <Flex
          h='100%'
          w='100%'
          maxW='4xl'
          gap='10px'
          direction='column'
          overflow={outerOverflow}
        >
          <TextPane flex='1' content={Questions.get(question).learn}/>
          <ActPane content={Questions.get(question).act} />
        </Flex>
      ) : null}
    </VStack>
  )
}

function TextPane({content, ...props}) {
  return (
    <Box {...props} pe={2}>
      {content.text.map(p =>
        <Text key={p} mb="1em">{p}</Text>
      )}
    </Box>
  )
}