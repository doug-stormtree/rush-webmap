import React from 'react';
import { Box, Heading, Flex, Text, OrderedList, ListItem, List } from '@chakra-ui/react';

export default function ContentPane() {
  return (
    <Flex
      p={4}
      gap='10px'
    >
      <TextPane flex='1' />
      <ListPane flex='1' />
    </Flex>
  )
}

function TextPane(props) {
  return (
    <Box {...props}>
        <Heading>
          Story
        </Heading>
        <Text>
          The Sensitive Ecosystems Inventory (SEI) of East Vancouver Island project has been responsible for tracking sensitive ecosystems for many regions within the Capital Regional District (CRD). Their data is what you see on the map. Their research identifies different sensitive ecosystems and allows us to understand better how these ecosystems are at risk. Some of the most significant factors responsible for the degradation and ecosystem damage are human usage and the introduction of invasive species. These ecosystems are shrinking, often due to development or land use changes. The areas on this map do not include private lands, provincial & federal lands, or Indigenous reservations. It is important to understand that each of these ecosystems plays a crucial role in the ecological well-being of this area. Damage to one sensitive ecosystem will affect another. These ecosystems in this area of the coast are known for their biodiversity. Researchers in Japan found that after “forest bathing,” participants had been breathing in phytoncides (essential wood oils) that had antimicrobial properties. Participants had increased NK (natural killer) cells, responsible for the immune response that kills tumours and viruses. Another study sprayed cedar essential oils in a hotel room before guests stayed, which had the same effect on their immune systems. So if you need an excuse to ditch school and go to the beach or buy more house plants, do it! It’s good for your health!
        </Text>
      </Box>
  )
}

function ListPane(props) {
  return (
    <Box {...props}>
        <Heading>
          Tips
        </Heading>
        <OrderedList>
          <ListItem>Learn to identify invasive species and how to remove them safely. Get involved with local efforts to remove invasive species in your area. Check out the events map to learn more!</ListItem>
          <ListItem>Learn about what native species are in your area. Look for local native plant sales when you shop for indoor and outdoor plants.</ListItem>
          <ListItem>Avoid the use of pesticides and chemicals in your garden.</ListItem>
          <ListItem>Next time you visit the beach or go on a hike, leave the speaker at home! Take a moment to enjoy the sounds of nature. Loud noises can disturb birds and cause them to abandon their eggs. Loud noise can also disrupt communication between wildlife (e.g., birds).</ListItem>
          <ListItem>Enjoy wildlife from afar. Avoid approaching or touching wildlife or their nesting habitats.</ListItem>
          <ListItem>Stay on designated paths and trails to avoid damaging vegetation and wildlife habitats.</ListItem>
          <ListItem>Keep your pet on a leash when taking them on walks to avoid damage to sensitive ecosystems.</ListItem>
          <ListItem>Be a mindful water user - use rainwater systems to water your garden, plants, and gardens during cooler hours to prevent evaporation.</ListItem>
        </OrderedList>
      </Box>
  )
}