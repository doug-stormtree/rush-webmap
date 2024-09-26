import { getStyleMapProperty, mapPopupContent, setStyleIfSupported } from '../LeafletStyleHelpers';

const hoverStyle = {
  out: {
    opacity: 0.6,
    fillOpacity: 0.4,
  },
  over: {
    opacity: 1,
    fillOpacity: 0.6,
  },
}

const styleMap = new Map([
  ['Provincial Ecoreserve', { fillColor: '#00441b' }],
  ['Provincial Park', { fillColor: '#006d2c' }],
  ['Provincial Park (Water)', { fillColor: '#4eb3d3' }],
  ['Regional Park', { fillColor: '#41ae76' }],
  ['Water', { fillColor: '#2b8cbe' }],
  ['Water Supply Area', { fillColor: '#7bccc4' }],
]);

const layer = {
  title: 'Sea-to-Sea Green Blue Belt',
  description: [
    {type: 'p', content: ''},
    {type: 'p', content: ''},
    {type: 'link', content: 'Native Land Digital', url: 'https://native-land.ca/'},
  ],
  data: require('../geojson/GreenBlueBelt.geojson'),
  shape: 'polygon',
  symbology: 'classified',
  styleMap: styleMap,
  options: {
    style: function (feature) {
      const baseStyle = {
        stroke: true,
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 3,
        fill: true,
      }
      return {
        ...baseStyle,
        ...hoverStyle.out,
        fillColor: getStyleMapProperty(
          'fillColor',
          feature.properties.Type,
          styleMap
        ),
        color: getStyleMapProperty(
          'fillColor',
          feature.properties.Type,
          styleMap
        ),
      }
    },
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
        f.properties.Name,
        'This ' + (f.properties.Type === 'Water' ? 'body of water' : f.properties.Type) +
          ' is part of the Sea-to-Sea Green/Blue Belt, a 62 kilometre long greenbelt within the Capital Regional District.',
        'https://en.wikipedia.org/wiki/Sea_to_Sea_Green_Blue_Belt',
        'Sea to Sea Green Blue Belt - Wikipedia',
        ), {offset: [4,2]});
      l.on({
        mouseover: (e) => setStyleIfSupported(e, hoverStyle.over),
        mouseout: (e) => setStyleIfSupported(e, hoverStyle.out),
      });
    }
  },
}

export default layer;