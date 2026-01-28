import type { ReactNode } from 'react'

interface SectionProps {
  title?: string
  children: ReactNode
  className?: string
}

export default function Section({ title, children, className = '' }: SectionProps) {
  return (
    <section className={`mb-12 ${className}`}>
      {title && (
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{title}</h2>
      )}
      {children}
    </section>
  )
}
