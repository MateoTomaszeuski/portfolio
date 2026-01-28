import Section from '../components/Section'
import ExperienceCard from '../components/ExperienceCard'
import SocialLink, { GitHubIcon, LinkedInIcon, MailIcon } from '../components/SocialLink'
import ProjectCard from '../components/ProjectCard'

export default function About() {
    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
            <div className="container mx-auto px-4 py-8 max-w-5xl">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                    About Me
                </h1>

                {/* Summary */}
                <Section>
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                        Argentinian Software Engineer with hands-on experience in Docker, Kubernetes, Cloud Web Services, .NET MAUI, React, and ASP.NET Core.
                        Proven record of collaborating effectively in agile teams, developing solutions, and driving user-focused improvements, with Leadership Experience.
                    </p>
                </Section>

                {/* Contact Links */}
                <Section title="Connect With Me">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <SocialLink 
                            href="https://github.com/MateoTomaszeuski"
                            icon={<GitHubIcon />}
                            label="GitHub"
                        />
                        <SocialLink 
                            href="https://www.linkedin.com/in/mateo-tomaszeuski/"
                            icon={<LinkedInIcon />}
                            label="LinkedIn"
                            bgColor="bg-blue-600 dark:bg-blue-700"
                            hoverColor="hover:bg-blue-700 dark:hover:bg-blue-600"
                        />
                        <SocialLink 
                            href="mailto:mtomaszeuski@gmail.com"
                            icon={<MailIcon />}
                            label="mtomaszeuski@gmail.com"
                            bgColor="bg-green-600 dark:bg-green-700"
                            hoverColor="hover:bg-green-700 dark:hover:bg-green-600"
                            copyToClipboard="mtomaszeuski@gmail.com"
                        />
                    </div>
                </Section>

                {/* Work Experience */}
                <Section title="Work Experience">
                    <div className="space-y-8">
                        <ExperienceCard 
                            title="Software Engineering Teaching Assistant"
                            organization="Snow College"
                            location="Ephraim, Utah"
                            timeline="Aug 2025 - Present"
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
                            timeline="Aug 2025 - Present"
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

                {/* Projects */}
                <Section title="Projects">
                    <div className="space-y-8">
                        <ProjectCard 
                            title="ITIN - Itinerary & Trip Planner"
                            timeline="Aug 2025 - Present"
                            description=""
                            items={[
                                "Worked in a four-developer team, implementing an AGILE / SCRUM environment, gaining experience as a SCRUM MASTER",
                                "Hands-on experience as a full-stack developer, Back-end in C#, Front-End in React, and Database with PostgreSQL",
                                "Implemented Local deployment (Docker), Kubernetes deployment for testing, and Production deployment in Azure"
                            ]}
                        />

                        <ProjectCard 
                            title="Spotify Agent - Spotify AI Manager"
                            timeline="Sep 2025 - Dec 2025"
                            description="An intelligent Spotify management assistant that automates playlist creation, music discovery, and library organization. Users can interact with an AI agent that creates custom playlists based on natural language descriptions, suggests personalized music recommendations, discovers new tracks aligned with their taste, and cleans up duplicate songs across playlists—all while maintaining full visibility and control over every action the agent performs."
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
