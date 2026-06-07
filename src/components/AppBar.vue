<script setup>
import { computed, ref, watch, onUnmounted } from 'vue'
import { mdiGithub, mdiLinkedin, mdiMenu, mdiClose, mdiPasta, mdiWeatherSunny, mdiWeatherNight, mdiThemeLightDark } from '@mdi/js'
import { profile } from '../data/portfolio'
import { useAppTheme } from '../composables/useAppTheme'

const { mode, setMode } = useAppTheme()

const themeIcon = computed(() =>
  mode.value === 'light' ? mdiWeatherSunny
  : mode.value === 'dark' ? mdiWeatherNight
  : mdiThemeLightDark,
)

const themeLabel = computed(() =>
  mode.value === 'light' ? 'light'
  : mode.value === 'dark' ? 'dark'
  : 'system',
)

const themeCycle = ['system', 'light', 'dark']
function cycleMode() {
  const next = themeCycle[(themeCycle.indexOf(mode.value) + 1) % themeCycle.length]
  setMode(next)
}

const navItems = [
  { href: '#work', label: 'work' },
  { href: '#toolbox', label: 'toolbox' },
  { href: '#oss', label: 'open source' },
  { href: '#contact', label: 'contact' },
]

// Fullscreen mobile menu
const open = ref(false)
function onKey(e) {
  if (e.key === 'Escape') open.value = false
}
watch(open, (isOpen) => {
  if (typeof document !== 'undefined') {
    // lock background scroll while the overlay is up
    document.documentElement.style.overflow = isOpen ? 'hidden' : ''
  }
  if (typeof window !== 'undefined') {
    if (isOpen) window.addEventListener('keydown', onKey)
    else window.removeEventListener('keydown', onKey)
  }
})
onUnmounted(() => {
  if (typeof window !== 'undefined') window.removeEventListener('keydown', onKey)
  if (typeof document !== 'undefined') document.documentElement.style.overflow = ''
})
</script>

<template>
  <v-app-bar flat color="background" class="appbar" height="62">
    <v-container class="content d-flex align-center py-0">
      <span class="brand">{{ profile.name }} {{ profile.surname }}</span>
      <v-chip size="small" variant="tonal" color="primary" label class="ml-3 otw" :append-icon="mdiPasta">
        <span class="dot" />
        <i>ciao!</i>
      </v-chip>
      <nav class="nav-links" aria-label="Page sections">
        <a v-for="item in navItems" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>
      <v-spacer />
      <v-btn :icon="themeIcon" variant="text" color="primary" :aria-label="`Switch theme (current: ${themeLabel})`"
        @click="cycleMode" />
      <v-btn class="social-btn" :icon="mdiLinkedin" variant="text" color="primary" :href="profile.linkedin"
        target="_blank" rel="noopener" aria-label="LinkedIn" />
      <v-btn class="social-btn" :icon="mdiGithub" variant="text" color="primary" :href="profile.github" target="_blank"
        rel="noopener" aria-label="GitHub" />
      <v-btn class="menu-btn" :icon="mdiMenu" variant="text" color="primary" aria-label="Open menu"
        @click="open = true" />
    </v-container>
  </v-app-bar>

  <Teleport to="body">
    <Transition
      enter-active-class="tw-transition-opacity tw-duration-300 tw-ease-out motion-reduce:tw-transition-none"
      enter-from-class="tw-opacity-0"
      leave-active-class="tw-transition-opacity tw-duration-200 tw-ease-in motion-reduce:tw-transition-none"
      leave-to-class="tw-opacity-0"
    >
      <div
        v-if="open"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        class="tw-fixed tw-inset-0 tw-z-[2400] tw-flex tw-flex-col tw-overflow-y-auto tw-bg-paper tw-pl-[calc(16px+env(safe-area-inset-left))] tw-pr-[calc(16px+env(safe-area-inset-right))] tw-pt-[calc(16px+env(safe-area-inset-top))] tw-pb-[calc(26px+env(safe-area-inset-bottom))]"
      >
        <!-- same faint engineering-paper grid as the page, faded from the top -->
        <div
          aria-hidden="true"
          class="tw-pointer-events-none tw-absolute tw-inset-0 tw-z-0 tw-opacity-[0.14] tw-[background-size:46px_46px] tw-[background-image:linear-gradient(var(--rule)_1px,transparent_1px),linear-gradient(90deg,var(--rule)_1px,transparent_1px)] tw-[mask-image:radial-gradient(120%_80%_at_50%_0%,#000_30%,transparent_100%)] tw-[-webkit-mask-image:radial-gradient(120%_80%_at_50%_0%,#000_30%,transparent_100%)]"
        />

        <div class="tw-relative tw-z-[1] tw-flex tw-min-h-12 tw-items-center tw-justify-between">
          <span class="tw-whitespace-nowrap tw-font-serif tw-text-[19px] tw-font-medium tw-tracking-[-0.01em]">
            {{ profile.name }} {{ profile.surname }}
          </span>
          <v-btn :icon="mdiClose" variant="text" color="primary" aria-label="Close menu" @click="open = false" />
        </div>

        <nav
          class="tw-relative tw-z-[1] tw-flex tw-flex-1 tw-flex-col tw-justify-center tw-gap-0.5 tw-py-[18px]"
          aria-label="Page sections"
        >
          <a
            v-for="(item, i) in navItems"
            :key="item.href"
            :href="item.href"
            :style="{ animationDelay: `${i * 60 + 90}ms` }"
            class="tw-group tw-flex tw-animate-menu-rise tw-items-baseline tw-gap-4 tw-border-b tw-border-rule-soft tw-py-2.5 tw-font-serif tw-text-[clamp(34px,13vw,58px)] tw-font-medium tw-leading-[1.06] tw-tracking-[-0.02em] tw-text-ink tw-no-underline tw-transition-[color,padding] tw-duration-200 hover:tw-pl-2 hover:tw-text-accent active:tw-pl-2 active:tw-text-accent motion-reduce:tw-animate-none"
            @click="open = false"
          >
            <span class="tw-font-mono tw-text-[13px] tw-font-medium tw-tracking-[0.06em] tw-text-accent2">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <span class="tw-flex-1">{{ item.label }}</span>
            <span
              class="tw--translate-x-1.5 tw-font-mono tw-text-2xl tw-text-accent tw-opacity-0 tw-transition tw-duration-200 group-hover:tw-translate-x-0 group-hover:tw-opacity-100 group-active:tw-translate-x-0 group-active:tw-opacity-100"
            >→</span>
          </a>
        </nav>

        <div class="tw-relative tw-z-[1] tw-flex tw-items-center tw-gap-1 tw-border-t tw-border-rule tw-pt-[14px]">
          <v-btn :icon="themeIcon" variant="text" color="primary"
            :aria-label="`Switch theme (current: ${themeLabel})`" @click="cycleMode" />
          <span class="tw-font-mono tw-text-[12px] tw-uppercase tw-tracking-[0.08em] tw-text-ink-soft">
            {{ themeLabel }}
          </span>
          <span class="tw-flex-1" />
          <v-btn :icon="mdiLinkedin" variant="text" color="primary" :href="profile.linkedin" target="_blank"
            rel="noopener" aria-label="LinkedIn" />
          <v-btn :icon="mdiGithub" variant="text" color="primary" :href="profile.github" target="_blank"
            rel="noopener" aria-label="GitHub" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.appbar {
  border-bottom: 1px solid var(--rule) !important;
}

.brand {
  font-family: 'Fraunces', serif;
  font-weight: 500;
  font-size: 21px;
  letter-spacing: -0.01em;
  white-space: nowrap;
}

.otw .dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  margin-right: 6px;
  vertical-align: middle;
}

.nav-links {
  display: flex;
  gap: 4px;
  margin-left: 20px;
}

.nav-links a {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.06em;
  color: var(--ink-soft);
  padding: 6px 10px;
  border-radius: 6px;
  transition: color 0.2s, background 0.2s;
  text-decoration: none;
}

.nav-links a:hover {
  color: var(--ink);
  background: var(--paper2);
  text-decoration: none;
}

.menu-btn { display: none; }

@media (max-width: 480px) {
  .brand { font-size: 17px; }
  .otw { display: none; }
  .nav-links { display: none; }
  .social-btn { display: none; }
  .menu-btn { display: inline-flex; }
}
</style>
