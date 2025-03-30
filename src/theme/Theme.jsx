import { defineStyleConfig, extendTheme } from '@chakra-ui/react';
import '@fontsource-variable/aleo';
import '@fontsource-variable/figtree';
import '@fontsource-variable/inter';
import '@fontsource-variable/urbanist';
import '@fontsource-variable/bitter';
import '@fontsource-variable/raleway';

import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';

import '@fontsource/raleway/400.css';
import '@fontsource/raleway/500.css';
import '@fontsource/raleway/700.css';

import '@fontsource/luckiest-guy';

import NavBar from './NavBarTheme';
import QuestionCard from './QuestionCardTheme';
import QuestionCardBar from './QuestionCardBarTheme';
import ContentPane from './ContentPaneTheme';
import ContentPanel from './ContentPanelTheme';
import ContentInitiativeContainer from './ContentInitiativeContainerTheme';
import RabbitHoleDrawer from './RabbitHoleDrawerTheme';

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
  breakpoints: {
    base: '0px', // iphone SE
    sm: '320px', // android
    md: '480px', // ipad mini
    lg: '600px', // ipad pro
    xl: '768px', // macbook air
    '2xl': '1280px', // desktop
  },
  styles: {
    global: {
      'html, body': {
        fontSize: '16px',
        W: '100%',
        H: '100%',
        margin: '0',
        padding: '0',
        overflowX: 'hidden',
      },
      '.leaflet-container': {
        width: '100%',
        height: '100%',
      },
      '.leaflet-left': {
        left: '9.125rem'
      },
      '.leaflet-label': {
        padding: 0,
        backgroundColor: 'transparent',
        border: 'unset',
        boxShadow: 'unset',
        fontSize: '1.0rem',
        textShadow: '#FFF 2px 2px 4px, #FFF -2px 2px 4px, #FFF 2px -2px 4px, #FFF -2px -2px 4px;',
        opacity: '0.8 !important',
      },
      '.leaflet-label::before': {
        display: 'none'
      },
      '.leaflet-popup-content': {
        overflow: 'auto',
        marginRight: '4px',
        paddingRight: '12px',
        marginTop: '20px',
        width: '300px',
      }
    }
  },
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
    QuestionCardBar,
    ContentPane,
    ContentPanel,
    ContentInitiativeContainer,
    RabbitHoleDrawer,
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
    brand: `'Poppins', sans-serif`,
    title: `'Figtree Variable', sans-serif`,
    raleway: `'Raleway Variable', sans-serif`,
    body: `'Bitter Variable', serif`,
    heading: `'Poppins', sans-serif`,
    subHeading: `'Urbanist Variable', sans-serif`,
    inter: `'Inter Variable', sans-serif`,
    aleo: `'Aleo Variable', serif`,
    leaderboard: `'Luckiest Guy', system-ui;`
  },
  textStyles: {
  }
});
export default theme;

