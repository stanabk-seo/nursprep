// CSC exam detail page — structured data.
// Sourced from Content Briefs/CSC_Content_Brief.md and Content/CSC_research.json
// (verified against AACN Certification Corporation primary pages — CSC Get
// Certified, Exam Stats & Cut Scores, CSC Renewal, and the CSC Exam Handbook —
// as of the 2026-05 cycle). Auto-generated via nursprep-page-builder skill.
// Lives at /certifications/csc/ via the paginated template.

module.exports = {
  code: "CSC",
  name: "Cardiac Surgery Certification",
  body: "AACN",
  cat: "critical",
  catLabel: "Critical & Emergency Care",
  updated: "2026-05",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title:
      "CSC Exam Guide: AACN Cardiac Surgery Certification | NursPrep",
    description:
      "CSC adds a cardiac surgery subspecialty to your CCRN or PCCN. See AACN eligibility, the 90-item exam, $145 fee, 52% pass rate, and 3-year renewal.",
    ogTitle:
      "CSC Exam Guide 2026 — AACN Cardiac Surgery Subspecialty",
    ogDescription:
      "AACN eligibility, the 90-item exam, 55/75 cut score, $145 member fee, and 3-year renewal — for post-op cardiac surgery RNs.",
  },

  // ---- HERO
  lede:
    "CSC is the AACN Certification Corporation subspecialty credential layered on top of CCRN or PCCN for registered nurses who deliver direct care to acutely/critically ill adult cardiac surgery patients in the first 48 hours postoperatively. The CSC scope covers post-op cardiac surgery practice — therapeutic interventions, complications, surgical procedures, and hemodynamic monitoring — not the broader cardiac-medicine population, which is the CMC scope.",
  heroPills: [
    { k: "Questions", v: "90 items" },
    { k: "Duration", v: "2 hours" },
    { k: "Renewal", v: "3 years" },
    { k: "Pass rate", v: "52%" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "AACN Certification Corporation" },
    { k: "Format", v: "PSI test centers + paper option" },
    { k: "Items", v: "90 multiple-choice (75 scored · 15 pretest)" },
    { k: "Passing score", v: "55 of 75 scored items" },
    { k: "Eligibility", v: "Active US RN/APRN license" },
    { k: "Prerequisite", v: "Current accredited specialty cert (CCRN, PCCN)" },
    { k: "Fee (AACN member)", v: "$145 · non-member $235" },
    { k: "Renewal cycle", v: "3 years — synced with CCRN/PCCN" },
  ],
  heroCardFoot:
    "Verified against AACN CSC public pages, exam stats & cut scores, and renewal policy (May 2026)",

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
    { id: "compare", label: "CSC vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "CSC certification at a glance",
    prose: [
      "CSC — Cardiac Surgery Certification — recognizes RNs who deliver direct care to acutely/critically ill adult cardiac surgery patients in the <strong>first 48 hours postoperatively</strong>. The credential is issued by the <strong>AACN Certification Corporation</strong>, the certification arm of the American Association of Critical-Care Nurses. CSC is a <em>subspecialty</em>: it attaches to an existing nationally accredited clinical specialty certification — typically CCRN or PCCN — so it cannot be a candidate's first certification.",
      "The CSC scope is post-op cardiac surgery care — coronary artery bypass grafting (CABG), valve repair and replacement, the MAZE procedure, and related vascular surgery, plus the bleeding, hemodynamic, pulmonary, and renal complications that follow. If your unit is a cardiothoracic surgery ICU, cardiovascular surgical ICU, open-heart recovery, or a PACU receiving fresh post-op hearts, CSC matches your day-to-day practice. CMC, the sibling subspecialty, covers acutely ill adult cardiac patients in cardiac <em>medicine</em> rather than the surgical first 48 hours.",
    ],
    stats: [
      { n: "90", l: "Total items", sub: "75 scored · 15 pretest" },
      { n: "2 hrs", l: "Time limit", sub: "PSI center or paper option" },
      { n: "52%", l: "2025 pass rate", sub: "1,184 candidates tested" },
      { n: "3,767", l: "CSC certificants", sub: "Total holders, 2025" },
    ],
    factBox: {
      tone: "info",
      title: "CSC is an add-on, not a first certification",
      html:
        "You must already hold a current, nationally accredited clinical nursing specialty certification — most commonly <strong>CCRN</strong> or <strong>PCCN</strong> — for the CSC credential to attach to. CSC cannot stand alone. It also expires on the same 3-year cycle as the underlying certification, so most nurses sync the two renewals together.",
    },
    coverImageLabel:
      "Cardiac surgery ICU RN managing a fresh post-op open-heart patient",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the CSC exam?",
    prose: [
      "Yes — if you hold an <strong>active, unencumbered U.S. RN or APRN license</strong>, a current nationally accredited clinical nursing specialty certification (the CSC attaches to it), and you meet one of two clinical-practice-hour options.",
      "AACN sets the hours specifically around <strong>adult cardiac surgery patients within the first 48 hours postoperatively</strong>. Hours must be completed in a U.S.- or Canada-based facility (or a comparable acute/critical-care setting) and must be verifiable by your clinical supervisor or a professional colleague if you are selected for audit.",
    ],
    candidateHeading: "You are eligible if…",
    candidateList: [
      "You hold an active, unencumbered U.S. RN or APRN license.",
      "You already hold a current nationally accredited clinical specialty certification (such as CCRN or PCCN) for the CSC to attach to.",
      "Two-Year Option: 1,750 hours of direct care of acutely/critically ill adult patients over the previous two years (875 in the most recent year), of which 875 hours were in adult cardiac surgery patients within the first 48 hours postoperatively.",
      "Five-Year Option: at least 2,000 hours over the previous five years (144 in the most recent year), of which 1,000 hours were in adult cardiac surgery patients within the first 48 hours postoperatively.",
    ],
  },

  // ---- BLUEPRINT (weights from current AACN CSC Exam Handbook test plan)
  blueprint: {
    heading: "CSC exam blueprint — four domains",
    prose: [
      "The CSC blueprint is four domains. <strong>Therapeutic Interventions</strong> (36%) and <strong>Complications</strong> (31%) together carry about two-thirds of the exam — most of your study time should live there. Procedures (19%) and Monitoring and Diagnostics (15%) round out the form.",
      "The weighting reflects the bedside reality of the first 48 post-op hours: managing chest tubes, vasoactive drips, temporary pacing, ventilation, and tight glycemic control (interventions), then recognizing and responding to bleeding, tamponade, low cardiac output, dysrhythmias, and renal or pulmonary decline (complications). Candidates who know the surgical procedures but underprepare for complication recognition tend to lose the most points.",
    ],
    domains: [
      { label: "Therapeutic Interventions (chest tubes, drips, pacing, ventilation, glycemic, pain)", weight: 36 },
      { label: "Complications (CV, pulmonary, endocrine, heme/immuno, neuro, GI, renal, multisystem)", weight: 31 },
      { label: "Procedures (CABG, MAZE, valve repair/replacement, vascular surgery)", weight: 19 },
      { label: "Monitoring and Diagnostics (CVP, capnography, pulse oximetry, ABGs, coag labs, ECG)", weight: 15 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and renewal fees",
    prose: [
      "AACN delivers the CSC exam through its testing service, <strong>PSI</strong>, at PSI test centers, with a paper option also available. After AACN approves your application, you receive scheduling instructions — book your seat promptly to stay inside the testing window. Computer-based candidates receive a pass/fail score report at the end of the exam.",
    ],
    rows: [
      { k: "Initial exam — AACN member", v: "$145" },
      { k: "Initial exam — non-member", v: "$235", highlight: true },
      { k: "Renewal by exam — member", v: "$120" },
      { k: "Renewal by exam — non-member", v: "$165" },
      { k: "Renewal by Synergy CERPs — member", v: "$75" },
      { k: "Renewal by Synergy CERPs — non-member", v: "$130" },
      { k: "AACN annual membership (reduces exam fee)", v: "Varies by tier" },
    ],
    factBox: {
      tone: "success",
      title: "Membership usually pays for itself",
      html:
        "The member-versus-non-member fee gap is <strong>$90 on the initial exam</strong> ($145 vs $235), which typically outweighs the cost of joining AACN — and membership also unlocks discounted renewal fees. Most cardiac surgery programs reimburse the CSC fee through an education benefit, so ask your unit educator or HR before paying out of pocket.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "CSC certification is valid for <strong>three years</strong>, beginning the first day of the month you passed the exam. <strong>Pathway 1 — Renewal by Synergy CERPs:</strong> earn <strong>25 Category A Clinical Judgment CERPs</strong> within the three-year cycle and maintain continued clinical practice (432 hours of direct care of adult postoperative cardiac patients, with 144 hours in the most recent 12 months).",
      "<strong>Pathway 2 — Renewal by Examination:</strong> retake and pass the current CSC exam. Because CSC attaches to an underlying CCRN or PCCN, most nurses sync the CSC renewal with that base credential. A lapsed CSC must be earned again by exam — there is no grace period.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the CSC exam?",
    prose: [
      "The CSC passing standard is a <strong>cut score of 55 correct out of 75 scored items</strong>, in effect since 2022-01-31. The passing score is a raw number, not a percentage, set through the modified-Angoff method with PSI psychometricians. The 15 unscored pretest items do not count toward your result.",
      "AACN reported a <strong>52.2% first-time pass rate in 2025</strong> (1,184 candidates tested), down from 51.3% in 2024 and 69.7% in 2023. The sharp drop from the high-60s to the low-50s likely reflects content updates following AACN's 2020 National Practice Analysis of Cardiac Surgery Nurses. The CSC is now one of AACN's harder subspecialty exams — structured, complication-focused preparation matters.",
    ],
    rows: [
      { year: "2023", pct: 70 },
      { year: "2024", pct: 51 },
      { year: "2025", pct: 52 },
    ],
    target: 80,
    footnote:
      "First-time pass rates from AACN's Certification Exam Statistics page. 2023 = 69.7% (1,021 tested), 2024 = 51.3% (934 tested), 2025 = 52.2% (1,184 tested); chart values rounded.",
    factBox: {
      tone: "warn",
      title: "The pass rate dropped sharply — don't rely on experience alone",
      html:
        "First-time pass fell from <strong>69.7% (2023) to ~52% (2024–2025)</strong>. Bedside experience in a cardiothoracic ICU is necessary but no longer sufficient. The candidates who pass now work the AACN test plan deliberately and complete at least one full-length timed practice run before test day.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "An 8-week CSC study plan",
    prose: [
      "Eight weeks is enough for most cardiac surgery RNs who already hold CCRN or PCCN — roughly <strong>60 to 100 total study hours</strong> across the four blueprint domains. Weight your time toward Therapeutic Interventions and Complications (about two-thirds of the exam), and finish with a full-length timed practice run plus a targeted review of weak areas.",
    ],
    weeks: [
      { n: 1, focus: "Read the AACN CSC test plan + baseline diagnostic exam", qs: 25 },
      { n: 2, focus: "Therapeutic interventions I — chest tubes, temporary pacing, vasoactive/inotrope drips", qs: 50 },
      { n: 3, focus: "Therapeutic interventions II — ventilation/weaning, glycemic control, pain management", qs: 50 },
      { n: 4, focus: "Complications I — bleeding, tamponade, low cardiac output syndrome", qs: 50 },
      { n: 5, focus: "Complications II — post-op dysrhythmias, renal, pulmonary, neuro events", qs: 50 },
      { n: 6, focus: "Procedures — CABG, valve repair/replacement, MAZE, vascular surgery", qs: 40 },
      { n: 7, focus: "Monitoring and diagnostics — CVP/PA pressures, capnography, ABGs, coag labs, ECG", qs: 40 },
      { n: 8, focus: "Full-length timed practice exam + error log; targeted review and rest", qs: 75 },
    ],
    tipsHeading: "How CSC candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Front-load complications, not procedures",
        text:
          "Therapeutic Interventions and Complications are about 67% of the exam; Procedures is only 19%. Knowing exactly what CABG and valve surgery involve is worth less than recognizing post-op bleeding, tamponade, and low cardiac output fast.",
      },
      {
        kicker: "Master the first-48-hour drips",
        text:
          "Vasoactive and inotrope titration (norepinephrine, epinephrine, milrinone, vasopressin), nitroglycerin, and tight glycemic protocols anchor the Therapeutic Interventions domain. Know the indications, titration logic, and red-flag responses cold.",
      },
      {
        kicker: "Don't skip hemodynamic monitoring",
        text:
          "CVP, PA pressures, cardiac output/index, SvO2, and ABG interpretation underpin both the Monitoring and Complications domains. Scenario stems often hinge on reading a number trend correctly.",
      },
      {
        kicker: "Take one full-length timed exam",
        text:
          "Pacing 75 scored items in 2 hours is a trained skill. At least one full-length timed run under real conditions surfaces pacing and fatigue problems while you can still fix them.",
      },
      {
        kicker: "Use the AACN test plan as your map",
        text:
          "The CSC Exam Handbook publishes the test plan and sample items. Map every study session to a blueprint domain so you cover the heavily weighted areas in proportion, not just the topics you find interesting.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (illustrative, AACN scenario style — not a real bank item)
  sample: {
    heading: "Sample CSC question",
    prose: [
      "This item mirrors AACN's scenario format for the post-op cardiac surgery patient: a short clinical stem and four plausible options where only one is <em>best</em>. Try it before reading the rationale.",
    ],
    q: {
      scenario:
        "Two hours after CABG, a patient's mediastinal chest tube output rises to 250 mL/hr for two consecutive hours. BP falls to 88/54, HR climbs to 118, CVP rises from 8 to 17 mm Hg, and the cardiac index drops to 1.7 L/min/m². Heart sounds are becoming muffled and the previously brisk chest-tube drainage suddenly slows.",
      stem: "Which finding most strongly suggests the patient is developing cardiac tamponade rather than ongoing surgical bleeding?",
      options: [
        "The sustained chest-tube output of 250 mL/hr.",
        "The rising CVP with a falling cardiac index and an abrupt decrease in chest-tube drainage.",
        "The heart rate increasing to 118 beats per minute.",
        "The systolic blood pressure falling below 90 mm Hg.",
      ],
      correct: 1,
      rationale:
        "Equalizing/rising filling pressures (rising CVP) with a falling cardiac index, plus a sudden drop in chest-tube drainage and muffling heart sounds, point to blood accumulating in the pericardial space (tamponade) rather than draining out. Tachycardia and hypotension occur in both tamponade and hemorrhage, so they do not distinguish the two. The clotted, suddenly slowing chest tube paired with the hemodynamic picture is the key — it warrants urgent surgical notification and preparation for re-exploration.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key CSC terms every candidate should know",
    prose: [
      "These terms surface across CSC exam items. Review them until the definitions feel automatic — scenario stems often hinge on recognizing which post-op syndrome or intervention applies.",
    ],
    rows: [
      { term: "Low cardiac output syndrome (LCOS)", defn: "Post-op state of inadequate cardiac index (often <2.0 L/min/m²) despite adequate filling, managed with inotropes, afterload reduction, and sometimes mechanical support.", domain: "Complications" },
      { term: "Cardiac tamponade", defn: "Blood accumulating in the pericardial space compressing the heart; signs include rising/equalizing filling pressures, falling cardiac output, muffled heart sounds, and an abruptly slowing chest tube.", domain: "Complications" },
      { term: "Mediastinal chest tube", defn: "Drain placed after cardiac surgery to evacuate blood from the pericardial and mediastinal space; sustained high output or sudden cessation are both red flags.", domain: "Interventions" },
      { term: "Temporary epicardial pacing", defn: "Pacing wires placed on the heart during surgery used post-op to manage bradycardia, heart block, and low output via atrial, ventricular, or AV-sequential pacing.", domain: "Interventions" },
      { term: "Inotropes", defn: "Agents (epinephrine, dobutamine, milrinone) that increase myocardial contractility to support cardiac output after cardiopulmonary bypass.", domain: "Interventions" },
      { term: "Post-op atrial fibrillation", defn: "The most common dysrhythmia after cardiac surgery, typically peaking on post-op days 2–3; managed with rate/rhythm control and anticoagulation considerations.", domain: "Complications" },
      { term: "CABG", defn: "Coronary Artery Bypass Grafting — revascularization using arterial or venous conduits to bypass coronary stenoses.", domain: "Procedures" },
      { term: "MAZE procedure", defn: "Surgical ablation creating scar lines in the atria to interrupt re-entrant circuits and treat atrial fibrillation.", domain: "Procedures" },
      { term: "Cardiac index", defn: "Cardiac output normalized to body surface area (L/min/m²); a primary hemodynamic target in the first 48 post-op hours.", domain: "Monitoring" },
      { term: "Mixed venous oxygen saturation (SvO2)", defn: "Reflects the balance of oxygen delivery and consumption; a falling SvO2 signals worsening cardiac output or oxygenation post-op.", domain: "Monitoring" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "CSC vs. CMC, CCRN, PCCN",
    prose: [
      "CSC sits alongside its sibling AACN credentials. The most common mix-up is CSC versus CMC — both are AACN cardiac subspecialty add-ons with the identical 90-item format, but they cover different patients.",
    ],
    rows: [
      { row: "CSC", highlight: true, body: "AACN", scope: "First 48 hours after adult cardiac surgery", who: "CCRN/PCCN-certified post-op cardiac surgery RNs" },
      { row: "CMC", body: "AACN", scope: "Acutely/critically ill adult cardiac patients (medicine)", who: "CCRN/PCCN-certified cardiac medicine RNs" },
      { row: "CCRN (Adult)", body: "AACN", scope: "Broad adult critical care (standalone base cert)", who: "Adult ICU RNs; the most common CSC prerequisite" },
      { row: "PCCN", body: "AACN", scope: "Progressive/intermediate adult care (alt base cert)", who: "Progressive-care RNs; an alternate CSC prerequisite" },
    ],
    closingProse:
      "<strong>Take CSC if most of your shift is fresh post-op cardiac surgery patients in their first 48 hours.</strong> Take CMC instead if your cardiac patients are medical rather than surgical. Either way, you must already hold a CCRN, PCCN, or another accredited specialty certification first — CSC and CMC are subspecialty add-ons, not standalone credentials.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about the CSC exam",
    items: [
      { q: "What does CSC stand for in nursing?", a: "CSC stands for Cardiac Surgery Certification. It is a subspecialty credential issued by the AACN Certification Corporation for RNs caring for adult cardiac surgery patients in the first 48 hours postoperatively." },
      { q: "Can I take the CSC exam without another certification first?", a: "No. CSC is a subspecialty add-on. You must already hold a current, nationally accredited clinical nursing specialty certification — most commonly CCRN or PCCN — for the CSC credential to attach to." },
      { q: "How many questions are on the CSC exam and what is the passing score?", a: "The CSC exam has 90 multiple-choice items, of which 75 are scored and 15 are unscored pretest items. The passing cut score is 55 correct out of the 75 scored items, in effect since January 31, 2022." },
      { q: "How hard is the CSC exam?", a: "The CSC exam is difficult. The first-time pass rate was 52.2% in 2025 and 51.3% in 2024, down from 69.7% in 2023 after content updates. Bedside experience alone is no longer enough; structured preparation is essential." },
      { q: "What does the CSC exam cost?", a: "The initial CSC exam fee is $145 for AACN members and $235 for non-members. Renewal by exam is $120 (member) or $165 (non-member); renewal by Synergy CERPs is $75 (member) or $130 (non-member)." },
      { q: "What is the difference between CSC and CMC?", a: "Both are AACN cardiac subspecialty add-ons with the same 90-item format. CSC covers the first 48 hours after cardiac surgery, while CMC (Cardiac Medicine Certification) covers acutely ill adult cardiac patients in cardiac medicine more broadly." },
      { q: "How long is CSC certification valid and how do I renew it?", a: "CSC is valid for three years. You renew by earning 25 Category A Clinical Judgment CERPs plus continued clinical practice, or by retaking the exam. Most nurses sync the CSC renewal with their underlying CCRN or PCCN." },
      { q: "How many clinical hours do I need to sit the CSC exam?", a: "You meet one of two options: 1,750 hours over two years (875 in the most recent year) with 875 in adult cardiac surgery patients within 48 hours post-op; or 2,000 hours over five years (144 in the most recent year) with 1,000 in post-op cardiac surgery patients." },
      { q: "Will my hospital pay for the CSC exam?", a: "Many cardiac surgery programs and health systems reimburse the CSC fee through an education benefit and offer paid study time. Ask your unit educator or HR before paying out of pocket." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following primary sources. Fees, blueprint weights, cut scores, and renewal rules shift on AACN's revision cycle — always verify numeric facts against the current AACN CSC Exam Handbook before relying on them for application decisions.",
    ],
    list: [
      "AACN Certification Corporation — CSC (Adult) Get Certified page: eligibility, initial fees ($145 member / $235 non-member)",
      "AACN — Certification Exam Statistics and Cut Scores: CSC pass rates (2023 69.7%, 2024 51.3%, 2025 52.2%), 90 items / 75 scored, cut score 55 (effective 2022-01-31)",
      "AACN — CSC (Adult) Certification Renewal page: 3-year cycle, 25 Category A Clinical Judgment CERPs, 432/144 practice hours, renewal-by-exam fees",
      "AACN — CSC Exam Handbook: test plan, four-domain blueprint (Therapeutic Interventions 36%, Complications 31%, Procedures 19%, Monitoring and Diagnostics 15%), sample questions",
      "AACN — Frequently Asked Questions About CMC and CSC Certification: CSC vs CMC scope and the subspecialty add-on rule",
      "AACN — 2020 National Practice Analysis of Cardiac Surgery Nurses (Study of Practice): basis for current exam content",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice CSC-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to the AACN CSC four-domain blueprint. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full CSC question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "CMC",
      title: "CSC vs CMC: which AACN cardiac subspecialty fits your unit?",
      blurb: "Same exam format, different patients — surgical first-48-hours vs broader cardiac medicine. How to choose when you qualify for both.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "Complications: the domain that decides CSC first-time pass",
      blurb: "Why Therapeutic Interventions plus Complications make up ~67% of the exam, and the post-op syndromes AACN tests most.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "CVICU",
      title: "Stacking CSC on your CCRN in a cardiothoracic ICU",
      blurb: "How cardiac surgery programs use CSC-holder counts, and why the subspecialty add-on signals first-48-hour expertise.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
