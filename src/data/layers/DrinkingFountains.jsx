import { mapPopupContent, pointToIconByProperty } from '../LeafletStyleHelpers';
import { ReactComponent as WaterIcon } from '../svg/water.svg';

const styleMap_Water_Fountains = new Map([
  ["drinking fountain", {
    icon: (<WaterIcon/>),
    fill: '#36F',
    stroke: '#36F',
    legendText: 'Drinking Fountain',
  }],
]);

const layer = {
  title: 'Drinking Fountains',
  description: 'Public drinking water fountains in the City of Victoria',
  data: require('../geojson/VictoriaDrinkingFountains.geojson'),
  shape: 'point',
  symbology: 'classified',
  styleMap: styleMap_Water_Fountains,
  options: {
    pointToLayer: (f,l) => pointToIconByProperty(
      f,
      l,
      "FountainType",
      styleMap_Water_Fountains
    ),
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
        f.properties['LocationName'],
        f.properties.OwnerNotes + ' Drinking Fountain'
        ), {offset: [4.5,2]});
    }
  },
}

export default layer;