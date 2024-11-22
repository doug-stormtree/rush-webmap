import React from 'react'
import {
  Box,
  Button,
  IconButton,
  Image,
  ListItem,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  UnorderedList,
  useMultiStyleConfig
} from '@chakra-ui/react'
import { FaAngleDown, FaBook, FaHighlighter, FaLink, FaRegArrowAltCircleDown } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import Questions, { useActiveQuestionStore, questionActions } from '../data/QuestionStore';
import { MobileMenuState } from '../App';
import InitiativeCard from './InitiativeCard';


/**
 * Just like 'QuestionCard', but with logic for mobile devices. It is assumed that this component
 * is *only* ever rendered on mobile devices.
 */
export default function MobileQuestionCard({ question, size, variant, mobileMenuState, setMobileMenuState }){

  // hack for long title strings
  const longTitleStyle = () => {
    if ('wide' === size && question.title?.length > 22){
        return { fontSize: '1.125rem', lineHeight: '1.95rem' };
    }
    return {};
  };

  const styles = useMultiStyleConfig('QuestionCard', { size, variant }); // re-use theme from original question card
  const dispatch = useActiveQuestionStore(state => state.dispatch);
  const questionData = Questions.get(question.key)

  const onCardClick = () => {
    if (mobileMenuState === MobileMenuState.SELECT){
      console.log('card clicked when in SELECT state!');
      setMobileMenuState(MobileMenuState.COLLAPSED_HEADER);
      dispatch({question: question.key, focus: questionActions.open});
    }
    else if (mobileMenuState === MobileMenuState.COLLAPSED_HEADER){
      console.log('card clicked when in COLLAPSED HEADER state!')
      setMobileMenuState(MobileMenuState.EXPANDED_HEADER);
    }
  };

  const cardContent = (
    <Box>
      <Box __css={styles.title} {...longTitleStyle}>{question.title}</Box>
      <Box __css={styles.subtitle}>{question.question}</Box>
      <Box 
        overflowY='scroll'
        maxHeight='55vh' // slightly less than the other two tabs because of the subtitle taking up space
        marginTop='10px'
        display={mobileMenuState === MobileMenuState.EXPANDED_HEADER ? 'inherit' : 'none'}
      >
        {
          question.sections.one.map((list, index) => {
            return (
              <Box key={index}>
                {list.heading}
                <ul style={{
                  listStylePosition: 'outside',
                  paddingInlineStart: '1.5rem',
                }}>
                  {list.items.map((item, index) => {
                    return (
                      <li key={index} style={{
                      }}>{item}</li>
                    )
                  })}
                </ul>
              </Box>
            )
          })
        }
      </Box>
    </Box>
  );

  const makeYourMoveAndRabbitHole = (
    <Box>
      <Box __css={styles.title}>Make your move</Box>
      <Box __css={styles.subtitle}>{questionData?.sections.two.heading}</Box>
      <UnorderedList
        overflowY='scroll'
        maxHeight='60vh'
        marginTop='10px'
      >
        {questionData?.sections.two.items.map((i) => (
          <ListItem 
            key={i}
            marginBottom='10px'
            listStylePos='inside' // TODO: I'm not sure why outside pos isn't rendering here... Would be nice to fix this.
          >{i}</ListItem>
        ))}
        <ListItem key='footer-btn-down-the-rabbit-hole'>
          <Box 
            __css={styles.footer} 
            justifyContent='center' 
            display='flex'
          >
            <Button
              rightIcon={<FaRegArrowAltCircleDown />}
              onClick={() => dispatch({focus: questionActions.rabbitHole})}
            >
              Down the rabbit hole
            </Button>
          </Box>
        </ListItem>
      </UnorderedList>
    </Box>
  );

  const initiatives = (
    <Box>
      <Box __css={styles.title}>Good Stuff To Check Out</Box>
      <Box __css={styles.subtitle}>We've noticed these movers and shakers working on solutions.</Box>
      <UnorderedList
        overflowY='scroll'
        maxHeight='60vh'
        marginTop='10px'
      >
        {
          questionData?.act.initiatives.map((item, index) =>
          <InitiativeCard
            key={item.title}
            initiative={item}
            flip={index%2===0}
            flex='0'
          />)
        }
      </UnorderedList>
    </Box>
  );

  return question.key && (
    <Box __css={styles.card} onClick={onCardClick}>
      <Image src={question.image} __css={styles.image} />
      <Box __css={styles.content}>
        <IconButton
          icon={<FiX fontSize='3rem' />}
          display={mobileMenuState === MobileMenuState.COLLAPSED_HEADER ? 'flex' : 'none'}
          onClick={(e) => {
            e.stopPropagation()
            setMobileMenuState(MobileMenuState.SELECT)
          }}
          position='absolute'
          top='0.6rem'
          right='0.6rem'
          variant='ghost'
          height='1.875rem'
          minWidth='1.875rem'
          maxWidth='1.875rem'
          _hover={{bg: "var(--chakra-colors-rush-200)" }}
          transitionDuration='0.02s'
          zIndex='1001'
        />
        <IconButton
          icon={<FaAngleDown fontSize='2rem' />}
          display={mobileMenuState === MobileMenuState.EXPANDED_HEADER ? 'flex' : 'none'}
          onClick={() => setMobileMenuState(MobileMenuState.COLLAPSED_HEADER)}
          position='absolute'
          top='0.6rem'
          right='0.6rem'
          variant='ghost'
          height='1.875rem'
          minWidth='1.875rem'
          maxWidth='1.875rem'
          _hover={{bg: "var(--chakra-colors-rush-200)" }}
          transitionDuration='0.02s'
          zIndex='1001'
        />
        <Box display={mobileMenuState !== MobileMenuState.EXPANDED_HEADER ? 'block' : 'none'}>
          {cardContent}
        </Box>
        <Tabs 
          display={mobileMenuState === MobileMenuState.EXPANDED_HEADER ? 'block' : 'none'}
          position='relative'
          variant='unstyled'
          minWidth='100%'
        >
          <TabPanels minHeight='500px'>
            <TabPanel>
              {cardContent}
            </TabPanel>
            <TabPanel>
              {makeYourMoveAndRabbitHole}
            </TabPanel>
            <TabPanel>
              {initiatives}
            </TabPanel>
          </TabPanels>
          <TabList
            minWidth='100%' 
            justifyContent='space-evenly' 
            gap='10px'
          >
            <Tab style={styles.mobileTabMenuTab}>
              <FaHighlighter style={styles.mobileTabMenuIcon}/>Notice
            </Tab>
            <Tab style={styles.mobileTabMenuTab}>
              <FaBook style={styles.mobileTabMenuIcon}/>Act
            </Tab>
            <Tab style={styles.mobileTabMenuTab}>
              <FaLink style={styles.mobileTabMenuIcon}/>Check out
            </Tab>
          </TabList>
          <TabIndicator 
            marginTop='-42px' // HACK: negative margin because Chakra doesn't recognize TabIndicator unless it's directly below a TabList.
            height='2px' 
            bg='currentColor' 
            borderRadius='1px'
          />
        </Tabs>
      </Box>
    </Box>
  );
}