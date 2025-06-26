import { IconContext } from "react-icons";
import { mapPopupContent, pointToIcon } from "../LeafletStyleHelpers";
import { FaRegBuilding } from 'react-icons/fa';

const styleMap = new Map([
  ["Feature", {
    icon:(<IconContext.Provider value={{ color: "#464D77", size: '18px' }}><FaRegBuilding /></IconContext.Provider>),
    fill:"#464D77",
    legendText:"Proposed Housing Development"
  }],
])

const layer = {
  title: "CRD Proposed Housing Developments",
  description: [
    {type: 'p', content: 'Proposed and current housing development projects focus on developing affordable and supportive housing units within the CRD. More information on each project can be found here:'},
    {type: 'link', content: 'Projects | Capital Regional District', url: 'https://www.crd.ca/projects'},
    {type: 'p', content: 'Note: RUSH provides this information for educational purposes only and cannot guarantee that it is accurate or current.'},
  ],
  data: require('../geojson/ProposedDevelopments.geojson'),
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
        [
          'Status: ' + (f.properties['Status'] ?? 'Unknown'),
          'Current Units: ' + (f.properties['CrntUnits'] ?? 'Unknown'),
          'Proposed Units: ' + (f.properties['PrpsdUnits'] ?? 'Unknown'),
          'Timeline: ' + (f.properties['EstmtdTime'] ?? 'Unknown'),
          'Estimated Cost: ' + (f.properties['EstmtdCost'] ?? 'Unknown'),
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