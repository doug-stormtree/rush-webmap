import * as L from 'leaflet';
import image from './ProtectFromFlooding.png';
import rainGardenStoryMapImage from './RainGardenStoryMap.png';
import watershedsBC from './WatershedsBC.png';
import crdWatershedsMap from './CRDWatershedMap.png';
import RainGardens from './1000RainGardens.geojson';
import { ReactComponent as WaterIcon } from '../beattheheat/water.svg';
import { mapPopupContent } from '../LeafletStyleHelpers';

const styleMap_RainGardens = new Map([
  ["0", {
    icon: (<WaterIcon/>),
    fill: '#36F',
    stroke: '#36F',
    legendText: '',
  }],
]);

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
          const icon = L.icon({
            iconUrl: `https://new.opengreenmap.org/api-v1/icons/${f.properties.icons[0]}/image/value`,
            iconSize: [48,48],
          })

          return f.properties?.icons[0] ? L.marker(l, {icon: icon}) : null;
        },
        onEachFeature: (f,l) => {
          const imageURL = f.properties.pictures[0]
            ? `https://new.opengreenmap.org/api-v1/pictures/${f.properties.pictures[0]}/picture/sm`
            : null;
          
          l.bindPopup(mapPopupContent(
              f.properties.name,
              '',
              `https://https://new.opengreenmap.org/browse/sites/${f.properties._id}`,
              'Show More at OpenGreenMap.org',
              imageURL
            ), {offset: L.point(4,2)});
        }
      },
    }
  ],
};
export default Flooding;