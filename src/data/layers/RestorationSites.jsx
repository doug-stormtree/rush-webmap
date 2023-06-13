import { mapPopupContent, pointToIcon } from '../LeafletStyleHelpers';

const styleMap = new Map([
  ['5ebee86cd060db010045ee3c', {
    src: `https://new.opengreenmap.org/api-v1/icons/5ebee86cd060db010045ee3c/image/value`,
    legendText: 'Protected / Restored Habitat'
  }],
  ['5ca7bff1ecd8490100caba0b', {
    src: `https://new.opengreenmap.org/api-v1/icons/5ca7bff1ecd8490100caba0b/image/value`,
    legendText: 'Aquatic Habitat'
  }],
  ['5ca7bfeaecd8490100cab9f3', {
    src: `https://new.opengreenmap.org/api-v1/icons/5ca7bfeaecd8490100cab9f3/image/value`,
    legendText: 'Waterfront or Riverside Park'
  }],
  ['5ca7bfe8ecd8490100cab9ee', {
    src: `https://new.opengreenmap.org/api-v1/icons/5ca7bfe8ecd8490100cab9ee/image/value`,
    legendText: 'Water Feature'
  }],
  ['5ca7bff4ecd8490100caba0f', {
    src: `https://new.opengreenmap.org/api-v1/icons/5ca7bff4ecd8490100caba0f/image/value`,
    legendText: 'Significant Habitat'
  }],
  ['5ca7bfe7ecd8490100cab9ec', {
    src: `https://new.opengreenmap.org/api-v1/icons/5ca7bfe7ecd8490100cab9ec/image/value`,
    legendText: 'Wetlands'
  }],
  ['5ca7bfc1ecd8490100cab983', {
    src: `https://new.opengreenmap.org/api-v1/icons/5ca7bfc1ecd8490100cab983/image/value`,
    legendText: 'Greenhouse Gas Reduction'
  }],
  ['5f036d59352b920100f4b7f1', {
    src: `https://new.opengreenmap.org/api-v1/icons/5f036d59352b920100f4b7f1/image/value`,
    legendText: 'People of Place - Indigenous Culture'
  }],
  ['5ca7bfececd8490100cab9fc', {
    src: `https://new.opengreenmap.org/api-v1/icons/5ca7bfececd8490100cab9fc/image/value`,
    legendText: 'Canoe or Kayak Site'
  }],
]);

const layer = {
  title: 'Restoration Sites',
  description: [
    {type: 'p', content: "Mapping restoration sites as described by Peninsula Streams Society for the RUSH Initiative."},
    {type: 'link', content: 'Visit and contribute to this project at OpenGreenMap.', url: 'https://new.opengreenmap.org/browse/sites?map=644acbf92af3a50100a0f0bc'},
  ],
  data: require('../geojson/RestorationSites.geojson'),
  shape: 'point',
  symbology: 'classified',
  styleMap: styleMap,
  options: {
    pointToLayer: (f,l) => pointToIcon(l, {icon: <img 
        src={`https://new.opengreenmap.org/api-v1/icons/${f.properties.icons[0]}/image/value`}
        alt={styleMap.get(f.properties.icons[0]).legendText}
      />}),
    onEachFeature: (f,l) => {
      const imageURL = f.properties.pictures[0]
        ? `https://new.opengreenmap.org/api-v1/pictures/${f.properties.pictures[0]}/picture/sm`
        : null;
      
      l.bindPopup(mapPopupContent(
          f.properties.name,
          '',
          `https://new.opengreenmap.org/browse/sites/${f.properties._id}`,
          'Show More at OpenGreenMap.org',
          imageURL
        ), {offset: [0,-6]});
    }
  },
  questions: [
    { key: 'protect-from-flooding', group: 'default', active: true },
    { key: 'development', group: 'Nature', active: false },
  ]
}

export default layer;