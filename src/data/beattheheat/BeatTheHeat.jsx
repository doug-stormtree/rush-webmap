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
      "The Sensitive Ecosystems Inventory (SEI) of East Vancouver Island project has been responsible for tracking sensitive ecosystems for many regions within the Capital Regional District (CRD). Their data is what you see on the map. Their research identifies different sensitive ecosystems and allows us to understand better how these ecosystems are at risk.",
      "Some of the most significant factors responsible for the degradation and ecosystem damage are human usage and the introduction of invasive species. These ecosystems are shrinking, often due to development or land use changes. The areas on this map do not include private lands, provincial & federal lands, or Indigenous reservations. It is important to understand that each of these ecosystems plays a crucial role in the ecological well-being of this area. Damage to one sensitive ecosystem will affect another. These ecosystems in this area of the coast are known for their biodiversity.",
      "Researchers in Japan found that after “forest bathing,” participants had been breathing in phytoncides (essential wood oils) that had antimicrobial properties. Participants had increased NK (natural killer) cells, responsible for the immune response that kills tumours and viruses. Another study sprayed cedar essential oils in a hotel room before guests stayed, which had the same effect on their immune systems. So if you need an excuse to ditch school and go to the beach or buy more house plants, do it! It's good for your health!"
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
      "Learn to identify invasive species and how to remove them safely. Get involved with local efforts to remove invasive species in your area. Check out the events map to learn more!",
      "Learn about what native species are in your area. Look for local native plant sales when you shop for indoor and outdoor plants.",
      "Avoid the use of pesticides and chemicals in your garden.",
      "Next time you visit the beach or go on a hike, leave the speaker at home! Take a moment to enjoy the sounds of nature. Loud noises can disturb birds and cause them to abandon their eggs. Loud noise can also disrupt communication between wildlife (e.g., birds).",
      "Enjoy wildlife from afar. Avoid approaching or touching wildlife or their nesting habitats.",
      "Stay on designated paths and trails to avoid damaging vegetation and wildlife habitats.",
      "Keep your pet on a leash when taking them on walks to avoid damage to sensitive ecosystems.",
      "Be a mindful water user - use rainwater systems to water your garden, plants, and gardens during cooler hours to prevent evaporation."
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
      title: "Heat Domes",
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
      data: AC_Buildings,
      format: 'point',
      property: "Type",
      propertyMap: {
        default: (<CommunityCtrIcon />),
        "Library": (<LibraryIcon />),
      }
    }
  ],
  image: image,
}
export default BeatTheHeat;