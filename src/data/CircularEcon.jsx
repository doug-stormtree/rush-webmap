import ReactDOMServer from "react-dom/server";
import { point, marker, divIcon } from 'leaflet';
import { geoDateToLocaleString, getStyleMapProperty, mapPopupContent, pointToIcon } from './LeafletStyleHelpers';
// GeoJSON
import RecyclingDepots from './geojson/RecyclingDepots.geojson';
import HartlandLandfill from './geojson/HartlandPie.geojson';
import SingleUsePlastics from './geojson/SingleUsePlastics.geojson';
// SVG
import { ReactComponent as RecyclingIcon } from './svg/Recycling.svg';
import { ReactComponent as HartlandPie } from './svg/HartlandPie.svg';
// PNG
import image from './png/CircularEconomy.png';
import projectZero from './png/ProjectZero.png';
import sIPP from './png/SIPP.png';
import zeroWasteVictoria from './png/ZeroWasteVictoria.png';
import recycleCBC from './png/RecycleCBC.png';
import bcGreenBusiness from './png/BCGreenBusiness.png';

const styleMap_SUP = new Map([
  ["None", {fillColor: 'rgb(90,90,90)', color: 'rgb(130,130,130)', legendText: 'No Bylaws'}],
  ["Bags", {fillColor: 'rgb(0,120,120)', color: 'rgb(130,130,130)', legendText: 'Checkout Bags'}],
  ["BSC", {fillColor: 'rgb(120,0,120)', color: 'rgb(130,130,130)', legendText: 'Bags, Straws, Containers'}]
]);

const RecyclingIconStyle = {
  fill: 'rgb(15,86,229)',
  icon: <RecyclingIcon />
}

const CircularEcon = {
  title: 'Circular Economy?',
  question: 'How can I close the loop on waste?',
  image: image,
  description: [
    {type: 'h2', content: 'Comparison'},
    {type: 'p', content: 'This map shows the lost value in volumes of waste materials going to the landfill or that we are paying to dispose of outside the region as compared to the places we can turn waste into a resource and create circular systems to gain value.  Facilities are identified for safe and productive disposal of common materials so that value can be redeemed which reduces harmful gases and pollutants from entering the soil, air and water.'},
    {type: 'h2', content: 'Problem'},
    {type: 'p', content: 'Trash and pollution end up in watersheds and the ocean.  Landfills are reaching capacity and emit powerful GHG’s. When materials are mixed during disposal it is more difficult to regain the value of the material later.  New materials generally have a higher green house gas footprint from sourcing, processing/manufacturing and transportation. Communities. organizations and businesses often pay for disposal and also lose the potential value of keeping things in circulation.  About 340,000 tonnes of plastic items and packaging were thrown away in 2019 in BC and 40% of plastic is used only once.¹'},
    {type: 'h2', content: 'Solution'},
    {type: 'p', content: 'We can practice one of Nature’s key design principles by treating waste as a resource.  This can range from a treasure hunt at yard sales to shopping from businesses that have a zero waste strategy and commitment to climate action and social justice.  Municipalities are also now empowered to ban plastic bags and single use plastics without provincial approval - a change lead by Esquimalt, Saanich and Victoria.'},
    {type: 'p', content: 'BC is a leader in "take back programs" known as Extended Producer Responsibility (EPR) which  require producers to account for the lifecycle of the products and packaging they sell.  From medications to batteries to packaging and paint, our community is well set up for a high level of recycling and reuse.  BC’s EPR programs currently recapture 315,000 tonnes of plastics found in various products.²'},
    {type: 'p', content: 'Consult the Recycling Council of BC website (linked in the initiatives below) if you don’t know what to do with something.'},
    {type: 'p', content: 'Integrated Resource Recovery is a name for developments that co-locate buildings and businesses that can use each other’s waste heat, materials & energy. Some municipalities around the world have created local biogas fuel sources that are owned and operated by the local government creating a level of autonomy and sustainability that is impressive and practical.³'},
    {type: 'p', content: 'By treating waste as a resource, we:'},
    {type: 'ul', content: [
      'improve the local economy,',
      'create a stronger community,',
      'avoid pollution and greenhouse gas emissions from transportation,',
      'divert waste from the landfill,',
      'reduce stress on our environment,',
      'encourage innovation,',
      'and invest in health and wellbeing.'
    ]},
    {type: 'link', content: '1. "Reducing plastic waste, pollution a shared responsibility," BC Gov News, Ministry of Environment and Climate Change Strategy, February 12, 2021.', url: 'https://news.gov.bc.ca/releases/2021ENV0014-000263'},
    {type: 'link', content: '2. "Turning used plastic into new opportunity," BC Gov News, Ministry of Environment and Climate Change Strategy, May 19, 2021.', url: 'https://news.gov.bc.ca/releases/2021ENV0037-000955'},
    {type: 'link', content: '3. "Karpalund Biogas Plant, Kristianstad," UN Climate Technology Centre & Network, accessed May 11, 2023.', url: 'https://www.ctc-n.org/products/karpalund-biogas-plant-kristianstad'},
  ],
  act: {
    initiatives: [
      { 
        title: "Project Zero",
        description: "Launched in 2019, Project Zero is an initiative of the Synergy Foundation focused on implementing circular economy concepts in British Columbia through incubation, innovation, and education.",
        image: projectZero,
        link: "https://www.project-zero.ca/",
      },
      {
        title: "South Island Prosperity Partnership",
        description: "The South Island Prosperity Partnership (SIPP) is an alliance of over 70 public and private-sector partners in Greater Victoria, including 11 local governments, nine First Nations, three post-secondary institutions, nine industry associations and nonprofits, and more than 30 major employers. SIPP works to bolster our region’s economic and social prosperity. This will happen by catalyzing the creation of high-quality, household-sustaining jobs, so that more families can afford to live, work and build a life here.",
        image: sIPP,
        link: "https://southislandprosperity.ca/who-is-sipp/",
      },
      {
        title: "Zero Waste Victoria Storymap",
        description: "A Storymap collecting the locations of zero waste intitiatives and businesses in the Greater Victoria area. Project completed by Aislyn King, Ege Kaymaz, Katie Wilson, Katrina Laube as part of a Community Based Participatory Research course in the UVic Geography Department.",
        image: zeroWasteVictoria,
        link: "https://storymaps.arcgis.com/stories/dc6ffc4f93b64815989f762178467827",
      },
      {
        title: "Recycling Council of BC",
        description: "The Recycling Council of British Columbia is the province’s trusted source of information on local curbside recycling services, province-wide Extended Producer Responsibility and stewardship programs, share, reuse and repair options, as well as best practices from around the world.",
        image: recycleCBC,
        link: "https://rcbc.ca/",
      },
      {
        title: "BC Green Business",
        description: "BC Green Business provides sustainability certification for member businesses and works with them to identify unique opportunities for environmental and community friendly practices. Browse their member directory to find sustainable businesses in your area.",
        image: bcGreenBusiness,
        link: "https://bcgreenbusiness.ca/",
      }
    ],
  },
  mapData: [
    {
      title: 'Single-use Item Bylaws',
      description: [
        {type:'p', content:'Single-use items are products designed to be used once and then thrown away. Examples include checkout bags, straws, stir-sticks, and take-away food containers.'},
        {type: 'p', content: 'Every day, Victoria residents throw away over 75,000 single-use items.¹'},
        {type:'p', content:'Click the map within a given municipality to learn about their bylaws, or the B.C. Government keeps a comprehensive list of municipal bylaws at the link below:'},
        {
          type:'link',
          content:'Ministry of Environment and Climate Change. Municipal Bylaws for Single-Use Plastics - Province of British Columbia.',
          url:'https://www2.gov.bc.ca/gov/content/environment/waste-management/zero-waste/municipal-plastics-bylaws#participating-municipalities'
        },
        {
          type:'link',
          content:'1. City of Victoria. "Single-use Items." Accessed May 26, 2023.',
          url:'https://www.victoria.ca/EN/main/residents/waste-reduction/single-use-items.html'
        }
      ],
      data: SingleUsePlastics,
      format: 'polygon',
      symbology: 'classified',
      styleMap: styleMap_SUP,
      options: {
        style: function (feature) {
          const baseStyle = {
            stroke: true,
            opacity: 0.5,
            color: 'rgb(130,130,130)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 3,
            fill: true,
            fillOpacity: 0.2,
            interactive: true
          }
          return {
            ...baseStyle,
            fillColor: getStyleMapProperty(
                'fillColor',
                feature.properties.ImplementationDate === null
                  ? "None"
                  : feature.properties.StrawBan === false
                    ? "Bags"
                    : "BSC",
                styleMap_SUP
              ),
          }
        },
        onEachFeature: (f,l) => {
          l.bindPopup(mapPopupContent(
              f.properties.LocalGovShort,
              f.properties.ImplementationDate === null
                ? `There are no single-use items bylaws currently in effect in the ${f.properties.LocalGov}.`
                : `The ${
                    f.properties.LocalGov
                  } bylaw for single-use items took effect on ${
                    geoDateToLocaleString(f.properties.ImplementationDate)
                  }. Paper checkout bags must cost $${
                    f.properties.PaperBagFee.toFixed(2)
                  } and reusable bags must cost $${
                    f.properties.ReusableBagFee.toFixed(2)
                  }. Single-use straws and food containers are ${
                    f.properties.StrawBan ? 'also' : 'not'
                  } banned. Read the bylaw here:`,
                  f.properties.URL
            ), {offset: point(0,8)});
          l.on({
            mouseover: (e) => e.target.setStyle({ fillOpacity: 0.7 }),
            mouseout: (e) => e.target.setStyle({ fillOpacity: 0.2 })
          });
        }
      }
    },
    {
      title: 'Recycling Depots',
      description: 'Find where you can recycle a wide range of household materials in your neighbourhood. Visit the website of the specific depot to confirm what is accepted there by clicking on it.',
      data: RecyclingDepots,
      shape: 'point',
      symbology: 'single',
      icon: RecyclingIconStyle,
      options: {
        pointToLayer: (f,l) => pointToIcon(l, RecyclingIconStyle),
        onEachFeature: (f,l) => {
          l.bindPopup(mapPopupContent(
            f.properties['Name'],
            f.properties['Address'],
            f.properties['URL'],
            f.properties['URL']
            ), {offset: point(4.5,2)});
        }
      }
    },
    {
      title: 'Hartland Landfill',
      description: 'Overall Waste Composition 2022',
      data: HartlandLandfill,
      shape: 'point',
      symbology: 'single',
      icon: { icon: <HartlandPie /> },
      options: {
        pointToLayer: (f,l) => {
          return marker(l, {
            icon: divIcon({
              className: "",
              iconSize: [256, 256],
              iconAnchor: [128, 128],
              html: ReactDOMServer.renderToString(<HartlandPie />),
            })
          })
        },
        onEachFeature: (f,l) => {
          l.bindPopup(mapPopupContent(
            f.properties['Name'],
            image=<HartlandPie />,
            ), {offset: point(0,-72)});
        }
      }
    },
  ],
};
export default CircularEcon;