import { motion } from 'framer-motion'
import { Home, FolderOpen, Award, Mail } from 'lucide-react'
import './FloatingDock.css'

function FloatingDock() {
  const dockItems = [
    { id: 'home', icon: Home, label: 'Beranda', href: '#hero' },
    { id: 'projects', icon: FolderOpen, label: 'Proyek', href: '#projects' },
    { id: 'certs', icon: Award, label: 'Sertifikat', href: '#certifications' },
    { id: 'contact', icon: Mail, label: 'Kontak', href: '#contact' }
  ]

  return (
    <motion.div
      className="floating-dock-wrap"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <div className="floating-dock">
        {dockItems.map((item, index) => (
          <a
            key={item.id}
            href={item.href}
            className="fd-item"
            title={item.label}
          >
            <item.icon size={18} />
            <span className="fd-tip">{item.label}</span>
          </a>
        ))}
      </div>
    </motion.div>
  )
}

export default FloatingDock
