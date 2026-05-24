// v-reveal: fade + rise an element into view as it enters the viewport.
// Respects prefers-reduced-motion and degrades gracefully without IntersectionObserver.
const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default {
  mounted(el) {
    if (prefersReduced || !('IntersectionObserver' in window)) {
      el.classList.add('reveal', 'reveal-in')
      return
    }
    el.classList.add('reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    el._revealObserver = io
  },
  unmounted(el) {
    if (el._revealObserver) el._revealObserver.disconnect()
  },
}
