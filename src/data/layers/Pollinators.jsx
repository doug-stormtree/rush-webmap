import { mapPopupContent, pointToIcon, ogmIconLink } from "../LeafletStyleHelpers";

const styleMap = new Map([
  ['5c311b3537407e1f05ac3946', { src: ogmIconLink('5c311b3537407e1f05ac3946'), legendText: "SDG 3 - Good Health and Well Being" }],
  ['5c312b3c37407e1f05ac3950', { src: ogmIconLink('5c312b3c37407e1f05ac3950'), legendText: "SDG 13 - Climate Action" }],
  ['5c312ca837407e1f05ac3952', { src: ogmIconLink('5c312ca837407e1f05ac3952'), legendText: "SDG 15 - Life on Land" }],
  ['5ca7bfc0ecd8490100cab980', { src: ogmIconLink('5ca7bfc0ecd8490100cab980'), legendText: "Organic or Local Food" }],
  ['5ca7bfe1ecd8490100cab9d5', { src: ogmIconLink('5ca7bfe1ecd8490100cab9d5'), legendText: "Green School" }],
  ['5ca7bfe8ecd8490100cab9ed', { src: ogmIconLink('5ca7bfe8ecd8490100cab9ed'), legendText: "Natural Corridor or Greenway" }],
  ['5ca7bfe8ecd8490100cab9ef', { src: ogmIconLink('5ca7bfe8ecd8490100cab9ef'), legendText: "Shaded Boulevard" }],
  ['5ca7bfe9ecd8490100cab9f0', { src: ogmIconLink('5ca7bfe9ecd8490100cab9f0'), legendText: "Drinking Water Source" }],
  ['5ca7bfe9ecd8490100cab9f1', { src: ogmIconLink('5ca7bfe9ecd8490100cab9f1'), legendText: "Future Redevelopment Space" }],
  ['5ca7bfe9ecd8490100cab9f2', { src: ogmIconLink('5ca7bfe9ecd8490100cab9f2'), legendText: "Eco Design or Planning Feature" }],
  ['5ca7bfeaecd8490100cab9f3', { src: ogmIconLink('5ca7bfeaecd8490100cab9f3'), legendText: "Waterfront or Riverside Park" }],
  ['5ca7bfeaecd8490100cab9f5', { src: ogmIconLink('5ca7bfeaecd8490100cab9f5'), legendText: "Eco Landscaping" }],
  ['5ca7bfececd8490100cab9fa', { src: ogmIconLink('5ca7bfececd8490100cab9fa'), legendText: "Park or Recreation Area" }],
  ['5ca7bff0ecd8490100caba08', { src: ogmIconLink('5ca7bff0ecd8490100caba08'), legendText: "Insect Watching Site" }],
  ['5ca7bff2ecd8490100caba0c', { src: ogmIconLink('5ca7bff2ecd8490100caba0c'), legendText: "Bird and Wildlife Watching" }],
  ['5ca7bff2ecd8490100caba0d', { src: ogmIconLink('5ca7bff2ecd8490100caba0d'), legendText: "Farm Animals" }],
  ['5ca7bff4ecd8490100caba0f', { src: ogmIconLink('5ca7bff4ecd8490100caba0f'), legendText: "Significant Habitat" }],
  ['5ca7bff4ecd8490100caba10', { src: ogmIconLink('5ca7bff4ecd8490100caba10'), legendText: "Spring Blossoms" }],
  ['5ca7bff5ecd8490100caba11', { src: ogmIconLink('5ca7bff5ecd8490100caba11'), legendText: "Native Forest or Plants" }],
  ['5ca7bff6ecd8490100caba12', { src: ogmIconLink('5ca7bff6ecd8490100caba12'), legendText: "Community Garden" }],
  ['5ca7bff8ecd8490100caba13', { src: ogmIconLink('5ca7bff8ecd8490100caba13'), legendText: "Food Gathering Site" }],
  ['5ca7bff9ecd8490100caba14', { src: ogmIconLink('5ca7bff9ecd8490100caba14'), legendText: "Special Tree" }],
  ['5ca7bff9ecd8490100caba15', { src: ogmIconLink('5ca7bff9ecd8490100caba15'), legendText: "Rapidly Renewable Plants" }],
  ['5ca7bff9ecd8490100caba16', { src: ogmIconLink('5ca7bff9ecd8490100caba16'), legendText: "Autumn Leaves" }],
  ['5ca7bff9ecd8490100caba17', { src: ogmIconLink('5ca7bff9ecd8490100caba17'), legendText: "Public Forest or Natural Area" }],
  ['5ca7bffaecd8490100caba18', { src: ogmIconLink('5ca7bffaecd8490100caba18'), legendText: "Garden" }],
]);

const layer = {
  title: "G.V.S.P. Pollinators Map",
  description: [
    {type:'p', content: 'Greater Victoria / Saanich Peninsula Pollinator Map. Where are the natural areas and gardens that support pollinators in this region?'},
    {type:'link', content: 'Learn more and contribute to this project at OpenGreenMap.', url: 'https://new.opengreenmap.org/browse/sites?map=621fe03eba477f0100989741'}
  ],
  data: require('../geojson/Pollinators.geojson'),
  shape: 'point',
  symbology: 'classified',
  styleMap: styleMap,
  options: {
    pointToLayer: (f,l) => pointToIcon(l, {icon: 
    f.properties.icon ? (
      <img
        width='100%'
        height='100%'
        src={ogmIconLink(f.properties.icon)}
        alt={styleMap.get(f.properties.icon).legendText}
      />
    ) : null }),
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
          f.properties.name,
          f.properties.description[0]
        ), {offset: [0,-6] });
    }
  },
  questions: [
    { key: 'neighbourhood-to-naturehood', group: 'default' },
  ]
}

export default layer;