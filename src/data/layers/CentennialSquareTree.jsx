// 48.42867556100536, -123.36494386694879

import { mapPopupContent, pointToIcon } from '../LeafletStyleHelpers';
import { ReactComponent as TreePetitionIcon } from '../svg/TreePetition.svg';

const iconStyle = {
  icon: (<TreePetitionIcon />),
  legendText:"Centennial Square Tree"
}

const layer = {
  title: 'Centennial Square Tree Petition',
  description: [
    {type:'p', content:'Save the Victoria City Hall Sequoia.'},
    {type:'p', content:'Several petitions are asking for signatures with a goal of saving the large trees in Centennial Square during the approved Revitalization Project.'},
    {
      type:'link',
      content:'Save the Mighty Sequoia Tree at Centennial Square, Victoria BC, from Wrongful Demolition | Change.org',
      url:'https://www.change.org/p/save-the-mighty-sequoia-tree-at-centennial-square-victoria-bc-from-wrongful-demolition'
    },
    {
      type:'link',
      content:'Save Victoria\'s Centennial Square as a place for festivals and save the sequoia | Change.org',
      url:'https://www.change.org/p/save-victoria-s-centennial-square-as-a-place-for-festivals-and-save-the-sequoia'
    },
    {
      type:'link',
      content:'Centennial Square Revitalization | City of Victoria',
      url:'https://www.victoria.ca/city-government/projects/centennial-square-revitalization'
    },
  ],
  data: require('../geojson/CentennialSquareTree.geojson'),
  shape: 'point',
  symbology: 'single',
  icon: iconStyle,
  options: {
    pointToLayer: (f,l) => pointToIcon(l, iconStyle),
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
        'Centennial Square Tree Petition',
        'Several petitions linked below are asking for signatures with a goal of saving the large trees in Centennial Square during the approved Revitalization Project.',
        [
          'https://www.change.org/p/save-the-mighty-sequoia-tree-at-centennial-square-victoria-bc-from-wrongful-demolition',
          'https://www.change.org/p/save-victoria-s-centennial-square-as-a-place-for-festivals-and-save-the-sequoia',
          'https://www.victoria.ca/city-government/projects/centennial-square-revitalization'
        ],
        [
          'Save the Mighty Sequoia Tree at Centennial... | Change.org',
          'Save Victoria\'s Centennial Square... | Change.org',
          'Centennial Square Revitalization | City of Victoria',
        ],
        'https://assets.change.org/photos/4/zd/gl/IozDGldDayiwGwk-800x450-noPad.jpg?1725084033'
        ), {offset: [0,-6]});
    }
  },
}

export default layer;