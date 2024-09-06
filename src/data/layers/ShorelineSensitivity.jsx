import { getStyleMapProperty, mapPopupContent } from '../LeafletStyleHelpers';

const styleMap = new Map([
  ["1", {legendText: 'Very Low', color: '#DADADA'}],
  ["2", {legendText: 'Low', color: '#DEACAC'}],
  ["3", {legendText: 'Moderate', color: '#E27F7F'}],
  ["4", {legendText: 'High', color: '#E65151'}],
  ["5", {legendText: 'Very High', color: '#EB2424'}]
]);

const layer = {
  title: 'Shoreline Sensitivity',
  description: [
    {type: 'p', content:'BC Parks developed a model that independently rates marine and terrestrial segments of the British Columbia coastline according to their sensitivity to sea level rise, then spatially combines the ratings to build a map of relative shoreline sensitivity.'},
    {type: 'p', content:'Ratings were developed using an existing biogeographic land classification dataset (Broad Ecosystem Inventory), and previously rated sensitivity of coastal and marine feature classes (ShoreZone), modified to account for the effects of slope exposure and sediment mobility.'},
    {type: 'link', content:'Biffard, D., Stevens, T., Rao, A., and Woods, B., 2014. BC Parks Shoreline Sensitivity Model. Province of British Columbia, Victoria.', url:'https://a100.gov.bc.ca/pub/acat/public/viewReport.do?reportId=42825'},
  ],
  data: require('../geojson/ShorelineSensitivity.geojson'),
  shape: 'line',
  symbology: 'classified',
  legendTitle: 'Sensitivity to Sea-level Rise',
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
          String(feature.properties.SENSI_FINA),
          styleMap
        ),
      }
    },
    onEachFeature: (f,l) => {
      l.bindPopup(
        mapPopupContent(
          'BC Parks Shoreline Sensitivity Rating',
          'This shoreline has ' + 
            styleMap.get(String(f.properties.SENSI_FINA)).legendText +
            ' sensitivity to sea level rise.',
          ),
        {offset: [0,8]});
    }
  },
}

export default layer;