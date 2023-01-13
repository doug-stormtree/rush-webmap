import image from './image.jpg';
import climateSalmon from './climate-salmon.png';
import forageFish from './forage-fish.png';
import savingOrcas from './saving-orcas.jpg';

const Coastal = {
  title: "Protect the Coast?",
  question: "Am I vulnerable to sea level rise, tsunamis, storm surges?",
  image: image,
  learn: {
    text: [
      "Lorem.",
    ],
  },
  act: {
    list: [
      "Lorem.",
    ],
    initiatives: [
      {
        title: "Climate Action for Salmon",
        link: "https://storymaps.arcgis.com/stories/9a1164af036041638e75df5cb02bb15a",
        image: climateSalmon,
        description: "Climate change is here, and wild Pacific salmon need our help. Storymap by Jake Dingwall.",
      },
      {
        title: "Forage Fish in the Salish Sea",
        link: "https://storymaps.arcgis.com/stories/969e5bb112984c16b7214995c8fc75c3",
        image: forageFish,
        description: "Forage fish are small schooling fish that play a crucial role in the marine food web, directly feeding many marine animals including orcas, birds, and salmon. Storymap by the Strait of Georgia Data Centre.",
      },
      {
        title: "Saving Orcas",
        link: "https://elc.uvic.ca/publications/saving-orcas/",
        image: savingOrcas,
        description: "Saving Orcas by Protecting Fish Spawning Beaches. Report prepared for the World Wildlife Fund Canada providing law reform recommendations for protecting forage fish populations and Southern Resident orcas."
      }
    ],
  },
  mapData: [],
};
export default Coastal;