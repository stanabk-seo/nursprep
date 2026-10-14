// CMC exam detail page — structured data.
// Sourced from Content Briefs/CMC_Content_Brief.md and Content/CMC_research.json
// (verified against AACN Certification Corporation primary pages and BLS OEWS
// as of the 2026-05 cycle). Auto-generated via nursprep-page-builder skill.
// Lives at /certifications/cmc/ via the paginated template.

module.exports = {
  code: "CMC",
  name: "Cardiac Medicine Certification",
  body: "AACN",
  cat: "critical",
  catLabel: "Critical & Emergency Care",
  updated: "2026-05",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title:
      "CMC Certification: AACN Cardiac Medicine Guide | NursPrep",
    description:
      "CMC certification adds a cardiac medicine subspecialty to your CCRN or PCCN. See AACN eligibility, the 90-item exam, $180 fee, and 3-year renewal.",
    ogTitle:
      "CMC Certification Guide 2026 — AACN Cardiac Medicine Subspecialty",
    ogDescription:
      "AACN eligibility, the 90-item exam, $180 member fee, and 3-year renewal synced with your CCRN or PCCN — for acutely ill cardiac RNs.",
  },

  // ---- HERO
  lede:
    "CMC is the AACN Certification Corporation subspecialty credential layered on top of CCRN or PCCN for registered nurses who deliver direct bedside care to acutely ill adult cardiac patients. The CMC scope covers cardiac medicine — acute coronary syndromes, heart failure, dysrhythmias, hemodynamic monitoring, and cardiogenic shock — not the first 48 hours after cardiac surgery, which is the CSC scope.",
  heroPills: [
    { k: "Questions", v: "90 items" },
    { k: "Duration", v: "2 hours" },
    { k: "Renewal", v: "3 years" },
    { k: "Prereq", v: "CCRN or PCCN" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "AACN Certification Corporation" },
    { k: "Format", v: "PSI test centers + Live Remote Proctoring" },
    { k: "Items", v: "90 multiple-choice, single best answer" },
    { k: "Passing score", v: "Scaled; pass/fail reported on screen" },
    { k: "Eligibility", v: "Active US RN/APRN license" },
    { k: "Prerequisite", v: "Current CCRN, PCCN, CCRN-E, or ACCNS-AG" },
    { k: "Fee (AACN member)", v: "$180 · non-member $265" },
    { k: "Renewal cycle", v: "3 years — synced with CCRN/PCCN" },
  ],
  heroCardFoot:
    "Verified against AACN CMC public pages and AACN renewal policy (May 2026)",

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
    { id: "compare", label: "CMC vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "CMC certification at a glance",
    prose: [
      "CMC — Cardiac Medicine Certification — recognizes RNs who deliver direct bedside care to acutely ill adult cardiac patients. The credential is issued by the <strong>AACN Certification Corporation</strong>, the certification arm of the American Association of Critical-Care Nurses. CMC is a <em>subspecialty</em>: it sits on top of an existing AACN adult acute/critical-care credential (CCRN, PCCN, CCRN-E, or ACCNS-AG), so it cannot be a candidate's first AACN certification.",
      "The CMC scope is cardiac medicine — acute coronary syndromes, heart failure and cardiomyopathies, dysrhythmias and conduction disorders, hemodynamic monitoring, cardiogenic shock and mechanical circulatory support, vascular disease, and pulmonary hypertension. If your unit is CVICU, CCU, cardiac PCU, cardiac step-down, or any high-acuity cardiac telemetry environment, CMC matches your day-to-day practice. CSC, the sibling subspecialty, covers the first 48 hours after cardiac surgery.",
    ],
    stats: [
      { n: "90", l: "Total items", sub: "Multiple choice · single best answer" },
      { n: "2 hrs", l: "Time limit", sub: "PSI center or live-remote proctoring" },
      { n: "3 yrs", l: "Renewal cycle", sub: "Synced with underlying CCRN or PCCN" },
      { n: "$180", l: "Member fee", sub: "Non-member $265" },
    ],
    factBox: {
      tone: "info",
      title: "CMC is a layered credential, not a standalone exam",
      html:
        "You cannot sit for CMC unless you already hold a current <strong>CCRN, PCCN, CCRN-E, or ACCNS-AG</strong>. The CMC also <strong>renews together</strong> with that underlying credential on the same 3-year cycle, and the CMC lapses if the underlying credential lapses. Plan your renewal around your CCRN or PCCN renewal date — not around the CMC date in isolation.",
    },
    coverImageLabel:
      "Cardiac RN reviewing 12-lead ECG and hemodynamic monitor in a CVICU",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the CMC exam?",
    prose: [
      "Yes — if you hold an <strong>active, unencumbered US RN or APRN license</strong>, a <strong>current AACN adult acute/critical-care certification</strong> (CCRN, PCCN, CCRN-E, or ACCNS-AG), and documented cardiac patient-care practice hours. AACN offers two clinical-hour pathways — pick the one that fits your recent cardiac work history.",
      "Hours worked as a charge nurse, educator, or administrator do <em>not</em> count toward the Direct Care pathway. The hours must be in direct bedside care of acutely or critically ill <em>cardiac</em> patients.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You already hold a current CCRN, PCCN, CCRN-E, or ACCNS-AG — CMC cannot be your first AACN credential.",
      "You have logged 1,750 cardiac bedside hours in the past 2 years (with at least 875 in the most recent year), or 2,000 hours in the past 5 years (with at least 144 in the most recent year).",
      "Your unit fits a recognized cardiac setting: CVICU, CCU, cardiac IMCU, cardiac PCU or step-down, cardiac telemetry, heart-failure clinic, or a post-MI / EP recovery floor.",
      "You are comfortable with 12-lead ECG interpretation, hemodynamic waveforms, titratable vasoactive drips, and the recognition of cardiogenic shock and mechanical-support indications.",
    ],
  },

  // ---- BLUEPRINT (AACN publishes CMC content categories but not consolidated percentage weights)
  blueprint: {
    heading: "CMC exam blueprint — published content categories",
    prose: [
      "The CMC test plan groups items into cardiac-medicine content categories rather than the body-system clusters AACN uses for CCRN and PCCN. AACN does <strong>not</strong> publish a consolidated percentage-weight table for the CMC subspecialty the way it does for CCRN or PCCN — candidates should confirm current item distributions against the live AACN CMC Exam Handbook before relying on them for a study plan.",
      "Treat the published categories as study buckets, not weights. <strong>Acute coronary syndromes</strong> and <strong>heart failure / cardiomyopathies</strong> together drive the largest share of clinical decisions in cardiac medicine practice — front-load both. Hemodynamic monitoring and cardiogenic shock recognition are the highest-yield procedural domains.",
    ],
    domains: [
      { label: "Acute Coronary Syndromes (ACS)" },
      { label: "Heart Failure and Cardiomyopathies" },
      { label: "Dysrhythmias and Conduction Disorders" },
      { label: "Hemodynamic Monitoring and Cardiogenic Shock" },
      { label: "Mechanical Circulatory Support (IABP, Impella, VA-ECMO, LVAD)" },
      { label: "Vascular Disease and Pulmonary Hypertension" },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and membership savings",
    prose: [
      "AACN delivers CMC through <strong>PSI test centers</strong> and via <strong>live-remote online proctoring</strong> for candidates who prefer to test from a private location. After AACN approves your application, you receive a scheduling window to book your seat — book early because PSI cardiac-content test windows fill quickly in major metros.",
      "Subspecialty pricing is meaningfully lower than CCRN or PCCN because CMC builds on an existing AACN credential. Members pay roughly 30 percent less on every fee line. AACN individual membership costs about $99 per year, so the membership often pays for itself across the CCRN-plus-CMC stack.",
    ],
    rows: [
      { k: "CMC exam fee — AACN member", v: "$180" },
      { k: "CMC exam fee — non-member", v: "$265", highlight: true },
      { k: "Retake fee", v: "Same as initial application" },
      { k: "Renewal by Synergy CERPs (synced with CCRN/PCCN)", v: "Bundled with underlying credential renewal" },
      { k: "Renewal by exam", v: "Same as initial application" },
      { k: "AACN individual membership (reduces all fees)", v: "~$99 / year" },
    ],
    factBox: {
      tone: "success",
      title: "Many cardiac centers reimburse the CMC fee",
      html:
        "Magnet-designated hospitals and high-volume cardiac programs often reimburse the <strong>$180–$265 CMC application fee</strong> once you pass. Many also cover AACN membership and a review course. Ask your nurse manager, clinical-ladder coordinator, or HR benefits specialist before paying out of pocket — cardiac certifications are a common qualifier for the next rung of the ladder.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "CMC certification is valid for <strong>three years</strong> and is <strong>synchronized with the candidate's underlying CCRN or PCCN renewal cycle</strong>. You cannot renew CMC on its own — it renews with the credential it sits on top of.",
      "AACN offers two renewal pathways. <strong>Pathway 1 — Renewal by Synergy CERPs:</strong> log <strong>432 practice hours</strong> in direct care of acutely ill adult cardiac patients during the 3-year cycle, with at least <strong>144 hours in the 12 months before renewal</strong>, plus the required Synergy CERPs split across Category A (clinical judgment), Category B (professional caring / ethics), and Category C (clinical inquiry). <strong>Pathway 2 — Renewal by Exam:</strong> re-sit the current CMC exam. If your underlying CCRN or PCCN lapses, your CMC lapses with it.",
    ],
  },

  // ---- PASS RATE (AACN does not consistently publish year-by-year CMC pass rates)
  passrate: {
    heading: "How hard is the CMC exam?",
    prose: [
      "AACN does <strong>not consistently publish year-by-year first-time pass rates</strong> for the CMC subspecialty. Candidates self-select into the exam because they already hold CCRN or PCCN and already work in cardiac settings, so the pool is more uniformly prepared than for the broader core exams. That said, the CMC is item-dense — 90 cardiac-specific questions in 2 hours — and candidates routinely under-prepare for hemodynamic-waveform interpretation and mechanical-support indications.",
      "Candidates who follow a focused 4 to 6-week plan and complete at least one full-length timed practice perform meaningfully better than those who rely on day-to-day unit experience alone. Before relying on any third-party pass-rate figure, verify it against the current AACN CMC Exam Handbook or AACN's annual data release.",
    ],
    factBox: {
      tone: "info",
      title: "What's published vs. what's not",
      html:
        "AACN publishes the CMC <strong>eligibility, fee, format, and content outline</strong> on its public pages. AACN does <strong>not</strong> routinely publish year-by-year first-time CMC pass rates the way BCEN does for TCRN. Treat any pass-rate percentage you see on a prep-vendor page as unverified unless it cites an AACN primary source.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 6-week CMC study plan",
    prose: [
      "A focused 6-week plan works for most candidates already practicing in cardiac settings — roughly <strong>40 to 60 total study hours</strong> across the CMC content categories. Build study blocks around the categories you touch least at the bedside (mechanical circulatory support, pulmonary hypertension) rather than the ones you already see every shift (basic ACS).",
    ],
    weeks: [
      { n: 1, focus: "Read AACN CMC test plan + baseline 25-item diagnostic", qs: 25 },
      { n: 2, focus: "Acute coronary syndromes — NSTEMI, STEMI, unstable angina, Wellens'", qs: 50 },
      { n: 3, focus: "Heart failure and cardiomyopathies — HFrEF, HFpEF, BNP/NT-proBNP, guideline-directed therapy", qs: 50 },
      { n: 4, focus: "Dysrhythmias + conduction — A-fib with RVR, V-tach, torsades, complete heart block, pacing", qs: 50 },
      { n: 5, focus: "Hemodynamic monitoring + cardiogenic shock + mechanical support (IABP, Impella, VA-ECMO, LVAD)", qs: 50 },
      { n: 6, focus: "Vascular disease + pulmonary hypertension + full-length timed practice + weak-area review", qs: 90 },
    ],
    tipsHeading: "Why candidates trip on the CMC — and how to avoid it",
    tips: [
      {
        kicker: "Drill waveforms, not just rhythms",
        text:
          "CMC items routinely show PA-catheter, arterial-line, and CVP waveforms alongside the rhythm strip. Build a one-page reference of normal vs. abnormal hemodynamic waveforms and review it the night before the exam.",
      },
      {
        kicker: "Don't assume your unit covers the blueprint",
        text:
          "Cardiac PCU nurses see less mechanical circulatory support; CVICU nurses see less heart-failure clinic decision-making. Study the AACN CMC test plan, not the patients you saw last week.",
      },
      {
        kicker: "Memorize guideline-directed medical therapy for HF",
        text:
          "ARNI, beta-blocker, MRA, and SGLT2-inhibitor sequencing for HFrEF is high-yield. The 2022 AHA/ACC/HFSA guideline shifted SGLT2-inhibitor placement — review the current pillar order, not older protocols.",
      },
      {
        kicker: "Know mechanical-support indications cold",
        text:
          "IABP vs Impella vs VA-ECMO vs LVAD — each has distinct indications, contraindications, and nursing red flags. The exam tests recognition of when to escalate, not just how to manage an in-place device.",
      },
      {
        kicker: "Take one full-length timed practice",
        text:
          "Ninety items in 2 hours leaves ~80 seconds per question. Pacing is a trained skill. One full-length timed run-through is the single highest-leverage hour in your plan.",
      },
    ],
  },

  // ---- SAMPLE QUESTION
  sample: {
    heading: "Sample CMC question",
    prose: [
      "This item mirrors AACN's CMC scenario format: a short clinical stem, an acutely ill cardiac patient, and four plausibly-correct options where only one is <em>best</em>. Try it before you read the rationale.",
    ],
    q: {
      scenario:
        "A 68-year-old patient on the cardiac step-down unit, 12 hours after presenting with NSTEMI, develops new dyspnea. Vital signs: BP 86/54, HR 122, RR 28, SpO2 89% on 4 L nasal cannula. Lung auscultation reveals bilateral crackles. The 12-lead ECG shows new ST depression in V4 to V6 and a new S3 gallop is heard.",
      stem: "Which nursing action should the cardiac RN prioritize?",
      options: [
        "Administer oral furosemide and reassess in 30 minutes.",
        "Switch to high-flow nasal cannula, prepare for non-invasive ventilation, escalate to the cardiology and rapid-response teams, and anticipate transfer to a higher level of care.",
        "Encourage the patient to ambulate in the hall to improve oxygenation.",
        "Hold all cardiac medications and obtain a routine chest X-ray.",
      ],
      correct: 1,
      rationale:
        "The presentation is acute cardiogenic pulmonary edema with evolving ischemia in the setting of NSTEMI — a deteriorating patient at risk of cardiogenic shock. Priority actions are oxygenation escalation, non-invasive ventilatory support, immediate escalation to cardiology and rapid response, and preparation for transfer to a higher level of care (CVICU). Oral furosemide is too slow and ambulation worsens demand ischemia. Holding cardiac medications without provider input is unsafe in evolving ACS.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key CMC terms every candidate should know",
    prose: [
      "These terms surface throughout CMC scenario items. Review them until the definitions feel automatic — many CMC stems hinge on recognizing which waveform, drip, or device the question is testing.",
    ],
    rows: [
      { term: "ACS", defn: "Acute Coronary Syndrome — umbrella term for unstable angina, NSTEMI, and STEMI driven by coronary plaque rupture and thrombus.", domain: "ACS" },
      { term: "NSTEMI", defn: "Non-ST-Elevation Myocardial Infarction — troponin-positive ischemia without ST elevation on the 12-lead ECG.", domain: "ACS" },
      { term: "Wellens' sign", defn: "Biphasic or deeply inverted T waves in V2–V3 indicating critical proximal LAD stenosis; high risk for impending anterior MI.", domain: "ACS" },
      { term: "HFrEF", defn: "Heart Failure with reduced Ejection Fraction (LVEF ≤ 40%) — guideline-directed therapy uses the four pillars: ARNI, beta-blocker, MRA, SGLT2 inhibitor.", domain: "Heart Failure" },
      { term: "HFpEF", defn: "Heart Failure with preserved Ejection Fraction (LVEF ≥ 50%) — diuretics plus SGLT2 inhibitors anchor management.", domain: "Heart Failure" },
      { term: "BNP / NT-proBNP", defn: "Natriuretic peptides released by stretched ventricular myocytes; used to support diagnosis and track decompensation.", domain: "Heart Failure" },
      { term: "Torsades de pointes", defn: "Polymorphic VT associated with prolonged QT; treat with IV magnesium and remove offending QT-prolonging agents.", domain: "Dysrhythmias" },
      { term: "PA catheter", defn: "Pulmonary Artery (Swan-Ganz) catheter — directly measures CVP, PAP, PCWP, and cardiac output for hemodynamic assessment.", domain: "Hemodynamics" },
      { term: "PCWP", defn: "Pulmonary Capillary Wedge Pressure — estimates left atrial pressure and left-ventricular preload; elevated in cardiogenic pulmonary edema.", domain: "Hemodynamics" },
      { term: "SVR", defn: "Systemic Vascular Resistance — the afterload the left ventricle ejects against; low in distributive shock, high in cardiogenic shock.", domain: "Hemodynamics" },
      { term: "IABP", defn: "Intra-Aortic Balloon Pump — augments coronary perfusion in diastole and decreases afterload in systole; indicated in cardiogenic shock bridging.", domain: "Mechanical Support" },
      { term: "Impella", defn: "Percutaneous axial-flow LV assist device that pulls blood from the LV and ejects into the ascending aorta to off-load the failing ventricle.", domain: "Mechanical Support" },
      { term: "VA-ECMO", defn: "Veno-Arterial Extracorporeal Membrane Oxygenation — full cardiopulmonary support for refractory cardiogenic shock or cardiac arrest.", domain: "Mechanical Support" },
      { term: "LVAD", defn: "Left Ventricular Assist Device — durable mechanical pump used as bridge to transplant or destination therapy in advanced heart failure.", domain: "Mechanical Support" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "CMC vs. CSC, CCRN, PCCN, CV-BC",
    prose: [
      "CMC sits inside a tight cluster of cardiac-coded credentials. Many candidates Google \"CMC\" when they actually need CSC, CV-BC, or just CCRN — so the distinction matters before you spend time or money.",
    ],
    rows: [
      { row: "CMC", highlight: true, body: "AACN", scope: "Cardiac medicine subspecialty (non-surgical)", who: "CCRN or PCCN holders in CVICU, CCU, cardiac PCU" },
      { row: "CSC", body: "AACN", scope: "Cardiac surgery subspecialty (first 48 hrs post-op)", who: "CCRN or PCCN holders in cardiac surgical ICU" },
      { row: "CCRN (Adult)", body: "AACN", scope: "Core adult critical care — prerequisite for CMC", who: "ICU, CVICU, MICU, SICU RNs" },
      { row: "PCCN", body: "AACN", scope: "Adult progressive care — valid prerequisite for CMC", who: "PCU, step-down, telemetry, IMCU RNs" },
      { row: "CV-BC", body: "ANCC", scope: "Cardiac-vascular nursing (broad specialty)", who: "Cardiac RNs who do not hold CCRN/PCCN" },
    ],
    closingProse:
      "<strong>Take CMC if you already hold CCRN or PCCN and your patients are acutely ill cardiac medicine — not first-48-hour post-op surgical.</strong> Take CSC if you work the immediate post-cardiac-surgery scope. Take CV-BC if you want a broad cardiac-vascular credential and you do not hold (or do not plan to hold) an AACN core credential. Many cardiac RNs eventually stack CCRN + CMC + CSC as their unit's scope widens.",
  },

  // ---- FAQ
  faq: {
    heading: "Frequently asked questions about CMC certification",
    items: [
      { q: "What does CMC stand for in nursing?", a: "CMC stands for Cardiac Medicine Certification. It is a subspecialty credential issued by the AACN Certification Corporation for nurses caring for acutely ill adult cardiac patients." },
      { q: "Do I need CCRN or PCCN before I can take the CMC exam?", a: "Yes. CMC is a subspecialty credential and cannot be your first AACN certification. You must hold a current CCRN, PCCN, CCRN-E, or ACCNS-AG to be eligible for the CMC." },
      { q: "What is the CMC exam pass rate?", a: "AACN does not consistently publish year-by-year first-time pass rates for the CMC subspecialty exam. Verify any pass-rate figure you see online against an AACN primary source before relying on it." },
      { q: "How long should I study for the CMC exam?", a: "Plan for 4 to 6 weeks of focused preparation, or roughly 40 to 60 total study hours. CCRN/PCCN holders working in cardiac settings often need less time because the foundational concepts already overlap." },
      { q: "How much does the CMC exam cost?", a: "The CMC application fee is $180 for AACN members and $265 for non-members. The retake fee is the same as the initial application." },
      { q: "How long is CMC certification valid?", a: "CMC is valid for 3 years and is synchronized with your underlying CCRN or PCCN renewal cycle. You cannot renew CMC independently — it renews with the credential it sits on top of." },
      { q: "What is the difference between CMC and CSC?", a: "CMC covers cardiac medicine — acute coronary syndromes, heart failure, dysrhythmias, hemodynamic monitoring, cardiogenic shock. CSC covers the first 48 hours after cardiac surgery. Both are AACN subspecialty credentials and both require CCRN or PCCN as a prerequisite." },
      { q: "What happens if my CCRN or PCCN lapses?", a: "If your underlying credential lapses, your CMC lapses with it. Renew CCRN or PCCN on time to keep CMC valid." },
      { q: "Will my hospital pay for CMC certification?", a: "Many cardiac programs and Magnet-designated hospitals reimburse the CMC application fee and offer paid study time. Ask your nurse manager, clinical-ladder coordinator, or HR benefits team before paying out of pocket." },
      { q: "Is CMC worth it on top of CCRN or PCCN?", a: "For nurses spending most of their hours in cardiac settings — CVICU, CCU, cardiac PCU, cardiac step-down — CMC signals subspecialty depth and is commonly recognized by clinical ladders and unit-specific differentials. For nurses splitting time across multiple ICU patient populations, CCRN alone often covers the credentialing need." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following primary sources. Fees, blueprint categories, and recertification rules shift on AACN's revision cycle — always verify numeric facts against the current CMC public pages or Exam Handbook before relying on them for application decisions.",
    ],
    list: [
      "AACN Certification Corporation — CMC (Adult Cardiac Medicine) public page and candidate handbook",
      "AACN Certification — Renew Your CMC Certification policy page",
      "AACN — Eligibility and Practice Hour Requirements (CCRN/PCCN prerequisite rule)",
      "AACN — Synergy CERP category guidelines (A, B, C)",
      "AACN — Subspecialty Certification Overview (CMC / CSC layering rule)",
      "US Bureau of Labor Statistics (BLS) — Occupational Employment and Wage Statistics, Registered Nurses (May 2024): $93,600 median RN wage",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice CMC-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to the AACN CMC content categories. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full CMC question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "CSC",
      title: "CMC vs CSC: which AACN cardiac subspecialty fits your unit?",
      blurb: "Scope overlap, eligibility, and when nurses stack both subspecialties — for cardiac RNs deciding between medicine and surgery tracks.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Hemodynamics",
      title: "PA-catheter waveforms: the CMC domain candidates underestimate",
      blurb: "Why CVP, PAP, and PCWP waveform recognition decides CMC first-time pass — and the AACN test-plan framings that show up most.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "Clinical ladder",
      title: "Using CMC to move from cardiac step-down to CVICU",
      blurb: "How Magnet-designated cardiac programs treat CMC on the clinical ladder — and what to bring to your portfolio review.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
