import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <a className="skip-link" href="#main">Skip to content</a>
    <nav className="shell navigation" aria-label="Main navigation">
      <Link className="wordmark" to="/" onClick={() => setOpen(false)} aria-label="Mateo Tomaszeuski home">mt<span>.</span></Link>
      <span className="nav-caption">SOFTWARE ENGINEER</span>
      <button className="menu-toggle" aria-expanded={open} aria-controls="navigation-links" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'} <span aria-hidden="true"><Icon name={open ? 'minus' : 'plus'} /></span></button>
      <div className={`nav-links ${open ? 'is-open' : ''}`} id="navigation-links">
        <a href="/#work" onClick={() => setOpen(false)}>Work</a>
        <a href="/#experience" onClick={() => setOpen(false)}>Experience</a>
        <a href="/#about" onClick={() => setOpen(false)}>About</a>
        <a className="nav-contact" href="/#contact" onClick={() => setOpen(false)}>Let’s connect <span aria-hidden="true"><Icon name="arrow-up-right" /></span></a>
      </div>
    </nav>
  </header>
}
