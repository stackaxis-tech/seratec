# Sredatec Solutions

Official corporate and product showcase website for **Sredatec Solutions**, featuring a light-blue and white visual identity, glassmorphism UI, Framer Motion interface animations, and a lazy-loaded Three.js / React Three Fiber 3D hero scene.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **3D & VFX:** Three.js, `@react-three/fiber`, `@react-three/drei`
- **Icons:** Lucide React

## Color Palette

| Token | Hex | Usage |
| --- | --- | --- |
| White | `#FFFFFF` | Primary section backgrounds and glass card bases |
| Ice Blue | `#EAF7FF` | Soft surface gradients and subtle accents |
| Sky Blue | `#B9E5FF` | Glass borders, ambient glows, and wave gradients |
| Cyan | `#27B9EC` | Highlights, particles, icons, and interactive glows |
| Royal Blue | `#1769C2` | Primary CTAs, links, and gradient accents |
| Deep Navy | `#063B85` | Primary typography and high-contrast headings |

## Sections & Features

- **Navigation (`src/components/Navbar.tsx`)**: Sticky glassmorphic header with the Sredatec Solutions logo and responsive mobile drawer.
- **Hero & 3D VFX (`src/components/HeroSection.tsx`, `src/components/vfx/HeroCanvas3D.tsx`)**: Features the *"Technology That Moves Businesses Forward."* headline alongside a lazy-loaded 3D scene (animated wave surface, liquid-glass ribbon loop, floating sculptural torus-knot, geometric polyhedra, and capped blue particle field) with scroll and pointer parallax.
- **Fallbacks & Accessibility (`src/components/vfx/HeroFallbackVFX.tsx`, `src/hooks/useMediaCapabilities.ts`)**: Automatic WebGL capability check, React error boundary, and `prefers-reduced-motion` support (`MotionConfig reducedMotion="user"` and CSS reduced-motion rules) with a static SVG/CSS visual fallback.
- **Products (`src/components/ProductsSection.tsx`)**: Glassmorphism showcase cards with custom dashboard mockups for:
  - **Hotel Management Application**
  - **Lawyer Diary Application**
- **Services (`src/components/ServicesSection.tsx`)**: Five service cards covering Custom Software Development, Web Application Development, Mobile Application Development, UI/UX Design, and Cloud & DevOps.
- **Leadership (`src/components/FounderSection.tsx`)**: White and light-blue split layout for **Budhan Murali** (*Founder & Chief Executive Officer*).
- **Contact (`src/components/ContactSection.tsx`)**: White glass-effect contact form over a light-blue gradient with direct WhatsApp integration (`+91 99959 55252` / `https://wa.me/919995955252`).

## Project Structure

```text
public/
  images/
    budhan-murali.jpg
    sredatec-logo.jpg
src/
  components/
    vfx/
      HeroCanvas3D.tsx
      HeroFallbackVFX.tsx
      SectionBackgroundVFX.tsx
    ContactSection.tsx
    Footer.tsx
    FounderSection.tsx
    HeroSection.tsx
    Navbar.tsx
    ProductsSection.tsx
    ServicesSection.tsx
  data/
    siteData.ts
  hooks/
    useMediaCapabilities.ts
  App.tsx
  index.css
  main.tsx
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Type-check and build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```
