import { getStyleMapProperty, mapPopupContent } from '../LeafletStyleHelpers';

const styleMap = new Map([
  ['Arbutus_DouglasFir', { fillColor: '#e36c87', legendText: 'Arbutus - Douglas Fir' }],
  ['Arbutus_GarryOak', { fillColor: '#da4129', legendText: 'Arbutus - Garry Oak' }],
  ['Arbutus_LodgePine_DouglasFir', { fillColor: '#8f3f82', legendText: 'Arbutus - Lodgepole Pine - Douglas-fir' }],
  ['BlackCottonwood_Crabapple_Willow', { fillColor: '#3866a3', legendText: 'Black Cottonwood - Crabapple - Willow' }],
  ['FreshWater_Wetland', { fillColor: '#6b5687', legendText: 'Fresh-water Wetland' }],
  ['GarrOak', { fillColor: '#f0e735', legendText: 'Garry Oak' }],
  ['GarryOak_Arbutus', { fillColor: '#f2a539', legendText: 'Garry Oak - Arbutus' }],
  ['Salal_Lichen', { fillColor: '#bd593e', legendText: 'Salal - Lichen' }],
  ['Salal_OG', { fillColor: '#88b32f', legendText: 'Salal - Oregon Grape' }],
  ['SF_Salal', { fillColor: '#427a38', legendText: 'Swordfern - Salal' }],
  ['SW_Wetland', { fillColor: '#8d8b8c', legendText: 'Salt-water Wetland' }],
  ['Swo_Hem_AF', { fillColor: '#75a691', legendText: 'Swordfern - Hemlock - Amabilis-fir' }],
  ['SwordFern', { fillColor: '#285d41', legendText: 'Swordfern' }],
]);

const layer = {
  title: 'Native Plant Ecosystems',
  description: [
    {type: 'p', content: 'This map outlines the native plant communities of the Greater Victoria Metropolitan area and Capital Regional District. Source: S, Eis, Canadian Forestry Service Cartography, (n.d.), Native Plant Communities Victoria Metropolitan Area Capital Regional District British Columbia [Map], 1:100,000 Resource Analysis Unit, British Columbia Environment and Land Use Secretariat.'},
  ],
  data: require('../geojson/NativePlantEcosystems.geojson'),
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
        fillOpacity: 0.7,
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
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
        'Native Plant Ecosystems',
        f.properties.ecosystem_name,
        ), {offset: [0,-6]});
    }
  },
}

export default layer;