import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'

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
      description: "An intelligent Spotify management assistant that automates playlist creation, music discovery, and library organization. Users can interact with an AI agent that creates custom playlists based on natural language descriptions, suggests personalized music recommendations, discovers new tracks aligned with their taste, and cleans up duplicate songs across playlists, all while maintaining full visibility and control over every action the agent performs.",
      deployed: "https://spotify.mateo.tomaszeuski.com/",
      github: "https://github.com/MateoTomaszeuski/spotify-manager-ai-agent",
    },
    {
      title: "Consilium - Student Planner App",
      timeline: "Feb 2025 - May 2025",
      description: "A student planning application developed using .NET MAUI with ASP.NET CORE API and PostgreSQL database. Led multiple rounds of structured user testing to evaluate usability. Worked integrally with a dynamic, four-developer team in an agile environment.",
      deployed: "https://consilium.mateo.tomaszeuski.com/",
      github: "https://github.com/MateoTomaszeuski/consilium-student-planner-app",
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
        <Section>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 md:mb-8">My Projects</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-slate-300 dark:bg-slate-700"></div>

            {/* Projects */}
            <div className="space-y-8 md:space-y-12">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  timeline={project.timeline}
                  description={project.description}
                  deployed={project.deployed}
                  github={project.github}
                  variant="timeline"
                  position={index % 2 === 0 ? 'left' : 'right'}
                />
              ))}
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}
