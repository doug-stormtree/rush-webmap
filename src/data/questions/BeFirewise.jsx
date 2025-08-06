import {
  LegendGroups,
  //InitiativeTags as Tag,
} from '../TextContent';

const Question = {
  key: 'be-firewise',
  title: "Be Firewise",
  question: "Moisture wicking concrete jungles turn neighbourhoods into tinder boxes. One swipe and you’ll be lit for realsies.",
  image: require('../png/Placeholder.png'),
  color: {
    background: 'yellow.300',
    hover: 'yellow.200',
    selected: 'yellow.100',
  },
  layers: [
    //{ key: 'FireHydrants', active: true, ...LegendGroups.StartOn },
    { key: 'FireStations', active: true, ...LegendGroups.StartOn },
    { key: "GarryOak_OldNewExtent", active: true, ...LegendGroups.StartOn },
    { key: "CRDWatersheds", active: true, ...LegendGroups.StartOn },
    { key: "Wetlands", active: true, ...LegendGroups.StartOn },
    // ---
    { key: "GarryOakAreas", active: false, ...LegendGroups.StartOff },
    { key: "GarryOak_NativeEcosystems", active: false, ...LegendGroups.StartOff },
  ],
  sections: {
    one: [
      {
        heading: 'Your landscape holds water if...',
        items: [
          'you see a purple field of camas every spring in your local Garry Oak ecosystem.',
          'your city plans for connected trees and plants in a way that keeps neighbourhoods and the planet cool.',
          'your ecosystem is fire resistant and mostly native because the canopy is high and open, there is not a lot of leaf litter on the ground, and the sap is not flammable (head down the rabbit hole for more info).',
          'nurseries in your neighbourhood have fire resistant plants identified (the legend has it).',
          'homes in your community incorporate fire resistant building materials.',
          'your local building code has strategies for both passive and active cooling in new housing construction.',
          'your watersheds are mostly above ground with accompanying bogs, wetlands and rain gardens to store water so you have access to it when the heat is on.',
          'local groups are learning from Traditional Ecological Knowledge (TEK) is helping in the planning for fire wise communities.',
        ]
      },
      {
        heading: 'You’re strutting in a hot spot if...',
        items: [
          'you clear the trees from around your house and in the process lose the gift of their cooling capacity.',
          'you landscaped with gravel instead of plants, which is radiating heat  and now you’re sweating bullets.',
          'developments in your neighbourhood are landscaped with exotic ornamentals planted like pregnant fireworks.',
          'every square inch of habitable space has been devoted to people, and there’s no room for Nature’s cooling, moisture-retaining, pollinating, comforting and life-giving presence.',
        ]
      },
    ],
    two: {
      heading: 'Join the fire resistance.',
      items: [
        'identify your local “bucket brigade”. Look in the legend for your muster station, fire station, and density of fire hydrants in order to be satisfied that people are ready to respond. Don’t forget your own fire alarms and an escape route strategy from your property.',
        'look great while also providing ecological benefits.  Get advice on how to keep moisture and cooling features around your home.',
        'hot, dry, and windy conditions fuel wildfires. Deciduous trees with moist, supple leaves and open branching habits are often less flammable than conifers. Strategically planting deciduous trees can significantly reduce fire risk around homes by acting as buffers against flames, slowing down a fire’s progress, and blocking embers from reaching homes.',
        'see the forest for the trees. Consult your local nursery for species that are compatible with your local fire resistant ecosystem.',
        'harness the dual benefits of both green and blue infrastructure. Blue infrastructure stores water on land and gives you access when it counts.',
        'Incorporate rain gardens and small water features in your yard to act as effective firebreaks. Consider a sprinkler system.',
        'Before you remove established coniferous trees (and losing your  cool), consider pruning out dead and lower branches, and raking up dead needles and cones for better fire resistance.',
        'Replace your lawn with low-growing, consistently green forage mixes with clover that can serve as effective, less flammable ground covers.',
        'Talk with your neighbours about how you can balance fire risk with biodiversity. Together you can make informed choices that keep the whole neighbourhood safer.',
        'Ask your insurance provider about premium reductions based on fire-resilient features. Your questions send a powerful signal that homeowners are ready for insurers to reward proactive safety measures.',
        'Urge policy-makers to create a set of best practices for fire-resilient urban landscaping, focusing on native, moisture-retentive ecosystems, the strategic use of deciduous trees, and incorporating blue infrastructure.',
        'Check out the RUSH map to identify elements of fire risk and resiliency in your community.',
      ]
    },
    three: {
      items: [
        'There is a critical disconnect between current fire-risk management strategies which tend to be designed for rural areas. Some guidelines, particularly those concerning defensible space, are largely impractical for urban and peri-urban environments due to lot size constraints and urban typologies. The complex realities of the urban environments need innovative stewardship that leverages Traditional Ecological Knowledge and native fire resistant ecosystems.',
        'Effective urban fire resilience requires a fundamental shift away from generic, one-size-fits-all guidelines. It demands an integrated urban planning model that combines ecological principles (like green infrastructure and native species) and finally bridges the systemic gaps between planners, fire experts, and ecologists.',
        'The most powerful push for this change may not come from a government pamphlet, but from your insurance policy. Meaningful premium reductions for fire-resilient homes would be the single most effective incentive to spark widespread, proactive change where it matters most—at the neighbourhood level.',
        'Pre-contact, many Indigenous Nations held balanced and reciprocal relationships with fire and fire-keeping. They would strategically burn some areas of land to reduce future risk of forest and bush fires.  Despite its long history and cultural and ecological benefits, settlers perceived this traditional burning itself as inherently risky, outlawing the practice and starting the long history of fire suppression nationwide.  Western scientists now confirm what Indigenous nations have long known: fire suppression does not make fire less of a risk; it quite literally fuels the flames [link FROM RISK TO RESILIENCE: Indigenous Alternatives to Climate Risk Assessment in Canada, by Janna Wale and Brett Huson, https://yellowheadinstitute.org/from-risk-to-resilience/]. Prescribed burning in cities may not be practical, however the practices of retaining meadows and open spaces in a way that works for Nature is a good bet. ',
        'The provincial government’s urgency regarding the housing crisis and densification risks our capacity to hold water in the landscape, leading to development practices that inadvertently increase vulnerability to fire. Fundamental changes are needed in how communities are planned, especially concerning development into the wildland-urban interface.',
        'Things that make a plant fire-resistant include moist, supple leaves that ignite and burn slower; little dead wood accumulation; open branching habits; watery sap with little odour. Highly flammable plants are generally those that contain fine, dry, dead material within the plant; have loose papery bark; and those containing volatile waxes, terpenes, or oils which you may be able to sniff out by crushing the leaves or needles or smelling the resin. Fire-resistant plants Use the FireSmart BC Plant Chart [FireSmart BC Plant Guide: Trees https://firesmartbc.ca/wp-content/uploads/2023/07/06.08.23_FSBC_PlantChartBooklet.pdf ] as a place to begin identifying which fire resistant trees and plants can be compatible with conserving water and attracting pollinators. Many native species are fire resistant, some of which are listed in the Plant Chart. Our native ecosystems tend to be fire resistant and therefore give us a jump-start in restoring the urban ecosystem. ',
        'True community fire readiness requires a holistic shift in planning and development to acknowledge growing risks, address the negative impacts of densification on resilience, improve infrastructure robustness, and foster better collaboration between planners and fire experts. Homeowners are getting mixed messages at a time when we must be acting together. ',
        'We have an opportunity to become climate ready, support biodiversity, and amplify quality of life for the next seven generations.',
      ]
    },
  },
  act: {
    initiatives: [
    ],
  },
};
export default Question;