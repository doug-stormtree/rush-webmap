import { InitiativeTags as Tag } from '../TextContent';

const Question = {
  key: 'save-the-world',
  title: 'Save the World',
  question: "The next seven generations are counting on us. How do we plan ahead now?",
  image: require('../png/NASAEarth.png'),
  layers: [
    { key: 'StewardshipGroups', active: true, group: 'Community' },
  ],
  sections: {
    one: [
      {
        heading: 'Change is at your fingertips if...',
        items: [
          'there is an organization or initiative in your community that speaks to the problem you care about, and wants your help.',
          'the governments representing you have declared a climate emergency. Planning and decision-making is done through a climate lens. How can "X" decrease emissions, increase carbon drawdown, or contribute to long term health?',
          'local events and communications demonstrate nation-to-nation relationships with Indigenous communities.',
          'ecosystems of greenways & blueways connect the neighbourhoods you navigate. This means biodiversity is getting its dues.',
          'policies emerging across the region commitments to social equity and the well-being of future generations, by living in alignment with natural systems.',
        ]
      },
      {
        heading: 'Answer the wake up call if...',
        items: [
          'the community engagement strategy won’t take your questions and the things you care about aren’t on the agenda.',
          'all the people in local leadership positions look and sound the same.',
          'there is no meaningful collaboration between government offices, businesses, community groups, and local First Nations.',
          'the problem is clear but the people behind the sign say the system won’t let them do the logical next thing.',
          'services for emergency help are hard to navigate and only result in temporary relief.',
        ]
      },
    ],
    two: {
      heading: 'Think cosmically, act locally.',
      items: [
        'Identify your passion and find your purpose. There are many issues to tackle and action takes many forms. Any action – big or small – makes an impact.',
        'Understand the perspectives of local Indigenous groups on the issues, and support Indigenous-led action.',
        'Take collective action. Identify organizations or initiatives that align with your purpose and reach out to get involved. Volunteering can be a powerful tool against apathy. Find the organization that cares about it too.',
        'Identify and show appreciation for the services that are there for you. Access them when you need them and help others do the same. Provide feedback when possible so they can be improved.',
        'Engage, advocate, vote and write to the decision makers between you and the change you want to see.',
        'Engage in community conversations that figure out how to provide housing and services to those who need it while making space for Nature to provide the ecosystem services needed for overall well-being.',
      ]
    },
    three: {
      items: [
        'This spinning ball of hot rock covered with a web of life is losing it’s balance. Staying true to the climate targets and peace treaties can keep it rocking and rolling.',
        'There is wisdom in the crowd and power in numbers. The most transformative actions are those that create new relationships and build networks and coalitions within and across communities. We each represent a piece to the puzzle, and we can make connections with those who make up our governments, businesses, and community organizations. Resilience comes from the strength of these connections, and the collective solutions that then emerge.',
        'Governments provide essential services. They make funding available to community organizations, the fastest change-agents of society. Through policy and regulations, they require businesses to consider people and the planet, and support them in creating innovative solutions. Governments can build partnerships for impact and create public value. They get their platform from what matters to the public, giving us enormous power to shape decision-making, but only when we choose to make our voices heard even when we may feel shocked into silence by discouraging news - like the Federal Court’s November 2023.',
        'Over 50% of greenhouse gas emissions in Canada can be influenced by municipalities, highlighting the real opportunities that exist at the local level for environmental action. This starts with us as individuals.',
        'Every action counts, and the small steps we take give us agency. As we urgently move towards more sustainable ways of living, we have an opportunity to dismantle the systems that have caused harm and rebuild in ways that support thriving communities in alignment with the natural world. It is essential that we take our lead from Indigenous communities and their knowledge systems. Reconciliation and broader equity goals are possible when we reject forced choices between economy and environment in favour of solutions that value a quality of life for all.',
        'Southern Vancouver Island is a traditional wintering ground for the lək̓ʷəŋən and W̱SÁNEĆ peoples because it was bountiful and protected. Vancouver Island is still considered lush by comparison to other parts of the world, but this sense of abundance can create the impression that Nature will handle it when humans intervene with old growth logging or salmon farms. In fact, our Coastal Douglas Fir ecosystem is considered critically endangered as a result of development pressures, recent climate change events, and resource extraction/interventions.',
        'Conserving and protecting the local natural environment should be a key focus in contributing to a more stable climate and playing our part as global citizens. Our temperate forests are a net carbon sink, typically containing roughly 100 metric tons of carbon per hectare.',
        'Restoring our fish-bearing streams will support populations of salmon that are a keystone species for the west coast of North America. The food web relies on healthy salmon - and our support of the food web is mission critical.',
        'BC is also a hotbed of innovation with programs and businesses to facilitate all forms of climate action. Rather than being complacent in the quality of life Nature offers up everyday, we have the opportunity to be a node of health and resilience that the world’s human-built and natural systems can connect to and rely on.',
      ]
    },
  },
  act: {
    initiatives: [
      {
        title: 'NatuR&D',
        link: 'https://naturnd.com/collaborate/',
        image: require('../png/NatuRD.png'),
        description: 'NatuR&D exists to help people create a life of choices that support their health in concert with the planet\'s. We work with communities to facilitate conversations about their concerns to create solutions that fit the charater and scope of the issues as they see them. Working with Nature is our best chance for long-term and even short-term resilience.  We help you spot the opportunities to create a system that is connected, protected, and able to adapt to changing conditions. Work with NatuR&D to give your ecosystem, your economy and your community\'s future a boost.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Van. Is. and Coastal Comm. Climate Leadership Plan',
        link: 'http://www.viccclp.com/',
        image: require('../png/VICCCLP.png'),
        description: 'The VICC-CLP Steering Committee is an independent group of local government representatives working to build a climate leadership plan for Vancouver Island and Coastal Communities. Working from the unique circumstances of individual communities—rural, urban and First Nations— the aim is to create a plan that will "catalyze climate mitigation and adaptation throughout the whole region, doing so in the spirit of decolonization."',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'City of Victoria - Volunteering',
        link: 'https://www.victoria.ca/EN/main/residents/public-safety/emergency-preparedness-victoriaready/volunteer-with-us.html',
        image: require('../png/CityOfVictoria.png'),
        description: 'The City of Victoria is putting out the call for volunteers to join their Emergency Support Servies (ESS) Team. ESS is a Provincial Government program for local authorities and Indigenous governments to deliver and coordinate essential services to the public during an emergency. ESS provides short-term, basic support to those impacted by emergencies ranging from a single house fire to extreme weather, tsunami, or earthquakes. Check out the wide range of available volunteer placements. No experience necessary. Free training is provided and volunteers gain valuable experience in public safety, and the opportunity to help out in an emergency.',
        tags: [
          Tag.Program,
          Tag.Government,
        ],
      },
      {
        title: 'Beacon Community Services',
        link: 'https://beaconcs.ca/',
        image: require('../png/BeaconCommunityServices.png'),
        description: 'Beacon Community Services staff and volunteers support people on Southern VI and the outer Gulf Islands through a wide range of programs including children, youth and family services, counselling, training and employment, seniors’ care, housing, and volunteer services. Be sure to check out the giant colourful mural created by Coast Salish artist Andrea Fritz especially for Beacon’s main administration office at 2723 Quadra St. And Beacon asks us to “honk to say hello” when you see the spiffy blue and white bus that allows Beacon to be on the road, connecting people from Beacon’s care homes or programs with local activities and services.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Saanich Peninsula Environmental Coalition',
        link: 'https://saanichpeninsula.ca/',
        image: require('../png/SPEC.png'),
        description: 'In respectful collaboration with the W̱SÁNEĆ Nation, the municipalities of Central Saanich, North Saanich and Sidney, the Saanich Peninsula Environmental Coalition is working to integrate the principles and strategies of a bioregional framework into municipal OCPs. Thinking and planning in terms of bioregions - as opposed to political or administrative regions - will better support the overall health of the environment and, by extension, the diversity of human cultures and interests in that bioregion. Through the bioregional lens, the Coalition recommends policy change and invites public response and engagement to develop a stronger, more comprehensive, and citizen-approved approach to ecological sustainability.',
        tags: [
          Tag.Organization,
        ],
      },
      {
        title: 'Wild ARC',
        link: 'https://spca.bc.ca/locations/wild-arc/',
        image: require('../png/BCSPCAWildArc.png'),
        description: 'The BC SPCA Wild Animal Rehabilitation Centre (Wild ARC) provides care to injured, sick, orphaned and distressed wildlife with a goal of releasing recovered animals back into the wild. Wild ARC advocates for both wild animals and their habitat – "there is no point in rehabilitating wildlife if there is no intact environment for them to return to.” Wild ARC reports that more than 80 percent of the animals in their care "are in trouble because of something related to human activity. Wild ARC aims to reduce this impact by educating the public about wildlife, animal welfare and co-existing with nature."',
        tags: [
          Tag.Organization,
        ],
      },
      {
        title: 'Canadian Red Cross - Victoria',
        link: 'https://www.redcross.ca/in-your-community/british-columbia-and-yukon/british-columbia-and-yukon-find-a-branch/victoria-office',
        image: require('../png/Placeholder.png'),
        description: 'The Canadian Red Cross Society helps people and communities in Canada and around the world in times of need and supports them in strengthening their resilience. The Red Cross offers an extensive network of programs and services that actively serve local communities in BC. Programs include Emergency and Disaster Services; First Aid and CPR courses; Health Equipment Loans; and Friendly Calls providing emotional support, coping strategies, and guidance to additional well-being resources in the community.',
        tags: [
          Tag.Organization,
        ],
      },
      {
        title: 'RAVEN - Mapping Impact',
        link: 'https://raventrust.com/impact/mapping-impact/',
        image: require('../png/RAVEN.png'),
        description: 'RAVEN raises legal defence funds to assist Indigenous Peoples who enforce their rights and title to protect their traditional territories. With the assistance of Pro Bono Students Canada and UVIC law student volunteers, RAVEN has created this interactive map as a visual survey of groundbreaking Indigenous Legal cases from coast to coast to coast. Explore this map to learn how Nations have worked to define and defend rights from fishing and hunting rights, to property rights and the right to consultation. This project is an invaluable resource for us all to learn about the significant Indigenous legal victories that have become the backbone for current and future cases brought into Canadian courts.',
        tags: [
          Tag.Organization,
          Tag.Indigenous,
        ],
      },
      {
        title: 'VictoriaReady',
        link: 'https://www.victoria.ca/EN/main/residents/public-safety/emergency-preparedness-victoriaready.html',
        image: require('../png/VicEmergencyPrep.png'),
        description: 'VictoriaReady is an initiative of the City of Victoria that encourages and teaches everyday emergency preparedness for the people and organizations of its city. In addition to specific information related to topics such as extreme heat and weather events, tsunami preparedness, and business continuity in the event of disruption, VictoriaReady also offers FREE Emergency Preparedness workshops, and opportunities to volunteer in emergency management.',
        tags: [
          Tag.Initiative,
          Tag.Government,
        ],
      },
      {
        title: 'Climate Action Accelerator to Net Zero',
        link: 'https://missionfrommars.ca/caanzero/',
        image: require('../png/CAANZero.png'),
        description: 'As more cities commit to a net-zero future by 2050, the MaRS Discovery District created the Climate Action Accelerator to Net Zero initiative to help small and medium-sized municipalities secure the capital and expertise required to meet this challenge head on. The City of Victoria has actively partnered alongside financial institutions and energy experts in the design of the CAANZero model.',
        tags: [
          Tag.Funding,
          Tag.Target,
        ],
      },
      {
        title: 'BC Climate Emergency Campaign',
        link: 'https://bcclimateemergency.ca/',
        image: require('../png/BCClimateEmergency.png'),
        description: 'Marches, rallies, protests, awareness campaigns. All can be powerful tools to move the needle on climate goals. They send an important message to our politicians and industry leaders about our values and what kind of change we wish to see. Many organizations come together to make these direct forms of action happen…',
        tags: [
          Tag.Initiative,
        ],
      },
      {
        title: 'Nature-Based Climate Action Funding',
        link: 'https://victoriafoundation.bc.ca/grants-funding/nature-based-climate-action-funding/',
        image: require('../png/VictoriaFoundation.png'),
        description: 'Find support from the Victoria Foundation with climate action funding.',
        tags: [
          Tag.Funding,
        ],
      },
      {
        title: 'Indigenous Climate Hub',
        link: 'https://victoriafoundation.bc.ca/grants-funding/nature-based-climate-action-funding/',
        image: 'https://indigenousclimatehub.ca/wp-content/uploads/2020/10/ICH-logo-clr-01-sml.png',
        description: 'The Indigenous Climate Hub is a web platform developed by Indigenous peoples for Indigenous peoples across Canada. With the expectation that Indigenous communities will experience the impacts of climate change in ways that may be different from most non-Indigenous Canadians, the Hub offers a place for Indigenous peoples to share their unique climate change experiences and stories. The Hub also provides access to climate change resources and tools that will support Indigenous peoples in monitoring and adapting to the various impacts of climate change.',
        tags: [
          Tag.Organization,
          Tag.Indigenous,
        ],
      },
      {
        title: 'Indigenous Climate Action',
        link: 'https://www.indigenousclimateaction.com/',
        image: 'https://images.squarespace-cdn.com/content/v1/5e8e4b5ae8628564ab4bc44c/89a44f05-bc84-4074-a995-d11b4940acf3/Header+Logo.jpg?format=1500w',
        description: 'Indigenous Climate Action (ICA) is an Indigenous-led organization guided by "a diverse group of Indigenous knowledge keepers, water protectors and land defenders from communities and regions across the country.” The ICA offers programs and publications that promote knowledge and awareness of climate change issues, and how climate action is intricately connected to Indigenous rights and sovereignty.',
        tags: [
          Tag.Organization,
          Tag.Indigenous,
        ],
      },
      {
        title: 'Youth Policy Program - LEVEL',
        link: 'https://levelvf.ca/youth-policy-program/program-outline/',
        image: 'https://levelvf.ca/wp-content/uploads/2018/12/header-ypp.png',
        description: 'The LEVEL Youth Policy Program (YPP) brings together Indigenous and racialized immigrant and refugee youth from across BC to provide training to shape and advocate for public policy that addresses issues impacting their lives. The YPP is an initiative of the Vancouver Foundation.',
        tags: [
          Tag.Initiative,
          Tag.Program,
        ],
      },
      {
        title: 'One Planet Conversations',
        link: 'https://oneplanetconversations.ca/',
        image: 'https://oneplanetconversations.ca/wp-content/uploads/2020/04/ecosystem-vs-pollution-background_23-2147907578.jpg',
        description: 'Through conversations that engage, educate and empower people across the Greater Victoria Region, One Planet is tackling these two big challenges: we act as if we have several planets to sustain us when in reality we only have one; and we are not talking about our local and global crisis, or what it means for us, our children, our communities and future generations. With the mission to learn, share and work together, One Planet is helping us all to understand the challenges and strengths of One Planet living and becoming a One Planet Region.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Creatively United',
        link: 'https://creativelyunited.org/',
        image: 'https://creativelyunited.org/wp-content/uploads/2020/03/fb-share-banner.jpg',
        description: 'CreativelyUnited.org is a free, non-profit Community Solutions Sharing Hub. Created in the spirit of collaboration and unity to address climate change - simply because “we know a lot of people are doing amazing things that more people should know about” - on the Hub you will find a host of positive and creative solutions, videos, events, information and resources that contribute to healthier, happier individuals and communities. CreativelyUnited.org invites everyone to contribute to the Hub. This is a prime spot to share your ideas, tips, book and movie reviews, music, art, information and resources. Don’t forget to post your events and check out other hot things happening on the Community Event Calendar.',
        tags: [
          Tag.Portal,
        ],
      },
      {
        title: 'Cool It! Climate Leadership Training Program',
        link: 'https://bcsea.org/cool-it-climate-leadership-training/',
        image: 'https://bcsea.org/wp-content/uploads/2022/11/Updated-infographic-768x311.png',
        description: 'The Cool It! Climate Leadership Training program is an initiative of the BC Sustainable Energy Association. The program aims to develop and empower young sustainability champions in schools in British Columbia. This fun, informative, and interactive training empowers youth (and their teachers and families) to learn about climate change science, take tangible actions to reduce their own carbon footprints at home, and band together for collective climate action at school and in their local community. Climate education programs are available virtually or in-person for students and classes grades 4-12.',
        tags: [
          Tag.Initiative,
          Tag.Program,
        ],
      },
      {
        title: 'RegenerateBC',
        link: 'https://regeneratebc.org/',
        image: 'https://regeneratebc.org/wp-content/uploads/2023/09/Logo-RegenBC.png',
        description: 'RegenerateBC is a fully independent, volunteer-run, non-profit organization inspired by the idea that we have the necessary solutions to tackle the climate emergency - and to realize enormous social and economic co-benefits in the process. To this group, “Regeneration" means putting life at the centre of every action and decision, and the burgeoning worldwide regeneration movement aims to end the climate crisis in one generation. RegenerateBC offers courses, resources, and information about climate initiatives and organizations throughout BC.',
        tags: [
          Tag.Organization,
        ],
      },
      {
        title: 'Community Health & Climate Change - VCH',
        link: 'https://storymaps.arcgis.com/stories/7bf7141bb6fd41fb9b61a02cfbc61ecd',
        image: require('../png/VancouverCoastalHealth.png'),
        description: 'This ArcGIS storymap created by Vancouver Coastal Health shows climate hazards across BC\'s Lower mainland with help interpreting the hazard data.',
        tags: [
          Tag.StoryMap,
        ],
      },
      /*
      {
        title: 'Community Health & Climate Change - Interior Health',
        link: 'https://wwf.panda.org/projects/one_planet_cities/one_planet_city_challenge/',
        image: require('../png/InteriorHealth.png'),
        description: 'Mapping Exposure, Sensitivity, and Adaptive Capacity to Four Health-Related Climate Hazards in BC\'s Interior.',
        tags: [
          Tag.StoryMap,
        ],
      },
      */
      {
        title: 'One Planet City Challenge',
        link: 'https://wwf.panda.org/projects/one_planet_cities/one_planet_city_challenge/',
        image: require('../png/OnePlanetCity.png'),
        description: 'The One Planet City Challenge is an invitation to every local government on the planet to show the world what climate action looks like in their community and the difference it makes.',
        tags: [
          Tag.Initiative,
        ],
      },
      {
        title: 'One Planet Saanich',
        link: 'https://oneplanetbc.com/one-planet-saanich/',
        image: require('../png/OnePlanetBC.png'),
        description: 'As an early adopter, One Planet Saanich is engaging across sectors and generations in the Saanich community through training, meet-ups, the One Planet Student Challenge, apps, events, and resources since 2018.',
        tags: [
          Tag.Initiative,
          Tag.Government,
        ],
      },
      {
        title: 'Project Drawdown',
        link: 'https://www.drawdown.org/solutions',
        image: require('../png/ProjectDrawdown.png'),
        description: 'This ever-evolving collection of strategies for reversing global warming in the next 30 years draws on the world’s top talent in analyzing solutions that are available now, scalable, financially feasible, measurable, and have a net positive impact.',
        tags: [
          Tag.Report,
        ],
      },
      {
        title: 'Global Alliance for the Rights of Nature',
        link: 'https://www.garn.org/rights-of-nature/',
        image: require('../png/GlobalAllianceNatureRights.png'),
        description: 'This network of individuals and organizations is a growing alliance with the goal of legally recognizing, respecting and enforcing that Nature has rights to exist, persist, maintain and regenerate its vital cycles.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Territories of Life',
        link: 'https://report.territoriesoflife.org/',
        image: require('../png/TerritoriesOfLife.png'),
        description: 'This 2021 report demonstrates that the healthy areas of our planet are largely because of Indigenous and local community effort.  Our success in addressing climate change depends on all governments, businesses, and organizations to honour the rights of Indigenous peoples, their connection to the land, and to learn from their way of life.',
        tags: [
          Tag.Report,
        ],
      },
      {
        title: '1.5-Degree Lifestyles',
        link: 'https://hotorcool.org/1-5-degree-lifestyles-report/',
        image: require('../png/1p5DegreeLifestyles.png'),
        description: 'The goal of the Hot or Cool Institute is to provide policy-makers and communities with the facts that support hard decisions and new lifestyle strategies that match the limits of the planet.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'West Coast Climate Action Network',
        link: 'https://westcoastclimateaction.ca/',
        image: require('../png/WestCoastClimateAction.png'),
        description: 'This network brings together individuals and organizations in BC with a deep concern about the climate emergency and a desire to take collective action.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Convention on Conservation of Migratory Species',
        link: 'https://www.cms.int/en/topics/ecological-connectivity',
        image: require('../png/ConventionMigratorySpecies.png'),
        description: 'The Convention on the Conservation of Migratory Species of Wild Animals is an organization dedicated to creating global connectivity of ecosystems and habitats for the migration of wild species around the planet with the deep understanding that this action maintains life support systems and the vital functions of the planet as a living entity that benefits all species.',
        tags: [
          Tag.Organization,
          Tag.Agreement,
        ],
      },
    ],
  },
};
export default Question;