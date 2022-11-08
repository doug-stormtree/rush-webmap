import React from 'react';
import {
  useBreakpoint,
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  TerritoryAcknowledgement,
  RushMissionStatement
} from '../data/TextContent';

export default function LandingModalButton(props) {
  const { isOpen, onOpen, onClose } = useDisclosure(true);
  const bp = useBreakpoint();
  return (
    <>
      <Button onClick={onOpen} {...props}>{props.children}</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size={{
        xl: "4xl",
        lg: "xl",
        md: "xl",
        sm: "full",
        base: "full",
      }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Welcome to the RUSH Initiative Web Map</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing='1em'>
              <Text>{ RushMissionStatement }</Text>
              <Text>{ TerritoryAcknowledgement }</Text>
            </Stack>
          </ModalBody>

          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}