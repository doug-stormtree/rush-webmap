import {
  mapPopupContent,
  geoDateToLocaleString,
  getStyleMapProperty
} from "../LeafletStyleHelpers";

const styleMap = new Map([
  ["None", {fillColor: 'rgb(90,90,90)', color: 'rgb(130,130,130)', legendText: 'No Bylaws'}],
  ["Bags", {fillColor: 'rgb(0,120,120)', color: 'rgb(130,130,130)', legendText: 'Checkout Bags'}],
  ["BSC", {fillColor: 'rgb(120,0,120)', color: 'rgb(130,130,130)', legendText: 'Bags, Straws, Containers'}]
]);

const layer = {
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
  data: require('../geojson/SingleUsePlastics.geojson'),
  format: 'polygon',
  symbology: 'classified',
  styleMap: styleMap,
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
            styleMap
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
        ), {offset: [0,8]});
      l.on({
        mouseover: (e) => e.target.setStyle({ fillOpacity: 0.7 }),
        mouseout: (e) => e.target.setStyle({ fillOpacity: 0.2 })
      });
    }
  },
}

export default layer;