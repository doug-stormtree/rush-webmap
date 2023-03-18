import { point } from 'leaflet';
import { getStyleMapProperty, mapPopupContent } from '../LeafletStyleHelpers';
import image from './image.jpg';
import climateSalmon from './climate-salmon.png';
import forageFish from './forage-fish.png';
import savingOrcas from './saving-orcas.jpg';
import CRDInundation from './CRDInundation.geojson';
import ShorelineSensitivity from './ShorelineSensitivity.geojson';

const styleMap_CRDInundation = new Map([
  ["0",   {legendText: '0.0 m', color: '#1E44D3'}],
  ["0.5", {legendText: '0.5 m', color: '#5177E1'}],
  ["1",   {legendText: '1.0 m', color: '#81A4EE'}],
  ["2",   {legendText: '2.0 m', color: '#C6DBFA'}]
]);

const styleMap_ShorelineSensitivity = new Map([
  ["1", {legendText: 'very low', color: '#2b83ba'}],
  ["2", {legendText: 'low', color: '#abdda4'}],
  ["3", {legendText: 'moderate', color: '#ffffbf'}],
  ["4", {legendText: 'high', color: '#fdae61'}],
  ["5", {legendText: 'very high', color: '#d7191c'}]
]);

const Coastal = {
  title: "Protect the Coast?",
  question: "Am I vulnerable to sea level rise, tsunamis, storm surges?",
  image: image,
  learn: {
    text: [
      "Lorem.",
    ],
  },
  act: {
    list: [
      "Lorem.",
    ],
    initiatives: [
      {
        title: "Climate Action for Salmon",
        link: "https://storymaps.arcgis.com/stories/9a1164af036041638e75df5cb02bb15a",
        image: climateSalmon,
        description: "Climate change is here, and wild Pacific salmon need our help. Storymap by Jake Dingwall.",
      },
      {
        title: "Forage Fish in the Salish Sea",
        link: "https://storymaps.arcgis.com/stories/969e5bb112984c16b7214995c8fc75c3",
        image: forageFish,
        description: "Forage fish are small schooling fish that play a crucial role in the marine food web, directly feeding many marine animals including orcas, birds, and salmon. Storymap by the Strait of Georgia Data Centre.",
      },
      {
        title: "Saving Orcas",
        link: "https://elc.uvic.ca/publications/saving-orcas/",
        image: savingOrcas,
        description: "Saving Orcas by Protecting Fish Spawning Beaches. Report prepared for the World Wildlife Fund Canada providing law reform recommendations for protecting forage fish populations and Southern Resident orcas."
      }
    ],
  },
  mapData: [
    {
      title: 'Coastal Flood Inundation Scenarios',
      description: 'The Capital Regional District (CRD) retained Associated Engineering, DHI and Westmar Advisors to undertake the Capital Region Coastal Flood Inundation Mapping Project (the project) in 2019 -2021. On behalf of local government and other regional stakeholders, staff worked closely with an inter-municipal and multi-disciplinary project team to complete the Regional Coastal Flood Inundation Project in order to better understand regional impacts from coastal storm flooding due to sea level rise and tsunamis. Modeled scenarios show the higher high water large tide (HHWLT) levels for a 0.0m, 0.5m, 1.0m, and 2.0m relative sea level rise (RSLR), respectively.',
      data: CRDInundation,
      shape: 'line',
      symbology: 'classified',
      styleMap: styleMap_CRDInundation,
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
              styleMap_CRDInundation
            ),
          }
        },
        onEachFeature: (f,l) => {
          l.bindPopup(
            mapPopupContent(
              'Capital Region Coastal Flood Inundation',
              'Scenario of ' + f.properties.RSLR + 'm Relative Sea Level Rise (RSLR), this line represents the Higher High Water Large Tide (HHWLT) level.',
              ),
            {offset: point(0,8)});
        }
      }
    },{
      title: 'Shoreline Sensitivity',
      description: 'BC Parks developed a model that independently rates marine and terrestrial segments of the British Columbia coastline according to their sensitivity to sea level rise, then spatially combines the ratings to build a map of relative shoreline sensitivity. Ratings were developed using an existing biogeographic land classification dataset (Broad Ecosystem Inventory), and previously rated sensitivity of coastal and marine feature classes (ShoreZone), modified to account for the effects of slope exposure and sediment mobility.',
      data: ShorelineSensitivity,
      shape: 'line',
      symbology: 'classified',
      styleMap: styleMap_ShorelineSensitivity,
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
              styleMap_ShorelineSensitivity
            ),
          }
        },
        onEachFeature: (f,l) => {
          l.bindPopup(
            mapPopupContent(
              'BC Parks Shoreline Sensitivity Rating',
              'This shoreline has ' + 
                styleMap_ShorelineSensitivity.get(String(f.properties.SENSI_FINA)).legendText +
                ' sensitivity to sea level rise.',
              ),
            {offset: point(0,8)});
        }
      }
    },
  ],
};
export default Coastal;