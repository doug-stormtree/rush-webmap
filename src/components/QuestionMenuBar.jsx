import { Flex } from '@chakra-ui/react';
import React from 'react';
import QuestionButton from './QuestionButton';

export default function QuestionMenuBar({
  questions, activeQuestion, setActiveQuestion
}) {
  return (
    <Flex minH='140px' p='10px' gap='10px' overflowY='hidden' overflowX='auto'>
      {Object.keys(questions).map(q => 
        <QuestionButton
          key={questions[q].title}
          image={questions[q].image}
          title={questions[q].title}
          onClick={() => {
            console.log(q);
            setActiveQuestion(q);}}
          variant={q === activeQuestion ? 'selected' : 'default'}
        />
      )}
    </Flex>
  )
}