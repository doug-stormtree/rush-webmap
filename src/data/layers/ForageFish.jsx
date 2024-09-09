import { IconContext } from "react-icons";
import { mapPopupContent, pointToIconByProperty } from "../LeafletStyleHelpers";
import { FaFish } from 'react-icons/fa';

const styleMap = new Map([
  ["Surf Smelt", {icon:(<IconContext.Provider value={{ color: "#2689d0" }}><FaFish /></IconContext.Provider>),fill:"#2689d0",legendText:"Surf Smelt"}],
  ["Pacific Sand Lance", {icon:(<IconContext.Provider value={{ color: "#c80317" }}><FaFish /></IconContext.Provider>),fill:"#c80317", legendText:"Pacific Sand Lance"}],
  ["Both", {icon:(<IconContext.Provider value={{ color: "#8843ef" }}><FaFish /></IconContext.Provider>),fill:"#8843ef", legendText:"Both"}],
])

const layer = {
  title: "Forage Fish",
  description: [
    {type: 'p', content: 'Forage fish are small schooling fish that play an integral role in marine food webs, directly and indirectly feeding a diverse selection of birds, fish, and whales. Their role as food, or ‘forage’ for other animals, underpins the Salish Sea’s health, providing a link between lower and higher trophic levels.'},
    {type: 'p', content: 'This data layer shows the sample positives of Surf Smelt and Pacific Sand Lance forage fish that spawn in the upper intertidal zone of sand/gravel beaches, collected by the Peninsula Streams Society. By identifying spawning beaches, we can help protect and further understand these important species. You can learn more about the importance of forage fish and what you can do to help by visiting the Peninsula Streams Society website.'},
    {type: 'link', content: 'Peninsula Streams Society', url: 'https://peninsulastreams.ca/our-work/beach-program/'}
  ],
  data: require('../geojson/ForageFish.geojson'),
  shape: 'point',
  symbology: 'classified',
  property: "fish_type",
  styleMap: styleMap,
  options: {
    pointToLayer: (f,l) => pointToIconByProperty(
      f,
      l,
      "fish_type",
      styleMap
    ),
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
        'Forage Fish',
        f.properties.fish_type + ' identified at ' + f.properties.beach_name,
        ), {offset: [0,-6]});
    }
  },
}

export default layer;