const Power = {
  key: 'power-this-place',
  title: "Power this place?",
  question: "How to plan for local and sustainable energy in the long run?",
  image: require('../png/PowerThisPlace.png'),
  description: [
    {type: 'h2', content: 'Comparison'},
    {type: 'p', content: 'Distances that power is transported. GHG emissions CRD buidlings & industry. Where are the opportunities for off grid.'},
    {type: 'h2', content: 'Problem'},
    {type: 'p', content: 'Hydro power is a renewable energy source with a drastically lower carbon footprint relative to fossil fuels.  When compared at the same scale to coal burning it is estimated to save 4 billion additional tonnes of greenhouse gases per year.¹'},
    {type: 'p', content: 'While much of BC’s energy is generated through hydro power, we sell some power to the US at a high price and buy it back at a lower price. This dynamic increases the amount of energy that is regularly lost in transmission and distribution across distances powerlines - estimated to be between 10-20%.²𝄒³'},
    {type: 'p', content: 'The longterm outlook for hydropower is also raising concerns in other parts of the world as glaciers melt delivering more water in the short terms and less over time.  Building dams needs to be considered alongside other functions that watersheds provide.⁴'},
    {type: 'p', content: 'Natural gas is our second biggest source and generates almost 10x the median greenhouse gas emissions intensity.¹'},
    {type: 'p', content: 'It also comes with a host of expensive and risky extraction practices and, though more resilient of the fossil fuels in the market today, it will ultimately be substituted by renewables unless it can drastically mitigate emissions to comply with the 1.5 degree pathway.⁵'},
    {type: 'p', content: 'Hydraulic fracturing or fracking, deep underground drilling to access natural gas deposits can also contribute to earthquakes.⁶'},
    {type: 'p', content: '90% of the costs associated with the  liquified natural gas value chain occur up front so, as a province, we then commit to long term contracts in shipping it all over the world to make good on the initial investment risk.⁷'},
    {type: 'p', content: 'Research is also warning that the gas stoves and fireplaces  at the end of the pipeline are not good for indoor air quality.⁸'},
    {type: 'p', content: 'It can seem like choices about power are outside the locus of our control but our population on Vancouver Island means that we are one of the largest customers of energy generated in BC so our consumption behaviours influence on how the whole system operates.⁹'},
    {type: 'h2', content: 'Solution'},
    {type: 'p', content: 'Quick pivots are hard to make but taking opportunities to access renewable energy that is generated close to the source would be ideal. Vancouver Island has a significant and growing number of alternative energy providers as the demand for local and renewable energy increases. T’Souke operates BC’s largest First Nation owned solar company.⁹'},
    {type: 'p', content: 'The Malahat Nation is developing integrated resource recovery infrastructure and is seeking industrial symbiosis  partners.'},
    {type: 'p', content: 'National and provincial government programs to increase the efficiency of buildings are plentiful and BC is a hotbed of innovation and talent when it comes to green developments. In 2019, GHG emissions from buildings, facilities, and infrastructure in the CRD have decreased by 21% since 2007, despite adding new buildings and facilities.¹⁰'},
    {type: 'p', content: 'Integrated Resource Recovery is a name for developments that co-locate buildings and businesses that can use each other’s waste heat , materials & energy. Some municipalities around the world have created local biogas fuel sources that are owned and operated by the local government creating a level of autonomy and sustainability that is impressive and practical.¹¹'},
    {type: 'p', content: 'The CRD is upgrading the Renewable Natural Gas facility (RNG) facility at the Hartland Landfill. This carbon neutral biogas generated from decomposing organic waste will be fed into the regional gas system and is projected to reduce our regional footprint by 450,000 tonnes of carbon dioxide over the next 25 years.¹²'},
    {type: 'p', content: 'The landfill is also home to the Residuals Treatment Facility which takes the region’s sewage that was pumped into the Juan de Fuca Strait until recently, and turns it into biogas using microorganisms. This biogas is used to process the remaining biosolids into pellets that are used as fuel to make cement on the mainland. At present we are bound by a 5 year contract with the cement company who we pay to take the fuel pellets but the opportunity to use this local fuel source is on the horizon when energy innovation catches up.¹³'},
    {type: 'link', content: '1. "Hydropower’s Carbon Footprint," International Hydropower Association. Accessed May 25, 2023.'},
    {type: 'link', content: '2. "Power in high voltage lines: lost in transmission," Smart Energy International. Accessed May 15, 2023.', url: 'https://www.smart-energy.com/partners/power-in-high-voltage-lines-lost-in-transmission/'},
    {type: 'link', content: '3. Jordan Wirfs-Brock, "Lost In Transmission: How Much Electricity Disappears Between A Power Plant And Your Plug?" Inside Energy, November 6, 2015.', url: 'https://insideenergy.org/2015/11/06/lost-in-transmission-how-much-electricity-disappears-between-a-power-plant-and-your-plug/'},
    {type: 'link', content: '4. Abe Musselman, "The Electricity Is Melting: As glaciers see diminishing returns, is hydropower worth it?" Sierra, September 2, 2021.', url: 'https://www.sierraclub.org/sierra/electricity-melting-hydropower-climate%20change'},
    {type: 'link', content: '5. Alessandro Agosta, Gillian Boccara, Giorgio Bresciani, Berend Heringa, and Nicholas Browne, "The impact of decarbonization on the gas and LNG industry." McKinsey & Company, June 30, 2021.', url: 'https://www.mckinsey.com/industries/oil-and-gas/our-insights/the-impact-of-decarbonization-on-the-gas-and-lng-industry'},
    {type: 'link', content: '6. "Air polluition and air quality in Canada," Environment and Natural Resources, Government of Canada. Accessed May 28, 2023.'},
    {type: 'link', content: '7. Gergely Molnar, 2022. Economics of Gas Transportation by Pipeline and LNG. In: Hafner, M., Luciani, G. (eds) The Palgrave Handbook of International Energy Economics. Palgrave Macmillan, Cham.', url: 'https://doi.org/10.1007/978-3-030-86884-0_2'},
    {type: 'link', content: '8. Drew R. Michanowicz et al., 2022. Home is Where the Pipeline Ends: Characterization of Volatile Organic Compounds Present in Natural Gas at the Point of the Residential End User. Environmental Science & Technology, 56(14), 10258-10268.', url: 'https://www.hsph.harvard.edu/c-change/news/natural-gas-used-in-homes/'},
    {type: 'link', content: '9. "Energy an Infrastructure on Vancouver Island," VIEA. Accessed May 25, 2023.', url: 'https://viea.ca/regional-statistic/energy-and-infrastructure/'},
    {type: 'link', content: '10. "Reducing Greenhouse Gas Emissions - Buildings," Capital Regional District. Accessed May 15, 2023.', url: 'https://www.crd.bc.ca/education/climate-action/reducing-greenhouse-gas-emissions/buildings'},
    {type: 'link', content: '11. "Karpalund Biogas Plant, Kristianstad," UN Climate Technology Centre & Network. Accessed May 15, 2023.', url: 'https://www.ctc-n.org/products/karpalund-biogas-plant-kristianstad'},
    {type: 'link', content: '12. "Hartland Renewable Natural Gas Initiative," Capital Regional District. Accessed May 28, 2023.', url: 'https://www.crd.bc.ca/education/climate-action/reducing-greenhouse-gas-emissions/buildings'},
    {type: 'link', content: '13. Darron Kloster, "Poop: The incredible journey. It starts with a flush and ends with a fuel." Times Colonist, March 12, 2022.', url: 'https://www.timescolonist.com/islander/poop-the-incredible-journey-it-starts-with-a-flush-and-ends-with-a-fuel-5155317'},
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