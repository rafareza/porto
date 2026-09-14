import { motion } from 'framer-motion'
import { Briefcase, Database, Palette, Cpu, Wrench } from 'lucide-react'
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiPython,
  SiPandas,
  SiMysql,
  SiFigma,
  SiGit,
  SiGithub,
  SiDocker,
  SiNodedotjs,
  SiHtml5,
  SiJavascript,
  SiBootstrap,
  SiGooglegemini
} from 'react-icons/si'
import {
  TbFileSpreadsheet,
  TbSparkles,
  TbDeviceMobile,
  TbUserSearch,
  TbComponents,
  TbChartBar,
  TbBrandOpenai,
  TbVideo,
  TbBrandGoogle
} from 'react-icons/tb'
import { 
  RouterIcon, 
  AntigravityIcon, 
  CanvaIcon, 
  CapCutIcon, 
  OllamaIcon, 
  NotebookLMIcon,
  TableauIcon,
  Css3Icon,
  AffinityIcon,
  DockerIcon,
  GithubIcon,
  ExcelIcon,
  OpenCodeIcon,
  DataStudioIcon
} from './CustomIcons'
import profilePhoto from '../assets/foto.jpeg'
import './About.css'

const PowerBIIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <rect x="3" y="13" width="4" height="8" rx="1" fill="#F2C811" />
    <rect x="10" y="8" width="4" height="13" rx="1" fill="#E8B007" />
    <rect x="17" y="3" width="4" height="18" rx="1" fill="#D49900" />
  </svg>
)

const AdobeXDIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="4" fill="#470137" stroke="none" />
    <text x="5" y="16" fill="#FF61F6" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Xd</text>
  </svg>
)

function About() {
  const categories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Briefcase,
      skills: [
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: Css3Icon, color: '#1572B6' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
        { name: 'Vite', icon: SiVite, color: '#bd34fe' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'var(--fg)' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' }
      ]
    },
    {
      id: 'data',
      title: 'Data Analyst',
      icon: Database,
      skills: [
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'Pandas', icon: SiPandas, color: '#150458' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'Power BI', icon: PowerBIIcon, color: '#F2C811' },
        { name: 'Google Data Studio', icon: DataStudioIcon, color: '#4285F4' },
        { name: 'Tableau', icon: TableauIcon, color: '#E97627' },
        { name: 'Excel', icon: ExcelIcon, color: '#107C41' }
      ]
    },
    {
      id: 'design',
      title: 'UI/UX Design',
      icon: Palette,
      skills: [
        { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
        { name: 'Google Stitch', icon: TbBrandGoogle, color: '#4285F4' },
        { name: 'Prototyping', icon: TbDeviceMobile, color: '#8B5CF6' },
        { name: 'User Research', icon: TbUserSearch, color: '#EC4899' },
        { name: 'Design Systems', icon: TbComponents, color: '#3B82F6' }
      ]
    },
    {
      id: 'ai',
      title: 'AI Tools',
      icon: Cpu,
      skills: [
        { name: 'Antigravity', icon: AntigravityIcon, color: '#A4E869' },
        { name: 'OpenCode', icon: OpenCodeIcon, color: '#10A37F' },
        { name: '9Router', icon: RouterIcon, color: '#E67E22' },
        { name: 'Ollama', icon: OllamaIcon, color: '#5B9BD5' },
        { name: 'Gemini', icon: SiGooglegemini, color: '#4285F4' },
        { name: 'NotebookLM', icon: NotebookLMIcon, color: '#EA4335' },
        { name: 'Prompt Engineering', icon: TbSparkles, color: '#F59E0B' }
      ]
    },
    {
      id: 'other',
      title: 'Other Tools',
      icon: Wrench,
      skills: [
        { name: 'CapCut', icon: CapCutIcon, color: '#000000' },
        { name: 'Canva', icon: CanvaIcon, color: '#00C4CC' },
        { name: 'Affinity', icon: AffinityIcon, color: '#A4E869' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'GitHub', icon: GithubIcon, color: 'var(--fg)' },
        { name: 'Docker', icon: DockerIcon, color: '#2496ED' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' }
      ]
    }
  ]

  return (
    <section id="about">
      <div className="section-header">
        <h2>Tentang Saya</h2>
        <p>Mengenal lebih dekat latar belakang, keahlian, dan pendekatan profesional saya</p>
      </div>

      <motion.div
        className="about-top glass"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="about-photo-wrap">
          <div className="about-photo">
            <img src={profilePhoto} alt="Foto Profil" loading="lazy" decoding="async" />
            
          </div>
        </div>
        <div className="about-intro">
          <div className="about-status-badge">
            <span className="status-dot"></span>
            Tersedia untuk Pekerjaan & Kolaborasi
          </div>
          <h3>Membangun Antarmuka Modern & Solusi Berbasis Data</h3>
          <p className="about-description">
            Saya seorang <strong>Frontend Developer</strong> dan <strong>AI Specialist</strong> yang berdedikasi menciptakan pengalaman web interaktif dengan performa optimal dan estetika visual tingkat tinggi.
          </p>
          <p className="about-subtext">
            Melalui integrasi <strong>UI/UX Design</strong> dan <strong>Data Analysis</strong>, saya merancang aplikasi web yang tidak hanya indah secara visual, namun juga solutif, responsif, dan didukung kecerdasan buatan untuk kebutuhan bisnis modern.
          </p>
          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-value">Web Development</span>
              <span className="highlight-label">Modern, Cepat & Responsif</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-value">UI/UX & Design</span>
              <span className="highlight-label">Berpusat pada Pengguna</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-value">Data & AI</span>
              <span className="highlight-label">Analitik & Generative AI</span>
            </div>
          </div>
        </div>
      </motion.div>

      
      <motion.div
        className="about-grid"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {categories.map((cat) => (
          <SkillCategoryCard
            key={cat.id}
            title={cat.title}
            icon={cat.icon}
            skills={cat.skills}
          />
        ))}
      </motion.div>
    </section>
  )
}

function SkillCategoryCard({ title, icon: Icon, skills }) {
  return (
    <div className="skill-category glass">
      <div className="skill-category-header">
        <div className="skill-cat-icon">
          <Icon size={20} />
        </div>
        <h3>{title}</h3>
      </div>
      <div className="skill-icons-grid">
        {skills.map((skill, index) => {
          const SkillIcon = skill.icon
          return (
            <motion.div
              key={index}
              className="skill-icon-card"
              style={{ '--skill-accent': skill.color }}
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ duration: 0.18 }}
              title={skill.name}
            >
              <div className="skill-icon-glyph">
                <SkillIcon size={26} />
              </div>
              <span className="skill-icon-label">{skill.name}</span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default About

