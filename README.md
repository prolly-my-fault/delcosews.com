# delcoSEWS

[![Vercel Deploy](https://deploy-badge.vercel.app/vercel/delcosews)](https://delcosews.com)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Private-red)](./LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/prolly-my-fault/delcosews.com)](https://github.com/prolly-my-fault/delcosews.com/commits)

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
