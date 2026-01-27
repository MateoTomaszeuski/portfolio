import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-slate-800 shadow-lg">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 md:space-x-3">
            <img src="/vite.svg" alt="Logo" className="h-8 w-8 md:h-12 md:w-12" />
            <span className="text-base md:text-xl font-bold text-slate-900 dark:text-white">
              <span className="hidden sm:inline">Mateo Tomaszeuski</span>
              <span className="sm:hidden">MT</span>
            </span>
          </Link>
          <ul className="flex space-x-4 md:space-x-6">
            <li>
              <Link to="/" className="text-sm md:text-base text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sm md:text-base text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
