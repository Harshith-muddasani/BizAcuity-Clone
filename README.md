# BizAcuity - Modern SaaS Website Frontend

A modern, production-ready SaaS website frontend built with React 18 + Vite, featuring beautiful animations and responsive design.

## 🚀 Features

- **Modern Tech Stack**: React 18, Vite, TailwindCSS
- **Smooth Animations**: Framer Motion for beautiful page transitions and interactions
- **Responsive Design**: Mobile-first approach with beautiful layouts on all devices
- **Professional UI/UX**: Inspired by modern SaaS platforms like BizAcuity.com
- **Performance Optimized**: Fast loading times and smooth interactions
- **Clean Architecture**: Modular components and well-organized code structure

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: TailwindCSS with custom design system
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Typography**: Inter font family

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue shades for main actions and branding
- **Secondary**: Purple shades for accents and highlights  
- **Accent**: Light blue for supporting elements
- **Neutral**: Gray scale for text and backgrounds

### Components
- **HeroSection**: Animated hero sections with floating elements
- **FeatureCard**: Interactive cards with hover animations
- **ServiceCard**: Detailed service cards with pricing
- **AnimatedCounter**: Number counters with easing animations
- **PageTransitionWrapper**: Smooth page transitions

## 📱 Pages

1. **Home**: Hero section, services overview, case studies preview, CTA
2. **About**: Company story, team, values, timeline
3. **Solutions**: Detailed service offerings with pricing
4. **Case Studies**: Success stories with metrics and testimonials
5. **Contact**: Contact form, office locations, contact information

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
```js
colors: {
  primary: { /* your primary colors */ },
  secondary: { /* your secondary colors */ },
  // ...
}
```

### Animations
Modify animation settings in `src/index.css` and component files using Framer Motion variants.

### Content
Update page content in the respective files under `src/pages/` directory.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── FeatureCard.jsx
│   ├── ServiceCard.jsx
│   └── AnimatedCounter.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Solutions.jsx
│   ├── CaseStudies.jsx
│   └── Contact.jsx
├── App.jsx             # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## 🚀 Deployment

The project is ready for deployment to any static hosting service:

- **Netlify**: Connect your repository and deploy automatically
- **Vercel**: Import project and deploy with zero configuration
- **GitHub Pages**: Use `npm run build` and deploy the `dist` folder

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

Built with ❤️ using React, Vite, and TailwindCSS