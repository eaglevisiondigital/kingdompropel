# Propel Digital Ministry Blueprint — V57 Catch-Up Update

This is a **change-files-only** package. It deliberately re-applies the last several approved Blueprint changes that were not visibly carried through in V56.

## Replace these paths exactly
- `/demo-blueprint/index.html`
- `/demo-blueprint/blueprint.css`
- `/demo-blueprint/blueprint.js`
- `/demo-blueprint/assets/foundations/foundations-website-full.png`

## V57 includes
1. **The Problem** — light cream inverse cards, gold/brown typography, stronger outlines, and individual visual icons for the five disconnected-system problems.
2. **Ecosystem** — cream/light architecture shell with dark inner feature chips, stronger hierarchy and increased readability while preserving the approved Foundations palette.
3. **Digital Front Door** — restored stationary premium browser viewport containing the exact full Foundations Church homepage; the homepage automatically scrolls top-to-bottom and back while the Blueprint slide remains stationary. Hover/focus pauses the motion. Mobile uses manual scrolling.
4. **Physical → Digital** — Foundations cream/gold/black treatment retained and reinforced; Propel sidebar remains green.
5. **Ask Propel** — approved cream/gold presentation treatment, no green in the slide content.
6. **Why Propel** — approved premium cream/gold cards and dark summary banner, no green in the slide content.
7. **Implementation** — approved five-step premium treatment with stronger cards/timeline and Foundations palette.
8. **Future** — approved light Foundations ending page with transparent Foundations identity and light-page Propel identity.
9. Cache-busting has been added to Blueprint CSS/JS and the Foundations homepage image (`?v=57`) so the new files cannot silently display an older cached style sheet after deployment.

## Verification
Open `/demo-blueprint/` and hard-refresh once. In the browser console, `window.PROPEL_BLUEPRINT_VERSION` should return `57-catch-up`.
