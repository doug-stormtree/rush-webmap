import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Image,
} from '@chakra-ui/react';
import { FiX } from 'react-icons/fi';
import { useActiveQuestionStore } from '../data/QuestionStore';
import { TutorialPopupQuote } from '../data/TextContent';

export default function TutorialPopup({ isMobile }) {
  
  const activeQuestion = useActiveQuestionStore(state => state.activeQuestion)

  // State for closing the tutorial popup
  const [isClosed, setIsClosed] = useState(false);

  /**
   * Render tutorial in non-mobile environments, when no question is selected, or .
   */
  const shouldRender = () => {
    return !isClosed && activeQuestion === undefined && !isMobile;
  };

  return shouldRender() && (
    <Box
      position='absolute'
      top='3.75rem'
      left='10rem'
      boxSize='10rem'
      zIndex='799'
      //pointerEvents='none'
      onClick={() => setIsClosed(true)}
    >
      <IconButton
        icon={<FiX />}
        position='absolute'
        top='0.6rem'
        right='-0.6rem'
        //variant='ghost'
        height='1.25rem'
        minWidth='1.25rem'
        maxWidth='1.25rem'
        zIndex='799'
        onClick={() => setIsClosed(true)}
      />
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
        paddingTop='14%'
        paddingBottom='50%'
        paddingX='10%'
        transform='scale(-1, 1)'
        width='9rem'
      >
        <Box transform='scale(-1, 1)'>
          {TutorialPopupQuote}
        </Box>
      </Box>
      <Image
        src={require('../images/Hummingbird.png')}
        filter='drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))'
        position='absolute'
        top='9.7rem'
        left='7.2rem'
        height='20rem'
        maxWidth='20rem'
        minWidth='20rem'
      />
    </Box>
  )
}