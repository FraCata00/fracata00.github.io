import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

// SVG icon set: only the paths actually imported (from @mdi/js) ship in the bundle,
// instead of the full ~3.6 MB Material Design Icons webfont.
export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'editorial',
    themes: {
      editorial: {
        dark: false,
        colors: {
          background: '#f6f3ec',
          surface: '#efeae0',
          primary: '#9a3b1f',
          secondary: '#1f5c4a',
          'on-background': '#23201b',
          'on-surface': '#23201b',
        },
      },
    },
  },
})
