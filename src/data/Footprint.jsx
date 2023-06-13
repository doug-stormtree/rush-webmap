const Footprint = {
  title: 'Light Footprint?',
  question: 'Self-propelled "Light Footprint" Travel',
  image: require('./png/LightFootprint.png'),
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
        image: require('./png/ClimateEmergencyReportCard.png'),
        link: 'https://bcclimateemergency.ca/report-card'
      },
      {
        title: 'GC Climate & Environment Funding',
        description: 'Funding offered by the Government of Canada through various Grants and Contributions programs. Eligible groups, organizations and individuals can apply for support of projects that protect or conserve our natural environment.',
        image: require('./png/GovCan.png'),
        link: 'https://www.canada.ca/en/environment-climate-change/services/environmental-funding.html'
      },
      {
        title: 'CleanBC Go Electric',
        description: 'Buying an electric vehicle is more affordable than ever. You can apply for rebates on eligible cars, SUVs, trucks and vans and get rebates on charging stations, too.',
        image: require('./png/GoElectric.png'),
        link: 'https://goelectricbc.gov.bc.ca/personal-rebate-offers/passenger-vehicle-rebates/'
      },
      {
        title: 'South Island Climate Action Network',
        description: '"The South Island Climate Action Network (SI-CAN) is a network of organizations on Vancouver Island. SI-CAN shares information about efforts to address the climate emergency and works toward effective climate action by local, provincial and federal governments."',
        image: require('./png/SICAN.png'),
        noText: true,
        link: 'https://siclimateactionnetwork.wordpress.com/'
      },
    ],
  },
};
export default Footprint;
