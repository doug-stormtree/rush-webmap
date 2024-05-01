import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system"

const helpers = createMultiStyleConfigHelpers([
  'container',
])

const ContentInitiativeContainerTheme = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      overflow: 'hidden',
      width: '80%',
      maxHeight: 'calc(100% - 17.5rem)',
      left: '0.625rem',
      bottom: '0',
      
    },
  },
})

export default ContentInitiativeContainerTheme