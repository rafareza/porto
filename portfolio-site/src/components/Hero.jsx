import { motion } from 'framer-motion'
import { Download, ArrowRight } from 'lucide-react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="hero">
      <motion.div
        className="eyebrow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Portfolio
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Rafa Rezandrya Jaelani
      </motion.h1>
      
      <motion.p
        className="lead"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Front-End Developer, Data Analyst, UI/UX Designer & AI Tools Specialist
        <br />
        I enjoy transforming data into clear insights and creating seamless, intuitive interfaces that enhance user interaction.
      </motion.p>
      
      <motion.div
        className="cta-group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
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
