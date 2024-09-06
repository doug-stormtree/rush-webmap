import { mapPopupContent } from "../LeafletStyleHelpers";

const layer = {
  title: 'Stewardship Groups',
  description: [
    {type: 'p', content: 'Stewardship groups are volunteer-based community organizations that actively support the environmental health and wellbeing of a specific region, park, or watershed through monitoring programs, invasive species management, public outreach, and governmental advocacy.'},
    {type: 'p', content: 'In addition to those shown on the map, the following groups work throughout the Capital Regional District:'},
    {type: 'link', content: 'Greater Victoria Green Team', url: 'https://greenteamscanada.ca/our-green-teams/greater-victoria-green-team/'},
    {type: 'link', content: 'Habitat Acquisition Trust', url: 'https://hat.bc.ca/volunteer'}
  ],
  data: require('../geojson/StewardshipGroups.geojson'),
  shape: 'polygon',
  symbology: 'single',
  options: {
    style: {
      stroke: true,
      color: '#477EFF',
      fill: true,
      fillOpacity: 0.7,
      fillColor: 'rgba(0, 120, 160, 255)',
      interactive: true,
    },
    onEachFeature: (f,l) => {
      l.bindPopup(
        mapPopupContent(
          f.properties.Group,
          `The ${f.properties['Group']} advocates for preserving the ecosystems of the ${f.properties['FocusLoc']} area. Learn more and support their work at:`,
          f.properties['URL']),
        {offset: [0,8]});
    }
  },
}

export default layer;