import { point } from 'leaflet';
import { pointToIcon, mapPopupContent, ogmIconLink } from './LeafletStyleHelpers';
// GeoJSON
import Pollinators from './geojson/Pollinators.geojson';
import StewardshipGroups from './geojson/StewardshipGroups.geojson';
// SVG
// PNG
import image from './png/Naturehood.png';
import birdlife from './png/Birdlife.png';
import CRDEducational from './png/CRDEducational.png';

const styleMap_Pollinators = new Map([
  ['5c311b3537407e1f05ac3946', { src: ogmIconLink('5c311b3537407e1f05ac3946'), legendText: "SDG 3 - Good Health and Well Being" }],
  ['5c312b3c37407e1f05ac3950', { src: ogmIconLink('5c312b3c37407e1f05ac3950'), legendText: "SDG 13 - Climate Action" }],
  ['5c312ca837407e1f05ac3952', { src: ogmIconLink('5c312ca837407e1f05ac3952'), legendText: "SDG 15 - Life on Land" }],
  ['5ca7bfc0ecd8490100cab980', { src: ogmIconLink('5ca7bfc0ecd8490100cab980'), legendText: "Organic or Local Food" }],
  ['5ca7bfe1ecd8490100cab9d5', { src: ogmIconLink('5ca7bfe1ecd8490100cab9d5'), legendText: "Green School" }],
  ['5ca7bfe8ecd8490100cab9ed', { src: ogmIconLink('5ca7bfe8ecd8490100cab9ed'), legendText: "Natural Corridor or Greenway" }],
  ['5ca7bfe8ecd8490100cab9ef', { src: ogmIconLink('5ca7bfe8ecd8490100cab9ef'), legendText: "Shaded Boulevard" }],
  ['5ca7bfe9ecd8490100cab9f0', { src: ogmIconLink('5ca7bfe9ecd8490100cab9f0'), legendText: "Drinking Water Source" }],
  ['5ca7bfe9ecd8490100cab9f1', { src: ogmIconLink('5ca7bfe9ecd8490100cab9f1'), legendText: "Future Redevelopment Space" }],
  ['5ca7bfe9ecd8490100cab9f2', { src: ogmIconLink('5ca7bfe9ecd8490100cab9f2'), legendText: "Eco Design or Planning Feature" }],
  ['5ca7bfeaecd8490100cab9f3', { src: ogmIconLink('5ca7bfeaecd8490100cab9f3'), legendText: "Waterfront or Riverside Park" }],
  ['5ca7bfeaecd8490100cab9f5', { src: ogmIconLink('5ca7bfeaecd8490100cab9f5'), legendText: "Eco Landscaping" }],
  ['5ca7bfececd8490100cab9fa', { src: ogmIconLink('5ca7bfececd8490100cab9fa'), legendText: "Park or Recreation Area" }],
  ['5ca7bff0ecd8490100caba08', { src: ogmIconLink('5ca7bff0ecd8490100caba08'), legendText: "Insect Watching Site" }],
  ['5ca7bff2ecd8490100caba0c', { src: ogmIconLink('5ca7bff2ecd8490100caba0c'), legendText: "Bird and Wildlife Watching" }],
  ['5ca7bff2ecd8490100caba0d', { src: ogmIconLink('5ca7bff2ecd8490100caba0d'), legendText: "Farm Animals" }],
  ['5ca7bff4ecd8490100caba0f', { src: ogmIconLink('5ca7bff4ecd8490100caba0f'), legendText: "Significant Habitat" }],
  ['5ca7bff4ecd8490100caba10', { src: ogmIconLink('5ca7bff4ecd8490100caba10'), legendText: "Spring Blossoms" }],
  ['5ca7bff5ecd8490100caba11', { src: ogmIconLink('5ca7bff5ecd8490100caba11'), legendText: "Native Forest or Plants" }],
  ['5ca7bff6ecd8490100caba12', { src: ogmIconLink('5ca7bff6ecd8490100caba12'), legendText: "Community Garden" }],
  ['5ca7bff8ecd8490100caba13', { src: ogmIconLink('5ca7bff8ecd8490100caba13'), legendText: "Food Gathering Site" }],
  ['5ca7bff9ecd8490100caba14', { src: ogmIconLink('5ca7bff9ecd8490100caba14'), legendText: "Special Tree" }],
  ['5ca7bff9ecd8490100caba15', { src: ogmIconLink('5ca7bff9ecd8490100caba15'), legendText: "Rapidly Renewable Plants" }],
  ['5ca7bff9ecd8490100caba16', { src: ogmIconLink('5ca7bff9ecd8490100caba16'), legendText: "Autumn Leaves" }],
  ['5ca7bff9ecd8490100caba17', { src: ogmIconLink('5ca7bff9ecd8490100caba17'), legendText: "Public Forest or Natural Area" }],
  ['5ca7bffaecd8490100caba18', { src: ogmIconLink('5ca7bffaecd8490100caba18'), legendText: "Garden" }],
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
    {type: 'p', content: 'We are Nature and a healthy ecosystem means a better health outlook for everyone. Transforming the concrete jungle into a smooth running urban ecosystem means good food, clean water, fresh air, a good soundscape and a sense of wellbeing for everyone. Plant and plot your pollinator garden. Support community groups in their work to extend the reach of ecosystems and heal watersheds.  Let Nature know you care and you’ll feel the love right back atcha.'},
    {type: 'link', content: '1. Erin Whittingham, Vilbert Vabi, Sharmeena Lalloo, and Saleena Hak, 2022. Canada’s Urban Forests: Bringing the Canopy to All. Nature Canada.', url: 'https://naturecanada.ca/wp-content/uploads/2022/09/Nature-Canada-Report-Tree-Equity.pdf'},
    {type: 'link', content: '2. Jake Romphf. "Island Health’s new top medical officer eyes toxic drug crisis, health inequities," Vancouver Island Free Daily, September 29, 2022.', url: 'https://www.vancouverislandfreedaily.com/news/island-healths-new-top-medical-officer-eyes-toxic-drug-crisis-health-inequities/'}
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
        pointToLayer: (f,l) => pointToIcon(l, {icon: 
        f.properties.icon ? (
          <img
            width='100%'
            height='100%'
            src={ogmIconLink(f.properties.icon)}
            alt={styleMap_Pollinators.get(f.properties.icon).legendText}
          />
        ) : null }),
        onEachFeature: (f,l) => {
          l.bindPopup(mapPopupContent(
              f.properties.name,
              f.properties.description[0]
            ), {offset: point(0,-6)});
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