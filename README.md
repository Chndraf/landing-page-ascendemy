# Ascendemy Landing Page (Next.js)

Platform ujian online modern untuk tryout, simulasi ujian, dan kompetisi.

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **CSS Modules** - Custom styling (ported from original)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
nextjs-ascendemy/
├── app/
│   ├── layout.tsx       # Root layout with font
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Sticky navbar with scroll progress
│   ├── Hero.tsx         # Hero section with interactive mock test
│   ├── Stats.tsx        # Animated statistics
│   ├── Tryout.tsx       # Tryout packages carousel
│   ├── Kompetisi.tsx    # Competition cards
│   ├── News.tsx         # Auto-scrolling news marquee
│   ├── Testimoni.tsx    # Testimonials grid
│   ├── FAQ.tsx          # Accordion FAQ
│   ├── Footer.tsx       # Footer with contact info
│   └── SVGDefs.tsx      # Reusable SVG icons
└── public/
    └── img/             # Images from original project

```

## Features

✅ Fully responsive design
✅ Interactive mock test simulator
✅ Smooth scroll animations
✅ Navbar with scroll progress indicator
✅ Auto-scrolling news marquee
✅ Carousel for tryout packages
✅ FAQ accordion
✅ Optimized images with Next.js Image component

## Build

```bash
npm run build
npm start
```

## Notes

- Converted from vanilla HTML/CSS/JS to Next.js
- Maintained original design and animations
- Added TypeScript for type safety
- Component-based architecture for maintainability
- Images located in `/public/img/`

## Images Used

- `berita (1-9).png` - News cards
- `olimpiade.png` - Competition poster
- `try-out-tka.png` - Tryout package poster

---

© 2026 Ascendemy.id. All rights reserved.
