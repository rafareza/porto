import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Code, Cpu, ExternalLink, ChartBar, ChartBarBigIcon, Code2, Database } from 'lucide-react'
import './Certifications.css'

const GoogleDriveIcon = ({ size = 16, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 87.3 78"
    {...props}
  >
    <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
    <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44c-.8 1.4-1.2 2.95-1.2 4.5h27.5z" fill="#00ac47"/>
    <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
    <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
    <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
    <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
  </svg>
)

function Certifications() {
  const certifications = [
    {
      id: 1,
      title: 'Bootcamp: Data Analyst FIKTI Learning',
      issuer: 'Gunadarma University',
      year: 'May 2023',
      credentialId: '',
      icon: Database,
      driveUrl: 'https://drive.google.com/file/d/1rP3gV4iMsG7eY1ZbyAabsWYeADu2eqOk/view'
    },
    {
      id: 2,
      title: 'Bootcamp: Web Development FIKTI Learning',
      issuer: 'Gunadarma University',
      year: 'May 2024',
      credentialId: '',
      icon: Code,
      driveUrl: 'https://drive.google.com/file/d/1fHt1ChT_3GCWdUpEBsj3ynnjlVlS6NT-/view'
    },
    {
      id: 3,
      title: 'Workshop: Javascript Fundamental Analysis',
      issuer: 'Gunadarma University',
      year: 'August 2024',
      credentialId: '',
      icon: Code2,
      driveUrl: 'https://drive.google.com/file/d/1EAYolRzkjaqxQ9XZijlyNd2R3JED70yS/view'
    },
    {
      id: 4,
      title: 'Data Science Division',
      issuer: 'Vinix7',
      year: 'December 2025',
      credentialId: '',
      icon: Database,
      driveUrl: 'https://drive.google.com/file/d/1bTW7J1Bkx9n812H-nBRsyoxvo-msTTMA/view'
    },

  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="certifications">
      <div className="section-header">
        <h2>Certifications</h2>
        <p>An ongoing commitment to professional development and mastery of the latest technologies</p>
      </div>
      
      <motion.div
        className="certs-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {certifications.map((cert) => (
          <motion.article
            key={cert.id}
            className="cert-card glass"
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <div className="cert-card-header">
              <div className="cert-icon">
                <cert.icon size={22} />
              </div>
              <div>
                <h3>{cert.title}</h3>
                <div className="cert-issuer">{cert.issuer}</div>
              </div>
            </div>
            <div className="cert-meta">
              <span>{cert.year}</span>
              <span>{cert.credentialId}</span>
            </div>
            {cert.driveUrl && (
              <div className="cert-action">
                <a
                  href={cert.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-drive-btn"
                >
                  <GoogleDriveIcon size={16} />
                  <span>Direct Link</span>
                  <ExternalLink size={13} className="cert-external-icon" />
                </a>
              </div>
            )}
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

export default Certifications

