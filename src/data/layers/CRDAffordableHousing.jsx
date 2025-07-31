import { IconContext } from "react-icons";
import { mapPopupContent, pointToIcon } from "../LeafletStyleHelpers";
import { FaRegBuilding } from 'react-icons/fa';

const iconStyle = {
  icon: (<IconContext.Provider value={{ color: "#3876e8ff", size: '18px' }}><FaRegBuilding /></IconContext.Provider>),
  legendText:"Affordable Housing Property"
}

const layer = {
  title: "CRD Affordable Housing",
  description: [
    {type: 'p', content: 'The CRHC is Vancouver Island\'s largest housing non-profit which now provides 2028 low to moderate income homes across 8 municipalities within the CRD (with more units to come).'},
    {type: 'link', url: 'https://www.crd.ca/media/file/capital-region-housing-corporation-2024-annual-reportpdf', content: 'Report'},
    {type: 'p', content: 'For the most up to date information on which houses are accepting applications go to CRHC:'},
    {type: 'link', url: 'https://www.capitalregionhousing.ca/find-home/view-our-properties', content: 'View Our Properties | Capital Region Housing Corporation'},
  ],
  data: require('../geojson/AffordableHousing.geojson'),
  shape: 'point',
  symbology: 'single',
  icon: iconStyle,
  options: {
    pointToLayer: (f,l) => pointToIcon(l, iconStyle, 32, 7),
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
        'CRD Affordable Housing',
        f.properties['Name'],
        ), {offset: [0,-6]});
    }
  },
}

export default layer;