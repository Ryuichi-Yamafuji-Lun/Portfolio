# Personal Portfolio

Personal portfolio site for Ryuichi Y. Lun — showcasing experience, research, and projects.

**Live:** https://ryuichi-yamafuji-lun.github.io/Portfolio/

## Built with

- **React** (Create React App), plain CSS (no framework)
- **Fuse.js** for the fuzzy "Ask about Ryu" search (runs in the browser, no API)
- **gh-pages** for deployment

The previous sidebar design is preserved at the git tag `v1-classic`.

## Getting started

```bash
npm install      # install dependencies
npm start        # run locally at http://localhost:3000 (auto-reloads on save)
npm run build    # production build into build/
npm run deploy   # build + publish to the gh-pages branch (goes live)
```

## Project structure

```
public/
  index.html          # <title>, meta description, Open Graph / Twitter tags, fonts
  og-image.jpg        # 1200x630 social link-preview image

src/
  index.js            # app entry point
  index.css           # all styles; color, font and layout tokens are in :root at the top
  App.js              # the single page: hero, stats, Ask bar, tiles, details panel

  data/               # CONTENT lives here
    profile.js        #   name, pitch, availability facts, links, stats, education, stack, Ask chips
    work.js           #   project tiles and the experience timeline (newest role first)
    faq.js            #   "Ask about Ryu" questions and answers

  components/
    Tiles.jsx         #   project, featured role, experience timeline, education tiles
    Ask.jsx           #   Ask bar: fuzzy matching, email copy, "ask on LinkedIn" fallback
    DetailSheet.jsx   #   details panel (centered on desktop, full screen on phones)
    Starfield.jsx     #   twinkling star background
    OrbitCursor.jsx   #   custom cursor (mouse only)
    Icons.jsx         #   inline SVG icons

  assets/image/web/   # compressed tile images used by data/work.js
```

## Editing

- **Change text, links or availability:** `src/data/profile.js`.
- **Add or edit a project or role:** `src/data/work.js`. A project's `span` is its desktop width out of 12 columns.
- **Teach the Ask bar something new:** add an entry to `src/data/faq.js` with a few phrasings in `q` and the answer in `a`.
  Questions on private topics (age, salary, relationships) always fall through to "ask Ryu on LinkedIn".
- **Colors:** the `:root` block at the top of `src/index.css`.

## Deployment

`npm run deploy` builds the app and publishes `build/` to the `gh-pages` branch via the
`gh-pages` package. The `homepage` field in `package.json` controls the base path
(`/Portfolio/`). Commit and push `main` separately to keep the source in sync.
