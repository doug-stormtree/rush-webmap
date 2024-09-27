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
      //maxWidth: 'min(calc(100% - 31.875rem), 20rem)',
      maxHeight: 'calc(100% - 17.5rem)',
      bottom: '0',
      left: '9.75rem',
      right: '3.325rem',
    },
  },
})

export default ContentInitiativeContainerTheme