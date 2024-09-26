import ReactDOMServer from "react-dom/server";
import { divIcon } from 'leaflet';
import { mapPopupContent, MapMarker, pointToIconByProperty } from '../LeafletStyleHelpers';
import { IoLibrarySharp } from "react-icons/io5";
import { IconContext } from "react-icons";

const styleMap = new Map([
  ['Little Free Libraries', {
    icon:(<IconContext.Provider value={{ color: '#4185F0'}}><IoLibrarySharp /></IconContext.Provider>),
    fill:"#4185F0",
    legendText:"Little Free Libraries"
  }],
  ['Puzzle and Game Libraries', {
    icon:(<IconContext.Provider value={{ color: '#ED9D96'}}><IoLibrarySharp /></IconContext.Provider>),
    fill:"#ED9D96",
    legendText:"Puzzle and Game Libraries"
  }],
  ['Seed Libraries', {
    icon:(<IconContext.Provider value={{ color: '#62B043'}}><IoLibrarySharp /></IconContext.Provider>),
    fill:"#62B043",
    legendText:"Seed Libraries"
  }],
  ['Something Special', {
    icon:(<IconContext.Provider value={{ color: '#FF7518'}}><IoLibrarySharp /></IconContext.Provider>),
    fill:"#FF7518",
    legendText:"Something Special"
  }],
])

const layer = {
  title: 'Little Free Libraries',
  description: [
    {type:'p', content:'The Greater Victoria Placemaking Network (GVPN) is a volunteer nonprofit society of Greater Victoria residents dedicated to improving shared spaces in the region. Their mission is “to inspire people, neighbourhoods and communities to create vibrant public places that promote health, happiness and well-being.” This data layer shows their Little Free Libraries project, which maps the homemade book exchange boxes all around Victoria. Visit the GVPN website to learn more about the organization and to add a Little Free Library near you.'},
    {
      type:'link',
      content:'Little Free Libraries - Greater Victoria Placemaking Network',
      url:'https://victoriaplacemaking.ca/little-free-libraries/'
    },
  ],
  data: require('../geojson/LittleFreeLibraries.geojson'),
  shape: 'point',
  symbology: 'classified',
  property: 'layer',
  styleMap: styleMap,
  options: {
    pointToLayer: (f,l) => pointToIconByProperty(
      f,
      l,
      'layer',
      styleMap
    ),
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
        f.properties['Name'],
        'This ' + f.properties.layer + ' and more can be found on the Little Free Libraries map maintained by the Greater Victoria Placemaking Network.',
        'https://victoriaplacemaking.ca/little-free-libraries/',
        'Little Free Libraries - Greater Victoria Placemaking Network',
      ), {offset: [0,-6]});
    }
  },
  cluster: true,
  clusterOpts: {
    disableClusteringAtZoom: 16,
    maxClusterRadius: 60,
    spiderfyOnMaxZoom: false,
    chunkedLoading: true,
    polygonOptions: {
      color: styleMap.get('Little Free Libraries').fill,
    },
    iconCreateFunction: (cluster) => {
      return divIcon({
        className: "",
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        html: ReactDOMServer.renderToString(
          <>
            <MapMarker {...styleMap.get('Little Free Libraries')} size={32} padding={3} bgColor='rgba(227,232,240,0.8)' />
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
}

export default layer;