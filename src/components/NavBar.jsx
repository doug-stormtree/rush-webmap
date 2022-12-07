import React from 'react';
import {
  Box,
  Spacer,
  Text,
  useStyleConfig,
} from '@chakra-ui/react';
import LandingModalButton from './LandingModalButton';
import ShareModalButton from './ShareModalButton';

export default function NavBar(props) {
  const styles = useStyleConfig('NavBar');
  const { getShareURL, ...rest } = props;

  return (
    <Box __css={styles} {...rest} >
      <Text size="xl" m="auto 1em">RUSH</Text>
      <Spacer />
      <ShareModalButton getShareURL={getShareURL} />
      <LandingModalButton />
    </Box>
  )
}