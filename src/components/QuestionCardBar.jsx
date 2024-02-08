import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import Questions from '../data/Questions';

function rotateKeyToPosition(key, list, position = 2) {
  const currPos = list.findIndex((el) => el.key === key)
  if (!currPos) throw new Error('QuestionButtons does not contain: ' + key)
  
  const n = list.length;
  position %= n;

  const reverse = (list, start, end) => {
    while (start < end) {
      [list[start], list[end]] = [list[end], list[start]]
      start++
      end--
    }
  }

  reverse(list, 0, n - 1)
  reverse(list, 0, position - 1)
  reverse(list, position, n - 1)

  return list
}

export default function QuestionCardBar() {
  const [activeQuestion, setActiveQuestion] = useState('beat-the-heat')

  const questionButtons = [];
  Questions.forEach((q,k) => {
    const question = {
      image: q.image,
      title: q.title,
      subtitle: q.question,
      body: q.sections.one ?? q.description,
    }
    questionButtons.push(
      <QuestionCard
        key={k}
        question={question}
        onClick={() => {
          rotateKeyToPosition(k, questionButtons)
          setActiveQuestion(k)
        }}
        variant={k === activeQuestion ? 'expanded' : 'button'}
      />
    )
  });
  console.log(questionButtons)

  return (
    <Flex
      minH='140px'
      py='10px'
      gap='10px'
      overflow='hidden'
      width='100%'
      _before={{ content:'""', margin: 'auto' }}
      _after={{ content:'""', margin: 'auto' }}
      {...{
        background:'transparent',
        position:'absolute',
        top:'40px',
        zIndex:'9',
        pointerEvents: 'none'
      }}
    >
      {questionButtons}
    </Flex>
  )
}