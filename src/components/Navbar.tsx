import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-slate-800 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
