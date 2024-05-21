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
  'container',
])

const QuestionCardBarTheme = helpers.defineMultiStyleConfig({
  baseStyle: {
    bar: {
      display: 'flex',
      flexDirection: 'column',
      paddingStart: '10px',
      paddingY: '10px',
      gap: '10px',
      transform: 'scaleX(-1)', //Flips the child back to normal

      _before: {
        content: '"How can I...?"',
        fontFamily: 'var(--chakra-fonts-body)',
        fontWeight: '500',
        padding: '0.5rem',
        borderRadius: 'xl',
        background: 'white',
        alignSelf: 'flex-start',
        position: 'sticky',
        top: '0.625rem',
        zIndex: '10',
      }
    },
    container: {
      transform: 'scaleX(-1)', //Reflects the parent horizontally
      height: 'calc(100% - 40px)',
      minWidth: '140px',
      overflow: 'scroll',
      //background: 'transparent',
      position:'absolute',
      top:'2.5rem',
      zIndex:'9',
      pointerEvents: 'none',
      background: containerGradient,
    }
  },
  defaultProps: {
  }
})

export default QuestionCardBarTheme