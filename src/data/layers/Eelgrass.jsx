import { circle } from 'leaflet';

const eelgrassColor = '#38a801';

const layer = {
  title: "Eelgrass",
  description: [
    {type: 'p', content: 'This layer depicts locations of known eelgrass areas within the CRD. Each point symbolizes eelgrass within 50 meters. When boating, it’s recommended to avoid anchoring in eelgrass beds to protect this important habitat. Learn more about protecting eelgrass from:'},
    {type: 'link', url: 'https://resilientcoasts.ca/resource/protecting-eelgrass-when-boating/', content: 'Resilient Coasts for Salmon'},
    {type: 'p', content: 'Data for this layer was sourced from Shorezone’s 2013 eelgrass data, SeaChange’s RESS maps, and the CRD’s published eelgrass survey.'},
    {type: 'link', url: 'https://www.shorezone.org/downloadzone/', content: 'Shorezone'},
    {type: 'link', url: 'https://seachangesociety.com/current-projects/resilient-estuaries-of-the-salish-sea-project-ress/', content: 'SeaChange Resilient Estuaries of the Salish Sea Project'},
    {type: 'link', url: 'https://mapservices.crd.bc.ca/arcgis/rest/services/Harbours/MapServer/25', content: 'CRD Eelgrass Survey Data'},
  ],
  data: require('../geojson/CRDEelgrass.geojson'),
  shape: 'point',
  symbology: 'density',
  color: eelgrassColor,
  options: {
    pointToLayer: (f,l) => circle(l, {
      radius: 15,
      stroke: false,
      fill: true,
      fillColor: eelgrassColor,
      fillOpacity: 0.8
    }),
  },
}

export default layer;