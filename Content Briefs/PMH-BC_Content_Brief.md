# Content Brief — PMH-BC Certification

**Prepared for:** Content Writer
**Prepared by:** nursprep-page-builder skill (auto-draft v1)
**Date:** 2026-05-20
**Status:** Draft v1 — source outline in `Content Outline Data.csv` for keyword "pmh bc" rewritten from scratch. The CSV outline (1) never named ANCC as the awarding body, (2) used generic "Introduction / Benefits / Conclusion" headings that map to no high-intent PMH-BC query, (3) skipped the four-domain Test Content Outline (effective 2024-09-16) entirely, (4) listed no fee table or pass-rate section, (5) treated the credential like a course someone enrolls in rather than a year-round Prometric exam, (6) conflated PMH-BC with PMHNP-BC by including generic "psychiatric nurse" language without disambiguation. All of that is corrected below. Every numeric and date below is traceable to `Content/PMH-BC_research.json`.

---

## 1. Brief Snapshot

| Field | Value |
|---|---|
| Primary keyword | pmh-bc |
| Secondary cluster | pmh bc certification, pmh-bc exam, psychiatric mental health nurse certification, ancc pmh-bc, pmh-bc eligibility, pmh-bc requirements, pmh-bc pass rate, pmh-bc renewal, pmh-bc cost, pmh-bc vs pmhnp-bc |
| Search intent | Informational → Transactional (RNs working in psychiatric/mental-health settings deciding whether to sit the exam and how to prepare) |
| Content type | Long-form comprehensive guide |
| Target word count | 2,200–2,600 words |
| Funnel stage | TOFU → MOFU |
| Target reader | Registered nurses with at least two years of full-time RN practice and 2,000 hours of psychiatric-mental health nursing experience — inpatient psychiatric units, behavioral-health emergency departments, addiction-recovery programs, partial-hospitalization programs, community mental-health centers, forensic psychiatric facilities, and crisis-stabilization units — evaluating whether to sit PMH-BC in the next testing window |
| Reading level | Grade 9–10 |
| Tone | Practical, peer-to-peer, exam-focused. Reader is a working psychiatric RN — clinically literate, used to recovery-model language, sceptical of marketing copy. Empathetic about mental-health work without being sentimental |

---

## 2. Critical Disambiguation (Read First)

**PMH-BC is awarded by the American Nurses Credentialing Center (ANCC)** — the credentialing arm of the American Nurses Association (ANA). It is administered through **Prometric** computer-based testing centers. The exam is **150 questions over 3 hours** and the credential is **valid for 5 years** (see `facts.awarding_body`, `facts.exam_format`, `facts.renewal_cycle` in research.json). Writer must name ANCC as the awarding body in section 1 and reinforce it whenever fees, eligibility, and renewal appear.

**Important internal-data note:** `src/_data/certs.js` lists PMH-BC at 175 questions, but ANCC's own Test Content Outline (effective 2024-09-16) and certification page both state **150 questions / 3 hours**. This page uses the ANCC numbers. `certs.js` should be reconciled in a follow-up commit. (`discrepancies` in research.json)

**Credentials readers confuse with PMH-BC:**

| Credential / Concept | Awarding body | Why it confuses people | How to handle |
|---|---|---|---|
| **PMHNP-BC** | ANCC | Almost identical letters; far higher search volume; many RNs Google PMHNP-BC by mistake | One-line contrast: PMHNP-BC is the **advanced-practice nurse practitioner** credential across the lifespan and requires an MSN or DNP in a psychiatric NP track. PMH-BC is the **RN-level specialty** certification. (`common_confusions`) |
| **PMHCNS-BC** (Adult or Child/Adolescent) | ANCC (renewal only) | Same "PMH" prefix; reads like a tier of PMH-BC | One-line contrast: PMHCNS-BC is the Clinical Nurse Specialist version. ANCC retired initial testing for PMHCNS-BC and now only processes renewals. Different scope and educational requirements. |
| **Legacy "RN-BC" in psychiatric-mental health nursing** | ANCC | Older nurses still hold this label | One-line contrast: ANCC standardized the RN specialty credential under the **PMH-BC** label. Newer certificants receive PMH-BC; older certificants may retain RN-BC on their wall plaque until renewal. |
| **CARN** (Certified Addictions Registered Nurse) | IntNSA Certification Board | Overlapping content on substance-use disorders | One-line contrast: CARN focuses specifically on addiction nursing. PMH-BC covers the full psychiatric-mental health scope including but not limited to addictions. |

Writer must spell **Psychiatric-Mental Health Nurse — Board Certified** out fully on first mention, then use "PMH-BC" throughout. Never say "PMH-BC course" — PMH-BC is an exam-based board credential, not a course.

---

## 3. Title, Meta, and URL

**Working H1 / Title candidates (pick one; writer may refine):**

1. PMH-BC Certification: A Complete Guide for Psychiatric-Mental Health Nurses (2026)
2. PMH-BC Certification Guide: Eligibility, Exam, and Renewal Explained
3. How to Earn the PMH-BC: Psychiatric-Mental Health Nurse — Board Certified

**Meta title (≤ 60 chars):**
PMH-BC Certification Guide: Eligibility, Exam & Renewal

**Meta description (≤ 155 chars):**
Everything psychiatric RNs need on ANCC PMH-BC — eligibility, 4-domain blueprint, $295 ANA-member fee, 71% pass rate, 5-year renewal, and study plan.

**URL slug:** `/certifications/pmh-bc/` (per repo convention; lowercase)

---

## 4. Search Intent and SERP Notes

The PMH-BC SERP is dominated by ANCC's credential page, several prep-vendor pages (Mometrix, Pocket Prep, boardcerts.com), Vivian Health, Nomad Health, and military COOL profiles. Per project SEO guideline #1, we will not out-rank ANCC head-on for the brand term — we win by being faster to scan, more honest about the four-domain blueprint, more candidate-centered than ANCC's policy-dense handbook, and clearer than competitor prep pages about the **PMH-BC vs PMHNP-BC** distinction that confuses most searchers.

Searchers fall into three intents that must be served in the first 600 words:

1. **"What is PMH-BC — am I qualified?"** — needs ANCC named, the 2,000-hour and 30-CE prerequisites named, RN-level scope named.
2. **"Is it worth the $295/$395 and how hard is it?"** — needs fees (with APNA $220 discount), 2025 pass rate (71% first-time), 5-year renewal cycle.
3. **"I'm sitting PMH-BC soon — what's on it?"** — needs the four-domain blueprint (Assessment/Diagnosis 22%, Planning 21%, Implementation 46%, Evaluation 10%) and study plan.

Long-tail queries to cover on-page: `pmh-bc eligibility`, `pmh-bc requirements`, `pmh-bc exam cost`, `pmh-bc pass rate`, `pmh-bc vs pmhnp-bc`, `is pmh-bc hard`, `pmh-bc study guide`, `ancc pmh-bc renewal`, `pmh-bc practice questions`, `pmh-bc apna discount`, `pmh-bc prometric`, `psychiatric nurse certification`.

Common near-miss searches: `psychiatric mental health nurse certification`, `psych nurse board certified`, `ancc psychiatric certification` — should resolve here via natural on-page usage.

---

## 5. Content Outline (Headings + Writer Guidance)

Use this outline. Headings are descriptive and question-led per SEO rule #5.

### H1 — PMH-BC Certification: A Complete Guide for Psychiatric-Mental Health Nurses

**Intro (140–200 words, 3 short paragraphs):**
- Sentence 1: one-line definition answering *What is PMH-BC certification?*
- Sentence 2–3: name the awarding body (**ANCC — American Nurses Credentialing Center**) and the scope (RN-level psychiatric-mental health nursing across inpatient psychiatry, behavioral-health emergency, addictions, community mental health, forensic, and crisis-stabilization settings). (`facts.awarding_body`)
- Quick disambiguation: PMH-BC is a board-certified credential, not a course. Sat year-round through Prometric. (`facts.exam_format`)
- Preview the article (eligibility, exam, cost, pass rate, renewal, PMH-BC vs PMHNP-BC, study plan).
- Place the primary keyword "PMH-BC" in sentence 1 and once more in the final intro line.

---

### H2 — What Is PMH-BC Certification?

- Expand definition to 150–200 words.
- Cover: full credential name (**Psychiatric-Mental Health Nurse — Board Certified**), awarding body (**ANCC**), and the credential's role as ANCC's RN-level specialty certification for psychiatric-mental health nursing. (`facts.credential_awarded`)
- Note ABSNC accreditation — a quality signal for employers and Magnet programs. (`facts.accreditation`)
- Include a **definition block** for "psychiatric-mental health nursing" (RN-level care of adults across the lifespan with mental-health, substance-use, or co-occurring disorders) and a second short note that "psych nursing" colloquially includes both inpatient acute psychiatry and community mental-health work.
- Mention active-certificant count as a credibility data point: **10,900 active PMH-BC credentials as of 2025-12-31** — among the larger ANCC RN specialty credentials by volume. (`facts.total_certified`)
- Year-launched is currently unverified in research.json (set to null); writer should NOT guess a year. Refer instead to "long-standing ANCC specialty credential" language.

**Snapshot table (writer must hand this to the page-data file verbatim):**

| Field | Value |
|---|---|
| Issuing body | American Nurses Credentialing Center (ANCC) |
| Total items | 150 (125 scored + 25 pretest) |
| Time limit | 3 hours |
| Format | Prometric computer-based testing |
| Eligibility | Active RN license + 2 yrs FT RN practice + 2,000 hrs PMH practice (last 3 yrs) + 30 hrs PMH CE (last 3 yrs) |
| Fee (ANA member) | $295 · non-member $395 |
| Pass rate (2025) | 71% (1,366 tested, 972 passed; first-time) |
| Renewal cycle | 5 years — 75 CE hrs + 1 PD category |

---

### H2 — Am I Eligible for the PMH-BC Exam?

- Open with answer-first: **Yes, if you hold an active, unencumbered RN license AND have logged 2 years of full-time RN practice AND 2,000 PMH hours in the last 3 years AND 30 PMH CE hours in the last 3 years.** (`facts.eligibility`)
- These are hard gates, not recommendations. Unlike BCEN's TCRN where hours are recommended, ANCC enforces these as application requirements.
- Bullet the four eligibility requirements verbatim from ANCC's page. (`facts.eligibility`)
- "You are a strong candidate if…" list of 4 bullets identifying common PMH settings: inpatient psychiatric units, behavioral-health EDs, addiction/recovery programs, community mental-health centers, forensic psychiatric units.
- International applicants section: ANCC accepts legally recognized non-US equivalents — link to ANCC international-applicant policy.

---

### H2 — What's on the PMH-BC Exam Blueprint?

- Open with answer-first: **PMH-BC is 4 content domains — Assessment and Diagnosis (22%), Planning (21%), Implementation (46%), and Evaluation (10%) — with Implementation carrying almost half the scored items.** (`blueprint`)
- Note the effective date: **Test Content Outline effective 2024-09-16** (current version). (`facts.tco_effective_date`)
- Domain table with weights AND scored-item counts:
  - Assessment and Diagnosis — 28 scored items (22%)
  - Planning — 26 scored items (21%)
  - Implementation — 58 scored items (46%)
  - Evaluation — 13 scored items (10%)
- For each domain, a one-line subtopic summary pulled from the TCO `subtopics` field.
- Practical guidance: most candidates underprepare for Implementation despite it being the largest domain. Psychopharmacology, crisis management, and therapeutic communication appear here.

---

### H2 — How Much Does PMH-BC Cost?

- Open with answer-first fee table. (`facts.fee`)
- Initial exam:
  - Non-member — $395
  - ANA member — $295
  - **APNA member — $220** (cheapest path; APNA $130-ish membership pays for itself)
  - ISPN member — $340
- Note: prices include the $140 non-refundable administrative fee.
- Retest fee — $270 (`facts.retest_fee`, medium confidence)
- Scheduling section: year-round Prometric availability; 120-day testing window after eligibility approval. (`facts.exam_format`)
- Employer reimbursement: most behavioral-health systems reimburse the application fee through clinical-ladder or education benefits — ask before paying out of pocket.

---

### H2 — How Hard Is the PMH-BC Exam?

- Open with answer-first: **The 2025 ANCC first-time pass rate was 71% — 972 of 1,366 candidates.** (`facts.pass_rate_2025`)
- Place this in context: 71% sits near the middle of ANCC RN specialty pass rates (Med-Surg 71%, Nursing Professional Development 72%, Cardiac-Vascular 67%, Gerontological 63%).
- The biggest first-time-fail driver: under-preparing for the **Implementation** domain (psychopharmacology, crisis management, neurostimulation). Candidates who rely on years of inpatient experience without dedicated review of medication management and crisis protocols tend to lose points here.

---

### H2 — A 10-Week PMH-BC Study Plan

- Open with: **A structured 10-week plan is enough for most RNs with 2+ years of psychiatric experience — roughly 80–120 total study hours across the four blueprint domains.**
- Week-by-week table (writer expands these; mapped to blueprint weights):
  - Week 1 — Read ANCC TCO + baseline diagnostic (25 Qs)
  - Week 2 — Assessment & Diagnosis: developmental theory, MSE, suicide/safety risk (40 Qs)
  - Week 3 — Psychiatric disorders: DSM-5-TR, thought, mood, neurocognitive, personality, addictions (60 Qs)
  - Week 4 — Planning: client-centered care, cultural competence, communication barriers (50 Qs)
  - Week 5 — Implementation: psychopharmacology + medication management (60 Qs)
  - Week 6 — Implementation: therapeutic communication, milieu, group facilitation (60 Qs)
  - Week 7 — Implementation: crisis management, neurostimulation, integrative interventions (60 Qs)
  - Week 8 — Evaluation: legal/ethical, process improvement, outcome measurement (50 Qs)
  - Week 9 — Full-length timed practice exam + error-log review (150 Qs)
  - Week 10 — Targeted review of weak domains, rest, test day (40 Qs)
- Tips section (3–5 tips): pace 125 scored items in 3 hours; don't skip ethics/legal; memorize psychopharm side-effect groups; review Mental Status Exam vocabulary cold.

---

### H2 — Sample PMH-BC Question

- One verbatim-style sample question modeled on ANCC's published sample format.
- Clinical scenario (suicide risk assessment, crisis triage, or therapeutic communication preferred — these reflect Implementation, the largest domain).
- 4 plausibly-correct options where only one is *best*.
- Rationale paragraph explaining why the correct option wins and why the distractors fail.

---

### H2 — Key PMH-BC Terms Every Candidate Should Know

- 8–12 domain-specific definitions mapped to the four blueprint domains. Suggested terms:
  - Mental Status Exam (MSE) — Assessment
  - SAD PERSONS / Columbia suicide-severity scale — Assessment
  - Tardive dyskinesia — Implementation (psychopharm)
  - Neuroleptic malignant syndrome (NMS) — Implementation
  - Serotonin syndrome — Implementation
  - Trauma-informed care — Implementation
  - Therapeutic milieu — Implementation
  - Motivational interviewing — Implementation (therapeutic communication)
  - Electroconvulsive therapy (ECT) — Implementation (neurostimulation)
  - Involuntary commitment / 5150 / Baker Act — Evaluation (legal/ethical)
  - Recovery model — Planning
  - SMART goals — Planning

---

### H2 — PMH-BC vs. PMHNP-BC, PMHCNS-BC, and Adjacent Credentials

- Comparison table. Highlight PMH-BC row.
- Rows: PMH-BC (RN), PMHNP-BC (APRN/NP), PMHCNS-BC (CNS, renewal only), Adult Psych-MH NP (renewal only), Child/Adolescent Psych-MH CNS (renewal only), CARN (Certified Addictions RN, IntNSA).
- Columns: Issuing body, Scope, Who it's for.
- Closing prose: **Take PMH-BC if you are an RN.** Pursue PMHNP-BC only after completing a psychiatric NP program. PMHCNS-BC is closed to new candidates.

---

### H2 — Maintaining Your PMH-BC: Renewal Every 5 Years

- Open with answer-first: **PMH-BC is valid for 5 years. Renew with 75 CE contact hours in PMH (at least 60 formally approved) PLUS at least one of eight professional-development categories.** (`facts.renewal_cycle`, `facts.renewal_ce_hours`, `facts.renewal_pd_categories`)
- List the 8 PD categories: academic credits, presentations/lectures, publications/research, precepting students, professional service, practice hours (1,000+ in specialty), re-examination.
- Renewal fees: $250 ANA/APNA member · $350 non-member · $295 ISPN member. (`facts.renewal_fee`)
- Verification: ANCC certificants can verify credentials free through `nursingworld.org/certification/verification/`.

---

### H2 — Frequently Asked Questions About PMH-BC

- 8–10 FAQ items (these drive FAQPage JSON-LD):
  - What does PMH-BC stand for?
  - Is PMH-BC the same as PMHNP-BC?
  - How long does it take to prepare for the PMH-BC exam?
  - Is the PMH-BC exam hard?
  - Can I take PMH-BC without 2,000 PMH hours?
  - What happens if I fail PMH-BC?
  - How many times can I retake PMH-BC?
  - Does PMH-BC expire?
  - Will my employer pay for PMH-BC?
  - Is PMH-BC recognized outside the United States?

---

### H2 — Trusted Sources

List the ANCC primary sources used to verify every numeric claim on the page. Pull list directly from `research.json.sources_index`.

---

## 6. Voice and Tone Notes

- **Answer-first.** Open every H2 with a one-sentence direct answer before context.
- **Numeric where expected.** Always pair a claim with a number from research.json (e.g., "71% first-time pass," not "moderately difficult").
- **Repeat the noun, not "it/they/this."** Especially around PMH-BC vs PMHNP-BC — pronoun ambiguity will hurt the reader.
- **No marketing fluff.** Reader is a clinically experienced RN; over-promising career outcomes erodes trust.
- **Short sentences.** Average 15–18 words. Cap any sentence at 28 words.

---

## 7. Fact-Checking Checklist

Every numeric/factual claim must trace to research.json:

| Claim | Source field |
|---|---|
| ANCC issues PMH-BC | `facts.awarding_body` |
| 150 questions, 125 scored, 25 pretest | `facts.question_count`, `facts.exam_format` |
| 3-hour exam, Prometric, year-round | `facts.exam_format`, `facts.test_vendor` |
| 2 yrs RN + 2,000 PMH hrs + 30 PMH CE hrs eligibility | `facts.eligibility` |
| 4 domains @ 22/21/46/10% weights | `blueprint` |
| TCO effective 2024-09-16 | `facts.tco_effective_date` |
| Fees: $395 / $295 ANA / $220 APNA / $340 ISPN | `facts.fee` |
| Retest fee $270 (medium confidence) | `facts.retest_fee` |
| 2025 pass rate 71% (1,366 tested, 972 passed) | `facts.pass_rate_2025`, `pass_rate_history[0]` |
| 10,900 active certificants as of 2025-12-31 | `facts.total_certified` |
| 5-year renewal cycle | `facts.renewal_cycle` |
| 75 CE hrs, 60 formally approved | `facts.renewal_ce_hours` |
| 1-of-8 PD categories | `facts.renewal_pd_categories` |
| Renewal fees | `facts.renewal_fee` |
| BLS psychiatric-hospital RN mean $98,680 | `facts.salary_context` |
| ABSNC accreditation | `facts.accreditation` |
| certs.js question-count discrepancy (175 vs 150) | `discrepancies[0]` |

**Items intentionally left null/uncited (do not invent):**
- Year credential launched (`facts.year_launched` = null)

**Word count target:** 2,200–2,600 words. Page is informational/transactional and competes with ANCC's own page — depth and clear structure are the differentiators.
