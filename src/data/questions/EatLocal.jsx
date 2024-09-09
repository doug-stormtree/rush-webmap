import {
  LegendGroups,
  InitiativeTags as Tag,
} from '../TextContent';

const Question = {
  key: 'eat-local',
  title: "Eat Local",
  question: "My corner store is charging $6.29 for potato chips! Can somebody call food security?",
  image: require('../png/EatLocal.png'),
  layers: [
    { key: 'AgriculturalLandReserve', active: true, ...LegendGroups.StartOn },
    { key: 'CulturalFoods', active: true, ...LegendGroups.OGM },
    { key: 'FoodSecurity', active: true, ...LegendGroups.StartOn },
    { key: 'Pollinators', active: true, ...LegendGroups.OGM },
    { key: 'ShellfishPO', active: false, ...LegendGroups.StartOff },
    { key: 'ForageFish', active: false, ...LegendGroups.StartOff },
  ],
  sections: {
    one: [
      {
        heading: 'Plenty of low-hanging fruit if...',
        items: [
          'you see Agricultural Land Reserves near you.',
          'you see pollinator gardens connecting green spaces providing vital uninterrupted habitat for the pollinators critical to local food production.',
          'you can easily buy directly from the folks who are growing your food at nearby farmer’s markets and farms with CSA or box programs.',
          'community garden plots provide space for you and your neighbours to grow your own.',
        ]
      },
      {
        heading: 'It\'s another can of beans if...',
        items: [
          'nearby stores and restaurants aren’t serving up a selection of locally-sourced and cultural foods.',
          'there aren’t any groups providing food banks and hampers to offer free local food to those in need.',
          'you can’t find a place to plant a little garden.',
          'finding healthy food means a road trip.',
        ]
      },
    ],
    two: {
      heading: 'Grow your food system; know your farmer.',
      items: [
        'Use your Open Green Map account to plot local food initiatives that are missing from the map.',
        'Eat foods that are grown in season. Follow Nature’s rhythm and keep local farmers in business all year round.',
        'Buy local food at grocery stores, through CSA box programs, and farmer’s markets to promote community self-reliance and food security in the region.',
        'Eat it fresh and enjoy every last crumb. 33% of overall food waste entering the Hartland Landfill is avoidable or donatable.',
        'Get your hands in the earth and your feet on the ground. Grow some food at home or in a community garden.',
        'Plant a pollinator garden and plot it on the RUSH Naturehood map.',
        'Don’t treat the soil like dirt. Compost in your backyard or through a collection service and contribute to the terroire of the region.',
        'Volunteer with a local food group and add your strength to the system.',
        'Find ways that your community can support policies and action for food security and that make cultural harvesting on land and water everything it should be',
      ]
    },
    three: {
      items: [
        'When we rely on food that comes from far away, we are supporting a shipping industry that puts large amounts of greenhouse gasses into the planet’s atmosphere and oceans. Of the food imported to Canada, fruits and vegetables incur the most food miles and result in emissions amounting to 3.3 million metric tonnes of CO2. Shipping traffic also disrupts marine life.',
        'The more we depend on imported food, the more vulnerable we become if the import system can’t deliver. In an emergency, our food supply chain can be compromised. This ratchets up the price of groceries or leaves the grocery shelves bare.',
        'Only 10% of food consumed in the CRD is produced here. With a growing population comes development pressures on agricultural land and green spaces. Although only 50% of ALR land is in production, more land in ALR means greater potential for local food production. A local food network means a healthier economy, more nutritious food, and a reduction in the greenhouse gasses associated with food import.',
        'Food waste is banned from the Hartland Landfill because when it rots it creates methane which is a very powerful greenhouse gas. Soil is key to regulating the atmosphere so the more we compost and plant native plants, the better our ecosystem can function. Feed the soil that feeds the foods that feed you. Check out the Victoria Compost Education Centre for resources on how to garden sustainably, without herbicides and pesticides.',
        'Make local food more affordable. The BC Alliance for Healthy Living Society found that one third of the BC population said that healthy food was not affordable. Farming is a difficult business with the price of land and access to tools and processing facilities. If we can strengthen the system, the market will improve. Growing cultural foods locally makes it easier to access them through food banks and community programs.',
        'Our efforts to divert food waste from the landfill are beginning to work due to composting services, people and programs. The payoff is an endless supply of local soil.',
        'Shellfish harvesting closures are the result of pollutants in the watershed. Fertilizers, pesticides and leaky septic tanks are the things we need to eliminate to fix this problem. When cultural harvesting is restored, it will be a sign of ecosystem health and food security',
        'Forage fish lay their eggs on fine sand beaches and are foundational to the food chain. Advocating for shoreline set backs will let Nature sculpt the beaches and refine the sand so that our seafood chain is well linked.',
      ]
    },
  },
  act: {
    initiatives: [
      {
        title: "Our Food Future",
        link: "https://biomimicryfrontiers.com/our-food-future",
        image: require('../png/OurFoodFuture.png'),
        description: 'Biomimicry reminds us that there is no waste out in nature, and to truly imitate nature, we must eliminate waste. Biomimicry Frontiers brings a biomimetic lens to the Our Food Future initiative.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Iyé Creative',
        link: 'https://www.iyeherstories.com/',
        image: require('../png/IyeCreative.png'),
        description: 'Iyé Creative is a food justice and grassroots collective nurturing reciprocal relations and mutual aid systems. Their work involves supporting the healthy and culturally informed food needs of disenfranchised communities, raising awareness of food accessibility, and uplifting racialized voices in food production and distribution.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Greater Victoria Cultural Food Community Map',
        link: 'https://storymaps.arcgis.com/stories/06ee241047d8455bbb02230f453f2edc',
        image: require('../png/GVCulturalFoodMap.png'),
        description: 'The Greater Victoria Cultural Food Community Map illustrates many ways in which food is a critical component of cultural well-being. The Map emphasizes that while Cultural foods help individuals maintain a sense of belonging and identity, there is a lack of culturally relevant foods being grown and sold at affordable prices in the Victoria and Saanich regions for IBPOC, refugees, and community members experiencing marginalization. The Map recommends allocating more resources towards the local production of culturally appropriate foods, as well as to cultural food events and other avenues to help folks navigate the local food scene.',
        tags: [
          Tag.StoryMap,
          Tag.Map,
        ],
      },
      {
        title: 'BC Farmers’ Market - Food coupons',
        link: 'https://bcfarmersmarket.org/coupon-program/where-it-operates/',
        image: require('../png/BCFarmersMarket.png'),
        description: 'The Farmers’ Market Nutrition Coupon Program is "a healthy eating initiative that supports farmers’ markets and strengthens food security across British Columbia." Community partner organizations provide coupons to lower-income families, pregnant people and seniors. These coupons can be spent at all participating member farmers’ markets. Households enrolled in the program may receive $27/week in coupons for up to 16 weeks. Get in touch with your local community partner (identified on the website) to access coupons. There is high demand and limited funding for this program across BC, and capacity will vary from partner to partner.',
        tags: [
          Tag.Initiative,
          Tag.Program,
        ],
      },
      {
        title: 'Cascadia Seaweed',
        link: 'https://www.cascadiaseaweed.com/about-us-4-0',
        image: require('../png/CascadiaSeaweed.png'),
        description: 'Cultivated kelp provides a nature-based solution to climate change and food security. Cascadia Seaweed cultivates local species of seaweed on low-impact ocean farms in partnership with coastal First Nations, harvests the seaweed, and manufactures products for land-based farmers. Cascadia operations use biological solutions to increase food production, mitigate climate change, improve ocean ecosystems, and advance Indigenous reconciliation.  Cascadia describes their operation as "sustainable aquaculture supporting regenerative agriculture — a circular system where every touch point makes a positive impact."',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Capital Region Food & Agriculture Initiatives Roundtable',
        link: 'http://www.crfair.ca/',
        image: require('../png/CRFAIR.png'),
        description: 'The Capital Region Food and Agricultural Initiatives Roundtable (CRFAIR) works to mobilize and connect efforts to develop healthy, equitable and sustainable food systems in the Capital Region. CRFAIR acts as a regional backbone organization, and offers a range of services to community organizations, government, and industry.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Cowichan Green Community',
        link: 'https://cowichangreencommunity.org/all-locations/',
        image: require('../png/CowichanGreen.png'),
        description: 'The Cowichan Green Communities local farm map features producers across Vancouver Island dedicated to adding value to their ecosystems and improving food security.',
        tags: [
          Tag.Map,
        ],
      },
      {
        title: 'Foodlands Trust Business Case - CRD',
        link: 'https://www.crd.bc.ca/docs/default-source/regional-planning-pdf/food-agriculture/foodlands-trust-business-case-february-2022.pdf',
        image: require('../png/CRDFoodlands.png'),
        description: 'This 2022 business case seeks to understand the challenges and opportunities related to a Foodland Trust Incubator Program in the CRD. The aim of Foodland Trust is to increase access to agricultural land and provide start-up support for aspiring farmers, as well as to contribute to local food security. There are only a handful of incubator programs in Canada, including two in the capital region - Haliburton Community Farm in Saanich and Sandown Centre in North Saanich. Moving forward, the CRD and its partners intend to engage with neighbouring First Nations in decision making of the Foodland Trust, and invite them to incorporate traditional and Indigenous food systems on the parcels.',
        tags: [
          Tag.Report,
        ],
      },
      {
        title: 'FED Urban Agriculture',
        link: 'https://www.get-fed.ca/my-fed-farm',
        image: require('../png/FEDUrbanAgriculture.png'),
        description: 'FED is a registered charity that partners with growers, restaurants, and others to transform the southern Van Isle cityscape into a vibrant foodscape. FED engages in advocacy and education as well as tackling the awesome dirty work of creating urban food gardens. FED projects include My FED Farm which provides free garden kits and support to vulnerable populations; the Urban Learning Garden in the courtyard of the downtown branch of the GVPL. Check out this site to find videos and resources to learn to grow your own food, as well as everything you need to know about starting a community garden.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Food Rescue Project',
        link: 'https://victoriafoundation.bc.ca/food-rescue-project/',
        image: require('../png/FoodRescueProject.png'),
        description: 'The Food Rescue Project recovers and redistributes fresh food to food insecure communities in the CRD.  Since March 2017, the project has been collecting over 2,000kg of fresh food daily and distributing it through a network of more than 50 organizations including non-profits, First Nations and public schools. The Food Rescue Project estimates that it nourishes about 35,000 people monthly with good food that otherwise would be destined for the landfill.',
        tags: [
          Tag.Initiative,
          Tag.Program,
        ],
      },
      {
        title: 'Vancouver Island\'s 100-Mile Diet',
        link: 'https://bcfarmsandfood.com/vancouver-island-farms-local-food-map/',
        image: require('../png/VanIsland100MileDiet.png'),
        description: 'BC Farms & Food created this interactive farm map to connect people with locally grown foods in 16 Vancouver Island regions. This map guides users to farm stands, u-picks, CSA farm box programs and farmers markets, and highlights farms that offer tours, workshops, wine tasting, earth-to-table restaurants, events and overnight farm stays.',
        tags: [
          Tag.Map,
        ],
      },
      {
        title: 'Community Food Hub',
        link: 'https://www.victoriacommunityfoodhub.com/',
        image: require('../png/CommunityFoodHub.png'),
        description: 'The Victoria Community Food Hub Society (VCFHS) works to strengthen the local food system, build community, and alleviate poverty and hunger by providing access to healthy food for all.',
        tags: [
          Tag.Organization,
        ],
      },
      {
        title: 'Sandown Centre for Regenerative Agriculture',
        link: 'https://www.sandowncentre.com/',
        image: 'https://static.wixstatic.com/media/0fd4be_5e90dfb6e65b42808d5f1deaa6d11c53~mv2.png/v1/fill/w_810,h_274,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Sandown%20Centre%20Logo%20-%20Horizontal.png',
        description: 'The Sandown Centre for Regenerative Agriculture operates 83 acres made up of farmland, forest, wetlands, meadows, and community gardens. Sandown serves as a demonstration site and works with farmers, researchers, and community members to develop best practices in regenerative agriculture.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'TOPSOIL',
        link: 'https://www.topsoileatlocal.com/',
        image: require('../png/TOPSOIL.png'),
        description: 'TOPSOIL is a great example of innovative urban agriculture. TOPSOIL transforms unused urban spaces – like rooftops, or vacant blocks awaiting development – into productive and profitable agricultural growing areas to support a sustainable, hyper-local food economy. TOPSOIL uses "innovative, light-footprint gardening technology" like geotextile planter containers to grow a variety of fruit, veggies, salad greens and herbs right in the heart of Victoria. The harvest is sold direct to restaurants and the local community.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Farm to Table Restaurants',
        link: 'https://www.tourismvictoria.com/blog/harvest-table-greater-victoria',
        image: 'https://www.tourismvictoria.com/_next/image?url=https%3A%2F%2Fadmin.tourismvictoria.com%2Fcontent%2Fuploads%2F2024%2F03%2F2024_DGV_Vacation_Guide_cover_web.jpg&w=768&q=75',
        description: 'Big thanks to Tourism Victoria for pulling together this list of restaurants around Greater Victoria that bring a flourishing farm-to-table scene to our region by featuring incredible seasonal offerings grown nearby.',
        tags: [
          Tag.Portal,
        ],
      },
      {
        title: 'Metchosin Farm',
        link: 'https://metchosinfarm.ca/',
        image: 'https://metchosinfarm.ca/cdn/shop/files/MF-Seed-The-Change-Banner-websize.png?v=1718832221&width=300',
        description: 'In the face of a global decline in the diversity of seeds available to farmers and gardeners, Metchosin Farm is dedicated to providing growers with Locally Grown, Adapted, and Open Pollinated seeds. The growers at Metchosin Farm steward heirloom seeds and also create new food plants using traditional plant breeding and selecting methods. Many Metchosin Farm seeds are available online, but why not visit the farm, and buy them directly from the inspiring people who grow them? Metchosin Farm stand is open dawn to dusk 7 days a week, all year round, and well stocked with a full range of products available in season.  Ask about their cool potato project and register for on-farm tours and workshops.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Young Agrarians Foundation',
        link: 'https://youngagrarians.org/about/',
        image: require('../png/YoungAgrarians.jpg'),
        description: 'Young Agrarians is digging in and turning new ground to grow the next generation of ecological farmers in Canada. YA is a volunteer-driven farmer-to-farmer educational resource network made up of a diverse array of food growers and lovers including farmers, fishers, holistic managers, market gardeners, ranchers, seed savers, food activists, bee keepers, community gardeners, and food and farm organizations. With farmers across the country, YA organizes on-farm events to build community and share knowledge with new and young ecological, organic and regenerative farmers. In 2021 only 8.6% of Canadian farmers were under the age of 35, and the farming population reached a historic low in 2021. YA knows that in order to make sustainable food systems a reality, regenerating farmers will be as important as regenerating the land.',
        tags: [
          Tag.Organization,
        ],
      },
      {
        title: 'CLIMAVORE',
        link: 'https://www.climavore.org/',
        image: require('../png/Climavore.png'),
        description: 'CLIMAVORE, a term coined in 2015, is a call to shift to a climate-responsive food system that can grow food while cultivating habitats. Becoming CLIMAVORE advocates for changing farming practices as well as the culture of eating. To become CLIMAVORE is to move beyond a carnivore, omnivore, locavore, vegetarian or vegan diet, and embrace a way of eating that tackles new seasonalities associated with the climate emergency, while addressing the extractive and intensive practices that lead to them. This has to happen not only in people’s kitchens, but also in collective eating spaces where infrastructural change can take place. Becoming CLIMAVORE is now a global network of food trucks, pizzerias, bakeries, ice cream parlours, Michelin-starred establishments, school canteens, collective kitchens, and other feeding spaces that are transitioning from becoming places that work primarily to nourish and restore human body, to places that also venture to care for the planet’s ecology.  They do this by creatively adapting their food offerings to the climate crisis. The transition starts with the removal of farmed salmon and other intensively farmed ingredients from the menu, replacing them with others that positively contribute to ebuilding habitats and restoring the planet. If you are interested in Becoming CLIMAVORE, get in touch!',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Closing the Supply Gap',
        link: 'https://www.closingthesupplygap.com/',
        image: 'https://static.wixstatic.com/media/287ffd_9b0848aa2f0f49f0a37ec467ce6c279a~mv2.png/v1/crop/x_0,y_164,w_500,h_148/fill/w_308,h_91,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/CSG%20LOGOS%20(18).png',
        description: 'Closing the Supply Gap is a collaboration of local food producers, businesses and hubs that aims to create a strong food supply chain in the Capital Region. Its work addresses gaps in local food infrastructure, investment, and processing and distribution networks. Check out this website to explore a super helpful Short Local Food Supply Chain graphic model, and another model to help pinpoint where you are on that chain.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Urban Food Resilience Initiatives Society',
        link: 'https://urbanfoodresilience.ca/',
        image: 'https://urbanfoodresilience.ca/wp-content/uploads/2024/01/UFRIS-LOGOwordmark-300px.jpg',
        description: 'Urban Food Resilience is a new initiative launched by three leadership-minded folks from the west shore to guide the growing, harvesting & sharing of food in local urban spaces. This non-profit collaborates with other groups and engages with all levels of government. Its projects include public education about local food growing, as well as the development of urban food gardens, improvement of regional soils, municipal infrastructure and emergency preparedness. Volunteer support for its projects is most welcome!',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'The Soil Guy',
        link: 'https://www.instagram.com/the.soil.guy/',
        image: require('../png/TheSoilGuy.jpg'),
        description: 'Kane is The Soil Guy! Landscaper, enthusiastic gardener and farmer, trained Soil Lab Technician, and expert on harnessing the power of soil microbiota to transform the health of your soil and plants, Kane is stoked to bring non-toxic, all-natural solutions to farmers, gardeners, and home-owners. The Soil Guy’s services include Regenerative Landscaping, Premium Compost, Soil Microbial Analysis, and Biological Fertilizer application packages. The Soil Guy wants everyone to know: "when you work in harmony with nature, you don’t have to sacrifice yields or aesthetics!"',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
    ],
  }
};
export default Question;