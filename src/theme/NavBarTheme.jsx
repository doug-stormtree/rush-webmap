import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system"

const helpers = createMultiStyleConfigHelpers([
  'navbar',
  'title',
  'buttons',
])

const NavBar = helpers.defineMultiStyleConfig({
  baseStyle: {
    navbar: {
      bg: '#FFF',
      display: 'flex',
      alignItems: 'center',
      height: '2.5rem'
    },
    title: {
      marginLeft: '1em',
      fontFamily: 'var(--chakra-fonts-heading)',
      fontWeight: '700'
    },
    buttons: {
      fontWeight: 'medium',
      strokeWidth: '0.1875em',
    },
    buttonHighlight: {
      fontWeight: 'extrabold',
      strokeWidth: '0.25em',
      color: 'orange.500',
    }
  },
})

export default NavBar