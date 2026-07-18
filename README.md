# Prettie Parlor — Bridal Hair Studio Website

A React + Vite site for a Nigerian bridal hair studio, built around the
brief: *"Elevating women through hair"* — bridal styling, frontal
installations, wigging & revamp, sew-ins, and 1:1 professional training.
Mon–Sat, 9AM–6PM, Abuja. Instagram: [@prettieparlor.ng](https://www.instagram.com/prettieparlor.ng/).

## Run it

```
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

To build for production/hosting:

```
npm run build
```

This outputs a `dist/` folder you can deploy anywhere (Netlify, Vercel,
Hostinger, etc).

## What's a placeholder

- **WhatsApp number** — the floating WhatsApp button (`WhatsAppButton.jsx`)
  and the "Message on WhatsApp" button in `Booking.jsx` both link to
  `https://wa.me/000000000000`. Replace `000000000000` with your real
  number in international format (e.g. `2348012345678`) in both files.
- **TikTok handle** — `Footer.jsx` has a placeholder TikTok link marked with
  a comment. Add the real URL once you have one.
- **Testimonial** — `Testimonial.jsx` has an invented quote marked with a
  comment. Replace with a real client testimonial once you have one you can
  publish.
- **Service copy** — the descriptions in `Services.jsx`, `Feature.jsx`,
  `Training.jsx` and `About.jsx` are draft copy based on the brief. Rewrite
  in your own voice — that's expected, this is meant to be a starting point.

## Structure

```
src/
  App.jsx              — page composition
  index.css            — design tokens (colors, fonts) + shared utilities
  assets/               — your photo + video files
  components/
    AnnouncementBar     — scrolling top strip (hours/booking notice)
    Navbar               — sticky nav + mobile menu
    Hero                 — full-bleed intro with the gown photo
    Services             — the 5 core services, listed
    Gallery              — video/photo tile grid ("Straight from the chair")
    Feature              — frontal reinstall spotlight
    About                — studio story, split with photo
    Training             — 1:1 professional training section
    Testimonial          — client quote panel
    Booking              — hours, location, WhatsApp CTA
    Footer                — sitemap + socials
    WhatsAppButton        — floating, pulsing WhatsApp button (site-wide)
```

Each component has its own `.css` file next to it, so you can find and edit
one section without touching the rest.

## Design notes

- Colors, fonts and spacing all live as CSS custom properties at the top of
  `src/index.css`. The palette is bright and warm on purpose — a hot pink
  (`--wine`), tangerine (`--gold`) and warm ivory background — to feel
  active and inviting rather than muted. Change these values there to
  re-theme the whole site at once.
- WhatsApp green (`--whatsapp`) is kept separate from the brand palette on
  purpose, so the WhatsApp buttons stay instantly recognizable against the
  pink/orange brand colors, the way people expect that green to look.
- Fonts are Bodoni Moda (headings) + Sora (body), loaded from Google Fonts
  in `index.html`.
- The wavy shape at the base of the hero is a hand-drawn SVG "veil," a nod
  to the veil in your uploaded photo — it's in `Hero.jsx`.
- The floating WhatsApp button drops in a moment after the page loads and
  pulses continuously so it's noticed early, without requiring a hover to
  register as a WhatsApp button.

## Recent fixes

- **Footer had no side padding** — content was running flush to the left
  and right edges of the screen on every screen size. Fixed in
  `Footer.css` (`.footer__inner` now uses `var(--edge)` like every other
  section).
- **Mobile menu looked transparent** — the hamburger menu now uses a fully
  opaque background color and explicit `top/right/bottom/left` instead of
  the `inset` shorthand (better mobile browser support), and sits above
  every other fixed element on the page, including the WhatsApp button.
- **Videos were slow to load on mobile** — every gallery video and the
  frontal-reinstall feature video was set to `autoPlay` on page load, so
  the browser tried to download all of them at once regardless of whether
  they were on screen. They now use a `LazyVideo` component
  (`src/components/LazyVideo.jsx`) that shows a lightweight poster image
  and only downloads/plays a clip once it's about to scroll into view.
- **Gallery order** — reordered to read as a story (bridal tone → services
  → full session → finished look → reveal) instead of a random grid, with
  "The Reveal" closing the section as a full-width clip.

