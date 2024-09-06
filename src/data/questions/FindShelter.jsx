import {
  LegendGroups,
  InitiativeTags as Tag,
} from '../TextContent';

const Question = {
  key: 'find-shelter',
  title: "Find Shelter",
  question: "Shelter is ... a human right. How do we get it right in light of climate change?",
  image: require('../png/Shelter.png'),
  layers: [
    { key: 'CRD_Parks', active: true, ...LegendGroups.StartOn },
  ],
  sections: {
    one: [
      {
        heading: 'Dream home found if...',
        items: [
          'Think: The 15 minute city! You walk, roll or catch a ride easily to class, work, the skate park, to play pool or swim at the gym, eat good food at the park until dark cause you’re safe and close to home.',
          'your urban ecosystem is a network of greenways and blueways and accessible wide-walks that connect parks and places to hang out. You hear birds and the buzzing of a healthy habitat everywhere you go.',
          'you know that you belong. Shelter should be locally relevant and culturally restorative.',
          'buildings are being renovated and converted for affordable, densified, co-operative and multigenerational housing options. Even tiny home villages.',
        ]
      },
      {
        heading: 'Paradise lost if...',
        items: [
          'you are paying more than 30% of your monthly income. All the houses around you are only suited for single families.',
          'a large number of homes in your neighbourhood are empty.',
          'you want to go out on the town but it’s too far to bike, the buses don’t stop, and it’s not safe to sleep in your car.',
          'there are no safe spaces for houseless people to live in your community.',
          'you don’t see trees or hear the sounds of Nature.',
        ]
      },
    ],
    two: {
      heading: 'Build a solid foundation, take a stand, shelter all.',
      items: [
        'Get involved today! Advocate for "climate-smart" affordable housing that takes in the big picture. Make sure the plan includes public housing, 30%+ canopy cover, refreshes the watershed, makes room for all, and is a great place to hang out and listen to the birds.',
        'Know your local. Support local businesses and drive the circular economy.',
        'Locate community services so you can help someone find comfort and a good place to crash.',
        'Support local governments to update Official Community Plans (OCP), local bylaws and zoning so that affordable housing is truly sustainable development that protects and connects communities.',
        'Tap into the wisdom of the crowd by including all voices in re-imagining community health and wealth.',
      ]
    },
    three: {
      items: [
        'Shelter is far more than a roof over your head. Shelter, when done right, should provide protection, security, dignity, regional environmental sustainability and secure a place for everyone in the community to go, and where they feel like they belong. Incorporating essential spaces like free community recreation centers, accessible local parks or beaches, and integrated affordable housing within urban areas is vital for ensuring that our expanding communities prioritize the development of sustainable living environments and sheltered communities.',
        'Living in the housing crisis means individuals and families are facing home insecurity, or that they are putting 30% of their income or more into housing costs. It is imperative that as a community, we work towards making housing more accessible for all people. Governments and local municipalities have options and continuing to expand and build housing on the outskirts of town isn’t the answer. Urban sprawl leads to deforestation and loss of precious habitats for plant and animal species.',
        'Fortunately, many options exist that can make this goal a lived reality. For example, cooperative housing provides every-day citizens the opportunity to “buy into” the building they rent in as a member of the non-profit association. This model of housing provides affordability against the market and, when built with nature/ green spaces in mind, can positively impact co-op members’ lives, directly supporting happiness, community building, housing security and neighbourhood safety.',
        'Continuing to work towards sustainable, affordable housing requires that there is a shift towards high density housing, such as apartment buildings. A shift towards densification means that more people will have closer proximity to city cores, meaning more access to essential services such as transit. A new model called CO-HAB developed by Intelligent City renovates empty office buildings to accommodate the younger generations with units ranging from $50-60K. A series of small locked bedrooms with shared common spaces services, younger generations can be closer to work and the downtown scene. Former Victoria Mayor Lisa Helps put out the call at the 2024 Rising Economy Conference to find 500,000 square feet of vacant office space.',
        'Every development should be an opportunity to become more resilient to climate change and track towards long term health outcomes for the community. Municipalities know the value of working with community groups to restore watersheds.  Development proposals are a huge opportunity to protect from climate related natural disasters like heatwaves, earthquakes, floods and fires. By following the lay of the land and restoring the forest, wetland, watershed or coast we increase greenhouse gas drawdown, food security and biodiversity. By connecting greenspaces and watersheds we can manage temperature, water, wind speed while creating nice pathways for people to be self propelled by walking, biking or rolling.',
        'Talk to your friends and neighbors about solutions in your neighborhood, whether this means bike lanes, a community center, or calling your local government to talk about how your neighborhood can be a sustainable shelter for everyone!',
      ]
    },
  },
  act: {
    initiatives: [
      {
        title: 'Making Room: A Transitional Tiny Home Community',
        link: 'https://storymaps.arcgis.com/stories/14aeb7c901e04cc59272745e7a538994',
        image: require('../png/MakingRoom.png'),
        description: 'This story map is a hub of resources, information and narrative that builds awareness about the plight of houselessness generally, as it also tells of the specific response to houselessness in the North Park Community of Victoria: a Transitional Tiny Home Village made of re-purposed shipping containers.',
        tags: [
          Tag.StoryMap,
        ],
      },
      {
        title: 'Innovating the Future of Housing',
        link: 'https://www.youtube.com/watch?v=HLU0UOt9RoA&t=387s',
        image: 'https://i.ytimg.com/vi/HLU0UOt9RoA/maxresdefault.jpg',
        description: 'The Rising Economy Conference 2024 hosted this fascinating fireside talk explores how innovation can solve some of our biggest urban housing challenges, infusing the way we build with imagination and innovation to counter environmental damage, soaring costs, long construction timelines, and labour and material shortages.',
        tags: [
          Tag.Video,
        ],
      },
      {
        title: 'CRD Housing Needs Assessment',
        link: 'https://www.victoria.ca/media/file/crd-housing-needs-reportvictoria2020pdf',
        image: 'https://www.victoria.ca/sites/default/files/Victoria%20Logo_0.png',
        description: 'This 2020 profile summarizes the findings of the City of Victoria Housing Needs Report which was completed as part of a joint Housing Needs Report project for 11 CRD communities.  It offers detailed Stats Can data on community and housing profiles, and summarizes key areas of local need, challenges and opportunities with regard to housing in Victoria. including an estimate of the number and size of housing units required to address existing demand and future growth over the next five years.',
        tags: [
          Tag.Report,
          Tag.Government,
        ],
      },
      {
        title: 'City of Victoria Housing Strategy Annual Review 2022',
        link: 'https://www.victoria.ca/media/file/housing-strategy-annual-review',
        image: 'https://www.victoria.ca/sites/default/files/Victoria%20Logo_0.png',
        description: 'This report provides an in-depth summary of the annual as well as cumulative progress made to achieve the goals of the Victoria Housing Strategy. It describes the state of Housing in Victoria in 2022, and details the City’s ongoing efforts to track and improve the supply and diversity of both affordable and market housing.',
        tags: [
          Tag.Report,
          Tag.Government,
        ],
      },
      {
        title: 'Numbeo Cost of Living Comparison',
        link: 'https://www.numbeo.com/cost-of-living/in/Victoria',
        image: 'https://www.numbeo.com/images/numbeo_1B3B6F.svg',
        description: 'This site offers a cool summary and comparison of cost of living, property prices, and quality of life for cities across the globe. In a quick search you can see how Victoria compares on these counts to Saanich, Duncan as well as to cities much further abroad. Fun Fact from Numbeo stats: Victoria has the 11th Most Expensive Potato in the world (out of 404 cities compared).',
        tags: [
          Tag.Portal,
        ],
      },
      {
        title: 'CRHC Current Developments',
        link: 'https://www.crd.bc.ca/crhc/current-developments',
        image: 'https://www.crd.bc.ca/images/default-source/housing/logos/crhc_logo_2021.png',
        description: 'Capital Region Housing Corporation (CRHC) is working to increase affordable housing opportunities for individuals and families in the CRD.  This site allows users to view available rentals in CRHC\'s newest buildings, and offers a summary of more developments planned and in progress.',
        tags: [
          Tag.Portal,
        ],
      },
      {
        title: 'CRHC Information about Properties',
        link: 'https://www.crd.bc.ca/crhc/applying-for-housing/information-about-properties',
        image: 'https://www.crd.bc.ca/images/default-source/housing/logos/crhc_logo_2021.png',
        description: 'Part of the Capital Region Housing Corporation\'s (CRHC) mission is to develop and manage affordable housing for low income households within the CRD. This CRHC site lists and maps affordable and subsidized housing in the region.',
        tags: [
          Tag.Portal,
        ],
      },
      {
        title: 'Building Benchmark BC',
        link: 'https://buildingbenchmarkbc.ca/#results',
        image: 'https://buildingbenchmarkbc.ca/assets/img/logo.svg',
        description: 'Building Benchmark BC is a voluntary energy benchmarking and disclosure program led by a growing collection of local governments with shared interest in climate change mitigation in the built environment, as well as understanding the role of building energy benchmarking and disclosure within a larger suite of climate regulations, policies, and incentives. By participating in voluntary benchmarking and disclosure, property owners can ensure that their voices are heard in the industry shift towards increased building performance. Owners can also learn more about how their building(s) are stacking up against provincial building stock in BBBC Annual Reports.',
        tags: [
          Tag.Initiative,
        ],
      },
      {
        title: 'Nationally, Renters report lower quality of life than Homeowners',
        link: 'https://www150.statcan.gc.ca/n1/en/daily-quotidien/240219/dq240219b-eng.pdf?st=yLgcSOUR',
        image: require('../png/GovCan.png'),
        description: 'This Stats Can Report released in February, 2024, reveals that nationally, in 2021 and 2022, people living in rental housing report lower quality of life across several dimensions of well-being compared with those living in a home owned by someone in the household. When compared with homeowners, renters were over 15 percentage points more likely to report difficulty meeting financial needs, and over 11 percentage points less likely to report high overall life satisfaction. Tenants were also less likely to report a strong sense of belonging to their community and were more likely to report feelings of loneliness.',
        tags: [
          Tag.Report,
          Tag.Government,
        ],
      },
      {
        title: 'StreetMessenger: Shelter Map',
        link: 'https://shelters.bc211.ca/map',
        image: 'https://shelters.bc211.ca/assets/sms-logo-final2-c120e0b7abb88a6d507e9f4646e28cbdd6c23f2a981f72e3904fdcb78b0f4bfa.png',
        description: 'This Shelter Map of Victoria and the Lower Mainland pinpoints Shelters, categorizes them, and indicates whether each Shelter is pet-friendly, takes large items, and is wheelchair accessible. Shelters with confidential addresses are not shown on the map.',
        tags: [
          Tag.Map,
        ],
      },
      {
        title: 'City of Victoria Census',
        link: 'https://opendata.victoria.ca/datasets/b02a6f0d96f0471bb6aff8ea8404386a/explore',
        image: 'https://www.victoria.ca/sites/default/files/Victoria%20Logo_0.png',
        description: 'This 2016 Short Form Census (100% Sample) gives data on different types of housing units by neighbourhood in the City of Victoria.  Data were adapted from the 2016 National Household Survey (short form census questionnaire).',
        tags: [
          Tag.Report,
          Tag.Government,
        ],
      },
      {
        title: 'Development of Folkets Park, Copenhagen',
        link: 'https://www.youtube.com/watch?v=1zQqgvGcK0E',
        image: 'https://i.ytimg.com/vi/1zQqgvGcK0E/maxresdefault.jpg',
        description: 'This video documents Copenhagen\'s new inclusive approach to planning and design. It is a talk by Kenneth A. Balfelt, about how in-depth interviews and dialogue meetings with park users helped to generate a new working model for a troubled park.',
        tags: [
          Tag.Video,
        ],
      },
    ],
  },
};
export default Question;