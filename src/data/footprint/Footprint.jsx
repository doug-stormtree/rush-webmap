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
      style: function (feature) {
        return {
          opacity: 0.5,
          color: 'rgba(189,17,20,1.0)',
          dashArray: '',
          lineCap: 'butt',
          lineJoin: 'miter',
          weight: 1.0,
          fill: true,
          fillOpacity: 0.7,
          fillColor: getColor(feature.properties.CarbonByArea),
          interactive: true
        }
      }
    },
  ],
};
export default Footprint;

function getColor(d) {
  return  d > 73.0790 ? '#800026' :
          d > 51.5670 ? '#BD0026' :
          d > 35.7490 ? '#E31A1C' :
          d > 14.5710 ? '#FC4E2A' :
          d > 8.5460  ? '#FD8D3C' :
          d > 2.7210  ? '#FEB24C' :
          d > 0.9750  ? '#FED976' :
                        '#FFEDA0';
}