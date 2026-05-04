# vite-github-pages-template

> A minimal, production-ready template for deploying React applications to GitHub Pages with automatic CI/CD via GitHub Actions.

[![Deploy to GitHub Pages](https://github.com/RickBr0wn/vite-github-pages-template/actions/workflows/main.yml/badge.svg)](https://github.com/RickBr0wn/vite-github-pages-template/actions/workflows/main.yml)
![Vite](https://img.shields.io/badge/Vite-6.x-646cff?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-19.x-61dafb?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

![Template screenshot](./public/screenshot.png)

## Features

- **Instant HMR** — Vite's native ESM dev server for a fast feedback loop
- **Type safe** — Strict TypeScript configured out of the box
- **Auto deploy** — Push to `main` and GitHub Actions builds and deploys automatically
- **Minimal footprint** — No unnecessary dependencies; easy to extend

## Prerequisites

See [REQUIREMENTS.md](./REQUIREMENTS.md) for a full list of tools and versions required.

## Quick Start

### 1. Use this template

Click **"Use this template"** on the GitHub repository page to create a new repository from this one.

### 2. Clone your new repository

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

### 3. Update the base path

Open `vite.config.ts` and change the `base` value to match your repository name:

```ts
// vite.config.ts
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings → Pages**
3. Under **Build and deployment**, set the source to **GitHub Actions**

### 5. Install dependencies and push

```bash
npm install
git add .
git commit -m "initial commit"
git push origin main
```

GitHub Actions will build and deploy your site automatically. Your site will be live at:

```
https://<your-username>.github.io/<your-repo-name>/
```

## Development

```bash
# Start the dev server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## Project Structure

```
├── .github/
│   └── workflows/
│       └── main.yml        # GitHub Actions deploy workflow
├── public/
│   ├── screenshot.png
│   └── vite.svg
├── src/
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Entry point
│   ├── styles.css          # Global styles
│   └── vite-env.d.ts       # Vite type declarations
├── index.html
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts          # ← update base here
```

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| [Vite](https://vitejs.dev) | 6.x | Build tool and dev server |
| [React](https://react.dev) | 19.x | UI library |
| [TypeScript](https://www.typescriptlang.org) | 5.x | Static type checking |
| [GitHub Actions](https://docs.github.com/en/actions) | — | CI/CD pipeline |

## Contributing

Contributions, issues, and feature requests are welcome. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request.

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.
