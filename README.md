# Vanshika Ghatwal— Student Portfolio

A clean, minimal portfolio website built for a B.Tech CSE student. Designed to be fast, accessible, and easy to customize.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css         # Global styles + Tailwind
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page (all sections)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav with dark mode toggle + mobile menu
│   │   └── Footer.tsx      # Footer with social links
│   ├── sections/
│   │   ├── Hero.tsx        # Hero with avatar, CTAs, location badges
│   │   ├── About.tsx       # About me with highlights
│   │   ├── Skills.tsx      # Skill categories with badges
│   │   ├── Projects.tsx    # Project cards grid
│   │   ├── Education.tsx   # Education timeline + achievements
│   │   ├── Resume.tsx      # Resume download card
│   │   └── Contact.tsx     # Contact links
│   └── ui/
│       ├── FadeIn.tsx      # Scroll-triggered fade-in wrapper
│       └── ProjectCard.tsx # Reusable project card
├── lib/
│   └── data.ts             # All content data (edit this to personalize)
├── types/
│   └── index.ts            # TypeScript interfaces
└── public/
    └── resume.pdf          # Replace with your actual resume
```

## Customization

### 1. Update your personal info

Edit `lib/data.ts` to update:

- Your name (also update in `Navbar.tsx`, `Hero.tsx`, `Footer.tsx`, `Contact.tsx`)
- Skills categories
- Projects (title, description, tech, links)
- Achievements

### 2. Add your resume

Replace `public/resume.pdf` with your actual resume file.

### 3. Update contact info

Edit the `contacts` array in `components/sections/Contact.tsx`.

### 4. Update metadata

Edit the metadata in `app/layout.tsx` with your real name and description.

### 5. Change your name globally

Search for "Aryan Sharma" across all files and replace with your name.

## Deployment on Vercel

1. Push this project to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel will auto-detect Next.js — no additional config needed
4. Deploy!

## Dark Mode

Dark mode is toggled via the moon/sun button in the navbar. The preference is saved to `localStorage` and respects the user's system preference on first visit.

## Features

- ✅ Fully responsive (mobile-first)
- ✅ Dark mode with localStorage persistence
- ✅ Smooth scroll navigation
- ✅ Scroll-triggered fade-in animations
- ✅ SEO metadata
- ✅ Accessible (ARIA labels, semantic HTML)
- ✅ Mobile hamburger menu
- ✅ Zero layout shift on dark mode toggle
- ✅ Vercel-ready, no extra config
