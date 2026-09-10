import { useEffect, useRef, type ReactNode } from 'react'

/** Preserve native details semantics while animating its measured height. */
export default function AnimatedDetails({ children, className }: { children: ReactNode; className: string }) {
  const ref = useRef<HTMLDetailsElement>(null)
  useEffect(() => {
    const element = ref.current
    const summary = element?.querySelector('summary')
    if (!element || !summary) return
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let animation: Animation | undefined
    let expanded = element.open
    const finish = () => {
      element.open = expanded
      element.style.height = ''
      element.style.overflow = ''
      element.removeAttribute('data-expanding')
      animation = undefined
    }
    const toggle = (event: MouseEvent) => {
      event.preventDefault()
      const from = element.getBoundingClientRect().height
      animation?.cancel()
      expanded = !expanded
      if (motion.matches || typeof element.animate !== 'function') { finish(); return }
      element.style.height = ''
      element.open = expanded
      const to = element.getBoundingClientRect().height
      element.open = true
      element.dataset.expanding = String(expanded)
      element.style.overflow = 'hidden'
      animation = element.animate([{ height: `${from}px` }, { height: `${to}px` }], {
        duration: 320, easing: 'cubic-bezier(.22,1,.36,1)',
      })
      animation.onfinish = finish
    }
    const settle = () => { animation?.cancel(); finish() }
    summary.addEventListener('click', toggle)
    motion.addEventListener('change', settle)
    window.addEventListener('resize', settle)
    return () => {
      animation?.cancel()
      summary.removeEventListener('click', toggle)
      motion.removeEventListener('change', settle)
      window.removeEventListener('resize', settle)
      finish()
    }
  }, [])
  return <details className={className} ref={ref}>{children}</details>
}
