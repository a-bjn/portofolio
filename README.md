# 💼 Portfolio - Andrei Bejan

[![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

> A modern, responsive portfolio website showcasing my projects, experience, and skills as a Full-Stack Engineer.

🌐 **Live Demo:** [portofolio-beta-pied.vercel.app](https://portofolio-beta-pied.vercel.app)

---

## ✨ Features

### 🎨 Modern Design
- **Animated Gradients** - Eye-catching text animations with flowing gradients
- **Floating Code Particles** - Dynamic programming symbols creating an immersive coding atmosphere
- **Glass Morphism** - Modern UI with backdrop blur effects
- **Smooth Animations** - Intersection Observer-based animations for engaging user experience

### 📱 Responsive & Interactive
- **Mobile-First Design** - Optimized for all screen sizes
- **Expandable Cards** - Mobile-friendly expandable project and experience cards
- **Touch-Optimized** - Smooth interactions on mobile devices
- **Adaptive Layouts** - Content adjusts intelligently based on screen size

### 🚀 Performance
- **Next.js 15** - Latest features including Turbopack for faster development
- **Image Optimization** - Automatic image optimization with Next.js Image component
- **Code Splitting** - Optimized bundle sizes for faster loading
- **SEO Ready** - Structured for search engine optimization

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 15.4.4 (App Router)
- **UI Library:** React 19.1.0
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4.0
- **Icons:** Heroicons

### Development
- **Package Manager:** npm
- **Linting:** ESLint
- **Build Tool:** Turbopack

---

## 📂 Project Structure

```
portofolio/
├── public/                    # Static assets
│   ├── *.png, *.svg          # Project images and icons
│   └── Andrei Bejan CV.pdf   # Resume
├── src/
│   └── app/
│       ├── components/
│       │   ├── project-card.tsx              # Project card component
│       │   └── sections/
│       │       ├── hero-section.tsx          # Landing section
│       │       ├── experience-section.tsx    # Work experience
│       │       ├── projects-section.tsx      # Featured projects
│       │       └── about-me-section.tsx      # About section
│       ├── header/                           # Navigation header
│       ├── footer/                           # Footer component
│       ├── globals.css                       # Global styles & animations
│       ├── layout.tsx                        # Root layout
│       └── page.tsx                          # Home page
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/a-bjn/portofolio.git
   cd portofolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## 🎯 Key Sections

### 🏠 Hero Section
- Professional introduction
- Social links (GitHub, LinkedIn)
- Downloadable resume
- Animated gradient titles

### 💼 Experience Section
- Work history with detailed descriptions
- Technology stacks used
- Key achievements
- Expandable cards on mobile

### 🚀 Projects Section
- Featured projects with live demos
- Project descriptions and tech stacks
- GitHub repository links
- Expandable tech stack on mobile

---

## 🎨 Customization

### Update Personal Information

1. **Hero Section** - Edit `src/app/components/sections/hero-section.tsx`
2. **Experience** - Modify `experienceData` in `src/app/components/sections/experience-section.tsx`
3. **Projects** - Update `projects` array in `src/app/components/sections/projects-section.tsx`
4. **Resume** - Replace `public/Andrei Bejan CV.pdf` with your own

### Styling

- **Colors & Themes** - Modify `src/app/globals.css`
- **Animations** - Customize keyframes in `globals.css`
- **Tailwind Config** - Extend in `tailwind.config.ts` (if needed)

---

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

---

## 🌟 Features in Detail

### Mobile Expandable Cards
Cards collapse on mobile to save space and expand when clicked, showing full content including tech stacks and achievements.

### Gradient Animations
Text gradients flow smoothly across titles using CSS animations and Tailwind utilities.

### Floating Code Particles
Multiple layers of animated code snippets create a dynamic programming-themed background.

### Image Optimization
All project images are optimized using Next.js Image component with proper sizing and lazy loading.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Andrei Bejan**

- 🌐 Portfolio: [portofolio-beta-pied.vercel.app](https://portofolio-beta-pied.vercel.app)
- 💼 LinkedIn: [linkedin.com/in/andrei-bejan](https://www.linkedin.com/in/andrei-bejan/)
- 🐙 GitHub: [@a-bjn](https://github.com/a-bjn)
- 📍 Location: Cluj-Napoca, Romania

---

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting
- Tailwind CSS for the utility-first CSS framework
- The open-source community

---

## 📞 Contact

Feel free to reach out for collaborations or just a friendly chat!

- **Email:** Available on my [LinkedIn](https://www.linkedin.com/in/andrei-bejan/)
- **GitHub:** [@a-bjn](https://github.com/a-bjn)

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with ❤️ by Andrei Bejan

</div>
