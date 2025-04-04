import { mapPopupContent, pointToIcon, ogmFeaturesLink } from '../LeafletStyleHelpers';

const layer = {
  title: 'Farm to Fork Food Web',
  description: [
    {type: 'p', content: "Mapping food security features and urban agriculture initiatives. Plot that spot and help us grow together!"},
  ],
  data: ogmFeaturesLink('67cb63ff278e270100114b09'),
  ogmMapId: '67cb63ff278e270100114b09',
  shape: 'point',
  symbology: 'classified',
  options: {
    pointToLayer: (f,l) => pointToIcon(l, {
      icon: f.properties.icons.length > 0 ?
        <img
          width="32px"
          height="32px"
          src={`https://greenmap.org/api-v1/icons/${f.properties.icons[0]}/image/value`}
          alt={f.properties?.name ?? ''}
        /> : null
      }, 32, 0
    ),
    onEachFeature: (f,l) => {
      const imageURL = f.properties.pictures[0]
        ? `https://greenmap.org/api-v1/pictures/${f.properties.pictures[0]}/picture/sm`
        : null;
      
      l.bindPopup(mapPopupContent(
          f.properties.name,
          f.properties?.description?.blocks.filter((b) => b.type === "paragraph")[0]?.data.text ?? '',
          `https://greenmap.org/browse/sites/${f.properties._id}`,
          'Show More at GreenMap.org',
          imageURL
        ), {offset: [0,-6]});
    }
  },
  liveOverride: {
    team: {
      url: 'https://bowkercreek.org/',
    },
    btn1: {
      label: 'Plot Food Infrastructure',
      url: 'https://greenmap.org/explore/survey/67aec191cc2fdb0100232f4d',
    },
    btn2: {
      label: 'View Map',
      url: 'https://greenmap.org/browse/maps/67cb63ff278e270100114b09/map-view',
    },
    ogmNoAccountWarning: true,
  },
}

export default layer;