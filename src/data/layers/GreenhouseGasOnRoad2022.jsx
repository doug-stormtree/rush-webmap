import {
  getStyleMapKeyFromContinuousValue,
  getStyleMapProperty,
  mapPopupContent,
  pointToIcon,
  setStyleIfSupported,
} from '../LeafletStyleHelpers';
import { GHGCarIcon } from '../../components/EmissionsIcon';

const styleMap_GHG = new Map([
  [0,    {fillColor: 'rgb(7,72,174)', color: 'rgb(130,130,130)', legendText: 'Reduction'}],
  [100,  {fillColor: 'rgb(248,56,8)', color: 'rgb(130,130,130)', legendText: 'Increase'}]
]);

const layer = {
  title: 'Greenhouse Gas Emissions - On-road Transportation (2022)',
  description: [
    {type:'p', content:'The Capital Regional District (CRD) has established 2007 as a baseline year where the greenhouse gas (GHG) emissions were calculated. The most recent reporting year was 2022, and this map layer shows which CRD member governments have reduced or increased their on-road transportation 2022 emissions compared to 2007.'},
    {type:'p', content:'The GHGs released to the atmosphere to be reported in the Transportation Sector are those from combustion of fuels in journeys by on-road, railway, waterborne navigation, aviation, and off-road. GHG emissions are produced directly by the combustion of fuel, and indirectly using grid-supplied electricity.'},
    {type:'p', content:'Learn more about the local sources of GHGs by reading the reports here:'},
    {
      type:'link',
      content:'Stantec Consulting Ltd., 2023. Capital Regional District - Municipalities and Electoral Areas: 2007 Base Year and 2022 Reporting Year Energy & GHG Emissions Inventory. Capital Regional District, Victoria.',
      url:'https://www.crd.bc.ca/about/data/climate-change'
    }
  ],
  data: require('../geojson/CRDLocalGovGHG2022.geojson'),
  format: 'polygon',
  symbology: 'classified',
  styleMap: styleMap_GHG,
  legendTitle: 'Emissions in 2022 compared to 2007',
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
              feature.properties.OnRoadTransportationChange,
              styleMap_GHG),
            styleMap_GHG
          ),
      }
    },
    // pointToLayer only for point features (City Halls)
    pointToLayer: (f,l) => pointToIcon(l, {
      fill: null,
      stroke: null,
      icon: <GHGCarIcon percentGHG={f.properties.OnRoadTransportationChange} />
    }, Math.min(Math.abs(f.properties.OnRoadTransportationChange) + 50, 100), 0, null),
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
          f.properties.LocalGov,
          `${Math.abs(f.properties.OnRoadTransportationChange).toFixed(1)}% ${f.properties.OnRoadTransportationChange > 0 ? 'increase' : 'reduction'} in on-road transportation GHG emissions in 2022 compared to 2007 levels.`
        ), {offset: [0,8]});
      l.on({
        mouseover: (e) => setStyleIfSupported(e, { fillOpacity: 0.6 }),
        mouseout: (e) => setStyleIfSupported(e, { fillOpacity: 0.3 })
      });
    }
  },
}

export default layer;