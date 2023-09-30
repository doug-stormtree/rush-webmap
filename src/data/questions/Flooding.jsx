const Flooding = {
  key: 'protect-from-flooding',
  title: 'Protect from Flooding',
  question: 'It’s not that your pants are too short. Climate change is too big for our stormwater infrastructure and we need to right-size the situation.',
  image: require('../png/ProtectFromFlooding.png'),
  description_new: [
    {type: 'h2', content: 'You’ve got good flow if...'},
    {type: 'ul', content: [
      'Your watershed has lots of trees, plants and bushes to hold the banks during high flows and to keep the water cool for fish.',
      'Your watershed has a good variety of bugs and biodiversity, which is a sign of health.',
      'There are fish in the watershed and salmon return each year. These are markers ecosystem connectivity and signs of good oxygen content, temperature and swim-ability.',
      'You can follow its flow from source to sea. This means that your watershed is working by storing and filtering water, stabilizing banks, recharging the water table, and regulating the atmosphere.',
      'Your local stewardship group is collaborating with local governments and First Nations to take care of your watershed.',
      'There are multiple raingardens along the watershed to help prevent polluted road runoff from entering nearby streams.',
    ]},
    {type: 'h2', content: 'Get your gumboots ready if...'},
    {type: 'ul', content: [
      'Your region has a lot of pavement and compacted soils which prevent water absorption.  Pollutants and trash flow directly into streams and creeks where they poison plants, birds, fish, frogs, and bugs.',
      'The local stream looks more like a ditch connected by pipes, and water rushes through it quickly causing erosion.',
      'There is no stewardship group taking care of it.',
      'You don’t see any life in the watershed which means it’s ready for extreme water events.',
    ]},
    {type: 'spacer'},
    {type: 'h2', content: 'Make your move. Help Nature work to flow water where it is needed and absorb it where it is not.'},
    {type: 'ul', content: [
      'Peninsula Streams & Shorelines 1000 Raingardens Project is working with communities to install 1000 raingardens within the CRD. Use your open green map account to plot the raingardens you see around you so that we can get a sense of how resilient we might be.',
      'Join a stewardship group and support the health of your watershed.',
      'If you find water pooling in places around your home, install a raingarden for healthy drainage that will also replenish the natural underground water supply. Peninsula Streams & Shorelines 1000 Raingardens Project is working with communities to install 1000 raingardens within the CRD.',
      'Maintain your vehicle and to minimize pollutants entering the stormwater system.',
      'Avoid using pesticides as they can end up in the food web.',
      'Be responsible in your use of fertilizers. If you farm, keep manure piles away from creek and stream beds to avoid adding too many nutrients (nitrogen) to the watershed, decreasing oxygen levels and killing the creatures that would keep it healthy.',
      'Advocate for your watershed whenever urban planning opportunities arise. Lobby to daylight hidden creeks and streams.',
      'Encourage your municipality to install paving stones or permeable pavement together with green spaces that provide shade, and absorb and filter water. Reducing paved surfaces and soil compaction will make a big difference in the way water works in our community.',
    ]},
    {type: 'spacer'},
    {type: 'h2', content: 'Down the rabbit hole.'},
    {type: 'p', content: 'Our bodies and the surface of the planet are ~70% water. We depend on the water cycle to redistribute water around the planet so that we have enough to drink, clean and water the land.'},
    {type: 'p', content: 'Climate change is altering this natural flow.  Too much precipitation at one time leads to coastal flooding, backs up sewer systems, and floods urban communities.'},
    {type: 'p', content: 'In 2021, atmospheric rivers brought so much water to BC that the land could not absorb it fast enough. The intense flooding resulted in damages that cost over 1 billion dollars in federal disaster aid. Many communities were displaced and southern BC’s food production industry was devastated.'},
    {type: 'p', content: 'Proper stormwater management planning is a key part of the solution but, we need to ensure that our built infrastructure is working with the “natural infrastructure” that watersheds, wetlands, forests and coastal ecosystems provide. Copying Nature’s strategies for managing water is also known as designing nature-based solutions.'},
    {type: 'p', content: 'Rain gardens reduce the amount of toxins from entering creeks and oceans through the storm sewage system. They also replenish the natural underground water supply that seeps gradually into creeks to keep them flowing clean and cool even during summer dry spells. Rain gardens mimic nature’s own “timed-release” system for maintaining healthy water levels for salmon (not too much, not too little).'},
  ],
  act: {
    initiatives: [
      {
        title: "Rain Gardens Story Map",
        image: require('../png/RainGardenStoryMap.png'),
        link: "https://storymaps.arcgis.com/stories/bade971de06f4502af700ecb844f3fb5",
        description: "A rain garden is any landscaping that absorbs and filters rainwater runoff from a nearby impervious surface, which is any surface that does not allow water infiltration, such as a roof, driveway, parking lot or street. Learn more in this StoryMap created by UVic Community Mapping students Jared Leary, Aiden Foxcroft, Grace Long, and Olivia Graham."
      },
      {
        title: 'Peninsula Streams & Shorelines',
        noText: true,
        image: require('../png/PeninsulaStreams.png'),
        link: 'https://peninsulastreams.ca/',
        description: 'Peninsula Streams & Shorelines guides communities in organizing to restore and protect the watersheds and shorelines in this region. Their current upstream projects include working with communities and organizations to install rain gardens to manage excess water and mitigate toxic runoff risks to fish. Downstream focus projects include identifying and restoring forage fish beaches that are the foundation of the marine food web. If you want to be the change that tips the scales towards healthy waters, this is the place to skill up. From Headwaters to deep waters, PSS wants to hear your concerns and help your community take action.'
      },
      {
        title: 'Watersheds BC',
        image: require('../png/WatershedsBC.png'),
        link: 'https://watershedsbc.ca/',
        description: 'A dedicated resource hub to provide local leaders with knowledge, skills, and support to deliver effective watershed management and governance in their communities. Watersheds BC emerged in response to this need.'
      },
      {
        title: 'CRD Watersheds Map',
        image: require('../png/CRDWatershedMap.png'),
        link: 'https://www.crd.bc.ca/docs/default-source/es-watersheds-pdf/regional-watershed-maps/watershedscrdoverview400dpired.pdf?sfvrsn=5d837aca_2',
        description: 'A PDF Map of the watershed boundaries within the Capital Regional District. Warning: large file size.'
      },
      {
        title: 'The 1000 Rain Gardens Project',
        noText: true,
        image: require('../png/FriendsOfBowkerCreek.png'),
        link: 'https://bowkercreek.org/1000-rain-gardens/',
        description: 'The 1000 Rain Gardens Project: "Making Bowker Creek healthy again requires that people send much more rainwater into the earth and much less into the storm drains. Wherever we live, work or go to school in Bowker Creek\'s valley, the 1000 Rain Gardens Project aims to help us manage rainwater better. The project partners Friends of Bowker Creek Society with Peninsula Streams Society (PSS). The PSS initiative, the Rain Gardens in Headwaters Program, will multiply rain gardens throughout Greater Victoria, starting here in Bowker Creek\'s valley. The 1000 Rain Gardens project provides a vital first step and proving ground for the wider program."'
      },
      {
        title: 'Colquitz Storymap',
        link: 'https://storymaps.arcgis.com/stories/e884cb42946a46d1800e90a692eca278',
        description: '"The (ongoing) Colquitz River restoration project, launched by  Peninsula Streams  and the  District of Saanich  in 2019, aims to restore ecological integrity and resilience to this urban watershed system in what is now called Saanich, British Columbia, Canada." This story was developed in partnership with Peninsula Streams Society, Engage with Nature-Based Solutions, and UVic Community Mapping students Langley Chan, Olivia Gatrell, Zacc Lavigne, and Nabila Kazmi.',
        image: require('../png/Placeholder.png')
      },
    ],
  }
};
export default Flooding;