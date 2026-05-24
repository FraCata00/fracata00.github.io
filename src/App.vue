<script setup>
import AppBar from './components/AppBar.vue'
import HeroSection from './components/HeroSection.vue'
import CaseStudies from './components/CaseStudies.vue'
import ToolboxSection from './components/ToolboxSection.vue'
import OpenSource from './components/OpenSource.vue'
import ContactFooter from './components/ContactFooter.vue'
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
  </v-app>
</template>
