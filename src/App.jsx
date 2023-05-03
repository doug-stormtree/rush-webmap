
import React, { createContext, useRef, useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from 'react-router-dom';
import {
  useBoolean,
  useBreakpointValue,
  ChakraProvider,
  Box,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { FaChevronUp } from 'react-icons/fa';
import ContentPane from './components/ContentPane';
import LeafletControlGeocoder from './components/LeafletControlGeocoder';
import MapView, { DEFAULT_ZOOM, DEFAULT_CENTER } from './components/MapView';
import { MapData } from './components/MapData';
import NavBar from './components/NavBar';
import theme from './theme/Theme';
import QuestionMenuBar from './components/QuestionMenuBar';
import { LegendPane } from './components/Legend';
import { latLng } from 'leaflet';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Questions
import Questions from './data/Questions';

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
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<WebMap />}
          />
          <Route
            path="/q/:question/z/:zoom/c/:center"
            element={<WebMap />}
          />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;

export const ShareURLContext = createContext();

function WebMap() {
  // Fix window height to viewport on web and mobile
  const [vh, setVh] = useState(`${window.innerHeight}px`);
  const documentHeight = () => { setVh(`${window.innerHeight}px`); }
  useEffect(() => {
    window.addEventListener('resize', documentHeight);
    return () => {
      window.removeEventListener('resize', documentHeight);
    }
  });
  
  // Content Pane Collapse State
  const [openContentFlag, setOpenContentFlag] = useBoolean(true);
  
  // Check route params and set defaults
  const params = useParams();
  const { question, zoom, center } = validateParams(params);

  // Active Question State
  const [activeQuestion, setActiveQuestion] = useState(question);

  // Leaflet map reference
  const map = useRef(null);
  // Function to invalidate Leaflet map size
  const invalidateMap = () => { 
    if (map.current) map.current.invalidateSize();
  }
  useEffect(invalidateMap, [openContentFlag, activeQuestion, vh]);

  // Function to get map state for URL sharing mode
  const getShareURL = () => {
    const currHost = `${window.location.protocol}//${window.location.hostname}`;
    const zoom = map.current.getZoom().toString();
    const center = map.current.getCenter();
    const lat = center.lat.toFixed(6);
    const lng = center.lng.toFixed(6);
    return `${currHost}/q/${activeQuestion}/z/${zoom}/c/${lat},${lng}`;
  }

  // Handle Legend Display on Small Screens
  const smallDisplay = useBreakpointValue({
    xl: false,
    base: true,
  },{ssr:false, fallback:true});

  return (
    <Box
      minH={vh}
    >
      <NavBar
        h='40px'
        position='sticky'
        top='0px'
        zIndex='10'
        boxShadow='0px 0px 8px 2px #888'
        getShareURL={getShareURL}
      />
      <Flex
        h={`60vh`}
        position='sticky'
        top='40px'
        direction='row'
        //zIndex='-1'
      >
        <MapView
          flex='1'
          mapRef={map}
          zoom={zoom}
          center={center}
        >
          <LeafletControlGeocoder />
          <MapData question={activeQuestion} />
        </MapView>
        { smallDisplay
          ? null
          : <LegendPane flex='0' activeQuestion={activeQuestion} />
        }
      </Flex>
      <QuestionMenuBar
        style={{
          backgroundColor:'white',
          position:'sticky',
          top:'40px',
          zIndex:'9',
          //borderRadius:'16px 16px 0 0',
          boxShadow:'0px 0px 8px 2px #888'
        }}
        activeQuestion={activeQuestion}
        setActiveQuestion={setActiveQuestion}
      />
      <ContentPane
        backgroundColor='white'
        position='sticky'
        openFlag={openContentFlag}
        setOpenFlag={setOpenContentFlag}
        question={activeQuestion}
      />
      <IconButton
        icon={<FaChevronUp />}
        onClick={() => window.scrollTo({top:0,behavior:'smooth'})}
        aria-label='scroll to top'
        title='Scroll to top'
        position='sticky'
        bottom='16px'
        left='calc(100% - 56px)'
      />
    </Box>
  );
}

function validateParams(params) {
  const valid = {
    question: params?.question && Questions.has(params.question)
      ? params.question
      : Questions.keys().next().value,
    zoom: params?.zoom && !Number.isNaN(parseInt(params.zoom))
      ? parseInt(params.zoom)
      : DEFAULT_ZOOM,
    center: params?.center && checkStringLatLng(params.center)
      ? stringToLatLng(params.center)
      : DEFAULT_CENTER,
  }
  return valid;
}

function checkStringLatLng(str) {
  // Regular expression to check if string is a latitude and longitude
  const regexExp = /^((-?|\+?)?\d+(\.\d+)?),\s*((-?|\+?)?\d+(\.\d+)?)$/gi;

  return regexExp.test(str);
}

function stringToLatLng(str) {
  const lat = parseFloat(str.split(',')[0]);
  const lng = parseFloat(str.split(',')[1]);
  return latLng(lat, lng);
}