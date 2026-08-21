KINGDOM PROPEL V94 — BLUEPRINT FINISHING PASS

BASELINE
This is a small fixes-only update built directly on the exact restored V91 Blueprint files.
It is not a full-site rebuild and it does not replace unrelated pages or assets.

WHAT THIS UPDATE CHANGES
- Replaces the empty area under the Media demonstration with an after-message chat and next-step experience.
- Adds the custom-branding pill to the Partner Platform demonstration.
- Corrects the oversized/cropped Ministry Insight introduction and removes unintended blank space.
- Gives the Physical to Digital section a deliberate closing statement and action row.
- Top-aligns and restructures the Recommendation section so the full headline and calculator remain visible.
- Places the Propel and Foundations Church logos inside responsive, non-cropping containers.
- Replaces the broken generic footer with a Blueprint-specific next-step form and compact footer.
- Preserves the approved Foundations Church gold, black, and cream content palette. Propel green remains limited to Propel branding/navigation and the Propel-branded partner demonstration.

HOW TO UPLOAD
1. Open this update folder.
2. Drag the demo-blueprint folder into the ROOT of the GitHub repository—the same screen where index.html, assets, church-apps, and the existing demo-blueprint folder are visible.
3. GitHub will show three replacement files inside demo-blueprint:
   - demo-blueprint/index.html
   - demo-blueprint/blueprint.css
   - demo-blueprint/blueprint.js
4. Commit the upload.

Do not upload the outer kingdom-propel-v94-blueprint-finishing-pass folder into the repository.
No new image files are required; this update uses the approved images already in the site.

FORM NOTE
The new closing form uses Netlify Forms. Once these files are deployed through the existing Netlify site, submissions appear in the site's Netlify Forms area under "blueprint-next-step."

VERSION MARKERS
- Stylesheet: /demo-blueprint/blueprint.css?v=94
- Script: /demo-blueprint/blueprint.js?v=94
- JavaScript marker: window.PROPEL_BLUEPRINT_VERSION = '94-v91-finishing-pass'
