import { mapPopupContent, pointToIcon } from '../LeafletStyleHelpers';
import { ReactComponent as WetlandsIcon } from '../svg/Wetlands.svg';

const iconStyle = { icon: (<WetlandsIcon />), fill:"#2e67b1", legendText:"Wetlands"}

const layer = {
  title: 'Maltby Lake',
  description: [
    {type: 'p', content: 'Maltby Lake is at the headwaters of the Tod Creek Watershed. The 21-acre near pristine water body is surrounded by 172 acres of relatively undisturbed forest and wetland. The property is an example of unspoiled lake and land ecosystems.'},
    {type: 'link', content: 'Learn more from the Friends of Maltby Lake Watershed Society', url: 'https://maltbylake.com/'}
  ],
  data: require('../geojson/MaltbyLake.geojson'),
  shape: 'point',
  symbology: 'single',
  icon: iconStyle,
  options: {
    pointToLayer: (f,l) => pointToIcon(l, iconStyle),
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
        'Maltby Lake',
        'Maltby Lake is at the headwaters of the Tod Creek Watershed. The 21-acre near pristine water body is surrounded by 172 acres of relatively undisturbed forest and wetland. The property is an example of unspoiled lake and land ecosystems.',
        'https://maltbylake.com/',
        'Visit the Friends of Maltby Lake Watershed Society.',
        require('../png/MaltbyLakeSensitiveAreas.png'),
        require('../audio/MaltbyBirdsAmbient.m4a'),
        'Press play to listen to the sounds of Maltby Lake:'
        ), {
          offset: [0,-6],
          maxWidth: 400,
        });
    }
  },
}

export default layer;