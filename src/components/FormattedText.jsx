import React from 'react';
import { Link, Text } from '@chakra-ui/react';

export default function FormattedText({ textArray }) {
  const components = textArray.map((item, index) => {
    const sharedStyles = {
      key: index,
      pb: '0.5em',
    }
    switch (item.type) {
      case 'link':
        return <Link {...sharedStyles} isExternal href={item.url ?? "#"}>{item.content}</Link>
      default:
        return <Text {...sharedStyles}>{item.content}</Text>;
    }
  });
  return <>{components}</>;
}