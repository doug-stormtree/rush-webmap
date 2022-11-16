
import React, { useRef, useState, useEffect } from 'react';
import { ChakraProvider, Flex, useBoolean } from '@chakra-ui/react';
import ContentPane from './components/ContentPane';
import LeafletControlGeocoder from './components/LeafletControlGeocoder';
import MapView from './components/MapView';
import { MapData } from './components/MapData';
import NavBar from './components/NavBar';
import theme from './theme/Theme';
import BeatTheHeat from './data/beattheheat/BeatTheHeat';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import QuestionMenuBar from './components/QuestionMenuBar';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// Collect Questions
const placeholder = { 
  title: 'Placeholder',
  question: 'Placeholder',
  learn: {
    text: [ "Lorem" ],
    initiatives: [],
  },
  act: {
    list: [ "Lorem" ],
    initiatives: [],
  },
  mapData: []
}
const Questions = { BeatTheHeat, placeholder };

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

  const [activeQuestion, setActiveQuestion] = useState(Questions.BeatTheHeat);

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