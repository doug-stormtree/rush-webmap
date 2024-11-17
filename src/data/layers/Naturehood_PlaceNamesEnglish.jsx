import { pointToIcon } from '../LeafletStyleHelpers';

const layer = {
  title: 'English Place Names',
  description: 'Place names in the English language that correspond to the SENĆOŦEN names above.',
  data: require('../geojson/Naturehood_PlaceNames.geojson'),
  shape: 'polygon',
  symbology: 'single',
  options: {
    style: {
      interactive: false,
    },
    pointToLayer: (f,l) => pointToIcon(
      l,
      {icon: null},
      undefined,
      undefined,
      'rgb(0, 0, 0, 0)'
    ),
    onEachFeature: (f,l) => {
      l.bindTooltip(f.properties["English"], {
        permanent: true,
        opacity: 0.8,
        direction: 'bottom',
        className: 'leaflet-label'
      });
    }
  },
}

export default layer;