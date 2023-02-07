import React from 'react';
import {
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';
import InitiativeButton from './InitiativeButton';

export default function ActPane({content}) {
  return (
    <ListPane flex='1' content={content}/>
  )
}

function ListPane({content, ...props}) {
  return (
    <Box {...props} px={2}>
      <ActionsList content={content} />
    </Box>
  )
}

function ActionsList({content}) {
  return (
    <>
      
      <InitiativeList initiatives={content.initiatives} />
    </>
  )
}

function InitiativeList({initiatives}) {
  return (
    <Flex
      direction="column"
      gap="10px"
      margin="auto"
      maxW='35em'
      mb='1em'
    >
      {initiatives.map((item, index) =>
        <Flex
          key={item.title}
          direction={ index%2===0 ? "row" : "row-reverse" }
          justify="center"
          alignItems="center"
          gap="1em"
        >
          <InitiativeButton flex='0' initiative={item} />
          <Text
            flex='1'
            textAlign={ index%2===0 ? "left" : "right" }
          >{item.description ?? item.title}</Text>
        </Flex>
      )}
    </Flex>
  )
}