# Portfolio Website - Complete Folder Structure

```
portfolio-nextjs/
│
├── app/                                    # Next.js App Router directory
│   ├── components/                         # Reusable React components
│   │   ├── Navbar.tsx                     # Navigation bar component
│   │   └── Footer.tsx                     # Footer component
│   │
│   ├── about/                             # About page route
│   │   └── page.tsx                       # About page component
│   │
│   ├── services/                          # Services page route
│   │   └── page.tsx                       # Services page component
│   │
│   ├── projects/                          # Projects page route
│   │   └── page.tsx                       # Projects page component
│   │
│   ├── contact/                           # Contact page route
│   │   └── page.tsx                       # Contact page component
│   │
│   ├── layout.tsx                         # Root layout (wraps all pages)
│   ├── page.tsx                           # Home page component
│   └── globals.css                        # Global CSS styles
│
├── public/                                # Static assets (images, icons, etc.)
│   └── (place your images here)
│
├── node_modules/                          # Dependencies (auto-generated)
│
├── .next/                                 # Build output (auto-generated)
│
├── package.json                           # Project dependencies and scripts
├── package-lock.json                      # Dependency lock file (auto-generated)
├── tsconfig.json                          # TypeScript configuration
├── tailwind.config.ts                     # Tailwind CSS configuration
├── postcss.config.mjs                     # PostCSS configuration
├── next.config.mjs                        # Next.js configuration
├── .gitignore                             # Git ignore rules
└── README.md                              # Project documentation

```

## 📂 Directory Explanations

### `/app` Directory
The main application directory using Next.js App Router:
- **layout.tsx**: Root layout that wraps all pages (includes Navbar, Footer, global styling)
- **page.tsx**: Home page (landing page)
- **globals.css**: Global styles, fonts, animations, custom CSS

### `/app/components` Directory
Reusable UI components:
- **Navbar.tsx**: Sticky navigation bar with mobile menu
- **Footer.tsx**: Footer with links and contact info

### Route Directories (`/app/about`, `/app/services`, etc.)
Each subdirectory represents a route:
- **page.tsx**: The page component for that route
- URL structure: `/about` → `app/about/page.tsx`

### `/public` Directory
Static files accessible from the root URL:
- Add images, favicons, fonts here
- Access in code: `/image.png` → `public/image.png`

### Configuration Files
- **package.json**: Project metadata and dependencies
- **tsconfig.json**: TypeScript compiler settings
- **tailwind.config.ts**: Tailwind theme customization
- **next.config.mjs**: Next.js build configuration
- **postcss.config.mjs**: PostCSS plugins (for Tailwind)

## 🚀 Key Features by File

### layout.tsx
- Global HTML structure
- Background patterns and gradients
- Navbar and Footer inclusion
- Metadata for SEO

### page.tsx (Home)
- Hero section with CTA
- Animated elements
- Stats showcase
- Introduction section

### about/page.tsx
- Professional bio
- Skills showcase
- Tech stack with progress bars
- Highlights of strengths

### services/page.tsx
- 3 main services display
- Development process steps
- Call-to-action section

### projects/page.tsx
- 3 project showcases
- Detailed descriptions
- Feature lists
- Visual cards

### contact/page.tsx
- Contact form
- Multiple contact methods
- Availability status
- Form validation

### components/Navbar.tsx
- Responsive navigation
- Mobile hamburger menu
- Active page highlighting
- Smooth animations

### components/Footer.tsx
- Quick links
- Contact information
- Social media links
- Copyright notice

## 🎨 Styling System

### Tailwind Classes
- `bg-slate-950`: Deep dark background
- `text-primary-400`: Teal accent color
- `gradient-text`: Custom gradient text
- `animate-fade-in`: Fade-in animation
- `card-hover`: Interactive card effect

### Custom CSS (globals.css)
- Font imports (Orbitron, Rajdhani)
- Custom scrollbar styling
- Animation keyframes
- Background patterns
- Gradient utilities

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components are fully responsive with mobile-first design.
