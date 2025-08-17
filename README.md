# CLOUDJGS Static Site (v1)

A minimal, production-ready static landing page to monetize immediately.

## Replace these placeholders before deploy
- **REPLACE_WITH_STRIPE_LINK** in `index.html` → paste your Stripe Payment Link (e.g., https://buy.stripe.com/live_XXXX)
- **REPLACE_WITH_MICROSOFT_FORMS_URL** in `index.html` → paste your Microsoft Forms form URL

## Quick deploy (Vercel)
1. Create a GitHub repo and push files
2. Import the repo into Vercel and add domain `www.cloudjgs.com`
3. In GoDaddy, forward `cloudjgs.com` → `https://www.cloudjgs.com/` (301, no masking)

## Files
- `index.html` — landing + CTA + lead form
- `robots.txt` — crawl policy + sitemap location
- `sitemap.xml` — starter sitemap
- `assets/logo.svg` — simple logo placeholder
