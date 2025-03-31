import React, { useRef, useState } from 'react';
import {
  Box,
  IconButton,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  useMultiStyleConfig,
} from '@chakra-ui/react'
import { FaHandsHelping, FaHighlighter, FaLink } from 'react-icons/fa'
import { LuMinus, LuSquare, LuRabbit, LuX } from "react-icons/lu";
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

const windowIconStyle = {
  variant: 'ghost',
  height: '2rem',
  width: '2rem',
  minWidth: '2rem',
}


export default function ContentInitiativeContainer() {

  // theme
  const styles = useMultiStyleConfig('ContentInitiativeContainer')

  // TODO: all question content fetching should go here for now
  const [ activeQuestion, setActiveQuestion ] = useActiveQuestionStore((state) => [ state.activeQuestion, state.setActiveQuestion ])
  const tabs = questionContentToTabs(activeQuestion)

  // Used to scroll content to top on tab change
  const tabPanelsRef = useRef()

  // State for resize buttons on ContentPane
  const [ isMinimized, setIsMinimized ] = useState(false)
  const [ isMaximized, setIsMaximized ] = useState(false)

  return activeQuestion && (
    <Box 
      __css={styles.container}
      height={
        isMinimized 
        ? 'auto !important'
        : isMaximized
          ? 'calc(100svh - 6.25rem) !important'
          : undefined
      }
      width={
        isMaximized
          ? 'min(calc(100% - 34rem), 100vw) !important'
          : undefined
      }
      resize={isMinimized || isMaximized ? 'none' : undefined}
    >
      <Box __css={styles.inner}>
        <Tabs height='100%' onChange={() => {
          if (isMinimized) setIsMinimized(false)
          tabPanelsRef.current.scrollTo(0,0)}
        }>
          <Box
            display='flex'
            direction='row'
            alignItems='stretch'
          >
            <TabList
              flex='1 1 auto'
              overflowY='hidden'
              sx={{
                scrollbarWidth: 'none',
                '::-webkit-scrollbar': { display: 'none' }
              }}
            >
              {tabs.map((tab) => {
                const ref = React.createRef();

                const handleClick = () =>
                  ref.current.scrollIntoView({
                    behaviour: 'smooth',
                    block: 'end',
                    inline: 'center',
                  })
                
                return (
                  <Tab
                    key={tab.name}
                    ref={ref}
                    onClick={handleClick}
                    flexShrink='0'
                    {...tabStyle}
                  >
                    {tab.icon}
                    {tab.name}
                  </Tab>
                )})
              }
            </TabList>
            {/* This box continues the style of the TabList */}
            <Box 
              display='flex'
              alignItems='center'
              paddingLeft='0.5rem'
              gap='0.125rem'
              borderBottom='1.6px solid rgb(226, 232, 240)'
            >
              <IconButton
                aria-label='Minimize Question'
                icon={<LuMinus size='1.25rem' />}
                onClick={() => setIsMinimized(!isMinimized)}
                {...windowIconStyle}
              />
              <IconButton
                aria-label='Maximize Question'
                icon={<LuSquare size='1.25rem' />}
                onClick={() => {
                  setIsMaximized(!isMaximized && !isMinimized )
                  setIsMinimized(false)
                }}
                {...windowIconStyle}
              />
              <IconButton
                aria-label='Close Question'
                icon={<LuX size='1.5rem' />}
                onClick={() => setActiveQuestion(undefined)}
                {...windowIconStyle}
              />
            </Box>
          </Box>
          <TabPanels
            ref={tabPanelsRef}
            display={isMinimized ? 'none' : undefined}
            overflow='scroll'
            height='calc(100% - 1rem)'
            paddingBottom='1rem'
          >
            {tabs.map(tab => <TabPanel key={tab.name}><ContentPanel {...tab} /></TabPanel>)}
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  )
}

const questionContentToTabs = (questionKey) => {
  const questionData = Questions.get(questionKey)

  if (questionData === undefined) return []

  if (questionData?.tabs) return questionData.tabs

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
      items: [ { items: questionData.sections.two.items } ],
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