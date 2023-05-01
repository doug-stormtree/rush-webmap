import image from './CircularEconomy.png';
import projectZero from './ProjectZero.png';
import sIPP from './SIPP.png';
import zeroWasteVictoria from './ZeroWasteVictoria.png';
import recycleCBC from './RecycleCBC.png';
import bcGreenBusiness from './BCGreenBusiness.png';

const CircularEcon = {
  title: 'Circular Economy?',
  question: 'How can I close the loop on waste?',
  image: image,
  description: [
    {type: 'h2', content: 'Comparison'},
    {type: 'p', content: 'Landfill vs. Depot Value lost, value gained. Asset impacted creatures and place. Multiple risks. Where does it go? Lost value. Waste volumes and toxic sites vs. recycling reuse and Green Biz.'},
    {type: 'h2', content: 'Problem'},
    {type: 'p', content: 'Trash and pollution end up in watersheds and the ocean. Landfills are reaching capacity and emit powerful GHGs.'},
    {type: 'h2', content: 'Opportunity'},
    {type: 'p', content: 'Biochar.'},
    {type: 'p', content: 'We can practice one of Nature’s key design principles by treating waste as a resource.  This can range from a treasure hunt at yard sales to shopping from businesses that have a zero waste strategy and commitment to climate action and social justice.  For every $100 spent at a local business, its estimated that $68 stays in the community.¹'},
    {type: 'p', content: "BC is a leader in take back programs' known as Extended Producer Responsibility (EPR) which require producers to account for the lifecycle of the products and packaging they sell.² From medications to batteries to packaging and paint, our community is well set up for a high level of recycling and reuse. Consult the Recycling Council of BC website if you don't know what to do with something. Support developments that co-locate buildings and businesses that can use each other's waste heat and energy."},
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
  ],
  act: {
    initiatives: [
      { 
        title: "Project Zero",
        description: "Launched in 2019, Project Zero is an initiative of the Synergy Foundation focused on implementing circular economy concepts in British Columbia through incubation, innovation, and education.",
        image: projectZero,
        link: "https://www.project-zero.ca/",
      },
      {
        title: "South Island Prosperity Partnership",
        description: "The South Island Prosperity Partnership (SIPP) is an alliance of over 70 public and private-sector partners in Greater Victoria, including 11 local governments, nine First Nations, three post-secondary institutions, nine industry associations and nonprofits, and more than 30 major employers. SIPP works to bolster our region’s economic and social prosperity. This will happen by catalyzing the creation of high-quality, household-sustaining jobs, so that more families can afford to live, work and build a life here.",
        image: sIPP,
        link: "https://southislandprosperity.ca/who-is-sipp/",
      },
      {
        title: "Zero Waste Victoria Storymap",
        description: "A Storymap collecting the locations of zero waste intitiatives and businesses in the Greater Victoria area. Project completed by Aislyn King, Ege Kaymaz, Katie Wilson, Katrina Laube as part of a Community Based Participatory Research course in the UVic Geography Department.",
        image: zeroWasteVictoria,
        link: "https://storymaps.arcgis.com/stories/dc6ffc4f93b64815989f762178467827",
      },
      {
        title: "Recycling Council of BC",
        description: "The Recycling Council of British Columbia is the province’s trusted source of information on local curbside recycling services, province-wide Extended Producer Responsibility and stewardship programs, share, reuse and repair options, as well as best practices from around the world.",
        image: recycleCBC,
        link: "https://rcbc.ca/",
      },
      {
        title: "BC Green Business",
        description: "BC Green Business provides sustainability certification for member businesses and works with them to identify unique opportunities for environmental and community friendly practices. Browse their member directory to find sustainable businesses in your area.",
        image: bcGreenBusiness,
        link: "https://bcgreenbusiness.ca/",
      }
    ],
  },
  mapData: [],
};
export default CircularEcon;