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
].join('');

export const mobileStyle = (mobileCss, fallbackCss) => {
  return {
    base: mobileCss, // iphone SE
    sm: mobileCss, // android
    md: fallbackCss, // ipad mini
    lg: fallbackCss, // ipad pro
    xl: fallbackCss, // macbook air
    '2xl': fallbackCss, // desktop
  };
};

const helpers = createMultiStyleConfigHelpers([
  'bar',
  'container',
])

const QuestionCardBarTheme = helpers.defineMultiStyleConfig({
  baseStyle: {
    dock: {
      display: 'flex',
      flexDirection: 'column',
      //flexAlign: mobileStyle('center', 'left'),
      position: 'absolute',
      overflow: 'hidden',
      minHeight: '120px',
      minWidth: '100%',
      bottom: '0',
      left: '0',
      right: '0',
    },
    bar: {
      backgroundColor: mobileStyle('white', 'transparent'),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingStart: mobileStyle('0', '10px'),
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
        marginLeft: '6%',
      }
    },
    container: {
      transform: 'scaleX(-1)', //Reflects the parent horizontally
      height: 'calc(100% - 40px)',
      minWidth: mobileStyle('100%', '140px'),
      overflow: 'scroll',
      position:'absolute',
      top:'2.5rem',
      zIndex:'9',
      pointerEvents: 'none',
      background: mobileStyle('none', containerGradient),

      // From https://stackoverflow.com/a/7896882, static position is required to fix scrolling on mobile.
      pos: mobileStyle('static', 'inherit'),
      WebkitOverflowScrolling: mobileStyle('touch', 'inherit'),
    }
  },
  defaultProps: {},
})

export default QuestionCardBarTheme