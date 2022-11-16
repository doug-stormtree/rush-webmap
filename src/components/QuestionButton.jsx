import React from 'react';
import {
  AspectRatio,
  Box,
  Image,
  Text
} from '@chakra-ui/react';

export default function QuestionButton({ image, title }) {
  return (
    <AspectRatio ratio={1} minW="120px" minH="120px">
      <Box
        borderRadius="xl"
        bg="#333"
      >
        <Image
          src={image}
          objectFit="cover"
          minW="100%"
          minH="100%"
          opacity="0.9"
        />
          <Text
            position="absolute"
            bottom="0.5em"
            left="0.5em"
            as="b"
            color="#FFF"
            textShadow="0 1px 0 black"
          >
            {title}
          </Text>
      </Box>
    </AspectRatio>
  );
}