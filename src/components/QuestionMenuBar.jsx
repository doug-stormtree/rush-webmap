import { Flex } from '@chakra-ui/react';
import React from 'react';
import QuestionButton from './QuestionButton';
import Questions from '../data/Questions';

export default function QuestionMenuBar({
  activeQuestion, setActiveQuestion, style
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
    <Flex
      minH='140px'
      py='10px'
      gap='10px'
      overflowY='hidden'
      overflowX='auto'
      _before={{ content:'""', margin: 'auto' }}
      _after={{ content:'""', margin: 'auto' }}
      {...style}
    >
      {questionButtons}
    </Flex>
  )
}