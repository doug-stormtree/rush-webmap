import image from './image.jpg';
import birdlife from './birdlife.jpg';
import * as Pollinators from './Pollinators.json';
import { ReactComponent as IconA } from './5c311b3537407e1f05ac3946.svg';
import { ReactComponent as IconB } from './5c312b3c37407e1f05ac3950.svg';
import { ReactComponent as IconC } from './5c312ca837407e1f05ac3952.svg';
import { ReactComponent as IconD } from './5ca7bfc0ecd8490100cab980.svg';
import { ReactComponent as IconE } from './5ca7bfe1ecd8490100cab9d5.svg';
import { ReactComponent as IconF } from './5ca7bfe8ecd8490100cab9ed.svg';
import { ReactComponent as IconG } from './5ca7bfe8ecd8490100cab9ef.svg';
import { ReactComponent as IconH } from './5ca7bfe9ecd8490100cab9f0.svg';
import { ReactComponent as IconI } from './5ca7bfe9ecd8490100cab9f1.svg';
import { ReactComponent as IconJ } from './5ca7bfe9ecd8490100cab9f2.svg';
import { ReactComponent as IconK } from './5ca7bfeaecd8490100cab9f3.svg';
import { ReactComponent as IconL } from './5ca7bfeaecd8490100cab9f5.svg';
import { ReactComponent as IconM } from './5ca7bfececd8490100cab9fa.svg';
import { ReactComponent as IconN } from './5ca7bff0ecd8490100caba08.svg';
import { ReactComponent as IconO } from './5ca7bff2ecd8490100caba0c.svg';
import { ReactComponent as IconP } from './5ca7bff2ecd8490100caba0d.svg';
import { ReactComponent as IconQ } from './5ca7bff4ecd8490100caba0f.svg';
import { ReactComponent as IconR } from './5ca7bff4ecd8490100caba10.svg';
import { ReactComponent as IconS } from './5ca7bff5ecd8490100caba11.svg';
import { ReactComponent as IconT } from './5ca7bff6ecd8490100caba12.svg';
import { ReactComponent as IconU } from './5ca7bff8ecd8490100caba13.svg';
import { ReactComponent as IconV } from './5ca7bff9ecd8490100caba14.svg';
import { ReactComponent as IconW } from './5ca7bff9ecd8490100caba15.svg';
import { ReactComponent as IconX } from './5ca7bff9ecd8490100caba16.svg';
import { ReactComponent as IconY } from './5ca7bff9ecd8490100caba17.svg';
import { ReactComponent as IconZ } from './5ca7bffaecd8490100caba18.svg';

const Naturehood = {
  title: "Neighbourhood to Naturehood?",
  question: "What is the Nature of this place?",
  image: image,
  learn: {
    text: [
      "Where are the natural areas and gardens that support pollinators in this region?",
      "Learn more or contribute sites to the map at https://new.opengreenmap.org/browse/sites?map=621fe03eba477f0100989741.",
    ],
    initiatives: [],
  },
  act: {
    list: [
      "Lorem.",
    ],
    initiatives: [
      {
        title: "BirdLife International",
        image: birdlife,
        link: "https://www.birdlife.org/what-we-do/",
        description: "BirdLife International's mission is to conserve birds, their habitats, and global biodiversity, working with people toward sustainability in the use of natural resources."
      }
    ],
  },
  mapData: [
    {
      title: "Pollinators",
      patch: '<div style="width: 1em; height: 1em; background: #ae163e;"></div>',
      data: Pollinators,
      format: 'point',
      property: "icon",
      propertyMap: {
        '5c311b3537407e1f05ac3946': { icon: (<IconA />), fill: '#4c9f38', stroke: '#4c9f38', legendText: "SDG 3 - Good Health and Well Being" },
        '5c312b3c37407e1f05ac3950': { icon: (<IconB />), fill: '#3f7e44', stroke: '#3f7e44', legendText: "SDG 13 - Climate Action" },
        '5c312ca837407e1f05ac3952': { icon: (<IconC />), fill: '#56c02b', stroke: '#56c02b', legendText: "SDG 15 - Life on Land" },
        '5ca7bfc0ecd8490100cab980': { icon: (<IconD />), fill: '#2e67b1', stroke: '#2e67b1', legendText: "Organic or Local Food" },
        '5ca7bfe1ecd8490100cab9d5': { icon: (<IconE />), fill: '#ff6432', stroke: '#ff6432', legendText: "Green School" },
        '5ca7bfe8ecd8490100cab9ed': { icon: (<IconF />), fill: '#089848', stroke: '#089848', legendText: "Natural Corridor or Greenway" },
        '5ca7bfe8ecd8490100cab9ef': { icon: (<IconG />), fill: '#089848', stroke: '#089848', legendText: "Shaded Boulevard" },
        '5ca7bfe9ecd8490100cab9f0': { icon: (<IconH />), fill: '#089848', stroke: '#089848', legendText: "Drinking Water Source" },
        '5ca7bfe9ecd8490100cab9f1': { icon: (<IconI />), fill: '#4c9f38', stroke: '#4c9f38', legendText: "Future Redevelopment Space" },
        '5ca7bfe9ecd8490100cab9f2': { icon: (<IconJ />), fill: '#069848', stroke: '#069848', legendText: "Eco Design or Planning Feature" },
        '5ca7bfeaecd8490100cab9f3': { icon: (<IconK />), fill: '#089848', stroke: '#089848', legendText: "Waterfront or Riverside Park" },
        '5ca7bfeaecd8490100cab9f5': { icon: (<IconL />), fill: '#089848', stroke: '#089848', legendText: "Eco Landscaping" },
        '5ca7bfececd8490100cab9fa': { icon: (<IconM />), fill: '#089848', stroke: '#089848', legendText: "Park or Recreation Area" },
        '5ca7bff0ecd8490100caba08': { icon: (<IconN />), fill: '#089848', stroke: '#089848', legendText: "Insect Watching Site" },
        '5ca7bff2ecd8490100caba0c': { icon: (<IconO />), fill: '#089848', stroke: '#089848', legendText: "Bird and Wildlife Watching" },
        '5ca7bff2ecd8490100caba0d': { icon: (<IconP />), fill: '#089848', stroke: '#089848', legendText: "Farm Animals" },
        '5ca7bff4ecd8490100caba0f': { icon: (<IconQ />), fill: '#089848', stroke: '#089848', legendText: "Significant Habitat" },
        '5ca7bff4ecd8490100caba10': { icon: (<IconR />), fill: '#089848', stroke: '#089848', legendText: "Spring Blossoms" },
        '5ca7bff5ecd8490100caba11': { icon: (<IconS />), fill: '#089848', stroke: '#089848', legendText: "Native Forest or Plants" },
        '5ca7bff6ecd8490100caba12': { icon: (<IconT />), fill: '#089848', stroke: '#089848', legendText: "Community Garden" },
        '5ca7bff8ecd8490100caba13': { icon: (<IconU />), fill: '#089848', stroke: '#089848', legendText: "Food Gathering Site" },
        '5ca7bff9ecd8490100caba14': { icon: (<IconV />), fill: '#089848', stroke: '#089848', legendText: "Special Tree" },
        '5ca7bff9ecd8490100caba15': { icon: (<IconW />), fill: '#089848', stroke: '#089848', legendText: "Rapidly Renewable Plants" },
        '5ca7bff9ecd8490100caba16': { icon: (<IconX />), fill: '#089848', stroke: '#089848', legendText: "Autumn Leaves" },
        '5ca7bff9ecd8490100caba17': { icon: (<IconY />), fill: '#089848', stroke: '#089848', legendText: "Public Forest or Natural Area" },
        '5ca7bffaecd8490100caba18': { icon: (<IconZ />), fill: '#089848', stroke: '#089848', legendText: "Garden" },
      },
    },
  ],
};
export default Naturehood;