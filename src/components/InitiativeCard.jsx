import React from 'react';
import {
  Box,
  Image,
  Heading,
  Text,
} from '@chakra-ui/react';

export default function InitiativeCard({initiative, flip = false}) {
  return (
    <Box
      borderWidth='1px'
      borderRadius='xl'
      overflow='hidden'
    >
      <Image
        src={initiative.image}
        alt={initiative.title}
        boxSize='200px'
        fit='cover'
        float={flip ? 'right' : 'left'}
        marginRight={flip ? '0' : '5'}
        marginLeft={flip ? '5' : '0'}
        borderBottomRightRadius={flip ? '0' : 'xl'}
        borderBottomLeftRadius={flip ? 'xl' : '0'}
      />

      <Heading
        as='h2'
        size='md'
        noOfLines={1}
        paddingTop='3'
        marginBottom='2'
        paddingRight={flip ? '0' : '5'}
        paddingLeft={flip ? '5' : '0'}
      >
        {initiative.title}
      </Heading>

      <Text
        marginBottom='3'
        marginX='5'
      >
        {initiative.description}
      </Text>
    </Box>
  );
}