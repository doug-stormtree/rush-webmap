import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system"
import { mobileStyle } from "./QuestionCardBarTheme"

const helpers = createMultiStyleConfigHelpers([
  'container',
])

const ContentInitiativeContainerTheme = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      position: 'absolute',
      overflow: 'hidden',
      //maxWidth: 'min(calc(100% - 31.875rem), 20rem)',
      height: '40svh',
      maxWidth: 'min(48rem, 100vw)',
      maxHeight: '32rem',
      bottom: '0',
      bgColor:'white',
      padding:'1rem',
      borderTopRadius:'xl',
      left: mobileStyle('0', '8.75rem'),
      right: mobileStyle('0', '3.325rem'),
    },
  },
})

export default ContentInitiativeContainerTheme

//w:'100%',
//h:'100%',