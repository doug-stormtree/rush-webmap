import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import {
  Box,
  Button,
  ButtonGroup,
  Link,
  Spacer,
  Text,
  useBreakpointValue,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { FiInstagram, FiMessageSquare } from 'react-icons/fi';
import LandingModalButton from './LandingModalButton';
import ShareModalButton from './ShareModalButton';

export default function NavBar(props) {
  const styles = useMultiStyleConfig('NavBar');
  const { getShareURL, ...rest } = props;

  const pageTitle = useBreakpointValue({
    md: '[RUSH] Resilient Urban Systems & Habitat',
    base: '[RUSH]',
  },{ssr:false, fallback:true});

  return (
    <Box __css={styles.navbar} {...rest} >
      <ReactLink to='/'>
        <Box __css={styles.title}>{pageTitle}</Box>
      </ReactLink>
      <Spacer />
      <ButtonGroup variant='nav' spacing='-2'>
        <Link 
          href='https://forms.gle/rB1WaaLcUmEjxmMr8'
          isExternal
          color='orange.500'
        >
          <Button
            rightIcon={<FiMessageSquare strokeWidth='4'/>}
            fontWeight='extrabold'
          >Feedback</Button>
        </Link>
        <Link
          href='https://www.instagram.com/nature_rnd/'
          isExternal
        >
          <Button
            aria-label='@nature_rnd Instagram'
            rightIcon={<FiInstagram />}
          >Instagram</Button>
        </Link>
        <ShareModalButton getShareURL={getShareURL} />
        <LandingModalButton vh={props.vh} />
      </ButtonGroup>
    </Box>
  )
}