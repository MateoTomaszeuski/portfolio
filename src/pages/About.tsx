import Section from '../components/Section'
import ExperienceCard from '../components/ExperienceCard'
import { LinkedInIcon, MailIcon } from '../components/SocialLink'
import ProjectCard from '../components/ProjectCard'

export default function About() {
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
                                Business & Technology Development
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 max-w-6xl">
                {/* About Section */}
                <Section title="About">
                    <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                        <p>
                            Mateo is a software engineer who focuses on strategic communications, client relationships, and the integration of technology and AI to maximize EIS's visibility and client impact. He brings a strong technical foundation in full-stack web development, data analysis, and cloud services, which he applies to modernizing and expanding the company's digital presence.
                        </p>
                        <p>
                            His background spans software engineering with expertise in React, ASP.NET Core, Docker, and cloud services, as well as data science and CI/CD pipeline implementation. Mateo combines technical depth with strong organizational and communication skills, making him effective at bridging the gap between engineering expertise and client-facing initiatives.
                        </p>
                        <p>
                            Mateo leads efforts to strengthen EIS's presence online, including the design and continuous improvement of the company website, upgrades to internal technologies, and growing the firm's reach on professional platforms such as LinkedIn. His work ensures the company's expertise and reputation are clearly communicated to clients, partners, and the broader professional community.
                        </p>
                    </div>
                </Section>

                {/* Areas of Focus */}
                <Section title="Areas of Focus">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700 dark:text-slate-300">
                        <li className="flex items-start gap-2">
                            <span className="text-slate-500 dark:text-slate-400 mt-1">•</span>
                            <span>Front-End Development</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-slate-500 dark:text-slate-400 mt-1">•</span>
                            <span>Back-End Development</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-slate-500 dark:text-slate-400 mt-1">•</span>
                            <span>Cloud Services</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-slate-500 dark:text-slate-400 mt-1">•</span>
                            <span>Software Architecture</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-slate-500 dark:text-slate-400 mt-1">•</span>
                            <span>Software Maintenance & Optimization</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-slate-500 dark:text-slate-400 mt-1">•</span>
                            <span>AI Integration</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-slate-500 dark:text-slate-400 mt-1">•</span>
                            <span>Data Analysis</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-slate-500 dark:text-slate-400 mt-1">•</span>
                            <span>CI/CD Pipelines</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-slate-500 dark:text-slate-400 mt-1">•</span>
                            <span>Testing & Quality Assurance</span>
                        </li>
                    </ul>
                </Section>

                {/* Education and Languages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Education */}
                    <Section title="Education">
                        <div className="space-y-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                                <h3 className="font-semibold text-slate-900 dark:text-white">
                                    Snow College, BS Software Engineering - Web Development & Data Science
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">(2026)</p>
                            </div>
                        </div>
                    </Section>

                    {/* Languages */}
                    <Section title="Languages">
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="w-20 text-sm font-medium text-slate-700 dark:text-slate-300">English</span>
                                <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                                    <div className="bg-slate-600 dark:bg-slate-400 h-2 rounded-full" style={{width: '100%'}}></div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-20 text-sm font-medium text-slate-700 dark:text-slate-300">Spanish</span>
                                <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                                    <div className="bg-slate-600 dark:bg-slate-400 h-2 rounded-full" style={{width: '100%'}}></div>
                                </div>
                            </div>
                        </div>
                    </Section>
                </div>

                {/* Work Experience */}
                <Section title="Work Experience">
                    <div className="space-y-8">
                        <ExperienceCard
                            title="Business & Technology Development"
                            organization="EIS Forensic"
                            location="Centerville, Utah"
                            timeline="May 2026 - Present"
                            items={[
                                "Lead strategic communications and client relationships, bridging technical expertise with client-facing initiatives to maximize company visibility and impact",
                                "Design and continuously improve company website using React and ASP.NET Core, implement cloud services architecture, and modernize internal technologies",
                                "Develop internal tools to improve company efficiency and streamline communication with clients, enhancing operational workflows and client engagement",
                                "Integrate AI solutions and develop CI/CD pipelines for software optimization, while expanding the firm's professional presence on LinkedIn and digital platforms"
                            ]}
                        />

                        <ExperienceCard
                            title="Software Engineering Teaching Assistant"
                            organization="Snow College"
                            location="Ephraim, Utah"
                            timeline="Aug 2025 - May 2026"
                            items={[
                                "Teach and tutor students in the .NET Framework and ASP.NET Core, reinforcing core software engineering concepts",
                                "Assist with debugging, code reviews, and understanding application architecture and best practices",
                                "Support instructors during labs and coursework by answering technical questions and guiding students through assignments"
                            ]}
                        />

                        <ExperienceCard
                            title="Math Tutor"
                            organization="Snow College"
                            location="Ephraim, Utah"
                            timeline="Aug 2025 - May 2026"
                            items={[
                                "Provide one-on-one and small-group tutoring in Mathematics and Statistics, supporting students across multiple course levels",
                                "Explain complex concepts clearly by adapting explanations to different learning styles",
                                "Assist students with homework, exam preparation, and problem-solving strategies to improve academic performance"
                            ]}
                        />

                        <ExperienceCard
                            title="Software Engineer Internship"
                            organization="Dynamic Integrations"
                            timeline="Sep 2024 - May 2025"
                            items={[
                                "Gained hands-on experience with Docker for in-development testing with databases",
                                "Worked with clients to refine software requirements and presented projects to potential customers at a convention",
                                "Developed skills in explaining technical decisions and project contributions clearly to diverse audiences"
                            ]}
                        />
                    </div>
                </Section>

                {/* Leadership Experience */}
                <Section title="Leadership Experience">
                    <div className="space-y-8">
                        <ExperienceCard
                            title="Resident Director"
                            organization="Snow College"
                            location="Ephraim, Utah"
                            timeline="Aug 2025 - Present"
                            items={[
                                "Campus Security Authority, reporting any broken policy, law, or concern that occurs on campus",
                                "Mediate when trouble between residents occurs, report to the Dean of Students or Dispatch",
                                "Team Lead for the Resident Assistants, organizing and running meetings throughout the agenda"
                            ]}
                        />

                        <ExperienceCard
                            title="Resident Assistant"
                            organization="Snow College"
                            timeline="Aug 2024 - May 2025"
                            items={[
                                "Campus Security Authority, reporting any broken policy, law, or concern that occurs on campus",
                                "Oversee students, help with lockouts, check-ins and be a trustworthy person for the residents",
                                "Plan Activities for the entire Resident Hall, improving engagement between students"
                            ]}
                        />

                        <ExperienceCard
                            title="Student Body Vice President"
                            organization="Snow College"
                            timeline="May 2023 - Dec 2023"
                            items={[
                                "Committee Lead for the marketing team, organizing and running meetings throughout an agenda",
                                "Provide training for the marketing team, teaching how to analyze metrics and advanced design.",
                                "Assisting in the coordination of student government projects and committees"
                            ]}
                        />

                        <ExperienceCard
                            title="Student Body Officer"
                            organization="Snow College"
                            timeline="Aug 2022 - May 2023"
                            items={[
                                "Improved engagement, impressions, and reach of the Instagram account by 300%",
                                "Collaborated with other student leaders to plan, promote, and support campus-wide events and initiatives",
                                "Represented the student body by gathering student feedback and communicating concerns to student government leadership"
                            ]}
                        />
                    </div>
                </Section>

                {/* Education */}
                <Section title="Education">
                    <div className="space-y-8">
                        <ExperienceCard
                            title="Bachelor's Degree, Computer Software Engineering"
                            organization="Snow College"
                            timeline="Aug 2024 - Apr 2026"
                            items={[
                                "Activities and societies: Student Body Vice President, Cheerleader, Resident Director",
                                "Problem Solving, SQL and +16 skills"
                            ]}
                        />

                        <ExperienceCard
                            title="Associate of Science - AS, Computer Science"
                            organization="Snow College"
                            timeline="Jan 2022 - May 2024"
                            items={[
                                "Activities and societies: Student Body Officer, Student Body Vice President",
                                "Problem Solving, C# and +7 skills"
                            ]}
                        />
                    </div>
                </Section>

                {/* Projects */}
                <Section title="Projects">
                    <div className="space-y-8">
                        <ProjectCard
                            title="Top-Down 2D Battle Royale"
                            timeline="Jan 2026 - April 2026"
                            description=""
                            github="https://github.com/MateoTomaszeuski/2d-battle-royale-distributed-app"
                            items={[
                                "Built a distributed multiplayer game with an Elixir backend, React frontend, and PostgreSQL database",
                                "Implemented CI/CD with Docker and Kubernetes; supports multiple simultaneous lobbies and real-time player movement",
                                "Designed a fault-tolerant failover system using PubSub for pod-level recovery and database-level recovery if all backend nodes go down"
                            ]}
                        />

                        <ProjectCard
                            title="ITIN - Itinerary & Trip Planner"
                            timeline="Aug 2025 - April 2026"
                            description=""
                            deployed="https://itin.tomaszeuski.com"
                            items={[
                                "Worked in a four-developer team, implementing an AGILE / SCRUM environment, gaining experience as a SCRUM MASTER",
                                "Hands-on experience as a full-stack developer, Back-end in C#, Front-End in React, and Database with PostgreSQL",
                                "Implemented Local deployment (Docker), Kubernetes deployment for testing, and Production deployment in Azure"
                            ]}
                        />

                        <ProjectCard
                            title="Spotify Agent - Spotify AI Manager"
                            timeline="Sep 2025 - Dec 2025"
                            description="An intelligent Spotify management assistant that automates playlist creation, music discovery, and library organization. Users can interact with an AI agent that creates custom playlists based on natural language descriptions, suggests personalized music recommendations, discovers new tracks aligned with their taste, and cleans up duplicate songs across playlists, all while maintaining full visibility and control over every action the agent performs."
                            items={[
                                "Implemented a CI/CD pipeline for autonomous testing, linting checks, and deployment to testing environment and production",
                                "Implemented Artificial Intelligence as an Agent to manage Spotify accounts based on user input, implemented the Agentic loop",
                                "Experience with Authorization and Authentication using OAuth"
                            ]}
                        />

                        <ProjectCard
                            title="Consilium - Student Planner App"
                            timeline="Feb 2025 - May 2025"
                            description=""
                            items={[
                                "Developed using .NET MAUI, implemented with ASP.NET CORE API and PostgreSQL Database",
                                "Spearheaded multiple rounds of structured user testing to evaluate the application's usability",
                                "Worked integrally with a dynamic, four-developer team in an agile environment"
                            ]}
                        />

                        <ProjectCard
                            title="BMR & TDEE Calculator"
                            timeline="Jan 2024"
                            description=""
                            items={[
                                "Project developed using Visual Studio, applying a User Interface with Blazor Web App",
                                "Presents calculations running in C#, giving the user the needed information",
                                "Contains a Persistence Class that saves the User Information to the database"
                            ]}
                        />
                    </div>
                </Section>
            </div>
        </div>
    )
}
