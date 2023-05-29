// GeoJSON
// SVG

const WoodWideWeb = {
  title: "Wood Wide Web?",
  question: "Restoring & protecting connectivity of Nature's network?",
  image: require('./png/WoodWideWeb.png'),
  description: [
    {type: 'h2', content: "Comparison"},
    {type: 'p', content: 'Trees share resources and communicate via mycelial networks underground.¹ Older trees have more to share so they are identified as key contributors to the wood wide web on this map.² Aeration of the soil increases its capacity to process atmospheric gases therefore compaction rates are identified where available.  Traffic medians, roads and walking trails provide long uninterrupted stretches of compacted soil but aerated good soil and mycelial networks could exist alongside if supported. Ecosystem types are identified to inform adjacent planting to enhance carbon drawdown.  Migration routes and fish bearing streams are identified as natural nutrient transporters. Eel grass and bull kelp beds provide additional nurseries, nutrients and buffer zones to facilitate the nutrient cycle and food web.'},
    {type: 'h2', content: "Problem"},
    {type: 'p', content: 'As we re-design our lifestyles to reduce carbon emissions and meet the targets necessary to avoid ruining our homes across the globe, the importance of urban vegetation and soils for carbon sinks, stormwater drainage, food production and health outcomes have been underestimated.³ Given a very limited food supply on the island in an emergency and our watersheds being overwhelmed by agricultural runoff and road runoff, there is a lot we can do to improve our prospects by investing in the quality of the soil around us. '},
    {type: 'h2', content: "Solution"},
    {type: 'p', content: 'Plant growth is a simple measure of the soil’s ability to sequester carbon. Identifying the places and spaces where soil quality and aeration can be enhanced with planting, biochar, compost and aeration will yield multiple benefits. Parks on their own are not enough to achieve the significant levels of carbon sequestration needed so distributed, connected greenways and blueways in an urban ecosystem that span public and private lands is ideal.'},
    {type: 'p', content: '"Indigenous peoples and local communities play an outsized role in the governance, conservation and sustainable use of the world’s biodiversity and nature. They actively protect and conserve an astounding diversity of globally relevant species, habitats and ecosystems, providing the basis for clean water and air, healthy food and livelihoods for people far beyond their boundaries."⁴'},
    {type: 'p', content: 'Be an ally to indigenous people and their ways of life and support your local stewardship groups in restoring ecosystem performance.'},
    {type: 'link', content: '1. Kevin J. Beiler et al., 2009. Architecture of the wood-wide web: Rhizopogon spp. genets link multiple Douglas-fir cohorts. New Phytologist, 185(2), pp. 543-553.', url: 'https://doi.org/10.1111/j.1469-8137.2009.03069.x'},
    {type: 'link', content: '2. Suzanne W. Simard et al., 2021. Partial Retention of Legacy Trees Protect Mycorrhizal Inoculum Potential, Biodiversity, and Soil Resources While Promoting Natural Regeneration of Interior Douglas-Fir. Frontiers in Forests and Global Change, Vol. 3.', url: 'https://doi.org/10.3389/ffgc.2020.620436'},
    {type: 'link', content: '3. Priit Tammeorg et al., 2021. Co-Designing Urban Carbon Sink Parks: Case Carbon Lane in Helsinki. Frontiers in Environmental Science, 9.', url: 'https://doi.org/10.3389/fenvs.2021.672468'},
    {type: 'link', content: '4. Holly Jonas, Colleen Corrigan, June Rubis, and Leila Vaziri Zanjani, 2021. Territories of Life: Executive Summary. ICCA Consortium.', url: 'https://report.territoriesoflife.org/executive-summary/'},
  ],
  act: {
    initiatives: [
      {
        title: 'The Mothertree Project',
        link: 'https://mothertreeproject.org/',
        description: '"Through their research, Dr. Simard and others have discovered that trees are connected below-ground via a vast fungal network... The Mother Tree project is investigating forest renewal practices that will protect biodiversity, carbon storage and forest regeneration as climate changes. This field-based research compares various retention levels of Mother Trees (large, old trees) and their neighbours, as well as regenerating seedling mixtures, in Douglas-fir forests located across nine climatic regions in British Columbia."',
        image: require('./png/Mothertree.png')
      },
      {
        title: 'Indigenous Protected & Conserved Areas',
        link: 'https://conservation-reconciliation.ca/about-ipcas',
        description: '"IPCAs are lands and waters where Indigenous governments have the primary role in protecting and conserving ecosystems through Indigenous laws, governance and knowledge systems. Culture and language are the heart and soul of an IPCA. IPCAs vary in terms of their governance and management objectives. However, they generally share three essential elements: IPCAs are indigenous led, IPCAs represent a long-term commitment to conservation, and IPCAs elevate indigenous rights and responsibilities."',
        image: require('./png/Placeholder.png')
      },
      {
        title: 'Soil Factsheet: BC Min. of Agriculture',
        link: 'https://www2.gov.bc.ca/assets/gov/farming-natural-resources-and-industry/agriculture-and-seafood/agricultural-land-and-environment/soil-nutrients/613100-1_soil_compaction.pdf',
        description: '"Soil compaction refers to the disruption and reduction of the large pores within the soil. The presence of excess soil moisture at the time of any field operation is the main factor leading to soil compaction. Once a soil is compacted, the bulk density and the strength of the soil are increased. For construction purposes, a compacted soil is ideal but under normal crop production, a compacted soil can be a serious problem. Penetration into the soil by tillage implements and crop roots is restricted. The movement of air and water through the soil is hampered causing the soil to remain wet and cool long into the growing season"',
        image: require('./png/Placeholder.png')
      },
      {
        title: 'BC Big Tree Registry',
        link: 'https://bigtrees.forestry.ubc.ca/bc-bigtree-registry/',
        description: 'The BC BigTree Registry is maintained by the BC BigTree Committee and supported by the Faculty of Forestry at the University of British Columbia. It’s an evolving project whose mandate is "To identify, describe, monitor, and conserve the largest trees of each species within British Columbia, and to educate and enlist the help of its citizens in this task."',
        image: require('./png/BigTreeRegistry.png')
      },
      {
        title: 'Co-Designing Urban Carbon Sink Parks',
        link: 'https://www.frontiersin.org/articles/10.3389/fenvs.2021.672468/full',
        description: '"In order to achieve the goals of carbon (C) neutrality within next 20 year, municipalities worldwide need to increasingly apply negative emission technologies. We focus on the main principles of urban demonstration areas using biochars for C sequestration and explore the lessons learned from a co-creation process of one such park, Hyväntoivonpuisto in Helsinki, Finland. Demonstration sites of urban C sinks in public parks must be safe, visible and scientifically sound for reliable and cost-effective verification of carbon sequestration. We find that different interests can be arbitrated and that synergy that emerges from co-creation of urban C sink parks between stakeholders (scientists, city officials, companies, and citizens) can result in demo areas with maximized potential for impact, dissemination and consideration of principles of scientific experimentation."',
        image: require('./png/Placeholder.png')
      },
      {
        title: 'Coastal Douglas Fir Conservation Partnership',
        link: 'https://www.cdfcp.ca/',
        description: '"The Coastal Douglas-fir Conservation Partnership (CDFCP) is a collaboration of agencies, organizations and land managers who are interested in promoting and protecting healthy Coastal Douglas-fir and associated ecosystems into the future... The mission of the CDFCP is to promote the conservation and stewardship of the Coastal Douglas-fir and associated ecosystems (CDFAE) in south-western British Columbia through sound science, shared information, supportive policies, and community education."',
        image: require('./png/CoastalDouglasFir.png')
      },
    ],
  },
  mapData: [],
};
export default WoodWideWeb;

/*
{type: 'h2', content: "Comparison"},
{type: 'p', content: 'Free and accessible places and ways to get a sense of community and belonging. Public art, walking zones, public parks, fountains, squares, maker spaces, art galleries, commemorative art markers, community centers, co-working spaces, repurposed abondoned or empty spaces, community gardens, walking tours.'},
{type: 'h2', content: "Problem"},
{type: 'p', content: 'The UN Declaration on the Rights of Indigenous Peoples is only recently being applied by governments in Canada to show more respect, care, and recognition of the autonomy and sovereignty of Indigenous communities. Hardly a century ago European settlers empowered by their governments took over lands and resources in BC and tried to eliminate the original people and culture of this place. Healing from these extreme acts of oppression does not happen easily or quickly without practical changes in the way our governments,  communities and individuals live and work together.'},
{type: 'p', content: 'Global problems like climate change and war are forcing people to abandon their homes and families to seek better opportunities but risking a sense of belonging in the process. Creating a culture of reconciliation with Indigenous communities and a warmth of welcome for people fleeing other forms of oppression is crucial.'},
{type: 'h2', content: "Solution"},
{type: 'p', content: 'The Truth and Reconciliation Commission of Canada created 94 calls to action to guide meaningful steps towards reconciliation. Respecting days of observance (Red Dress Day - MMIWG2S - May 5, National Indigenous Peoples Day - June 21,  National Truth and Reconciliation Day - September 30), Indigenous leadership, knowledge and stewardship of this land opens a way of understanding how to work with Nature here in a way that is reciprocal and creates abundance.  It is not only about cultural appreciation but honouring rights and bringing integrity to working together.'},
{type: 'link', content: 'According to Gallup, a true culture of belonging happens when people appreciate what you bring to the community, people seek meaningful relationships and, differences between people are appreciated.', url: 'https://www.gallup.com/workplace/395102/drives-culture-belonging.aspx'}
*/