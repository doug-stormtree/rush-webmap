import React, { useRef, useState } from 'react';
import {
  Box,
  useBreakpointValue,
  useMultiStyleConfig
} from '@chakra-ui/react';
import QuestionCard from './QuestionCard';
import Questions, { useActiveQuestionStore } from '../data/Questions';

export default function QuestionCardBar() {
  const screenSize = useBreakpointValue({
    base: 'mobile',
    md: 'desktop',
  })
  const styles = useMultiStyleConfig('QuestionCardBar', { variant: screenSize })
  const {
    activeQuestion,
    sectionFocus,
  } = useActiveQuestionStore(state => ({
    activeQuestion: state.activeQuestion,
    sectionFocus: state.sectionFocus
  }))
  const scrollRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <Box __css={styles.container} ref={scrollRef}>
      <Box __css={styles.button} onClick={() => setIsOpen(!isOpen)}>
        How can I...?
      </Box>
      {(isOpen || screenSize === 'desktop') && (
        <Box __css={styles.bar}>
          <QuestionCard
            key={activeQuestion}
            question={{key: activeQuestion, ...Questions.get(activeQuestion)}}
            size={sectionFocus === 1
              ? 'expanded'
              : 'wide'
            }
            variant='sticky'
          />
          {[...Questions.entries()]
            .filter(q => q[0] !== activeQuestion)
            .map(q => {
              return (
                <QuestionCard
                  key={q[0]}
                  question={{key: q[0], ...q[1]}}
                  size={isOpen ? 'wide' : 'button'}
                  scrollRef={scrollRef}
                />
              )
            })
          }
        </Box>
      )}
    </Box>
  )
}