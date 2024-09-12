import {
  mapPopupContent,
  getStyleMapProperty,
  setStyleIfSupported,
} from "../LeafletStyleHelpers";

const styleMap = new Map([
  ["Bedrock", {fillColor: '#4A6FA5', color: 'rgb(130,130,130)', legendText: 'Bedrock'}],
  ["Sediment", {fillColor: '#63D2FF', color: 'rgb(130,130,130)', legendText: 'Sand and Gravel (Sediment)'}],
]);

const layer = {
  title: 'Aquifers',
  description: [
    {type: 'p', content: 'An Aquifer is a body of rock or sediment that holds groundwater and readily transmits that water to wells and springs.'},
    {type: 'p', content: 'The areas shown on the map represent ground water aquifers in the southern island region that have been mapped for the BC Government and are known to be developed for water use.'},
    {type: 'link',
      content: 'Water Protection and Sustainability, 2020. Ground Water Aquifers [Data set]. Province of British Columbia.',
      url: 'https://catalogue.data.gov.bc.ca/dataset/ground-water-aquifers'}
  ],
  data: require('../geojson/Aquifers.geojson'),
  format: 'polygon',
  symbology: 'classified',
  styleMap: styleMap,
  options: {
    style: function (feature) {
      const baseStyle = {
        stroke: true,
        opacity: 0.5,
        color: '#C7D3E6',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 3,
        fill: true,
        fillOpacity: 0.3,
        interactive: true
      }
      return {
        ...baseStyle,
        fillColor: getStyleMapProperty(
            'fillColor',
            feature.properties.MATERIAL === 'Bedrock'
              ? 'Bedrock'
              : 'Sediment',
            styleMap
          ),
      }
    },
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
          f.properties.NAME ?? f.properties.LOCATION,
          `This aquifer is located at ${
            f.properties.LOCATION
          } and the water is stored in ${
            f.properties.MATERIAL
          }, with a material subtype of ${
            f.properties.SUBTYPE
          }. It was mapped in ${
            f.properties.MAPPING_YEAR
          } and was identifed as ${
            f.properties.VULNERABILITY
          } vulnerability and ${f.properties.PRODUCTIVITY} productivity. ${
            f.properties.DEMAND ? 'The demand placed on it by water use is classified as ' + f.properties.DEMAND : ''
          }.`,
          f.properties.AQUIFER_DETAILS_URL
        ), {offset: [0,8]});
      l.on({
        mouseover: (e) => setStyleIfSupported(e, { fillOpacity: 0.7 }),
        mouseout: (e) => setStyleIfSupported(e, { fillOpacity: 0.3 })
      });
    }
  },
}

export default layer;