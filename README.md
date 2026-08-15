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

V25: fixed Custom Websites showcase image presentation so all five uploaded website concepts display in their complete native aspect ratio with no top, side, or bottom cropping on desktop or mobile.

V26: fixed invisible Apps ↔ Websites cross-solution button labels on light product hero pages; added explicit dark-green text, mint fill, stronger border, icon, hover/focus states, and mobile sizing.

V27: replaced the harsh white Apps↔Websites cross-solution cards with premium dark Propel-style expansion panels matching the Partner Platform design family, including strong readable typography, subtle green gradients, and consistent green CTAs on desktop and mobile.

V28: Added a comprehensive, original Propel capability system to the main sales flow. It represents People/Household CRM, giving and donor engagement, DAF, card/ACH, QuickBooks, kiosk giving, email/SMS/in-app communication, workflows, tasks, kids check-in, events, forms, public/private calendars, reporting, permissions/security, multi-campus management, media/resources, apps, websites and Partner Platform expansion. The section is intentionally organized by ministry outcome rather than copying the reference screenshots or dumping every feature into one grid.

V29: Established Family Hub as Propel's branded name for the people/household ministry CRM capability. Public-facing language now leads with Family Hub while retaining "People & Household CRM" as explanatory terminology where useful. Homepage positioning: "A ministry CRM built around people, not records." Current copy intentionally describes available people/household/relationship functionality without promising future custom-platform capabilities before they launch.

V30: Expanded Propel Giving highlights without turning the page into a feature catalog. Added year-round giving history and self-service/printable year-end statements; QuickBooks-connected financials; designated funds, fundraising campaigns and pledges; registration payments and payment-over-time options for camps, mission trips and events; and retained the connected website/app ministry experience. Combined simple + recurring giving to keep the section to a balanced six-card grid.

V31: Expanded Church Check-In page to a concise six-card feature/benefit grid. Added kids, youth and serve-team check-in; secure family check-in; labels, rooms/session assignments and attendance; camps/events/special check-in; optional custom-app geofenced check-in prompts within a ministry-selected 1–5 mile radius; and parent text notifications for classroom needs/early pickup. Updated hero copy to position check-in as a broader connected ministry capability without overloading the page.

V32: Refined homepage capability cards. Communication now explicitly supports church-wide or targeted group messaging across push, email, SMS and in-app messages. Events & Registrations now explicitly includes collecting payments through event registration. These remain homepage capability anchors rather than separate standalone pages at this stage.

V33: Expanded Church Groups page from three generic cards to six concise feature/benefit cards: group discovery by life stage/interests/location; group-specific email/text/push/in-app communication; leaders and member organization; meetings/events/calendars/resources; attendance and follow-up; and connection to Propel Family Hub. Updated hero copy to better communicate both congregant and ministry-leader benefits while preserving quick scanability.

V37: Locked the final Ministry First brand-manifesto graphic on the homepage. Replaced the photography-heavy visual with the approved dark manifesto composition, preserved the original visual footprint (1389×1132), removed the redundant light feature-grid portion, updated the origin-story messaging to 28+ years of ministry experience, added the point that some desired capabilities could not be found anywhere at any price, and locked the line “the Kingdom be propelled forward.” Updated accessibility text accordingly.

V44: Incorporated all approved review changes since the V43 download. Preserved the V42 mobile pathway text-spacing repair and V43 desktop experience-card symmetry/overlap repair. Increased readability of the Blueprint left navigation and lower Prepared By / Private Self-Guided copy while retaining Propel green. Reworked the Blueprint opening hero to visually belong to Foundations Church: removed green from the section background, shifted ambient/orbit treatment to Foundations gold/charcoal/white, converted the approved Foundations horizontal logo asset to a transparent-background treatment, and refined the Foundations website/app mockups to use the church's gold/black/white visual language while retaining the Propel Ministry Hub as the platform layer.


V45: Corrected the Propel Ministry Hub experience-card mockup frame. The dashboard frame now follows the approved dashboard's 4:3 composition, removes the previous desktop scale-up, reduces excess inset space, and keeps the full mockup cleanly contained on desktop, tablet, and mobile.
