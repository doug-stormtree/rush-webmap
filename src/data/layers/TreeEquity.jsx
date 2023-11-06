import { mapPopupContent, ogmIconLink, pointToIcon } from '../LeafletStyleHelpers';
import { StartOnLayersName } from '../TextContent';

const styleMap = new Map([
  ["65133faf6f5ec60100966b95",{ src: ogmIconLink("65133faf6f5ec60100966b95"), legendText: 'Big Tree - Broad Leaf' }],
  ["65133fed6f5ec60100966b99",{ src: ogmIconLink("65133fed6f5ec60100966b99"), legendText: 'Big Tree - Conifer'}],
  ["6513400e91223601005e4ca0",{ src: ogmIconLink("6513400e91223601005e4ca0"), legendText: 'Three Trees'}],
  ["5c311b3537407e1f05ac3946",{ src: ogmIconLink("5c311b3537407e1f05ac3946"), legendText: 'SDG 3 - Good Health and Well Being'}],
  ["5c312ca837407e1f05ac3952",{ src: ogmIconLink("5c312ca837407e1f05ac3952"), legendText: 'SDG 15 - Life on Land'}],
  ["5ca7bff9ecd8490100caba14",{ src: ogmIconLink("5ca7bff9ecd8490100caba14"), legendText: 'Special Tree'}],
  ["5ca7bff5ecd8490100caba11",{ src: ogmIconLink("5ca7bff5ecd8490100caba11"), legendText: 'Native Forest or Plants'}],
]);

const layer = {
  title: 'Tree Equity Community Map',
  description: [
    {type: 'p', content: 'Nature Canada\'s Tree Equity Rule states that everyone should be able to see at least three trees from their home. With the help of the communtiy, this maps aims to assess Victoria\'s adherence to this rule.'},
    {type: 'p', content: 'We want your help to map the trees in your neighbourhood! Please follow this link to Open Green Map to add data to the map:'},
    {type: 'link', content: 'RUSH - Tree Equity Map.', url: 'https://new.opengreenmap.org/browse/sites?map=65205f220ea614010052cd1a'},
    {type: 'p', content: 'More info:'},
    {type: 'link', content: 'Nature Canada\'s Tree Equity Rule', url: 'https://naturecanada.ca/wp-content/uploads/2022/09/Nature-Canada-Report-Tree-Equity.pdf'},
    {type: 'link', content: 'iNaturalist', url: 'https://inaturalist.ca/signup'},
    {type: 'link', content: 'Identifying Broadleaf Trees', url: 'https://tidcf.nrcan.gc.ca/en/trees/identification/broadleaf'},
    {type: 'link', content: 'Identifying Conifer Trees', url: 'https://tidcf.nrcan.gc.ca/en/trees/identification/conifers'},
    {type: 'link', content: 'Measuring Tree Circumference - BC BigTree Registry', url: 'https://bigtreesreg.sites.olt.ubc.ca/files/2014/04/BC-BigTree-Field-Package.pdf#page=7'},
  ],
  data: require('../geojson/TreeEquity.geojson'),
  shape: 'point',
  symbology: 'classified',
  styleMap: styleMap,
  options: {
    pointToLayer: (f,l) => pointToIcon(l, {icon: f.properties.icons.length > 0 ?
      <img
        width="26px"
        height="26px"
        src={`https://new.opengreenmap.org/api-v1/icons/${f.properties.icons[0]}/image/value`}
        alt={styleMap.get(f.properties.icons[0])?.legendText ?? ''}
      /> : null
    }),
    onEachFeature: (f,l) => {
      const imageURL = f.properties.pictures[0]
        ? `https://new.opengreenmap.org/api-v1/pictures/${f.properties.pictures[0]}/picture/sm`
        : null;
      
      l.bindPopup(mapPopupContent(
          f.properties.name,
          f.properties?.description?.blocks.filter((b) => b.type === "paragraph")[0]?.data.text ?? '',
          `https://new.opengreenmap.org/browse/sites/${f.properties._id}`,
          'Show More at OpenGreenMap.org',
          imageURL
        ), {offset: [0,-6]});
    }
  },
  questions: [
    { key: 'wood-wide-web', group: StartOnLayersName, active: true },
    { key: 'development', group: 'Community', active: false },
  ]
}

export default layer;