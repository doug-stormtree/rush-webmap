import React from 'react';
import {
  Box,
  Button,
  IconButton,
  ListItem,
  UnorderedList,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import Questions, { useActiveQuestionStore, questionActions } from '../data/QuestionStore';
import InitiativeCard from './InitiativeCard';

export const Tabs = {
  content: 'content',
  initiatives: 'initiatives',
  minimized: 'minimized',
}

export default function ContentPane({ active, variant, onClick, setActiveTab }) {
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
      title: 'Make Your Move',
      subtitle: questionData?.sections.two.heading,
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
      <IconButton
        icon={<FiX />}
        display={active ? null : 'none'}
        position='absolute'
        top='0.6rem'
        right='0.6rem'
        variant='ghost'
        height='1.875rem'
        minWidth='1.875rem'
        maxWidth='1.875rem'
        onClick={() => setActiveTab(Tabs.minimized)}
      />
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