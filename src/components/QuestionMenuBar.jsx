import { Flex } from '@chakra-ui/react';
import React from 'react';
import QuestionButton from './QuestionButton';

export default function QuestionMenuBar({ questions }) {
  return (
    <Flex minH='140px' p='10px' gap='10px' overflowY='hidden' overflowX='scroll'>
      {Object.values(questions).map(q => 
        <QuestionButton image={q.image} title={q.title} key={q.title} />
      )}
      {Object.values(questions).map(q => 
        <QuestionButton image={q.image} title={q.title} key={q.title} />
      )}
      {Object.values(questions).map(q => 
        <QuestionButton image={q.image} title={q.title} key={q.title} />
      )}
      {Object.values(questions).map(q => 
        <QuestionButton image={q.image} title={q.title} key={q.title} />
      )}
    </Flex>
  )
}