import L from 'leaflet';
import 'leaflet-layerjson';
import {
  getStyleMapProperty,
  getStyleMapKeyFromContinuousValue,
  mapPopupContent,
  pointToIcon,
  pointToIconByProperty,
} from './LeafletStyleHelpers';
// SVG
import { GHGCarIcon } from '../components/EmissionsIcon';
import { ReactComponent as WaterIcon } from './svg/WaterTransport.svg';
import { ReactComponent as AirportIcon } from './svg/Airport.svg';
import { ReactComponent as RecyclingIcon } from './svg/Recycling.svg';

const RecyclingIconStyle = {
  fill: 'rgb(15,86,229)',
  icon: <RecyclingIcon />
}

const styleMap_GHG = new Map([
  [0,    {fillColor: 'rgb(7,72,174)', color: 'rgb(130,130,130)', legendText: 'Reduction'}],
  [100,  {fillColor: 'rgb(248,56,8)', color: 'rgb(130,130,130)', legendText: 'Increase'}]
]);

const styleMap_CRDBikeMap = new Map([
  ["T1" , {legendText: 'Paved Multi-Use Trails / Protected Bike Lanes', color: 'rgba(120, 162, 47, 255)'}],
  ["T1d", {legendText: 'Unpaved Multi-Use Trails', color: 'rgba(137, 90, 68, 255)'}],
  ["BL1", {legendText: 'Bike Lanes / Road Shoulders', color: 'rgba(0, 139, 176, 255)'}],
  ["SR1", {legendText: 'Shared Streets', color: 'rgba(236, 136, 29, 255)'}],
  ["DC" , {legendText: 'Difficult Connections', color: 'rgba(211, 18, 69, 255)'}]
]);

const styleMap_TransportHubs = new Map([
  ['Ferry',   {icon: <WaterIcon />, fill: 'rgb(13,101,149)', legendText: 'Ferry Terminal'}],
  ['Airport', {icon: <AirportIcon />, fill: 'rgb(100,186,50)', legendText: 'Airport'}],
])

const Footprint = {
  title: 'Light Footprint?',
  question: 'Self-propelled "Light Footprint" Travel',
  image: require('./png/LightFootprint.png'),
  description: [
    {type: 'h2', content: "Comparison"},
    {type: 'p', content: 'The Capital Regional District (CRD) has set a 61% reduction target for greenhouse gas (GHG) emissions from 2007 levels. On-road transportation represented 39.2% of total GHG emissions for 2020.¹ The coloured in regions of the map shows the change, either increased or reduced, in GHG emissions for each CRD member government between 2007 and 2020. The lines highlight some of the current "Light Footprint" travel options, using bus and bicycle routes. Is your neighbourhood served by "Light" travel options? Are there opportunities for GHG reduction?'},
    {type: 'h2', content: 'Problem'},
    {type: 'p', content: 'Greenhouse gas (GHG) emissions pose a substantial risk to the future life and well being of people worldwide. Many governments have set substantial goals for immediate reduction of emissions, while scientists assert that our natural systems have already been overburdened.²'},
    {type: 'h2', content: 'Solution'},
    {type: 'p', content: 'Transportation is the largest sector of GHG emissions for the region. Reducing the use of single-occupancy vehicles is an important component of managing GHGs. Where mass transit or personal power options are not available, electric vehicles offer another solution. Based on the emissions estimate in the 2020 CRD report, EVs deliver approximately 5.7 times as much power per unit of GHG emitted indirectly through the use of grid-supplied electricity over gasoline combustion.³'},
    {type: 'link', content: '1,2. Stantec Consulting Ltd., 2021. Capital Regional District - Municipalities and Electoral Areas: 2007 Base Year and 2020 Reporting Year Energy & GHG Emissions Inventory. Capital Regional District, Victoria.', url: "https://www.crd.bc.ca/docs/default-source/climate-action-pdf/reports/2020-crd-ghgmembermunicipality.pdf?sfvrsn=2716ebcd_2"},
    {type: 'link', content: '3,4. Stantec Consulting Ltd., 2021. Capital Regional District 2020 GPC BASIC+ Community Greenhouse Gas (GHG) Emissions Inventory Report. Capital Regional District, Victoria.', url: "https://www.crd.bc.ca/docs/default-source/climate-action-pdf/reports/2020-crd-ghg-inventorystudy.pdf?sfvrsn=5b16ebcd_2"},
  ],
  act: {
    initiatives: [
      {
        title: 'BC Climate Emergency Report Card',
        description: "The BC Climate Emergency Campaign has published a December 2022 Progress Report on the BC government's progress implementing ten urgent climate actions. These actions were called for in an open letter signed by a growing coalition of organizations that represent over two million British Columbians.",
        image: require('./png/ClimateEmergencyReportCard.png'),
        link: 'https://bcclimateemergency.ca/report-card'
      },
      {
        title: 'GC Climate & Environment Funding',
        description: 'Funding offered by the Government of Canada through various Grants and Contributions programs. Eligible groups, organizations and individuals can apply for support of projects that protect or conserve our natural environment.',
        image: require('./png/GovCan.png'),
        link: 'https://www.canada.ca/en/environment-climate-change/services/environmental-funding.html'
      },
      {
        title: 'CleanBC Go Electric',
        description: 'Buying an electric vehicle is more affordable than ever. You can apply for rebates on eligible cars, SUVs, trucks and vans and get rebates on charging stations, too.',
        image: require('./png/GoElectric.png'),
        link: 'https://goelectricbc.gov.bc.ca/personal-rebate-offers/passenger-vehicle-rebates/'
      },
      {
        title: 'South Island Climate Action Network',
        description: '"The South Island Climate Action Network (SI-CAN) is a network of organizations on Vancouver Island. SI-CAN shares information about efforts to address the climate emergency and works toward effective climate action by local, provincial and federal governments."',
        image: require('./png/SICAN.png'),
        noText: true,
        link: 'https://siclimateactionnetwork.wordpress.com/'
      },
    ],
  },
  mapData: [
    {
      title: 'Greenhouse Gas Emissions (On-road Transportation)',
      description: [
        {type:'p', content:'The Capital Regional District (CRD) has established 2007 as a baseline year where the greenhouse gas (GHG) emissions were calculated. The most recent reporting year was 2020, and this map layer shows which CRD member governments have reduced or increased their on-road transportation 2020 emissions compared to 2007.'},
        {type:'p', content:'The GHGs released to the atmosphere to be reported in the Transportation Sector are those from combustion of fuels in journeys by on-road, railway, waterborne navigation, aviation, and off-road. GHG emissions are produced directly by the combustion of fuel, and indirectly using grid-supplied electricity.'},
        {type:'p', content:'Learn more about the local sources of GHGs by reading the reports here:'},
        {
          type:'link',
          content:'Stantec Consulting Ltd., 2021. Capital Regional District - Municipalities and Electoral Areas: 2007 Base Year and 2020 Reporting Year Energy & GHG Emissions Inventory. Capital Regional District, Victoria.',
          url:'https://www.crd.bc.ca/about/data/climate-change'
        }
      ],
      data: require('./geojson/CRDLocalGovGHG.geojson'),
      format: 'polygon',
      symbology: 'classified',
      styleMap: styleMap_GHG,
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
        }, Math.min(Math.abs(f.properties.OnRoadTransportationChange) + 50, 100), null),
        onEachFeature: (f,l) => {
          l.bindPopup(mapPopupContent(
              f.properties.LocalGov,
              `${Math.abs(f.properties.OnRoadTransportationChange).toFixed(1)}% ${f.properties.OnRoadTransportationChange > 0 ? 'increase' : 'reduction'} in on-road transportation GHG emissions in 2020 compared to 2007 levels.`
            ), {offset: [0,8]});
          l.on({
            mouseover: (e) => {
              if (typeof e.target.setStyle === 'function')
                  e.target.setStyle({ fillOpacity: 0.6 })
              },
            mouseout: (e) => {
              if (typeof e.target.setStyle === 'function')
                e.target.setStyle({ fillOpacity: 0.3 })
              }
          });
        }
      }
    },
    {
      title: 'CRD Bike Map',
      description: 'The CRD Bike Map represents the cycling network throughout the region as informed by the Pedestrian and Cycling Master Plan, a key part of the Regional Transportation Plan. Encouraging cycling contributes to the vision for our communities as established in our Regional Growth Strategy.',
      data: require('./geojson/CRDBikeMap.geojson'),
      shape: 'line',
      symbology: 'classified',
      styleMap: styleMap_CRDBikeMap,
      options: {
        style: function (feature) {
          const baseStyle = {
            opacity: 0.9,
            stroke: true,
            fill: false,
            interactive: true,
            weight: 3,
          }
          return {
            ...baseStyle,
            color: getStyleMapProperty(
                'color',
                feature.properties.BkMapCarto,
                styleMap_CRDBikeMap
              ),
          }
        },
        onEachFeature: (f,l) => {
          l.bindPopup(
            mapPopupContent(
              'CRD Bike Map',
              f.properties.Label,
              ),
            {offset: [0,8]});
        }
      }
    },
    {
      title: 'BC Transit Bus Routes',
      description: 'The bus transportation routes offered by BC Transit. Some routes shown may be alternate or infrequently operated schedules.',
      data: require('./geojson/BCTransitRoutes.geojson'),
      shape: 'line',
      symbology: 'single',
      options: {
        style: {
          stroke: true,
          opacity: 0.9,
          fill: false,
          interactive: true,
          color: 'rgb(18, 144, 201)',
          weight: 3,
        },
        onEachFeature: (f,l) => {
          l.bindPopup(
            mapPopupContent(
              'Route ' + f.properties.Route,
              f.properties.RouteName,
              ),
            {offset: [0,8]});
        }
      }
    },
    {
      title: 'EV Charging Stations',
      description: '',
      layer: L.layerJSON({
        url: "https://api.openchargemap.io/v3/poi/?output=geojson&countrycode=CA&maxresults=3000&compact=false&camelcase=true&verbose=false&includecomments=true&key=ca66f44f-646d-4f64-98ec-639b924d2839&boundingbox=({lat1}%2C{lon1})%2C({lat2}%2C{lon2})",
        propertyItems: 'features',
        propertyLoc: 'geometry.coordinates',
        locAsGeoJSON: true,
        caching: true,
        cacheId: function(data, latlng) {
          return data.properties.name || latlng.toString();
        },
        buildPopup: function(data, marker) {
          return data.properties.name || null;
        }
      }),
      shape: 'point',
      symbology: 'single',
      icon: RecyclingIconStyle,
    },
    {
      title: 'Major Transportation Hubs',
      description: '',
      data: require('./geojson/GHGTransportHubs.geojson'),
      shape: 'point',
      symbology: 'classified',
      styleMap: styleMap_TransportHubs,
      options: {
        pointToLayer: (f,l) => pointToIconByProperty(
          f,
          l,
          "Icon",
          styleMap_TransportHubs
        ),
        onEachFeature: (f,l) => {
          l.bindPopup(
            (f.properties.Name === "BC Ferries"
              ? `<img src="${require('./png/BCFerriesGHGEmissions.png')}" /><img src="${require('./png/Top6EmittingBCFerriesRoutes.png')}" />`
              : `<img src="${require('./png/VictoriaInternationalAirportGHGEmissions.png')}" />`
            ),
            {
              offset: [0,-2],
              autoPan: false,
              autoClose: false,
              minWidth: 400,
              maxWidth: 400
            });
          l.on('add', (e) => e.target.openPopup());
        }
      }
    }
  ],
};
export default Footprint;
