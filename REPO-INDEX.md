# HAI — Repo Index

*Plain pointer file. Names and locations only — no content duplicated here.
If a fact here conflicts with the repo/Project it points to, the repo/Project
is correct and this index is stale — update the index, don't trust it over
the source.*

This file lives in `HAI-shared-reference` because it's the one thing every
HAI-family repo and Claude Project can legitimately reference without
violating repo isolation: a map, not shared content.

## Repos

| Repo                | Product                                                                                                                                                                       | Own context doc                                                                                                                                                                                                                                                                                                                                 | Claude Project                                           |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `heritageai-ppha`   | PPHA (Preliminary Planning and Heritage Appraisal) — paid, bought through the funnel checkout                                                                                 | `heritageai-ppha/docs/env-audit.md`, `ppha-overview.md`, `COMPLIANCE.md`                                                                                                                                                                                                                                                                        | HAI — PPHA Builder                                       |
| `heritageai-sohs`   | SoHS (Statement of Heritage Significance) Wizard — paid, self-serve, formerly `heritageai-members`                                                                            | *stale entry corrected 2026-07-12: this repo's docs/ folder is extensively built (docs/compliance/wizard-compliance-spec.md, docs/compliance/sos-report-generation-compliance-spec.md, step-numbering/building-age-plan audits, etc.) — "not yet built" was false. No single canonical overview doc identified; flag for GPS to designate one.* | HeritageAI — Statement of Heritage Significance          |
| `heritageai-funnel` | Enquiry-to-payment engine — Square + Resend, venture-agnostic, SAL is pilot venture                                                                                           | `heritageai-funnel/docs/knowledge/02-funnel-technical-context.md`, `03-ppha-integration-reference.md`                                                                                                                                                                                                                                           | HAI — Funnel                                             |
| `heritageai-read`   | Python pipeline — Google Drive READ-stage document intake/processing. No shared-reference/token consumption found; not a frontend, legitimately exempt from Tier 2 asset sync | `heritageai-read/docs/SETUP.md`                                                                                                                                                                                                                                                                                                                 | *no dedicated Claude Project confirmed — check with GPS* |
| `soane-architects`  | SAL's own marketing site + intake form (Next.js 15) — source of enquiries the funnel processes                                                                                | *repo's own README*                                                                                                                                                                                                                                                                                                                             | *no dedicated Claude Project confirmed — check with GPS* |

*Flag, not auto-corrected: `soane-architects` does not exist under the local `HAI\` folder alongside the other five repos scanned 2026-07-12 (heritageai-funnel, heritageai-ppha, heritageai-read, heritageai-shared-reference, heritageai-sohs). Confirm with GPS whether it lives elsewhere on disk, or whether this entry is itself stale.*

## Claude Projects

| Project                                         | Governs                                                                       | Bound by AN12?                                      |
| ----------------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------- |
| HAI — PPHA Builder                              | `heritageai-ppha`                                                             | No — explicitly lighter, free tool                  |
| HeritageAI — Statement of Heritage Significance | `heritageai-sohs` (compliance authority for) + SAL's own SoHS client drafting | Yes — canonical AN12/GPA2/GPA3/NPPF spec lives here |
| HAI — Funnel                                    | `heritageai-funnel`                                                           | No — no report-content role                         |
| HeritageAI — System Build                       | Google Drive course/methodology product, no repo                              | N/A                                                 |

## Shared infrastructure

| Location                                         | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Used by                                                                                         |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `heritageai-shared-reference` (this repo/folder) | Tier 2 canonical source — HAI-specific shared assets: design tokens (`tokens/`), photograph standardisation modules (`photographs/`), this index. Consumed via git submodule checkout (`shared-reference/`, renamed from `_shared-reference/` 2026-07-12 per GPS directive to drop the leading underscore) by `heritageai-ppha` and `heritageai-sohs`, both verified identical to canonical as of 2026-07-12 — no drift found. Corrected 2026-07-12: previous entries here named this `RAI-shared-reference` (Tier 1) and `HAI-shared-reference` (Tier 2) as two separate locations; only one folder exists on disk, `heritageai-shared-reference`, and it is not itself a git submodule (repos consume it via their own local `shared-reference/` submodule checkout pointing at it) | `heritageai-ppha`, `heritageai-sohs` (confirmed); other HAI-family repos and Projects as needed |

## Isolation rule, restated

No repo reads, writes, or imports from another repo's folder except the
confirmed exceptions logged in each repo's own Project Instructions (e.g.
`heritageai-ppha`'s compiled `shared-reference` photograph module). This
index does not grant any new exception — it's a directory, not a bridge.

## Maintenance

Update this file only when a repo is added, renamed, retired, or its
governing Project changes. Do not add product facts, pricing, or status here
— that belongs in the repo's own context doc, one link away.

*Last updated: 12 July 2026 (audit pass — added `heritageai-read` entry, fixed broken funnel doc pointer, corrected shared-reference infrastructure description, corrected false "not yet built" sohs doc-status, flagged `soane-architects` local-existence gap)*
