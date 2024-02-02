import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import Questions from '../data/Questions';

export default function QuestionCardBar() {
  const [activeQuestion, setActiveQuestion] = useState('beat-the-heat')

  const questionButtons = [];
  Questions.forEach((q,k) => {
    const question = {
      image: q.image,
      title: q.title,
      subtitle: q.question,
      body: q.description_new ?? q.description,
    }
    questionButtons.push(
      <QuestionCard
        key={k}
        question={question}
        onClick={() => {
          setActiveQuestion(k);}}
        variant={k === activeQuestion ? 'expanded' : 'button'}
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
      {...{
        backgroundColor:'white',
        position:'sticky',
        top:'40px',
        zIndex:'9',
        //borderRadius:'16px 16px 0 0',
        boxShadow:'0px 0px 8px 2px #888'
      }}
    >
      {questionButtons}
    </Flex>
  )
}