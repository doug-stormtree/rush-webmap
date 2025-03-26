import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system"

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
      maxWidth: '48rem',
      maxHeight: '32rem',
      bottom: '0',
      left: '8.75rem',
      right: '3.325rem',
      bgColor:'white',
      padding:'1rem',
      borderTopRadius:'xl',
    },
  },
})

export default ContentInitiativeContainerTheme

//w:'100%',
//h:'100%',