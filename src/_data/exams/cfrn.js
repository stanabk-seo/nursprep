// CFRN exam detail page — structured data.
// Sourced from Content/CFRN Certification.docx (verified against BCEN 2026
// Candidate Handbook, BCEN 2024 exam statistics, ASTNA, CAMTS, and BLS OEWS).
// Lives at /certifications/cfrn/ via the paginated template.

module.exports = {
  code: "CFRN",
  name: "Certified Flight Registered Nurse",
  body: "BCEN",
  cat: "critical",
  catLabel: "Critical & Emergency Care",
  updated: "2026-04",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title:
      "CFRN Certification Guide: Eligibility, Exam & Renewal | NursPrep",
    description:
      "Everything flight nurses need about CFRN certification in 2026 — BCEN eligibility, exam blueprint, fees, 62% pass rate, an 8-week study plan, and renewal options.",
    ogTitle:
      "CFRN Certification Guide 2026 — Certified Flight Registered Nurse",
    ogDescription:
      "BCEN eligibility, the 2026 blueprint, $285 fee, 62% pass rate, and an 8-week plan for rotor-wing and fixed-wing transport RNs.",
  },

  // ---- HERO
  lede:
    "CFRN is the longest-running nationally recognized flight-nursing certification in the United States. BCEN has offered the exam since July 1993 — when 403 nurses earned the credential in the first cycle — and it is the RN-side benchmark CAMTS-accredited HEMS programs expect on a crew.",
  heroPills: [
    { k: "Questions", v: "175 items" },
    { k: "Duration", v: "3 hours" },
    { k: "Renewal", v: "4 years" },
    { k: "Pass rate", v: "62%" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "Board of Certification for Emergency Nursing (BCEN)" },
    { k: "Format", v: "Computer-based · Pearson VUE" },
    { k: "Scored items", v: "150 of 175 (25 unscored pretest)" },
    { k: "Passing score", v: "108 / 150 scored (~72%)" },
    { k: "Eligibility (BCEN)", v: "Active, unrestricted RN license · no hours requirement" },
    { k: "Experience (recommended)", v: "2 yrs transport nursing; employers expect 3–5 yrs ED/ICU" },
    { k: "Fee (ENA/ASTNA member)", v: "$285 · non-member $380" },
    { k: "Renewal cycle", v: "4 years — 100 CE hours (75 flight-specific) or re-exam" },
  ],
  heroCardFoot:
    "Verified against BCEN 2026 handbook and the updated CFRN content outline effective 2026-08-31",

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
    { id: "compare", label: "CFRN vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "CFRN certification at a glance",
    prose: [
      "CFRN — Certified Flight Registered Nurse — validates RNs who practice in air medical transport: rotor-wing HEMS, fixed-wing inter-facility transport, and critical care transport. The credential is issued by the <strong>Board of Certification for Emergency Nursing (BCEN)</strong>, which has offered the exam since July 1993 (403 nurses passed the first cycle).",
      "CFRN confirms specialty expertise in the flight transport environment — altitude physiology, scene safety, in-flight equipment use, and inter-facility critical care transport. While the credential is voluntary, CAMTS-accredited air medical programs and most HEMS employers expect specialty-certified RNs on their crews.",
    ],
    stats: [
      { n: "175", l: "Total items", sub: "150 scored · 25 pretest" },
      { n: "3 hrs", l: "Time limit", sub: "Continuous, no scheduled breaks" },
      { n: "62%", l: "2024 pass rate", sub: "First-time · 3-yr avg ~62.6%" },
      { n: "4 yrs", l: "Renewal cycle", sub: "100 CE hours (75 flight-specific) or re-exam" },
    ],
    factBox: {
      tone: "info",
      title: "What changed in 2026",
      html:
        "BCEN splits the transport exam outline into separate <strong>CTRN and CFRN outlines effective 2026-03-30</strong>. The updated <strong>CFRN content outline takes effect 2026-08-31</strong>. If your eligibility window straddles either date, verify which outline your test appointment falls under before you lock in study materials.",
    },
    coverImageLabel:
      "Flight RN operating alongside a rotor-wing HEMS aircraft",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the CFRN exam?",
    prose: [
      "Yes, if you hold an <strong>active, unrestricted RN license</strong>. BCEN does not require a specific number of practice hours to sit for the CFRN exam — it strongly recommends two years of flight or transport nursing experience, but there is no mandatory gate.",
      "The practical on-ramp is different. Every flight program adds its own hiring requirement — commonly <strong>3 to 5 years of recent ED or ICU experience</strong> — regardless of CFRN status. BCEN lets you test with zero transport hours, but a flight program will not hire a zero-transport-hour candidate. Plan your CFRN against the hiring timeline, not just the exam calendar.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You hold 3–5 years of recent ED or ICU experience at a busy facility.",
      "You manage intubation, vasoactive drips, ventilator settings, and blood products without hand-holding.",
      "You hold ACLS, PALS, TNCC, and NIHSS; NRP is expected for pediatric or neonatal transport.",
      "Your setting fits a recognized flight role: hospital-based HEMS (LifeFlight, Mayo One, LifeLink III), independent HEMS operators (Air Methods, REACH, PHI, Med-Trans, Metro Aviation), fixed-wing inter-facility, specialty peds/neonatal transport, ground critical care transport, or DoD/VA medevac.",
    ],
  },

  // ---- BLUEPRINT (weights = BCEN updated outline effective 2026-08-31)
  blueprint: {
    heading: "CFRN exam blueprint — five domains (effective 2026-08-31)",
    prose: [
      "The CFRN blueprint is five domains, weighted toward medical emergencies and patient-care management. Put simply: the exam assumes you already know how to run a sick patient — its job is to check whether you can do it 6,500 feet up in a noisy cabin with one other crew member and a finite oxygen supply.",
      "Medical Emergencies and Patient Care Management together account for more than half the exam. General Principles and Trauma carry the flight-specific content — altitude physiology, CAMTS standards, in-flight decompression, and damage-control transport. Weights above are approximate; verify against the current BCEN CFRN Examination Content Outline before your exam date.",
    ],
    domains: [
      { label: "Medical Emergencies", weight: 27 },
      { label: "Patient Care Management (airway, ventilation, access, pharmacology)", weight: 25 },
      { label: "General Principles of Flight Transport Nursing Practice", weight: 19 },
      { label: "Trauma", weight: 19 },
      { label: "Special Populations (OB, neonatal, peds, geri, bariatric)", weight: 10 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and ROI",
    prose: [
      "The CFRN exam fee is <strong>$285 for ENA or ASTNA members</strong> and <strong>$380 for non-members</strong> (2026 BCEN schedule). ENA annual membership currently runs about $135 per year, so joining before applying often saves money on the first fee alone. Many HEMS programs reimburse the certification fee through an education benefit — ask your clinical educator or HR before paying out of pocket.",
      "After BCEN approves your application, you receive an Authorization to Test (ATT) email with a 90-day testing window; schedule your seat at a Pearson VUE test center immediately to avoid missing the window.",
    ],
    rows: [
      { k: "Exam application — ENA/ASTNA member", v: "$285" },
      { k: "Exam application — non-member", v: "$380", highlight: true },
      { k: "Retake application fee", v: "Same as initial ($285 / $380)" },
      { k: "Recertification by CE — member", v: "$240" },
      { k: "Recertification by CE — non-member", v: "$340" },
      { k: "Recertification by exam", v: "Same as current application fee" },
      { k: "ENA annual membership (optional, reduces fee)", v: "~$135" },
    ],
    factBox: {
      tone: "success",
      title: "Short ROI when a certification differential applies",
      html:
        "BLS reports the median RN annual wage at <strong>~$93,600 (2024 OEWS)</strong>. Flight nurse compensation tracks higher: recent industry surveys place the average US flight nurse salary at <strong>$94,830 to $109,709</strong> per year, with total compensation often reaching <strong>$120,000 to $145,000</strong> at high-volume programs. Against a one-time exam fee under $400 and typical prep costs of $150 to $500, payback is short when a certification differential ($0.50–$2.00/hr or $500–$2,000/yr stipend) is in place.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "CFRN certification is valid for <strong>four years</strong>. BCEN offers two recertification pathways. <strong>Pathway 1 — CE Attestation:</strong> complete 100 contact hours in the current 4-year cycle, with <strong>at least 75 hours related specifically to flight or transport nursing</strong> content. At least 50 contact hours must come from accredited sources (BCEN Learn, AACN, ANCC, ENA, a State Board of Nursing, or a State Nurses Association). Content must be delivered at the nursing practice level or higher (CME accepted). EMS-only approvals such as CAPCE, PHTLS, ITLS, or AMLS are not accepted unless dually approved by a nursing provider.",
      "<strong>Pathway 2 — Re-examination:</strong> retake and pass the current CFRN exam during your recertification window at the current application fee. There is no grace period — a lapsed CFRN must sit and pass the full exam again to restore the credential. Start logging CE in year 1 of the cycle to avoid a scramble.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the CFRN exam?",
    prose: [
      "BCEN's most recent data reports a CFRN first-time pass rate of <strong>62% (2024)</strong>. The multi-year average sits around <strong>62.6%</strong>, placing CFRN among the harder BCEN exams. Candidates who complete a structured 6–8 week study plan and at least one full-length timed practice exam pass at meaningfully higher rates.",
      "Nurses with strong ED or ICU backgrounds but no transport exposure tend to underperform on transport principles and altitude physiology sections. Check BCEN's Certification Exam Statistics page for the most current reporting year.",
    ],
    rows: [{ year: "2024", pct: 62 }],
    target: 80,
    footnote:
      "Only 2024 is charted because BCEN publishes annual first-time pass rates without a stable multi-year table. The 3-year rolling average reported by BCEN is ~62.6%.",
    factBox: {
      tone: "info",
      title: "The lever is timed practice, not more reading",
      html:
        "In BCEN-reported candidate surveys, the single biggest predictor of first-time pass is <strong>at least one full-length timed 175-item practice exam</strong> under real conditions. Fatigue in the last 40 items is where unprepared candidates lose the most points — it is a trained skill, not a content gap.",
    },
  },

  // ---- STUDY PLAN + TIPS (8-week plan verbatim from Word doc Table 4)
  plan: {
    heading: "An 8-week CFRN study plan",
    prose: [
      "A structured 8-week study plan is realistic for most RNs with recent transport or critical care experience — roughly <strong>80 to 120 total study hours</strong>. The plan below is built from BCEN's content outline and is designed so that every blueprint domain gets dedicated time before week 7's full-length timed practice exam.",
    ],
    weeks: [
      { n: 1, focus: "Read BCEN content outline + baseline diagnostic exam", qs: 25 },
      { n: 2, focus: "Transport principles — altitude physiology, gas laws, stress of transport, scene safety", qs: 50 },
      { n: 3, focus: "Trauma — blunt, penetrating, burns, spinal, MTP, thoracic decompression", qs: 60 },
      { n: 4, focus: "Airway, ventilator, and pharmacology — RSI, post-intubation sedation, PEEP, vasopressors", qs: 60 },
      { n: 5, focus: "Medical emergencies — sepsis, ARDS, stroke, ACS, status epilepticus", qs: 60 },
      { n: 6, focus: "Cardiovascular, endocrine, renal, environmental, toxicologic emergencies", qs: 60 },
      { n: 7, focus: "Full-length timed practice exam + error-log review + OB/peds/neonatal/geri", qs: 175 },
      { n: 8, focus: "Targeted review of weak domains, light reading, rest, test day", qs: 40 },
    ],
    tipsHeading: "How CFRN candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Own altitude physiology and gas laws",
        text:
          "Flight-specific questions separate CFRN from CEN. Dedicate a full study week to Boyle, Dalton, Henry, and stress-of-transport content — otherwise these items turn trauma and medical stems into guesses.",
      },
      {
        kicker: "Log procedural reps before test day",
        text:
          "Questions assume you own airway and decompression skills. Log skills sessions on RSI, needle thoracostomy, and IO access — rote recognition of indications is not enough.",
      },
      {
        kicker: "Don't skip pediatric and neonatal",
        text:
          "Special Populations carries ~10%. Review NRP and age-based dosing even if you fly mostly adult calls — this is where well-prepared adult-ED candidates bleed points.",
      },
      {
        kicker: "Pace 150 scored items in 180 minutes",
        text:
          "Pacing is a trained skill. Complete at least one full 175-item timed exam under real conditions — fatigue in the final 40 items is the top failure pattern.",
      },
      {
        kicker: "Stick to RN-scope material",
        text:
          "CAPCE-only paramedic courses are not accepted for BCEN recertification and often skip RN-scope pharmacology. Study from ENA, AACN, ANCC, or BCEN Learn content instead.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (verbatim from Word doc)
  sample: {
    heading: "Sample CFRN question",
    prose: [
      "This item mirrors BCEN's scenario format: a short clinical stem, a transport-specific twist, and four plausibly-correct options where only one is <em>best</em>. Try it before you read the rationale.",
    ],
    q: {
      scenario:
        "A rotor-wing team is transporting a 58-year-old intubated patient with ARDS at 7,500 feet cabin altitude. The pulse oximetry drops from 94% to 84% over 4 minutes. Peak inspiratory pressures climb on the transport ventilator. Breath sounds are diminished on the left with tracheal deviation to the right.",
      stem: "Which action should the flight nurse take first?",
      options: [
        "Increase PEEP by 2 cm H2O and recheck saturation.",
        "Perform needle decompression at the left second intercostal space, midclavicular line.",
        "Descend to a lower cabin altitude and increase FiO2 to 100%.",
        "Administer a 500 mL crystalloid bolus.",
      ],
      correct: 1,
      rationale:
        "Tension pneumothorax expands with reduced barometric pressure at altitude (Boyle's law). Tracheal deviation, unilateral diminished breath sounds, rising peak pressures, and desaturation during flight demand immediate needle decompression. PEEP and fluids worsen the obstructive shock. Descent and FiO2 help, but decompression is the first action.",
    },
  },

  // ---- KEY TERMS (verbatim from Word doc Table 9)
  keyterms: {
    heading: "Key CFRN terms every candidate should know",
    prose: [
      "These terms surface in most CFRN exam items. Review them until the definitions feel automatic.",
    ],
    rows: [
      { term: "CAMTS", defn: "Commission on Accreditation of Medical Transport Systems. Sets staffing and safety standards for air and ground medical transport.", domain: "General Principles" },
      { term: "Boyle's Law", defn: "As pressure decreases, gas volume increases. Explains pneumothorax and ETT cuff expansion at altitude.", domain: "General Principles" },
      { term: "Dalton's Law", defn: "Total pressure is the sum of partial pressures. PaO2 falls as altitude increases.", domain: "General Principles" },
      { term: "Henry's Law", defn: "Dissolved gas volume is proportional to partial pressure. Relevant to decompression sickness.", domain: "General Principles" },
      { term: "RSI", defn: "Rapid Sequence Intubation — near-simultaneous sedation and paralysis to secure the airway.", domain: "Patient Care Management" },
      { term: "DSI", defn: "Delayed Sequence Intubation — preoxygenation with procedural sedation before paralysis in agitated hypoxic patients.", domain: "Patient Care Management" },
      { term: "MTP", defn: "Massive Transfusion Protocol — balanced 1:1:1 plasma, platelets, RBCs for hemorrhagic shock.", domain: "Trauma" },
      { term: "REBOA", defn: "Resuscitative Endovascular Balloon Occlusion of the Aorta — advanced hemorrhage control.", domain: "Trauma" },
      { term: "Autonomic Dysreflexia", defn: "Dangerous hypertensive response in SCI at T6 or above, triggered by a noxious stimulus below the lesion.", domain: "Medical Emergencies" },
      { term: "IABP", defn: "Intra-Aortic Balloon Pump — afterload reduction in cardiogenic shock, sometimes transported.", domain: "Medical Emergencies" },
      { term: "HELLP", defn: "Hemolysis, Elevated Liver enzymes, Low Platelets — severe pre-eclampsia variant.", domain: "Special Populations" },
      { term: "Parkland Formula", defn: "4 mL × kg × %TBSA of Lactated Ringer's over 24 hours for major burns.", domain: "Trauma" },
      { term: "Shock Index", defn: "Heart rate divided by systolic BP. Values greater than 0.9 suggest occult shock.", domain: "Trauma" },
    ],
  },

  // ---- COMPARE (verbatim from Word doc Table 8)
  compare: {
    heading: "CFRN vs. CTRN, CEN, TCRN, CCRN, FP-C, CCP-C",
    prose: [
      "If you already hold another transport or critical-care credential, the right question is <em>which one should I hold next</em>. CFRN sits alongside several transport and critical care credentials — the table below contrasts CFRN with the most common alternates so you can match exam to scope.",
    ],
    rows: [
      { row: "CFRN", highlight: true, body: "BCEN", scope: "Air medical transport — rotor and fixed wing", who: "RNs in HEMS or fixed-wing transport" },
      { row: "CTRN", body: "BCEN", scope: "Ground critical care transport", who: "RNs on ground critical care teams" },
      { row: "CEN", body: "BCEN", scope: "Hospital-based emergency nursing", who: "ED RNs; common feeder credential before CFRN" },
      { row: "TCRN", body: "BCEN", scope: "Hospital-based trauma nursing", who: "Trauma center ED and ICU RNs" },
      { row: "CCRN (Adult)", body: "AACN", scope: "Hospital-based adult critical care", who: "ICU RNs; accepted by some HEMS programs" },
      { row: "FP-C", body: "IBSC", scope: "Flight paramedic", who: "Paramedics, not RNs (partner crew member)" },
      { row: "CCP-C", body: "IBSC", scope: "Critical care paramedic", who: "Paramedics, not RNs" },
    ],
    closingProse:
      "<strong>Take CFRN if you fly or plan to fly.</strong> Add CEN, TCRN, or CCRN on top only if your program requires the combination or your scope spans bedside and transport.",
  },

  // ---- FAQ (verbatim from Word doc H3 FAQ block)
  faq: {
    heading: "Frequently asked questions about CFRN certification",
    items: [
      { q: "What does CFRN stand for in nursing?", a: "CFRN stands for Certified Flight Registered Nurse. The credential is issued by the Board of Certification for Emergency Nursing (BCEN)." },
      { q: "How long does it take to prepare for the CFRN exam?", a: "Most candidates prepare for 6 to 8 weeks. A realistic target is 80 to 120 total study hours, spread across all five blueprint domains." },
      { q: "Is the CFRN exam hard?", a: "The CFRN exam is considered difficult. The 2024 first-time pass rate was 62%. Transport-specific content like altitude physiology and in-flight ventilation trips up candidates without flight exposure." },
      { q: "Can I take the CFRN exam if I am not currently a flight nurse?", a: "Yes. BCEN has no job or hour requirement. However, most HEMS programs require 3 to 5 years of ED or ICU experience before hire, regardless of CFRN status." },
      { q: "What happens if I fail the CFRN exam?", a: "You can retake the exam after a waiting period set by BCEN. Each retake requires a new application and the full exam fee." },
      { q: "How many times can I retake the CFRN exam?", a: "BCEN does not cap retake attempts. Each attempt requires a new application and fee." },
      { q: "Does CFRN certification expire?", a: "CFRN certification expires after 4 years. You renew through 100 contact hours of CE (at least 75 flight/transport-specific) or by retaking the exam." },
      { q: "Is CFRN required to work as a flight nurse?", a: "CFRN is not legally required, but most HEMS programs require CFRN at hire or within 12 months of hire as a condition of employment." },
      { q: "How is CFRN different from CTRN?", a: "CFRN covers air medical transport; CTRN covers ground critical care transport. BCEN uses separate exam content outlines for each beginning 2026-03-30." },
      { q: "Will my flight program pay for CFRN certification?", a: "Most CAMTS-accredited HEMS programs reimburse the CFRN exam fee through an education benefit. Ask HR or your clinical educator before paying out of pocket." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following primary sources. Fees, blueprint weights, and recertification rules shift on BCEN's revision cycle — the updated CFRN content outline takes effect 2026-08-31. Always verify numeric facts against the current BCEN handbook before relying on them for application decisions.",
    ],
    list: [
      "Board of Certification for Emergency Nursing (BCEN) — CFRN Candidate Handbook (2026 cycle)",
      "BCEN — CFRN Examination Content Outline, updated version effective 2026-08-31",
      "BCEN — Certification Exam Statistics (2024 reporting year, CFRN first-time pass rate 62%)",
      "BCEN — Recertification by CE Attestation policy and Decision Tree",
      "ASTNA — Patient Transport: Principles and Practice (current edition)",
      "AAOS / ACEP — Critical Care Transport (current edition)",
      "CAMTS — Accreditation Standards for Air and Ground Medical Transport",
      "US Bureau of Labor Statistics — Occupational Employment and Wage Statistics, Registered Nurses",
      "Air Medical Journal — peer-reviewed research on flight nursing and transport outcomes",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice CFRN-style items?",
  ctaProse:
    "Jump into a 25-question diagnostic that maps to the 2026 blueprint. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full CFRN question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Certification",
      tag: "CTRN",
      title: "CTRN vs CFRN: which transport credential first?",
      blurb: "Scope, blueprint overlap, and the 2026-03-30 BCEN split explained for dual-role transport RNs.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Altitude",
      title: "Altitude physiology on CFRN: Boyle, Dalton, Henry in practice",
      blurb: "The three gas laws you will see on every CFRN exam — with worked stems from past practice banks.",
      href: "#",
      bg: "#0089e3",
    },
    {
      kicker: "Career",
      tag: "HEMS",
      title: "How to land your first HEMS job as an ICU-trained RN",
      blurb: "Program expectations, ride-along etiquette, and how CFRN fits into the hiring pipeline.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
