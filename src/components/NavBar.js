import React from 'react';
import {
  Button,
  Flex,
  Spacer,
  useDisclosure
} from '@chakra-ui/react';

export default function NavBar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
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
    </Flex>
  )
}