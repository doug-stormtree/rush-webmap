import { mapPopupContent } from '../LeafletStyleHelpers';

const layer = {
  title: 'Community Maps',
  description: 'Learn more from these area-specific community mapping initiatives by clicking one of these areas on the map and following the link.',
  data: require('../geojson/CommunityMaps.geojson'),
  shape: 'polygon',
  symbology: 'single',
  options: {
    style: function (feature) {
      return {
        stroke: false,
        fill: true,
        opacity: 0.5,
        fillOpacity: 0.4,
        fillColor: feature.properties.color,
        interactive: true,
      }
    },
    onEachFeature: (f,l) => {
      l.bindTooltip(f.properties.Name, {
        permanent: true,
        opacity: 0.8,
        direction: 'center',
        className: 'leaflet-label'
      })
      l.bindPopup(mapPopupContent(
        f.properties['Name'],
        f.properties['Description'],
        f.properties['URL'],
        'Click here to view the map'),
        {offset: [0,8]});
    }
  },
}

export default layer;