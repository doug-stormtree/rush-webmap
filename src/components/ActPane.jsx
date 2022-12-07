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
              <List content={content}/>
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
      <List content={content} />
    </Box>
  )
}

function List({content}) {
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
      direction="row"
      flexWrap="wrap"
      gap="10px"
      margin="auto"
    >
      {initiatives.map(item =>
        <InitiativeButton key={item.title} initiative={item} />
      )}
    </Flex>
  )
}