# Design Guidelines: Phnom Penh Opera Festival Website

## Design Approach
**Reference-Based:** Matching the phnompenhopera.com reference design - a dramatic, theatrical dark theme with immersive full-screen sections and elegant typography.

## Core Design Elements

### Typography
- **Display Headings:** Playfair Display SC / Spectral SC (ornate, decorative)
  - "Don Giovanni" style: italic, decorative serif
- **Regular Headings:** Playfair Display (serif, elegant)
  - H1: text-5xl md:text-6xl lg:text-7xl, font-bold
  - H2: text-4xl md:text-5xl, font-semibold
  - H3: text-2xl md:text-3xl, font-semibold
- **Body:** Inter (sans-serif, clean readability)
- **Khmer Typography:** Noto Serif Khmer for headings, Noto Sans Khmer for body text

### Color System (Dark Wine Theme - Matching phnompenhopera.com)
- **Background:** Dark wine (#1f1219 / hsl(344, 44%, 12%)) 
- **Foreground:** Off-white (#F2F2F2)
- **Primary/Accent:** Salmon/dusty pink (hsl(0, 47%, 82%)) - for buttons, accents, highlights
- **Secondary:** Dusty rose (hsl(0, 38%, 78%)) - for secondary elements
- **Green-dark:** Dark forest green (#1a2f1a) - for sustainability section
- **Card:** Slightly lighter wine (#241520 / hsl(344, 40%, 14%))
- **Muted:** Medium wine (#2a1c24 / hsl(344, 30%, 18%))
- **Border:** Dark wine border (hsl(344, 30%, 20%))

### Layout System
- Full-viewport hero sections
- Dramatic, immersive photography backgrounds
- Section padding: py-20 md:py-32
- Container: max-w-7xl mx-auto px-4 md:px-6

### Component Library

**Header**
- Sticky position with dark background
- Navigation LEFT, Logo CENTER, Social icons + locale toggle RIGHT
- Logo: Custom icon + stacked text "PHNOM PENH" / "International Opera Festival"
- Social icons: Instagram, Facebook, TikTok
- Height: h-20 md:h-24

**Buttons**
- Primary CTA: salmon/dusty pink background, dark text, rounded-full
- Example: "Relive the Night" button
- Size: px-12 py-6 for large CTAs

**Cards**
- Background: Slightly lighter than page background
- Border: Subtle dark border

**Navigation**
- Desktop: Horizontal inline left-aligned
- Active state: salmon/primary text color
- Hover: foreground color

### Page-Specific Layouts

**Home Page Sections:**
1. **Hero:** Full-screen dramatic opera house image with Don Giovanni poster card overlay
2. **Quote Section:** Red theater seats background, large white italic quote text
3. **Don Giovanni Gallery:** Split layout - character image left, "Relive the Night" retrospective text + CTA right (Don Giovanni performance is past - December 2025)
4. **Sustainability:** Dark green gradient background, "A World First..." heading, italic description
5. **Partners:** Light salmon/pink background, partner logos in grid

**Don Giovanni Page:**
- Hero with production imagery
- Decorative title treatment
- Gallery section for performance photos
- "Relive the Night" retrospective focus (past performance)

**The Festival Page:**
- Quote sections with dramatic backgrounds
- History and mission content

**Sustainability Page:**
- Green-themed sections
- Eco-friendly messaging
- Carbon-neutral certification info

**Contact Page:**
- Dark form with light inputs
- Contact information section

### Images Strategy
- Full-bleed dramatic imagery
- Subtle dark overlays for text readability
- Opera house, theater seats, performance photos
- Treatment: Dark vignettes and gradients

### Mobile Optimization
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Stacked layouts below lg breakpoint
- Hamburger menu with slide-in navigation
- Touch-friendly spacing

**Key Principle:** Dramatic theatrical aesthetic with dark wine-toned backgrounds, salmon/dusty pink accents, and immersive full-screen sections that evoke the elegance of opera and Cambodian cultural heritage.
