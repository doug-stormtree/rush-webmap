import { point } from 'leaflet';
import { pointToIconByProperty, mapPopupContent } from '../LeafletStyleHelpers';
import image from './EatLocal.png';
import IyeCreative from './IyeCreative.png';
import OurFoodFuture from './OurFoodFuture.png';
import FoodSecurity from './FoodSecurity.geojson';
import { ReactComponent as EcoJustice } from './Eco-justice organization.svg';
import { ReactComponent as Government } from './Government office.svg';
import { ReactComponent as NGO } from './Green enterprise.svg';
import { ReactComponent as School } from './Green school.svg';
import { ReactComponent as Business } from './Local business.svg';

const styleMap_FoodSecurity = new Map([
  ["Business", {icon:(<Business />),fill:"#2e67b1",legendText:"Business"}],
  ["NGO", {icon:(<NGO />),fill:"#2e67b1", legendText:"NGO"}],
  ["Student Led", {icon:(<School />),fill:"#ff6432", legendText:"Student Led"}],
  ["Grass Roots", {icon:(<EcoJustice />),fill:"#ff6432", legendText:"Grass Roots"}],
  ["Government", {icon:(<Government />),fill:"#ff6432" , legendText:"Government"}],
]);

const EatLocal = {
  title: "Eat Local?",
  question: "Farm to Table to Fertilizer. Delicious at a short distance?",
  image: image,
  description: [
    {type: 'h2', content: 'Comparison'},
    {type: 'p', content: 'ALR lands in production. Watershed health. Green space. Processing plants. Local foods initiatives/markets.'},
    {type: 'h2', content: 'Problem'},
    {type: 'p', content: 'Three days food supply on the island in an emergency.  Watersheds overwhelmed by agricultural runoff and road runoff.  Biodiveristy is key to food security. cultural harvesting interrupted by watershed health and improper application of conservation policy. Access to fresh cultural foods.'},
    {type: 'h2', content: 'Solution'},
    {type: 'p', content: 'Support local foods.'},
  ],
  act: {
    initiatives: [
      {
        title: 'Iyé Creative',
        image: IyeCreative,
        link: 'https://www.iyeherstories.com/',
        description: 'Iyé Creative is a food justice and grassroots collective nurturing reciprocal relations and mutual aid systems. Their work involves supporting the healthy and culturally informed food needs of disenfranchised communities, raising awareness of food accessibility, and uplifting racialized voices in food production and distribution.'
      },
      {
        title: "Our Food Future",
        image: OurFoodFuture,
        link: "https://biomimicryfrontiers.com/our-food-future",
        description: "Biomimicry reminds us that there is no waste out in nature, and to truly imitate nature, we must eliminate waste. Biomimicry Frontiers was brought into the Our Food Future initiative to frame the project from a biomimetic lens and to use the opportunity to build circular businesses, while simultaneously providing advisory services."
      },
    ],
  },
  mapData: [
    {
      title: "Food Security",
      description: "RUSH Regional Food Security Resource Map. Created by Ege Kaymaz.",
      data: FoodSecurity,
      shape: 'point',
      symbology: 'classified',
      property: "Type",
      styleMap: styleMap_FoodSecurity,
      options: {
        pointToLayer: (f,l) => pointToIconByProperty(
          f,
          l,
          "Type",
          styleMap_FoodSecurity
        ),
        onEachFeature: (f,l) => {
          l.bindPopup(mapPopupContent(
            f.properties.Name,
            f.properties.description,
            ), {offset: point(4,2)});
        }
      }
    },
  ],
};
export default EatLocal;