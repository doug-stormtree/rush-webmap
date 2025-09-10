import { mapPopupContent, ogmFeaturesLink, pointToIcon } from '../LeafletStyleHelpers';

const layer = {
  title: 'Cultural Foods - Iyé Creative',
  description: [
    {type: 'p', content: "Iyé Creative worked with the UVic Community Mapping students to create this data set of cultural restaurants and food stores on Southern Vancouver Island."},
    {type: 'link', content: 'Visit Iyé Creative.', url: 'https://www.iyeherstories.com/'},
    {type: 'link', content: 'Learn about Cultural Food access in Greater Victoria from their StoryMap.', url: 'https://storymaps.arcgis.com/stories/06ee241047d8455bbb02230f453f2edc'},
  ],
  data: ogmFeaturesLink('64836448cea704010006d251'),
  //ogmMapId: '64836448cea704010006d251',
  shape: 'point',
  symbology: 'classified',
  options: {
    pointToLayer: (f,l) => pointToIcon(l, {icon: f.properties.icons.length > 0 ?
      <img
        width="26px"
        height="26px"
        src={`https://greenmap.org/api-v1/icons/${f.properties.icons[0]}/image/value`}
        alt={f.properties?.name ?? ''}
      /> : null
    }),
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
}

export default layer;