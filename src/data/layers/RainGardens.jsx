import { mapPopupContent, pointToIcon, ogmFeaturesLink } from '../LeafletStyleHelpers';

const layer = {
  title: '1000 Rain Gardens',
  description: [
    {type: 'p', content: "This is the map for the Friends of Bowker Creek and Peninsula Streams Society '1000 Rain Gardens' project!"},
    {type: 'p', content: "Rain gardens help reduce stormwater overflow by absorbing and filtering rainwater. They helps create an absorbable surface in locations surrounded by impermeable pavement for example: streets, parking lots, and driveways. Without rain gardens, polluted water runoff can flood into storm drains and damage nearby creeks, rivers, and shorelines."},
    {type: 'p', content: "It's important to know the locations of our green infrastructure to help map and create future rain gardens in our area."},
  ],
  data: ogmFeaturesLink('63e6939eabcc260100514352'),
  ogmMapId: '63e6939eabcc260100514352',
  shape: 'point',
  symbology: 'classified',
  options: {
    pointToLayer: (f,l) => pointToIcon(l, {
      icon: f.properties.icons.length > 0 ?
        <img
          width="32px"
          height="32px"
          src={`https://new.opengreenmap.org/api-v1/icons/${f.properties.icons[0]}/image/value`}
          alt={f.properties?.name ?? ''}
        /> : null
      }, 32, 0
    ),
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
  liveOverride: {
    team: {
      url: 'https://bowkercreek.org/',
    },
    btn1: {
      label: 'Plot Raingardens Here',
      url: 'https://new.opengreenmap.org/campaigns/67103761724dd201002705e4',
    },
    btn2: {
      label: 'View Map',
      url: 'https://new.opengreenmap.org/browse/maps/63e6939eabcc260100514352/map-view',
    },
    ogmNoAccountWarning: true,
  },
}

export default layer;