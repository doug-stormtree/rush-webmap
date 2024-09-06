import { mapPopupContent } from '../LeafletStyleHelpers';

const layer = {
  title: 'Heat Domes',
  description: 'NOAA defines a heat dome as a climate event when "high-pressure circulation in the atmosphere acts like a dome or cap, trapping heat at the surface and favoring the formation of a heat wave." The heat islands on this map are some areas within the CRD that have experienced the most significant increases in average summer surface temperature from 2018 to 2021. Using the satellite imagery, you can see the relationship between heat island distance and canopy vegetation, roof area and parking lots. This heat island map was created by UVic geography student Gillian Voss at the UVic Map Shop.',
  data: require('../geojson/HeatDomes.geojson'),
  shape: 'polygon',
  symbology: 'single',
  options: {
    style: {
      opacity: 0.5,
      color: 'rgba(189,17,20,1.0)',
      dashArray: '',
      lineCap: 'butt',
      lineJoin: 'miter',
      weight: 2,
      fill: true,
      fillOpacity: 0.7,
      fillColor: '#FF2226',
      interactive: true
    },
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
        'Heat Dome',
        'This area is predicted to be vulnerable to trapping extreme heat. How much tree canopy is needed to mitigate this? Are there any options to reduce pavement here?',
        'https://naturecanada.ca/wp-content/uploads/2022/09/Nature-Canada-Report-Tree-Equity.pdf',
        'Do these communities meet the 3-30-300 equity test?'), {offset: [0,8]});
    }
  },
}

export default layer;