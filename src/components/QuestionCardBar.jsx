import { Box, useMultiStyleConfig } from '@chakra-ui/react';
import React from 'react';
import QuestionCard from './QuestionCard';
import Questions, { useActiveQuestionStore } from '../data/Questions';

export default function QuestionCardBar() {
  const styles = useMultiStyleConfig('QuestionCardBar')
  const {
    activeQuestion,
    sectionFocus,
  } = useActiveQuestionStore(state => ({
    activeQuestion: state.activeQuestion,
    sectionFocus: state.sectionFocus
  }))
  
  return (
    <>
      <Box __css={styles.container}>
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
            .map(q => 
              <QuestionCard
                key={q[0]}
                question={{key: q[0], ...q[1]}}
                size='button'
              />
            )
          }
        </Box>
      </Box>
    </>
  )
}