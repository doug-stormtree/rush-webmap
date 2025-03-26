import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system"

const helpers = createMultiStyleConfigHelpers([
  'container',
  'title',
  'subtitle',
  'body',
  'footer',
])

const ContentPanelTheme = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      // size
      width: '100%',
      // layout
      flex: '0 1 auto',
      flexDirection: 'column',
      overflow: 'hidden',
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
      marginBottom: '1rem',
    },
    body: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.625rem',
      // text styling
      fontFamily: 'var(--chakra-fonts-body)',
      fontWeight: '500',
      fontSize: '0.875rem',
      // scrolling
      overflowY: 'auto',
      height: '100%',
    },
    footer: {
      marginX: 'auto',
      marginTop: '0.5rem',
      marginBottom: '1.5rem',
    }
  },
})

export default ContentPanelTheme