import image from './CultureCompass.png';
import WSANECEnvironmentalOrgs from './WSANECEnvironmentalOrgs.png';
import NativeLandDigital from './NativeLandDigital.png';
import LittleFreeLibraries from './LittleFreeLibraries.png';

const Culture = {
  title: "Culture Compass?",
  question: "Culture compass?",
  image: image,
  description: [
    {type: 'h2', content: "Comparison"},
    {type: 'p', content: 'Connection between people and places. Public art, walking zones, public parks, fountains, squares, maker spaces, art galleries, commemorative art markers, community centers, co-working spaces, repurposed abondoned or empty spaces, community gardens, walking tours.'},
    {type: 'h2', content: "Problem"},
    {type: 'p', content: 'Having something to do, places to go, people to see within walking distance.'},
    {type: 'h2', content: "Solution"},
    {type: 'p', content: 'Place-making is an international movement. Gathering spaces. Community mapping. Moblity, safety, intergenerational.'},
  ],
  act: {
    initiatives: [
      {
        title: 'W̱SÁNEĆ Peninsula Environmental Organizations',
        image: WSANECEnvironmentalOrgs,
        link: 'https://storymaps.arcgis.com/stories/5239fadd726c462da56ebcbe231c57be',
        description: 'There are many people & organizations across the Saanich Peninsula working towards healthier ecosystems and connected communities across municipal boundaries. Learn about their work in this StoryMap created by UVic Community Mapping students Evan Gerbrecht, Casey Lake, Samantha Denton, Ethan Heckrodt with direction from the Saanich Peninsula Environmental Coalition.'
      },
      {
        title: 'Native Land Digital',
        image: NativeLandDigital,
        link: 'https://native-land.ca/',
        description: 'Native Land Digital strives to create and foster conversations about the history of colonialism, Indigenous ways of knowing, and settler-Indigenous relations, through educational resources such as their map and Territory Acknowledgement Guide. They strive to go beyond old ways of talking about Indigenous people and to develop a platform where Indigenous communities can represent themselves and their histories on their own terms.'
      },
      {
        title: 'Little Free Libraries',
        image: LittleFreeLibraries,
        link: 'https://victoriaplacemaking.ca/little-free-libraries/',
        description: 'Little Free Libraries is a popular DIY community concept, where unique homemade book exchange boxes are made freely available in front of homes and businesses for the enjoyment of neighbours and visitors. Learn more and find a map to over 700 of these libraries in the CRD at the Greater Victoria Placemaking Society.'
      },
    ],
  },
  mapData: [],
};
export default Culture;