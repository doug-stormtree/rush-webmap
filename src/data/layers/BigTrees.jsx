import { mapPopupContent, pointToIcon } from '../LeafletStyleHelpers';
import { GiPineTree } from "react-icons/gi";

const styleMap = new Map([
  ["TreesOfVictoria", {
    icon: (<GiPineTree fill='#051' />),
    legendText: 'Trees of S. Vancouver Island',
  }],
]);

const layer = {
  title: 'Big Trees',
  description: [
    {type: 'p', content: 'This layer represents significant trees on Southern Vancouver Island, with data generously provided by James Clowater M.Sc., and is not an exhaustive inventory. To learn how to identify native and exotic conifer trees and to see what trees are on your street visit his website:'},
    {type: 'link', content: 'Trees of Victoria', url: 'https://treesofvictoria.com/index.html'},
    {type: 'p', content: 'The measurements provided are Circumference at Breast Height (CBH). To learn about how trees are measured look at page seven of the BC BigTree Registry\'s Field Package from the University of British Columbia Faculty of Forestry:'},
    {type: 'link', content: 'BC BigTree Field Package', url: 'https://bigtreesreg.sites.olt.ubc.ca/files/2014/04/BC-BigTree-Field-Package.pdf#page=7'},
  ],
  data: require('../geojson/BigTrees.geojson'),
  shape: 'point',
  symbology: 'classified',
  styleMap: styleMap,
  options: {
    pointToLayer: (f,l) => pointToIcon(
      l,
      styleMap.get("TreesOfVictoria")
    ),
    onEachFeature: (f,l) => {
      const dateParts = f.properties['date_m'].split('-')
      const date = new Date(dateParts[0]+' '+dateParts[1]+' 20'+dateParts[2])
      l.bindPopup(mapPopupContent(
        f.properties['common_name'],
        [
          'Botanical Name: ' + f.properties['botanical_name'],
          'Date Measured: ' + date.toLocaleDateString(
            'en-ca', {month: 'long', year: 'numeric' }),
          'Circumference at Breast Height (CBH): ' + f.properties['CBH'] + 'm'
        ],
        ), {offset: [4.5,2]});
    }
  },
}

export default layer;