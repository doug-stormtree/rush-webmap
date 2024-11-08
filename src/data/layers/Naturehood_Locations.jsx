import { mapPopupContent, pointToIcon } from '../LeafletStyleHelpers';
import TextCircleIcon from '../../components/TextCircleIcon';

const styleMap = new Map([
  ["Naturehood Locations", {
    icon: (<TextCircleIcon label='1' />),
    legendText: 'Naturehood Locations',
  }],
]);

const layer = {
  title: 'Naturehood Locations',
  description: 'A NatureHood is any place where you connect with nature’s wonders – from observing a bee pollinate a flower in a planter box, to watching wild birds at a backyard feeder or local park, to witnessing the trees change with the passing of the seasons in your local forest. Look around and you will find nature everywhere throughout the Greater Victoria NatureHood.',
  data: require('../geojson/Naturehood_NaturehoodLocations.geojson'),
  shape: 'point',
  symbology: 'classified',
  styleMap: styleMap,
  options: {
    pointToLayer: (f,l) => pointToIcon(
      l,
      {icon: (<TextCircleIcon label={f.properties.ID} />)},
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
        ), {offset: [0,6]});
    }
  },
}

export default layer;