# G.G. Induwara Deshan - Portfolio Website

A professional, modern portfolio website built with Next.js 14 (App Router), Tailwind CSS, and Lucide React icons.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Responsive Design**: Fully mobile-friendly and optimized for all devices
- **Dark Theme**: Professional dark mode with teal/cyan accents
- **Smooth Animations**: CSS animations for engaging user experience
- **SEO Optimized**: Built-in metadata and SEO best practices
- **Performance**: Fast page loads with Next.js optimizations

## 📁 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation component
│   │   └── Footer.tsx          # Footer component
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── services/
│   │   └── page.tsx            # Services page
│   ├── projects/
│   │   └── page.tsx            # Projects page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles
├── public/                     # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## 🎨 Customization

### Colors
The color scheme uses Tailwind's teal/cyan palette. To customize:
- Edit `tailwind.config.ts` for theme colors
- Modify `globals.css` for custom CSS variables

### Content
Update personal information in:
- `app/page.tsx` - Home page hero section
- `app/about/page.tsx` - Bio and tech stack
- `app/projects/page.tsx` - Project details
- `app/contact/page.tsx` - Contact information

### Fonts
Currently uses:
- **Display Font**: Orbitron (for headings)
- **Body Font**: Rajdhani (for content)

Change fonts in `app/globals.css` by updating the Google Fonts import.

## 📄 Pages Overview

### Home (`/`)
- Hero section with name and title
- Call-to-action buttons
- Stats showcase
- Quick about section

### About (`/about`)
- Professional bio
- Skills and expertise
- Tech stack with proficiency levels
- Highlights of strengths

### Services (`/services`)
- Service offerings (3 main services)
- Development process
- Call-to-action

### Projects (`/projects`)
- Portfolio showcase (3 projects)
- Project details and features
- Visual representations

### Contact (`/contact`)
- Contact form
- Multiple contact methods
- Availability status

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect Git repository
- **AWS/Google Cloud**: Use Docker or static export
- **Self-hosted**: Run `npm run build` and serve `.next` folder

## 📱 Contact Information

- **Email**: gginduwaradeshan@gmail.com
- **WhatsApp**: +94 76 156 2585
- **Telegram**: https://t.me/gginduwaradeshan
- **Location**: Kataragama, Sri Lanka

## 🤝 Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **CSS Animations** - Smooth transitions

## 📝 License

© 2024 G.G. Induwara Deshan. All rights reserved.

---

**Made with ❤️ by G.G. Induwara Deshan**
