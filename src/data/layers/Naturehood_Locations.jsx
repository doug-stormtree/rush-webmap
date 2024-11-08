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
  description: '',
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
        ), {offset: [4.5,2]});
    }
  },
}

export default layer;