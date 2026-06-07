<script setup>
import { watch } from 'vue'
import { useTheme } from 'vuetify'
import { useAppTheme } from './composables/useAppTheme'
import AppBar from './components/AppBar.vue'
import HeroSection from './components/HeroSection.vue'
import CaseStudies from './components/CaseStudies.vue'
import ToolboxSection from './components/ToolboxSection.vue'
import OpenSource from './components/OpenSource.vue'
import ContactFooter from './components/ContactFooter.vue'
import BackToTop from './components/BackToTop.vue'

const vuetifyTheme = useTheme()
const { isDark } = useAppTheme()

watch(isDark, dark => {
  vuetifyTheme.global.name.value = dark ? 'editorial-dark' : 'editorial'
}, { immediate: true })
</script>

<template>
  <v-app>
    <AppBar />
    <v-main>
      <v-container class="content">
        <HeroSection />
        <CaseStudies />
        <ToolboxSection />
        <OpenSource />
        <ContactFooter />
      </v-container>
    </v-main>
    <BackToTop />
  </v-app>
</template>
