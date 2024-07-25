import ReactDOMServer from 'react-dom/server';
import {
  divIcon,
  marker,
} from "leaflet";
import { mapPopupContent } from "../LeafletStyleHelpers";
import { ReactComponent as HartlandPie } from '../svg/HartlandPie.svg';
import { LegendGroups } from '../TextContent';

const layer = {
  title: 'Hartland Landfill',
  description: 'Overall Waste Composition 2022',
  data: require('../geojson/HartlandPie.geojson'),
  shape: 'point',
  symbology: 'single',
  icon: { icon: <HartlandPie /> },
  options: {
    pointToLayer: (f,l) => {
      return marker(l, {
        icon: divIcon({
          className: "",
          iconSize: [256, 256],
          iconAnchor: [128, 128],
          html: ReactDOMServer.renderToString(<HartlandPie />),
        })
      })
    },
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
        f.properties['Name'],
        <HartlandPie />,
        ), {offset: [0,-72]});
    }
  },
  questions: [
    { key: 'have-it-all', active: true, ...LegendGroups.StartOn },
    { key: 'create-community', active: false, group: 'Civic' },
  ]
}

export default layer;