import { ref } from 'vue'

const STORAGE_KEY = 'theme' // 'light' | 'dark' | 'system'

const media =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null

const saved =
  typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null

// system | light | dark
const mode = ref(['light', 'dark', 'system'].includes(saved) ? saved : 'system')
const isDark = ref(false)

function resolveDark() {
  if (mode.value === 'system') return media ? media.matches : false
  return mode.value === 'dark'
}

function render() {
  isDark.value = resolveDark()
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  }
}

media?.addEventListener('change', () => {
  if (mode.value === 'system') render()
})

function setMode(next) {
  mode.value = next
  if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, next)
  render()
}

render()

export function useAppTheme() {
  return { mode, isDark, setMode }
}
