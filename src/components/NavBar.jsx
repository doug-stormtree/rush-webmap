import React from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Link,
  Spacer,
  Text,
  useBreakpointValue,
  useStyleConfig,
} from '@chakra-ui/react';
import { FiMessageSquare } from 'react-icons/fi';
import LandingModalButton from './LandingModalButton';
import ShareModalButton from './ShareModalButton';

export default function NavBar(props) {
  const styles = useStyleConfig('NavBar');
  const { getShareURL, ...rest } = props;

  const pageTitle = useBreakpointValue({
    xl: '[RUSH] Resilient Urban Systems & Habitat',
    base: '[RUSH]',
  },{ssr:false, fallback:true});

  return (
    <Box __css={styles} {...rest} >
      <Text size="xl" m="auto 1em" fontWeight='medium'>{pageTitle}</Text>
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
        <LandingModalButton vh={props.vh} />
      </ButtonGroup>
    </Box>
  )
}