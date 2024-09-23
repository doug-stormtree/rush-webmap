import { tileLayer } from 'leaflet';

const styleMap = new Map([
  ["1", {legendText: 'High: 39.77', fillColor: '#d7191c'}],
  ["2", {legendText: '',            fillColor: '#ea9021'}],
  ["3", {legendText: '',            fillColor: '#fbff25'}],
  ["4", {legendText: '',            fillColor: '#d9ef29'}],
  ["5", {legendText: 'Low: 23.79',  fillColor: '#1a9641'}],
]);

const layer = {
  title: 'Heat Exposure - Air Temperature',
  description: [
    {type:'p', content:'Heat Exposure is a valuable tool for understanding the risk posed by extreme heat events. Does the map show high temperatures in your neighbourhood? Are their opportunities near your community to add canopy cover or reduce pavement cover? Are there areas near you that benefit from ocean breezes or natural topography and may provide refuge during extreme heat?'},
    {type:'p', content:'The CRD explains that "Air Temperature is a measurement by thermometers and weather stations; it is the temperature from the ground to the tops of trees and buildings and is useful in determining public health impacts."'},
    {type:'p', content:'This map was produced as part of the Capital Region Extreme Heat Information Portal project. For more information and other maps on extreme heat vulnerability in the capital region visit:'},
    {
      type:'link',
      content:'Capital Region Extreme Heat Information Portal',
      url:'https://heat.prepareyourself.ca/'
    }
  ],
  leafletLayer: tileLayer(
    '/AirTemp/{z}/{x}/{y}.png',
    { minNativeZoom: 13, maxNativeZoom: 13, opacity: 0.6 }
    ),
  shape: 'tile',
  symbology: 'classified',
  legendTitle: 'Air Temperature (°C)',
  styleMap: styleMap,
}

export default layer;