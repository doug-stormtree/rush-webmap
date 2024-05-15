import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system"

const helpers = createMultiStyleConfigHelpers([
  'bar',
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
      background: 'transparent',
      position:'absolute',
      top:'2.5rem',
      zIndex:'9',
      pointerEvents: 'none',
    }
  },
  defaultProps: {
  }
})

export default QuestionCardBarTheme