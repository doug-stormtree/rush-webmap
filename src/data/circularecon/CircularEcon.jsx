import image from './image.jpg';
import projectZero from './ProjectZero.jpg';
import sIPP from './SIPP.png';
import zeroWasteVictoria from './ZeroWasteVictoria.png';
import recycleCBC from './RecycleCBC.png';
import bcGreenBusiness from './BCGreenBusiness.png';

const CircularEcon = {
  title: 'Circular Economy?',
  question: 'How can I participate in circular economies?',
  image: image,
  description: [
    {type: 'p', content: "Lorem."},
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