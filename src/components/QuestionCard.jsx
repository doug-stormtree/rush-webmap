import React from 'react'
import {
  Box,
  Button,
  IconButton,
  Image,
  useMultiStyleConfig
} from '@chakra-ui/react'
import { FaRegArrowAltCircleDown } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { useActiveQuestionStore, questionActions } from '../data/Questions'

export default function QuestionCard({ question, variant }) {
  const styles = useMultiStyleConfig('QuestionCard', { variant })
  const dispatch = useActiveQuestionStore(state => state.dispatch)

  return (
    <Box
      __css={styles.card}
      onClick={() => {
        switch (variant) {
          case 'button':
            dispatch({question: question.key, action: questionActions.open})
            return
          case 'wide':
            dispatch({question: question.key, action: questionActions.open})
            return
          default:
            return
        }
      }}
    >
      <Image src={question.image} __css={styles.image} />
      <Box __css={styles.content}>
        <IconButton
          icon={<FiX />}
          display={variant !== 'expanded' ? 'none' : null}
          position='absolute'
          top='0.6rem'
          right='0.6rem'
          variant='ghost'
          height='1.875rem'
          minWidth='1.875rem'
          maxWidth='1.875rem'
          onClick={() => dispatch({question: question.key, action: questionActions.close})}
        />
        <Box __css={styles.title}>{question.title}</Box>
        <Box __css={styles.subtitle}>{question.subtitle}</Box>
        <Box __css={styles.body}>
          {
            question.body.map((list, index) => {
              return (
                <Box key={index}>
                  {list.heading}
                  <ul style={{
                    listStylePosition: 'outside',
                    paddingInlineStart: '1.5rem',
                  }}>
                    {list.items.map((item, index) => {
                      return (
                        <li key={index} style={{
                        }}>{item}</li>
                      )
                    })}
                  </ul>
                </Box>
              )
            })
          }
        </Box>
        <Box __css={styles.footer}>
          <Button
            rightIcon={<FaRegArrowAltCircleDown />}
            onClick={() => dispatch({question: question.key, action: questionActions.makeYourMove})}
          >
            Make your move
          </Button>
        </Box>
      </Box>
    </Box>
  );
}