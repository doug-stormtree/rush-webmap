import React from 'react';
import {
  Button,
  Box,
  Spacer,
  useStyleConfig,
} from '@chakra-ui/react';
import LandingModalButton from './LandingModalButton';

export default function NavBar(props) {
  const styles = useStyleConfig('NavBar');

  return (
    <Box __css={styles} {...props} >
      <Button
        variant = 'nav'
      >RUSH</Button>
      <Spacer />
      <Button
        variant = 'nav'
      >Events</Button>
      <Button
        variant = 'nav'
      >Initiatives</Button>
      <LandingModalButton
        variant = 'nav'
      >About</LandingModalButton>
      <Spacer />
    </Box>
  )
}