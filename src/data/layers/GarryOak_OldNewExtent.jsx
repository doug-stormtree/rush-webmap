import { getStyleMapProperty } from '../LeafletStyleHelpers';

const styleMap = new Map([
  ['1997', { fillColor: '#4a9050' }],
  ['1880', { fillColor: '#803510' }],
]);

const layer = {
  title: 'Historic Garry Oak Extent',
  description: [
    {type: 'p', content: 'This map illustrates the change in the extent of Garry Oak Ecosystems between the years of 1880 to 1997 in the Greater Victoria Area and Saanich Peninsula. The layer in (Colour) highlights the 1880 extent, and the layer in (Colour) highlights the extent as of 1997. Source: T. Lea, (2002), Historical Garry Oak Ecosystems of Greater Victoria & Saanich Peninsula [Map], 1:20,000 TRIM, HR GISolutions Inc.'},
  ],
  data: require('../geojson/GarryOak_OldNewExtent.geojson'),
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
        fillOpacity: 0.8,
      }
      return {
        ...baseStyle,
        fillColor: getStyleMapProperty(
          'fillColor',
          feature.properties.Year,
          styleMap
        ),
        color: getStyleMapProperty(
          'fillColor',
          feature.properties.Year,
          styleMap
        ),
      }
    },
  },
}

export default layer;