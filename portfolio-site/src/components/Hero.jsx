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
        Frontend Developer, Data Analyst, UI/UX Designer & AI Specialist
      </motion.h1>
      
      <motion.p
        className="lead"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Membangun pengalaman digital yang fungsional dan bermakna melalui desain yang berpusat pada pengguna dan teknologi yang tepat.
      </motion.p>
      
      <motion.div
        className="cta-group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <a href="#projects" className="btn btn-primary">
          Lihat Karya
          <ArrowRight size={16} />
        </a>
        <a href="#" className="btn btn-secondary" download>
          <Download size={16} />
          Unduh CV
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
