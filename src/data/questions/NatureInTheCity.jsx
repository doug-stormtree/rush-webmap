import { Box, Link } from '@chakra-ui/react';
import { FaBinoculars, FaHandsHelping, FaHighlighter, FaLink } from 'react-icons/fa'
import { LuRabbit } from "react-icons/lu";
import {
  LegendGroups,
  InitiativeTags as Tag,
} from '../TextContent';

// copied from ContentInitiativeContainer.jsx for now
const tabIconStyle = {
  marginRight: '0.5rem',
}

const questionData = {
  title: "Nature in the City",
  question: "One Map, One NatureHood, A guide to Many Adventures.",
  sections: {
    one: [
      {
        heading: 'Provided by Greater Victoria NatureHood.',
        items: [
          'Leave no trace.',
          'Leave what you find.',
          'Respect wildlife.',
          'Be mindful of others.'
        ]
      },
      {
        heading: 'This map is a guide to help connect you with amazing places and nearby nature. Here are some fund ideas to get you started on your journey!',
        items: [
          'Go birdwatching (see map for prime locations),',
          'Paint, draw, sketch wildflowers in spring,',
          'Explore diverse intertidal life in summer,',
          'View spawning salmon in the fall,',
          'Volunteer with a local stewardship group,',
          'Look for plants and animals on the species list, and check off the ones you find.',
        ]
      },
    ],
    two: {
      heading: 'Greater Victoria NatureHood: Nature In The City Map',
      items: [
        'While you explore, this map will help put names to some of the life that you see. Look for the beautiful images, names, and interesting facts about these plants and animals.',
        'If you are curious to learn more, take photos of your discoveries and use iNaturalist and eBird apps on your smartphone to confirm your sightings. You will create data for scientists working to better understand and protect nature.',
        'Enjoy a journey to learn, love and discover more about nature.',
        'About NatureHood',
        'Nature Canada’s NatureHood Program is about connecting children and families to nature right where they live. It is a call to expose a new generation of nature lovers, naturalists and citizen scientists to nature all around them. To learn more about NatureHood visit www.gvnaturehood.com orcontact us at info@gvnaturehood.com.',
        'Greater Victoria Naturehood',
        'Being in nature promotes awareness of our natural world and increases mental and physical health, as well as overall wellbeing. The Greater Victoria NatureHood aims to inspire children – and adults – to appreciate nature and take action to protect local species and natural places.',
        'Connect with Nature',
        'Connect with nature by taking time to simply go outdoors and explore the natural world around you. This can be as simple as going to your backyard or to a local park. You do not have to go far to explore nature. Make your city nature-friendly by working with your community to restore city parks, ravines, open spaces and other natural places for birds and native wildlife.',
        'Leave No Trace',
        'When you visit the Greater Victoria NatureHood, be sure to dispose of your waste appropriately.',
        'Respect Wildlife',
        'Feeding wildlife can lead to health impacts, alter natural behaviours, and increase exposure to predators and other dangers. Do not follow or approach wildlife but instead, observe from a distance. Avoid wildlife during sensitive times such as mating, nesting, raising their young. Pets may not be permitted at the places that you visit, please visit location websites prior to heading out with your family.',
        'Get Out Into the Naturehood',
        'By using this map, you can connect with nature at nearby urban protected areas, like Esquimalt Lagoon Migratory Bird Sanctuary, Shoal Harbour Migratory Bird Sanctuary and, Victoria Harbour Migratory Bird Sanctuary, to name but just a few. We hope that your experience will inspire you to care for and protect our natural environment.',
        'Connecting Greater Victoria\'s NatureHoods',
        'The Greater Victoria NatureHood is a partnership of grassroots naturalist organizations, not-for-profits and local governments, all sharing a strong commitment to protect nature in the Greater Victoria Region. It promotes nature awareness through education, stewardship activities and events, and wildlife observation, in our public green spaces.',
        'Resilient Naturehood',
        'A NatureHood is any place where you connect with nature’s wonders – from observing a bee pollinate a flower in a planter box, to watching wild birds at a backyard feeder or local park, to witnessing the trees change with the passing of the seasons in your local forest. Look around and you will find nature everywhere throughout the Greater Victoria NatureHood.',
        'Respect the Wildlife Laws',
        'The federal Migratory Birds Convention Act protects birds, their nests, and their eggs from harm or capture in Canada. Other provincial wildlife laws protect other species in the same way. Purchasing, keeping or trading a threatened species of wildlife from other countries is also illegal without a permit.',
        'Leave What You Find',
        'To help preserve the past and present for the future, examine, but do not touch, cultural or historic artifacts and structures. Leave any rocks, plants and other natural objects as you find them and avoid introducing or transporting non-native species.',
        'Be Mindful of Others',
        'Be courteous. One of the most important components of outdoor ethics is to be courteous to others, and follow local regulations. Many people visit the NatureHood specifically to listen to nature, so please maintain quiet and keep yourears open.',
        'About the Cover Art',
        'There are so many wonderful natural places to explore in the Greater Victoria NatureHood, which made it hard to choose just one to showcase on the cover. Artist Kristi Bridgeman came up with a fictional work that captures special elements from many of Victoria’s natural spaces, including the iconic Garry Oak habitat, which supports many species at risk. With less than 5% of the original Garry Oak habitat remaining in British Columbia, it was important to include this ecosystem as well as a variety of native flora and fauna including the Purple Martin, Bumblebee and camas flowers.',
        'Become a Naturehood Steward',
        'Build community while connecting with nature. Protect the NatureHood by joining one of the many stewardship groups in Greater Victoria who volunteer in natural areas. Opportunities include:',
        '• Removing invasive species',
        '• Planting native plants and trees',
        '• Improving stream quality',
        '• Monitoring birds and wildlife',
        '• Collecting litter, and more.',
        'To find an opportunity that suits your interests, visit www.gvnaturehood.com',
      ]
    },
    three: {
      items: [
        'Ecosystems & Biodiversity',
        'Greater Victoria is high in biodiversity, as shown by the great variety of plants, animals, and ecosystems that are found throughout the region. Biodiversity can be observed close to home, in backyard gardens, grassy parks, and street trees. Biodiversity is even higher in our region’s natural ecosystems, including:',
        '• Coastal Douglas-fir forests',
        '• Garry Oak meadows',
        '• Wetlands',
        '• Streams, rivers and riparian areas',
        '• Rocky, pebble and sandy shorelines',
        '• Eelgrass meadows and kelp forests',
        'Did you know?',
        '• Vancouver Island is a biodiversity hotspot and is thought to have provided refuge to plants and animals during the last glaciation.',
        '• Victoria sits in the Coastal Douglas-fir Biogeoclimatic zone – an area affected by factors like temperature, rainfall, moisture balance and altitude – which covers only 0.3% of the province but is home to the highest number of species and ecosystems at risk in BC.',
        '• Some species like the Vancouver Island Water Shrew (found near Sooke) are endemic to Vancouver Island, meaning they are not found anywhere else.',
        'As you visit different sites in the NatureHood, watch and listen for the incredible biodiversity that surrounds you.',
        'Waterways and Watersheds',
        'We all live in a watershed, whether natural, urban or rural. A watershed is an area of land that drains precipitation and groundwater to a common point, such as a creek, wetland, lake or ocean. Healthy watersheds feature ample trees and abundant vegetation that help to slow, clean, and store water by allowing it to absorb into the landscape. Watersheds can be different sizes and scales, and small watersheds can be part of larger watersheds. Each watershed plays an important role in maintaining our water cycle while providing important habitat to local plants and animals. Do your part and learn how you can clean, protect and enhance the watersheds in your NatureHood.',
        'Riparian Zones',
        'Riparian zones are important transition areas that connect the water with the land, and support a wide diversity of plant and animal life. Riparian zones may be found surrounding lakes, estuaries, streams and rivers. These critical buffer zones improve water quality, retain water during storm events, prevent erosion, and provide important habitat for fish and other species.',
        'Important Bird Areas',
        'In our NatureHood there are three Important Bird & Biodiversity areas: Sidney Channel and Mandarte Island located next to Shoal Harbour MBS, and Chain Islets - Grand Chain Island located next to Victoria Harbour MBS. There are 84 IBAs in British Columbia. These IBAs are of exceptional international significance for the conservation of birds and biodiversity and are part of a global network first established in 1985. In Canada, IBAs are a joint initiative of Nature Canada and Birds Canada.',
        'Gulls',
        'There are 12 species of gulls known to regularly visit the NatureHood. Pictured here is the Glaucous-winged Gull; it is the only gull known to breed locally. Gulls are scavengers and are sometimes called the ‘vultures of the coast’ because they scrounge the coastline and will eat almost anything that washes up on the beach and shoreline.',
        'Acknowledgements',
        'We acknowledge with respect the territory of the SENĆOŦEN and Lekwungen speaking peoples on whose traditional lands and waterways we live, work and play and whose deep relationship to place continues to this day. Greater Victoria NatureHood looks forward to building a future map that includes more First Nations knowledge, language and history to provide a more complete illustration of our region’s natural heritage.',
      ]
    },
  },
  act: {
    initiatives: [
      {
        title: 'Greater Victoria NatureHood',
        link: 'https://www.gvnaturehood.com/',
        image: require('../png/NatureInTheCity.png'),
        description: 'The Greater Victoria Naturehood is a collaborative effort by several not-for-profit, public and private organizations.',
        tags: [
          Tag.Map,
        ],
      },
    ],
  },
}

const Question = {
  key: 'nature-in-the-city',
  image: require('../png/GVNaturehood.png'),
  color: {
    background: '#b0d243',
    hover: '#d5ff51',
    selected: '#edf4d4',
  },
  layers: [
    { key: 'Naturehood_LearningCentres', active: false, ...LegendGroups.Naturehood },
    { key: 'Naturehood_Locations', active: false, ...LegendGroups.Naturehood },
    { key: 'Naturehood_PlaceNames', active: false, ...LegendGroups.Naturehood },
    { key: 'Naturehood_PlaceNamesEnglish', active: false, ...LegendGroups.Naturehood },
    { key: 'Naturehood_FirstNationsReserves', active: false, ...LegendGroups.Naturehood },
    { key: 'Naturehood_MBS', active: false, ...LegendGroups.Naturehood },
    { key: 'CRD_Parks', active: false, ...LegendGroups.Naturehood },
    { key: 'Naturehood_Animals', active: true, ...LegendGroups.Naturehood },
  ],
  tabs: [
    {
      name: 'Notice',
      icon: <FaHighlighter style={tabIconStyle}/>,
      title: questionData.title,
      subtitle: questionData.question,
      items: questionData.sections.one,
    },
    {
      name: 'Act',
      icon: <FaHandsHelping style={tabIconStyle}/>,
      title: 'Make Your Move',
      subtitle: questionData.sections.two.heading,
      items: [ { items: questionData.sections.two.items } ],
    },
    {
      name: 'Rabbit Hole',
      icon: <LuRabbit strokeWidth='3px' style={tabIconStyle}/>,
      title: 'Jump Down The Rabbit Hole',
      subtitle: 'Don\'t forget your reading glasses.',
      items: [ questionData.sections.three ],
    },
    {
      name: 'Check Out',
      icon: <FaLink style={tabIconStyle}/>,
      title: 'Good Stuff To Check Out',
      subtitle: 'We\'ve noticed these movers and shakers working on solutions.',
      initiatives: questionData.act.initiatives,
    },
    {
      name: 'Locals in the Naturehood',
      icon: <FaBinoculars style={tabIconStyle}/>,
      //title: 'Locals in the Naturehood',
      subtitle: (<>Artwork by <Link isExternal href='https://www.kristibridgeman.com/'>Kristi Bridgeman</Link></>),
      //initiatives: questionData.act.initiatives,
      children: [
        <Box bgColor='red' boxSize='100px'></Box>
      ]
    },
  ],
  ...questionData
};
export default Question;