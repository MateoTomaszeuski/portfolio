export default function About() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
          About Me
        </h1>
        
        {/* Summary */}
        <section className="mb-12">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Argentinian Software Engineer with hands-on experience in Docker, Kubernetes, Cloud Web Services, .NET MAUI, React, and ASP.NET Core. 
            Proven record of collaborating effectively in agile teams, developing solutions, and driving user-focused improvements, with Leadership Experience.
          </p>
        </section>

        {/* Work Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Work Experience</h2>
          
          <div className="space-y-8">
            {/* Software Engineering TA */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Software Engineering Teaching Assistant</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Snow College • Ephraim, Utah • Aug 2025 - Present</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>Teach and tutor students in the .NET Framework and ASP.NET Core, reinforcing core software engineering concepts</li>
                <li>Assist with debugging, code reviews, and understanding application architecture and best practices</li>
                <li>Support instructors during labs and coursework by answering technical questions and guiding students through assignments</li>
              </ul>
            </div>

            {/* Math Tutor */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Math Tutor</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Snow College • Ephraim, Utah • Aug 2025 - Present</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>Provide one-on-one and small-group tutoring in Mathematics and Statistics, supporting students across multiple course levels</li>
                <li>Explain complex concepts clearly by adapting explanations to different learning styles</li>
                <li>Assist students with homework, exam preparation, and problem-solving strategies to improve academic performance</li>
              </ul>
            </div>


            {/* Dynamic Integrations */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Software Engineer Internship</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Dynamic Integrations • Sep 2024 - May 2025</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>Gained hands-on experience with Docker for in-development testing with databases</li>
                <li>Worked with clients to refine software requirements and presented projects to potential customers at a convention</li>
                <li>Developed skills in explaining technical decisions and project contributions clearly to diverse audiences</li>
              </ul>
            </div>
          </div>
        </section>

          {/* Leadership Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Leadership Experience</h2>
          
          <div className="space-y-8">
            {/* Resident Director */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Resident Director</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Snow College • Ephraim, Utah • Aug 2025 - Present</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>Campus Security Authority, reporting any broken policy, law, or concern that occurs on campus</li>
                <li>Mediate when trouble between residents occurs, report to the Dean of Students or Dispatch</li>
                <li>Team Lead for the Resident Assistants, organizing and running meetings throughout the agenda</li>
              </ul>
            </div>

            {/* Resident Assistant */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Resident Assistant</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Snow College • Aug 2024 - May 2025</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>Campus Security Authority, reporting any broken policy, law, or concern that occurs on campus</li>
                <li>Oversee students, help with lockouts, check-ins and be a trustworthy person for the residents</li>
                <li>Plan Activities for the entire Resident Hall, improving engagement between students</li>
              </ul>
            </div>

            {/* Student Body Vice President */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Student Body Vice President</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Snow College • May 2023 - Dec 2023</p>
                <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>Committee Lead for the marketing team, organizing and running meetings throughout an agenda</li>
                <li>Provide training for the marketing team, teaching how to analyze metrics and advanced design.</li>
                <li>Assisting in the coordination of student government projects and committees</li>
              </ul>
            </div>

             {/* Student Body Officer */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Student Body Officer</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Snow College • Aug 2022 - May 2023</p>
                <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>Improved engagement, impressions, and reach of the Instagram account by 300%</li>
                <li>Collaborated with other student leaders to plan, promote, and support campus-wide events and initiatives</li>
                <li>Represented the student body by gathering student feedback and communicating concerns to student government leadership</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Projects</h2>
          
          <div className="space-y-8">
            {/* ITIN */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">ITIN - Itinerary & Trip Planner</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Aug 2025 - Present</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>Worked in a four-developer team, implementing an AGILE / SCRUM environment, gaining experience as a SCRUM MASTER</li>
                <li>Hands-on experience as a full-stack developer, Back-end in C#, Front-End in React, and Database with PostgreSQL</li>
                <li>Implemented Local deployment (Docker), Kubernetes deployment for testing, and Production deployment in Azure</li>
              </ul>
            </div>

            {/* Spotify Agent */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Spotify Agent - Spotify AI Manager</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Sep 2025 - Dec 2025</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>Implemented a CI/CD pipeline for autonomous testing, linting checks, and deployment to testing environment and production</li>
                <li>Implemented Artificial Intelligence as an Agent to manage Spotify accounts based on user input, implemented the Agentic loop</li>
                <li>Experience with Authorization and Authentication using OAuth</li>
              </ul>
            </div>

            {/* Consilium */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Consilium - Student Planner App</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Feb 2025 - May 2025</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>Developed using .NET MAUI, implemented with ASP.NET CORE API and PostgreSQL Database</li>
                <li>Spearheaded multiple rounds of structured user testing to evaluate the application's usability</li>
                <li>Worked integrally with a dynamic, four-developer team in an agile environment</li>
              </ul>
            </div>

            {/* Air Car */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Air Car</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Jan 2025 - Mar 2025</p>
              <p className="text-slate-700 dark:text-slate-300 mb-2">
                AIRCAR is a community-driven peer-to-peer car rental platform designed to address the lack of reliable and affordable transportation in Utah. 
                Targeting underserved communities, tourists, and locals without access to personal vehicles, AIRCAR connects car owners and renters through a secure, user-friendly mobile app.
              </p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>Secure pick-up/drop-off points, live chat for coordination, insurance coverage, and identity verification</li>
                <li>Innovative "win-win transport rentals" allow for discounted rates when vehicles need relocation</li>
                <li>Built with .NET MAUI and PostgreSQL</li>
              </ul>
            </div>

            {/* BMR & TDEE Calculator */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">BMR & TDEE Calculator</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Jan 2024</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>Project developed using Visual Studio, applying a User Interface with Blazor Web App</li>
                <li>Presents calculations running in C#, giving the user the needed information</li>
                <li>Contains a Persistence Class that saves the User Information to the database</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
