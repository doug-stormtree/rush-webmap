import React from 'react';
import {
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

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
        return <OrderedList {...sharedStyles} ps='2em'>{
            item.content.map((v,i) => <ListItem key={i}>{v}</ListItem>)
          }</OrderedList>
      case 'ul':
        return <UnorderedList {...sharedStyles} ps='2em'>{
            item.content.map((v,i) => <ListItem key={i}>{v}</ListItem>)
          }</UnorderedList>
      default:
        return <Text {...sharedStyles}>{item.content}</Text>
    }
  });
  return <>{components}</>;
}