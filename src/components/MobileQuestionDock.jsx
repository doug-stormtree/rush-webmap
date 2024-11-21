import { Box, Text, useMultiStyleConfig } from '@chakra-ui/react';
import Questions from '../data/QuestionStore';
import { MobileMenuState } from '../App';
import MobileQuestionCard from './MobileQuestionCard';

/**
 * Dock the active question to the bottom of the screen on mobile devices.
 * TODO: Describe what happened with the bottom menu tabs switching between information.
 */
export default function MobileQuestionDock ({isMobile, activeQuestion, mobileMenuState, setMobileMenuState}){

  const styles = useMultiStyleConfig('QuestionCardBar'); // re-use QuestionCardBar styles // TODO... Do i want to change this and make a new styles file????

  const shouldRender = () => {
    // Render on mobile when header is collapsed to bottom of screen, or expanded 
    // on bottom of screen to show card details.
    return isMobile && activeQuestion && [
      MobileMenuState.COLLAPSED_HEADER, 
      MobileMenuState.EXPANDED_HEADER,
    ].includes(mobileMenuState);
  };

  const getCardSize = () => {
    switch(mobileMenuState){
      case MobileMenuState.COLLAPSED_HEADER:
        return 'wide';
      case MobileMenuState.EXPANDED_HEADER:
        return 'expanded';
      default:
        console.error('Cannot render "MobileQuestionDock" in mobile menu state: ' + mobileMenuState + ".");
        return null;
    }
  };

  return shouldRender() && (
    <Box __css={styles.dock}>
      <MobileQuestionCard
        key={activeQuestion}
        question={{key: activeQuestion, ...Questions.get(activeQuestion)}}
        size={getCardSize()}
        variant='dockExpanded'
        mobileMenuState={mobileMenuState}
        setMobileMenuState={setMobileMenuState}
      />
    </Box>
  )
}