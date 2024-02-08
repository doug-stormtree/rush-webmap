import { defineStyleConfig, extendTheme } from '@chakra-ui/react';
import '@fontsource/inter/700.css';
import '@fontsource/poppins/700.css';
import '@fontsource/raleway/500.css';
import '@fontsource/raleway/700.css';
import QuestionCard from './QuestionCardTheme';
import NavBar from './NavBarTheme';

const MenuCard = defineStyleConfig({
  baseStyle: {
    bg: "rush.50",
    borderRadius: "lg",
    fontWeight: "semibold",
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: {
      boxShadow: "outline",
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
      boxShadow: "none",
    },
    _hover: {
      bg: "rush.300",
      _disabled: {
        bg: "initial",
      },
    },
  },
  sizes: {
    lg: {
      h: "12",
      minW: "12",
      fontSize: "lg",
      px: "6",
    },
    md: {
      minH: "5em",
      minW: "10",
      fontSize: "md",
      px: "4",
    },
    sm: {
      h: "8",
      minW: "8",
      fontSize: "sm",
      px: "3",
    },
    xs: {
      h: "6",
      minW: "6",
      fontSize: "xs",
      px: "2",
    },
  },
  variants: {
    default: {
      borderWidth: '4px',
    },
    selected: {
      borderWidth: '4px',
      borderColor: '#A8A04D',
    },
  },
  defaultProps: {
    size: "md",
    variant: "default",
  }
});

const QuestionButton = defineStyleConfig({
  baseStyle: {
    bg: "#333",
    borderRadius: "xl",
    color: "#FFF",
    _hover: {
      color: "#DDD",
    },
  },
  variants: {
    default: {},
    selected: {
      color: "#9A9"
    },
  },
  defaultProps: {
    variant: "default"
  }
})

const theme = extendTheme({
  colors: {
    rush: {
      50:  "#F2F1E3",
      100: "#E5E3C7",
      200: "#D8D5AB",
      300: "#CCC88F",
      400: "#BFBA73",
      500: "#B2AC57",
      600: "#9A9447",
      700: "#7E793A",
      800: "#625E2D",
      900: "#464320",
    }
  },
  components: {
    NavBar,
    MenuCard,
    QuestionButton,
    QuestionCard,
    Button: {
      variants: {
        nav: {
          fontWeight: 'normal',
          _hover: {
            color: 'rush.200'
          }
        }
      }
    },
    Heading: {
      defaultProps: {
      }
    },
    Link: {
      baseStyle: {
        color: 'teal.500'
      }
    }
  },
  fonts: {
    body: `'Inter', sans-serif`,
    heading: `'Poppins', sans-serif`,
    subHeading: `'Raleway', sans-serif`,
  },
  textStyles: {
    h3: {
      'font-family': 'var(--chakra-fonts-subHeading)',
      'font-size': '1rem',
    }
  }
});
export default theme;

