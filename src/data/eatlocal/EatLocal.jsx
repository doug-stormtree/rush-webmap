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
    {type: 'p', content: '33% of food waste overall entering the Hartland Landfill is avoidable or donatable.¹ The RUSH Regional Food Security Resource Map highlights businesses, NGOs, Student led, grassroots and government initiatives that promote access to fresh and affordable food.  Restaurants and stores with cultural foods are identified. Local food production potential is shown as Agricultural land Reserve (ALR) designated areas, community gardens and orchards.  Farms with box programs (CSA) will  be identified as well as farms growing cultural fruits and vegetables. Seafood harvesting sites with policy guidelines help focus local interest. A growing list of general food processing plants and local and licensed abattoirs are identified for harvesting and preserving. Food production is dependent on the health of our pollinator communities (birds, bees and insects), Compare the ratio of wildlands, parks and gardens to agricultural spaces.'},
    {type: 'link', content: '1. Capital Regional District, 2022. 2022 Solid Waste Stream Composition Study. Victoria, BC.', url: 'https://www.crd.bc.ca/docs/default-source/recycling-waste-pdf/2022-waste-composition-study.pdf?sfvrsn=47af43ce_2'},
    {type: 'h2', content: 'Problem'},
    {type: 'p', content: 'Of the food imported to Canada, fruits and vegetables incur the most food miles and therefore emissions in the amount of 3.3 million metric tonnes of CO2.¹ The BC Alliance for Healthy Living Society found that 1/3 of the BC population said that healthy food was not affordable.² Cultural foods are often hard to access through food banks.'},
    {type: 'p', content: 'Farming is a difficult business with the price of land and access to tools and processing facilities. Only 50% of ALR land is in production³ and only 10% of food consumed in the CRD is produced here⁴. In an emergency our food supply chain can be severely compromised and expensive. With a growing population come development pressures on agricultural land and green spaces.'},
    {type: 'link', content: '1. Kissinger, Meidad, 2012. International trade related food miles - The case of Canada. Food Policy, 37(2).', url: 'https://doi.org/10.1016/j.foodpol.2012.01.002'},
    {type: 'link', content: '2. Public Health Association of BC, 2021. Food Access Across British Columbia. Victoria, BC.', url: 'https://phabc.org/presentation/food-access-across-bc/'},
    {type: 'link', content: '3. Capital Regional District. Regional Foodlands Access Program, Feasibility Study and Business Case. Victoria, BC.', url: 'https://www.crd.bc.ca/docs/default-source/regional-planning-pdf/food-agriculture/crd-foodlandaccess-execsumm.pdf?sfvrsn=8e5bc7ca_4'},
    {type: 'link', content: '4. Cinda Chavich, "A Deep Dive on Vancouver Island Food Security," Douglas Magazine, October 13, 2020.', url: 'https://www.douglasmagazine.com/a-deep-dive-on-vancouver-island-food-security/'},
    {type: 'h2', content: 'Solution'},
    {type: 'p', content: 'Support for local food outlets and farms is crucial to food security in the region.  A local food network has multiple benefits including a healthier economy, more nutritious  food and a reduction in greenhouse gases.  Our efforts to divert food waste from the landfill are beginning to work due to composting services, people and programs that stop waste in the first place. Following the rhthym of Nature and eating the foods that are in season keeps the farms in business all year round and eliminates the greenhouse gases from food miles on imported fruits and vegetables.'},
    {type: 'p', content: 'Making space for pollinator habitat is key for growing healthy fruits and vegetables. The food web and the food system are also deeply connected for better of for worse.   Herbicides and pesticides are often hazardous to more than the targeted species.  Consider the full impacts and alternative strategies in maintaining your garden. Consider growing exotic fruits and vegetables to donate to cultural food programs.'},
    {type: 'p', content: 'We can create the conditions for thriving fish bearing streams and seafood harvesting potential. Urban watersheds are threatened by agricultural runoff and road runoff. Support local initiatives to close the loop on waste, restore natural spaces and install raingardens to help filter contaminants that poison fish, frogs and the food web.  By taking care of watersheds we support the connection of people, land and sea.'},
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