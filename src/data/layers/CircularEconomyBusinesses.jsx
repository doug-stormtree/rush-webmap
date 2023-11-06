import {
  mapPopupContent,
  pointToIcon,
} from '../LeafletStyleHelpers';
import { StartOnLayersName } from '../TextContent';

const layer = {
  title: 'Circular Economy Buisinesses',
  description: [
    {type: 'p', content: "This is a collection of reuse stores and other businesses engaged in the circular economy through reuse, sustainable practices, local food resources, and green education."},
    {type: 'link', content: 'Visit and contribute to this project at OpenGreenMap.', url: 'https://new.opengreenmap.org/browse/sites?map=6474bbf4261bc10100e28d90'},
  ],
  data: 'https://new.opengreenmap.org/api-v1/features?format=geojson&edit=false&map=6474bbf4261bc10100e28d90',
  ogmMapId: '6474bbf4261bc10100e28d90',
  shape: 'point',
  symbology: 'classified',
  options: {
    pointToLayer: (f,l) => pointToIcon(l, {icon: <img
        width="26px"
        height="26px"
        src={`https://new.opengreenmap.org/api-v1/icons/${f.properties.icons[0]}/image/value`}
        alt={f.properties?.name ?? ''}
      />}),
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
    { key: 'circular-economy', group: StartOnLayersName, active: true },
    { key: 'development', group: 'Community', active: false },
  ]
}

export default layer;