import { IconContext } from "react-icons";
import { mapPopupContent, pointToIconByProperty } from "../LeafletStyleHelpers";
import { IoBeer } from 'react-icons/io5';
import { PiFarm } from 'react-icons/pi';
import { TbGardenCart } from 'react-icons/tb';
import { FaHandsHelping } from 'react-icons/fa';
import { MdOutlineFoodBank } from 'react-icons/md';
import { BsShopWindow } from 'react-icons/bs';

const styleMap = new Map([
  ["Food_Bev", {
    icon:(<IconContext.Provider value={{ color: "#8843ef", size: '22px' }}><MdOutlineFoodBank /></IconContext.Provider>),
    fill:"#8843ef",
    legendText:"Food & Bev"
  }],
  ["Farm", {
    icon:(<IconContext.Provider value={{ color: "#8843ef", size: '22px' }}><PiFarm /></IconContext.Provider>),
    fill:"#8843ef",
    legendText:"Farm"
  }],
  ["Market", {
    icon:(<IconContext.Provider value={{ color: "#8843ef", size: '20px' }}><BsShopWindow /></IconContext.Provider>),
    fill:"#8843ef",
    legendText:"Market"
  }],
  ["Food_Bank_Community_Resource", {
    icon:(<IconContext.Provider value={{ color: "#8843ef", size: '22px' }}><FaHandsHelping /></IconContext.Provider>),
    fill:"#8843ef",
    legendText:"Food Bank/Community Resource"
  }],
  ["Community_Garden", {
    icon:(<IconContext.Provider value={{ color: "#8843ef", size: '22px' }}><TbGardenCart /></IconContext.Provider>),
    fill:"#8843ef",
    legendText:"Community Garden"
  }],
  ["Brewery_Distillery", {
    icon:(<IconContext.Provider value={{ color: "#8843ef", size: '22px' }}><IoBeer /></IconContext.Provider>),
    fill:"#8843ef",
    legendText:"Brewery/Distillery"
  }],
])

const layer = {
  title: "Re-Imagine Westshore Farm to Fork",
  description: [
    {type: 'p', content: 'The Metchosin & Westshore Farm to Fork Map seeks to connect local folks to local foods by highlighting food assets within the region! This map makes learning about the growing region and its opportunities more accessible, and acts as a resource to support local food and agriculture. Viewers can use this map to check out farms in the region, markets and establishments that make and sell local goods, and opportunities to learn and engage with growers and producers. This map aims to boost food security and empower folks to get out there to grow and enjoy local food!'},
  ],
  data: require('../geojson/FarmToFork.geojson'),
  shape: 'point',
  symbology: 'classified',
  property: "TYPE",
  styleMap: styleMap,
  options: {
    pointToLayer: (f,l) => pointToIconByProperty(
      f,
      l,
      "TYPE",
      styleMap,
      32,
      5
    ),
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
        f.properties['NAME'],
        [
          f.properties['ADDRESS'],
          f.properties['DESCRIPTION'],
        ],
        [
          f.properties['LINK'],
          f.properties['CONTACT'] ? 'mailto:' + f.properties['CONTACT'] : null,
        ],
        [
          null,
          f.properties['CONTACT'] ?? null,
        ]
        ), {offset: [0,-6]});
    }
  },
}

export default layer;