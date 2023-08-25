const Naturehood = {
  key: 'neighbourhood-to-naturehood',
  title: "Neighbourhood to Naturehood",
  question: "Make the human-Nature connection for your health and inner peace. Live your best life in a Naturehood.",
  image: require('../png/Naturehood.png'),
  description_new: [
    {type: 'h2', content: 'You live in a Naturehood if...'},
    {type: 'ul', content: [
      'your neighbourhood has at least 30% canopy cover for shade and habitat.',
      'you see healthy plants native to the ecosystem in the neighbourhood and nearby parks.',
      'stewardship groups are working in your community to monitor and support a healthy ecosystem.',
      'you can see & hear birds and bees visiting the pollinator gardens all the way down your street, meaning the food web is working.',
      'trees and roots are surrounded by rich, loose soil and plants that can transform atmospheric greenhouse gasses into more Nature.',
    ]},
    {type: 'h2', content: 'It’s a concrete jungle if...'},
    {type: 'ul', content: [
      'your region has less than 30% canopy cover. This creates hot pockets and heat stress for you and Nature.',
      'you can’t see 3 trees from your window, which means you don’t have habitat for all that good Nature stuff.',
      'you don’t see flowering plants, which means pollinators are not finding food.',
      'you see mostly dark pavement and hard dirt that will radiate heat and more road runoff carrying toxins into nearby watersheds.',
      'there isn’t an active stewardship group in your area.  This may mean people aren’t prioritizing Naturehood in the neighbourhood.',
    ]},
    {type: 'spacer'},
    {type: 'h2', content: 'Make your move. Turn the concrete jungle into a thriving urban ecosystem.'},
    {type: 'ul', content: [
      'Get outside. You are Nature.',
      'Plot and plant your own pollinator garden to connect pollinator habitats and secure the food system.',
      'Extend the reach of the closest ecosystem by planting native species in pots or in the ground.',
      'Learn to identify invasive species and how to remove them safely.',
      'Keep poisons out of the watershed and food web by avoiding the use of pesticides and herbicides in your garden.',
      'Volunteer with your local stewardship group to restore watersheds and ecosystems.',
    ]},
    {type: 'spacer'},
    {type: 'h2', content: 'Down the rabbit hole.'},
    {type: 'p', content: 'Life is hard in a concrete jungle.  Bringing Naturehood back to your neighbourhood will mean a better health outlook for all creatures big and small.'},
    {type: 'p', content: 'Your Naturehood can protect you from viruses and bacteria.  By creating space for Nature the life support systems like air and water filtration are able to do their magic.  Research shows a clear link between the loss of nature and the increase of pathogens.  By making sure there is enough space for habitat so we get the benefit of ecosystem services without competing for living space which increases human-wildlife contact in a way that is not healthy.'},
    {type: 'p', content: 'The sounds of Nature have a positive impact on your stress levels and well-being.  From the sound of water to bird calls, we are learning about how soothing the sound of Nature is on the soul.'},
    {type: 'p', content: 'Pollinators are essential for food production on Vancouver Island, and pollination relies on the health of our wild ecosystems. Many pollinators are facing extinction around the globe due to development and fragmentation of habitat, absence of food, pesticides (neonicotinoids), invasive species, general pollution and climate change. Human settlement has altered watersheds affecting the key corridors that are home to these creatures.'},
    {type: 'p', content: 'The concrete jungle is more likely to create poverty and impact human health too. A 2022 Nature Canada Report revealed that the percentage of tree canopy is much lower in low-income and racialized neighbourhoods. In October 2022, Vancouver Island’s chief medical officer, Dr. Reka Gustafson says she wants to tackle mental health and track how climate change is making these inequities more pronounced. Learn about the clear link between the quality of the Naturehood and your long-term health. Show Nature some love and let the sights, sounds, scents and sensations work their healing magic for you.'},
    {type: 'p', content: 'Help pollinate the world with kindness.  Support community groups that are working to re-green the concrete jungle and take care of the folks who live there.'},
  ],
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
        title: 'Habitat Acquisition Trust',
        description: 'Habitat Acquisition Trust (HAT) runs several Species at Risk Programs: "On Southern Vancouver Island, the increase in urbanization and loss of habitat has lead to many species at risk in our region. HAT works to protect and improve habitat for many of these species, and though we wish we could help them all we only run programs from a few of them."',
        link: 'https://hat.bc.ca/wildlife',
        image: require('../png/HAT.png')
      },
      {
        title: 'W̱SÁNEĆ Peninsula Environmental Organizations',
        description: 'There are many people & organizations across the Saanich Peninsula working towards healthier ecosystems and connected communities across municipal boundaries. Learn about their work in this StoryMap created by UVic Community Mapping students Evan Gerbrecht, Casey Lake, Samantha Denton, Ethan Heckrodt with direction from the Saanich Peninsula Environmental Coalition.',
        link: 'https://storymaps.arcgis.com/stories/5239fadd726c462da56ebcbe231c57be',
        image: require('../png/WSANECStoryMap.png')
      },
      {
        title: 'Quadra Cedar Hill Community Association',
        description: 'The mission of QCHCA is to be an advocate and trusted resource for sustainability, vibrancy and engagement in our community.',
        link: 'https://qchca.org/',
        image: require('../png/QuadraCedarHill.png')
      },
      {
        title: 'Gorge Tillicum Community Association',
        link: 'https://www.gorgetillicum.ca/',
        description: '"The Gorge Tillicum Community Association is a volunteer-based non-profit organization that seeks to further the collective interests of the Gorge Tillicum neighbourhood.  The GTCA is recognized by Saanich as a significant community voice on local issues."',
        image: require('../png/GorgeTillicum.png')
      },
      {
        title: 'Connectivity on the Saanich Peninsula',
        link: 'https://storymaps.arcgis.com/stories/a68767b15837450aaf8a0d7e2094f345',
        description: 'The purpose of this StoryMap is to highlight the historical connectivity between culture, community, and ecology on the Saanich Peninsula, and look for ways to improve connectivity in future collaboration with the Saanich Peninsula Environmental Coalition (SPEC).  This map was created by Ella Bethune, Darryl Seah, Ben DesRosiers, Ardis Mellor-Laing, as part of their work with the University of Victoria, Saanich Peninsula Environmental Coalition, and the Engage with Nature-based Solutions Initiative.',
        image: require('../png/Connectivity.png')
      },
      {
        title: 'Greater Victoria NatureHood: Nature in the City Map',
        link: 'https://experience.arcgis.com/experience/b360590fbbb44966952c0cfe240d65c4',
        description: '"This map is a guide to help connect you with the amazing places and nearby nature found in Greater Victoria. Learn about the Greater Victoria NatureHood initiative, ecosystems and biodiversity, waterways and watersheds, riparian zones, and some of the species of plants and animals found in the region."',
        image: require('../png/NatureInTheCity.png')
      },
      {
        title: 'Greater Victoria Greenbelt Society',
        link: 'https://www.marylakeconnections.ca/greater-victoria-greenbelt-society/',
        description: '“Mission: To foster respect for nature and promote the protection of natural areas for the benefit of all future generations through environmental conservation, restoration, education, and cultural activities in alliance with local First Nations" The Greater Victoria Greenbelt Society\'s current project is the W̱MÍYEŦEN Nature Sanctuary (formerly Mary Lake).',
        image: require('../png/Placeholder.png')
      },
      {
        title: 'Friends of Maltby Lake Watershed Society',
        link: 'https://maltbylake.com/',
        description: 'Maltby Lake is at the headwaters of the Tod Creek Watershed. The 21-acre near pristine water body is surrounded by 172 acres of relatively undisturbed forest and wetland. The property is an example of unspoiled lake and land ecosystems. The Friends of Maltby Lake Watershed Society is a registered BC non-profit society and Canadian Registered Charity established by BC environmental activists to: conserve the riparian, Garry Oak and coastal Douglas Fir ecosystems, the sensitive flora and fauna therein and the watershed ecosystems draining into and from, Maltby Lake; educate the public and relevant stakeholders to the importance of this delicate ecological and cultural landscape; and create wildlife corridors, generate habitat for native species, and to reduce pollution on Vancouver Island for the benefit and enjoyment of the public.',
        image: require('../png/Placeholder.png')
      },
      {
        title: 'Nature Canada Report: Tree Equity',
        link: 'https://naturecanada.ca/wp-content/uploads/2022/09/Nature-Canada-Report-Tree-Equity.pdf',
        description: '"The majority of Canadian municipalities have published urban tree cover targets—for example, the City of Toronto has committed to achieving 40% urban forest canopy cover by 2050. While laudable, such city-wide targets do not address equity of access for different communities and neighborhoods. A better approach is the 3-30-300 rule, which states that everyone should be able to see at least three trees from their home, that all neighbourhoods should have at least a 30% tree canopy, and that all residents should have a greenspace of at least one hectare within 300 metres of where they live. While this principle can help substantially in advancing tree equity, we need to go further. In this report, Nature Canada proposes that equitable access should be thought of in terms of three variables—proximity to urban trees and forests, urban forest quality and the governance of urban forests."',
        image: require('../png/NatureCanadaReport.png')
      },
      {
        title: 'CRD Educational Resources',
        image: require('../png/CRDEducational.png'),
        link: 'https://www.crd.bc.ca/education/school-programs/education-resources#tab-5',
        description: 'The Capital Regional District has published a number of identification charts and fact sheets about the living things that can be found in our regional parks. Follow the link to learn about local mosses, seaweeds, lichens, shoreline birds and more!'
      },
      {
        title: "BirdLife International",
        image: require('../png/Birdlife.png'),
        link: "https://www.birdlife.org/what-we-do/",
        description: "BirdLife International's mission is to conserve birds, their habitats, and global biodiversity, working with people toward sustainability in the use of natural resources."
      },
      {
        title: 'Colquitz Storymap',
        link: 'https://storymaps.arcgis.com/stories/e884cb42946a46d1800e90a692eca278',
        description: '"The (ongoing) Colquitz River restoration project, launched by  Peninsula Streams  and the  District of Saanich  in 2019, aims to restore ecological integrity and resilience to this urban watershed system in what is now called Saanich, British Columbia, Canada." This story was developed in partnership with Peninsula Streams Society, Engage with Nature-Based Solutions, and UVic Community Mapping students Langley Chan, Olivia Gatrell, Zacc Lavigne, and Nabila Kazmi.',
        image: require('../png/Placeholder.png')
      }
    ],
  }
};
export default Naturehood;