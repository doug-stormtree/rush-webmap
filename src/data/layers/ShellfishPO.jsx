import { getStyleMapProperty, mapPopupContent } from '../LeafletStyleHelpers';

const styleMap = new Map([
  [1,  {legendText: 'Biotoxin', fillColor: 'rgb(217,172,110)', color: 'rgb(228,144,43)'}],
  [2,  {legendText: 'Cessation of biotoxin monitoring', fillColor: 'rgb(217,172,110)', color: 'rgb(138,46,208)'}],
  [3,  {legendText: 'Chemical', fillColor: 'rgb(203,123,226)', color: 'rgb(213,63,242)'}],
  [4,  {legendText: 'Sanitary (conditionally-approved area)', fillColor: 'rgb(189,135,142)', color: 'rgb(181,81,85)'}],
  [5,  {legendText: 'Sanitary (emergency)', fillColor: 'rgb(189,135,142)', color: 'rgb(181,81,85)'}],
  [6,  {legendText: 'Sanitary (shellstock)', fillColor: 'rgb(189,135,142)', color: 'rgb(181,81,85)'}],
  [7,  {legendText: 'Sanitary (water quality or sanitary pollution source)', fillColor: 'rgb(189,135,142)', color: 'rgb(181,81,85)'}],
  [8,  {legendText: 'Sanitary and Biotoxin', fillColor: 'rgb(217,172,110)', color: 'rgb(181,81,85)'}],
  [9,  {legendText: 'Conservation', fillColor: 'rgb(168,123,208)', color: 'rgb(138,46,208)'}],
  [10, {legendText: 'Sanitary (conditionally restricted area)', fillColor: 'rgb(189,135,142)', color: 'rgb(181,81,85)'}],
])

/**
 * TODO: Write description.
 * TODO: Stash into new branch.
 */

const layer = {
  title: 'Shellfish Harvesting Closures',
  description: [
    {type: 'p', content: 'Bivalve shellfish contamination closures near the Capital Region made available by Fisheries and Oceans Canada.'},
    {type: 'p', content: '"Harvesting and eating BC bivalve shellfish is a time-honoured tradition, but it must be done safely. It is both illegal and unsafe to harvest shellfish from a closed area. Eating contaminated shellfish can make you very sick and can even be life-threatening.'},
    {type: 'p', content: 'Bivalve shellfish have 2 hinged shells and include clams, oysters, scallops, mussels and more. They are highly sensitive to the water quality of their marine environment. Because they feed by filtering microscopic organisms from the water, harmful bacteria, viruses and marine biotoxins from their surroundings can build up in their tissues and make the people who eat them sick.'},
    {type: 'p', content: 'Contaminated shellfish do not necessarily smell, taste or look different than uncontaminated shellfish, and cooking shellfish does not destroy all biotoxins.'},
    {type: 'p', content: 'Harvesting closures change often throughout the year for conservation or public health reasons. This means that you must check to see if the species and area you wish to harvest in is legally open for harvesting, every time you head out to fish."'},
    {type: 'link', content: '- Fisheries and Oceans Canada', url: 'https://www.pac.dfo-mpo.gc.ca/fm-gp/shellfish-mollusques/contamination/index-eng.html'}
  ],
  data: require('../geojson/ShellfishPO.geojson'),
  shape: 'polygon',
  symbology: 'classified',
  styleMap: styleMap,
  legendTitle: 'Reason for Closure',
  options: {
    style: function (f) {
      const baseStyle = {
        stroke: true,
        opacity: 0.7,
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 3,
        fill: true,
        fillOpacity: 0.3,
        fillColor: 'rgb(132,182,185)',
        interactive: true,
      }
      return {
        ...baseStyle,
        fillColor: getStyleMapProperty(
          'fillColor',
          f.properties['REASON'],
          styleMap
        ),
        color: getStyleMapProperty(
          'color',
          f.properties['REASON'],
          styleMap
        )
      }
    },
    onEachFeature: (f,l) => {
      l.bindPopup(
        mapPopupContent(
          'Shellfish Harvesting Prohibition',
          [
            f.properties['PLACE_NAME_EN'],
            'Reason for Closed Area: ' + styleMap.get(f.properties['REASON']).legendText,
            'Issuance Date: ' + f.properties['ISSUANCE_DATE_EN'],
            'Species Closed: ' + f.properties['SPECIES_DESCRIPTION_EN'],
          ],
          ),
        {offset: [0,8]});
    }
  },
}

export default layer;