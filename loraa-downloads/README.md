# LoRaa Connect — Downloads site

Standalone Vite + React + Tailwind + React Router site for app downloads.

## Run
```bash
npm install
npm run dev      # local
npm run build    # production -> dist/
npm run preview
```

## Edit (only file you touch for links)
`src/config.js`
- `apkUrl`, `apkVersion`, `apkSize`, `androidMin`
- `testFlightUrl`, `iosMin`
- `playStoreUrl`, `appStoreUrl`  -> leave "" to show "Coming soon"
- `SUPPORT.email`, `SUPPORT.contacts`

## Structure
```
src/
  App.jsx                  # routing only
  main.jsx
  index.css
  config.js                # links + support (manual edit)
  components/
    Brand.jsx              # logo mark + wordmark
    Logos.jsx              # Android / Apple / Google Play SVG marks
    StoreBadge.jsx         # Play / App Store badges (auto "Coming soon")
    NavBar.jsx
    Footer.jsx
  pages/
    Home.jsx               # downloads
    InstallGuide.jsx       # step-by-step (enable Install unknown apps, TestFlight)
    Support.jsx            # email + phone (call / WhatsApp)
```

## Notes
- App navy/white palette. lucide-react icons. No emoji.
- Routes: `/` downloads, `/install` guide, `/support` contact.
- SEO meta + JSON-LD in `index.html`. Update canonical domain there.
- Deploying on a static host: add an SPA fallback rewrite to `index.html`
  (Netlify `_redirects`: `/*  /index.html  200`, or Vercel rewrites).
