import {
  LegendGroups,
  InitiativeTags as Tag,
} from '../TextContent';

const Question = {
  key: 'protect-the-coast',
  title: "Protect the Coast",
  question: 'Melting ice caps offer no refreshment when it comes to sea level rise. How can I be ready when the surfs up?',
  image: require('../png/ProtectTheCoast.png'),
  layers: [
    { key: 'Aquifers', active: false, ...LegendGroups.StartOff },
    { key: 'AquiferSusceptibilityBedrock', active: false, ...LegendGroups.StartOff },
    { key: 'AquiferSusceptibilitySediment', active: false, ...LegendGroups.StartOff },
    { key: 'CoastalFloodInundationScenarios', active: true, ...LegendGroups.StartOn },
    { key: 'HardShorelines', active: false, ...LegendGroups.StartOn },
    { key: 'ShellfishPO', active: false, ...LegendGroups.StartOn },
    { key: 'ShorelineSensitivity', active: true, ...LegendGroups.StartOn },
    { key: 'ForageFish', active: false, ...LegendGroups.StartOff },
  ],
  sections: {
    one: [
      {
        heading: 'You can stand your ground if...',
        items: [
          'the map shows a low coastal sensitivity rating, which means that the shoreline ecosystem near you is in good shape.',
          'your risk of saltwater intrusion shows green on the map. This means that the ground you are standing on is not likely to let saltwater seep into the aquifer/water table.',
          'your municipality has a standard of 30m shoreline setbacks to give Nature enough room to sculpt sands and stones at the water\'s edge.',
        ]
      },
      {
        heading: 'Head for the hills if...',
        items: [
          'sea level rise is projected to be higher than 0.5m. This means that your area is vulnerable to coastal erosion and flooding.',
          'the map shows your risk of salt water intrusion in the range of yellow to red. This means that there is a risk of the water table and aquifer turning from fresh to salty.',
          'the shoreline is not naturalized. Concrete armouring or hardscaping along the coast creates a risk that storm surges will erode the shoreline behind and beneath it.',
        ]
      },
    ],
    two: {
      heading: 'Harmonize natural and built infrastructure.',
      items: [
        'Use your Open Green Map account to plot rain gardens that provide surface absorption. Install and advocate for permeable ground surfaces, paving stones and pavement that properly drains.',
        'Support and/or join community groups that restore watersheds and protect natural coastal habitats. Keep shade on the shoreline to protect coastal plants and creatures from extreme heat. These riparian areas filter and maintain the marine ecosystem, stop erosion, and ultimately protect coastal homes.',
        'Work with your neighbours to create a plan to protect your coastal community. Engage shoreline experts like SeaChange Marine Conservation Society, Greenshores, and Peninsula Streams & Shorelines to help.',
        'Join a restoration crew to plant eelgrass and seed kelp gravel. Use mooring buoys instead of anchoring to avoid pulling up eelgrass beds and damaging sensitive ecosystems.',
        'We need natural coastal habitats to buffer the shore against storm surges.',
        'Clean off boats, paddleboards and kayaks to avoid introducing invasive species into the ecosystem.',
        'Use designated pump out stations for boat sewage so you aren’t contaminating marine ecosystems.',
        'Advocate for policies that support shoreline setbacks to allow room for Nature to groom the shoreline. Sandy beaches mean forage fish nurseries which mean a healthy food chain for all.',
        'Find ways that your community can support policies and action for food security and cultural harvesting on land and water.',
      ]
    },
    three: {
      items: [
        'The frequency of extreme water events and sea level rise will increase alongside more greenhouse gasses in the atmosphere. This is because the gasses trap heat which changes the way air and water currents move around the globe. If we don’t consider the potential impacts of sea level on the land and the water table, our communities risk flooding and fresh water scarcity. Our community conversations and decisions about housing and development must be informed by potential sea level rise and climate risk data so we can protect ourselves.',
        'We can look to Nature-based solutions to help. Nature-based solutions (NBS) is a form of development that copies and amplifies Nature’s designs in places that are vulnerable. Integrating NBS can mitigate storm surges, manage flood risks, and support a resilient coast line. NBS can inform better insurance rates and property values. The Government of Canada recognizes the need for Nature based solutions to address climate change events with a number of programs. Learn more about Nature-based Insurance Solutions in the Good Stuff to Check out.',
        'Another piece of good news is that fine sand beaches provide habitat for forage fish which are the foundation of the food chain on the BC coast. To protect it we need housing and development to be set back (ideally 30 meters) so that natural wave action can turn pebbles into sand and provide forage fish habitat as well as the best kind of beach to put a towel down on!',
      ]
    },
  },
  act: {
    initiatives: [
      {
        title: 'Exploring Hard & Soft Shorelines',
        link: 'https://storymaps.arcgis.com/stories/dd4b238376ad48d58f90e7cfa1f68820',
        image: require('../png/HardShorelines.png'),
        description: 'Changing the way a shoreline naturally operates can have big impacts on how water behaves when it meets the land. As climate change worsens, developers, homeowners and governments need to reconsider the last century\'s tendency to install a wall to protect us from the sea. Learn more in this StoryMap created by UVic Community Mapping students.',
        tags: [
          Tag.StoryMap,
        ],
      },
      {
        title: 'Cetus Research and Conservation Society',
        link: 'https://www.cetussociety.org/',
        image: require('../png/CetusSociety.png'),
        description: 'Cetus is focused on protecting whales around Vancouver Island by reducing the disturbances to their habitat and migrations routes through education and direct  monitoring activities.  If you want to know exactly what\'s going on with the whales here, they are your go-to.',
        tags: [
          Tag.Organization,
        ],
      },
      {
        title: 'Seaquaria',
        link: 'https://seaquaria.org/',
        image: require('../png/Seaquaria.png'),
        description: 'Seaquaria brings freshwater and marine ecosystem education to communities and schools here and is a division of the World Fisheries Trust.',
        tags: [
          Tag.Organization,
        ],
      },
      {
        title: 'Peninsula Streams & Shorelines',
        link: 'https://peninsulastreams.ca/',
        image: require('../png/PeninsulaStreams.png'),
        description: 'Peninsula Streams & Shorelines guides communities in organizing to restore and protect the watersheds and shorelines in this region. Their current upstream projects include working with communities and organizations to install rain gardens to manage excess water and mitigate toxic runoff risks to fish. Downstream focus projects include identifying and restoring forage fish beaches that are the foundation of the marine food web. If you want to be the change that tips the scales towards healthy waters, this is the place to skill up. From Headwaters to deep waters, PSS wants to hear your concerns and help your community take action.',
        tags: [
          Tag.Organization,
        ],
      },
      {
        title: "Engage with Nature-based Solutions",
        link: "https://www.engagewithnbs.ca/",
        image: require('../png/EngageNBS.png'),
        description: "Engage with Nature-Based Solutions is a Canadian initiative working to support communities that apply nature-based solutions to their local lands and waters. We acknowledge and take inspiration from Indigenous peoples, whose cultures and traditions support healthy ecosystems and the interconnection and importance of all living things.",
        tags: [
          Tag.Organization,
        ],
      },
      {
        title: "SeaChange Marine Conservation Society",
        link: "https://www.seachangesociety.com",
        image: require('../png/SeaChange.png'),
        description: "SeaChange supports communities in healing their coastline through educational, restoration and conservation from Haida Gwaii to Boundary Bay. From eelgrass planting to shoreline mapping and monitoring to school field work days, SeaChange creates practical opportunities for people to take action on coastal health.",
        tags: [
          Tag.Organization,
        ],
      },
      {
        title: "South Coast Ship Watch Alliance",
        link: "https://nofreighteranchorages.ca/",
        image: require('../png/NoFreighter.png'),
        description: "This organization advocates alongside First Nations to eliminate tanker anchorage and instead invest in technology to reduces ship congestion.",
        tags: [
          Tag.Organization,
        ],
      },
      {
        title: "Nature-based Solutions - Insurance Bureau of Canada",
        link: "http://www.ibc.ca/on/disaster/nature-based-solutions",
        image: require('../png/IbcNBS.png'),
        description: "The insurance industry are keen for communities to understand and invest in the value of natural spaces like forests, wetlands and coral reefs which can provide protection to communities from climate change related events. Read more here about Nature-based Insurance Solutions (NBIS).",
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Surfrider',
        link: 'https://canada.surfrider.org/',
        image: require('../png/Surfrider.png'),
        description: 'The Surfrider Foundation Canada is all about the protection and enjoyment of the ocean and coast for all species. They specialize in action campaigns from beach clean ups to policy change.',
        tags: [
          Tag.Organization,
        ],
      },
      {
        title: "Sea Level Rise",
        link: "https://sealevelrise.ca/map.html",
        image: require('../png/SeaLevelRise.png'),
        description: "Connect with coastal stakeholders across the country through this interactive map, which allows you to identify and share your observations and experiences with sea-level rise impacts along Canada's coastline.",
        tags: [
          Tag.Map,
        ],
      },
      {
        title: "Climate Action for Salmon",
        link: "https://storymaps.arcgis.com/stories/9a1164af036041638e75df5cb02bb15a",
        image: require('../png/ClimateActionSalmon.png'),
        description: "Climate change is here, and wild Pacific salmon need our help. Storymap by Jake Dingwall.",
        tags: [
          Tag.StoryMap,
        ],
      },
      {
        title: "Forage Fish in the Salish Sea",
        link: "https://storymaps.arcgis.com/stories/969e5bb112984c16b7214995c8fc75c3",
        image: require('../png/ForageFishSalishSea.png'),
        description: "Forage fish are small schooling fish that play a crucial role in the marine food web, directly feeding many marine animals including orcas, birds, and salmon. Storymap by the Strait of Georgia Data Centre.",
        tags: [
          Tag.StoryMap,
        ],
      },
      {
        title: "Saving Orcas",
        link: "https://elc.uvic.ca/publications/saving-orcas/",
        image: require('../png/SavingOrcas.png'),
        description: "Saving Orcas by Protecting Fish Spawning Beaches. Report prepared for the World Wildlife Fund Canada providing law reform recommendations for protecting forage fish populations and Southern Resident orcas. Produced by the Environmental Law Society at the University of Victoria.",
        tags: [
          Tag.Report,
        ],
      },
      {
        title: 'Clean Coast, Clean Waters Initiative',
        link: 'https://bccleancoast.ca/',
        image: require('../png/CleanCoast.png'),
        description: 'This fund is for marine coastal Indigenous Nations, Indigenous organizations, local governments,  organizations, and individuals in BC that that have expertise in shoreline and marine debris clean-up and/or removal of derelict vessels.',
        tags: [
          Tag.Funding,
          Tag.Initiative,
        ],
      },
      {
        title: 'Strait of Georgia Data Centre',
        link: 'https://sogdatacentre.ca/',
        image: require('../png/SOGDC.png'),
        description: 'This curated and sophisticated portal on marine ecosystem data for the Straight of Georgia supports deep inquiry and a  holistic view on the pressures and needs of the marine environment here. Collaborative and current, this portal seeks to support you with integrating data and helpful visuals to strengthen your work and share information with others.',
        tags: [
          Tag.Portal,
        ],
      },
      {
        title: 'Ocean Wise Sightings Network',
        link: 'https://www.ocean.org/whales/',
        image: require('../png/OceanWiseSightingsNetwork.png'),
        description: 'A healthy whale population is a sign of a healthy ecosystem. If you are out on the water you can help keep them safe by reporting sightings using the WhaleReport App.',
        tags: [
          Tag.Initiative,
          Tag.Program,
        ],
      },
      {
        title: 'Angler\'s Atlas',
        link: 'https://www.anglersatlas.com/',
        image: require('../png/AnglersAtlas.png'),
        description: 'This organization helps fisherfolk to find fishable waters and avoid the conservation areas. A series of helpful apps are on offer to notify you en route of the features and cues you need while contributing to solving research questions.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Resilient Coasts for Salmon',
        link: 'https://resilientcoasts.ca/',
        image: require('../png/ResilientCoasts.png'),
        description: 'A partnership between the Pacific Salmon Foundation and the Stewardship Centre for BC, Resilient Coasts for Salmon helps communities find ways to protect their homes while also protecting vital fish habitat by using nature-based solutions.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Gulf Islands National Parks Reserve',
        link: 'https://parks.canada.ca/pn-np/bc/gulf',
        image: require('../png/GulfIslands.png'),
        description: 'This protected area in the homeland of the Coast Salish First Nations creates some space and peace for wildlife. Interpretive guidance, trails and camping support people in enjoying this place in a way that supports the creatures and systems that need it most.',
        tags: [
          Tag.Initiative,
          Tag.Government,
        ],
      },
      {
        title: 'FishSounds',
        link: 'https://fishsounds.net/index.js',
        image: require('../png/FishSounds.png'),
        description: 'FishSounds has over 250 recordings and are looking for your feedback and engagement. Dive into this soundscape that is curious and wild.',
        tags: [
          Tag.Initiative,
        ],
      },
      {
        title: 'Ocean Networks Canada',
        link: 'https://www.oceannetworks.ca/',
        image: require('../png/OceanNetworksCanada.png'),
        description: 'From coast to coast to coast Ocean Networks Canada supports schools, communities and research collaborations with observatories and big data and tools to inspire innovation.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'ECOncrete',
        link: 'https://econcretetech.com/',
        image: require('../png/ECOncrete.png'),
        description: 'ECOncrete finds Nature-based Solutions for marine construction. This interdisciplinary science-based company blends biologists, ecologists, environmental engineers, designers, and concrete technology specialists, all on a mission to leverage science for building a future where marine ecosystems and infrastructure work symbiotically. ECOncrete’s versatile applications can be integrated in any marine infrastructure from coastal protection to waterfronts and offshore applications.  Their patented solution encourages biological recruitment, increases carbon sequestration and improves water quality. Visit their website to explore ECOncrete’s worldwide projects, and imagine the whole lot of good this company could do for coastal health in our region too.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
    ],
  },
};
export default Question;