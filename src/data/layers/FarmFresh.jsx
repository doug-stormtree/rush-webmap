import { IconContext } from "react-icons";
import { mapPopupContent, pointToIconByProperty } from "../LeafletStyleHelpers";
import { PiFarm, PiWineFill, PiTreeBold } from 'react-icons/pi';
import { TbGardenCart } from 'react-icons/tb';
import { BsShopWindow } from 'react-icons/bs';

const iconColor = "#317039"
const iconOpts = { color: iconColor, size: '22px' }
const styleMap = new Map([
  ["Farm", {
    icon:(<IconContext.Provider value={iconOpts}><PiFarm /></IconContext.Provider>),
    legendText:"Farm"
  }],
  ["Market", {
    icon:(<IconContext.Provider value={iconOpts}><BsShopWindow /></IconContext.Provider>),
    legendText:"Market"
  }],
  ["Vineyard/Brewery", {
    icon:(<IconContext.Provider value={iconOpts}><PiWineFill /></IconContext.Provider>),
    legendText:"Vineyard/Brewery"
  }],
  ["Garden", {
    icon:(<IconContext.Provider value={iconOpts}><TbGardenCart /></IconContext.Provider>),
    legendText:"Garden"
  }],
  ["Orchard", {
    icon:(<IconContext.Provider value={iconOpts}><PiTreeBold /></IconContext.Provider>),
    legendText:"Orchard"
  }],
])

const layer = {
  title: "Farm Fresh Map",
  description: [
    {type: 'image', url: require('../jpg/IslandFarmFreshLogo2.jpg') },
    {type: 'p', content: 'Brought to you by the Southern Vancouver Island Direct Farm Marketing Association, the Island Farm Fresh Guide is your source for local farmers across Vancouver Island and the Gulf Islands. Check out the Farm Fresh Guide\'s directory of over 56 farms and discover what local produce you might have access to. The guide showcases not only farms, but highlights markets and producers carrying a wide variety of goods, ranging from cider, to honey, plants, and much more! The guide hopes to connect people with local farmers, growers, and makers in Southern Vancouver Island. You can find out more information about the Island Farm Fresh Guide on their website at:'},
    {type: 'link', url: 'https://islandfarmfresh.com/', content: 'https://islandfarmfresh.com/'},
  ],
  data: require('../geojson/FarmFresh.geojson'),
  shape: 'point',
  symbology: 'classified',
  property: "ID",
  styleMap: styleMap,
  options: {
    pointToLayer: (f,l) => pointToIconByProperty(
      f,
      l,
      "ID",
      styleMap,
      32,
      5
    ),
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
        f.properties['Name'],
        [
          f.properties['Address'],
          f.properties['Contact'],
          f.properties['Links'],
          f.properties['Description'],
        ],
        [ 'https://islandfarmfresh.com/' ],
        [ 'Find more information at https://islandfarmfresh.com/' ],
        require('../jpg/IslandFarmFreshLogo2.jpg')
        // [
        //   f.properties['LINK'],
        //   f.properties['CONTACT'] ? 'mailto:' + f.properties['CONTACT'] : null,
        // ],
        // [
        //   null,
        //   f.properties['CONTACT'] ?? null,
        // ]
        ), {offset: [0,-6]});
    }
  },
}

export default layer;