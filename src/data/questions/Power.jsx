const Power = {
  key: 'power-this-place',
  title: "Power this Place",
  question: "The lights are on but nobody’s home. Empower yourself to take charge.",
  image: require('../png/PowerThisPlace.png'),
  description_new: [
    {type: 'h2', content: 'It\'s buzzing with good energy if...'},
    {type: 'ul', content: [
      'you see on the map that your municipality’s greenhouse gas footprint from stationary sources like buildings and construction equipment is going down.',
      'you can access programs that give you a screaming deal on swapping out your oil heat to a heat pump.',
      'landlords and homeowners have insulated the place you live to a high standard.',
      'your municipality requires the highest level of Step Code in the construction and renovation of buildings.',
      'you find that your neighbourhood is suitable for solar and you can get a special deal that makes cents when you purchase as a community.',
      'your neighbourhood is designed with integrated resource recovery meaning it is heated or powered by a resource from another facility.',
      'a future is fast approaching where your region is turning local poop into local power.',
    ]},
    {type: 'h2', content: 'Out of juice if...'},
    {type: 'ul', content: [
      'you see on the map that your municipality’s greenhouse gas footprint from stationary sources like buildings and construction equipment is going up compared to 2007 levels.',
      'your landlord won’t invest in your building and so reducing your energy footprint feels out of your control.',
      'the energy retrofit program turns out to be a cash grab that’s not working in your favour.',
      'your municipality is in cahoots with the developer in building a future that’s not gonna work for the grandkids.',
      'community consultations and municipal meetings skip past sustainable energy considerations.',
    ]},
    {type: 'spacer'},
    {type: 'h2', content: 'Make your move. Light it up with long term vision.'},
    {type: 'ul', content: [
      'Use your open greenmap account to plot green buildings and smart infrastructure.',
      'Being power smart is not dumb. Unplug your phone and appliances, turn out the lights, put on a sweater. Saving energy saves money and gives us an edge that we super need.',
      'Review the initiatives on the RUSH website to see if there are programs that can help you transition to green power.',
      'Get energized from connecting with others through co-working spaces and save energy at the same time.',
      'Make sure your municipality is committed to the highest energy Step Code for renovations and construction.',
      'Recommend opportunities to co-locate buildings and businesses so they can share energy.',
      'When you need a source of power, consider all your options before choosing.',
    ]},
    {type: 'spacer'},
    {type: 'h2', content: 'Down the rabbit hole.'},
    {type: 'p', content: 'Hydro power is a renewable energy source with a drastically lower carbon footprint relative to fossil fuels. When compared at the same scale to coal burning it is estimated to save 4 billion additional tonnes of greenhouse gasses per year.'},
    {type: 'p', content: 'While much of BC’s energy is generated through hydro power, we sell some power to the US at a high price and buy it back at a lower price. This dynamic increases the amount of energy that is regularly lost in transmission and distribution across distances powerlines - estimated to be between 10-20%.'},
    {type: 'p', content: 'The long-term outlook for hydropower is also raising concerns in other parts of the world as glaciers melt, delivering more water in the short term and less over time. Building dams needs to be considered alongside other functions that watersheds provide.'},
    {type: 'p', content: 'Natural gas is our second biggest source and generates almost 10x the median greenhouse gas emissions intensity.'},
    {type: 'p', content: 'It also comes with a host of expensive and risky extraction practices and, though more resilient of the fossil fuels in the market today, it will ultimately be substituted by renewables unless it can drastically mitigate emissions to comply with the 1.5 degree pathway.'},
    {type: 'p', content: 'Hydraulic fracturing or fracking, deep underground drilling to access natural gas deposits can also contribute to earthquakes.'},
    {type: 'p', content: '90% of the costs associated with the liquified natural gas value chain occur up front so, as a province, we then commit to long term contracts in shipping it all over the world to make good on the initial investment risk.'},
    {type: 'p', content: 'Research is also warning that the gas stoves and fireplaces at the end of the pipeline are not good for indoor air quality.'},
    {type: 'p', content: 'It can seem like choices about power are outside the locus of our control but our population on Vancouver Island means that we are one of the largest customers of energy generated in BC so our consumption behaviour influences how the whole system operates.'},
    {type: 'p', content: 'Quick pivots are hard to make but taking opportunities to access renewable energy that is generated close to the source would be ideal. Vancouver Island has a significant and growing number of alternative energy providers as the demand for local and renewable energy increases. T’Souke operates BC’s largest First Nation owned solar company.'},
    {type: 'p', content: 'The Malahat Nation is developing integrated resource recovery infrastructure and is seeking industrial symbiosis partners.'},
    {type: 'p', content: 'National and provincial government programs to increase the efficiency of buildings are plentiful and BC is a hotbed of innovation and talent when it comes to green developments. In 2019, GHG emissions from buildings, facilities, and infrastructure in the CRD have decreased by 21% since 2007, despite adding new buildings and facilities.'},
    {type: 'p', content: 'Integrated Resource Recovery is a name for developments that co-locate buildings and businesses that can use each other’s waste heat, materials & energy. Some municipalities around the world have created local biogas fuel sources that are owned and operated by the local government creating a level of autonomy and sustainability that is impressive and practical.'},
    {type: 'p', content: 'The CRD is upgrading the Renewable Natural Gas facility (RNG) facility at the Hartland Landfill. This carbon neutral biogas generated from decomposing organic waste will be fed into the regional gas system and is projected to reduce our regional footprint by 450,000 tonnes of carbon dioxide over the next 25 years.'},
    {type: 'p', content: 'The landfill is also home to the Residuals Treatment Facility which takes the region’s sewage that was pumped into the Juan de Fuca Strait until recently, and turns it into biogas using microorganisms. This biogas is used to process the remaining biosolids into pellets that are used as fuel to make cement on the mainland. At present we are bound by a 5 year contract with the cement company who we pay to take the fuel pellets but the opportunity to use this local fuel source is on the horizon when energy innovation catches up.'},
  ],
  act: {
    initiatives: [
      {
        title: 'BC Sustainable Energy',
        link: 'https://bcsea.org/',
        image: require('../png/BCSustainableEnergy.png'),
        description: 'BC Sustainable Energy Association is a network of action takers supporting sustainable energy policy, innovation, and education in British Columbia.',
      },
      {
        title: 'The ReBuild Initiative',
        link: 'https://rebuild.uvic.ca/',
        image: require('../png/ReBuildInitiative.png'),
        description: 'Reducing energy use in existing buildings is key to avoiding catastrophic climate change. Better computer models of how our buildings are performing are needed to give robust design solutions and evidence-based policies. Data-driven methods that use machine-learning have great potential as our buildings provide lots of data, but little is currently used for reducing emissions. The ReBuild Initiative is an industry-government-academia consortium that will undertake 16 projects that encompass the breadth and complexity of the challenge, each co-designed with a partner organization to apply specific areas of research to meet their needs.'
      },
      {
        title: 'Greener Homes Grant',
        link: 'https://www.nrcan.gc.ca/energy-efficiency/homes/canada-greener-homes-initiative/canada-greener-homes-grant/canada-greener-homes-grant/23441',
        image: require('../png/GreenerHomesGrant.png'),
        description: 'The Government of Canada wants to help Canadians make where they live more energy efficient. The Canada Greener Homes Initiative will help homeowners save money, create new jobs across Canada for energy advisors and fight climate change.'
      },
    ],
  }
};
export default Power;