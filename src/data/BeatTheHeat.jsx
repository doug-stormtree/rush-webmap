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
  image: require('./png/BeatTheHeat.png'),
  description: [
    {type: 'h2', content: 'Comparison'},
    {type: 'p', content: 'The red polygons show areas with significant increases in average summer surface temperature from 2018 to 2021 within the CRD. Tree coverage shows the areas where more vegetation is needed. Urban centres with dark pavement can absorb the heat and re-emit it at a rate of 95%.  Hard pavement does not allow the land to breathe and regulate the atmosphere. Cool buildings, parks and drinking fountains can provide essential relief. Notice the relationship between heat island areas, green space and dark or paved surfaces.'},
    {type: 'h2', content: 'Problem'},
    {type: 'p', content: 'All life is vulnerable to extreme heat.  Prolonged heat dries out landscapes,  increases risk of fires, can shorten growing seasons for farmers and create conditions for viruses and bacteria to thrive.  High temperatures also impacts biodiversity by drying out habitats or directly increasing body temperatures. 70% of human sudden deaths recorded in BC during the heat wave of 2021 were due to extreme temperatures.¹'},
    {type: 'p', content: 'Research shows that communities with a lower income in Canada’s largest cities don’t have access to as much greenspace impacting their sense of well being and making them more vulnerable to heat events.²'},
    {type: 'h2', content: 'Solution'},
    {type: 'p', content: 'This same research sets the 3-30-300 standard meaning, "everyone should be able to see at least three trees from their home, that all neighbourhoods should have at least a 30% tree canopy, and that all residents should have a greenspace of at least one hectare within 300 metres of where they live."²'},
    {type: 'p', content: 'While ocean breezes can cool neighbourhoods closer to the shore,  making more room for trees, plants and soil will support a cool microclimate consistently. Trees, bushes and plants cool the area and draw down harmful greenhouse gases from the atmosphere. The soil does the work of processing the gases at a rate of 2:1 compared to plants.³'},
    {type: 'p', content: 'The Global Deal for Nature concludes that we need to Protect at least 30% of the planet by 2030⁴ and many urban areas including Saanich have committed to at least 30% urban forest cover so that ecosystems continue to harbour an abundance of species, and provide services essential for human life, including carbon sequestration. The partnership between trees, soil, water and the atmosphere is key to having a healthy climate.  Encourage your municipality to increase permeable surfaces and adopt a policy of at least 30% canopy cover.'},
    {type: 'p', content: 'Decreasing dark non-draining pavement and increasing space for Nature provides many benefits including managing temperature, keeping things moist and recharging the water table, supporting birds and pollinators, increasing property values and enhancing a sense of beauty and wellbeing.'},
    {type: 'p', content: 'Support community groups working in restoration and taking care of each other. Taking action to manage temperature and moisture in our neighbourhoods is a key to climate action. Use this map to identify places that need attention, ways to stay cool and protect your community from extreme heat.'},
    {type: 'link', content: '1. CBC News, "70% of sudden deaths recorded during B.C. heat wave were due to extreme temperatures, coroner confirms," July 29, 2021.', url: "https://www.cbc.ca/news/canada/british-columbia/bc-heat-dome-sudden-deaths-570-1.6122316"},
    {type: 'link', content: '2. Erin Whittingham, Vilbert Vabi, Sharmeena Lalloo, and Saleena Hak, 2022. Canada’s Urban Forests: Bringing the Canopy to All. Nature Canada.', url: 'https://naturecanada.ca/wp-content/uploads/2022/09/Nature-Canada-Report-Tree-Equity.pdf'},
    {type: 'link', content: '3. Claudia Rivera Cárdenas, Anne-Marie Daniel, "How does nature regulate atmospheric composition?: Formaldehyde removal from air," Proc. SPIE 11586, Bioinspiration, Biomimetics, and Bioreplication XI, 1158609, March 22, 2021.', url: "https://doi.org/10.1117/12.2579919"},
    {type: 'link', content: '4. Nicole Schwab, Kristin Rechberger, "We need to protect 30% of the planet by 2030. This is how we can do it," World Economic Forum, April 22, 2019.', url: "https://doi.org/10.1117/12.2579919"},
    {type: 'link', content: 'Cover photo by DESIGNECOLOGIST on Unsplash, July 20, 2021. Red sun over Toronto during wildfire season.', url: 'https://unsplash.com/photos/Y1CLEQZX-jc'}
  ],
  act: {
    initiatives: [
      {
        title: "North Park Heatwave Map",
        description: "The North Park Heatwave Map was created by Tenaya Lynx, Julia Frasher, Riley Sondergaard during their Community Based Participatory Reseach Class, Geography, University of Victoria. They consulted community members and organizations to identify areas of relief, concern and risk resulting in a map that the community can use to orient and help during a heatwave and also to advocate for improvements to infrastructure and services.",
        image: require('./png/NorthPark.png'),
        link: "https://www.google.com/maps/d/viewer?mid=12YLjmNqss6nHrcWQYYgK0ffl8JqkYaKd&ll=48.431337468326106%2C-123.35707554999999&z=16",
      },
      {
        title: "Climate Atlas of Canada",
        description: "The Climate Atlas of Canada combines climate science, mapping, and storytelling together with Indigenous Knowledges and community-based research and video to inspire awareness and action.",
        image: require('./png/ClimateAtlas.png'),
        link: "https://climateatlas.ca/",
      },
      {
        title: "2 Billion Trees Program",
        description: "The 2 Billion Trees (2BT) program aims to motivate and support new tree planting projects. Over a period of 10 years, by 2031, up to $3.2 billion will be invested in tree planting efforts to support provinces, territories, third-party organizations (for-profit and not-for profit) and Indigenous organizations to plant two billion trees across Canada.",
        image: require('./png/2BillionTrees.png'),
        link: "https://www.canada.ca/en/campaign/2-billion-trees/2-billion-trees-program.html",
      },
      {
        title: 'Nature Canada Report: Tree Equity',
        description: '"...the 3-30-300 rule, which states that everyone should be able to see at least three trees from their home, that all neighbourhoods should have at least a 30% tree canopy, and that all residents should have a greenspace of at least one hectare within 300 metres of where they live. While this principle can help substantially in advancing tree equity, we need to go further. In this report, Nature Canada proposes that equitable access should be thought of in terms of three variables—proximity to urban trees and forests, urban forest quality and the governance of urban forests."',
        link: 'https://naturecanada.ca/wp-content/uploads/2022/09/Nature-Canada-Report-Tree-Equity.pdf',
        image: require('./png/NatureCanadaReport.png'),
      },
      {
        title: 'Urban Forest Canopy in CRD',
        description: '"The Urban Forest Stewardship Initiative (UFSI) is a program of Habitat Acquisition Trust (HAT). It is a partnership of individuals, organizations and governments dedicated to the conservation, restoration and sustainable use of Greater Victoria’s urban forest. Urban forests are treed landscapes found within a community. They include old-growth remnants, backyard fruit trees, urban parks and trail systems, Garry oak meadows, and treed boulevards. The challenge within Greater Victoria is that the population rate is estimated to increase by 33% over the next 20 years which emphasizes the need to increase the awareness of the benefits of urban forest, and the importance of implementing land use planning initiatives to promote the sustainable development of the region. A critical step in the process is the development of an urban forest stewardship strategy, however, very little information exists related to the characteristics and amount of urban forest and impervious surface within the region. As a result, the UFSI identified the need to map the urban forest in Greater Victoria for two time periods – 1986 and 2005. " - Report. This study was redone in 2020 . If you know where it is, please let RUSH know through the feedback form or email connect@whatstherush.ca',
        link: 'https://static1.squarespace.com/static/5e3c5b7e5460c55405a6d4d6/t/61bbd35f3486620f41b2aacf/1639699301418/UFSI+mapping+report+exec+sum.pdf',
        image: require('./png/UrbanForestStewardship.png')
      },
      {
        title: 'Firesmoke Canada',
        description: '"...the Canadian portal for information about wildland fire weather and smoke. From here you can access the BlueSky Canada smoke forecasts, fire weather forecasts, fire information, and the BlueSky Playground. The Weather Forecast Research Team at the University of British Columbia produces these research forecasts with support from multiple agencies. These tools and data serve professionals in the air quality, health & safety, emergency management, and science & research communities as well as the public. We are also a community of practice that advances policies, plans & organizations to address wildland fire and smoke issues."',
        link: 'https://firesmoke.ca',
        image: require('./png/FiresmokeCanada.png')
      },
      {
        title: '30% by 2030',
        description: '"The federal government has set the goal of conserving 30 percent of Canada’s land and water by 2030, because science shows that nature needs our help in order to reverse the decline in biodiversity, better fight climate change, and maintain a strong, sustainable economy."',
        link: 'https://www.canada.ca/en/environment-climate-change/news/2022/12/government-of-canada-recognizing-federal-land-and-water-to-contribute-to-30-by-30-nature-conservation-goals.html',
        image: require('./png/30by30.png')
      },
      {
        title: 'The Global Deal for Nature',
        description: '"The last global targets, set in 2010, were simply not ambitious enough, and we have seen the consequences. According to the Living Planet Report (2020) in the past few decades, animal populations have declined by 68%, one-fifth of the Amazon rainforest has been destroyed, and we’ve lost one-half of the world’s shallow water coral reefs. The Protected Planet Report (2020) shows that only about 17% of the world’s lands and 8% of the world’s oceans are now formally protected."...“A Global Deal for Nature: Guiding Principles, Milestones, and Targets" that explains why protecting half the Earth is needed, and presents a science-driven plan to save the diversity and abundance of life on Earth. It builds upon many scientific proposals for protecting key biodiversity areas and the latest climate science, calling for a milestone of at least 30% of lands protected by 2030 with an additional 20% in climate stabilization areas. It is also the first to include land, freshwater, and marine ecoregions"',
        link: '',
        image: require('./png/GlobalDealForNature.png')
      },
      {
        title: 'World Economic Forum: 2030',
        description: '"At a time when the world is grappling with meeting the Paris Climate Agreement and trying to prevent the sixth mass extinction on Earth, an international team of scientists has published a way forward - a Global Deal for Nature. The science-backed plan, published in Science Advances, proposes ambitious targets for the conservation of nature as the most effective pathway to address the extinction crisis and help us avert catastrophic climate change, before it’s too late. The deal calls for 30% of the planet to be protected by 2030, with an additional 20% to be maintained or restored to a natural state and designated as climate stabilization areas."',
        link: 'https://www.weforum.org/agenda/2019/04/why-protect-30-planet-2030-global-deal-nature-conservation/',
        image: require('./png/WorldEconomicForum.png')
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
          l.bindPopup(mapPopupContent('Heat Dome', 'This area is predicted to be vulnerable to trapping extreme heat. How much tree canopy is needed to mitigate this? Are there any options to reduce pavement here?', 'https://naturecanada.ca/wp-content/uploads/2022/09/Nature-Canada-Report-Tree-Equity.pdf', 'Do these communities meet the 3-30-300 equity test?'), {offset: point(0,8)});
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
