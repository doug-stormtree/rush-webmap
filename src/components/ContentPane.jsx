import React from 'react';
import {
  useBreakpointValue,
  Box,
  Flex,
  Heading,
  StackDivider,
  VStack
} from '@chakra-ui/react';
import Questions from '../data/Questions';
import ActPane from './ActPane';
import FormattedText from './FormattedText';

export default function ContentPane({question, ...props}) {
  const contentTitle = useBreakpointValue({ lg: Questions.get(question).question, base: Questions.get(question).title})
  return (
    <VStack
      divider={<StackDivider borderWidth='2px' borderColor='WhiteAlpha.700' />}
      spacing={4}
      p={4}
      bg='WhiteAlpha.100'
      {...props}
    >
      <Flex justifyContent='center' w='100%'>
        <Heading size='lg'>{contentTitle}</Heading>
      </Flex>
      <Flex
        h='100%'
        w='100%'
        gap='10px'
        direction='column'
        overflow='auto'
        alignItems='center'
      >
        <Box maxW='6xl' px='60px'>
          <Box pb='0.5em'>
            <FormattedText textArray={Questions.get(question).description} />
          </Box>
          <ActPane content={Questions.get(question).act} />
        </Box>
      </Flex>
    </VStack>
  )
}