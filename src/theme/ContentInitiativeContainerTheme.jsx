import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system"
import { mobileStyle } from "./QuestionCardBarTheme"

const helpers = createMultiStyleConfigHelpers([
  'container',
  'inner',
])

const ContentInitiativeContainerTheme = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      position: 'absolute',
      overflow: 'hidden',
      height: 'min(48svh, 34rem)',
      width: 'min(48rem, 100vw)',
      maxHeight: 'calc(100svh - 6.25rem)',
      maxWidth: mobileStyle('100vw', 'min(calc(100% - 34.5rem), 100vw)'),
      minWidth: 'min(100vw, 37.5rem)',
      bottom: '0',
      left: mobileStyle('0', '9.375rem'),
      right: mobileStyle('0', '3.325rem'),
      resize: mobileStyle('none', 'both'),
      bgColor:'white',
      padding:'0.875rem',
      transform: 'scaleY(-1)',

      // Bottom because flipped
      borderBottomLeftRadius: 'xl',
      borderBottomRightRadius: mobileStyle('xl', 'none')
    },
    inner: {
      transform: 'scaleY(-1)',
      height: '100%',
    }
  },
})

export default ContentInitiativeContainerTheme

//w:'100%',
//h:'100%',