# Hearing Solution Cambodia Website

A complete, original, static clinic website for **Hearing Solution Cambodia** with modern healthcare styling, interactive components, responsive layouts, accessibility-minded markup, and placeholder media that can be replaced before launch.

## Project overview

- **Company:** Hearing Solution Cambodia
- **Tagline:** Modern Hearing Care for Cambodian Families
- **Tone:** Professional, compassionate, modern, trustworthy
- **Build type:** Static HTML, CSS, and JavaScript only
- **No dependencies:** No React, Next.js, Vite, npm, build step, or package manager

## File structure

```text
index.html
about.html
services.html
hearing-aids.html
children-hearing.html
faq.html
contact.html
assets/css/styles.css
assets/js/main.js
assets/images/clinic-hero-placeholder.svg
assets/images/about-clinic-placeholder.svg
assets/images/hearing-aid-placeholder.svg
assets/images/map-placeholder.svg
assets/videos/.gitkeep
README.md
```

## Preview locally

Open the site directly in a browser:

1. Open the project folder.
2. Double-click `index.html`, or right-click it and choose your browser.
3. Navigate between pages using the menu.

Optional local server preview:

```bash
python3 -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

## Deployment

### Cloudflare Pages

1. Push this folder to a GitHub repository.
2. In Cloudflare Pages, choose **Create a project**.
3. Connect the repository.
4. Set the build command to blank / none.
5. Set the output directory to `/` or leave default for a static root.
6. Deploy.

### Netlify

1. Push this folder to a GitHub repository or drag the folder into Netlify Drop.
2. If importing from Git, set build command to blank / none.
3. Set publish directory to the repository root.
4. Deploy.

### GitHub Pages

1. Push the files to a GitHub repository.
2. Go to **Settings → Pages**.
3. Choose the branch and root folder.
4. Save and wait for GitHub Pages to publish.

## Placeholder media to replace before launch

Replace these files or update the HTML references with licensed clinic-owned media:

1. `assets/images/clinic-hero-placeholder.svg` — hero fallback image / hero video poster.
2. `assets/videos/` — add an optional licensed hero or clinic video file and include it as a `<source>` in `index.html`.
3. `assets/images/about-clinic-placeholder.svg` — clinic, family, team, consultation, and child-care placeholder image.
4. `assets/images/hearing-aid-placeholder.svg` — hearing aid product or technology placeholder image.
5. `assets/images/map-placeholder.svg` — Google Maps placeholder; replace with a verified map embed or approved map image.

## Placeholder business details to replace

The website intentionally avoids inventing fake clinic details. Before launch, replace:

- Phone number
- WhatsApp link
- Email address
- Verified clinic address
- Google Maps location
- Staff profiles and credentials, if you want to show them
- Any awards, certifications, or partnerships only if verified
- Contact form backend endpoint or form service integration

## Interactive features included

- Sticky navigation
- Mobile hamburger menu
- Smooth scrolling
- Floating WhatsApp placeholder button
- Back-to-top button
- Dark/light mode toggle with `localStorage`
- Scroll reveal animations
- Animated CSS sound waves
- Floating hero icons
- Interactive service-card hover effects
- FAQ accordion
- Contact form front-end validation
- Lazy-loaded images
- Reduced-motion support through `prefers-reduced-motion`
- Keyboard-visible focus states and skip link

## SEO notes

Each page includes a unique title and meta description. Local SEO keywords are used naturally, including:

- Hearing clinic Cambodia
- Hearing test Cambodia
- Hearing aids Cambodia
- Children’s hearing care Cambodia
- Audiology services Cambodia

## Final launch checklist

- [ ] Replace all placeholder phone, WhatsApp, email, and address details.
- [ ] Add a verified Google Maps embed or location link.
- [ ] Replace SVG placeholders with licensed clinic-owned images.
- [ ] Add a licensed short video if desired, or remove the hero video source.
- [ ] Connect the booking form to a form service or backend.
- [ ] Test the website on mobile phones and tablets.
- [ ] Run an accessibility check for contrast, keyboard navigation, form labels, and reduced-motion behavior.
- [ ] Confirm all medical wording matches the clinic’s actual scope of practice.
- [ ] Add real privacy policy and consent language if collecting patient information.
- [ ] Configure custom domain, analytics, and search console after deployment.
