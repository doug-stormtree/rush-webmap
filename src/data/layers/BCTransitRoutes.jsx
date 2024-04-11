import { mapPopupContent } from '../LeafletStyleHelpers';
import { LegendGroups } from '../TextContent';

const layer = {
  title: 'BC Transit Bus Routes',
  description: 'The bus transportation routes offered by BC Transit. Some routes shown may be alternate or infrequently operated schedules.',
  data: require('../geojson/BCTransitRoutes.geojson'),
  shape: 'line',
  symbology: 'single',
  options: {
    style: {
      stroke: true,
      opacity: 0.9,
      fill: false,
      interactive: true,
      color: 'rgb(18, 144, 201)',
      weight: 3,
    },
    onEachFeature: (f,l) => {
      l.bindPopup(
        mapPopupContent(
          'Route ' + f.properties.Route,
          f.properties.RouteName,
          ),
        {offset: [0,8]});
    }
  },
  questions: [
    { key: 'light-footprint', active: false, ...LegendGroups.StartOff },
    { key: 'development', group: 'Civic', active: false },
  ]
}

export default layer;