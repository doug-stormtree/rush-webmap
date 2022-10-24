import React from 'react';
import { divIcon, marker } from 'leaflet';
import ReactDOMServer from "react-dom/server";
import { ReactComponent as CommunityCtrIcon } from '../svg/cc.svg';
import { ReactComponent as LibraryIcon } from '../svg/lib.svg';
import * as HeatDomes from '../data/HeatDomes.json';
import * as AC_Buildings from '../data/AC_Buildings.json';
import { GeoJSON } from 'react-leaflet/GeoJSON';

export const Questions = {
  BeatTheHeat: {
    title: "How can I beat the heat?",
    description: "",
    story: [
      "The Sensitive Ecosystems Inventory (SEI) of East Vancouver Island project has been responsible for tracking sensitive ecosystems for many regions within the Capital Regional District (CRD). Their data is what you see on the map. Their research identifies different sensitive ecosystems and allows us to understand better how these ecosystems are at risk.",
      "Some of the most significant factors responsible for the degradation and ecosystem damage are human usage and the introduction of invasive species. These ecosystems are shrinking, often due to development or land use changes. The areas on this map do not include private lands, provincial & federal lands, or Indigenous reservations. It is important to understand that each of these ecosystems plays a crucial role in the ecological well-being of this area. Damage to one sensitive ecosystem will affect another. These ecosystems in this area of the coast are known for their biodiversity.",
      "Researchers in Japan found that after “forest bathing,” participants had been breathing in phytoncides (essential wood oils) that had antimicrobial properties. Participants had increased NK (natural killer) cells, responsible for the immune response that kills tumours and viruses. Another study sprayed cedar essential oils in a hotel room before guests stayed, which had the same effect on their immune systems. So if you need an excuse to ditch school and go to the beach or buy more house plants, do it! It's good for your health!"
    ],
    tips: [
      "Learn to identify invasive species and how to remove them safely. Get involved with local efforts to remove invasive species in your area. Check out the events map to learn more!",
      "Learn about what native species are in your area. Look for local native plant sales when you shop for indoor and outdoor plants.",
      "Avoid the use of pesticides and chemicals in your garden.",
      "Next time you visit the beach or go on a hike, leave the speaker at home! Take a moment to enjoy the sounds of nature. Loud noises can disturb birds and cause them to abandon their eggs. Loud noise can also disrupt communication between wildlife (e.g., birds).",
      "Enjoy wildlife from afar. Avoid approaching or touching wildlife or their nesting habitats.",
      "Stay on designated paths and trails to avoid damaging vegetation and wildlife habitats.",
      "Keep your pet on a leash when taking them on walks to avoid damage to sensitive ecosystems.",
      "Be a mindful water user - use rainwater systems to water your garden, plants, and gardens during cooler hours to prevent evaporation."
    ],
    mapLayers: (
      <>
        <GeoJSON
          data={AC_Buildings}
          pointToLayer={(feature, latlng) => {
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
          }}
        />
        <GeoJSON
          data={HeatDomes}
          style={{
            opacity: 0.5,
            color: 'rgba(189,17,20,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 0.7,
            fillColor: 'rgba(189,17,20,1.0)',
            interactive: true
          }}
        />
      </>
    ),
  },
  LightFootprint: {
    title: "What is the \"light footprint\" way to get there?",
    description: "",
    story: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
    tips: ["Lorem ipsum dolor sit amet."],
    mapLayers: (<></>),
  },
  GrowMyEcosystem: {
    title: "How do I grow my ecosystem?",
    description: "",
    story: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
    tips: ["Lorem ipsum dolor sit amet."],
    mapLayers: (<></>),
  },
  WhichEcosystem: {
    title: "Which ecosystem do I belong to here?",
    description: "",
    story: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
    tips: ["Lorem ipsum dolor sit amet."],
    mapLayers: (<></>),
  },
  ForNature: {
    title: "What can I do for Nature?",
    description: "",
    story: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
    tips: ["Lorem ipsum dolor sit amet."],
    mapLayers: (<></>),
  },
  OceanFriendly: {
    title: "How can I be ocean friendly?",
    description: "",
    story: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
    tips: ["Lorem ipsum dolor sit amet."],
    mapLayers: (<></>),
  },
  DevelopHere: {
    title: "Is development here a good idea?",
    description: "",
    story: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
    tips: ["Lorem ipsum dolor sit amet."],
    mapLayers: (<></>),
  },
  LocalEats: {
    title: "Where are my local eats?",
    description: "",
    story: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
    tips: ["Lorem ipsum dolor sit amet."],
    mapLayers: (<></>),
  },
  WaterEvents: {
    title: "Is my community vulnerable to water events?",
    description: "",
    story: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
    tips: ["Lorem ipsum dolor sit amet."],
    mapLayers: (<></>),
  },
}

export const MapData = ({ question }) => {
  if (question && question.hasOwnProperty('mapLayers')) {
    return question.mapLayers;
  } else return (<></>);
}