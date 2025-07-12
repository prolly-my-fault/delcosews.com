# delcoSEWS

[![Deployment Status](https://img.shields.io/website?url=https%3A%2F%2Fdelcosews.com&label=deployment)](https://delcosews.com)
[![Next.js](https://img.shields.io/github/package-json/dependency-version/prolly-my-fault/delcosews.com/next?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GitHub last commit](https://img.shields.io/github/last-commit/prolly-my-fault/delcosews.com)](https://github.com/prolly-my-fault/delcosews.com/commits)
[![GitHub repo size](https://img.shields.io/github/repo-size/prolly-my-fault/delcosews.com)](https://github.com/prolly-my-fault/delcosews.com)

**Where we learn, create and inspire the magic of sewing!**

A modern, responsive website for Delaware County's premier sewing and craft community. Built with Next.js 15, Tailwind CSS 4, and custom branding.

## 🎨 Brand Colors

- **Teal**: `#14b8a6` (delco)
- **Pink**: `#db2777` (SEWS) 
- **Purple**: `#7c3aed` (accent/underlines)

## 🔤 Typography

- **delco**: Roboto font (clean, modern)
- **SEWS**: Caveat font (handwritten style)
- **Body**: Inter font (readable, web-optimized)
- **Serif**: Crimson Pro font (elegant headings)

## 🚀 Tech Stack

- **Framework**: Next.js 15.3.5 with App Router
- **Styling**: Tailwind CSS 4 (inline config)
- **Fonts**: Google Fonts via next/font
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel Platform

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout with fonts & metadata
│   ├── page.js            # Homepage with hero section
│   └── globals.css        # Design system & Tailwind config
├── components/
│   ├── Header.js          # Navigation component
│   └── Footer.js          # Footer with social links
└── lib/
    └── fonts.js           # Google Fonts configuration
```

## 🛠 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🌳 Git Workflow

- **develop**: Development branch for testing changes
- **main**: Production branch (auto-deploys to Vercel)

Always make changes on `develop` first, then promote to `main`.

## 🎯 Features

- ✅ Responsive design with mobile-first approach
- ✅ Custom favicon with brand colors
- ✅ SEO optimized with proper metadata
- ✅ Performance optimized fonts and images
- ✅ Dark mode support via Tailwind
- ✅ Accessibility-focused semantic HTML

## 📧 Contact

Questions about delcoSEWS? Email: [andrea@delcosews.com](mailto:andrea@delcosews.com)
