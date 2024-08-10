import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system"

const containerGradient = [
  'linear-gradient(to left,',
  'hsla(0, 0%, 0%, 0.8) 0%,',
  'hsla(0, 0%, 0%, 0.79) 16px,',
  'hsla(0, 0%, 0%, 0.761) 31px,',
  'hsla(0, 0%, 0%, 0.717) 45px,',
  'hsla(0, 0%, 0%, 0.66) 57px,',
  'hsla(0, 0%, 0%, 0.593) 69px,',
  'hsla(0, 0%, 0%, 0.518) 79px,',
  'hsla(0, 0%, 0%, 0.44) 88px,',
  'hsla(0, 0%, 0%, 0.36) 97px,',
  'hsla(0, 0%, 0%, 0.282) 104px,',
  'hsla(0, 0%, 0%, 0.207) 111px,',
  'hsla(0, 0%, 0%, 0.14) 118px,',
  'hsla(0, 0%, 0%, 0.083) 124px,',
  'hsla(0, 0%, 0%, 0.039) 130px,',
  'hsla(0, 0%, 0%, 0.01) 135px,',
  'hsla(0, 0%, 0%, 0) 140px)'
].join('')

const helpers = createMultiStyleConfigHelpers([
  'bar',
  'button',
  'container',
])

const QuestionCardBarTheme = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      position:'absolute',
      zIndex:'9',
      paddingX: '0.625rem',
      
      overflowY: 'scroll',
    },
    bar: {
      display: 'flex',
      flexDirection: 'column',
      paddingY: '10px',
      gap: '10px',
      
    },
    button: {
      fontFamily: 'var(--chakra-fonts-body)',
      fontWeight: '500',
      padding: '0.5rem',
      borderRadius: 'xl',
      background: 'white',
      position: 'sticky',
      top: '0.625rem',
      zIndex: '10',
    }
  },
  variants: {
    desktop: {
      container: {
        transform: 'scaleX(-1)', //Reflects the parent horizontally
        background: containerGradient,
        height: 'calc(100% - 2.5rem)',
        minWidth: '140px',
        pointerEvents: 'none',
        top:'2.5rem',
      },
      bar: {
        transform: 'scaleX(-1)', //Flips the child back to normal
      },
      button: {
        display: 'block',
        transform: 'scaleX(-1)'
      },
    },
    mobile: {
      container: {
        bottom: '0',
        maxHeight: 'calc(100% - 2.5rem)',
        width: '100%',
      },
      bar: {
        alignItems: 'center',
      },
      button: {
        maxWidth: '140px',
        marginBottom: '0.625rem'
      },
    }
  },
  defaultProps: {
  }
})

export default QuestionCardBarTheme