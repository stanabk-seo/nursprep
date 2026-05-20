// MEDSURG-BC exam detail page — structured data.
// Sourced from Content Briefs/MEDSURG-BC_Content_Brief.md and Content/MEDSURG-BC_research.json
// (verified against ANCC, the September 2024 Test Content Outline, the 2024 ANCC
// Certification Data, BLS OEWS, and MSNCB primary sources as of the 2026-05 cycle).
// Lives at /certifications/medsurg-bc/ via the paginated template.

module.exports = {
  code: "MEDSURG-BC",
  name: "Medical‑Surgical Nursing — Board Certified",
  body: "ANCC",
  cat: "specialty",
  catLabel: "Specialty Certifications",
  updated: "2026-05",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title:
      "MEDSURG-BC Certification Guide: Eligibility, Exam & Cost | NursPrep",
    description:
      "Complete MEDSURG-BC guide for 2026 — ANCC eligibility, the September 2024 blueprint, $295/$395 fee, 75% pass rate, 5-year renewal, and MEDSURG-BC vs CMSRN.",
    ogTitle:
      "MEDSURG-BC Certification Guide 2026 — ANCC Medical-Surgical Nursing",
    ogDescription:
      "ANCC eligibility, the September 2024 three-domain blueprint, $295 fee, 75% pass rate, and a 10-week study plan for med-surg RNs.",
  },

  // ---- HERO
  lede:
    "MEDSURG-BC is the American Nurses Credentialing Center's RN-level board certification for medical-surgical nursing — the most populated nursing specialty in the United States. The credential validates entry-level clinical knowledge and skills across the broad adult med-surg scope: pre-op, post-op, and non-critical medical patients on inpatient floors.",
  heroPills: [
    { k: "Questions", v: "175 items" },
    { k: "Duration", v: "3 hours" },
    { k: "Renewal", v: "5 years" },
    { k: "Pass rate", v: "75%" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "American Nurses Credentialing Center (ANCC)" },
    { k: "Format", v: "Prometric — test centers or remote-proctored" },
    { k: "Scored items", v: "125 of 150 per ANCC (25 unscored pretest)" },
    { k: "Passing score", v: "Scaled 350 on a 0–500 scale" },
    { k: "Eligibility", v: "Active RN license + 2 yrs full-time RN practice" },
    { k: "Specialty hours", v: "2,000 hrs med-surg in last 3 yrs + 30 CE hrs" },
    { k: "Fee (ANA member)", v: "$295 · non-member $395" },
    { k: "Renewal cycle", v: "5 years — 75 CE hrs + 1 PD category, or re-exam" },
  ],
  heroCardFoot:
    "Verified against ANCC's MEDSURG-BC credential page and the September 2024 Test Content Outline",

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
    { id: "compare", label: "MEDSURG-BC vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "MEDSURG-BC certification at a glance",
    prose: [
      "MEDSURG-BC — Medical-Surgical Nursing, Board Certified — is the ANCC credential for RNs practicing in the broad adult medical-surgical specialty. The credential is issued by the <strong>American Nurses Credentialing Center (ANCC)</strong>, the certification arm of the American Nurses Association; as of the 2024 ANCC Certification Data, <strong>31,688 RNs</strong> held the credential, making MEDSURG-BC one of ANCC's largest specialty programs.",
      "MEDSURG-BC is a board certification, not a course. It replaces the legacy <strong>RN-BC Medical-Surgical Nursing</strong> designation that ANCC retired in its 2018 rebrand to the \"Board Certified\" suffix. Job postings still mention both names interchangeably.",
    ],
    stats: [
      { n: "150", l: "Total items (ANCC)", sub: "125 scored · 25 pretest" },
      { n: "3 hrs", l: "Time limit", sub: "Computer-based via Prometric" },
      { n: "75%", l: "2024 pass rate", sub: "3,487 of 4,672 candidates" },
      { n: "5 yrs", l: "Renewal cycle", sub: "75 CE hrs + 1 PD category, or re-exam" },
    ],
    factBox: {
      tone: "info",
      title: "What changed in September 2024",
      html:
        "ANCC's updated Medical-Surgical Nursing Test Content Outline took effect <strong>2024-09-10</strong> (PDF refreshed 2025-10-29). The blueprint reduced to three domains — <strong>Assessment and Diagnosis (39%), Planning/Implementation/Evaluation (40%), and Professional Role (21%)</strong> — built from the 2025 Role Delineation Study Executive Summary. Existing certificants are tested against the new outline on the next attempt or renewal cycle.",
    },
    coverImageLabel:
      "Med-surg RN reviewing post-op assessment with patient on an inpatient floor",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the MEDSURG-BC exam?",
    prose: [
      "You are eligible if you hold an <strong>active RN license</strong> within a U.S. state or territory (or the legally recognized equivalent in another country) and meet ANCC's specialty practice and CE requirements.",
      "ANCC enforces four hard gates: <strong>2 years of full-time RN practice</strong>, a minimum of <strong>2,000 hours of clinical practice in medical-surgical nursing within the last 3 years</strong>, and <strong>30 hours of continuing education in medical-surgical nursing within the last 3 years</strong>. Unlike the MSNCB CMSRN exam, the 30-CE rule is a gating requirement — it is not optional and it is not waived.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You have logged at least 2 years of full-time RN practice, with 2,000 or more hours specifically in medical-surgical nursing inside the last 3 years.",
      "You routinely care for adult med-surg patients across pre-op, post-op, and non-critical medical presentations — not just one diagnosis cohort.",
      "Your setting fits a recognized med-surg role: inpatient med-surg floor, surgical specialty unit (ortho, vascular, GI, neuro-floor), observation/short-stay unit, telemetry-adjacent step-down where the patient mix is med-surg, charge nurse or preceptor on med-surg, or float pool covering med-surg.",
      "You have logged at least 30 contact hours of medical-surgical-specific continuing education in the last 3 years and can document each one.",
    ],
  },

  // ---- BLUEPRINT (weights from September 2024 ANCC TCO; raw scored counts in parens)
  blueprint: {
    heading: "MEDSURG-BC exam blueprint — three domains (effective 2024-09-10)",
    prose: [
      "The MEDSURG-BC blueprint is three domains. <strong>Planning, Implementation, and Evaluation</strong> plus <strong>Assessment and Diagnosis</strong> together carry <strong>79%</strong> of the exam — clinical care content dominates over Professional Role. Most of your study time should live in the first two domains.",
      "Do not neglect Professional Role. Therapeutic communication, interdisciplinary collaboration, delegation, nursing ethics, and evidence-based practice are 21% of the scored items — they feel abstract at the bedside but reliably appear on the exam. Candidates who rely only on clinical experience tend to bleed points in Professional Role.",
    ],
    domains: [
      { label: "Assessment and Diagnosis", weight: 39 },
      { label: "Planning, Implementation, and Evaluation", weight: 40 },
      { label: "Professional Role", weight: 21 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and reimbursement",
    prose: [
      "ANCC delivers MEDSURG-BC through <strong>Prometric</strong> in-person testing centers and also offers a remote-proctored option for candidates who prefer to test from a private location. After ANCC reviews eligibility documentation, you receive an Authorization to Test (ATT) with a <strong>120-day scheduling window</strong> — book your Prometric seat early to avoid reapplying.",
    ],
    rows: [
      { k: "Initial certification — ANA member", v: "$295" },
      { k: "Initial certification — non-member", v: "$395", highlight: true },
      { k: "Renewal — ANA member", v: "$250" },
      { k: "Renewal — non-member", v: "$350" },
      { k: "Retake (after a failed attempt)", v: "$270" },
      { k: "Non-refundable administrative fee", v: "$140 (included in initial fees)" },
      { k: "ANA annual membership (reduces fees)", v: "varies by state council" },
    ],
    factBox: {
      tone: "info",
      title: "Retake rules and the Success Pays program",
      html:
        "Candidates may retest <strong>no sooner than 60 days</strong> after a failed attempt, and ANCC allows a maximum of three attempts in any rolling 12-month window. ANCC also runs a <strong>Success Pays</strong> program with participating employers — the hospital prepays the certification fee on a pass-only basis. Many acute-care employers reimburse the fee through clinical-ladder, Magnet, or professional-development budgets, so ask your nurse manager or education department before paying out of pocket.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "MEDSURG-BC certification is valid for <strong>five years</strong>. ANCC offers two renewal pathways. <strong>Pathway 1 — Renewal by Professional Development:</strong> complete <strong>75 contact hours of CE in medical-surgical nursing</strong> during the cycle, with at least 60 of those hours formally approved (ANCC, AMA PRA Category 1, or another ANCC-accepted accreditor), <strong>plus one additional professional development category</strong> — an extra 75 CE hours, 5 semester credits of specialty coursework, 5 clock-hours of presentations, a problem-solving project, a publication, a research project, mentorship of 120+ hours, or precepting.",
      "<strong>Pathway 2 — Renewal by Examination:</strong> retake and pass the current MEDSURG-BC exam at the renewal fee. There is no grace period for a lapsed credential — lapsed certificants must sit the full exam again to reinstate.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the MEDSURG-BC exam?",
    prose: [
      "ANCC reported <strong>3,487 of 4,672</strong> MEDSURG-BC candidates passed the exam in 2024 — a <strong>75%</strong> pass rate. That is meaningfully higher than ANCC executive credentials such as NE-BC (66%) and roughly on par with other broad-scope ANCC specialty exams.",
      "The 25% of candidates who do not pass typically underweight one of the three domains or sit the exam before genuinely clearing the 2,000-hour bar in medical-surgical practice. ANCC does not publish a separate first-time versus repeater split for MEDSURG-BC; the headline 75% is the all-attempts figure.",
    ],
    rows: [{ year: "2024", pct: 75 }],
    target: 85,
    footnote:
      "Only 2024 is shown because ANCC's September 2024 Test Content Outline update resets temporal comparability; earlier years ran against a different blueprint structure.",
    factBox: {
      tone: "info",
      title: "The lever is timed practice, not more reading",
      html:
        "The single biggest predictor of first-time pass is at least one <strong>full-length timed 150-item practice exam</strong> under real conditions. Fatigue in the last 40 items is where unprepared candidates lose the most points — it is a trained skill, not a content gap. Pair the practice exam with an error log that maps wrong answers back to the three blueprint domains.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 10-week MEDSURG-BC study plan",
    prose: [
      "A structured 10-week study plan is enough for most med-surg RNs with 2 or more years of practice — roughly <strong>80 to 120 total study hours</strong> across the three blueprint domains. Practice-question volume ramps through weeks 2–8 and peaks in week 9 with a full-length timed exam; week 10 is for targeted review, logistics, and a rest day.",
    ],
    weeks: [
      { n: 1, focus: "Read September 2024 ANCC Test Content Outline + baseline diagnostic exam", qs: 25 },
      { n: 2, focus: "Assessment and Diagnosis I — health history, physical assessment, vitals, prioritization", qs: 60 },
      { n: 3, focus: "Assessment and Diagnosis II — fluids/electrolytes, lab interpretation, diagnostic testing", qs: 60 },
      { n: 4, focus: "Planning/Implementation I — post-op complication prevention (bleeding, DVT/PE, infection)", qs: 60 },
      { n: 5, focus: "Planning/Implementation II — patient teaching, learning barriers, discharge planning", qs: 60 },
      { n: 6, focus: "Planning/Implementation III — pharmacology, polypharmacy, adverse effects", qs: 60 },
      { n: 7, focus: "Planning/Implementation IV — patient safety bundles, infection control, fall prevention", qs: 60 },
      { n: 8, focus: "Professional Role — therapeutic communication, delegation, ethics, EBP", qs: 60 },
      { n: 9, focus: "Full-length timed practice exam (150 items in 3 hours) + error-log review", qs: 150 },
      { n: 10, focus: "Targeted review of weak domains, rest, logistics, test day", qs: 40 },
    ],
    tipsHeading: "How MEDSURG-BC candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Don't skip Professional Role",
        text:
          "Professional Role is 21% of the exam — roughly one item in five. Delegation (RN vs LPN vs UAP), nursing ethics (autonomy, advocacy, informed consent), and evidence-based practice frameworks reliably appear. Block at least a full week for this domain instead of saving it for review.",
      },
      {
        kicker: "Pace 125 scored items in 3 hours",
        text:
          "Pacing is a trained skill. Take at least one full-length timed practice exam under real conditions before test day — otherwise fatigue in the last 40 items is where your score slips.",
      },
      {
        kicker: "Master fluids, electrolytes, and post-op complications",
        text:
          "These two topics together cover a meaningful share of the Assessment and Planning domains. Know hyponatremia/hyperkalemia management, ABG interpretation, post-op bleeding vs hypovolemic shock recognition, DVT/PE prevention bundles, and ileus recognition without checklists.",
      },
      {
        kicker: "Use prioritization frameworks, not gut",
        text:
          "Scenario stems test prioritization — Maslow, ABCs, acute-vs-stable, life-threat-vs-pain. Talk rationales out loud with a peer until the framework drives the answer rather than experience-based intuition.",
      },
      {
        kicker: "Know your pharmacology cold",
        text:
          "Anticoagulants, opioids and reversal agents, insulin sliding scales, antibiotics with renal-dose adjustments, and common drug-drug interactions appear repeatedly. Build a one-page reference and review it the week before the exam.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (modeled on ANCC scenario format — not reprinted from any real bank)
  sample: {
    heading: "Sample MEDSURG-BC question",
    prose: [
      "This item mirrors the ANCC scenario format: a short clinical stem with subtle vital-sign and assessment changes, and four plausible options where only one is <em>best</em>. Try it before you read the rationale.",
    ],
    q: {
      scenario:
        "A 62-year-old patient is post-op day 1 from a sigmoid colectomy. The nurse notes BP 92/58 (baseline 138/82), HR 118, RR 24, SpO2 95% on 2 L NC, abdominal dressing dry, urine output 18 mL/hr for the past 2 hours, and increasing restlessness. Hemoglobin has dropped from 12.4 to 9.1 g/dL since admission.",
      stem: "Which nursing action should the med-surg RN prioritize next?",
      options: [
        "Administer the scheduled PRN acetaminophen for post-op pain and reassess in 30 minutes.",
        "Place the patient in semi-Fowler's, hang a 250 mL bolus of normal saline, and continue routine monitoring.",
        "Notify the surgeon immediately of suspected post-op hemorrhage and prepare for fluid resuscitation and possible return to the OR.",
        "Increase oxygen to 4 L NC, document the trend, and reassess at the next scheduled vital-sign interval.",
      ],
      correct: 2,
      rationale:
        "The constellation — hypotension below baseline, tachycardia, tachypnea, oliguria, restlessness, and a significant hemoglobin drop — points to occult post-op hemorrhage despite a dry dressing (bleeding may be intra-abdominal). This is a surgical emergency. Pain medication, a small fluid bolus without escalation, or routine monitoring all delay definitive intervention. Notify the surgeon and prepare for resuscitation and possible re-operation.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key MEDSURG-BC terms every candidate should know",
    prose: [
      "These terms surface in most MEDSURG-BC exam items. Review them until the definitions feel automatic — scenario-based stems often hinge on recognizing which framework (ABCs, MAR-vs-medication-reconciliation, SBAR handoff) applies.",
    ],
    rows: [
      { term: "ABCs prioritization", defn: "Airway, Breathing, Circulation — the first prioritization framework for any deteriorating med-surg patient before applying Maslow or acute-vs-stable.", domain: "Assessment" },
      { term: "Hyponatremia", defn: "Serum sodium below 135 mEq/L; in post-op patients often linked to SIADH or hypotonic IV fluids; symptoms range from mild confusion to seizure depending on rate of fall.", domain: "Assessment" },
      { term: "Hyperkalemia", defn: "Serum potassium above 5.0 mEq/L; classic ECG progression: peaked T waves → widened QRS → sine wave; first-line interventions include calcium gluconate, insulin with dextrose, and beta-agonists.", domain: "Assessment" },
      { term: "ABG interpretation", defn: "Stepwise read of pH, PaCO2, and HCO3 to classify respiratory vs metabolic acidosis or alkalosis and identify compensation.", domain: "Assessment" },
      { term: "Post-op hemorrhage signs", defn: "Tachycardia, narrowing pulse pressure, hypotension below baseline, restlessness, oliguria, and falling hemoglobin — often present before frank bleeding is visible.", domain: "Planning" },
      { term: "Virchow's triad", defn: "Venous stasis, endothelial injury, and hypercoagulability — the three drivers of DVT/PE that anchor prevention bundles in post-op care.", domain: "Planning" },
      { term: "SBAR", defn: "Situation, Background, Assessment, Recommendation — standardized handoff and provider-notification framework that reduces communication errors.", domain: "Professional" },
      { term: "Medication reconciliation", defn: "Process of creating an accurate medication list at admission, transfer, and discharge to prevent omissions, duplications, and adverse interactions.", domain: "Planning" },
      { term: "RN vs LPN vs UAP scope", defn: "Delegation framework: RNs may delegate stable-patient tasks within state nurse practice acts; UAPs may not perform assessment, teaching, or evaluation.", domain: "Professional" },
      { term: "Therapeutic communication", defn: "Patient- and family-centered techniques (open-ended questions, reflection, silence, cultural humility) that build trust and support shared decision-making.", domain: "Professional" },
      { term: "EBP — Evidence-Based Practice", defn: "Integration of best research evidence, clinical expertise, and patient values to guide bedside decisions; ANCC items frame EBP as the gold standard.", domain: "Professional" },
      { term: "Fall risk bundle", defn: "Combination of risk screening (Morse, Hendrich II), environmental modification, scheduled rounding, footwear, and patient education to reduce inpatient falls.", domain: "Planning" },
    ],
  },

  // ---- COMPARE (MEDSURG-BC vs near credentials per common_confusions in research.json)
  compare: {
    heading: "MEDSURG-BC vs. CMSRN, RN-BC, PCCN, CCRN",
    prose: [
      "MEDSURG-BC sits alongside several related credentials that med-surg RNs sometimes consider. Many candidates Google \"MEDSURG-BC\" when they actually mean CMSRN, the MSNCB competitor exam — so the distinction matters before you spend time or money.",
    ],
    rows: [
      { row: "MEDSURG-BC", highlight: true, body: "ANCC", scope: "Adult medical-surgical nursing across the broad inpatient scope", who: "RNs on med-surg floors with 2 yrs RN + 2,000 specialty hrs + 30 CE hrs" },
      { row: "CMSRN", body: "MSNCB", scope: "Med-surg nursing — competing credential", who: "RNs with 2,000 med-surg hrs over 5 yrs; no separate CE gate" },
      { row: "RN-BC Medical-Surgical Nursing", body: "ANCC (legacy)", scope: "Pre-2018 name for MEDSURG-BC", who: "Existing RN-BC holders converting at renewal" },
      { row: "PCCN", body: "AACN", scope: "Progressive / step-down care — higher acuity than med-surg", who: "RNs on step-down units with acutely (not critically) ill patients" },
      { row: "CCRN", body: "AACN", scope: "Adult critical care", who: "ICU RNs; pairs with PCCN for the step-down-to-ICU career arc" },
      { row: "NPD-BC", body: "ANCC", scope: "Nursing professional development (educator role)", who: "RNs designing and evaluating staff education programs" },
    ],
    closingProse:
      "<strong>Take MEDSURG-BC if you want the ANCC pathway with the broader CE plus professional-development renewal model.</strong> Take CMSRN instead if your employer specifically recognizes the MSNCB credential or you prefer a single-renewal pathway tied to clinical hours plus CE. Move to PCCN once your unit's patient acuity is consistently step-down. CCRN is the destination if you transition fully to critical care.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about MEDSURG-BC certification",
    items: [
      { q: "What does MEDSURG-BC stand for in nursing?", a: "MEDSURG-BC stands for Medical-Surgical Nursing — Board Certified. The credential is issued by the American Nurses Credentialing Center (ANCC), the certification arm of the American Nurses Association." },
      { q: "Is MEDSURG-BC the same as CMSRN?", a: "No. MEDSURG-BC is the ANCC credential and CMSRN is the MSNCB credential. Both validate medical-surgical nursing expertise, but they have different eligibility rules (MEDSURG-BC requires 2 yrs RN + 2,000 hrs + 30 CE in the specialty; CMSRN requires 2,000 hrs over 5 yrs with no separate CE gate). Many employers accept either." },
      { q: "How long does it take to prepare for the MEDSURG-BC exam?", a: "Most med-surg RNs prepare for 8 to 12 weeks. A realistic target is 80 to 120 total study hours spread across the three blueprint domains." },
      { q: "Is the MEDSURG-BC exam hard?", a: "MEDSURG-BC is moderately difficult. The 2024 pass rate sits at 75%, meaning roughly three of four candidates pass. Candidates who underweight any of the three domains, especially Professional Role, are the most likely to fail." },
      { q: "Can I take MEDSURG-BC without the 30 CE hours?", a: "No. The 30 hours of CE in medical-surgical nursing within the last 3 years is a hard eligibility gate, not a recommendation. Candidates short of the requirement must complete the CE before applying." },
      { q: "What happens if I fail the MEDSURG-BC exam?", a: "You must wait at least 60 days before retaking the exam, submit a new application, and pay the $270 retake fee. ANCC allows a maximum of three attempts in a rolling 12-month window." },
      { q: "How many times can I retake the MEDSURG-BC exam?", a: "ANCC permits up to three attempts in any rolling 12-month window. Each retake requires a new application, a new 60-day waiting period, and the $270 retake fee." },
      { q: "Does MEDSURG-BC certification expire?", a: "Yes. MEDSURG-BC certification expires after 5 years. You renew through 75 CE hours plus one additional professional development category (with at least 60 of the 75 hours formally approved), or by retaking the current exam." },
      { q: "Will my hospital pay for MEDSURG-BC certification?", a: "Many acute-care employers reimburse the MEDSURG-BC application fee through clinical-ladder, Magnet, or professional-development budgets. ANCC also runs a Success Pays program where some employers prepay on a pass-only basis — ask your nurse manager or education department before paying out of pocket." },
      { q: "What is the difference between RN-BC and MEDSURG-BC?", a: "RN-BC is the legacy ANCC name. In 2018 ANCC rebranded specialty credentials to use the \"Board Certified\" suffix — MEDSURG-BC is the current designation. Existing RN-BC certificants converted to MEDSURG-BC at their next renewal." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following primary sources. Fees, blueprint weights, and renewal rules shift on ANCC's revision cycle — always verify numeric facts against the current ANCC handbook before relying on them for application decisions.",
    ],
    list: [
      "American Nurses Credentialing Center (ANCC) — Medical-Surgical Nursing Certification (MEDSURG-BC) credential page",
      "ANCC — Medical-Surgical Nursing Test Content Outline (effective 2024-09-10; PDF updated 2025-10-29)",
      "ANCC — 2024 ANCC Certification Data: 31,688 active MEDSURG-BC certificants; 4,672 examinees; 3,487 passed (75% pass rate)",
      "ANCC — Certification Renewal Requirements Handbook (effective 2025-09-10)",
      "Prometric — ANCC exam scheduling and remote-proctored testing",
      "Medical-Surgical Nursing Certification Board (MSNCB) — CMSRN credential comparison",
      "Accreditation Board for Specialty Nursing Certification (ABSNC) — ANCC certification accreditation",
      "U.S. Bureau of Labor Statistics (BLS) — Occupational Employment and Wage Statistics, Registered Nurses (May 2024): $93,600 median; $98,430 mean RN wage",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice MEDSURG-BC-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to the September 2024 ANCC blueprint. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full MEDSURG-BC question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "CMSRN",
      title: "MEDSURG-BC vs CMSRN: which med-surg credential fits your career?",
      blurb: "Eligibility, fees, blueprint overlap, and employer recognition — for RNs deciding between the ANCC and MSNCB pathways.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "Planning, Implementation, and Evaluation: the domain that decides MEDSURG-BC pass",
      blurb: "Why 40% of the exam lives in this domain, and the post-op, pharmacology, and safety concepts ANCC tests most.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "Magnet",
      title: "How MEDSURG-BC supports a Magnet hospital application",
      blurb: "Why specialty certification rates matter for Magnet redesignation — and how MEDSURG-BC counts toward unit-level certification benchmarks.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
