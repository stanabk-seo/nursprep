// PCCN exam detail page — structured data.
// Sourced from Content/PCCN Certification.docx (verified against AACN PCCN
// Exam Handbook, PSI, BLS primary sources as of the 2026-04 cycle).
// Lives at /certifications/pccn/ via the paginated template.

module.exports = {
  code: "PCCN",
  name: "Progressive Care Certified Nurse",
  body: "AACN",
  cat: "critical",
  catLabel: "Critical & Emergency Care",
  updated: "2026-04",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title:
      "PCCN Certification: Exam, Eligibility & Study Guide | NursPrep",
    description:
      "PCCN certification requires 1,750+ bedside hours and covers progressive care nursing. See the exam blueprint, eligibility pathways, fees, 70% pass rate, and a 6-week study plan.",
    ogTitle:
      "PCCN Certification Guide 2026 — Progressive Care Certified Nurse",
    ogDescription:
      "AACN eligibility, the Feb 2024 exam blueprint, $255 member fee, ~70% pass rate, and a 6-week study plan for progressive care RNs.",
  },

  // ---- HERO
  lede:
    "PCCN is the AACN Certification Corporation's credential for registered nurses who deliver direct bedside care to acutely ill adult patients in progressive care settings. It validates the clinical judgment needed between general med-surg and full ICU — where patients are stable enough to leave the ICU yet still require close monitoring and complex interventions.",
  heroPills: [
    { k: "Questions", v: "150 items" },
    { k: "Duration", v: "3 hours" },
    { k: "Renewal", v: "3 years" },
    { k: "Pass rate", v: "~70%" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "AACN Certification Corporation" },
    { k: "Format", v: "PSI test centers + Live Remote Proctoring" },
    { k: "Items", v: "150 multiple-choice, single best answer" },
    { k: "Passing score", v: "Scaled; pass/fail reported on screen" },
    { k: "Eligibility", v: "Active, unencumbered US RN or APRN license" },
    { k: "Experience", v: "1,750 hrs in 2 yrs or 2,000 hrs in 5 yrs" },
    { k: "Fee (AACN member)", v: "$255 · non-member $370" },
    { k: "Renewal cycle", v: "3 years — 100 Synergy CERPs or re-exam" },
  ],
  heroCardFoot:
    "Verified against AACN PCCN Exam Handbook (April 2026) and the Feb 6, 2024 revised content outline",

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
    { id: "compare", label: "PCCN vs. CCRN" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "PCCN certification at a glance",
    prose: [
      "PCCN — Progressive Care Certified Nurse — recognizes RNs who deliver direct bedside care to acutely ill adult patients in progressive care settings. The credential is issued by the <strong>AACN Certification Corporation</strong>, the certification arm of the American Association of Critical-Care Nurses, which launched the PCCN program in <strong>2004</strong>. More than <strong>30,000 nurses</strong> currently hold the active credential.",
      "Progressive care sits between general medical-surgical nursing and intensive care. Patients are stable enough to leave the ICU yet still require close monitoring, continuous cardiac telemetry, and complex interventions. If you work in a PCU, step-down, IMCU, telemetry, DOU, or post-ICU recovery unit, PCCN matches your scope of practice.",
    ],
    stats: [
      { n: "150", l: "Total items", sub: "Multiple choice · single best answer" },
      { n: "3 hrs", l: "Time limit", sub: "Computer-based at PSI or online" },
      { n: "~70%", l: "First-time pass rate", sub: "2023: 3,477 candidates tested" },
      { n: "3 yrs", l: "Renewal cycle", sub: "100 Synergy CERPs or re-exam" },
    ],
    factBox: {
      tone: "info",
      title: "What changed on Feb 6, 2024",
      html:
        "AACN launched a <strong>revised PCCN exam</strong> on 2024-02-06 after a national practice study. The revised format kept the 150-item, 3-hour structure but refreshed the blueprint percentages across the Synergy Model body-system clusters. Confirm current weights against the AACN PCCN Exam Handbook before relying on them for your study plan.",
    },
    coverImageLabel:
      "Progressive care RN reviewing cardiac telemetry in a step-down unit",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the PCCN exam?",
    prose: [
      "You need an <strong>active, unencumbered US RN or APRN license</strong> plus documented bedside practice hours. AACN offers two clinical-hour pathways for the Direct Care route — pick the one that fits your recent work history.",
      "Hours worked as a charge nurse, educator, or administrator do <em>not</em> count toward the Direct Care pathway. If your role influences progressive care but does not include direct bedside care, consider the <strong>PCCN-K</strong> (Knowledge Professional) variant instead.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You have logged 1,750 bedside hours in the past 2 years, with at least 875 hours in the most recent year — or 2,000 hours in the past 5 years with at least 144 in the most recent year.",
      "Your direct bedside care covers acutely ill adult patients who are closely monitored, moderately unstable, and at risk of rapid decline.",
      "Your unit fits the recognized PCCN setting list: progressive care (PCU), step-down (SDU), intermediate medical care (IMCU), telemetry, direct observation (DOU), transitional care, heart failure clinic, or post-ICU recovery floor.",
      "You are comfortable with rhythm strip interpretation, ABG reading, titratable vasoactive drips, and the primary assessment priorities for a deteriorating adult.",
    ],
  },

  // ---- BLUEPRINT (weights from the April 2026 Exam Handbook — sum to 100%)
  blueprint: {
    heading: "PCCN exam blueprint — five content areas (effective 2024-02-06)",
    prose: [
      "The PCCN test plan is built on the AACN Synergy Model. Content is grouped into body-system clusters plus a professional practice domain. <strong>Cardiovascular</strong> content carries roughly a third of the exam — most of your study time should live there.",
      "Do not neglect Professional Caring and Ethical Practice. Advocacy, patient education, interprofessional collaboration, and ethical decision making feel abstract at the bedside but reliably appear on the exam. Candidates who rely only on workplace experience tend to bleed points in the multisystem and psychosocial sub-areas.",
    ],
    domains: [
      { label: "Cardiovascular", weight: 33 },
      { label: "Pulmonary", weight: 14 },
      { label: "Endocrine, Hematology, Neurology, GI, Renal", weight: 27 },
      { label: "Musculoskeletal, Multisystem, Psychosocial", weight: 20 },
      { label: "Professional Caring and Ethical Practice", weight: 6 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and membership savings",
    prose: [
      "AACN delivers PCCN through <strong>PSI test centers</strong> and also offers <strong>live-remote online proctoring</strong> for candidates who prefer to test from a private location. After AACN approves your application, you receive a scheduling window of <strong>90 days</strong> to book your seat — reschedule is allowed up to 7 days before your exam date for a small fee.",
      "Members pay roughly 30 percent less on every fee line. AACN individual membership costs about $99 per year, so if you plan to renew by CERPs, becoming a member often pays for itself by the second year.",
    ],
    rows: [
      { k: "PCCN exam fee — AACN member", v: "$255" },
      { k: "PCCN exam fee — non-member", v: "$370", highlight: true },
      { k: "Retake fee — member", v: "$180" },
      { k: "Retake fee — non-member", v: "$260" },
      { k: "Renewal by CERPs — member", v: "$150" },
      { k: "Renewal by CERPs — non-member", v: "$230" },
      { k: "AACN individual membership (reduces all fees)", v: "~$99 / year" },
    ],
    factBox: {
      tone: "success",
      title: "Most hospitals reimburse the PCCN fee",
      html:
        "Magnet-designated hospitals and systems with a clinical ladder commonly reimburse the <strong>$255–$370 PCCN application fee</strong> once you pass. Many also cover AACN membership and the review course. Ask your nurse manager, clinical ladder coordinator, or HR benefits specialist before paying out of pocket — this one line item alone often covers the full cost.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "PCCN certification is valid for <strong>three years</strong>. AACN offers two renewal pathways. <strong>Pathway 1 — Renewal by Synergy CERPs:</strong> complete <strong>432 practice hours</strong> in direct care of acutely ill adult patients during the 3-year cycle, with at least <strong>144 hours in the 12 months before your renewal date</strong>, plus <strong>100 total Synergy CERPs</strong> broken into categories: 60 Category A (clinical judgment), 10 Category B (professional caring/ethics), 10 Category C (clinical inquiry), and the remaining 20 in any category.",
      "<strong>Pathway 2 — Renewal by Exam:</strong> re-sit the full PCCN exam instead of logging CERPs. This path is useful if your CE tracking has fallen behind. Synergy CERPs are AACN-approved learning credits mapped to the Synergy Model categories of patient care, professional practice, and clinical inquiry.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the PCCN exam?",
    prose: [
      "The first-time pass rate has hovered between <strong>68 and 74 percent</strong> in recent cycles. In 2023, <strong>3,477 candidates</strong> sat the PCCN exam with a reported pass rate near <strong>70%</strong>. Most candidates rate the PCCN as slightly easier than the CCRN because the scope is narrower — progressive care rather than full ICU complexity — while the blueprint and exam format are otherwise similar.",
      "Candidates who follow a structured 6 to 8-week plan and complete at least one full-length timed practice exam pass at meaningfully higher rates than those relying on work experience alone. The February 2024 blueprint refresh introduced small shifts in content weights, so expect minor year-over-year movement while the revised standard beds in.",
    ],
    rows: [{ year: "2023", pct: 70 }],
    target: 85,
    footnote:
      "Only 2023 is shown because the February 2024 blueprint refresh resets temporal comparability; earlier years ran against a different content outline. AACN publishes candidate volumes but does not always publish year-by-year pass percentages.",
    factBox: {
      tone: "info",
      title: "Cardiovascular is where pass rates are won",
      html:
        "A third of the exam tests cardiovascular content. Candidates who under-weight this domain in their plan fail most often on ACS, heart failure, dysrhythmia recognition, and vasoactive drip titration. Front-load cardiovascular in week 1 and revisit it in week 6 — it is the single biggest lever on your first-time pass rate.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 6-week PCCN study plan",
    prose: [
      "A focused 6-week plan works for most candidates — roughly <strong>50 to 80 total study hours</strong> across the five blueprint areas. Build study blocks around the heaviest domains, not the content you already know. Candidates returning from a long study break often need closer to 8–10 weeks.",
    ],
    weeks: [
      { n: 1, focus: "Blueprint review + diagnostic practice test", qs: 25 },
      { n: 2, focus: "Cardiovascular deep dive — ACS, HF, dysrhythmias, vasoactives", qs: 50 },
      { n: 3, focus: "Pulmonary + Renal — respiratory failure, ABGs, AKI, weaning", qs: 50 },
      { n: 4, focus: "Endocrine, GI, Hematology, Integumentary — DKA, GI bleed, sepsis", qs: 75 },
      { n: 5, focus: "Neurology, MSK, Multisystem, Psychosocial — stroke, delirium, EOL", qs: 75 },
      { n: 6, focus: "Professional Caring + full-length timed practice + weak-area review", qs: 150 },
    ],
    tipsHeading: "Why candidates fail the PCCN exam — and how to avoid it",
    tips: [
      {
        kicker: "Don't under-weight cardiovascular",
        text:
          "A third of the exam tests cardiovascular knowledge. Front-load ACS, heart failure, dysrhythmias, hemodynamic monitoring, and vasoactive drip titration in your plan.",
      },
      {
        kicker: "Don't skip Professional Caring",
        text:
          "Only 6% of the exam, but candidates routinely lose easy points here. Advocacy, patient education, interprofessional collaboration, and ethical decision making are high-yield gimmes.",
      },
      {
        kicker: "Take at least one full-length timed practice",
        text:
          "Stamina for a 3-hour exam matters as much as content recall. Fatigue in the last 40 items is where unprepared candidates lose the most points.",
      },
      {
        kicker: "Drill rhythm strips to automaticity",
        text:
          "Misreading rhythm strips is a top failure mode. Practice until you can name the rhythm within 5 seconds — sinus tach, A-fib with RVR, V-tach, torsades, complete heart block.",
      },
      {
        kicker: "Study the AACN blueprint, not your unit",
        text:
          "Day-to-day practice varies by hospital. The exam tests the AACN blueprint, not local protocols. Use the AACN PCCN Exam Handbook as your primary reference.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (verbatim from Content/PCCN Certification.docx)
  sample: {
    heading: "Sample PCCN question",
    prose: [
      "This item mirrors AACN's scenario format: a short clinical stem, an adult in a progressive care setting, and four plausibly-correct options where only one is <em>best</em>. Try it before you read the rationale.",
    ],
    q: {
      scenario:
        "A 62-year-old patient on the progressive care unit reports new substernal chest pressure rated 8/10. Vital signs: BP 98/60, HR 118, RR 24, SpO2 93% on room air. The 12-lead ECG shows 2 mm ST depression in leads V4 to V6.",
      stem: "Which nursing action takes priority?",
      options: [
        "Administer oral acetaminophen 650 mg.",
        "Apply supplemental oxygen, start continuous cardiac monitoring, and notify the provider.",
        "Encourage the patient to ambulate in the hall.",
        "Document the pain and reassess in 30 minutes.",
      ],
      correct: 1,
      rationale:
        "The presentation suggests non-ST elevation acute coronary syndrome. Priority actions are oxygen if SpO2 is under 94%, continuous cardiac monitoring to detect evolving ischemia or arrhythmia, and rapid provider notification. Options A, C, and D delay time-sensitive ischemic care.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key PCCN terms every candidate should know",
    prose: [
      "These terms show up in vignettes throughout the exam. Review them until the definitions feel automatic — scenario-based stems often hinge on recognizing which framework or setting the question refers to.",
    ],
    rows: [
      { term: "PCU (Progressive Care Unit)", defn: "A hospital unit for patients who are stable but need close monitoring outside the ICU.", domain: "Setting" },
      { term: "SDU (Step-Down Unit)", defn: "A transitional unit for patients stepping down from ICU before floor transfer.", domain: "Setting" },
      { term: "Telemetry", defn: "Continuous remote cardiac monitoring via a portable ECG transmitter.", domain: "Cardiovascular" },
      { term: "ACS", defn: "Acute Coronary Syndrome — umbrella term for unstable angina, NSTEMI, and STEMI.", domain: "Cardiovascular" },
      { term: "Hemodynamic monitoring", defn: "Measurement of blood pressure and cardiac output using invasive or non-invasive tools.", domain: "Cardiovascular" },
      { term: "Synergy Model", defn: "AACN framework that matches patient needs with nurse competencies.", domain: "Professional" },
      { term: "CERP", defn: "Continuing Education Recognition Point — the currency AACN uses for renewal.", domain: "Professional" },
      { term: "Clinical Judgment", defn: "The nurse's ability to recognize, interpret, and respond to patient cues.", domain: "Professional" },
      { term: "Weaning readiness", defn: "Criteria indicating a patient can be liberated from mechanical ventilation.", domain: "Pulmonary" },
      { term: "Delirium", defn: "Acute, fluctuating disturbance in attention and cognition common in hospitalized adults.", domain: "Neurology" },
      { term: "DKA", defn: "Diabetic Ketoacidosis — hyperglycemic emergency marked by anion-gap acidosis and ketonemia.", domain: "Endocrine" },
      { term: "PSI", defn: "The testing vendor that delivers the PCCN exam at its centers and via online proctoring.", domain: "Logistics" },
      { term: "PCCN-K", defn: "Knowledge professional variant for nurses who influence but do not deliver direct care.", domain: "Credential" },
      { term: "Non-invasive ventilation", defn: "CPAP or BiPAP delivered via mask to support respiratory failure without intubation.", domain: "Pulmonary" },
      { term: "AKI", defn: "Acute Kidney Injury — rapid decline in renal function, staged by creatinine rise and urine output.", domain: "Renal" },
    ],
  },

  // ---- COMPARE (from Table 7 of the Word doc — PCCN vs CCRN)
  compare: {
    heading: "PCCN vs. CCRN: what is the difference?",
    prose: [
      "PCCN and CCRN are both AACN Certification Corporation credentials, but they recognize different patient populations. Choose the one that matches your unit. If you split time between ICU and step-down, pick the credential that matches where you spend the majority of your direct care hours.",
    ],
    rows: [
      { row: "PCCN", highlight: true, body: "AACN", scope: "Acutely ill adults in progressive care", who: "PCU, step-down, telemetry, IMCU, DOU RNs" },
      { row: "CCRN (Adult)", body: "AACN", scope: "Critically ill adults in ICU", who: "ICU, CVICU, MICU, SICU, TICU RNs" },
      { row: "PCCN-K", body: "AACN", scope: "Progressive care knowledge professional", who: "Educators, managers, directors, faculty" },
      { row: "CCRN-K", body: "AACN", scope: "Critical care knowledge professional", who: "ICU educators, managers, directors" },
      { row: "TCRN", body: "BCEN", scope: "Trauma nursing across the full continuum", who: "Trauma-touching RNs" },
      { row: "CMC (subspecialty)", body: "AACN", scope: "Cardiac medicine subspecialty", who: "Cardiac PCCN or CCRN holders" },
    ],
    closingProse:
      "<strong>Take PCCN if your direct care hours live in progressive care, step-down, telemetry, or IMCU.</strong> Take CCRN if you work in a true ICU. Nurses who later move to ICU can sit the CCRN once they meet its hour requirement — PCCN is a clean stepping stone because the Synergy Model, exam format, and fee structure are identical. Add CMC as a subspecialty if your unit focuses on cardiac medicine.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about PCCN certification",
    items: [
      { q: "Is the PCCN exam harder than the CCRN exam?", a: "Most candidates rate the PCCN as slightly easier than the CCRN. The scope is narrower because PCCN focuses on progressive care rather than full ICU complexity. The blueprint and exam format are otherwise similar." },
      { q: "How long should I study for the PCCN exam?", a: "Plan for 6 to 8 weeks of focused preparation, or roughly 50 to 80 total study hours. Candidates returning from a long study break often need closer to 10 weeks." },
      { q: "What is the PCCN exam pass rate?", a: "The first-time pass rate has hovered between 68 and 74 percent in recent years. In 2023, 3,477 candidates took the PCCN exam with a reported pass rate near 70 percent." },
      { q: "Can I take the PCCN exam online?", a: "Yes. AACN offers live-remote online proctoring through PSI. You need a quiet, private room, a webcam, a reliable internet connection, and a valid photo ID." },
      { q: "What happens if I fail the PCCN exam?", a: "You can retake the exam after a 45-day waiting period. You pay a retake fee of $180 for AACN members or $260 for non-members. Most candidates focus their re-study on the body systems where they scored below target." },
      { q: "Is the PCCN credential worth the cost?", a: "For most bedside nurses, yes. The $255–$370 exam fee is typically recouped within a year through clinical ladder bonuses or certification differentials, plus the credential strengthens your application for cardiac stepdown, IMCU, and ICU-track positions." },
      { q: "What are the PCCN eligibility requirements?", a: "You need a current, unencumbered US RN or APRN license plus 1,750 bedside hours in the last 2 years (875 in the most recent year), or 2,000 hours in the last 5 years (144 in the most recent year)." },
      { q: "How often does PCCN certification need to be renewed?", a: "PCCN certification is valid for 3 years. You renew through 100 Synergy CERPs plus 432 practice hours, or by retaking the full PCCN exam." },
      { q: "What is the difference between PCCN and PCCN-K?", a: "PCCN is for nurses who deliver direct bedside care to acutely ill adult patients. PCCN-K (Knowledge Professional) is for nurses who influence progressive care but do not provide direct bedside care — educators, unit managers, directors, academic faculty, and nursing administrators." },
      { q: "Does the PCCN count toward the CCRN?", a: "The PCCN does not directly count toward the CCRN, but it shares the Synergy Model foundation. Many progressive care nurses use the PCCN as a stepping stone and sit for the CCRN once they accumulate the required ICU hours." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following primary sources. Fees, blueprint weights, and recertification rules shift on AACN's revision cycle — always verify numeric facts against the current PCCN Exam Handbook before relying on them for application decisions.",
    ],
    list: [
      "AACN Certification Corporation — PCCN Exam Handbook (April 2026) and Feb 6, 2024 revised content outline",
      "AACN Newsroom — Revised PCCN Exam Launch announcement (2024-02-06)",
      "American Association of Critical-Care Nurses — Synergy Model, practice standards, CERP category guidelines",
      "PSI Test Centers (psionline.com) — exam scheduling, test-day policy, online proctoring requirements",
      "AACN Core Curriculum for Progressive Care Nursing and AACN Review Manual for Progressive Care Nursing",
      "US Bureau of Labor Statistics (BLS) — Occupational Employment and Wage Statistics, Registered Nurses (May 2024): $93,600 median RN wage",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice PCCN-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to the February 2024 blueprint. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full PCCN question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "CCRN",
      title: "PCCN vs CCRN: which AACN exam fits your unit?",
      blurb: "Blueprint overlap, eligibility hours, and when to stack both credentials — for progressive care RNs weighing the move to ICU.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Cardiovascular",
      title: "Cardiovascular domain: the 33% that decides PCCN first-time pass",
      blurb: "Why ACS, heart failure, dysrhythmia recognition, and vasoactive titration dominate the exam — and the AACN Synergy framings candidates miss most.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "Clinical ladder",
      title: "Using PCCN to jump to Clinical Nurse III or IV",
      blurb: "How Magnet-designated hospitals treat PCCN as a qualifying credential — and what to bring to your ladder portfolio review.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
