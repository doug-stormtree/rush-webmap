import {
  LegendGroups,
  InitiativeTags as Tag,
} from '../TextContent';

const Question = {
  key: 'power-this-place',
  title: "Power this Place",
  question: "The lights are on but nobody’s home. Am I using my power wisely?",
  image: require('../png/PowerThisPlace.png'),
  layers: [
    { key: 'GreenhouseGasStationary2020', active: false, ...LegendGroups.StartOn },
    { key: 'GreenhouseGasStationary2022', active: true, ...LegendGroups.StartOn },
  ],
  sections: {
    one: [
      {
        heading: 'It’s buzzing with good energy if...',
        items: [
          'you can access programs that give you a screaming deal on swapping out your oil heat to a heat pump.',
          'your municipality requires the highest level of Energy Step Code in the construction and renovation of buildings.',
          'your neighbourhood is designed with integrated resource recovery.',
          'you find that your neighbourhood is suitable for solar.',
        ]
      },
      {
        heading: 'Out of juice if...',
        items: [
          'you see on the map that your municipality’s GHG footprint from stationary sources is going up compared to 2007 levels.',
          'your landlord won’t invest in your building and so reducing your energy footprint feels out of your control.',
          'your municipality is in cahoots with the developer in building a future that’s not gonna work for the grandkids.',
          'community consultations and municipal meetings skip past sustainable energy considerations.',
        ]
      },
    ],
    two: {
      heading: 'Light it up with long term vision.',
      items: [
        'Use your Open Green Map account to plot green buildings and smart infrastructure.',
        'Being power smart is not dumb. Unplug your phone and appliances, turn out the lights, put on a sweater. Saving energy saves money and gives us the edge that we need.',
        'Review the grant programs in the Good Stuff to Check out section to see if there are programs that can help you transition to green power.',
        'Get energized from connecting with others through co-working spaces and save energy at the same time.',
        'Make sure your municipality is committed to the highest energy Step Code for renovations and construction.',
        'Recommend opportunities to co-locate buildings and businesses so they can share energy.',
        'When you need a source of power, consider all your options before choosing.',
      ]
    },
    three: {
      items: [
        'Hydro power is a renewable energy source with a drastically lower carbon footprint relative to fossil fuels. When compared at the same scale to coal burning it is estimated to save 4 billion additional tonnes of greenhouse gasses per year.',
        'While much of BC’s energy is generated through hydro power, we sell some power to the US at a high price and buy it back at a lower price. This dynamic increases the amount of energy that is regularly lost in transmission and distribution across distances powerlines - estimated to be between 10-20%.',
        'The long-term outlook for hydropower is also raising concerns in other parts of the world as glaciers melt, delivering more water in the short term and less over time. Building dams needs to be considered alongside other functions that watersheds provide.',
        'Natural gas is our second biggest source and generates almost 10x the median greenhouse gas emissions intensity.',
        'It also comes with a host of expensive and risky extraction practices and, though more resilient of the fossil fuels in the market today, it will ultimately be substituted by renewables unless it can drastically mitigate emissions to comply with the 1.5 degree pathway.',
        'Hydraulic fracturing or fracking, deep underground drilling to access natural gas deposits can also contribute to earthquakes.',
        '90% of the costs associated with the liquified natural gas value chain occur up front so, as a province, we then commit to long term contracts in shipping it all over the world to make good on the initial investment risk.',
        'Research is also warning that the gas stoves and fireplaces at the end of the pipeline are not good for indoor air quality.',
        'It can seem like choices about power are outside the locus of our control but our population on Vancouver Island means that we are one of the largest customers of energy generated in BC so our consumption behaviour influences how the whole system operates.',
        'Quick pivots are hard to make but taking opportunities to access renewable energy that is generated close to the source would be ideal. Vancouver Island has a significant and growing number of alternative energy providers as the demand for local and renewable energy increases. T’Souke operates BC’s largest First Nation owned solar company.',
        'The Malahat Nation is developing integrated resource recovery infrastructure and is seeking industrial symbiosis partners.',
        'National and provincial government programs to increase the efficiency of buildings are plentiful and BC is a hotbed of innovation and talent when it comes to green developments. In 2019, GHG emissions from buildings, facilities, and infrastructure in the CRD have decreased by 21% since 2007, despite adding new buildings and facilities.',
        'Integrated Resource Recovery is a name for developments that co-locate buildings and businesses that can use each other’s waste heat, materials & energy. Some municipalities around the world have created local biogas fuel sources that are owned and operated by the local government creating a level of autonomy and sustainability that is impressive and practical.',
        'The CRD is upgrading the Renewable Natural Gas facility (RNG) facility at the Hartland Landfill. This carbon neutral biogas generated from decomposing organic waste will be fed into the regional gas system and is projected to reduce our regional footprint by 450,000 tonnes of carbon dioxide over the next 25 years.',
        'The landfill is also home to the Residuals Treatment Facility which takes the region’s sewage that was pumped into the Juan de Fuca Strait until recently, and turns it into biogas using microorganisms. This biogas is used to process the remaining biosolids into pellets that are used as fuel to make cement on the mainland. At present we are bound by a 5 year contract with the cement company who we pay to take the fuel pellets but the opportunity to use this local fuel source is on the horizon when energy innovation catches up.',
      ]
    },
  },
  act: {
    initiatives: [
      {
        title: 'BC Sustainable Energy',
        link: 'https://bcsea.org/',
        image: require('../png/BCSustainableEnergy.png'),
        description: 'BC Sustainable Energy Association is a network of action takers supporting sustainable energy policy, innovation, and education in British Columbia.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'The ReBuild Initiative',
        link: 'https://rebuild.uvic.ca/',
        image: require('../png/ReBuildInitiative.png'),
        description: 'Reducing energy use in existing buildings is key to avoiding catastrophic climate change. Better computer models of how our buildings are performing are needed to give robust design solutions and evidence-based policies. Data-driven methods that use machine-learning have great potential as our buildings provide lots of data, but little is currently used for reducing emissions. The ReBuild Initiative is an industry-government-academia consortium that will undertake 16 projects that encompass the breadth and complexity of the challenge, each co-designed with a partner organization to apply specific areas of research to meet their needs.',
        tags: [
          Tag.Initiative,
          Tag.Program,
        ],
      },
      {
        title: 'Greener Homes Grant',
        link: 'https://www.nrcan.gc.ca/energy-efficiency/homes/canada-greener-homes-initiative/canada-greener-homes-grant/canada-greener-homes-grant/23441',
        image: require('../png/GreenerHomesGrant.png'),
        description: 'The Government of Canada wants to help Canadians make where they live more energy efficient. The Canada Greener Homes Initiative will help homeowners save money, create new jobs across Canada for energy advisors and fight climate change.',
        tags: [
          Tag.Funding,
          Tag.Government,
        ],
      },
      {
        title: 'CleanBC Better Homes and Better Buildings',
        link: 'https://www2.gov.bc.ca/gov/content/industry/electricity-alternative-energy/energy-efficiency-conservation/programs',
        image: require('../png/CleanBC.png'),
        description: 'The BetterHomesBC and BetterBuildingsBC websites are B.C.’s online hub for homeowners and businesses to access information, incentives and support to reduce energy use and greenhouse gas emissions in new and existing homes and buildings.',
        tags: [
          Tag.Portal,
          Tag.Government,
        ],
      },
      {
        title: 'Net Zero Emissions by 2050',
        link: 'https://www.canada.ca/en/services/environment/weather/climatechange/climate-plan/net-zero-emissions-2050.html',
        image: require('../png/CanNetZero.png'),
        description: 'In an effort to avert the worst impacts of climate change, Canada has joined over 120 countries in committing to be net-zero emissions by 2050. Canada’s commitment is enshrined in The Canadian Net-Zero Emissions Accountability Act, which became law on June 29, 2021. The Act requires public participation and independent advice, and includes measures for transparency and accountability as the government works towards net-zero. Achieving net-zero emissions means our economy either emits no greenhouse gas emissions, or offsets its emissions through actions such as tree planting or capture carbon technologies.',
        tags: [
          Tag.Agreement,
          Tag.Target,
          Tag.Government,
        ],
      },
      {
        title: '2022 Climate Change Accountability Report BC',
        link: 'https://www2.gov.bc.ca/assets/gov/environment/climate-change/action/cleanbc/2022-ccar/2022_climate_change_accountability_report.pdf',
        image: require('../png/CleanBC.png'),
        description: 'The 2022 Climate Change Accountability Report details BC’s progress towards provincially legislated climate action targets during the previous year.  Annual reporting is a requirement under the Climate Change Accountability Act.',
        tags: [
          Tag.Report,
          Tag.Government,
        ],
      },
      {
        title: 'Kalunborg Symbiose',
        link: 'https://www.symbiosis.dk/en/',
        image: require('../png/Kalundborg.png'),
        description: 'Kalundborg Denmark is home to an intergrated resource recovery system where industrial companies share excess resources of heat, energy and materials to save money and mitigate waste. The companies co-locate for resource exchange that has multiple benefits including reducing greenhouse gases.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'CRD - Climate Action - Buildings',
        link: 'https://www.crd.bc.ca/education/climate-action/reducing-greenhouse-gas-emissions/buildings',
        image: require('../png/CRDClimateBuildings.png'),
        description: 'This CRD program for homeowners provides free support for retrofits with help figuring out rebates, home energy consults, quote reviews, retrofit planning, etc...',
        tags: [
          Tag.Funding,
          Tag.Government,
        ],
      },
      {
        title: 'Top Everyday Uses of Piezoelectricity',
        link: 'https://www.americanpiezo.com/blog/top-uses-of-piezoelectricity-in-everyday-applications/',
        image: require('../png/Piezoelectricity.png'),
        description: 'Piezoelectric technology converts the energy of movement into electricity. Dance floors, sidewalks, tiles and even heat vibrations can be transformed to power your everyday needs. Learn more in this quick summary.',
        tags: [
          Tag.Report,
        ],
      },
      {
        title: 'Energy Generation Using Piezoelectric Flooring Tiles',
        link: 'https://www.sciencedirect.com/science/article/abs/pii/S2210670721008210',
        image: require('../png/PiezoFloor.png'),
        description: 'This case study of a core urban metro station in Egypt demonstrates the potential of piezoelectric flooring tiles for energy generation in public buildings.',
        tags: [
          Tag.Report,
        ],
      },
      {
        title: 'Vancouver Island: Energy and Infrastructure',
        link: 'https://viea.ca/regional-statistic/energy-and-infrastructure/',
        image: require('../png/VanIslandEconAlliance.png'),
        description: 'A reference for current metrics on energy and infrastructure on Vancouver Island.',
        tags: [
          Tag.Portal,
        ],
      },
      {
        title: 'Canada Energy Regulator - BC Energy Profile',
        link: 'https://www.cer-rec.gc.ca/en/data-analysis/energy-markets/provincial-territorial-energy-profiles/provincial-territorial-energy-profiles-british-columbia.html',
        image: require('../png/BCEnergyProfile.png'),
        description: 'A reference for current metrics on energy and infrastructure in BC.',
        tags: [
          Tag.Portal,
        ],
      },
      {
        title: 'Team Power Smart',
        link: 'https://www.bchydro.com/powersmart/residential/team-power-smart.html?utm_source=promo&utm_medium=email&utm_content=start',
        image: require('../png/BCHydro.png'),
        description: 'Team Power Smart is a BC Hydro Initiative to encourage BC households to make smart energy choices.  Join Team Power Smart to earn money for saving energy, win prizes, get rewards, tips and motivational success stories from the 200 000+ other members of your provincial team.',
        tags: [
          Tag.Program,
          Tag.Government,
        ],
      },
      {
        title: 'Solar Rooftop Victoria',
        link: 'https://solarrooftop.victoria.ca/prod/public/',
        image: 'https://www.victoria.ca/sites/default/files/Victoria%20Logo_0.png',
        description: 'Solar Rooftop Victoria lets you input your address and get a downloadable report about suitability.',
        tags: [
          Tag.Map,
          Tag.Government,
        ],
      },
      {
        title: 'Frack Free BC',
        link: 'https://frackfreebc.ca/',
        image: 'https://frackfreebc.ca/assets/images/logo.webp',
        description: 'Frack Free BC is a broad-based alliance made up of allied organizations including NGOs, Indigenous partners, grassroots organizations, community groups, and individuals who are organizing their communities to raise awareness and apply pressure to the government to end fracking in BC. Frack Free BC invites you to join them in Vancouver June 7-9, 2024, for a weekend of connection, training, scheming, and dreaming of a Frack Free Future.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Hakai Energy Solutions',
        link: 'https://hakaienergysolutions.com/',
        image: 'https://hakaienergysolutions.com/wp-content/themes/hakai-2020/images/logo.png',
        description: 'Hakai Energy Solutions is the largest solar energy company owned and operated in BC. Hakai specializes in residential and commercial custom solar energy systems, and has an extensive project portfolio including over a decade of design-build grid-tied and off-grid solar energy projects. The Hakai team works across western Canada, bringing cost-efficient and reliable energy solutions to tough, hard-to-reach locations.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Victoria Coolkit',
        link: 'https://victoriacoolkit.info/',
        image: 'https://victoriacoolkit.info/wp-content/uploads/2023/08/cropped-vclogo-1.png',
        description: 'Victoria Coolkit is a visual and fun guide for people to engage with family, friends, and neighbours on issues and solutions related to urban forestry and climate change in their neighbourhood.  The aim of the Coolkit is to help local residents better understand and improve the value of green spaces in the city, to provide a new way of understanding the climate crisis at the neighbourhood level, and to bridge individual ideas to neighbourhood-wide actions.',
        tags: [
          Tag.Initiative,
          Tag.Program,
        ],
      },
      {
        title: 'Climate Friendly Homes Program',
        link: 'https://www.victoria.ca/community-culture/climate-action/climate-friendly-homes',
        image: 'https://www.victoria.ca/sites/default/files/Victoria%20Logo_0.png',
        description: 'Victoria’s Climate Friendly Homes program will help you discover ways to improve your home’s energy efficiency and reduce its emissions. Victoria residents are encouraged to take advantage of the available incentive and retrofit programs to help make their home more climate friendly. Check out their website for information about what makes a home “climate friendly”.',
        tags: [
          Tag.Funding,
          Tag.Government,
        ],
      },
    ],
  }
};
export default Question;