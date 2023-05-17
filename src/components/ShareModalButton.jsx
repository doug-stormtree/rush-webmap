import React, { useState } from 'react';
import {
  useClipboard,
  useDisclosure,
  Button,
  Flex,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { FiShare } from 'react-icons/fi';
import { FaRegCopy } from 'react-icons/fa';

export default function ShareModalButton(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [url, setUrl] = useState("https://whatstherush.ca/")
  const { onCopy, value, hasCopied } = useClipboard(url);

  return (
    <>
      <Button
        rightIcon={<FiShare />}
        onClick={() => {
          onOpen();
          setUrl(props.getShareURL());
        }}
      >Share</Button>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        size={{
          xl: "4xl",
          md: "xl",
          base: "full",
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Share this map</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Use this link to share the current question and map view</Text>
            <Flex my={2}>
              <Input
                readOnly
                value={value}
                mr={2}
              />
              <Button onClick={onCopy}>
                {hasCopied ? "Copied!" : "Copy"}
                <Icon as={FaRegCopy} marginInlineStart='0.4em' />
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}