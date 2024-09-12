import { getStyleMapProperty, mapPopupContent } from "../LeafletStyleHelpers";

const styleMap = new Map([
  ["Red",    {legendText: 'Red List', fillColor: '#F00'}],
  ["Blue",   {legendText: 'Blue List', fillColor: '#00F'}],
  ["Yellow", {legendText: 'Yellow List', fillColor: '#FF0'}],
]);

const layer = {
  title: 'Species At Risk',
  description: 'The B.C. Conservation Data Centre’s spatial view of publicly available, known locations of species and ecological communities at risk. The purpose of this list is to prevent accidental destruction of a location of a species or ecological community at risk and for research and analysis. Based on their conservation status rank, each species and ecosystem is assigned to the red, blue or yellow list to help set conservation priorities and provide a simplified view of the status of B.C.’s species and ecosystems.',
  data: require('../geojson/SpeciesAtRisk.geojson'),
  shape: 'polygon',
  symbology: 'classified',
  styleMap: styleMap,
  options: {
    style: function (feature) {
      const baseStyle = {
        stroke: false,
        fill: true,
        fillOpacity: 0.5,
        interactive: true
      }
      return {
        ...baseStyle,
        fillColor: getStyleMapProperty(
            'fillColor',
            feature.properties.BC_LIST,
            styleMap
          ),
      }
    },
    onEachFeature: (f,l) => {
      l.bindPopup(
        mapPopupContent(
          f.properties.ENG_NM,
          'Scientific name: ' + f.properties.SCI_NM + ' is found on the B.C. ' + f.properties.BC_LIST + ' list.'
          ),
        {offset: [0,8]});
    }
  },
}

export default layer;