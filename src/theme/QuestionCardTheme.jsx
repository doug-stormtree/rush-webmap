import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system"

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
      position: 'relative',
      minWidth: '120px',
      borderRadius: 'xl',
      background: '#333',
      // text styling
      color: 'white',
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 'inherit',
      objectFit: 'cover',
      objectPosition: 'top',
      opacity: '0.9',
      overflow: 'hidden',
    },
    content: {
      textAlign: 'left',
      borderRadius: 'inherit',
      overflow: 'hidden',
      paddingX: '1rem',
      paddingY: '0.6rem',
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
      textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
      // positioning
      marginTop: '0.25rem',
      // line clamp
    },
    body: {
      display: 'none',
      // text styling
      fontFamily: 'var(--chakra-fonts-body)',
      fontWeight: '500',
      fontSize: '0.875rem',
      listStyle: 'inside',
      // positioning
      paddingY: '0.6rem',
    },
    footer: {
      display: 'none'
    }
  },
  variants: {
    button: {
      card: {
        height: '120px',
        width: '120px',
        _hover: {
          color: '#BBB'
        }
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
        zIndex: '0',
        height: '120px',
        minWidth: '320px',
        maxWidth: '320px',
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
      },
      subtitle: {
        noOfLines: '3', // overrides 'display: none'
      }
    },
    expanded: {
      card: {
        // positioning
        zIndex: '0',
        // size
        minHeight: '120px',
        minWidth: '320px',
        maxWidth: '320px',
        // styling
        background: 'white',
        color: 'black',
      },
      image: {
        position: 'absolute',
        zIndex: '-1',
        maxH: '320px',
        borderRadius: '0.75rem 0.75rem 0 0',
      },
      content: {
        background: 'linear-gradient(rgba(255,255,255,0.8) 0, rgba(255,255,255,0.5) 180px, rgba(255,255,255,1) 320px, rgba(255,255,255,1)) 100%',
      },
      subtitle: {
        display: 'block',
      },
      body: {
        display: 'block',
      },
      footer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'var(--chakra-fonts-body)',
        fontSize: '0.875rem',
        fontWeight: '700',
      }
    }
  },
  defaultProps: {
    variant: 'button'
  }
})

export default QuestionCardTheme