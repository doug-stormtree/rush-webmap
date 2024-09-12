import {
  LegendGroups,
  InitiativeTags as Tag,
} from '../TextContent';

const Question = {
  key: 'have-it-all',
  title: 'Have it All',
  question: 'Economy, Community, Environment. I want it all. How can I shape my triple bottom line?',
  image: require('../png/CircularEconomy.png'),
  layers: [
    { key: 'CircularEconomyBusinesses', active: true, ...LegendGroups.OGM },
    { key: 'HartlandLandfill', active: true, ...LegendGroups.StartOn },
    { key: 'RecyclingDepots', active: true, ...LegendGroups.StartOn },
    { key: 'SingleUseItemBylaws', active: true, ...LegendGroups.StartOn },
  ],
  sections: {
    one: [
      {
        heading: 'Your region is turning waste into a resource if...',
        items: [
          'you notice Circular Economy Businesses near you.',
          'you see convenient places to recycle unwanted household materials and medications. When in doubt, the RCBC website has an answer.',
          'your municipality has a ban on plastic bags and single-use items, and businesses are on board.',
          'when you arrive at the landfill with a truckload, you can easily dispose responsibly - and drive away feeling flush and free.',
        ]
      },
      {
        heading: 'It’s a vicious circle if...',
        items: [
          'when you shop or get take out, you end up with a bail of plastic and styrofoam that you don’t know what to do with.',
          'you need a day, a driver, and a degree to de-clutter responsibly.',
          'your municipality seems to have a preference for big box and big brand business.',
          'all the talented people you know are having trouble finding meaningful work.',
        ]
      },
    ],
    two: {
      heading: 'Turn trash into treasure.',
      items: [
        'Plot your favourite circular economy business on the map with your Open Green Map account.',
        'Shop and drop things into your own reusable bag.  Refuse single use items including checkout bags, straws, stir-sticks, and take-away food containers.',
        'Take the time to digest good food and surroundings at your local eatery.',
        'Understand the options at your local depot for returning unwanted paints, electronics, soft plastics, batteries, lightbulbs, and styrofoam.',
        'Get a free tour of the Hartland landfill to witness next level waste reduction and circular production.',
        'Enjoy treasure hunting at yard sales, thrift stores, and internet sites that facilitate the exchange of used items. Support community services by donating good quality household items that you no longer need.',
        'Check out Project Zero and BC Green Business for companies who are closing the loop on waste. Shop from businesses that have a zero waste strategy and are committed to climate action and social justice.',
        'Consult the Recycling Council of BC website if you don’t know how to safely and productively get rid of something',
      ]
    },
    three: {
      items: [
        'What comes around goes around. Closing the loop on waste means making the most of what we have and separating out the toxins and hazards every chance we get.',
        'When we turn trash into treasure, we improve the local economy, limit pollution and greenhouse gas emissions, divert waste from the landfill, reduce stress on our environment, encourage innovation, and invest in health and wellbeing.',
        'About 340,000 tonnes of plastic and packaging was thrown away in 2019 in BC. 40% of plastic is used only once. Businesses often must pay for disposal, and also lose the potential value of keeping valuable waste in circulation. Municipalities are now empowered to ban plastic bags and single-use plastics without provincial approval - a change led by Esquimalt, Saanich and Victoria. The Town of Sidney is now leading the pack in banning plastic bags, straws, polystyrene foam serviceware, and single-use plastic utensils. The United Nations Environment Assembly is working towards a Global Treaty on Plastic Pollution that includes the marine environment and should be ready by 2024. Over 200 countries have signed on so far.',
        'BC is a leader in "take back programs" known as Extended Producer Responsibility (EPR) which require producers to account for the lifecycle of the products and packaging they sell. From medications to batteries, to packaging and paint, our community is well set up for a high level of recycling and reuse. BC’s EPR programs currently recapture 315,000 tonnes of plastics found in various products. You are in a good place to look again at what you’ve been calling “garbage.”',
        'Shaping up your triple bottom line means shopping at buisnesses that contribute economic, social and environmental benefits. This region is a hot bed of innovation and ingenuity on this front. Check out Project Zero for an ever-growing list of businesses that transform & redirect materials into the things that make life fun.',
        'Integrated Resource Recovery (IRR) is a term for an industrial park that shares resources like excess heat, energy and by products to eliminate waste. Malahat Nation is leading in this space. Advocating for IRR in all new developments is an obvious way to reduce our local carbon and waste footprints. Housing developments like Dockside Green are designed to make the most of the water and energy in the system and even make a profit by selling to neighbouring facilities.',
        'We have an opportunity to create local fuel sources out of waste products like invasive species, medical waste, and biosolids. It’s important to evaluate waste streams for their highest and best use. If problems arise by having them pile up, then the answer could be biofuel. Having a reliable and consistent source of local fuel is would be pretty nice. Imagine if all that invasive and highly flammable broom lining the highway to Port Hardy was being harvested by people earning a living wage so that you could fly to see your grandmother on sustainable aviation fuel. That would be a lot to feel good about!',
      ]
    },
  },
  act: {
    initiatives: [
      {
        title: 'Indigenomics',
        link: 'https://indigenomicsinstitute.com/',
        image: require('../png/Indigenomics.png'),
        description: 'Economics from an Indigenous Worldview. The Indigenomics Institute is a leading research, education, and engagement platform that supports the rebuilding and design of Indigenous economies of Inidigenous peoples worldwide.',
        tags: [
          Tag.Organization,
          Tag.Indigenous,
        ],
      },
      { 
        title: "Project Zero",
        link: "https://www.project-zero.ca/",
        image: require('../png/ProjectZero.png'),
        description: "Launched in 2019, Project Zero is an initiative of the Synergy Foundation focused on implementing circular economy concepts in British Columbia through incubation, innovation, and education.",
        tags: [
          Tag.Initiative,
        ],
      },
      {
        title: "Recycling Council of BC",
        link: "https://rcbc.ca/",
        image: require('../png/RecycleCBC.png'),
        description: "BC’s trusted source of information on local curbside recycling services, province-wide Extended Producer Responsibility and stewardship programs, share, reuse and repair options, as well as best practices from around the world.",
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: "South Island Prosperity Partnership",
        link: "https://southislandprosperity.ca/who-is-sipp/",
        image: require('../png/SIPP.png'),
        description: 'The South Island Prosperity Partnership (SIPP) is an alliance of over 70 public and private-sector partners in Greater Victoria, including 11 local governments, nine First Nations, three post-secondary institutions, nine industry associations and nonprofits, and more than 30 major employers. SIPP works to bolster our region\'s economic and social prosperity. This will happen by catalyzing the creation of high-quality, household-sustaining jobs, so that more families can afford to live, work and build a life here.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Salt Legacy',
        link: 'https://www.saltlegacy.com/',
        image: require('../png/SaltLegacy.png'),
        description: 'Ecostar award winner, Salt Legacy upcycles sailclothg into outdoor gear bags that set you up to live the good life!',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Extended Producer Responsibility BC',
        link: 'https://www2.gov.bc.ca/gov/content/environment/waste-management/recycling/extended-producer-responsibility',
        image: require('../png/ExtendedProducerResponsibility.png'),
        description: 'BC is a leader in Extended Producer Responsibility (EPR) or take-back programs to make sure that manufacturers, distributors, and retailers are accountable for their products for the full life cycle in terms of cost and design. Inspired by the bottle depot concept, these programs range from medications return to tire recycling.',
        tags: [
          Tag.Initiative,
          Tag.Program,
        ],
      },
      {
        title: 'Pacific Mobile Depot',
        link: 'http://pmdrecycling.com/',
        image: require('../png/PacificMobileDepot.png'),
        description: 'Pacific Mobile Depots provide one of the most complete plastics recycling services in Greater Victoria & Metro Vancouver. They currently run four Greater Victoria depot locations, as well as two more mobile depot locations in Metro Vancouver, providing a place for residents to bring in their (sorted or unsorted) plastics for a small fee.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: "BC Green Business",
        image: require('../png/BCGreenBusiness.png'),
        link: "https://bcgreenbusiness.ca/",
        description: "BC Green Business provides sustainability certification for member businesses, and works with them to identify unique opportunities for environmental and community friendly practices. Browse their member directory to find sustainable businesses in your area.",
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: "Zero Waste Victoria Storymap",
        link: "https://storymaps.arcgis.com/stories/dc6ffc4f93b64815989f762178467827",
        image: require('../png/ZeroWasteVictoria.png'),
        description: "A Storymap collecting the locations of zero waste intitiatives and businesses in the Greater Victoria area. Project completed by Aislyn King, Ege Kaymaz, Katie Wilson, Katrina Laube as part of a Community Based Participatory Research course in the UVic Geography Department.",
        tags: [
          Tag.StoryMap,
        ],
      },
      {
        title: 'Mapping the Flow of the World\'s Plastic',
        link: 'https://www.visualcapitalist.com/mapping-the-flow-of-the-worlds-plastic-waste/',
        image: require('../png/OutOfSight.png'),
        description: 'This infographic produced by visual capitalist and created by Iman Ghosh in 2019 is easy to follow and argues for recycling infrastructure, reducing throwaway culture, and banning single-use plastics.',
        tags: [
          Tag.Infographic,
        ],
      },
      {
        title: 'Explore Circular Economy Initiatives',
        link: 'https://www.canada.ca/en/services/environment/conservation/sustainability/circular-economy/circular-economy-initiatives.html',
        image: require('../png/CanadaCircularEcon.png'),
        description: 'This Government of Canada webpage summarizes and links to all of the federal initiatives that support circular economy efforts across the provinces, territories, and internationally.',
        tags: [
          Tag.Portal,
        ],
      },
      {
        title: 'Soap for Hope Canada',
        link: 'https://www.soapforhopecanada.ca/',
        image: require('../png/SoapForHope.png'),
        description: 'Soap for Hope Canada repurposes discarded hygiene products from hotels. These products are then transformed and redistributed to support the health and dignity of people in need.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'The Nulla Project',
        link: 'https://thenullaproject.ca',
        image: require('../png/NullaProject.jpg'),
        description: 'The Nulla Project is revolutionizing the To Go culture on Vancouver Island.  Here’s how it works: Visit a partner coffee shop, eatery or retailer (mapped on the Nulla website) and ask for your reusable Nulla cup or container. Pay a $5 refundable deposit. Feel awesome about reducing waste as you enjoy your drink or meal - to go or to stay. Reuse your Nulla cup or container, swap it for a freshly cleaned one at any partner location, or return it for a refund. Bam.  Thank you Nulla for providing Islanders with such a convenient, feel-good way to enjoy our To Go treats!',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Mythrose',
        link: 'https://mythrose.com/',
        image: require('../png/Mythrose.png'),
        description: 'Proud owner of this one-woman sewing business, Heather welcomes you to her world of creativity, sustainability, and passion for sewing! Heather offers a wide range of sewing services from dress alterations and wedding gowns, to custom clothing and cushions. She is committed to crafting high-quality items that don’t compromise on style or sustainability. Heather is making a difference, as she says, one stitch at a time.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'The Diverters\' Foundation',
        link: 'https://www.thediverters.ca/',
        image: 'https://static.wixstatic.com/media/ded847_8f8a32a902db45a5b580cb930bc564b2~mv2.png/v1/fill/w_178,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20with%20white%20background.png',
        description: 'By Diverters, for Diverters. The Diverters’ Foundation is a collective of binners diverting recyclables out of the waste stream, and dedicated to creating economic opportunities, de-stigmatizing diverting (bottle collection, waste picking, or binning), diverting waste, and promoting social cohesion among members of the diverter community. It’s work is focussed primarily in Victoria where there is a large concentration of people impacted by homelessness, addiction, and mental health challenges. Projects include waste sorting at events, as well as community and business bottle and can pickups, and public education.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'My Recyclopedia',
        link: 'https://www.crd.bc.ca/service/waste-recycling/recycle/myrecyclopedia',
        image: 'https://www.crd.bc.ca/Sitefinity/WebsiteTemplates/CRD/App_Themes/CRD/Images/crd-logo-text.png',
        description: 'A compendium of recycling information for the Capital Regional District.',
        tags: [
          Tag.Portal,
          Tag.Government,
        ],
      },
      {
        title: 'Global Treaty on Plastic Pollution',
        link: 'https://www.weforum.org/agenda/2023/05/global-treaty-to-reduce-plastic-pollution/',
        image: 'https://assets.weforum.org/article/image/responsive_large_HvRyWJh7fX3WXh1wddD6qbXgAxkmMlBY48t4WY62U-Y.jpg',
        description: 'The United Nations Environment Assembly is working towards a Global Treaty on Plastic Pollution that includes the marine environment and should be ready by 2024.  Over 200 countries have signed on so far. It is proposing bold actions that include banning certain polymers so support is needed to ensure negotiations don\'t dilute the full potential of this work.',
        tags: [
          Tag.Agreement,
          Tag.Target,
        ],
      },
    ],
  },
};
export default Question;