const BeatTheHeat = {
  key: 'beat-the-heat',
  title: "Beat the Heat",
  question: "Smokin’ hot spells are happening now with climate change. Is your neighbourhood a heat island?",
  image: require('../png/BeatTheHeat.png'),
  sections: {
    one: [
      {
        heading: 'You\'re "cool" if...',
        items: [
          'you have shady places of refuge, cool buildings, and drinking fountains nearby.',
          'your area follows the tree equity rule and your neighbourhood has 30% canopy cover.',
          'the green spaces are connected by "greenways" which increases cooling capacity.',
          'the pavement around you is permeable and light in colour.',
        ]
      },
      {
        heading: 'Start "sweating" if...',
        items: [
          'when you pinpoint your location on the map, it is in a red heat dome.',
          'your neighbourhood has a high density of buildings.',
          'your neighbourhood has less than 30% canopy cover.',
          'there is lots of impermeable dark pavement around you that traps and radiates the sun’s heat.',
          'the green spaces are few and fragmented.',
        ]
      },
    ],
    two: {
      heading: 'Create a cool climate.',
      items: [
        'Figure out whether your home meets the tree equity standard. Extending and connecting natural spaces across urban landscapes will help keep us cool and moist.',
        'Can you see 3 trees from your window? Use your Open Green Map account to plot your three trees and areas of relief like drinking fountains, cool buildings and ice cream shops.',
        'Identify large areas of pavement that radiate heat. Talk to your municipal leaders about better options including permeable or light coloured pavement, and ways to create more shading in those spaces.',
        'Stay on the sidewalk to avoid compacting soil. Healthy loose soil processes harmful greenhouse gasses twice as efficiently as plants do. The partnership between trees, soil and the atmosphere is key to a healthy climate.',
        'Re-invent your yard. Create multiple layers of greenery for shade, habitat, moisture, and to turn greenhouse gasses into beautiful plants and food. Introduce a variety of plants to keep your ecosystem working even in the hot months that are tough on grass.',
        'Keep the shoreline shaded to protect the creatures of the intertidal zone from dying of heat. These water-filtering creatures clean and maintain the water quality in the ocean every day, free of charge. We humans don’t know how to provide this service, nor could we afford to provide it on the scale at which it naturally occurs.',
        'Advocate for your community to increase public green spaces and cooling architecture.',
      ]
    },
    three: {
      items: [
        'All life is vulnerable to extreme heat. Prolonged heat dries out landscapes, increases risk of fires, can shorten growing seasons, and create conditions for viruses and bacteria to thrive.',
        'High temperatures also threaten biodiversity by drying out habitats and directly increasing the body temperatures of the critters who live there. 70% of human sudden deaths recorded in BC during the heat wave of 2021 were due to extreme temperatures.',
        'Research shows that communities with a lower income in Canada’s largest cities don’t have access to as much green space. This means more stress and mental health challenges that make it even harder to make ends meet and makes folks more vulnerable to heat events.',
        'This same research points to the 3-30-300 standard. The Global Deal for Nature concludes that we need to protect at least 30% of the planet by 2030. Saanich is on board, having committed to at least 30% urban forest cover.',
        'While ocean breezes can cool neighbourhoods closer to the shore, making more space for Nature and decreasing dark non-draining pavement will support a cool microclimate consistently. Where high density development is needed, attention must still be paid to the presence of vegetation and permeable surfaces to keep the neighbourhood cool, protected from extreme water events, and with enough habitat for biodiversity which in turn promotes community wellbeing through lower stress levels.',
      ]
    },
  },
  act: {
    initiatives: [
      {
        title: "North Park Heatwave Map",
        description: "The North Park Heatwave StoryMap shows the feedback process with community members and organizations to identify areas of relief, concern and risk related to extreme heat events during the summers of 2021 and 2022. The result is this map that the community can use to orient and help during a heatwave, and also to advocate for improvements to infrastructure and services. This StoryMap was created by Riley Sondergaard, while the North Park Heatwave Map was created by Tenaya Lynx, Julia Frasher, Riley Sondergaard during their Community Based Participatory Research Class, Geography, University of Victoria.",
        image: require('../png/NorthPark.png'),
        link: "https://storymaps.arcgis.com/stories/1b18c6ccd6414b2cb74216847022df19",
      },
      {
        title: "Climate Atlas of Canada",
        description: "The Climate Atlas of Canada is an engaging tool that brings together climate data, Indigenous wisdom and action, together with tools that bring existing and potential solutions into focus.",
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
        description: 'This report outlines the need for "the 3-30-300 rule" to support universal well-being across Canada\'s cities. Everybody should be able to see 3 trees from their home. Neighbourhoods should have a minimum of 30% canopy cover and access to a greenspace of at least one hectare which is less than 300 meters from home.',
        link: 'https://naturecanada.ca/wp-content/uploads/2022/09/Nature-Canada-Report-Tree-Equity.pdf',
        image: require('../png/NatureCanadaReport.png'),
      },
      {
        title: 'Urban Forest Canopy in CRD',
        description: 'This report shows the change in canopy from 1986 to 2005 in the Greater Victoria Area - a study led by the Habitat Aquisition Trust. The goal was to grow awareness of the quality and importance of the urban forest to support sustainable planning. This study was redone in 2020. If you know where it is, please let RUSH know through the feedback form or email connect@whatstherush.ca',
        link: 'https://static1.squarespace.com/static/5e3c5b7e5460c55405a6d4d6/t/61bbd35f3486620f41b2aacf/1639699301418/UFSI+mapping+report+exec+sum.pdf',
        image: require('../png/UrbanForestStewardship.png')
      },
      {
        title: 'A Hot Topic - Understanding heat vulnerability in the CRD',
        description: 'Follow the research collaboration between the The University of Victoria and the Capital Regional District to learn more about how the 2021 heat dome event affected vulnerable populations. Through community based participatory research methods, they are continuing to inquire about how to support communities.',
        link: 'https://storymaps.com/stories/989b03cc3bc042fa8d7fc6e80c712464',
        image: require('../png/AHotTopic.png')
      },
      {
        title: 'Firesmoke Canada',
        description: 'This portal is a point of access to the BlueSky Canada smoke forecasts, fire weather forecasts, fire information, and the BlueSky Playground. It is produced by The Weather Forecast Research Team at the University of British Columbia, in collaboration with multiple agencies that support of individuals and organizations seeking to protect air quality and reduce wildland fire hazards.',
        link: 'https://firesmoke.ca',
        image: require('../png/FiresmokeCanada.png')
      },
      {
        title: '30% by 2030',
        description: 'This press release announces Canada\'s commitment at COP 15 to protect and conserve 30% of Canada\'s land and water by 2030.  This goal is in support climate resilience, biodiversity, and economic prospects.',
        link: 'https://www.canada.ca/en/environment-climate-change/news/2022/12/government-of-canada-recognizing-federal-land-and-water-to-contribute-to-30-by-30-nature-conservation-goals.html',
        image: require('../png/30by30.png')
      },
      {
        title: 'The Global Deal for Nature',
        description: 'Written by scientists and supported by organizations around the world, this is a call to protect at least 1/2 of the world\'s natural spaces in response to the planet\'s sharp decline in biodiversity, forest canopy, and coral reefs. It identifies climate stabilization areas, and takes a holistic approach to land, freshwater and marine ecoregions. It includes an interface for individuals to support the petition.',
        link: 'https://www.globaldealfornature.org/',
        image: require('../png/GlobalDealForNature.png')
      },
      {
        title: 'World Economic Forum: 2030',
        description: 'This is the World Economic Forum\'s support of the Global Deal for Nature, with an appeal to others to adopt the standard.',
        link: 'https://www.weforum.org/agenda/2019/04/why-protect-30-planet-2030-global-deal-nature-conservation/',
        image: require('../png/WorldEconomicForum.png')
      },
      {
        title: 'COP28 Declaration on Climate and Health',
        description: 'Signed by 123 countries, the Declaration covers a range of action areas at the nexus of climate and health, including building more climate-resilient health systems, strengthening cross-sectoral collaboration to reduce emissions and maximize the health benefits of climate action, and increasing finance for climate and health solutions.',
        link: 'https://www.cop28.com/en/news/2023/12/Health-Declaration-delivering-breakthrough-moment-for-health-in-climate-talks',
        image: require('../png/COP28UAE.png')
      },
    ],
  }
};
export default BeatTheHeat;
