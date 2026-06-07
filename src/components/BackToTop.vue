<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { mdiArrowUp } from '@mdi/js'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 400
}

function toTop() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="tw-transition tw-duration-300 tw-ease-out motion-reduce:tw-transition-none"
      enter-from-class="tw-opacity-0 tw-translate-y-3"
      leave-active-class="tw-transition tw-duration-200 tw-ease-in motion-reduce:tw-transition-none"
      leave-to-class="tw-opacity-0 tw-translate-y-3"
    >
      <button
        v-if="visible"
        type="button"
        aria-label="Back to top"
        class="tw-group tw-fixed tw-z-[2200] tw-bottom-[calc(20px+env(safe-area-inset-bottom))] tw-right-[calc(20px+env(safe-area-inset-right))] tw-flex tw-h-12 tw-w-12 tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-solid tw-border-accent tw-bg-paper2 tw-text-accent tw-shadow-[0_14px_30px_-12px_rgba(43,38,34,0.5)] tw-transition tw-duration-200 hover:tw-bg-accent hover:tw-text-paper"
        @click="toTop"
      >
        <v-icon :icon="mdiArrowUp" size="22" />
      </button>
    </Transition>
  </Teleport>
</template>
