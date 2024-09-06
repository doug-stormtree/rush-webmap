import { pointToIconByProperty } from '../LeafletStyleHelpers';
import { ReactComponent as WaterIcon } from '../svg/WaterTransport.svg';
import { ReactComponent as AirportIcon } from '../svg/Airport.svg';

const styleMap_TransportHubs = new Map([
  ['Ferry',   {icon: <WaterIcon />, fill: 'rgb(13,101,149)', legendText: 'Ferry Terminal'}],
  ['Airport', {icon: <AirportIcon />, fill: 'rgb(100,186,50)', legendText: 'Airport'}],
])

const layer = {
  title: 'Major Transportation Hubs',
  description: '',
  data: require('../geojson/GHGTransportHubs.geojson'),
  shape: 'point',
  symbology: 'classified',
  styleMap: styleMap_TransportHubs,
  options: {
    pointToLayer: (f,l) => pointToIconByProperty(
      f,
      l,
      "Icon",
      styleMap_TransportHubs
    ),
    onEachFeature: (f,l) => {
      l.bindPopup(
        (f.properties.Name === "BC Ferries"
          ? `<img src="${require('../png/BCFerriesGHGEmissions.png')}" /><img src="${require('../png/Top6EmittingBCFerriesRoutes.png')}" />`
          : `<img src="${require('../png/VictoriaInternationalAirportGHGEmissions.png')}" />`
        ),
        {
          offset: [0,-2],
          autoPan: false,
          autoClose: false,
          minWidth: 400,
          maxWidth: 400
        });
      l.on('add', (e) => e.target.openPopup());
    }
  },
}

export default layer;