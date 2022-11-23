import React from 'react';
import {
  AspectRatio,
  Box,
  Image,
  Text,
  useStyleConfig
} from '@chakra-ui/react';

export default function QuestionButton({ image, title, onClick, variant }) {
  const styles = useStyleConfig('QuestionButton',{ variant });

  return (
    <AspectRatio ratio={1} minW="120px" minH="120px">
      <Box
        as='button'
        textAlign="center"
        onClick={onClick}
        __css={styles}
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
            left="50%"
            transform="translateX(-50%)"
            as="b"
            textShadow="1px 1px 2px black, 1px 1px 1px black"
            fontSize='sm'
          >
            {title}
          </Text>
      </Box>
    </AspectRatio>
  );
}