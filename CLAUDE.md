# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 marketing/landing page for "Bins" - a thrifting marketplace app. The site features an iPhone mockup with autoplay video, modals for FAQ/Terms/Privacy, and a clean App Store-style UI.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm start
```

Development server runs at http://localhost:3000

## Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **React**: 19.1.0 (client components with 'use client' directive)
- **Styling**: Tailwind CSS 4 with custom fonts (Jost, Inter, Geist)
- **TypeScript**: Strict typing throughout

## Architecture

### App Structure

- `app/page.tsx` - Main landing page (client component with modal state management)
- `app/layout.tsx` - Root layout with Google Fonts configuration
- `components/` - Reusable UI components:
  - `AutoplayVideo.tsx` - Custom video player with loading state and fallback
  - `Modal.tsx` - Accessible modal with keyboard/escape handling
  - `FAQContent.tsx`, `TermsContent.tsx`, `PrivacyContent.tsx` - Modal content

### Video Autoplay System

The `AutoplayVideo` component handles cross-browser video playback:
- Loading state displays logo on branded background
- Supports both MP4 and MOV sources
- Implements `autoPlay`, `loop`, `muted`, `playsInline` for maximum browser compatibility
- Error handling with fallback logo display
- See `AUTOPLAY_SOLUTIONS.md` for detailed browser autoplay research

**Known Issue**: Chromium browsers (Chrome, Arc, Edge) have stricter autoplay policies than Safari. Current implementation works best in Safari. Potential solutions documented in `AUTOPLAY_SOLUTIONS.md` include React Player integration, user interaction detection, and Intersection Observer patterns.

### Video Positioning

Videos are positioned inside an iPhone bezel mockup (`/public/images/iphone-mockup.png`):
- Video dimensions: 535px × 246px with 25px border radius
- Positioned absolute with 8px top offset, centered horizontally
- Maintains responsive scaling via parent container

### Modal System

Modal implementation features:
- Portal-style rendering with z-index 99999
- Body scroll lock when open
- Escape key handling
- Click-outside-to-close via backdrop
- Prevents modal stacking (single `activeModal` state)

## Styling

- Custom Tailwind configuration with Jost (headings) and Inter (body) fonts
- Neumorphic design elements (e.g., info bar with custom box-shadow)
- Radial gradient background: `#FFFFFF → #F5F5F5 → #E5E5E5`
- Responsive breakpoints: sm/md/lg/xl for mobile-first design

## Security

Content Security Policy configured in `next.config.ts`:
- Allows `unsafe-eval` and `unsafe-inline` for scripts (required by Next.js dev)
- Google Fonts whitelisted for styles and fonts
- Media restricted to self, data URLs, and blobs

## Public Assets

All assets in `/public/images/`:
- `iphone-mockup.png` - Device frame overlay
- `logo.svg` - App icon (32×14px default, scales to 60×26px in loading state)
- `bins_new.mp4` / `bins_new.mov` - App demo videos

## Development Notes

- All pages and components use TypeScript with explicit prop interfaces
- Client-side interactivity requires `'use client'` directive (modals, video, state)
- Video component expects exact positioning styles passed via props
- Modal content components should be self-contained with their own styling
