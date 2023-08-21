const Development = {
  key: 'development',
  title: "Development",
  question: "Development a good idea?",
  image: require('../png/Development.png'),
  description: [
    {type: 'h2', content: "Comparison"},
    {type: 'p', content: 'The map shows how well municipalities are meeting a 30% target of urban forest cover to support temperature regulation, noise buffering, biodiversity, moisture retention, carbon drawdown, wellbeing, and property values.  The location and access of aquifers is important in protecting community water security. Ecosystem types help to inform the landscape design choices to connect ecosystems for better performance of natural assets and resilience to climate events. Watersheds and stormwater infrastructure  highlight opportunities for restoration.  Transportation routes support mobility between work and home.'},
    {type: 'h2', content: "Problem"},
    {type: 'p', content: 'Affordable housing is often located in areas that are vulnerable to a variety of environmental factors including lower percentages of greenspace which affects temperature, drainage, windspeeds, and the general well-being of the ecosystem and inhabitants.¹'},
    {type: 'p', content: 'Developers are under pressure to deliver on a budget and timeline that does not promote innovation and improvement in the resilience of the surrounding area. The insurance industry feels the costs of the realities of climate change in the payouts after fires, floods, earthquakes, etc.² Many homeowners are seeing their insurance rates rising with the frequency of climate-related disasters.³'},
    {type: 'p', content: 'The cost of living combined with long commutes leads to poverty, disconnected communities, social, emotional, and mental stress along with higher greenhouse gas emissions.'},
    {type: 'h2', content: "Solution"},
    {type: 'p', content: 'Affordable housing that is close to workplaces is a top priority for governments because a short home-to-work distance enhances the quality of life, is good for the local economy, and reduces greenhouse gas emissions.⁴ Communities with all generations represented are more stable and able to take care of themselves and their environment over time.⁵𝄒⁶'},
    {type: 'p', content: 'Nature-based Insurance Solutions are a growing trend in the insurance industry of acknowledging the value of ecosystem features like forests, wetlands, eelgrass, kelp beds, and reefs in buffering environmental stresses like extreme wind, water, and temperature.⁷ By enhancing the function and scope of the local ecosystem when re-developing an area, multiple benefits and savings are possible.⁸'},
    {type: 'p', content: 'Increasing native vegetation, and canopy cover can increase property values, regulate neighbourhood temperature, buffer noise as well as gaining biodiversity and carbon drawdown qualifications/green building features.'},
    {type: 'p', content: 'Restoring watersheds can also improve property values while providing cost savings in stormwater infrastructure. By harmonizing natural and built features, developers are securing the long-term well-being of communities through ecological connectivity that creates resilience to climate change.⁹'},
    {type: 'link', content: '1. Erin Whittingham, Vilbert Vabi, Sharmeena Lalloo, and Saleena Hak, 2022. Canada’s Urban Forests: Bringing the Canopy to All. Nature Canada.', url: 'https://naturecanada.ca/wp-content/uploads/2022/09/Nature-Canada-Report-Tree-Equity.pdf'},
    {type: 'link', content: '2. "Capturing the Climate Opportunity in Insurance," McKinsey. Accessed May 26, 2023.', url: 'https://www.moneysense.ca/spend/insurance/home-insurance/how-climate-change-affects-home-insurance/'},
    {type: 'link', content: '3. "How Climate Change Is Affecting Your Home Insurance," MoneySense, August 11, 2021.', url: 'https://www.moneysense.ca/spend/insurance/home-insurance/how-climate-change-affects-home-insurance/'},
    {type: 'link', content: '4. "B.C. Budget 2023 Builds on Historic Investments in Affordable Housing," CHF BC, February 28, 2023.', url: 'https://www.chf.bc.ca/bc-budget-2023/'},
    {type: 'link', content: '5. "Young People Can No Longer Afford to Live in Canadian Cities Big or Small," RBC. Accessed May 26, 2023.', url: 'https://www.newswire.ca/news-releases/young-people-can-no-longer-afford-to-live-in-canadian-cities-big-or-small-834347195.html'},
    {type: 'link', content: '6. "Creating Age-Friendly Cities and Communities," World Health Organization. Accessed May 26, 2023.', url: 'https://www.who.int/activities/creating-age-friendly-cities-and-communities'},
    {type: 'link', content: '7. "Nature-Based Solutions," Insurance Bureau of Canada. Accessed May 26, 2023.', url: 'http://www.ibc.ca/on/disaster/nature-based-solutions'},
    {type: 'link', content: '8. "Natural Infrastructure Fund," Infrastructure Canada, June 7, 2022.', url: 'https://www.infrastructure.gc.ca/nif-fin/index-eng.html'},
    {type: 'link', content: '9. Center for Neighborhood Technology. "Green Stormwater Infrastructure Impact on Property Values," November 17, 2020.', url: 'https://cnt.org/publications/green-stormwater-infrastructure-impact-on-property-values'},
    {type: 'link', content: 'Cover Photo by Tolu Olubode on Unsplash.', url: 'https://unsplash.com/photos/PlBsJ5MybGc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'},
  ],
  act: {
    initiatives: [
      {
        title: 'Engage with Nature-based Solutions',
        link: 'https://www.engagewithnbs.ca/',
        image: require('../png/EngageNBS.png'),
        description: '"Nature-based solutions support the health of natural systems, while addressing societal challenges. The design of these solutions are based on our planet’s natural systems, working with, and for, nature. They increase climate-resilient natural capital (such as wetlands and forests) and provide ecosystem services (such as water filtration). Communities can use nature-based solutions to support the resiliency of our climate, environment, and human society. Engage with Nature-Based Solutions is a new initiative to support communities who apply nature-based solutions to their local lands and waters. We acknowledge and take inspiration from Indigenous peoples, whose cultures and traditions support healthy ecosystems and the interconnection and importance of all living things."',
      },
      {
        title: 'Natural Assets Intiative',
        link: 'https://mnai.ca/',
        image: require('../png/NaturalAssetsInitiative.png'),
        description: '"The Natural Assets Initiative (NAI) is changing the way municipalities deliver everyday services, increasing the quality and resilience of infrastructure at lower costs and reduced risk. The NAI team provides scientific, economic and municipal expertise to support and guide local governments in identifying, valuing and accounting for natural assets in their financial planning and asset management programs and developing leading-edge, sustainable and climate-resilient infrastructure. NAI teams up with local governments to develop resilient, long-term infrastructure alternatives at substantial savings. NAI employs practical strategies to value nature’s ability to provide municipal services and to incorporate this information into mainstream asset management systems. With increasing ease in measuring and valuing natural assets the NAI approach is straightforward and transferable."',
      },
      {
        title: 'Nature Canada Report: Tree Equity',
        description: '"...the 3-30-300 rule, which states that everyone should be able to see at least three trees from their home, that all neighbourhoods should have at least a 30% tree canopy, and that all residents should have a greenspace of at least one hectare within 300 metres of where they live. While this principle can help substantially in advancing tree equity, we need to go further. In this report, Nature Canada proposes that equitable access should be thought of in terms of three variables—proximity to urban trees and forests, urban forest quality and the governance of urban forests."',
        link: 'https://naturecanada.ca/wp-content/uploads/2022/09/Nature-Canada-Report-Tree-Equity.pdf',
        image: require('../png/NatureCanadaReport.png'),
      },
      {
        title: 'Canadian Climate Institute: Indigenomics',
        description: '"Indigenous Peoples live the long-term cumulative effects of climate change from within an inherent sense of place that is directly connected to identity. Some of these effects include rising sea levels, leading to increased salination of freshwater, which results in needing to adapt to the effects of a significant decrease in food security and access to traditional medicines, amongst other impacts. Indigenous knowledge systems offer a critical foundation for localized, community-based adaptation and mitigation actions that work to fundamentally sustain the resilience of social-ecological systems locally, regionally, and globally."',
        link: 'https://climateinstitute.ca/publications/indigenomics/',
        image: require('../png/CCCIndigenomics.png'),
      },
      {
        title: 'Making Room: A Transitional Tiny Home Community',
        description: '"This Esri story map is a Community-based Participatory Research (CBPR) project through UNESCO K4C Salish Sea Hub & the University of Victoria’s (UVic) Geography Department. It was created in partnership with the Greater Victoria Coalition to End Homelessness (GVCEH), Island Health, and UVic instructors Ken Josephson and Dr. Crystal Tremblay. This story map is simultaneously a place of awareness and a call to action regarding houselessness and the importance of site-supportive transitional housing. The authors aim to have this map be a center point for resources, information, and stories. While their story is situated in Victoria, British Columbia, they hope the success of the Making Room: A Transitional Tiny Home Community will inspire other similar projects and help break the cycle of houselessness."',
        link: 'https://storymaps.arcgis.com/stories/14aeb7c901e04cc59272745e7a538994',
        image: require('../png/MakingRoom.png'),
      }
    ],
  }
};
export default Development;