function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <div className="nav-brand">
            <svg viewBox="0 0 410 404" className="nav-logo" aria-hidden="true">
              <path
                fill="#646CFF"
                d="M399.641 59.525l-183.998 329.02a12.438 12.438 0 01-10.956 6.48H14.158a12.5 12.5 0 01-10.956-18.53L197.16 8.75A12.5 12.5 0 01208.115 2.27h183.527a12.5 12.5 0 0110.956 18.53L399.641 59.525z"
              />
              <path
                fill="#646CFF"
                fillOpacity=".6"
                d="M239.637 2.27H208.115a12.5 12.5 0 00-10.956 6.48L2.146 376.495A12.5 12.5 0 0013.102 395h30.14L239.637 2.27z"
              />
            </svg>
            <span>vite-github-pages</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#quick-start">Quick Start</a>
            <a
              href="https://github.com/RickBr0wn/vite-github-pages-template"
              className="btn btn-sm"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-badges">
            <span className="badge badge-vite">Vite 6</span>
            <span className="badge badge-react">React 19</span>
            <span className="badge badge-ts">TypeScript 5</span>
          </div>
          <h1 className="hero-title">
            Deploy React apps to
            <br />
            <span className="gradient-text">GitHub Pages instantly</span>
          </h1>
          <p className="hero-description">
            A minimal, production-ready template with automatic CI/CD via GitHub
            Actions. Push to main — your site ships.
          </p>
          <div className="hero-actions">
            <a href="#quick-start" className="btn btn-primary">
              Get Started
            </a>
            <a
              href="https://github.com/RickBr0wn/vite-github-pages-template"
              className="btn btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </section>

        <section className="features" id="features">
          <h2 className="section-title">Why use this template?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>
                Vite's native ESM dev server gives you sub-millisecond HMR and
                optimised production builds out of the box.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Type Safe</h3>
              <p>
                Strict TypeScript configured from day one, so you catch errors
                at compile time, not in production.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Auto Deploy</h3>
              <p>
                Push to main and GitHub Actions builds and deploys your site
                automatically — no manual steps needed.
              </p>
            </div>
          </div>
        </section>

        <section className="quick-start" id="quick-start">
          <h2 className="section-title">Quick Start</h2>
          <ol className="steps">
            <li className="step">
              <span className="step-number">1</span>
              <div className="step-content">
                <h3>Use this template</h3>
                <p>
                  Click{' '}
                  <strong>"Use this template"</strong> on GitHub to create your
                  own repository from this one.
                </p>
              </div>
            </li>
            <li className="step">
              <span className="step-number">2</span>
              <div className="step-content">
                <h3>Update the base path</h3>
                <p>
                  In <code>vite.config.ts</code>, set <code>base</code> to your
                  repository name:
                </p>
                <pre className="code-block">
                  <code>base: '/your-repo-name/'</code>
                </pre>
              </div>
            </li>
            <li className="step">
              <span className="step-number">3</span>
              <div className="step-content">
                <h3>Enable GitHub Pages</h3>
                <p>
                  Go to{' '}
                  <strong>Settings → Pages → Build and deployment</strong> and
                  set the source to <strong>GitHub Actions</strong>.
                </p>
              </div>
            </li>
            <li className="step">
              <span className="step-number">4</span>
              <div className="step-content">
                <h3>Install and push</h3>
                <pre className="code-block">
                  <code>{`npm install\ngit add .\ngit commit -m "initial commit"\ngit push origin main`}</code>
                </pre>
                <p>Your site will be live in under a minute.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="stack">
          <h2 className="section-title">Built with</h2>
          <div className="stack-grid">
            <div className="stack-item">
              <span className="stack-name">Vite 6</span>
              <span className="stack-desc">Build tool</span>
            </div>
            <div className="stack-item">
              <span className="stack-name">React 19</span>
              <span className="stack-desc">UI library</span>
            </div>
            <div className="stack-item">
              <span className="stack-name">TypeScript 5</span>
              <span className="stack-desc">Type safety</span>
            </div>
            <div className="stack-item">
              <span className="stack-name">GitHub Actions</span>
              <span className="stack-desc">CI / CD</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          MIT License &middot; Made by{' '}
          <a
            href="https://github.com/RickBr0wn"
            target="_blank"
            rel="noreferrer"
          >
            RickBr0wn
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
