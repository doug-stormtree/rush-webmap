import { tileLayer } from 'leaflet';

const styleMap = new Map([
  ["1", {legendText: 'High: 42.555', fillColor: '#d7191c'}],
  ["2", {legendText: '',             fillColor: '#f4cf23'}],
  ["3", {legendText: '',             fillColor: '#fbff25'}],
  ["4", {legendText: '',             fillColor: '#e3f428'}],
  ["5", {legendText: 'Low: 12.456',  fillColor: '#1a9641'}],
]);

const layer = {
  title: 'Heat Exposure - Land Surface Temperature',
  description: [
    {type:'p', content:'Heat Exposure is a valuable tool for understanding the risk posed by extreme heat events. Does the map show high temperatures in your neighbourhood? Are their opportunities near your community to add canopy cover or reduce pavement cover? Are there areas near you that benefit from ocean breezes or natural topography and may provide refuge during extreme heat?'},
    {type:'p', content:'The CRD explains that "Land Surface Temperature demonstrates heat energy given off by surfaces using thermal infrared imaging combined with other factors and is useful to understand changes in development, land use and building energy use."'},
    {type:'p', content:'This map was produced as part of the Capital Region Extreme Heat Information Portal project. For more information and other maps on extreme heat vulnerability in the capital region visit:'},
    {
      type:'link',
      content:'Capital Region Extreme Heat Information Portal',
      url:'https://heat.prepareyourself.ca/'
    }
  ],
  leafletLayer: tileLayer(
    '/LandSurfaceTemp/{z}/{x}/{y}.png',
    { minNativeZoom: 13, maxNativeZoom: 13, opacity: 0.6 }
    ),
  shape: 'tile',
  symbology: 'classified',
  legendTitle: 'Land Surface Temperature (°C)',
  styleMap: styleMap,
}

export default layer;