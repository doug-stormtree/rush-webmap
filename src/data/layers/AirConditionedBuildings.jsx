import { mapPopupContent, pointToIconByProperty } from "../LeafletStyleHelpers";
import { ReactComponent as CommunityCtrIcon } from '../svg/cc.svg';
import { ReactComponent as LibraryIcon } from '../svg/lib.svg';

const styleMap = new Map([
  ["Community Centre", {icon: (<CommunityCtrIcon />), fill: '#36F', stroke: '#36F', legendText: 'Community Centre'}],
  ["Library", {icon: (<LibraryIcon />), fill: '#36F', stroke: '#36F', legendText: 'Library'}],
]);

const layer = {
  title: "Air Conditioned Buildings",
  description: 'Public air conditioned buildings that may provide relief during heat waves.',
  data: require('../geojson/AC_Buildings.geojson'),
  shape: 'point',
  symbology: 'classified',
  styleMap: styleMap,
  options: {
    pointToLayer: (f,l) => pointToIconByProperty(
      f,
      l,
      "Type",
      styleMap
    ),
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
        f.properties['Name of Place'],
        f.properties.Type + ': ' + f.properties.Address
        ), {offset: [4.5,2]});
    }
  },
}

export default layer;