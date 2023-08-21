const BeatTheHeat = {
  key: 'beat-the-heat',
  title: "Beat the Heat",
  question: "How can I keep myself and the ecosystem cool & hydrated?",
  image: require('../png/BeatTheHeat.png'),
  description: [
    {type: 'h2', content: 'Comparison'},
    {type: 'p', content: 'The red polygons show areas with significant increases in average summer surface temperature from 2018 to 2021 within the CRD. Tree coverage shows the areas where more vegetation is needed. Urban centres with dark pavement can absorb the heat and re-emit it at a rate of 95%.  Hard pavement does not allow the land to breathe and regulate the atmosphere. Cool buildings, parks and drinking fountains can provide essential relief. Notice the relationship between heat island areas, green space and dark or paved surfaces.'},
    {type: 'h2', content: 'Problem'},
    {type: 'p', content: 'All life is vulnerable to extreme heat.  Prolonged heat dries out landscapes,  increases risk of fires, can shorten growing seasons for farmers and create conditions for viruses and bacteria to thrive.  High temperatures also impacts biodiversity by drying out habitats or directly increasing body temperatures. 70% of human sudden deaths recorded in BC during the heat wave of 2021 were due to extreme temperatures.¹'},
    {type: 'p', content: 'Research shows that communities with a lower income in Canada\'s largest cities don\'t have access to as much greenspace impacting their sense of well being and making them more vulnerable to heat events.²'},
    {type: 'h2', content: 'Solution'},
    {type: 'p', content: 'This same research sets the 3-30-300 standard meaning, "everyone should be able to see at least three trees from their home, that all neighbourhoods should have at least a 30% tree canopy, and that all residents should have a greenspace of at least one hectare within 300 metres of where they live."²'},
    {type: 'p', content: 'While ocean breezes can cool neighbourhoods closer to the shore,  making more room for trees, plants and soil will support a cool microclimate consistently. Trees, bushes and plants cool the area and draw down harmful greenhouse gases from the atmosphere. The soil does the work of processing the gases at a rate of 2:1 compared to plants.³'},
    {type: 'p', content: 'The Global Deal for Nature concludes that we need to Protect at least 30% of the planet by 2030⁴ and many urban areas including Saanich have committed to at least 30% urban forest cover so that ecosystems continue to harbour an abundance of species, and provide services essential for human life, including carbon sequestration. The partnership between trees, soil, water and the atmosphere is key to having a healthy climate.  Encourage your municipality to increase permeable surfaces and adopt a policy of at least 30% canopy cover.'},
    {type: 'p', content: 'Decreasing dark non-draining pavement and increasing space for Nature provides many benefits including managing temperature, keeping things moist and recharging the water table, supporting birds and pollinators, increasing property values and enhancing a sense of beauty and wellbeing.'},
    {type: 'p', content: 'Support community groups working in restoration and taking care of each other. Taking action to manage temperature and moisture in our neighbourhoods is a key to climate action. Use this map to identify places that need attention, ways to stay cool and protect your community from extreme heat.'},
    {type: 'link', content: '1. CBC News, "70% of sudden deaths recorded during B.C. heat wave were due to extreme temperatures, coroner confirms," July 29, 2021.', url: "https://www.cbc.ca/news/canada/british-columbia/bc-heat-dome-sudden-deaths-570-1.6122316"},
    {type: 'link', content: '2. Erin Whittingham, Vilbert Vabi, Sharmeena Lalloo, and Saleena Hak, 2022. Canada\'s Urban Forests: Bringing the Canopy to All. Nature Canada.', url: 'https://naturecanada.ca/wp-content/uploads/2022/09/Nature-Canada-Report-Tree-Equity.pdf'},
    {type: 'link', content: '3. Claudia Rivera Cárdenas, Anne-Marie Daniel, "How does nature regulate atmospheric composition?: Formaldehyde removal from air," Proc. SPIE 11586, Bioinspiration, Biomimetics, and Bioreplication XI, 1158609, March 22, 2021.', url: "https://doi.org/10.1117/12.2579919"},
    {type: 'link', content: '4. Nicole Schwab, Kristin Rechberger, "We need to protect 30% of the planet by 2030. This is how we can do it," World Economic Forum, April 22, 2019.', url: "https://doi.org/10.1117/12.2579919"},
    {type: 'link', content: 'Cover photo by DESIGNECOLOGIST on Unsplash, July 20, 2021. Red sun over Toronto during wildfire season.', url: 'https://unsplash.com/photos/Y1CLEQZX-jc'}
  ],
  act: {
    initiatives: [
      {
        title: "North Park Heatwave Map",
        description: "The North Park Heatwave StoryMap goes into more depth and shows the feedback process with community members and organizations to identify areas of relief, concern and risk resulting in a map that the community can use to orient and help during a heatwave and also to advocate for improvements to infrastructure and services. This StoryMap was created by Riley Sondergaard, while the North Park Heatwave Map was created by Tenaya Lynx, Julia Frasher, Riley Sondergaard during their Community Based Participatory Research Class, Geography, University of Victoria.",
        image: require('../png/NorthPark.png'),
        link: "https://storymaps.arcgis.com/stories/1b18c6ccd6414b2cb74216847022df19",
      },
      {
        title: "Climate Atlas of Canada",
        description: "The Climate Atlas of Canada is an engaging tool that brings together climate data, indigenous wisdom and action, together with tools that bring existing and potential solutions into focus.",
        image: require('../png/ClimateAtlas.png'),
        link: "https://climateatlas.ca/",
      },
      {
        title: "2 Billion Trees Program",
        description: "The 2 Billion Trees (2BT) program aims to motivate and support new tree planting projects. Over a period of 10 years, by 2031, up to $3.2 billion will be invested in tree planting efforts to support provinces, territories, third-party organizations (for-profit and not-for profit) and Indigenous organizations to plant two billion trees across Canada.",
        image: require('../png/2BillionTrees.png'),
        link: "https://www.canada.ca/en/campaign/2-billion-trees/2-billion-trees-program.html",
      },
      {
        title: 'Nature Canada Report: Tree Equity',
        description: 'This report outlines the need for "the 3-30-300 rule" to support universal well-being across Canada\'s cities. Everybody should be able to see 3 trees from their home. Neighbourhoods should have a minimum of 30% canopy cover and access to a greenspace of one hectare minimum which is less than 300 meters from home.',
        link: 'https://naturecanada.ca/wp-content/uploads/2022/09/Nature-Canada-Report-Tree-Equity.pdf',
        image: require('../png/NatureCanadaReport.png'),
      },
      {
        title: 'Urban Forest Canopy in CRD',
        description: 'This report shows the change in canopy from 1986 to 2005 in the Greater Victoria Area - a study led by the Habiatat Aquisition Trust. The goal was to grow awareness of the quality and importance of the urban forest to support sustainable planning. This study was redone in 2020. If you know where it is, please let RUSH know through the feedback form or email connect@whatstherush.ca',
        link: 'https://static1.squarespace.com/static/5e3c5b7e5460c55405a6d4d6/t/61bbd35f3486620f41b2aacf/1639699301418/UFSI+mapping+report+exec+sum.pdf',
        image: require('../png/UrbanForestStewardship.png')
      },
      {
        title: 'Firesmoke Canada',
        description: 'This portal is a point of access to the BlueSky Canada smoke forecasts, fire weather forecasts, fire information, and the BlueSky Playground. Produced by The Weather Forecast Research Team at the University of British Columbia in collaboration with multiple agencies in support of individuals and organizations wseeking to protect health and safety re: air quality and wildland fire hazards.',
        link: 'https://firesmoke.ca',
        image: require('../png/FiresmokeCanada.png')
      },
      {
        title: '30% by 2030',
        description: 'This press release announces Canada\'s commitment at COP 15 to protecting and conserving 30% of Canada\'s land and water by 2030.  This goal is in support climate resilience, biodiversity, and economic prospects.',
        link: 'https://www.canada.ca/en/environment-climate-change/news/2022/12/government-of-canada-recognizing-federal-land-and-water-to-contribute-to-30-by-30-nature-conservation-goals.html',
        image: require('../png/30by30.png')
      },
      {
        title: 'The Global Deal for Nature',
        description: 'Written by scientists and supported by organizations around the world, this is a call to protect at least 1/2 of the world\'s natural spaces in response to the planet\'s sharp decline in biodiversity, forest canopy, and coral reefs. It identifies climate stabilization areas and takes a holistic approach to includes land, freshwater and marine ecoregions. It includes an interface for individuals to support the petition.',
        link: 'https://www.globaldealfornature.org/',
        image: require('../png/GlobalDealForNature.png')
      },
      {
        title: 'World Economic Forum: 2030',
        description: 'This is the World Economic Forum\'s support of the Global Deal for Nature with an appeal to others to adopt the standard.',
        link: 'https://www.weforum.org/agenda/2019/04/why-protect-30-planet-2030-global-deal-nature-conservation/',
        image: require('../png/WorldEconomicForum.png')
      },
    ],
  }
};
export default BeatTheHeat;
