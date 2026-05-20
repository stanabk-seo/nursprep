# Content Brief — CSC Certification

**Prepared for:** Content Writer
**Prepared by:** nursprep-page-builder skill (auto-draft v1)
**Date:** 2026-05-20
**Status:** Draft v1 — source outline in `Content Outline Data.csv` rewritten from scratch. The CSV outline (1) never named AACN Certification Corporation as the awarding body, (2) used generic "Introduction / Conclusion" headings that match no high-intent CSC query, (3) named "Mometrix" as a section (a prep vendor, not the credentialing body — removed), (4) listed blueprint weights of 11/33/43/13 that do not match the current AACN/handbook weights of 19/31/36/15 (see `discrepancies` in research.json), and (5) framed CSC like a course to enroll in rather than a subspecialty exam attached to an existing AACN certification. All corrected below. Every numeric and date is cited from `Content/CSC_research.json`.

---

## 1. Brief Snapshot

| Field | Value |
|---|---|
| Primary keyword | csc exam |
| Secondary cluster | csc certification, cardiac surgery certification, aacn csc, csc exam eligibility, csc exam blueprint, csc pass rate, csc renewal, csc vs cmc, csc nursing certification, csc cut score |
| Search intent | Informational → Transactional (already-certified critical-care RNs deciding whether to add the CSC subspecialty) |
| Content type | Long-form comprehensive guide |
| Target word count | 2,200–2,600 words |
| Funnel stage | TOFU → MOFU |
| Target reader | CCRN- or PCCN-certified RNs (and APRNs) working in cardiothoracic/cardiovascular surgery ICUs, CVICU, CSICU, and post-anesthesia care units who care for adult cardiac surgery patients in the first 48 hours postoperatively, evaluating whether to add the CSC subspecialty |
| Reading level | Grade 9–10 |
| Tone | Practical, peer-to-peer, exam-focused. Reader is an experienced critical-care RN — speak to the post-op cardiac surgery bedside, be precise about the subspecialty-add-on structure |

---

## 2. Critical Disambiguation (Read First)

**CSC is awarded by the AACN Certification Corporation** — the certification arm of the American Association of Critical-Care Nurses. It is administered through AACN's testing service, **PSI** (`facts.awarding_body`, `facts.exam_format` in research.json). Writer must name AACN Certification Corporation as the awarding body in section 1 and reinforce it whenever fees, eligibility, and renewal appear.

**The single most important framing point:** CSC is a **subspecialty add-on**, not a standalone certification. A candidate must already hold a nationally accredited clinical nursing specialty certification (e.g., CCRN, PCCN) to which the CSC credential attaches. Never say "CSC course" — CSC is a board-certified subspecialty exam. (`facts.credential_description`, `facts.eligibility`)

**Credentials readers confuse with CSC:**

| Credential / Concept | Awarding body | Why it confuses people | How to handle |
|---|---|---|---|
| **CMC** (Cardiac Medicine Certification) | AACN Cert Corp | Same body, identical exam format (90 items, 75 scored), both cardiac add-ons | One-line contrast: CMC covers acutely/critically ill adult cardiac patients broadly; CSC is specific to the first 48 hours after cardiac surgery. (`facts.common_confusions`) |
| **CCRN** | AACN Cert Corp | CCRN is the most common credential CSC attaches to | One-line contrast: CCRN is a standalone broad adult critical-care credential; CSC is a subspecialty layered on top of it. CCRN can be a first AACN cert; CSC cannot. |
| **PCCN** | AACN Cert Corp | Progressive-care RNs in cardiac step-down also qualify as the underlying cert | One-line contrast: PCCN covers progressive/intermediate care; CSC adds the post-cardiac-surgery subspecialty on top. |
| **CSC (Pediatric)** | — | There is no pediatric CSC; CSC is adult-only | One-line note: CSC is the adult credential only — there is no pediatric cardiac surgery subspecialty under this code. |

Writer must spell **Cardiac Surgery Certification** out fully on first mention, then use "CSC" throughout.

---

## 3. Title, Meta, and URL

**Working H1 / Title candidates (pick one; writer may refine):**

1. CSC Exam Guide: AACN Cardiac Surgery Certification (2026)
2. CSC Certification: Eligibility, Exam Blueprint, and Renewal Explained
3. How to Add the CSC Cardiac Surgery Subspecialty to Your CCRN

**Meta title (≤ 60 chars):**
CSC Exam Guide: AACN Cardiac Surgery Certification

**Meta description (≤ 155 chars):**
CSC adds a cardiac surgery subspecialty to your CCRN or PCCN. See AACN eligibility, the 90-item exam, $145 fee, 52% pass rate, and 3-year renewal.

**URL slug:** `/certifications/csc/` (per repo convention)

---

## 4. Search Intent and SERP Notes

The CSC SERP is led by AACN's own credential page, plus Mometrix, Vivian Health, FreshRN, and prep vendors. Per project SEO guideline, we will not out-rank AACN head-on for "csc exam" — we win by being faster to scan, by making the subspecialty add-on rule unmistakable up front, and by being honest about the sharp 2024–2025 pass-rate drop.

Searchers fall into three intents that must be served in the first 600 words:

1. **"What is the CSC exam — am I qualified?"** — needs AACN named, the must-already-hold-a-cert rule named, the 1,750/875-hour or 2,000/1,000-hour options named.
2. **"How much, how hard?"** — needs fees ($145 member / $235 non-member), the 2025 pass rate (52.2%), the cut score (55 of 75 scored).
3. **"What's on it?"** — needs the four-domain blueprint and a study plan.

Long-tail to cover on-page: `csc exam eligibility`, `csc exam requirements`, `csc exam cost`, `csc pass rate`, `csc vs cmc`, `is the csc exam hard`, `csc study guide`, `aacn csc renewal`, `csc cut score`, `csc practice test`, `csc blueprint`.

Near-miss searches: `cardiac surgery nurse certification`, `cardiac surgery rn cert`, `aacn cardiac surgery exam` — should resolve here via natural on-page usage.

---

## 5. Content Outline (Headings + Writer Guidance)

Headings are descriptive and question-led per SEO rule #5. Mirror the sibling CMC page structure section-for-section for site consistency.

### H1 — CSC Exam Guide: AACN Cardiac Surgery Certification

**Intro / lede (140–200 words):**
- Sentence 1: one-line definition answering *What is the CSC exam?* — the AACN subspecialty credential for nurses caring for adult cardiac surgery patients in the first 48 hours postoperatively. (`facts.credential_description`)
- Name the awarding body (**AACN Certification Corporation**) and the scope. (`facts.awarding_body`)
- State the subspecialty add-on rule immediately: CSC attaches to an existing cert (CCRN, PCCN). (`facts.eligibility`)
- Contrast with the sibling CMC in one line. (`facts.common_confusions`)
- Place primary keyword "CSC exam" in sentence 1 and once more in the final intro line.

---

### H2 — What Is the CSC (Cardiac Surgery Certification)?

- Expand definition to 150–200 words. Full credential name (**Cardiac Surgery Certification**), awarding body (**AACN Certification Corporation**).
- Emphasize the subspecialty structure: it sits on top of CCRN, PCCN, or another nationally accredited clinical specialty certification and cannot be a first AACN cert. (`facts.credential_description`, `facts.eligibility`)
- Define the scope precisely: acutely/critically ill adult cardiac surgery patients in the **first 48 hours postoperatively** — CABG, valve repair/replacement, MAZE, and related procedures. (`facts.credential_description`, `blueprint`)
- Note it is accepted by the Magnet Recognition Program (employer quality signal). (`facts.awarding_body` page)
- Active certificants as a credibility data point: **3,767 CSC certificants in 2025**. (`pass_rate_history` table, Total Certificants column)
- Year launched: research could not verify a launch year; do NOT state one. (`facts.year_launched` = null)
- Internal link to the broader nursing certifications hub and to the CMC page.

---

### H2 — Who Should Pursue the CSC?

- Target reader: CVICU / CSICU / cardiothoracic surgery ICU RNs, cardiovascular surgery RNs, and PACU RNs caring for fresh post-op cardiac surgery patients.
- 5–7 bullet list of practice settings (cardiothoracic surgery ICU, cardiovascular surgical ICU, post-anesthesia care unit, cardiac surgery step-down, open-heart recovery).
- "You're probably ready if…" checklist anchored to the hours rule: enough post-op cardiac surgery hours to meet the two-year or five-year option below, AND you already hold CCRN/PCCN. (`facts.eligibility`)

---

### H2 — Am I Eligible for the CSC Exam?

- Open answer-first: you need an active US RN/APRN license, a current nationally accredited clinical specialty certification, AND one of two clinical-hour options. (`facts.eligibility`)
- Eligibility table:

| Requirement | Current Rule |
|---|---|
| License | Current, unencumbered U.S. RN or APRN license |
| Prerequisite certification | Current nationally accredited clinical nursing specialty certification (e.g., CCRN, PCCN) the CSC attaches to |
| Hours — Two-Year Option | 1,750 hrs direct care of acutely/critically ill adult patients over 2 years (875 in most recent year); of those, **875 hrs** in adult cardiac surgery patients within the first 48 hrs post-op |
| Hours — Five-Year Option | 2,000 hrs over 5 years (144 in most recent year); of those, **1,000 hrs** in adult cardiac surgery patients within the first 48 hrs post-op |

- Nuance: hours must be U.S./Canada-based (or comparable) and verifiable by a supervisor or colleague if audited. (`facts.eligibility`)

---

### H2 — What Does the CSC Exam Cover?

- Four-domain blueprint table (weights from current AACN handbook; see discrepancy note). (`blueprint`)

| Domain | Weight |
|---|---|
| Therapeutic Interventions | 36% |
| Complications | 31% |
| Procedures | 19% |
| Monitoring and Diagnostics | 15% |

- Note Therapeutic Interventions + Complications = ~67% of the exam — most study time lives there.
- Format: **90 multiple-choice items (75 scored + 15 unscored pretest), 2-hour limit**, delivered via AACN's testing service PSI at test centers or remotely. (`facts.exam_format`, `facts.question_count`, `facts.time_limit`)
- One sample item in AACN scenario style (post-op cardiac surgery scenario) with rationale. Do not reprint any real bank item.

---

### H2 — How Much Does the CSC Exam Cost?

- Fee table. (`facts.fee`)

| Item | Fee (USD) |
|---|---|
| Initial exam — AACN member | $145 |
| Initial exam — non-member | $235 |
| Renewal by exam — member / non-member | $120 / $165 |
| Renewal by Synergy CERPs — member / non-member | $75 / $130 |

- Context: AACN membership delta ($90) usually outweighs the cost of joining. Many cardiac surgery programs reimburse the fee.

---

### H2 — How Hard Is the CSC Exam? (Pass Rate)

- Answer-first with the cut score: you need **55 of 75 scored items** correct (raw cut score, effective 01/31/2022, modified-Angoff method). (`facts.passing_score`)
- Pass-rate history (first-time): **2025 = 52.2%** (1,184 tested), **2024 = 51.3%** (934 tested), **2023 = 69.7%** (1,021 tested). (`pass_rate_history`)
- Be honest about the sharp drop from ~70% (2023) to low-50s (2024–2025); likely reflects content updates following the 2020 National Practice Analysis. Frame as: the CSC is now one of the harder AACN subspecialty exams — structured prep matters. (`facts.recent_changes`)

---

### H2 — How Should I Prepare for the CSC Exam?

- AACN resources: CSC Exam Handbook with test plan and sample questions, AACN online practice exam, AACN review books/bundles.
- High-yield clinical anchors built around the blueprint weighting:
  - Therapeutic interventions: chest tube management, post-op vasoactive/inotrope drips, temporary epicardial pacing, mechanical ventilation/weaning, tight glycemic control, pain management.
  - Complications: bleeding/tamponade, low cardiac output syndrome, dysrhythmias (post-op AF), AKI, respiratory failure, neuro events, sternal wound infection.
  - Procedures: CABG, valve repair/replacement, MAZE, vascular surgeries.
  - Monitoring and diagnostics: CVP/PA pressures, capnography, ABGs, coagulation labs, ECG interpretation.
- Realistic plan: 6–10 weeks, ~60–100 study hours, with at least one full-length timed practice run.

### Suggested study plan (writer may render as a table on the page)

| Week | Focus | Practice qs |
|---|---|---|
| 1 | Read AACN CSC test plan + baseline diagnostic | 25 |
| 2 | Therapeutic interventions I — chest tubes, pacing, drips | 50 |
| 3 | Therapeutic interventions II — ventilation, glycemic, pain | 50 |
| 4 | Complications — bleeding, tamponade, low cardiac output | 50 |
| 5 | Complications — dysrhythmias, renal, pulmonary, neuro | 50 |
| 6 | Procedures — CABG, valves, MAZE, vascular | 40 |
| 7 | Monitoring & diagnostics — hemodynamics, labs, ECG | 40 |
| 8 | Full-length timed practice + error log; targeted review | 75 |

---

### H2 — How Do I Renew the CSC?

- Answer-first: CSC is valid for **3 years**, beginning the first day of the month you passed. (`facts.renewal`)
- Two pathways: (1) Renewal by Synergy CERPs — **25 Category A Clinical Judgment CERPs** plus continued practice (432 hrs over 3 years, 144 in the most recent 12 months); (2) Renewal by exam. (`facts.renewal`)
- Note CSC renewal is typically synced with the underlying CCRN/PCCN cycle.
- Lapsed credential: must re-test.

---

### H2 — CSC vs CMC vs CCRN: Which Fits?

| Credential | For | Awarding body | One-line scope |
|---|---|---|---|
| **CSC** | CCRN/PCCN-certified cardiac surgery RNs | AACN Cert Corp | First 48 hrs after adult cardiac surgery |
| **CMC** | CCRN/PCCN-certified cardiac RNs | AACN Cert Corp | Acutely/critically ill adult cardiac patients (medicine) |
| **CCRN** | Adult critical-care RNs | AACN Cert Corp | Standalone broad adult critical care (the base cert) |
| **PCCN** | Progressive-care RNs | AACN Cert Corp | Intermediate/progressive adult care (alt base cert) |

(`facts.common_confusions`)

**Take CSC if most of your shift is fresh post-op cardiac surgery patients.** Take CMC if your cardiac patients are medical rather than surgical. Both require an underlying CCRN or PCCN first.

---

### H2 — Frequently Asked Questions

6–10 short Q&A pairs (eligibility, prerequisite cert, cut score, retake, renewal, CSC vs CMC, is it hard, employer reimbursement, expiration).

---

### H2 — Sources

Reference list of 6–10 sources, all from `research.json.sources_index`. All AACN URLs must point to specific pages.

---

## 6. Voice and Tone

- Answer-first: every H2 resolves its question in the first sentence, then expands.
- Use exact numbers from research ($145, $235, 52.2%, 55 of 75, 3 years, 1,750/875 hrs, 2,000/1,000 hrs). No hedging where a real number exists.
- Repeat the noun ("the CSC exam," "AACN Certification Corporation") instead of "it/they" on first mention of each section, per NLP rule.
- Hammer the subspecialty-add-on rule — it is the most common misunderstanding.

---

## 7. Fact-Checking Checklist

Every claim must trace to `Content/CSC_research.json`. Re-verify before publish:

| Claim | Source in research.json |
|---|---|
| Awarding body = AACN Certification Corporation | `facts.awarding_body` |
| CSC is a subspecialty add-on requiring an underlying cert | `facts.credential_description`, `facts.eligibility` |
| Eligibility = active RN/APRN + accredited cert + 2-yr (1,750/875) OR 5-yr (2,000/1,000) hours | `facts.eligibility` |
| Exam = 90 items, 75 scored + 15 pretest, 2 hours, PSI | `facts.exam_format`, `facts.question_count`, `facts.time_limit` |
| Cut score = 55 of 75 scored (effective 01/31/2022, modified-Angoff) | `facts.passing_score` |
| Fees: $145 member / $235 non-member initial; $120/$165 renewal exam; $75/$130 CERPs | `facts.fee` |
| Blueprint = Therapeutic Interventions 36% / Complications 31% / Procedures 19% / Monitoring & Diagnostics 15% | `blueprint` |
| Pass rates: 2025 52.2% (1,184), 2024 51.3% (934), 2023 69.7% (1,021) | `pass_rate_history` |
| Renewal = 3 years; 25 Category A Clinical Judgment CERPs + 432/144 practice hrs, or re-exam | `facts.renewal` |
| Active CSC certificants = 3,767 (2025) | `pass_rate_history` table |

**Open gap (do NOT state on page):** year credential launched (`facts.year_launched` = null); CSC-specific salary figure (`facts.salary_context` = null).

**Open discrepancy flagged for user:** blueprint weights — page uses AACN/handbook 19/31/36/15; the CSV outline listed 11/33/43/13. (`discrepancies`)

---
