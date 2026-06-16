import ReactDOMServer from "react-dom/server";
import { divIcon } from 'leaflet';
import { IconContext } from "react-icons";
import { TbFireHydrant } from 'react-icons/tb'
import { pointToIcon, MapMarker } from '../LeafletStyleHelpers';

const iconColor = "#b80302"
const iconOpts = { color: iconColor, size: '22px' }
const FireHydrantIconStyle = {
  fill: '#b80302',
  icon: (<IconContext.Provider value={iconOpts}><TbFireHydrant /></IconContext.Provider>)
}

const layer = {
  title: 'Fire Hydrants',
  description: [
    {type:'p', content:'Location of fire hydrants in Esquimalt, Oak Bay, Saanich, and Victoria.'},
  ],
  data: require('../geojson/FireHydrants.geojson'),
  shape: 'point',
  symbology: 'single',
  cluster: true,
  clusterOpts: {
    disableClusteringAtZoom: 16,
    maxClusterRadius: 60,
    spiderfyOnMaxZoom: false,
    chunkedLoading: true,
    polygonOptions: {
      color: FireHydrantIconStyle.fill,
    },
    iconCreateFunction: (cluster) => {
      return divIcon({
        className: "",
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        html: ReactDOMServer.renderToString(
          <>
            <MapMarker {...FireHydrantIconStyle} size={32} padding={3} bgColor='rgba(227,232,240,0.8)' />
            <div style={{
              position: 'absolute',
              top: '50%',
              transform: 'translate(0, -50%)',
              width: '100%',
              textAlign: 'center',
              fontWeight: 'bold',
              textShadow: '#FFF 2px 2px 4px, #FFF -2px 2px 4px, #FFF 2px -2px 4px, #FFF -2px -2px 4px;',
            }}>{cluster.getChildCount()}</div>
          </>
        ),
      })
    }
  },
  icon: FireHydrantIconStyle,
  options: {
    pointToLayer: (f,l) => pointToIcon(l, FireHydrantIconStyle),
  },
}

export default layer;