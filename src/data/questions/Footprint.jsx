const Footprint = {
  key: 'light-footprint',
  title: 'Light Footprint',
  question: 'Fossil fuel travel is a fast track to climate change. Bypass the gas and explore multi-modal travel.',
  image: require('../png/LightFootprint.png'),
  description_new: [
    {type: 'h2', content: 'It’s a green light if...'},
    {type: 'ul', content: [
      'BC transit operates many & frequent bus routes to the places you want to go.',
      'there is an extensive network of bike paths linking your community with others.',
      'it’s a quick and easy charge for your EV.',
      'there are opportunities for car-sharing and the park and ride is full.',
      'you feel the presence of a climate action group in your neighbourhood.',
      'wifi is good enough to work from home and there is a co-working space nearby when you need something different.',
      'your region is highlighted in blue which means it shows a decrease in on-road transportation 2020 emissions as compared to 2007.',
    ]},
    {type: 'h2', content: 'Pull the emergency brake if...'},
    {type: 'ul', content: [
      'cycling feels unsafe or difficult.',
      'busses are inconvenient and infrequent.',
      'there aren’t many convenient fast charging stations for EV’s',
      'car-sharing and car-pooling makes no sense.',
      'your commute is killing your free time.',
      'your region is highlighted in red which means it shows an increase in on-road transportation 2020 emissions as compared to 2007.',
    ]},
    {type: 'spacer'},
    {type: 'h2', content: 'Make your move. Arrive in style with light footprint travel.'},
    {type: 'ul', content: [
      'Find your flow to save time, money and energy.  Do your errands with a friend and cut your emissions in half.',
      'Shop close to home or get local delivery.',
      'Join a car-share program.',
      'Be a Galloping Goose and use our incredible growing network of bike paths.',
      'It’s a better party when BC Transit drives you home.',
      'Throw your support behind mass transit plans and lay the ground to get around without the exhaust.',
    ]},
    {type: 'spacer'},
    {type: 'h2', content: 'Down the rabbit hole.'},
    {type: 'p', content: 'Transportation is the largest sector of greenhouse gas (“GHG”) emissions for the region ~70%. Reducing the use of single-occupancy vehicles is an important component of managing GHGs.'},
    {type: 'p', content: 'When mass transit or personal power options are not available, electric vehicles offer another solution. Based on the emissions estimate in the 2020 CRD report, EVs deliver approximately 5.7 times as much power per unit of GHG emitted indirectly through the use of grid-supplied electricity over gasoline combustion.'},
    {type: 'p', content: 'The Capital Regional District (CRD) has set a 61% reduction target for greenhouse gas (GHG) emissions from 2007 levels. On-road transportation represented 39.2% of total GHG emissions for 2020. The coloured regions of the map shows the change, either increased or reduced, in GHG emissions for each CRD member government between 2007 and 2020. The lines highlight some of the current "Light Footprint" travel options, using bus and bicycle routes.'},
  ],
  description: [
    {type: 'h2', content: "Comparison"},
    {type: 'p', content: 'The Capital Regional District (CRD) has set a 61% reduction target for greenhouse gas (GHG) emissions from 2007 levels. On-road transportation represented 39.2% of total GHG emissions for 2020.¹ The coloured in regions of the map shows the change, either increased or reduced, in GHG emissions for each CRD member government between 2007 and 2020. The lines highlight some of the current "Light Footprint" travel options, using bus and bicycle routes. Is your neighbourhood served by "Light" travel options? Are there opportunities for GHG reduction?'},
    {type: 'h2', content: 'Problem'},
    {type: 'p', content: 'Greenhouse gas (GHG) emissions pose a substantial risk to the future life and well being of people worldwide. Many governments have set substantial goals for immediate reduction of emissions, while scientists assert that our natural systems have already been overburdened.²'},
    {type: 'h2', content: 'Solution'},
    {type: 'p', content: 'Transportation is the largest sector of GHG emissions for the region. Reducing the use of single-occupancy vehicles is an important component of managing GHGs. Where mass transit or personal power options are not available, electric vehicles offer another solution. Based on the emissions estimate in the 2020 CRD report, EVs deliver approximately 5.7 times as much power per unit of GHG emitted indirectly through the use of grid-supplied electricity over gasoline combustion.³'},
    {type: 'link', content: '1,2. Stantec Consulting Ltd., 2021. Capital Regional District - Municipalities and Electoral Areas: 2007 Base Year and 2020 Reporting Year Energy & GHG Emissions Inventory. Capital Regional District, Victoria.', url: "https://www.crd.bc.ca/docs/default-source/climate-action-pdf/reports/2020-crd-ghgmembermunicipality.pdf?sfvrsn=2716ebcd_2"},
    {type: 'link', content: '3,4. Stantec Consulting Ltd., 2021. Capital Regional District 2020 GPC BASIC+ Community Greenhouse Gas (GHG) Emissions Inventory Report. Capital Regional District, Victoria.', url: "https://www.crd.bc.ca/docs/default-source/climate-action-pdf/reports/2020-crd-ghg-inventorystudy.pdf?sfvrsn=5b16ebcd_2"},
  ],
  act: {
    initiatives: [
      {
        title: 'BC Climate Emergency Report Card',
        description: "The BC Climate Emergency Campaign has published a December 2022 Progress Report on the BC government's progress implementing ten urgent climate actions. These actions were called for in an open letter signed by a growing coalition of organizations that represent over two million British Columbians.",
        image: require('../png/ClimateEmergencyReportCard.png'),
        link: 'https://bcclimateemergency.ca/report-card'
      },
      {
        title: 'GC Climate & Environment Funding',
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
        description: '"The South Island Climate Action Network (SI-CAN) is a network of organizations on Vancouver Island. SI-CAN shares information about efforts to address the climate emergency and works toward effective climate action by local, provincial and federal governments."',
        image: require('../png/SICAN.png'),
        noText: true,
        link: 'https://siclimateactionnetwork.wordpress.com/'
      },
      {
        title: 'BC Hydro EV',
        description: '"The BC Hydro EV network currently has over 70 fast charging stations across B.C., and there are more on the way. We operate mainly 50kW DC fast chargers, but you’ll also find some 25kW “mini” fast chargers and Level 2 chargers at select stations. Most stations currently have a single DC fast charger but as usage grows, we’re upgrading stations with a second fast charger."',
        image: require('../png/BCHydro.png'),
        link: 'https://electricvehicles.bchydro.com/charge/public-charging/our-fast-charging-network'
      },
      {
        title: 'Chargepoint',
        description: '"We\'re leading the charge. Actually, we started it. You\'d think after creating the world\'s largest and most open EV charging network we\'d be satisfied, but you\'d be wrong. The way we see it, there\'s still much more we can do—together. Join us in getting all people and goods moving on electricity."',
        image: require('../png/Chargepoint.png'),
        link: 'https://www.chargepoint.com/en-ca'
      },
      {
        title: 'Plug In BC',
        description: '"Supporting the uptake of electric vehicles in British Columbia. We provide a hub of information and incentive programs for consumers and fleets to go electric."',
        image: require('../png/PlugInBC.png'),
        link: 'https://pluginbc.ca'
      },
    ],
  },
};
export default Footprint;
