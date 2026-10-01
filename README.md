# Personal Portfolio

Personal portfolio site for Ryuichi Y. Lun — showcasing experience, research, and projects.

**Live:** https://ryuichi-yamafuji-lun.github.io/Portfolio/

## Built with

- **React** (Create React App)
- **Tailwind CSS**
- **react-headroom** — hide-on-scroll mobile navbar
- **react-icons** — icons
- **gh-pages** — deployment
- **FormSubmit** — backend-less contact form

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
  manifest.json       # PWA metadata
  favicon.ico         # tab icon (robot)
  og-image.jpg        # 1200x630 social link-preview image

src/
  index.js            # app entry point
  index.css           # Tailwind imports + global styles, custom cursor & space-bg CSS
  App.js              # layout shell: sidebar + main sections, mobile nav, contact modal
  tailwind.config.js  # (repo root) colors (navy/primary), Inter font

  data/               # ← CONTENT lives here (edit these to add/remove entries)
    experiences.js    #   work history
    projects.js       #   projects
    publications.js   #   research & publications

  pages/              # page sections
    Home.jsx          #   sidebar: name, tagline, availability badges, nav, socials
    About.jsx         #   bio paragraphs + skills chips
    Experience.jsx    #   renders data/experiences.js
    Publications.jsx  #   renders data/publications.js  (section id: "research")
    Project.jsx       #   renders data/projects.js
    Contact.jsx       #   contact form (FormSubmit)

  components/         # reusable UI
    NavBar.jsx        #   mobile hamburger menu
    ExperienceCard.jsx
    ProjectCard.jsx
    PublicationCard.jsx
    Tag.jsx           #   tech/skill chip
    CustomCursor.jsx  #   arc-reactor cursor (mouse devices only)
    SpaceBackground.jsx  # starfield + nebula glow

  assets/image/       # project & publication images (imported in data/*.js)
```

## How to edit content

Most updates are one-line changes to a **data file** — the page updates automatically.

| To change...                    | Edit                                   |
| ------------------------------- | -------------------------------------- |
| Work experience                 | `src/data/experiences.js`              |
| Projects                        | `src/data/projects.js`                 |
| Research / publications         | `src/data/publications.js`             |
| Bio + skills chips              | `src/pages/About.jsx`                  |
| Name, title, tagline, socials   | `src/pages/Home.jsx`                   |
| Page title / SEO / link preview | `public/index.html`                    |

**Adding an entry:** copy an existing object in the relevant `data/*.js` array and edit its fields
(`title`, `technologies` (array of strings), `description` (array of bullets), links).
**Adding an image:** drop it in `src/assets/image/…`, add an `import` at the top of the data file,
and reference it as `imageSrc`.

## Toggles

| Setting                    | File                                  | Value                       |
| -------------------------- | ------------------------------------- | --------------------------- |
| "Open to full-time" badge  | `src/pages/Home.jsx`                  | `OPEN_TO_WORK`              |
| Space / starfield backdrop | `src/components/SpaceBackground.jsx`  | `SPACE_BACKGROUND`          |
| Contact email address      | `src/pages/Contact.jsx`               | `EMAIL`                     |

## Contact form

The contact form uses no third-party service. Submitting it opens the visitor's own email app
with the subject and message pre-filled (`mailto:`), and the address is shown with a Copy button
for visitors who use webmail. Change the address via `EMAIL` in `src/pages/Contact.jsx`.

## Deployment

`npm run deploy` builds the app and publishes `build/` to the `gh-pages` branch via the
`gh-pages` package. The `homepage` field in `package.json` controls the base path
(`/Portfolio/`). Commit and push `main` separately to keep the source in sync.
