/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  // Vuetify ships its own reset; disabling Tailwind's preflight prevents the two
  // from fighting over base element styles. We only use Tailwind utilities.
  corePlugins: { preflight: false },
  // "tw-" prefix avoids collisions with Vuetify utility classes (d-flex, mb-4, …)
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        paper: '#f6f3ec',
        paper2: '#efeae0',
        ink: '#23201b',
        'ink-soft': '#5c564b',
        rule: '#d8d1c2',
        accent: '#9a3b1f',
        accent2: '#1f5c4a',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
