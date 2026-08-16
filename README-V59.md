# Kingdom Propel V59 — V58 + Giving / Payments Calculator System

This is a cumulative change-files update intended to be installed over the current V57 site. It includes the complete V58 Blueprint fixes plus the new Propel Giving + Payments calculator system.

## Included from V58
- Transparent Propel logo asset for light Blueprint pages.
- Transparent Foundations Church horizontal logo asset.
- Approved Champion Life mobile website mockup on iPhone 17 Pro Max.
- Updated Blueprint HTML/CSS plus current Blueprint JS and the full Foundations Church homepage asset for the animated Digital Front Door showcase.

## New in V59
### Homepage compact calculator
- Added late in the sales journey so Propel still leads with ministry value, not payments.
- Nonlinear volume slider from $3K to $1M with substantially more track resolution below $100K.
- Shows potential annual processing savings and potential first-year Propel savings.
- Premium CTAs:
  - See What Your Church Could Save
  - Calculate My Propel Advantage
- Selected volume is handed to the Giving page with `?volume=` and the appropriate section anchor.

### Full Giving / Processing Savings calculator
- Monthly volume range: $3K → $5K → $10K → $25K → $40K → $60K → $100K → $200K → $500K → $1M.
- Estimated existing processing expense: up to 4% of monthly volume.
- Potential savings: up to 99% of estimated processing expense.
- Displays estimated monthly costs, potential monthly savings and potential annual savings.
- Includes qualifying language and ministry-specific use cases.

### Propel + Payments Advantage calculator
- Under $10K: $250 upfront + $10/month.
- $10K–$19,999: $500 upfront + $25/month.
- $20K–$39,999: $1,000 upfront + $50/month.
- $40K–$74,999: $1,500 upfront + $75/month.
- $75K–$100K: $2,000 upfront + $100/month.
- Over $100K: custom discount quote.
- First-year savings = upfront discount + 12 months of monthly discount.

## Files to replace
- `/index.html`
- `/styles.css`
- `/script.js`
- `/giving/index.html`
- `/demo-blueprint/index.html`
- `/demo-blueprint/blueprint.css`
- `/demo-blueprint/blueprint.js`
- `/demo-blueprint/assets/propel-logo-lightpage-approved.png`
- `/demo-blueprint/assets/champion-life-mobile-iphone17-approved.png`
- `/demo-blueprint/assets/foundations/foundations-horizontal-transparent-approved.png`
- `/demo-blueprint/assets/foundations/foundations-website-full.png`

The homepage and Giving page use `?v=59` cache-busting for the primary CSS and JavaScript.
