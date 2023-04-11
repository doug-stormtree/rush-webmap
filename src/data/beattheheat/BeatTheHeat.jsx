import { point } from 'leaflet';
import { pointToIconByProperty, mapPopupContent } from '../LeafletStyleHelpers';
import HeatDomes from './HeatDomes.geojson';
import Parks from './CRD_Parks.geojson';
import AC_Buildings from './AC_Buildings.geojson';
import Water_Fountains from './VictoriaDrinkingFountains.geojson';
import Links from './BeatTheHeat_Links.geojson';
import image from './BeatTheHeat.jpg';
import { ReactComponent as CommunityCtrIcon } from './cc.svg';
import { ReactComponent as LibraryIcon } from './lib.svg';
import { ReactComponent as WaterIcon } from './water.svg';
import NorthPark from './NorthPark1.jpg';
import ClimateAtlas from './CA-logo-colour-whitetext-EN.png';

const styleMap_AC_Buildings = new Map([
  ["Community Centre", {icon: (<CommunityCtrIcon />), fill: '#36F', stroke: '#36F', legendText: 'Community Centre'}],
  ["Library", {icon: (<LibraryIcon />), fill: '#36F', stroke: '#36F', legendText: 'Library'}],
]);

const styleMap_Water_Fountains = new Map([
  ["drinking fountain", {
    icon: (<WaterIcon/>),
    fill: '#36F',
    stroke: '#36F',
    legendText: 'Drinking Fountain',
  }],
]);

const BeatTheHeat = {
  title: "Beat the Heat?",
  question: "How can I keep myself and the ecosystem cool & hydrated?",
  image: image,
  description: [
    {type: 'p', content: "All life is vulnerable to extreme heat. Heat islands and heat waves happen as average global temperatures rise, and hotter pockets of air move inland. The red polygons show areas with significant increases in average summer surface temperature from 2018 to 2021 within the CRD. Notice the relationship between heat island areas, green space and dark or paved surfaces. Urban centres with dark pavement can absorb the heat and re-emit it at a rate of 95%. Breezes and closeness to water also affect temperature."},
    {type: 'p', content: "Prolonged heat dries out landscapes, increases risk of fires, can shorten growing seasons for farmers and create conditions for viruses and bacteria to thrive. While plants cool the area and drawdown harmful greenhouse gases from the atmosphere, the soil processes the gases at a rate of 2:1 compared to plants. The partnership between soil and the atmosphere is key to having a healthy climate. Taking action to mange temperature and moisture in our neighbourhoods is a key to climate action."},
  ],
  act: {
    initiatives: [
      {
        title: "North Park Heatwave Map",
        description: "The North Park Heatwave Map was created by Tenaya Lynx, Julia Frasher, Riley Sondergaard during their Community Based Participatory Reseach Class, Geography, University of Victoria. They consulted community members and organizations to identify areas of relief, concern and risk resulting in a map that the community can use to orient and help during a heatwave and also to advocate for improvements to infrastructure and services.",
        image: NorthPark,
        link: "https://www.google.com/maps/d/viewer?mid=12YLjmNqss6nHrcWQYYgK0ffl8JqkYaKd&ll=48.431337468326106%2C-123.35707554999999&z=16",
      },
      {
        title: "Climate Atlas of Canada",
        description: "The Climate Atlas of Canada combines climate science, mapping, and storytelling together with Indigenous Knowledges and community-based research and video to inspire awareness and action.",
        image: ClimateAtlas,
        link: "https://climateatlas.ca/",
      },
    ],
  },
  mapData: [
    {
      title: 'Local Initiatives',
      description: 'Learn more from these area specific community mapping initiatives by clicking one of these areas on the map and following the link.',
      data: Links,
      shape: 'polygon',
      symbology: 'single',
      options: {
        style: {
          stroke: false,
          fill: true,
          opacity: 0.5,
          fillOpacity: 0.4,
          fillColor: 'rgba(253,218,13,1.0)',
          interactive: true,
        },
        onEachFeature: (f,l) => {
          l.bindPopup(mapPopupContent(f.properties['Name'], f.properties['Description'], f.properties['URL'], 'Click here to view the ' + f.properties['Name']), {offset: point(0,8)});
        }
      }
    },
    {
      title: 'Parks',
      description: 'These are the designated parks within the CRD. Greenspace has many benefits, including providing shade, cleaning the air, and reducing noise. While plants help draw harmful greenhouse gases from the atmosphere, the soil processes the gases. Soil processes greenhouse gases at a rate of 2:1 compared to plants. The partnership between soil and the atmosphere is key to having a healthy climate. Nature is also great for your physical and mental wellbeing.',
      data: Parks,
      shape: 'polygon',
      symbology: 'single',
      options: {
        style: {
          stroke: false,
          fill: true,
          opacity: 0.5,
          fillOpacity: 0.7,
          fillColor: 'rgba(140,175,74,1.0)',
          interactive: true,
        },
        onEachFeature: (f,l) => {
          l.bindPopup(mapPopupContent(f.properties['Name'], f.properties['Type'] + ' with an area of ' + (f.properties['Shape.STArea()']/100000).toFixed(2) + ' km²'), {offset: point(0,8)});
        }
      }
    },
    {
      title: 'Heat Domes',
      description: 'NOAA defines a heat dome as a climate event when "high-pressure circulation in the atmosphere acts like a dome or cap, trapping heat at the surface and favoring the formation of a heat wave." The heat islands on this map are some areas within the CRD that have experienced the most significant increases in average summer surface temperature from 2018 to 2021. Using the satellite imagery, you can see the relationship between heat island distance and canopy vegetation, roof area and parking lots. This heat island map was created by UVic geography student Gillian Voss at the UVic Map Shop.',
      data: HeatDomes,
      shape: 'polygon',
      symbology: 'single',
      options: {
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
        },
        onEachFeature: (f,l) => {
          l.bindPopup(mapPopupContent('Heat Dome', 'This area is predicted to be vulnerable to trapping extreme heat.'), {offset: point(0,8)});
        }
      }
    },
    {
      title: "Air Conditioned Buildings",
      description: 'Public air conditioned buildings that may provide relief during heat waves.',
      data: AC_Buildings,
      shape: 'point',
      symbology: 'classified',
      styleMap: styleMap_AC_Buildings,
      options: {
        pointToLayer: (f,l) => pointToIconByProperty(
          f,
          l,
          "Type",
          styleMap_AC_Buildings
        ),
        onEachFeature: (f,l) => {
          l.bindPopup(mapPopupContent(
            f.properties['Name of Place'],
            f.properties.Type + ': ' + f.properties.Address
            ), {offset: point(4.5,2)});
        }
      }
    },
    {
      title: 'Drinking Fountains',
      description: 'Public drinking water fountains in the City of Victoria',
      data: Water_Fountains,
      shape: 'point',
      symbology: 'classified',
      styleMap: styleMap_Water_Fountains,
      options: {
        pointToLayer: (f,l) => pointToIconByProperty(
          f,
          l,
          "FountainType",
          styleMap_Water_Fountains
        ),
        onEachFeature: (f,l) => {
          l.bindPopup(mapPopupContent(
            f.properties['LocationName'],
            f.properties.OwnerNotes + ' Drinking Fountain'
            ), {offset: point(4.5,2)});
        }
      }
    },
  ],
};
export default BeatTheHeat;