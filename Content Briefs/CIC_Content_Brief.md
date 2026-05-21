# Content Brief — CIC Certification

**Prepared for:** Content Writer
**Prepared by:** nursprep-page-builder skill (auto-draft v1)
**Date:** 2026-05-21
**Status:** Draft v1 — source outline in `Content Outline Data.csv` (keyword `infection preventionist certification`) **rewritten from scratch.** The CSV outline (1) never named CBIC as the awarding body, (2) reframed the topic around a generic "IPCO" course and "nursing home infection preventionist training" rather than the CBIC CIC board credential that `certs.js` defines as canonical, (3) used generic "Introduction / Conclusion" headings that match no high-intent CIC query, (4) skipped the eight-domain blueprint, the 150-item exam, the scaled passing score, the $445 fee, and the five-year recertification cycle, and (5) framed the credential as a course to enroll in rather than an exam to sit. Per the project conflict-resolution rule, `certs.js` wins: this page documents the **CBIC Certification in Infection Control (CIC)**. Every numeric and date below is cited from `Content/CIC_research.json`.

---

## 1. Brief Snapshot

| Field | Value |
|---|---|
| Primary keyword | infection preventionist certification |
| Secondary cluster | cic certification, cic exam, certified in infection control, cbic certification, cic eligibility, cic requirements, cic exam cost, cic recertification, cic vs a-ipc, how to become an infection preventionist |
| Search intent | Informational -> Transactional (working infection preventionists deciding whether to sit the CIC exam and how to prepare) |
| Content type | Long-form comprehensive guide |
| Target word count | 2,200-2,600 words |
| Funnel stage | TOFU -> MOFU |
| Target reader | Infection preventionists and IPC practitioners with at least one year of full-time infection-prevention responsibility |
| Reading level | Grade 9-10 |
| Tone | Practical, peer-to-peer, exam-focused |

---

## 2. Critical Disambiguation (Read First)

**CIC is awarded by the Certification Board of Infection Control and Epidemiology, Inc. (CBIC)** and delivered through Prometric test centers and Prometric's ProProctor remote proctoring (see `facts.awarding_body` and `facts.exam_format`). APIC is the membership society and offers prep; CBIC is the independent certifying body. Name CBIC in section 1 and reinforce it whenever fees, eligibility, and recertification appear.

| Credential / Concept | Awarding body | Why it confuses people | How to handle |
|---|---|---|---|
| **a-IPC** | CBIC | Sounds like a tier of CIC; entry-level | a-IPC is CBIC's entry-level Associate credential with no experience requirement and no renewal -- a stepping stone toward CIC. (`facts.common_confusions`) |
| **LTC-CIP** | CBIC | Same board, similar acronym | LTC-CIP is CBIC's long-term-care infection prevention credential, scoped to nursing homes. CIC is the all-settings credential. |
| **"Infection preventionist"** (job role) | n/a | Role name and credential used interchangeably | "Infection preventionist" is the job role; CIC is the board credential that role earns. |
| **AL-CIP** | CBIC | Advanced credential in same menu | AL-CIP is CBIC's advanced leadership certification for senior IPC leaders. |

Spell **Certification in Infection Control** out fully on first mention, then use "CIC". Never say "CIC course".

---

## 3. Title, Meta, and URL

**H1 candidates:**
1. Infection Preventionist Certification: The Complete CIC Guide (2026)
2. CIC Certification Guide: Eligibility, Exam, and Recertification Explained
3. How to Become Certified in Infection Control (CIC)

**Meta title (<= 60 chars):** Infection Preventionist Certification: CIC Guide

**Meta description (<= 155 chars):** Everything infection preventionists need on CIC certification -- CBIC eligibility, 8-domain blueprint, 150-item exam, $445 fee, and 5-year renewal.

**URL slug:** `/certifications/cic/`

---

## 4. Search Intent and SERP Notes

Informational with strong transactional pull. Answer, in order: who is eligible, what the exam covers (eight domains), how it is scored (scaled 700), what it costs ($445), and how recertification works (five years, IPUs or re-exam). Competing pages: CBIC subpages, Mometrix/ExamEdge, Vivian Health, APIC. Long-tail: "is the CIC exam hard," "CIC passing score," "how many questions on the CIC exam," "CIC vs a-IPC," "CIC recertification 2026."

---

## 5. Content Outline (Headings + Writer Guidance)

**H1:** Infection Preventionist Certification: The Complete CIC Guide

**Intro (answer-first):** "The CIC (Certification in Infection Control) is the board credential for infection preventionists, awarded by CBIC." State the four headline facts in the first two sentences: 150-item exam, scaled passing score of 700, $445 fee, five-year cycle.

**H2 — What is the CIC credential, and who awards it?** CBIC; created by APIC in 1981, first exam 1983. Distinguish CIC from a-IPC, LTC-CIP, AL-CIP.

**H2 — Am I eligible for the CIC exam?** No fixed degree gate, no nursing-only rule. Recommended post-secondary health education, direct-responsibility requirement, work-experience options (1 yr FT / 2 yr PT / 3,000 hrs in 3 years), activity-component rule.

**H2 — What does the CIC exam cover? (Eight domains)** Weighted table using scored-item counts (sum 135). The identification + surveillance + transmission domains carry ~53% of scored items.

**H2 — Cost, scheduling, and exam format** $445; Prometric center or ProProctor; forward navigation (2025-01-02); two 90-min sections, optional 16-min break.

**H2 — How is the CIC exam scored, and is it hard?** Scaled 300-900, pass at 700; Pass message only. CBIC does not publish a pass rate -- do NOT invent one.

**H2 — A study plan for the CIC exam** Domain-weighted plan; APIC text + practice questions.

**H2 — Sample CIC-style question** One scenario with rationale (NursPrep-authored, not a CBIC item).

**H2 — Key infection-control terms every candidate should know** 6-8 definitions.

**H2 — CIC vs a-IPC vs LTC-CIP** Comparison table across the CBIC credential family.

**H2 — Frequently asked questions** 8-10 questions.

**H2 — Trusted sources** From research.json sources_index.

---

## 6. Voice and Tone

Peer-to-peer, practical, answer-first. Exact numbers and units. Repeat the noun ("the CIC exam"). Use entities -- CBIC, APIC, Prometric, ProProctor.

---

## 7. Fact-checking Checklist

| Claim | Source |
|---|---|
| Awarding body = CBIC | facts.awarding_body |
| First exam 1983 (CBIC founded 1981) | facts.year_launched |
| Eligibility: 1 yr FT / 2 yr PT / 3,000 hrs; direct responsibility | facts.eligibility |
| 150 items, 135 scored, Prometric/ProProctor, forward navigation | facts.exam_format |
| Two 90-min sections, optional 16-min break | facts.time_limit |
| Scaled 300-900, pass at 700, Pass message only | facts.passing_score |
| Fee $445 (note: $430 in Jan-2025 PDF) | facts.fee, discrepancies |
| Pass rate NOT published -- leave null | facts.pass_rate |
| Five-year cycle; IPUs or re-exam from 2026-01-01; $430 recert | facts.renewal |
| Eight-domain blueprint, scored items summing to 135 | blueprint[] |
| a-IPC / LTC-CIP / AL-CIP distinctions | facts.common_confusions |
