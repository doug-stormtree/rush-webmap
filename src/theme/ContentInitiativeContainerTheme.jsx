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
      left: '0.625rem',
      right: '31.875rem',
    },
  },
})

export default ContentInitiativeContainerTheme