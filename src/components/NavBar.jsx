import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import {
  Box,
  Button,
  ButtonGroup,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useBreakpointValue,
  useMediaQuery,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { FiInstagram, FiMessageSquare, FiHelpCircle, FiMap, FiMenu } from 'react-icons/fi';
//import LandingModalButton from './LandingModalButton';
import ShareModalButton from './ShareModalButton';

export default function NavBar(props) {

  const styles = useMultiStyleConfig('NavBar');
  const { getShareURL, ...rest } = props;

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
          {fullPageTitle ? "Map" : 'Home'}
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

  const menuBurgerButtons = useBreakpointValue({
    base: (
      // smallest mobile phones contain all buttons + menu that spans the entire screen.
      <MenuList h='100vh' w="100vw">
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
        {mapButton}{aboutButton}{menuBurger}
      </ButtonGroup>
    ),
    lg: (
      <ButtonGroup id='navbar-buttons' variant='nav' spacing='-2'>
        {mapButton}{aboutButton}{feedbackButton}{instagramButton}{shareButton}
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