import { point } from 'leaflet';
import { getStyleMapProperty, pointToIcon, mapPopupContent, ogmIconLink } from './LeafletStyleHelpers';
// GeoJSON
import Pollinators from './geojson/Pollinators.geojson';
import StewardshipGroups from './geojson/StewardshipGroups.geojson';
// SVG

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

const styleMap_SensitiveEcosystems = new Map([
  ['Cliff', { fillColor: 'rgb(156,156,156)' }],
  ['Coastal Bluff', { fillColor: 'rgb(209,165,255)' }],
  ['Estuarine', { fillColor: 'rgb(214,133,137)' }],
  ['Fresh Water', { fillColor: 'rgb(101,119,205)' }],
  ['Fringe Forest', { fillColor: 'rgb(0,115,76)' }],
  ['Herbaceous', { fillColor: 'rgb(245,202,123)' }],
  ['Terrestrial Herbaceous', { fillColor: 'rgb(255,201,28)', legendText: 'Herbaceous (Terrestrial)' }],
  ['Intertidal', { fillColor: 'rgb(168,112,0)' }],
  ['Mature Forest', { fillColor: 'rgb(255,236,175)' }],
  ['Older Forest', { fillColor: 'rgb(156,54,13)' }],
  ['Older Second Growth', { fillColor: 'rgb(235,94,42)' }],
  ['Riparian', { fillColor: 'rgb(156,207,0)' }],
  ['Seasonally Flooded Agricultural', { fillColor: 'rgb(191,255,189)' }],
  ['Sparsely Vegetated', { fillColor: 'rgb(158,187,215)' }],
  ['Wetland', { fillColor: 'rgb(0,156,92)' }],
  ['Woodland', { fillColor: 'rgb(255,158,212)' }],
  ['Non-Sensitive', { fillColor: 'rgb(255,255,189)' }],
]);

const Naturehood = {
  title: "Neighbourhood to Naturehood?",
  question: "What is the Nature of this place?",
  image: require('./png/Naturehood.png'),
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
        title: 'Habitat Aquisition Trust',
        description: 'Habitat Acquisition Trust (HAT) runs several Species at Risk Programs: "On Southern Vancouver Island, the increase in urbanization and loss of habitat has lead to many species at risk in our region. HAT works to protect and improve habitat for many of these species, and though we wish we could help them all we only run programs from a few of them."',
        link: 'https://hat.bc.ca/wildlife',
        image: require('./png/HAT.png')
      },
      {
        title: 'W̱SÁNEĆ Peninsula Environmental Organizations',
        description: 'There are many people & organizations across the Saanich Peninsula working towards healthier ecosystems and connected communities across municipal boundaries. Learn about their work in this StoryMap created by UVic Community Mapping students Evan Gerbrecht, Casey Lake, Samantha Denton, Ethan Heckrodt with direction from the Saanich Peninsula Environmental Coalition.',
        link: 'https://storymaps.arcgis.com/stories/5239fadd726c462da56ebcbe231c57be',
        image: require('./png/WSANECStoryMap.png')
      },
      {
        title: 'Quadra Cedar Hill Community Association',
        description: 'The mission of QCHCA is to be an advocate and trusted resource for sustainability, vibrancy and engagement in our community.',
        link: 'https://qchca.org/',
        image: require('./png/QuadraCedarHill.png')
      },
      {
        title: 'Gorge Tillicum Community Association',
        link: 'https://www.gorgetillicum.ca/',
        description: '"The Gorge Tillicum Community Association is a volunteer-based non-profit organization that seeks to further the collective interests of the Gorge Tillicum neighbourhood.  The GTCA is recognized by Saanich as a significant community voice on local issues."',
        image: require('./png/GorgeTillicum.png')
      },
      {
        title: 'Connectivity on the Saanich Peninsula',
        link: 'https://storymaps.arcgis.com/stories/a68767b15837450aaf8a0d7e2094f345',
        description: 'The purpose of this StoryMap is to highlight the historical connectivity between culture, community, and ecology on the Saanich Peninsula, and look for ways to improve connectivity in future collaboration with the Saanich Peninsula Environmental Coalition (SPEC).  This map was created by Ella Bethune, Darryl Seah, Ben DesRosiers, Ardis Mellor-Laing, as part of their work with the University of Victoria, Saanich Peninsula Environmental Coalition, and the Engage with Nature-based Solutions Initiative.',
        image: require('./png/Connectivity.png')
      },
      {
        title: 'G. Victoria NatureHood: Nature in the City Map',
        link: 'https://experience.arcgis.com/experience/b360590fbbb44966952c0cfe240d65c4',
        description: '"This map is a guide to help connect you with the amazing places and nearby nature found in Greater Victoria. Learn about the Greater Victoria NatureHood initiative, ecosystems and biodiversity, waterways and watersheds, riparian zones, and some of the species of plants and animals found in the region."',
        image: require('./png/NatureInTheCity.png')
      },
      {
        title: 'Greater Victoria Greenbelt Society',
        link: 'https://www.marylakeconnections.ca/greater-victoria-greenbelt-society/',
        description: '“Mission: To foster respect for nature and promote the protection of natural areas for the benefit of all future generations through environmental conservation, restoration, education, and cultural activities in alliance with local First Nations" The Greater Victoria Greenbelt Society’s current project is the W̱MÍYEŦEN Nature Sanctuary (formerly Mary Lake).',
        image: require('./png/Placeholder.png')
      },
      {
        title: 'Friends of Maltby Lake Watershed Society',
        link: 'https://maltbylake.com/',
        description: 'Maltby Lake is at the headwaters of the Tod Creek Watershed. The 21-acre near pristine water body is surrounded by 172 acres of relatively undisturbed forest and wetland. The property is an example of unspoiled lake and land ecosystems. The Friends of Maltby Lake Watershed Society is a registered BC non-profit society and Canadian Registered Charity established by BC environmental activists to: conserve the riparian, Garry Oak and coastal Douglas Fir ecosystems, the sensitive flora and fauna therein and the watershed ecosystems draining into and from, Maltby Lake; educate the public and relevant stakeholders to the importance of this delicate ecological and cultural landscape; and create wildlife corridors, generate habitat for native species, and to reduce pollution on Vancouver Island for the benefit and enjoyment of the public.',
        image: require('./png/Placeholder.png')
      },
      {
        title: 'Nature Canada Report on Tree Equity',
        link: 'https://naturecanada.ca/wp-content/uploads/2022/09/Nature-Canada-Report-Tree-Equity.pdf',
        description: '"The majority of Canadian municipalities have published urban tree cover targets—for example, the City of Toronto has committed to achieving 40% urban forest canopy cover by 2050. While laudable, such city-wide targets do not address equity of access for different communities and neighborhoods. A better approach is the 3-30-300 rule, which states that everyone should be able to see at least three trees from their home, that all neighbourhoods should have at least a 30% tree canopy, and that all residents should have a greenspace of at least one hectare within 300 metres of where they live. While this principle can help substantially in advancing tree equity, we need to go further. In this report, Nature Canada proposes that equitable access should be thought of in terms of three variables—proximity to urban trees and forests, urban forest quality and the governance of urban forests."',
        image: require('./png/Placeholder.png')
      },
      {
        title: "BirdLife International",
        image: require('./png/Birdlife.png'),
        link: "https://www.birdlife.org/what-we-do/",
        description: "BirdLife International's mission is to conserve birds, their habitats, and global biodiversity, working with people toward sustainability in the use of natural resources."
      },
      {
        title: 'CRD Educational Resources',
        image: require('./png/CRDEducational.png'),
        link: 'https://www.crd.bc.ca/education/school-programs/education-resources#tab-5',
        description: 'The Capital Regional District has published a number of identification charts and fact sheets about the living things that can be found in our regional parks. Follow the link to learn about local mosses, seaweeds, lichens, shoreline birds and more!'
      },
      {
        title: 'Colquitz Storymap',
        link: 'https://storymaps.arcgis.com/stories/e884cb42946a46d1800e90a692eca278',
        description: '"The (ongoing) Colquitz River restoration project, launched by  Peninsula Streams  and the  District of Saanich  in 2019, aims to restore ecological integrity and resilience to this urban watershed system in what is now called Saanich, British Columbia, Canada." This story was developed in partnership with Peninsula Streams Society, Engage with Nature-Based Solutions, and UVic Community Mapping students Langley Chan, Olivia Gatrell, Zacc Lavigne, and Nabila Kazmi.',
        image: require('./png/Placeholder.png')
      }
    ],
  },
  mapData: [
    {
      title: 'Sensitive Ecosystems',
      description: [
        {type:'p', content:'The Sensitive Ecosystems Inventory (SEI) of East Vancouver Island project has been responsible for tracking sensitive ecosystems for many regions within the Capital Regional District (CRD). Their data is what you see on the map. Their research identifies different sensitive ecosystems and allows us to understand better how these ecosystems are at risk. Some of the most significant factors responsible for the degradation and ecosystem damage are human usage and the introduction of invasive species. These ecosystems are shrinking, often due to development or land use changes. The areas on this map do not include private lands, provincial & federal lands, or Indigenous reservations.'},
        {type:'p', content:'It is important to understand that each of these ecosystems plays a crucial role in the ecological well-being of this area. Damage to one sensitive ecosystem will affect another. These ecosystems in this area of the coast are known for their biodiversity.'},
        {type:'p', content:'Learn more at the SEI project page:'},
        {
          type:'link',
          content:'"East Vancouver Island & the Gulf Islands," Terrestrial Ecosystem Information. Government of British Columbia, Victoria, Canada. Accessed June 1, 2023.',
          url:'https://www2.gov.bc.ca/gov/content/environment/plants-animals-ecosystems/ecosystems/search-ecosystem-info/east-vancouver-island-gulf-islands'
        }
      ],
      data: require('./geojson/SensitiveEcosystems.geojson'),
      format: 'polygon',
      symbology: 'classified',
      styleMap: styleMap_SensitiveEcosystems,
      options: {
        style: function (feature) {
          const baseStyle = {
            stroke: true,
            opacity: 0.5,
            color: 'rgb(130,130,130)',
            dashArray: '',
            lineCap: 'round',
            lineJoin: 'round',
            weight: 2,
            fill: true,
            fillOpacity: 0.7,
            interactive: true
          }
          return {
            ...baseStyle,
            fillColor: getStyleMapProperty(
                'fillColor',
                feature.properties.Ecosystem,
                styleMap_SensitiveEcosystems
              ),
          }
        },
        onEachFeature: (f,l) => {
          l.bindPopup(mapPopupContent(
              'Sensitive Ecosystem: ' + f.properties.Ecosystem,
              f.properties.Location
            ), {offset: [0,8]});
          l.on({
            mouseover: (e) => {
              if (typeof e.target.setStyle === 'function')
                  e.target.setStyle({ fillOpacity: 1.0 })
              },
            mouseout: (e) => {
              if (typeof e.target.setStyle === 'function')
                e.target.setStyle({ fillOpacity: 0.7 })
              }
          });
        }
      }
    },
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