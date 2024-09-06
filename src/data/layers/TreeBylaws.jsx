import { mapPopupContent, setStyleIfSupported } from '../LeafletStyleHelpers';

const title = 'Tree Protection Bylaws'
const layer = {
  title: title,
  description: [
    {type: 'p', content: 'The municipal governments of the Capital Regional District have enacted various bylaws concerning tree protection. Tree protection generally concerns the cutting, damage, and removal of trees as well as requirements for replacement.'},
    {type: 'p', content: 'Click on the map within one of the municipal boundaries to access their bylaw.'},
  ],
  data: require('../geojson/TreeBylaws.geojson'),
  shape: 'polygon',
  symbology: 'single',
  options: {
    style: {
      stroke: true,
      opacity: 0.7,
      color: '#4B6858',
      dashArray: '',
      lineCap: 'butt',
      lineJoin: 'miter',
      weight: 3,
      fill: true,
      fillOpacity: 0.1,
      fillColor: '#ACC3B6',
      interactive: true,
    },
    onEachFeature: (f,l) => {
      l.bindPopup(
        mapPopupContent(
          title,
          f.properties.BYLAW_URL === ""
            ? `The ${f.properties.ADMIN_AREA_NAME} does not currently have a Tree Protection bylaw.`
            : `The ${f.properties.ADMIN_AREA_NAME} has a Tree Protection bylaw which can be accessed at the link below.`,
          f.properties.BYLAW_URL,
          null,
          null,
          null,
          null,
          'Note: RUSH provides this information for educational purposes only and cannot guarantee that it is accurate or current.'
          ),
        {offset: [0,8]});
      l.on({
        mouseover: (e) => setStyleIfSupported(e, { fillOpacity: 0.7 }),
        mouseout: (e) => setStyleIfSupported(e, { fillOpacity: 0.1 }),
      });
    }
  },
}

export default layer;