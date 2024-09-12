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
  title: 'Tree Coverage (2005)',
  description: [
    {type:'p', content:'Estimated 2005 Tree Cover Percentage. The data have been created on behalf of the Urban Forest Stewardship Initiative (UFSI), a program of Habitat Acquisition Trust (HAT) by Caslys Consulting Ltd.'},
    //{type:'p', content:'RUSH has chosen a diverging colour scheme to highlight areas that meet the 30% canopy cover goal set by Nature Canada. Notice the light yellow areas representing 20% to 30% canopy cover. These could be areas of opportunity for expanding tree equity into more neighbourhoods. Check out the Nature Canada report in the Initiatives section.'},
    {type:'p', content:'Learn more about the original land cover classification project and methodology and compare with other years by reading the report here:'},
    {
      type:'link',
      content:'Caslys Consulting Ltd., 2013. Capital Regional District Land Cover Mapping 1986, 2005 and 2011 Summary Report. Capital Regional District, Victoria.',
      url:'https://hat.bc.ca/s/CRD_2011_land_cover_EXECUTIVE_summary.pdf'
    }
  ],
  leafletLayer: tileLayer(
    '/TC05_Tiles/{z}/{x}/{y}.png',
    { minNativeZoom: 14, maxNativeZoom: 14, opacity: 0.3 }
    ),
  shape: 'tile',
  symbology: 'classified',
  legendTitle: 'Percentage of Tree Cover',
  styleMap: styleMap,
}

export default layer;