import React from 'react';
import {
  Input,
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

export default function() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Flex>
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
          <DrawerHeader>Choose a </DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}