import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import './Projects.css'

const GithubIcon = ({ size = 15, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Platform e-commerce modern dengan pengalaman belanja yang intuitif, sistem pembayaran terintegrasi, dan dashboard admin yang komprehensif.',
      tags: ['React', 'TypeScript', 'UI/UX'],
      demoUrl: 'https://demo-ecommerce.example.com',
      githubUrl: 'https://github.com/example/ecommerce-platform'
    },
    {
      id: 2,
      title: 'Analytics Dashboard',
      description: 'Dashboard analitik real-time untuk memantau metrik bisnis kunci dengan visualisasi data interaktif dan insight yang dapat ditindaklanjuti.',
      tags: ['Python', 'Tableau', 'Data Viz'],
      demoUrl: 'https://demo-analytics.example.com',
      githubUrl: 'https://github.com/example/analytics-dashboard'
    },
    {
      id: 3,
      title: 'Design System',
      description: 'Sistem desain komprehensif yang memastikan konsistensi visual dan meningkatkan efisiensi tim dengan komponen yang dapat digunakan kembali.',
      tags: ['Figma', 'Component Library'],
      demoUrl: 'https://www.figma.com/@example',
      githubUrl: 'https://github.com/example/design-system'
    },
    {
      id: 4,
      title: 'AI Chatbot Assistant',
      description: 'Chatbot berbasis AI yang membantu pengguna dengan pertanyaan umum, memberikan rekomendasi, dan meningkatkan pengalaman customer service.',
      tags: ['OpenAI', 'LangChain', 'Next.js'],
      demoUrl: 'https://demo-chatbot.example.com',
      githubUrl: 'https://github.com/example/ai-chatbot'
    },
    {
      id: 5,
      title: 'Fitness Tracker App',
      description: 'Aplikasi mobile untuk pelacakan aktivitas fitness dengan antarmuka yang intuitif dan fitur gamifikasi untuk meningkatkan motivasi pengguna.',
      tags: ['UI/UX', 'Mobile', 'Prototyping'],
      demoUrl: 'https://demo-fitness.example.com',
      githubUrl: 'https://github.com/example/fitness-tracker'
    },
    {
      id: 6,
      title: 'Automated Data Pipeline',
      description: 'Pipeline data otomatis untuk mengumpulkan, membersihkan, dan menganalisis data dari berbagai sumber untuk mendukung keputusan bisnis.',
      tags: ['Python', 'SQL', 'ETL'],
      demoUrl: 'https://demo-pipeline.example.com',
      githubUrl: 'https://github.com/example/data-pipeline'
    }
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
    <section id="projects">
      <div className="section-header">
        <h2>Karya Terpilih</h2>
        <p>Koleksi proyek yang menunjukkan kemampuan teknis dan pemahaman mendalam tentang kebutuhan pengguna</p>
      </div>
      
      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.article
            key={project.id}
            className="project-card"
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
          >
            <div className="project-image">{project.title}</div>
            <div className="project-content">
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-actions">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn-demo"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn-github"
                  >
                    <GithubIcon size={14} />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects
