import { Flex } from '@chakra-ui/react';
import React, { useEffect, useReducer } from 'react';
import QuestionCard from './QuestionCard';
import Questions from '../data/Questions';

function questionsInit(initActiveQuestion) {
  const questionButtons = []
  Questions.forEach((q,k) => {
    questionButtons.push({
      key: k,
      active: k === initActiveQuestion,
      expanded: true,
      image: q.image,
      title: q.title,
      subtitle: q.question,
      body: q.sections.one ?? q.description,
    })
  })
  return questionButtons
}

const questionsReducer = (state, action) => {
  const currentActive = state.findIndex((q) => q.active)
  if (state[currentActive].key === action) {
    const newState = [...state]
    newState[currentActive].expanded = false
    return newState
  }

  // generate a new state with only requested question active
  const newState = []
  state.forEach((q) => {
    newState.push({
      ...q,
      active: q.key === action,
      expanded: true,
    })
  })
  // find the index of first active question in new state
  let activeIndex = newState.findIndex((q) => q.active)
  // if no active question found report error, return original state
  if (activeIndex < 0) {
    console.log('Invalid question to become active: ' + action)
    return state
  } else {
    // rotate new active question left until it is second item
    while (activeIndex > 1) {
      newState.push(newState.shift())
      activeIndex--
    }
    // if active question is first item, rotate right once
    if (activeIndex === 0) {
      newState.unshift(newState.pop())
    }
  }
  return newState
}

export default function QuestionCardBar(activeQuestion, setActiveQuestion) {
  const [questionState, questionDispatch] = useReducer(
    questionsReducer,
    'beat-the-heat',
    questionsInit
  )

  useEffect(() => {
    questionDispatch(activeQuestion)
  }, [activeQuestion])

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
      {questionState?.map((q) => 
        <QuestionCard
          key={q.key}
          question={q}
          onClick={() => {
            questionDispatch(q.key)
            setActiveQuestion(q.key)
          }}
          variant={q.active ? q.expanded ? 'expanded' : 'wide' : 'button'}
        />
      )}
    </Flex>
  )
}