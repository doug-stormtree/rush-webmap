import * as L from 'leaflet';
import { getStyleMapProperty, mapPopupContent } from './LeafletStyleHelpers';
// GeoJSON
import CRDInundation from './geojson/CRDInundation.geojson';
import ShorelineSensitivity from './geojson/ShorelineSensitivity.geojson';
import HardShorelines from './geojson/HardShorelines.geojson'
// SVG
// PNG
import image from './png/ProtectTheCoast.png';
import climateSalmon from './png/ClimateActionSalmon.png';
import forageFish from './png/ForageFishSalishSea.png';
import savingOrcas from './png/SavingOrcas.png';
import seaChange from './png/SeaChange.png';
import seaLevelRise from './png/SeaLevelRise.png';
import surfrider from './png/Surfrider.png';
import engageNBS from './png/EngageNBS.png';
import ibcNBS from './png/IbcNBS.png';
import cleanCoast from './png/CleanCoast.png';
import sogDataCentre from './png/SOGDC.png';

const styleMap_CRDInundation = new Map([
  ["0",   {legendText: '0.0 m', color: '#1E44D3'}],
  ["0.5", {legendText: '0.5 m', color: '#5177E1'}],
  ["1",   {legendText: '1.0 m', color: '#81A4EE'}],
  ["2",   {legendText: '2.0 m', color: '#C6DBFA'}]
]);

const styleMap_ShorelineSensitivity = new Map([
  ["1", {legendText: 'Very Low', color: '#feebe2'}],
  ["2", {legendText: 'Low', color: '#fbb4b9'}],
  ["3", {legendText: 'Moderate', color: '#f768a1'}],
  ["4", {legendText: 'High', color: '#c51b8a'}],
  ["5", {legendText: 'Very High', color: '#7a0177'}]
]);

const styleMap_AquiferSusceptibility = new Map([
  ["1", {legendText: 'Very Low', fillColor: '#00b547'}],
  ["2", {legendText: 'Low', fillColor: '#81d53e'}],
  ["3", {legendText: 'Moderate', fillColor: '#fdff00'}],
  ["4", {legendText: 'High', fillColor: '#ffbe00'}],
  ["5", {legendText: 'Very High', fillColor: '#ff0000'}]
]);

const styleMap_HardShorelines = new Map([
  ['permeable', {legendText: 'Permeable', color: '#bd925a'}],
  ['impermeable', {legendText: 'Impermeable', color: '#A16928'}],
]);

const Coastal = {
  title: "Protect the Coast?",
  question: "Am I vulnerable to sea level rise, tsunamis, storm surges?",
  image: image,
  description: [
    {type: 'h2', content: 'Comparison'},
    {type: 'p', content: 'By comparing sea level rise scenarios, coastal sensitivity ratings and the potential for salt water to get into the groundwater table, we can identify the places that need  our attention now.  If we can plan and protect, then we can adapt our built environment to be more resilient and robust into the future.'},
    {type: 'h2', content: 'Problem'},
    {type: 'p', content: 'Our community conversations and decisions about housing and development must be informed by potential sea level rise and climate risk data so we can protect ourselves. The frequency of extreme water events and sea level rise will increase alongside more greenhouse gases in the atmosphere because the gases trap heat which changes the way air and water currents move around the globe.¹ Hotter and more polluted atmosphere can melt ice caps and change the way air moves across the surface of the planet.  If we don’t consider the potential impacts of sea level on the land and the water table, we risk flooding that we are not prepared for and a fresh water scarcity.²'},
    {type: 'h2', content: 'Solution'},
    {type: 'p', content: 'Eel grass, bull kelp and coral reefs are all natural models that contribute to a resilient coast line in a variety of ways. Nature-based solutions(NBS) is a term used for strategic natural infrastructure that copies and amplifies Nature’s designs in places that are vulnerable. This form of development which includes restoration and conservation of natural systems can inform better insurance rates and property values.³ (Learn more about Nature-based Insurance Solutions below in the initiatives)'},
    {type: 'p', content: 'Integrating NBS has many benefits including: mitigating storm surges, managing flood risks, carbon drawdown, supporting biodiversity, the food web and a resilient coast line.  The Government of Canada recognizes the need for Nature base solutions to address climate change events with a number of programs.⁴'},
    {type: 'p', content: 'The health of the shoreline and the water table are important considerations in protecting communities in the face of climate change. Please see the Initiatives section below for more information on Nature-based solutions.'},
    {type: 'p', content: 'Another piece of good news is that fine sand beaches provide habitat for forage fish which are the foundation of the food chain on the BC coast.  To protect it we need housing and development to be set back (ideally 30 meters) so that natural wave action and turn pebbles into sand and provide forage fish habitat as well as the best kind of beach to put a towel down on!⁵'},
    {type: 'p', content: 'What can I do:'},
    {type: 'list', content: [
      'Clean off boats, paddleboards and kayaks when you finish with them, especially before visiting a new place, to avoid introducing invasive species into the ecosystem.',
      'Do not litter and dispose of waste properly. Plastic bags can be mistaken for jellyfish and eaten by turtles.',
      'Use mooring buoys instead of anchoring. By using mooring buoys, you can avoid pulling up eelgrass beds and damaging sensitive ecosystems.',
      'Use designated pump out stations for boat sewage. This pollution will contaminate and harm marine ecosystems.',
    ]},
    {type: 'link', content: '1. Gensuo, J. and Shevliakova, E. (no date) Chapter 2: Land-climate interactions — special report on ... - IPCC, SPECIAL REPORT: SPECIAL REPORT ON CLIMATE CHANGE AND LAND. (Accessed: 21 May 2023).', url: 'https://www.ipcc.ch/srccl/chapter/chapter-2/'},
    {type: 'link', content: '2. Cusick, D. (2022) Where rising seas threaten drinking water, scientists look for affordable solutions, Scientific American. (Accessed: 21 May 2023).', url: 'https://www.scientificamerican.com/article/where-rising-seas-threaten-drinking-water-scientists-look-for-affordable-solutions/'},
    {type: 'link', content: '3. Nature’s potential to help reduce flood risks (2020) The Nature Conservancy. (Accessed: 21 May 2023).', url: 'https://www.nature.org/en-us/what-we-do/our-priorities/tackle-climate-change/climate-change-stories/natures-potential-reduce-flood-risks/'},
    {type: 'link', content: '4. Canada, S. (2021) Government of Canada - Natural Climate Solutions Fund, Natural Climate Solutions - Canada.ca. (Accessed: 21 May 2023).', url: 'https://www.canada.ca/en/campaign/natural-climate-solutions.html'},
    {type: 'link', content: '5. Society, T.E.L.C. and Sandborn, C. (2020) BC must act to protect spawning beaches, Environmental Law Centre | If it matters to BC’s environment, we’re on it. (Accessed: 21 May 2023).', url: 'https://elc.uvic.ca/protect-spawning-beaches/ '},
    {type: 'p', content: 'Cover Photo by Ken Josephson.'},
  ],
  act: {
    initiatives: [
      {
        title: "Engage with Nature-based Solutions",
        link: "https://www.engagewithnbs.ca/",
        image: engageNBS,
        description: "Engage with Nature-Based Solutions is a new initiative to support communities who apply nature-based solutions to their local lands and waters. Nature-based solutions support the health of natural systems, while addressing societal challenges.",
      },
      {
        title: "SeaChange Marine Conservation Society",
        noText: true,
        link: "https://www.seachangesociety.com",
        image: seaChange,
        description: "SeaChange takes action on marine conservation and restoration spills across the Salish Sea. SeaChange works with volunteers, community groups and First Nations to map, monitor and restore eelgrass habitat. SeaChange collaborates to help governments make better decisions about the fate of shorelines and nearshores.",
      },
      {
        title: "Nature-based Solutions - IBC",
        link: "http://www.ibc.ca/on/disaster/nature-based-solutions",
        image: ibcNBS,
        description: "A Nature-based Insurance Solution (NBIS) is an insurance framework that provides financial compensation or reimbursement against losses derived from damage to a natural asset – such as wetland, forest, beach, or other natural structure – based on predetermined risks coverage limits. NBIS serves a similar purpose to other, more conventional forms of insurance, as it allows natural assets to be treated like engineered assets (buildings, bridges, roads, vehicles, etc.). Insurance Bureau of Canada works with its members and external partners to advance nature-based solutions as a cost effective and under-utilized way to protect Canadians from flooding and other climate risks.",
      },
      {
        title: 'Surfrider',
        link: 'https://canada.surfrider.org/',
        image: surfrider,
        description: 'Surfrider Foundation Canada is dedicated to the protection and enjoyment of the ocean, beaches, and waves, for all people, through a powerful activist network.'
      },
      {
        title: "Sea Level Rise",
        link: "https://sealevelrise.ca/map.html",
        image: seaLevelRise,
        description: "Connect with coastal stakeholders across the country through this interactive map, which allows you to identify and share your observations and experiences with sea-level rise impacts along Canada's coastline.",
      },
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
        description: "Saving Orcas by Protecting Fish Spawning Beaches. Report prepared for the World Wildlife Fund Canada providing law reform recommendations for protecting forage fish populations and Southern Resident orcas. Produced by the Environmental Law Society at the University of Victoria."
      },
      {
        title: 'Clean Coast, Clean Waters',
        link: 'https://bccleancoast.ca/',
        image: cleanCoast,
        description: 'The Clean Coast, Clean Waters Initiative Fund is directed toward marine coastal Indigenous Nations, Indigenous organizations and local governments in BC, as well as BC non-profits and organizations / individuals that have expertise in shoreline and marine debris clean-up and/or removal of derelict vessels.'
      },
      {
        title: 'Strait of Georgia Data Centre',
        noText: true,
        link: 'https://sogdatacentre.ca/',
        image: sogDataCentre,
        description: 'Since 2011, the SGDC has been collecting marine ecosystem data for the Strait of Georgia, and providing these data through this online portal. It is designed to serve as a central data repository, to protect and collate marine ecosystem information for the Strait, and to allow for data sharing and integration. We continue to work with researchers, community and stewardship groups, First Nations, academics and non-profits to bring their data sets to the SGDC. In 2016 we began development of many mapping products, both static maps, animations and story maps, to allow for visual interpretation and increased visibility to many of the data sets housed in the Strait of Georgia Data Centre. A visit to the SGDC allows you to access the information you need about the Strait of Georgia marine ecosystem so you can stay informed; simplify data acquisition by exploring the comprehensive SGDC Data Portal; connect with others by learning about their work, utilizing their data, or submitting data of your own; and bring data to life by visualizing it through the SGDC Map Catalogue.'
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
    },
    {
      title: 'Hard Shorelines',
      description: [
        {type: 'p', content: 'Shoreline hard armouring refers to the construction of impermeable concrete seawalls, wooden pilings, or large rock revetments with the goal of preventing erosion from wave energy and sea level rise. Imposing a static configuration on dynamic shoreline systems can diminish salt marsh habitats, valuable ecosystems that support food chains, maintenance of fisheries, water purification, carbon sequestration, coastal erosion, and flood protection.¹'},
        {type: 'p', content: 'The data shown here is derived from ShoreZone, an international project that takes aerial photography of shorelines and partners with expert biologists and geologists to classify each shore unit. Areas shown on the map represent shorelines that contained over 50 percent human-made structures. Permeable shorelines include rip-rap or wooden crib structures where surface oil from a spill will easily penetrate the structure. Impermeable shorelines include concrete seawalls or steel sheet pile.² This provides some sense of where hard armouring has been constructed but a more accurate inventory should be completed for the Capital Regional District.'},
        {type: 'link', content: '1. Nicole Peterson, Craig Landry, Alexander Clark, Kevin Samples, and Brian Bledsoe (2019). Socioeconomic and environmental predictors of esuarine shoreline hard armoring. Scientific Reports, 9(1), 16288-10.', url: 'https://doi.org/10.1038/s41598-019-52504-y'},
        {type: 'link', content: '2. Sarah Cook, Sean Daley, Kalen Morrow, and Sheri Ward (2017). "ShoreZone Coastal Imaging and Habitat Mapping Protocol." Victoria, Canada: Coastal and Ocean Resources.', url: 'https://media.fisheries.noaa.gov/2020-09/ShoreZone-Protocol-2017-AKR.pdf?RSScY5o5Q1RKNuGV2daZiExnYGQzx_Ov'},
      ],
      data: HardShorelines,
      shape: 'line',
      symbology: 'classified',
      legendTitle: 'Artificially Constructed Shoreline',
      styleMap: styleMap_HardShorelines,
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
              feature.properties.Permeability,
              styleMap_HardShorelines
            )
          }
        }
      }
    },
    {
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