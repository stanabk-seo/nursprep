// CPAN exam detail page — structured data.
// Sourced from Content/CPAN_research.json (verified against ABPANC primary
// pages — eligibility, about-exams, schedule-fees, recertification — plus
// BoardCerts blueprint and BLS OEWS, accessed 2026-05-21).
// Lives at /certifications/cpan/ via the paginated template.

module.exports = {
  code: "CPAN",
  name: "Certified Post Anesthesia Nurse",
  body: "ABPANC",
  cat: "periop",
  catLabel: "Perioperative & Anesthesia",
  updated: "2026-05",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title:
      "CPAN Certification Guide: Eligibility, Exam & Renewal | NursPrep",
    description:
      "Everything PACU nurses need on the CPAN exam in 2026 — ABPANC eligibility, five-area blueprint, $350 fee, 62% pass rate, study plan, and 3-year renewal.",
    ogTitle:
      "CPAN Certification Guide 2026 — Certified Post Anesthesia Nurse",
    ogDescription:
      "ABPANC eligibility, the five-area exam blueprint, $350 fee, 62% pass rate, and a study plan for PACU and perianesthesia RNs.",
  },

  // ---- HERO
  lede:
    "CPAN is the national board certification for registered nurses caring for patients in immediate Phase I post-anesthesia recovery. The credential validates expertise in the PACU — airway management, hemodynamic monitoring, pain and PONV control, and emergence from anesthesia — not pre-op or step-down care.",
  heroPills: [
    { k: "Questions", v: "185 items" },
    { k: "Duration", v: "3 hours" },
    { k: "Renewal", v: "3 years" },
    { k: "Pass rate", v: "62%" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "American Board of Perianesthesia Nursing Certification (ABPANC)" },
    { k: "Format", v: "PSI test centers + remote proctoring" },
    { k: "Scored items", v: "140 of 185 (45 unscored pretest)" },
    { k: "Passing score", v: "450 scale score (200–800 range)" },
    { k: "Eligibility", v: "Active, unrestricted RN license" },
    { k: "Experience", v: "1,200 direct clinical hours in prior 2 years" },
    { k: "Fee (ASPAN member)", v: "$350 · regular $424" },
    { k: "Renewal cycle", v: "3 years — 70 CE hours + 900 practice hours, or re-exam" },
  ],
  heroCardFoot:
    "Verified against the ABPANC certification pages and the 2023–2027 CPAN content outline",

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
    { id: "compare", label: "CPAN vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "CPAN certification at a glance",
    prose: [
      "CPAN — Certified Post Anesthesia Nurse — is the board certification for RNs working in Phase I post-anesthesia care. The credential is issued by the <strong>American Board of Perianesthesia Nursing Certification (ABPANC)</strong>, which administered the first CPAN exam in 1986. By August 2024, <strong>6,855 RNs</strong> held the CPAN credential, with another 945 dual-certified in CPAN and CAPA.",
      "CPAN is a board certification, not a course. ABPANC owns the credential; the <strong>American Society of PeriAnesthesia Nurses (ASPAN)</strong> is the affiliated membership society and provides the discounted member exam fee. The CPAN exam is delivered through PSI test centers in two annual windows.",
    ],
    stats: [
      { n: "185", l: "Total items", sub: "140 scored · 45 pretest" },
      { n: "3 hrs", l: "Time limit", sub: "Continuous testing window" },
      { n: "62%", l: "Spring 2025 pass rate", sub: "515 of 830 candidates" },
      { n: "3 yrs", l: "Renewal cycle", sub: "70 CE hours + 900 practice hours, or re-exam" },
    ],
    factBox: {
      tone: "info",
      title: "What the current blueprint is built on",
      html:
        "The CPAN exam in effect for the <strong>2023–2027 cycle</strong> is based on ABPANC's 2020–2021 Role Delineation Study. Role Delineation Studies are repeated about every five years, so candidates should expect a refreshed content outline before the next cycle. The CPAN program is also accredited by the Accreditation Board for Specialty Nursing Certification (ABSNC) — a quality signal many Magnet and certified-nurse employers look for.",
    },
    coverImageLabel:
      "Perianesthesia RN monitoring a patient during Phase I PACU recovery",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the CPAN exam?",
    prose: [
      "Yes — if you hold an <strong>active, unrestricted RN license</strong> in the US or a US territory that uses the NCLEX, and you have logged <strong>1,200 hours of direct clinical experience within the two years</strong> before you apply. ABPANC sets no minimum years-in-practice rule beyond the hours requirement.",
      "Direct clinical experience means bedside interaction with the patient and/or family. You do not need a staff-nurse title — educator, manager, and Clinical Nurse Specialist roles count as long as the role includes bedside interaction with patients.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You have logged at least 1,200 hours of direct perianesthesia clinical experience in the last two years.",
      "You work primarily in Phase I PACU — recovering patients in the immediate post-anesthesia period with intensive monitoring.",
      "You routinely manage airways after extubation, treat post-operative nausea and vomiting, and respond to emergence delirium and hemodynamic swings.",
      "You are comfortable with anesthesia agents and reversal drugs, malignant hyperthermia recognition, and ASPAN perianesthesia standards.",
    ],
  },

  // ---- BLUEPRINT (weights = 2023–2027 content outline percentages, total 100)
  blueprint: {
    heading: "What is on the CPAN exam? The five-area blueprint",
    prose: [
      "The CPAN blueprint has five content areas. <strong>Perianesthesia Monitoring and Intervention</strong> is by far the largest at 35% — most of your study time should live there. Anesthesia (24%) and Physiology (18%) together carry another 42%.",
      "Do not under-study Perianesthesia Care Considerations and Professional Nursing Practice. Continuum-of-care handoffs, psychosocial and behavioral factors, ASPAN standards, MHAUS protocols, and ACLS/PALS guidelines feel routine at the bedside but reliably appear on the exam. ABPANC reports failing-candidate scores in three scoring domains, but the candidate-facing study outline is the five areas below.",
    ],
    domains: [
      { label: "Anesthesia (techniques, agents, reversal, special populations)", weight: 24 },
      { label: "Physiology (pathophysiology, assessment, complications)", weight: 18 },
      { label: "Perianesthesia Monitoring and Intervention", weight: 35 },
      { label: "Perianesthesia Care Considerations (continuum, psychosocial, education)", weight: 14 },
      { label: "Professional Nursing Practice and Guidelines", weight: 9 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and recertification",
    prose: [
      "ABPANC delivers the CPAN exam through <strong>PSI test centers</strong>, with remote-proctoring options for candidates who prefer to test from a private location. After ABPANC confirms your eligibility, schedule your PSI seat right away — center seats fill quickly, and later applicants get fewer date and location options.",
    ],
    rows: [
      { k: "Exam fee — ASPAN member", v: "$350" },
      { k: "Exam fee — regular (non-member)", v: "$424", highlight: true },
      { k: "Exam fee — international applicant", v: "$350" },
      { k: "Retake", v: "Same as initial fee" },
      { k: "Test Assured add-on", v: "One free retake within 12 months if you fail" },
      { k: "Spring window — registration", v: "January 1 – April 30" },
      { k: "Spring window — testing", v: "March 15 – May 15" },
      { k: "Fall window — registration", v: "July 1 – October 31" },
      { k: "Fall window — testing", v: "September 15 – November 15" },
    ],
    factBox: {
      tone: "success",
      title: "Test Assured can de-risk a first attempt",
      html:
        "If you buy the optional <strong>Test Assured</strong> add-on and fail your first attempt, you may retake the CPAN exam once at no additional charge within the next 12 months. Many hospitals also reimburse the CPAN application fee through an education benefit — ask your perianesthesia manager or HR before paying out of pocket.",
    },
    renewalHeading: "Recertification",
    renewalProse: [
      "CPAN certification is valid for <strong>three years</strong>. The continuing-education pathway requires <strong>70 contact hours</strong> of CE during the cycle — reduced from 90 hours effective 2024-01-01 — plus a minimum of <strong>900 hours of perianesthesia nursing practice</strong> across the three-year cycle.",
      "The alternative is recertification by examination: retake and pass the current CPAN exam. ABPANC has set the exam-based recertification option to remain available through 2026-11-15. Keep CE certificates and practice records for the full cycle in case of audit.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the CPAN exam?",
    prose: [
      "The CPAN exam is moderately difficult. ABPANC reported a <strong>62% pass rate in Spring 2025</strong> — 515 of 830 candidates passed. Recent windows have run in the low-to-high 60s: 68% in Fall 2024 and 64% in Spring 2024.",
      "To pass, candidates must reach a <strong>450 scale score</strong> on a 200–800 scale. The raw passing point is set by a modified-Angoff study and equated across forms, so the number of items you need correct shifts slightly with form difficulty — roughly 105 to 108 of the 140 scored items.",
    ],
    rows: [
      { year: "Spring 2025", pct: 62 },
      { year: "Fall 2024", pct: 68 },
      { year: "Spring 2024", pct: 64 },
      { year: "Fall 2023", pct: 63 },
      { year: "Spring 2023", pct: 63 },
    ],
    target: 80,
    footnote:
      "Pass rates are reported per testing window from ABPANC's certification-activities table. Spring 2025 reflects 515 passes of 830 candidates.",
    factBox: {
      tone: "info",
      title: "The lever is the 35% domain plus timed practice",
      html:
        "Perianesthesia Monitoring and Intervention is 35% of the CPAN exam — the single largest area. Candidates who drill airway management, PONV, thermoregulation, and perianesthesia emergencies, and who complete at least one full-length timed practice exam, pass at meaningfully higher rates than those relying on bedside experience alone.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "An 8-week CPAN study plan",
    prose: [
      "An eight-week plan suits most PACU RNs with the required clinical hours — roughly <strong>60 to 100 total study hours</strong> across the five blueprint areas. Weight your time toward the 35% Monitoring and Intervention area and the 24% Anesthesia area. Practice-question volume ramps through weeks 2–6 and peaks in week 7 with a full-length timed exam.",
    ],
    weeks: [
      { n: 1, focus: "Read the CPAN content outline + baseline diagnostic exam", qs: 25 },
      { n: 2, focus: "Anesthesia — general, regional, MAC/TIVA, agents and reversal", qs: 40 },
      { n: 3, focus: "Physiology — body systems, assessment, complications of comorbidities", qs: 50 },
      { n: 4, focus: "Monitoring & Intervention I — airway, hemodynamics, thermoregulation", qs: 60 },
      { n: 5, focus: "Monitoring & Intervention II — pain, PONV, fluids, perianesthesia emergencies", qs: 60 },
      { n: 6, focus: "Care Considerations + Professional Practice — handoffs, psychosocial, ASPAN/MHAUS/ACLS", qs: 50 },
      { n: 7, focus: "Full-length timed practice exam + error-log review", qs: 140 },
      { n: 8, focus: "Targeted review of weak areas, rest, test day", qs: 35 },
    ],
    tipsHeading: "How CPAN candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Respect the 35% Monitoring & Intervention area",
        text:
          "More than a third of the exam lives here. Drill airway management after extubation, PONV protocols, thermoregulation, and perianesthesia-specific emergencies until the responses are automatic.",
      },
      {
        kicker: "Know your anesthesia agents and reversal drugs",
        text:
          "Anesthesia is 24% of the exam. Memorize the major agents, MAC and TIVA, stages of anesthesia, and reversal drugs — including how each behaves in pediatric, geriatric, and bariatric patients.",
      },
      {
        kicker: "Don't skip Professional Practice",
        text:
          "ASPAN standards, MHAUS malignant-hyperthermia protocols, ACLS/PALS guidelines, and ASA guidance feel like background but appear on the exam. Read the ASPAN Perianesthesia Standards directly.",
      },
      {
        kicker: "Take one full-length timed exam",
        text:
          "Pacing 140 scored items in three hours is a trained skill. A single full-length timed practice run under real conditions is the strongest predictor of a first-time pass.",
      },
      {
        kicker: "Master the recovery scoring tools",
        text:
          "The Aldrete score, emergence-delirium recognition, and discharge-readiness criteria show up repeatedly. Build a one-page reference and review it the night before the exam.",
      },
    ],
  },

  // ---- SAMPLE QUESTION
  sample: {
    heading: "Sample CPAN question",
    prose: [
      "This item mirrors the CPAN scenario format: a short PACU stem, an unstable patient, and four plausible options where only one is <em>best</em>. Try it before reading the rationale.",
    ],
    q: {
      scenario:
        "A 42-year-old patient arrives in PACU after general anesthesia for an abdominal procedure. Twenty minutes after extubation the patient develops rigid masseter muscles, a rising end-tidal CO2, tachycardia, and a temperature climbing from 37.2°C to 39.4°C. The patient received succinylcholine and a volatile anesthetic intraoperatively.",
      stem: "Which action should the perianesthesia RN prioritize first?",
      options: [
        "Apply a cooling blanket and recheck the temperature in 15 minutes.",
        "Activate the malignant hyperthermia protocol and prepare to administer dantrolene.",
        "Administer an antipyretic and increase the IV fluid rate.",
        "Give an additional dose of opioid to treat presumed emergence agitation.",
      ],
      correct: 1,
      rationale:
        "Masseter rigidity, rising end-tidal CO2, tachycardia, and a rapidly climbing temperature after succinylcholine and a volatile agent point to malignant hyperthermia — a perianesthesia emergency. The priority is to activate the MH protocol and give dantrolene per MHAUS guidance. Passive cooling, antipyretics, and opioids do not treat the underlying hypermetabolic crisis and delay definitive care.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key CPAN terms every candidate should know",
    prose: [
      "These terms surface across CPAN exam items. Review them until the definitions feel automatic — many scenario stems hinge on recognizing which protocol or scoring tool applies in the immediate recovery period.",
    ],
    rows: [
      { term: "Phase I PACU", defn: "Immediate post-anesthesia recovery with intensive monitoring of airway, hemodynamics, and consciousness — the core scope of the CPAN credential.", domain: "Care Considerations" },
      { term: "PONV", defn: "Post-Operative Nausea and Vomiting — a common recovery complication managed with antiemetics, risk stratification, and non-pharmacologic measures.", domain: "Monitoring & Intervention" },
      { term: "Malignant hyperthermia", defn: "A life-threatening hypermetabolic crisis triggered by volatile anesthetics or succinylcholine; treated with dantrolene per MHAUS protocol.", domain: "Monitoring & Intervention" },
      { term: "Aldrete score", defn: "A scoring tool (activity, respiration, circulation, consciousness, oxygen saturation) used to gauge readiness to move from Phase I recovery.", domain: "Monitoring & Intervention" },
      { term: "Emergence delirium", defn: "Acute agitation or confusion during arousal from anesthesia, common in the immediate PACU period and in certain populations.", domain: "Monitoring & Intervention" },
      { term: "MAC", defn: "Monitored Anesthesia Care — a sedation level with continuous monitoring, distinct from general anesthesia.", domain: "Anesthesia" },
      { term: "TIVA", defn: "Total Intravenous Anesthesia — anesthesia delivered entirely by IV agents without inhaled volatiles.", domain: "Anesthesia" },
      { term: "Laryngospasm", defn: "Reflex closure of the vocal cords after extubation that obstructs the airway; a key PACU emergency to recognize and treat fast.", domain: "Monitoring & Intervention" },
      { term: "ASPAN standards", defn: "American Society of PeriAnesthesia Nurses practice standards and recommendations that frame much of the Professional Practice content.", domain: "Professional Practice" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "CPAN vs. CAPA, CRNA, CPN, CCRN",
    prose: [
      "CPAN sits alongside several credentials that perianesthesia and critical-care RNs sometimes consider — or confuse. Many candidates Google \"CPAN\" when they actually mean CAPA, so the distinction matters before you spend time or money.",
    ],
    rows: [
      { row: "CPAN", highlight: true, body: "ABPANC", scope: "Phase I post-anesthesia (PACU) recovery", who: "RNs recovering patients in the immediate post-anesthesia period" },
      { row: "CAPA", body: "ABPANC", scope: "Preanesthesia, Phase II, and extended care", who: "RNs in pre-op, ambulatory recovery, and discharge phases" },
      { row: "CRNA", body: "NBCRNA", scope: "Administering anesthesia (advanced practice)", who: "Nurse anesthetists — a separate APRN role, not an RN credential" },
      { row: "CPN", body: "PNCB", scope: "Pediatric nursing (unrelated)", who: "RNs caring for children; confused with CPAN only by acronym" },
      { row: "CCRN (Adult)", body: "AACN", scope: "Broad adult critical care (ICU)", who: "ICU RNs; overlaps CPAN on hemodynamics and airway" },
    ],
    closingProse:
      "<strong>Take CPAN if you work in Phase I PACU recovery.</strong> Choose CAPA instead if your day is pre-op, Phase II ambulatory recovery, or extended care — and consider dual CPAN/CAPA certification if you cover both. CRNA is a separate advanced-practice path, and CPN is an unrelated pediatric credential that only shares a similar acronym.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about CPAN certification",
    items: [
      { q: "What does CPAN stand for in nursing?", a: "CPAN stands for Certified Post Anesthesia Nurse. The credential is issued by the American Board of Perianesthesia Nursing Certification (ABPANC) for RNs working in Phase I PACU recovery." },
      { q: "What is the difference between CPAN and CAPA?", a: "CPAN covers Phase I post-anesthesia (PACU) recovery, while CAPA covers preanesthesia, Phase II, and extended care. Both are issued by ABPANC, and some nurses earn both as a dual certification." },
      { q: "Am I eligible for the CPAN exam without 1,200 hours?", a: "No. ABPANC requires an active unrestricted RN license plus 1,200 hours of direct clinical experience within the two years before you apply. Educator, manager, and CNS hours count if the role includes bedside interaction." },
      { q: "How hard is the CPAN exam?", a: "The CPAN exam is moderately difficult. The Spring 2025 pass rate was 62% (515 of 830 candidates). Passing requires a 450 scale score on a 200–800 scale." },
      { q: "How much does the CPAN exam cost?", a: "The CPAN exam fee is $350 for ASPAN members and $424 for regular registration. International applicants pay $350. A retake costs the same as the initial fee." },
      { q: "What happens if I fail the CPAN exam?", a: "You may re-apply in the next available testing window, not the same one. ABPANC does not cap retakes, and each attempt requires a new application and fee. The optional Test Assured add-on covers one free retake within 12 months." },
      { q: "How many questions are on the CPAN exam?", a: "The CPAN exam has 185 questions: 140 scored multiple-choice items and 45 unscored pretest items. Candidates have up to 3 hours to finish." },
      { q: "Does CPAN certification expire?", a: "Yes. CPAN certification is valid for 3 years. You recertify by earning 70 contact hours of CE plus 900 perianesthesia practice hours, or by retaking and passing the exam." },
      { q: "When can I take the CPAN exam?", a: "ABPANC offers two annual windows through PSI: a spring window (testing March 15–May 15) and a fall window (testing September 15–November 15)." },
      { q: "Will my hospital pay for CPAN certification?", a: "Many hospitals reimburse the CPAN application fee through an education benefit and offer paid study time. Ask your perianesthesia manager or HR before paying out of pocket." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following sources. Fees, blueprint weights, and recertification rules shift on ABPANC's revision cycle — always verify numeric facts against the current ABPANC handbook before relying on them for application decisions.",
    ],
    list: [
      "ABPANC — About the Exams: composition (185 items, 140 scored), scoring (450 scale score), retake policy, and per-window pass-rate tables",
      "ABPANC — Eligibility Requirements: unrestricted RN license plus 1,200 direct clinical hours within the prior two years",
      "ABPANC — Schedules and Fees: $350 ASPAN member / $424 regular, PSI testing, spring and fall windows",
      "ABPANC — Recertification Eligibility: 3-year cycle, 70 contact hours (reduced from 90 in 2024), 900 perianesthesia practice hours",
      "ABPANC — CPAN or CAPA?: Phase I vs Phase II scope and the CPAN/CAPA distinction",
      "ABPANC — Test Assured Program: one free retake within 12 months",
      "BoardCerts — CPAN Exam Preparation: five-area content blueprint with weights (24/18/35/14/9%)",
      "US Bureau of Labor Statistics (BLS) — Occupational Employment and Wage Statistics, Registered Nurses (May 2024): ~$93,600 mean RN wage",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice CPAN-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to the five-area CPAN blueprint. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full CPAN question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "CAPA",
      title: "CPAN vs CAPA: which ABPANC exam fits your unit?",
      blurb: "Phase I PACU vs Phase II and pre-op — how to pick the right perianesthesia credential, and when dual certification is worth it.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "Mastering Perianesthesia Monitoring: the 35% that decides CPAN pass",
      blurb: "Airway, PONV, thermoregulation, and perianesthesia emergencies — the single largest CPAN domain and how ABPANC tests it.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "PACU",
      title: "What CPAN does for a PACU nursing career",
      blurb: "How perianesthesia employers use the CPAN credential, recertification planning, and stacking CPAN with CAPA.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
