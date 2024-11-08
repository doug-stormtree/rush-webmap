import { mapPopupContent, pointToIcon } from '../LeafletStyleHelpers';

const TextCircleIcon = (props) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#FFAA2D"/>
      <text fill="black" x="16" y="24" fontWeight="bold" fontSize="22" textAnchor="middle">
        {props.children}
      </text>
    </svg>
  )
}

const styleMap = new Map([
  ["Naturehood Locations", {
    icon: (<TextCircleIcon>1</TextCircleIcon>),
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
      (<TextCircleIcon>{f.properties.ID}</TextCircleIcon>),
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