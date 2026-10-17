# DE EXCLUSIVE Collection – Next.js

Luxury fashion brand website converted from static HTML/CSS to **Next.js 14** (App Router).

## Features preserved

- Full original UI & design system
- Hero slider with autoplay
- Dark / light theme toggle
- Mobile hamburger menu
- Product cards, lookbook, testimonials, newsletter
- Editorial page
- Smooth scroll & reveal animations
- **All borders now have border-radius** (rounded corners throughout)

## Getting started

```bash
cd de-exclusive-next
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx          # Root layout + fonts
  page.tsx            # Home page
  editorial/page.tsx  # Editorial page
  globals.css         # All styles (original + border-radius)
public/
  Img/                # Product images
  Logo.jpeg
```

## Notes

- Client components handle interactivity (slider, menu, theme).
- Links updated for Next.js routing (`/` and `/editorial`).
- Border-radius applied globally to cards, buttons, inputs, etc.
