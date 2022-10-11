import './App.css';
import NavBar from './components/NavBar';
import MapView from './components/MapView';
import ContentPane from './components/ContentPane';
import { Flex } from '@chakra-ui/react';
import React, { useRef } from 'react';
import * as HeatDomes from './data/HeatDomes.json';
import * as AC_Buildings from './data/AC_Buildings.json';
import { GeoJSON } from 'react-leaflet/GeoJSON';
import { divIcon, marker } from 'leaflet';
import ReactDOMServer from "react-dom/server";
import { ReactComponent as CommunityCtrIcon } from './svg/cc.svg';
import { ReactComponent as LibraryIcon } from './svg/lib.svg';

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
  const style_HeatDomes = {
    opacity: 0.5,
    color: 'rgba(189,17,20,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1.0,
    fill: true,
    fillOpacity: 0.7,
    fillColor: 'rgba(189,17,20,1.0)',
    interactive: true,
  }

  function point(feature, latlng){
    const icon = feature.properties.Type === "Library" ? (
        <LibraryIcon />
      ) : (
        <CommunityCtrIcon />
      );

    return marker(latlng, {
      icon: divIcon({
        className: "",
        iconSize: [40, 40],
        iconAnchor: [24, 24],
        html: ReactDOMServer.renderToString(icon),
      })
    });
  }

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
      h='100vh'
      overflow='hidden'
    >
      <NavBar flex='0'/>
      <MapView flex='1' h='100%' mapRef={map}>
        <GeoJSON
          data={AC_Buildings}
          pointToLayer={(a, b) => point(a, b)}
        />
        <GeoJSON
          data={HeatDomes}
          style={style_HeatDomes}
        />
      </MapView>
      <ContentPane flex='0' h='md' onToggle={invalidateMap}/>
    </Flex>
  );
}

export default App;