# Requirements

This document lists everything you need on your machine before working with this template.

## Runtime

| Requirement | Minimum Version | Recommended | Notes |
|-------------|----------------|-------------|-------|
| [Node.js](https://nodejs.org) | 18.x | 22.x (LTS) | Powers Vite, the build tool |
| [npm](https://docs.npmjs.com) | 9.x | 10.x | Bundled with Node.js |

> **Tip:** Use [nvm](https://github.com/nvm-sh/nvm) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows) to manage Node versions.

## Accounts and Access

| Requirement | Why |
|-------------|-----|
| [GitHub account](https://github.com) | Required to host the repository and publish via GitHub Pages |
| GitHub Pages enabled on the repository | Go to **Settings → Pages → Source → GitHub Actions** |

## Optional (Recommended)

| Tool | Purpose |
|------|---------|
| [Git](https://git-scm.com) 2.x+ | Version control; usually pre-installed on macOS/Linux |
| [VS Code](https://code.visualstudio.com) | Recommended editor with TypeScript and Vite extensions |
| [Volar (Vue) / ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) | VS Code extensions for a better DX |

## Checking Your Versions

Run the following to verify your environment meets the minimum requirements:

```bash
node -v   # should be >= 18.0.0
npm -v    # should be >= 9.0.0
git --version
```

## CI Environment

The GitHub Actions workflow uses:

- **Runner:** `ubuntu-latest`
- **Node.js:** 22.x
- **Package install:** `npm ci` (requires a committed `package-lock.json`)

If you add dependencies locally, commit the updated `package-lock.json` so the CI build stays in sync.
