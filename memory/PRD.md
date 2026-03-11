# Cat House (منزل القط) Website — PRD

## Project Overview
**Business:** Cat House (منزل القط) — Premium pet store specializing in cats  
**Location:** Umar Ibn Abdul Aziz Branch Rd, Az Zahra, Riyadh 12812, Saudi Arabia  
**Phone:** +966 59 522 7853  
**Google Rating:** 4.8★ (40 reviews)  
**Type:** Static marketing/landing page (React frontend, no backend)  
**Date Started:** March 2026  

---

## Architecture

### Tech Stack
- **Frontend:** React 19, Tailwind CSS, Framer Motion (animations), Lenis (smooth scroll)
- **Fonts:** Playfair Display (headings) + Manrope (body) via Google Fonts
- **Icons:** Lucide React
- **Marquee:** react-fast-marquee
- **Backend:** FastAPI (minimal, no active endpoints used by this site)
- **DB:** MongoDB (not used for current site)

### Key Files
- `src/App.js` — Main app with Lenis smooth scroll setup
- `src/components/Navbar.jsx` — Sticky nav with hamburger mobile menu
- `src/components/HeroSection.jsx` — Full-screen split hero
- `src/components/BrandsMarquee.jsx` — Scrolling brand ticker
- `src/components/AboutSection.jsx` — About with store photo + stats
- `src/components/ServicesSection.jsx` — 4 service cards
- `src/components/ReviewsSection.jsx` — 4 customer testimonials
- `src/components/GallerySection.jsx` — 9 store photos in grid
- `src/components/LocationSection.jsx` — Google Maps embed + address
- `src/components/ContactSection.jsx` — Contact form (frontend only, success state)
- `src/components/WhatsAppButton.jsx` — Floating WhatsApp CTA
- `src/components/Footer.jsx` — Dark footer with links + contact

---

## Design System
| Token | Value |
|-------|-------|
| Primary | #1A1A1A (deep charcoal) |
| Secondary | #F5F0EB (warm beige) |
| Accent | #D4AF37 (gold) |
| Background | #FFFFFF |
| Surface | #F9F9F9 |

---

## Core Requirements (Static)
- [x] English-only website
- [x] No backend needed — contact form shows success message only
- [x] WhatsApp floating button: +966 59 522 7853
- [x] Real Google Map embed for store location
- [x] Mobile-first responsive design
- [x] Smooth scroll via Lenis
- [x] Framer Motion entrance animations on all sections
- [x] SEO meta tags (cat store Riyadh, cat grooming Riyadh)

---

## What's Been Implemented (March 2026)

### Phase 1 — Full MVP Website ✅
- **Navbar** — Sticky, transparent→white on scroll, mobile hamburger menu
- **Hero Section** — Premium cat image, large heading, 4.8★ rating, CTA buttons, floating badges
- **Brands Marquee** — Dark ticker: Royal Canin, Hills, Brit, Applaws, Life Cat, Schesir, Whiskas...
- **About Section** — Store interior photo (user-provided), 4 stats cards, story text
- **Services Section** — 4 cards: Cat Sales, Grooming, Pet Supplies, Delivery (with user store photos)
- **Reviews Section** — 4 customer testimonials with star ratings and initials avatars
- **Gallery Section** — 9 user-uploaded store photos in a 3-col grid with hover effects
- **Location Section** — Google Maps iframe + address, phone, hours, Get Directions/Call Store CTAs
- **Contact Section** — Form (name, phone, message) with loading state → success message
- **WhatsApp Button** — Fixed bottom-right, pulse ring animation, links to wa.me/966595227853
- **Footer** — Dark background, logo, nav links, address, hours, copyright + SEO keywords

### Assets Used
- **Logo:** User-provided (gold paw house with Cat House text, lime-green background)
- **Store Photos:** 10 user-uploaded photos of store interior, shelves, products
- **Hero Cat Image:** Unsplash stock (elegant white cat on ornate carpet)
- **Cat Sales Image:** Unsplash stock (cute kitten)

---

## Prioritized Backlog

### P0 — Ready to Build (next session)
- Upload actual cat photos for hero when user provides them
- Add cat photos to gallery alongside store photos

### P1 — High Value Additions
- **WhatsApp Chat Widget** — More advanced (pre-filled message on click)
- **Instagram Feed Integration** — Embed latest posts from @cathouse account
- **Cats For Sale Page** — Dedicated page showcasing available cats with photos + prices
- **Booking Form** — Online grooming appointment scheduling

### P2 — Nice to Have
- Multi-language toggle (Arabic/English)
- Google Analytics integration
- Blog/tips for cat owners
- Product catalog with WhatsApp order button

---

## Next Action Items
1. User to provide cat photos (live cats from store) to replace stock hero image
2. Consider adding Instagram handle if they have one
3. Consider online catalog for cats available for sale
4. Add more store photos to gallery when available
