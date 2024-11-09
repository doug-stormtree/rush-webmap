import { Box, useMultiStyleConfig } from '@chakra-ui/react';
import MobileQuestionCard from './MobileQuestionCard';
import { MobileMenuState } from '../App';
import Questions from '../data/QuestionStore';

/**
 * A menu to select question cards on mobile devices.
 */
export default function MobileQuestionMenu({isMobile, mobileMenuState, setMobileMenuState}) {

  const styles = useMultiStyleConfig('QuestionCardBar'); // re-use QuestionCardBar styles // TODO... Do i want to change this and make a new styles file????

  const shouldRender = () => {
    // this menu only shows up so that the user can select a card, it 
    // should be hidden for the rest of the time.
    return isMobile && mobileMenuState === MobileMenuState.SELECT;
  };

  return shouldRender() && (
    <Box __css={styles.container}>
      <Box __css={styles.bar}>
        {
          [...Questions.entries()].map(q => {
            return (
              <MobileQuestionCard
                key={q[0]}
                question={{key: q[0], ...q[1]}}
                size='wide'
                mobileMenuState={mobileMenuState}
                setMobileMenuState={setMobileMenuState}
              />
            )
          })
        }
      </Box>
    </Box>
  )
}