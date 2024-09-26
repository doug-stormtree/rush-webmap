import { mapPopupContent, pointToIcon } from "../LeafletStyleHelpers";
import { ReactComponent as SpecialSiteIcon } from '../svg/ENBS.svg';

const iconStyle = {
  icon: (<SpecialSiteIcon />),
  legendText:"Community Stories"
}

const images = {
  "bowkercreekwatershed.jpg": require("../png/bowkercreekwatershed.jpg"),
  "shorelinerestorationsongheeswalkwaypocketbeach.jpg": require("../png/shorelinerestorationsongheeswalkwaypocketbeach.jpg"),
  "slideonoverrepeatphotographyasresearchmethod.jpg": require("../png/slideonoverrepeatphotographyasresearchmethod.jpg"),
  "colquitzriverrestoration.jpg": require("../png/colquitzriverrestoration.jpg"),
  "aquietmomentsoundlandscapesinthecrd.jpg": require("../png/aquietmomentsoundlandscapesinthecrd.jpg"),
  "ecologicaldesigninpractice.jpg": require("../png/ecologicaldesigninpractice.jpg"),
  "connectivityonthesaanichpeninsula.jpg": require("../png/connectivityonthesaanichpeninsula.jpg"),
  "theRUSHinitiative.jpg": require("../png/theRUSHinitiative.jpg"),
  "artattackplacebasedartinterventions.jpg": require("../png/artattackplacebasedartinterventions.jpg"),
  "hardandsoftshorelines.jpg": require("../png/hardandsoftshorelines.jpg"),
  "salishseanearshorehabitatrecoverychapter1.jpg": require("../png/salishseanearshorehabitatrecoverychapter1.jpg"),
  "bilstonwatershedhabitatprotection.jpg": require("../png/bilstonwatershedhabitatprotection.jpg"),
  "bilstonwatershedgroundwaterandsurfaceflow.jpg": require("../png/bilstonwatershedgroundwaterandsurfaceflow.jpg"),
}

const layer = {
  title: "Engage with Nature-Based Solutions",
  description: [
    { type: 'p', content: "Engage with Nature-Based Solutions is an initiative led by the University of Victoria that supports communities across Canada in applying nature-based solutions to their local lands and waters. Through collaboration with communities, the initiative uses storytelling as a tool for change. This data layer highlights some of the community initiatives on Vancouver Island, presented through Story Maps. You can learn more about the Engage with Nature-Based Solutions initiative by visiting their website." },
    { type: 'link', content: 'Engage with Nature-Based Solutions Website', url: 'https://engagewithnbs.ca/about/'}
  ],
  data: require('../geojson/ENBS.geojson'),
  shape: 'point',
  symbology: 'single',
  icon: iconStyle,
  options: {
    pointToLayer: (f,l) => pointToIcon(l, iconStyle),
    onEachFeature: (f,l) => {
      l.bindPopup(mapPopupContent(
        f.properties.title,
        undefined,
        f.properties.url,
        'Link to StoryMap',
        images[f.properties.image],
        ), {offset: [4,2]});
    }
  },
}

export default layer;