// PMHNP-BC exam detail page — structured data.
// Sourced from the PMHNP-BC content brief and verified against
// Content/PMHNP-BC_research.json (ANCC PMHNP-BC credential page, ANCC PMHNP
// Test Content Outline effective 2023-04-28, ANCC Certification Handbook
// effective June 2025 v4 2026-01-23, ANCC Certification Renewal Handbook
// effective 2025-09-10, the 2027 ANCC Certification Renewal Handbook effective
// 2027-02-01, and the 2025 ANCC Certification Data release).
// Lives at /certifications/pmhnp-bc/ via the paginated template.
//
// Note on disambiguation: this is the ADVANCED PRACTICE credential. The
// RN-level psychiatric credential lives at src/_data/exams/pmh-bc.js
// (/certifications/pmh-bc/). Every comparison here is written to agree with
// that file: PMH-BC is 150 items / 3 hours / RN-level; PMHNP-BC is 175 items /
// 3.5 hours / APRN-level.
//
// Note on internal data: src/_data/certs.js has no PMHNP-BC row. Adding one is
// a separate commit; certs.js was not touched here.

module.exports = {
  code: "PMHNP-BC",
  name: "Psychiatric-Mental Health Nurse Practitioner - Board Certified",
  body: "ANCC",
  cat: "specialty",
  catLabel: "Specialty",
  updated: "2026-09",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title:
      "PMHNP-BC Certification Guide: Eligibility, Exam & Renewal | NursPrep",
    description:
      "What PMHNP-BC certification requires in 2026 — ANCC eligibility, the five-domain blueprint, $220–$395 fees, 82% pass rate, 12-week study plan, and 2027 renewal changes.",
    ogTitle:
      "PMHNP-BC Certification Guide 2026 — Psychiatric-Mental Health Nurse Practitioner",
    ogDescription:
      "ANCC eligibility (PMHNP degree + 500 supervised clinical hours), the 175-item five-domain exam, $220–$395 fees, 82% pass rate, and how PMHNP-BC differs from RN-level PMH-BC.",
  },

  // ---- HERO
  lede:
    "PMHNP-BC is the Psychiatric-Mental Health Nurse Practitioner (Across the Lifespan) credential issued by the American Nurses Credentialing Center (ANCC). It certifies advanced practice registered nurses (APRNs) who assess, diagnose, prescribe for, and provide psychotherapy to patients with psychiatric conditions from infancy through older adulthood. PMHNP-BC is an APRN credential — the RN-level psychiatric certification is PMH-BC, and the two are not interchangeable.",
  heroPills: [
    { k: "Questions", v: "175 items" },
    { k: "Duration", v: "3.5 hours" },
    { k: "Renewal", v: "5 years" },
    { k: "Pass rate", v: "82%" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "American Nurses Credentialing Center (ANCC)" },
    { k: "Format", v: "Prometric testing centers (computer-based)" },
    { k: "Scored items", v: "150 of 175 (25 unscored pretest)" },
    { k: "Passing score", v: "Scaled 350 on a 0–500 scale" },
    { k: "Eligibility", v: "Active RN license + PMHNP master's, post-grad certificate, or DNP" },
    { k: "Clinical hours", v: "500 faculty-supervised hours inside the PMHNP program" },
    { k: "Coursework gate", v: "3 APRN core courses + training in 2 psychotherapy modalities" },
    { k: "Fee", v: "$220 APNA member · $295 ANA member · $395 non-member" },
  ],
  heroCardFoot:
    "Verified against the ANCC PMHNP-BC credential page, the ANCC PMHNP Test Content Outline effective 2023-04-28, and the 2025 ANCC Certification Data release",

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
    { id: "compare", label: "PMHNP-BC vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "What is a PMHNP-BC?",
    prose: [
      "PMHNP-BC stands for <strong>Psychiatric-Mental Health Nurse Practitioner — Board Certified</strong>. ANCC awards the credential after an APRN completes a psychiatric-mental health nurse practitioner program and passes a 175-item examination, and it is valid for <strong>5 years</strong>. ANCC's official exam title is Psychiatric-Mental Health Nurse Practitioner (Across the Lifespan); the credential was formerly labelled Family Psychiatric-Mental Health Nurse Practitioner.",
      "A PMHNP evaluates patients, orders and interprets diagnostic and laboratory tests, applies DSM-5-TR criteria to reach a diagnosis, prescribes and monitors psychotropic medication, and delivers psychotherapy. ANCC reported <strong>58,578 active certificants</strong> in the program as of 2025-12-31, which makes it ANCC's second-largest nurse practitioner certification after the family NP credential.",
      "The examination aligns with the <strong>Consensus Model for APRN Regulation</strong>, and both the Accreditation Board for Specialty Nursing Certification (ABSNC) and the National Commission for Certifying Agencies (NCCA) accredit it. Employers, credentialing committees, and state boards of nursing treat PMHNP-BC as the national certification that supports psychiatric APRN licensure.",
    ],
    stats: [
      { n: "175", l: "Total items", sub: "150 scored · 25 pretest" },
      { n: "3.5 hrs", l: "Time limit", sub: "Prometric, one continuous session" },
      { n: "82%", l: "2025 pass rate", sub: "8,840 of 10,743 first-time takers" },
      { n: "58,578", l: "Active certificants", sub: "As of 2025-12-31" },
    ],
    factBox: {
      tone: "info",
      title: "PMHNP-BC and PMH-BC are different credentials",
      html:
        "Same issuing body, different licence level. <strong>PMH-BC</strong> is ANCC's RN-level psychiatric-mental health specialty certification: an RN qualifies with 2 years of full-time practice, 2,000 psychiatric practice hours, and 30 psychiatric CE hours, then sits a 150-item, 3-hour exam. <strong>PMHNP-BC</strong> requires a PMHNP master's, post-graduate certificate, or DNP that includes 500 faculty-supervised clinical hours, and its exam runs 175 items over 3.5 hours. PMH-BC nurses deliver psychiatric nursing care; PMHNPs diagnose and prescribe within their state's scope of practice. Read the <a href=\"/certifications/pmh-bc/\">PMH-BC certification guide</a> if you are an RN rather than an APRN.",
    },
    coverImageLabel:
      "Psychiatric-mental health nurse practitioner conducting a medication management visit in an outpatient behavioral health clinic",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "What are the eligibility requirements for PMHNP-BC certification?",
    prose: [
      "You qualify when you hold an <strong>active RN license</strong> in a US state or territory (or a legally recognized equivalent in another country) and have completed a psychiatric-mental health nurse practitioner (Across the Lifespan) <strong>master's degree, post-graduate certificate, or Doctor of Nursing Practice (DNP)</strong> from a program accredited by the Commission on Collegiate Nursing Education (CCNE), the Accreditation Commission for Education in Nursing (ACEN), or the National League for Nursing Commission for Nursing Education Accreditation (CNEA). Post-graduate certificate applicants must show APRN program accreditation specifically.",
      "ANCC also audits the transcript. Your program must include <strong>500 faculty-supervised clinical hours</strong>, three separate graduate-level APRN core courses, coursework content in health promotion and in differential diagnosis and disease management, and clinical training in <strong>at least two psychotherapeutic treatment modalities</strong>. Candidates discover that last requirement late more often than any other, because it depends on how a program structured its therapy practicum rather than on total hours.",
      "There is no post-graduation practice-hour gate. ANCC can authorize you to test once all coursework and supervised clinical hours are finished, before your degree is conferred, provided your Validation of Education (VOE) form and transcripts are on file. ANCC issues the certification itself only after the final degree-conferred official transcript arrives.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You hold an active, unencumbered RN license and have finished or are finishing a CCNE-, ACEN-, or CNEA-accredited PMHNP (Across the Lifespan) master's, post-graduate certificate, or DNP.",
      "Your transcript shows all three graduate APRN core courses as separate, comprehensive courses: advanced physiology and pathophysiology, advanced health assessment, and advanced pharmacology.",
      "Your clinical log totals at least 500 faculty-supervised hours across the lifespan — child and adolescent, adult, and older adult psychiatric populations rather than a single age band.",
      "You completed supervised clinical training in two or more psychotherapy modalities, such as cognitive behavioral therapy plus motivational interviewing or family systems work.",
      "You can prescribe and monitor antidepressants, antipsychotics, mood stabilizers, stimulants, and medications for opioid and alcohol use disorder, and you can order and interpret the labs those agents require.",
    ],
  },

  // ---- BLUEPRINT (counts and weights from the ANCC PMHNP Test Content Outline effective 2023-04-28)
  blueprint: {
    heading: "PMHNP-BC exam blueprint — five content domains (effective 2023-04-28)",
    prose: [
      "The PMHNP-BC exam splits 150 scored items across five domains, weighted as shown below and taken directly from the ANCC PMHNP Test Content Outline effective <strong>2023-04-28</strong>. Twenty-five unscored pretest items sit alongside the scored questions and cannot be identified during the exam, so every item deserves an answer. The published percentages sum to 99 because ANCC rounds each domain; the item counts sum exactly to 150.",
      "<strong>Advanced Practice Skills</strong> carries the largest share at 41 items. It tests screening-instrument selection and interpretation — PHQ-9, GAD-7, Vanderbilt ADHD, AUDIT, DAST, CIWA, COWS — plus the mental status exam, psychiatric emergency management, risk assessment, and psychoeducation. <strong>Ethics, Legal Principles, and Cultural Care</strong> is the domain candidates most often underestimate at 26 items, covering the Patient's Bill of Rights, scope of confidentiality including duty to warn, the ANA Scope and Standards of Practice for psychiatric-mental health nursing, and ethical decision-making around involuntary treatment and least restrictive care.",
      "ANCC also builds items against secondary classifications for body system, drug agent class, and age group, consistent with the APRN Consensus Model. Expect the same clinical concept to appear in a pediatric stem and a geriatric stem with different correct answers.",
    ],
    domains: [
      { label: "Scientific Foundation (33 items)", weight: 22 },
      { label: "Advanced Practice Skills (41 items)", weight: 27 },
      { label: "Diagnosis and Treatment (33 items)", weight: 22 },
      { label: "Psychotherapy and Related Theories (17 items)", weight: 11 },
      { label: "Ethics, Legal Principles, and Cultural Care (26 items)", weight: 17 },
    ],
  },

  // ---- COST
  cost: {
    heading: "How much does the PMHNP-BC exam cost, and how do I schedule it?",
    prose: [
      "The PMHNP-BC application costs between <strong>$220 and $395</strong> depending on which professional association you belong to, and every price includes a <strong>$140 non-refundable administrative fee</strong>. ANCC accepts applications year round and delivers the exam at <strong>Prometric</strong> test centers. Once ANCC approves your application you receive an Authorization to Test (ATT) notice and have <strong>120 days</strong> to book a seat. If you cannot test inside that window you may request one new 120-day window for a $100 re-assignment fee.",
      "Claim your membership discount within 5 business days of ANCC receiving your application. Discounts cannot be combined, and ANA e-membership does not qualify for the ANA-member rate.",
    ],
    rows: [
      { k: "Initial application — APNA member", v: "$220" },
      { k: "Initial application — AANP student member", v: "$290" },
      { k: "Initial application — ANA member", v: "$295" },
      { k: "Initial application — AANP, ISPN, or GAPNA member", v: "$340" },
      { k: "Initial application — non-member", v: "$395", highlight: true },
      { k: "Renewal — APNA member", v: "$250" },
      { k: "Renewal — ANA member", v: "$275" },
      { k: "Renewal — non-member", v: "$375" },
      { k: "Exam re-assignment (new 120-day window)", v: "$100" },
    ],
    factBox: {
      tone: "success",
      title: "APNA membership is the cheapest route to PMHNP-BC",
      html:
        "The <strong>American Psychiatric Nurses Association (APNA)</strong> discount drops the application to <strong>$220</strong> — $175 below the non-member price and $75 below the ANA rate. An APNA membership usually costs less than that gap, so joining before you apply lowers your total outlay and gives you access to psychiatric continuing education that counts toward renewal later. Members of the American Association of Nurse Practitioners, the International Society of Psychiatric-Mental Health Nurses, and the Gerontological Advanced Practice Nurses Association each pay $340. Many health systems reimburse the fee through a provider education benefit, so ask your credentialing office before paying personally.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "PMHNP-BC certification lasts <strong>5 years</strong>, and you may submit a renewal application up to one year before it expires. Under the ANCC Certification Renewal Handbook effective 2025-09-10, renewal requires <strong>75 continuing education contact hours</strong> tied to the full scope of the PMHNP role, at least 60 of them formally approved. As an APRN you must complete <strong>25 of those 75 hours in advanced pharmacology</strong>, and you must finish at least one of the eight professional development categories in its entirety.",
      "<strong>The renewal framework changes on 2027-02-01.</strong> ANCC published the 2027 Certification Renewal Handbook in July 2026, and it governs every renewal application submitted on or after that date; applications submitted earlier stay under the current handbook. The 2027 framework keeps the five-year cycle, the 75 contact hours, and the 25 pharmacology hours for APRNs, then replaces the eight-category list with a single <strong>Selected Professional Development activity</strong> chosen from three groupings — additional continuing education, practice, or scholarship. ANCC frames it as a more flexible way to evidence continuing competence. Letting the credential lapse carries a practical risk beyond paperwork: for APRNs, an expired certification can affect eligibility to practise depending on state licensure rules.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the PMHNP-BC exam?",
    prose: [
      "The 2025 ANCC certification-data release reports an <strong>82% first-time pass rate</strong> for the PMHNP (Across the Lifespan) exam: <strong>8,840 of 10,743</strong> first-time candidates passed. That sits above the 71% recorded for the RN-level PMH-BC exam in the same release. Passing means a scaled score of <strong>350 or higher on a 0–500 scale</strong>, with the cut score set by a subject-matter-expert panel using the Modified Angoff method.",
      "Candidates who fail rarely fail on psychopharmacology alone. Score reports break performance out by domain, and the recurring weak spots are Ethics, Legal Principles, and Cultural Care — duty to warn, capacity versus competence, least restrictive alternative, informed consent for minors — together with the screening-instrument content inside Advanced Practice Skills. Both are graduate-coursework topics that fade quickly once a candidate is deep into clinical rotations.",
      "Most candidates test within months of finishing a PMHNP program, which lifts the headline figure. Plan a longer runway if you are returning after a gap in psychiatric practice or entering through a post-graduate certificate after years in another NP specialty.",
    ],
    rows: [{ year: "2025", pct: 82 }],
    target: 90,
    footnote:
      "Pass rate per the 2025 ANCC Certification Data release (10,743 first-time tested / 8,840 passed). ANCC publishes only the current year on its public data sheet, so no multi-year PMHNP-BC trend is shown here.",
    factBox: {
      tone: "info",
      title: "Score reports are diagnostic — use them",
      html:
        "A failing PMHNP-BC score report lists performance for each of the five content areas. Candidates who retest without reading that breakdown tend to re-study what they already knew. You may retest <strong>60 calendar days</strong> after your last attempt and may not test more than <strong>three times in any 12-month period</strong>, so each attempt is worth spending on your two weakest domains rather than on another full content sweep.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 12-week PMHNP-BC study plan",
    prose: [
      "Twelve weeks covers the five-domain blueprint for most candidates finishing or recently graduated from a PMHNP program — roughly <strong>100 to 140 total study hours</strong>. Question volume climbs from week 2, peaks in week 11 with a full-length 175-item timed exam under real conditions, and eases in week 12 for targeted review and test-day logistics. Stretch this to 16 weeks and add a second full-length attempt if you are returning to psychiatric practice after time away.",
    ],
    weeks: [
      { n: 1, focus: "Read the ANCC PMHNP Test Content Outline (effective 2023-04-28) + baseline diagnostic across all five domains", qs: 30 },
      { n: 2, focus: "Scientific Foundation I — advanced pathophysiology, neuroanatomy, neurophysiology, neurodevelopment", qs: 40 },
      { n: 3, focus: "Scientific Foundation II — psychopharmacokinetics and pharmacodynamics, EPS, NMS, psychopharmacogenomics and CYP interactions", qs: 60 },
      { n: 4, focus: "Advanced Practice Skills I — mental status exam, clinical interviewing, risk assessment, psychiatric emergency management", qs: 60 },
      { n: 5, focus: "Advanced Practice Skills II — screening tools (PHQ-9, GAD-7, Vanderbilt ADHD, AUDIT, DAST, CIWA, COWS), psychoeducation, recovery and resilience", qs: 60 },
      { n: 6, focus: "Diagnosis and Treatment I — DSM-5-TR criteria and differentials across mood, psychotic, anxiety, trauma, and neurodevelopmental disorders", qs: 60 },
      { n: 7, focus: "Diagnosis and Treatment II — lab and diagnostic test selection, medical mimics, psychopharmacotherapeutic selection and monitoring", qs: 60 },
      { n: 8, focus: "Diagnosis and Treatment III — substance use disorders, medications for opioid and alcohol use disorder, complementary and alternative treatments", qs: 60 },
      { n: 9, focus: "Psychotherapy and Related Theories — CBT, interpersonal, humanistic, behavioral, change theories, family systems, therapeutic alliance and boundaries", qs: 50 },
      { n: 10, focus: "Ethics, Legal Principles, and Cultural Care — Patient's Bill of Rights, confidentiality and duty to warn, involuntary treatment, least restrictive care, cultural and spiritual competence, advocacy", qs: 60 },
      { n: 11, focus: "Full-length timed practice exam (175 items in 3.5 hours) + error-log review by domain", qs: 175 },
      { n: 12, focus: "Targeted review of the two weakest domains, Prometric logistics, rest, test day", qs: 40 },
    ],
    tipsHeading: "How PMHNP-BC candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Treat Ethics and Legal as testable content",
        text:
          "Ethics, Legal Principles, and Cultural Care is 26 scored items, more than Psychotherapy and Related Theories. Duty to warn, scope of confidentiality, decision-making capacity, informed consent for minors, involuntary treatment thresholds, and least restrictive care each carry item weight. Give the domain a full week rather than skimming it the night before.",
      },
      {
        kicker: "Know the screening instruments by their thresholds",
        text:
          "Advanced Practice Skills asks you to select and interpret tools. Know the item count, score bands, and clinical action threshold for PHQ-9, GAD-7, Vanderbilt ADHD, AUDIT, DAST, CIWA, and COWS. Recognizing that a CIWA score of 12 changes your benzodiazepine plan is exactly the decision the exam scores.",
      },
      {
        kicker: "Study across the lifespan, not your own caseload",
        text:
          "The blueprint is Across the Lifespan and ANCC classifies items by age group from infant to frail elderly. If your practicum was adult outpatient, deliberately study pediatric psychopharmacology dosing and boxed warnings, along with geriatric prescribing cautions such as anticholinergic burden and QTc risk.",
      },
      {
        kicker: "Rehearse 3.5 hours of sustained testing",
        text:
          "175 items in 3.5 hours works out to roughly 72 seconds per item. Take at least one full-length timed exam in a single sitting before test day. Concentration across the final 40 items is a trained skill, and that is where unprepared candidates lose points.",
      },
      {
        kicker: "Answer as the prescriber, not as the bedside nurse",
        text:
          "Many stems hand you a plausible diagnosis and ask what you do next as a prescriber: which baseline labs before starting lithium or a second-generation antipsychotic, when to stop an antidepressant, which agent to avoid in pregnancy, how to monitor clozapine. Practise reasoning as the clinician who writes the order rather than the one who carries it out.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (constructed to mirror ANCC scenario style; not a real ANCC item)
  sample: {
    heading: "Sample PMHNP-BC question",
    prose: [
      "This item mirrors ANCC's scenario format: a clinical stem, a prescribing decision, and four defensible-looking options where only one is <em>best</em>. Answer it before you read the rationale.",
    ],
    q: {
      scenario:
        "A 22-year-old is referred to your outpatient psychiatric clinic. Six weeks ago a primary care clinician started sertraline 50 mg daily for depression and titrated to 100 mg. Over the past three weeks the patient reports sleeping two to three hours a night without fatigue, racing thoughts, pressured speech, and $8,000 of credit card spending on a business idea. The patient's mother has bipolar I disorder. Urine drug screen is negative, TSH is normal, and vital signs are unremarkable. The patient is oriented, denies suicidal and homicidal ideation, and is willing to follow the plan you recommend.",
      stem: "Which action should the PMHNP take first?",
      options: [
        "Increase sertraline to 150 mg daily to address the residual depressive symptoms.",
        "Discontinue sertraline, obtain baseline metabolic, renal, hepatic, and pregnancy testing, and start a mood stabilizer or second-generation antipsychotic.",
        "Continue sertraline, add as-needed lorazepam for agitation, and reassess in four weeks.",
        "Continue the current regimen and refer the patient for cognitive behavioral therapy for insomnia.",
      ],
      correct: 1,
      rationale:
        "The presentation is an antidepressant-associated manic switch that reveals previously undiagnosed bipolar I disorder — decreased need for sleep, pressured speech, grandiose goal-directed activity, and excessive spending, all emerging after an SSRI was started, in a patient with a first-degree relative who has bipolar I. Antidepressant monotherapy is contraindicated once mania is evident, so the SSRI comes off and mood stabilization begins. Baseline labs come before the prescription: renal and thyroid studies ahead of lithium, liver function and CBC ahead of valproate, lipids and A1c ahead of a second-generation antipsychotic, plus a pregnancy test because lithium and valproate both carry teratogenic risk. Raising the sertraline dose worsens the switch. A benzodiazepine may calm acute agitation but leaves untreated mania in place. Therapy for insomnia treats a symptom and misses the diagnosis.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key PMHNP-BC terms every candidate should know",
    prose: [
      "These terms map to the five blueprint domains and surface repeatedly in scenario stems. Review them until recognition is automatic — many items hinge on identifying which framework, statute, or syndrome the stem describes rather than on recalling a dose.",
    ],
    rows: [
      { term: "APRN Consensus Model", defn: "The regulatory framework for licensure, accreditation, certification, and education of advanced practice registered nurses. It defines PMHNP as a population-focused role across the lifespan, and the PMHNP-BC exam is built to align with it.", domain: "Scientific Foundation" },
      { term: "Psychopharmacogenomics", defn: "How genetic variation, particularly in CYP450 enzymes such as CYP2D6 and CYP2C19, alters drug metabolism and response. Poor-metabolizer and ultra-rapid-metabolizer status changes dosing for several antidepressants and antipsychotics.", domain: "Scientific Foundation" },
      { term: "Extrapyramidal symptoms (EPS)", defn: "Movement effects of dopamine blockade: acute dystonia, akathisia, parkinsonism, and tardive dyskinesia. Onset timing and treatment differ for each, and akathisia is often mistaken for worsening anxiety.", domain: "Scientific Foundation" },
      { term: "Neuroleptic malignant syndrome (NMS)", defn: "A life-threatening antipsychotic reaction marked by hyperthermia, lead-pipe rigidity, autonomic instability, and altered mental status, usually with elevated creatine kinase. Stop the agent and provide supportive care.", domain: "Scientific Foundation" },
      { term: "Mental status exam (MSE)", defn: "Structured assessment of appearance, behavior, speech, mood and affect, thought process and content, perception, cognition, insight, and judgment. It is the PMHNP's core assessment instrument and runs through Advanced Practice Skills items.", domain: "Advanced Practice Skills" },
      { term: "PHQ-9 and GAD-7", defn: "Validated self-report screens for depression severity (9 items) and generalized anxiety (7 items). Exam items test score interpretation and the treatment decision that follows, including PHQ-9 item 9 as a suicide-risk trigger.", domain: "Advanced Practice Skills" },
      { term: "CIWA-Ar and COWS", defn: "The Clinical Institute Withdrawal Assessment for Alcohol, revised, and the Clinical Opiate Withdrawal Scale. Both drive symptom-triggered medication decisions, so know the score thresholds that change your plan.", domain: "Advanced Practice Skills" },
      { term: "DSM-5-TR", defn: "The Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision. It supplies the diagnostic criteria the exam tests, including the specifiers and duration thresholds that separate close differentials.", domain: "Diagnosis and Treatment" },
      { term: "Medical mimics", defn: "Physical conditions that present as psychiatric illness: thyroid disease, B12 deficiency, delirium, autoimmune encephalitis, substance intoxication or withdrawal. Diagnostic and laboratory test selection items usually turn on ruling these out.", domain: "Diagnosis and Treatment" },
      { term: "Therapeutic alliance", defn: "The collaborative bond between clinician and patient, built through empathy, consistent boundaries, and a trauma-informed approach. ANCC lists its development and management as a skill under Psychotherapy and Related Theories.", domain: "Psychotherapy" },
      { term: "Transtheoretical Model", defn: "Prochaska and DiClemente's stages-of-change framework: precontemplation, contemplation, preparation, action, maintenance. Items ask you to match an intervention to the stage the patient is actually in.", domain: "Psychotherapy" },
      { term: "Duty to warn", defn: "The obligation, established in Tarasoff and codified differently by each state, to act when a patient makes a credible threat against an identifiable person. It is the classic exception to confidentiality tested in this domain.", domain: "Ethics & Legal" },
      { term: "Least restrictive alternative", defn: "The ethical and legal principle that treatment must use the least limiting intervention that meets the clinical need. It governs decisions about seclusion, restraint, and involuntary hospitalization.", domain: "Ethics & Legal" },
      { term: "Decision-making capacity", defn: "A clinical determination that a patient can understand information, appreciate consequences, reason through options, and communicate a choice. Capacity is task-specific and time-specific; competence is a court determination.", domain: "Ethics & Legal" },
      { term: "Full practice authority", defn: "AANP's classification for states whose laws let NPs evaluate, diagnose, order and interpret tests, and initiate and manage treatment including controlled substances under the exclusive authority of the state board of nursing. Reduced and restricted states require a collaborative agreement or supervision.", domain: "Ethics & Legal" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "PMHNP-BC vs. PMH-BC, PMHCNS-BC, and adjacent credentials",
    prose: [
      "The most consequential mix-up in psychiatric nursing is PMHNP-BC against PMH-BC. They share an issuing body and a clinical specialty but sit at different licence levels, with different education gates, different exams, and different legal scopes. Read the table before you apply — applying to the wrong one costs an application fee and a testing window.",
    ],
    rows: [
      { row: "PMHNP-BC", highlight: true, body: "ANCC", scope: "Advanced practice across the lifespan: assessment, DSM-5-TR diagnosis, prescribing and medication management, psychotherapy", who: "APRNs with a PMHNP master's, post-graduate certificate, or DNP including 500 supervised clinical hours" },
      { row: "PMH-BC", body: "ANCC", scope: "RN-level psychiatric-mental health nursing: assessment, planning, implementation, and evaluation of psychiatric nursing care, without diagnosing or prescribing", who: "RNs with 2 yrs full-time practice, 2,000 PMH hours, and 30 PMH CE hours in the last 3 yrs" },
      { row: "Adult Psychiatric-Mental Health NP", body: "ANCC (renewal only)", scope: "Legacy adult-only psychiatric NP credential, superseded by the across-the-lifespan PMHNP-BC", who: "Existing certificants only — closed to new candidates" },
      { row: "PMHCNS-BC (Adult or Child/Adolescent)", body: "ANCC (renewal only)", scope: "Psychiatric-mental health clinical nurse specialist: consultation, treatment, and systems-level practice", who: "Existing CNS certificants only — ANCC retired initial testing" },
      { row: "FNP-BC", body: "ANCC", scope: "Family primary care across the lifespan, including common mental-health presentations but not psychiatric specialty practice", who: "APRNs from a family NP program; some clinicians hold FNP and PMHNP together" },
      { row: "Psychiatrist (MD or DO)", body: "ABPN", scope: "Physician specialty practice in psychiatry, including complex pharmacology and procedures such as ECT", who: "Physicians who complete medical school and a psychiatry residency" },
    ],
    closingProse:
      "<strong>Take PMHNP-BC if you have completed a psychiatric NP program and intend to diagnose and prescribe.</strong> If you are an RN delivering psychiatric care without a graduate NP degree, PMH-BC is your credential, and the <a href=\"/certifications/pmh-bc/\">PMH-BC certification guide</a> covers its separate eligibility rules. A DNP-prepared PMHNP holds a doctoral nursing degree and may be addressed as doctor in academic settings, but remains a nurse practitioner rather than a physician — a distinction worth stating plainly to patients.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about PMHNP-BC certification",
    items: [
      { q: "What does PMHNP-BC stand for?", a: "PMHNP-BC stands for Psychiatric-Mental Health Nurse Practitioner — Board Certified. The American Nurses Credentialing Center (ANCC) awards it, and its full exam title is Psychiatric-Mental Health Nurse Practitioner (Across the Lifespan)." },
      { q: "Is PMHNP-BC the same as PMH-BC?", a: "No. PMHNP-BC is the advanced practice nurse practitioner credential and requires a PMHNP master's, post-graduate certificate, or DNP that includes 500 faculty-supervised clinical hours. PMH-BC is ANCC's RN-level psychiatric specialty certification and requires 2 years of RN practice, 2,000 psychiatric practice hours, and 30 psychiatric CE hours instead of a graduate degree." },
      { q: "Can a PMHNP-BC prescribe medication?", a: "Yes, within the scope the state grants. AANP classifies state practice environments as full, reduced, or restricted. Full practice states let NPs prescribe medications and controlled substances under the state board of nursing's exclusive authority; reduced and restricted states require a collaborative agreement or physician supervision for at least one element of practice." },
      { q: "What are the eligibility requirements for PMHNP-BC certification?", a: "An active RN license, plus a PMHNP (Across the Lifespan) master's, post-graduate certificate, or DNP from a CCNE-, ACEN-, or CNEA-accredited program. The program must include 500 faculty-supervised clinical hours, three separate graduate APRN core courses, content in health promotion and in differential diagnosis and disease management, and clinical training in at least two psychotherapeutic modalities." },
      { q: "How many questions are on the PMHNP-BC exam?", a: "175 questions in 3.5 hours. Of those, 150 are scored and 25 are unscored pretest items that cannot be distinguished from scored ones. Passing requires a scaled score of 350 or higher on a 0 to 500 scale." },
      { q: "What is the PMHNP-BC pass rate?", a: "82% of first-time test takers passed in 2025 according to the ANCC certification-data release — 8,840 of 10,743 candidates. That is above the 71% recorded for the RN-level PMH-BC exam in the same release." },
      { q: "How much does PMHNP-BC certification cost?", a: "Non-members pay $395 and ANA members pay $295. APNA members pay $220, the lowest rate; AANP, ISPN, and GAPNA members pay $340, and AANP student members pay $290. Every price includes a $140 non-refundable administrative fee." },
      { q: "How long is the PMHNP-BC certification valid?", a: "Five years. You may submit a renewal application up to one year before your expiration date, and for APRNs an expired certification can affect eligibility to practise depending on your state's licensure rules." },
      { q: "What are the PMHNP-BC renewal requirements?", a: "Under the current ANCC renewal handbook you need 75 continuing education contact hours relevant to the PMHNP role, at least 60 of them formally approved, with 25 of the 75 in advanced pharmacology because you are an APRN, plus one of the eight professional development categories completed in its entirety." },
      { q: "What changes for ANCC renewal in February 2027?", a: "The 2027 ANCC Certification Renewal Handbook applies to every renewal application submitted on or after 2027-02-01. The five-year cycle, the 75 continuing education contact hours, and the 25-hour APRN pharmacology requirement all carry over. The eight professional development categories are replaced by one Selected Professional Development activity chosen from three groupings: additional continuing education, practice, or scholarship." },
      { q: "What happens if I fail the PMHNP-BC exam?", a: "Your score report shows diagnostic feedback for each of the five content areas. You may retest 60 calendar days after your last attempt and may not test more than three times in any 12-month period. Each retest is a new application reviewed against the eligibility requirements and fees in effect when you submit it." },
      { q: "Is a PMHNP-BC a doctor?", a: "No. A PMHNP is an advanced practice registered nurse. Some PMHNPs hold a Doctor of Nursing Practice, which is a doctoral nursing degree rather than a medical degree, so the holder is not a physician. A psychiatrist completes medical school and a psychiatry residency." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "Every figure on this page traces to the primary sources below. ANCC revises fees, blueprints, and renewal rules on its own cycle — verify numbers against the current ANCC pages and handbooks before relying on them for an application decision.",
    ],
    list: [
      "ANCC — Psychiatric-Mental Health Nurse Practitioner (Across the Lifespan) Certification (PMHNP-BC) credential page: eligibility, fees, exam format, renewal pricing — https://www.nursingworld.org/our-certifications/psychiatric-mental-health-nurse-practitioner/",
      "ANCC — PMHNP Test Content Outline, effective 2023-04-28 (PDF re-issued 2026-07-28): five domains, 150 scored items, 25 pretest items — https://www.nursingworld.org/globalassets/study-aids/exam-35-pmhnp-tco_2026-brand-update_final.pdf",
      "ANCC — 2025 Certification Data: 10,743 first-time tested, 8,840 passed (82%), 5,464 renewals, 58,578 total certified as of 2025-12-31 — https://www.nursingworld.org/globalassets/docs/ancc/ancc-cert-data-website.pdf",
      "ANCC — Certification Handbook, effective June 2025 (Version 4, 2026-01-23): scaled passing score of 350 on a 500-point scale, Modified Angoff standard setting, 120-day testing window and $100 re-assignment fee — https://www.nursingworld.org/globalassets/certification/ancc-certification-handbook.pdf",
      "ANCC — Certification Renewal Handbook, effective 2025-09-10: 75 CE contact hours, 60 formally approved, 25 advanced pharmacology hours for APRNs, one of eight professional development categories — https://www.nursingworld.org/globalassets/certification/renewals/ancc-certrenewalrequirements.pdf",
      "ANCC — 2027 Certification Renewal Handbook, published July 2026 and effective for applications submitted on or after 2027-02-01 — https://www.nursingworld.org/globalassets/certification/renewals/ancc-certification-renewal-handbook_2027.pdf",
      "ANCC — Certification Renewal overview: which handbook applies and the 2027-02-01 cutover — https://www.nursingworld.org/certification/renewals/",
      "ANCC — Test Score Reports and Retest Application Procedures: 60-day wait, maximum three attempts in any 12-month period — https://www.nursingworld.org/certification/certification-policies/scores-retest-application/",
      "ANCC — PMHNP Role Delineation Study Executive Summary (September 2022): the 2021–2022 practice analysis behind the current blueprint — https://www.nursingworld.org/globalassets/pmhnp-rds-exec-report_10292025-for-webposting.pdf",
      "ANCC — PMHNP-BC Test Reference List (2025-09-03): ANCC's own recommended preparation resources — https://www.nursingworld.org/globalassets/psychiatric-mental-health-nurse-practitioner-ref-list-2025_09032025.pdf",
      "American Association of Nurse Practitioners (AANP) — State Practice Environment (updated 05/2026): full, reduced, and restricted practice definitions — https://www.aanp.org/advocacy/state/state-practice-environment",
      "US Bureau of Labor Statistics — Occupational Outlook Handbook, Nurse Anesthetists, Nurse Midwives, and Nurse Practitioners: nurse practitioner median annual wage $132,300 (May 2025), 336,300 NPs employed, 36% projected growth 2025–2035. BLS publishes no PMHNP-specific occupation code — https://www.bls.gov/ooh/healthcare/nurse-anesthetists-nurse-midwives-and-nurse-practitioners.htm",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice PMHNP-BC-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to the five-domain ANCC PMHNP blueprint. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full PMHNP-BC question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "PMH-BC",
      title: "PMHNP-BC vs PMH-BC: which psychiatric credential matches your licence?",
      blurb: "APRN certification or RN specialty certification — education gates, exam length, scope of practice, and what each one lets you do on shift.",
      href: "/certifications/pmh-bc/",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "Ethics, Legal Principles, and Cultural Care: the 26 items candidates skip",
      blurb: "Duty to warn, capacity versus competence, least restrictive care, and informed consent for minors — the domain that quietly outweighs psychotherapy on the exam.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "Scope",
      title: "Prescribing as a PMHNP: how state practice environment shapes your role",
      blurb: "Full, reduced, and restricted practice states, collaborative agreements, and what changes about your prescribing when you move.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
