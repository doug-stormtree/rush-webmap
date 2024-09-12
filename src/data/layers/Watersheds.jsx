import { mapPopupContent, setStyleIfSupported } from '../LeafletStyleHelpers';

const layer = {
  title: 'Watersheds',
  description: [
    {type: 'p', content: 'A watershed (also known as a hydrologic unit, catchment, or drainage basin) is defined as that area of land draining into a particular stream or other surface water body. For any location in a stream, there is an associated area that contributes water to its flow. The watershed divide is that line which divides the area contributing water to the stream and that which contributes water to neighboring streams or water bodies. Therefore, each watershed is defined by its outlet or pour point (the point in the stream which receives all water in the watershed) and the associated watershed divide derived from that point and the local topography.¹'},
    {type: 'p', content: 'If a drop of rain or snow falls on any spot within the boundary of a watershed, if it is not absorbed into the ground or somehow otherwise collected, it can be expected to eventually make its way to the central stream and flow along it to the sea. Even water that soaks into the ground can flow towards the stream as it reaches denser soils or bedrock that it cannot infiltrate. Some water travels much deeper into underground resevoirs, called aquifers, that provide drinking water when accessed by a well.²'},
    {type: 'link', content: '1. GeoBC, 2010. "Freshwater Atlas User Guide." Integrated Land Management Bureau, Victoria, BC. ', url: 'https://www2.gov.bc.ca/assets/gov/data/geographic/topography/fwa/fwa_user_guide.pdf'},
    {type: 'link', content: '2. NOAA. "What is a watershed?" Accessed: May 15, 2023.', url: 'https://oceanservice.noaa.gov/facts/watershed.html'},
  ],
  data: require('../geojson/CRDWatersheds.geojson'),
  shape: 'polygon',
  symbology: 'single',
  options: {
    style: {
      stroke: true,
      opacity: 0.7,
      color: 'rgb(28,163,236)',
      dashArray: '',
      lineCap: 'butt',
      lineJoin: 'miter',
      weight: 3,
      fill: true,
      fillOpacity: 0,
      fillColor: 'rgb(132,182,185)',
      interactive: true,
    },
    onEachFeature: (f,l) => {
      l.bindPopup(
        mapPopupContent(
          f.properties.Name.charAt(0) === '9' ? 'Watershed' : f.properties.Name + ' Watershed',
          f.properties.Name.charAt(0) === '9'
            ? `This watershed is not associated with a named stream by GeoBC. Its Freshwater Atlas Code is ${f.properties.Name}. Its area is ${f.properties.Hectares} hectares.`
            : f.properties.Name + ' Watershed encloses an area of ' + f.properties.Hectares + ' hectares.',
          ),
        {offset: [0,8]});
      l.on({
        mouseover: (e) => setStyleIfSupported(e, { fillOpacity: 0.7 }),
        mouseout: (e) => setStyleIfSupported(e, { fillOpacity: 0 }),
      });
    }
  },
}

export default layer;