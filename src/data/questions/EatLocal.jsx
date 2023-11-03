const EatLocal = {
  key: 'eat-local',
  title: "Eat Local?",
  question: "Find your flow from farm-to-fork-to-fertilizer. Chowing locally-grown means a lighter footprint and flippin’ food security.",
  image: require('../png/EatLocal.png'),
  description_new: [
    {type: 'h2', content: 'Plenty of low-hanging fruit if...'},
    {type: 'ul', content: [
      'you see ALR lands near you.',
      'there are farmer’s markets and farms with CSA/box programs nearby so that you can buy directly from the folks who are growing your food.',
      'you have access to a community garden plot for you and your neighbours to grow your own food and flowers.',
      'groups are providing food banks and hampers to serve up free local food to those in need.',
      'there are stores and restaurants offering a selection of locally-sourced and cultural foods.',
      'you see greenways near agricultural spaces. These greenways become uninterrupted habitat for pollinators that are critical to local food production.',
    ]},
    {type: 'h2', content: 'It’s another can of beans if...'},
    {type: 'ul', content: [
      'you don’t see any ALR lands near you.',
      'you don’t see an easy way to buy direct from farmers.',
      'there are no community garden plots for you to grow your own food.',
      'your local stores and restaurants don’t support local farmers or have cultural food sections.',
      'there aren’t connected greenways next to ALR lands.',
    ]},
    {type: 'spacer'},
    {type: 'h2', content: 'Make your move. Grow your food system; know your farmer.'},
    {type: 'ul', content: [
      'Use your open green map account to plot local food initiatives that are missing from the map.',
      'Buy local food at grocery stores, through CSA box programs, and farmer’s markets, to promote community self-reliance and food security in the region.',
      'Eat foods that are grown in season. Follow Nature’s rhythm and keep local farmers in business all year round.',
      'Eat it fresh and enjoy every last crumb.  33% of food waste overall entering the Hartland Landfill is avoidable or donatable.',
      'Make it super accessible and affordable by growing your own food at home or in a community garden. Check out the Victoria Compost Education Centre for resources on how to garden sustainably, without herbicides and pesticides.',
      'Plant a pollinator garden and plot it on the RUSH Naturehood map.',
      'Compost in your backyard or through a collection service. Food waste is banned from the Hartland Landfill because when it rots it creates methane which is a very powerful greenhouse gas. Feed the soil that feeds the foods that feed you.',
      'Get your hands in the earth and your feet on the ground. Volunteer with a local food group and add your strength to the system.',
    ]},
    {type: 'spacer'},
    {type: 'h2', content: 'Down the rabbit hole.'},
    {type: 'p', content: 'When we rely on food that comes from far away, we are supporting a shipping industry that puts large amounts of greenhouse gasses into the planet’s atmosphere and oceans. Of the food imported to Canada, fruits and vegetables incur the most food miles and result in emissions amounting to 3.3 million metric tonnes of CO2.  Shipping traffic also disrupts marine life.'},
    {type: 'p', content: 'The more we depend on imported food, the more vulnerable we become if the import system can’t deliver.  In an emergency, our food supply chain can be compromised.  This ratchets up the price of groceries or leaves the grocery shelves bare.'},
    {type: 'p', content: 'Only 10% of food consumed in the CRD is produced here. With a growing population comes development pressures on agricultural land and green spaces. Although only 50% of ALR land is in production, more land in ALR means greater potential for local food production. A local food network means a healthier economy, more nutritious food, and a reduction in the greenhouse gasses associated with food import.'},
    {type: 'p', content: 'Make local food more affordable.  The BC Alliance for Healthy Living Society found that one third of the BC population said that healthy food was not affordable. Farming is a difficult business with the price of land and access to tools and processing facilities. If we can strengthen the system, the market will improve. Growing cultural foods locally makes it easier to access them through food banks and community programs.'},
    {type: 'p', content: 'Our efforts to divert food waste from the landfill are beginning to work due to composting services, people and programs.  The payoff is an endless supply of local soil.'},
  ],
  act: {
    initiatives: [
      {
        title: "Our Food Future",
        image: require('../png/OurFoodFuture.png'),
        link: "https://biomimicryfrontiers.com/our-food-future",
        description: 'Biomimicry reminds us that there is no waste out in nature, and to truly imitate nature, we must eliminate waste. Biomimicry Frontiers brings a biomimetic lens to the Our Food Future initiative.'
      },
      {
        title: 'Iyé Creative',
        image: require('../png/IyeCreative.png'),
        link: 'https://www.iyeherstories.com/',
        description: 'Iyé Creative is a food justice and grassroots collective nurturing reciprocal relations and mutual aid systems. Their work involves supporting the healthy and culturally informed food needs of disenfranchised communities, raising awareness of food accessibility, and uplifting racialized voices in food production and distribution.'
      },
      {
        title: 'Greater Victoria Cultural Food Community Map',
        image: require('../png/Placeholder.png'),
        link: 'https://storymaps.arcgis.com/stories/06ee241047d8455bbb02230f453f2edc',
        description: 'The Greater Victoria Cultural Food Community Map illustrates many ways in which food is a critical component of cultural well-being. The Map emphasizes that while Cultural foods help individuals maintain a sense of belonging and identity, there is a lack of culturally relevant foods being grown and sold at affordable prices in the Victoria and Saanich regions for IBPOC, refugees, and community members experiencing marginalization. The Map recommends allocating more resources towards the local production of culturally appropriate foods, as well as to cultural food events and other avenues to help folks navigate the local food scene.'
      },
      {
        title: 'BC Farmers’ Market - Food coupons',
        image: require('../png/BCFarmersMarket.png'),
        link: 'https://bcfarmersmarket.org/coupon-program/where-it-operates/',
        description: 'The Farmers’ Market Nutrition Coupon Program is "a healthy eating initiative that supports farmers’ markets and strengthens food security across British Columbia." Community partner organizations provide coupons to lower-income families, pregnant people and seniors. These coupons can be spent at all participating member farmers’ markets. Households enrolled in the program may receive $27/week in coupons for up to 16 weeks. Get in touch with your local community partner (identified on the website) to access coupons. There is high demand and limited funding for this program across BC, and capacity will vary from partner to partner.'
      },
      {
        title: 'Cascadia Seaweed',
        image: require('../png/CascadiaSeaweed.png'),
        link: 'https://www.cascadiaseaweed.com/about-us-4-0',
        description: 'Cultivated kelp provides a nature-based solution to climate change and food security. Cascadia Seaweed cultivates local species of seaweed on low-impact ocean farms in partnership with coastal First Nations, harvests the seaweed, and manufactures products for land-based farmers. Cascadia operations use biological solutions to increase food production, mitigate climate change, improve ocean ecosystems, and advance Indigenous reconciliation.  Cascadia describes their operation as "sustainable aquaculture supporting regenerative agriculture — a circular system where every touch point makes a positive impact."'
      },
      {
        title: 'Capital Region Food & Agriculture Initiatives Roundtable',
        image: require('../png/CRFAIR.png'),
        link: 'http://www.crfair.ca/',
        description: 'The Capital Region Food and Agricultural Initiatives Roundtable (CRFAIR) works to mobilize and connect efforts to develop healthy, equitable and sustainable food systems in the Capital Region. CRFAIR acts as a regional backbone organization, and offers a range of services to community organizations, government, and industry.'
      },
      {
        title: 'Cowichan Green Community',
        image: require('../png/CowichanGreen.png'),
        link: 'https://cowichangreencommunity.org/all-locations/',
        description: 'The Cowichan Green Communities local farm map features producers across Vancouver Island dedicated to adding value to their ecosystems and improving food security.'
      },
    ],
  }
};
export default EatLocal;