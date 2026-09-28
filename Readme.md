# Aryan's Portfolio

A modern, responsive personal portfolio website built with plain HTML, CSS, and JavaScript. It showcases Aryan Lade — a B.Tech CSE student and software developer working across Full Stack Development, Blockchain, and AI/ML.

🔗 **Live:** aryanlade.in

## Features

- **Hero section** with role highlights, badges, and call-to-action buttons
- **About** section with stat cards and a short bio
- **Experience** timeline of roles and contributions
- **Tech Stacks** grid of technologies and tools
- **Projects** showcase with features, challenges, and tags
- **Achievements**, **Certifications**, **Open Source**, and **Education** sections
- **Contact** form with a `mailto:` handler plus social links
- **Smooth scroll-reveal animations** — sections and their children fade and slide into view on scroll using an Intersection Observer, with a staggered sequence and `prefers-reduced-motion` support
- Custom cursor, glassmorphism cards, and a fully responsive layout

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties, grid/flex layouts, glassmorphism, responsive design
- **JavaScript (Vanilla)** — dynamic content rendering, Intersection Observer scroll animations, mobile menu, contact form, custom cursor

## Project Structure

```
Personal_Protfolio/
├── index.html    # Page markup and section structure
├── styles.css    # All styling and scroll-reveal animation rules
├── script.js     # Content rendering, animations, and interactivity
└── Readme.md
```

## Getting Started

Clone the repository and open the site — no build step or dependencies required.

```bash
git clone https://github.com/Aryan-Lade/Personal_Protfolio.git
cd Personal_Protfolio
```

Then open `index.html` in your browser, or serve it locally:

```bash
# Python
python -m http.server 8000
# then visit http://localhost:8000
```

## Customization

- Edit the data arrays in `script.js` (`stackItems`, `projects`, `experiences`, `certs`, etc.) to update content.
- Adjust colors, spacing, and animation timing in `styles.css`.
- Tune the scroll-reveal stagger via the `STAGGER` constant in `script.js`.

## Contact

- **Email:** aryanlade55@gmail.com
- **LinkedIn:** [linkedin.com/in/aryan-lade](https://www.linkedin.com/in/aryan-lade)
- **GitHub:** [github.com/Aryan-Lade](https://github.com/Aryan-Lade)

---

Designed & Developed by **Aryan Lade** · © 2026
