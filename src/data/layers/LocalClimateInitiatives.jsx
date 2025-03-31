import { mapPopupContent, pointToIcon, ogmFeaturesLink } from '../LeafletStyleHelpers';

const layer = {
  title: 'Local Climate Initiatives',
  description: [
    {type: 'p', content: "This map catalogues the ‘climate initiatives’ on Southern Vancouver Island, British Columbia to support a local community network for sharing wins, ideas, opportunities, collaboration and stories. "},
  ],
  data: ogmFeaturesLink('67dd8fa4d70bb201000fc0dd'),
  ogmMapId: '67dd8fa4d70bb201000fc0dd',
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
          'Show More at OpenGreenMap.org',
          imageURL
        ), {offset: [0,-6]});
    }
  },
  liveOverride: {
    btn1: {
      label: 'Plot Activator Here',
      url: 'https://greenmap.org/explore/survey/67e176e734bb070100e76466',
    },
    btn2: {
      label: 'View Map',
      url: 'https://greenmap.org/explore/maps/67dd8fa4d70bb201000fc0dd',
    },
    ogmNoAccountWarning: true,
  },
}

export default layer;