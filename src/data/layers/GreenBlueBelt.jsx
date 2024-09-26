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
    {type: 'p', content: 'The Sea-to-Sea Green Blue Belt is a connected series of parks, greenspace, protected lands, and water bodies between Saanich Inlet and the Sooke Basin. Ecosystem connectivity is essential for forest, wildlife, and marine health. The campaign to establish a protected corridor began in the early 1990s and has been the work of many environmental and community organizations.'},
    {type: 'link', content: 'Read about the campaign history from this 1999 report by the Wilderness Committee.', url: 'https://www.wildernesscommittee.org/publications/victorias-sea-sea-green-blue-belt'},
    {type: 'link', content: 'Visit the CRD page for Sea to Sea Regional Park for updates on one of the largest parks in the belt.', url: 'https://www.crd.bc.ca/parks-recreation-culture/parks-trails/find-park-trail/seatosea'},
    {type: 'link', content: 'Visit the CRD page for the Greater Victoria Water Supply Area to learn about drinking water resevoir lands protection in the region.', url: 'https://www.crd.bc.ca/service/drinking-water/watershed-protection/greater-victoria-water-supply-area'},
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