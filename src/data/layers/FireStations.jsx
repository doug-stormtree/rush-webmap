import { IconContext } from "react-icons";
import { mapPopupContent, pointToIcon } from "../LeafletStyleHelpers";
import { MdFireTruck } from 'react-icons/md';

const styleMap = new Map([
  ["Feature", {
    icon:(<IconContext.Provider value={{ color: "#da1b1bff", size: '18px' }}><MdFireTruck /></IconContext.Provider>),
    fill:"#464D77",
    legendText:"Fire Station"
  }],
])

const layer = {
  title: "Fire Stations",
  description: [
    {type: 'p', content: 'Location and information on the fire stations within the CRD.'},
    {type: 'p', content: 'Note: RUSH provides this information for educational purposes only and cannot guarantee that it is accurate or current.'},
  ],
  data: require('../geojson/Firestations.geojson'),
  shape: 'point',
  symbology: 'classified',
  property: "Status",
  styleMap: styleMap,
  options: {
    pointToLayer: (f,l) => pointToIcon(
      l,
      styleMap.get('Feature'),
      32,
      7
    ),
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
        f.properties['Name'],
        'Volunteer? ' + (f.properties['Volunteer'] ?? 'Unknown'),
        [
          (f.properties['Website'] ?? '#'),
        ],
        [
          'Website',
        ],
        null,
        null,
        null,
        null,
        'Note: RUSH provides this information for educational purposes only and cannot guarantee that it is accurate or current.'
        ), {offset: [0,-6]});
    }
  },
}

export default layer;