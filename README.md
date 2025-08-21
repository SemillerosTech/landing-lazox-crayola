# Landing Lazox + Crayola

Marketing landing built with Next.js, TypeScript, Tailwind CSS and shadcn/ui for Didacti + Lazox.

## Tech Stack

- Next.js 14
- React 18 + TypeScript
- Tailwind CSS (+ typography, animate)
- shadcn/ui (Radix UI primitives)

## Getting Started

Prerequisites: Node.js LTS and npm. Using nvm is recommended.

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Lint
npm run lint
```

The app runs at http://localhost:3000.

## Scripts

- dev: Start development server
- build: Build for production
- start: Run production server (after build)
- lint: Run ESLint

## Project Structure

- `src/app/` — Next.js App Router pages/layouts
- `src/components/` — UI components (including shadcn/ui)
- `src/assets/` — images and static assets
- `public/` — static files served from root

## Styling

Tailwind is configured in `tailwind.config.ts`. Global styles in `src/app/globals.css`.

## Deployment

Any platform that supports Next.js (e.g., Vercel, Netlify, Render).

Basic flow:
```bash
npm run build
npm run start
```

## Notes

- Open Graph/Twitter images are local placeholders in `public/placeholder.svg`. Replace with your final assets as needed.

## License

Private/internal project unless specified otherwise.
