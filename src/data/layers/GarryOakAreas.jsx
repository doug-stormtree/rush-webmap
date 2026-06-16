import { getStyleMapProperty } from '../LeafletStyleHelpers';

const styleMap = new Map([
  ['ConiferousForest', { fillColor: '#CD853F', legendText: 'Coniferous Forest' }],
  ['Garry Oak', { fillColor: '#8B5A2B' }],
  ['Wetland', { fillColor: '#becf50' }],
]);

const layer = {
  title: 'Historic Garry Oak Areas',
  description: [
    {type: 'p', content: 'This map illustrates Garry Oak Ecosystems, Wetlands, and Mostly Coniferous Forests within Victoria and the Greater Victoria Area in the 1850s. These data were collected from an 1858 Land Survey Map Excerpt, which showcases how these ecosystems looked at the time. Source: J.D. Pemberton, (1858), Historical Map of Garry Oak Areas [Map], BC Surveyor General’s Office.'},
  ],
  data: require('../geojson/GarryOak_1858.geojson'),
  shape: 'polygon',
  symbology: 'classified',
  styleMap: styleMap,
  options: {
    style: function (feature) {
      const baseStyle = {
        stroke: false,
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 0.6,
      }
      return {
        ...baseStyle,
        fillColor: getStyleMapProperty(
          'fillColor',
          feature.properties.ecosystem,
          styleMap
        ),
        color: getStyleMapProperty(
          'fillColor',
          feature.properties.ecosystem,
          styleMap
        ),
      }
    },
  },
}

export default layer;