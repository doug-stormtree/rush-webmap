
import React, { useRef, useState, useEffect } from 'react';
import { ChakraProvider, Flex, useBoolean } from '@chakra-ui/react';
import ContentPane from './components/ContentPane';
import LeafletControlGeocoder from './components/LeafletControlGeocoder';
import MapView from './components/MapView';
import { MapData } from './components/MapData';
import NavBar from './components/NavBar';
import theme from './theme/Theme';
import QuestionMenuBar from './components/QuestionMenuBar';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Questions
import BeatTheHeat from './data/beattheheat/BeatTheHeat';
import EatLocal from './data/eatlocal/EatLocal';
import Naturehood from './data/naturehood/Naturehood';
import Coastal from './data/coastal/Coastal';
import Power from './data/power/Power';
import Footprint from './data/footprint/Footprint';
import Culture from './data/culture/Culture';
import Development from './data/development/Development';
export const Questions = {
  'BeatTheHeat': BeatTheHeat,
  'EatLocal': EatLocal,
  'Naturehood': Naturehood,
  'Coastal': Coastal,
  'Power': Power,
  'Footprint': Footprint,
  'Culture': Culture,
  'Development': Development,
};

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATMKv3U-fIUv66xfzwT320IAgqxogKjew",
  authDomain: "rush-webapp.firebaseapp.com",
  projectId: "rush-webapp",
  storageBucket: "rush-webapp.appspot.com",
  messagingSenderId: "475584087043",
  appId: "1:475584087043:web:b7f77d9656f9721da37a36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (app === null) {console.log("Firebase did not initialize.")};

function App() {
  // Fix window height to viewport on web and mobile
  const [vh, setVh] = useState(`${window.innerHeight}px`);
  const documentHeight = () => { setVh(`${window.innerHeight}px`); }
  useEffect(() => {
    window.addEventListener('resize', documentHeight);
    return () => {
      window.removeEventListener('resize', documentHeight);
    }
  });

  // Leaflet map reference
  const map = useRef(null);
  // Function to invalidate Leaflet map size
  const invalidateMap = () => { if (map.current) map.current.invalidateSize(); }

  const [activeQuestion, setActiveQuestion] = useState('BeatTheHeat');

  const [openContentFlag, setOpenContentFlag] = useBoolean(true);
  useEffect(() => {
    invalidateMap();
  }, [openContentFlag, activeQuestion]);

  return (
    <ChakraProvider theme={theme}>
      <Flex
        direction='column'
        h={vh}
      >
        <NavBar flex='0'/>
        <MapView flex='1' h='100%' mapRef={map}>
          <LeafletControlGeocoder />
          <MapData question={activeQuestion} />
        </MapView>
        <QuestionMenuBar
          flex='0'
          questions={Questions}
          activeQuestion={activeQuestion}
          setActiveQuestion={setActiveQuestion}
        />
        <ContentPane
          flex='4'
          maxH='40%'
          marginTop='auto'
          openFlag={openContentFlag}
          setOpenFlag={setOpenContentFlag}
          question={activeQuestion}
        />
      </Flex>
    </ChakraProvider>
  );
}

export default App;