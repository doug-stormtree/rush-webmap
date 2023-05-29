// GeoJSON
// SVG

const Culture = {
  title: "Culture Compass?",
  question: "Culture compass?",
  image: require('./png/CultureCompass.png'),
  description: [
    {type: 'h2', content: "Comparison"},
    {type: 'p', content: 'Free and accessible places and ways to get a sense of community and belonging. Public art, walking zones, public parks, fountains, squares, maker spaces, art galleries, commemorative art markers, community centers, co-working spaces, repurposed abondoned or empty spaces, community gardens, walking tours.'},
    {type: 'h2', content: "Problem"},
    {type: 'p', content: 'The UN Declaration on the Rights of Indigenous Peoples is only recently being applied by governments in Canada to show more respect, care, and recognition of the autonomy and sovereignty of Indigenous communities. Hardly a century ago European settlers empowered by their governments took over lands and resources in BC and tried to eliminate the original people and culture of this place. Healing from these extreme acts of oppression does not happen easily or quickly without practical changes in the way our governments, communities and individuals live and work together.'},
    {type: 'p', content: 'Global problems like climate change and war are forcing people to abandon their homes and families to seek better opportunities but risking a sense of belonging in the process. Creating a culture of reconciliation with Indigenous communities and a warmth of welcome for people fleeing other forms of oppression is crucial.'},
    {type: 'h2', content: "Solution"},
    {type: 'p', content: 'The Truth and Reconciliation Commission of Canada created 94 calls to action to guide meaningful steps towards reconciliation. Respecting days of observance (Red Dress Day - MMIWG2S - May 5, National Indigenous Peoples Day - June 21,  National Truth and Reconciliation Day - September 30), Indigenous leadership, knowledge and stewardship of this land opens a way of understanding how to work with Nature here in a way that is reciprocal and creates abundance.  It is not only about cultural appreciation but honouring rights and bringing integrity to working together.'},
    {type: 'p', content: 'According to Gallup, a true culture of belonging happens when people appreciate what you bring to the community, people seek meaningful relationships and, differences between people are appreciated.¹'},
    {type: 'p', content: 'Place-making is an international movement to cultivate a sense of belonging and strength in communities. Gathering spaces like fountains and skate parks foster community connection when they are a safe and accessible walk, roll, bike or bus ride from home. Gathering spaces like fountains and skate parks foster community connection when they are a safe and accessible walk, roll, bike or bus ride from home. The Government of Canada is funding the creation of gathering spaces.² The Greater Victoria Place-making Network and local community organizations are good ways to create the vibe and features you want to see in your neighbourhood.'},
    {type: 'link', content: '1. Efron, L. 2023. "What drives a culture of belonging?," Gallup.com. Accessed May 25, 2023.', url: 'https://www.gallup.com/workplace/395102/drives-culture-belonging.aspx'},
    {type: 'link', content: '2. Community Foundations of Canada. "Canada Healthy Communities Initiative." Accessed May 27, 2023.', url: 'https://communityfoundations.ca/initiatives/canada-healthy-communities-initiative/'},
  ],
  act: {
    initiatives: [
      {
        title: 'W̱SÁNEĆ Peninsula Environmental Organizations',
        image: require('./png/WSANECEnvironmentalOrgs.png'),
        link: 'https://storymaps.arcgis.com/stories/5239fadd726c462da56ebcbe231c57be',
        description: 'There are many people & organizations across the Saanich Peninsula working towards healthier ecosystems and connected communities across municipal boundaries. Learn about their work in this StoryMap created by UVic Community Mapping students Evan Gerbrecht, Casey Lake, Samantha Denton, Ethan Heckrodt with direction from the Saanich Peninsula Environmental Coalition.'
      },
      {
        title: 'Native Land Digital',
        image: require('./png/NativeLandDigital.png'),
        link: 'https://native-land.ca/',
        description: 'Native Land Digital strives to create and foster conversations about the history of colonialism, Indigenous ways of knowing, and settler-Indigenous relations, through educational resources such as their map and Territory Acknowledgement Guide. They strive to go beyond old ways of talking about Indigenous people and to develop a platform where Indigenous communities can represent themselves and their histories on their own terms.'
      },
      {
        title: 'Little Free Libraries',
        image: require('./png/LittleFreeLibraries.png'),
        link: 'https://victoriaplacemaking.ca/little-free-libraries/',
        description: 'Little Free Libraries is a popular DIY community concept, where unique homemade book exchange boxes are made freely available in front of homes and businesses for the enjoyment of neighbours and visitors. Learn more and find a map to over 700 of these libraries in the CRD at the Greater Victoria Placemaking Society.'
      },
      {
        title: 'Truth and Reconciliation Calls to Action',
        image: require('./png/TRCC.png'),
        link: 'https://ehprnh2mwo3.exactdn.com/wp-content/uploads/2021/01/Calls_to_Action_English2.pdf',
        description: 'In order to redress the legacy of residential schools and advance the process of Canadian reconciliation, the Truth and Reconciliation Commission makes the following calls to action...'
      }
    ],
  },
  mapData: [],
};
export default Culture;