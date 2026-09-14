const ImageIcon = ({ src, alt, size = 24, ...props }) => (
  <img
    src={src}
    alt={alt}
    width={size}
    height={size}
    style={{ objectFit: 'contain', borderRadius: '4px' }}
    {...props}
  />
)

export const RouterIcon = ({ size = 24 }) => (
  <ImageIcon src="/icons/9router.png" alt="9Router" size={size} />
)

export const AntigravityIcon = ({ size = 24 }) => (
  <ImageIcon src="/icons/Google-Antigravity-Icon-Full-Color.png" alt="Antigravity" size={size} />
)

export const CanvaIcon = ({ size = 24 }) => (
  <ImageIcon src="/icons/canva-icon.png" alt="Canva" size={size} />
)

export const CapCutIcon = ({ size = 24 }) => (
  <ImageIcon src="/icons/capcut-icon.png" alt="CapCut" size={size} />
)

export const OllamaIcon = ({ size = 24 }) => (
  <ImageIcon src="/icons/ollama-icon.png" alt="Ollama" size={size} />
)

export const NotebookLMIcon = ({ size = 24 }) => (
  <ImageIcon src="/icons/notebooklm-icon.png" alt="NotebookLM" size={size} />
)

export const TableauIcon = ({ size = 24 }) => (
  <ImageIcon src="/icons/icons8-tableau-software-96.png" alt="Tableau" size={size} />
)

export const DockerIcon = ({ size = 24 }) => (
  <ImageIcon src="/icons/docker.png" alt="Docker" size={size} />
)

export const GithubIcon = ({ size = 24 }) => (
  <ImageIcon src="/icons/github.png" alt="GitHub" size={size} />
)

export const ExcelIcon = ({ size = 24 }) => (
  <ImageIcon src="/icons/microsoft-excel-icon.png" alt="Excel" size={size} />
)

export const AffinityIcon = ({ size = 24 }) => (
  <ImageIcon src="/icons/affinity.png" alt="Affinity" size={size} />
)

export const OpenCodeIcon = ({ size = 24 }) => (
  <ImageIcon src="/icons/opencode-logo-light.png" alt="OpenCode" size={size} />
)

export const DataStudioIcon = ({ size = 24 }) => (
  <ImageIcon src="/icons/google-datastudio-icon.png" alt="Google Data Studio" size={size} />
)

export const Css3Icon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <polygon fill="#1572B6" points="5.902 27.201 3.655 2 28.345 2 26.095 27.197 15.985 30 5.902 27.201"/>
    <polygon fill="#33A9DC" points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858"/>
    <polygon fill="#fff" points="16 13.191 20.09 13.191 20.372 10.026 16 10.026 16 6.935 16.011 6.935 23.75 6.935 23.676 7.764 22.917 16.282 16 16.282 16 13.191"/>
    <polygon fill="#EBEBEB" points="16.019 21.218 16.005 21.222 12.563 20.292 12.343 17.827 10.67 17.827 9.24 17.827 9.673 22.68 16.004 24.438 16.019 24.434 16.019 21.218"/>
    <polygon fill="#fff" points="19.827 16.151 19.455 20.29 16.008 21.221 16.008 24.437 22.344 22.68 22.391 22.158 22.928 16.151 19.827 16.151"/>
    <polygon fill="#EBEBEB" points="16.011 6.935 16.011 8.855 16.011 10.018 16.011 10.026 8.555 10.026 8.555 10.026 8.545 10.026 8.483 9.331 8.342 7.764 8.268 6.935 16.011 6.935"/>
    <polygon fill="#EBEBEB" points="16 13.191 16 15.111 16 16.274 16 16.282 12.611 16.282 12.611 16.282 12.601 16.282 12.539 15.587 12.399 14.02 12.325 13.191 16 13.191"/>
  </svg>
)
