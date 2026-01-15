# Phnom Penh Opera Festival Website

## Overview

A bilingual (English/Khmer) festival website for Phnom Penh Opera, Cambodia's premier international opera festival. The site features a premium, elegant design inspired by world-class arts festival websites like Salzburg Festival and Glyndebourne. Built as a full-stack application with React frontend and Express backend, supporting locale-based routing for English (`/en`) and Khmer (`/km`) paths.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing with locale-prefixed paths (`/en/*`, `/km/*`)
- **Styling**: Tailwind CSS with custom design system following premium arts festival aesthetic
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **State Management**: TanStack React Query for server state, React Context for locale management
- **Build Tool**: Vite with custom configuration for path aliases

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Server**: HTTP server with Vite dev middleware in development, static file serving in production
- **API Structure**: RESTful endpoints under `/api/*` prefix
- **Build Process**: Custom esbuild script that bundles server with selective dependency externalization

### Routing Strategy
- Root `/` redirects to `/en`
- All pages support both `/en` and `/km` locale prefixes
- Locale context preserves path when switching languages
- Pages: Home, Programme, Don Giovanni (production detail), Festival, Sustainability, Cast, Sponsors, Contact, Terms

### Design System
- **Typography**: Playfair Display (serif headings), Inter (sans-serif body), Noto Serif/Sans Khmer for Khmer text
- **Colors**: Warm cream background (#FAF7F2), deep red primary (#8B1538), gold accents (#D4AF37)
- **Layout**: Max-width 7xl container, consistent spacing using Tailwind units

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` with Zod validation via drizzle-zod
- **Current Models**: Users table, contact message validation schema
- **Storage**: In-memory storage implementation with interface for future database integration

## External Dependencies

### Database
- **PostgreSQL**: Primary database (requires `DATABASE_URL` environment variable)
- **Drizzle Kit**: Database migrations and schema push (`npm run db:push`)

### Third-Party Services
- **External Ticketing**: Links to `https://ppoi-front.vercel.app/` for ticket purchases

### Key NPM Packages
- **UI**: Full shadcn/ui component suite (Radix UI primitives, Lucide icons)
- **Forms**: React Hook Form with Zod resolver
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Date Handling**: date-fns
- **Carousel**: Embla Carousel React