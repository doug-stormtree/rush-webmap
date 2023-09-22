import React from 'react';
import { Flex } from '@chakra-ui/react';
import QuestionCard from './QuestionCard';
import Questions from '../data/Questions';

export default function QuestionMenuBar({
  activeQuestion, setActiveQuestion, style
}) {
  const questionButtons = [];
  Questions.forEach((q,k) => {
    questionButtons.push(
      <QuestionCard
        key={k}
        imageURL={q.image}
        title={q.title}
        subtitle={q.question}
        onClick={() => {
          setActiveQuestion(k);}}
        selected={k === activeQuestion}
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