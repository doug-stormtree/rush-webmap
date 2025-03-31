import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { FaBinoculars, FaHighlighter } from "react-icons/fa";
import { LuInfo, LuTrees, LuLeaf } from "react-icons/lu";
import { LegendGroups, InitiativeTags as Tag } from "../TextContent";
import ChecklistCard from "../../components/ChecklistCard";

// copied from ContentInitiativeContainer.jsx for now
const tabIconStyle = {
  marginRight: "0.5rem",
};

const questionData = {
  title: "Nature in the City Map",
  question: "One Map, One NatureHood, A Guide to Many Adventures.",
  sections: {
    one: [
      {
        heading:
          "This map is a guide to help connect you with amazing places and nearby nature. Here are some fund ideas to get you started on your journey!",
        items: [
          "Go birdwatching (see map for prime locations),",
          "Paint, draw, sketch wildflowers in spring,",
          "Explore diverse intertidal life in summer,",
          "View spawning salmon in the fall,",
          "Volunteer with a local stewardship group,",
          "Look for plants and animals on the species list, and check off the ones you find.",
        ],
      },
      {
        heading:
          "While you explore, this map will help put names to some of the life that you see. Look for the beautiful images, names, and interesting facts about these plants and animals.",
        items: [],
      },
      {
        heading:
          "If you are curious to learn more, take photos of your discoveries and use iNaturalist and eBird apps on your smartphone to confirm your sightings. You will create data for scientists working to better understand and protect nature.",
        items: [],
      },
      {
        heading:
          "Enjoy a journey to learn, love and discover more about nature.",
        items: [],
      },
      {
        heading: "Provided by Greater Victoria NatureHood.",
        items: [
          "Leave no trace.",
          "Leave what you find.",
          "Respect wildlife.",
          "Be mindful of others.",
        ],
      },
    ],
    two: {
      heading: "Greater Victoria NatureHood: Nature In The City Map",
      items: [
        "While you explore, this map will help put names to some of the life that you see. Look for the beautiful images, names, and interesting facts about these plants and animals.",
        "If you are curious to learn more, take photos of your discoveries and use iNaturalist and eBird apps on your smartphone to confirm your sightings. You will create data for scientists working to better understand and protect nature.",
        "Enjoy a journey to learn, love and discover more about nature.",
        "About NatureHood",
        "Nature Canada’s NatureHood Program is about connecting children and families to nature right where they live. It is a call to expose a new generation of nature lovers, naturalists and citizen scientists to nature all around them. To learn more about NatureHood visit www.gvnaturehood.com orcontact us at info@gvnaturehood.com.",
        "Greater Victoria NatureHood",
        "Being in nature promotes awareness of our natural world and increases mental and physical health, as well as overall wellbeing. The Greater Victoria NatureHood aims to inspire children – and adults – to appreciate nature and take action to protect local species and natural places.",
        "Connect with Nature",
        "Connect with nature by taking time to simply go outdoors and explore the natural world around you. This can be as simple as going to your backyard or to a local park. You do not have to go far to explore nature. Make your city nature-friendly by working with your community to restore city parks, ravines, open spaces and other natural places for birds and native wildlife.",
        "Leave No Trace",
        "When you visit the Greater Victoria NatureHood, be sure to dispose of your waste appropriately.",
        "Respect Wildlife",
        "Feeding wildlife can lead to health impacts, alter natural behaviours, and increase exposure to predators and other dangers. Do not follow or approach wildlife but instead, observe from a distance. Avoid wildlife during sensitive times such as mating, nesting, raising their young. Pets may not be permitted at the places that you visit, please visit location websites prior to heading out with your family.",
        "Get Out Into the NatureHood",
        "By using this map, you can connect with nature at nearby urban protected areas, like Esquimalt Lagoon Migratory Bird Sanctuary, Shoal Harbour Migratory Bird Sanctuary and, Victoria Harbour Migratory Bird Sanctuary, to name but just a few. We hope that your experience will inspire you to care for and protect our natural environment.",
        "Connecting Greater Victoria's NatureHoods",
        "The Greater Victoria NatureHood is a partnership of grassroots naturalist organizations, not-for-profits and local governments, all sharing a strong commitment to protect nature in the Greater Victoria Region. It promotes nature awareness through education, stewardship activities and events, and wildlife observation, in our public green spaces.",
        "Resilient NatureHood",
        "A NatureHood is any place where you connect with nature’s wonders – from observing a bee pollinate a flower in a planter box, to watching wild birds at a backyard feeder or local park, to witnessing the trees change with the passing of the seasons in your local forest. Look around and you will find nature everywhere throughout the Greater Victoria NatureHood.",
        "Respect the Wildlife Laws",
        "The federal Migratory Birds Convention Act protects birds, their nests, and their eggs from harm or capture in Canada. Other provincial wildlife laws protect other species in the same way. Purchasing, keeping or trading a threatened species of wildlife from other countries is also illegal without a permit.",
        "Leave What You Find",
        "To help preserve the past and present for the future, examine, but do not touch, cultural or historic artifacts and structures. Leave any rocks, plants and other natural objects as you find them and avoid introducing or transporting non-native species.",
        "Be Mindful of Others",
        "Be courteous. One of the most important components of outdoor ethics is to be courteous to others, and follow local regulations. Many people visit the NatureHood specifically to listen to nature, so please maintain quiet and keep yourears open.",
        "About the Cover Art",
        "There are so many wonderful natural places to explore in the Greater Victoria NatureHood, which made it hard to choose just one to showcase on the cover. Artist Kristi Bridgeman came up with a fictional work that captures special elements from many of Victoria’s natural spaces, including the iconic Garry Oak habitat, which supports many species at risk. With less than 5% of the original Garry Oak habitat remaining in British Columbia, it was important to include this ecosystem as well as a variety of native flora and fauna including the Purple Martin, Bumblebee and camas flowers.",
        "Become a NatureHood Steward",
        "Build community while connecting with nature. Protect the NatureHood by joining one of the many stewardship groups in Greater Victoria who volunteer in natural areas. Opportunities include:",
        "• Removing invasive species",
        "• Planting native plants and trees",
        "• Improving stream quality",
        "• Monitoring birds and wildlife",
        "• Collecting litter, and more.",
        "To find an opportunity that suits your interests, visit www.gvnaturehood.com",
      ],
    },
    three: {
      items: [
        "Ecosystems & Biodiversity",
        "Greater Victoria is high in biodiversity, as shown by the great variety of plants, animals, and ecosystems that are found throughout the region. Biodiversity can be observed close to home, in backyard gardens, grassy parks, and street trees. Biodiversity is even higher in our region’s natural ecosystems, including:",
        "• Coastal Douglas-fir forests",
        "• Garry Oak meadows",
        "• Wetlands",
        "• Streams, rivers and riparian areas",
        "• Rocky, pebble and sandy shorelines",
        "• Eelgrass meadows and kelp forests",
        "Did you know?",
        "• Vancouver Island is a biodiversity hotspot and is thought to have provided refuge to plants and animals during the last glaciation.",
        "• Victoria sits in the Coastal Douglas-fir Biogeoclimatic zone – an area affected by factors like temperature, rainfall, moisture balance and altitude – which covers only 0.3% of the province but is home to the highest number of species and ecosystems at risk in BC.",
        "• Some species like the Vancouver Island Water Shrew (found near Sooke) are endemic to Vancouver Island, meaning they are not found anywhere else.",
        "As you visit different sites in the NatureHood, watch and listen for the incredible biodiversity that surrounds you.",
        "Waterways and Watersheds",
        "We all live in a watershed, whether natural, urban or rural. A watershed is an area of land that drains precipitation and groundwater to a common point, such as a creek, wetland, lake or ocean. Healthy watersheds feature ample trees and abundant vegetation that help to slow, clean, and store water by allowing it to absorb into the landscape. Watersheds can be different sizes and scales, and small watersheds can be part of larger watersheds. Each watershed plays an important role in maintaining our water cycle while providing important habitat to local plants and animals. Do your part and learn how you can clean, protect and enhance the watersheds in your NatureHood.",
        "Riparian Zones",
        "Riparian zones are important transition areas that connect the water with the land, and support a wide diversity of plant and animal life. Riparian zones may be found surrounding lakes, estuaries, streams and rivers. These critical buffer zones improve water quality, retain water during storm events, prevent erosion, and provide important habitat for fish and other species.",
        "Important Bird Areas",
        "In our NatureHood there are three Important Bird & Biodiversity areas: Sidney Channel and Mandarte Island located next to Shoal Harbour MBS, and Chain Islets - Grand Chain Island located next to Victoria Harbour MBS. There are 84 IBAs in British Columbia. These IBAs are of exceptional international significance for the conservation of birds and biodiversity and are part of a global network first established in 1985. In Canada, IBAs are a joint initiative of Nature Canada and Birds Canada.",
        "Gulls",
        "There are 12 species of gulls known to regularly visit the NatureHood. Pictured here is the Glaucous-winged Gull; it is the only gull known to breed locally. Gulls are scavengers and are sometimes called the ‘vultures of the coast’ because they scrounge the coastline and will eat almost anything that washes up on the beach and shoreline.",
        "Acknowledgements",
        "We acknowledge with respect the territory of the SENĆOŦEN and Lekwungen speaking peoples on whose traditional lands and waterways we live, work and play and whose deep relationship to place continues to this day. Greater Victoria NatureHood looks forward to building a future map that includes more First Nations knowledge, language and history to provide a more complete illustration of our region’s natural heritage.",
      ],
    },
  },
  act: {
    initiatives: [
      {
        title: "Greater Victoria NatureHood",
        link: "https://www.gvnaturehood.com/",
        image: require("../png/NatureInTheCity.png"),
        description:
          "The Greater Victoria NatureHood is a collaborative effort by several not-for-profit, public and private organizations.",
        tags: [Tag.Map],
      },
    ],
  },
};

const locals = [
  {
    name: "Arbutus",
    nameScientific: "Arbutus menziesii",
    nameIndigenous: "ḰOḰE,IȽĆ",
    description:
      "A broadleaf evergreen tree, up to 30 m tall, usually with a crooked or leaning trunk that divides into several twisting upright branches and an irregularly rounded crown. The tree drops its leaves in the summer instead of the fall. The tree’s reddish bark peels off, revealing the smooth, new green bark underneath.",
    image: require("../jpg/LocalsNatureHood/Arbutus.jpg"),
  },
  {
    name: "American Wigeon",
    nameScientific: "Mareca americana",
    nameIndigenous: "ŚEŚENE",
    description:
      "Also known as a Baldpate, the American Wigeon is a species of dabbling duck found in North America. Formerly assigned to Anas, this species is classified with the other wigeons in the dabbling duck genus Mareca. It is the New World counterpart of the Eurasian wigeon.",
    image: require("../jpg/LocalsNatureHood/AmericanWigeon.jpg"),
  },
  {
    name: "Bald Eagle",
    nameScientific: "Haliaeetus leucocephalus",
    nameIndigenous: "QELEṈSEN",
    description:
      "The adult Bald Eagle is a striking dark brownish-black bird. It gets its white head and tail at approximately four years of age. The Bald Eagle is not bald. They got the name from an old English word “balde” meaning white (white- headed). They can grow to about 1 m tall and have a wingspread of over 2 m.",
    image: require("../jpg/LocalsNatureHood/BaldEagle.jpg"),
  },
  {
    name: "Banana Slug",
    nameScientific: "Ariolimax columbianus",
    nameIndigenous: "PENÁNE KÍOṮEN",
    description:
      "Banana Slugs are one of the largest slugs in the world! They can grow up to 26 cm long. Banana Slugs can also have 27,000 teeth on a long tooth- covered “tongue”. They come in a range of colours, from yellow to brown to black and many are mottled with black spots. Banana slugs like a moist, cool environment and are native to the BC temperate coastal rainforest.",
    image: require("../jpg/LocalsNatureHood/BananaSlug.jpg"),
  },
  {
    name: "Belted Kingfisher",
    nameScientific: "Megaceryle alcyon",
    nameIndigenous: "ȾĆELE",
    description:
      "The Belted Kingfisher is a pigeon-sized bird. It is blue-gray above, white below, with a bushy crest and dagger-like bill. The male has a blue-gray breast band. The female is similar, but also has a chestnut belly band.",
    image: require("../jpg/LocalsNatureHood/BeltedKingfisher.jpg"),
  },
  {
    name: "Eelgrass",
    nameScientific: "Zostera marina",
    nameIndigenous: "ĆELEM",
    description:
      "Sometimes known as the 'salmon highway', Eelgrass is important to the survival of salmon. A native seagrass, it rivals some of the world’s richest rainforests. It provides food and protection important to fish and shellfish species.",
    image: require("../jpg/LocalsNatureHood/Eelgrass.jpg"),
  },
  {
    name: "Bumblebee",
    nameScientific: "Bombus",
    nameIndigenous: "SEMSEMÍYE",
    description:
      "The native bumblebee has a robust black body that is extensively covered with black, yellow, and sometimes orange hairs on all body segments. Its colonies nest underground and unlike honey bees, they prefer to be out pollinating in cool, cloudy weather.",
    image: require("../jpg/LocalsNatureHood/Bumblebee.jpg"),
  },
  {
    name: "Common Camas",
    nameScientific: "Camassia quamash",
    nameIndigenous: "ḰȽO,EL",
    description:
      "Common Camas (on the cover) and Great Camas have light to deep blue flowers and bloom in the spring. Both are perennial herbs that grow from an edible bulb. They were once an im- portant cultural item for the Salish in the area who shaped the landscape to “farm” it. They are not to be confused with the Death Camas, which has a creamy white flower, but underground, the bulbs can be difficult to identify and toxic if consumed.",
    image: require("../jpg/LocalsNatureHood/CommonCamas.jpg"),
  },
  {
    name: "Fawn Lily",
    nameScientific: "Erythronium revolutum",
    //nameIndigenous: '',
    description:
      "Fawn Lily plants grow to over 30 cm tall, and have pairs of long, thick, white-spotted leaves growing from the base. The flowers are pink and some- times almost look fluorescent. The leaves show up in springtime and the flowers open in early summer.",
    image: require("../jpg/LocalsNatureHood/FawnLily.jpg"),
  },
  {
    name: "Garry Oak",
    nameScientific: "Quercus garryana",
    nameIndigenous: "ĆEṈ,IȽĆ",
    description:
      "An iconic tree with thick, grooved, scaly, greyish-black bark and a round spreading crown. Garry Oak trees (on the cover) can grow out of rock and be super stunted, adapting to its environment, or grow up to 20 m tall, and the Garry Oak habitat supports many species at risk.",
    image: require("../jpg/LocalsNatureHood/GarryOak.jpg"),
  },
  {
    name: "Hermit Crab",
    nameScientific: "Paguroidea",
    //nameIndigenous: '',
    description:
      "Hermit Crabs tend to live in ‘secondhand’ or previously owned and discarded shells. For this reason, it is important to leave empty shells where you find them.",
    image: require("../jpg/LocalsNatureHood/HermitCrab.jpg"),
  },
  {
    name: "Hooded Merganser",
    nameScientific: "Mergus cucullatus",
    nameIndigenous: "X̱OE₭",
    description:
      "This small duck has a slender pointed bill. The male has a white, fan-shaped, black-bordered crest, a blackish body with dull rusty flanks, and a white breast with two black stripes down the side. The female is dull gray-brown, with a warmer brown head and crest. Both sexes show a white wing patch in flight.",
    image: require("../jpg/LocalsNatureHood/HoodedMerganser.jpg"),
  },
  {
    name: "June Plum",
    nameScientific: "Oemleria cerasiformis",
    nameIndigenous: "ȾEX̱EṈ",
    description:
      "This shrub is also known as osoberry. It is native to the Pacific coast and mountain ranges of North America. It is among the first plants to fruit and it flowers in early spring.",
    image: require("../jpg/LocalsNatureHood/JunePlum.jpg"),
  },
  {
    name: "Lorquin’s Admiral",
    nameScientific: "Limenitis lorquini",
    nameIndigenous: "QELAXEN",
    description:
      "This butterfly can easily be recognized by the orange tips on the upper part of its wings. There is a white band across both wings, above and below. Females are considerably larger than males.",
    image: require("../jpg/LocalsNatureHood/LorquinsAdmiral.jpg"),
  },
  {
    name: "Orca",
    nameScientific: "Orcinus orca",
    nameIndigenous: "ḴEL,ȽOLEMEĆEN",
    description:
      "The Orca is the largest member of the oceanic dolphin family. This toothed whale has a diverse diet, although individual populations often specialize in particular types of prey. Some feed exclusively on fish, while others hunt marine mammals such as seals and other species of dolphin.",
    image: require("../jpg/LocalsNatureHood/Orca.jpg"),
  },
  {
    name: "Great Blue Heron",
    nameScientific: "Ardea herodias",
    nameIndigenous: "SṈE₭E",
    description:
      "This large wading bird is common near the shores of open water and in wetlands over most of Greater Victoria. Despite their impressive size, Great Blue Herons (on the cover) weigh only 2 to 3 kg thanks in part to their hollow bones, a feature shared by all birds.",
    image: require("../jpg/LocalsNatureHood/GreatBlueHeron.jpg"),
  },
  {
    name: "Harbour Seal",
    nameScientific: "Phoca vitulina",
    nameIndigenous: "ÁSW̱",
    description:
      "Harbour Seals are found along the coast in coastal waters, estuaries and river systems. Look for them basking in the sun on the rocks along the shore. They range in colour from brownish to black with a speckled pattern.",
    image: require("../jpg/LocalsNatureHood/HarbourSeal.jpg"),
  },
  {
    name: "Pacific Chorus Frog",
    nameScientific: "Pseudacris regilla",
    nameIndigenous: "WEKEK",
    description:
      "This small frog is usually about 5 cm long full grown. They can be green, bronze, grey, and all colours in between. Pacific Chorus Frogs can be heard calling throughout the year, especially during rainstorms, and the spring mating choruses are impossible to miss. It’s very difficult to spot these little fellows, though, since they will cease calling if they feel threatened.",
    image: require("../jpg/LocalsNatureHood/PacificChorusFrog.jpg"),
  },
  {
    name: "Pacific Wren",
    nameScientific: "Troglodytes pacificus",
    nameIndigenous: "DEDEM",
    description:
      "These birds are very vocal, so listen for their rapid series of tumbling and trill- ing notes in forest environments. When you hear their sweet song, patiently look in the understory for mouse-like movements along decaying logs and in upturned roots. Early mornings during the breeding season are the best times to find them perched in the open, shaking as they sing.",
    image: require("../jpg/LocalsNatureHood/PacificWren.jpg"),
  },
  {
    name: "Douglas-Fir",
    nameScientific: "Pseudotsuga menziesii",
    nameIndigenous: "JSȺ",
    description:
      "There are two varieties of Douglas-fir: they are Coastal and Interior. The Coastal variety that grows in the NatureHood can reach heights of 80 m.",
    image: require("../jpg/LocalsNatureHood/DouglasFir.jpg"),
  },
  {
    name: "Red Squirrel",
    nameScientific: "Tamiasciurus hudsonicus",
    nameIndigenous: "ĆEPSIOŦEN",
    description:
      "This small tree squirrel prefers coniferous forests. They spend most of their day in the tree canopy and will chirp loudly when you get close, which makes it easier to find them by listen- ing than by sight. Their colour will change during the winter season to a greyish brown hue without a black side stripe.",
    image: require("../jpg/LocalsNatureHood/RedSquirrel.jpg"),
  },
  {
    name: "River Otter",
    nameScientific: "Lontra Canadensis",
    nameIndigenous: "ĆTEMES",
    description:
      "River Otters have short coarse fur and lengthy, streamlined bodies. They have short powerful legs with fully webbed toes and a long tail to help them swim efficiently underwater while searching for fish, their main source of food.",
    image: require("../jpg/LocalsNatureHood/RiverOtter.jpg"),
  },
  {
    name: "Salmon",
    nameScientific: "Oncorhynchus kisutch",
    nameIndigenous: "SĆÁÁNEW̱",
    description:
      "Salmon are large fish, in various colours from silver and grey with dark spots or fins. Chinook, can weigh up to 36 kg. There are 6 species of Pacific Salmon (Oncorhynchus spp.): Chinook, Chum, Coho, Pink, Sockeye, and Steelhead.",
    image: require("../jpg/LocalsNatureHood/Salmon.jpg"),
  },
  {
    name: "Salmonberry",
    nameScientific: "Rubus spectabilis",
    nameIndigenous: "ELILE",
    description:
      "Salmonberry grows in groups and reaches up to 4 m tall. Look for the butterfly-shaped basil leaves, and the pink flowers that bloom in spring. Its salmon-red coloured berries ripen in summer. The thorny stems of the plant are covered in papery brown bark.",
    image: require("../jpg/LocalsNatureHood/Salmonberry.jpg"),
  },
  {
    name: "Western Purple Martin",
    nameScientific: "Progne subis arboricola",
    nameIndigenous: "QSEĆEN",
    description:
      "This iridescent dark blue/purple bird occurs exclusively west of the Rocky Mountains from southwest BC to southern California. They have been designated as a species at risk in BC are recovering from a severe population decline in the mid-late 1900s. (on the cover)",
    image: require("../jpg/LocalsNatureHood/WesternPurpleMartin.jpg"),
  },
  {
    name: "Western Terrestrial Garter Snake",
    nameScientific: "Thamnophis elegans vagrans",
    nameIndigenous: "SOȽḴE",
    description:
      "Also known as the “wandering” Garter Snake, this species is a frequent visitor to many back s throughout its range. Garter Snakes are rarely found far from water, either fresh or marine. During the summer, these snakes prefer open areas like meadows and estuaries.",
    image: require("../jpg/LocalsNatureHood/WesternTerrestrialGarterSnake.jpg"),
  },
  {
    name: "Wood Duck",
    nameScientific: "Aix sponsa",
    nameIndigenous: "MO,EḴ",
    description:
      "This species of perching duck breeds most widely in the wooded valleys and floodplains of southern British Columbia. It is one of the most colorful North American waterfowl.",
    image: require("../jpg/LocalsNatureHood/WoodDuck.jpg"),
  },
];

// Locals in the NatureHood Checklist Storage
const STORAGE_GROUP = "nitc";
const isCheckInStorage = (name) => {
  const checkStore = localStorage.getItem(STORAGE_GROUP + "." + name);
  return checkStore === "true" ? true : false;
};
const onCheckChange = (name) => {
  return (e) => {
    localStorage.setItem(STORAGE_GROUP + "." + name, e.target.checked);
  };
};

// Text styles
const h2 = {
  color: "#4e6636",
  fontFamily: "var(--chakra-fonts-heading)",
  fontWeight: "500",
  fontSize: "1.25rem",
};
const h3 = {
  fontFamily: "var(--chakra-fonts-heading)",
  fontWeight: "700",
  fontSize: "1rem",
};

const Question = {
  key: "nature-in-the-city-map",
  image: require("../png/GVNatureHood.png"),
  color: {
    background: "#b0d243",
    hover: "#d5ff51",
    selected: "#edf4d4",
  },
  layers: [
    {
      key: "NatureHood_LearningCentres",
      active: false,
      ...LegendGroups.NatureHood,
    },
    { key: "NatureHood_Locations", active: true, ...LegendGroups.NatureHood },
    { key: "NatureHood_PlaceNames", active: false, ...LegendGroups.NatureHood },
    {
      key: "NatureHood_PlaceNamesEnglish",
      active: false,
      ...LegendGroups.NatureHood,
    },
    {
      key: "NatureHood_FirstNationsReserves",
      active: false,
      ...LegendGroups.NatureHood,
    },
    { key: "NatureHood_MBS", active: true, ...LegendGroups.NatureHood },
    { key: "ImportantBirdAreas", active: true, ...LegendGroups.NatureHood },
    { key: "CRD_Parks", active: true, ...LegendGroups.NatureHood },
    { key: "Watersheds", active: false, ...LegendGroups.NatureHood },
    { key: "NatureHood_Animals", active: false, ...LegendGroups.NatureHood },
  ],
  tabs: [
    {
      name: "Notice",
      icon: <FaHighlighter style={tabIconStyle} />,
      title: questionData.title,
      subtitle: questionData.question,
      children: [
        <Text>This map is a guide to help connect you with amazing places and nearby nature. Here are some fun ideas to get you started on your journey!</Text>,
        (<ul style={{
          listStylePosition: 'outside',
          paddingInlineStart: '1.5rem',
        }}>
          <li>Go birdwatching (see map for prime locations),</li>
          <li>Paint, draw, sketch wildflowers in spring,</li>
          <li>Explore diverse intertidal life in summer,</li>
          <li>View spawning salmon in the fall,</li>
          <li>Volunteer with a local stewardship group,</li>
          <li>Look for plants and animals on the species list, and check off the ones you find.</li>
        </ul>),
        <Text>While you explore, this map will help put names to some of the life that you see. Look for the beautiful images, names, and interesting facts about these plants and animals.</Text>,
        <Text>If you are curious to learn more, take photos of your discoveries and use iNaturalist and eBird apps on your smartphone to confirm your sightings. You will create data for scientists working to better understand and protect nature.</Text>,
        <Text>Enjoy a journey to learn, love and discover more about nature.</Text>,
        (<Text>{"The Nature in the City Map was originally designed for print and a PDF version can be "}
          <Link isExternal href="https://www.gvnaturehood.com/greater-victoria-naturehood-map">
            found here
          </Link>.
        </Text>),
        <Text>Provided by Greater Victoria NatureHood.</Text>,
        (<ul style={{
          listStylePosition: 'outside',
          paddingInlineStart: '1.5rem',
        }}>
          <li>Leave no trace.</li>
          <li>Leave what you find.</li>
          <li>Respect wildlife.</li>
          <li>Be mindful of others.</li>
        </ul>),
      ]
    },
    {
      name: "Greater Victoria NatureHood",
      icon: <LuTrees style={tabIconStyle} />,
      children: [
        <Text {...h3}>About NatureHood</Text>,
        <Text>
          {"Nature Canada’s NatureHood Program is about connecting children and families to nature right where they live. It is a call to expose a new generation of nature lovers, naturalists and citizen scientists to nature all around them. To learn more about NatureHood visit "}
          <Link isExternal href="https://www.gvnaturehood.com">
            www.gvnaturehood.com
          </Link>
          {" or contact us at "}
          <Link isExternal href="mailto:info@gvnaturehood.com">
            info@gvnaturehood.com
          </Link>.
        </Text>,
        <Text {...h3}>Greater Victoria NatureHood</Text>,
        <Text>
          Being in nature promotes awareness of our natural world and increases
          mental and physical health, as well as overall wellbeing. The Greater
          Victoria NatureHood aims to inspire children – and adults – to
          appreciate nature and take action to protect local species and natural
          places.
        </Text>,
        <Text {...h3}>Connect with Nature</Text>,
        <Text>
          Connect with nature by taking time to simply go outdoors and explore
          the natural world around you. This can be as simple as going to your
          backyard or to a local park. You do not have to go far to explore
          nature. Make your city nature-friendly by working with your community
          to restore city parks, ravines, open spaces and other natural places
          for birds and native wildlife.
        </Text>,
        <Text {...h3}>Leave No Trace</Text>,
        <Text>
          When you visit the Greater Victoria NatureHood, be sure to dispose of
          your waste appropriately.
        </Text>,
        <Text {...h3}>Respect Wildlife</Text>,
        <Text>
          Feeding wildlife can lead to health impacts, alter natural behaviours,
          and increase exposure to predators and other dangers. Do not follow or
          approach wildlife but instead, observe from a distance. Avoid wildlife
          during sensitive times such as mating, nesting, raising their young.
          Pets may not be permitted at the places that you visit, please visit
          location websites prior to heading out with your family.
        </Text>,
        <Text {...h3}>Get Out Into the NatureHood</Text>,
        <Text>
          By using this map, you can connect with nature at nearby urban
          protected areas, like Esquimalt Lagoon Migratory Bird Sanctuary, Shoal
          Harbour Migratory Bird Sanctuary and, Victoria Harbour Migratory Bird
          Sanctuary, to name but just a few. We hope that your experience will
          inspire you to care for and protect our natural environment.
        </Text>,
        <Text {...h3}>Connecting Greater Victoria's NatureHoods</Text>,
        <Text>
          The Greater Victoria NatureHood is a partnership of grassroots
          naturalist organizations, not-for-profits and local governments, all
          sharing a strong commitment to protect nature in the Greater Victoria
          Region. It promotes nature awareness through education, stewardship
          activities and events, and wildlife observation, in our public green
          spaces.
        </Text>,
        <Text {...h3}>Resilient NatureHood</Text>,
        <Text>
          A NatureHood is any place where you connect with nature’s wonders –
          from observing a bee pollinate a flower in a planter box, to watching
          wild birds at a backyard feeder or local park, to witnessing the trees
          change with the passing of the seasons in your local forest. Look
          around and you will find nature everywhere throughout the Greater
          Victoria NatureHood.
        </Text>,
        <Text {...h3}>Respect the Wildlife Laws</Text>,
        <Text>
          The federal Migratory Birds Convention Act protects birds, their
          nests, and their eggs from harm or capture in Canada. Other provincial
          wildlife laws protect other species in the same way. Purchasing,
          keeping or trading a threatened species of wildlife from other
          countries is also illegal without a permit.
        </Text>,
        <Text {...h3}>Leave What You Find</Text>,
        <Text>
          To help preserve the past and present for the future, examine, but do
          not touch, cultural or historic artifacts and structures. Leave any
          rocks, plants and other natural objects as you find them and avoid
          introducing or transporting non-native species.
        </Text>,
        <Text {...h3}>Be Mindful of Others</Text>,
        <Text>
          Be courteous. One of the most important components of outdoor ethics
          is to be courteous to others, and follow local regulations. Many
          people visit the NatureHood specifically to listen to nature, so
          please maintain quiet and keep yourears open.
        </Text>,
        <Text {...h3}>Become a NatureHood Steward</Text>,
        <Text>
          Build community while connecting with nature. Protect the NatureHood
          by joining one of the many stewardship groups in Greater Victoria who
          volunteer in natural areas. Opportunities include:
        </Text>,
        <Text>• Removing invasive species</Text>,
        <Text>• Planting native plants and trees</Text>,
        <Text>• Improving stream quality</Text>,
        <Text>• Monitoring birds and wildlife</Text>,
        <Text>• Collecting litter, and more.</Text>,
        <Text>
          To find an opportunity that suits your interests, visit{" "}
          <Link isExternal href="https://www.gvnaturehood.com">
            www.gvnaturehood.com
          </Link>
        </Text>,
        <Text {...h3}>About the Cover Art</Text>,
        <Text>
          There are so many wonderful natural places to explore in the Greater
          Victoria NatureHood, which made it hard to choose just one to showcase
          on the cover. Artist Kristi Bridgeman came up with a fictional work
          that captures special elements from many of Victoria’s natural spaces,
          including the iconic Garry Oak habitat, which supports many species at
          risk. With less than 5% of the original Garry Oak habitat remaining in
          British Columbia, it was important to include this ecosystem as well
          as a variety of native flora and fauna including the Purple Martin,
          Bumblebee and camas flowers.
        </Text>,
        <Text {...h2}>Acknowledgements</Text>,
        <Text>
          We acknowledge with respect the territory of the SENĆOŦEN and lək̓ʷəŋən
          speaking peoples on whose traditional lands and waterways we live,
          work and play and whose deep relationship to place continues to this
          day. Greater Victoria NatureHood looks forward to building a future
          map that includes more First Nations knowledge, language and history
          to provide a more complete illustration of our region’s natural
          heritage.
        </Text>,
        <Image maxWidth='360px' src={require('../jpg/Acknowledgements.jpg')} />
      ],
    },
    {
      name: "Locals in the NatureHood",
      icon: <FaBinoculars style={tabIconStyle} />,
      //title: 'Locals in the NatureHood',
      subtitle: (
        <>
          Use this handy checklist to track the Locals you have seen in the
          NatureHood. Artwork by{" "}
          <Link isExternal href="https://www.kristibridgeman.com/">
            Kristi Bridgeman
          </Link>
          .
        </>
      ),
      //initiatives: questionData.act.initiatives,
      children: [
        <Text
          fontFamily="var(--chakra-fonts-inter)"
          fontWeight="500"
          fontSize="0.75rem"
        >
          <LuInfo style={{ display: "inline" }} /> Data is kept on your device,
          cannot be transfered to another device, and is never sent to the
          cloud, RUSH, or anyone.
        </Text>,
        <Box
          margin="0.25rem"
          padding="0.25rem"
          bgColor="#eef4d6"
          boxShadow="rgba(0, 0, 0, 0.1) 0 2px 4px;"
        >
          <Text
            fontFamily="var(--chakra-fonts-inter)"
            fontWeight="400"
            fontSize="0.875rem"
            fontStyle="italic"
          >
            NatureHood recognizes that language is critical for connecting the{" "}
            <span style={{ color: "#ffaa2d" }}>W̱SÁNEĆ</span> and{" "}
            <span style={{ color: "#0d3396" }}>lək̓ʷəŋən</span> speaking peoples
            to their culture, spirituality, identity and land.&emsp;
            <span style={{ color: "#ffaa2d", fontStyle: "normal" }}>
              ■&nbsp;SENĆOŦEN
            </span>
            &emsp;
            <span style={{ color: "#0d3396", fontStyle: "normal" }}>
              ■&nbsp;lək̓ʷəŋən
            </span>
          </Text>
        </Box>,
        <Flex wrap="wrap" gap="0.5rem" justifyContent="stretch">
          {locals.map((local) => (
            <ChecklistCard
              key={local.name}
              {...local}
              onCheckChange={onCheckChange(local.name)}
              defaultChecked={isCheckInStorage(local.name)}
            />
          ))}
        </Flex>,
      ],
    },
    {
      name: "Ecosystems & Biodiversity",
      icon: <LuLeaf style={tabIconStyle} />,
      children: [
        <Text>
          Greater Victoria is high in biodiversity, as shown by the great
          variety of plants, animals, and ecosystems that are found throughout
          the region. Biodiversity can be observed close to home, in backyard
          gardens, grassy parks, and street trees. Biodiversity is even higher
          in our region’s natural ecosystems, including:
        </Text>,
        <Text>• Coastal Douglas-fir forests</Text>,
        <Text>• Garry Oak meadows</Text>,
        <Text>• Wetlands</Text>,
        <Text>• Streams, rivers and riparian areas</Text>,
        <Text>• Rocky, pebble and sandy shorelines</Text>,
        <Text>• Eelgrass meadows and kelp forests</Text>,
        <Text {...h3}>Did you know?</Text>,
        <Text>
          • Vancouver Island is a biodiversity hotspot and is thought to have
          provided refuge to plants and animals during the last glaciation.
        </Text>,
        <Text>
          • Victoria sits in the Coastal Douglas-fir Biogeoclimatic zone – an
          area affected by factors like temperature, rainfall, moisture balance
          and altitude – which covers only 0.3% of the province but is home to
          the highest number of species and ecosystems at risk in BC.
        </Text>,
        <Text>
          • Some species like the Vancouver Island Water Shrew (found near
          Sooke) are endemic to Vancouver Island, meaning they are not found
          anywhere else.
        </Text>,
        <Text>
          As you visit different sites in the NatureHood, watch and listen for
          the incredible biodiversity that surrounds you.
        </Text>,
        <Text {...h2}>Waterways and Watersheds</Text>,
        <Text>
          We all live in a watershed, whether natural, urban or rural. A
          watershed is an area of land that drains precipitation and groundwater
          to a common point, such as a creek, wetland, lake or ocean. Healthy
          watersheds feature ample trees and abundant vegetation that help to
          slow, clean, and store water by allowing it to absorb into the
          landscape. Watersheds can be different sizes and scales, and small
          watersheds can be part of larger watersheds. Each watershed plays an
          important role in maintaining our water cycle while providing
          important habitat to local plants and animals. Do your part and learn
          how you can clean, protect and enhance the watersheds in your
          NatureHood.
        </Text>,
        <Text {...h2}>Riparian Zones</Text>,
        <Text>
          Riparian zones are important transition areas that connect the water
          with the land, and support a wide diversity of plant and animal life.
          Riparian zones may be found surrounding lakes, estuaries, streams and
          rivers. These critical buffer zones improve water quality, retain
          water during storm events, prevent erosion, and provide important
          habitat for fish and other species.
        </Text>,
        <Text {...h2}>Important Bird Areas</Text>,
        <Text>
          In our NatureHood there are three Important Bird & Biodiversity areas:
          Sidney Channel and Mandarte Island located next to Shoal Harbour MBS,
          and Chain Islets - Grand Chain Island located next to Victoria Harbour
          MBS. There are 84 IBAs in British Columbia. These IBAs are of
          exceptional international significance for the conservation of birds
          and biodiversity and are part of a global network first established in
          1985. In Canada, IBAs are a joint initiative of Nature Canada and
          Birds Canada.
        </Text>,
        <Text {...h3}>Gulls</Text>,
        <iframe
          title="Glaucous-winged Gull"
          src="https://macaulaylibrary.org/asset/213666391/embed"
          height="296"
          width="320"
          frameborder="0"
          allowfullscreen
        ></iframe>,
        <Text>
          There are 12 species of gulls known to regularly visit the NatureHood.
          Pictured here is the Glaucous-winged Gull; it is the only gull known
          to breed locally. Gulls are scavengers and are sometimes called the
          ‘vultures of the coast’ because they scrounge the coastline and will
          eat almost anything that washes up on the beach and shoreline.
        </Text>,
        <Text {...h3}>Black Brant</Text>,
        <iframe
          title="Black Brant"
          src="https://macaulaylibrary.org/asset/44467061/embed"
          height="296"
          width="320"
          frameborder="0"
          allowfullscreen
        ></iframe>,
        <Text>
          Found during spring migration, using their small bill, Brants feed on
          eelgrass and marine algae along the shore. Once a popular Christmas
          meal, their declining numbers, along with the decline of other birds,
          led to the establishment of NatureHood’s Migratory Bird Sanctuaries.
        </Text>,
        <Text {...h3}>Local Birds</Text>,
        <iframe
          title="Harlequin Duck"
          src="https://macaulaylibrary.org/asset/51436371/embed"
          height="296"
          width="320"
          frameborder="0"
          allowfullscreen
        ></iframe>,
        <iframe
          title="Black Oystercatcher"
          src="https://macaulaylibrary.org/asset/207044861/embed"
          height="296"
          width="320"
          frameborder="0"
          allowfullscreen
        ></iframe>,
        <iframe
          title="Rhinoceros Auklet"
          src="https://macaulaylibrary.org/asset/36490871/embed"
          height="296"
          width="320"
          frameborder="0"
          allowfullscreen
        ></iframe>,
        <iframe
          title="Marbled Murrelet"
          src="https://macaulaylibrary.org/asset/226683221/embed"
          height="296"
          width="320"
          frameborder="0"
          allowfullscreen
        ></iframe>,
      ],
    },
  ],
  ...questionData,
};
export default Question;
