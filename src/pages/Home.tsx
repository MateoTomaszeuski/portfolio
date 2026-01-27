export default function Home() {
  const projects = [
    {
      title: "ITIN - Itinerary & Trip Planner",
      timeline: "Aug 2025 - Present",
      description: "A comprehensive trip planning application built in a four-developer AGILE/SCRUM team. Full-stack development with C# backend, React frontend, and PostgreSQL database. Deployed using Docker locally, Kubernetes for testing, and Azure for production.",
      deployed: null,
      github: null,
    },
    {
      title: "Spotify Agent - Spotify AI Manager",
      timeline: "Sep 2025 - Dec 2025",
      description: "An intelligent Spotify management assistant that automates playlist creation, music discovery, and library organization. Users can interact with an AI agent that creates custom playlists based on natural language descriptions, suggests personalized music recommendations, discovers new tracks aligned with their taste, and cleans up duplicate songs across playlists—all while maintaining full visibility and control over every action the agent performs.",
      deployed: "https://spotify.mateo.tomaszeuski.com/",
      github: "https://github.com/MateoTomaszeuski/spotify-manager-ai-agent",
    },
    {
      title: "Consilium - Student Planner App",
      timeline: "Feb 2025 - May 2025",
      description: "A student planning application developed using .NET MAUI with ASP.NET CORE API and PostgreSQL database. Led multiple rounds of structured user testing to evaluate usability. Worked integrally with a dynamic, four-developer team in an agile environment.",
      deployed: null,
      github: null,
    },
    {
      title: "Air Car",
      timeline: "Jan 2025 - Mar 2025",
      description: "AIRCAR is a community-driven peer-to-peer car rental platform designed to address the lack of reliable and affordable transportation in Utah. Features secure pick-up/drop-off points, live chat, insurance coverage, and identity verification. Built with .NET MAUI and PostgreSQL.",
      deployed: null,
      github: null,
    },
    {
      title: "BMR & TDEE Calculator",
      timeline: "Jan 2024",
      description: "A health and fitness calculator developed using Visual Studio with Blazor Web App for the UI. Presents calculations running in C# and includes a Persistence Class that saves user information to the database.",
      deployed: null,
      github: null,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-6xl">
        <h1 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">
          Welcome to Mateo Tomaszeuski's Portfolio
        </h1>
        <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 mb-8 md:mb-12">
          Software Engineer passionate about building innovative solutions.
        </p>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 md:mb-8">My Projects</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-slate-300 dark:bg-slate-700"></div>
            
            {/* Projects */}
            <div className="space-y-8 md:space-y-12">
              {projects.map((project, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-blue-500 dark:bg-blue-400 rounded-full border-2 md:border-4 border-slate-100 dark:border-slate-900 z-10"></div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 md:p-6 ml-6 md:ml-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                      </div>
                      <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-2 md:mb-3">{project.timeline}</p>
                      <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 mb-3 md:mb-4">{project.description}</p>
                      
                      {/* Links */}
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {project.deployed && (
                          <a
                            href={project.deployed}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 bg-blue-600 dark:bg-blue-700 text-white text-xs md:text-sm rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                          >
                            <svg className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            View Live
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 bg-slate-800 dark:bg-slate-700 text-white text-xs md:text-sm rounded-lg hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
                          >
                            <svg className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
