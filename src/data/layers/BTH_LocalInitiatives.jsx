import { mapPopupContent } from '../LeafletStyleHelpers';

const layer = {
  title: 'Local Initiatives',
  description: 'Learn more from these area specific community mapping initiatives by clicking one of these areas on the map and following the link.',
  data: require('../geojson/BeatTheHeat_Links.geojson'),
  shape: 'polygon',
  symbology: 'single',
  options: {
    style: {
      stroke: false,
      fill: true,
      opacity: 0.5,
      fillOpacity: 0.4,
      fillColor: 'rgba(253,218,13,1.0)',
      interactive: true,
    },
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
        f.properties['Name'],
        f.properties['Description'],
        f.properties['URL'],
        'Click here to view the ' + f.properties['Name']),
        {offset: [0,8]});
    }
  },
  questions: [
    { key: 'beat-the-heat', group: 'Community', active: true },
    { key: 'development', group: 'Community', active: false },
  ]
}

export default layer;