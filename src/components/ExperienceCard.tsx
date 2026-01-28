interface ExperienceCardProps {
  title: string
  organization?: string
  location?: string
  timeline: string
  description?: string
  items: string[]
}

export default function ExperienceCard({ 
  title, 
  organization, 
  location, 
  timeline, 
  description,
  items 
}: ExperienceCardProps) {
  const subtitle = [organization, location].filter(Boolean).join(' • ')

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{title}</h3>
      {subtitle && (
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          {subtitle} • {timeline}
        </p>
      )}
      {!subtitle && (
        <p className="text-slate-600 dark:text-slate-400 mb-4">{timeline}</p>
      )}
      {description && (
        <p className="text-slate-700 dark:text-slate-300 mb-2">{description}</p>
      )}
      <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
