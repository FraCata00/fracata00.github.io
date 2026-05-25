<script setup>
import { mdiGithub, mdiPasta, mdiWeatherSunny, mdiWeatherNight } from '@mdi/js'
import { profile } from '../data/portfolio'
import { useAppTheme } from '../composables/useAppTheme'

const { isDark, toggle } = useAppTheme()
</script>

<template>
  <v-app-bar flat color="background" class="appbar" height="62">
    <v-container class="content d-flex align-center py-0">
      <span class="brand">{{ profile.name }} {{ profile.surname }}</span>
      <v-chip size="small" variant="tonal" color="primary" label class="ml-3 otw" :append-icon="mdiPasta">
        <span class="dot" />
        <i>ciao!</i>
      </v-chip>
      <v-spacer />
      <v-btn
        :icon="isDark ? mdiWeatherSunny : mdiWeatherNight"
        variant="text"
        color="primary"
        :aria-label="isDark ? 'Passa al tema chiaro' : 'Passa al tema scuro'"
        @click="toggle"
      />
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

@media (max-width: 480px) {
  .brand { font-size: 17px; }
  .otw { display: none; }
}
</style>
