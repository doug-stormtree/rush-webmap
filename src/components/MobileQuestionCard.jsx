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
import { useActiveQuestionStore, questionActions } from '../data/QuestionStore';
import { MobileMenuState } from '../App'


/**
 * Just like 'QuestionCard', but with logic for mobile devices. It is assumed that this component
 * is *only* ever rendered on mobile devices.
 */
export default function MobileQuestionCard({ question, size, variant, mobileMenuState, setMobileMenuState }){

  // hack for long title strings
  const longTitleStyle = () => {
    if ('wide' === size && question.title?.length > 22){
        return { fontSize: '1.125rem', lineHeight: '1.95rem' };
    }
    return {};
  };

  // TODO: min and max sizing for mobile question cards in wide mode is mobileStyle('90%', '120px').
  const styles = useMultiStyleConfig('QuestionCard', { size, variant }); // re-use theme from original question card
  const dispatch = useActiveQuestionStore(state => state.dispatch);

  const onCardClick = () => {
    setMobileMenuState(MobileMenuState.COLLAPSED_HEADER);
    dispatch({question: question.key, focus: questionActions.open});
  };


  return question.key && (
    <Box __css={styles.card} onClick={onCardClick}>
      <Image src={question.image} __css={styles.image} />
      <Box __css={styles.content}>
        <IconButton
          icon={<FiX />}
          display='block'
          position='absolute'
          top='0.6rem'
          right='0.6rem'
          variant='ghost'
          height='1.875rem'
          minWidth='1.875rem'
          maxWidth='1.875rem'
          onClick={() => dispatch({question: question.key, focus: questionActions.close})}
        />
        <Box __css={styles.title} {...longTitleStyle}>{question.title}</Box>
        <Box __css={styles.subtitle}>{question.question}</Box>
        <Box __css={styles.body}>
          {
            question.sections.one.map((list, index) => {
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
            onClick={() => dispatch({question: question.key, focus: questionActions.makeYourMove})}
          >
            Make your move
          </Button>
        </Box>
      </Box>
    </Box>
  );
}