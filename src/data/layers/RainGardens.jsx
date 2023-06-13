import { icon, marker } from 'leaflet';
import { mapPopupContent } from '../LeafletStyleHelpers';

const styleMap = new Map([
  ['641b6ff089e06d0100e0cf1d', {
    src: `https://new.opengreenmap.org/api-v1/icons/641b6ff089e06d0100e0cf1d/image/value`,
    legendText: 'Rain Garden'
  }],
  ['641b716b89e06d0100e0cf2c', {
    src: `https://new.opengreenmap.org/api-v1/icons/641b716b89e06d0100e0cf2c/image/value`,
    legendText: 'Bioswale'
  }],
  ['641b714889e06d0100e0cf24', {
    src: `https://new.opengreenmap.org/api-v1/icons/641b714889e06d0100e0cf24/image/value`,
    legendText: 'Curb Cut'
  }],
]);

const layer = {
  title: '1000 Rain Gardens',
  description: [
    {type: 'p', content: "This is the map for the Friends of Bowker Creek and Peninsula Streams Society '1000 Rain Gardens' mapping project!"},
    {type: 'link', content: 'Visit and contribute to this project at OpenGreenMap.', url: 'https://new.opengreenmap.org/browse/sites?map=63e6939eabcc260100514352'},
  ],
  data: require('../geojson/1000RainGardens.geojson'),
  shape: 'point',
  symbology: 'classified',
  styleMap: styleMap,
  options: {
    pointToLayer: (f,l) => {
      const ogmIcon = icon({
        iconUrl: `https://new.opengreenmap.org/api-v1/icons/${f.properties.icons[0]}/image/value`,
        iconSize: [48,48],
      })

      return f.properties?.icons[0] ? marker(l, {icon: ogmIcon}) : null;
    },
    onEachFeature: (f,l) => {
      const imageURL = f.properties.pictures[0]
        ? `https://new.opengreenmap.org/api-v1/pictures/${f.properties.pictures[0]}/picture/sm`
        : null;
      
      l.bindPopup(mapPopupContent(
          f.properties.name,
          '',
          `https://new.opengreenmap.org/browse/sites/${f.properties._id}`,
          'Show More at OpenGreenMap.org',
          imageURL
        ), {offset: [0,-6]});
    }
  },
  questions: [
    { key: 'protect-from-flooding', group: 'default', active: true },
    { key: 'development', group: 'Water', active: false },
  ]
}

export default layer;