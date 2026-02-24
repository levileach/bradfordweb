# Bradford Web

A single-page freelance web design website targeting small businesses in New York City.

## Overview

Static HTML/CSS/JS landing page for Levi Bradford Web Design. Features a clean, minimal editorial aesthetic using DM Serif Display and DM Sans typefaces.

## Files

- `index.html` — main page (nav, hero, services, about, contact, footer)
- `style.css` — all styles, using CSS custom properties
- `script.js` — scroll fade-in animations, contact preferred-method toggle, widow prevention
- `contact-submission.html` — confirmation page shown after form submission
- `favicon.svg` — custom LBWD monogram icon

## Sections

- **Hero** — Tagline and call-to-action buttons
- **Services** — Website Design & Build, Local SEO & AI Visibility, Ongoing Support
- **About** — Freelancer background and value proposition
- **Contact** — Netlify form for lead capture (name, business, preferred contact, phone, email, business type, message)

## Tech

- Pure HTML/CSS/JS — no frameworks, no build step, no dependencies
- Google Fonts (DM Serif Display, DM Sans)
- Netlify Forms for contact form handling (honeypot spam protection included)
- Scroll-triggered fade-in animations via IntersectionObserver

## Deployment

Deploy to [Netlify](https://netlify.com) by connecting this repo. The contact form uses `data-netlify="true"` and will work automatically once deployed. Form submissions redirect to `/contact-submission`.
