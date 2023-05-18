import { icon, marker, point } from 'leaflet';
import image from './ProtectFromFlooding.png';
import rainGardenStoryMapImage from './RainGardenStoryMap.png';
import watershedsBC from './WatershedsBC.png';
import crdWatershedsMap from './CRDWatershedMap.png';
import Watersheds from './CRDWatersheds.geojson';
import RainGardens from './1000RainGardens.geojson';
import RestorationSites from './RestorationSites.geojson';
import { mapPopupContent, pointToIcon } from '../LeafletStyleHelpers';

const styleMap_RainGardens = new Map([
  ['641b6ff089e06d0100e0cf1d', {
    src: `https://new.opengreenmap.org/api-v1/icons/641b6ff089e06d0100e0cf1d/image/value`,
    legendText: 'Rain Garden'
  }],
  ['641b716b89e06d0100e0cf2c', {
    src: `https://new.opengreenmap.org/api-v1/icons/641b716b89e06d0100e0cf2c/image/value`,
    legendText: 'Bioswale'
  }],
  ['641b714889e06d0100e0cf24', {
    src: `https://new.opengreenmap.org/api-v1/icons/641b714889e06d0100e0cf24/image/value`,
    legendText: 'Curb Cut'
  }],
])

const styleMap_RestorationSites = new Map([
  ['5ebee86cd060db010045ee3c', {
    src: `https://new.opengreenmap.org/api-v1/icons/5ebee86cd060db010045ee3c/image/value`,
    legendText: 'Protected / Restored Habitat'
  }],
  ['5ca7bff1ecd8490100caba0b', {
    src: `https://new.opengreenmap.org/api-v1/icons/5ca7bff1ecd8490100caba0b/image/value`,
    legendText: 'Aquatic Habitat'
  }],
  ['5ca7bfeaecd8490100cab9f3', {
    src: `https://new.opengreenmap.org/api-v1/icons/5ca7bfeaecd8490100cab9f3/image/value`,
    legendText: 'Waterfront or Riverside Park'
  }],
  ['5ca7bfe8ecd8490100cab9ee', {
    src: `https://new.opengreenmap.org/api-v1/icons/5ca7bfe8ecd8490100cab9ee/image/value`,
    legendText: 'Water Feature'
  }],
  ['5ca7bff4ecd8490100caba0f', {
    src: `https://new.opengreenmap.org/api-v1/icons/5ca7bff4ecd8490100caba0f/image/value`,
    legendText: 'Significant Habitat'
  }],
  ['5ca7bfe7ecd8490100cab9ec', {
    src: `https://new.opengreenmap.org/api-v1/icons/5ca7bfe7ecd8490100cab9ec/image/value`,
    legendText: 'Wetlands'
  }],
  ['5ca7bfc1ecd8490100cab983', {
    src: `https://new.opengreenmap.org/api-v1/icons/5ca7bfc1ecd8490100cab983/image/value`,
    legendText: 'Greenhouse Gas Reduction'
  }],
  ['5f036d59352b920100f4b7f1', {
    src: `https://new.opengreenmap.org/api-v1/icons/5f036d59352b920100f4b7f1/image/value`,
    legendText: 'People of Place - Indigenous Culture'
  }],
  ['5ca7bfececd8490100cab9fc', {
    src: `https://new.opengreenmap.org/api-v1/icons/5ca7bfececd8490100cab9fc/image/value`,
    legendText: 'Canoe or Kayak Site'
  }],
])

const Flooding = {
  title: 'Protect from Flooding?',
  question: 'How can communities manage water for maximum benefit?',
  image: image,
  description: [
    {type: 'h2', content: "Comparison"},
    {type: 'p', content: 'Sea level rise, watersheds, raingardens.'},
    {type: 'h2', content: 'Problem'},
    {type: 'p', content: 'As our atmosphere and oceans get warmer, the seasons, cloud patterns and ocean currents change, which in turn affects how much rain and snow we get and when. Too much rain or snow can cause erosion and the collapse of land areas, flood our communities, damage infrastructure and back up sewer systems.'},
    {type: 'p', content: 'In 2021, the atmospheric rivers brought so much water to BC that the land could not absorb it fast enough. This created intense flooding and resulted in damages that cost over 1 billion dollars in federal disaster aid and harmed the quality of life for people, animals, ecosystems.¹ Many communities were displaced and the food production industry that operates in southern BC was severely impacted. Investigations revealed that we knew our infrastructure and built environment were vulnerable but did not prioritize it.'},
    {type: 'p', content: 'Urban centers have lots of pavement which stops water absorption. When water flows across pavement, it carries pollutants and trash  into the stormwater system which then flows into our streams and creeks poisoning the plants, birds, fish, frogs and bugs. This threatens everyone’s quality of life unnecessarily.  When we approve developments that eliminate space for trees, vegetation and soil, we lose important natural infrastructure for filtering water, managing surface water, stabilizing banks, recharging the water table, and regulating the atmosphere.'},
    {type: 'h2', content: 'Solution'},
    {type: 'p', content: 'Water is life giving.  Our bodies and the surface of the planet are ~70% water. We depend on the water cycle to redistribute water around the planet so that we can have enough to drink, clean and water the land. Supporting the water cycle is the key to personal and planetary health.'},
    {type: 'p', content: 'By making more space for Nature, we increase  areas where water can sink into the soil (permeable surfaces) to keep the water table healthy so we have water and moisture where and when we need it most.  Reducing paved surfaces and soil compaction will make a big difference in the way water works in our community. Proper stormwater management plans play a key role but, to get the real benefit, we need our natural and built infrastructure to work together.'},
    {type: 'p', content: 'Peninsula Streams & Shorelines (PSS) has been our go-to organization for helping communities to restore their watersheds and protect biodiversity and communities in the process. By restoring watersheds, we increase the capacity of the land to hold the water and gain the many benefits including keeping it out of homes and off the streets. PSS’ 1000 Raingardens Project is working with communities to install raingardens to manage water on the land and filter road runoff so that we can see the return of our salmon and take care of our urban ecosystem.'},
    {type: 'list', content: [
      'Avoid using pesticides, especially chemical slug bait that can poison snakes (which eat the slugs).',
      'Keep manure piles away from creek and stream beds to avoid adding too many nutrients (nitrogen) to the watershed, decreasing oxygen levels.',
    ]},
    {type: 'link', content: '1. The Canadian Press, "Federal disaster aid program for 2021 B.C. floods now tops $1 billion," The Abbotsford News, February 23, 2023.', url: 'https://www.abbynews.com/news/federal-disaster-aid-program-for-2021-b-c-floods-now-tops-1-billion/'},
  ],
  act: {
    initiatives: [
      {
        title: "Rain Gardens",
        image: rainGardenStoryMapImage,
        link: "https://storymaps.arcgis.com/stories/bade971de06f4502af700ecb844f3fb5",
        description: "A rain garden is any landscaping that absorbs and filters rainwater runoff from a nearby impervious surface, which is any surface that does not allow water infiltration, such as a roof, driveway, parking lot or street. Learn more in this StoryMap created by UVic Community Mapping students Jared Leary, Aiden Foxcroft, Grace Long, and Olivia Graham."
      },
      {
        title: 'Watersheds BC',
        image: watershedsBC,
        link: 'https://watershedsbc.ca/',
        description: 'A dedicated resource hub to provide local leaders with knowledge, skills, and support to deliver effective watershed management and governance in their communities. Watersheds BC emerged in response to this need.'
      },
      {
        title: 'CRD Watersheds Map',
        image: crdWatershedsMap,
        link: 'https://www.crd.bc.ca/docs/default-source/es-watersheds-pdf/regional-watershed-maps/watershedscrdoverview400dpired.pdf?sfvrsn=5d837aca_2',
        description: 'A PDF Map of the watershed boundaries within the Capital Regional District. Warning: large file size.'
      },
    ],
  },
  mapData: [
    {
      title: 'Watersheds',
      description: [
        {type: 'p', content: 'A watershed (also known as a hydrologic unit, catchment, or drainage basin) is defined as that area of land draining into a particular stream or other surface water body. For any location in a stream, there is an associated area that contributes water to its flow. The watershed divide is that line which divides the area contributing water to the stream and that which contributes water to neighboring streams or water bodies. Therefore, each watershed is defined by its outlet or pour point (the point in the stream which receives all water in the watershed) and the associated watershed divide derived from that point and the local topography.¹'},
        {type: 'p', content: 'If a drop of rain or snow falls on any spot within the boundary of a watershed, if it is not absorbed into the ground or somehow otherwise collected, it can be expected to eventually make its way to the central stream and flow along it to the sea. Even water that soaks into the ground can flow towards the stream as it reaches denser soils or bedrock that it cannot infiltrate. Some water travels much deeper into underground resevoirs, called aquifers, that provide drinking water when accessed by a well.²'},
        {type: 'link', content: '1. GeoBC, 2010. "Freshwater Atlas User Guide." Integrated Land Management Bureau, Victoria, BC. ', url: 'https://www2.gov.bc.ca/assets/gov/data/geographic/topography/fwa/fwa_user_guide.pdf'},
        {type: 'link', content: '2. NOAA. "What is a watershed?" Accessed: May 15, 2023.', url: 'https://oceanservice.noaa.gov/facts/watershed.html'},
      ],
      data: Watersheds,
      shape: 'polygon',
      symbology: 'single',
      options: {
        style: {
          stroke: true,
          opacity: 0.7,
          color: 'rgb(28,163,236)',
          dashArray: '',
          lineCap: 'butt',
          lineJoin: 'miter',
          weight: 3,
          fill: true,
          fillOpacity: 0,
          fillColor: 'rgb(132,182,185)',
          interactive: true,
        },
        onEachFeature: (f,l) => {
          l.bindPopup(
            mapPopupContent(
              f.properties.Name.charAt(0) === '9' ? 'Watershed' : f.properties.Name + ' Watershed',
              f.properties.Name.charAt(0) === '9'
                ? `This watershed is not associated with a named stream by GeoBC. Its Freshwater Atlas Code is ${f.properties.Name}. Its area is ${f.properties.Hectares} hectares.`
                : f.properties.Name + ' Watershed encloses an area of ' + f.properties.Hectares + ' hectares.',
              ),
            {offset: point(0,8)});
          l.on({
            mouseover: (e) => e.target.setStyle({ fillOpacity: 0.7 }),
            mouseout: (e) => e.target.setStyle({ fillOpacity: 0 })
          });
        }
      }
    },
    {
      title: 'Restoration Sites',
      description: [
        {type: 'p', content: "Mapping restoration sites as described by Peninsula Streams Society for the RUSH Initiative."},
        {type: 'link', content: 'Visit and contribute to this project at OpenGreenMap.', url: 'https://new.opengreenmap.org/browse/sites?map=644acbf92af3a50100a0f0bc'},
      ],
      data: RestorationSites,
      shape: 'point',
      symbology: 'classified',
      styleMap: styleMap_RestorationSites,
      options: {
        pointToLayer: (f,l) => pointToIcon(l, {icon: <img 
            src={`https://new.opengreenmap.org/api-v1/icons/${f.properties.icons[0]}/image/value`}
            alt={styleMap_RestorationSites.get(f.properties.icons[0]).legendText}
          />}),
        onEachFeature: (f,l) => {
          const imageURL = f.properties.pictures[0]
            ? `https://new.opengreenmap.org/api-v1/pictures/${f.properties.pictures[0]}/picture/sm`
            : null;
          
          l.bindPopup(mapPopupContent(
              f.properties.name,
              '',
              `https://new.opengreenmap.org/browse/sites/${f.properties._id}`,
              'Show More at OpenGreenMap.org',
              imageURL
            ), {offset: point(0,-6)});
        }
      },
    },
    {
      title: '1000 Rain Gardens',
      description: [
        {type: 'p', content: "This is the map for the Friends of Bowker Creek and Peninsula Streams Society '1000 Rain Gardens' mapping project!"},
        {type: 'link', content: 'Visit and contribute to this project at OpenGreenMap.', url: 'https://new.opengreenmap.org/browse/sites?map=63e6939eabcc260100514352'},
      ],
      data: RainGardens,
      shape: 'point',
      symbology: 'classified',
      styleMap: styleMap_RainGardens,
      options: {
        pointToLayer: (f,l) => {
          const ogmIcon = icon({
            iconUrl: `https://new.opengreenmap.org/api-v1/icons/${f.properties.icons[0]}/image/value`,
            iconSize: [48,48],
          })

          return f.properties?.icons[0] ? marker(l, {icon: ogmIcon}) : null;
        },
        onEachFeature: (f,l) => {
          const imageURL = f.properties.pictures[0]
            ? `https://new.opengreenmap.org/api-v1/pictures/${f.properties.pictures[0]}/picture/sm`
            : null;
          
          l.bindPopup(mapPopupContent(
              f.properties.name,
              '',
              `https://new.opengreenmap.org/browse/sites/${f.properties._id}`,
              'Show More at OpenGreenMap.org',
              imageURL
            ), {offset: point(0,-6)});
        }
      },
    },
  ],
};
export default Flooding;