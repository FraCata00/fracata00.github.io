<script setup>
import { toolbox } from '../data/portfolio'
</script>

<template>
  <section id="toolbox" v-reveal>
    <div class="sec-label"><span class="n">$</span> Toolbox</div>
    <v-row>
      <v-col v-for="g in toolbox" :key="g.h" cols="12" sm="6" md="3">
        <h3 class="col-h">{{ g.h }}</h3>
        <v-list density="compact" class="tool-list" bg-color="transparent">
          <v-list-item v-for="t in g.items" :key="t" :title="t" />
        </v-list>
      </v-col>
    </v-row>
  </section>
</template>

<style scoped>
.col-h {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 6px;
}
.tool-list :deep(.v-list-item) {
  min-height: 34px;
  padding-inline: 0 !important;
  border-bottom: 1px dotted var(--rule);
}
.tool-list :deep(.v-list-item-title) {
  font-size: 15.5px !important;
  color: var(--ink);
}
</style>
