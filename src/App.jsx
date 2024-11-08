
import React, { createContext, useRef, useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Flex,
} from '@chakra-ui/react';
import MapView, { DEFAULT_ZOOM, DEFAULT_CENTER } from './components/MapView';
import MapData from './components/MapData';
import MapBasemap from './components/MapBasemap';
import NavBar from './components/NavBar';
import theme from './theme/Theme';
import { LegendPane } from './components/Legend'; // eslint-disable-line no-unused-vars
import { latLng } from 'leaflet';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Questions
import Questions, { useActiveQuestionStore } from './data/QuestionStore';
import { PlacesAutocomplete } from './components/PlacesAutocomplete'; // eslint-disable-line no-unused-vars
import Sandbox from './components/Sandbox';
import QuestionCardBar from './components/QuestionCardBar';
import HomePage from './components/HomePage';
import ContentInitiativeContainer from './components/ContentInitiativeContainer';
import RabbitHoleDrawer from './components/RabbitHoleDrawer';
import TutorialPopup from './components/TutorialPopup';
import AboutPage from './components/AboutPage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATMKv3U-fIUv66xfzwT320IAgqxogKjew",
  authDomain: "rush-webapp.firebaseapp.com",
  projectId: "rush-webapp",
  storageBucket: "rush-webapp.appspot.com",
  messagingSenderId: "475584087043",
  appId: "1:475584087043:web:b7f77d9656f9721da37a36",
  measurementId: "G-F052FD5Y1T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (app === null) {console.log("Firebase did not initialize.")};
const analytics = getAnalytics(app); // eslint-disable-line no-unused-vars

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/about"
            element={<AboutPage />}
          />
          <Route
            path="/app"
            element={<WebMap />}
          />
          <Route
            path="/app/q/:question/z/:zoom/c/:center"
            element={<WebMap />}
          />
          <Route
            path="/app/q/:question"
            element={<WebMap />}
          />
          <Route
            path="/sandbox"
            element={<Sandbox />}
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
  
  // Check route params and set defaults
  const params = useParams();
  const { question, zoom, center } = validateParams(params);

  // Active Question State
  const { activeQuestion, setActiveQuestion } = useActiveQuestionStore((state) => ({activeQuestion: state.activeQuestion, setActiveQuestion: state.setActiveQuestion}))
  useEffect(() => {
    setActiveQuestion(question)
  }, [ params, question, setActiveQuestion ])

  // Leaflet map reference
  const map = useRef(null);
  // Function to invalidate Leaflet map size
  const invalidateMap = () => { 
    if (map.current) map.current.invalidateSize();
  }
  useEffect(invalidateMap, [activeQuestion, vh]);

  // Function to get map state for URL sharing mode
  const getShareURL = () => {
    const currHost = `${window.location.protocol}//${window.location.hostname}`;
    const zoom = map.current.getZoom().toString();
    const center = map.current.getCenter();
    const lat = center.lat.toFixed(6);
    const lng = center.lng.toFixed(6);
    return `${currHost}/app/q/${activeQuestion}/z/${zoom}/c/${lat},${lng}`;
  }

  return (
    <Box
      minH={vh}
    >
      <NavBar
        position='sticky'
        top='0px'
        zIndex='10'
        boxShadow='0px 0px 8px 2px #888'
        getShareURL={getShareURL}
        vh={vh}
      />
      <QuestionCardBar />
      <Flex
        h={`calc(100vh - 2.5rem)`}
        position='sticky'
        top='2.5rem'
        direction='row'
        //zIndex='-1'
      >
        <MapView
          flex='1'
          mapRef={map}
          zoom={zoom}
          center={center}
        >
          <PlacesAutocomplete />
          <MapBasemap />
          <MapData />
        </MapView>
        <TutorialPopup />
      </Flex>
      <ContentInitiativeContainer />
      <RabbitHoleDrawer />
      {/*
      <IconButton
        icon={<FaChevronUp />}
        onClick={() => window.scrollTo({top:0,behavior:'smooth'})}
        aria-label='scroll to top'
        title='Scroll to top'
        position='sticky'
        bottom='16px'
        left='calc(100% - 56px)'
      />
      */}
    </Box>
  );
}

function validateParams(params) {
  const valid = {
    question: params?.question && Questions.has(params.question)
      ? params.question
      : undefined,
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