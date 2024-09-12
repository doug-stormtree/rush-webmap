import { tileLayer } from "leaflet";

const styleMap = new Map([
  ["1", {legendText: 'Very Low', fillColor: '#00b547'}],
  ["2", {legendText: 'Low', fillColor: '#81d53e'}],
  ["3", {legendText: 'Moderate', fillColor: '#fdff00'}],
  ["4", {legendText: 'High', fillColor: '#ffbe00'}],
  ["5", {legendText: 'Very High', fillColor: '#ff0000'}]
]);

const layer = {
  title: 'Sea to Groundwater Risk (Sediment)',
  description: [
    {type:'p', content:'An Aquifer is a body of rock or sediment that holds groundwater and readily transmits that water to wells and springs. Aquifer Susceptibility refers to the natural potential for sea water intrusion, not including risk from well pumping or sea level rise, that could lead to increased salinity.'},
    {type:'p', content:'Unconsolidated or sediment-based aquifers typically have much higher transmissivity to the ocean and are found in low-lying areas along the coast. This study uses static groundwater elevation and distance from the coast to infer flux, that is, the pressure balance at the boundary between aquifer and ocean.'},
    {type:'p', content:'Learn more about these models by reading the report here:'},
    {
      type:'link',
      content:'Western Water Associates Ltd (Sivak, T. and M. Wei), 2021. GIS Modelling of Sea Water Intrusion Risk along British Columbia’s Coast. Water Science Series WSS2021-06, Province of British Columbia, Victoria.',
      url:'https://a100.gov.bc.ca/pub/acat/public/viewReport.do?reportId=59164'
    }
  ],
  leafletLayer: tileLayer(
    '/UNC_AS_Tiles/{z}/{x}/{y}.png',
    { minNativeZoom: 8, maxNativeZoom: 14, opacity: 0.4 }
    ),
  shape: 'tile',
  symbology: 'classified',
  legendTitle: 'Risk of Sea Water Intrusion',
  styleMap: styleMap,
}

export default layer;