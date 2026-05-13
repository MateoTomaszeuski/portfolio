import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-slate-800 shadow-lg">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 md:space-x-3">
            <img src="/logo.svg" alt="Logo" className="h-8 w-8 md:h-12 md:w-12" />
            <span className="text-base md:text-xl font-bold text-slate-900 dark:text-white">
              <span className="hidden sm:inline">Mateo Tomaszeuski</span>
              <span className="sm:hidden">MT</span>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
