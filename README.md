# Kalyan Chandana — Portfolio

A static, dependency-free portfolio site (HTML, CSS, vanilla JS) in an Apple-style design system. The contact form sends messages directly to Gmail via [EmailJS](https://www.emailjs.com/).

## Structure

```
index.html
assets/
  css/styles.css        Design tokens and all styles
  js/main.js            Mobile menu, scroll reveal, EmailJS contact form, footer year
  images/kalyan-chandana.jpg
  favicon.svg
.gitignore
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```
npx serve .
```

## Deploy (Netlify)

Drag the folder onto https://app.netlify.com/drop, or connect the repo with publish directory `.` and no build command.

## To do before publishing

- Add `Kalyan_Chandana_Resume.pdf` to the project and link it from the nav or contact section.
- Replace the CSS project mockups with real screenshots in `assets/images/` if you have them.
- Add a canonical URL, `og:image` and a sitemap once the production domain is known.
- In your EmailJS dashboard, restrict allowed origins to your production domain.
