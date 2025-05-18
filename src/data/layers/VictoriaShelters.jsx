import { IconContext } from "react-icons";
import { mapPopupContent, pointToIcon } from "../LeafletStyleHelpers";
import { MdOutlineNightShelter } from 'react-icons/md';

const YES = '✅'
const NO = '❌'
const checkBoxFromYesNo = (str) => {
    if (str === 'Yes') return YES;
    return NO;
}

const styleMap = new Map([
  ["Shelter", {
    icon:(<IconContext.Provider value={{ color: "#A24936", size: '22px' }}><MdOutlineNightShelter /></IconContext.Provider>),
    fill:"#A24936",
    legendText:"Shelters"
  }],
])

const layer = {
  title: "Shelters",
  description: [
    {type: 'p', content: 'Location and information on Victoria’s shelters.'},
  ],
  data: require('../geojson/VictoriaShelters.geojson'),
  shape: 'point',
  symbology: 'classified',
  property: "TYPE",
  styleMap: styleMap,
  options: {
    pointToLayer: (f,l) => pointToIcon(
      l,
      styleMap.get('Shelter'),
      32,
      5
    ),
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
        f.properties['Name'],
        [
          'Address: ' + f.properties['Address'],
          'Phone: ' + f.properties['Phone'],
          'Intake Information: ' + f.properties['Intake'],
          'Gender: ' + f.properties['Gender'],
          'Age: ' + f.properties['Age'],
          'Pets: ' + checkBoxFromYesNo(f.properties.Pets),
          'Wheelchair: ' + checkBoxFromYesNo(f.properties.Wheelchair),
          'Storage: ' + checkBoxFromYesNo(f.properties.Storage),
        ],
        null,
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