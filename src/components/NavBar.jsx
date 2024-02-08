import React from 'react';
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
import { FiMessageSquare } from 'react-icons/fi';
import LandingModalButton from './LandingModalButton';
import ShareModalButton from './ShareModalButton';

export default function NavBar(props) {
  const styles = useMultiStyleConfig('NavBar');
  const { getShareURL, ...rest } = props;

  const pageTitle = useBreakpointValue({
    xl: '[RUSH] Resilient Urban Systems & Habitat',
    base: '[RUSH]',
  },{ssr:false, fallback:true});

  return (
    <Box __css={styles.navbar} {...rest} >
      <Box __css={styles.title}>{pageTitle}</Box>
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
        <ShareModalButton getShareURL={getShareURL} />
        <LandingModalButton />
      </ButtonGroup>
    </Box>
  )
}