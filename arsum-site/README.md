# Arsum Chaudhary - Personal Portfolio

A cinematic, production-ready personal portfolio site built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Cinematic landing page** with full-screen hero, scroll-driven storytelling
- **Real routing architecture** with deep pages for About, Products, Content, and Contact
- **Dynamic case studies** powered by MDX with beautiful layouts
- **Filterable product grid** with tag-based filtering
- **Content hub** with tabs for Videos, Writing, and Book Notes
- **Contact form** with email/social links
- **Responsive design** optimized for mobile → desktop
- **Framer Motion animations** for smooth page transitions and micro-interactions
- **SEO optimized** with metadata and OpenGraph tags

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **UI Components**: Shadcn/ui
- **Content**: MDX for case studies, JSON for data
- **Icons**: Lucide React
- **Deployment**: Vercel-ready (or any Node.js host)

## 📂 Project Structure

```
arsum-site/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── products/            # Products listing + [slug] case studies
│   ├── content/             # Content hub (videos, writing, books)
│   ├── contact/             # Contact page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Landing page
│   └── globals.css          # Global styles
├── components/              # Reusable components
│   ├── ui/                  # Shadcn UI primitives
│   ├── Navbar.tsx           # Navigation with scroll behavior
│   ├── Footer.tsx           # Footer with social links
│   ├── Hero.tsx             # Full-screen hero component
│   ├── Section.tsx          # Section wrapper
│   ├── ProjectCard.tsx      # Product card component
│   ├── TimelineItem.tsx     # Timeline/highlight item
│   ├── PageTransition.tsx   # Framer Motion page wrapper
│   └── MDXComponents.tsx    # MDX components + layout
├── content/                 # MDX case studies
│   └── projects/
│       ├── mulligan-self-serve.mdx
│       └── brain-tumor-classifier.mdx
├── data/                    # Seed data (JSON)
│   ├── projects.json
│   ├── content.json
│   └── highlights.json
├── lib/                     # Utilities
│   ├── mdx.ts              # MDX loading functions
│   ├── utils.ts            # Tailwind merge utility
│   └── analytics.ts        # Analytics placeholder
├── public/                  # Static assets
│   ├── images/             # Images and videos
│   ├── assets/             # Fonts, etc.
│   └── CNAME               # Custom domain config
└── tailwind.config.ts       # Tailwind configuration
```

## 🎨 Design System

### Colors
- **Background**: `#000000` (black)
- **Foreground**: `#FFFFFF` (white)
- **Primary (accent)**: `#FF6B00` (orange)
- **Depth grays**: `#121212`, `#1A1A1A`, `#2B2B2B`
- **Hover gradient**: `#8B0000` → `#FF4500` (red to orange)

### Typography
- **Display** (headings): Playfair Display
- **Body** (UI text): Inter

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ (or npm/yarn/pnpm)
- Git

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables (optional for analytics)
cp .env.example .env.local
# Edit .env.local and add your analytics ID if needed
```

### Development

```bash
# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
# Build the app
npm run build

# Start production server
npm start
```

### Linting & Formatting

```bash
# Run ESLint
npm run lint

# Format code with Prettier
npm run format
```

## 📝 Content Management

### Adding a New Project

1. **Add project metadata** to `data/projects.json`:
```json
{
  "title": "Project Name",
  "slug": "project-slug",
  "summary": "One-line description",
  "impact": ["Metric 1", "Metric 2"],
  "stack": ["Tech 1", "Tech 2"],
  "cover": "/images/cover.jpg",
  "tags": ["AI", "Web"],
  "links": {
    "demo": "https://...",
    "repo": "https://github.com/...",
    "video": "https://youtube.com/..."
  }
}
```

2. **Create a case study** at `content/projects/project-slug.mdx`:
```mdx
---
title: "Project Name"
date: "2024-12-01"
problem: "What problem does this solve?"
solution: "How did you solve it?"
role: "Your role"
stack: ["Tech 1", "Tech 2"]
impact:
  - "Impact 1"
  - "Impact 2"
---

## Overview
Your case study content...
```

### Adding Content (Videos/Articles/Books)

Edit `data/content.json` to add new entries under `videos`, `articles`, or `books`.

### Updating Highlights

Edit `data/highlights.json` to change the landing page impact highlights.

## 🎯 Navbar Behavior

The navbar has a unique routing behavior:

- **About, Products, Content, Contact**: Standard route navigation
- **ARSUM (center name)**:
  - If on `/`: Scrolls down to the next section
  - If on any other page: Navigates to `/`

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Set custom domain in Vercel settings (or use `public/CNAME` for GitHub Pages)
4. Deploy!

The app is production-ready and will automatically:
- Generate static pages where possible
- Optimize images with Next.js Image
- Bundle and minify assets

### Custom Domain

The `public/CNAME` file is included for custom domain support. Update it with your domain (e.g., `arsumnc.com`).

## 📊 Analytics

To enable analytics:

1. Add your analytics ID to `.env.local`:
```
NEXT_PUBLIC_ANALYTICS_ID=G-XXXXXXXXXX
```

2. (Optional) Add the analytics script to `app/layout.tsx` if using Google Analytics:
```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${ANALYTICS_ID}');
  `}
</Script>
```

## 🛠 Customization

### Changing Colors

Edit `tailwind.config.ts` to customize the color palette.

### Adding New Pages

1. Create a new directory in `app/` (e.g., `app/blog/`)
2. Add `page.tsx` inside
3. Update the Navbar component to add the link

### Modifying Animations

Edit `components/PageTransition.tsx` or individual component animations to customize Framer Motion settings.

## 🐛 Known Issues & Fixes

- **Workspace root warning**: If you see a warning about multiple lockfiles, add `outputFileTracingRoot: __dirname` to `next.config.js` (non-critical).

## 📄 License

This project is open-source and available under the MIT License.

## 🙏 Acknowledgments

- **Next.js** by Vercel
- **TailwindCSS** by Tailwind Labs
- **Shadcn/ui** by @shadcn
- **Framer Motion** by Framer
- Template inspired by the cinematic storytelling approach of modern portfolio sites

---

**Built with ❤️ by Arsum Chaudhary**

For questions or feedback, visit [/contact](http://localhost:3000/contact).
