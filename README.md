# haeeeeuni.github.io

Personal academic website of Haeeun Yang — https://haeeeeuni.github.io

Built with [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) theme (MIT License).
Pushing to `main` builds the site with GitHub Actions (`.github/workflows/deploy.yml`) and publishes it to the `gh-pages` branch.

## Where things live

| What | File |
|---|---|
| Bio, research interests, photo, contact buttons | `_pages/about.md` |
| News items | `_news/*.md` |
| Publications and working papers (abstracts, keywords) | `_bibliography/papers.bib` |
| Conference presentations | `_pages/research.md` |
| Education, experience, projects, awards | `_data/cv.yml` |
| CV PDF | `assets/pdf/cv.pdf` (see `_pages/cv.md`) |
| Profile photo | `assets/img/` (file name set in `_pages/about.md`) |
| Colors and site-specific styles | `_sass/_themes.scss` |

## Local preview

```bash
docker compose up -d   # then open http://localhost:8080
```

## Local overrides of theme files

These shadow files from the al-folio gems; check them when upgrading the theme.

- `_sass/_themes.scss` — school colors and all site-specific styles
- `assets/js/theme.js` — light/dark toggle without the "system" mode
- `_layouts/bib.liquid` — "Abstract" button label and keywords line
- `_includes/news.liquid` — month-year dates in the news list
