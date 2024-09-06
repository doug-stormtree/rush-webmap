import { getStyleMapProperty, mapPopupContent } from '../LeafletStyleHelpers';

const styleMap = new Map([
  ["T1" , {legendText: 'Paved Multi-Use Trails / Protected Bike Lanes', color: 'rgba(120, 162, 47, 255)'}],
  ["T1d", {legendText: 'Unpaved Multi-Use Trails', color: 'rgba(137, 90, 68, 255)'}],
  ["BL1", {legendText: 'Bike Lanes / Road Shoulders', color: 'rgba(0, 139, 176, 255)'}],
  ["SR1", {legendText: 'Shared Streets', color: 'rgba(236, 136, 29, 255)'}],
  ["DC" , {legendText: 'Difficult Connections', color: 'rgba(211, 18, 69, 255)'}]
]);

const layer = {
  title: 'CRD Bike Map',
  description: 'The CRD Bike Map represents the cycling network throughout the region as informed by the Pedestrian and Cycling Master Plan, a key part of the Regional Transportation Plan. Encouraging cycling contributes to the vision for our communities as established in our Regional Growth Strategy.',
  data: require('../geojson/CRDBikeMap.geojson'),
  shape: 'line',
  symbology: 'classified',
  styleMap: styleMap,
  options: {
    style: function (feature) {
      const baseStyle = {
        opacity: 0.9,
        stroke: true,
        fill: false,
        interactive: true,
        weight: 3,
      }
      return {
        ...baseStyle,
        color: getStyleMapProperty(
            'color',
            feature.properties.BkMapCarto,
            styleMap
          ),
      }
    },
    onEachFeature: (f,l) => {
      l.bindPopup(
        mapPopupContent(
          'CRD Bike Map',
          f.properties.Label,
          ),
        {offset: [0,8]});
    }
  },
}

export default layer;