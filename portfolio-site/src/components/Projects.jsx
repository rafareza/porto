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

// ===== IMAGE HELPER FUNCTIONS =====
// Auto-discover images from public/background/
const BACKGROUND_IMAGES = [
  'acacia-water.png',
  'jacoffee.png',
  'kasku.png',
  'model-comparison.png',
  'portofolio.png',
]

/**
 * Get image URL with fallback chain
 * @param {string} customImage - Custom image path (optional)
 * @param {string} title - Project title for auto-generated path
 * @returns {string} Valid image URL
 */
const getProjectImage = (customImage, title) => {
  if (customImage) return customImage
  
  const autoPath = `/background/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}.png`
  
  const fileName = autoPath.split('/').pop()
  if (BACKGROUND_IMAGES.includes(fileName)) return autoPath
  
  return `/background/${BACKGROUND_IMAGES[0]}`
}

/**
 * Create project with automatic image handling
 * @param {Object} project - Project data
 * @returns {Object} Project with resolved image
 */
const createProject = (project) => ({
  ...project,
  image: getProjectImage(project.image, project.title),
  images: project.images ? project.images.map(img => getProjectImage(img, project.title)) : undefined,
})

function Projects() {
  const rawProjects = [
    {
      id: 1,
      title: 'Acacia Water',
      description: 'Website for selling and purchasing water and gas at Acacia Water stores.',
      tags: ['React', 'TypeScript', 'Supabase'],
      demoUrl: 'https://acacia-water.vercel.app/',
      githubUrl: 'https://github.com/rafareza/acacia-water',
      image: '/background/acacia-water.png'
    },
    {
      id: 2,
      title: 'Design UI/UX Jacoffee',
      description: 'Designing the user interface (UI) and user experience (UX) for Jacoffee coffee shop',
      tags: ['Figma'],
      demoUrl: 'https://www.figma.com/proto/KAwUZgVfSJbND6TGMCthHt/jacoffee?page-id=0%3A1&node-id=431-6742&p=f&viewport=-1638%2C257%2C0.18&t=nzovOmIiJ7AaWPhI-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=431%3A6720',
      image: '/background/jacoffee.png'
    },
    {
      id: 3,
      title: 'Kasku',
      description: 'Web-based application for financial record.',
      tags: ['React', 'TypeScript', 'Supabase'],
      demoUrl: 'https://kasku-ten.vercel.app/',
      githubUrl: 'https://github.com/rafareza/Kasku',
      image: '/background/kasku.png'
    },
    {
      id: 4,
      title: 'Model Comparison And Sentiment Analysis',
      description: 'Comparison of models and sentiment analysis of the NotebookLM application using SVM and Naive Bayes.',
      tags: ['Python', 'Machine Learning', 'SVM', 'Naive Bayes'],
      demoUrl: 'https://colab.research.google.com/drive/1RVEEBxJNTDvriXgvI4jgGw8KMCf16EII?usp=sharing',
      image: '/background/model-comparison.png'
    },
    {
      id: 5,
      title: 'Mental Health Detection',
      description: 'A mental health detection website using SVM and Naive Bayes algorithms. Built with Flask and machine learning models.',
      tags: ['Python','Flask','Machine Learning', 'SVM', 'Naive Bayes'],
      demoUrl: 'https://demo-fitness.example.com',
      githubUrl: 'https://github.com/example/fitness-tracker',
      image: '/background/portofolio.png'
    },
    {
      id: 6,
      title: 'Bunga Indah Website',
      description: 'Website for selling and purchasing flowers at the Bunga Indah shop',
      tags: ['PHP', 'MySQL', 'Bootstrap'],
      githubUrl: 'https://github.com/rafareza/bunga-indah',
      image: '/background/acacia-water.png'
    },
    {
      id: 7,
      title: 'Portofolio Website',
      description: 'A website to showcase my portfolio.',
      tags: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
      githubUrl: 'https://github.com/rafareza/portofolio',
      image: '/background/portofolio.png'
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

  const projects = rawProjects.map(createProject)

  return (
    <section id="projects">
      <div className="section-header">
        <h2>Projects</h2>
        <p>Some projects I've worked on</p>
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
            <div 
              className="project-image" 
              style={{ 
                backgroundImage: `url('${project.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
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