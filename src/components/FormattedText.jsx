import React from 'react';
import { Heading, Link, Text, VStack } from '@chakra-ui/react';

export default function FormattedText({ textArray }) {
  const components = textArray.map((item, index) => {
    const sharedStyles = {
      key: index,
      pb: '0.5em',
    }
    switch (item.type) {
      case 'link':
        return <Text><Link {...sharedStyles} isExternal href={item.url ?? "#"}>{item.content}</Link></Text>
      case 'h1':
        return <Heading {...sharedStyles} size='lg'>{item.content}</Heading>
      case 'h2':
        return <Heading {...sharedStyles} size='md'>{item.content}</Heading>
      case 'list':
        return <VStack {...sharedStyles} ps='2em' align='left' spacing='0.5em'>{
            item.content.map((v,i) => <Text key={i}>{`${i+1}. ${v}`}</Text>)
          }</VStack>
      default:
        return <Text {...sharedStyles}>{item.content}</Text>
    }
  });
  return <>{components}</>;
}