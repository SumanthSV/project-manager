import { useEffect, useRef, useState } from 'react'

/** Respects the user's OS-level reduced-motion preference. */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(query.matches)
    const handler = (e) => setReduced(e.matches)
    query.addEventListener('change', handler)
    return () => query.removeEventListener('change', handler)
  }, [])

  return reduced
}

/**
 * Animates a number from 0 up to `target` whenever `target` changes.
 * Falls back to an instant jump when reduced motion is requested.
 */
export function useCountUp(target, { duration = 1100 } = {}) {
  const [value, setValue] = useState(0)
  const prefersReducedMotion = usePrefersReducedMotion()
  const frame = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) {
      setValue(target)
      return
    }

    const start = performance.now()
    const from = 0

    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(from + (target - from) * eased))
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick)
      }
    }

    frame.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration, prefersReducedMotion])

  return value
}
