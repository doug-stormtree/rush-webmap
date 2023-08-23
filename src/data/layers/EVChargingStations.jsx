import L from 'leaflet';
import 'leaflet-layerjson';
import { mapPopupContent, pointToIconByProperty } from "../LeafletStyleHelpers";
import { ReactComponent as EVIcon } from '../svg/CarEV.svg';
import { StartOffLayersName } from '../TextContent';

const styleMap = new Map([
  ['1', {icon: <EVIcon />, fill: 'rgb(7,72,174)', legendText: 'Level 1 (<2 kW)'}],
  ['2', {icon: <EVIcon />, fill: 'rgb(130,173,70)', legendText: 'Level 2 (2 - 40 kW)'}],
  ['3', {icon: <EVIcon />, fill: 'rgb(253,106,33)', legendText: 'Level 3 (>40 kW)', subText: ['Fast Charger']}],
])

const layer = {
  title: 'EV Charging Stations',
  description: [
    {type: 'p', content: 'Charging station data provided by Open Charge Map.'},
    {type: 'link', content: 'View detailed charging station information, contribute to the map, and learn more about the project here.', url: 'https://openchargemap.org/site'}
  ],
  legendTitle: 'Charging Level (Speed)',
  leafletLayer: L.layerJSON({
    url: "https://api.openchargemap.io/v3/poi/?output=geojson&countrycode=CA&usagetypeid=1&statustypeid=50&maxresults=3000&compact=false&camelcase=true&verbose=false&includecomments=true&key=ca66f44f-646d-4f64-98ec-639b924d2839&boundingbox=({lat1}%2C{lon1})%2C({lat2}%2C{lon2})",
    propertyItems: 'features',
    propertyTitle: 'properties.name',
    propertyLoc: 'geometry.coordinates',
    updateOutBounds: '',
    locAsGeoJSON: true,
    precision: 5,
    caching: true,
    cacheId: function(data, latlng) {
      return data.id || latlng.toString();
    },
    dataToMarker: function(data, latlng) {
      return pointToIconByProperty(
        data,
        latlng,
        "level",
        styleMap)
        .bindPopup(
          mapPopupContent(
            data.properties.name,
            data.properties.connectionType
          )
        )
    },
  }),
  shape: 'point',
  symbology: 'classified',
  styleMap: styleMap,
  questions: [
    { key: 'light-footprint', group: StartOffLayersName, active: false },
    { key: 'development', group: 'Energy', active: false },
  ]
}

export default layer;