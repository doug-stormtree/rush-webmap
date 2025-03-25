import React, { useRef } from 'react';
import {
  Box,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  useMultiStyleConfig,
} from '@chakra-ui/react'
import { FaHandsHelping, FaHighlighter, FaLink } from 'react-icons/fa'
import { LuRabbit } from "react-icons/lu";
import ContentPanel from './ContentPanel';
import Questions, { useActiveQuestionStore } from '../data/QuestionStore';

const tabStyle = {
  fontFamily: 'var(--chakra-fonts-title)',
  fontSize: '1.25rem',
  fontWeight: '500',
}

const tabIconStyle = {
  marginRight: '0.5rem',
}

export default function ContentInitiativeContainer() {
  // theme
  const styles = useMultiStyleConfig('ContentInitiativeContainer')
  // TODO: container overflows onto legend at medium screen sizes -> conditional right pos if legend open

  // TODO: all question content fetching should go here for now
  const activeQuestion = useActiveQuestionStore((state) => state.activeQuestion)
  const tabs = questionContentToTabs(activeQuestion)

  const tabPanelsRef = useRef()

  return activeQuestion && (
    <Box __css={styles.container} >
      <Tabs height='100%' onChange={() => tabPanelsRef.current.scrollTo(0,0)}>
        <TabList>
          {tabs.map(tab => <Tab key={tab.name} {...tabStyle}>{tab.icon}{tab.name}</Tab>)}
        </TabList>
        <TabPanels
          ref={tabPanelsRef}
          overflow='scroll'
          height='calc(100% - 1rem)'
          paddingBottom='1rem'
        >
          {tabs.map(tab => <TabPanel key={tab.name}><ContentPanel {...tab} /></TabPanel>)}
        </TabPanels>
      </Tabs>
    </Box>
  )
}

const questionContentToTabs = (questionKey) => {
  const questionData = Questions.get(questionKey)

  if (questionData === undefined) return []

  const tabs = [
    {
      name: 'Notice',
      icon: <FaHighlighter style={tabIconStyle}/>,
      title: questionData.title,
      subtitle: questionData.question,
      items: questionData.sections.one,
    },
    {
      name: 'Act',
      icon: <FaHandsHelping style={tabIconStyle}/>,
      title: 'Make Your Move',
      subtitle: questionData.sections.two.heading,
      items: [ questionData.sections.two ],
    },
    {
      name: 'Rabbit Hole',
      icon: <LuRabbit strokeWidth='3px' style={tabIconStyle}/>,
      title: 'Jump Down The Rabbit Hole',
      subtitle: 'Don\'t forget your reading glasses.',
      items: [ questionData.sections.three ],
    },
    {
      name: 'Check Out',
      icon: <FaLink style={tabIconStyle}/>,
      title: 'Good Stuff To Check Out',
      subtitle: 'We\'ve noticed these movers and shakers working on solutions.',
      initiatives: questionData.act.initiatives,
    },
  ]

  return tabs
}

//<Tab {...tabStyle}><FaHighlighter style={tabIconStyle}/>Notice</Tab>
//<Tab {...tabStyle}><FaBook style={tabIconStyle}/>Act</Tab>
//<Tab {...tabStyle}><FaLink style={tabIconStyle}/>Check Out</Tab>
//<Tab {...tabStyle}><LuRabbit strokeWidth='3' style={tabIconStyle}/>Rabbit Hole</Tab>