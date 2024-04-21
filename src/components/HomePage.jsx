import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';
import { FaArrowRight } from "react-icons/fa6";
import NavBar from './NavBar'
import { AboutPageSubTitle, AboutPageTitle, AboutPageButtonLabel } from '../data/TextContent';
import logos_xl from '../images/RUSH_Logos_xl.png';

export default function HomePage() {
  return (
    <Flex direction='column' minH='100vh'>
      <NavBar
        flex='0'
        position='sticky'
        top='0px'
        zIndex='10'
        boxShadow='0px 0px 8px 2px #888'
        getShareURL={() => 'https://whatstherush.ca'}
      />
      <Flex
        flex='1'
        direction='row'
        justifyContent='center'
        alignItems='center'
        backgroundImage={require('../images/RUSH_map_image.jpg')}
        backgroundSize='cover'
      >
        <Container
          bgColor='white'
          borderRadius='xl'
          marginY='1.5rem'
          marginX='0.5rem'
          padding='1.5rem'
          maxWidth={['40ch', '50ch', '75ch']}
        >
          <Text
            fontFamily='var(--chakra-fonts-title)'
            fontSize={['1.8rem', '2.25rem', '3.5rem']}
            fontWeight='bold'
            marginTop={['0.25rem', '1.0rem', '1.5rem']}
          >
            {AboutPageTitle}
          </Text>
          <Text
            fontFamily='var(--chakra-fonts-aleo)'
            fontSize={['1rem', '1.125rem', '1.25rem']}
            fontWeight='400'
            color='rgba(0,0,0,0.6)'
            marginTop={['0rem', '-0.125rem', '-0.5rem']}
          >
            {AboutPageSubTitle}
          </Text>
          <Flex direction='row' justifyContent='center'>
            <Link to='/app'>
              <Button
                marginY={['1.25rem', '2rem', '3rem']}
                colorScheme='green'
                rightIcon={<FaArrowRight />}
              >
                {AboutPageButtonLabel}
              </Button>
            </Link>
          </Flex>
          <Image src={logos_xl} />
        </Container>
      </Flex>
    </Flex>
  )
}