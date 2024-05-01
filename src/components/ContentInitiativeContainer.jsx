import React, { useState } from 'react';
import {
  Box,
  useMultiStyleConfig,
} from '@chakra-ui/react'
import ContentPane, { Tabs } from './ContentPane';

export default function ContentInitiativeContainer() {
  // theme
  const styles = useMultiStyleConfig('ContentInitiativeContainer')
  // state
  const [activeTab, setActiveTab] = useState(Tabs.content)

  return (
    <Box __css={styles.container} >
      <ContentPane
        variant={Tabs.content}
        active={activeTab === Tabs.content}
        onClick={activeTab !== Tabs.content ? () => setActiveTab(Tabs.content) : null}
      />
      <ContentPane
        variant={Tabs.initiatives}
        active={activeTab === Tabs.initiatives}
        onClick={activeTab !== Tabs.initiatives ? () => {setActiveTab(Tabs.initiatives)} : null}
      />
    </Box>
  )
}