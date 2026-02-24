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

## Deployment

Deployed via Netlify. The contact form uses `data-netlify="true"` — no backend needed, Netlify handles form submissions automatically. No special build configuration required.

## Keeping Docs Current

After making any meaningful change to the site, update this file and `README.md` to reflect it. This includes: new files or sections added, changes to the deployment setup, font or dependency changes, or shifts in the overall structure. Keep both files accurate and concise — don't let them drift from the actual state of the project.

## Fonts

DM Serif Display and DM Sans loaded from Google Fonts in `index.html`. Font weights in use: 300, 400, 500 (DM Sans) and regular + italic (DM Serif Display).
