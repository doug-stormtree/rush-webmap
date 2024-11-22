import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system"
import { mobileStyle } from "./QuestionCardBarTheme"

const helpers = createMultiStyleConfigHelpers([
  'container',
  'title',
  'subtitle',
  'body',
  'footer',
])

const ContentPaneTheme = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      // positioning
      position: 'relative',
      width: '100%',
      // padding
      padding: '1rem',
      paddingRight: '0',
      // from App
      backgroundColor: 'white',
      borderRadius: '0.75rem 0.75rem 0 0',
      flex: '0 1 auto',
      display: mobileStyle('none', 'flex'), // content pane is hidden on mobile
      flexDirection: 'column',
      overflow: 'hidden',
      _notFirst: {
        marginTop: '-1.5rem'
      }
    },
    title: {
      // text styling
      fontFamily: 'var(--chakra-fonts-heading)',
      fontWeight: '500',
      fontSize: '1.5rem',
      lineHeight: '130%',
      textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
      // positioning
      paddingRight: '1rem',
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
      paddingRight: '1rem',
    },
    body: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.625rem',
      // text styling
      fontFamily: 'var(--chakra-fonts-body)',
      fontWeight: '500',
      fontSize: '0.875rem',
      // positioning
      marginTop: '0.5rem',
      paddingRight: '1rem',
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
  variants: {
    initiatives: {
      container: {
        // shadow
        boxShadow: '0px -8px 12px -8px rgba(0,0,0,0.75);',
      },
      body: {
        // positioning
        marginTop: '1rem',
      },
      footer: {
        // minimize
        display: 'none'
      },
    },
    inactive: {
      container: {
        flex: '0 0 auto',
        // shadow
        boxShadow: '0px -8px 12px -8px rgba(0,0,0,0.75);',
        // hover
        _hover: {
          backgroundColor: '#CCC'
        },
        // overlap
        _notLast: {
          paddingBottom: '2.5rem'
        }
      },
      body: {
        // minimize
        display: 'none',
      },
      footer: {
        // minimize
        display: 'none'
      },
    }
  },
})

export default ContentPaneTheme