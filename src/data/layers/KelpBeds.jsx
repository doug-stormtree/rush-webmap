import { circle } from 'leaflet';

const color = '#f0b500';

const layer = {
  title: "Kelp Beds",
  description: [
    {type: 'p', content: 'Location of kelp beds within the CRD. Each point symbolizes kelp found within a 50 x 50 meter grid. Data was sourced from the Government of Canada’s Coastal Resource Information Management System which collected data from 1979 onward.'},
    {type: 'link', url: 'https://open.canada.ca/data/en/dataset/2d994dbd-0518-4463-ac52-28bd05129371/resource/f706b222-c7cd-4dc8-8ca0-4aa26020d822', content: 'Coastal Resource Information Management System - Kelp Beds'},
  ],
  data: require('../geojson/KelpBeds.geojson'),
  shape: 'point',
  symbology: 'density',
  color: color,
  options: {
    pointToLayer: (f,l) => circle(l, {
      radius: 10,
      stroke: false,
      fill: true,
      fillColor: color,
      fillOpacity: 0.8
    }),
  },
}

export default layer;