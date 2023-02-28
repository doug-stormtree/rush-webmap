import { point } from 'leaflet';
import { mapPopupContent } from '../LeafletStyleHelpers';
import image from './image.jpg';
import * as ALR from './AgriculturalLandReserve.json';
import * as Municipalities from './Municipalities.json';
import * as SpeciesAtRisk from './SpeciesAtRisk.json';
import * as Parks from './CRD_Parks.json';
import * as BCTransitRoutes from './BCTransitRoutes.json';
import * as CRDBikeMap from './CRDBikeMap.json';

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
      format: 'polygon',
      options: {
        style: function (feature) {
          const baseStyle = {
            stroke: true,
            fill: true,
            fillOpacity: 0,
            dashArray: '2 12',
            interactive: true
          }
          return {
            ...baseStyle,
            color: '#EE0',
          }
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
      format: 'polygon',
      options: {
        style: function (feature) {
          const baseStyle = {
            stroke: false,
            fill: true,
            fillOpacity: 0.7,
            fillColor: 'rgba(112,130,56,1.0)',
            interactive: true,
          }
          return {
            ...baseStyle,
          }
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
      format: 'polygon',
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
      format: 'polygon',
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
            fillColor: getSARColor(feature.properties.BC_LIST),
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
      format: 'polygon',
      options: {
        style: function (feature) {
          const baseStyle = {
            stroke: true,
            fill: false,
            interactive: true,
            color: 'rgba(28, 78, 136, 255)',
            weight: 3,
          }
          return {
            ...baseStyle,
          }
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
      format: 'polygon',
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
            color: getCRDBikeColor(feature.properties.BkMapCarto),
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

function getSARColor(val) {
  switch (val) {
    case 'Red':
      return '#F00';
    case 'Blue':
      return '#00F';
    case 'Yellow':
      return '#FF0';
    default:
      return '#555';
  }
}

function getCRDBikeColor(val) {
  const colorMap = {
    "T1" : 'rgba(120, 162, 47, 255)',
    "T1d": 'rgba(137, 90, 68, 255)',
    "BL1": 'rgba(0, 139, 176, 255)',
    "SR1": 'rgba(236, 136, 29, 255)',
    "DC" : 'rgba(211, 18, 69, 255)'
  }
  return colorMap.hasOwnProperty(val) 
    ? colorMap[val] 
    : 'rgba(255, 255, 255, 255)';
}