import React, { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Spacer,
  useBreakpointValue,
  useDisclosure,
  useMediaQuery,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { FiInstagram, FiMessageSquare, FiHelpCircle, FiMap, FiMenu } from 'react-icons/fi';
//import LandingModalButton from './LandingModalButton';
import ShareModalButton from './ShareModalButton';
import { ReactComponent as GlobeSVG } from '../data/svg/globe.svg';

export default function NavBar(props) {

  const styles = useMultiStyleConfig('NavBar');
  const { getShareURL, isMobile, ...rest } = props;

  const fullPageTitle = useBreakpointValue({
    base: false,
    xl: useMediaQuery(
      // the magic number here is just based on how many pixels wide the navbar buttons are
      // at their widest point.
      '(min-width: 890px)'
    )[0],
  },{ssr:false});
  
  const pageTitle = fullPageTitle ? '[RUSH] Resilient Urban Systems & Habitat' : '[RUSH]';

  const mapButton = (
    <Link
      href='/app'>
      <Button
        aria-label='map-button'
        leftIcon={<FiMap strokeWidth='inherit' />}
        fontWeight='inherit'>
          {props.isMobile ? "Map" : 'Home'}
      </Button>
    </Link>
  );

  const aboutButton = (
    <ReactLink to='/about'>
      <Button
        leftIcon={<FiHelpCircle strokeWidth='inherit' />}
        fontWeight='inherit'>
          About
      </Button>
    </ReactLink>
  );

  const feedbackButton = (
    <Link 
      href='https://forms.gle/rB1WaaLcUmEjxmMr8'
      isExternal>
      <Box __css={styles.buttonHighlight}>
        <Button
          leftIcon={<FiMessageSquare strokeWidth='inherit'/>}
          fontWeight='inherit'>
            Feedback
        </Button>
      </Box>
    </Link>
  );

  const instagramButton = (
    <Link
      href='https://www.instagram.com/nature_rnd/'
      isExternal>
      <Button
        aria-label='@nature_rnd Instagram'
        leftIcon={<FiInstagram strokeWidth='inherit' />}
        fontWeight='inherit'>
          Instagram
      </Button>
    </Link>
  );

  const shareButton = (
    <ShareModalButton
      label='Share'
      getShareURL={getShareURL}
    />
  );

  const newWebsiteURL = () => {
    const oldURL = new URL(getShareURL())
    const path = oldURL.pathname.split('/')
    const geo = {
      latLng: path.at(-1),
      zoom: path.at(-2),
      question: path.at(-3),
    }
    console.log(path)
    console.log(geo)

    const url = new URL(oldURL)
    url.hostname = 'whatstherush.earth'
    url.port = ''
    if (geo.question === 'undefined' || geo.question === undefined) {
      url.pathname = path.includes('app') ? 'app' : ''
      url.search = ''
    } else {
      url.pathname = `/app/${geo.question}`
      url.search = new URLSearchParams({
        zoom: geo.zoom,
        lat: geo.latLng.split(',')[0],
        lng: geo.latLng.split(',')[1]
      }).toString()
    }
    return url
  }

  const NewWebsiteButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ newURL, setNewURL ] = useState('https://whatstherush.earth/')
    return (
      <>
        <Button
          leftIcon={<GlobeSVG width='16px' height='16px' />}
          fontWeight='inherit'
          onClick={() => {
            onOpen()
            setNewURL(newWebsiteURL())
          }}
        >
          New
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent backgroundColor='orange.200' borderRadius='xl' paddingBottom='2'>
            <ModalHeader>New Website</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>
                <GlobeSVG
                  height='5rem'
                  width='5rem'
                  style={{ 
                    float: 'right',
                    marginLeft: '10px'
                  }}
                />
                {"RUSH is moving to the next stage of our development, come check out the improvements we've made at: "}
              </p>
              <Box padding='3'>
                <Link
                  href={newURL}
                  style={{
                    fontWeight: 'bold',
                    textDecoration: 'underline',
                    color: '#3182CE',
                  }}
                >whatstherush.earth</Link>
              </Box>
              <p style={{ marginTop: '.25rem'}}>This website will soon permenantly redirect to the new website, but don't worry, all your links and QR codes will still work.</p>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }

  const menuBurgerButtons = useBreakpointValue({
    base: (
      // smallest mobile phones contain all buttons + menu that spans the entire screen.
      <MenuList h='100vh' w="100vw">
        <MenuItem>
          <NewWebsiteButton />
        </MenuItem>
        <MenuItem>
          {mapButton}
        </MenuItem>
        <MenuItem>
          {aboutButton}
        </MenuItem>
        <MenuItem>
          {feedbackButton}
        </MenuItem>
        <MenuItem>
          {instagramButton}
        </MenuItem>
        <MenuItem>
          {shareButton}
        </MenuItem>
      </MenuList>
    ),
    sm: (
      // slightly larger mobile phones contain less essential buttons, menu still spans entire screen.
      <MenuList h='100vh' w="100vw">
        <MenuItem>
          {feedbackButton}
        </MenuItem>
        <MenuItem>
          {instagramButton}
        </MenuItem>
        <MenuItem>
          {shareButton}
        </MenuItem>
      </MenuList>
    ),
    md: (
      // in-between phase (probably ipads or similar devices) have a smaller menu
      <MenuList>
        <MenuItem>
          {feedbackButton}
        </MenuItem>
        <MenuItem>
          {instagramButton}
        </MenuItem>
        <MenuItem>
          {shareButton}
        </MenuItem>
      </MenuList>
    ),
    lg: (/** Nothing inside the menu burger. */ <MenuList></MenuList>),
  },{ssr:false});

  const menuBurger = (
    <Menu>
      <ButtonGroup variant='nav'>
        <MenuButton
          as={Button}
          leftIcon={<FiMenu strokeWidth='inherit' />}
          _hover={{ color: "var(--chakra-colors-rush-200)" }}
          fontWeight='inherit'
          transitionDuration='0.02s'
        />
        {menuBurgerButtons}
      </ButtonGroup>
    </Menu>
  );

  const navBarButtons = useBreakpointValue({
    base: (
      <ButtonGroup id='navbar-buttons' variant='nav' spacing='-2'>
        {menuBurger}
      </ButtonGroup>
    ),
    sm: (
      <ButtonGroup id='navbar-buttons' variant='nav' spacing='-2'>
        {<NewWebsiteButton />}{mapButton}{aboutButton}{menuBurger}
      </ButtonGroup>
    ),
    lg: (
      <ButtonGroup id='navbar-buttons' variant='nav' spacing='-2'>
        {<NewWebsiteButton />}{
          <Box padding='2' height='2.5rem'>
            <Divider orientation='vertical' borderColor='gray.300' />
          </Box>
        }{mapButton}{aboutButton}{feedbackButton}{instagramButton}{shareButton}
      </ButtonGroup>
    ),
  },{ssr:false});

  return (
    <Box __css={styles.navbar} {...rest} >
      <ReactLink to='/'>
        <Box __css={styles.title}>{pageTitle}</Box>
      </ReactLink>
      <Spacer />
      <Box __css={styles.buttons}>
        {navBarButtons}
      </Box>
    </Box>
  )
}