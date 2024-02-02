import React from 'react'
import {
  Box,
  Image,
  useMultiStyleConfig
} from '@chakra-ui/react'
import { FaRegArrowAltCircleDown } from 'react-icons/fa'
import FormattedText from './FormattedText'

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
          <FormattedText textArray={question.body} />
        </Box>
        <Box __css={styles.footer}>
          <>Make your move</>
          <FaRegArrowAltCircleDown />
        </Box>
      </Box>
    </Box>
  );
}