import { mapPopupContent, pointToIcon, ogmFeaturesLink } from '../LeafletStyleHelpers';

const layer = {
  title: 'Cultural Foods',
  description: [
    {type: 'p', content: "This is a map to plot local cultural food places."},
  ],
  data: ogmFeaturesLink('68afbbf5b4508a0100cb776c'),
  ogmMapId: '68afbbf5b4508a0100cb776c',
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
      label: 'Plot Foods Here',
      url: 'https://greenmap.org/explore/survey/68ae4104cdfbed010007727a',
    },
    btn2: {
      //label: 'View Map',
      url: 'https://greenmap.org/explore/maps/68afbbf5b4508a0100cb776c',
    },
    ogmNoAccountWarning: true,
  },
}

export default layer;