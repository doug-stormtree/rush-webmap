import React from 'react';
import {
  Box,
  Heading,
  Button,
  IconButton,
  Flex,
  Spacer,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';

export default function NavBar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Flex {...props}>
        <Button
          variant = 'ghost'
        >RUSH</Button>
        <Spacer />
        <Button
          variant = 'ghost'
        >Events</Button>
        <Button
          variant = 'ghost'
        >Initiatives</Button>
        <Button
          variant = 'ghost'
        >About</Button>
        <Spacer />
        <IconButton 
          aria-label='Change layers'
          icon={<FaBars />}
          ref={btnRef}
          onClick={onOpen}
        />
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement='right'
        size='md'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Choose a map topic</DrawerHeader>

          <DrawerBody>
            <Box
              borderWidth='1px'
              borderRadius='lg'
              p={4}
              my={2}
            >
              <Heading>How to beat the heat?</Heading>
            </Box>
            <Box
              borderWidth='1px'
              borderRadius='lg'
              p={4}
              my={2}
            >
              <Heading>How can I eat local?</Heading>
            </Box>
            <Box
              borderWidth='1px'
              borderRadius='lg'
              p={4}
              my={2}
            >
              <Heading>Is development here a good idea?</Heading>
            </Box>
            <Box
              borderWidth='1px'
              borderRadius='lg'
              p={4}
              my={2}
            >
              <Heading>Who do I share my home with?</Heading>
            </Box>
            <Box
              borderWidth='1px'
              borderRadius='lg'
              p={4}
              my={2}
            >
              <Heading>What grows here?</Heading>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}