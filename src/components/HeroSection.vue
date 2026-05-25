<script setup>
import { profile, heroMeta } from '../data/portfolio'
</script>

<template>
  <header class="hero">
    <div class="eyebrow">{{ profile.role }} · {{ profile.location }}</div>
    <h1 class="display hero-title">
      Francesco builds <em>data-heavy</em> backends that stay fast under load.
    </h1>
    <p class="lede">
      Django and PostgreSQL on the inside, Vue and Nuxt on the outside. I care about
      correctness, query plans, and code the next person can actually read.
    </p>
    <div class="meta">
      <span v-for="m in heroMeta" :key="m.label"><b>{{ m.label }}</b> · {{ m.value }}</span>
      <span>
        <b>github</b> ·
        <a :href="profile.github" target="_blank" rel="noopener">{{ profile.githubHandle }}</a>
      </span>
    </div>
  </header>
</template>

<style scoped>
.hero { padding: clamp(28px, 8vw, 64px) 0 26px; border-bottom: 1px solid var(--rule); }
.hero-title { font-size: clamp(28px, 7vw, 74px); margin-bottom: 22px; line-height: 1.08; }
.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 22px;
  margin-top: 28px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13.5px;
  color: var(--ink-soft);
}
.meta b { color: var(--ink); font-weight: 500; }

@media (max-width: 600px) {
  .meta { font-size: 12.5px; gap: 6px 16px; margin-top: 20px; }
}

@media (max-width: 400px) {
  .hero-title { font-size: clamp(24px, 7vw, 34px); }
  .meta { font-size: 11.5px; gap: 5px 14px; }
}
</style>
