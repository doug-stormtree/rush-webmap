import React, { useRef } from 'react';
import { Box, useMultiStyleConfig } from '@chakra-ui/react';
import QuestionCard from './QuestionCard';
import Questions, { 
  useActiveQuestionStore 
} from '../data/QuestionStore';

export default function QuestionCardBar({ isMobile }) {
  const styles = useMultiStyleConfig('QuestionCardBar');
  const {
    activeQuestion,
    //sectionFocus,
  } = useActiveQuestionStore(state => ({
    activeQuestion: state.activeQuestion,
    //sectionFocus: state.sectionFocus
  }));
  const scrollRef = useRef(null);
  const shouldRender = () => {
    return !isMobile; 
  };
  
  return shouldRender() && (
    <Box __css={styles.container} ref={scrollRef}>
      <Box __css={styles.bar}>
        {/* <QuestionCard
          key={activeQuestion}
          question={{key: activeQuestion, ...Questions.get(activeQuestion)}}
          size={sectionFocus === 1
            ? 'expanded'
            : 'wide'
          }
          variant='sticky'
        /> */}
        {[...Questions.entries()]
          //.filter(q => q[0] !== activeQuestion)
          .map(q => {
            return (
              <QuestionCard
                key={q[0]}
                question={{key: q[0], ...q[1]}}
                size='button'
                scrollRef={scrollRef}
                variant={q[0] === activeQuestion ? 'selected' : undefined}
              />
            )
          })
        }
      </Box>
    </Box>
  )
}