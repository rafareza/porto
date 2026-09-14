import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import './Header.css'

function Header() {
  const navItems = [
    { href: '#about', label: 'About Me' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.28, 0, 0.22, 1] }}
    >
      <nav>
        <a href="#" className="brand">
          <img src="/logo.png" alt="Portfolio Logo" className="brand-logo" />
        </a>

        <ul className="nav-links">
          {navItems.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
            >
              <a href={item.href}>{item.label}</a>
            </motion.li>
          ))}
        </ul>

        <div className="navbar-right">
          <a href="#contact" className="nav-cta-btn">
            <span>Contact Me</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>
    </motion.header>
  )
}

export default Header
