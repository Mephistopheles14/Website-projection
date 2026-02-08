# Scrollytelling Portfolio

This is a premium, high-performance personal portfolio website featuring scrollytelling animations.

## Getting Started

Since the project was initialized manually, please follow these steps to install dependencies and run the development server.

### 1. Navigate to the project directory
```bash
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **Sticky Scrollytelling**: Smooth canvas-based image scrubbing using `framer-motion` and HTML5 Canvas.
- **Parallax Overlay**: Text elements that float with independent scroll speeds.
- **Glassmorphism Projects**: Premium frosted glass cards for project showcase.
- **Performance**: Image preloading and optimized canvas rendering.

## Project Structure

- `components/ScrollyCanvas.tsx`: The core canvas animation logic.
- `components/Overlay.tsx`: The text layers.
- `components/Projects.tsx`: The work grid.
- `public/sequence/`: The converted and renamed WebP image sequence (000.webp - 191.webp).

## Customization

- **Images**: Replace images in `public/sequence/` maintaining the `000.webp` naming convention.
- **Colors**: Edit `app/globals.css` and `tailwind.config.ts`.
