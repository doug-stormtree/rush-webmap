import {
  LegendGroups,
  InitiativeTags as Tag,
} from '../TextContent';

const Question = {
  key: 'be-happy',
  title: "Be Happy",
  question: "Cost of living, polarized politics, and climate change are causing anxiety. What's it gonna take to calm the folk down?",
  image: require('../png/SenseOfPeace.png'),
  layers: [
    { key: 'BCTransitRoutes', active: true, ...LegendGroups.StartOn },
    { key: 'CRD_Parks', active: true, ...LegendGroups.StartOn },
    { key: 'LittleFreeLibraries', active: false, ...LegendGroups.StartOff },
    { key: 'TreeCoverage2005', active: false, ...LegendGroups.StartOff },
    { key: 'TreeCoverage2019', active: false, ...LegendGroups.StartOff },
    { key: 'NativeLandDigitalLanguages', active: false, group: 'Indigenous' },
    { key: 'NativeLandDigitalTerritories', active: false, group: 'Indigenous' },
    { key: 'NativeLandDigitalTreaties', active: false, group: 'Indigenous' },
  ],
  sections: {
    one: [
      {
        heading: 'Hakuna Matata if...',
        items: [
          'your neighbourhood meets the tree equity standard of 30% canopy cover.',
          'there are safe public parks and greenspaces for everyone to appreciate, rest and relax. Fountains offer healing soundscapes for visitors.',
          'there are spiritual centres nearby for familiar mindfulness practices that create peace and community.',
          'recreation and community centres offer places to play, challenge, and develop different abilities.',
          'health centres connect locals with resources to help with mental, physical, and emotional stress. Safe injection sites are easy to find.',
        ]
      },
      {
        heading: 'Oy vey if...',
        items: [
          'you can’t find a quiet patch of grass to take five. It’s noisy, it’s stinky, it’s all pavement and everybody seems to be pounding it.',
          'you are in transit and you can’t find a welcoming washroom or place for a shower.',
          'you have a friend who needs more help than you can give, and you are coming up empty on organizations with the resources they need.',
          'you found a place to watch the waves, but somebody is watching you from their beach-front window… and they want you to move along.',
        ]
      },
    ],
    two: {
      heading: 'Create your Om at home.',
      items: [
        'Find your piece of paradise in your community. Consult the RUSH map for public access beaches and parks, big trees and drinking fountains.',
        'Uphold dignity. Find and foster a sense of peace in your community. Use your Open Green Map account to plot inclusive washrooms when you spot them.',
        'Help others be in the zone. Plot benches and sweet spots to take a hot minute of pause with your Open Green Map account.',
        'Get the Merlin app to help you hear the birds and get to know the bird community, and their habits and note the trees they call home.',
        'You belong. Use the legend on the map to find the community groups and services that will make you feel at home. Plot the ones you know are missing.',
        'We all need a village to make sense of life. Hug your friend and consult the legend to find help and resources.',
        'Let your local government and community centre know when you see a gap in services.',
      ]
    },
    three: {
      items: [
        'The saying, "It takes a village to raise a child" speaks to the way a community that knows each other can look out for everyone. Knowing your neighbour contributes to a sense of safety. Being able to access basic needs within walking distance contributes to a healthy lifestyle. Having safe and convenient transportation options lowers a community’s greenhouse gas footprint. Accessible public spaces make a quality of life available to everyone which levels the playing field and creates community spirit. Place-making is a name given to actions that help communities thrive.',
        'Gathering spaces, festivals and features that show the art, culture, and characteristics of a place all contribute to a sense of belonging and connection. Knowing how to access the services in our community allows us to help each other when situations seem impossible to solve.',
        'The World Health Organization (WHO) has acknowledged that the common urban combination of noise and air pollution from traffic and construction has a negative impact on human health - including our overall sense of peace. Higher rates of stress, addiction, depression and poverty are linked to climate change issues.',
        'Science now recognizes the central role that Nature plays in human wellbeing. Good air, soil, and water, as well as organic sounds and sights truly soothe our souls. Research finds health benefits across mental, physical, and emotional states as well as contributing to our sense of connection, belonging, and general well-being.',
        'In these times of frequent natural disasters, news often reports the impressive ways that communities come together to support each other. This is an invitation to build a strong sense of community and belonging now to build rapid resilience in record time and be protected and connected in the climate emergency.',
      ]
    },
  },
  act: {
    initiatives: [
      {
        title: 'A Quiet Moment',
        link: 'https://storymaps.arcgis.com/stories/2e93284117c143f9a66f25c80ff41a0a',
        image: require('../png/AQuietPlace.png'),
        description: 'UVIC Community Mapping Students engage 3 Highschools in mapping sounds of peace and stress across the region.  Sound recordings for all locations are plotted on maps and a correlation between low income areas and stressful soundscapes is found.',
        tags: [
          Tag.StoryMap,
        ],
      },
      {
        title: 'Vital Signs Victoria',
        link: 'https://victoriafoundation.bc.ca/wp-content/uploads/2023/10/EMBARGOED-Victoria-Foundation-2023-Vital-Signs_WEB.pdf',
        image: require('../png/VitalSigns.png'),
        description: 'The 18th Vitality report for this area is funded by the Victoria Foundation.  Here you will find a compilation of feedback from residents and regional data sources in an annual community check-up format with a grade on vitality relative to various areas from gender equality to transportation to arts and culture. The Victoria Foundation produces the report to connect philanthropy to community needs and opportunities. For more information, visit communityfoundations.ca/vitalsigns.',
        tags: [
          Tag.Report,
        ],
      },
      {
        title: 'Human Nature Counselling Society',
        link: 'https://humannaturecounselling.ca/who-we-are/',
        image: require('../png/HumanNatureCounselling.png'),
        description: 'The Human Nature Counselling Society specialize in supporting children, youth, and families through Nature-Based Therapy. Nature-based Therapy incorporates one’s relationship with the natural world into counselling that "strives towards the reciprocal healing of both humans and their larger ecological home.” Nature-Based Therapy may appeal to people who have exhausted more traditional, office-based clinical services, and/or who are looking for an approach that speaks to their passion and interest for the natural world.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ]
      },
      {
        title: 'Forest Bathing Victoria - Shinrin-Yoku',
        link: 'https://forestbathingvictoria.com/',
        image: require('../png/ForestBathing.png'),
        description: 'Forest Bathing, or Shinrin-Yoku, is a wellness practice that comes from Japanese preventative and restorative medicine. It involves consciously moving through natural places with gratitude, openness, keen sensory engagement and at a pace that soothes the mind and body. Visit this site to find out about guided Forest Bathing in the Victoria region.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'LegalAidBC',
        link: 'https://legalaid.bc.ca/legal_aid/legalAidLocations#legalAidOffices',
        image: require('../png/LegalAidBC.png'),
        description: 'Legal Aid BC is a source of general information about the law in this province, including publications that make understanding the law easier for non-lawyers. Legal Aid BC also offers free advice and representation from lawyers on matters including child protection, criminal law, immigration, mental health and prison law issues. Find out if you qualify, and apply by phone for free legal aid.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'BC First Nations Justice Council',
        link: 'https://bcfnjc.com/indigenous-justice-centres-in-british-columbia/',
        image: 'https://bcfnjc.com/wp-content/uploads/2020/10/IJC-brown.png',
        description: 'Indigenous Justice Centres (IJCs) in BC provide culturally appropriate information, advice, support and representation directly to Indigenous people at the community level. IJCs focus primarily on criminal law and child protection issues (priorities set by First Nations leaders in BC). With the holistic understanding that justice issues do not exist in isolation, IJCs also facilitate client connections to supports such as housing, mental health and addictions treatment, and employment services.',
        tags: [
          Tag.Organization,
          Tag.Indigenous,
        ],
      },
      {
        title: 'Burden of Disease from Environmental Noise',
        link: 'https://www.who.int/publications/i/item/9789289002295',
        image: require('../png/EnvironmentalNoise.png'),
        description: 'This publication summarizes the evidence on the relationship between environmental noise and health effects, including cardiovascular disease, cognitive impairment, sleep disturbance, tinnitus, and annoyance. For each one, the environmental burden of disease methodology, based on exposure–response relationship, exposure distribution, background prevalence of disease and disability weights of the outcome, is applied to calculate the burden of disease in terms of disability-adjusted life-years.',
        tags: [
          Tag.Report,
        ],
      },
      {
        title: 'Power to Be',
        link: 'https://powertobe.ca/',
        image: require('../png/PowerToBe.png'),
        description: 'Power To Be is a non-profit organization that creates access to nature for youth, families, and adults living with cognitive, physical, financial, and social barriers.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Victoria Immigrant and Refugee Center',
        link: 'https://www.vircs.bc.ca/',
        image: 'https://static.wixstatic.com/media/59f36a_4f3793a40d124b9488f456edbb5067b8~mv2.png/v1/fill/w_200,h_200,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/37.png',
        description: 'The Victoria Immigrant and Refugee Centre Society (VIRCS) is a non-profit organization that helps immigrants, refugees and new Canadian citizens settle and adapt into their new lives in the Greater Victoria Region. Find out about the wide range of services and resources provided by VIRCS, including ESL program classes, anti-racism initiatives, and a Newcomer’s Wraparound Support Program that supports our most vulnerable newcomers.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Our Place Society',
        link: 'https://www.ourplacesociety.com',
        image: require('../png/OurPlace.png'),
        description: 'Our Place Society provides a sense of hope and belonging to Greater Victoria’s most vulnerable populations, including people struggling with homelessness, mental health challenges, substance use issues, the working poor, and impoverished elderly. The services offered by Our Place include meals, housing, hot showers, education, job skills, health care, addiction recovery services, donated clothing, counselling and outreach services, a storage facility.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Victoria Symphony',
        link: 'https://victoriasymphony.ca',
        image: 'https://victoriasymphony.ca/wp-content/uploads/2021/06/logo-stacked.png',
        description: 'Victoria Symphony brings the transformational power of music to the people of Victoria. In addition to concerts, the VS offers a range of community education and outreach programs that demonstrate its commitment to using music to build community.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Greater Victoria Placemaking Network',
        link: 'https://victoriaplacemaking.ca',
        image: 'https://victoriaplacemaking.ca/wp-content/uploads/2016/05/cropped-GVPMN-LOGO_2-1-1.png',
        description: 'Placemaking is the intentional process of bringing diverse community members together in great collaborations to create "great places” within our urban spaces. The One of the most popular initiatives of the GVPN is its Little Free Libraries. Visit the website for a map of existing libraries (over 700 to date!) and create your very own Little Free Library Bingo Card. Have fun!',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Art Gallery of Greater Victoria',
        link: 'https://aggv.ca',
        image: require('../png/AGGV.png'),
        description: 'The Art Gallery of Greater Victoria provides access to art and art-based experiences that enrich the quality of life in the community. In addition to its collection and exhibitions, the AGGV delivers community and school outreach programs that make art more accessible to everybody. The AGGV offers free admission every Thursday evening from 5-9 pm.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ]
      },
      {
        title: 'Queering the Map',
        link: 'https://www.queeringthemap.com',
        image: require('../png/QueeringTheMap.png'),
        description: 'Queering the Map is a living archive that maps and preserves the histories and unfolding realities of queer life anywhere it happens—from park benches to the middle of the ocean.',
        tags: [
          Tag.Map,
        ]
      },
      {
        title: 'BCHealthy Communities - PlanH',
        link: 'http://bchealthycommunities.ca/program/planh',
        image: 'https://bchealthycommunities.ca/wp-content/uploads/2024/01/PlanH_BCHC_FullColour.png',
        description: 'BC Healthy Communities is a not-for-profit organization that provides a range of programs, services and resources aimed to promote thriving communities across the province. One BCHC initiative is the BC Age-friendly Communities Program that helps older adults to live active, engaged, independent lives. BC Healthy Communities and PlanH have amalgamated their two websites under one domain name – bchealthycommunities.ca – to simplify navigation and resource discovery so that community advocates can better serve their constituents with local health initiatives.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'UN Climate and Health Declaration',
        link: 'https://www.cop28.com/en/news/2023/12/Health-Declaration-delivering-breakthrough-moment-for-health-in-climate-talks#:~:text=The%20Declaration%20covers%20a%20range,for%20climate%20and%20health%20solutions',
        image: require('../png/COP28UAE.png'),
        description: 'Signed by 123 countries, the Declaration covers a range of action areas at the nexus of climate and health, including building more climate-resilient health systems, strengthening cross-sectoral collaboration to reduce emissions and maximize the health benefits of climate action, and increasing finance for climate and health solutions.',
        tags: [
          Tag.Agreement,
          Tag.Target,
        ]
      },
      {
        title: 'Center for Earth and Spirit',
        link: 'https://centreforearthandspirit.ca/',
        image: 'https://centreforearthandspirit.ca/wp-content/uploads/2021/02/Artboard-31-CES-Logo.png',
        description: 'The Centre for Earth and Spirit Society is an earth-based, spirit-infused community that draws from Indigenous wisdom and contemporary knowledge to offer programs for a resilient sustainable future. CESS embraces the Nuu-chah-nulth First Nations’ principle “hishuk ish tsa’walk,” “everything is connected” and the knowledge that human and ecological health and sustainability are linked. CESS programs focus on embodied eco-spirituality, eco-psychology and First Nations traditional ecological knowledge. CESS facilitators host regular weekly and monthly programs (online and in person), contributing to expanding intergenerational and cross-cultural communities of care. A current area of focus is conscious end-of-life care, which includes ceremony and considerations of the ecological footprint of dying and death.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
    ],
  },
};
export default Question;