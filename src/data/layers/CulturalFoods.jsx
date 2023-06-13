import { point } from 'leaflet';
import { mapPopupContent, ogmIconLink, pointToIcon } from '../LeafletStyleHelpers';

const styleMap_CulturalFoods = new Map([
  ["648371c5cea704010006d25a",{ src: ogmIconLink("648371c5cea704010006d25a"), legendText: 'Cultural Food Store' }],
  ["648373224be73a0100d13a32",{ src: ogmIconLink("648373224be73a0100d13a32"), legendText: 'Cultural Food Restaurant' }],
]);

const layer = {
  title: 'Cultural Foods',
  description: [
    {type: 'p', content: "Locations of stores and restaurants that provide access to Cultural Foods."},
    {type: 'link', content: 'Visit and contribute to this project at OpenGreenMap.', url: 'https://new.opengreenmap.org/browse/sites?map=64836448cea704010006d251'},
    {type: 'p', content: 'Based on the Greater Victoria Cultural Food Community Map by UVic Community Mapping students in collaboration with Iyé Creative.'},
    {type: 'link', content: 'Learn about Cultural Food access in Greater Victoria from their StoryMap.', url: 'https://storymaps.arcgis.com/stories/06ee241047d8455bbb02230f453f2edc'},
  ],
  data: require('../geojson/CulturalFoods.geojson'),
  shape: 'point',
  symbology: 'classified',
  styleMap: styleMap_CulturalFoods,
  options: {
    pointToLayer: (f,l) => pointToIcon(l, {icon: <img
        width="26px"
        height="26px"
        src={`https://new.opengreenmap.org/api-v1/icons/${f.properties.icons[0]}/image/value`}
        alt={styleMap_CulturalFoods.get(f.properties.icons[0])?.legendText ?? ''}
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
        ), {offset: point(0,-6)});
    }
  },
  questions: [
    { key: 'eat-local', group: 'default' },
  ]
}

export default layer;