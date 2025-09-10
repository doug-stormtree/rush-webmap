import { mapPopupContent, pointToIcon } from '../LeafletStyleHelpers';
import { ReactComponent as PumpoutIcon } from '../svg/pumpout.svg';

const iconStyle = {
  icon: (<PumpoutIcon />),
  border: '3px solid orange',
  legendText: "Sewage Pumpout Station"
}

const layer = {
  title: 'Sewage Pumpout Stations',
  description: [
    {type:'p', content:'Location and information on the sewage pumpout stations within the CRD.'},
  ],
  data: require('../geojson/PumpoutStationsCRD.geojson'),
  shape: 'point',
  symbology: 'single',
  icon: iconStyle,
  options: {
    pointToLayer: (f,l) => pointToIcon(l, iconStyle),
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
        f.properties.Name,
        [
          'Sewage Pumpout Station',
          f.properties.Details,
          'Cost: ' + f.properties.Cost,
        ],
        ), {offset: [0,-6]});
    }
  },
}

export default layer;