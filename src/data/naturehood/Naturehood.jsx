import { point } from 'leaflet';
import { pointToIconByProperty, mapPopupContent } from '../LeafletStyleHelpers';
import image from './Naturehood.png';
import birdlife from './Birdlife.png';
import CRDEducational from './CRDEducational.png';
import Pollinators from './Pollinators.geojson';
import StewardshipGroups from './StewardshipGroups.geojson';
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

const styleMap_Pollinators = new Map([
  ['5c311b3537407e1f05ac3946', { icon: (<IconA />), fill: '#4c9f38', stroke: '#4c9f38', legendText: "SDG 3 - Good Health and Well Being" }],
  ['5c312b3c37407e1f05ac3950', { icon: (<IconB />), fill: '#3f7e44', stroke: '#3f7e44', legendText: "SDG 13 - Climate Action" }],
  ['5c312ca837407e1f05ac3952', { icon: (<IconC />), fill: '#56c02b', stroke: '#56c02b', legendText: "SDG 15 - Life on Land" }],
  ['5ca7bfc0ecd8490100cab980', { icon: (<IconD />), fill: '#2e67b1', stroke: '#2e67b1', legendText: "Organic or Local Food" }],
  ['5ca7bfe1ecd8490100cab9d5', { icon: (<IconE />), fill: '#ff6432', stroke: '#ff6432', legendText: "Green School" }],
  ['5ca7bfe8ecd8490100cab9ed', { icon: (<IconF />), fill: '#089848', stroke: '#089848', legendText: "Natural Corridor or Greenway" }],
  ['5ca7bfe8ecd8490100cab9ef', { icon: (<IconG />), fill: '#089848', stroke: '#089848', legendText: "Shaded Boulevard" }],
  ['5ca7bfe9ecd8490100cab9f0', { icon: (<IconH />), fill: '#089848', stroke: '#089848', legendText: "Drinking Water Source" }],
  ['5ca7bfe9ecd8490100cab9f1', { icon: (<IconI />), fill: '#4c9f38', stroke: '#4c9f38', legendText: "Future Redevelopment Space" }],
  ['5ca7bfe9ecd8490100cab9f2', { icon: (<IconJ />), fill: '#069848', stroke: '#069848', legendText: "Eco Design or Planning Feature" }],
  ['5ca7bfeaecd8490100cab9f3', { icon: (<IconK />), fill: '#089848', stroke: '#089848', legendText: "Waterfront or Riverside Park" }],
  ['5ca7bfeaecd8490100cab9f5', { icon: (<IconL />), fill: '#089848', stroke: '#089848', legendText: "Eco Landscaping" }],
  ['5ca7bfececd8490100cab9fa', { icon: (<IconM />), fill: '#089848', stroke: '#089848', legendText: "Park or Recreation Area" }],
  ['5ca7bff0ecd8490100caba08', { icon: (<IconN />), fill: '#089848', stroke: '#089848', legendText: "Insect Watching Site" }],
  ['5ca7bff2ecd8490100caba0c', { icon: (<IconO />), fill: '#089848', stroke: '#089848', legendText: "Bird and Wildlife Watching" }],
  ['5ca7bff2ecd8490100caba0d', { icon: (<IconP />), fill: '#089848', stroke: '#089848', legendText: "Farm Animals" }],
  ['5ca7bff4ecd8490100caba0f', { icon: (<IconQ />), fill: '#089848', stroke: '#089848', legendText: "Significant Habitat" }],
  ['5ca7bff4ecd8490100caba10', { icon: (<IconR />), fill: '#089848', stroke: '#089848', legendText: "Spring Blossoms" }],
  ['5ca7bff5ecd8490100caba11', { icon: (<IconS />), fill: '#089848', stroke: '#089848', legendText: "Native Forest or Plants" }],
  ['5ca7bff6ecd8490100caba12', { icon: (<IconT />), fill: '#089848', stroke: '#089848', legendText: "Community Garden" }],
  ['5ca7bff8ecd8490100caba13', { icon: (<IconU />), fill: '#089848', stroke: '#089848', legendText: "Food Gathering Site" }],
  ['5ca7bff9ecd8490100caba14', { icon: (<IconV />), fill: '#089848', stroke: '#089848', legendText: "Special Tree" }],
  ['5ca7bff9ecd8490100caba15', { icon: (<IconW />), fill: '#089848', stroke: '#089848', legendText: "Rapidly Renewable Plants" }],
  ['5ca7bff9ecd8490100caba16', { icon: (<IconX />), fill: '#089848', stroke: '#089848', legendText: "Autumn Leaves" }],
  ['5ca7bff9ecd8490100caba17', { icon: (<IconY />), fill: '#089848', stroke: '#089848', legendText: "Public Forest or Natural Area" }],
  ['5ca7bffaecd8490100caba18', { icon: (<IconZ />), fill: '#089848', stroke: '#089848', legendText: "Garden" }],
]);

const Naturehood = {
  title: "Neighbourhood to Naturehood?",
  question: "What is the Nature of this place?",
  image: image,
  description: [
    {type: 'h2', content: 'Comparison'},
    {type: 'p', content: 'The blue polygons mark areas where communities are actively restoring watersheds and natural spaces to bring back the smooth functioning of the ecosystem. Click on the play buttons to learn more about the work being done. The icons represent natural features and gardens that are good for pollinators like bees, butterflies, birds and snails. These areas are being plotted to track how well pollinator habitats are connected to make sure Nature has enough space and range for a healthy populations and food sources.'},
    {type: 'h2', content: 'Problem'},
    {type: 'p', content: 'Pollinators are essential to our food production and pollination relies on the health of our wild ecosystems to happen. Many of our pollinators are facing extinction around the globe due to development and fragmentation of habitat, the absence of the food they need, pesticide use (neonicotinoids), invasive species, general pollution and climate change.  Watersheds have been altered by human settlement affecting the key corridors that naturally are home to these creatures.  The "concrete jungle" is more likely to create poverty and impact the health of the area. A 2022 Nature Canada Report revealed that the percentage of tree canopy is much lower in low-income and racialized neighbourhoods.¹ In October 2022, Vancouver Island’s chief medical officer, Dr. Reka Gustafson says she wants to tackle mental health and track how climate change is making these inequities more pronounced.²'},
    {type: 'h2', content: 'Solution'},
    {type: 'p', content: 'We are Nature and a healthy ecosystem means a better health outlook for everyone. Transforming the concrete jungle into a smooth running urban ecosystem means good food, clean water, fresh air, a good soundscape and a sense of wellbeing for everyone.  Research shows that being in Nature and the sounds of Nature create wellbeing but there is also a warning that the less we are around Nature, the less we care and become less likely to protect our life-support systems.'},
    {type: 'p', content: 'Plant and plot your pollinator garden. Support community groups in their work to extend the reach of ecosystems and heal watersheds. Let Nature know you care and you’ll feel the love right back atcha.'},
  ],
  act: {
    initiatives: [
      {
        title: "BirdLife International",
        image: birdlife,
        link: "https://www.birdlife.org/what-we-do/",
        description: "BirdLife International's mission is to conserve birds, their habitats, and global biodiversity, working with people toward sustainability in the use of natural resources."
      },
      {
        title: 'CRD Educational Resources',
        image: CRDEducational,
        link: 'https://www.crd.bc.ca/education/school-programs/education-resources#tab-5',
        description: 'The Capital Regional District has published a number of identification charts and fact sheets about the living things that can be found in our regional parks. Follow the link to learn about local mosses, seaweeds, lichens, shoreline birds and more!'
      }
    ],
  },
  mapData: [
    {
      title: "G.V.S.P. Pollinators Map",
      description: [
        {type:'p', content: 'Greater Victoria / Saanich Peninsula Pollinator Map. Where are the natural areas and gardens that support pollinators in this region?'},
        {type:'link', content: 'Learn more and contribute to this project at OpenGreenMap.', url: 'https://new.opengreenmap.org/browse/sites?map=621fe03eba477f0100989741'}
      ],
      data: Pollinators,
      shape: 'point',
      symbology: 'classified',
      styleMap: styleMap_Pollinators,
      options: {
        pointToLayer: (f,l) => pointToIconByProperty(
          f,
          l,
          "icon",
          styleMap_Pollinators
        ),
        onEachFeature: (f,l) => {
          l.bindPopup(mapPopupContent(
              f.properties.name,
              f.properties.description[0]
            ), {offset: point(4,2)});
        }
      }
    },
    {
      title: 'Stewardship Groups',
      description: [
        {type: 'p', content: 'Stewardship groups are volunteer-based community organizations that actively support the environmental health and wellbeing of a specific region, park, or watershed through monitoring programs, invasive species management, public outreach, and governmental advocacy.'},
        {type: 'p', content: 'In addition to those shown on the map, the following groups work throughout the Capital Regional District:'},
        {type: 'link', content: 'Greater Victoria Green Team', url: 'https://greenteamscanada.ca/our-green-teams/greater-victoria-green-team/'},
        {type: 'link', content: 'Habitat Aquisition Trust', url: 'https://hat.bc.ca/volunteer'}
      ],
      data: StewardshipGroups,
      shape: 'polygon',
      symbology: 'single',
      options: {
        style: {
          stroke: true,
          color: '#477EFF',
          fill: true,
          fillOpacity: 0.7,
          fillColor: 'rgba(0, 120, 160, 255)',
          interactive: true,
        },
        onEachFeature: (f,l) => {
          l.bindPopup(
            mapPopupContent(
              f.properties.Group,
              `The ${f.properties['Group']} advocates for preserving the ecosystems of the ${f.properties['FocusLoc']} area. Learn more and support their work at:`,
              f.properties['URL']),
            {offset: point(0,8)});
        }
      }
    },
  ],
};
export default Naturehood;