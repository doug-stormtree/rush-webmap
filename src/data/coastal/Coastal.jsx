import * as L from 'leaflet';
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
  ["1", {legendText: 'Very Low', color: '#2b83ba'}],
  ["2", {legendText: 'Low', color: '#abdda4'}],
  ["3", {legendText: 'Moderate', color: '#ffffbf'}],
  ["4", {legendText: 'High', color: '#fdae61'}],
  ["5", {legendText: 'Very High', color: '#d7191c'}]
]);

const styleMap_AquiferSusceptibility = new Map([
  ["1", {legendText: 'Very Low', fillColor: '#00b547'}],
  ["2", {legendText: 'Low', fillColor: '#81d53e'}],
  ["3", {legendText: 'Moderate', fillColor: '#fdff00'}],
  ["4", {legendText: 'High', fillColor: '#ffbe00'}],
  ["5", {legendText: 'Very High', fillColor: '#ff0000'}]
]);

const Coastal = {
  title: "Protect the Coast?",
  question: "Am I vulnerable to sea level rise, tsunamis, storm surges?",
  image: image,
  description: [
    {type: 'p', content: "Extreme water events and sea level rise will increase with the amount of greenhouse gases in the atmosphere because the greenhouse gases impact temperatures around the globe.  Hotter and more polluted atmosphere can melt ice caps and change the way air moves across the surface of the planet."},
    {type: 'p', content: "By looking at the health of the shoreline and what the ground is made of, we can find places that need more eel grass or sediment to improve and protect the area."},
  ],
  act: {
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
      description: [
        {type: 'p', content: 'The Capital Regional District (CRD) retained Associated Engineering, DHI and Westmar Advisors to undertake the Capital Region Coastal Flood Inundation Mapping Project (the project) in 2019 -2021. On behalf of local government and other regional stakeholders, staff worked closely with an inter-municipal and multi-disciplinary project team to complete the Regional Coastal Flood Inundation Project in order to better understand regional impacts from coastal storm flooding due to sea level rise and tsunamis. Modeled scenarios show the higher high water large tide (HHWLT) levels for a 0.0m, 0.5m, 1.0m, and 2.0m relative sea level rise (RSLR), respectively.'},
        {type: 'link', content: 'Capital Regional District, 2021. Capital Region Coastal Flood Inundation Mapping Project Summary, Version 2.0. Victoria.', url: 'https://www.crd.bc.ca/docs/default-source/climate-action-pdf/reports/2020-sea-level-mapping-project/coastal-flood-inundation-mapping-project-summary.pdf'},
      ],
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
            {offset: L.point(0,8)});
        }
      }
    },{
      title: 'Shoreline Sensitivity',
      description: [
        {type: 'p', content:'BC Parks developed a model that independently rates marine and terrestrial segments of the British Columbia coastline according to their sensitivity to sea level rise, then spatially combines the ratings to build a map of relative shoreline sensitivity.'},
        {type: 'p', content:'Ratings were developed using an existing biogeographic land classification dataset (Broad Ecosystem Inventory), and previously rated sensitivity of coastal and marine feature classes (ShoreZone), modified to account for the effects of slope exposure and sediment mobility.'},
        {type: 'link', content:'Biffard, D., Stevens, T., Rao, A., and Woods, B., 2014. BC Parks Shoreline Sensitivity Model. Province of British Columbia, Victoria.', url:'https://a100.gov.bc.ca/pub/acat/public/viewReport.do?reportId=42825'},
      ],
      data: ShorelineSensitivity,
      shape: 'line',
      symbology: 'classified',
      legendTitle: 'Sensitivity to Sea-level Rise',
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
            {offset: L.point(0,8)});
        }
      }
    },{
      title: 'Sea to Groundwater Risk (Bedrock)',
      description: [
        {type:'p', content:'An Aquifer is a body of rock or sediment that holds groundwater and readily transmits that water to wells and springs. Aquifer Susceptibility refers to the natural potential for sea water intrusion, not including risk from well pumping or sea level rise, that could lead to increased salinity.'},
        {type:'p', content:'Bedrock aquifers typically have lower transmissivity to the ocean. This study uses topographic slope and distance from the coast to infer flux, that is, the pressure balance at the boundary between aquifer and ocean.'},
        {type:'p', content:'Learn more about these models by reading the report here:'},
        {
          type:'link',
          content:'Western Water Associates Ltd (Sivak, T. and M. Wei), 2021. GIS Modelling of Sea Water Intrusion Risk along British Columbia’s Coast. Water Science Series WSS2021-06, Province of British Columbia, Victoria.',
          url:'https://a100.gov.bc.ca/pub/acat/public/viewReport.do?reportId=59164'
        }
      ],
      layer: L.tileLayer(
        '/BED_AS_Tiles/{z}/{x}/{y}.png',
        { minNativeZoom: 8, maxNativeZoom: 14, opacity: 0.4 }
        ),
      shape: 'tile',
      symbology: 'classified',
      legendTitle: 'Risk of Sea Water Intrusion',
      styleMap: styleMap_AquiferSusceptibility,
    },{
      title: 'Sea to Groundwater Risk (Sediment)',
      description: [
        {type:'p', content:'An Aquifer is a body of rock or sediment that holds groundwater and readily transmits that water to wells and springs. Aquifer Susceptibility refers to the natural potential for sea water intrusion, not including risk from well pumping or sea level rise, that could lead to increased salinity.'},
        {type:'p', content:'Unconsolidated or sediment-based aquifers typically have much higher transmissivity to the ocean and are found in low-lying areas along the coast. This study uses static groundwater elevation and distance from the coast to infer flux, that is, the pressure balance at the boundary between aquifer and ocean.'},
        {type:'p', content:'Learn more about these models by reading the report here:'},
        {
          type:'link',
          content:'Western Water Associates Ltd (Sivak, T. and M. Wei), 2021. GIS Modelling of Sea Water Intrusion Risk along British Columbia’s Coast. Water Science Series WSS2021-06, Province of British Columbia, Victoria.',
          url:'https://a100.gov.bc.ca/pub/acat/public/viewReport.do?reportId=59164'
        }
      ],
      layer: L.tileLayer(
        '/UNC_AS_Tiles/{z}/{x}/{y}.png',
        { minNativeZoom: 8, maxNativeZoom: 14, opacity: 0.4 }
        ),
      shape: 'tile',
      symbology: 'classified',
      legendTitle: 'Risk of Sea Water Intrusion',
      styleMap: styleMap_AquiferSusceptibility,
    }
  ],
};
export default Coastal;