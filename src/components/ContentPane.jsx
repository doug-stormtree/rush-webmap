import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import Questions from '../data/Questions';
import InitiativeCard from './InitiativeCard';
import FormattedText from './FormattedText';

export default function ContentPane({ question, ...props }) {
  // question content
  const [content, setContent] = useState({});
  const [initiatives, setInitiatives] = useState([]);

  useEffect(() => {
    if (!question) return;
    const questionContent = Questions.get(question);
    setContent({
      title: questionContent.title,
      subtitle: questionContent.question,
      description: questionContent.description,
    });
    setInitiatives(questionContent.act.initiatives);
    return () => {
      setContent({});
      setInitiatives([]);
    }
  }, [ question ]);

  return (
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