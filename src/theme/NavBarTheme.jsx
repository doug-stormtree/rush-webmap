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
    },
    title: {
      margin: 'auto 0.75rem',
      fontFamily: 'var(--chakra-fonts-heading)',
      fontWeight: '700'
    }
  },
})

export default NavBar