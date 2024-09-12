import { getStyleMapProperty, mapPopupContent } from '../LeafletStyleHelpers';

const styleMap = new Map([
  ["0",   {legendText: '0.0 m', color: '#1E44D3'}],
  ["0.5", {legendText: '0.5 m', color: '#5177E1'}],
  ["1",   {legendText: '1.0 m', color: '#81A4EE'}],
  ["2",   {legendText: '2.0 m', color: '#C6DBFA'}]
]);

const layer = {
  title: 'Coastal Flood Inundation Scenarios',
  description: [
    {type: 'p', content: 'The Capital Regional District (CRD) retained Associated Engineering, DHI and Westmar Advisors to undertake the Capital Region Coastal Flood Inundation Mapping Project (the project) in 2019 -2021. On behalf of local government and other regional stakeholders, staff worked closely with an inter-municipal and multi-disciplinary project team to complete the Regional Coastal Flood Inundation Project in order to better understand regional impacts from coastal storm flooding due to sea level rise and tsunamis. Modeled scenarios show the higher high water large tide (HHWLT) levels for a 0.0m, 0.5m, 1.0m, and 2.0m relative sea level rise (RSLR), respectively.'},
    {type: 'link', content: 'Capital Regional District, 2021. Capital Region Coastal Flood Inundation Mapping Project Summary, Version 2.0. Victoria.', url: 'https://www.crd.bc.ca/docs/default-source/climate-action-pdf/reports/2020-sea-level-mapping-project/coastal-flood-inundation-mapping-project-summary.pdf'},
  ],
  data: require('../geojson/CRDInundation.geojson'),
  shape: 'line',
  symbology: 'classified',
  styleMap: styleMap,
  options: {
    style: function (feature) {
      const baseStyle = {
        stroke: true,
        fill: false,
        interactive: true,
        weight: 4,
      }
      return {
        ...baseStyle,
        color: getStyleMapProperty(
          'color',
          feature.properties.RSLR,
          styleMap
        ),
      }
    },
    onEachFeature: (f,l) => {
      l.bindPopup(
        mapPopupContent(
          'Capital Region Coastal Flood Inundation',
          'Scenario of ' + f.properties.RSLR + 'm Relative Sea Level Rise (RSLR), this line represents the Higher High Water Large Tide (HHWLT) level.',
          ),
        {offset: [0,8]});
    }
  },
}

export default layer;