import { mapPopupContent } from '../LeafletStyleHelpers';

const layer = {
  title: 'Migratory Bird Sanctuaries',
  description: [
    {type: 'p', content: 'Federal Migratory Bird Sanctuaries within the CRD. There are 92 Migratory Bird Sanctuaries throughout Canada, seven within British Columbia, covering over 11 million hectares of habitat. Migratory Bird Sanctuaries are managed by the Canadian Wildlife Service of Environment Canada.'},
    {type: 'link', content: 'Migratory bird sanctuaries across Canada - Canada.ca', url: 'https://www.canada.ca/en/environment-climate-change/services/migratory-bird-sanctuaries/locations.html'},
    {type: 'p', content: 'Polygons represent a rough outline and are not intended for legal or precise interpretation.'},
  ],
  data: require('../geojson/MigratoryBirdSanctuaries.geojson'),
  shape: 'polygon',
  symbology: 'single',
  options: {
    style: {
      stroke: true,
      color: '#c45721',
      fill: true,
      fillOpacity: 0,
      interactive: true,
    },
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
        f.properties['NAME'],
        f.properties['DESC']
      ), {
        offset: [0,-6],
        closeOnClick: true,
      });
    }
  },
}

export default layer;