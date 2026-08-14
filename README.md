# Kingdom Propel Production Website V1

Static production foundation for KingdomPropel.com.

## Core brand rule
Customer-facing experience is 100% Kingdom Propel / Propel. Do not name or expose third-party systems, vendors, white-label platforms, infrastructure providers, or implementation partners.

## Current pages
- `/` — Flagship homepage
- `/church-apps/` — SEO landing page
- `/church-websites/` — SEO landing page
- `/giving/` — SEO landing page
- `/ministry-engagement/` — SEO landing page
- `/demo/` — Conversion page

## Deployment
This project is Netlify-ready with `netlify.toml` at the root. Connect the repository to Netlify and set the custom domain to `kingdompropel.com`.

## SEO foundation
- Unique titles/descriptions
- Canonical URLs
- Organization JSON-LD
- Crawlable semantic navigation
- Sitemap and robots.txt
- Dedicated search-intent landing pages
- Nationwide positioning with a light Emerald Coast / Northwest Florida geographic signal

## Next production priorities
1. Replace text-only brand mark with approved Propel logo asset.
2. Add final Champion Life product screenshots/mockups when ready.
3. Connect demo form/CRM destination.
4. Add pricing only when pricing is approved.
5. Build deeper pages for check-in, guest follow-up, volunteers, groups, media/livestream, discipleship, AI roadmap, and ministry automation.
6. Add final Organization/LocalBusiness schema details once public contact data for Kingdom Propel is locked.


## SEO foundation update — 2026-08-12
Added Organization/WebSite structured data, public Propel email/address, Open Graph metadata, expanded intent-specific landing pages, and updated XML sitemap. Future features are explicitly labeled Coming Soon. Public-facing copy remains 100% Propel.


## V2 Homepage Refinement
Homepage upgraded with premium product storytelling, ministry outcome section, early-adopter positioning, improved visual hierarchy, and stronger conversion flow.

## V9 approved-section sync
- Uses the locked transparent Propel hero image.
- Corrected premium product-card framing for Apps, Websites and Ministry Hub.
- Uses the locked Ministry First / Technology Should Serve the Mission visual.
- Adds partial-availability notes to Digital Evangelism Engine, Discipleship Journeys and Ministry Automation.
- Clarifies Advanced Ministry Analytics as advanced-only capabilities.

## V11 approved homepage + demo updates
- Final locked homepage hero sizing/composition refined for desktop balance.
- Propel Apps and Propel Websites cards now use the final approved Champion Life visual direction.
- Founding Momentum section tightened and visually upgraded without changing its approved message.
- `/demo/` now uses a full personalized ministry intake form powered by Netlify Forms, with conditional church-size logic, role selection, product-interest combinations, spam protection, and a dedicated thank-you page.
- Form submissions are stored in Netlify as `propel-demo-request`. In Netlify, enable a **Form submission notification** for this form to send new submissions to `info@kingdompropel.com` so every request is delivered to the Propel inbox.

## V12 approved sync + personalized demo form
- Preserves the final locked light homepage hero composition with the transparent Propel dashboard + Calvary mobile visual enlarged and positioned to the left for proper balance.
- Preserves the final approved Champion Life app and custom-website visuals in the product cards, with `object-fit: contain` so devices/screens are never clipped.
- Preserves the approved Ministry First / Technology Should Serve the Mission visual and Founding Momentum refinements.
- `/demo/` is now a full Netlify Forms intake experience collecting name, email, phone, organization, organization type, role, church attendance (conditional), product interests/combinations, website and notes.
- Netlify captures submissions under the form name `propel-demo-request`. After deployment, in **Netlify → Forms → Form notifications**, add an email notification for `propel-demo-request` to **info@kingdompropel.com**. This notification destination is configured in Netlify, not hard-coded in HTML.

## V15 approved homepage sync
- Homepage hero composition locked to approved Aug. 13 layout: enlarged product visual, aligned beneath the dark header, full-width bottom action row, and all capability pills on a single desktop line.
- Partner Platform flagship section rebuilt as a premium add-on showcase with Partner Command Center + partner-facing mobile experience.
- Partner Platform now highlights engagement tools, courses/training, donor notifications and messaging, partner PDFs/books/downloads, prayer connection, projects/campaigns, analytics/reporting, receipts/statements, and automation.
- Added Volunteer Scheduling and Needs & Sign-Ups to the main capability grid.
- Added /needs-signups/ landing page.
- Added a restrained optional Professional Voiceover & Media Support callout; this is positioned as a professional service, not a core Propel software feature.

## V18 Partner Platform refinement
- Raised and enlarged the Partner Command Center preview to better use the open space in the premium add-on section.
- Upgraded the dashboard with partner engagement, average partnership, follow-up health, richer partnership growth visualization, resource activity, recurring-gift risk, and more relationship-focused data.
- Increased contrast/readability of the six Partner Platform capability cards and expanded their feature copy.
- Added outcome-oriented language about retention, engagement, and partnership growth without publishing unsupported client performance statistics.


V24: mobile-only repairs for Partner Platform, Founding Momentum and optional voiceover sections; added Apps/Websites cross-links; added premium module UI previews for admin dashboard, kids check-in, giving/donor engagement, volunteer/needs, guest follow-up, discipleship, messaging and events.
