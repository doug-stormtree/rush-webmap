import { point } from 'leaflet';
import { getStyleMapProperty, mapPopupContent } from '../LeafletStyleHelpers';
import image from './image.jpg';
import * as ALR from './AgriculturalLandReserve.json';
import * as Municipalities from './Municipalities.json';
import * as SpeciesAtRisk from './SpeciesAtRisk.json';
import * as Parks from './CRD_Parks.json';
import * as BCTransitRoutes from './BCTransitRoutes.json';
import * as CRDBikeMap from './CRDBikeMap.json';

const styleMap_SpeciesAtRisk = new Map([
  ["Red",    {legendText: 'Red List', fillColor: '#F00'}],
  ["Blue",   {legendText: 'Blue List', fillColor: '#00F'}],
  ["Yellow", {legendText: 'Yellow List', fillColor: '#FF0'}],
]);

const styleMap_CRDBikeMap = new Map([
  ["T1" , {legendText: 'Paved Multi-Use Trails / Protected Bike Lanes', color: 'rgba(120, 162, 47, 255)'}],
  ["T1d", {legendText: 'Unpaved Multi-Use Trails', color: 'rgba(137, 90, 68, 255)'}],
  ["BL1", {legendText: 'Bike Lanes / Road Shoulders', color: 'rgba(0, 139, 176, 255)'}],
  ["SR1", {legendText: 'Shared Streets', color: 'rgba(236, 136, 29, 255)'}],
  ["DC" , {legendText: 'Difficult Connections', color: 'rgba(211, 18, 69, 255)'}]
]);

const Development = {
  title: "Development?",
  question: "Development a good idea?",
  image: image,
  learn: {
    text: [
      "Lorem.",
    ],
    initiatives: [],
  },
  act: {
    list: [
      "Lorem.",
    ],
    initiatives: [],
  },
  mapData: [
    {
      title: 'Municipalities',
      description: 'The administrative boundaries of the municipalities that fall within the Capital Regional District.',
      data: Municipalities,
      shape: 'polygon',
      symbology: 'single',
      options: {
        style: {
          stroke: true,
          color: '#EE0',
          dashArray: '2 12',
          fill: true,
          fillOpacity: 0,
          interactive: true,
        },
        onEachFeature: (f,l) => {
          l.bindPopup(
            mapPopupContent(
              f.properties.ADMIN_AREA_ABBREVIATION,
              f.properties.ADMIN_AREA_NAME,
              ),
            {offset: point(0,8)});
        }
      }
    },
    {
      title: 'Agricultural Land Reserve',
      description: 'The spatial representation for the boundary of an Agricultural Land Reserve (ALR), which is a parcel of land, based on soil and climate, deemed necessary to be maintained for agricultural use. The data gets updated four times a year, at the end of: Jan, Apr, Jul and Oct. It is also available on the ALC’s website: https://www.alc.gov.bc.ca/alr-maps/',
      data: ALR,
      shape: 'polygon',
      symbology: 'single',
      options: {
        style: {
          stroke: false,
          fill: true,
          fillOpacity: 0.7,
          fillColor: 'rgba(112,130,56,1.0)',
          interactive: true,
        },
        onEachFeature: (f,l) => {
          l.bindPopup(
            mapPopupContent(
              'Agriculutural Land Reserve',
              'A parcel of land, based on soil and climate, deemed necessary to be maintained for agricultural use.',
              ),
            {offset: point(0,8)});
        }
      }
    },
    {
      title: 'Parks',
      description: 'These are the designated parks within the CRD. Greenspace has many benefits, including providing shade, cleaning the air, and reducing noise. While plants help draw harmful greenhouse gases from the atmosphere, the soil processes the gases. Soil processes greenhouse gases at a rate of 2:1 compared to plants. The partnership between soil and the atmosphere is key to having a healthy climate. Nature is also great for your physical and mental wellbeing.',
      data: Parks,
      shape: 'polygon',
      symbology: 'single',
      options: {
        style: {
          stroke: false,
          fill: true,
          opacity: 0.5,
          fillOpacity: 0.7,
          fillColor: 'rgba(140,175,74,1.0)',
          interactive: true,
        },
        onEachFeature: (f,l) => {
          l.bindPopup(mapPopupContent(f.properties['Name'], f.properties['Type'] + ' with an area of ' + (f.properties['Shape.STArea()']/100000).toFixed(2) + ' km²'), {offset: point(0,8)});
        }
      }
    },
    {
      title: 'Species At Risk',
      description: 'The B.C. Conservation Data Centre’s spatial view of publicly available, known locations of species and ecological communities at risk. The purpose of this list is to prevent accidental destruction of a location of a species or ecological community at risk and for research and analysis. Based on their conservation status rank, each species and ecosystem is assigned to the red, blue or yellow list to help set conservation priorities and provide a simplified view of the status of B.C.’s species and ecosystems.',
      data: SpeciesAtRisk,
      shape: 'polygon',
      symbology: 'classified',
      styleMap: styleMap_SpeciesAtRisk,
      options: {
        style: function (feature) {
          const baseStyle = {
            stroke: false,
            fill: true,
            fillOpacity: 0.5,
            interactive: true
          }
          return {
            ...baseStyle,
            fillColor: getStyleMapProperty(
                'fillColor',
                feature.properties.BC_LIST,
                styleMap_SpeciesAtRisk
              ),
          }
        },
        onEachFeature: (f,l) => {
          l.bindPopup(
            mapPopupContent(
              f.properties.ENG_NM,
              'Scientific name: ' + f.properties.SCI_NM + ' is found on the B.C. ' + f.properties.BC_LIST + ' list.'
              ),
            {offset: point(0,8)});
        }
      }
    },
    {
      title: 'BC Transit Bus Routes',
      description: 'The bus transportation routes offered by BC Transit. Some routes shown may be alternate or infrequently operated schedules.',
      data: BCTransitRoutes,
      shape: 'line',
      symbology: 'single',
      options: {
        style: {
          stroke: true,
          fill: false,
          interactive: true,
          color: 'rgba(28, 78, 136, 255)',
          weight: 3,
        },
        onEachFeature: (f,l) => {
          l.bindPopup(
            mapPopupContent(
              'Route ' + f.properties.Route,
              f.properties.RouteName,
              ),
            {offset: point(0,8)});
        }
      }
    },
    {
      title: 'CRD Bike Map',
      description: 'The CRD Bike Map represents the cycling network throughout the region as informed by the Pedestrian and Cycling Master Plan, a key part of the Regional Transportation Plan. Encouraging cycling contributes to the vision for our communities as established in our Regional Growth Strategy.',
      data: CRDBikeMap,
      shape: 'line',
      symbology: 'classified',
      styleMap: styleMap_CRDBikeMap,
      options: {
        style: function (feature) {
          const baseStyle = {
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
            {offset: point(0,8)});
        }
      }
    },
  ],
};
export default Development;