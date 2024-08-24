import React from 'react';
import {
  Badge,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import { InitiativeTagColors } from '../data/TextContent';

export default function InitiativeCard({initiative, flip = false}) {

  return (
    <LinkBox
      borderWidth='1px'
      borderRadius='xl'
      overflow='hidden'
      minHeight='120px'
      flex='0 0 auto'
    >
      <Image
        src={initiative.image}
        alt={initiative.title}
        fit='contain'
        height='120px'
        width={{base: '100%', md: '120px'}}
        float={{md: flip ? 'right' : 'left'}}
        marginRight={{md: flip ? '0' : '5'}}
        marginLeft={{md: flip ? '5' : '0'}}
        borderTopLeftRadius={{md: flip ? '0' : 'xl'}}
        borderTopRightRadius={{md: flip ? 'xl' : '0'}}
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
      <Stack direction='row' marginX='5' marginBottom='2'>
        {initiative.tags.map((tag) => (
          <Badge colorScheme={InitiativeTagColors[tag] ?? 'gray.200'}>{tag}</Badge>
        ))}
      </Stack>
      <Text
        marginX='5'
        marginBottom={{base: '4', md: '3'}}
      >
        {initiative.description}
      </Text>
    </LinkBox>
  );
}