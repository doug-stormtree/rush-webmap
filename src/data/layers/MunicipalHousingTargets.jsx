import {
    mapPopupContent,
    setStyleIfSupported,
    getStyleMapProperty
} from '../LeafletStyleHelpers';

const title = 'Municipality Housing Targets'

const styleMap = new Map([
  ["Yes", {fillColor: '#d7b65a', color: 'rgb(130,130,130)', legendText: 'Housing Supply Act'}],
  ["No",  {fillColor: '#aacc64', color: 'rgb(130,130,130)', legendText: 'Not Included'}]
]);

const layer = {
  title: title,
  description: [
    {type: 'p', content: 'Premier Eby introduced the Housing Supply Act¹ in 2022, which allows the province to set and enforce housing supply targets for municipalities. Municipalities included in the Act² are given five years of targets to help the province address housing needs. This map depicts the yearly targets for the municipalities affected by the Housing Supply Act as well as the most recent net unit reports. The most recent reports on units built can be found here:'},
    {
      type:'link',
      content:'Every BC Municipality\'s Housing Targets And Progress Reports (TRACKER)',
      url:'https://storeys.com/bc-housing-supply-targets-progress-tracker/'
    },
    {
      type:'link',
      content:'1. Bill 43 - 2022: Housing Supply Act',
      url:'https://www.bclaws.gov.bc.ca/civix/document/id/bills/billsprevious/3rd42nd:gov43-1#section2'
    },
    {
      type:'link',
      content:'2. Housing target orders - Province of British Columbia',
      url:'https://www2.gov.bc.ca/gov/content/housing-tenancy/local-governments-and-housing/housing-targets/orders#group-2'
    },
  ],
  data: require('../geojson/MunicipalHousingTargets.geojson'),
  shape: 'polygon',
  symbology: 'classified',
  styleMap: styleMap,
  options: {
    style: function (f) {
        const baseStyle = {
            stroke: true,
            opacity: 0.5,
            color: 'rgb(130,130,130)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 3,
            fill: true,
            fillOpacity: 0.3,
            interactive: true
        }
        return {
            ...baseStyle,
            fillColor: getStyleMapProperty('fillColor', f.properties.Listed, styleMap),
        }
    },
    onEachFeature: (f,l) => {
      l.bindPopup(
        mapPopupContent(
          f.properties.Name,
          f.properties.Listed === "Yes"
            ? [
                'Current Units Built: ' + f.properties['CurrentUnits'],
                'Year 1 Target: ' + f.properties['Year1'],
                'Year 2 Target: ' + f.properties['Year2'],
                'Year 3 Target: ' + f.properties['Year3'],
                'Year 4 Target: ' + f.properties['Year4'],
                'Year 5 Target: ' + f.properties['Year5'],
            ] : f.properties.ShortName + ' is not currently affected by the Housing Supply Act.',
          null,
          null,
          null,
          null,
          null,
          'Note: RUSH provides this information for educational purposes only and cannot guarantee that it is accurate or current.'
          ),
        {offset: [0,8]});
      l.on({
        mouseover: (e) => setStyleIfSupported(e, { fillOpacity: 0.7 }),
        mouseout: (e) => setStyleIfSupported(e, { fillOpacity: 0.3 }),
      });
    }
  },
}

export default layer;