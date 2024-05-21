const Footprint = {
  key: 'light-footprint',
  title: 'Light Footprint',
  question: 'Fossil fuel travel is a fast track to climate change. Explore multi-modal travel and discover how you can bypass the gas.',
  image: require('../png/LightFootprint.png'),
  sections: {
    one: [
      {
        heading: 'It\'s a green light if...',
        items: [
          'BC transit operates many & frequent bus routes to the places you want to go.',
          'there is an extensive network of bike paths linking your community with others so that cycling feels safe and easy.',
          'it’s quick and simple to charge your EV, join a car-sharing program and the park and ride is full.',
          'work from home is an option, and there is a co-working space nearby for a change of scene.',
          'you can see a future fast approaching where your region is turning local poop into local power.',
        ]
      },
      {
        heading: 'Pull the emergency brake if...',
        items: [
          'your region is highlighted in red which means it shows an increase in on-road transportation 2020 emissions as compared to 2007.',
          'if you took the bus to work it would take you an hour plus, with long wait times at unsheltered bus stops that feel sketchy.',
          'a bike-able distance doesn\'t have the safety features suitable for a 12 year old to get around.',
          'there is no active climate action group in your neighbourhood.',
        ]
      },
    ],
    two: {
      heading: 'Arrive in style with light footprint travel.',
      items: [
        'Use your Open Green Map account to plot well lit bus stops, bike lanes, and other safe travel features on the map.',
        'Find your flow to save time, money and energy. Do your errands with a friend and cut your emissions in half.',
        'Shop close to home or get local delivery.',
        'Join a car-share program.',
        'Be a Galloping Goose and use our incredible growing network of bike paths.',
        'It’s a better party when BC Transit drives you home.',
        'Throw your support behind mass transit plans and walkability features to lay the ground to get around without the exhaust.',
      ]
    },
    three: {
      items: [
        'Transportation is the largest sector of greenhouse gas (“GHG”) emissions for the region ~70%. Reducing the use of single-occupancy vehicles is an important component of managing GHGs.',
        'When mass transit or self-propelled options are not available, electric vehicles offer another solution. Based on the emissions estimate in the 2020 CRD report, EVs deliver approximately 5.7 times as much power per unit of GHG emitted indirectly through the use of grid-supplied electricity over gasoline combustion.',
        'The Capital Regional District (CRD) has set a 61% reduction target for greenhouse gas (GHG) emissions from 2007 levels. On-road transportation represented 39.2% of total GHG emissions for 2020. The coloured regions of the map shows the change, either increased or reduced, in GHG emissions for each CRD member government between 2007 and 2020. The lines highlight some of the current "Light Footprint" travel options, using bus and bicycle routes.',
        'We have many carshare companies and bike rental options. Look through the local initiatives to find the travel options that can lighten your footprint.',
        'Place-making is a movement that specifies the need for neighbourhood gathering spaces and local amenities. The goal is to create a scenario where the younger generations can get around from school to friends without requiring a minivan. A network of parks and trails that connects your walk to work and school with mixed use areas to shop for dinner, do your banking, visit an elder and hang out on a patio. Light footprints go hand in hand with local economies where all generations can enjoy community living and create the village that raises the next generations.',
      ]
    },
  },
  act: {
    initiatives: [
      {
        title: 'BC Climate Emergency Report Card',
        description: "The BC Climate Emergency Campaign has published a December 2022 Progress Report on the BC government's progress implementing ten urgent climate actions. These actions were called for in an open letter signed by a growing coalition of organizations that represent over two million British Columbians.",
        image: require('../png/ClimateEmergencyReportCard.png'),
        link: 'https://bcclimateemergency.ca/report-card'
      },
      {
        title: 'Environment & Climate Change Canada Funding',
        description: 'Funding offered by the Government of Canada through various Grants and Contributions programs. Eligible groups, organizations and individuals can apply for support of projects that protect or conserve our natural environment.',
        image: require('../png/GovCan.png'),
        link: 'https://www.canada.ca/en/environment-climate-change/services/environmental-funding.html'
      },
      {
        title: 'CleanBC Go Electric',
        description: 'Buying an electric vehicle is more affordable than ever. You can apply for rebates on eligible cars, SUVs, trucks and vans and get rebates on charging stations, too.',
        image: require('../png/GoElectric.png'),
        link: 'https://goelectricbc.gov.bc.ca/personal-rebate-offers/passenger-vehicle-rebates/'
      },
      {
        title: 'South Island Climate Action Network',
        description: 'SI-CAN is a network of volunteers, citizens, and professionals on Southern Vancouver Island concerned with the climate emergency. SI-CAN shares useful information and urges businesses, individuals, and governments throughout the region towards best-practices to reduce emissions and strengthen carbon sinks.',
        image: require('../png/SICAN.png'),
        noText: true,
        link: 'https://siclimateactionnetwork.wordpress.com/'
      },
      {
        title: 'BC Hydro EV',
        description: 'The BC Hydro EV network currently has over 70 fast charging stations across B.C., with more on the way. This handy webpage tells you everything you need to know about using the charge stations, and maps out the EV network so you know where you’ll find 50kW DC fast chargers, 25kW “mini” fast chargers, and Level 2 chargers.',
        image: require('../png/BCHydro.png'),
        link: 'https://electricvehicles.bchydro.com/charge/public-charging/our-fast-charging-network'
      },
      {
        title: 'Chargepoint',
        description: 'Chargepoint created the world’s largest and most open EV charging network, and is “leading the charge” on pioneering new ways to make electric mobility an easy choice for all people and goods.',
        image: require('../png/Chargepoint.png'),
        link: 'https://www.chargepoint.com/en-ca'
      },
      {
        title: 'Plug In BC',
        description: 'Plug In BC provides a hub of super practical information and incentive programs to support consumers and fleets in BC to go electric.',
        image: require('../png/PlugInBC.png'),
        link: 'https://pluginbc.ca'
      },
    ],
  },
};
export default Footprint;
