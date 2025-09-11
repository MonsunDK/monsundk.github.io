# MONSUN Jekyll Website

[MONSUN](https://monsun.dk) — Danish visual communication and design agency  
Static website built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages.

---

## Project Status & History

Started: **2017**  
Major Update: **September 2025** (first major overhaul since inception)  
> **Note:** Parts of the codebase are legacy (Bootstrap v3, jQuery). Migration to more modern frameworks is planned, including removal/updating of Bootstrap and jQuery for speed and maintainability.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation & Development](#installation--development)
- [Key Structure](#key-structure)
- [Customization & Content](#customization--content)
- [Deployment](#deployment)
- [Todo / Roadmap](#todo--roadmap)
- [Credits](#credits)
- [License](#license)

---

## Project Overview

This repository contains the source for MONSUN’s company website, showcasing our creative portfolio, client work, and service offerings. The site leverages Jekyll’s templating and data features for flexible content management and fast static delivery.

## Features

- Jekyll-powered static site
- Responsive, semantic HTML, custom SCSS/CSS (partial legacy Bootstrap)
- SEO meta tags via `jekyll-seo-tag`
- Cloudinary CDN for all images and videos
- Cookie consent banner (Silktide Consent Manager)
- Danish language support (set via `_config.yml`)
- Data-driven layout using YAML files in `_data`

## Installation & Development
- git clone https://github.com/monsundk/monsundk.github.io.git
- cd site
- bundle install
- bundle exec jekyll serve
- Access locally at [http://localhost:4000](http://localhost:4000)

## Key Structure

- `_config.yml`  
  Site and build configuration

- `_data/`  
  YAML files for navigation (`navigation.yml`), portfolios (`portfolio.yml`), and other structured content

- `_includes/`  
  Reusable HTML snippets, SVG icons, template partials

- `_layouts/`  
  Page layouts/templates

- `assets/`  
  - `css/`, `js/`, images, media (referenced via Cloudinary)
  - `cookie-banner/` contains Silktide Consent Manager script & config

- `pages/`, root `.md` files  
  Main content sections (`index.md`, `kontakt.md`, etc.)

- `favicon`/`icons`, `CNAME`, and other deployment assets

## Customization & Content

- Edit content in Markdown files (`.md`) for page updates.
- Portfolio and navigation are managed through their YAML data files in `_data`.
- For media, update Cloudinary URLs in `_data` or page front matter.
- SEO metadata and cookie banner configured in `_config.yml` and appropriate includes.

## Deployment

- Automatic via GitHub Pages on push to `main` branch
- Production `url` set to `https://monsun.dk`, `baseurl` left empty for root deploy

## Todo / Roadmap

- Migrate off **Bootstrap v3** (legacy) to modern CSS framework or pure custom SCSS
- Remove **jQuery** dependence (no longer needed/2025 standards)
- Polish style and layouts, improve accessibility
- Continued optimization for performance and SEO
- Modularize includes and layouts for simpler edits

## Credits

Site built and maintained by MONSUN  
Utilizes Jekyll, open-source, and creative community resources

## License

MIT License – see [LICENSE](LICENSE) for terms.

---

_For feedback, contact [info@monsun.dk](mailto:info@monsun.dk)_
