import React from 'react';
import { 
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

export default function LandingModalButton(props) {
  const { isOpen, onOpen, onClose } = useDisclosure(true);
  return (
    <>
      <Button onClick={onOpen} {...props}>{props.children}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Hello body text.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}