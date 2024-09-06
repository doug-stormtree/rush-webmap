import { getStyleMapProperty } from '../LeafletStyleHelpers';

const styleMap = new Map([
  ['permeable', {legendText: 'Permeable', color: '#bd925a'}],
  ['impermeable', {legendText: 'Impermeable', color: '#A16928'}],
]);

const layer = {
  title: 'Hard Shorelines',
  description: [
    {type: 'p', content: 'Shoreline hard armouring refers to the construction of impermeable concrete seawalls, wooden pilings, or large rock revetments with the goal of preventing erosion from wave energy and sea level rise. Imposing a static configuration on dynamic shoreline systems can diminish salt marsh habitats, valuable ecosystems that support food chains, maintenance of fisheries, water purification, carbon sequestration, coastal erosion, and flood protection.¹'},
    {type: 'p', content: 'The data shown here is derived from ShoreZone, an international project that takes aerial photography of shorelines and partners with expert biologists and geologists to classify each shore unit. Areas shown on the map represent shorelines that contained over 50 percent human-made structures. Permeable shorelines include rip-rap or wooden crib structures where surface oil from a spill will easily penetrate the structure. Impermeable shorelines include concrete seawalls or steel sheet pile.² This provides some sense of where hard armouring has been constructed but a more accurate inventory should be completed for the Capital Regional District.'},
    {type: 'link', content: '1. Nicole Peterson, Craig Landry, Alexander Clark, Kevin Samples, and Brian Bledsoe (2019). Socioeconomic and environmental predictors of esuarine shoreline hard armoring. Scientific Reports, 9(1), 16288-10.', url: 'https://doi.org/10.1038/s41598-019-52504-y'},
    {type: 'link', content: '2. Sarah Cook, Sean Daley, Kalen Morrow, and Sheri Ward (2017). "ShoreZone Coastal Imaging and Habitat Mapping Protocol." Victoria, Canada: Coastal and Ocean Resources.', url: 'https://media.fisheries.noaa.gov/2020-09/ShoreZone-Protocol-2017-AKR.pdf?RSScY5o5Q1RKNuGV2daZiExnYGQzx_Ov'},
  ],
  data: require('../geojson/HardShorelines.geojson'),
  shape: 'line',
  symbology: 'classified',
  legendTitle: 'Artificially Constructed Shoreline',
  styleMap: styleMap,
  options: {
    style: function (feature) {
      const baseStyle = {
        stroke: true,
        fill: false,
        interactive: true,
        weight: 4,
      }
      return {
        ...baseStyle,
        color: getStyleMapProperty(
          'color',
          feature.properties.Permeability,
          styleMap
        )
      }
    }
  },
}

export default layer;