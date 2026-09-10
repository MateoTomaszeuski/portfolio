import { useEffect, useRef, type ReactNode } from 'react'

export default function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const element = ref.current
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!element || motion.matches || !('IntersectionObserver' in window)) return
    let animation: Animation | undefined
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      animation = element.animate([{ opacity: 0, transform: 'translateY(24px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 650, easing: 'cubic-bezier(.2,.7,.3,1)' })
      observer.disconnect()
    }, { threshold: 0.08 })
    const stopMotion = () => { if (motion.matches) { animation?.cancel(); observer.disconnect() } }
    motion.addEventListener('change', stopMotion)
    observer.observe(element)
    return () => { observer.disconnect(); animation?.cancel(); motion.removeEventListener('change', stopMotion) }
  }, [])
  return <div ref={ref} className={className}>{children}</div>
}
