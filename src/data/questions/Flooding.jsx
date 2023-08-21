const Flooding = {
  key: 'protect-from-flooding',
  title: 'Protect from Flooding',
  question: 'How can communities manage water for maximum benefit?',
  image: require('../png/ProtectFromFlooding.png'),
  description: [
    {type: 'h2', content: "Comparison"},
    {type: 'p', content: 'Sea level rise, watersheds, raingardens.'},
    {type: 'h2', content: 'Problem'},
    {type: 'p', content: 'As our atmosphere and oceans get warmer, the seasons, cloud patterns and ocean currents change, which in turn affects how much rain and snow we get and when. Too much rain or snow can cause erosion and the collapse of land areas, flood our communities, damage infrastructure and back up sewer systems.'},
    {type: 'p', content: 'In 2021, the atmospheric rivers brought so much water to BC that the land could not absorb it fast enough. This created intense flooding and resulted in damages that cost over 1 billion dollars in federal disaster aid and harmed the quality of life for people, animals, ecosystems.¹ Many communities were displaced and the food production industry that operates in southern BC was severely impacted. Investigations revealed that we knew our infrastructure and built environment were vulnerable but did not prioritize it.'},
    {type: 'p', content: 'Urban centers have lots of pavement which stops water absorption. When water flows across pavement, it carries pollutants and trash  into the stormwater system which then flows into our streams and creeks poisoning the plants, birds, fish, frogs and bugs. This threatens everyone\'s quality of life unnecessarily.  When we approve developments that eliminate space for trees, vegetation and soil, we lose important natural infrastructure for filtering water, managing surface water, stabilizing banks, recharging the water table, and regulating the atmosphere.'},
    {type: 'h2', content: 'Solution'},
    {type: 'p', content: 'Water is life giving.  Our bodies and the surface of the planet are ~70% water. We depend on the water cycle to redistribute water around the planet so that we can have enough to drink, clean and water the land. Supporting the water cycle is the key to personal and planetary health.'},
    {type: 'p', content: 'By making more space for Nature, we increase  areas where water can sink into the soil (permeable surfaces) to keep the water table healthy so we have water and moisture where and when we need it most.  Reducing paved surfaces and soil compaction will make a big difference in the way water works in our community. Proper stormwater management plans play a key role but, to get the real benefit, we need our natural and built infrastructure to work together.'},
    {type: 'p', content: 'Peninsula Streams & Shorelines (PSS) has been our go-to organization for helping communities to restore their watersheds and protect biodiversity and communities in the process. By restoring watersheds, we increase the capacity of the land to hold the water and gain the many benefits including keeping it out of homes and off the streets. PSS\' 1000 Raingardens Project is working with communities to install raingardens to manage water on the land and filter road runoff so that we can see the return of our salmon and take care of our urban ecosystem.'},
    {type: 'list', content: [
      'Avoid using pesticides, especially chemical slug bait that can poison snakes (which eat the slugs).',
      'Keep manure piles away from creek and stream beds to avoid adding too many nutrients (nitrogen) to the watershed, decreasing oxygen levels.',
    ]},
    {type: 'link', content: '1. The Canadian Press, "Federal disaster aid program for 2021 B.C. floods now tops $1 billion," The Abbotsford News, February 23, 2023.', url: 'https://www.abbynews.com/news/federal-disaster-aid-program-for-2021-b-c-floods-now-tops-1-billion/'},
  ],
  act: {
    initiatives: [
      {
        title: "Rain Gardens Story Map",
        image: require('../png/RainGardenStoryMap.png'),
        link: "https://storymaps.arcgis.com/stories/bade971de06f4502af700ecb844f3fb5",
        description: "A rain garden is any landscaping that absorbs and filters rainwater runoff from a nearby impervious surface, which is any surface that does not allow water infiltration, such as a roof, driveway, parking lot or street. Learn more in this StoryMap created by UVic Community Mapping students Jared Leary, Aiden Foxcroft, Grace Long, and Olivia Graham."
      },
      {
        title: 'Peninsula Streams & Shorelines',
        noText: true,
        image: require('../png/PeninsulaStreams.png'),
        link: 'https://peninsulastreams.ca/',
        description: 'Peninsula Streams & Shorelines guides communities in organizing to restore and protect the watersheds and shorelines in this region. Their current upstream projects include working with communities and organizations to install rain gardens to manage excess water and mitigate toxic runoff risks to fish. Downstream focus projects include identifying and restoring forage fish beaches that are the foundation of the marine food web. If you want to be the change that tips the scales towards healthy waters, this is the place to skill up. From Headwaters to deep waters, PSS wants to hear your concerns and help your community take action.'
      },
      {
        title: 'Watersheds BC',
        image: require('../png/WatershedsBC.png'),
        link: 'https://watershedsbc.ca/',
        description: 'A dedicated resource hub to provide local leaders with knowledge, skills, and support to deliver effective watershed management and governance in their communities. Watersheds BC emerged in response to this need.'
      },
      {
        title: 'CRD Watersheds Map',
        image: require('../png/CRDWatershedMap.png'),
        link: 'https://www.crd.bc.ca/docs/default-source/es-watersheds-pdf/regional-watershed-maps/watershedscrdoverview400dpired.pdf?sfvrsn=5d837aca_2',
        description: 'A PDF Map of the watershed boundaries within the Capital Regional District. Warning: large file size.'
      },
      {
        title: 'The 1000 Rain Gardens Project',
        noText: true,
        image: require('../png/FriendsOfBowkerCreek.png'),
        link: 'https://bowkercreek.org/1000-rain-gardens/',
        description: 'The 1000 Rain Gardens Project: "Making Bowker Creek healthy again requires that people send much more rainwater into the earth and much less into the storm drains. Wherever we live, work or go to school in Bowker Creek\'s valley, the 1000 Rain Gardens Project aims to help us manage rainwater better. The project partners Friends of Bowker Creek Society with Peninsula Streams Society (PSS). The PSS initiative, the Rain Gardens in Headwaters Program, will multiply rain gardens throughout Greater Victoria, starting here in Bowker Creek\'s valley. The 1000 Rain Gardens project provides a vital first step and proving ground for the wider program."'
      },
      {
        title: 'Colquitz Storymap',
        link: 'https://storymaps.arcgis.com/stories/e884cb42946a46d1800e90a692eca278',
        description: '"The (ongoing) Colquitz River restoration project, launched by  Peninsula Streams  and the  District of Saanich  in 2019, aims to restore ecological integrity and resilience to this urban watershed system in what is now called Saanich, British Columbia, Canada." This story was developed in partnership with Peninsula Streams Society, Engage with Nature-Based Solutions, and UVic Community Mapping students Langley Chan, Olivia Gatrell, Zacc Lavigne, and Nabila Kazmi.',
        image: require('../png/Placeholder.png')
      },
    ],
  }
};
export default Flooding;