import React from 'react';
import {
  Box,
  Flex,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import NavBar from './NavBar'

const textFormatter = (text, index) => (
  <Text
    key={`TextList${index}`}
    fontFamily='var(--chakra-fonts-body)'
    fontSize={['0.875rem', null, null, null, '1rem', '1.125rem']}
    fontWeight='500'
    color='rgba(0,0,0,0.6)'
    marginTop={['0.5rem']}
  >
    {text}
  </Text>
)

const listItemFormatter = (text, index) => (
  <ListItem
    key={`ListItemList${index}`}
    fontFamily='var(--chakra-fonts-body)'
    fontSize={['0.875rem', null, null, null, '1rem', '1.125rem']}
    fontWeight='500'
    color='rgba(0,0,0,0.6)'
  >
    {text}
  </ListItem>
)

const PreListParagraphs = [
  'The RUSH Initiative is a cross sectoral collaboration to create rapid resilience in record time by engaging people in creating the conditions for health now, and into the future.',
  'Our approach combines nature-inspired design, community mapping and a focus on health with watersheds as a primary indicator.',  
  'By showcasing the research, creativity, and innovation happening in this region on an interactive landing page, we hope to provide a shared language on the vulnerabilities and opportunities for long-term health and climate action.',
  'We want to change the critical questions that get asked in planning meetings such as:', 
].map(textFormatter)
const BulletList = [
  'How is a development proposal an opportunity to increase resilience to climate-related events?', 
  'How can we support neighbourhoods to adapt and thrive in changing conditions?', 
  'If we extend and connect the ecosystem features across the urban landscape, what are all the benefits people would feel?', 
  'How can we work with Nature to create a quality of life for all?',
].map(listItemFormatter)
const PostListParagraphs = [
  'This is a tool for people to connect habitats, restore watersheds, feel a sense of belonging, and start conversations that help us reverse the trend of climate change, pollution and hopelessness.', 
  'Please use the feedback button to let us know what you think and any suggestions you have.',
].map(textFormatter)

const logos = [
  { 
    src: require('../data/logos/1. NatuR&D.png'),
    alt: 'NatuR&D',
    url: 'https://naturnd.com/rnd/'
  },
  { 
    src: require('../data/logos/2. Map Shop - UVic.png'),
    alt: 'The University of Victoria Map Shop',
    url: 'https://www.uvicmapshop.com/'
  },
  { 
    src: require('../data/logos/3. PSS.png'),
    alt: 'Peninsula Streams & Shorelines',
    url: 'https://peninsulastreams.ca/'
  },
  { 
    src: require('../data/logos/4. OpenGreenMap.png'),
    alt: 'Open Green Map',
    url: 'https://new.opengreenmap.org/'
  },
  { 
    src: require('../data/logos/18. Engage with Nature-Based Solutions.png'),
    alt: 'Engage with Nature-Based Solutions',
    url: 'https://engagewithnbs.ca/'
  },
  { 
    src: require('../data/logos/5. SeaChange.png'),
    alt: 'SeaChange Society',
    url: 'https://seachangesociety.com/'
  },
  { 
    src: require('../data/logos/6. The Coalition.png'),
    alt: 'Saanich Peninsula Environmental Coalition',
    url: 'https://saanichpeninsula.ca/'
  },
  { 
    src: require('../data/logos/7. Re-Imagine Westshore.png'),
    alt: 'Re-Imagine Westshore Community',
    url: 'https://reimagineus.ca/'
  },
  { 
    src: require('../data/logos/8. Quadra - Cedar Hill.png'),
    alt: 'Quadra Cedar Hill Community Association',
    url: 'https://qchca.org/'
  },
  { 
    src: require('../data/logos/9. GVPlacemaking Network.png'),
    alt: 'Greater Victoria NatureHood',
    url: 'https://www.gvnaturehood.com/'
  },
  { 
    src: require('../data/logos/10. Greater Victoria NatureHood.png'),
    alt: 'Greater Victoria Placemaking Network',
    url: 'https://victoriaplacemaking.ca/'
  },
  { 
    src: require('../data/logos/11. Data for Good Vancouver.png'),
    alt: 'Data for Good Vancouver',
    url: 'https://vancouver.dataforgood.ca/'
  },
  { 
    src: require('../data/logos/12. Oak Bay High.png'),
    alt: 'Oak Bay High School',
    url: 'https://oakbay.sd61.bc.ca/'
  },
  { 
    src: require('../data/logos/13. Parklands High School.png'),
    alt: 'Parklands High School',
    url: 'https://parkland.saanichschools.ca/'
  },
  { 
    src: require('../data/logos/14. Mount Doug High School.png'),
    alt: 'Mount Douglas Secondary',
    url: 'https://mountdoug.sd61.bc.ca/'
  },
  { 
    src: require('../data/logos/15. Claremont High School.png'),
    alt: 'Claremont Secondary',
    url: 'https://claremont.saanichschools.ca/'
  },
  { 
    src: require('../data/logos/16. RBC Tech for Nature.png'),
    alt: 'RBC Tech for Nature',
    url: 'https://www.rbc.com/our-impact/climate/environmental-donations.html'
  },
  { 
    src: require('../data/logos/17. University of Victoria CEL.png'),
    alt: 'The University of Victoria Community-Engaged Learning',
    url: 'https://www.uvic.ca/career-services/build-your-career/community-engaged-learning/index.php#ipn-community-engaged-learning'
  },
  { 
    src: require('../data/logos/19. Friends of Bowker Creek.jpg'),
    alt: 'Friends of Bowker Creek Society',
    url: 'https://bowkercreek.org/'
  },
  { 
    src: require('../data/logos/20. Friends of Maltby Lake Watershed Society.jpg'),
    alt: 'Friends of Maltby Lake Watershed Society',
    url: 'https://maltbylake.com/'
  },
  { 
    src: require('../data/logos/21. Victoria Drains.png'),
    alt: 'Victoria Drains',
    url: 'https://www.victoriadrains.com/'
  },
]

const LogoComponents = logos.map((logo) => (
  <a href={logo.url}>
    <Image
      key={logo.alt}
      alt={logo.alt}
      src={logo.src}
      objectFit='contain'
      maxHeight='8rem'
      maxWidth='16rem'
    />
  </a>
))

const contributors = [
  'Morgan Phillips',
  'Helena Jacobsen',
  'Brendan Kerwin',
  'Griffin Stever',
  'Ella Bethune',
  'Sarah Swan',
  'Liam Lepik',
  'Victoria Jeffery',
  'Katie Wilson',
  'Steve Martin',
  'Matthew Evans',
  'Tenaya Lynx',
  'Julia Frasher',
  'Riley Sondergaard',
  'Ella Bethune',
  'Darryl Seah',
  'Ben DesRosiers',
  'Ardis Mellor-Laing',
  'Casey Lake',
  'Evan Gerbrecht',
  'Samantha Denton',
  'Ethan Heckrodt',
  'Sam Wetzel',
  'Eric Berendt',
  'Olivia Stephenson',
  'Jack Britton',
  'Callan Rakimov',
  'Sean Bennett',
  'Aiden FoxCroft',
  'Grace Long',
  'Olivia Graham',
  'Jared Leary',
  'Langley Chan',
  'Oliva Gatrell',
  'Zacc Lavigne',
  'Nabila Kazmi',
  'Deanie Harding',
  'Emma Gordon ',
  'Stephanie Mai',
  'Lili Guglich',
  'Addie Tonn',
  'Toby Lee',
  'Marissa Tweedy',
  'Eve Seward',
  'Salvador Bigam',
  'Maya Munoz',
  'Melanie Robertson',
  'Levi Zadka',
  'Housam Tarrach',
  'Sean Sun',
  'Brigitte Larkin',
  'Eric Ouellette',
  'Uri Oberlander',
  'Scott Magrath',
  'Lauren Onushko',
  'Ivan Sherbot',
  'Lucas Whiffin',
  'Art Attack group',
  'Thomas Armitage',
  'Clara Dickieson',
  'Jack Panayi',
  'Hazim Ismail',
  'Chloe Cizeron',
  'Madison Hopkyns',
  'Sophie Buitendyk',
  'Adam Yates LaBerge',
  'Miranda Chen',
  'Chloe Cizeron',
  'Madison Hopkyns',
  'Sophie Buitendyk',
  'Adam Yates LaBerge',
  'Miranda Chen',
].map((name) => (
  <Text fontFamily='var(--chakra-fonts-subHeading)' fontSize='1rem'>{name}</Text>
))

export default function AboutPage() {
  return (
    <Flex direction='column' minHeight='100svh'>
      <NavBar
        flex='0'
        position='sticky'
        top='0px'
        zIndex='10'
        boxShadow='0px 0px 8px 2px #888'
        getShareURL={() => 'https://whatstherush.ca'}
      />
      <Flex
        flex='1'
        direction='row'
        justifyContent='center'
        alignItems='center'
        backgroundImage={require('../images/RUSH_map_image.jpg')}
        backgroundSize='cover'
      >
        <Box
          bgColor='white'
          borderRadius='xl'
          marginTop='1.5rem'
          marginBottom={{base: '21.5rem', md: '1.5rem'}}
          marginX='0.5rem'
          padding='1.5rem'
          paddingBottom='0.5rem'
          maxWidth={{base: '64ch', lg: '84ch', xl: '96ch', '2xl': '120ch'}}
        >
          <Text
            fontFamily='var(--chakra-fonts-title)'
            fontSize={['1.5rem', '2.75rem', null, '2.5rem', '3.125rem', '3.5rem']}
            lineHeight={['2rem', '3.25rem', null, '2.75rem', '3.5rem', '3.75rem']}
            fontWeight='bold'
            marginTop={['0.25rem', '0.75rem', null, null, '1.0rem', '1.5rem']}
          >
            About
          </Text>
          { PreListParagraphs }
          <UnorderedList py='0.5em' ps='2em'>
            { BulletList }
          </UnorderedList>
          { PostListParagraphs }
          <Flex
            flexFlow='row wrap'
            justifyContent='center'
            alignItems='center'
            gap='2rem 1rem'
            marginY='2rem'
          >
            { LogoComponents }
          </Flex>
          <Text
            fontFamily='var(--chakra-fonts-subHeading)'
            fontSize='1.25rem'
            fontWeight='500'
            color='rgba(0,0,0,0.6)'
            textDecor='underline'
            marginBottom='1rem'
            width='100%'
            textAlign='center'
          >
            University of Victoria - Community Mapping & Community Based Participatory Research - Student Contributors
          </Text>
          <Flex
            flexFlow='row wrap'
            justifyContent='center'
            alignItems='baseline'
            gap='2rem 1rem'
            marginY='2rem'
          >
            { contributors }
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}