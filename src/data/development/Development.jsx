import { point } from 'leaflet';
import { getStyleMapProperty, mapPopupContent } from '../LeafletStyleHelpers';
import image from './image.jpg';
import engageNBS from './EngageNBS.png';
import ALR from './AgriculturalLandReserve.geojson';
import Municipalities from './Municipalities.geojson';
import SpeciesAtRisk from './SpeciesAtRisk.geojson';
import Parks from './CRD_Parks.geojson';

const styleMap_SpeciesAtRisk = new Map([
  ["Red",    {legendText: 'Red List', fillColor: '#F00'}],
  ["Blue",   {legendText: 'Blue List', fillColor: '#00F'}],
  ["Yellow", {legendText: 'Yellow List', fillColor: '#FF0'}],
]);

const Development = {
  title: "Development?",
  question: "Development a good idea?",
  image: image,
  description: [
    {type: 'h2', content: "Comparison"},
    {type: 'p', content: 'The map shows how well municipalities are meeting a 30% target of urban forest cover to support temperature regulation, noise buffering, biodiversity, moisture retention, carbon drawdown, wellbeing, and property values.  The location and access of aquifers is important in protecting community water security. Ecosystem types help to inform the landscape design choices to connect ecosystems for better performance of natural assets and resilience to climate events. Watersheds and stormwater infrastructure  highlight opportunities for restoration.  Transportation routes support mobility between work and home.'},
    {type: 'h2', content: "Problem"},
    {type: 'p', content: 'Affordable housing that is in proximity to workplaces is a top priority for governments to action because it reduces green house gases, makes life more affordable and accommodates the diversity of generations that makes a community stable and able to take care of itself. Unfortunately affordable housing is often located in areas that are vulnerable to a variety of environmental factors and developers are under pressure to deliver on a budget and timeline that does not promote innovation and improvement in the resilience of the surrounding area. The insurance industry feels the costs of the realities of climate change in the payouts after fires, floods, earthquakes, etc.... Many homeowners are seeing their insurance rates rising with the frequency of climate related disasters.'},
    {type: 'h2', content: "Solution"},
    {type: 'p', content: 'Nature-based Insurance Solutions are a growing trend in the insurance industry of acknowledging the value of ecosystem features like forests, wetlands, eelgrass & kelp beds and reefs in buffering environmental stresses like extreme wind, water and temperature.  By enhancing the function and scope of the local ecosystem when re-developing an area, multiple benefits and savings are possible.  Increasing native vegetation and canopy cover can increase property values, regulate neighbourhood temperature, buffer noise as well as attracting biodiversity and carbon credits. Restoring watersheds can also improve property values while providing cost savings in storm water infrastructure. By harmonizing natural and built features, developers are  securing the long-term wellbeing of communities through ecological connectivity that creates resilience to climate change.'},
  ],
  act: {
    initiatives: [
      {
        title: "Engage with Nature-based Solutions",
        link: "https://www.engagewithnbs.ca/",
        image: engageNBS,
        description: "Engage with Nature-Based Solutions is a new initiative to support communities who apply nature-based solutions to their local lands and waters. Nature-based solutions support the health of natural systems, while addressing societal challenges.",
      },
    ],
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
  ],
};
export default Development;