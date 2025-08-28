import { mapPopupContent, pointToIcon, ogmFeaturesLink } from '../LeafletStyleHelpers';

const layer = {
  title: 'Culture Compass',
  description: [
    {type: 'p', content: "This is for plotting local cultural art and performance spaces."},
  ],
  data: ogmFeaturesLink('68afc26db4508a0100cb7785'),
  ogmMapId: '68afc26db4508a0100cb7785',
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
    btn1: {
      label: 'Plot Culture Here',
      url: 'https://greenmap.org/explore/survey/68afb531fbd3bc01001bfc91',
    },
    btn2: {
      //label: 'View Map',
      url: 'https://greenmap.org/explore/maps/68afc26db4508a0100cb7785',
    },
    ogmNoAccountWarning: true,
  },
}

export default layer;