// CCRN exam detail page — structured data.
// Sourced from Content/CCRN_research.json (verified against the AACN CCRN Exam
// Handbook – Direct Care Pathway (July 2026), AACN exam statistics and cut
// scores, AACN renewal pages, and BLS OEWS/OOH RN wage data).
// Lives at /certifications/ccrn/ via the paginated template.

module.exports = {
  code: "CCRN",
  name: "Critical Care Registered Nurse",
  body: "AACN",
  cat: "critical",
  catLabel: "Critical & Emergency Care",
  updated: "2026-09",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title:
      "CCRN Certification: Requirements, Exam & Renewal | NursPrep",
    description:
      "CCRN certification explained for critical care nurses — AACN eligibility hours, the 150-item exam, 80/20 blueprint, $260 member fee, 72% pass rate, and 3-year renewal.",
    ogTitle:
      "CCRN Certification Guide 2026 — Critical Care Registered Nurse",
    ogDescription:
      "AACN eligibility, the November 2025 test plan, $260/$375 fees, a 72% first-time pass rate, and an 8-week study plan for ICU nurses.",
  },

  // ---- HERO
  lede:
    "CCRN is the AACN Certification Corporation credential for registered nurses and advanced practice nurses who care for acutely and critically ill patients. AACN awards it separately for three patient populations — adult, pediatric and neonatal — and judges eligibility on patient acuity rather than the name on your unit door. Do not confuse it with CRRN, the rehabilitation nursing credential from a different certifying board.",
  heroPills: [
    { k: "Questions", v: "150 items" },
    { k: "Duration", v: "3 hours" },
    { k: "Renewal", v: "3 years" },
    { k: "Pass rate", v: "72%" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "AACN Certification Corporation" },
    { k: "Populations", v: "Adult · Pediatric · Neonatal" },
    { k: "Format", v: "PSI test centers + Live Remote Proctoring" },
    { k: "Scored items", v: "125 of 150 (25 unscored pretest)" },
    { k: "Passing score", v: "83 / 125 adult and pediatric · 84 neonatal" },
    { k: "Eligibility", v: "Current, unencumbered US RN or APRN license" },
    { k: "Experience", v: "1,750 hrs in 2 yrs or 2,000 hrs in 5 yrs" },
    { k: "Fee (AACN member)", v: "$260 · non-member $375" },
    { k: "Renewal cycle", v: "3 years — 100 Synergy CERPs or re-exam" },
  ],
  heroCardFoot:
    "Verified against the AACN CCRN Exam Handbook – Direct Care Pathway (July 2026) and the test plans effective November 12, 2025",

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
    { id: "compare", label: "CCRN vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "What is CCRN certification?",
    prose: [
      "CCRN — Critical Care Registered Nurse — is a specialty certification for RNs and APRNs who provide direct care to acutely or critically ill patients. It is issued by <strong>AACN Certification Corporation</strong>, the credentialing arm of the <strong>American Association of Critical-Care Nurses (AACN)</strong>, and it is accepted by the Magnet Recognition Program. At the end of 2025, <strong>102,129 nurses</strong> held the adult credential.",
      "AACN awards CCRN by patient population: adult, pediatric or neonatal. You sit the exam that matches the patients you care for, and your eligible practice hours must come from that same population. Eligibility turns on how sick your patients are, not on your unit's name — ICU, cardiac care, emergency department, PACU, trauma and critical care transport or flight all qualify when the patients are critically ill.",
      "Two further eligibility pathways lead to the same exam. <strong>CCRN-K</strong> serves nurses who influence critical care without primarily delivering it, such as educators, managers and academic faculty. <strong>CCRN-E</strong> serves nurses who care for critically ill adults from a remote tele-critical care hub networked to the bedside.",
    ],
    stats: [
      { n: "150", l: "Total items", sub: "125 scored · 25 pretest" },
      { n: "3 hrs", l: "Time limit", sub: "Computer-based, single session" },
      { n: "72.0%", l: "2025 first-time pass rate", sub: "Adult exam · 17,151 candidates" },
      { n: "3 yrs", l: "Renewal cycle", sub: "100 Synergy CERPs or re-exam" },
    ],
    factBox: {
      tone: "info",
      title: "What changed in November 2025",
      html:
        "Revised CCRN test plans apply to exams taken on and after <strong>November 12, 2025</strong>, built from AACN's most recent study of practice. New cut scores took effect the same day: <strong>83 of 125 scored items</strong> for the adult and pediatric exams and <strong>84</strong> for neonatal. AACN is also moving to generic-only medication names, though candidates may still see both generic and trade names during the transition.",
    },
    coverImageLabel:
      "Critical care RN titrating vasoactive drips at an adult ICU bedside",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "What are the CCRN certification requirements?",
    prose: [
      "You need a <strong>current, unencumbered U.S. RN or APRN license</strong> plus verifiable clinical practice hours caring for acutely or critically ill patients. AACN defines unencumbered as a license not under formal board of nursing discipline and carrying no conditions that limit practice, such as supervision requirements or drug administration limits.",
      "The Direct Care pathway offers two hour options. The <strong>Two-Year Option</strong> asks for <strong>1,750 hours</strong> in the previous two years, with <strong>875</strong> of them in the most recent year. The <strong>Five-Year Option</strong> asks for <strong>2,000 hours</strong> across five years, with only <strong>144</strong> in the most recent year — the route that suits nurses whose bedside time has tapered.",
      "A majority of your hours, and of the hours in the year before you apply, must focus on critically ill patients. Orientation time counts only when you held the patient assignment, not when you shadowed another nurse. Hours must come from a U.S. or Canada-based facility, or one comparable to the U.S. standard as shown by Magnet designation or Joint Commission International accreditation.",
      "AACN does not require you to submit hour logs up front. You name a professional associate — your clinical supervisor or an RN or physician colleague — who will verify the hours in writing if your application is selected for audit.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You have logged 1,750 direct-care hours over the past two years, with 875 of them in the last twelve months, caring for the population your exam covers.",
      "Your assignment usually runs one nurse to one or two patients because of acuity, rather than the three-to-four ratio typical of progressive care.",
      "You titrate vasoactive infusions, manage mechanical ventilation, and interpret hemodynamic data without reaching for a reference.",
      "You work in a setting AACN recognises for critical care hours: ICU, cardiac care unit, combined ICU/CCU, emergency department, PACU or recovery, trauma unit, or critical care transport and flight.",
      "You influence critical care as an educator, manager, director, academic faculty member or case manager rather than delivering it — in which case the CCRN-K pathway needs 1,040 hours over two years, with 260 in the most recent year.",
      "You monitor critically ill adults from a centralised tele-critical care unit, which routes you to the CCRN-E pathway at the same 1,750 or 2,000-hour thresholds.",
    ],
  },

  // ---- BLUEPRINT (adult test plan, effective 2025-11-12)
  blueprint: {
    heading: "CCRN exam blueprint — Clinical Judgment 80%, Professional Caring and Ethical Practice 20%",
    prose: [
      "Every CCRN exam splits the same way: <strong>80% Clinical Judgment</strong> and <strong>20% Professional Caring and Ethical Practice</strong>. The weights below break down the Clinical Judgment share for the <strong>adult</strong> test plan that took effect November 12, 2025. Percentages are shares of the whole 150-item exam.",
      "Body-system content clusters unevenly. The combined Endocrine, Hematology/Immunology, Gastrointestinal, Renal/Genitourinary and Integumentary category carries 21% on its own, and Multisystem — sepsis, shock states, acid-base, fluid and electrolytes, MODS, end-of-life — carries another 16%. Together they outweigh cardiovascular and respiratory content, which is where most candidates instinctively start.",
      "The pediatric and neonatal test plans use the same 80/20 split with different body-system weights. Pediatric shifts toward the Endocrine/Hematology/GI/Renal/Integumentary group at 25%; neonatal weights Respiratory at 15% and Multisystem at 20%. AACN notes that category percentages may not sum to exactly 100 because of rounding.",
      "Professional Caring and Ethical Practice covers seven Synergy Model competencies — Advocacy/Moral Agency, Caring Practices, Clinical Inquiry, Collaboration, Facilitation of Learning, Response to Diversity and Systems Thinking. AACN publishes the combined 20% but not per-competency weights, so treat the whole block as one study target worth roughly 30 items.",
    ],
    domains: [
      { label: "Clinical Judgment — Cardiovascular", weight: 13 },
      { label: "Clinical Judgment — Respiratory", weight: 12 },
      { label: "Clinical Judgment — Endocrine, Hematology/Immunology, GI, Renal/GU, Integumentary", weight: 21 },
      { label: "Clinical Judgment — Musculoskeletal, Neurological, Behavioral/Psychosocial", weight: 18 },
      { label: "Clinical Judgment — Multisystem", weight: 16 },
      { label: "Professional Caring and Ethical Practice (7 Synergy competencies)", weight: 20 },
    ],
  },

  // ---- COST
  cost: {
    heading: "CCRN certification cost, scheduling and renewal",
    prose: [
      "The CCRN exam costs <strong>$260 for AACN members and $375 for non-members</strong> — the same price on all three eligibility pathways. AACN membership therefore pays for a large share of itself on the application alone. Group discounts apply when 10 or more candidates apply together, and employers can pre-purchase exam vouchers at a further reduced rate.",
      "AACN runs continuous testing rather than fixed windows. After your application is accepted you receive a confirmation email opening an eligibility period — normally 90 days, currently extended to <strong>180 days</strong> — in which you must test. You then book a seat at a <strong>PSI test center</strong> or a <strong>Live Remote Proctoring</strong> slot from a quiet, private location of your own.",
      "Results appear on screen the moment you finish a computer-based exam, and a detailed score report reaches your inbox within 24 hours. Wall certificates arrive by mail in roughly four to six weeks, and you can self-print one from your AACN dashboard sooner. If you do not pass, you may apply for and take the same exam up to four times in a rolling 12-month period.",
    ],
    rows: [
      { k: "Initial exam — AACN member", v: "$260" },
      { k: "Initial exam — non-member", v: "$375", highlight: true },
      { k: "Retest — member / non-member", v: "$185 / $290" },
      { k: "Renewal by Synergy CERPs — member / non-member", v: "$150 / $230" },
      { k: "Renewal by Exam — member / non-member", v: "$185 / $290" },
      { k: "Group discount", v: "Available for 10+ candidates applying together" },
      { k: "Employer vouchers", v: "Pre-purchased at a further discounted rate" },
      { k: "Returned check fee", v: "$15" },
    ],
    factBox: {
      tone: "success",
      title: "Check the member price before you pay",
      html:
        "The gap between member and non-member pricing is <strong>$115</strong> on the initial exam and <strong>$105</strong> on a retest. Many hospitals also reimburse certification fees or pay a certification differential — ask your clinical educator or unit manager before you submit the application, because reimbursement often requires pre-approval.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "CCRN certification runs for <strong>three years</strong>, starting on the first day of the month you pass and ending three years later. AACN emails renewal notices from four months out, and you can renew as early as four months before your date. A 90-day grace period follows expiration for submitting the renewal itself, but CERPs and practice hours cannot be earned during it.",
      "<strong>Option 1 — Renewal by Synergy CERPs:</strong> earn <strong>100 Continuing Education Recognition Points</strong> — at least 60 in Category A (Clinical Judgment, Clinical Inquiry), at least 10 in Category B (Advocacy/Moral Agency, Caring Practices, Response to Diversity, Facilitation of Learning), at least 10 in Category C (Collaboration, Systems Thinking), and 20 more in any category. <strong>Option 2 — Renewal by Exam:</strong> pass the current CCRN exam before your renewal date, applying at least 30 days ahead.",
      "Both options also require <strong>432 clinical practice hours</strong> across the three-year period, with <strong>144</strong> of them in the twelve months before your renewal date. Keep your CERP evidence: AACN may audit for up to three years after the renewal date. Nurses who no longer meet the requirements can choose Inactive, Alumnus or Retired status instead of letting the credential lapse.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the CCRN exam?",
    prose: [
      "AACN reported a <strong>72.02% first-time pass rate</strong> for the adult CCRN exam in 2025 across <strong>17,151 candidates</strong>, producing 15,312 new certificants. That is close to 2024's 72.74% but well below the 81.20% recorded in 2023, so roughly one candidate in four now leaves without the credential on a first attempt.",
      "The pediatric exam ran at 68.72% in 2025 and the neonatal exam at 60.29%, on far smaller candidate pools of 1,474 and 305. Smaller cohorts swing more year to year, so read the neonatal figure as a range rather than a fixed difficulty rating.",
      "The passing standard is a raw count, not a percentage. Since November 12, 2025 you need <strong>83 of 125 scored items</strong> on the adult and pediatric exams and <strong>84</strong> on neonatal. AACN sets that number using the modified Angoff method with a Score Evaluation Committee and PSI psychometricians, and it moves whenever the exam is revised or re-equated — which is why a fixed percentage target is misleading.",
    ],
    rows: [
      { year: "2023", pct: 81.2 },
      { year: "2024", pct: 72.7 },
      { year: "2025", pct: 72.0 },
    ],
    target: 85,
    footnote:
      "Adult CCRN first-time pass rates, AACN Certification Exam Statistics. The 2025 figure spans exams under both the previous and the revised (November 12, 2025) test plans.",
    factBox: {
      tone: "info",
      title: "Where candidates lose points",
      html:
        "Body-system content outside your own unit is the usual gap. A cardiac ICU nurse who studies cardiovascular and respiratory content covers 25% of the exam and leaves the 21% Endocrine/Hematology/GI/Renal/Integumentary block and the 16% Multisystem block thin. The 20% Professional Caring and Ethical Practice section is the second common leak — roughly 30 items on advocacy, collaboration, systems thinking and clinical inquiry that feel abstract at the bedside but score the same as any drip calculation.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "An 8-week CCRN study plan",
    prose: [
      "Eight weeks suits most nurses who already meet the hour requirement — plan on <strong>60 to 100 total study hours</strong> weighted toward the blueprint's heavier categories rather than spread evenly. Question volume ramps from a diagnostic in week 1 to a full-length timed 150-item exam in week 7, leaving week 8 for weak-area repair and logistics.",
      "Apply for the exam before you start studying only if you are close to ready. Your eligibility period is currently 180 days, which comfortably covers an eight-week plan, but the clock does not pause.",
    ],
    weeks: [
      { n: 1, focus: "Read the AACN CCRN test plan + 50-item baseline diagnostic to find weak categories", qs: 50 },
      { n: 2, focus: "Cardiovascular — ACS, shock states, dysrhythmias, hemodynamics, cardiac surgery, structural defects", qs: 60 },
      { n: 3, focus: "Respiratory — ARDS, acute respiratory failure, ventilation and its complications, PE, pulmonary hypertension", qs: 60 },
      { n: 4, focus: "Endocrine, hematology/immunology, GI, renal/GU, integumentary — the single heaviest block at 21%", qs: 75 },
      { n: 5, focus: "Musculoskeletal, neurological, behavioral/psychosocial — stroke, TBI, spinal cord injury, delirium, PICS", qs: 70 },
      { n: 6, focus: "Multisystem — sepsis, MODS, acid-base, fluid and electrolytes, burns, end-of-life, thermoregulation", qs: 70 },
      { n: 7, focus: "Professional Caring and Ethical Practice + full-length timed 150-item practice exam", qs: 150 },
      { n: 8, focus: "Targeted review of weakest two categories, error-log rework, exam-day logistics, rest", qs: 50 },
    ],
    tipsHeading: "How CCRN candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Study the blueprint, not your unit",
        text:
          "Your assignment shapes your instincts and your instincts do not match the test plan. Map your practice against the five Clinical Judgment categories, then give the weakest ones the most weeks. A neuro ICU nurse and a CVICU nurse should build noticeably different plans from the same blueprint.",
      },
      {
        kicker: "Give Professional Caring real study time",
        text:
          "Twenty percent of the exam covers the seven Synergy competencies. Read AACN's Synergy Model descriptions of advocacy/moral agency, caring practices, clinical inquiry, collaboration, facilitation of learning, response to diversity and systems thinking, then practise applying them to family conflict, end-of-life and handoff scenarios.",
      },
      {
        kicker: "Learn the Synergy Model as a reasoning tool",
        text:
          "The Synergy Model is the organizing framework for the whole exam. Items reward matching nurse competencies to patient characteristics — resiliency, vulnerability, stability, complexity, resource availability, participation in care, participation in decision-making, predictability. Reading a stem through that lens often eliminates two options immediately.",
      },
      {
        kicker: "Sit one full-length timed exam",
        text:
          "150 items in 180 minutes gives you 72 seconds per item with no scheduled break. Candidates who never rehearse that pacing lose time early on long hemodynamic stems and rush the final stretch, where accuracy drops fastest.",
      },
      {
        kicker: "Practise picking the best answer, not the right one",
        text:
          "CCRN stems usually leave several defensible actions on the table. Ask which action addresses the most immediate threat to airway, oxygenation or perfusion, and which one you would perform first rather than eventually.",
      },
      {
        kicker: "Sit the exam for your actual population",
        text:
          "Adult, pediatric and neonatal are distinct exams with distinct test plans and cut scores, and your eligible hours must come from the matching population. Applying for the wrong one wastes both the fee and the eligibility window.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (original item written to the AACN adult test plan, Multisystem category)
  sample: {
    heading: "Sample CCRN question",
    prose: [
      "This item follows the AACN format: a clinical stem, several defensible options, and one that is <em>best</em> for the moment described. It maps to the adult Multisystem category. Work it through before you read the rationale.",
    ],
    q: {
      scenario:
        "A 62-year-old admitted with community-acquired pneumonia has received 30 mL/kg of balanced crystalloid over the past hour. Current data: BP 82/44 mm Hg (MAP 57), HR 122, RR 30, temperature 38.9°C, serum lactate 4.6 mmol/L rising from 3.1, central venous pressure 12 mm Hg, urine output 15 mL/hr for two hours, extremities warm and flushed.",
      stem: "Which action should the critical care nurse anticipate implementing next?",
      options: [
        "Administer a second 30 mL/kg crystalloid bolus before considering vasoactive support.",
        "Start a norepinephrine infusion titrated to a mean arterial pressure of at least 65 mm Hg.",
        "Transfuse one unit of packed red blood cells to improve oxygen delivery.",
        "Begin a dobutamine infusion to increase cardiac output and renal perfusion.",
      ],
      correct: 1,
      rationale:
        "The patient has septic shock: hypotension and a rising lactate that persist after adequate volume resuscitation. Norepinephrine is the first-line vasopressor, titrated to a MAP of 65 mm Hg or higher. A further large bolus is unlikely to help with a CVP of 12 and no response to the first 30 mL/kg, and it risks pulmonary edema. Nothing in the data points to anemia, so transfusion is not indicated. Dobutamine belongs later, for persistent hypoperfusion despite an adequate MAP and evidence of low cardiac output — the warm, flushed extremities here suggest distributive rather than cardiogenic physiology.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key CCRN terms every candidate should know",
    prose: [
      "These terms run through CCRN stems and through AACN's own documentation. The domain column maps each one to the blueprint category where it most often appears, so you can fold this table into whichever week of the plan you are working.",
    ],
    rows: [
      { term: "Synergy Model", defn: "AACN's framework for all its certification exams. Optimal outcomes follow when nurse competencies match patient characteristics such as stability, complexity, vulnerability and predictability.", domain: "Professional" },
      { term: "CERP", defn: "Continuing Education Recognition Point — AACN's renewal currency. 100 CERPs across Categories A, B and C renew CCRN for another three years.", domain: "Renewal" },
      { term: "Cut score", defn: "The raw number of scored items you must answer correctly, set by the modified Angoff method. Currently 83 of 125 for adult and pediatric CCRN, 84 for neonatal.", domain: "Exam" },
      { term: "MAP", defn: "Mean arterial pressure — the perfusion target that drives vasopressor titration in shock, commonly 65 mm Hg or higher.", domain: "Multisystem" },
      { term: "Lactate clearance", defn: "The fall in serum lactate during resuscitation, used as a marker of restored tissue perfusion in sepsis and shock states.", domain: "Multisystem" },
      { term: "P/F ratio", defn: "PaO2 divided by FiO2 — grades ARDS severity as mild, moderate or severe and guides ventilator and prone-positioning decisions.", domain: "Respiratory" },
      { term: "PEEP", defn: "Positive end-expiratory pressure — recruits collapsed alveoli and improves oxygenation, at the cost of reduced venous return and higher barotrauma risk.", domain: "Respiratory" },
      { term: "ABCDEF bundle", defn: "Pain assessment, both spontaneous awakening and breathing trials, choice of sedation, delirium monitoring, early mobility, and family engagement — the ICU liberation bundle.", domain: "Multisystem" },
      { term: "CAM-ICU", defn: "Confusion Assessment Method for the ICU — validated bedside screen for delirium in ventilated and non-verbal patients.", domain: "Neuro/Behavioral" },
      { term: "RASS", defn: "Richmond Agitation-Sedation Scale — a −5 to +4 score used to set and document sedation targets.", domain: "Neuro/Behavioral" },
      { term: "Pulse pressure variation", defn: "Respiratory swing in arterial pulse pressure during mechanical ventilation, used to predict whether a patient will respond to a fluid bolus.", domain: "Cardiovascular" },
      { term: "ScvO2", defn: "Central venous oxygen saturation — reflects the balance between oxygen delivery and consumption; a low value signals inadequate delivery.", domain: "Cardiovascular" },
      { term: "CRRT", defn: "Continuous renal replacement therapy — slow continuous dialysis tolerated better than intermittent hemodialysis by hemodynamically unstable patients.", domain: "Renal/GU" },
      { term: "DKA vs. HHS", defn: "Diabetic ketoacidosis brings acidosis and ketones with moderate hyperglycemia; hyperosmolar hyperglycemic state brings extreme hyperglycemia and osmolality without significant ketosis.", domain: "Endocrine" },
      { term: "MODS", defn: "Multi-organ dysfunction syndrome — progressive failure of two or more organ systems, most often downstream of sepsis or prolonged shock.", domain: "Multisystem" },
      { term: "Targeted temperature management", defn: "Controlled cooling and rewarming after cardiac arrest to limit anoxic neurological injury.", domain: "Neuro/Behavioral" },
      { term: "PICS", defn: "Post-intensive care syndrome — persistent physical, cognitive and psychological impairment after critical illness, affecting patients and families alike.", domain: "Neuro/Behavioral" },
      { term: "Unencumbered license", defn: "An RN or APRN license under no formal board discipline and carrying no conditions that limit practice. Required for both CCRN eligibility and renewal.", domain: "Eligibility" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "CCRN vs. PCCN, CRRN, CCRN-K, CCRN-E, CMC and CSC",
    prose: [
      "Several credentials sit close to CCRN, and two of them get mistaken for it outright. <strong>CRRN</strong> differs by a single letter but belongs to a different specialty and a different certifying board. <strong>PCCN</strong> shares AACN as its issuer and separates from CCRN on patient acuity — the question AACN itself tells candidates to answer first.",
      "CCRN-K and CCRN-E are not rival credentials. They are alternative eligibility routes to the same exam, priced identically, for nurses whose critical care work is indirect or remote.",
    ],
    rows: [
      { row: "CCRN", highlight: true, body: "AACN", scope: "Critically ill, unstable adult, pediatric or neonatal patients; typically 1:1 or 1:2 assignments", who: "Bedside RNs and APRNs in ICU, CCU, ED, PACU, trauma and critical care transport" },
      { row: "PCCN", body: "AACN", scope: "Acutely ill, moderately stable adults with potential to deteriorate; typically 1:3 or 1:4 assignments", who: "RNs in progressive care, telemetry, stepdown, intermediate care, observation, cath lab and interventional radiology" },
      { row: "CRRN", body: "RNCB (Association of Rehabilitation Nurses)", scope: "Rehabilitation nursing — restoring function and independence after injury or chronic illness", who: "RNs on inpatient rehab units and in rehab programs. Not a critical care credential despite the similar letters" },
      { row: "CCRN-K", body: "AACN", scope: "Same CCRN exam and test plan, reached through the Knowledge Professional eligibility pathway", who: "Educators, managers, directors, academic faculty, case managers and administrators who influence critical care" },
      { row: "CCRN-E", body: "AACN", scope: "Same CCRN exam, reached through the Tele-critical Care eligibility pathway", who: "RNs and APRNs monitoring critically ill adults from a centralized or remote tele-critical care unit" },
      { row: "CMC", body: "AACN", scope: "Cardiac medicine subspecialty layered on top of CCRN or PCCN", who: "Certified nurses deepening cardiac medicine practice, not an alternative entry point" },
      { row: "CSC", body: "AACN", scope: "Cardiac surgery subspecialty layered on top of CCRN or PCCN", who: "Certified nurses caring for patients in the first 48 hours after cardiac surgery" },
    ],
    closingProse:
      "<strong>Choose CCRN if your patients are unstable and your assignment reflects it.</strong> Choose <a href=\"/certifications/pccn/\">PCCN</a> if they are acutely ill but moderately stable at three or four patients per nurse — AACN judges this on acuity, not on your unit's name, so ask your supervisor before applying if the call is close. <a href=\"/certifications/crrn/\">CRRN</a> answers a different question entirely: it certifies rehabilitation nursing practice and comes from the Rehabilitation Nursing Certification Board, not AACN. CMC and CSC come after CCRN, not instead of it.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about CCRN certification",
    items: [
      { q: "What does CCRN stand for?", a: "CCRN stands for Critical Care Registered Nurse. AACN Certification Corporation, the credentialing arm of the American Association of Critical-Care Nurses, awards it in three patient populations: adult, pediatric and neonatal." },
      { q: "What is CCRN certification in nursing?", a: "It is a specialty certification validating that an RN or APRN has the knowledge to care for acutely and critically ill patients. Eligibility rests on patient acuity rather than unit name, and the Magnet Recognition Program accepts the credential." },
      { q: "How many clinical practice hours are required for CCRN certification?", a: "Either 1,750 hours of direct critical care over the previous two years with 875 in the most recent year, or 2,000 hours over five years with 144 in the most recent year. The CCRN-K pathway instead requires 1,040 hours over two years with 260 in the most recent year." },
      { q: "How do I get CCRN certified?", a: "Confirm you hold a current unencumbered U.S. RN or APRN license and meet one hour option, apply online through AACN with your license details and a professional associate who can verify your hours, then schedule the exam at a PSI test center or by Live Remote Proctoring within your eligibility period." },
      { q: "How hard is the CCRN exam?", a: "The adult exam had a 72.02% first-time pass rate in 2025 across 17,151 candidates, down from 81.20% in 2023. You need 83 of 125 scored items correct, and most candidates who fail have studied their own unit's content rather than the full blueprint." },
      { q: "How many questions are on the CCRN exam?", a: "150 multiple-choice items in a three-hour session. Only 125 are scored; the other 25 are unscored pretest items AACN uses to gather statistics for future exams, and you cannot tell which is which." },
      { q: "How much does CCRN certification cost?", a: "$260 for AACN members and $375 for non-members, the same on all three eligibility pathways. A retest costs $185 or $290, and group discounts are available when 10 or more candidates apply together." },
      { q: "What are the CCRN renewal requirements?", a: "CCRN lasts three years. Renew with 100 Synergy CERPs (at least 60 in Category A, 10 in B and 10 in C, plus 20 in any category) or by passing the exam again, and in either case complete 432 practice hours across the cycle with 144 in the final twelve months." },
      { q: "Is CCRN the same as CRRN?", a: "No. CRRN is the Certified Rehabilitation Registered Nurse credential from the Rehabilitation Nursing Certification Board and covers rehabilitation nursing. CCRN comes from AACN and covers critical care. The similar letters are the only thing they share." },
      { q: "What is the difference between CCRN and CCRN-K?", a: "They are the same exam. CCRN-K marks the Knowledge Professional eligibility pathway, for nurses such as educators, managers and faculty who influence care of critically ill patients without primarily delivering it. CCRN-E marks the Tele-critical Care pathway." },
      { q: "Is there a pediatric or neonatal CCRN?", a: "Yes. AACN offers separate adult, pediatric and neonatal CCRN exams with their own test plans. Your eligible practice hours must come from the population whose exam you sit; in 2025 the pediatric exam passed 68.72% of first-time candidates and the neonatal exam 60.29%." },
      { q: "What happens if I fail the CCRN exam?", a: "You may apply for and take the same exam up to four times in a rolling 12-month period, at the retest fee of $185 for members or $290 for non-members. After twelve months you sign a new honor statement." },
      { q: "How do I verify a nurse's CCRN certification?", a: "AACN provides a public certification verification tool on its website. It confirms whether a nurse currently holds CCRN and which population and pathway the credential covers." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "Every figure on this page traces to the primary sources below. AACN revises fees, test plans and cut scores on its own cycle — the current test plans took effect November 12, 2025 — so confirm numbers against the live AACN handbook before you apply.",
    ],
    list: [
      "AACN — CCRN (Adult) Direct Care Eligibility Pathway: https://www.aacn.org/certification/get-certified/ccrn-adult",
      "AACN — CCRN Exam Handbook, Direct Care Pathway (July 2026): https://www.aacn.org/-/media/aacn-website/certification/get-certified/handbooks/ccrnexamhandbook.pdf",
      "AACN — Certification Exam Statistics and Cut Scores (2023–2025 pass rates, certificant counts, cut scores): https://www.aacn.org/certification/preparation-tools-and-handbooks/exam-stats-and-scores",
      "AACN — CCRN (Adult) Renewal, Direct Care Eligibility Pathway (CERP categories, 432/144 practice hours, renewal fees): https://www.aacn.org/certification/certification-renewal/ccrn-adult",
      "AACN — Should I Apply for the CCRN or PCCN Certification Exam? https://www.aacn.org/certification/ccrn-or-pccn",
      "AACN — CCRN (Adult) Knowledge Professional Eligibility Pathway (CCRN-K): https://www.aacn.org/certification/get-certified/ccrn-k-adult",
      "AACN — CCRN (Adult) Tele-critical Care Eligibility Pathway (CCRN-E): https://www.aacn.org/certification/get-certified/ccrn-e-adult",
      "AACN — Certification Exam Policy Handbook (scheduling, rescheduling, exam-day policy): https://www.aacn.org/-/media/aacn-website/certification/get-certified/handbooks/certpolicyhndbk.pdf",
      "AACN — Synergy Model for Patient Care: https://www.aacn.org/nursing-excellence/aacn-standards/synergy-model",
      "AACN — Verify Certification: https://www.aacn.org/certification/verify-certification",
      "US Bureau of Labor Statistics — Registered Nurses, Occupational Outlook Handbook (May 2025 median wage $97,550; 6% projected growth 2025–2035): https://www.bls.gov/ooh/healthcare/registered-nurses.htm",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice CCRN-style items?",
  ctaProse:
    "Work through a 25-question diagnostic weighted to the November 2025 adult test plan and see which blueprint category needs your next four weeks. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full CCRN question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "PCCN",
      title: "CCRN or PCCN: reading acuity, not your unit's name",
      blurb: "How AACN actually decides which exam your hours qualify for, and what to do when your assignment straddles ICU and stepdown.",
      href: "/certifications/pccn/",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "The 21% block most CCRN candidates underestimate",
      blurb: "Endocrine, hematology, GI, renal and integumentary content outweighs cardiovascular on the adult test plan. Here is what AACN tests inside it.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Renewal",
      tag: "CERPs",
      title: "Planning 100 Synergy CERPs across a three-year cycle",
      blurb: "Category A, B and C minimums, the 432-hour practice rule, and how to keep audit-ready evidence without a last-minute scramble.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
