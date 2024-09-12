import { tileLayer } from 'leaflet';

const styleMap = new Map([
  ["1", {legendText:   '0 - 20',   fillColor: 'rgb(198, 219, 235)'}],
  ["2", {legendText: '>20 - 40',   fillColor: 'rgb(182, 203, 226)'}],
  ["3", {legendText: '>40 - 60',   fillColor: 'rgb(140, 150, 198)'}],
  ["4", {legendText: '>60 - 80',   fillColor: 'rgb(136, 85, 165)'}],
  ["5", {legendText: '>80 - 100',  fillColor: 'rgb(129, 15, 124)'}],
]);

const layer = {
  title: 'Impervious Surfaces (2019)',
  description: [
    {type:'p', content:'Estimated 2019 Impervious Surfaces Percentage. The data was derived from a land cover classification produced by Casyls Consulting Ltd. for the CRD. RUSH has modified the datasets provided to suit the purposes of the mapping tool.'},
    {type:'p', content:'Impervious surfaces mainly comprise of pavement, buildings, and other artificial structures that prevent rainwater from infiltrating the soil below. This can result in urban flooding or excessive fast flowing water that erodes the landscape downstream.'},
    {type:'p', content:'Learn more about the original land cover classification project and methodology by reading the report here:'},
    {
      type:'link',
      content:'Caslys Consulting Ltd., 2021. Capital Regional District Urban Land Cover Classification 2017/2019 Summary Report. Capital Regional District, Victoria.',
      url:'https://www.crd.bc.ca/docs/default-source/es-watersheds-pdf/land-cover/2021-land-cover-classification-report.pdf'
    }
  ],
  leafletLayer: tileLayer(
    '/Impervious19/{z}/{x}/{y}.png',
    { minNativeZoom: 14, maxNativeZoom: 14, opacity: 0.4 }
    ),
  shape: 'tile',
  symbology: 'classified',
  legendTitle: 'Percentage of Impervious Surfaces',
  styleMap: styleMap,
}

export default layer;