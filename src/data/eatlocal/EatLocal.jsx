import image from './image.jpg';
import * as FoodSecurity from './FoodSecurity.json';
import { ReactComponent as EcoJustice } from './Eco-justice organization.svg';
import { ReactComponent as Government } from './Government office.svg';
import { ReactComponent as NGO } from './Green enterprise.svg';
import { ReactComponent as School } from './Green school.svg';
import { ReactComponent as Business } from './Local business.svg';

const EatLocal = {
  title: "Eat Local?",
  question: "Farm to Table to Fertilizer. Delicious at a short distance?",
  image: image,
  learn: {
    text: [
      "Lorem.",
    ],
    initiatives: [
      {
        title: "Our Food Future",
        image: undefined,
        link: "https://biomimicryfrontiers.com/our-food-future",
      },
    ],
  },
  act: {
    list: [
      "Lorem.",
    ],
    initiatives: [],
  },
  mapData: [
    {
      title: "Food Security",
      description: "RUSH Regional Food Security Resource Map. Created by Ege Kaymaz.",
      data: FoodSecurity,
      format: 'point',
      property: "Type",
      propertyMap: {
        "Business": {icon:(<Business />),fill:"#2e67b1",legendText:"Business"},
        "NGO": {icon:(<NGO />),fill:"#2e67b1", legendText:"NGO"},
        "Student Led": {icon:(<School />),fill:"#ff6432", legendText:"Student Led"},
        "Grass Roots": {icon:(<EcoJustice />),fill:"#ff6432", legendText:"Grass Roots"},
        "Government": {icon:(<Government />),fill:"#ff6432" , legendText:"Government"},
      }
    },
  ],
};
export default EatLocal;