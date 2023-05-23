import React from 'react';
import {
  AspectRatio,
  Box,
  Image,
  LinkBox,
  LinkOverlay,
  Text
} from '@chakra-ui/react';

export default function InitiativeButton({initiative}) {
  const longestWordLength = initiative.title
    .split(/\s/).reduce((acc,s) => s.length > acc ? s.length : acc, 0);
  
  return (
    <AspectRatio ratio={1} w="120px">
      <LinkBox borderRadius="xl">
        <Image
          src={initiative.image}
          alt={initiative.title}
          objectFit="cover"
          minW="100%"
          minH="100%"
        />
        {initiative.noText ? (
          <LinkOverlay href={initiative.link} isExternal>
          </LinkOverlay>
        ) : (
          <>
            <Box style={{
              content: '""',
              position: 'absolute',
              left: '0',
              top: '0',
              width: '100%',
              height: '100%',
              backgroundImage: "linear-gradient( to bottom, hsla(0, 0%, 35.29%, 0) 0%, hsla(0, 0%, 34.53%, 0.034375) 16.36%, hsla(0, 0%, 32.42%, 0.125) 33.34%, hsla(0, 0%, 29.18%, 0.253125) 50.1%, hsla(0, 0%, 24.96%, 0.4) 65.75%, hsla(0, 0%, 19.85%, 0.546875) 79.43%, hsla(0, 0%, 13.95%, 0.675) 90.28%, hsla(0, 0%, 7.32%, 0.765625) 97.43%, hsla(0, 0%, 0%, 0.8) 100% )",
            }}/>
            <LinkOverlay href={initiative.link} isExternal>
              <Text
                position="absolute"
                bottom="0.5em"
                left="0.5em"
                width="calc(100% - 1em)"
                as="b"
                color="#FFF"
                textShadow="0 0 1px #333"
                fontSize={longestWordLength > 12 ? 'sm' : 'md'}
              >
                {initiative.title}
              </Text>
            </LinkOverlay>
          </>
        )}
      </LinkBox>
    </AspectRatio>
  );
}