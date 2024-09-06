import {
  LegendGroups,
  InitiativeTags as Tag,
} from '../TextContent';

const Question = {
  key: 'protect-from-flooding',
  title: 'Protect from Flooding',
  question: 'Climate change is too big for our stormwater infrastructure.  What\'s the fix on flood risk?',
  image: require('../png/ProtectFromFlooding.png'),
  layers: [
    { key: 'CoastalFloodInundationScenarios', active: false, ...LegendGroups.StartOff },
    { key: 'Impervious2019', active: true, ...LegendGroups.StartOn },
    { key: 'RainGardens', active: true, ...LegendGroups.OGM },
    { key: 'RestorationSites', active: false, ...LegendGroups.OGM },
    { key: 'ShellfishPO', active: false, ...LegendGroups.StartOff },
    { key: 'WatershedRunoffAbsorption', active: true, ...LegendGroups.StartOn },
    { key: 'Watersheds', active: false, ...LegendGroups.StartOff },
  ],
  sections: {
    one: [
      {
        heading: 'You\'ve got good flow if...',
        items: [
          'your watershed has a good riparian zone which means lots of trees and plants to hold the banks during high flows and to keep the water cool for fish.',
          'your watershed has a good variety of bugs, branches, biodiversity, and salmon return each year. These are markers ecosystem connectivity, and signs of good oxygen content, temperature and swim-ability.',
          'you can follow your watershed from source to sea. This means its storing and filtering water, stabilizing banks, recharging the water table, and regulating the atmosphere.',
          'you see multiple raingardens along the watershed to help prevent polluted road runoff from entering nearby streams.',
        ]
      },
      {
        heading: 'Get your gumboots ready if...',
        items: [
          'development proposals increase the percentage of paved areas.',
          'your region has a high pavement percentage and compacted soils that will only pool pollutants and trash, overwhelming the local stream.',
          'the local stream looks dead as a ditch, is connected by pipes, and can\'t hold the fast flow of water causing erosion after rainstorms.',
          'there is no stewardship group taking care of your watershed.',
        ]
      },
    ],
    two: {
      heading: 'Help Nature flow water where its needed, and absorb it where its not.',
      items: [
        'Peninsula Streams & Shorelines’ 1000 Raingardens Project is working with communities to install 1000 raingardens within the CRD. Use your Open Green Map account to plot the raingardens you see around you so that we can get a sense of how resilient we might be.',
        'Join a stewardship group and support the health of your watershed.',
        'If you find water pooling in places around your home, install a raingarden for healthy drainage that will also replenish the natural underground water supply.',
        'Maintain your vehicle and to minimize pollutants entering the stormwater system.',
        'Avoid using pesticides as they can end up in the food web.',
        'Be responsible in your use of fertilizers. Keep manure piles away from creek and stream beds.',
        'Advocate for your watershed whenever urban planning opportunities arise. Lobby to daylight hidden creeks and streams.',
        'Encourage your municipality to install paving that drains with green spaces that provide shade, and absorb and filter water .Reducing paved surfaces and soil compaction will make a big difference in the way water works in our community.',
      ]
    },
    three: {
      items: [
        'Our bodies and the surface of the planet are ~70% water. We depend on the water cycle to redistribute water around the planet so that we have enough to drink, clean and water the land. Climate change is altering this natural flow. Too much precipitation at one time leads to coastal flooding, backs up sewer systems, and floods urban communities. In 2021, atmospheric rivers brought so much water to BC that the land could not absorb it fast enough. The intense flooding resulted in damages that cost over 1 billion dollars in federal disaster aid. Many communities were displaced and southern BC’s food production industry was devastated.',
        'Our water is protected through the Groundwater Protection Regulation and the Water Sustainability Act but we lack the funding and tools to do the kind of monitoring that is needed. This region has many natural springs that must be taken into account when planning for development. This natural sources of clean water have been key to human and non- human survival over millions of years.',
        'When we overuse water resources the water table drops. Water scarcity is becoming a serious problem in many communities and the islands are already feeling it in this region. Even a small change in the level of the water table can become a big problem over a few years. Fish returning in the fall to their natal streams rely on the streams being recharged with groundwater. At that time of year it is the only source of water that is cool, clean and clear. For this recharge to occur, the water table levels need to be healthy. Cool, clean and clear water must be maintained throughout the year for the salmon and other lifecycles to persist.',
        'Proper stormwater management planning is a key part of the solution but, we need to ensure that our built infrastructure is working with the “natural infrastructure” that watersheds, wetlands, forests and coastal ecosystems provide. To protect communities from flooding we need to work with the water cycle and retain it where it falls by creating ways for it to be absorbed. This can happen through natural spaces, raingardens, laneway infiltrations, and bioswales. Copying Nature’s strategies for managing water is also known as designing nature-based solutions. Stormwater infrastructure design used to be mostly about drainage and getting the water off the land but, the practice is now evolving to create better infiltration, storage, and water recycling solutions.',
        'In the concrete jungle we can help recharge the aquifer with surfaces that drain linke paving stones, gravel, oyster shell hash, and natural materials like mulch.  Forests are key in recharging the aquifer as they capture, filter, store, and maintain healthy water levels. Natural vegetation that grows alongside watersheds is called a riparian area and is crucial in keeping stream water healthy and cool in drier spells, and stabilizing the bank during extreme water events.  Rain gardens mimic nature’s own “timed-release” system for maintaining healthy water levels for salmon (not too much, not too little). They also reduce the rate of toxins entering creeks and the ocean through the stormwater system.',
        'The City of Vancouver is beginning to use a strategy called laneway infiltration. The compacted dirt and rock is replaced with a gravel bed of various rock sizes and topped with a stable permeable surface. This design filters and recharges the aquifer, increases carbon drawdown, and helps protect communities from flooding  where sea level rise is projected to occur.',
        'Watersheds cross municipal and territorial boundaries. The Saanich Peninsula Environmental Coalition created a bioregional framework for municipalities that underscores the need for community perspectives, inter-jurisdictional collaboration, and ecosystem integrity. The goal is to encourage municipalities to work across boundaries in securing the health of all communities. The Cascadia Bioregional Movement seeks to heal the planet through stewardship of riversheds across the world. By taking simple actions and understanding why you should care, our aquifers can be protected through community conscience.',
      ]
    },
  },
  act: {
    initiatives: [
      {
        title: "Rain Gardens Story Map",
        link: "https://storymaps.arcgis.com/stories/bade971de06f4502af700ecb844f3fb5",
        image: require('../png/RainGardenStoryMap.png'),
        description: "A rain garden is any landscaping that absorbs and filters rainwater runoff from a nearby impervious surface, which is any surface that does not allow water infiltration, such as a roof, driveway, parking lot or street. Learn more in this StoryMap created by UVic Community Mapping students Jared Leary, Aiden Foxcroft, Grace Long, and Olivia Graham.",
        tags: [
          Tag.StoryMap,
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
        title: 'Watersheds BC',
        link: 'https://watershedsbc.ca/',
        image: require('../png/WatershedsBC.png'),
        description: 'A dedicated resource hub to provide local leaders with knowledge, skills, and support to deliver effective watershed management and governance in their communities. Watersheds BC emerged in response to this need.',
        tags: [
          Tag.Portal,
        ],
      },
      {
        title: 'The Groundwater Project',
        link: 'https://gw-project.org/',
        image: 'https://gw-project.org/wp-content/uploads/2020/08/logo_300x300_a.png',
        description: 'Free and online learning resources to make it possible for anyone to understand the issues when it comes to groundwater. This NGO has many collaborators and has its roots in growing Hydrologists without Borders.',
        tags: [
          Tag.Portal,
        ],
      },
      {
        title: 'CRD Watersheds Map',
        link: 'https://www.crd.bc.ca/docs/default-source/es-watersheds-pdf/regional-watershed-maps/watershedscrdoverview400dpired.pdf?sfvrsn=5d837aca_2',
        image: require('../png/CRDWatershedMap.png'),
        description: 'A PDF Map of the watershed boundaries within the Capital Regional District. Warning: large file size.',
        tags: [
          Tag.Map,
          Tag.Government,
        ],
      },
      {
        title: 'Saanich Peninsula Environmental Coalition',
        link: 'https://saanichpeninsula.ca/',
        image: require('../png/SPEC.png'),
        description: 'In respectful collaboration with the W̱SÁNEĆ Nation, the municipalities of Central Saanich, North Saanich and Sidney, the Saanich Peninsula Environmental Coalition is working to integrate the principles and strategies of a bioregional framework into municipal OCPs. Thinking and planning in terms of bioregions - as opposed to political or administrative regions - will better support the overall health of the environment and, by extension, the diversity of human cultures and interests in that bioregion. Through the bioregional lens, the Coalition recommends policy change and invites public response and engagement to develop a stronger, more comprehensive, and citizen-approved approach to ecological sustainability.',
        tags: [
          Tag.Organization,
        ],
      },
      {
        title: 'The 1000 Rain Gardens Project',
        link: 'https://bowkercreek.org/1000-rain-gardens/',
        image: require('../png/FriendsOfBowkerCreek.png'),
        description: 'The 1000 Rain Gardens Project: "Making Bowker Creek healthy again requires that people send much more rainwater into the earth and much less into the storm drains. Wherever we live, work or go to school in Bowker Creek\'s valley, the 1000 Rain Gardens Project aims to help us manage rainwater better. The project partners Friends of Bowker Creek Society with Peninsula Streams Society (PSS). The PSS initiative, the Rain Gardens in Headwaters Program, will multiply rain gardens throughout Greater Victoria, starting here in Bowker Creek\'s valley. The 1000 Rain Gardens project provides a vital first step and proving ground for the wider program."',
        tags: [
          Tag.Initiative,
          Tag.Program,
        ],
      },
      {
        title: 'Colquitz River Restoration Storymap',
        link: 'https://storymaps.arcgis.com/stories/e884cb42946a46d1800e90a692eca278',
        image: require('../png/ColquitzRiverRestoration.png'),
        description: '"The (ongoing) Colquitz River restoration project, launched by Peninsula Streams and the District of Saanich in 2019, aims to restore ecological integrity and resilience to this urban watershed system in what is now called Saanich, British Columbia, Canada." This story was developed in partnership with Peninsula Streams Society, Engage with Nature-Based Solutions, and UVic Community Mapping students Langley Chan, Olivia Gatrell, Zacc Lavigne, and Nabila Kazmi.',
        tags: [
          Tag.StoryMap,
        ],
      },
      {
        title: 'Rainwater Rewards Program',
        link: 'https://www.victoria.ca/home-property/utilities/stormwater-management/rainwater-rewards-program',
        image: require('../png/RainwaterProgram.png'),
        description: 'This incentive program that encourages City of Victoria residents, businesses and institutional properties to use rain was a resource and helping developed watersheds mimic the function of natural systems. Rebates and ongoing credits are available for the cost of installing approved rainwater management methods from cisterns and rain gardens to permeable paving and green roofs. Check out this website to learn more and apply.',
        tags: [
          Tag.Funding,
          Tag.Government,
        ],
      },
      {
        title: 'FloodWise',
        link: 'https://floodwise.ca/',
        image: 'https://floodwise.ca/wp-content/uploads/2022/02/FW-logo-retina.png',
        description: 'Explore FloodWise to learn about Fraser River flood and coastal flood hazards and risks in the Lower Mainland. This portal provides important maps and resources to help us understand and reduce flood risk. Learn about the work underway to reduce flood risks for the region, as well as ways you can floodproof your own home and business.',
        tags: [
          Tag.Portal,
        ],
      },
    ],
  }
};
export default Question;