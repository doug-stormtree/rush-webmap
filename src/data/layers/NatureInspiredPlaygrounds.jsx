import { mapPopupContent, pointToIcon, ogmFeaturesLink } from '../LeafletStyleHelpers';

const layer = {
  title: 'Nature-Inspired PlayGrounds',
  description: [
    {type: 'p', content: "A survey for schools and their students to publish biomimicry lesson plans from the Engage with Nature-Based Solutions curriculum."},
    {type: 'link', content: 'Engage with Nature-Based Solutions', url: 'https://engagewithnbs.ca/'}
  ],
  data: ogmFeaturesLink('6834a7c81a032b01004651a9'),
  ogmMapId: '6834a7c81a032b01004651a9',
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
      label: 'Plot PlayGrounds',
      url: 'https://greenmap.org/explore/survey/6834a6ba45249301000d781e',
    },
    btn2: {
      label: 'View Map',
      url: 'https://greenmap.org/browse/maps/6834a7c81a032b01004651a9/map-view',
    },
    ogmNoAccountWarning: true,
  },
}

export default layer;