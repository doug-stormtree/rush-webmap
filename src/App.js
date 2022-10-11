import './App.css';
import NavBar from './components/NavBar';
import MapView from './components/MapView';
import ContentPane from './components/ContentPane';
import { Flex } from '@chakra-ui/react';
import React, { useRef } from 'react';

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
console.log(app.name);

function App() {
  const map = useRef(null);

  const invalidateMap = () => {
    if (map.current) {
      map.current.invalidateSize();
    }
  }

  return (
    <Flex
      direction='column'
      h='100vh'
      overflow='hidden'
    >
      <NavBar flex='0'/>
      <MapView flex='1' h='100%' mapRef={map} />
      <ContentPane flex='0' h='md' onToggle={invalidateMap}/>
    </Flex>
  );
}

export default App;