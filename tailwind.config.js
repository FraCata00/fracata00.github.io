/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  // Vuetify ships its own reset; disabling Tailwind's preflight prevents the two
  // from fighting over base element styles. We only use Tailwind utilities.
  corePlugins: { preflight: false },
  // "tw-" prefix avoids collisions with Vuetify utility classes (d-flex, mb-4, …)
  prefix: 'tw-',
  // Theme switches via the [data-theme="dark"] attribute on <html>. Because the
  // colors below resolve to CSS variables that flip with that attribute, theming
  // is automatic and `dark:` variants are rarely needed.
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      // Mapped to the design-token CSS variables in assets/main.css so a single
      // source of truth drives both raw CSS and Tailwind utilities.
      colors: {
        paper: 'var(--paper)',
        paper2: 'var(--paper2)',
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        rule: 'var(--rule)',
        'rule-soft': 'var(--rule-soft)',
        accent: 'var(--accent)',
        accent2: 'var(--accent2)',
        'code-bg': 'var(--code-bg)',
        'code-fg': 'var(--code-fg)',
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
