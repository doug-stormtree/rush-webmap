import { point, tileLayer } from 'leaflet';
import { pointToIconByProperty, mapPopupContent } from './LeafletStyleHelpers';
// GeoJSON
import HeatDomes from './geojson/HeatDomes.geojson';
import Parks from './geojson/CRD_Parks.geojson';
import AC_Buildings from './geojson/AC_Buildings.geojson';
import Water_Fountains from './geojson/VictoriaDrinkingFountains.geojson';
import Links from './geojson/BeatTheHeat_Links.geojson';
// SVG
import { ReactComponent as CommunityCtrIcon } from './svg/cc.svg';
import { ReactComponent as LibraryIcon } from './svg/lib.svg';
import { ReactComponent as WaterIcon } from './svg/water.svg';
// PNG
import image from './png/BeatTheHeat.png';
import NorthPark from './png/NorthPark.png';
import ClimateAtlas from './png/ClimateAtlas.png';
import TwoBillionTrees from './png/2BillionTrees.png';

const styleMap_AC_Buildings = new Map([
  ["Community Centre", {icon: (<CommunityCtrIcon />), fill: '#36F', stroke: '#36F', legendText: 'Community Centre'}],
  ["Library", {icon: (<LibraryIcon />), fill: '#36F', stroke: '#36F', legendText: 'Library'}],
]);

const styleMap_Water_Fountains = new Map([
  ["drinking fountain", {
    icon: (<WaterIcon/>),
    fill: '#36F',
    stroke: '#36F',
    legendText: 'Drinking Fountain',
  }],
]);

const styleMap_TreeCoverage2005 = new Map([
  ["1", {legendText: '0 - 5', fillColor: 'rgb(200, 38, 0)'}],
  ["2", {legendText: '>5 - 10', fillColor: 'rgb(156, 70, 0)'}],
  ["3", {legendText: '>10 - 25', fillColor: 'rgb(112, 102, 0)'}],
  ["4", {legendText: '>25 - 50', fillColor: 'rgb(79, 101, 5)'}],
  ["5", {legendText: '>50 - 75', fillColor: 'rgb(39, 84, 16)'}],
  ["6", {legendText: '>75 - 100', fillColor: 'rgb(0, 68, 27)'}],
]);

const BeatTheHeat = {
  title: "Beat the Heat?",
  question: "How can I keep myself and the ecosystem cool & hydrated?",
  image: image,
  description: [
    {type: 'h2', content: 'Comparison'},
    {type: 'p', content: 'The red polygons show areas with significant increases in average summer surface temperature from 2018 to 2021 within the CRD. Tree coverage shows the areas where more vegetation is needed. Urban centres with dark pavement can absorb the heat and re-emit it at a rate of 95%.  Hard pavement does not allow the land to breathe and regulate the atmosphere. Cool buildings, parks and drinking fountains can provide essential relief. Notice the relationship between heat island areas, green space and dark or paved surfaces.'},
    {type: 'h2', content: 'Problem'},
    {type: 'p', content: 'All life is vulnerable to extreme heat.  Prolonged heat dries out landscapes,  increases risk of fires, can shorten growing seasons for farmers and create conditions for viruses and bacteria to thrive.  High temperatures also impacts biodiversity by drying out habitats or directly increasing body temperatures. 70% of human sudden deaths recorded in BC during the heat wave of 2021 were due to extreme temperatures.¹'},
    {type: 'h2', content: 'Solution'},
    {type: 'p', content: 'While ocean breezes can cool neighbourhoods closer to the shore,  making more room for trees, plants and soil will support a cool microclimate consistently. Trees, bushes and plants cool the area and draw down harmful greenhouse gases from the atmosphere. The soil does the work of processing the gases at a rate of 2:1 compared to plants.²'},
    {type: 'p', content: 'The Global Deal for Nature concludes that we need to protect at least 30% of the planet by 2030³ and many urban areas including Saanich have committed to at least 30% urban forest cover so that ecosystems continue to harbour an abundance of species, and provide services essential for human life, including carbon sequestration. The partnership between trees, soil, water and the atmosphere is key to having a healthy climate.  Encourage your municipality to increase permeable surfaces and adopt a policy of at least 30% canopy cover.'},
    {type: 'p', content: 'Decreasing dark non-draining pavement and increasing space for Nature provides many benefits including managing temperature, keeping things moist and recharging the water table, supporting birds and pollinators, increasing property values and enhancing a sense of beauty and wellbeing.'},
    {type: 'p', content: 'Support community groups working in restoration and taking care of each other. Taking action to manage temperature and moisture in our neighbourhoods is a key to climate action. Use this map to identify places that need attention, ways to stay cool and protect your community from extreme heat.'},
    {type: 'link', content: '1. CBC News, "70% of sudden deaths recorded during B.C. heat wave were due to extreme temperatures, coroner confirms," July 29, 2021.', url: "https://www.cbc.ca/news/canada/british-columbia/bc-heat-dome-sudden-deaths-570-1.6122316"},
    {type: 'link', content: '2. Claudia Rivera Cárdenas, Anne-Marie Daniel, "How does nature regulate atmospheric composition?: Formaldehyde removal from air," Proc. SPIE 11586, Bioinspiration, Biomimetics, and Bioreplication XI, 1158609, March 22, 2021.', url: "https://doi.org/10.1117/12.2579919"},
    {type: 'link', content: '3. Nicole Schwab, Kristin Rechberger, "We need to protect 30% of the planet by 2030. This is how we can do it," World Economic Forum, April 22, 2019.', url: "https://doi.org/10.1117/12.2579919"},
    {type: 'link', content: 'Cover photo by DESIGNECOLOGIST on Unsplash, July 20, 2021. Red sun over Toronto during wildfire season.', url: 'https://unsplash.com/photos/Y1CLEQZX-jc'}
  ],
  act: {
    initiatives: [
      {
        title: "North Park Heatwave Map",
        description: "The North Park Heatwave Map was created by Tenaya Lynx, Julia Frasher, Riley Sondergaard during their Community Based Participatory Reseach Class, Geography, University of Victoria. They consulted community members and organizations to identify areas of relief, concern and risk resulting in a map that the community can use to orient and help during a heatwave and also to advocate for improvements to infrastructure and services.",
        image: NorthPark,
        link: "https://www.google.com/maps/d/viewer?mid=12YLjmNqss6nHrcWQYYgK0ffl8JqkYaKd&ll=48.431337468326106%2C-123.35707554999999&z=16",
      },
      {
        title: "Climate Atlas of Canada",
        description: "The Climate Atlas of Canada combines climate science, mapping, and storytelling together with Indigenous Knowledges and community-based research and video to inspire awareness and action.",
        image: ClimateAtlas,
        link: "https://climateatlas.ca/",
      },
      {
        title: "2 Billion Trees Program",
        description: "The 2 Billion Trees (2BT) program aims to motivate and support new tree planting projects. Over a period of 10 years, by 2031, up to $3.2 billion will be invested in tree planting efforts to support provinces, territories, third-party organizations (for-profit and not-for profit) and Indigenous organizations to plant two billion trees across Canada.",
        image: TwoBillionTrees,
        link: "https://www.canada.ca/en/campaign/2-billion-trees/2-billion-trees-program.html",
      },
    ],
  },
  mapData: [
    {
      title: 'Tree Coverage (2005)',
      description: [
        {type:'p', content:'Estimated 2005 Tree Cover Percentage. The data have been created on behalf of the Urban Forest Stewardship Initiative (UFSI), a program of Habitat Acquisition Trust (HAT) by Caslys Consulting Ltd.'},
        {type:'p', content:'Learn more and compare with other years by reading the report here:'},
        {
          type:'link',
          content:'Caslys Consulting Ltd., 2013. Capital Regional District Land Cover Mapping 1986, 2005 and 2011 Summary Report. Capital Regional District, Victoria.',
          url:'https://hat.bc.ca/s/CRD_2011_land_cover_EXECUTIVE_summary.pdf'
        }
      ],
      layer: tileLayer(
        '/TC05_Tiles/{z}/{x}/{y}.png',
        { minNativeZoom: 14, maxNativeZoom: 14, opacity: 0.5 }
        ),
      shape: 'tile',
      symbology: 'classified',
      legendTitle: 'Percentage of Tree Cover',
      styleMap: styleMap_TreeCoverage2005,
    },
    {
      title: 'Local Initiatives',
      description: 'Learn more from these area specific community mapping initiatives by clicking one of these areas on the map and following the link.',
      data: Links,
      shape: 'polygon',
      symbology: 'single',
      options: {
        style: {
          stroke: false,
          fill: true,
          opacity: 0.5,
          fillOpacity: 0.4,
          fillColor: 'rgba(253,218,13,1.0)',
          interactive: true,
        },
        onEachFeature: (f,l) => {
          l.bindPopup(mapPopupContent(f.properties['Name'], f.properties['Description'], f.properties['URL'], 'Click here to view the ' + f.properties['Name']), {offset: point(0,8)});
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
          interactive: true,
          stroke: true,
          weight: 2,
          dashArray: '',
          lineCap: 'butt',
          lineJoin: 'miter',
          opacity: 0.5,
          color: 'rgb(115,144,60)',
          fill: true,
          fillOpacity: 0.7,
          fillColor: 'rgb(140,175,74)',
        },
        onEachFeature: (f,l) => {
          l.bindPopup(mapPopupContent(f.properties['Name'], f.properties['Type'] + ' with an area of ' + (f.properties['Shape.STArea()']/100000).toFixed(2) + ' km²'), {offset: point(0,8)});
        }
      }
    },
    {
      title: 'Heat Domes',
      description: 'NOAA defines a heat dome as a climate event when "high-pressure circulation in the atmosphere acts like a dome or cap, trapping heat at the surface and favoring the formation of a heat wave." The heat islands on this map are some areas within the CRD that have experienced the most significant increases in average summer surface temperature from 2018 to 2021. Using the satellite imagery, you can see the relationship between heat island distance and canopy vegetation, roof area and parking lots. This heat island map was created by UVic geography student Gillian Voss at the UVic Map Shop.',
      data: HeatDomes,
      shape: 'polygon',
      symbology: 'single',
      options: {
        style: {
          opacity: 0.5,
          color: 'rgba(189,17,20,1.0)',
          dashArray: '',
          lineCap: 'butt',
          lineJoin: 'miter',
          weight: 2,
          fill: true,
          fillOpacity: 0.7,
          fillColor: '#FF2226',
          interactive: true
        },
        onEachFeature: (f,l) => {
          l.bindPopup(mapPopupContent('Heat Dome', 'This area is predicted to be vulnerable to trapping extreme heat.'), {offset: point(0,8)});
        }
      }
    },
    {
      title: "Air Conditioned Buildings",
      description: 'Public air conditioned buildings that may provide relief during heat waves.',
      data: AC_Buildings,
      shape: 'point',
      symbology: 'classified',
      styleMap: styleMap_AC_Buildings,
      options: {
        pointToLayer: (f,l) => pointToIconByProperty(
          f,
          l,
          "Type",
          styleMap_AC_Buildings
        ),
        onEachFeature: (f,l) => {
          l.bindPopup(mapPopupContent(
            f.properties['Name of Place'],
            f.properties.Type + ': ' + f.properties.Address
            ), {offset: point(4.5,2)});
        }
      }
    },
    {
      title: 'Drinking Fountains',
      description: 'Public drinking water fountains in the City of Victoria',
      data: Water_Fountains,
      shape: 'point',
      symbology: 'classified',
      styleMap: styleMap_Water_Fountains,
      options: {
        pointToLayer: (f,l) => pointToIconByProperty(
          f,
          l,
          "FountainType",
          styleMap_Water_Fountains
        ),
        onEachFeature: (f,l) => {
          l.bindPopup(mapPopupContent(
            f.properties['LocationName'],
            f.properties.OwnerNotes + ' Drinking Fountain'
            ), {offset: point(4.5,2)});
        }
      }
    },
  ],
};
export default BeatTheHeat;