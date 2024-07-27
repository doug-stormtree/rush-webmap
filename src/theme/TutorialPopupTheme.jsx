import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system"

const helpers = createMultiStyleConfigHelpers([
  'container',
  'image',
  'speechbubble',
])

const TutorialPopupTheme = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      position: 'absolute',
      zIndex: '9999',
      pointerEvents: 'none',
    },
    speechbubble: {
      background: 'url("/SpeechBubble.svg")',
      zIndex: '9',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat !important',
      backgroundSize: '100% 100%',
      margin: '0 auto',
      textAlign: 'center',
      lineHeight: '1',
      paddingTop: '15%',
      paddingBottom: '50%',
      paddingX: '10%',
      transform: 'scale(-1, 1)',
    },
    image: {
      filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))',
      position: 'absolute',
      top: '9.7rem',
      left: '7.2rem',
    },
  },
  sizes: {
    desktop: {
      container: {
        top: '3.75rem',
        left: '10rem',
        boxSize: '10rem',
      },
      image: {
        height: '20rem',
        maxWidth: '20rem',
        minWidth: '20rem',
      },
    },
    mobile: {
      container: {
        bottom: '12rem',
        left: '2rem',
        boxSize: '10rem',
      },
      image: {
        height: '10rem',
        maxWidth: '10rem',
        minWidth: '10rem',
      },
    }
  }
})

export default TutorialPopupTheme