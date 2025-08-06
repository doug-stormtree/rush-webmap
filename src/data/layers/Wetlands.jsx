const styleMap = new Map([
  ['Wetland', {
    color: '#94e6fa',
    fillColor: '#4c9ca4',
    legendText: 'Wetland'
  }],
]);

const layer = {
  title: 'Wetlands',
  description: [
    {type:'p', content:'Land use represents a significant factor in the climate change equation. Ecosystem connectivity is important to consider as well, as greater biodiversity can improve these potentials.'},
  ],
  data: require('../geojson/CRDLandCoverNoJDF.geojson'),
  format: 'polygon',
  symbology: 'classified',
  styleMap: styleMap,
  //legendTitle: 'IPCC Land Cover Class',
  options: {
    filter: (f) => f.properties.LandCoverClass === 'Wetland',
    style: {
      stroke: true,
      opacity: 0.5,
      color: styleMap.get('Wetland').color,
      fillColor: styleMap.get('Wetland').fillColor,
      dashArray: '',
      lineCap: 'butt',
      lineJoin: 'miter',
      weight: 3,
      fill: true,
      fillOpacity: 0.8,
      interactive: true
    },
  },
}

export default layer;