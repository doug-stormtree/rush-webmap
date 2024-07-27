import React from 'react';
import {
  Box,
  Image,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { useActiveQuestionStore } from '../data/Questions';
import { TutorialPopupQuote } from '../data/TextContent';

export default function TutorialPopup() {
  const activeQuestion = useActiveQuestionStore(state => state.activeQuestion)
  const styles = useMultiStyleConfig('TutorialPopup', {
    size: { base: 'mobile', md: 'desktop' }
  })

  return activeQuestion === undefined
    ? (
        <Box __css={styles.container}>
          <Box __css={styles.speechbubble}>
            <Box transform='scale(-1, 1)'>
              {TutorialPopupQuote}
            </Box>
          </Box>
          <Image
            src={require('../images/Hummingbird.png')}
            __css={styles.image}
          />
        </Box>
      )
    : null
}