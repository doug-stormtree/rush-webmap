import { point } from 'leaflet';
import { mapPopupContent } from '../LeafletStyleHelpers';
import image from './image.jpg';
import * as SpeciesAtRisk from './SpeciesAtRisk.json';

const Development = {
  title: "Development?",
  question: "Development a good idea?",
  image: image,
  learn: {
    text: [
      "Lorem.",
    ],
    initiatives: [],
  },
  act: {
    list: [
      "Lorem.",
    ],
    initiatives: [],
  },
  mapData: [
    {
      title: 'Species At Risk',
      description: 'The B.C. Conservation Data Centre’s spatial view of publicly available, known locations of species and ecological communities at risk. The purpose of this list is to prevent accidental destruction of a location of a species or ecological community at risk and for research and analysis. Based on their conservation status rank, each species and ecosystem is assigned to the red, blue or yellow list to help set conservation priorities and provide a simplified view of the status of B.C.’s species and ecosystems.',
      data: SpeciesAtRisk,
      format: 'polygon',
      options: {
        style: function (feature) {
          const baseStyle = {
            stroke: false,
            fill: true,
            fillOpacity: 0.5,
            interactive: true
          }
          return {
            ...baseStyle,
            fillColor: getSARColor(feature.properties.BC_LIST),
          }
        },
        onEachFeature: (f,l) => {
          l.bindPopup(
            mapPopupContent(
              f.properties.ENG_NM,
              'Scientific name: ' + f.properties.SCI_NM + ' is found on the B.C. ' + f.properties.BC_LIST + ' list.'
              ),
            {offset: point(0,8)});
        }
      }
    },
  ],
};
export default Development;

function getSARColor(val) {
  switch (val) {
    case 'Red':
      return '#F00';
    case 'Blue':
      return '#00F';
    case 'Yellow':
      return '#FF0';
    default:
      return '#555';
  }
}