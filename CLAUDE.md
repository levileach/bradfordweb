# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static single-page marketing site for Levi Bradford Web Design, targeting NYC small businesses. No build step, no package manager, no framework — just HTML, CSS, and vanilla JS served directly.

## Structure

- `index.html` — all markup; one page with nav, hero, services, about, contact, and footer sections
- `style.css` — all styles; uses CSS custom properties (`--black`, `--off-white`, `--mid`, `--accent`, `--border`) defined in `:root`
- `script.js` — scroll-triggered fade-in via `IntersectionObserver`, preferred contact toggle (makes phone or email `required` based on dropdown), widow prevention for `p` and `h2` tags (replaces last space before final word with `\u00A0`, handles `<br>`-split lines)
- `contact-submission.html` — confirmation page; form redirects here via `action="/contact-submission"`
- `favicon.svg` — custom LBWD monogram (2×2 grid, full-bleed, no padding)
- `sitemap.xml` — single-page sitemap pointing to the live URL; submit to Google Search Console
- `robots.txt` — allows all crawlers; references the sitemap URL

## Deployment

Deployed via Netlify. The contact form uses `data-netlify="true"` — no backend needed, Netlify handles form submissions automatically. No special build configuration required.

## Keeping Docs Current

After making any meaningful change to the site, update this file and `README.md` to reflect it. This includes: new files or sections added, changes to the deployment setup, font or dependency changes, or shifts in the overall structure. Keep both files accurate and concise — don't let them drift from the actual state of the project.

Also keep site metadata in sync with structural changes:
- **Domain change**: update the canonical URL, og:url, both JSON-LD `url` fields, `sitemap.xml` `<loc>`, and `robots.txt` `Sitemap:` line — all currently point to `levibradfordweb.netlify.app`
- **New pages added**: add them to `sitemap.xml` and update `<lastmod>` on existing entries
- **Service or business info changes**: update the JSON-LD `serviceType`, `description`, and related fields in `index.html`
- **Date check**: `sitemap.xml` has a `<lastmod>` date — update it when content meaningfully changes

## Fonts

DM Serif Display and DM Sans loaded from Google Fonts in `index.html`. Font weights in use: 300, 400, 500 (DM Sans) and regular + italic (DM Serif Display).
