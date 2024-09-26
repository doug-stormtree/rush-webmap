import {
  LegendGroups,
  InitiativeTags as Tag,
} from '../TextContent';

const Question = {
  key: 'create-community',
  title: "Create Community",
  question: "When we chop down trees, cheap out on the build, and charm the big brands to set up shop, are we choosing quality of life?",
  image: require('../png/CultureCompass.png'),
  layers: [
    { key: 'AgriculturalLandReserve', active: false, group: 'Greenspace' },
    { key: 'AirConditionedBuildings', active: false, group: 'Civic' },
    { key: 'Aquifers', active: false, group: 'Water' },
    { key: 'AquiferSusceptibilityBedrock', active: false, group: 'Water' },
    { key: 'AquiferSusceptibilitySediment', active: false, group: 'Water' },
    { key: 'BCTransitRoutes', active: false, group: 'Civic' },
    { key: 'BigTrees', active: false, group: 'Greenspace' },
    { key: 'CommunityMaps', active: false, group: 'Community' },
    { key: 'CarbonSequestration', active: false, group: 'Greenspace' },
    { key: 'CherryTrees', active: false, group: 'Greenspace' },
    { key: 'CircularEconomyBusinesses', active: false, ...LegendGroups.OGM },
    { key: 'CoastalFloodInundationScenarios', active: false, group: 'Water' },
    { key: 'CRD_Parks', active: false, group: 'Greenspace' },
    { key: 'CRDBikeMap', active: false, group: 'Civic' },
    { key: 'CulturalFoods', active: false, ...LegendGroups.OGM },
    { key: 'DrinkingFountains', active: false, group: 'Civic' },
    { key: 'ENBS', active: false, group: 'Greenspace' },
    { key: 'EVChargingStations', active: false, group: 'Energy' },
    { key: 'FoodSecurity', active: false, group: 'Community' },
    { key: 'ForageFish', active: false, group: 'Water' },
    { key: 'GreenBlueBelt', active: false, group: 'Greenspace' },
    { key: 'GreenhouseGasOnRoad2020', active: false, group: 'Energy' },
    { key: 'GreenhouseGasOnRoad2022', active: false, group: 'Energy' },
    { key: 'GreenhouseGasStationary2020', active: false, group: 'Energy' },
    { key: 'GreenhouseGasStationary2022', active: false, group: 'Energy' },
    { key: 'HardShorelines', active: false, group: 'Water' },
    { key: 'HartlandLandfill', active: false, group: 'Civic' },
    //{ key: 'HeatDomes', active: false, group: 'Greenspace' },
    { key: 'HeatExposureLandSurfaceTemp', active: false, group: 'Heat' },
    { key: 'HeatExposureAirTemp', active: false, group: 'Heat' },
    { key: 'Impervious2019', active: false, group: 'Water' },
    { key: 'LittleFreeLibraries', active: false, group: 'Community' },
    { key: 'MajorTransportationHubs', active: false, group: 'Civic' },
    { key: 'MaltbyLakeBirdsong', active: false, group: 'Greenspace' },
    { key: 'Municipalities', active: false, group: 'Civic' },
    { key: 'NativeLandDigitalLanguages', active: false, group: 'Indigenous' },
    { key: 'NativeLandDigitalTerritories', active: false, group: 'Indigenous' },
    { key: 'NativeLandDigitalTreaties', active: false, group: 'Indigenous' },
    { key: 'Pollinators', active: false, ...LegendGroups.OGM },
    { key: 'RainGardens', active: false, ...LegendGroups.OGM },
    { key: 'RecyclingDepots', active: false, group: 'Civic' },
    { key: 'RestorationSites', active: false, ...LegendGroups.OGM },
    { key: 'SensitiveEcosystems', active: false, group: 'Greenspace' },
    { key: 'ShellfishPO', active: false, group: 'Water' },
    { key: 'ShorelineSensitivity', active: false, group: 'Water' },
    { key: 'SingleUseItemBylaws', active: false, group: 'Civic' },
    { key: 'SpeciesAtRisk', active: false, group: 'Greenspace' },
    { key: 'StewardshipGroups', active: false, group: 'Greenspace' },
    { key: 'TreeBylaws', active: false, group: 'Civic' },
    { key: 'TreeCoverage2005', active: false, group: 'Greenspace' },
    { key: 'TreeCoverage2019', active: false, group: 'Greenspace' },
    { key: 'TreeEquity', active: false, ...LegendGroups.OGM },
    { key: 'WatershedRunoffAbsorption', active: false, group: 'Water' },
    { key: 'Watersheds', active: false, group: 'Water' },
  ],
  sections: {
    one: [
      {
        heading: 'Your community culture is vibing if...',
        items: [
          'you know the name of Indigenous places of significance because they are marked and honoured.',
          'you’re part of an urban ecosystem with over 30% canopy cover of new and older trees. You can follow the shaded watershed from source to sea and it looks, smells and sounds healthy. Soil, paving stones, and raingardens recharge the aquifer and keep natural springs flowing.',
          'there’s a community gathering space for roughly every 30 homes. Multi-use builds include locally owned businesses and public parks with native species that provide habitat. Buildings are clustered and feature “integrated resource recovery”.',
          'Nature-based solutions or natural infrastucture is a part of every with every renovation or development address climate risks.',
        ]
      },
      {
        heading: 'It’s decidedly disconnected if...',
        items: [
          'you’re lost because everything looks the same and there’s no way to walk, roll, bike or bus there from here.',
          'buildings fail to meet the highest level of Step Code or LEED certification and are situated to increase reliance on car travel.',
          'there is no good place to hang with your gang because everywhere nice is private property, everything you want to do costs money, and there’s only one kind of food available which has no taste.',
          'the development proposal fragments ecosystem connectivity which limits biodiversity, greenhouse gas drawdown, and resilience to climate events.',
        ]
      },
    ],
    two: {
      heading: 'Cultivate culture.',
      items: [
        'Practice reconciliation. Know the name of the original peoples whose traditional territory you are on. Respect these days of observance: Red Dress Day - MMIWG2S - May 5, National Indigenous Peoples Day - June 21, National Truth and Reconciliation Day - September 30.',
        'Look out for each other. Help people connect to the people, places & services they need.',
        'Consider growing exotic fruits and vegetables to donate to cultural food programs. Get your culture fix in local stores and restaurants that supply and serve cultural foods.',
        'Use your Open Green Map account to plot your favorite spots and organizations that give you a sense of belonging. Set up a Little Free Library or Seed Bank and register it with the Greater Victoria Place-making Network.',
        'Consider how any renovation or new construction can have a kick-back to Nature. Insist on 30% canopy cover for neighbourhoods. Flag the noise implications for the duration of a construction period and consider strategies to optimize a natural soundscape in the design of neighbourhoods. Look for ways that Nature-based solutions can decrease community vulnerability to climate change and maintain property values.',
        'Advocate for mixed-use developments to build community and a good economic outlook over time. Bring forward information on climate risks is as part of the public conversation, and ask the insurance representatives for their ideas.',
        'Engage in conversations at the local level about development and planning. Participate in any way you can: by letter, meetings, social media, and talking to your neighbours with RUSH maps to help.',
        'Flag the noise implications for the duration of a construction period and consider strategies to optimize a natural soundscape in the design of neighbourhoods.',
      ]
    },
    three: {
      items: [
        'Hardly a century ago European governments took over lands and resources in BC with the intention to eliminate the original people and culture of this place. Healing from these extreme acts of oppression requires practical changes in the way our governments, communities and individuals live and work together. The UN Declaration on the Rights of Indigenous Peoples (UNDRIP) is only recently being applied by governments in Canada to show more respect, care, and recognition of the autonomy and sovereignty of Indigenous communities. To understand more about the systemic changes that are needed, read The Truth and Reconciliation Commission of Canada’s Calls to Action.',
        'Culture is not just about art, food, dance and yogurt. It is seeing people from across generations, genders and cultures represented throughout the system. Communities that embrace all generations are more stable and able to take care of themselves and their environment over time.',
        'Diversity is the key to stability in a human community as well as an ecosystem.',
        'Culture clash happens on a crowded planet. Global problems like climate change and war are forcing people to abandon their homes and families to seek safety - risking a sense of community belonging in the process. Creating a warmth of welcome for newcomers is crucial for strong and vibrant community culture.',
        'Place-making is an international movement to cultivate a sense of belonging, strength and a sense that there is enough to go around. Open Green Map and The Greater Victoria Place-making Network provide ways to create the vibe and shout out the features you like about your scene.',
        'When green spaces disappear, the general well-being of the ecosystem and folks who live in it suffers. Developers are under pressure to deliver on budgets and timelines. The insurance industry is feeling the costs in big payouts after fires, floods, earthquakes, and other extreme climate events.',
        'Many homeowners are seeing their insurance rates rising with the frequency of climate-related disasters.',
        'Affordable housing is desperately needed.',
        'Where high density development is needed, attention must still be paid to the presence of vegetation and permeable surfaces to keep the neighbourhood cool, protected from extreme water events, maintain property values, buffer noise, promote biodiversity, carbon drawdown qualifications and gain green building certifications. Multi-purpose developments can lead to more rapid relationship building, and community vitality. A short home-to-work commute enhances quality of life, is good for the local economy, keeps communities connected, and reduces greenhouse gas emissions.',
        'The growing trend of Nature-based Insurance Solutions acknowledges the value of ecosystem features like watersheds, forests, wetlands, eelgrass, kelp beds, and reefs which provide natural infrastructure to buffering environmental stresses of extreme wind, water, and temperature.',
        'By enhancing the function and scope of the local ecosystem when re-developing an area, benefits and savings are possible while providing for the long-term well-being of communities.',
        'Property values hang in the balance with climate change - and your insurance broker knows it. We all need a rider on ecosystem health.',
      ]
    },
  },
  act: {
    initiatives: [
      {
        title: 'Engage with Nature-based Solutions',
        link: 'https://www.engagewithnbs.ca/',
        image: require('../png/EngageNBS.png'),
        description: 'Engage with Nature-Based Solutions is a Canadian initiative working to support communities that apply nature-based solutions to their local lands and waters. This initiative acknowledges and takes inspiration from Indigenous peoples, whose cultures and traditions support healthy ecosystems and the interconnection and importance of all living things.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Natural Assets Intiative',
        link: 'https://mnai.ca/',
        image: require('../png/NaturalAssetsInitiative.png'),
        description: 'The Natural Assets Initiative (NAI) guides local governments in developing climate resilient infrastructure based on understanding the key role of natural areas in protecting communities.',
        tags: [
          Tag.Report,
        ],
      },
      {
        title: 'Nature Canada Report: Tree Equity',
        link: 'https://naturecanada.ca/wp-content/uploads/2022/09/Nature-Canada-Report-Tree-Equity.pdf',
        image: require('../png/NatureCanadaReport.png'),
        description: 'This report outlines the need for "the 3-30-300 rule" to support universal well-being across Canada\'s cities. Everybody should be able to see 3 trees from their home. Neighbourhoods should have a minimum of 30% canopy cover and access to a greenspace of one hectare minimum which is less than 300 meters from home.',
        tags: [
          Tag.Report,
        ],
      },
      {
        title: 'Canadian Climate Institute: Indigenomics',
        link: 'https://climateinstitute.ca/publications/indigenomics/',
        image: require('../png/CCCIndigenomics.png'),
        description: 'Economics from an Indigenous Worldview. The Indigenomics Institute is a leading research, education, and engagement platform that supports the rebuilding and design of Indigenous economies of Indigenous peoples worldwide.',
        tags: [
          Tag.Organization,
          Tag.Indigenous,
        ],
      },
      {
        title: 'Making Room: A Transitional Tiny Home Community',
        link: 'https://storymaps.arcgis.com/stories/14aeb7c901e04cc59272745e7a538994',
        image: require('../png/MakingRoom.png'),
        description: 'This story map is a hub of resources, information and narrative that builds awareness about the plight of houselessness generally, as it also tells of the specific response to houselessness in the North Park Community of Victoria: a Transitional Tiny Home Village made of re-purposed shipping containers.',
        tags: [
          Tag.StoryMap,
        ],
      },
      {
        title: "South Island Prosperity Partnership",
        link: "https://southislandprosperity.ca/who-is-sipp/",
        image: require('../png/SIPP.png'),
        description: 'The South Island Prosperity Partnership (SIPP) is an alliance of over 70 public and private-sector partners in Greater Victoria, including 11 local governments, nine First Nations, three post-secondary institutions, nine industry associations and nonprofits, and more than 30 major employers. SIPP works to bolster our region\'s economic and social prosperity. This will happen by catalyzing the creation of high-quality, household-sustaining jobs, so that more families can afford to live, work and build a life here.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Aqua-tex Scientific',
        link: 'https://www.aqua-tex.ca/',
        image: require('../png/Aqua-Tex.png'),
        description: 'Aqua-Tex is a specialized company that promotes innovative urban design and integrated ecological site planning for water management. The goal at the heart of all Aqua-Tex projects is to use sound principles of water ecology to maintain or restore aquatic ecosystems to "proper functioning condition" so that they may provide ecological and social values as part of a stable economy.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Final Report of the Independent Review on the Economics of Biodiversity led by Professor Sir Partha Dasgupta',
        link: 'https://www.gov.uk/government/publications/final-report-the-economics-of-biodiversity-the-dasgupta-review',
        image: require('../png/DasguptaReview.png'),
        description: 'The Dasgupta Review is an independent, global review on the Economics of Biodiversity led by Professor Sir Partha Dasgupta (Frank Ramsey Professor Emeritus, University of Cambridge). The Review calls for "changes in how we think, act and measure economic success to protect and enhance our prosperity and the natural world. Grounded in a deep understanding of ecosystem processes and how they are affected by economic activity, the new framework presented by the Review sets out how we should account for Nature in economics and decision-making."',
        tags: [
          Tag.Report,
        ],
      },
      {
        title: 'Taskforce for Nature-related Financial Disclosures',
        link: 'https://tnfd.global/',
        image: require('../png/TNFD.png'),
        description: 'The Taskforce on Nature-related Financial Disclosures recognizes the inherent risk to business of nature loss, and the corresponding opportunities of nature-positive investments. TNFD has developed a framework to support organizatons in reporting and acting on nature-related risks, with the ultimate aim of supporting "a shift in global financial flows away from nature-negative outcomes and toward nature-positive outcomes."',
        tags: [
          Tag.Report,
        ],
      },
      {
        title: 'Swiss Re Group',
        link: 'https://www.swissre.com/our-business/public-sector-solutions/thought-leadership/new-type-of-insurance-to-protect-coral-reefs-economies.html',
        image: require('../png/InsuranceCoralReefs.png'),
        description: 'The Swiss Re Group bills itself as "one of the world\'s leading providers of reinsurance, insurance and other forms of insurance-based risk transfer, working to make the world more resilient.” In one collaborative sustainability project off the coast of the Yucatan Peninsula, Swiss Re devised an insurance strategy that was "the world\'s first ever nature-based solution to protect Mexico\'s coral reef.” The strategy was based on research showing that investing in nature can be more effective than man-made solutions at carbon capture; as well as a connection between a healthy coral reef and the region\'s ability to sustain itself economically.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Resources From Waste: A Guide to Integrated Resource Recovery',
        link: 'https://www2.gov.bc.ca/assets/gov/british-columbians-our-governments/local-governments/planning-land-use/resources_from_waste_irr_guide.pdf',
        image: require('../png/ResourceRecovery.png'),
        description: 'This Guide to Integrated Resource Recovery was produced by BC\'s Ministry of Community Development in 2009. It offers alternatives to conventional waste management. The goal of this Guide is to present waste as a resource, rather than managing waste so as to make it “seemingly disappear." The Guide offers new ways to reduce costs and recover revenues from wastes, while also providing environmental and social benefits from Integrated Resource Recovery strategies.',
        tags: [
          Tag.Report,
        ],
      },
      {
        title: 'Energy Step Code',
        link: 'https://energystepcode.ca/',
        image: require('../png/EnergyStepCode.png'),
        description: 'The BC Energy Step Code sets performance requirements for new construction and groups them into “steps.” All authorities having jurisdiction over the BC Building Code—including local governments—can choose to require or incentivize builders to meet one or more steps of the Code. As of May 1, 2023, the Code requires 20%-better energy efficiency for most new buildings in B.C. In a move to transition towards energy efficient and zero carbon new buildings, a new Zero Carbon Step Code provides tools to local governments to incentivize or require cleaner new construction.',
        tags: [
          Tag.Agreement,
          Tag.Target,
        ],
      },
      {
        title: 'ReImagine West Shore',
        link: 'https://reimagineus.ca/',
        image: 'https://reimagineus.ca/wp-content/uploads/2023/10/Logo-Oct-6-2023.png',
        description: 'ReImagine West Shore is a new non-profit that holds high the bright vision of a West Shore community of climate-conscious people, where sustainable behaviours are simply part of the mainstream way of life. By hosting public conversations, creative initiatives, and events from Repair Cafe to Seedy Saturday, ReImagine connects community members with each other and with ways to make simple changes that save money while respecting the planet and places we call home.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Feather Friendly',
        link: 'https://www.featherfriendly.com/crisis',
        image: 'https://featherfriendly.com/cdn/shop/files/FF_logo_Primary_without_tagline_cadbc495-59f5-4ae1-9b84-f3eaf2ace1a2.png?v=1712592954&width=240',
        description: 'Approximately 1 billion birds die annually in North America from window collisions, and nearly two-thirds of North American birds are at risk of extinction. Feather Friendly offers a simple, effective solution: window markers that are unobtrusive to humans, but make glass areas visible to birds, thereby preventing deadly collisions. With both residential and commercial applications, Feather Friendly’s little window markers are making a big mark in protecting our feathered friends. Feather Friendly encourages us all to help raise awareness for the importance of bird safety by using the Global Bird Collision Mapper.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'W̱SÁNEĆ Leadership Council - Settler Resources',
        link: 'https://wsanec.com/learn-settlers/',
        image: 'https://wsanec.com/wp-content/uploads/2019/04/WLC-logo-colour-500px-min.png',
        description: 'Resources for settlers who are interested in allyship. Here you will find information on significant initiatives and ways you can help. The reason territorial acknowledgements are needed and how to prepare one. Reading lists and ways to donate to accelerate progress.',
        tags: [
          Tag.Organization,
          Tag.Indigenous,
        ],
      },
      {
        title: 'W̱SÁNEĆ Peninsula Environmental Organizations',
        link: 'https://storymaps.arcgis.com/stories/5239fadd726c462da56ebcbe231c57be',
        image: require('../png/WSANECEnvironmentalOrgs.png'),
        description: 'There are many people & organizations across the Saanich Peninsula working towards healthier ecosystems and connected communities across municipal boundaries. Learn about their work in this StoryMap created by UVic Community Mapping students Evan Gerbrecht, Casey Lake, Samantha Denton, Ethan Heckrodt with direction from the Saanich Peninsula Environmental Coalition.',
        tags: [
          Tag.StoryMap,
          Tag.Organization,
          Tag.Indigenous,
        ],
      },
      {
        title: 'W̱SÁNEĆ Lands Trust Society',
        link: 'https://wsanec.com/w̱sanec-lands-trust/',
        image: 'https://wsanec.com/wp-content/uploads/2019/04/WLC-logo-colour-500px-min.png',
        description: 'The W̱SÁNEĆ Lands Trust Society (WLTS) is a collaboration of several W̱SÁNEĆ Communities, working to partner with more W̱SÁNEĆ organizations.  WLTS provides a place for colonized land to be returned to the W̱SÁNEĆ people. The primary goals are to help future generations of W̱SÁNEĆ access land for cultural purposes, to positively impact the environment through W̱SÁNEĆ stewardship, and to seek land back for collaborative projects such as community housing and economic development initiatives.  The WLTS will achieve these goals by providing a place for land to be held collectively, across the W̱SÁNEĆ Bands, and by making land return and the provision of financial support easier for private donors.',
        tags: [
          Tag.Organization,
          Tag.Indigenous,
        ],
      },
      {
        title: 'Little Free Libraries',
        link: 'https://victoriaplacemaking.ca/little-free-libraries/',
        image: require('../png/LittleFreeLibraries.png'),
        description: 'Little Free Libraries is a popular DIY community concept, where unique homemade book exchange boxes are made freely available in front of homes and businesses for the enjoyment of neighbours and visitors. Learn more and find a map to over 700 of these libraries in the CRD at the Greater Victoria Placemaking Society.',
        tags: [
          Tag.Initiative,
          Tag.Program,
        ],
      },
      {
        title: 'Native Land Digital',
        link: 'https://native-land.ca/',
        image: require('../png/NativeLandDigital.png'),
        description: 'Native Land Digital strives to create and foster conversations about the history of colonialism, Indigenous ways of knowing, and settler-Indigenous relations, through educational resources such as their map and Territory Acknowledgement Guide. Native Land Digital reaches beyond old ways of talking about Indigenous people and to develop a platform where Indigenous communities can represent themselves and their histories on their own terms.',
        tags: [
          Tag.Map,
          Tag.Indigenous,
        ],
      },
      {
        title: 'Truth and Reconciliation Report',
        link: 'https://ehprnh2mwo3.exactdn.com/wp-content/uploads/2021/01/Calls_to_Action_English2.pdf',
        image: require('../png/TRCC.png'),
        description: 'With a mandate to inform Canadians about the legacy of the Indian Residential Schools system, in these reports the The Truth and Reconciliation Commission (TRC) documents the truth of Survivors, their families, communities, and others personally affected by the residential school experience. June 2015, the TRC released its findings along with 94 "calls to action" regarding reconciliation between Canadians and Indigenous Peoples.',
        tags: [
          Tag.Report,
          Tag.Indigenous,
        ],
      },
      {
        title: 'STEAM Ecosystem BC',
        link: 'https://steamecosystembc.ca/',
        image: 'https://steamecosystembc.ca/wp-content/uploads/2021/09/STEAM-Ecosystem-BC.png',
        description: 'STEAM Ecosystem BC Association is a non-profit, community-led response to accelerate the growth of STEAM literacy in British Columbia. This growing network brings together organizations from across multiple sectors (industry, education, government, business, non-profits) to ensure all learners have equal access to educational resources and opportunities in our communities.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'RUSH Culture Compass Storymap',
        link: 'https://storymaps.arcgis.com/stories/ba28ad0ffcbf431482d26e552593c54f',
        image: require('../png/RUSHCultureCompass.png'),
        description: 'This is an open map that highlights the rich cultural resources of the Victoria region.  It was created by three UVic students and supported by the  RUSH Initiative . The purpose of this StoryMap is to track places of culture and belonging and find places where people are finding cultural connections and exploring" cultural meaning."',
        tags: [
          Tag.StoryMap,
        ],
      },
      {
        title: 'Canada Healthy Communities Initiative',
        link: 'https://communityfoundations.ca/initiatives/canada-healthy-communities-initiative/',
        image: 'https://149360731.v2.pressablecdn.com/wp-content/themes/cfc-redesign/dist/images/PNG2X/cfc-logo-english@2x.png',
        description: 'Through the Canada Healthy Communities Initiative, the federal government has allocated funding to support a broad range of organizations in undertaking initiatives that will help strengthen communities across Canada by: creating safe and vibrant public spaces, indoors and out; making it easier for people to get around, whether by foot, bike, public or private transit; and providing innovative digital solutions to connect people, support community services, address evolving community needs, and facilitate citizen engagement.',
        tags: [
          Tag.Initiative,
          Tag.Government,
        ],
      },
      {
        title: 'Carbon Counts',
        link: 'https://www.carboncounts.tech/',
        image: require('../png/CarbonCounts.png'),
        description: 'Carbon Counts is the maker of EverForest, a mobile game that re-greens the world by harnessing the power of people at play. Here\'s how it works: as players build a flourishing forest in-game, real trees are planted around the world on their behalf. With every real tree planted, individual gameplay is boosted, and the real-time, cumulative impact of players around the globe grows. EverForest transforms the fun of games into living, breathing, diverse forests as it also provides a playful platform for humans to feel ourselves to be the force of nature we truly are.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Victoria Native Friendship Centre',
        link: 'https://vnfc.ca/calendar/',
        image: 'https://vnfc.ca/wp-content/uploads/2022/09/VNFC-favicon.png',
        description: 'The VNFC is a non-profit Indigenous-led organization building and delivering over 75 programs to improve socio-economic conditions for urban Indigenous peoples on Southern Vancouver Island. The VNFC speaks of their goal as to stitch the fabric of Indigenous traditions into everything they do, and to greet each other and the natural world in a good way every day. Check out the extensive, eclectic calendar for diverse events ranging from Language Tables and Herbal Medicine, to Youth Drop-In sports and games, Pre-natal groups, and community acupuncture and massage. There\'s so much good on offer every weekday.',
        tags: [
          Tag.Organization,
          Tag.Indigenous,
        ],
      },
    ],
  }
};
export default Question;