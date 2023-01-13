import { Flex } from '@chakra-ui/react';
import React from 'react';
import QuestionButton from './QuestionButton';
import Questions from '../data/Questions';

export default function QuestionMenuBar({
  activeQuestion, setActiveQuestion
}) {
  const questionButtons = [];
  Questions.forEach((q,k) => {
    questionButtons.push(
      <QuestionButton
        key={k}
        image={q.image}
        title={q.title}
        onClick={() => {
          setActiveQuestion(k);}}
        variant={k === activeQuestion ? 'selected' : 'default'}
      />
    )
  });

  return (
    <Flex minH='140px' p='10px' gap='10px' overflowY='hidden' overflowX='auto'>
      {questionButtons}
    </Flex>
  )
}