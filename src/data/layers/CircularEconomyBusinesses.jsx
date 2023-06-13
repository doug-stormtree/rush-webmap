import {
  mapPopupContent,
  ogmIconLink,
  pointToIcon,
} from '../LeafletStyleHelpers';

const styleMap = new Map([
  ["5ca7bfb8ecd8490100cab973",{ src: ogmIconLink("5ca7bfb8ecd8490100cab973"), legendText: 'Reuse Shop or Market' }],
  ["5ca7bfbcecd8490100cab976",{ src: ogmIconLink("5ca7bfbcecd8490100cab976"), legendText: 'Local Business' }],
  ["5ca7bfbdecd8490100cab979",{ src: ogmIconLink("5ca7bfbdecd8490100cab979"), legendText: 'Green Enterprise' }],
  ["5ca7bfbeecd8490100cab97b",{ src: ogmIconLink("5ca7bfbeecd8490100cab97b"), legendText: 'Reuse' }],
  ["5ca7bfc0ecd8490100cab981",{ src: ogmIconLink("5ca7bfc0ecd8490100cab981"), legendText: 'Recycling' }],
  ["5ca7bfdfecd8490100cab9d1",{ src: ogmIconLink("5ca7bfdfecd8490100cab9d1"), legendText: 'Environmental Education' }],
  ["5ca7bfe6ecd8490100cab9e6",{ src: ogmIconLink("5ca7bfe6ecd8490100cab9e6"), legendText: 'Artisan or Art Studio' }],
  ["6067a8ada4eddf0100334b64",{ src: ogmIconLink("6067a8ada4eddf0100334b64"), legendText: 'Farmers/Local Market' }],
  ["6067a9efa4eddf0100334b68",{ src: ogmIconLink("6067a9efa4eddf0100334b68"), legendText: 'Artisanal Food /Local Flavor' }],
  ["6067aafab709040100c13c98",{ src: ogmIconLink("6067aafab709040100c13c98"), legendText: 'Composting Site' }],
  ["5c312ab437407e1f05ac394f",{ src: ogmIconLink("5c312ab437407e1f05ac394f"), legendText: 'SDG 12 - Responsible Consumption and Production' }],
]);

const layer = {
  title: 'Circular Economy Buisinesses',
  description: [
    {type: 'p', content: "This is a collection of reuse stores and other businesses engaged in the circular economy through reuse, sustainable practices, local food resources, and green education."},
    {type: 'link', content: 'Visit and contribute to this project at OpenGreenMap.', url: 'https://new.opengreenmap.org/browse/sites?map=6474bbf4261bc10100e28d90'},
  ],
  data: require('../geojson/CircularEconBusinesses.geojson'),
  shape: 'point',
  symbology: 'classified',
  styleMap: styleMap,
  options: {
    pointToLayer: (f,l) => pointToIcon(l, {icon: <img
        width="26px"
        height="26px"
        src={`https://new.opengreenmap.org/api-v1/icons/${f.properties.icons[0]}/image/value`}
        alt={styleMap.get(f.properties.icons[0]).legendText}
      />}),
    onEachFeature: (f,l) => {
      const imageURL = f.properties.pictures[0]
        ? `https://new.opengreenmap.org/api-v1/pictures/${f.properties.pictures[0]}/picture/sm`
        : null;
      
      l.bindPopup(mapPopupContent(
          f.properties.name,
          f.properties.description[1].content,
          `https://new.opengreenmap.org/browse/sites/${f.properties.id}`,
          'Show More at OpenGreenMap.org',
          imageURL
        ), {offset: [0,-6]});
    }
  },
  questions: [
    { key: 'circular-economy', group: 'default', active: true },
    { key: 'development', group: 'Community', active: false },
  ]
}

export default layer;