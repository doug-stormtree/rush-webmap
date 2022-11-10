import React, { useRef, useState, useEffect } from 'react';
import { ChakraProvider, Flex, useBoolean } from '@chakra-ui/react';
import ContentPane from './components/ContentPane';
import LeafletControlGeocoder from './components/LeafletControlGeocoder';
import MapView from './components/MapView';
import { Questions, MapData } from './components/MapData';
import MenuPane from './components/MenuPane';
import NavBar from './components/NavBar';
import theme from './theme/Theme';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
  }, [openContentFlag]);

  return (
    <ChakraProvider theme={theme}>
      <Flex
        direction='column'
        h={vh}
        overflow='hidden'
      >
        <NavBar flex='0'/>
        <Flex flex='1' direction='row' h='100%' minH='24px' w='100%'>
          <MapView flex='1' h='100%' mapRef={map}>
            <LeafletControlGeocoder />
            <MapData question={activeQuestion} />
          </MapView>
          <MenuPane 
            flex='0'
            w='md'
            onToggle={invalidateMap}
            activeQuestion={activeQuestion}
            setQuestion={setActiveQuestion}
          />
        </Flex>
        <ContentPane
          flex='0'
          h='md'
          {...(openContentFlag ? {minH: 'md'} : {})}
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