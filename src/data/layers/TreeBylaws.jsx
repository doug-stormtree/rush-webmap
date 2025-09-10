import {
  getStyleMapProperty,
  mapPopupContent
} from '../LeafletStyleHelpers';

const styleMap = new Map([
  [0, { fillColor: '#f7fcf5', legendText: '(0)' }],
  [1, { fillColor: '#c9eac2', legendText: '(1) 🌳' }],
  [2, { fillColor: '#89cd89', legendText: '(2) 🌳🌳' }],
  [3, { fillColor: '#209e46', legendText: '(3) 🌳🌳🌳' }],
  [4, { fillColor: '#0a5b07', legendText: '(4) 🌳🌳🌳🌳' }],
])

const title = 'Municipality Tree Protection and Connection'
const layer = {
  title: title,
  description: [
    {type: 'p', content: 'Each municipality was given a score based on the level of tree protection they have committed to. The scoring used the categories outlined below:'},
    {type: 'ul', content: [
      'Tree Protection Bylaw: Regulates the cutting and removal of protected trees.',
      'Urban Forest Management Plan: Designed to manage urban forests and natural areas within a municipality. It may include factors such as tree inventories, tree planting, tree protection bylaws, and more.',
      "Natural Asset Mapping: A way to spatially identify, value, and account for each municipality's natural assets such as trees and wetlands.",
      'Percent Canopy Cover: A target for the percent of total canopy cover within the municipality.',
      'Percent Connected Canopy Cover: A target for the percentage of total connected canopy cover within the municipality.'
    ]},
    {type: 'p', content: 'Note: RUSH provides this information for educational purposes only and cannot guarantee that it is accurate or current.'},
  ],
  data: require('../geojson/TreeProtectionUpdate09032025.geojson'),
  shape: 'polygon',
  symbology: 'classified',
  styleMap: styleMap,
  legendTitle: 'Score',
  options: {
    style: function (feature) {
      const baseStyle = {
        stroke: true,
        opacity: 0.5,
        color: 'rgb(80,80,80)',
        dashArray: '',
        lineCap: 'round',
        lineJoin: 'round',
        weight: 2,
        fill: true,
        fillOpacity: 0.7,
        interactive: true
      }
      return {
        ...baseStyle,
        fillColor: getStyleMapProperty(
            'fillColor',
            feature.properties.Score,
            styleMap
          ),
      }
    },
    onEachFeature: (f,l) => {
      l.bindPopup(
        mapPopupContent(
          f.properties.AA_NAME,
          null,
          [
            null,
            f.properties.CTreeByLawURL,
            null,
            f.properties.CUrbanForURL,
            null,
            f.properties.CNAMappingURL,
            null,
            f.properties.CPercCanopURL,
            null,
            f.properties.CPercConncURL,
          ],
          [
            'Tree Protection Bylaw - ' + f.properties.TreeByLaw,
            f.properties.CTreeByLaw,
            'Urban Forest Management Plan - ' + f.properties.UrbanFores,
            f.properties.CUrbanFor,
            'Natural Asset Mapping - ' + f.properties.NAMapping,
            f.properties.CNAMapping,
            'Percent Canopy Cover - ' + f.properties.PercCanopy,
            f.properties.CPercCanop,
            'Percent Connected Canopy Cover - ' + f.properties.PercConnec,
            f.properties.CPercConnc,
          ],
          null,
          null,
          null,
          'Note: RUSH provides this information for educational purposes only and cannot guarantee that it is accurate or current.'
          ),
        {offset: [0,8]});
      l.bindTooltip(
        '🌳 '.repeat(f.properties.Score),
        {
          permanent: true,
          opacity: 0.8,
          direction: 'center',
          className: 'leaflet-label'
        })
    }
  },
}

export default layer;