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
      'you have access to a community garden plot so you and your neighbours to grow your own food and flowers.',
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
      'Plant and plot a pollinator garden on the RUSH Naturehood map.',
      'Compost in your backyard or through a collection service. Food waste is banned from the Hartland Landfill because when it rots it creates methane gas which is a very powerful greenhouse gas. Feed the soil that feeds the foods that feed you.',
      'Get your hands in the earth and your feet on the ground. Volunteer with a local food group and add your strength to the system.',
    ]},
    {type: 'spacer'},
    {type: 'h2', content: 'Down the rabbit hole.'},
    {type: 'p', content: 'When we rely on food that comes from far away, we are supporting a shipping industry that puts large amounts of greenhouse gasses into the planet’s atmosphere and oceans. Of the food imported to Canada, fruits and vegetables incur the most food miles and result in emissions amounting to 3.3 million metric tonnes of CO2.  Shipping traffic also disrupts marine life.'},
    {type: 'p', content: 'The more we depend on imported food, the more vulnerable we become if the import system can’t deliver.  In an emergency, our food supply chain can be compromised.  This ratchets up the price of groceries or leaves the grocery shelves bare.'},
    {type: 'p', content: 'Only 10% of food consumed in the CRD is produced here. With a growing population come development pressures on agricultural land and green spaces. Although only 50% of ALR land is in production, more land in ALR means greater potential for local food production. A local food network means a healthier economy, more nutritious food, and a reduction in the greenhouse gasses associated with food import.'},
    {type: 'p', content: 'Make local food more affordable.  The BC Alliance for Healthy Living Society found that one third of the BC population said that healthy food was not affordable. Farming is a difficult business with the price of land and access to tools and processing facilities. If we can strengthen the system, the market will improve. Growing cultural foods locally makes it easier to access them through food banks and community programs.'},
    {type: 'p', content: 'Our efforts to divert food waste from the landfill are beginning to work due to composting services, people and programs.  The payoff is an endless supply of local soil.'},
  ],
  act: {
    initiatives: [
      {
        title: "Our Food Future",
        image: require('../png/OurFoodFuture.png'),
        link: "https://biomimicryfrontiers.com/our-food-future",
        description: "Biomimicry reminds us that there is no waste out in nature, and to truly imitate nature, we must eliminate waste. Biomimicry Frontiers was brought into the Our Food Future initiative to frame the project from a biomimetic lens and to use the opportunity to build circular businesses, while simultaneously providing advisory services."
      },
      {
        title: 'Iyé Creative',
        image: require('../png/IyeCreative.png'),
        link: 'https://www.iyeherstories.com/',
        description: 'Iyé Creative is a food justice and grassroots collective nurturing reciprocal relations and mutual aid systems. Their work involves supporting the healthy and culturally informed food needs of disenfranchised communities, raising awareness of food accessibility, and uplifting racialized voices in food production and distribution.'
      },
    ],
  }
};
export default EatLocal;