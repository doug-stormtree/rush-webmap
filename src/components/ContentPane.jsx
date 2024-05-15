import React from 'react';
import {
  Box,
  Button,
  ListItem,
  UnorderedList,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';
import Questions, { useActiveQuestionStore, questionActions } from '../data/Questions';
import InitiativeCard from './InitiativeCard';

export const Tabs = {
  content: 'content',
  initiatives: 'initiatives',
}

export default function ContentPane({ active, variant, onClick }) {
  // theme
  const styles = useMultiStyleConfig('ContentPane', {variant: active ? variant : 'inactive'})
  // active question
  const [
    activeQuestion,
    sectionFocus,
    dispatch
  ] = useActiveQuestionStore((state) => [
    state.activeQuestion,
    state.sectionFocus,
    state.dispatch
  ])
  // question content
  const questionData = Questions.get(activeQuestion)
  const content = variant === Tabs.content
    ? {
      title: questionData?.title,
      subtitle: 'Make your move. ' + questionData?.sections.two.heading,
      body: (
        <UnorderedList>
          {questionData?.sections.two.items.map((i) => (
            <ListItem key={i}>{i}</ListItem>
          ))}
        </UnorderedList>
      ),
      footer: (
        <Button
          rightIcon={<FaRegArrowAltCircleDown />}
          onClick={() => dispatch({focus: questionActions.rabbitHole})}
        >
          Down the rabbit hole
        </Button>
      )
    } : {
      title: 'Good Stuff To Check Out',
      subtitle: 'We\'ve noticed these movers and shakers working on solutions.',
      body: questionData?.act.initiatives.map((item, index) =>
        <InitiativeCard
          key={item.title}
          initiative={item}
          flip={index%2===0}
          flex='0'
        />
      ),
      footer: null,
    }

  return sectionFocus >= 2 ? (
    <Box
      __css={styles.container}
      onClick={onClick}
    >
      <Box __css={styles.title}>{content.title}</Box>
      <Box __css={styles.subtitle}>{content.subtitle}</Box>
      <Box __css={styles.body}>
        {content.body}
      </Box>
      <Box __css={styles.footer}>
        {content.footer}
      </Box>
    </Box>
  ) : null
}