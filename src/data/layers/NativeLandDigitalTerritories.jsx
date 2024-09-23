import { mapPopupContent, setStyleIfSupported } from '../LeafletStyleHelpers';

const hoverStyle = {
  out: {
    opacity: 0.3,
    fillOpacity: 0.2,
  },
  over: {
    opacity: 1,
    fillOpacity: 0.6,
  },
}

const layer = {
  title: 'Native Land Digital: Territories',
  description: [
    {type: 'p', content: 'Native Land Digital is an Indigenous-led mapping project powered by community contributions with a goal of representing Indigenous nations and people on their own terms rather than pursuing "objective" truth and discrete, non-overlapping boundaries. On their website, you can view information about each nation, language, or treaty and provide feedback.'},
    {type: 'p', content: 'The map is not intended to represent official or legal boundaries of any Indigenous nation, for that information contact the nation directly. Native Land Digital provides their dataset publicly and without any proprietary license. RUSH has made a subset of that data available here unchanged for display purposes only.'},
    {type: 'link', content: 'Native Land Digital', url: 'https://native-land.ca/'},
  ],
  data: require('../geojson/indigenousTerritoriesCRD.geojson'),
  shape: 'polygon',
  symbology: 'classified',
  options: {
    style: function (feature) {
      const baseStyle = {
        stroke: true,
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 3,
        fill: true,
      }
      return {
        color: feature.properties.color,
        fillColor: feature.properties.color,
        ...baseStyle,
        ...hoverStyle.out,
      }
    },
    onEachFeature: (f,l) => {
      l.bindTooltip(f.properties.Name, {
        permanent: true,
        opacity: 0.8,
        direction: 'center',
        className: 'leaflet-label'
      })
      l.bindPopup(mapPopupContent(
        f.properties.Name,
        'View the territories page for the ' + f.properties.Name + ' at:',
        f.properties.description,
        'Native Land Digital',
        ), {offset: [4,2]});
      l.on({
        mouseover: (e) => setStyleIfSupported(e, hoverStyle.over),
        mouseout: (e) => setStyleIfSupported(e, hoverStyle.out),
      });
    }
  },
}

export default layer;