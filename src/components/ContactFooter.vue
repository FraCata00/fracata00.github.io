<script setup>
import { contacts } from '../data/portfolio'
</script>

<template>
  <footer id="contact" class="foot" v-reveal>
    <h2 class="display foot-title">Let's <em>talk</em>.</h2>

    <v-row class="mt-3">
      <v-col v-for="l in contacts" :key="l.label" cols="12" sm="6">
        <a v-if="l.href" :href="l.href" target="_blank" rel="noopener" class="contact-link">
          <span><span class="lab">{{ l.kind }} ·</span> {{ l.label }}</span>
          <span class="arr" aria-hidden="true">↗</span>
        </a>
        <span v-else class="contact-link placeholder">
          <span class="lab">{{ l.kind }} ·</span> {{ l.label }}
        </span>
      </v-col>
    </v-row>

    <div class="colophon">
      <span>Francesco · Turin, Italy</span>
      <span>Built with Vue, Vuetify &amp; Tailwind</span>
    </div>
  </footer>
</template>

<style scoped>
.foot {
  padding: clamp(40px, 8vw, 62px) 0 clamp(56px, 10vw, 96px);
  border-bottom: none;
}

.foot-title {
  font-size: clamp(30px, 5vw, 48px);
  margin-bottom: 14px;
}

.contact-link {
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 15px;
  padding: 14px 0;
  border-bottom: 1px solid var(--rule);
  color: var(--ink);
}

.contact-link .lab {
  color: var(--ink-soft);
}

.contact-link .arr {
  color: var(--accent);
  flex-shrink: 0;
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity 0.2s, transform 0.2s;
}

a.contact-link:hover {
  color: var(--accent);
  text-decoration: none;
}

a.contact-link:hover .arr {
  opacity: 1;
  transform: none;
}

/* On touch there is no hover — keep the affordance always visible */
@media (hover: none) {
  .contact-link .arr {
    opacity: 1;
    transform: none;
  }
}

.contact-link.placeholder {
  color: var(--ink-soft);
}

.contact-link.placeholder::before {
  content: '✎ ';
  color: var(--accent);
  opacity: 0.6;
}

.colophon {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 42px;
  color: var(--ink-soft);
  font-size: 13px;
  letter-spacing: 0.05em;
  font-family: 'JetBrains Mono', monospace;
}

@media (max-width: 600px) {
  .colophon { flex-direction: column; align-items: center; text-align: center; gap: 6px; margin-top: 28px; }
  /* full-width rows on mobile: push the arrow to the trailing edge */
  .contact-link { font-size: 14px; padding: 16px 0; justify-content: space-between; }
  .foot-title { margin-bottom: 8px; }
}

@media (max-width: 400px) {
  .contact-link { font-size: 12.5px; overflow-wrap: break-word; word-break: break-all; }
  .colophon { font-size: 11.5px; }
}
</style>
