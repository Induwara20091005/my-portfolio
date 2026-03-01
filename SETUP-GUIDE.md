# 🚀 Quick Setup Guide - Portfolio Website

## Step-by-Step Installation

### 1️⃣ Prerequisites
Ensure you have the following installed:
- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- A code editor (VS Code recommended)
- Terminal/Command Prompt access

### 2️⃣ Install Dependencies
Open your terminal in the project folder and run:
```bash
npm install
```
This will install all required packages (Next.js, React, Tailwind CSS, etc.)

### 3️⃣ Run Development Server
Start the development server:
```bash
npm run dev
```

### 4️⃣ View Your Website
Open your browser and go to:
```
http://localhost:3000
```

You should see your portfolio website running! 🎉

---

## 🎨 Customization Guide

### Change Your Personal Information

#### 1. Home Page (app/page.tsx)
Replace the name and title:
```typescript
<h1>Your Name Here</h1>
<p>Your Title Here</p>
```

#### 2. About Page (app/about/page.tsx)
- Update the bio text
- Modify tech stack skills and percentages
- Change location information

#### 3. Projects Page (app/projects/page.tsx)
- Replace project titles and descriptions
- Update tags and features
- Customize the project icons

#### 4. Contact Page (app/contact/page.tsx)
- Update email, phone, telegram links
- Modify location information
- Customize the contact form

#### 5. Footer (app/components/Footer.tsx)
- Update social media links
- Change contact information

### Change Colors

Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: {
    // Change these color values
    400: '#2dd4bf',  // Main accent color
    500: '#14b8a6',  // Buttons and highlights
  },
}
```

### Change Fonts

Edit `app/globals.css` to use different fonts:
```css
@import url('YOUR_GOOGLE_FONT_URL_HERE');

:root {
  --font-display: 'YourDisplayFont', monospace;
  --font-body: 'YourBodyFont', sans-serif;
}
```

### Add Images

1. Place images in the `public` folder
2. Reference them in your code:
```typescript
import Image from 'next/image';

<Image 
  src="/your-image.jpg" 
  alt="Description" 
  width={500} 
  height={300} 
/>
```

---

## 🌐 Deployment Guide

### Deploy to Vercel (Recommended - FREE)

1. **Create a GitHub Account** (if you don't have one)
   - Go to [github.com](https://github.com)
   - Sign up for free

2. **Push Your Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your site is live in ~30 seconds

### Deploy to Netlify (Alternative - FREE)

1. **Build Your Project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up for free
   - Drag and drop the `.next` folder
   - Your site is live!

---

## 🛠️ Troubleshooting

### Port Already in Use
If port 3000 is busy:
```bash
npm run dev -- -p 3001
```

### Module Not Found Errors
Delete node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
Clear the Next.js cache:
```bash
rm -rf .next
npm run dev
```

---

## 📚 Useful Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Check code quality |

---

## 🎯 Next Steps

1. ✅ Customize all personal information
2. ✅ Add your project images to `/public`
3. ✅ Update contact details
4. ✅ Test on mobile devices
5. ✅ Deploy to Vercel or Netlify
6. ✅ Share your portfolio URL!

---

## 💡 Tips for Success

- **Keep it Updated**: Regularly add new projects
- **Optimize Images**: Compress images before adding them
- **Test Thoroughly**: Check all pages on mobile and desktop
- **SEO**: Update metadata in `layout.tsx`
- **Analytics**: Add Google Analytics for traffic insights

---

## 📞 Need Help?

If you encounter any issues:
1. Check the error message carefully
2. Google the error (usually has solutions)
3. Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
4. Ask in developer communities (Stack Overflow, Reddit)

---

**Good luck with your portfolio! 🚀**

Made with ❤️ using Next.js, React, and Tailwind CSS
