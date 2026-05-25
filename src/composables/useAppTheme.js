import { ref } from 'vue'

const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null
const prefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches

const isDark = ref(saved ? saved === 'dark' : prefersDark)

function apply(dark) {
  isDark.value = dark
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  localStorage.setItem('theme', dark ? 'dark' : 'light')
}

apply(isDark.value)

export function useAppTheme() {
  return {
    isDark,
    toggle: () => apply(!isDark.value),
  }
}
