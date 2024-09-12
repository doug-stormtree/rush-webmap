import {
  getStyleMapKeyFromContinuousValue,
  getStyleMapProperty,
  mapPopupContent,
  pointToIcon,
  setStyleIfSupported,
} from "../LeafletStyleHelpers";
import { GHGBuildingIcon } from '../../components/EmissionsIcon';

const styleMap = new Map([
  [0,    {fillColor: 'rgb(7,72,174)', color: 'rgb(130,130,130)', legendText: 'Reduction'}],
  [100,  {fillColor: 'rgb(248,56,8)', color: 'rgb(130,130,130)', legendText: 'Increase'}]
]);

const layer = {
  title: 'Greenhouse Gas Emissions - Stationary (2020)',
  description: [
    {type:'p', content:'The Capital Regional District (CRD) has established 2007 as a baseline year where the total greenhouse gas (GHG) emissions were calculated. This map layer shows which CRD member governments have reduced or increased their Stationary 2020 emissions compared to 2007.'},
    {type: 'p', content: 'Stationary energy sources are typically one of the largest contributors to a community’s GHG emissions. In general, these emissions come from fuel combustion and fugitive emissions. They include the emissions from energy to heat and cool residential, commercial, and industrial buildings, as well as the activities that occur within these residences and facilities, such as off-road transportation emissions from construction equipment.'},
    {type:'p', content:'Learn more about the local sources of GHGs by reading the reports here:'},
    {
      type:'link',
      content:'Stantec Consulting Ltd., 2021. Capital Regional District - Municipalities and Electoral Areas: 2007 Base Year and 2020 Reporting Year Energy & GHG Emissions Inventory. Capital Regional District, Victoria.',
      url:'https://www.crd.bc.ca/about/data/climate-change'
    }
  ],
  data: require('../geojson/CRDLocalGovGHG2020.geojson'),
  format: 'polygon',
  symbology: 'classified',
  styleMap: styleMap,
  legendTitle: 'Emissions in 2020 compared to 2007',
  options: {
    style: function (feature) {
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
        fillColor: getStyleMapProperty(
            'fillColor',
            getStyleMapKeyFromContinuousValue(
              feature.properties.StationaryChange,
              styleMap),
            styleMap
          ),
      }
    },
    // pointToLayer only for point features (City Halls)
    pointToLayer: (f,l) => pointToIcon(l, {
        fill: null,
        stroke: null,
        icon: <GHGBuildingIcon percentGHG={f.properties.StationaryChange} />
      }, 
      Math.min(Math.abs(f.properties.StationaryChange) + 50, 100),
      0,
      null),
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
          f.properties.LocalGov,
          `${Math.abs(f.properties.StationaryChange).toFixed(1)}% ${f.properties.StationaryChange > 0 ? 'increase' : 'reduction'} in Stationary (Residential and Commercial Buildings) GHG emissions in 2020 compared to 2007 levels.`
        ), {offset: [0,8]});
      l.on({
        mouseover: (e) => setStyleIfSupported(e, { fillOpacity: 0.6 }),
        mouseout: (e) => setStyleIfSupported(e, { fillOpacity: 0.3 }),
      });
    }
  },
  questions: [ 
  ]
}

export default layer;