import { mapPopupContent, pointToIconByProperty } from "../LeafletStyleHelpers";
import { ReactComponent as EcoJustice } from '../svg/Eco-justice organization.svg';
import { ReactComponent as Government } from '../svg/Government office.svg';
import { ReactComponent as NGO } from '../svg/Green enterprise.svg';
import { ReactComponent as School } from '../svg/Green school.svg';
import { ReactComponent as Business } from '../svg/Local business.svg';

const styleMap_FoodSecurity = new Map([
  ["Business", {icon:(<Business />),fill:"#2e67b1",legendText:"Business"}],
  ["NGO", {icon:(<NGO />),fill:"#2e67b1", legendText:"NGO"}],
  ["Student Led", {icon:(<School />),fill:"#ff6432", legendText:"Student Led"}],
  ["Grass Roots", {icon:(<EcoJustice />),fill:"#ff6432", legendText:"Grass Roots"}],
  ["Government", {icon:(<Government />),fill:"#ff6432" , legendText:"Government"}],
]);

const layer = {
  title: "Food Security",
  description: "RUSH Regional Food Security Resource Map. Created by Ege Kaymaz.",
  data: require('../geojson/FoodSecurity.geojson'),
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
        ), {offset: [4,2]});
    }
  },
}

export default layer;