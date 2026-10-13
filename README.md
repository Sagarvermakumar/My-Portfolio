# Sagar Kumar - Full-Stack MERN & Next.js Developer Portfolio

A modern, interactive, and responsive personal portfolio website built with **Next.js 14**, **Tailwind CSS**, **Framer Motion**, and **Three.js**. Features a glassmorphism-inspired design with smooth animations and a comprehensive showcase of skills and projects.

## ✨ Features

### 🎨 Design & UI
- **Glassmorphism Design**: Beautiful glass-effect backgrounds and cards
- **Responsive Layout**: Optimized for all device sizes
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Custom Theme**: Primary color scheme with #ff0080 accent
- **Interactive 3D Elements**: Three.js Earth and Stars background canvas with dynamic SSR-safe rendering
- **CV / Resume Download**: One-click resume download for recruiters

### 🚀 Animations & Interactions
- **Framer Motion**: Smooth page transitions and element animations
- **Scroll-triggered Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive cards with tilt and scale animations
- **Cross-page Navigation**: Seamless navigation between sections and dedicated sub-pages (`/projects`)
- **Floating Scroll Indicator**: Interactive navigation helper

### 📱 Sections
1. **Hero Section**: Animated 3D background with interactive Earth canvas and intro
2. **About Section**: Personal journey, skills overview, and experience timeline
3. **Skills Section**: Comprehensive technology stack categorized with interactive cards
4. **Projects Section**: Portfolio showcase with detailed multi-page breakdown
5. **Contact Section**: Interactive contact form with status feedback and direct mail delivery

### 🛠 Technologies Used
- **Next.js 14**: Modern App Router architecture
- **React 18 & TypeScript**: Robust, type-safe frontend
- **Tailwind CSS & Shadcn UI**: Clean and flexible utility styles
- **Three.js & React Three Fiber**: 3D interactive graphics
- **Framer Motion**: Animation library for smooth transitions

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mern-developer-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation bar with theme toggle
│   ├── Hero.js         # Hero section with animations
│   ├── About.js        # About section with timeline
│   ├── Skills.js       # Skills showcase with cards
│   ├── Projects.js     # Project portfolio with modals
│   ├── Contact.jsx     # Contact form
│   └── ScrollIndicator.js # Floating scroll navigation
├── hooks/
│   └── useColors.js    # Custom hook for color management
├── theme/
│   └── index.js        # Chakra UI custom theme
├── App.js              # Main application component
└── index.js            # Application entry point
```

## 🎨 Customization

### Colors
The color scheme can be customized in `src/theme/index.js`:
```javascript
const colors = {
  primary: {
    500: '#ff0080', // Main accent color
    // ... other shades
  }
};
```

### Content
Update the following files to customize content:
- `src/components/Hero.js` - Personal information and introduction
- `src/components/About.js` - About text, skills, and experience
- `src/components/Projects.js` - Project details and images
- `src/components/Contact.jsx` - Contact information and social links

### Images
Replace placeholder images with your own:
- Hero section background
- Profile photo in About section
- Project screenshots in Projects section

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: Full-featured experience with hover effects
- **Tablet**: Adapted layouts and touch-friendly interactions
- **Mobile**: Optimized spacing and simplified animations

## 🌟 Key Features Explained

### Glassmorphism Effects
- Semi-transparent backgrounds with blur effects
- Subtle borders and shadows
- Smooth transitions between light and dark modes

### Animation System
- Staggered animations for list items
- Scroll-triggered reveals
- Hover interactions with smooth transitions
- Page load animations

### Performance Optimizations
- Lazy loading of images
- Optimized animations with `transform` properties
- Minimal re-renders with proper React patterns

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

- **Email**: [sksagarkumarverma@gmail.com](mailto:sksagarkumarverma@gmail.com)
- **LinkedIn**: [https://www.linkedin.com/in/sagar-kumar-479a92219/](https://www.linkedin.com/in/sagar-kumar-479a92219/)
- **GitHub**: [https://github.com/Sagarvermakumar](https://github.com/Sagarvermakumar)
- **Phone / WhatsApp**: [+91 8434131226](https://wa.me/918434131226)

---

⭐ **Star this repository if you found it helpful!**
