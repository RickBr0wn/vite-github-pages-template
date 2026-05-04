# Contributing

Thank you for your interest in contributing to this project. All contributions are welcome, whether they are bug fixes, new features, documentation improvements, or typo corrections.

## Getting Started

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/<your-username>/vite-github-pages-template.git
   cd vite-github-pages-template
   ```
3. **Install** dependencies:
   ```bash
   npm install
   ```
4. **Create a branch** for your changes:
   ```bash
   git checkout -b feat/your-feature-name
   ```

## Making Changes

- Run the dev server while you work: `npm run dev`
- Ensure the project still builds: `npm run build`
- Keep changes focused — one logical change per pull request
- Follow the existing code style (TypeScript strict mode, no unused variables)

## Commit Messages

Use clear, imperative commit messages that describe *what* changed and *why*:

```
feat: add dark mode toggle
fix: correct base path for nested repos
docs: update quick start steps
```

Common prefixes: `feat`, `fix`, `docs`, `chore`, `refactor`, `style`.

## Opening a Pull Request

1. Push your branch to your fork:
   ```bash
   git push origin feat/your-feature-name
   ```
2. Open a pull request against the `main` branch of this repository
3. Fill in the pull request description with:
   - What the change does
   - Why it is needed
   - Any relevant screenshots (for UI changes)

## Reporting Issues

If you find a bug or have a feature request, please [open an issue](https://github.com/RickBr0wn/vite-github-pages-template/issues) with:

- A clear title and description
- Steps to reproduce (for bugs)
- Your Node.js and npm versions (`node -v && npm -v`)

## Code of Conduct

Please be respectful and constructive in all interactions. This project follows the [Contributor Covenant](https://www.contributor-covenant.org) Code of Conduct.
