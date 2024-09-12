import React from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import Questions, { useActiveQuestionStore, questionActions } from '../data/QuestionStore';

export default function RabbitHoleDrawer() {
  // theme
  const styles = useMultiStyleConfig('RabbitHoleDrawer')
  // question state
  const [
    activeQuestion,
    sectionFocus,
    dispatch
  ] = useActiveQuestionStore((state) => [
    state.activeQuestion,
    state.sectionFocus,
    state.dispatch
  ])

  // question content
  const content = Questions.get(activeQuestion)

  return (
    <Drawer
      placement='bottom'
      isOpen={sectionFocus === 3}
      onClose={() => {dispatch({focus: questionActions.makeYourMove})}}
    >
      <DrawerOverlay />
      <DrawerContent>
        <Box __css={styles.container}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Box __css={styles.title}>{content?.title}</Box>
            <Box __css={styles.subtitle}>The Rabbit Hole</Box>
          </DrawerHeader>
          <DrawerBody>
            <Box __css={styles.body}>
              {content?.sections.three.items.map((i) => 
                <Box key={i} __css={styles.paragraph}>{i}</Box>
              )}
            </Box>
          </DrawerBody>
          <DrawerFooter>
            
          </DrawerFooter>
        </Box>
      </DrawerContent>
    </Drawer>
  )
}