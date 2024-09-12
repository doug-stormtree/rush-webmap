import {
  getStyleMapProperty,
  getStyleMapKeyFromContinuousValue,
  mapPopupContent
} from "../LeafletStyleHelpers";

// TODO: Convert water volumes of m3 to litres?

const styleMap = new Map([
  [ -127030, {fillColor: '#d7191c', legendText: 'Runoff Much Higher', subText: ['Runoff >127,029 m³ more than Potential Absorption']}],
  [ -42343,  {fillColor: '#fdae61', legendText: 'Runoff Higher', subText: ['Runoff 42,343 to 127,029 m³ more than Potential Absorption']}],
  [ 42343,   {fillColor: '#ffffc0', legendText: 'Near Capacity', subText: ['Runoff within 42,343 m³ of Potential Absorption']}],
  [ 127030,  {fillColor: '#a6d96a', legendText: 'Absorption Higher', subText: ['Potential Absorption 42,343 to 127,029 m³ more than Runoff']}],
  [ 396239,  {fillColor: '#1a9641', legendText: 'Absorption Much Higher', subText: ['Potential Absorption >127,029 m³ more than Runoff']}],
]);

const layer = {
  title: 'Watershed Potential Absorption',
  description: [
    {type:'p', content:'The relationship between extreme precipitation and permeable/absorption surfaces is complex and can vary depending on various factors such as geography, land use, and climate conditions. However, in general terms:'},
    {type:'p', content:'Extreme precipitation refers to unusually high amounts of rainfall or snowfall within a specific period, often leading to flooding, landslides, or other water-related hazards. This map uses a hypothetical event with a total rainfall of 100mm, a similar daily value to what many areas received in November 2021 where parts of the Lower Mainland were flooded.'},
    {type:'p', content:'Permeable surfaces allow water to infiltrate into the ground, storing and filtering some of the rainfall and mitigating runoff. Runoff is where stormwater flows along an impermeable or saturated surface and causes flooding or damage to structures or habitats. Suface types have different capacities for absorption, with grasslands, forests, and permeable pavements having higher capacity and standard pavement with almost none.'},
    {type:'p', content:'This map uses generalized values for the runoff characteristics and absorptive capacities of surface types to estimate the total potential absorption and expected surface runoff of each watershed during a single day 100mm rainfall event. If the absorption capacity is higher (green), the watershed may be able to receive a rainfall like this without significant flooding. If the runoff is higher (red), the surface runoff may have nowhere to go and cause flooding or damage.'},
    {type:'p', content:'These calculations do not take into consideration terrain, flow dynamics, and the distribution of surface types and are intended only for general interest. The map is not intented to be an accurate prediction of a rainfall event, nor to be used for planning purposes.'},
  ],
  data: require('../geojson/WatershedRunoffAbsorption.geojson'),
  format: 'polygon',
  symbology: 'classified',
  styleMap: styleMap,
  legendTitle: 'Watershed Potential Absorption',
  options: {
    style: function (f) {
      const baseStyle = {
        stroke: true,
        opacity: 0.7,
        color: 'rgb(28,163,236)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 3,
        fill: true,
        fillOpacity: 0.7,
        interactive: true,
      }
      return {
        ...baseStyle,
        fillColor: getStyleMapProperty(
            'fillColor',
            getStyleMapKeyFromContinuousValue(
              f.properties.NetPotentialAbsorption_M3,
              styleMap),
            styleMap
          ),
      }
    },
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
          `Watershed: ${f.properties.Name}`,
          [
            `This watershed was calculated to have a potential absorption of ${f.properties.PotentialAbsorption_M3} m³ of rain water and, during a 100mm rain event, see a surface runoff volume of ${f.properties.RunoffVolume_M3} m³.`,
            `As the runoff is ${f.properties.NetPotentialAbsorption_M3 < 0 ? 'higher' : 'lower'} than the watershed's potential to absorb water, ${f.properties.NetPotentialAbsorption_M3 < 0 ? 'the extra ' + (f.properties.NetPotentialAbsorption_M3 * -1) + ' m³ water will need to go somewhere, possibly pooling or flowing across the surface' : 'the ground can potentially receive ' + f.properties.NetPotentialAbsorption_M3 + ' m³ more rain before it becomes an issue' }.`
          ]
        ), {offset: [0,8]});
    }
  },
}

export default layer;