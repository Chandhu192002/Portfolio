# Chandrasekar A - Portfolio (React + Vite)

## Structure
```
portfolio/
  index.html          page shell
  netlify.toml        build settings
  package.json
  vite.config.js
  public/             favicon.svg and robots.txt (copied as-is to the site root)
  src/
    main.jsx          entry point
    App.jsx           all sections and components (Home, About, Skills, Services, Projects, Experience, Contact links)
    styles.css        design system and layout
    assets/           portrait.jpg, hero.jpg, lion.jpg
```

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview
```
## Deploy on Netlify
1. Push this folder to a GitHub repo.
2. Netlify > Add new site > Import from Git > pick the repo. Build command `npm run build`, publish directory `dist` (already in netlify.toml).

Alternative without Git: run `npm run build`, then drag the `dist` folder into Netlify Drop.

The contact section links directly to email, LinkedIn and GitHub. Change the links at the top of `src/App.jsx`.

## Edit content
Project links, skills, experience and text are plain data near the top of the related component in `src/App.jsx`.

## Deploy on GitHub Pages (alternative to Netlify)
1. Push the project to GitHub (branch `main`).
2. Repository > Settings > Pages > Source: **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push. Your URL will be `https://chandhu192002.github.io/<repo-name>/`.

## Blank page?
- Never open `index.html` or `dist/index.html` by double-clicking. Use `npm run dev`, `npm run preview`, or a deployed URL.
- GitHub Pages must serve the **built** site (the workflow above does this), not the raw source files.
