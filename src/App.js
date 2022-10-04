import './App.css';
import NavBar from './components/NavBar';
import MapView from './components/MapView';
import ContentPane from './components/ContentPane';
import { Flex } from '@chakra-ui/react';
import React from 'react';

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
