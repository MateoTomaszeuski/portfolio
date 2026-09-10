import { Work, Experience, About, Contact } from '../components/PortfolioSections'

export default function Home() {
  return <main id="main">
    <section className="shell hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> MATEO TOMASZEUSKI · BASED IN UTAH</p>
        <h1 id="hero-title">Thoughtful code.<br /><span>Real-world</span><br />impact.</h1>
        <p className="hero-description">I build software that connects people, processes, and possibility. From banking platforms to AI agents—full-stack engineering with purpose.</p>
        <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↗</span></a><a className="text-link" href="/resume.pdf" download="Mateo Tomaszeuski - Resume.pdf">Download résumé <span aria-hidden="true">↓</span></a></div>
        <div className="hero-footnote"><span className="tiny-cross" aria-hidden="true">+</span><span>C# / .NET &nbsp;·&nbsp; Angular & React &nbsp;·&nbsp; Applied AI</span></div>
      </div>
      <figure className="portrait-frame">
        <div className="portrait-topline"><span>THE PERSON BEHIND THE CODE</span><span aria-hidden="true">↗</span></div>
        <img src="/professional.jpg" width="1086" height="1210" alt="Mateo Tomaszeuski, software engineer" fetchPriority="high" />
        <figcaption><span>Engineering with intention.</span><span className="portrait-coordinate">MIDVALE, UTAH / USA</span></figcaption>
        <span className="portrait-index" aria-hidden="true">01 — MT</span>
      </figure>
    </section>
    <div className="shell current-role"><span className="eyebrow"><span className="status-dot" /> CURRENTLY</span><div><strong>Programmer/Analyst</strong><span>at DHI Computing Service, Inc.</span></div><p>Building banking applications<br />with C#/.NET & Angular</p><a href="#experience" aria-label="Explore my experience">↗</a></div>
    <Work />
    <Experience />
    <About />
    <Contact />
  </main>
}
