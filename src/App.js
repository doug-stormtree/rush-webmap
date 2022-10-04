import './App.css';
import NavBar from './components/NavBar';
import MapView from './components/MapView';
import ContentPane from './components/ContentPane';
import { Flex } from '@chakra-ui/react';
import React from 'react';

function App() {
  return (
    <Flex
      direction='column'
    >
      <NavBar />
      <MapView />
      <ContentPane h='40vh'/>
    </Flex>
  );
}

export default App;
