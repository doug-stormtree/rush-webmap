import { point } from 'leaflet';
import { mapPopupContent } from '../LeafletStyleHelpers';

const layer = {
  title: 'Municipalities',
  description: 'The administrative boundaries of the municipalities that fall within the Capital Regional District.',
  data: require('../geojson/Municipalities.geojson'),
  shape: 'polygon',
  symbology: 'single',
  options: {
    style: {
      stroke: true,
      color: '#EE0',
      dashArray: '2 12',
      fill: true,
      fillOpacity: 0,
      interactive: true, 
    },
    onEachFeature: (f,l) => {
      l.bindPopup(
        mapPopupContent(
          f.properties.ADMIN_AREA_ABBREVIATION,
          f.properties.ADMIN_AREA_NAME,
          ),
        {offset: point(0,8)});
    }
  },
  questions: [
    { key: 'development', group: 'default' }
  ]
}

export default layer;