import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system"

const helpers = createMultiStyleConfigHelpers([
  'container',
  'title',
  'subtitle',
  'body',
  'paragraph',
])

const RabbitHoleDrawerTheme = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      maxWidth: '50rem',
      marginX: 'auto',
      position: 'relative',
    },
    title: {
      // text styling
      fontFamily: 'var(--chakra-fonts-heading)',
      fontWeight: '500',
      fontSize: '1.5rem',
      lineHeight: '130%',
      textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
    },
    subtitle: {
      // text styling
      fontFamily: 'var(--chakra-fonts-subHeading)',
      fontWeight: '500',
      fontSize: '1rem',
      lineHeight: '130%',
      textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
      // positioning
      marginTop: '0.25rem',
    },
    body: {
      overflowY: 'auto',
      maxHeight: 'calc(100vh - 6.5rem)',
      paddingRight: '1rem',
    },
    paragraph: {
      marginTop: '0.25rem'
    },
  }
})
export default RabbitHoleDrawerTheme