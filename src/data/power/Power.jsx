import image from './PowerThisPlace.png';
import bcSustainableEnergy from './BCSustainableEnergy.png';
import reBuildInitiative from './ReBuildInitiative.png';
import greenerHomesGrant from './GreenerHomesGrant.png';

const Power = {
  title: "Power this place?",
  question: "How to plan for local and sustainable energy in the long run?",
  image: image,
  description: [
    {type: 'h2', content: 'Comparison'},
    {type: 'p', content: 'Distances that power is transported.  GHG emissions CRD buidlings & industry.  Where are the opportunities for off grid.'},
    {type: 'h2', content: 'Problem'},
    {type: 'p', content: 'Problem: Much of BC’s energy is generated through hydro power, we sell some power to the US at a high price and buy it back at a lower price. This dynamic increases the amount of energy that is regularly lost in transmission and distribution across distances powerlines - estimated to be between 10-20%.¹𝄒²'},
    {type: 'p', content: 'Natural gas is our second biggest source and comes with a host of expensive and risky extraction practices.  Research is warning that gas stoves and fireplaces are not good for indoor air quality so it is probably safe to assume that it is not enhancing outdoor air quality either. 90% of the costs associated with the liquified natural gas value chain occur up front so, as a province, we then commit to long term contracts in shipping it all over the world to make good on the initial investment risk.³ It can seem like choices about power are outside the locus of our control but our population on Vancouver Island means that we are one of the largest customers of energy generated in BC so our consumption behaviours influence on how the whole system operates.'},
    {type: 'h2', content: 'Solution'},
    {type: 'p', content: 'Ideally our energy would be renewable and generated close to the source. Vancouver Island has a significant and growing number of alternative energy providers as the demand for local and renewable energy increases. T’Souke operates BC’s largest First Nation owned solar company.'},
    {type: 'p', content: 'National and provincial government programs to increase the efficiency of buildings are plentiful and BC is a hotbed of innovation and talent when it comes to green developments. In 2019, GHG emissions from buildings, facilities, and infrastructure have decreased by 21% since 2007, despite adding new buildings and facilities.⁴'},
    {type: 'p', content: 'Integrated Resource Recovery is a name for developments that co-locate buildings and businesses that can use each other’s waste heat , materials & energy. Some municipalities around the world have created local biogas fuel sources that are owned and operated by the local government creating a level of autonomy and sustainability that is impressive and practical.⁵'},

    {type: 'link', content: '1. "Power in high voltage lines: lost in transmission," Smart Energy International. Accessed May 15, 2023.', url: 'https://www.smart-energy.com/partners/power-in-high-voltage-lines-lost-in-transmission/'},
    {type: 'link', content: '2. Jordan Wirfs-Brock, "Lost In Transmission: How Much Electricity Disappears Between A Power Plant And Your Plug?" Inside Energy, November 6, 2015.', url: 'https://insideenergy.org/2015/11/06/lost-in-transmission-how-much-electricity-disappears-between-a-power-plant-and-your-plug/'},
    {type: 'link', content: '3. Gergely Molnar, 2022. Economics of Gas Transportation by Pipeline and LNG. In: Hafner, M., Luciani, G. (eds) The Palgrave Handbook of International Energy Economics. Palgrave Macmillan, Cham.', url: 'https://doi.org/10.1007/978-3-030-86884-0_2'},
    {type: 'link', content: '4. "Reducing Greenhouse Gas Emissions - Buildings," Capital Regional District. Accessed May 15, 2023.', url: 'https://www.crd.bc.ca/education/climate-action/reducing-greenhouse-gas-emissions/buildings'},
    {type: 'link', content: '5. "Karpalund Biogas Plant, Kristianstad," UN Climate Technology Centre & Network. Accessed May 15, 2023.', url: 'https://www.ctc-n.org/products/karpalund-biogas-plant-kristianstad'},
  ],
  act: {
    initiatives: [
      {
        title: 'BC Sustainable Energy',
        link: 'https://bcsea.org/',
        image: bcSustainableEnergy,
        description: 'BC Sustainable Energy Association is a network of action takers supporting sustainable energy policy, innovation, and education in British Columbia.',
      },
      {
        title: 'The ReBuild Initiative',
        link: 'https://rebuild.uvic.ca/',
        image: reBuildInitiative,
        description: 'Reducing energy use in existing buildings is key to avoiding catastrophic climate change. Better computer models of how our buildings are performing are needed to give robust design solutions and evidence-based policies. Data-driven methods that use machine-learning have great potential as our buildings provide lots of data, but little is currently used for reducing emissions. The ReBuild Initiative is an industry-government-academia consortium that will undertake 16 projects that encompass the breadth and complexity of the challenge, each co-designed with a partner organization to apply specific areas of research to meet their needs.'
      },
      {
        title: 'Greener Homes Grant',
        link: 'https://www.nrcan.gc.ca/energy-efficiency/homes/canada-greener-homes-initiative/canada-greener-homes-grant/canada-greener-homes-grant/23441',
        image: greenerHomesGrant,
        description: 'The Government of Canada wants to help Canadians make where they live more energy efficient. The Canada Greener Homes Initiative will help homeowners save money, create new jobs across Canada for energy advisors and fight climate change.'
      },
    ],
  },
  mapData: [],
};
export default Power;