import { mapPopupContent, pointToIcon } from "../LeafletStyleHelpers";

const styleMap = new Map([
  [
    "NatureHood Locations",
    {
      icon: (
        <img
          width="26px"
          height="26px"
          src={require("../png/NatureHood_Logo.png")}
          alt={"NatureHood Location"}
        />
      ),
      legendText: "NatureHood Locations",
      bgColor: "rgb(255, 170, 45)",
    },
  ],
]);

const layer = {
  title: "NatureHood Locations",
  description:
    "A NatureHood is any place where you connect with Nature’s wonders – from observing a bee pollinate a flower in a planter box, to watching wild birds at a backyard feeder or local park, to witnessing the trees change with the passing of the seasons in your local forest. Look around and you will find Nature everywhere throughout the Greater Victoria NatureHood.",
  data: require("../geojson/NatureHood_NatureHoodLocations.geojson"),
  shape: "point",
  symbology: "classified",
  styleMap: styleMap,
  options: {
    pointToLayer: (f, l) =>
      pointToIcon(
        l,
        {
          icon: (
            <img
              width="100%"
              height="100%"
              src={require("../png/NatureHood_Logo.png")}
              alt={"NatureHood Location"}
            />
          ),
        },
        undefined,
        undefined,
        "rgb(255, 170, 45)"
      ),
    onEachFeature: (f, l) => {
      l.bindPopup(
        mapPopupContent(
          f.properties["NAME"],
          f.properties["DESCRIPTION"],
          null,
          null,
          require("../jpg/" + f.properties.IMAGE + ".jpg")
        ),
        { offset: [0, 0] }
      );
    },
  },
};

export default layer;
