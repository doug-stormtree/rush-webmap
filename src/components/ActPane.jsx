import React, { useRef } from 'react';
import {
  useBreakpointValue,
  useDisclosure,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  ListItem,
  OrderedList,
  Text,
} from '@chakra-ui/react';
import InitiativeButton from './InitiativeButton';

export default function ActPane({content}) {
  const showButton = useBreakpointValue({ lg: false, base: true });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return showButton 
    ? (
      <>
        <Flex direction='row' justify='center'>
          <Button
            ref={btnRef}
            onClick={onOpen}
            w='50%'
            colorScheme='blue'
          >Act</Button>
        </Flex>
        <Drawer
          isOpen={isOpen}
          placement='bottom'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Act</DrawerHeader>
            <DrawerBody>
              <ActionsList content={content}/>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    ) : (
      <ListPane flex='1' content={content}/>
    )
}

function ListPane({content, ...props}) {
  return (
    <Box {...props} px={2}>
      <Heading mb={1} textAlign='center'>Act</Heading>
      <ActionsList content={content} />
    </Box>
  )
}

function ActionsList({content}) {
  return (
    <>
      <OrderedList mb="1em">
        {content.list.map(item =>
          <ListItem key={item}>{item}</ListItem>
        )}
      </OrderedList>
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