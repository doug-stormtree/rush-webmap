const layer = {
  title: 'Important Bird Areas',
  description: [
    {type: 'p', content: 'In our NatureHood there are three Important Bird & Biodi- versity areas: Sidney Channel and Mandarte Island located next to Shoal Harbour MBS, and Chain Islets - Grand Chain Island located next to Victoria Harbour MBS. There are 84 IBAs in British Columbia. These IBAs are of exceptional international significance for the conservation of birds and biodiversity and are part of a global network first established in 1985. In Canada, IBAs are a joint initiative of Nature Canada and Birds Canada.'},
    {type: 'image', url: 'https://www.ibacanada.com/images/kml/banner_kml.jpg'},
    {type: 'link', content: 'Important Bird and Biodiversity Areas in Canada', url: 'https://www.ibacanada.com'},
    {type: 'p', content: 'Disclaimer: IBA boundaries are generalized approximations reflecting dynamic populations of birds and their habitats. Boundaries are frequently reviewed and may change at any time. These data have been released for public interest and to encourage effective conservation.'},
  ],
  data: require('../geojson/ImportantBirdAreas.geojson'),
  shape: 'polygon',
  symbology: 'single',
  options: {
    style: {
      stroke: true,
      color: '#11737a',
      fill: true,
      fillOpacity: 0,
      interactive: true,
    },
    onEachFeature: (f,l) => {
      l.bindPopup(
        f.properties['description'],
        {
          offset: [0,-6],
          closeOnClick: true,
        }
      );
    }
  },
}

export default layer;