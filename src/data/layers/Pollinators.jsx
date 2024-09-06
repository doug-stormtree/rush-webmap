import { mapPopupContent, ogmFeaturesLink, pointToIcon } from "../LeafletStyleHelpers";

const layer = {
  title: "G.V.S.P. Pollinators Map",
  description: [
    {type:'p', content: 'Greater Victoria / Saanich Peninsula Pollinator Map. Where are the natural areas and gardens that support pollinators in this region?'},
  ],
  data: ogmFeaturesLink('621fe03eba477f0100989741'),
  ogmMapId: '621fe03eba477f0100989741',
  shape: 'point',
  symbology: 'classified',
  options: {
    pointToLayer: (f,l) => pointToIcon(l, {icon: f.properties.icons.length > 0 ?
      <img
        width="26px"
        height="26px"
        src={`https://new.opengreenmap.org/api-v1/icons/${f.properties.icons[0]}/image/value`}
        alt={f.properties?.name ?? ''}
      /> : null
    }),
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
}

export default layer;