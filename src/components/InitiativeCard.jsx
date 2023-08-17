import React from 'react';
import {
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react';

export default function InitiativeCard({initiative, flip = false}) {

  return (
    <LinkBox
      borderWidth='1px'
      borderRadius='xl'
      overflow='hidden'
    >
      <Image
        src={initiative.image}
        alt={initiative.title}
        fit='cover'
        height='200px'
        width={{base: '100%', md: '200px'}}
        float={{md: flip ? 'right' : 'left'}}
        marginRight={{md: flip ? '0' : '5'}}
        marginLeft={{md: flip ? '5' : '0'}}
        borderBottomRightRadius={{md: flip ? '0' : 'xl'}}
        borderBottomLeftRadius={{md: flip ? 'xl' : '0'}}
      />

      <Heading
        as='h4'
        size='md'
        noOfLines={1}
        marginBottom='2'
        paddingTop={{base: '5', md: '3'}}
        paddingRight={{base: '5', md: flip ? '0' : '5'}}
        paddingLeft={{base: '5', md: flip ? '5' : '0'}}
      >
        <LinkOverlay href={initiative.link} isExternal>
          {initiative.title}
        </LinkOverlay>
      </Heading>

      <Text
        marginX='5'
        marginBottom={{base: '4', md: '3'}}
      >
        {initiative.description}
      </Text>
    </LinkBox>
  );
}