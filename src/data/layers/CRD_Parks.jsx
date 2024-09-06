import { mapPopupContent } from '../LeafletStyleHelpers';

const layer = {
  title: 'Parks',
  description: 'These are the designated parks within the CRD. Greenspace has many benefits, including providing shade, cleaning the air, and reducing noise. While plants help draw harmful greenhouse gases from the atmosphere, the soil processes the gases. Soil processes greenhouse gases at a rate of 2:1 compared to plants. The partnership between soil and the atmosphere is key to having a healthy climate. Nature is also great for your physical and mental wellbeing.',
  data: require('../geojson/CRD_Parks.geojson'),
  shape: 'polygon',
  symbology: 'single',
  options: {
    style: {
      interactive: true,
      stroke: true,
      weight: 2,
      dashArray: '',
      lineCap: 'butt',
      lineJoin: 'miter',
      opacity: 0.5,
      color: 'rgb(115,144,60)',
      fill: true,
      fillOpacity: 0.7,
      fillColor: 'rgb(140,175,74)',
    },
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
        f.properties['Name'],
        f.properties['Type'] + ' with an area of ' +
          (f.properties['Shape.STArea()']/100000).toFixed(2) + ' km²'
      ), {offset: [0,8]});
    }
  },
}

export default layer;