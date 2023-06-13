const CircularEcon = {
  title: 'Circular Economy?',
  question: 'How can I close the loop on waste?',
  image: require('./png/CircularEconomy.png'),
  description: [
    {type: 'h2', content: 'Comparison'},
    {type: 'p', content: 'This map shows the lost value in volumes of waste materials going to the landfill or that we are paying to dispose of outside the region as compared to the places we can turn waste into a resource and create circular systems to gain value.  Facilities are identified for safe and productive disposal of common materials so that value can be redeemed which reduces harmful gases and pollutants from entering the soil, air and water.'},
    {type: 'h2', content: 'Problem'},
    {type: 'p', content: 'Trash and pollution end up in watersheds and the ocean.  Landfills are reaching capacity and emit powerful GHG’s. When materials are mixed during disposal it is more difficult to regain the value of the material later.  New materials generally have a higher green house gas footprint from sourcing, processing/manufacturing and transportation. Communities. organizations and businesses often pay for disposal and also lose the potential value of keeping things in circulation.  About 340,000 tonnes of plastic items and packaging were thrown away in 2019 in BC and 40% of plastic is used only once.¹'},
    {type: 'h2', content: 'Solution'},
    {type: 'p', content: 'We can practice one of Nature’s key design principles by treating waste as a resource.  This can range from a treasure hunt at yard sales to shopping from businesses that have a zero waste strategy and commitment to climate action and social justice.  Municipalities are also now empowered to ban plastic bags and single use plastics without provincial approval - a change lead by Esquimalt, Saanich and Victoria. The Town of Sidney is now leading the pack in banning: plastic bags, straws, polystyrene foam serviceware, and single-use plastic utensils.²'},
    {type: 'p', content: 'BC is a leader in "take back programs" known as Extended Producer Responsibility (EPR) which  require producers to account for the lifecycle of the products and packaging they sell.  From medications to batteries to packaging and paint, our community is well set up for a high level of recycling and reuse.  BC’s EPR programs currently recapture 315,000 tonnes of plastics found in various products.³'},
    {type: 'p', content: 'Consult the Recycling Council of BC website (linked in the initiatives below) if you don’t know what to do with something.  Check out Project Zero and BC Green Business for companies who are closing the loop on waste.'},
    {type: 'p', content: 'By treating waste as a resource, we:'},
    {type: 'ul', content: [
      'improve the local economy,',
      'create a stronger community,',
      'avoid pollution and greenhouse gas emissions from transportation,',
      'divert waste from the landfill,',
      'reduce stress on our environment,',
      'encourage innovation,',
      'and invest in health and wellbeing.'
    ]},
    {type: 'link', content: '1. "Reducing plastic waste, pollution a shared responsibility," BC Gov News, Ministry of Environment and Climate Change Strategy, February 12, 2021.', url: 'https://news.gov.bc.ca/releases/2021ENV0014-000263'},
    {type: 'link', content: '2. "Municipal bylaws for single-use plastics," Strategy, Ministry of Environment and Climate Change Strategy. Accessed May 26, 2021.', url: 'https://news.gov.bc.ca/releases/2021ENV0037-000955'},
    {type: 'link', content: '3. "Turning used plastic into new opportunity," BC Gov News, Ministry of Environment and Climate Change Strategy, May 19, 2021.', url: 'https://news.gov.bc.ca/releases/2021ENV0037-000955'},
  ],
  act: {
    initiatives: [
      {
        title: 'Indigenomics',
        description: 'Economics from an Indigenous Worldview. The Indigenomics Institute is a leading research, education, and engagement platform that supports the rebuilding and design of Indigenous economies of Inidigenous peoples worldwide.',
        link: 'https://indigenomicsinstitute.com/',
        image: require('./png/Indigenomics.png'),
      },
      { 
        title: "Project Zero",
        description: "Launched in 2019, Project Zero is an initiative of the Synergy Foundation focused on implementing circular economy concepts in British Columbia through incubation, innovation, and education.",
        link: "https://www.project-zero.ca/",
        image: require('./png/ProjectZero.png'),
      },
      {
        title: "Recycling Council of BC",
        description: "The Recycling Council of British Columbia is the province’s trusted source of information on local curbside recycling services, province-wide Extended Producer Responsibility and stewardship programs, share, reuse and repair options, as well as best practices from around the world.",
        link: "https://rcbc.ca/",
        image: require('./png/RecycleCBC.png'),
      },
      {
        title: "South Island Prosperity Partnership",
        description: "The South Island Prosperity Partnership (SIPP) is an alliance of over 70 public and private-sector partners in Greater Victoria, including 11 local governments, nine First Nations, three post-secondary institutions, nine industry associations and nonprofits, and more than 30 major employers. SIPP works to bolster our region’s economic and social prosperity. This will happen by catalyzing the creation of high-quality, household-sustaining jobs, so that more families can afford to live, work and build a life here.",
        link: "https://southislandprosperity.ca/who-is-sipp/",
        image: require('./png/SIPP.png'),
      },
      {
        title: 'Extended Producer Responsibility BC',
        description: '"Extended Producer Responsibility (EPR) is an approach to recycling that requires producers, such as manufacturers, distributors, and retailers to take responsibility for the life cycle of the products they sell, including collection, such as curbside collection or collection depots, and recycling the packaging and products they collect. Producers often come together to form agencies that operate recycling programs on their behalf."',
        link: 'https://www2.gov.bc.ca/gov/content/environment/waste-management/recycling/extended-producer-responsibility',
        image: require('./png/ExtendedProducerResponsibility.png'),
      },
      {
        title: 'Pacific Mobile Depot',
        description: 'Pacific Mobile Depots provides one of the most complete plastics recycling service in Greater Victoria & Metro Vancouver. They currently run four Greater Victoria depot locations, as well as two more mobile depot locations in Metro Vancouver, allowing residents to bring in their sorted/unsorted plastics to our depots for a small fee.',
        link: 'http://pmdrecycling.com/',
        image: require('./png/PacificMobileDepot.png'),
      },
      {
        title: "BC Green Business",
        description: "BC Green Business provides sustainability certification for member businesses and works with them to identify unique opportunities for environmental and community friendly practices. Browse their member directory to find sustainable businesses in your area.",
        image: require('./png/BCGreenBusiness.png'),
        link: "https://bcgreenbusiness.ca/",
      },
      {
        title: "Zero Waste Victoria Storymap",
        description: "A Storymap collecting the locations of zero waste intitiatives and businesses in the Greater Victoria area. Project completed by Aislyn King, Ege Kaymaz, Katie Wilson, Katrina Laube as part of a Community Based Participatory Research course in the UVic Geography Department.",
        link: "https://storymaps.arcgis.com/stories/dc6ffc4f93b64815989f762178467827",
        image: require('./png/ZeroWasteVictoria.png'),
      },
    ],
  },
};
export default CircularEcon;