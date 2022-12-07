import React from 'react';
import {
  AspectRatio,
  Image,
  LinkBox,
  LinkOverlay,
  Text
} from '@chakra-ui/react';

export default function InitiativeButton({initiative}) {
  return (
    <AspectRatio ratio={1} w="120px">
      <LinkBox
        borderRadius="xl"
        bg="#333"
      >
        <Image
          src={initiative.image}
          objectFit="cover"
          minW="100%"
          minH="100%"
          opacity="0.9"
        />
        <LinkOverlay href={initiative.link}>
          <Text
            position="absolute"
            bottom="0.5em"
            left="0.5em"
            as="b"
            color="#FFF"
            textShadow="0 1px 0 black"
          >
            {initiative.title}
          </Text>
        </LinkOverlay>
      </LinkBox>
    </AspectRatio>
  );
}