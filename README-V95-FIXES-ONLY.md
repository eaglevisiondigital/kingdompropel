KINGDOM PROPEL V95 — DEPLOYMENT-SAFE MOBILE WORD SPACING

Purpose: permanently correct the mobile Connect → Engage → Equip → Disciple → Send word spacing.

Root cause:
- Desktop uses HTML line-break tags inside each description.
- Mobile hides those line breaks to create a single flowing sentence.
- Ordinary spaces beside the hidden tags can be removed during HTML compression or deployment, joining neighboring words.

Included:
- Replaces every vulnerable ordinary space with a non-breaking space entity that survives deployment
- Connect: “Help people take their first step.”
- Engage: “Keep people connected and involved.”
- Equip: “Give them tools and next steps to grow.”
- Disciple: “Guide them into growing faith and purpose.”
- Send: “Empower them to share their faith and serve others.”
- Preserves the approved desktop line breaks
- Preserves the full-width mobile card layout and existing typography

Install: overlay this fixes-only package on top of V94.
