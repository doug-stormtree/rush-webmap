import { tileLayer } from 'leaflet';
import { StartOffLayersName, StartOnLayersName } from '../TextContent';

const styleMap_TreeCoverage2005 = new Map([
  ["1", {legendText: '0 - 5', fillColor: 'rgb(200, 38, 0)'}],
  ["2", {legendText: '>5 - 10', fillColor: 'rgb(156, 70, 0)'}],
  ["3", {legendText: '>10 - 25', fillColor: 'rgb(112, 102, 0)'}],
  ["4", {legendText: '>25 - 50', fillColor: 'rgb(79, 101, 5)'}],
  ["5", {legendText: '>50 - 75', fillColor: 'rgb(39, 84, 16)'}],
  ["6", {legendText: '>75 - 100', fillColor: 'rgb(0, 68, 27)'}],
]);

const layer = {
  title: 'Tree Coverage (2005)',
  description: [
    {type:'p', content:'Estimated 2005 Tree Cover Percentage. The data have been created on behalf of the Urban Forest Stewardship Initiative (UFSI), a program of Habitat Acquisition Trust (HAT) by Caslys Consulting Ltd.'},
    {type:'p', content:'Learn more and compare with other years by reading the report here:'},
    {
      type:'link',
      content:'Caslys Consulting Ltd., 2013. Capital Regional District Land Cover Mapping 1986, 2005 and 2011 Summary Report. Capital Regional District, Victoria.',
      url:'https://hat.bc.ca/s/CRD_2011_land_cover_EXECUTIVE_summary.pdf'
    }
  ],
  leafletLayer: tileLayer(
    '/TC05_Tiles/{z}/{x}/{y}.png',
    { minNativeZoom: 14, maxNativeZoom: 14, opacity: 0.5 }
    ),
  shape: 'tile',
  symbology: 'classified',
  legendTitle: 'Percentage of Tree Cover',
  styleMap: styleMap_TreeCoverage2005,
  questions: [
    { key: 'beat-the-heat', group: StartOnLayersName, active: true },
    { key: 'neighbourhood-to-naturehood', group: StartOffLayersName, active: false },
    { key: 'development', group: 'Greenspace', active: false },
  ]
}

export default layer;