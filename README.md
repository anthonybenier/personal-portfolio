# Portfolio Website - Anthony Benier

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

A high-performance, immersive portfolio website designed for a **Senior Product Designer & Product Engineer**. Built with modern web technologies to bridge the gap between design and engineering.

## 🌟 Key Features

-   **Hybrid Persona**: Content tailored to a "Design Engineer" profile, emphasizing strategic product vision and pixel-perfect execution.
-   **Immersive Hero Section**: Featuring a WebGL-based "Aurora" background with parallax effects and cinematic text reveals.
-   **Narrative About Section**: Moves beyond simple skill lists to tell a story about product strategy, UX/UI, and engineering quality.
-   **Interactive UI**:
    -   "Liquid Glass" navigation that morphs on hover.
    -   Smooth scrolling powered by `Lenis`.
    -   Fluid cursor interactions (SplashCursor).
    -   Responsive grids and animated reveals using `Framer Motion`.
-   **Performance First**: Optimized assets, `font-display: swap`, and efficient animations ensuring 60fps performance.
-   **Modern Tech Stack**: React, TypeScript, Tailwind CSS v4, and Vite.

## 🛠️ Tech Stack

-   **Frontend**: React 19, TypeScript
-   **Styling**: Tailwind CSS v4
-   **Animations**: Framer Motion, GSAP (optional integration)
-   **Rendering**: WebGL (via custom shaders)
-   **Build Tool**: Vite
-   **Fonts**: Syne (Display), Plus Jakarta Sans (Body), JetBrains Mono (Code/Technical)

## 🚀 Getting Started

### Prerequisites

-   Node.js (v18+)
-   npm or pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/anthonybenier/personal-portfolio.git
    cd personal-portfolio
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Build for production:
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── components/
│   ├── layout/       # Header, Footer, Layout wrapper
│   ├── sections/     # Hero, About, Projects, Contact
│   ├── ui/           # Reusable primitives (Button, BlurReveal, Magnetic)
│   └── reactbits/    # Advanced visual effects (Aurora, BlurText, SplashCursor)
├── hooks/            # Custom hooks (useSmoothScroll)
├── utils/            # Helper functions
└── styles/           # Global styles and Tailwind configuration
```

## 🎨 Design System

-   **Colors**: Minimalist monochrome palette (Black/White) with subtle gradients.
-   **Typography**:
    -   *Display*: Syne - For bold, artistic headlines.
    -   *Body*: Plus Jakarta Sans - For clean, readable text.
    -   *Technical*: JetBrains Mono - For code snippets and technical details.
-   **Motion**: Fluid transitions, "Apple-style" scroll reveals, and physics-based interactions.

## 👤 Author

**Anthony Benier** – Product Designer & Product Engineer

---

*Verified and polished for production.*
