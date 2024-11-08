import { mapPopupContent, pointToIcon } from '../LeafletStyleHelpers';
import { ReactComponent as NatureHouseIcon } from '../svg/NatureHouse.svg';

const styleMap = new Map([
  ["Learning Centre", {
    icon: (<NatureHouseIcon/>),
    legendText: 'Learning Centre',
  }],
]);

const layer = {
  title: 'Learning Centre',
  description: 'These are some of the Nature Houses and educational institutions with Nature-based programming available across Greater Victoria.',
  data: require('../geojson/Naturehood_LearningCentres.geojson'),
  shape: 'point',
  symbology: 'classified',
  styleMap: styleMap,
  options: {
    pointToLayer: (f,l) => pointToIcon(
      l,
      styleMap.get("Learning Centre"),
      undefined,
      undefined,
      'rgba(0,0,0,0)'
    ),
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
        f.properties['Name'],
        f.properties['Closed'] ? 'Permenantly Closed' : '',
        f.properties['URL']
      ), {offset: [0,4]});
      l.bindTooltip(f.properties.Name, {
        permanent: true,
        opacity: 0.8,
        direction: 'bottom',
        offset: [0,-24],
        className: 'leaflet-label'
      });
    }
  },
}

export default layer;