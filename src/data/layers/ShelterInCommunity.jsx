import { mapPopupContent, pointToIcon, ogmFeaturesLink } from '../LeafletStyleHelpers';
import { StartOnLayersName } from '../TextContent';

const layer = {
  title: 'Shelter in Community Map',
  description: [
    {type: 'p', content: "Welcome to the RUSH 'Shelter' map, where shelter transcends mere physical structures to encompass the diverse spaces that offer safety and belonging. From cozy cafes to serene parks and vibrant community centers, each marked spot represents a sanctuary where individuals find solace and camaraderie. This map serves as a collaborative resource hub, inviting all to share and discover the places that make us feel truly at home. Together, we create a living archive of cherished spots that embody the essence of comfort, and acceptance within our community."},
    {type: 'link', content: 'Visit and contribute to this project at OpenGreenMap.', url: 'https://new.opengreenmap.org/browse/sites?map=63e6939eabcc260100514352'},
  ],
  data: ogmFeaturesLink('65df70d0381c74010087ae74'),
  ogmMapId: '65df70d0381c74010087ae74',
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
  questions: [
    { key: 'shelter', group: StartOnLayersName, active: true },
    { key: 'development', group: 'Community', active: false },
  ]
}

export default layer;