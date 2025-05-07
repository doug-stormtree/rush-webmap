import {
  getStyleMapProperty
} from "../LeafletStyleHelpers";

const styleMap = new Map([
  [1, {fillColor: 'rgb(32,126,68)', color: 'rgb(35,35,35)', legendText: '0 - 0.25'}],
  [2, {fillColor: 'rgb(91,181,115)', color: 'rgb(35,35,35)', legendText: '0.25 - 0.5'}],
  [3, {fillColor: 'rgb(199,229,171)', color: 'rgb(35,35,35)', legendText: '0.5 - 0.75'}],
  [4, {fillColor: 'rgb(249,253,250)', color: 'rgb(35,35,35)', legendText: '0.75 - 1'}]
]);

const layer = {
  title: 'Greenspace Accessibility',
  description: [
    {type:'p', content:'This map was created by the Stewardship Centre for BC (SCBC) to identify areas where protected greenspaces are not equitably distributed. This map combines greenspace area and distance to greenspace to evaluate greenspace accessibility. Higher scores indicate lower access to greenspace. More information can be found at:'},
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
            feature.properties.VarRG1,
            styleMap
          ),
      }
    },
  },
}

export default layer;