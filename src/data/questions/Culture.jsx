const Culture = {
  key: 'culture-compass',
  title: "Culture Compass",
  question: "Culture clash happens on a crowded planet. Cultivate a vibe of respect and belonging for everyone.",
  image: require('../png/CultureCompass.png'),
  description_new: [
    {type: 'h2', content: 'Your community culture is vibing if...'},
    {type: 'ul', content: [
      'there are free public gathering places like parks, squares and fountains.',
      'you see public art.',
      'Indigenous places of significance are marked and honoured.',
      'you can get to greenspaces including parks and beach access points.',
      'your neighbourhood has cultural spaces and facilities like galleries and libraries, recreation & community centres.',
      'all of these spaces are a safe and accessible walk, roll, bike or bus ride from home.',
    ]},
    {type: 'h2', content: 'It’s a dangerous divide if...'},
    {type: 'ul', content: [
      'there is no good place to hang with your gang.',
      'everything you want to do costs money.',
      'nobody knows whose traditional territory they are on.',
      'everywhere nice is private property.',
      'there’s only one kind of food available and it’s got no taste.',
      'ways to expand your mind, feed your soul, or let off steam don’t exist nearby...',
      '...and, even if they did, getting there is dodgy and takes forever.',
    ]},
    {type: 'spacer'},
    {type: 'h2', content: 'Make your move. Cultivate culture.'},
    {type: 'ul', content: [
      'Use your open greenmap account to plot your favorite spots and organizations that give you a sense of belonging.',
      'Look out for each other. Help people connect to the people, places & services they need.',
      'Protect the rights of everyone to express their culture.',
      'Build a culture of reconciliation with Indigenous communities.',
      '    Respect these days of observance:',
      '        Red Dress Day - MMIWG2S - May 5',
      '        National Indigenous Peoples Day - June 21',
      '        National Truth and Reconciliation Day - September 30',
      '    Know the name of the original peoples whose traditional territory you are on. Take care of the ecosystem so the Indigenous way of life is possible.',
      '    Read the Truth and Reconciliation Commission of Canada Calls to Action.',
      'Set up a Little Free Library or Seed Bank and register it with the Greater Victoria Place-making Network.',
      'Find out what is happening in your local community centres and support local art exhibitions, music festivals, and cultural celebrations.',
      'Consider growing exotic fruits and vegetables to donate to cultural food programs. Get your culture fix in local stores and restaurants that supply and serve cultural foods.',
    ]},
    {type: 'spacer'},
    {type: 'h2', content: 'Down the rabbit hole.'},
    {type: 'p', content: 'Culture is not just about art, food and dance. You know your community’s culture is robust if you see people from across generations, genders and cultures represented throughout the system. Diversity is the key to stability in a human community as well as an ecosystem.'},
    {type: 'p', content: 'Hardly a century ago European settlers, empowered by their governments, took over lands and resources in BC and tried to eliminate the original people and culture of this place. Healing from these extreme acts of oppression does not happen easily or quickly, and will never happen without practical changes in the way our governments, communities and individuals live and work together. The UN Declaration on the Rights of Indigenous Peoples (UNDRIP) is only recently being applied by governments in Canada to show more respect, care, and recognition of the autonomy and sovereignty of Indigenous communities.'},
    {type: 'p', content: 'Global problems like climate change and war are forcing people to abandon their homes and families to seek better opportunities in our region - risking a sense of community belonging in the process. Creating a warmth of welcome for newcomers is crucial for strong and vibrant community culture.'},
    {type: 'p', content: 'Place-making is an international movement to cultivate a sense of belonging and strength in communities. The Greater Victoria Place-making Network and local community organizations are good ways to create the vibe and features you want to see in your neighbourhood.'},
  ],
  act: {
    initiatives: [
      {
        title: 'W̱SÁNEĆ Leadership Council - Settler Resources',
        image: 'https://wsanec.com/wp-content/uploads/2019/04/WLC-logo-colour-500px-min.png',
        link: 'https://wsanec.com/learn-settlers/',
        description: 'Resources for settlers who are interested in allyship. Here you will find information on significant initiatives and ways you can help. The reason territorial acknowledgements are needed and how to prepare one. Reading lists and ways to donate to accelerate progress.'
      },
      {
        title: 'W̱SÁNEĆ Peninsula Environmental Organizations',
        image: require('../png/WSANECEnvironmentalOrgs.png'),
        link: 'https://storymaps.arcgis.com/stories/5239fadd726c462da56ebcbe231c57be',
        description: 'There are many people & organizations across the Saanich Peninsula working towards healthier ecosystems and connected communities across municipal boundaries. Learn about their work in this StoryMap created by UVic Community Mapping students Evan Gerbrecht, Casey Lake, Samantha Denton, Ethan Heckrodt with direction from the Saanich Peninsula Environmental Coalition.'
      },
      {
        title: 'W̱SÁNEĆ Lands Trust Society',
        image: 'https://wsanec.com/wp-content/uploads/2019/04/WLC-logo-colour-500px-min.png',
        link: 'https://wsanec.com/w̱sanec-lands-trust/',
        description: 'The W̱SÁNEĆ Lands Trust Society (WLTS) is a collaboration of several W̱SÁNEĆ Communities, working to partner with more W̱SÁNEĆ organizations.  WLTS provides a place for colonized land to be returned to the W̱SÁNEĆ people. The primary goals are to help future generations of W̱SÁNEĆ access land for cultural purposes, to positively impact the environment through W̱SÁNEĆ stewardship, and to seek land back for collaborative projects such as community housing and economic development initiatives.  The WLTS will achieve these goals by providing a place for land to be held collectively, across the W̱SÁNEĆ Bands, and by making land return and the provision of financial support easier for private donors.'
      },
      {
        title: 'Little Free Libraries',
        image: require('../png/LittleFreeLibraries.png'),
        link: 'https://victoriaplacemaking.ca/little-free-libraries/',
        description: 'Little Free Libraries is a popular DIY community concept, where unique homemade book exchange boxes are made freely available in front of homes and businesses for the enjoyment of neighbours and visitors. Learn more and find a map to over 700 of these libraries in the CRD at the Greater Victoria Placemaking Society.'
      },
      {
        title: 'Native Land Digital',
        image: require('../png/NativeLandDigital.png'),
        link: 'https://native-land.ca/',
        description: 'Native Land Digital strives to create and foster conversations about the history of colonialism, Indigenous ways of knowing, and settler-Indigenous relations, through educational resources such as their map and Territory Acknowledgement Guide. Native Land Digital reaches beyond old ways of talking about Indigenous people and to develop a platform where Indigenous communities can represent themselves and their histories on their own terms.'
      },
      {
        title: 'Truth and Reconciliation Report',
        image: require('../png/TRCC.png'),
        link: 'https://ehprnh2mwo3.exactdn.com/wp-content/uploads/2021/01/Calls_to_Action_English2.pdf',
        description: 'With a mandate to inform Canadians about the legacy of the Indian Residential Schools system, in these reports the The Truth and Reconciliation Commission (TRC) documents the truth of Survivors, their families, communities, and others personally affected by the residential school experience. June 2015, the TRC released its findings along with 94 "calls to action" regarding reconciliation between Canadians and Indigenous Peoples.'
      },
      {
        title: 'STEAM Ecosystem BC',
        image: 'https://steamecosystembc.ca/wp-content/uploads/2021/09/STEAM-Ecosystem-BC.png',
        link: 'https://steamecosystembc.ca/',
        description: 'STEAM Ecosystem BC Association is a non-profit, community-led response to accelerate the growth of STEAM literacy in British Columbia. This growing network brings together organizations from across multiple sectors (industry, education, government, business, non-profits) to ensure all learners have equal access to educational resources and opportunities in our communities.'
      },
      {
        title: 'RUSH Culture Compass Storymap',
        image: require('../png/RUSHCultureCompass.png'),
        link: 'https://storymaps.arcgis.com/stories/ba28ad0ffcbf431482d26e552593c54f',
        description: 'This is an open map that highlights the rich cultural resources of the Victoria region.  It was created by three UVic students and supported by the  RUSH Initiative . The purpose of this StoryMap is to track places of culture and belonging and find places where people are finding cultural connections and exploring" cultural meaning."'
      },
    ],
  }
};
export default Culture;