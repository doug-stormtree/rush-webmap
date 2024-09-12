import {
  getStyleMapProperty,
  mapPopupContent,
  setStyleIfSupported
} from '../LeafletStyleHelpers';

const styleMap = new Map([
  ['Cliff', { fillColor: 'rgb(156,156,156)' }],
  ['Coastal Bluff', { fillColor: 'rgb(209,165,255)' }],
  ['Estuarine', { fillColor: 'rgb(214,133,137)' }],
  ['Fresh Water', { fillColor: 'rgb(101,119,205)' }],
  ['Fringe Forest', { fillColor: 'rgb(0,115,76)' }],
  ['Herbaceous', { fillColor: 'rgb(245,202,123)' }],
  ['Terrestrial Herbaceous', { fillColor: 'rgb(255,201,28)', legendText: 'Herbaceous (Terrestrial)' }],
  ['Intertidal', { fillColor: 'rgb(168,112,0)' }],
  ['Mature Forest', { fillColor: 'rgb(255,236,175)' }],
  ['Older Forest', { fillColor: 'rgb(156,54,13)' }],
  ['Older Second Growth', { fillColor: 'rgb(235,94,42)' }],
  ['Riparian', { fillColor: 'rgb(156,207,0)' }],
  ['Seasonally Flooded Agricultural', { fillColor: 'rgb(191,255,189)' }],
  ['Sparsely Vegetated', { fillColor: 'rgb(158,187,215)' }],
  ['Wetland', { fillColor: 'rgb(0,156,92)' }],
  ['Woodland', { fillColor: 'rgb(255,158,212)' }],
  ['Non-Sensitive', { fillColor: 'rgb(255,255,189)' }],
]);

const layer = {
  title: 'Sensitive Ecosystems',
  description: [
    {type:'p', content:'The Sensitive Ecosystems Inventory (SEI) of East Vancouver Island project has been responsible for tracking sensitive ecosystems for many regions within the Capital Regional District (CRD). Their data is what you see on the map. Their research identifies different sensitive ecosystems and allows us to understand better how these ecosystems are at risk. Some of the most significant factors responsible for the degradation and ecosystem damage are human usage and the introduction of invasive species. These ecosystems are shrinking, often due to development or land use changes. The areas on this map do not include private lands, provincial & federal lands, or Indigenous reservations.'},
    {type:'p', content:'It is important to understand that each of these ecosystems plays a crucial role in the ecological well-being of this area. Damage to one sensitive ecosystem will affect another. These ecosystems in this area of the coast are known for their biodiversity.'},
    {type:'p', content:'Learn more at the SEI project page:'},
    {
      type:'link',
      content:'"East Vancouver Island & the Gulf Islands," Terrestrial Ecosystem Information. Government of British Columbia, Victoria, Canada. Accessed June 1, 2023.',
      url:'https://www2.gov.bc.ca/gov/content/environment/plants-animals-ecosystems/ecosystems/search-ecosystem-info/east-vancouver-island-gulf-islands'
    }
  ],
  data: require('../geojson/SensitiveEcosystems.geojson'),
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
        lineCap: 'round',
        lineJoin: 'round',
        weight: 2,
        fill: true,
        fillOpacity: 0.7,
        interactive: true
      }
      return {
        ...baseStyle,
        fillColor: getStyleMapProperty(
            'fillColor',
            feature.properties.Ecosystem,
            styleMap
          ),
      }
    },
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
          'Sensitive Ecosystem: ' + f.properties.Ecosystem,
          f.properties.Location
        ), {offset: [0,8]});
      l.on({
        mouseover: (e) => setStyleIfSupported(e, { fillOpacity: 1.0 }),
        mouseout: (e) => setStyleIfSupported(e, { fillOpacity: 0.7 }),
      });
    }
  },
}

export default layer;