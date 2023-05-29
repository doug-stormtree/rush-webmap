// GeoJSON
// SVG
// PNG

const LocalToGlobal = {
  title: "Local to Global?",
  question: "Think cosmically act locally?",
  image: require('./png/LocalToGlobal.png'),
  description: [
    {type: 'h2', content: 'Comparison'},
    {type: 'p', content: 'Energy consumption and GHGs per province and sector. Per capita emissions around the world. Connectivity and gaps of global ecosystems. Migration routes?'},
    {type: 'h2', content: 'Problem'},
    {type: 'p', content: 'Southern Vancouver Island is a traditional wintering ground for the lək̓ʷəŋən (Lekwungen) and W̱SÁNEĆ peoples because it was bountiful and protected.  Vancouver Island is still considered lush by comparison to other parts of the world but it seems that this sense of abundance can create the impression for some that Nature can handle logging the old growth trees or installing salmon farms are appropriate interventions. In fact, development pressures from population increases this Coastal Douglas Fir ecosystem is considered critically endangered and has suffered greatly from recent climate change events and resource extraction/interventions.¹'},
    {type: 'h2', content: 'Solution'},
    {type: 'p', content: 'Conserving and protecting the natural environment here should be a key focus in contributing to a more stable climate and playing our part as global citizens. Temperate forests are a net carbon sink, typically containing roughly 100 metric tons of carbon per hectare.²'},
    {type: 'p', content: 'Restoring our fish bearing streams will support salmon populations which are a keystone species for the west coast of North America meaning that the food web relies on healthy populations. Our participation and support of the food web is mission critical.'},
    {type: 'p', content: 'BC is also a hotbed of innovation with programs and businesses to facilitate all forms of climate action. Rather than being complacent in the quality of life Nature offers up everyday, we have the opportunity to be a node of health and resilience that the world’s human built and natural systems can connect to and rely on.'},
    {type: 'link', content: '1. Lewis Akenji et al., 2021. 1.5-Degree Lifestyles: Towards A Fair Consumption Space for All. Hot or Cool Institute, Berlin.', url: 'https://hotorcool.org/1-5-degree-lifestyles-report/'},
    {type: 'link', content: '2. Rattan Lal and Klaus Lorenz, 2012. Carbon sequestration in temperate forests. In Recarbonization of the Biosphere, pp. 187-201. Springer Netherlands.', url: 'https://doi.org/10.1007/978-94-007-4159-1_9'}
  ],
  act: {
    initiatives: [
      {
        title: 'One Planet Saanich',
        description: 'One Planet Saanich engages schools, businesses and community groups to create their own One Planet Action Plans. The cohort includes schools, a church, a rowing club, local businesses, developers, community networks and others listed below. The District of Saanich is part of the Greater Victoria Regional District and is an active partner in this initiative. One Planet Saanich was initiated in 2018 as part of a global project that brought together 4 communities (Canada, Denmark, South Africa, UK).',
        link: 'https://oneplanetbc.com/one-planet-saanich/',
        image: require('./png/OnePlanetBC.png')
      },
      {
        title: 'Global Alliance for the Rights of Nature',
        description: '"It is the recognition that our ecosystems – including trees, oceans, animals, mountains – have rights just as human beings have rights. Rights of Nature is about balancing what is good for human beings against what is good for other species, what is good for the planet as a world. It is the holistic recognition that all life, all ecosystems on our planet are deeply intertwined. Rather than treating nature as property under the law, rights of nature acknowledges that nature in all its life forms has the right to exist, persist, maintain and regenerate its vital cycles."',
        link: 'https://www.garn.org/rights-of-nature/',
        image: require('./png/GlobalAllianceNatureRights.png')
      },
      {
        title: 'West Coast Climate Action Network',
        description: '"The West Coast Climate Action Network strives to unite the multitude of climate change organizations, groups, and initiatives in British Columbia whose members share a deep concern about the global climate emergency and who wish to see more urgent, rapid action. We work to serve, support, amplify and promote their work, and to take whatever further actions we deem necessary to help end the global climate emergency."',
        link: 'https://westcoastclimateaction.ca/',
        image: require('./png/WestCoastClimateAction.png')
      }
    ],
  },
  mapData: [],
};
export default LocalToGlobal;