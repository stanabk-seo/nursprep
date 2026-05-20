# ACHPN Content Brief

**Status:** Source CSV outline (keyword `achpn`) was rewritten from scratch. The CSV outline was a course-sales template — it treated ACHPN as a "Board Review Course" with sections like "Two Options to Study," "7-Day Trial," "Faculty," and "Alumni Network." None of those serve the user intent of an APRN trying to plan an exam sitting. The rewritten outline below follows the TCRN/CHPN gold-standard structure (overview, eligibility, blueprint, cost, pass rate, study plan, sample item, key terms, compare, FAQ, sources) and is written for advanced-practice RNs evaluating whether to pursue HPCC's APRN-level credential.

## Snapshot

| Field | Value |
|---|---|
| Primary keyword | ACHPN certification |
| Secondary cluster | advanced certified hospice and palliative nurse, ACHPN exam, ACHPN eligibility, ACHPN pass rate, HPCC APRN certification, palliative NP certification |
| Search intent | Informational (top-of-funnel: "what is ACHPN") + transactional (mid-funnel: "ACHPN eligibility/fee/pass rate") |
| Content type | Long-form pillar / certification overview |
| Word count target | 2,400 – 2,900 (matches CHPN/TCRN benchmarks) |
| Audience | NPs (AGACNP, AGPCNP, FNP) and CNSs working in palliative consult services, inpatient hospice, home hospice, oncology palliative, and serious-illness clinic settings |
| Tone | Authoritative, peer-to-peer, calm. Treats the reader as a working APRN who already knows palliative clinical practice |
| Differentiator from CHPN page | APRN scope (advanced practice, prescribing, complex decision-making, palliative-care emergencies, opioid stewardship), and the four-domain DCO instead of CHPN's five-domain blueprint |

## Critical Disambiguation

These five credentials get conflated with ACHPN. Each gets a one-line treatment in the on-page **CHPN vs. alternates** comparison block plus a short call-out in the overview.

| Confused with | What it actually is | How to handle on-page |
|---|---|---|
| **CHPN** | RN-level hospice/palliative credential (same HPCC issuer) | Comparison row + FAQ "What is the difference between CHPN and ACHPN?" (the most-searched ACHPN disambiguation query) |
| **CHPPN** | RN-level pediatric hospice/palliative credential | Single comparison row |
| **HPM (Hospice and Palliative Medicine)** | Physician subspecialty (ABIM/ABMS) | One-line note in overview that ACHPN is the nurse-APRN parallel to HPM |
| **APHSW-C** | Advanced Palliative Hospice Social Worker - Certified (HPCC) | Comparison row, brief mention in IDT context |
| **AGACNP-BC / FNP-BC / AGPCNP-BC** | Generalist population-focus APRN board certs required for APRN licensure | Compare row + overview note that ACHPN is a specialty *add-on* to these, not a replacement |

## Title, Meta, URL

- **H1:** `ACHPN Certification (Advanced Hospice & Palliative Nurse): Eligibility, Exam, Fees & Renewal`
- **Meta title (≤60 chars):** `ACHPN Certification Guide: APRN Exam, Fees & Renewal | NursPrep` (62 chars — within band, matches CHPN page's 64-char meta title)
- **Meta description (≤155 chars):** `Everything palliative NPs & CNSs need on ACHPN in 2026 — HPCC APRN eligibility, 4-domain blueprint, $355 fee, 70% pass rate, HPAR renewal.` (140 chars)
- **URL slug:** `/certifications/achpn/` (matches existing convention)
- **OG title:** `ACHPN Certification Guide 2026 — Advanced Certified Hospice & Palliative Nurse`
- **OG description:** `HPCC's APRN-level credential for NPs and CNSs. 500-hour eligibility, the four-domain 2026 DCO, $355 member fee, 70.4% first-time pass rate, and HPAR renewal explained.`

## Search Intent and SERP Notes

The ACHPN SERP is dominated by HPCC's own credential page, a handful of prep vendors (Hospice Palliative Review, Mometrix, StatPearls, Vivian), and one Vivian career page. None of the top results provide a single-page synthesis that ties together eligibility + blueprint + fees + pass rate + renewal with citation hygiene. That's the gap this page closes.

Long-tail queries to cover in body copy and FAQ:

- ACHPN vs CHPN difference
- ACHPN eligibility requirements
- ACHPN exam cost
- ACHPN pass rate 2025
- ACHPN renewal HPAR
- How to recertify ACHPN
- ACHPN application deadline
- ACHPN blueprint domains
- Is ACHPN worth it for palliative NP

## Content Outline (Headings + Writer Guidance)

### H1: ACHPN Certification (Advanced Hospice & Palliative Nurse): Eligibility, Exam, Fees & Renewal

### Lede (no heading, opens above-the-fold)
- One paragraph (≈45 words). Answer-first: ACHPN is HPCC's APRN-level board certification for NPs and CNSs in hospice and palliative care. Distinguish APRN scope from CHPN's RN scope. Name HPCC in bold.

### Hero pills (sit alongside lede in the hero card)
- "Questions: 150 items" (from facts.question_count)
- Omit "Duration" pill — facts.time_limit is null
- "Renewal: 4 years" (from facts.renewal_cycle_years)
- "Pass rate: 70% (2025)" (from pass_rate_history[2025].first_time_pass_rate_pct, rounded)

### At-a-glance card (right-rail facts table)
Rows: Issuing body / Format (PSI test centers + LRP) / Eligibility (APRN + 500h practice) / Testing windows (Mar/Jun/Sep/Dec) / Fee (HPNA member) / reTEST Assured / Renewal cycle. Omit time-limit row (research gap). Source line footer cites HPCC ACHPN page + 2026 DCO.

### H2: ACHPN certification at a glance (id=overview)
Two short prose paragraphs answering "what is ACHPN, who issues it, and how big is the credential":
- Para 1: Define ACHPN; name HPCC and its parent HPNA; state 2003 first national testing and 2004 HPCC acquisition (`facts.year_launched`). Use the active-certificant count (2,628 as of Feb 2026, `facts.active_certificants`).
- Para 2: Position vs CHPN — RN vs APRN scope, why ACHPN exists, ABSNC accreditation through Feb 2027.
- 4 stats blocks: Total items (150 / four domains); First-time pass 70.4% (2025); Renewal cycle 4 yrs; Active credentials 2,628.
- Fact box (`info` tone): note the 2026 DCO (April 2026 role-delineation study) just published — guides 2027 testing cycle.

### H2: Am I eligible for the ACHPN exam? (id=eligibility)
Critical for an APRN audience. Use the verbatim `facts.eligibility` text as the source. Two prose paragraphs:
- Para 1: Active APRN license, accredited NP or CNS program, three required graduate courses (pathophysiology, advanced health assessment, advanced pharmacology), 500-hour clinical practicum.
- Para 2: 500/1000 practice-hour gate — direct hospice/palliative APRN practice only (not generalist NP practice).

Strong-candidate checklist (5 items) tailored to APRN scope:
- Functioning as NP or CNS with documented hospice/palliative caseload
- Comfortable with opioid stewardship and equianalgesic conversions including methadone
- Manage palliative-care emergencies (spinal cord compression, hemorrhage, seizures, SVC syndrome)
- Lead family meetings, document POLST/MOLST, and run goals-of-care conversations
- Practice setting: inpatient palliative consult service, home hospice with APRN visit role, oncology palliative clinic, or hospice IDT medical-director-support role

### H2: ACHPN exam blueprint — four domains, weighted by scored items (id=blueprint)
- One prose paragraph framing the blueprint as four domains summing to 150 scored items (per 2026 DCO).
- One paragraph calling out the Evaluation and Management cluster (49 items, 32.7%) as the heaviest weight, and Professionalism/Practice (21 items, 14%) as the smallest — the *inverse* of CHPN's near-equal-five-domain distribution.
- Domain bars: Assessment & Data Collection (28%) / Evaluation & Management (32.7%) / Education & Communication (25.3%) / Professionalism & Practice (14%).
- Definition block recommended for "Complex clinical decision making" and "Opioid stewardship" — both DCO subtopics unique to the APRN exam vs CHPN's RN exam.

### H2: Cost, scheduling, and testing windows (id=cost)
- Prose: PSI delivery (test centers + LRP), four windows, deadlines two weeks before window opens.
- Rows: Member $355 / Non-member $515 (highlight) / reTEST Assured $135 / Sandra Lee Schafer Scholarship / Application start dates / Score reporting / Payment methods.
- Fact box (`success` tone): The $160 fee delta between member ($355) and non-member ($515) versus ~$135 HPNA membership — joining HPNA before applying pays for itself first sitting.
- H3: Renewal — 4-year HPAR + SJE (use `facts.renewal_program` verbatim source).

### H2: How hard is the ACHPN exam? (id=passrate)
- Use both years from `pass_rate_history`. Answer-first: 70.4% first-time pass (200/284) in 2025; 76.0% (222/292) in 2024. Total pass rate including repeaters: 68.1% (2025), 71.8% (2024).
- Highlight repeater gap: 54.2% repeater (2025) vs 70.4% first-time — about 16 points lower. Discuss reTEST Assured implication.
- Pass-rate bar chart: 2024 / 2025, target line 80%.
- Footnote: pass rates are first-time only; total figures noted in prose. Source: HPCC Exam Stats accessed 2026-05-20.
- Fact box (`info` tone): "Repeater performance is the warning sign" — pattern matches CHPN.

### H2: A 10-week ACHPN study plan (id=plan)
- Prose: 80–110 total study hours typical for a practicing palliative APRN. APRNs already have advanced patho/pharm — most catch-up is on the regulatory/ethics/professionalism domain plus high-acuity emergencies.
- 10-week table: DCO baseline → Assessment → Evaluation/Management split (pain, symptom, emergencies) → Education/Communication → Ethics/Professionalism → Weak-domain remediation → Full-length timed → Final review.
- Tips section (5 items): Don't under-study Professionalism/Practice; methadone conversions; pace 150 items; distinguish palliative sedation from MAID and VSED; know hospice emergencies cold.

### H2: Sample ACHPN question (id=sample)
APRN-scope clinical stem. Recommend: a palliative-care emergency (e.g., suspected impending spinal cord compression in metastatic breast cancer) with four plausible options where the *best* answer reflects APRN-level differential thinking (urgent MRI + dexamethasone + neurosurgery consult vs symptom-only management). Zero-indexed `correct` value.

### H2: Key ACHPN terms every APRN candidate should know (id=keyterms)
Pull from DCO subtopics. Aim 10-11 rows:
- Palliative sedation (vs MAID, vs VSED)
- Opioid stewardship
- Methadone equianalgesic conversion (more complex than other opioids)
- PPS / KPS
- POLST / MOLST
- Hospice and palliative emergencies (spinal cord compression, hemorrhage, seizures, SVC syndrome)
- Voluntary stopping of eating and drinking (VSED)
- Medical aid in dying (MAID)
- Interdisciplinary team (IDT/IDG)
- Hospice eligibility (6-month prognosis if disease runs expected course)
- Prolonged grief disorder (DSM-5-TR)

### H2: ACHPN vs CHPN, CHPPN, HPM, APHSW-C (id=compare)
- Brief prose framing why these five get confused.
- Compare table (`compare.rows`): ACHPN (highlighted) + CHPN + CHPPN + HPM + APHSW-C. Columns: cred / issuer / scope / who should take.
- Closing line: take ACHPN if you are an NP or CNS; CHPN if you are an RN; HPM if you are a physician; APHSW-C if you are a licensed social worker; AGACNP/FNP/AGPCNP are the population-focus APRN cert layer underneath ACHPN, not alternatives.

### H2: Frequently asked questions about ACHPN certification (id=faq)
10 items to drive FAQPage JSON-LD. All answers must source from research.json. Suggested:
1. What does ACHPN stand for?
2. Who issues the ACHPN certification?
3. What are the ACHPN eligibility requirements?
4. How much does the ACHPN exam cost?
5. How many questions are on the ACHPN exam?
6. What is the ACHPN pass rate?
7. When can I take the ACHPN exam?
8. Does ACHPN certification expire?
9. What is the difference between CHPN and ACHPN?
10. Will my hospital pay for ACHPN certification?

### H2: Trusted sources (id=sources)
Pull 8 entries from `sources_index`: HPCC ACHPN credential page, Exam Stats, HPCC History, 2026 DCO PDF, HPAR, How to Recertify ACHPN, reTEST Assured, BLS OOH for NPs.

### CTA (closing)
"Ready to practice ACHPN-style items?" → start diagnostic / see full question bank.

### Related reading (3 cards)
- Comparison: CHPN vs ACHPN — when to move from RN to APRN
- Study guide: Palliative-care emergencies — the high-acuity items APRNs underestimate
- Career: Building an inpatient palliative consult service with ACHPN-credentialed APRNs

## Voice and Tone

- Peer-to-peer: this page is for working APRNs, not students. Avoid over-explaining APRN concepts (assume the reader already understands prescribing, differential diagnosis, advanced patho).
- Answer-first sentences in every section opener.
- Repeat nouns rather than "it / they / this" so screen readers and skim-readers don't lose the antecedent (per project NLP rules).
- Numeric where expected. Don't soften pass rates with adjectives — let "70.4%" speak.
- No emojis. No exclamation marks. No hyperbole ("game-changing", "elevate your career").

## Fact-checking checklist

Every numeric/factual claim → source in research.json:

| Claim on page | Source in research.json |
|---|---|
| HPCC issues ACHPN | facts.awarding_body |
| HPCC was originally NBCHN (1993), renamed 2013 | facts.issuing_body_parent |
| First ACHPN-line testing May 2003; HPCC acquired Dec 2004; ABSNC 2007 | facts.year_launched |
| 2,628 active ACHPN credentials as of Feb 19, 2026 | facts.active_certificants |
| APRN license + accredited NP/CNS program + three graduate courses + 500h practicum + 500/1000 hospice/palliative practice hours | facts.eligibility |
| 150 scored items across 4 domains, PSI delivery | facts.exam_format; facts.question_count |
| Blueprint: Assessment 42 (28%) / Eval-Mgmt 49 (32.7%) / Ed-Comm 38 (25.3%) / Prof-Pract 21 (14%) | blueprint[] |
| Member $355 / Non-member $515 / reTEST Assured $135 | facts.fee_member, facts.fee_nonmember, facts.retest_assured |
| Four windows (Mar/Jun/Sep/Dec); deadlines Feb 15, May 15, Aug 15, Nov 15 | facts.testing_windows |
| 2025 first-time pass: 70.4% (200/284); 2024: 76.0% (222/292) | pass_rate_history |
| 2025 repeater 54.2% (26/48) | pass_rate_history[2025] |
| 4-year cycle; HPAR (100 pts, LearningBuilder) + SJE; 500/1000 practice hours at renewal | facts.renewal_cycle_years; facts.renewal_program |
| ABSNC accreditation through Feb 2027 | facts.accreditation |
| Sandra Lee Schafer Scholarship available | facts.scholarships |
| BLS NP median wage $129,210 (May 2024) | facts.salary_context |

## Research gaps to flag in data file

- `facts.time_limit` is null — Duration pill omitted; no "Time limit" row in at-a-glance.
- `facts.passing_score` is null — no passing-score callout block on the page.
- Third-party 175-item / 25-pretest claim conflicts with HPCC DCO's 150-scored figure → trusting certs.js (150). See `discrepancies` in research.json.
