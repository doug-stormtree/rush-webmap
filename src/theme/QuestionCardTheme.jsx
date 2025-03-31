import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system"
import { mobileStyle } from "./QuestionCardBarTheme"

const helpers = createMultiStyleConfigHelpers([
  'card',
  'image',
  'content',
  'title',
  'subtitle',
  'body',
  'footer',
])

const QuestionCardTheme = helpers.defineMultiStyleConfig({
  baseStyle: {
    card: {
      pointerEvents: 'auto',
      cursor: 'pointer',
      minWidth: '120px',
      borderRadius: 'xl',
      background: '#333',
      color: 'white',
      position: 'sticky',
      top: '3.75rem',
      alignSelf: mobileStyle('inherit', 'flex-start'),
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 'inherit',
      objectFit: 'cover',
      objectPosition: 'top',
      //opacity: '0.9',
      overflow: 'hidden',
    },
    content: {
      textAlign: 'left',
      borderRadius: 'inherit',
      overflow: 'hidden',
      paddingX: '1rem',
      paddingY: '0.6rem',
      paddingBottom: mobileStyle('0px', '0.6rem'),
    },
    title: {
      // text styling
      lineHeight: '130%',
      fontFamily: 'var(--chakra-fonts-heading)',
      fontWeight: '500',
      fontSize: '2xl',
      textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
    },
    subtitle: {
      display: 'none',
      // text styling
      fontFamily: 'var(--chakra-fonts-subHeading)',
      fontWeight: '500',
      lineHeight: '130%',
      textShadow: '1px 1px 4px rgba(0,0,0,0.4)',
      // positioning
      marginTop: '0.25rem',
      // line clamp
    },
    body: {
      display: 'none',
      fontFamily: 'var(--chakra-fonts-body)',
      fontWeight: '500',
      fontSize: '0.875rem',
      listStyle: 'inside',
      paddingY: '0.6rem',
    },
    footer: {
      display: 'none',
      marginTop: '0.5rem',
    },
    mobileTabMenuTab: {
      paddingRight: '5px',
      paddingLeft: '5px',
    },
    mobileTabMenuIcon: {
      marginRight: '10px',
    },
  },
  sizes: {
    button: {
      card: {
        cursor: 'pointer',
        height: '120px',
        width: '120px',
        _hover: {
          color: '#BBB'
        },
      },
      title: {
        // positioning
        position: 'absolute',
        bottom: '0.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        // text styling
        fontSize: 'sm',
        textAlign: 'center',
        textShadow: '1px 1px 2px black, 1px 1px 1px black',
      },
    },
    wide: {
      card: {
        zIndex: '1000',
        height: '120px',
        minWidth: mobileStyle('85%', '320px'),
        maxWidth: mobileStyle('85%', '320px'),
        color: 'black',
      },
      image: {
        position: 'absolute',
        top: '0',
        zIndex: '-1',
      },
      content: {
        height: '100%',
        background: 'linear-gradient(rgba(255,255,255,0.5) 0, rgba(255,255,255,0.9)) 100%',
        _hover: {
          background: 'linear-gradient(rgba(200,200,200,0.5) 0, rgba(200,200,200,0.9)) 100%',
        },
      },
      subtitle: {
        noOfLines: '3', // overrides 'display: none'
      }
    },
    expanded: {
      card: {
        // positioning
        zIndex: '1000',
        // size
        minHeight: '120px',
        maxHeight: 'calc(100vh - 8rem)',
        minWidth: '320px',
        maxWidth: '320px',
        // styling
        background: 'white',
        color: 'black',

        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      },
      image: {
        position: 'absolute',
        zIndex: '-1',
        maxH: '320px',
        borderRadius: '0.75rem 0.75rem 0 0',
      },
      content: {
        background: 'linear-gradient(rgba(255,255,255,0.9) 0, rgba(255,255,255,0.8) 180px, rgba(255,255,255,1) 320px, rgba(255,255,255,1)) 100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '100%'
      },
      title: {
        flex: '0',
      },
      subtitle: {
        display: 'block',
        flex: '0'
      },
      body: {
        display: 'block',
        overflowX: 'auto',
        height: mobileStyle('180px', 'inherit'), // cap height to show bottom tabs on mobile and hide content using scroll
      },
      footer: {
        display: 'block',
        flex: '0',
        alignSelf: 'center',
        fontFamily: 'var(--chakra-fonts-body)',
        fontSize: '0.875rem',
        fontWeight: '700',
      }
    }
  },
  variants: {
    sticky: {
      card: {
        zIndex: '10',
      },
    },
    dockExpanded: {
      card: {
        minWidth: '100%',
        minHeight: '100%',
      },
    },
    absolute: { // not used
      card: {
        zIndex: '11',
        position: 'absolute',
        top: '6.25rem',
        left: '3rem',
      },
    },
    selected: {
      content: {
        boxShadow: 'inset 0 0 16px 8px',
        position: 'absolute',
        inset: 0,
      },
      title: {
        fontWeight: '700',
        color: 'var(--chakra-colors-orange-100)'
      }
    }
  },
  defaultProps: {
    size: 'button'
  }
})

export default QuestionCardTheme