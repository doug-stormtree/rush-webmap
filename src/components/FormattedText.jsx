import React from 'react';
import { Heading, Link, Text } from '@chakra-ui/react';

export default function FormattedText({ textArray }) {
  const components = textArray.map((item, index) => {
    const sharedStyles = {
      key: index,
      pb: '0.5em',
    }
    switch (item.type) {
      case 'link':
        return <Link {...sharedStyles} isExternal href={item.url ?? "#"}>{item.content}</Link>
      case 'h1':
        return <Heading {...sharedStyles}>{item.content}</Heading>
      case 'h2':
        return <Heading {...sharedStyles} size='lg'>{item.content}</Heading>
      default:
        return <Text {...sharedStyles}>{item.content}</Text>
    }
  });
  return <>{components}</>;
}