# Product Requirements Document (PRD)
## Website Portofolio - Frontend Developer, Data Analyst, UI/UX Designer, Generative and Agentic AI

---

## 1. Problem Statement

Banyak profesional kesulitan memamerkan hasil karya, proses berpikir, dan identitas profesional mereka secara terpusat. Mengandalkan CV statis atau platform pihak ketiga (seperti LinkedIn/Behance) membatasi kustomisasi personal branding dan sering kali gagal memberikan kesan pertama yang menonjol bagi calon perekrut atau klien.

---

## 2. Goals

1. **Online Presence**: Membangun kehadiran online yang profesional, terpusat, dan mudah diakses kapan saja
2. **Showcase Karya**: Menampilkan karya terbaik dan studi kasus untuk membuktikan keahlian secara visual dan terstruktur
3. **Komunikasi Efisien**: Mempersingkat jalur komunikasi antara kamu dan calon klien atau perekrut
4. **Peluang Karir**: Meningkatkan peluang mendapatkan tawaran pekerjaan (full-time atau freelance)

---

## 3. Target Users

| User Type | Kebutuhan Utama |
|-----------|-----------------|
| **Perekrut / HR** | Akses cepat ke CV, ringkasan keahlian, dan kontak |
| **Hiring Managers / Lead Team** | Menggali kualitas pekerjaan, tech stack, dan proses penyelesaian masalah |
| **Calon Klien** | Mencari bukti kredibilitas, gaya visual, atau hasil kerja nyata |
| **Pengunjung Umum** | Melihat portofolio dengan nyaman melalui berbagai perangkat |

---

## 4. User Stories

### Sebagai Perekrut
- Saya ingin melihat tombol **"Unduh CV"** yang jelas di halaman depan agar saya bisa segera menyimpannya ke database

### Sebagai Hiring Manager
- Saya ingin mengklik sebuah proyek dan membaca **studi kasusnya** agar saya paham peran spesifik dan tantangan yang diselesaikan

### Sebagai Calon Klien
- Saya ingin menemukan **formulir kontak atau tautan email langsung** agar saya bisa segera mengajak berdiskusi

### Sebagai Pengunjung Umum
- Saya ingin web ini **responsif** agar saya bisa melihat portofolio dengan nyaman melalui ponsel

---

## 5. Functional Requirements

### Hero Section
- Sapaan dan nama lengkap
- Peran/profesi: Frontend Developer, Data Analyst, UI/UX Designer, Generative and Agentic AI
- Call-to-action (CTA) utama: "Lihat Karya" atau "Hubungi Saya"
- Tombol "Unduh CV"

### About Section
- Ringkasan profil profesional
- Daftar keahlian utama (tech stack, tools, framework)
- Soft skills atau pendekatan kerja

### Katalog Proyek
- Daftar karya unggulan dengan thumbnail, judul, dan label keahlian/teknologi
- Filter berdasarkan kategori atau tech stack (opsional)
- Tampilan grid atau cards yang menarik

### Detail Proyek
- Halaman atau modal khusus yang menjelaskan:
  - Latar belakang proyek
  - Peran dan tanggung jawab
  - Proses dan tantangan
  - Hasil akhir (dilengkapi gambar/tautan demo)
  - Tech stack yang digunakan

### Integrasi Kontak & Sosial
- Tautan aktif menuju:
  - Email
  - LinkedIn
  - GitHub
  - Behance/dribbble (jika relevan)
- Formulir kontak dasar (nama, email, pesan)

### Fitur Tambahan
- **Dark Mode Toggle**: Mode gelap untuk kenyamanan mata
- **Smooth Animations**: Animasi halus untuk transisi dan interaksi

---

## 6. Non-Functional Requirements

| Kategori | Requirement | Target |
|----------|-------------|--------|
| **Performa** | Load time < 3 detik | Untuk retensi pengunjung |
| **Responsivitas** | Mobile-First UI | Smartphone, tablet, desktop |
| **SEO** | Meta title & description | "Portofolio [Nama] - Frontend Developer, UI/UX Designer" |
| **Aksesibilitas** | Kontras teks mudah dibaca | WCAG 2.1 AA compliance |
| **Aksesibilitas** | Gambar memiliki alt text | Deskriptif dan informatif |

---

## 7. Scope

### In-Scope
| Fitur | Status |
|-------|--------|
| Desain UI/UX single-page application | ✅ |
| Galeri proyek dengan studi kasus | ✅ |
| Hosting di Vercel (gratis) | ✅ |
| Tombol kontak & sosial media | ✅ |
| Dark Mode Toggle | ✅ |
| Smooth Animations | ✅ |
| Responsive design (mobile-first) | ✅ |
| SEO optimization (meta tags) | ✅ |

### Out-of-Scope
| Fitur | Alasan |
|-------|--------|
| Sistem login pengguna | Tidak diperlukan untuk portofolio |
| Dasbor admin CMS kompleks | Overhead berlebih untuk portofolio pribadi |
| Fitur toko online / payment gateway | Bukan fokus utama portofolio |
| Kolom komentar | Dapat menambah spam dan maintenance |

---

## 8. Tech Stack

| Komponen | Pilihan |
|----------|---------|
| **Framework** | React + Vite |
| **Styling** | Tailwind CSS / CSS Modules |
| **Deployment** | Vercel |
| **Version Control** | Git + GitHub |
| **Icons** | Lucide / React Icons |
| **Animations** | Framer Motion |

---

## 9. Design Guidelines

### Visual Style
- Clean, minimalis, dan profesional
- Konsisten dengan personal branding
- Penggunaan whitespace yang efektif

### Color Palette
- **Primary**: Warna utama yang mencerminkan personal branding
- **Secondary**: Warna pendukung
- **Dark Mode**: Skema warna gelap yang nyaman untuk mata

### Typography
- Font heading yang tegas dan modern
- Font body yang mudah dibaca
- Hierarki yang jelas

---

## 10. Success Metrics

| Metric | Target | Cara Mengukur |
|--------|--------|---------------|
| **Page Load Time** | < 3 detik | Google PageSpeed Insights |
| **Mobile Responsiveness** | 100%适配 | Responsive testing tools |
| **SEO Score** | > 90/100 | Lighthouse audit |
| **Accessibility** | > 80/100 | Lighthouse audit |
| **User Engagement** | Meningkat | Google Analytics (opsional) |

---

## 11. Timeline

| Phase | Durasi | Deliverables |
|-------|--------|--------------|
| **Phase 1: Setup** | 2-3 hari | Project setup, routing, basic layout |
| **Phase 2: Components** | 4-5 hari | Hero, About, Projects, Contact |
| **Phase 3: Styling** | 3-4 hari | Responsive design, dark mode, animations |
| **Phase 4: Content** | 2-3 hari | Placeholder content, CV upload |
| **Phase 5: Polish** | 2-3 hari | Testing, optimization, deployment |

**Total Estimasi**: 2-3 minggu

---

## 12. Appendix

### Contoh Meta Tags
```html
<title>Portofolio [Nama] - Frontend Developer, UI/UX Designer, Data Analyst</title>
<meta name="description" content="Portofolio profesional [Nama] - Frontend Developer, UI/UX Designer, Data Analyst, dan Generative AI Specialist. Lihat proyek dan studi kasus terbaik saya.">
```

### Placeholder Content
- 4-6 proyek contoh dengan gambar placeholder
- Deskripsi umum untuk setiap proyek
- Tech stack yang relevan dengan profil

---

**Dokumen ini dibuat pada**: 9 September 2026
**Status**: Draft
**Versi**: 1.0
