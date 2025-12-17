# ChainAgnostic Homepage - Project Structure Documentation

> **For AI Agents**: This document provides a comprehensive overview of the project architecture, file organization, and conventions used in this codebase. Use this as your primary reference when working with this project.

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Directory Structure](#directory-structure)
- [Routing Architecture](#routing-architecture)
- [Component Organization](#component-organization)
- [File Naming Conventions](#file-naming-conventions)
- [Import Aliases](#import-aliases)
- [Styling Approach](#styling-approach)
- [Assets Management](#assets-management)

---

## 🎯 Project Overview

This is the **ChainAgnostic homepage** - a Next.js-based website showcasing the ChainAgnostic initiative, its members, and working groups.

**Key Pages:**
1. **Home** (`/`) - Main landing page with hero, purpose, meetings, discord, and CTA sections
2. **Members** (`/members`) - Information about members, roles, board, and how to join
3. **Groups** (`/groups`) - Overview of working groups and form to create new groups

---

## 🛠 Technology Stack

```json
{
  "framework": "Next.js 16.0.10",
  "react": "19.2.1",
  "typescript": "^5",
  "styling": "Tailwind CSS v4 (with PostCSS)",
  "runtime": "Turbopack (Next.js)",
  "routing": "Next.js App Router"
}
```

**Important Notes:**
- Uses **Next.js App Router** (not Pages Router)
- **Tailwind CSS v4** (latest) - uses `@import "tailwindcss"` in globals.css, no separate config file
- **TypeScript** with strict mode enabled
- Path aliases configured: `@/*` maps to project root

---

## 📁 Directory Structure

```
/Users/pedrogomes/_chainagnostic/homepage/
├── app/                          # Next.js App Router pages
│   ├── members/                  # /members route
│   │   └── page.tsx             # Members page component
│   ├── groups/                   # /groups route
│   │   └── page.tsx             # Groups page component
│   ├── favicon.ico              # Site favicon
│   ├── globals.css              # Global styles + Tailwind imports
│   ├── layout.tsx               # Root layout (wraps all pages)
│   └── page.tsx                 # Home page (/) component
│
├── components/                   # React components
│   ├── layout/                  # Layout components (header, footer)
│   │   ├── footer.tsx
│   │   └── header.tsx
│   │
│   ├── sections/                # Page section components
│   │   ├── home/               # Home page sections
│   │   │   ├── cta-section.tsx
│   │   │   ├── discord-section.tsx
│   │   │   ├── hero-section.tsx
│   │   │   ├── meetings-section.tsx
│   │   │   └── purpose-section.tsx
│   │   │
│   │   ├── members/            # Members page sections
│   │   │   ├── board-section.tsx
│   │   │   ├── join-section.tsx
│   │   │   ├── members-hero.tsx
│   │   │   ├── members-table.tsx
│   │   │   └── roles-section.tsx
│   │   │
│   │   └── groups/             # Groups page sections
│   │       ├── form-new-group-section.tsx
│   │       ├── groups-hero.tsx
│   │       └── working-groups-section.tsx
│   │
│   └── ui/                      # Reusable UI components
│       ├── feature-card.tsx
│       └── status-badge.tsx
│
├── public/                       # Static assets
│   ├── images/                  # Image assets
│   │   ├── algorand.png         # Blockchain logos
│   │   ├── bitcoin.png
│   │   ├── cosmos.png
│   │   ├── ethereum.png
│   │   ├── filecoin.png
│   │   ├── hedera.png
│   │   ├── polkadot.png
│   │   ├── solana.png
│   │   ├── stellar.png
│   │   └── sui.png
│   ├── logo.jpg                 # ChainAgnostic logo
│   ├── *.svg                    # Default Next.js SVG assets
│
├── node_modules/                # Dependencies (auto-generated)
├── .next/                       # Next.js build output (auto-generated)
│
├── eslint.config.mjs            # ESLint configuration
├── next-env.d.ts                # Next.js TypeScript declarations
├── next.config.ts               # Next.js configuration
├── package.json                 # Project dependencies and scripts
├── package-lock.json            # Lock file for dependencies
├── postcss.config.mjs           # PostCSS configuration (Tailwind)
├── tsconfig.json                # TypeScript configuration
├── PROJECT_STRUCTURE.md         # This file
└── README.md                    # Project README
```

---

## 🛣 Routing Architecture

**Pattern:** Next.js App Router with file-system based routing

| URL Path     | File Location              | Page Component   |
|-------------|---------------------------|------------------|
| `/`         | `app/page.tsx`            | Home page        |
| `/members`  | `app/members/page.tsx`    | Members page     |
| `/groups`   | `app/groups/page.tsx`     | Groups page      |

### Root Layout (`app/layout.tsx`)

The root layout wraps ALL pages and typically includes:
- HTML structure
- Metadata configuration
- Global fonts
- Header/Footer components (if persistent across pages)
- Global CSS imports

**Example structure:**
```typescript
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
```

---

## 🧩 Component Organization

### Component Categories

#### 1. **Layout Components** (`components/layout/`)
Persistent UI elements that appear across multiple pages.

- `header.tsx` - Site header with navigation
- `footer.tsx` - Site footer

**Usage:** Typically imported in `app/layout.tsx`

---

#### 2. **Section Components** (`components/sections/`)
Large page sections organized by route.

**Organization Pattern:**
```
components/sections/
  ├── home/        # Sections used only on home page
  ├── members/     # Sections used only on members page
  └── groups/      # Sections used only on groups page
```

**Home Page Sections:**
- `hero-section.tsx` - Main hero/landing section
- `purpose-section.tsx` - Purpose/mission section
- `meetings-section.tsx` - Meetings information
- `discord-section.tsx` - Discord community section
- `cta-section.tsx` - Call-to-action section

**Members Page Sections:**
- `members-hero.tsx` - Members page hero
- `roles-section.tsx` - Member roles information
- `board-section.tsx` - Board members showcase
- `members-table.tsx` - Table of all members
- `join-section.tsx` - How to join section

**Groups Page Sections:**
- `groups-hero.tsx` - Groups page hero
- `working-groups-section.tsx` - List of working groups
- `form-new-group-section.tsx` - Form to create new working group

**Usage:** Import multiple sections into page components

---

#### 3. **UI Components** (`components/ui/`)
Small, reusable UI elements used across different sections.

- `feature-card.tsx` - Card component for features
- `status-badge.tsx` - Badge component for status indicators

**Characteristics:**
- Highly reusable
- Accept props for customization
- No page-specific logic
- Should be pure/presentational when possible

---

## 📝 File Naming Conventions

### Rules for AI Agents:

1. **Files:** Always use `kebab-case` for file names
   - ✅ `hero-section.tsx`
   - ❌ `HeroSection.tsx`
   - ❌ `heroSection.tsx`

2. **Components:** Use `PascalCase` for component names (inside files)
   - ✅ `export default function HeroSection()`
   - ❌ `export default function heroSection()`

3. **Directories:** Use `kebab-case` for folder names
   - ✅ `components/sections/home/`
   - ❌ `components/sections/Home/`

4. **File Extensions:**
   - Use `.tsx` for files containing JSX/React components
   - Use `.ts` for pure TypeScript files (utilities, types)
   - Use `.css` for stylesheets
   - Use `.mjs` for ES module config files

---

## 🔗 Import Aliases

The project uses path aliases configured in `tsconfig.json`:

```json
{
  "paths": {
    "@/*": ["./*"]
  }
}
```

### Usage Examples:

```typescript
// ✅ CORRECT: Use @ alias
import HeroSection from '@/components/sections/home/hero-section'
import FeatureCard from '@/components/ui/feature-card'

// ❌ AVOID: Relative imports from deeply nested files
import HeroSection from '../../../components/sections/home/hero-section'
```

### Import Pattern for Page Components:

```typescript
// app/page.tsx (Home page)
import HeroSection from '@/components/sections/home/hero-section'
import PurposeSection from '@/components/sections/home/purpose-section'
import MeetingsSection from '@/components/sections/home/meetings-section'
import DiscordSection from '@/components/sections/home/discord-section'
import CTASection from '@/components/sections/home/cta-section'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PurposeSection />
      <MeetingsSection />
      <DiscordSection />
      <CTASection />
    </main>
  )
}
```

---

## 🎨 Styling Approach

### Tailwind CSS v4 Setup

**Configuration Location:**
- `app/globals.css` - Main stylesheet with Tailwind import
- `postcss.config.mjs` - PostCSS configuration with Tailwind plugin

**Key Difference from v3:**
- No `tailwind.config.ts` file needed
- Uses `@import "tailwindcss"` directive
- Theme customization via `@theme inline` in globals.css

### globals.css Structure:

```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

### Component Styling Pattern:

```typescript
// Use Tailwind utility classes directly in JSX
export default function HeroSection() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-foreground">
          Welcome to ChainAgnostic
        </h1>
      </div>
    </section>
  )
}
```

---

## 🖼 Assets Management

### Public Directory (`public/`)

All files in `public/` are served at the root URL path.

**Access Pattern:**
```typescript
// File location: public/logo.jpg
// URL path: /logo.jpg

import Image from 'next/image'

<Image src="/logo.jpg" alt="ChainAgnostic Logo" width={200} height={100} />
```

### Blockchain Logo Images (`public/images/`)

Available blockchain logos:
- Algorand (`/images/algorand.png`)
- Bitcoin (`/images/bitcoin.png`)
- Cosmos (`/images/cosmos.png`)
- Ethereum (`/images/ethereum.png`)
- Filecoin (`/images/filecoin.png`)
- Hedera (`/images/hedera.png`)
- Polkadot (`/images/polkadot.png`)
- Solana (`/images/solana.png`)
- Stellar (`/images/stellar.png`)
- Sui (`/images/sui.png`)

**Usage Example:**
```typescript
<Image 
  src="/images/ethereum.png" 
  alt="Ethereum" 
  width={48} 
  height={48} 
/>
```

---

## 🚀 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

**Dev Server:**
- Default URL: `http://localhost:3000`
- Uses Turbopack for fast refresh
- Hot module replacement enabled

---

## 🤖 AI Agent Guidelines

### When Creating New Components:

1. **Determine component type:**
   - Layout component? → `components/layout/`
   - Page section? → `components/sections/{page-name}/`
   - Reusable UI? → `components/ui/`

2. **Follow naming conventions:**
   - File: `kebab-case.tsx`
   - Component: `PascalCase`
   - Props interface: `{ComponentName}Props`

3. **Use TypeScript:**
   - Define prop interfaces
   - Use proper typing for all props
   - Export components with `export default`

4. **Import pattern:**
   - Always use `@/` alias for imports
   - Import only what you need

5. **Styling:**
   - Use Tailwind utility classes
   - Follow existing design patterns
   - Ensure dark mode compatibility

### When Creating New Pages:

1. **Create route directory:**
   ```bash
   mkdir -p app/{route-name}
   ```

2. **Create page component:**
   ```typescript
   // app/{route-name}/page.tsx
   import SectionOne from '@/components/sections/{route-name}/section-one'
   
   export default function PageName() {
     return (
       <main>
         <SectionOne />
       </main>
     )
   }
   ```

3. **Create section directory:**
   ```bash
   mkdir -p components/sections/{route-name}
   ```

4. **Create section components as needed**

### When Modifying Existing Code:

1. **Read existing patterns first**
2. **Match the established code style**
3. **Update related documentation**
4. **Test imports and routing**
5. **Check for TypeScript errors**

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React Documentation](https://react.dev)

---

## 🔄 Version History

- **v1.0** - Initial project structure setup
- Next.js 16.0.10 with App Router
- Tailwind CSS v4 integration
- Three-page architecture (Home, Members, Groups)

---

**Last Updated:** December 17, 2025

**Maintained By:** ChainAgnostic Team

**For AI Agents:** This document should be your first reference when working on this project. Always verify file locations and naming conventions before creating or modifying files.

