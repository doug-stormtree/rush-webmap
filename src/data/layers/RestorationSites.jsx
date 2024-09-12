import { mapPopupContent, ogmFeaturesLink, pointToIcon } from '../LeafletStyleHelpers';

const layer = {
  title: 'Restoration Sites',
  description: [
    {type: 'p', content: "Mapping restoration sites as described by Peninsula Streams Society for the RUSH Initiative."},
  ],
  data: ogmFeaturesLink('644acbf92af3a50100a0f0bc'),
  ogmMapId: '644acbf92af3a50100a0f0bc',
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