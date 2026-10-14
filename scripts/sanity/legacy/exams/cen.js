// CEN exam detail page — structured data.
// Sourced from Content/CEN_research.json (verified against BCEN primary
// sources: CEN program page, eligibility, FAQs, cost, recertification,
// 2025 certification exam statistics, and the 01-2022 CEN Content Outline,
// as of 2026-05-21). Lives at /certifications/cen/ via the paginated template.

module.exports = {
  code: "CEN",
  name: "Certified Emergency Nurse",
  body: "BCEN",
  cat: "critical",
  catLabel: "Critical & Emergency Care",
  updated: "2026-05",

  // Page-level SEO (primary keyword in title + description)
  seo: {
    title:
      "CEN Certification Guide: Exam, Cost & Renewal | NursPrep",
    description:
      "Everything ED nurses need on CEN certification in 2026 — BCEN eligibility, the 175-item blueprint, $285 fee, 51% pass rate, and a 10-week study plan.",
    ogTitle:
      "CEN Certification Guide 2026 — Certified Emergency Nurse",
    ogDescription:
      "BCEN eligibility, the CEN exam blueprint, $285 ENA-member fee, 51% pass rate, and a 10-week study plan for emergency RNs.",
  },

  // ---- HERO
  lede:
    "CEN — Certified Emergency Nurse — is the Board of Certification for Emergency Nursing's flagship credential and the recognized benchmark for registered nurses who practice across the breadth of the emergency department. It validates the knowledge an ED nurse uses every shift, from triage decisions to resuscitation.",
  heroPills: [
    { k: "Questions", v: "175 items" },
    { k: "Duration", v: "3 hours" },
    { k: "Renewal", v: "4 years" },
    { k: "Pass rate", v: "51%" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "Board of Certification for Emergency Nursing (BCEN)" },
    { k: "Format", v: "Pearson VUE + Live Remote Proctoring" },
    { k: "Scored items", v: "150 of 175 (25 unscored pretest)" },
    { k: "Eligibility", v: "Current, unencumbered RN license" },
    { k: "Experience", v: "2 years in the specialty recommended, not required" },
    { k: "Fee (ENA member)", v: "$285 · non-member $380" },
    { k: "Active certificants", v: "41,636 (2025)" },
    { k: "Renewal cycle", v: "4 years — 100 CE hours or re-exam" },
  ],
  heroCardFoot:
    "Verified against the BCEN CEN program pages and 2025 certification exam statistics",

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
    { id: "compare", label: "CEN vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "CEN certification at a glance",
    prose: [
      "CEN — Certified Emergency Nurse — is the nursing benchmark for emergency-department practice. The credential is issued by the <strong>Board of Certification for Emergency Nursing (BCEN)</strong>, the specialty's certifying body since 1980; CEN is its founding and longest-running certification. As of 2025, <strong>41,636 RNs</strong> held the credential.",
      "CEN is a board certification, not a course. It is regularly confused with TNCC and ENPC — Emergency Nurses Association provider courses — but only CEN appears on your credentials line after RN. Earning it signals validated, exam-tested competence across the full range of ED presentations.",
    ],
    stats: [
      { n: "175", l: "Total items", sub: "150 scored · 25 pretest" },
      { n: "3 hrs", l: "Time limit", sub: "Continuous, computer-based" },
      { n: "51%", l: "2025 pass rate", sub: "4,198 of 8,172 completed exams" },
      { n: "4 yrs", l: "Renewal cycle", sub: "100 CE hours or re-exam" },
    ],
    factBox: {
      tone: "info",
      title: "What changes on July 6, 2026",
      html:
        "BCEN's updated CEN Examination Content Outline takes effect <strong>2026-07-06</strong>, expanding to 11 subject areas. Gastrointestinal becomes its own section, Maxillofacial and Ocular is renamed <strong>Head, Eye, Ear, Nose, Throat Emergencies</strong>, and Professional Issues splits into Prioritization (triage, mass casualty, throughput) and Legal/ethical issues. The exam stays 175 items, 150 scored, 3 hours.",
    },
    coverImageLabel:
      "Certified emergency nurse triaging a patient in a busy ED",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the CEN exam?",
    prose: [
      "Yes — if you hold a <strong>current, unencumbered Registered Nurse license</strong> in the United States, a US territory, Canada, or Australia. A foreign nursing certificate equivalent to a US RN license also qualifies once verified through TruMerit. BCEN sets no minimum-hours requirement.",
      "BCEN <em>recommends</em> at least <strong>two years of experience in your specialty</strong> before scheduling, but that recommendation is not a gate. Any active restriction, suspension, or probation on your nursing license, however, will disqualify your application.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You hold an active, unencumbered RN license and routinely work in an emergency department.",
      "You have roughly two years of ED experience and are comfortable triaging across the full age and acuity spectrum.",
      "You can recognize and respond to cardiac, respiratory, neurological, and toxicological emergencies without a reference card.",
      "You work in a setting that exposes you to the breadth of the blueprint — a community or academic ED, freestanding ED, or fast-track and resuscitation areas alike.",
    ],
  },

  // ---- BLUEPRINT (scored-item counts from the 01-2022 outline, total 150)
  blueprint: {
    heading: "CEN exam blueprint — ten content areas (effective 01-2022)",
    prose: [
      "The CEN blueprint spans ten clinical and professional content areas, weighted toward the systems an ED nurse manages most. <strong>Cardiovascular, Respiratory, and Neurological emergencies together carry about 37%</strong> of the scored items — the bulk of your study time should live there.",
      "Do not neglect Professional Issues. Triage, throughput, EMTALA, ethics, and patient-safety items feel administrative at the bedside but reliably appear. Note that BCEN reorganizes this outline into eleven areas effective 2026-07-06; the weights below reflect the outline in force through that date.",
    ],
    domains: [
      { label: "Cardiovascular Emergencies", weight: 19 },
      { label: "Respiratory Emergencies", weight: 18 },
      { label: "Neurological Emergencies", weight: 18 },
      { label: "Gastrointestinal, Genitourinary, Gynecology, and Obstetrical Emergencies", weight: 18 },
      { label: "Medical Emergencies", weight: 14 },
      { label: "Environment, Toxicology, and Communicable Disease Emergencies", weight: 14 },
      { label: "Professional Issues", weight: 14 },
      { label: "Musculoskeletal and Wound Emergencies", weight: 13 },
      { label: "Mental Health Emergencies", weight: 11 },
      { label: "Maxillofacial and Ocular Emergencies", weight: 11 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and military benefits",
    prose: [
      "BCEN delivers the CEN exam through Pearson VUE testing centers and also offers <strong>Live Remote Proctoring</strong> for candidates who prefer to test from a private location. After BCEN approves your application, schedule your seat promptly within your authorized window. The standard non-member fee is <strong>$380</strong>; Emergency Nurses Association (ENA) members pay <strong>$285</strong>.",
    ],
    rows: [
      { k: "Initial exam — non-member", v: "$380", highlight: true },
      { k: "Initial exam — ENA member", v: "$285" },
      { k: "Military / veteran application", v: "$195 (all applications)" },
      { k: "Retest", v: "$200" },
      { k: "Initial exam with Test Assurance — non-member", v: "$450" },
      { k: "Initial exam with Test Assurance — ENA member", v: "$355" },
      { k: "Military with Test Assurance", v: "$265" },
    ],
    factBox: {
      tone: "success",
      title: "Test Assurance and military pricing",
      html:
        "BCEN's optional <strong>Test Assurance</strong> program gives initial candidates a paid-for second attempt if the first is unsuccessful. Active-duty service members, reservists, and veterans pay a reduced <strong>$195</strong> on all initial, retest, and recertification applications, and BCEN certifications are VA-approved for fee reimbursement. Many EDs also reimburse the exam fee — ask your educator or manager before paying out of pocket.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "CEN certification is valid for <strong>four years</strong>. BCEN offers two renewal pathways. <strong>Recertification by CE Attestation:</strong> complete <strong>100 contact hours</strong> within the 4-year cycle, with at least <strong>75 hours of clinical content specific to emergency nursing</strong> (up to 25 may be non-clinical), and at least 50 hours from an accredited provider such as BCEN Learn, AACN, ANCC, ENA, ABA, STN, or ASTNA.",
      "<strong>Recertification by Examination:</strong> retake and pass the current CEN exam. Hours earned after your expiration date do not count, so track your CE throughout the cycle and submit before the deadline.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the CEN exam?",
    prose: [
      "BCEN reported <strong>4,198 of 8,172 completed CEN exams passed in 2025</strong> — a <strong>51%</strong> pass rate (BCEN delivered 8,889 exams that year; the gap reflects no-shows and incomplete sittings, which lowers the rate to 47% against all delivered exams). Just over half of test-takers pass on a given attempt, which puts CEN squarely in the moderately difficult band.",
      "Candidates who follow a structured 8-to-12-week plan and complete at least one full-length timed practice exam pass at meaningfully higher rates than those relying on bedside experience alone. The breadth of the blueprint — not its depth — is what trips up unprepared ED veterans.",
    ],
    rows: [{ year: "2025", pct: 51 }],
    target: 80,
    footnote:
      "51% is calculated on completed exams (4,198 passed of 8,172 passed-or-failed). Against all 8,889 exams BCEN delivered in 2025, the rate is 47%. Figures are BCEN's ABSNC-mandated statistics for the 2025 calendar year.",
    factBox: {
      tone: "info",
      title: "Breadth, not depth, is the CEN challenge",
      html:
        "CEN tests the <strong>full range</strong> of ED presentations across ten content areas — cardiac, respiratory, neuro, GI/GU/OB, tox, psych, ortho, ENT/ocular, and professional issues. ED veterans who only see a narrow case mix tend to lose points outside their comfort zone. A <strong>full-length timed 175-item practice exam</strong> exposes those gaps before test day.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 10-week CEN study plan",
    prose: [
      "A structured 10-week plan suits most ED nurses with a year or more of practice — roughly <strong>80 to 120 total study hours</strong> across the ten content areas. Question volume ramps through weeks 2–8 and peaks in week 9 with a full-length timed exam; week 10 is targeted review, logistics, and rest.",
    ],
    weeks: [
      { n: 1, focus: "Read the BCEN CEN Content Outline + baseline diagnostic exam", qs: 25 },
      { n: 2, focus: "Cardiovascular emergencies — ACS, dysrhythmias, shock, tamponade", qs: 50 },
      { n: 3, focus: "Respiratory emergencies — asthma, COPD, PE, pneumothorax, ARDS", qs: 50 },
      { n: 4, focus: "Neurological emergencies — stroke, ICP, seizures, SCI", qs: 50 },
      { n: 5, focus: "GI / GU / Gyn / OB emergencies + Medical emergencies", qs: 60 },
      { n: 6, focus: "Environment, toxicology, communicable disease + Mental health", qs: 60 },
      { n: 7, focus: "Musculoskeletal, wound, maxillofacial, and ocular emergencies", qs: 50 },
      { n: 8, focus: "Professional issues — triage/ESI, EMTALA, throughput, ethics, safety", qs: 50 },
      { n: 9, focus: "Full-length timed practice exam + error-log review", qs: 175 },
      { n: 10, focus: "Targeted review of weak content areas, rest, test day", qs: 40 },
    ],
    tipsHeading: "How CEN candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Study for breadth, not your unit",
        text:
          "CEN spans ten content areas. If your ED skews adult-medical, block dedicated weeks for OB, pediatric-leaning items, toxicology, and ENT/ocular emergencies you rarely see.",
      },
      {
        kicker: "Pace 175 items in 3 hours",
        text:
          "Pacing is a trained skill. Take at least one full-length timed practice exam under real conditions — fatigue in the last 40 items is where unprepared candidates lose the most points.",
      },
      {
        kicker: "Don't skip Professional Issues",
        text:
          "Triage and ESI, EMTALA, patient throughput, ethics, and safety appear on the exam even though they feel administrative. They are nearly 10% of scored items — easy points if you prepare.",
      },
      {
        kicker: "Anchor on triage frameworks",
        text:
          "The Emergency Severity Index (ESI), primary and secondary survey, and recognition of unstable vital-sign patterns underpin many scenario stems. Be able to assign acuity quickly and defensibly.",
      },
      {
        kicker: "Know your time-critical bundles",
        text:
          "STEMI door-to-balloon, stroke door-to-needle, the sepsis bundle, and RSI sequencing recur across items. Build a one-page reference and review it the night before.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (original, clinically verified; not copied from any source)
  sample: {
    heading: "Sample CEN question",
    prose: [
      "This item mirrors BCEN's scenario format: a short clinical stem, an unstable ED patient, and four plausible options where only one is <em>best</em>. Try it before you read the rationale.",
    ],
    q: {
      scenario:
        "A 58-year-old man presents with crushing substernal chest pain radiating to the left arm for 40 minutes. He is diaphoretic, BP 148/90, HR 96. The 12-lead ECG shows 3 mm ST-segment elevation in leads II, III, and aVF. He has received aspirin and is on the monitor.",
      stem: "Which nursing action should the emergency RN prioritize next?",
      options: [
        "Administer sublingual nitroglycerin and reassess the blood pressure.",
        "Activate the cardiac catheterization lab and prepare for emergent PCI.",
        "Obtain a chest radiograph before any further intervention.",
        "Give a bolus of IV fluids to support the right ventricle.",
      ],
      correct: 1,
      rationale:
        "ST elevation in II, III, and aVF identifies an inferior-wall STEMI; the time-critical priority is reperfusion, so activating the cath lab for emergent PCI drives the best outcome. Nitroglycerin is given cautiously in inferior MI because of possible right-ventricular involvement and preload-dependent hypotension. A chest film must not delay reperfusion in a clear STEMI.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key CEN terms every candidate should know",
    prose: [
      "These terms surface across CEN exam items. Review them until the definitions feel automatic — scenario stems often hinge on recognizing which framework or bundle applies.",
    ],
    rows: [
      { term: "ESI", defn: "Emergency Severity Index — a five-level triage algorithm that assigns acuity by patient stability and predicted resource needs.", domain: "Professional" },
      { term: "STEMI", defn: "ST-Elevation Myocardial Infarction — an acute coronary occlusion requiring emergent reperfusion (PCI or fibrinolysis) measured by door-to-balloon time.", domain: "Cardiovascular" },
      { term: "Sepsis bundle", defn: "The time-bound set of interventions — cultures, broad-spectrum antibiotics, lactate, and fluid resuscitation — initiated on recognition of sepsis or septic shock.", domain: "Medical" },
      { term: "RSI", defn: "Rapid Sequence Intubation — coordinated administration of an induction agent and paralytic to secure a definitive airway with minimal aspiration risk.", domain: "Respiratory" },
      { term: "GCS", defn: "Glasgow Coma Scale — a 3-to-15 score for level of consciousness that drives triage and traumatic-brain-injury decisions.", domain: "Neurological" },
      { term: "Status epilepticus", defn: "A seizure lasting 5 minutes or longer, or repeated seizures without recovery — a neurological emergency requiring prompt benzodiazepine therapy.", domain: "Neurological" },
      { term: "EMTALA", defn: "Emergency Medical Treatment and Labor Act — the federal statute requiring medical screening, stabilization, and appropriate transfer for all ED patients.", domain: "Professional" },
      { term: "Tension pneumothorax", defn: "Progressive air trapping in the pleural space that collapses the lung and shifts the mediastinum, treated by immediate needle or finger decompression.", domain: "Respiratory" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "CEN vs. TCRN, CPEN, CFRN, and TNCC",
    prose: [
      "CEN sits alongside several related credentials and courses that emergency RNs sometimes consider. Many candidates Google \"CEN\" when they actually mean TNCC, so the distinction matters before you spend time or money.",
    ],
    rows: [
      { row: "CEN", highlight: true, body: "BCEN", scope: "Breadth of emergency nursing across all presentations", who: "ED RNs covering the full adult and mixed-age case mix" },
      { row: "TCRN", body: "BCEN", scope: "Trauma nursing across the full continuum", who: "RNs in any trauma-touching setting" },
      { row: "CPEN", body: "BCEN", scope: "Pediatric emergency nursing", who: "RNs caring for children in the ED" },
      { row: "CFRN", body: "BCEN", scope: "Flight and inter-facility transport nursing", who: "HEMS or fixed-wing transport RNs" },
      { row: "TNCC (course, not cert)", body: "ENA", scope: "Baseline trauma resuscitation training", who: "ED RNs as foundational education" },
      { row: "ENPC (course, not cert)", body: "ENA", scope: "Baseline pediatric emergency training", who: "ED RNs as foundational education" },
    ],
    closingProse:
      "<strong>Take CEN if your day-to-day is broad emergency-department practice.</strong> Add TCRN if you want to validate trauma expertise across the continuum, or CPEN if your focus is pediatric ED. TNCC and ENPC are ENA provider courses — they build skills but do not replace CEN on your credentials line.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about CEN certification",
    items: [
      { q: "What does CEN stand for in nursing?", a: "CEN stands for Certified Emergency Nurse. The credential is issued by the Board of Certification for Emergency Nursing (BCEN)." },
      { q: "Is CEN the same as TNCC?", a: "No. CEN is a board certification earned by passing a 175-item exam, while TNCC is a provider course run by the Emergency Nurses Association. Only CEN appears as a credential after your name." },
      { q: "How many questions are on the CEN exam?", a: "The CEN exam has 175 questions — 150 scored and 25 unscored pretest items — with a 3-hour time limit, delivered by computer through Pearson VUE." },
      { q: "What are the eligibility requirements for the CEN exam?", a: "You need a current, unencumbered RN license in the US, a US territory, Canada, or Australia. BCEN recommends two years of specialty experience but does not require it." },
      { q: "How hard is the CEN exam?", a: "The CEN exam is moderately difficult. About 51% of completed exams passed in 2025, and the main challenge is the breadth of the ten-area blueprint rather than the depth of any one topic." },
      { q: "How much does the CEN exam cost?", a: "The CEN exam costs $380 for non-members and $285 for ENA members. Active-duty service members, reservists, and veterans pay a reduced $195, and a retest is $200." },
      { q: "How long does CEN certification last?", a: "CEN certification is valid for four years. You renew through CE attestation (100 contact hours, at least 75 in emergency-nursing clinical content) or by retaking the exam." },
      { q: "What happens if I fail the CEN exam?", a: "You may retake the CEN exam after the required waiting period by submitting a retest application and the $200 retest fee. BCEN's optional Test Assurance program prepays a second attempt." },
      { q: "Will my hospital pay for CEN certification?", a: "Many emergency departments reimburse the CEN application fee and offer paid study time. Ask your nurse educator or manager, and note that BCEN certifications are VA-approved for eligible military personnel." },
      { q: "Is CEN changing in 2026?", a: "Yes. BCEN's updated CEN Examination Content Outline takes effect July 6, 2026, expanding to 11 subject areas, but the exam stays 175 items, 150 scored, over 3 hours." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following primary sources. Fees, blueprint weights, and recertification rules shift on BCEN's revision cycle — always verify numeric facts against the current BCEN handbook before relying on them for application decisions.",
    ],
    list: [
      "Board of Certification for Emergency Nursing (BCEN) — Certified Emergency Nurse (CEN) program page",
      "BCEN — CEN Eligibility (RN license requirement; 2-year experience recommendation)",
      "BCEN — CEN FAQs (175 items, 150 scored, 3-hour format)",
      "BCEN — The Cost of a CEN Specialization (fee table: $380 / $285 / $195 / $200; Test Assurance)",
      "BCEN — Recertification (4-year cycle; 100 CE hours, 75 specialty-specific; or re-exam)",
      "BCEN — Certification Exam Statistics, 2025 (8,889 delivered, 4,198 passed, 41,636 certificants)",
      "BCEN — CEN Examination Content Outline, effective 01-2022 (ten content areas, 150 scored items)",
      "BCEN — Evolving Excellence: Updating the CEN Exam (content outline effective 2026-07-06)",
      "Emergency Nurses Association (ENA) — membership tiers and TNCC / ENPC provider courses",
      "US Bureau of Labor Statistics (BLS) — Occupational Employment and Wage Statistics, Registered Nurses (May 2024)",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice CEN-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to the CEN blueprint. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full CEN question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "TCRN",
      title: "CEN vs TCRN: which BCEN exam fits your scope?",
      blurb: "Blueprint overlap, career impact, and when to stack both credentials — for ED RNs weighing breadth vs depth.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "The three domains that decide CEN first-time pass",
      blurb: "Why Cardiovascular, Respiratory, and Neurological together make up about 37% of your score, and the concepts BCEN tests most.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "Emergency dept",
      title: "What CEN does for your ED nursing career",
      blurb: "How certified-nurse percentages factor into Magnet status and ED hiring, and what the credential signals to managers.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
