const Shelter = {
    key: 'shelter',
    title: "Seeking Shelter",
    question: "Shelter is your home, a park, your friends, an escape from sprawl, accessible, affordable and safe. What is shelter to you, and how can we make sure that nobody is left out in the cold?",
    image: require('../png/Placeholder.png'),
    description_new: [
      {type: 'h2', content: 'Fortress found if...'},
      {type: 'ul', content: [
        'Your neighbourhood includes co-operative housing options, affordable housing, and housing densification projects, including infilling of single family homes into medium sized apartments, condos, tiny home villages, etc.',
        'You have access to green spaces close to where you live.',
        'Your home is within walking distance to public transit, nutritious food options, local parks and recreation sites. Think: The 15 minute city!',
        'There are spaces for native flora and fauna in your community — shelter should be locally relevant and culturally restorative.',
        'Your neighborhood includes inclusive design such as wide-sidewalks that are wheelchair accessible.',
        'You have a library or community center near you that shares resources regarding housing.',
    ]},
      {type: 'h2', content: 'Shelter shattered if...'},
      {type: 'ul', content: [
        'If you are paying more than 30% of your monthly income.',
        'A large number of homes in your neighborhood are empty.',
        'There are no bike lanes or public transit to be found.',
        'All the houses around you are only suited for single families.',
        'There are no spaces for houseless people to exist in your community.',
      ]},
      {type: 'spacer'},
      {type: 'h2', content: 'Make your move. Build a solid foundation, take a stand, shelter all.'},
      {type: 'ul', content: [
        'Get involved! Email your local government representative about the affordability crisis.',
        'Advocate for cooperative housing to be a focus of government housing funding instead of simply handing over contracts to big developers!',
        'Push local representatives to increase education around: housing, finances, places to find temporary housing and family housing.',
        'Advocate for more public housing investments to take these decisions out of the hands of private investors',
        'Support moves that address stagnant zoning laws in order to allow denser housing to be built faster and within existing communities.',
        'Tell your friends and neighbors about Y.I.M.B.Y (YES in my backyard!) — N.I.M.B.Y out, Y.I.M.B.Y in!',
        'Advocate for more relaxed regulations - prohibitive policies require enabling voices.',
      ]},
      {type: 'spacer'},
      {type: 'h2', content: 'Down the rabbit hole.'},
      {type: 'p', content: 'Shelter is far more than a roof over your head. Shelter, when done right, should provide  protection, security, dignity, regional environmental sustainability and secure a place for everyone in the community to go, and where they feel like they belong. Incorporating essential spaces like free community recreation centers, accessible local parks or beaches, and integrated affordable housing within urban areas is vital for ensuring that our expanding communities prioritize the development of sustainable living environments and sheltered communities.'},
      {type: 'p', content: 'Finding and fostering these fortresses is essential as we all try to navigate the housing crisis, asking governments, developers and citizens alike to build up with connectivity, densification, affordability and community connection in mind! Fortunately, many options exist that can make this goal a lived reality. For example, cooperative housing provides every-day citizens the opportunity to “buy into” the building they rent in as a member of the non-profit association. This model of housing provides affordability against the market and, when built with nature/ green spaces in mind, can positively impact co-op members\' lives, directly supporting happiness, community building, housing security and neighborhood safety.¹ʼ² Governments and local municipalities can increase this style of housing by starting from the ground-up, providing land at low cost to get these sorts of developments rolling!'},
      {type: 'p', content: 'As we respond to the lack of affordable housing in Victoria and throughout British Columbia, continuing to expand and build housing on the outskirts of town isn’t the answer. Urban sprawl leads to deforestation and loss of precious habitats for plant and animal species. Continuing to work towards sustainable, affordable housing requires that there is a shift towards high density housing, such as apartment buildings. A shift towards densification means that more people will have closer proximity to city cores, meaning more access to essential services such as transit.³'},
      {type: 'p', content: 'Living in the housing crisis means individuals and families are facing home insecurity, or that they are putting 30% of their income or more into housing costs. It is imperative that as a community, we work towards making housing more accessible for all people. Talk to your friends and neighbors about solutions in your neighborhood, whether this means bike lanes, a community center, or calling your local MP to talk about how your neighborhood can be a sustainable shelter for everyone!'},
      {type: 'link', content: '1. Kurucz, J. (2022) It\'s a form of affordable home ownership, but what exactly is co-op housing? Vancouver is Awesome.', url: 'https://www.vancouverisawesome.com/housing/what-is-co-op-housing-home-ownership-affordability-vancouver-bc-5585204'},
      {type: 'link', content: '2. Zhang, D. (2018) Cooperative Housing and Cohousing in Canada: The Pursuit of Happiness in the Common Courtyards. Journal of Architectural Research and Development, 2(1).', url: 'https://ojs.bbwpublisher.com/index.php/JARD/article/view/279/256'},
      {type: 'link', content: '3. Cavicchia, R., & Cucca, R. (n.d.). Urban Densification and Its Social Sustainability. In The Palgrave Encyclopedia of Urban and Regional Futures (pp. 1972–1985). Springer International Publishing.', url: 'https://doi.org/10.1007/978-3-030-87745-3_156'}
    ],
    act: {
      initiatives: [
        {
            title: 'Making Room: A Transitional Tiny Home Community',
            link: 'https://storymaps.arcgis.com/stories/14aeb7c901e04cc59272745e7a538994',
            image: require('../png/MakingRoom.png'),
            description: 'This story map is a hub of resources, information and narrative that builds awareness about the plight of houselessness generally, as it also tells of the specific response to houselessness in the North Park Community of Victoria: a Transitional Tiny Home Village made of re-purposed shipping containers.',
        },
      ],
    }
  };
  export default Shelter;
  