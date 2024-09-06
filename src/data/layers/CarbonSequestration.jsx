import { getStyleMapProperty, mapPopupContent } from "../LeafletStyleHelpers";

const styleMap_CarbonSeq = new Map([
  ['Wetland',    {fillColor: '#225ea8', legendText: 'Wetland', subText: ['471.5 tC02e per hectare','3.3 tC02e per hectare per year']}],
  ['Grassland',  {fillColor: '#41b6c4', legendText: 'Grassland', subText: ['205.7 tC02e per hectare','2.6 tC02e per hectare per year']}],
  ['Forestland', {fillColor: '#a1dab4', legendText: 'Forestland', subText: ['224.1 tC02e per hectare','1.8 tC02e per hectare per year']}],
  ['Cropland',   {fillColor: '#ffffcc', legendText: 'Cropland', subText: ['239.8 tC02e per hectare','0.4 tC02e per hectare per year']}],
]);

const layer = {
  title: 'Carbon Sequestration',
  description: [
    {type:'p', content:'Land use represents a significant factor in the climate change equation. Approximately 75% of the Earth’s ice-free land was affected by human use by 2015.¹ Croplands cleared and used for human agriculture cover between 12-14% of the global ice-free surface.¹ Reducing the actual human greenhouse gas (GHG) emissions to pre-industrial levels, or even to meet targets for "well below" 2°C of warming, would be impossible considering dietary needs alone.¹𝄒² Therefore achieving "net zero" GHG emissions will require mitigation plans that include large land-based sequestration, the absorption and storage of GHGs in forests, wetlands, and soils. Land cover types have different potential for storing carbon, measured in "tonnes of carbon dioxide equivalent" (tC02e) per hectare (ha), and speeds at which they accumulate that carbon, reported in tC02e/ha/year. Ecosystem connectivity is important to consider as well, as greater biodiversity can improve these potentials.'},
    {
      type:'link',
      content:'1. IPCC, 2019. Framing and Context. In Climate Change and Land: an IPCC special report on climate change, desertification, land degradation, sustainable land management, food security, and greenhouse gas fluxes in terrestrial ecosystems.',
      url:'https://www.ipcc.ch/srccl/chapter/chapter-1/'
    },
    {
      type:'link',
      content:'2. "Carbon Calculator Methodology," District of Saanich. Accessed May 29, 2023.',
      url:'https://www.saanich.ca/EN/main/community/sustainable-saanich/climate-change/carbon-fund-calculator/carbon-calculator-methodology.html'
    },
  ],
  data: require('../geojson/CRDLandCoverNoJDF.geojson'),
  format: 'polygon',
  symbology: 'classified',
  styleMap: styleMap_CarbonSeq,
  legendTitle: 'IPCC Land Cover Class',
  options: {
    style: function (f) {
      const baseStyle = {
        stroke: false,
        opacity: 0.5,
        color: 'rgb(130,130,130)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 3,
        fill: true,
        fillOpacity: 0.7,
        interactive: true
      }
      return {
        ...baseStyle,
        fillColor: getStyleMapProperty(
            'fillColor',
            f.properties.LandCoverClass,
            styleMap_CarbonSeq
          ),
      }
    },
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
          `Carbon Sequestration: ${f.properties.LandCoverClass}`,
          `One hectare of ${f.properties.LandCoverClass} is potentially storing ${f.properties['EF']} tonnes of carbon dioxide equivalent (tC02e) of greenhouse gasses (GHGs) and can sequester ${f.properties['EF_PerYear']} tC02e each year. Converting developed, cleared, or disturbed lands to ${f.properties.LandCoverClass} can add to the total regional sequestration by up to ${f.properties['EF_PerYear']} tC02e per hectare converted per year. Where do you see opportunities to restore our ${f.properties.LandCoverClass}s?`
        ), {offset: [0,8]});
    }
  },
}

export default layer;