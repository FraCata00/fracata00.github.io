<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import { caseStudies } from '../data/portfolio'
import { useAppTheme } from '../composables/useAppTheme'

const { mobile } = useDisplay()
const { isDark } = useAppTheme()
const timelineLineColor = computed(() => isDark.value ? '#3a3630' : '#d8d1c2')
</script>

<template>
  <section id="work" v-reveal>
    <div class="sec-label">
      <span class="n">§</span> Selected work — anonymised client engagements
    </div>

    <v-timeline
      side="end"
      align="start"
      :line-color="timelineLineColor"
      truncate-line="both"
      :density="mobile ? 'compact' : 'comfortable'"
    >
      <v-timeline-item
        v-for="c in caseStudies"
        :key="c.no"
        dot-color="primary"
        size="large"
        fill-dot
      >
        <template #icon>
          <span class="tl-no">{{ c.no }}</span>
        </template>

        <article class="case">
          <h2>{{ c.title }}</h2>
          <p class="ctx">{{ c.ctx }}</p>

          <div class="grid">
            <template v-for="(r, i) in c.rows" :key="i">
              <div class="k">{{ r.k }}</div>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <div class="val" v-html="r.v" />
            </template>
          </div>

          <figure v-if="c.code">
            <!-- eslint-disable-next-line vue/no-v-html -->
            <pre v-html="c.code" />
            <figcaption>{{ c.caption }}</figcaption>
          </figure>

          <div v-if="c.chips" class="tw-flex tw-flex-wrap tw-gap-2 tw-mt-5 max-[600px]:tw-gap-1.5">
            <!-- eslint-disable-next-line vue/no-v-html -->
            <span v-for="(ch, i) in c.chips" :key="i" class="chip-x" v-html="ch" />
          </div>
        </article>
      </v-timeline-item>
    </v-timeline>
  </section>
</template>

<style scoped>
.tl-no {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 500;
  color: #fff;
}
.case :deep(h2),
.case h2 {
  font-family: 'Fraunces', serif;
  font-weight: 500;
  font-size: clamp(23px, 4vw, 30px);
  line-height: 1.12;
  letter-spacing: -0.01em;
  color: var(--ink);
}
.ctx {
  font-style: italic;
  color: var(--ink-soft);
  font-family: 'Fraunces', serif;
  font-size: 18px;
  margin: 5px 0 18px;
}
:deep(.v-timeline-item__body) { min-width: 0; justify-self: stretch !important; }
:deep(.v-timeline) { overflow-x: clip; }
.grid { display: grid; grid-template-columns: 96px 1fr; gap: 0 22px; }
.grid .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent2);
  padding-top: 5px;
}
.grid .val { margin: 0 0 14px; color: var(--ink); }
.grid .val:last-child { margin-bottom: 0; }

figure { margin: 22px 0 0; }
pre {
  /* CSS scroll-shadows: edge shadows show only while there's more to scroll */
  background:
    linear-gradient(to right, var(--code-bg) 30%, transparent) left center,
    linear-gradient(to left, var(--code-bg) 30%, transparent) right center,
    radial-gradient(farthest-side at 0 50%, rgba(0, 0, 0, 0.4), transparent) left center,
    radial-gradient(farthest-side at 100% 50%, rgba(0, 0, 0, 0.4), transparent) right center;
  background-repeat: no-repeat;
  background-size: 40px 100%, 40px 100%, 16px 100%, 16px 100%;
  background-attachment: local, local, scroll, scroll;
  background-color: var(--code-bg);
  color: var(--code-fg);
  border-radius: 10px;
  padding: 18px 20px;
  overflow-x: auto;
  font-size: 13.5px;
  line-height: 1.6;
  font-family: 'JetBrains Mono', monospace;
  box-shadow: 0 16px 34px -18px rgba(43, 38, 34, 0.55);
  max-width: 100%;
  box-sizing: border-box;
}
figcaption {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11.5px;
  color: var(--ink-soft);
  margin-top: 8px;
  letter-spacing: 0.04em;
}
.chip-x {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12.5px;
  color: var(--accent2);
  background: var(--paper2);
  border: 1px solid var(--rule);
  border-radius: 6px;
  padding: 5px 11px;
}

/* syntax-highlight tokens inside the v-html code block */
.case :deep(.tk) { color: #d7826b; }
.case :deep(.ts) { color: #9cc78d; }
.case :deep(.tc) { color: #8a8276; font-style: italic; }
.case :deep(.tf) { color: #e0b35a; }
.case :deep(.tn) { color: #cbb3e0; }
.case :deep(.chip-x b) { color: var(--ink); font-weight: 500; }
.case :deep(code) {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85em;
  background: var(--paper2);
  padding: 1px 6px;
  border-radius: 4px;
  border: 1px solid var(--rule);
}

@media (max-width: 600px) {
  .grid { grid-template-columns: 1fr; gap: 2px; }
  .grid .k { padding-top: 12px; }
  pre { font-size: 12px; padding: 12px 14px; border-radius: 7px; }
  .ctx { font-size: 16px; }
  .chip-x { font-size: 11.5px; padding: 4px 9px; }
  figure { margin: 16px 0 0; }
}

@media (max-width: 400px) {
  pre { font-size: 11px; padding: 10px 12px; }
  .case h2, .case :deep(h2) { font-size: 20px; }
  .ctx { font-size: 14.5px; }
}
</style>
