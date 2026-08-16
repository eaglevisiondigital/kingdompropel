# PROPEL DIGITAL MINISTRY BLUEPRINT — MASTER PRODUCTION HANDOFF

## Destination
Integrate this experience into the existing Kingdom Propel production project as an isolated route:

`/demo-blueprint/`

Current working Netlify path:
`https://kingdompropel.netlify.app/demo-blueprint`

Final production path:
`https://kingdompropel.com/demo-blueprint`

## Critical integration rule
The existing approved Kingdom Propel production site must remain untouched. Do not redesign, restructure, replace, or globally restyle any approved page, navigation, script, CSS, SEO element, route, or asset to accommodate this Blueprint.

Build the Blueprint as a self-contained mini-site inside:

`/demo-blueprint/`

Recommended files:
- `index.html`
- `blueprint.css`
- `blueprint.js`
- `/assets/`

Use its own CSS and JS. Do not reuse global CSS in a way that can leak styles back into the public site.

Initial privacy:
- Add `<meta name="robots" content="noindex, nofollow">`
- Do not add to the public navigation.
- Do not add to the sitemap yet.

## Core goal
This must be the Propel equivalent of the original ReVitalized Academy Digital Blueprint: so complete, visually compelling, and clearly explained that a pastor, executive pastor, administrator, or board member can walk through it without a live presenter and understand what Propel does, why it matters, and why their church would want it.

This is not a software feature dump.
This is not a template demo.
This is not a generic SaaS dashboard.
This is a complete ministry strategy and technology story.

Quality standard:
TOP-TIER / PREMIUM / CUSTOM / NON-TEMPLATE / WORLD-CLASS.

Every website, app, partner-platform, mobile, dashboard, check-in, giving, workflow, and reporting visual should look custom-built for Foundations Church.

## Brand relationship
Propel is the product/company presenting the Blueprint.
Foundations Church is the fictional demonstration church.

Visual relationship:
**Propel presents → Foundations Church demonstrates.**

Do not let Foundations Church branding replace the Propel brand outside the demo context.

## Foundations Church — locked branding
Approved demo church: **Foundations Church**

Approved tagline:
**LOVE GOD | LOVE PEOPLE | CHANGE THE WORLD**

Approved core palette:
- Gold: `#CBA36A`
- Charcoal: `#111111`
- White: `#FFFFFF`

Locked two-tone logo treatment:
- Dark background: gold + white
- Light background: gold + black/charcoal

The exact approved logo variations are in:
`/approved-assets/foundations-church/`

Use those files as source-of-truth assets. Do not redraw, reinterpret, or redesign the logo.

## Propel branding
Use the actual approved Propel logo assets already present in the Kingdom Propel production project/repository. Do not recreate the Propel mark from scratch.

Customer-facing rule:
Never expose third-party vendors, white-label systems, infrastructure providers, processors, or behind-the-scenes technology. Every capability is presented as a Propel feature/solution unless the user explicitly requests internal implementation detail.

## Positioning
Propel should feel like:
**one connected digital ministry ecosystem**

Primary story:
Website + Mobile Site + App + Giving + Guests + Partner Platform + Groups + Growth Track + Dream Team + Kids/Check-In + Events + Prayer/Care + Communication + Workflows + Leadership Dashboard + Back Office + Reporting.

Core thought:
**One ministry. One connected ecosystem. Every person. Every next step.**

Technology should:
- make ministry easier for pastors and staff
- engage members and partners
- connect first-time visitors
- strengthen donor/giver relationships
- help people take next steps
- reduce disconnected tools and manual admin
- improve visibility and follow-up

## No pricing
The self-guided Blueprint contains **zero pricing**.

Do not show:
- setup fees
- packages
- monthly fees
- processing discounts
- payment-processing incentives

Those are discussed later in a live consultation/proposal.

Final CTAs should focus on:
- **Build My Propel Plan**
- **Get My Propel Estimate**
- **Schedule My Propel Demo**

Recommended primary CTA:
**Build My Propel Plan**

## Sales funnel architecture
Future intended flow:

Public Kingdom Propel site
→ Schedule Demo / Request Information form
→ lead captured
→ immediate choice:
   1. Schedule a live demo
   2. Explore Propel right now
→ `/demo-blueprint`
→ self-guided experience
→ Ask Propel / questions
→ engagement and interest tracking
→ Build My Propel Plan
→ live consultation
→ custom recommendation + pricing
→ optional integrated-giving incentive introduced later in sales process

The Blueprint should be architected so this automation can be added later without rebuilding the presentation.

## Blueprint narrative

### 1. Opening / Vision
Goal: immediate "wow."

Show:
- Propel branding
- Foundations Church branding
- premium laptop/web experience
- premium phone/app experience
- subtle back-office dashboard layer
- headline around one connected ecosystem

Suggested headline:
**One connected ecosystem for the whole ministry.**

Supporting idea:
Connect the church website, app, giving, guests, partners, volunteers, groups, events, communication, and ministry operations in one experience.

### 2. The Ministry Technology Problem
Explain the problem before the solution.

Show the common fragmentation:
- website separate
- app underused
- giving separate
- spreadsheets
- text threads
- multiple databases/forms
- manual guest follow-up
- disconnected volunteers/groups/events
- leaders lacking visibility

Do not attack competitors by name.

Core statement:
**Technology should serve the mission, simplify the load, and help people move forward.**

### 3. The Connected Propel Ecosystem
High-impact system diagram connecting:
- Public Website
- Mobile Website
- Church App
- Giving
- Partner Platform
- Ministry Workflows
- Leadership / Back Office

Then show the human journey:
**Discover → Visit → Connect → Grow → Belong → Serve → Give → Reach**

### 4. Premium Church Website
Create an original Foundations Church website; no generic template.

Needed mockups:
- Home
- I'm New / Plan Your Visit
- Messages / Watch
- Ministries
- Events
- Groups
- Next Steps / Growth Track
- Prayer
- Giving
- Kids
- Serve
- Contact / Locations

For each important page, explain:
- what the visitor sees
- what the page does
- why it matters
- ministry benefit / outcome

### 5. Mobile Website
Demonstrate a genuinely designed mobile web experience, not a desktop page shrunk to fit.

Focus:
- Plan Your Visit
- service times
- directions/parking
- kids info
- watch
- contact/question
- clear thumb-friendly CTAs

### 6. Church App
Use the attached Champion Life images only as feature/information references.

REBUILD every screen as Foundations Church:
- consistent phone frame
- consistent screen proportions
- consistent typography
- consistent navigation
- consistent icon system
- consistent image treatment
- approved Foundations colors/logo

Do not simply recolor old screens.

Core screen library:
- Home
- Watch Live
- Messages / Series Archive
- Prayer
- Prayer Confessions
- Giving
- Events
- Connect
- Growth Track
- Kids
- Outreach
- Dream Team / Serve
- Groups
- Profile / Household
- In-Service / Live Experience

Add missing screens where useful.

### 7. Giving + Donor Engagement
Present giving as part of ministry, not as a payment-processing sales pitch.

Cover:
- one-time giving
- recurring giving
- multiple funds
- tithe / missions / projects
- giving history
- donor statements
- partner access
- impact/storytelling
- donor confidence
- leadership visibility
- donor care/communication where appropriate

Do NOT lead with processing and do NOT mention the processing incentive here.

### 8. Guest Follow-Up
Show:
- digital connection cards
- first-time guest
- second-time guest
- recurring guest
- care assignments
- follow-up tasks
- reminders
- tags/status
- next-step routing
- leader visibility
- guest-to-Growth-Track journey

This should feel pastoral, not like CRM jargon.

### 9. Growth Track / Next Steps
Show a clear discipleship pathway.

Cover:
- customizable steps
- registration
- progress
- reminders
- resources
- serving connection
- next action
- leader visibility

Core message:
**Turn attendance into intentional discipleship.**

### 10. Groups
Cover:
- find a group
- search/filter
- group details
- join/request
- My Group
- group communication
- prayer
- events
- attendance
- leader tools
- care visibility

Core message:
**Move people from rows into relationships.**

### 11. Dream Team / Volunteer Management
Cover:
- serving interests
- onboarding
- teams
- schedules
- availability
- reminders
- accept/decline
- substitutions/swaps where supported
- team communication
- training/resources
- check-in
- serving history
- role-based permissions

### 12. Kids + Family + Check-In
Cover:
- household profiles
- child profiles
- secure check-in
- labels/security codes
- classroom assignment
- allergies/important details where appropriate
- secure pickup
- parent updates
- family communication
- kids events
- volunteer access/permissions

### 13. Events
Cover:
- event pages
- registrations
- capacities where needed
- reminders
- attendance/check-in
- follow-up
- calendar
- forms
- payments if applicable
- app + web connection

### 14. Prayer + Care
Cover:
- prayer requests
- private/public options
- praise reports
- pastoral-care routing
- prayer teams
- prayer confessions/resources
- follow-up
- visibility/permissions

### 15. Partner Platform
This is a major section and must be visually robust.

Create a premium secure member/partner portal with:
- My Profile
- Household
- My Giving
- Giving History / Statements
- My Groups
- My Serving
- My Schedule
- My Events
- My Registrations
- Growth Track Progress
- Forms/Documents
- Notifications
- Prayer Requests
- Communication preferences
- My Next Steps

Core message:
**Give every partner a personal ministry hub.**

### 16. Leadership + Back Office
This must make Propel look like more than a church app.

Create premium desktop/tablet dashboard views for:
- Dashboard
- People
- Households
- Giving
- Guests
- Follow-Up
- Groups
- Volunteers / Dream Team
- Kids / Check-In
- Events
- Communications
- Forms
- Workflows
- Reports
- Permissions
- Settings

Dashboard should show believable sample data but not imply actual Foundations Church operations.

### 17. Workflows + Automation
Explain that automation supports care; it does not replace it.

Show examples:
- guest follow-up
- Growth Track reminders
- serving-interest routing
- prayer-care routing
- event reminders
- volunteer reminders
- team communications
- forms routed to correct staff
- donor thank-you / care touchpoints where appropriate

### 18. Reporting + Ministry Insight
Cover:
- engagement journey
- guest follow-up completion
- Growth Track progress
- group connection
- serving participation
- giving trends
- event engagement
- check-in activity
- actionable ministry follow-up

Avoid surveillance-like language. Focus on helping leaders care for people and understand ministry health.

### 19. Ask Propel — Future Self-Guided Assistance
Blueprint should allow for future AI assistant integration.

Example questions:
- Can members see their giving history?
- Can volunteers see when they serve?
- Can we use this for Growth Track?
- Can families check in children?
- Can groups communicate?
- Can we integrate our livestream?

Rule:
If a question is custom, pricing-specific, complex, or outside approved Propel knowledge, the AI must hand off to a live person rather than inventing an answer.

### 20. Sales Intelligence — Future Phase
Architect for future tracking of:
- sections viewed
- completion
- returns
- CTA clicks
- questions asked
- high-interest modules

Internal use only.
Do not make the experience feel creepy to the prospect.

### 21. Final CTA
End with:
**What could Propel look like for your church?**

Supporting thought:
Every ministry is different. Your Propel ecosystem should be too.

Primary CTA:
**Build My Propel Plan**

Secondary CTA:
**Schedule My Propel Demo**

No pricing.

## Presentation UX
The Blueprint should feel like a premium interactive presentation, not a long ordinary marketing page.

Recommended behaviors:
- full-width cinematic sections
- strong section transitions
- scroll-triggered reveals
- tasteful parallax/depth where it improves storytelling
- premium device mockups
- animated ecosystem connections
- sticky/compact progress navigation
- clear section index
- desktop, tablet, and mobile responsive
- self-guided readability
- optional future presentation mode
- optional future prospect-specific route/version

Keep motion sophisticated and restrained. No cheesy animation.

## Visual standard
Use:
- premium dark sections
- light cream/white sections
- Foundations gold/black/white
- strong typography
- meaningful negative space
- high-end church photography if used
- polished device framing
- realistic UI content
- sophisticated dashboards
- non-template page layouts

Avoid:
- stock SaaS blue/purple gradient dashboards
- generic line-icon grids as the primary visual experience
- repeated identical cards
- fake cheesy churches
- overly small text
- clutter
- overuse of glow
- template-style hero sections

## App reference assets
The three files under:
`/reference-assets/champion-life-app-concepts/`
are reference-only.

They communicate previously approved feature directions, but:
- their dimensions are inconsistent
- they use Champion Life branding
- they must NOT be used as final production visuals
- redesign all applicable screens for Foundations Church at consistent dimensions

## Technical isolation
Build within `/demo-blueprint/`.
Use local classes / namespacing such as `.blueprint-*`.
Do not modify global `/styles.css` or `/script.js`.
Do not change existing redirects unless absolutely required.
Do not add this route to public nav/sitemap yet.

Before deployment:
1. compare existing project files against approved V37 checkpoint
2. verify only `/demo-blueprint/` and intentionally added assets changed
3. test homepage and existing routes
4. test direct route load
5. test refresh on `/demo-blueprint/`
6. test desktop/mobile
7. confirm `noindex,nofollow`
8. confirm no public navigation link
9. confirm no pricing
10. confirm no third-party/vendor exposure

## Definition of done
The Blueprint is not done merely when all features are mentioned.

It is done when:
- the experience looks custom and premium
- every major Propel function is visually represented
- every major function explains purpose + benefit
- the visitor understands the full ecosystem without a presenter
- the visitor sees a believable Foundations Church deployment
- the visitor finishes wanting to know what Propel would look like for their own church
- the final CTA moves them to a custom plan/live consultation
- the existing Kingdom Propel production site remains unchanged
