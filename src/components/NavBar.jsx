import React from 'react';
import {
  Box,
  Spacer,
  Text,
  useStyleConfig,
} from '@chakra-ui/react';
import LandingModalButton from './LandingModalButton';

export default function NavBar(props) {
  const styles = useStyleConfig('NavBar');

  return (
    <Box __css={styles} {...props} >
      <Text size="xl" m="auto 1em">RUSH</Text>
      <Spacer />
      <LandingModalButton />
    </Box>
  )
}