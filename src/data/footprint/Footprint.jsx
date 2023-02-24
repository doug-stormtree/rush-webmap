import { point } from 'leaflet';
import { mapPopupContent } from '../LeafletStyleHelpers';
import image from './image.jpg';
import * as CRD_Municipal_CarbonBudgets from './CRD_Municipal_CarbonBudgets.json';

const Footprint = {
  title: 'Light Footprint?',
  question: 'Self-propelled "Light Footprint" Travel',
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
      title: 'Municipal Carbon Budgets',
      description: 'Carbon Budgets for each Municipality in the CRD. Calculated from IPCC SR1.5 report that as of Jan. 1, 2020, divided equally, each person on Earth has a remaining carbon budget of 44.8 tons.',
      data: CRD_Municipal_CarbonBudgets,
      format: 'polygon',
      options: {
        style: function (feature) {
          const baseStyle = {
            opacity: 0.7,
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 0.7,
            interactive: true
          }
          return {
            ...baseStyle,
            color: getColor(feature.properties.CarbonBudg),
            fillColor: getColor(feature.properties.CarbonBudg),
          }
        },
        onEachFeature: (f,l) => {
          l.bindPopup(mapPopupContent(f.properties.ABRVN, f.properties.CarbonBudg.toString() + ' tons CO² remaining budget.'), {offset: point(0,8)});
        }
      }
    },
  ],
};
export default Footprint;

function getColor(d) {
  return  d > 1189720 ? '#FFEDA0' :
          d > 764198  ? '#FED976' :
          d > 646503  ? '#FEB24C' :
          d > 513431  ? '#FD8D3C' :
          d > 470451  ? '#FC4E2A' :
          d > 216295  ? '#E31A1C' :
          d > 204345  ? '#BD0026' :
                        '#800026';
}

