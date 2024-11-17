import { pointToIcon } from '../LeafletStyleHelpers';

const AnimalImages = {
  '1': { src: require('../png/AnimalImages/1.png'), alt: 'Black OysterCatcher' },
  '2': { src: require('../png/AnimalImages/2.png'), alt: 'Bufflehead Duck' },
  '3': { src: require('../png/AnimalImages/3.png'), alt: 'Coyote' },
  '4': { src: require('../png/AnimalImages/4.png'), alt: 'Bee' },
  '5': { src: require('../png/AnimalImages/5.png'), alt: 'Orca' },
  '6': { src: require('../png/AnimalImages/6.png'), alt: 'Cougar' },
  '7': { src: require('../png/AnimalImages/7.png'), alt: 'Spawning Salmon' },
  '8': { src: require('../png/AnimalImages/8.png'), alt: 'Great Blue Heron' },
}

const layer = {
  title: 'Naturehood Animal Images',
  description: 'Animal ambassadors who can guide you through our NatureHood. Keep an eye out for them as you visit NatureHood Locations in the region.',
  data: require('../geojson/Naturehood_Animals.geojson'),
  shape: 'polygon',
  symbology: 'single',
  options: {
    pointToLayer: (f,l) => pointToIcon(
      l,
      {icon: (
      <img
        width="120px"
        height="120px"
        src={AnimalImages[f.properties.image].src}
        alt={AnimalImages[f.properties.image].alt}
      />)},
      undefined,
      undefined,
      'rgb(0, 0, 0, 0)'
    ),
    onEachFeature: (f,l) => {
      l.bindTooltip(AnimalImages[f.properties.image].alt, {
        permanent: false,
        opacity: 0.8,
        className: 'leaflet-label'
      });
    }
  },
}

export default layer;