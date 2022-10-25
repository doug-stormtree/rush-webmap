import { defineStyleConfig, extendTheme } from '@chakra-ui/react';

const NavBar = defineStyleConfig({
  baseStyle: {
    bg: 'rush.400',
    display: 'flex',
  },
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
    Button: {
      variants: {
        nav: {
          _hover: {
            bg: 'rush.200'
          }
        }
      }
    },
  }
});
export default theme;