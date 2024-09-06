import { tileLayer } from 'leaflet';

const styleMap = new Map([
  ["1", {legendText:   '0 - 10',  fillColor: 'rgb(205, 205, 205)'}],
  ["2", {legendText: '>10 - 20',  fillColor: 'rgb(239, 240, 201)'}],
  ["3", {legendText: '>20 - 30',  fillColor: 'rgb(246, 253, 148)'}],
  ["4", {legendText: '>30 - 40',  fillColor: 'rgb(92, 183, 105)'}],
  ["5", {legendText: '>40 - 75',  fillColor: 'rgb(39, 151, 78)'}],
  ["6", {legendText: '>75 - 100', fillColor: 'rgb(0, 104, 55)'}],
]);

const layer = {
  title: 'Tree Coverage (2019)',
  description: [
    {type:'p', content:'Estimated 2019 Tree Cover Percentage. The data was derived from a land cover classification produced by Casyls Consulting Ltd. for the CRD. Rush has modified the datasets provided to suit the purposes of the mapping tool.'},
    //{type:'p', content:'RUSH has chosen a diverging colour scheme to highlight areas that meet the 30% canopy cover goal set by Nature Canada. Notice the light yellow areas representing 20% to 30% canopy cover. These could be areas of opportunity for expanding tree equity into more neighbourhoods. Check out the Nature Canada report in the Initiatives section.'},
    {type:'p', content:'Learn more about the original land cover classification project and methodology by reading the report here:'},
    {
      type:'link',
      content:'Caslys Consulting Ltd., 2021. Capital Regional District Urban Land Cover Classification 2017/2019 Summary Report. Capital Regional District, Victoria.',
      url:'https://www.crd.bc.ca/docs/default-source/es-watersheds-pdf/land-cover/2021-land-cover-classification-report.pdf'
    }
  ],
  leafletLayer: tileLayer(
    '/CanopyCover19/{z}/{x}/{y}.png',
    { minNativeZoom: 14, maxNativeZoom: 14, opacity: 0.3 }
    ),
  shape: 'tile',
  symbology: 'classified',
  legendTitle: 'Percentage of Tree Cover',
  styleMap: styleMap,
}

export default layer;