const layer = {
  title: 'First Nations Reserves',
  description: 'The administrative boundaries of W̱SÁNEĆ and lək̓ʷəŋən First Nations Reserves.',
  data: require('../geojson/Naturehood_FirstNationsReserves.geojson'),
  shape: 'polygon',
  symbology: 'single',
  options: {
    style: {
      stroke: true,
      color: '#000',
      dashArray: '2 12',
      fill: false,
      interactive: false, 
    },
  },
}

export default layer;