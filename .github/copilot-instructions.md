# De Angelika Beauty Lounge - AI Coding Agent Instructions

## Project Overview
Single-page Next.js 14 (App Router) beauty salon website with smooth-scroll navigation. Business focus: Nigerian beauty services with WhatsApp booking integration.

## Architecture & Structure

### Component Organization
- **Page Components**: Located in `src/components/` (e.g., `About.tsx`, `Services.tsx`, `Gallery.tsx`)
- **UI Primitives**: Shadcn/ui components in `src/components/ui/` - DO NOT modify manually, use CLI
- **Main Page**: [app/page.tsx](app/page.tsx) imports and renders section components with `id` anchors for smooth scrolling

### Navigation Pattern
Single-page app with anchor-based navigation:
```tsx
// Example from Navbar.tsx
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
```
All major sections wrapped in `<div id="section-name">` in [app/page.tsx](app/page.tsx).

## Styling System

### Custom Design Tokens
Defined in [app/globals.css](app/globals.css) as CSS variables (HSL format):
- **Brand Colors**: `--tan`, `--tan-light`, `--tan-dark`, `--gold`, `--gold-light`
- **Effects**: `--shadow-elegant`, `--shadow-card`, `--transition-smooth`
- Use `transition-smooth` class for consistent 0.3s cubic-bezier animations

### Typography
Two Google Fonts loaded in [app/layout.tsx](app/layout.tsx):
- `Playfair Display` (headings) - `--font-playfair`
- `Poppins` (body) - `--font-poppins`

### Tailwind Usage
- Prefer Tailwind utilities over custom CSS
- Use `cn()` from [src/lib/utils.ts](src/lib/utils.ts) for conditional classes
- Custom colors: `bg-tan`, `text-tan-dark`, `border-tan/30` (with opacity)

## Key Conventions

### Client Components
All interactive components use `"use client"` directive (Next.js App Router requirement). Examples: [src/components/Navbar.tsx](src/components/Navbar.tsx), [src/components/HeroSlider.tsx](src/components/HeroSlider.tsx).

### WhatsApp Integration
Hardcoded phone number pattern: `https://wa.me/2348000000000?text=...`
- Used in booking buttons across multiple components
- Message text is URL-encoded with `encodeURIComponent()`

### SEO & Structured Data
- Comprehensive metadata in [app/layout.tsx](app/layout.tsx) with Open Graph and Twitter cards
- JSON-LD schemas in separate components: [src/components/OrganizationSchema.tsx](src/components/OrganizationSchema.tsx), [src/components/WebSiteSchema.tsx](src/components/WebSiteSchema.tsx)
- Use `"use client"` with hydration guards (`useState` + `useEffect` for `window` access)

### Provider Pattern
Global providers configured in [src/components/providers.tsx](src/components/providers.tsx):
- `QueryClientProvider` (TanStack Query)
- `ThemeProvider` (next-themes, default: light)
- `TooltipProvider`, `Toaster`, `Sonner`

Wrap layout children in [app/layout.tsx](app/layout.tsx).

## Development Workflow

### Installation & Running
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (port 3000)
npm run build        # Production build
npm start            # Start production server
```

### Adding Shadcn/ui Components
```bash
npx shadcn@latest add [component-name]
```
Config: [components.json](components.json) - uses path aliases (`@/components`, `@/lib`, etc.)

### TypeScript Configuration
- **Strict mode disabled**: `"strict": false` in [tsconfig.json](tsconfig.json)
- Path alias: `@/*` maps to `./src/*`
- Target: ES2017 (supports older browsers)

## Common Tasks

### Adding a New Section
1. Create component in `src/components/NewSection.tsx`
2. Import and render in [app/page.tsx](app/page.tsx) with `<div id="new-section">`
3. Add navigation link to [src/components/Navbar.tsx](src/components/Navbar.tsx)

### Modifying Design Tokens
Edit CSS variables in [app/globals.css](app/globals.css) `:root` block. Affects all components using `--tan`, `--gold`, etc.

### Image Assets
- Hero images: `/assets/hero-*.jpg` (referenced in [src/components/HeroSlider.tsx](src/components/HeroSlider.tsx))
- Use Next.js `<Image>` for optimization when adding new images
- Configure `remotePatterns` in [next.config.mjs](next.config.mjs) for external images

## Important Notes

- **Mobile-First**: Components use responsive Tailwind classes (`md:`, `lg:`)
- **Accessibility**: Include `aria-label` on icon-only buttons (see [src/components/HeroSlider.tsx](src/components/HeroSlider.tsx) navigation)
- **No API Routes**: Static site, no `/app/api` directory
- **Hydration**: Client components accessing `window` must guard with `useState` + `useEffect` to avoid hydration mismatches
