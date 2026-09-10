import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

export function render() {
  return renderToString(<StaticRouter location="/"><Navbar /><Home /></StaticRouter>)
}
