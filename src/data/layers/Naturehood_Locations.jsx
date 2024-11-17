import { mapPopupContent, pointToIcon } from '../LeafletStyleHelpers';

const NatureHood_Icon = (
  <img
    width="30px"
    height="30px"
    src={require('../png/NatureHood_Logo.png')}
    alt={'NatureHood Location'}
  />
)

const styleMap = new Map([
  ["Naturehood Locations", {
    icon: (<NatureHood_Icon />),
    legendText: 'Naturehood Locations',
  }],
]);

const layer = {
  title: 'Naturehood Locations',
  description: 'A NatureHood is any place where you connect with Nature’s wonders – from observing a bee pollinate a flower in a planter box, to watching wild birds at a backyard feeder or local park, to witnessing the trees change with the passing of the seasons in your local forest. Look around and you will find Nature everywhere throughout the Greater Victoria NatureHood.',
  data: require('../geojson/Naturehood_NaturehoodLocations.geojson'),
  shape: 'point',
  symbology: 'classified',
  styleMap: styleMap,
  options: {
    pointToLayer: (f,l) => pointToIcon(
      l,
      {icon: (<NatureHood_Icon />)},
      undefined,
      undefined,
      'rgba(0,0,0,0)'
    ),
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
        f.properties['NAME'],
        f.properties['DESCRIPTION'],
        null, null,
        require('../jpg/' + f.properties.IMAGE + '.jpg')
        ), {offset: [0,0]});
    }
  },
}

export default layer;