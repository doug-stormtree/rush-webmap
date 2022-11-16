import { Flex } from '@chakra-ui/react';
import React from 'react';
import QuestionButton from './QuestionButton';

export default function QuestionMenuBar({
  questions, activeQuestion, setActiveQuestion
}) {
  return (
    <Flex minH='140px' p='10px' gap='10px' overflowY='hidden' overflowX='auto'>
      {Object.values(questions).map(q => 
        <QuestionButton
          key={q.title}
          image={q.image}
          title={q.title}
          onClick={() => {setActiveQuestion(q)}}
          variant={q === activeQuestion ? 'selected' : 'default'}
        />
      )}
    </Flex>
  )
}