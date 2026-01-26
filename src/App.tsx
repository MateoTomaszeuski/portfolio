import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Welcome to Mateo Tomaszeuski's Portfolio
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        This is the home page.
      </p>
    </div>
  )
}

function About() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        About Me
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Learn more about me here.
      </p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-white dark:bg-gray-800 shadow-lg">
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
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
