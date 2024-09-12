import { mapPopupContent, ogmFeaturesLink, pointToIcon } from '../LeafletStyleHelpers';

const layer = {
  title: 'Tree Equity Community Map',
  description: [
    {type: 'p', content: 'Nature Canada\'s Tree Equity Rule states that everyone should be able to see at least three trees from their home. With the help of the communtiy, this maps aims to assess Victoria\'s adherence to this rule.'},
    {type: 'p', content: 'More info:'},
    {type: 'link', content: 'Nature Canada\'s Tree Equity Rule', url: 'https://naturecanada.ca/wp-content/uploads/2022/09/Nature-Canada-Report-Tree-Equity.pdf'},
    {type: 'link', content: 'iNaturalist', url: 'https://inaturalist.ca/signup'},
    {type: 'link', content: 'Identifying Broadleaf Trees', url: 'https://tidcf.nrcan.gc.ca/en/trees/identification/broadleaf'},
    {type: 'link', content: 'Identifying Conifer Trees', url: 'https://tidcf.nrcan.gc.ca/en/trees/identification/conifers'},
    {type: 'link', content: 'Measuring Tree Circumference - BC BigTree Registry', url: 'https://bigtreesreg.sites.olt.ubc.ca/files/2014/04/BC-BigTree-Field-Package.pdf#page=7'},
    {type: 'p', content: 'We want your help to map the trees in your neighbourhood! Please follow this link to Open Green Map to add data to the map:'},
  ],
  data: ogmFeaturesLink('65205f220ea614010052cd1a'),
  ogmMapId: '65205f220ea614010052cd1a',
  shape: 'point',
  symbology: 'classified',
  options: {
    pointToLayer: (f,l) => pointToIcon(l, {icon: f.properties.icons.length > 0 ?
      <img
        width="26px"
        height="26px"
        src={`https://new.opengreenmap.org/api-v1/icons/${f.properties.icons[0]}/image/value`}
        alt={f.properties?.name ?? ''}
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
}

export default layer;