import { pointToIcon } from '../LeafletStyleHelpers';

const layer = {
  title: 'SENĆOŦEN Place Names',
  description: 'Place names in the SENĆOŦEN language of the W̱SÁNEĆ People. NatureHood recognizes that language is critical for connecting the WSÁNEĆ speaking peoples to their culture, spirituality, identity and land.',
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
      l.bindTooltip(f.properties["SENĆOŦEN"], {
        permanent: true,
        opacity: 0.8,
        direction: 'top',
        className: 'leaflet-label'
      });
    }
  },
}

export default layer;