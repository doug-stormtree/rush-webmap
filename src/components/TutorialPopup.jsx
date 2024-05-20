import React from 'react';
import {
  Box,
  Image,
} from '@chakra-ui/react';
import { useActiveQuestionStore } from '../data/Questions';

export default function TutorialPopup() {
  const activeQuestion = useActiveQuestionStore(state => state.activeQuestion)

  return activeQuestion === undefined
    ? (
        <Box
          position='absolute'
          top='3.75rem'
          left='10rem'
          boxSize='10rem'
          zIndex='9999'
        >
          <Box
            background="url('/SpeechBubble.svg')"
            boxSize='10rem'
            zIndex='9'
            backgroundPosition='center'
            backgroundRepeat='no-repeat !important'
            backgroundSize='100% 100%'
            margin='0 auto'
            textAlign='center'
            lineHeight='1'
            paddingTop='15%'
            paddingBottom='50%'
            paddingX='10%'
            transform='scale(-1, 1)'
          >
            <Box transform='scale(-1, 1)'>
              Find your question and explore the map!
            </Box>
          </Box>
          <Image
            src={require('../images/Hummingbird.png')}
            position='absolute'
            top='9.7rem'
            left='7.2rem'
            height='20rem'
            maxWidth='20rem'
            minWidth='20rem'
          />
        </Box>
      )
    : null
}