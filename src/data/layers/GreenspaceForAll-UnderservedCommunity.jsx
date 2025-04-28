import {
  getStyleMapProperty
} from "../LeafletStyleHelpers";

const styleMap = new Map([
  ['A', {fillColor: 'rgb(255,245,240)', color: 'rgb(35,35,35)', legendText: '0 - 0.25'}],
  ['B', {fillColor: 'rgb(252,164,134)', color: 'rgb(35,35,35)', legendText: '0.25 - 0.5'}],
  ['C', {fillColor: 'rgb(255,95,87)', color: 'rgb(35,35,35)', legendText: '0.5 - 0.75'}],
  ['D', {fillColor: 'rgb(255,0,81)', color: 'rgb(35,35,35)', legendText: '0.75 - 1'}]
]);

const layer = {
  title: 'Underserved Community',
  description: [
    {type:'p', content:'This map, created by the Stewardship Centre for BC (SCBC), combines sociodemographic factors influencing greenspace access such as income, disability, and language. Higher scores indicate greater social vulnerability. Typically, those who are more socially vulnerable have less access to greenspace, making them more susceptible to health problems and climate change. More information can be found at:'},
    {
      type:'link',
      content:'Greenspace for All',
      url:'https://stewardshipcentrebc.ca/greenspace-for-all/'
    },
  ],
  data: require('../geojson/GreenspaceForAll.geojson'),
  format: 'polygon',
  symbology: 'classified',
  styleMap: styleMap,
  options: {
    style: function (feature) {
      const baseStyle = {
        stroke: true,
        opacity: 0.5,
        color: 'rgb(35,35,35)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 0.5,
        interactive: true
      }
      return {
        ...baseStyle,
        fillColor: getStyleMapProperty(
            'fillColor',
            feature.properties.VarUCI,
            styleMap
          ),
      }
    },
  },
}

export default layer;