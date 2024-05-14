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
    },
    container: {
      transform: 'scaleX(-1)', //Reflects the parent horizontally
      height: 'calc(100% - 40px)',
      minWidth: '140px',
      overflow: 'scroll',
      background: 'transparent',
      position:'absolute',
      top:'40px',
      zIndex:'9',
      pointerEvents: 'none',
    }
  },
  defaultProps: {
  }
})

export default QuestionCardBarTheme