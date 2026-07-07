# TWIN-EB

Project website for **TWIN-EB** — *From Virtual Twins to Clinical Trials: A Comprehensive Analysis
of Losartan's Pharmacokinetic and Pharmacodynamic Properties in Recessive Dystrophic Epidermolysis
Bullosa Patients.*

🌐 **Live site:** https://clinical-pharmacy-saarland-university.github.io/twin-eb/

The project establishes evidence-based, individualised **losartan** dosing for children with
**recessive dystrophic epidermolysis bullosa (RDEB)**, combining PBPK models, RDEB virtual twins,
population PK/PD models and a prospective paediatric clinical study (**LESS-EB**).

- **Lead:** Prof. Dr. Thorsten Lehr, Clinical Pharmacy, Saarland University
- **Funded by:** DEBRA International & LifeArc (CIF Repurposing programme)
- **Duration:** 1 July 2026 – 2029 (36 months)
- **Version:** 0.1.0-alpha

## Repository layout

The website is a dependency-free **static site** (HTML/CSS/JS, no build step) published with
**GitHub Pages** from the [`docs/`](docs/) folder.

```
docs/
├── index.html            # Landing (full project title, contents index)
├── eb-rdeb.html          # EB & RDEB — the disease
├── losartan.html         # Losartan in RDEB — rationale, REFLECT, the dosing gap
├── virtual-twins.html    # Virtual twins — method
├── project.html          # The project — components, LESS-EB study, timeline
├── team.html             # Team, funders & partners
├── publications.html     # Peer-reviewed foundation
├── families.html         # For families
└── assets/{css,js,img}   # styles.css · site.js (shared nav/footer) · images
```

Shared navigation and footer are injected once from `docs/assets/js/site.js`; each page sets
`<body data-page="...">` for the active link. A `<noscript>` fallback covers JS-disabled clients.

## Run locally

```bash
python -m http.server 5178 --directory docs
# then open http://localhost:5178
```

## Deployment

GitHub Pages, **Deploy from a branch → `main` / `/docs`**. Pushing to `main` updates the live site.

## Confidentiality

The grant proposal under `Proposal/` is **excluded from version control** (see `.gitignore`) and is
not part of this public repository. Do not commit it or any budget, IP or personal data.
