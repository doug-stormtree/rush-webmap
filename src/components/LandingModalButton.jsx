import React from 'react';
import {
  useBreakpointValue,
  useConst,
  useDisclosure,
  IconButton,
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
import { FaRegQuestionCircle } from 'react-icons/fa';
import {
  TerritoryAcknowledgement,
  RushMissionStatement
} from '../data/TextContent';
import logos_4xl from '../images/RUSH_Logos_4xl.png';
import logos_xl from '../images/RUSH_Logos_xl.png';

// Check first visit outside component
const isFirstVisit = checkFirstVisit();

export default function LandingModalButton(props) {
  const { isOpen, onOpen, onClose } = useDisclosure({
    defaultIsOpen: isFirstVisit
  });
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
      <IconButton
        variant='nav'
        icon={<FaRegQuestionCircle />}
        onClick={onOpen} 
        {...props}
      >
        {props.children}
      </IconButton>

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
              <Text>{ TerritoryAcknowledgement }</Text>
              <Text>{ RushMissionStatement }</Text>
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

// Check if this is the first visit to the website for the session.
function checkFirstVisit() {
  if (storageAvailable('sessionStorage')) {
    // If flag is present, return false to first visit.
    if (sessionStorage.getItem('visited')) return false;
    // Otherwise, set flag for next visit.
    sessionStorage.setItem('visited', 'true');
  }
  // Return true if storage unsupported or flag not set.
  return true;
}

// Mozilla: Using the Web Storage API
function storageAvailable(type) {
  let storage;
  try {
      storage = window[type];
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  }
  catch (e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          (storage && storage.length !== 0);
  }
}