import colors from 'vuetify/lib/util/colors'

let darkMode = false
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('awroraDarkMode') || false
}

const palette = {
  ocean: {
    // primary: colors.blue.base, // primary main
    primary: '#c92228', // primary main
    primarylight: colors.blue.lighten4, // primary light
    primarydark: colors.blue.darken4, // primary dark
    // secondary: colors.cyan.base, // secondary main
    secondary: '#303133', // secondary main
    secondarylight: colors.cyan.lighten4, // secondary light
    secondarydark: colors.cyan.darken4, // secondary dark
    accent: colors.deepPurple.accent3, // accent main
    accentlight: colors.deepPurple.lighten5, // accent light
    accentdark: colors.deepPurple.darken3, // accent dark
    // anchor: colors.blue.base // link
    anchor: '#c92228' // link
  },
}

export const theme = {
  ...palette.ocean
}


export default {
  rtl: false,
  theme: {
    dark: darkMode === 'true',
    themes: {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    },
    options: {
      customProperties: true
    }
  }
}
