import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import { MailIcon, LinkedInIcon, GitHubIcon } from '../components/SocialLink'

export default function Home() {
  const projects = [
    {
      title: "Top-Down 2D Battle Royale",
      timeline: "Jan 2026 - April 2026",
      description: "A distributed top-down 2D battle royale game where players move on a grid, choose characters with unique powers, and compete for eliminations. Built with an Elixir backend, React frontend, and PostgreSQL database. Features CI/CD with Docker and Kubernetes, multiple simultaneous lobbies, a leaderboard, and a resilient failover system using PubSub — if a backend pod fails in Kubernetes, traffic shifts to healthy pods, and if all backends go down, state is recovered from the database.",
      deployed: null,
      github: "https://github.com/MateoTomaszeuski/2d-battle-royale-distributed-app",
    },
    {
      title: "ITIN - Itinerary & Trip Planner",
      timeline: "Aug 2025 - April 2026",
      description: "A comprehensive trip planning application built in a four-developer AGILE/SCRUM team. Full-stack development with C# backend, React frontend, and PostgreSQL database. Deployed using Docker locally, Kubernetes for testing, and Azure for production.",
      deployed: "https://itin.tomaszeuski.com",
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
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <img 
                src="/professional.jpg" 
                alt="Mateo Tomaszeuski" 
                className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-xl"
              />
            </div>
            
            {/* Info */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                Mateo Tomaszeuski
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-6">
                Software Engineer | Business & Technology Development
              </p>
              
              {/* Contact Links */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm md:text-base">
                <a 
                  href="mailto:mtomaszeuski@gmail.com" 
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <MailIcon />
                  mtomaszeuski@gmail.com
                </a>
                <a 
                  href="https://www.linkedin.com/in/mateo-tomaszeuski/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/MateoTomaszeuski" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <GitHubIcon />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-8 max-w-6xl">

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
