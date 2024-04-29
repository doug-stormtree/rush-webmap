import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import Questions, { useActiveQuestionStore } from '../data/Questions';
import InitiativeCard from './InitiativeCard';
import FormattedText from './FormattedText';

export default function ContentPane(props) {
  // active question
  const [activeQuestion, sectionFocus] = useActiveQuestionStore((state) => [state.activeQuestion, state.sectionFocus])
  // question content
  const [content, setContent] = useState({});
  const [initiatives, setInitiatives] = useState([]);

  useEffect(() => {
    if (!activeQuestion) return;
    const questionContent = Questions.get(activeQuestion);
    setContent({
      title: questionContent.title,
      subtitle: questionContent.sections.two.heading,
      description: questionContent.sections.two.items.map(i => ({type: 'p', content: i})),
    });
    setInitiatives(questionContent.act.initiatives);
    return () => {
      setContent({});
      setInitiatives([]);
    }
  }, [ activeQuestion ]);

  return sectionFocus >= 2 && (
    <Flex
      flexFlow='row wrap'
      justifyContent='space-evenly'
      paddingTop='6'
      {...props}
    >
      <DescriptionComponent {...content} />
      <InitiativesList initiatives={initiatives} />
    </Flex>
  )
}

function DescriptionComponent({ title, subtitle, description }) {
  return (
    <Flex
      direction='column'
      maxW='4xl'
      paddingInline='6'
      paddingBottom='6'
    >
      <Heading size='lg' mb='0.125em'>{title}</Heading>
      <Text
        as='h3'
        mb='6'
      >
        {subtitle}
      </Text>
      <FormattedText textArray={description ?? []} />
    </Flex>
  )
}

function InitiativesList({ initiatives }) {
  return (
    <Box
      maxW='3xl'
      paddingInline='6'
    >
      <Heading as='h2' size='lg' mb='0.125em'>
        Good Stuff To Check Out
      </Heading>
      <Text as='h3' mb='6'>
        We've noticed these movers and shakers working on solutions.
      </Text>
      <Flex
        direction="column"
        gap="10px"
      >
        {initiatives.map((item, index) =>
          <InitiativeCard
            key={item.title}
            initiative={item}
            flip={index%2===0}
          />
        )}
      </Flex>
    </Box>
  )
}