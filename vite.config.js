import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// `base: './'` keeps asset paths relative so the build works whether it is served
// from a user/organisation page (user.github.io) or a project page (user.github.io/repo/).
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
  ],
})
