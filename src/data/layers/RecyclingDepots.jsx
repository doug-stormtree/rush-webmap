import { mapPopupContent, pointToIcon } from '../LeafletStyleHelpers';
import { ReactComponent as RecyclingIcon } from '../svg/Recycling.svg';

const RecyclingIconStyle = {
  fill: 'rgb(15,86,229)',
  icon: <RecyclingIcon />
}

const layer = {
  title: 'Recycling Depots',
  description: 'Find where you can recycle a wide range of household materials in your neighbourhood. Visit the website of the specific depot to confirm what is accepted there by clicking on it.',
  data: require('../geojson/RecyclingDepots.geojson'),
  shape: 'point',
  symbology: 'single',
  icon: RecyclingIconStyle,
  options: {
    pointToLayer: (f,l) => pointToIcon(l, RecyclingIconStyle),
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
        f.properties['Name'],
        f.properties['Address'],
        f.properties['URL'],
        f.properties['URL']
        ), {offset: [0,-6]});
    }
  },
}

export default layer;