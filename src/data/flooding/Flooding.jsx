import * as L from 'leaflet';
import image from './image.jpg';
import rainGardenStoryMapImage from './RainGardenStoryMap.png';
import RainGardens from './1000RainGardens.geojson';
import { ReactComponent as WaterIcon } from '../beattheheat/water.svg';
import { mapPopupContent } from '../LeafletStyleHelpers';

const styleMap_RainGardens = new Map([
  ["0", {
    icon: (<WaterIcon/>),
    fill: '#36F',
    stroke: '#36F',
    legendText: '',
  }],
]);

const Flooding = {
  title: 'Protect from Flooding?',
  question: 'How is my community at risk from flooding?',
  image: image,
  description: [
    {type: 'p', content: 'Water is life giving.  Our bodies and the surface of the planet are ~70% water.  With so much pavement in the city,  we have limited the areas for water to sink into the ground, be filtered by the plants and soil, and recharge the water table.  Increasing  areas where it can be absorbed by the land (permeable surface) has many advantages including keeping it out of homes.'},
    {type: 'p', content: 'When water flows across pavement, it carries pollutants and trash into the stormwater system which flows into our streams and creeks and poisons the plants, birds, fish, frogs, and bugs that keep our watersheds beautiful and healthy.'}
  ],
  act: {
    initiatives: [
      {
        title: "Rain Gardens",
        image: rainGardenStoryMapImage,
        link: "https://storymaps.arcgis.com/stories/bade971de06f4502af700ecb844f3fb5",
        description: "A Story Map explaining Rain Gardens."
      }],
  },
  mapData: [
    {
      title: '1000 Rain Gardens',
      description: [
        {type: 'p', content: "This is the map for the Friends of Bowker Creek and Peninsula Streams Society '1000 Rain Gardens' mapping project!"},
        {type: 'link', content: 'Visit and contribute to this project at OpenGreenMap.', url: 'https://new.opengreenmap.org/browse/sites?map=63e6939eabcc260100514352'},
      ],
      data: RainGardens,
      shape: 'point',
      symbology: 'classified',
      styleMap: styleMap_RainGardens,
      options: {
        pointToLayer: (f,l) => {
          const icon = L.icon({
            iconUrl: `https://new.opengreenmap.org/api-v1/icons/${f.properties.icons[0]}/image/value`,
            iconSize: [48,48],
          })

          return f.properties?.icons[0] ? L.marker(l, {icon: icon}) : null;
        },
        onEachFeature: (f,l) => {
          const imageURL = f.properties.pictures[0]
            ? `https://new.opengreenmap.org/api-v1/pictures/${f.properties.pictures[0]}/picture/sm`
            : null;
          
          l.bindPopup(mapPopupContent(
              f.properties.name,
              '',
              `https://https://new.opengreenmap.org/browse/sites/${f.properties._id}`,
              'Show More at OpenGreenMap.org',
              imageURL
            ), {offset: L.point(4,2)});
        }
      },
    }
  ],
};
export default Flooding;