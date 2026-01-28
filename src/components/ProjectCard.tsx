import { ExternalLinkIcon, GitHubIcon } from './SocialLink'

interface ProjectCardProps {
  title: string
  timeline: string
  description: string
  deployed?: string | null
  github?: string | null
  items?: string[]
  variant?: 'timeline' | 'card'
  position?: 'left' | 'right'
}

export default function ProjectCard({ 
  title, 
  timeline, 
  description,
  deployed,
  github,
  items,
  variant = 'card',
  position = 'left'
}: ProjectCardProps) {
  const content = (
    <>
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
      </div>
      <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-2 md:mb-3">{timeline}</p>
      <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 mb-3 md:mb-4">{description}</p>
      
      {items && items.length > 0 && (
        <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 mb-3 md:mb-4">
          {items.map((item, index) => (
            <li key={index} className="text-sm md:text-base">{item}</li>
          ))}
        </ul>
      )}

      {/* Links */}
      <div className="flex flex-wrap gap-2 md:gap-3">
        {deployed && (
          <a
            href={deployed}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 bg-blue-600 dark:bg-blue-700 text-white text-xs md:text-sm rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            <ExternalLinkIcon />
            View Live
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 bg-slate-800 dark:bg-slate-700 text-white text-xs md:text-sm rounded-lg hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
          >
            <GitHubIcon />
            GitHub
          </a>
        )}
      </div>
    </>
  )

  if (variant === 'card') {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
        {content}
      </div>
    )
  }

  // Timeline variant
  return (
    <div className={`relative flex flex-col md:flex-row gap-8 ${position === 'left' ? 'md:flex-row-reverse' : ''}`}>
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-blue-500 dark:bg-blue-400 rounded-full border-2 md:border-4 border-slate-100 dark:border-slate-900 z-10"></div>
      
      {/* Content */}
      <div className={`md:w-1/2 ${position === 'left' ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 md:p-6 ml-6 md:ml-0">
          {content}
        </div>
      </div>
      
      {/* Empty space for alternating layout */}
      <div className="hidden md:block md:w-1/2"></div>
    </div>
  )
}
