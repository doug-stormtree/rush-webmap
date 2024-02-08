import React from 'react'
import {
  Box,
  Image,
  useMultiStyleConfig
} from '@chakra-ui/react'
import { FaRegArrowAltCircleDown } from 'react-icons/fa'

export default function QuestionCard({ question, onClick, variant }) {
  const styles = useMultiStyleConfig('QuestionCard', { variant })

  return (
    <Box
      as='button'
      onClick={onClick}
      __css={styles.card}
    >
      <Image src={question.image} __css={styles.image} />
      <Box __css={styles.content}>
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
          <>Make your move</>
          <FaRegArrowAltCircleDown />
        </Box>
      </Box>
    </Box>
  );
}