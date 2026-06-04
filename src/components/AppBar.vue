<script setup>
import { computed } from 'vue'
import { mdiGithub, mdiLinkedin, mdiPasta, mdiWeatherSunny, mdiWeatherNight, mdiThemeLightDark } from '@mdi/js'
import { profile } from '../data/portfolio'
import { useAppTheme } from '../composables/useAppTheme'

const { mode, setMode } = useAppTheme()

const themeIcon = computed(() =>
  mode.value === 'light' ? mdiWeatherSunny
  : mode.value === 'dark' ? mdiWeatherNight
  : mdiThemeLightDark,
)

const themeCycle = ['system', 'light', 'dark']
function cycleMode() {
  const next = themeCycle[(themeCycle.indexOf(mode.value) + 1) % themeCycle.length]
  setMode(next)
}
</script>

<template>
  <v-app-bar flat color="background" class="appbar" height="62">
    <v-container class="content d-flex align-center py-0">
      <span class="brand">{{ profile.name }} {{ profile.surname }}</span>
      <v-chip size="small" variant="tonal" color="primary" label class="ml-3 otw" :append-icon="mdiPasta">
        <span class="dot" />
        <i>ciao!</i>
      </v-chip>
      <nav class="nav-links" aria-label="Sezioni pagina">
        <a href="#work">work</a>
        <a href="#toolbox">toolbox</a>
        <a href="#oss">open source</a>
        <a href="#contact">contact</a>
      </nav>
      <v-spacer />
      <v-btn :icon="themeIcon" variant="text" color="primary" aria-label="Tema" @click="cycleMode" />
      <v-btn :icon="mdiLinkedin" variant="text" color="primary" :href="profile.linkedin" target="_blank" rel="noopener"
        aria-label="LinkedIn" />
      <v-btn :icon="mdiGithub" variant="text" color="primary" :href="profile.github" target="_blank" rel="noopener"
        aria-label="GitHub" />
    </v-container>
  </v-app-bar>
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

@media (max-width: 480px) {
  .brand { font-size: 17px; }
  .otw { display: none; }
  .nav-links { display: none; }
}
</style>
