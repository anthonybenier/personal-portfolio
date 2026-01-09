# Portfolio - Anthony Benier

A modern, high-performance portfolio website built for optimal user experience and visual impact.

## ✨ Key Features

- **Immersive Animations**:
  - **Liquid Glass Header**: Morphing "pill" navigation with fluid entry/exit animations (Framer Motion).
  - **Splash Cursor**: WebGL-based fluid interaction trail (ReactBits).
  - **Aurora Background**: Mesmerizing WebGL background effect (ogl).
  - **BlurText**: Cinematic text reveal for the hero section.
- **Ultra-Smooth Scrolling**: Integrated **Lenis** for industry-standard inertia scrolling and fluid anchor navigation.
- **Responsive Design**: Full-width fluid layout adapted for all devices, from mobile to ultra-wide screens.
- **Modern UI**: Custom-built components with glassmorphism, subtle gradients, and clean typography.

## 🛠️ Tech Stack

- **Core**: [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Motion**: [Framer Motion](https://www.framer.com/motion/) + [Lenis](https://lenis.studiofreight.com/)
- **WebGL**: [ogl](https://github.com/oframe/ogl) (for Aurora effect)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or pnpm

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    pnpm install
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

## 📦 Build for Production

To create a production-ready build:

```bash
npm run build
```

This will generate optimized static assets in the `dist` folder.

## 📄 License

[MIT](LICENSE)
