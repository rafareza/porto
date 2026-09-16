import { motion, AnimatePresence } from 'framer-motion'
import { Download, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import PathDrawingPortfolioHero from '@/components/ui/path-drawing-portfolio-hero'
import './Hero.css'

const roles = [
  'Front-End Developer',
  'Data Analyst',
  'UI/UX Designer',
  'AI Tools Specialist'
]

function RotatingRoles() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={roles[index]}
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -30, scale: 0.9 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="rotating-role"
      >
        {roles[index]}
      </motion.span>
    </AnimatePresence>
  )
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <PathDrawingPortfolioHero
        brand="RAFA REZANDRYA JAELANI"
        tagline=""
        eyebrow=""
        fromColor="#cad1e0ff"
        toColor="#9599a3ff"
        className="hero-path-drawing"
      />
      
      <motion.div
        className="hero-role-wrapper"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <RotatingRoles />
      </motion.div>
      
      <motion.p
        className="lead"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.85 }}
      >
        I enjoy transforming data into clear insights and creating seamless, intuitive interfaces that enhance user interaction.
      </motion.p>
      
      <motion.div
        className="cta-group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <a href="#projects" className="btn btn-primary">
          See My Work
          <ArrowRight size={16} />
        </a>
        <a href="https://drive.google.com/file/d/1rLiAtRRGgTRGwHK6BwYeYfDQoRDxZp3i/view?usp=sharing" target="blank" className="btn btn-secondary" download>
          <Download size={16} />
          My CV
        </a>
      </motion.div>
    </section>
  )
}

export default Hero