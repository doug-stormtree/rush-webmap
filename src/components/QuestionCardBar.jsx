import { Flex } from '@chakra-ui/react';
import React, { useEffect, useReducer } from 'react';
import QuestionCard from './QuestionCard';
import Questions, { useActiveQuestionStore } from '../data/Questions';

function questionsInit(initActiveQuestion) {
  const questionButtons = []
  Questions.forEach((q,k) => {
    questionButtons.push({
      key: k,
      active: k === initActiveQuestion,
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
  if (currentActive >= 0 && state[currentActive].key === action) {
    const newState = [...state]
    return newState
  }

  // generate a new state with only requested question active
  const newState = []
  state.forEach((q) => {
    newState.push({
      ...q,
      active: q.key === action,
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

export default function QuestionCardBar() {
  const {
    activeQuestion,
    sectionFocus,
  } = useActiveQuestionStore(state => ({activeQuestion: state.activeQuestion, sectionFocus: state.sectionFocus}))
  const [questionState, questionDispatch] = useReducer(
    questionsReducer,
    activeQuestion,
    questionsInit
  )

  useEffect(() => {
    questionDispatch(activeQuestion)
  }, [activeQuestion, questionDispatch])

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
          variant={q.active ? sectionFocus === 1 ? 'expanded' : 'wide' : 'button'}
        />
      )}
    </Flex>
  )
}