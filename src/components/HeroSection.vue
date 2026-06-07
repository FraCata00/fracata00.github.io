<script setup>
import { mdiDownload } from '@mdi/js'
import { profile, heroMeta } from '../data/portfolio'
import undrawDeveloper from '../assets/undraw_developer.svg'
</script>

<template>
  <header id="top" class="hero">
    <div class="tw-grid tw-grid-cols-[auto_1fr] tw-items-center tw-gap-[52px] max-[768px]:tw-grid-cols-1">
      <div class="hero-avatar-wrap">
        <div class="avatar-blob-shadow"></div>
        <div class="avatar-blob">
          <img :src="undrawDeveloper" alt="Developer illustration" />
        </div>
      </div>
      <div class="hero-text">
        <div class="eyebrow">{{ profile.role }} · {{ profile.yoe }} · {{ profile.location }}</div>
        <h1 class="display hero-title">
          Francesco builds <em>data-heavy</em> backends that stay fast under load.
        </h1>
        <p class="lede">
          Django and PostgreSQL on the inside, Vue and Nuxt on the outside. I care about
          correctness, query plans, and code the next person can actually read.
        </p>
        <div class="tw-mb-5">
          <v-btn
            href="/cv.pdf"
            download
            variant="tonal"
            color="primary"
            size="small"
            :prepend-icon="mdiDownload"
          >
            Download CV
          </v-btn>
        </div>

        <div class="meta">
          <span v-for="m in heroMeta" :key="m.label">
            <b>{{ m.label }}</b> ·
            <a v-if="m.href" :href="m.href" target="_blank" rel="noopener">{{ m.value }}</a>
            <template v-else>{{ m.value }}</template>
          </span>
          <span>
            <b>github</b> ·
            <a :href="profile.github" target="_blank" rel="noopener">{{ profile.githubHandle }}</a>
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.hero { padding: clamp(28px, 8vw, 64px) 0 26px; border-bottom: 1px solid var(--rule); }

.hero-title { font-size: clamp(28px, 7vw, 74px); margin-bottom: 22px; line-height: 1.08; }

.hero-avatar-wrap {
  position: relative;
  width: 270px;
  height: 270px;
  flex-shrink: 0;
  align-self: center;
}

.avatar-blob-shadow {
  position: absolute;
  inset: 6px -6px -10px 6px;
  background: var(--accent);
  opacity: 0.12;
  border-radius: 62% 38% 32% 68% / 58% 32% 68% 42%;
  animation: blob-morph 9s ease-in-out infinite;
  animation-delay: -1.5s;
}

.avatar-blob {
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--paper2);
  border: 1.5px solid var(--rule);
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: blob-morph 8s ease-in-out infinite;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px;
}

.avatar-blob img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@keyframes blob-morph {
  0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  25%       { border-radius: 42% 58% 55% 45% / 50% 62% 38% 50%; }
  50%       { border-radius: 32% 68% 68% 32% / 32% 32% 68% 68%; }
  75%       { border-radius: 52% 48% 38% 62% / 42% 58% 42% 58%; }
}

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

@media (prefers-reduced-motion: reduce) {
  .avatar-blob, .avatar-blob-shadow { animation: none; }
}

@media (max-width: 768px) {
  .hero-avatar-wrap {
    justify-self: center;
    order: -1;
    width: 200px;
    height: 200px;
  }
}

@media (max-width: 600px) {
  .meta { font-size: 12.5px; gap: 6px 16px; margin-top: 20px; }
}

@media (max-width: 400px) {
  .hero-title { font-size: clamp(24px, 7vw, 34px); }
  .meta { font-size: 11.5px; gap: 5px 14px; }
  .hero-avatar-wrap { width: 160px; height: 160px; }
}
</style>
