import React from 'react';
import {
  useBreakpointValue,
  useDisclosure,
  Button,
  Image,
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
import logos_4xl from '../images/RUSH_Logos_4xl.png';
import logos_xl from '../images/RUSH_Logos_xl.png';

export default function LandingModalButton(props) {
  const { isOpen, onOpen, onClose } = useDisclosure(true);
  const logos = useBreakpointValue({
    xl: logos_4xl,
    base: logos_xl,
  })
  const isCentered = useBreakpointValue({
    xl: true,
    md: false,
    base: false,
  })
  return (
    <>
      <Button onClick={onOpen} {...props}>{props.children}</Button>

      <Modal 
        isOpen={isOpen}
        onClose={onClose}
        isCentered={isCentered}
        size={{
          xl: "4xl",
          md: "xl",
          base: "full",
        }}
      >
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
            <Image src={logos} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}