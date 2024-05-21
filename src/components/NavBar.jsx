import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import {
  Box,
  Button,
  ButtonGroup,
  Link,
  Spacer,
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
    base: '[RUSH]',
    xl: '[RUSH] Resilient Urban Systems & Habitat',
  },{ssr:false});
  
  const navLabels = useBreakpointValue({
    base: {
      feedback: 'Feedback',
      social: '',
      share: '',
      about: '',
    },
    md: {
      feedback: 'Feedback',
      social: 'Instagram',
      share: 'Share',
      about: 'About',
    },
  },{ssr:false});

  return (
    <Box __css={styles.navbar} {...rest} >
      <ReactLink to='/'>
        <Box __css={styles.title}>{pageTitle}</Box>
      </ReactLink>
      <Spacer />
      <Box __css={styles.buttons}>
        <ButtonGroup variant='nav' spacing='-2'>
          <Link 
            href='https://forms.gle/rB1WaaLcUmEjxmMr8'
            isExternal
          >
            <Box __css={styles.buttonHighlight}>
              <Button
                rightIcon={<FiMessageSquare strokeWidth='inherit'/>}
                fontWeight='inherit'
              >{navLabels?.feedback}</Button>
            </Box>
          </Link>
          <Link
            href='https://www.instagram.com/nature_rnd/'
            isExternal
          >
            <Button
              aria-label='@nature_rnd Instagram'
              rightIcon={<FiInstagram strokeWidth='inherit' />}
              fontWeight='inherit'
            >{navLabels?.social}</Button>
          </Link>
          <ShareModalButton
            label={navLabels?.share}
            getShareURL={getShareURL}
          />
          <LandingModalButton
            label={navLabels?.about}
            vh={props.vh}
          />
        </ButtonGroup>
      </Box>
    </Box>
  )
}