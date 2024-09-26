import {
  LegendGroups,
  InitiativeTags as Tag,
} from '../TextContent';

const Question = {
  key: 'be-healthy',
  title: "Be Healthy",
  question: "Personal and planetary health are the same thing. How can I keep my natural life support system connected and protected?",
  image: require('../png/Naturehood.png'),
  layers: [
    { key: 'BigTrees', active: true, group: 'Trees' },
    { key: 'CarbonSequestration', active: false, group: 'Landcover' },
    { key: 'CherryTrees', active: false, group: 'Trees' },
    { key: 'CommunityMaps', active: true, group: 'Community'},
    { key: 'ENBS', active: true, group: 'Community' },
    { key: 'GreenBlueBelt', active: false, group: 'Landcover' },
    { key: 'MaltbyLakeBirdsong', active: true, group: 'Landcover' },
    { key: 'Pollinators', active: true, ...LegendGroups.OGM },
    { key: 'SensitiveEcosystems', active: false, group: 'Landcover' },
    { key: 'SpeciesAtRisk', active: false, group: 'Landcover' },
    { key: 'StewardshipGroups', active: false, group: 'Community' },
    { key: 'TreeBylaws', active: true, group: 'Trees' },
    { key: 'TreeCoverage2005', active: false, group: 'Trees' },
    { key: 'TreeCoverage2019', active: false, group: 'Trees' },
    { key: 'TreeEquity', active: true, ...LegendGroups.OGM },
    { key: 'Watersheds', active: false, group: 'Landcover' },
  ],
  sections: {
    one: [
      {
        heading: 'The vital signs are good if...',
        items: [
          'big trees are still standing despite development projects in your region. Their roots are surrounded by rich, loose soil letting the microbiome transform atmospheric gasses into beautiful plants and food. Older trees have more to share so they are identified as key contributors to the "wood wide web" on this map.',
          'you can see & hear birds and bees visiting the pollinator gardens all the way down your street, meaning the food web is working.',
          'infrastructure, transportation, and shipping routes accommodate species migration routes and timing.',
          'there are thriving eelgrass and bull kelp beds to provide additional nurseries, nutrients, and transition zones.',
        ]
      },
      {
        heading: 'Going into system failure if...',
        items: [
          'greenspaces are fragmented so that the populations of biodiversity like turtles, frogs and hummingbirds don’t have the habitats needed to exist over time.',
          'the tree protection bylaws don’t contribute to an urban forest strategy that facilitates the "wood wide web".',
          'your neighbourhood has less than 30% canopy cover and you can’t see three trees from your window.',
          'you see mostly dark pavement and hard dirt that will radiate heat and move road runoff carrying toxins into nearby watersheds.',
          'there isn’t an active stewardship group in your area. This may mean people aren’t prioritizing Nature in the neighbourhood.',
        ]
      },
    ],
    two: {
      heading: 'Turn the concrete jungle into an urban ecosystem.',
      items: [
        'Use your Open Green Map account to plot significant trees and invasive species infestations in your neighbourhood.',
        'Plant & plot your pollinator garden to show connected pollinator habitat which leads to mental health, food security, soil moisture retention and temperature regulation.',
        'Extend the reach of the closest ecosystem by planting native species in pots or in the ground. This will boost the soil microbiome to transform guck into good.',
        'Keep poisons out of the watershed and food web by avoiding the use of pesticides and herbicides in your garden.',
        'Tie your boat to buoys so that you don’t drop anchor in an eelgrass bed.',
        'Be an ally to Indigenous peoples and their ways of life.',
        'Support your local stewardship groups in restoring ecosystem performance so we can welcome the salmon and herring returning, knowing the food chain is working.',
        'Notice Nature’s timing and move to the rhythm of spring cherry tree storms, long summer evenings, fall harvest, and winter rest. Get to know the timing of key species migrations so that you can witness, sync up and celebrate Nature’s rhythm.',
      ]
    },
    three: {
      items: [
        'Get outside. You are Nature. Research shows that anyone who spends at lease 2 hours in Nature a week can improve their mental, emotional, and physical health. Nature can boost your confidence, immune system and brain power.',
        'The sounds of Nature have a positive impact on your stress levels and well-being. From babbling brooks to bird calls, we are learning about how soothing the sound of Nature is on the soul.',
        'Your Naturehood can protect you from viruses and bacteria. By creating space for Nature, life support functions like air and water filtration happen. Research shows a clear link between the loss of Nature and the increase of pathogens. By making sure there is enough space for wildlife habitat, we minimize direct human-wildlife contact get the benefit of ecosystem services without competing for living space.',
        'Pollinators are essential for food production on Vancouver Island, and pollination relies on the health of our wild ecosystems. Many pollinators are facing extinction around the globe due to development and fragmentation of habitat, absence of food, pesticides (neonicotinoids), invasive species, general pollution and climate change. Human settlement has altered watersheds affecting the key corridors that are home to these creatures. Your pollinator garden, bird baths and trees provide vital connections in the ecosystem.',
        'The concrete jungle is more likely to create poverty and impact human health too. A 2022 Nature Canada Report revealed that the percentage of tree canopy is much lower in low-income and racialized neighbourhoods. In October 2022, Vancouver Island’s chief medical officer, Dr. Reka Gustafson says she wants to tackle mental health and track how climate change is making these inequities more pronounced. Learn about the clear link between the quality of the Naturehood and your long-term health. Show Nature some love and let the sights, sounds, scents and sensations work their healing magic for you.',
        'Life is also hard for trees in a concrete jungle. The combination of pollution, increasing population and climate change, creates is a lot of stress and pressure on urban trees.',
        'UBC scientist Suzanne Simard coined the terms “Mothertrees” and the “Wood Wide Web” when she discovered that trees and their roots are connected through an underground network of mushrooms. These fungal webs allow trees to pass food, medicines and messages to each other through the soil’s microbiome. The nodes of the underground network can be 25 kilometres apart. Twenty five kilometres of continuous soil in the city is hard to find so when a tree calls in the city, does it make a sound?',
        'The urban ecosystem creates “natural infrastructure” that builds resilience to climate change. Biodiversity like birds, insects and other critters depend on urban forest ecosystems for their habitat. The forested greenspaces act as pathways to forests outside the city limits.',
        'When a tree falls in the forest, it feeds the next generations of trees for up to five times its age. Big trees and old growth forests are also important because they are able to provide ecosystem services like: creating habitat, water storage and filtration, wind buffering, carbon drawdown, bank stabilization, dispersing seismic waves, clean air, and storing carbon at a scale that small trees cannot.',
        'Particularly in this time of climate crisis, it is incredibly important to maintain forests. We can only hope that in this crisis, the increasing number of climate impacts are a wake-up call for us to realize that we are part of Nature and our health and safety depends on vital and working ecosystems. The chemicals trees use to communicate are similar to the neurotransmitters in the human brain and we know how nice it is when we have good word retrieval and can remember people’s names.',
        'Science is still catching up with what Indigenous people have known forever: we are made of the same stuff and we are all related. Lets keep Nature close and our connection strong.',
        'The trees talking to each other. Pass it on.',
      ]
    },
  },
  act: {
    initiatives: [
      {
        title: 'The State of the Forest in Canada',
        link: 'https://www.stateoftheforest.ca/',
        image: require('../png/StateOfTheForest.png'),
        description: 'The State of Forests in Canada: Seeing Through the Spin is an NGO-produced report that challenges the yearly official government account of how our forests are faring as told in The State of Canada’s Forests Annual Report. Drawing upon scientific evidence, data, and metrics, Seeing Through the Spin deconstructs Natural Resources Canada’s portrayal of the Canadian forestry sector as “sustainable," presenting  the alternative perspective that the actual state of the forests is far more complex and worrisome, and the logging industry far less sustainable, than the government claims.  Seeing Through the Spin includes practical recommendations for policy reform.',
        tags: [
          Tag.Report,
        ],
      },
      {
        title: 'Activate your Neighbourhood',
        link: 'https://activateyourneighbourhood.ca/',
        image: require('../png/ActivateYourNeighbourhood.png'),
        description: 'This Tactical Guide to help you re-imagine, re-think and re-purpose the spaces in your neighbourhood to support and encourage physical activity and social connections is funded by the federal public health agency and created by Canada Parks and Recreation.',
        tags: [
          Tag.Initiative,
          Tag.Program,
        ],
      },
      {
        title: 'Habitat Acquisition Trust',
        link: 'https://hat.bc.ca/wildlife',
        image: require('../png/HAT.png'),
        description: 'Habitat Acquisition Trust (HAT) runs several Species at Risk Programs: "On Southern Vancouver Island, the increase in urbanization and loss of habitat has lead to many species at risk in our region. HAT works to protect and improve habitat for many of these species, and though we wish we could help them all we only run programs from a few of them."',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'W̱SÁNEĆ Peninsula Environmental Organizations',
        link: 'https://storymaps.arcgis.com/stories/5239fadd726c462da56ebcbe231c57be',
        image: require('../png/WSANECStoryMap.png'),
        description: 'There are many people & organizations across the Saanich Peninsula working towards healthier ecosystems and connected communities across municipal boundaries. Learn about their work in this StoryMap created by UVic Community Mapping students Evan Gerbrecht, Casey Lake, Samantha Denton, Ethan Heckrodt with direction from the Saanich Peninsula Environmental Coalition.',
        tags: [
          Tag.Organization,
          Tag.Indigenous,
        ],
      },
      {
        title: 'Quadra Cedar Hill Community Association',
        link: 'https://qchca.org/',
        image: require('../png/QuadraCedarHill.png'),
        description: 'The mission of QCHCA is to be an advocate and trusted resource for sustainability, vibrancy and engagement in our community. Through its Climate Action initiative, the community is undertaking pollinator mapping, urban food farming and tree canopy initiatives and an annual going-greener event.',
        tags: [
          Tag.Organization,
        ],
      },
      {
        title: 'Gorge Tillicum Community Association',
        link: 'https://www.gorgetillicum.ca/',
        image: require('../png/GorgeTillicum.png'),
        description: '"The Gorge Tillicum Community Association is a volunteer-based non-profit organization that seeks to further the collective interests of the Gorge Tillicum neighbourhood.  The GTCA is recognized by Saanich as a significant community voice on local issues."',
        tags: [
          Tag.Organization,
        ],
      },
      {
        title: 'Connectivity on the Saanich Peninsula',
        link: 'https://storymaps.arcgis.com/stories/a68767b15837450aaf8a0d7e2094f345',
        image: require('../png/Connectivity.png'),
        description: 'The purpose of this StoryMap is to highlight the historical connectivity between culture, community, and ecology on the Saanich Peninsula, and look for ways to improve connectivity in future collaboration with the Saanich Peninsula Environmental Coalition (SPEC).  This map was created by Ella Bethune, Darryl Seah, Ben DesRosiers, Ardis Mellor-Laing, as part of their work with the University of Victoria, Saanich Peninsula Environmental Coalition, and the Engage with Nature-based Solutions Initiative.',
        tags: [
          Tag.StoryMap,
        ],
      },
      {
        title: 'Greater Victoria NatureHood',
        link: 'https://experience.arcgis.com/experience/b360590fbbb44966952c0cfe240d65c4',
        image: require('../png/NatureInTheCity.png'),
        description: 'Use this digital map to help you navigate natural places in Greater Victoria. Learn about the Greater Victoria NatureHood initiative, ecosystems and biodiversity, waterways and watersheds, riparian zones, and some of the species of plants and animals found in the region.',
        tags: [
          Tag.Map,
        ],
      },
      /*
      {
        title: 'Greater Victoria Greenbelt Society',
        link: 'https://www.marylakeconnections.ca/greater-victoria-greenbelt-society/',
        description: 'The mission of the Greater Victoria Greenbelt Society is “to foster respect for nature and promote the protection of natural areas for the benefit of all future generations through environmental conservation, restoration, education, and cultural activities in alliance with local First Nations." The GVGS’s current project is the W̱MÍYEŦEN Nature Sanctuary (formerly Mary Lake), a special conserved area  with nature house and programs focused on nature and ecology.',
        image: require('../png/Placeholder.png')
      },
      */
      {
        title: 'Friends of Maltby Lake Watershed Society',
        link: 'https://maltbylake.com/',
        image: require('../png/MaltbyLake.png'),
        description: 'Maltby Lake is at the headwaters of the Tod Creek Watershed. The 21-acre near pristine water body is surrounded by 172 acres of relatively undisturbed forest and wetland. The property is an example of unspoiled lake and land ecosystems. The Friends of Maltby Lake Watershed Society is a registered BC non-profit society and Canadian Registered Charity established by BC environmental activists to: conserve the riparian, Garry Oak and coastal Douglas Fir ecosystems, the sensitive flora and fauna therein and the watershed ecosystems draining into and from, Maltby Lake; educate the public and relevant stakeholders to the importance of this delicate ecological and cultural landscape; and create wildlife corridors, generate habitat for native species, and to reduce pollution on Vancouver Island for the benefit and enjoyment of the public.',
        tags: [
          Tag.Organization,
        ],
      },
      {
        title: 'Nature Canada Report: Tree Equity',
        link: 'https://naturecanada.ca/wp-content/uploads/2022/09/Nature-Canada-Report-Tree-Equity.pdf',
        image: require('../png/NatureCanadaReport.png'),
        description: 'This report outlines the need for "the 3-30-300 rule" to support universal well-being across Canada\'s cities. Everybody should be able to see 3 trees from their home. Neighbourhoods should have a minimum of 30% canopy cover and access to a greenspace of one hectare minimum which is less than 300 meters from home.',
        tags: [
          Tag.Report,
        ],
      },
      {
        title: 'CRD Educational Resources',
        link: 'https://www.crd.bc.ca/education/school-programs/education-resources#tab-5',
        image: require('../png/CRDEducational.png'),
        description: 'The Capital Regional District has published a number of identification charts and fact sheets about the living things that can be found in our regional parks. Follow the link to learn about local mosses, seaweeds, lichens, shoreline birds and more!',
        tags: [
          Tag.Portal,
        ],
      },
      {
        title: "BirdLife International",
        link: "https://www.birdlife.org/what-we-do/",
        image: require('../png/Birdlife.png'),
        description: "BirdLife International's mission is to conserve birds, their habitats, and global biodiversity, working with people toward sustainability in the use of natural resources.",
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Colquitz Storymap',
        link: 'https://storymaps.arcgis.com/stories/e884cb42946a46d1800e90a692eca278',
        image: require('../png/ColquitzRiver.png'),
        description: 'The Colquitz Storymap beautifully depicts the ongoing Colquitz River restoration project, launched by Peninsula Streams and the  District of Saanich in 2019. Interact with the map to learn about how the renewed health of the stream, as indicated by the return of native species including coho salmon, coastal cutthroat trout, otters and grey blue herons. Volunteer at native planting parties in the watershed to help ensure these positive changes continue and endure.',
        tags: [
          Tag.StoryMap,
        ],
      },
      {
        title: 'Gorge Stewardship Centre',
        link: 'https://stewardshipcentrebc.ca/esquimalt-gorge-park-gs-demonstration-site/',
        image: require('../png/GorgeStewardshipCentre.png'),
        description: 'The Stewardship Centre for BC promotes and delivers stewardship education, and champions science-based stewardship practices for land and water in BC. As part of the Resilient Coasts for Salmon (RC4S) project, the Stewardship Centre for BC is partnered with community groups, the CRD, and the Songhees Nation and Esquimalt Nations to use a nature-based approach in restoring the ecological and cultural values of the Esquimalt Gorge Park shoreline.',
        tags: [
          Tag.Organization,
        ],
      },
      {
        title: 'Greater Victoria Green Team',
        link: 'https://greenteamscanada.ca/our-green-teams/greater-victoria-green-team/',
        image: require('../png/GVGreenTeam.png'),
        description: 'The Greater Victoria Green Team has worked since 2014 to connect people and nature for the well-being of all. There are plenty of opportunities for volunteers to get their hands dirty with the Green Team. Projects include removal of invasive plants and native planting; picking up litter from shorelines, creeks and parks; trail building and maintainence; and tending vegetable gardens on educational farms.',
        tags: [
          Tag.Organization,
        ],
      },
      {
        title: 'Satinflower Nurseries',
        link: 'https://satinflower.ca/',
        image: require('../png/SatinflowerNurseries.png'),
        description: 'Satinflower Nurseries connects people with nature by providing native plants, seeds, and expertise in growing them. The plants and seeds they provide are native to a variety of habitats in the Victoria area, including meadows, woodlands, forests, wetlands, and beaches. Satinflower specializes in the restoration and ecology of Garry oak ecosystems, and meadowscaping - the transformation of lawns to meadows that become much-needed patches of habitat for migratory pollinators.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'The Power of Nature for Mental Health and Well-Being',
        link: 'https://www.csla-aapc.ca/sites/csla-aapc.ca/files/Nature%20Note%20EN.pdf',
        image: require('../png/NatureForMentalHealth.png'),
        description: 'This paper from the Canadian Society of Landscape Architects’ Human Health and Wellbeing Committee highlights the benefits nature has on mental health.  In Canada, programs like PaRx and Prescri-Nature enable healthcare professionals to prescribe spending time in nature.  However, accelerating urbanization can make access to greenspaces a challenge for many. Landscape architects will continue to play an active role in contributing to the health and well-being of Canadians by making natural spaces more accessible to all.',
        tags: [
          Tag.Report,
        ],
      },
      {
        title: 'The Dawn Chorus',
        link: 'https://explore.dawn-chorus.org/',
        image: require('../png/DawnChorus.png'),
        description: 'The Dawn Chorus project maps a massive collection of birdsong, collected from around the world in May 2020.  Michael Gorman, a bird lover in Germany, initiated this project in what he recognized to be an "extraordinary acoustic moment” - the pandemic had reduced ground and air traffic, and humans were making a fraction of the noise they usually do, making birdsong much easier to hear. He inspired thousands worldwide to get outside, listen, hold up their smartphones and press record. These recordings are now shared on this global sounds map which captures a unique moment in human history through the songs of birds. The map also provides an invaluable resource for understanding the global state of bird biodiversity. The Dawn Chorus team is exploring future collaborations with sound artists - let’s listen for what’s to come!',
        tags: [
          Tag.Map,
        ],
      },
      {
        title: 'Compost Education Centre',
        link: 'https://compost.bc.ca/',
        image: 'https://compost.bc.ca/wp-content/uploads/2023/01/CEC-Logo-Colour-Digital.png',
        description: 'The Compost Education Centre is a non-profit organization, dedicated to teaching about organic growing and sustainable living. It’s weekly public workshops address everything from composting (of course) to harvesting rainwater, to basket weaving with invasive species. CEC’s lush demonstration gardens - open for tours - are a true oasis at the heart of the Fernwood community. Check out CEC’s website for a Soil Quality Map of Victoria. This map generally indicates where elevated levels of metals in soil may be present - great information for individuals and communities who want to grow food safely or simply assess whether to seek out more detailed information on area-wide soil health.',
        tags: [
          Tag.Organization,
        ],
      },
      {
        title: 'The Metchosin Foundation',
        link: 'https://metchosinfoundation.ca/home/',
        image: 'https://metchosinfoundation.ca/wp-content/uploads/2018/06/cropped-MF-Logo-Oct-2017-transparent-1933x1242.png',
        description: 'The Metchosin Foundation is focussed on protecting and sustaining important natural habitats and environmental values in its region.  It’s initiatives work at the exciting intersection of science, education, art and community - inspiring Metchosin residents and visitors to recognize the interdependence of ecological health, biodiversity, and human well-being. Among the Foundations’s Recent initiatives are  a multi-year fund-raising and project coordination initiative to help support the Sc’ianew Mary Hill Project; sustaining financial support for the Memorial Garry Oak Meadow restoration project on Metchosin Municipal Grounds; and collaborating with other local organizations to produce nature art cards featuring local plants, birds and mushrooms. The Metchosin Foundation is also engaged with the Bilston conservation corridor project working to secure a 7 km long conservation corridor that will link hilltop headwaters to the protected seashore at Witty’s Lagoon.',
        tags: [
          Tag.Organization,
        ],
      },
      {
        title: 'The Mothertree Project',
        link: 'https://mothertreeproject.org/',
        image: require('../png/Mothertree.png'),
        description: 'The Mother Tree project is investigating forest renewal practices that will protect biodiversity, carbon storage and forest regeneration as climate changes. The research, led by Dr. Suzanne Simard, explores how connections and communication between trees, particularly below-ground connections between Douglas-fir Mother Trees and seedlings, could influence forest recovery and resilience following various harvesting and regeneration treatments across different climates.',
        tags: [
          Tag.Initiative,
          Tag.Program,
        ],
      },
      {
        title: 'Indigenous Protected & Conserved Areas',
        link: 'https://conservation-reconciliation.ca/about-ipcas',
        image: require('../png/IPCA.png'),
        description: 'The 2018 We Rise Together Report defines IPCAs as "lands and waters where Indigenous governments have the primary role in protecting and conserving ecosystems through Indigenous laws, governance and knowledge systems.” More than 60 IPCAs are now led by Indigenous Peoples from coast-to-coast-to-coast, and there is growing recognition that IPCAs and Indigenous-led conservation will have a critical role in achieving Canada’s climate change and biodiversity targets.',
        tags: [
          Tag.Report,
          Tag.Indigenous,
        ],
      },
      {
        title: 'Soil Factsheet: BC Ministry of Agriculture',
        link: 'https://www2.gov.bc.ca/assets/gov/farming-natural-resources-and-industry/agriculture-and-seafood/agricultural-land-and-environment/soil-nutrients/613100-1_soil_compaction.pdf',
        image: require('../png/SoilFactsheet.png'),
        description: 'Soil compaction refers to "the disruption and reduction of the large pores within the soil” which makes it harder for plant roots to grow down into soil layers, and restricts the movement of air and water through the soil. This Factsheet, produced by the Ministry of Agriculture, describes various causes and effects of soil compaction, as well as how soil structure may be improved.',
        tags: [
          Tag.Report,
        ],
      },
      {
        title: 'BC Big Tree Registry',
        link: 'https://bigtrees.forestry.ubc.ca/bc-bigtree-registry/',
        image: require('../png/BigTreeRegistry.png'),
        description: 'The BC BigTree Registry is maintained by the BC Big Tree Committee and supported by the Faculty of Forestry at the University of British Columbia. It\'s an evolving project whose mandate is "To identify, describe, monitor, and conserve the largest trees of each species within British Columbia, and to educate and enlist the help of its citizens in this task."',
        tags: [
          Tag.Initiative,
          Tag.Program,
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
        title: 'Co-Designing Urban Carbon Sink Parks',
        link: 'https://www.frontiersin.org/articles/10.3389/fenvs.2021.672468/full',
        image: require('../png/UrbanCarbonSinkParks.png'),
        description: 'Drawing on lessons learned from a demonstration area in a Helsinki park, this paper highlights the importance of healthy urban vegetation and soils for carbon sequestration, as well as for stormwater management, urban recreation and food production.',
        tags: [
          Tag.Report,
        ],
      },
      {
        title: 'Coastal Douglas Fir Conservation Partnership',
        link: 'https://www.cdfcp.ca/',
        image: require('../png/CoastalDouglasFir.png'),
        description: 'The Coastal Douglas-fir Conservation Partnership (CDFCP) promotes the conservation and stewardship of the Coastal Douglas-fir and associated ecosystems in south-western BC. Visit the site to learn about the unique ecosystems occurring within our Coastal Douglas-fir Moist Maritime Biogeoclimatic Zone, and to find out about the CDFCPs 30-year strategy for conserving these ecosystems.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'STAND.earth',
        link: 'https://stand.earth/about/',
        image: require('../png/StandEarth.png'),
        description: 'Stand.earth began over 20 years ago on the frontlines defending old-growth forests in BC. They are now a growing and diverse team demanding transformational change in three key impact areas: Protecting Forests, Moving Beyond Fossil Fuels, and Reinventing Cities and Transportation. Stand.earth strategies range from grassroots events and building networks, to investigative research and media campaigns. Check out this site to be inspired by powerful Stand.earth results stories, and meet Spencer, Stand.earth\'s “cup monster” who helped get Starbucks to work faster towards a 100% recyclable to-go cup.',
        tags: [
          Tag.Organization,
          Tag.Business,
        ],
      },
      {
        title: 'Victoria Grandmothers for Africa',
        link: 'https://www.vg4a.ca/',
        image: require('../png/VG4A.jpg'),
        description: 'VG4A is a group of over 100 Victoria grandmothers and grand others who work to raise funds and awareness to support Africa’s resilient grandmothers who have taken on the loving challenge of raising their grandchildren orphaned due to HIV & AIDS. Organizing, fundraising, awareness, and social events include sale of crafts at markets; school and community presentations; and an annual cycling tour. All proceeds from VG4A are donate to the Stephen Lewis Foundation Grandmothers to Grandmothers Campaign.',
        tags: [
          Tag.Organization,
        ],
      },
    ],
  }
};
export default Question;