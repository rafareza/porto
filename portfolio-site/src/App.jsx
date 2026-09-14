import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import FloatingDock from './components/FloatingDock'
import Footer from './components/Footer'
import darkModeVideo from './assets/dark mode.mp4'
import './App.css'

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  }, [])

  return (
    <>
      <div className="dark-video-bg" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="dark-video-elem"
        >
          <source src={darkModeVideo} type="video/mp4" />
        </video>
        <div className="dark-video-overlay" />
      </div>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <FloatingDock />
    </>
  )
}

export default App
