<script setup>
import { openSource } from '../data/portfolio'
</script>

<template>
  <section v-reveal>
    <div class="sec-label"><span class="n">★</span> Open source</div>

    <v-card v-for="o in openSource" :key="o.title" class="os-card mb-4" flat>
      <v-card-item>
        <v-card-title class="os-title">{{ o.title }}</v-card-title>
        <v-card-subtitle class="os-sub">{{ o.tagline }}</v-card-subtitle>
      </v-card-item>

      <v-card-text>
        {{ o.text }}
        <div v-if="o.install" class="mt-3"><code>{{ o.install }}</code></div>
      </v-card-text>

      <v-card-actions v-if="o.actions" class="px-4 pb-3">
        <v-btn v-for="a in o.actions" :key="a.label" :href="a.href" target="_blank" rel="noopener" variant="text"
          color="primary" size="small" :prepend-icon="a.icon">
          {{ a.label }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </section>
</template>

<style scoped>
.os-card {
  background: var(--paper2) !important;
  border: 1px solid var(--rule) !important;
  border-radius: 12px !important;
  transition: border-color 0.25s, transform 0.25s;
}

.os-card:hover {
  border-color: var(--accent) !important;
  transform: translateY(-2px);
}

.os-title :deep(*),
.os-title {
  font-family: 'Fraunces', serif !important;
  font-weight: 600;
  font-size: 23px !important;
  color: var(--ink);
  padding-bottom: 2px;
}

.os-sub {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px !important;
  color: var(--accent2) !important;
  letter-spacing: 0.04em;
  opacity: 1 !important;
}

.os-card :deep(.v-card-text) {
  color: var(--ink);
  font-size: 16px;
}

@media (max-width: 600px) {
  .os-title :deep(*),
  .os-title { font-size: 20px !important; }

  .os-card :deep(.v-card-text) { font-size: 15px; }

  .os-card :deep(code) {
    display: block;
    overflow-x: auto;
    white-space: pre;
    word-break: normal;
    padding: 8px 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .os-card:hover {
    transform: none;
  }
}
</style>
