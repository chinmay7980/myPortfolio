# Dark Canvas Showcase

A modern, minimalist portfolio built with React 19, Vite, TanStack Router, and Tailwind CSS v4. It features a strict "pure monochrome dark design system" using `oklch` colors.

## Tech Stack

- **Framework:** React 19 + Vite
- **Routing:** TanStack Router
- **Styling:** Tailwind CSS v4 + custom OKLCH design system
- **UI Components:** shadcn/ui (Radix Primitives)
- **Animations:** tw-animate-css

## Running Locally

This project uses `bun` for package management (as indicated by `bun.lockb`), but you can also use standard `npm`.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine. If you want to use Bun, install [Bun](https://bun.sh/) as well.

### Installation

1. Clone the repository or navigate to the project directory:

   ```bash
   cd dark-canvas-showcase-main
   ```

2. Install dependencies:

   ```bash
   # Using bun (recommended for this repo)
   bun install

   # OR using npm
   npm install
   ```

### Development Server

Start the local development server:

```bash
# Using bun
bun run dev

# OR using npm
npm run dev
```

The application will typically be available at `http://localhost:5173`. The terminal will display the exact local address.

### Build for Production

To create an optimized production build:

```bash
# Using bun
bun run build

# OR using npm
npm run build
```

You can preview the built production site locally:

```bash
# Using bun
bun run preview

# OR using npm
npm run preview
```

### Other Commands

- **Format Code:** `npm run format` (Runs Prettier)
- **Lint Code:** `npm run lint` (Runs ESLint)
