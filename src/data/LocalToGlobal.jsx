const LocalToGlobal = {
  title: "Local to Global?",
  question: "Think cosmically act locally?",
  image: require('./png/NASAEarth.png'),
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
        title: 'One Planet City Challenge',
        noText: true,
        description: 'The One Planet City Challenge is an invitation to every local government on the planet to show the world what climate action looks like in their community and the difference it makes.',
        link: 'https://wwf.panda.org/projects/one_planet_cities/one_planet_city_challenge/',
        image: require('./png/OnePlanetCity.png')
      },
      {
        title: 'One Planet Saanich',
        description: 'As an early adopter, One Planet Saanich is engaging across sectors and generations in the Saanich community through training, meet-ups, the One Planet Student Challenge, apps, events, and resources since 2018.',
        link: 'https://oneplanetbc.com/one-planet-saanich/',
        image: require('./png/OnePlanetBC.png')
      },
      {
        title: 'Project Drawdown',
        noText: true,
        description: 'This ever-evolving collection of strategies for reversing global warming in the next 30 years draws on the world’s top talent in analyzing solutions that are available now, scalable, financially feasible, measurable, and have a net positive impact.',
        link: 'https://www.drawdown.org/solutions',
        image: require('./png/ProjectDrawdown.png')
      },
      {
        title: 'Global Alliance for the Rights of Nature',
        description: 'This network of individuals and organizations is a growing alliance with the goal of legally recognizing, respecting and enforcing that Nature has rights to exist, persist, maintain and regenerate its vital cycles.',
        link: 'https://www.garn.org/rights-of-nature/',
        image: require('./png/GlobalAllianceNatureRights.png')
      },
      {
        title: 'Territories of Life',
        description: 'This 2021 report demonstrates that the healthy areas of our planet are largely because of indigenous and local community effort.  Our success in addressing climate change depends on all governments, businesses, and organizations to honour the rights of Indigenous peoples, their connection to the land, and to learn from their way of life.',
        link: 'https://report.territoriesoflife.org/',
        image: require('./png/TerritoriesOfLife.png')
      },
      {
        title: '1.5-Degree Lifestyles',
        description: 'The goal of the Hot or Cool Institute is to provide policy-makers and communities with the facts that support hard decisions and new lifestyle strategies that match the limits of the planet.',
        link: 'https://hotorcool.org/1-5-degree-lifestyles-report/',
        image: require('./png/1p5DegreeLifestyles.png')
      },
      {
        title: 'West Coast Climate Action Network',
        description: 'This network brings together individuals and organizations in BC with a deep concern about the climate emergenecy and a desire to take collective action.',
        link: 'https://westcoastclimateaction.ca/',
        image: require('./png/WestCoastClimateAction.png')
      },
      {
        title: 'Convention on Conservation of Migratory Species',
        description: 'The Convention on the Conservation of Migratory Species of Wild Animals is an organization dedicated to creating global connectivity of ecosystems and habitats for the migration of wild species around the planet with the deep understanding that this action maintains life support systems and the vital functions of the planet as a living entity that benefits all species.',
        link: 'https://www.cms.int/en/topics/ecological-connectivity',
        image: require('./png/ConventionMigratorySpecies.png')
      },
    ],
  },
  mapData: [],
};
export default LocalToGlobal;