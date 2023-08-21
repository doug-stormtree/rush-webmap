const Coastal = {
  key: 'protect-the-coast',
  title: "Protect the Coast",
  question: "Am I vulnerable to sea level rise, tsunamis, storm surges?",
  image: require('../png/ProtectTheCoast.png'),
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
        image: require('../png/EngageNBS.png'),
        description: "Engage with Nature-Based Solutions is a new initiative to support communities who apply nature-based solutions to their local lands and waters. Nature-based solutions support the health of natural systems, while addressing societal challenges.",
      },
      {
        title: "SeaChange Marine Conservation Society",
        noText: true,
        link: "https://www.seachangesociety.com",
        image: require('../png/SeaChange.png'),
        description: "SeaChange takes action on marine conservation and restoration spills across the Salish Sea. SeaChange works with volunteers, community groups and First Nations to map, monitor and restore eelgrass habitat. SeaChange collaborates to help governments make better decisions about the fate of shorelines and nearshores.",
      },
      {
        title: "Nature-based Solutions - IBC",
        link: "http://www.ibc.ca/on/disaster/nature-based-solutions",
        image: require('../png/IbcNBS.png'),
        description: "A Nature-based Insurance Solution (NBIS) is an insurance framework that provides financial compensation or reimbursement against losses derived from damage to a natural asset – such as wetland, forest, beach, or other natural structure – based on predetermined risks coverage limits. NBIS serves a similar purpose to other, more conventional forms of insurance, as it allows natural assets to be treated like engineered assets (buildings, bridges, roads, vehicles, etc.). Insurance Bureau of Canada works with its members and external partners to advance nature-based solutions as a cost effective and under-utilized way to protect Canadians from flooding and other climate risks.",
      },
      {
        title: 'Surfrider',
        link: 'https://canada.surfrider.org/',
        image: require('../png/Surfrider.png'),
        description: 'Surfrider Foundation Canada is dedicated to the protection and enjoyment of the ocean, beaches, and waves, for all people, through a powerful activist network.'
      },
      {
        title: "Sea Level Rise",
        link: "https://sealevelrise.ca/map.html",
        image: require('../png/SeaLevelRise.png'),
        description: "Connect with coastal stakeholders across the country through this interactive map, which allows you to identify and share your observations and experiences with sea-level rise impacts along Canada's coastline.",
      },
      {
        title: "Climate Action for Salmon",
        link: "https://storymaps.arcgis.com/stories/9a1164af036041638e75df5cb02bb15a",
        image: require('../png/ClimateActionSalmon.png'),
        description: "Climate change is here, and wild Pacific salmon need our help. Storymap by Jake Dingwall.",
      },
      {
        title: "Forage Fish in the Salish Sea",
        link: "https://storymaps.arcgis.com/stories/969e5bb112984c16b7214995c8fc75c3",
        image: require('../png/ForageFishSalishSea.png'),
        description: "Forage fish are small schooling fish that play a crucial role in the marine food web, directly feeding many marine animals including orcas, birds, and salmon. Storymap by the Strait of Georgia Data Centre.",
      },
      {
        title: "Saving Orcas",
        link: "https://elc.uvic.ca/publications/saving-orcas/",
        image: require('../png/SavingOrcas.png'),
        description: "Saving Orcas by Protecting Fish Spawning Beaches. Report prepared for the World Wildlife Fund Canada providing law reform recommendations for protecting forage fish populations and Southern Resident orcas. Produced by the Environmental Law Society at the University of Victoria."
      },
      {
        title: 'Clean Coast, Clean Waters',
        link: 'https://bccleancoast.ca/',
        image: require('../png/CleanCoast.png'),
        description: 'The Clean Coast, Clean Waters Initiative Fund is directed toward marine coastal Indigenous Nations, Indigenous organizations and local governments in BC, as well as BC non-profits and organizations / individuals that have expertise in shoreline and marine debris clean-up and/or removal of derelict vessels.'
      },
      {
        title: 'Strait of Georgia Data Centre',
        noText: true,
        link: 'https://sogdatacentre.ca/',
        image: require('../png/SOGDC.png'),
        description: 'Since 2011, the SGDC has been collecting marine ecosystem data for the Strait of Georgia, and providing these data through this online portal. It is designed to serve as a central data repository, to protect and collate marine ecosystem information for the Strait, and to allow for data sharing and integration. We continue to work with researchers, community and stewardship groups, First Nations, academics and non-profits to bring their data sets to the SGDC. In 2016 we began development of many mapping products, both static maps, animations and story maps, to allow for visual interpretation and increased visibility to many of the data sets housed in the Strait of Georgia Data Centre. A visit to the SGDC allows you to access the information you need about the Strait of Georgia marine ecosystem so you can stay informed; simplify data acquisition by exploring the comprehensive SGDC Data Portal; connect with others by learning about their work, utilizing their data, or submitting data of your own; and bring data to life by visualizing it through the SGDC Map Catalogue.'
      }
    ],
  },
};
export default Coastal;