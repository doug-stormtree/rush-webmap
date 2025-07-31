import {
  LegendGroups,
  //InitiativeTags as Tag,
} from '../TextContent';

const Question = {
  key: 'be-firewise',
  title: "Be Firewise",
  question: "",
  image: require('../png/Placeholder.png'),
  color: {
    background: 'yellow.300',
    hover: 'yellow.200',
    selected: 'yellow.100',
  },
  layers: [
    { key: 'FireStations', active: true, ...LegendGroups.StartOn },
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
      
    ],
  },
};
export default Question;