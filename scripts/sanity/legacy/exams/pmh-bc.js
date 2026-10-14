// PMH-BC exam detail page — structured data.
// Sourced from Content Briefs/PMH-BC_Content_Brief.md and verified against
// Content/PMH-BC_research.json (ANCC PMH-BC credential page, ANCC PMH-BC
// Test Content Outline effective 2024-09-16, ANCC Certification Renewal
// Handbook effective 2025-09-10, and 2025 ANCC Certification Data).
// Lives at /certifications/pmh-bc/ via the paginated template.
//
// Note on internal data: src/_data/certs.js lists 175 questions for PMH-BC,
// but ANCC's PMH-BC credential page and Test Content Outline (effective
// 2024-09-16) both state 150 questions / 3 hours. This page uses 150 / 3 hours
// per ANCC; certs.js should be reconciled in a follow-up commit.

module.exports = {
  code: "PMH-BC",
  name: "Psychiatric-Mental Health Nurse — Board Certified",
  body: "ANCC",
  cat: "specialty",
  catLabel: "Specialty",
  updated: "2026-05",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title:
      "PMH-BC Certification Guide: Eligibility, Exam & Renewal | NursPrep",
    description:
      "Everything psychiatric RNs need on ANCC PMH-BC — eligibility, 4-domain blueprint, $295 ANA-member fee, 71% pass rate, 5-year renewal, and 10-week study plan.",
    ogTitle:
      "PMH-BC Certification Guide 2026 — Psychiatric-Mental Health Nurse Board Certified",
    ogDescription:
      "ANCC eligibility (RN + 2,000 PMH hours + 30 PMH CE hours), the four-domain blueprint, $295/$395 fees, 71% pass rate, and a 10-week study plan.",
  },

  // ---- HERO
  lede:
    "PMH-BC — Psychiatric-Mental Health Nurse — Board Certified — is the ANCC specialty credential for registered nurses delivering mental-health care across inpatient psychiatry, behavioral-health emergency, addictions, community mental-health, forensic, and crisis-stabilization settings. If your shift is suicide-risk assessment, psychopharmacology titration, milieu safety, or therapeutic communication, PMH-BC is the credential that formalizes the psychiatric-mental health RN role.",
  heroPills: [
    { k: "Questions", v: "150 items" },
    { k: "Duration", v: "3 hours" },
    { k: "Renewal", v: "5 years" },
    { k: "Pass rate", v: "71%" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "American Nurses Credentialing Center (ANCC)" },
    { k: "Format", v: "Prometric testing centers (computer-based)" },
    { k: "Scored items", v: "125 of 150 (25 unscored pretest)" },
    { k: "Passing score", v: "Scaled 350 on a 0–500 scale" },
    { k: "Eligibility", v: "Active RN license + 2 yrs full-time RN practice" },
    { k: "Practice hours", v: "2,000 PMH practice hours in last 3 yrs" },
    { k: "CE requirement", v: "30 hrs PMH continuing education in last 3 yrs" },
    { k: "Fee", v: "$295 ANA member · $395 non-member · $220 APNA member" },
  ],
  heroCardFoot:
    "Verified against the ANCC PMH-BC credential page, the ANCC PMH-BC Test Content Outline effective 2024-09-16, and the ANCC Certification Renewal Handbook effective 2025-09-10",

  // ---- TOC
  sections: [
    { id: "overview", label: "Overview" },
    { id: "eligibility", label: "Eligibility" },
    { id: "blueprint", label: "Exam blueprint" },
    { id: "cost", label: "Cost & scheduling" },
    { id: "passrate", label: "Pass rate" },
    { id: "plan", label: "Study plan" },
    { id: "sample", label: "Sample Question" },
    { id: "keyterms", label: "Key terms" },
    { id: "compare", label: "PMH-BC vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "PMH-BC certification at a glance",
    prose: [
      "PMH-BC — Psychiatric-Mental Health Nurse — Board Certified — is ANCC's RN-level specialty board certification for registered nurses delivering psychiatric and mental-health care. The credential is issued by the <strong>American Nurses Credentialing Center (ANCC)</strong>, the credentialing arm of the American Nurses Association (ANA), and is reported on the 2025 ANCC certification-data release as being held by <strong>10,900 active credential holders</strong> as of 2025-12-31.",
      "PMH-BC is a board certification, not a course. PMH-BC is frequently confused with <strong>PMHNP-BC</strong> — the advanced-practice nurse practitioner credential issued by ANCC that requires a master's or doctoral degree in a psychiatric NP program. The two credentials share three letters and a clinical specialty, but PMH-BC is RN-level and PMHNP-BC is APRN-level. See the comparison section below before applying.",
    ],
    stats: [
      { n: "150", l: "Total items", sub: "125 scored · 25 pretest" },
      { n: "3 hrs", l: "Time limit", sub: "Continuous, one form" },
      { n: "71%", l: "2025 pass rate", sub: "972 of 1,366 first-time takers" },
      { n: "5 yrs", l: "Renewal cycle", sub: "75 PMH CE hours + 1 PD category, or re-exam" },
    ],
    factBox: {
      tone: "info",
      title: "PMH-BC vs PMHNP-BC at a glance",
      html:
        "Different scope, same issuing body. <strong>PMH-BC</strong> is ANCC's RN-level specialty board certification for psychiatric-mental health nurses — staff RNs on inpatient psych, behavioral-health ED, addictions, community mental-health, forensic, and crisis units. <strong>PMHNP-BC</strong> is the <em>advanced-practice</em> psychiatric-mental health nurse practitioner credential and requires an MSN or DNP in a psychiatric NP program. Both are issued by ANCC; only one is RN-level.",
    },
    coverImageLabel:
      "Psychiatric-mental health RN conducting a safety check in a 16-bed inpatient psychiatric unit",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the PMH-BC exam?",
    prose: [
      "You are eligible if you hold an <strong>active, unencumbered RN license</strong> in a US state or territory (or a legally recognized equivalent in another country) AND meet ANCC's practice and continuing-education gates. Unlike credentials where hours are recommended but not enforced, ANCC enforces all four eligibility rules as hard application requirements — applicants who fall short must accumulate the hours before applying.",
      "The four eligibility rules are: (1) <strong>active RN license</strong>, (2) the equivalent of <strong>2 years of full-time RN practice</strong>, (3) a minimum of <strong>2,000 hours of clinical practice in psychiatric-mental health nursing within the last 3 years</strong>, and (4) <strong>30 hours of continuing education in psychiatric-mental health nursing within the last 3 years</strong>.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You currently work on an inpatient psychiatric unit, behavioral-health emergency department, addiction or substance-use recovery program, partial-hospitalization program, community mental-health center, forensic psychiatric facility, or crisis-stabilization unit.",
      "Your last three years of timesheets show at least 2,000 hours in psychiatric-mental health nursing — direct PMH patient care, not general med-surg float hours.",
      "Your CE transcript has at least 30 contact hours in psychiatric-mental health content within the last 3 years — general nursing CE does not count toward this gate. APNA-hosted CE and ANA learning modules are obvious sources.",
      "You have logged the equivalent of two years of full-time RN practice; part-time hours pro-rate against the full-time-equivalent rule.",
    ],
  },

  // ---- BLUEPRINT (exact weights from ANCC PMH-BC Test Content Outline effective 2024-09-16)
  blueprint: {
    heading: "PMH-BC exam blueprint — four content domains (effective 2024-09-16)",
    prose: [
      "The PMH-BC exam covers four content domains with the percentage weights below, taken directly from the ANCC PMH-BC Test Content Outline effective <strong>2024-09-16</strong>. The total scored items (125) plus 25 unscored pretest items make up the 150-item exam.",
      "<strong>Implementation</strong> alone carries <strong>46% of the scored items</strong> — almost half the exam. Most failing candidates underprepare for psychopharmacology, crisis management, and therapeutic-communication content and over-rely on day-to-day inpatient experience. Block dedicated weeks for medication management (adverse reactions, lab monitoring, drug interactions), neurostimulation (TMS, ECT), and crisis-intervention protocols.",
    ],
    domains: [
      { label: "Assessment and Diagnosis", weight: 22 },
      { label: "Planning", weight: 21 },
      { label: "Implementation", weight: 46 },
      { label: "Evaluation", weight: 10 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and APNA-member savings",
    prose: [
      "ANCC delivers PMH-BC through <strong>Prometric</strong> testing centers. Once your application is approved, you receive an Authorization to Test (ATT) with a <strong>120-day scheduling window</strong> — book your Prometric seat early in that window to avoid reapplying. Every initial-application price includes a <strong>$140 non-refundable administrative fee</strong>.",
    ],
    rows: [
      { k: "Initial application — APNA member", v: "$220" },
      { k: "Initial application — ANA member", v: "$295" },
      { k: "Initial application — ISPN member", v: "$340" },
      { k: "Initial application — non-member", v: "$395", highlight: true },
      { k: "Retake", v: "$270" },
      { k: "Renewal — ANA / APNA member", v: "$250" },
      { k: "Renewal — non-member", v: "$350" },
    ],
    factBox: {
      tone: "success",
      title: "APNA membership is the cheapest PMH-BC path",
      html:
        "The <strong>American Psychiatric Nurses Association (APNA)</strong> member discount drops the PMH-BC application fee to <strong>$220</strong> — $175 below the non-member rate and $75 below the ANA-member rate. An APNA annual membership typically costs less than that delta, so joining APNA before applying usually reduces total exam cost. Many behavioral-health systems and Magnet-designated hospitals also reimburse the certification fee through a clinical-ladder, behavioral-health-team, or education-budget benefit. Ask your nurse manager or HR before paying personally.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "PMH-BC certification is valid for <strong>5 years</strong>. ANCC offers two renewal pathways under the Certification Renewal Handbook effective 2025-09-10. <strong>Pathway 1 — Continuing Education:</strong> complete <strong>75 contact hours of continuing education in psychiatric-mental health nursing</strong> within the 5-year cycle, with <strong>at least 60 of those 75 hours formally approved</strong> (e.g., ANCC-accredited or AMA PRA Category 1), AND complete at least one additional professional-development category (academic credits, presentations, publications, preceptorship, professional service, 1,000+ practice hours in the specialty, or re-examination).",
      "<strong>Pathway 2 — Recertification by Examination:</strong> retake and pass the current PMH-BC exam at the renewal fee. There is no extended grace period for a lapsed PMH-BC — lapsed candidates must follow ANCC's reinstatement process to regain the credential. Existing <strong>RN-BC (in psychiatric-mental health nursing)</strong> holders renew under the PMH-BC label at their next renewal; the pathway is the same, the credential name changes on certificates issued from that cycle forward.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the PMH-BC exam?",
    prose: [
      "The 2025 ANCC certification-data release reports a <strong>71% pass rate</strong> on the PMH-BC exam, with <strong>1,366 first-time examinees, 972 passes, and 10,900 active PMH-BC credential holders</strong> as of 2025-12-31. Roughly seven-in-ten first-time candidates pass — but the failing 29% rarely fails on bedside experience. Most fail on Implementation-domain content that working psychiatric RNs assume they already know.",
      "The most common failure pattern: candidates over-rely on day-to-day inpatient experience and underprepare for the <strong>Implementation</strong> domain (46% — the largest single block), where the exam tests psychopharmacology (mechanism, adverse reactions, lab monitoring, drug interactions), neurostimulation (TMS, ECT), crisis management protocols, and the structured therapeutic-communication frameworks (motivational interviewing, active listening, reflection) that many candidates last studied in graduate or pre-licensure coursework.",
    ],
    rows: [{ year: "2025", pct: 71 }],
    target: 85,
    footnote:
      "Pass-rate figures per 2025 ANCC certification data (1,366 first-time examinees / 972 passes). 10,900 active credential holders reported in the same release as of 2025-12-31.",
    factBox: {
      tone: "info",
      title: "The lever is Implementation content, not more bedside time",
      html:
        "In the ANCC PMH-BC Test Content Outline, <strong>Implementation</strong> carries <strong>46% of the scored items</strong> — almost half the exam. Most psychiatric RNs can run a milieu or de-escalate a behavioral emergency without a checklist, but fewer can name the lab values that trigger lithium toxicity, the side-effect distinction between SGAs and FGAs, or the indications for ECT on demand. That's where score gaps appear. Block at least two full study weeks for psychopharmacology and crisis content.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 10-week PMH-BC study plan",
    prose: [
      "A structured 10-week study plan covers the four-domain blueprint for most working psychiatric RNs with two or more years of practice — roughly <strong>80 to 120 total study hours</strong>. Practice-question volume ramps through weeks 2–8 and peaks in week 9 with a full-length 150-item timed exam; week 10 is for targeted review, logistics, and a rest day.",
    ],
    weeks: [
      { n: 1, focus: "Read ANCC PMH-BC Test Content Outline (effective 2024-09-16) + baseline diagnostic", qs: 25 },
      { n: 2, focus: "Assessment & Diagnosis I — developmental theory (Erikson, Piaget), MSE, suicide and safety risk assessment", qs: 40 },
      { n: 3, focus: "Assessment & Diagnosis II — psychiatric disorders (thought, mood, neurocognitive, personality, addictions), physiological mimics", qs: 60 },
      { n: 4, focus: "Planning — client-centered care, cultural competence, treatment planning (SMART goals, interdisciplinary work)", qs: 50 },
      { n: 5, focus: "Implementation I — psychopharmacology, medication management, adverse reactions, lab values", qs: 60 },
      { n: 6, focus: "Implementation II — therapeutic communication, motivational interviewing, milieu, group facilitation", qs: 60 },
      { n: 7, focus: "Implementation III — crisis management, neurostimulation (TMS, ECT), integrative interventions", qs: 60 },
      { n: 8, focus: "Evaluation — legal/ethical (self-determination, informed consent), process improvement, outcome measurement", qs: 50 },
      { n: 9, focus: "Full-length timed practice exam (150 items in 3 hours) + error-log review", qs: 150 },
      { n: 10, focus: "Targeted review of weak domains, rest, test day", qs: 40 },
    ],
    tipsHeading: "How PMH-BC candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Don't over-index on bedside experience",
        text:
          "Implementation alone is 46% of the scored items. Most psychiatric RNs can run a milieu without a checklist, but fewer can recite SSRI vs SNRI side-effect profiles or the lithium toxicity threshold on demand. That's where the 29% who fail lose points. Block at least two full study weeks for psychopharmacology and crisis content.",
      },
      {
        kicker: "Pace 150 items across 3 hours",
        text:
          "Pacing is a trained skill. Take at least one full-length timed practice exam under real conditions before test day — fatigue in the last 30–40 items is where unprepared candidates lose the most points. Target: roughly 72 seconds per item.",
      },
      {
        kicker: "Memorize the psychopharm side-effect groups",
        text:
          "First-generation antipsychotics (EPS, tardive dyskinesia, NMS), second-generation antipsychotics (metabolic syndrome, prolactin), SSRIs (serotonin syndrome, sexual side effects), MAOIs (tyramine and hypertensive crisis), benzodiazepines (paradoxical reactions, withdrawal seizures), mood stabilizers (lithium toxicity, lamotrigine and SJS). Build a one-page reference card and review it the night before the exam.",
      },
      {
        kicker: "Know the safety and legal frameworks cold",
        text:
          "Evaluation is only 10% — but ethical and legal items hinge on a small handful of concepts: self-determination, informed consent, capacity vs competence, involuntary commitment (5150 / Baker Act), HIPAA carve-outs for psychotherapy notes, and documentation standards. A one-hour review of each concept pays for itself.",
      },
      {
        kicker: "Practice therapeutic-communication scenarios",
        text:
          "Stems often hide the right answer in the response option that sounds least clinical — open-ended, reflective, non-judgmental. Practice motivational interviewing techniques and the difference between empathy and sympathy. Distractors that include 'why' questions, advice-giving, or false reassurance are almost always wrong.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (constructed to mirror ANCC scenario style; not a real item)
  sample: {
    heading: "Sample PMH-BC question",
    prose: [
      "This item mirrors ANCC's scenario format: a short clinical stem with a psychiatric patient, an active risk or symptom, and four plausibly-correct options where only one is <em>best</em>. Try it before you read the rationale.",
    ],
    q: {
      scenario:
        "A 34-year-old patient with a 10-year history of bipolar I disorder is admitted to an inpatient psychiatric unit on day 4 of a manic episode. The patient has been on lithium 900 mg daily for three years. The patient reports nausea, diarrhea, and a coarse hand tremor over the last 48 hours. Most recent lithium level (drawn 6 hours ago): 1.6 mEq/L. Vital signs: BP 122/78, HR 96, T 37.4°C, RR 18, SpO2 98%.",
      stem: "Which nursing action should the psychiatric-mental health RN prioritize first?",
      options: [
        "Administer the next scheduled dose of lithium 900 mg and document the symptoms.",
        "Hold the next lithium dose, notify the prescriber, and ensure adequate hydration.",
        "Request an as-needed antiemetic and continue the current lithium dose.",
        "Initiate suicide precautions and place the patient on continuous observation.",
      ],
      correct: 1,
      rationale:
        "The patient is showing early lithium toxicity. Therapeutic lithium ranges from 0.6 to 1.2 mEq/L for maintenance; the 1.6 mEq/L level combined with GI symptoms (nausea, diarrhea) and a coarse tremor indicates the patient is moving into the toxic range. The PMH-BC RN holds the next dose, notifies the prescriber for orders (level recheck, possible IV fluids, possible dose adjustment), and ensures hydration — dehydration worsens lithium toxicity by raising serum levels further. Administering the next dose worsens the toxicity. Treating the nausea alone misses the underlying cause. Suicide precautions are not indicated by the data in the stem.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key PMH-BC terms every candidate should know",
    prose: [
      "These terms surface across the four PMH-BC domains. Review them until the definitions feel automatic — scenario-based stems often hinge on recognizing which framework (MSE, recovery model, motivational interviewing) or syndrome (NMS, serotonin syndrome, lithium toxicity) applies to the patient in the stem.",
    ],
    rows: [
      { term: "Mental Status Exam (MSE)", defn: "Structured assessment of appearance, behavior, speech, mood/affect, thought process/content, perception, cognition, insight, and judgment. The PMH equivalent of a full physical assessment.", domain: "Assessment" },
      { term: "Tardive dyskinesia", defn: "Involuntary, repetitive movements (most often face, tongue, limbs) caused by long-term dopamine-receptor blockade from first-generation antipsychotics. May be irreversible if not caught early.", domain: "Implementation" },
      { term: "Neuroleptic malignant syndrome (NMS)", defn: "Life-threatening reaction to antipsychotics. Classic tetrad: hyperthermia, muscle rigidity, autonomic instability, and altered mental status. Discontinue the agent and provide supportive care.", domain: "Implementation" },
      { term: "Serotonin syndrome", defn: "Excess serotonergic activity from SSRI, SNRI, MAOI, or combination overdose. Triad: mental status changes, autonomic hyperactivity, and neuromuscular hyperactivity (clonus, hyperreflexia).", domain: "Implementation" },
      { term: "Lithium toxicity", defn: "Toxic effects above 1.5 mEq/L: nausea, coarse tremor, ataxia, confusion. Above 2.5 mEq/L: seizures, coma. Maintain hydration and routine lithium-level monitoring.", domain: "Implementation" },
      { term: "Motivational interviewing", defn: "Client-centered communication style that elicits change talk by exploring ambivalence. Core skills: open questions, affirmations, reflective listening, summaries (OARS).", domain: "Implementation" },
      { term: "Therapeutic milieu", defn: "Structured, safe inpatient environment used as a treatment modality. Includes physical safety, predictable routines, peer interactions, and staff-modeled behavior.", domain: "Implementation" },
      { term: "Trauma-informed care", defn: "Approach assuming a high prevalence of trauma history in psychiatric populations. Principles: safety, trustworthiness, peer support, collaboration, empowerment, and cultural humility.", domain: "Implementation" },
      { term: "Recovery model", defn: "Strengths-based framework focused on hope, personal responsibility, education, self-advocacy, and peer support. Patient-defined recovery, not symptom elimination.", domain: "Planning" },
      { term: "Electroconvulsive therapy (ECT)", defn: "Neurostimulation modality using brief electrical pulses to induce a controlled seizure. First-line for treatment-resistant depression, catatonia, and severe suicidality; requires informed consent.", domain: "Implementation" },
      { term: "Involuntary commitment", defn: "Legal process (state-specific: 5150 in California, Baker Act in Florida) allowing emergency psychiatric hold of a patient with imminent danger to self, others, or grave disability.", domain: "Evaluation" },
      { term: "Coping and defense mechanisms", defn: "Unconscious psychological strategies (denial, projection, rationalization, sublimation, displacement) that protect against anxiety. Identifying them informs treatment planning.", domain: "Assessment" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "PMH-BC vs. PMHNP-BC, PMHCNS-BC, and adjacent credentials",
    prose: [
      "PMH-BC sits alongside several related credentials in psychiatric-mental health nursing. The most common error is conflating PMH-BC (RN-level) with PMHNP-BC (APRN/NP-level) — the two share three letters but require very different education and scope. Use this table before you apply.",
    ],
    rows: [
      { row: "PMH-BC", highlight: true, body: "ANCC", scope: "Psychiatric-mental health nursing at the RN level across inpatient psych, behavioral-health ED, addictions, community MH, forensic, and crisis settings", who: "Registered nurses with 2 yrs FT practice + 2,000 PMH hrs + 30 PMH CE hrs" },
      { row: "PMHNP-BC", body: "ANCC", scope: "Psychiatric-mental health NURSE PRACTITIONER across the lifespan; diagnosis, prescribing, and psychotherapy within scope", who: "APRNs with MSN or DNP from a psychiatric NP program" },
      { row: "PMHCNS-BC (Adult or Child/Adolescent)", body: "ANCC (renewal only)", scope: "Psychiatric-mental health Clinical Nurse Specialist — diagnosis, treatment, and consultation", who: "Existing CNS holders; ANCC retired initial testing for these credentials" },
      { row: "Adult Psychiatric-Mental Health NP", body: "ANCC (renewal only)", scope: "Legacy adult-only psychiatric NP credential; superseded by PMHNP-BC across the lifespan", who: "Existing certificants only" },
      { row: "CARN", body: "IntNSA Certification Board", scope: "Addictions nursing specifically — substance-use and behavioral addictions", who: "RNs with addictions-focused practice" },
    ],
    closingProse:
      "<strong>Take PMH-BC if you are an RN delivering psychiatric-mental health care.</strong> Pursue PMHNP-BC only after completing a psychiatric NP graduate program. PMHCNS-BC, Adult Psychiatric-Mental Health NP, and Child/Adolescent Psychiatric-Mental Health CNS are closed to new candidates — they exist only as renewals for nurses already credentialed under those titles.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about PMH-BC certification",
    items: [
      { q: "What does PMH-BC stand for in nursing?", a: "PMH-BC stands for Psychiatric-Mental Health Nurse — Board Certified. The credential is issued by the American Nurses Credentialing Center (ANCC), the credentialing arm of the American Nurses Association." },
      { q: "Is PMH-BC the same as PMHNP-BC?", a: "No. PMH-BC is the RN-level specialty certification for psychiatric-mental health nurses. PMHNP-BC is the advanced-practice nurse practitioner credential across the lifespan and requires a master's or doctoral degree in a psychiatric NP program." },
      { q: "How long does it take to prepare for the PMH-BC exam?", a: "Most psychiatric RNs prepare for 8 to 12 weeks. A realistic target is 80 to 120 total study hours spread across the four blueprint domains, with extra time on the Implementation domain (46% of the scored items)." },
      { q: "Is the PMH-BC exam hard?", a: "The PMH-BC exam is moderately difficult. The 2025 ANCC first-time pass rate was 71% — 972 of 1,366 candidates passed. Candidates who rely only on bedside experience tend to struggle with psychopharmacology, crisis management, and therapeutic-communication items." },
      { q: "Can I take the PMH-BC exam without 2,000 psychiatric nursing hours?", a: "No. ANCC enforces all four eligibility rules as hard gates. Applicants must show an active RN license, 2 years of full-time RN practice, 2,000 hours of psychiatric-mental health practice in the last 3 years, and 30 hours of psychiatric-mental health CE in the last 3 years before sitting the exam." },
      { q: "What happens if I fail the PMH-BC exam?", a: "You receive a score report showing performance by domain. You may reapply for a retest at $270 after a mandatory waiting period, and you must submit a new application with proof of additional preparation. ANCC limits retakes to 3 attempts within any 12-month period." },
      { q: "How much does the PMH-BC exam cost?", a: "Non-members pay $395. ANA members pay $295. APNA members pay $220 — the cheapest path. ISPN members pay $340. All initial-application fees include a $140 non-refundable administrative fee." },
      { q: "Does PMH-BC certification expire?", a: "Yes. PMH-BC is valid for 5 years. Renew through 75 contact hours of psychiatric-mental health CE (60 of which must be formally approved) plus one of eight professional-development categories, or by retaking the exam." },
      { q: "Will my employer pay for PMH-BC certification?", a: "Many behavioral-health systems and Magnet-designated hospitals reimburse the certification fee through clinical-ladder, behavioral-health-team, or education-budget benefits. Ask your nurse manager or HR before paying personally." },
      { q: "Is PMH-BC recognized outside the United States?", a: "ANCC accepts candidates with a legally recognized RN-equivalent license in another country provided the other eligibility requirements (2 years RN practice, 2,000 PMH hours, 30 PMH CE hours) are met. ANCC publishes additional documentation requirements for international applicants." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following primary sources. Fees, blueprint weights, and renewal rules shift on ANCC's revision cycle — always verify numeric facts against the current ANCC handbook before relying on them for application decisions.",
    ],
    list: [
      "American Nurses Credentialing Center (ANCC) — Psychiatric-Mental Health Nursing Certification (PMH-BC) credential page — eligibility, exam format, fees, and renewal",
      "ANCC — Psychiatric-Mental Health Nursing Test Content Outline (effective 2024-09-16; PDF updated 2025-08-28) — four-domain blueprint and weights",
      "ANCC — 2025 Certification Data (PDF) — first-time pass rates (1,366 tested / 972 passed = 71%) and total certified (10,900 active credentials as of 2025-12-31)",
      "ANCC — Certification Renewal Handbook (effective 2025-09-10) — 75 CE hours, 60 formally approved, and the 8 professional-development categories",
      "ANCC — General Certification Handbook (PDF) — scaled passing score (350 on 0–500), application policies, retest rules",
      "American Psychiatric Nurses Association (APNA) — ANCC Certification Discounts page — APNA-member fee of $220",
      "ANCC — PMH-BC Test Reference List (updated 2025-09-09) — official recommended preparation resources",
      "US Bureau of Labor Statistics — Occupational Employment and Wage Statistics, Registered Nurses (May 2024) — psychiatric/substance-abuse hospital RN mean wage context",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice PMH-BC-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to the four-domain ANCC PMH-BC blueprint. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full PMH-BC question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "PMHNP-BC",
      title: "PMH-BC vs PMHNP-BC: which psychiatric credential fits your role?",
      blurb: "RN-level certification or APRN nurse-practitioner credential — scope, education path, and career impact for psychiatric nurses.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Implementation",
      title: "Implementation domain: the 46% that decides PMH-BC first-time pass",
      blurb: "Why psychopharmacology, crisis management, and therapeutic communication carry almost half the exam, and the protocols ANCC tests most.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "Mental health",
      title: "Landing a psychiatric RN role with PMH-BC on your badge",
      blurb: "How inpatient psych, behavioral-health ED, and community mental-health hiring managers actually weigh PMH-BC during interviews.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
