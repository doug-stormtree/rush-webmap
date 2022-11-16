import * as HeatDomes from './HeatDomes.json';
import * as AC_Buildings from './AC_Buildings.json';
import image from './BeatTheHeat.jpg';
import { ReactComponent as CommunityCtrIcon } from './cc.svg';
import { ReactComponent as LibraryIcon } from './lib.svg';
import NorthPark from './NorthPark1.jpg';
import ClimateAtlas from './CA-logo-colour-whitetext-EN.png';

const BeatTheHeat = {
  title: "Beat the Heat",
  question: "How can I keep myself and the ecosystem cool & hydrated?",
  learn: {
    text: [
      "All life is vulnerable to extreme heat. Heat islands and heat waves happen as average global temperatures rise, and hotter pockets of air move inland. The red polygons show areas with significant increases in average summer surface temperature from 2018 to 2021 within the CRD. Notice the relationship between heat island areas, green space and dark or paved surfaces. Urban centres with dark pavement can absorb the heat and re-emit it at a rate of 95%. Breezes and closeness to water also affect temperature.",
      "Prolonged heat dries out landscapes, increases risk of fires, can shorten growing seasons for farmers and create conditions for viruses and bacteria to thrive. While plants cool the area and drawdown harmful greenhouse gases from the atmosphere, the soil processes the gases at a rate of 2:1 compared to plants. The partnership between soil and the atmosphere is key to having a healthy climate. Taking action to mange temperature and moisture in our neighbourhoods is a key to climate action.",
    ],
    initiatives: [
      { 
        title: "Climate Atlas of Canada",
        image: ClimateAtlas,
        link: "https://climateatlas.ca/",
      },
    ],
  },
  act: {
    list: [
      "Drink plenty of water and stay cool! Seek out green spaces, shade, water bodies or air-conditioned buildings.",
      "Grow your garden! Create shade in your own living spaces.",
      "Ask your municipality for more green space and less pavement.",
      "Limit your carbon footprint! Biking, carpooling and taking the bus are some of the easiest ways to reduce your carbon footprint and live sustainably.",
    ],
    initiatives: [
      { 
        title: "North Park Heatwave Map",
        image: NorthPark,
        link: "https://www.google.com/maps/d/viewer?mid=12YLjmNqss6nHrcWQYYgK0ffl8JqkYaKd&ll=48.431337468326106%2C-123.35707554999999&z=16",
      }
    ],
  },
  mapData: [
    {
      title: 'Heat Domes',
      patch: '<div style="width: 1em; height: 1em; background: #ae163e;"></div>',
      data: HeatDomes,
      format: 'polygon',
      style: {
        opacity: 0.5,
        color: 'rgba(189,17,20,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 0.7,
        fillColor: 'rgba(189,17,20,1.0)',
        interactive: true
      }
    },
    {
      title: "Air Conditioned Buildings",
      patch: '<div style="width: 1em; height: 1em; background: #ae163e;"></div>',
      data: AC_Buildings,
      format: 'point',
      property: "Type",
      propertyMap: {
        "Community Centre": (<CommunityCtrIcon />),
        "Library": (<LibraryIcon />),
      }
    }
  ],
  image: image,
}
export default BeatTheHeat;