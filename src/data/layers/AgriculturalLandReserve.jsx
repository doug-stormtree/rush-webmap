import { mapPopupContent } from '../LeafletStyleHelpers';

const layer = {
  title: 'Agricultural Land Reserve',
  description: 'The spatial representation for the boundary of an Agricultural Land Reserve (ALR), which is a parcel of land, based on soil and climate, deemed necessary to be maintained for agricultural use. The data gets updated four times a year, at the end of: Jan, Apr, Jul and Oct. It is also available on the ALC’s website: https://www.alc.gov.bc.ca/alr-maps/',
  data: require('../geojson/AgriculturalLandReserve.geojson'),
  shape: 'polygon',
  symbology: 'single',
  options: {
    style: {
      stroke: false,
      fill: true,
      fillOpacity: 0.7,
      fillColor: 'rgba(112,130,56,1.0)',
      interactive: true,
    },
    onEachFeature: (f,l) => {
      l.bindPopup(
        mapPopupContent(
          'Agriculutural Land Reserve',
          'A parcel of land, based on soil and climate, deemed necessary to be maintained for agricultural use.',
          ),
        {offset: [0,8]});
    }
  },
}

export default layer;