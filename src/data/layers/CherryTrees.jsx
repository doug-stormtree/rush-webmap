import ReactDOMServer from "react-dom/server";
import { divIcon } from 'leaflet';
import { mapPopupContent, pointToIcon, MapMarker } from '../LeafletStyleHelpers';
import { ReactComponent as CherryBlossomIcon } from '../svg/CherryBlossom.svg';

const CherryBlossomIconStyle = {
  fill: 'rgb(97.254902%, 67.45098%, 73.333333%)',
  icon: <CherryBlossomIcon />
}

const layer = {
  title: 'Cherry Blossoms',
  description: [
    {type:'p', content:'Cherry Tree Blossoms are a beautiful sign of the changing season with vibrant pink and white flowers. The City of Victoria is fortunate to have many different species throughout the urban forest with bloom times starting as early as February and ending as late as May in some years.'},
    {
      type:'link',
      content:'Tourism Victoria - How to Experience Victoria\'s Iconic Cherry Blossom Season',
      url:'https://www.tourismvictoria.com/blog/how-experience-victorias-iconic-cherry-blossom-season'
    },
    {type:'p', content:'The Victoria Nikkei Cultural Society has a guide to many of the species found throughout the city and which streets or parks best showcase each.'},
    {
      type:'link',
      content:'The Victoria Nikkei Cultural Society - Hanami :: 花見 (Cherry Blossom Viewing)',
      url:'https://www.vncs.ca/activities/hanami-%E8%8A%B1%E8%A6%8B-cherry-blossom-viewing/'
    },
    {
      type:'link',
      content:'Contains information licensed under the Open Government Licence – City of Victoria.',
      url:'https://opendata.victoria.ca/pages/open-data-licence'
    },
  ],
  data: require('../geojson/CherryTrees.geojson'),
  shape: 'point',
  symbology: 'single',
  cluster: true,
  clusterOpts: {
    disableClusteringAtZoom: 16,
    maxClusterRadius: 60,
    spiderfyOnMaxZoom: false,
    chunkedLoading: true,
    polygonOptions: {
      color: CherryBlossomIconStyle.fill,
    },
    iconCreateFunction: (cluster) => {
      return divIcon({
        className: "",
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        html: ReactDOMServer.renderToString(
          <>
            <MapMarker {...CherryBlossomIconStyle} size={32} padding={3} bgColor='rgba(227,232,240,0.8)' />
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
  icon: CherryBlossomIconStyle,
  options: {
    pointToLayer: (f,l) => pointToIcon(l, CherryBlossomIconStyle),
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
        f.properties['CommonName'],
        f.properties['BotanicalName']
        ), {offset: [0,-6]});
    }
  },
}

export default layer;