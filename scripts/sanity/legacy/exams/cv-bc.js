// CV-BC exam detail page — structured data.
// Sourced from Content Briefs/CV-BC_Content_Brief.md and verified against
// Content/CV-BC_research.json (ANCC Cardiac-Vascular Nursing credential page,
// ANCC CV-BC Test Content Outline effective 2025-12-05, 2023-2024
// Cardiac-Vascular Nursing Role Delineation Study, ANCC Certification Renewal
// Handbook effective 2025-09-10, and 2025 ANCC Certification Data).
// Lives at /certifications/cv-bc/ via the paginated template.

module.exports = {
  code: "CV-BC",
  name: "Cardiac-Vascular Nursing — Board Certified",
  body: "ANCC",
  cat: "specialty",
  catLabel: "Specialty",
  updated: "2026-05",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title:
      "CV-BC Certification Guide: Eligibility, Exam & Renewal | NursPrep",
    description:
      "Everything cardiac-vascular RNs need on ANCC CV-BC — eligibility, four-domain blueprint, $295 ANA-member fee, 67% pass rate, 5-year renewal, and 10-week study plan.",
    ogTitle:
      "CV-BC Certification Guide 2026 — Cardiac-Vascular Nurse Board Certified",
    ogDescription:
      "ANCC eligibility (RN + 2,000 cardiac-vascular hrs + 30 CV CE hrs), the four-domain blueprint, $295/$395 fees, 67% pass rate, and a 10-week study plan.",
  },

  // ---- HERO
  lede:
    "CV-BC — Cardiac-Vascular Nurse — Board Certified — is the ANCC specialty credential for registered nurses caring for patients with cardiac and vascular disease across acute, ambulatory, and rehabilitative settings. If your shifts are cardiac rhythm interpretation, post-cath observation, heart-failure titration, anticoagulation management, peripheral vascular assessment, or structural-heart and cardiac-rehab care, CV-BC is the credential that formalizes the cardiac-vascular RN role.",
  heroPills: [
    { k: "Questions", v: "150 items" },
    { k: "Duration", v: "3 hours" },
    { k: "Renewal", v: "5 years" },
    { k: "Pass rate", v: "67%" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "American Nurses Credentialing Center (ANCC)" },
    { k: "Format", v: "Prometric testing centers (computer-based)" },
    { k: "Scored items", v: "125 of 150 (25 unscored pretest)" },
    { k: "Passing score", v: "Scaled 350 on a 0–500 scale" },
    { k: "Eligibility", v: "Active RN license + 2 yrs full-time RN practice" },
    { k: "Practice hours", v: "2,000 cardiac-vascular hours in last 3 yrs" },
    { k: "CE requirement", v: "30 hrs cardiac-vascular continuing education in last 3 yrs" },
    { k: "Fee", v: "$295 ANA member · $395 non-member · $340 SVN / PCNA member" },
  ],
  heroCardFoot:
    "Verified against the ANCC CV-BC credential page, the ANCC Cardiac-Vascular Nursing Test Content Outline effective 2025-12-05, and the ANCC Certification Renewal Handbook effective 2025-09-10",

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
    { id: "compare", label: "CV-BC vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "CV-BC certification at a glance",
    prose: [
      "CV-BC — Cardiac-Vascular Nurse — Board Certified — is ANCC's RN-level specialty board certification for registered nurses delivering cardiac and vascular care. The credential is issued by the <strong>American Nurses Credentialing Center (ANCC)</strong>, the credentialing arm of the American Nurses Association (ANA), and is reported in the 2025 ANCC certification-data release as being held by <strong>6,573 active credential holders</strong> as of 2025-12-31. ANCC processed 771 CV-BC renewals in the same year.",
      "CV-BC is a board certification, not a course. CV-BC is frequently confused with the AACN critical-care credentials — <strong>CCRN</strong>, <strong>CMC</strong>, <strong>CSC</strong>, and <strong>PCCN</strong> — and with ANCC's legacy <strong>Certified Vascular Nurse</strong>, which is renewal-only and closed to new candidates. CV-BC is the single ANCC credential that covers both cardiac AND vascular nursing across acute, ambulatory, and rehabilitative settings. See the comparison section below before applying.",
    ],
    stats: [
      { n: "150", l: "Total items", sub: "125 scored · 25 pretest" },
      { n: "3 hrs", l: "Time limit", sub: "Continuous, one form" },
      { n: "67%", l: "2025 pass rate", sub: "754 of 1,120 first-time takers" },
      { n: "5 yrs", l: "Renewal cycle", sub: "75 CV CE hours + 1 PD category, or re-exam" },
    ],
    factBox: {
      tone: "info",
      title: "What changed on 2025-12-05",
      html:
        "ANCC's updated <strong>Cardiac-Vascular Nursing Test Content Outline</strong> took effect <strong>2025-12-05</strong>, built from the 2023-2024 Cardiac-Vascular Nursing Role Delineation Study (267 ANCC-certified CV-BC respondents). The four-domain structure is unchanged in name, but item allocations were re-validated and the underlying knowledge and skill statements were refreshed. Candidates testing in 2026 should use the December 2025 outline and the most recent test reference list (updated 2025-09-03).",
    },
    coverImageLabel:
      "Cardiac-vascular RN reviewing telemetry rhythms and a 12-lead ECG at a step-down nurses' station",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the CV-BC exam?",
    prose: [
      "You are eligible if you hold an <strong>active, unencumbered RN license</strong> in a US state or territory (or a legally recognized equivalent in another country) AND meet ANCC's practice and continuing-education gates. Unlike credentials where hours are recommended but not enforced, ANCC enforces all four eligibility rules as hard application requirements — applicants who fall short must accumulate the hours before applying.",
      "The four eligibility rules are: (1) <strong>active RN license</strong>, (2) the equivalent of <strong>2 years of full-time RN practice</strong>, (3) a minimum of <strong>2,000 hours of clinical practice in cardiac-vascular nursing within the last 3 years</strong>, and (4) <strong>30 hours of continuing education in cardiac-vascular nursing within the last 3 years</strong>. The 30 CE hours must be specifically in cardiac-vascular content — general nursing CE does not count toward this gate.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You currently work on a cardiac telemetry or step-down unit, in a cardiac cath lab or electrophysiology suite, in a CTICU or CVICU, on a vascular-surgery floor, in a structural-heart or TAVR program, in cardiac rehabilitation, in an anticoagulation clinic, or in a cardiology outpatient practice.",
      "Your last three years of timesheets show at least 2,000 hours in cardiac-vascular nursing — direct cardiac or vascular patient care, not general med-surg float hours.",
      "Your CE transcript has at least 30 contact hours in cardiac-vascular content within the last 3 years — ACLS recertification, ACC/AHA guideline modules, SVN- or PCNA-hosted CE, and structured cardiac-rhythm or cath-lab CE are obvious sources.",
      "You have logged the equivalent of two years of full-time RN practice; part-time hours pro-rate against the full-time-equivalent rule.",
    ],
  },

  // ---- BLUEPRINT (exact weights from ANCC CV-BC Test Content Outline effective 2025-12-05)
  blueprint: {
    heading: "CV-BC exam blueprint — four content domains (effective 2025-12-05)",
    prose: [
      "The CV-BC exam covers four content domains with the percentage weights below, taken directly from the ANCC Cardiac-Vascular Nursing Test Content Outline effective <strong>2025-12-05</strong>. The 125 scored items plus 25 unscored pretest items make up the 150-item exam.",
      "<strong>Planning and Implementation</strong> plus <strong>Patient and Community Education</strong> together carry <strong>60% of the scored items</strong>. Most failing candidates over-rely on bedside cardiac experience and underprepare for the patient-education content — outpatient cardiac rehab, anticoagulation-clinic teaching, BP and weight self-monitoring, and community risk-reduction programs. Block dedicated study time for ACC/AHA guidelines (especially heart failure, hypertension, AFib anticoagulation), cardiac and vascular procedures, and the outpatient education domain.",
    ],
    domains: [
      { label: "Assessment and Diagnosis", weight: 22 },
      { label: "Planning and Implementation", weight: 35 },
      { label: "Evaluation and Modification", weight: 18 },
      { label: "Patient and Community Education", weight: 25 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and SVN / PCNA member savings",
    prose: [
      "ANCC delivers CV-BC through <strong>Prometric</strong> testing centers. Once your application is approved, you receive an Authorization to Test (ATT) with a <strong>120-day scheduling window</strong> — book your Prometric seat early in that window to avoid reapplying. Every initial-application price includes a <strong>$140 non-refundable administrative fee</strong>.",
    ],
    rows: [
      { k: "Initial application — ANA member", v: "$295" },
      { k: "Initial application — Society for Vascular Nursing (SVN) member", v: "$340" },
      { k: "Initial application — Preventive Cardiovascular Nurses Association (PCNA) member", v: "$340" },
      { k: "Initial application — non-member", v: "$395", highlight: true },
      { k: "Renewal — ANA member", v: "$250" },
      { k: "Renewal — SVN / PCNA member", v: "$295" },
      { k: "Renewal — non-member", v: "$350" },
    ],
    factBox: {
      tone: "success",
      title: "Stack ANA membership for the lowest CV-BC fee",
      html:
        "The <strong>ANA membership discount</strong> drops the initial-application fee to <strong>$295</strong> — $100 below the non-member rate, and lower than the SVN or PCNA member rates. ANA annual membership typically costs less than that delta, so joining ANA before applying usually reduces total exam cost. <strong>Society for Vascular Nursing (SVN)</strong> and <strong>Preventive Cardiovascular Nurses Association (PCNA)</strong> memberships also unlock discounted CV-BC fees and are strong adjuncts for cardiac-rehab, anticoagulation-clinic, and vascular-surgery RNs who benefit from those societies' CE catalogs. Many cardiology service lines and Magnet-designated hospitals reimburse the certification fee through a clinical-ladder or education-budget benefit — ask your nurse manager or HR before paying personally.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "CV-BC certification is valid for <strong>5 years</strong>. ANCC offers two renewal pathways under the Certification Renewal Handbook effective 2025-09-10. <strong>Pathway 1 — Continuing Education:</strong> complete <strong>75 contact hours of continuing education in cardiac-vascular nursing</strong> within the 5-year cycle, with <strong>at least 60 of those 75 hours formally approved</strong> (e.g., ANCC-accredited or AMA PRA Category 1), AND complete at least one additional professional-development category (academic credits, presentations, publications/research, preceptorship of students, professional service, 1,000+ practice hours in the specialty, quality improvement projects, or re-examination).",
      "<strong>Pathway 2 — Recertification by Examination:</strong> retake and pass the current CV-BC exam at the renewal fee. There is no extended grace period for a lapsed CV-BC — lapsed candidates must follow ANCC's reinstatement process to regain the credential.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the CV-BC exam?",
    prose: [
      "The 2025 ANCC certification-data release reports a <strong>67% pass rate</strong> on the CV-BC exam, with <strong>1,120 first-time examinees, 754 passes, 771 renewals, and 6,573 active CV-BC credential holders</strong> as of 2025-12-31. Roughly two-in-three first-time candidates pass — a rate slightly below ANCC's 71% Psychiatric-Mental Health Nursing mark and 77% Ambulatory Care Nursing mark, and a bit above the 63% Gerontological Nursing and Nurse Executive rates.",
      "The most common failure pattern: candidates over-rely on day-to-day cardiac-bedside experience and underprepare for two parts of the blueprint. First, <strong>Patient and Community Education</strong> (25% — the second-largest block) tests outpatient cardiac rehab, anticoagulation-clinic teaching, daily-weight and BP self-monitoring, health literacy, and community risk-factor reduction — content that inpatient-focused candidates rarely encounter. Second, <strong>Planning and Implementation</strong> (35% — the largest block) tests ACC/AHA-guideline framings of STEMI/NSTEMI, heart failure, hypertension, and AFib anticoagulation that working RNs often apply in practice without studying the explicit guideline pathways.",
    ],
    rows: [{ year: "2025", pct: 67 }],
    target: 80,
    footnote:
      "Pass-rate figures per 2025 ANCC certification data (1,120 first-time examinees / 754 passes). 6,573 active credential holders and 771 renewals reported in the same release as of 2025-12-31.",
    factBox: {
      tone: "info",
      title: "The lever is full-length timed practice plus outpatient content",
      html:
        "In ANCC candidate guidance, the single biggest predictor of first-time pass on specialty RN exams is <strong>at least one full-length timed 150-item practice exam</strong> under real conditions. For CV-BC specifically, allocate extra study time to the <strong>Patient and Community Education</strong> domain — 25% of the exam — covering outpatient cardiac rehab phases, anticoagulation-clinic INR management, structured BP and weight self-monitoring, community resources, and health-literacy-driven education planning. Inpatient cardiac experience alone does not cover this material.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 10-week CV-BC study plan",
    prose: [
      "A structured 10-week study plan covers the four-domain blueprint for most working cardiac-vascular RNs with two or more years of practice — roughly <strong>80 to 120 total study hours</strong>. Practice-question volume ramps through weeks 2–8 and peaks in week 9 with a full-length 150-item timed exam; week 10 is for targeted review, logistics, and a rest day.",
    ],
    weeks: [
      { n: 1, focus: "Read ANCC CV-BC Test Content Outline (effective 2025-12-05) + baseline diagnostic", qs: 25 },
      { n: 2, focus: "Assessment & Diagnosis I — cardiac/vascular A&P, pathophysiology, nursing diagnosis identification", qs: 40 },
      { n: 3, focus: "Assessment & Diagnosis II — cardiac rhythm interpretation, 12-lead ECG, Doppler, stroke scale, peripheral vascular exam", qs: 60 },
      { n: 4, focus: "Planning & Implementation I — ACC/AHA guidelines (STEMI/NSTEMI, HF, HTN, AFib anticoagulation), pharmacology", qs: 60 },
      { n: 5, focus: "Planning & Implementation II — cardiac/vascular procedures (PCI, EP, TAVR, CABG, peripheral interventions), TTM, cardioversion", qs: 60 },
      { n: 6, focus: "Evaluation & Modification — adverse reactions (HIT, hypotension), urgent (pseudoaneurysm, hypertensive crisis), emergent (PE, stroke)", qs: 50 },
      { n: 7, focus: "Patient & Community Education I — cardiac rehab phases, anticoagulation clinic, self-management (BP / daily weights)", qs: 60 },
      { n: 8, focus: "Patient & Community Education II — risk-factor counseling, health literacy, community resources, outpatient telemetry", qs: 50 },
      { n: 9, focus: "Full-length timed practice exam (150 items in 3 hours) + error-log review", qs: 150 },
      { n: 10, focus: "Targeted review of weak domains, rest, test day", qs: 40 },
    ],
    tipsHeading: "How CV-BC candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Don't skip the Patient and Community Education domain",
        text:
          "Patient and Community Education is 25% of the scored items — the second-largest block. Inpatient cardiac experience alone rarely covers cardiac rehab phases, anticoagulation-clinic INR titration, structured BP and weight self-monitoring, or health-literacy-driven education planning. Block at least one full study week for this domain.",
      },
      {
        kicker: "Pace 150 items across 3 hours",
        text:
          "Pacing is a trained skill. Take at least one full-length timed practice exam under real conditions before test day — fatigue in the last 30–40 items is where unprepared candidates lose the most points. Target: roughly 72 seconds per item.",
      },
      {
        kicker: "Memorize the ACC/AHA guideline framings",
        text:
          "STEMI vs NSTEMI presentation, heart-failure staging (A–D) and HFrEF / HFpEF pharmacology, hypertension stages and treatment thresholds, AFib anticoagulation scoring (CHA2DS2-VASc, HAS-BLED), and dyslipidemia management — Planning and Implementation items reliably hinge on these frameworks. Build one-page reference cards and review them in the final week.",
      },
      {
        kicker: "Know cardiac rhythm strips cold",
        text:
          "Sinus rhythm, AFib, atrial flutter, VT, VF, AV blocks (1°, 2° Mobitz I and II, 3°), and paced rhythms appear repeatedly across Assessment and Evaluation items. Drill rhythm strips daily through weeks 3 and 8. If you cannot identify a third-degree heart block at a glance, you will lose points.",
      },
      {
        kicker: "Practice the peripheral vascular exam",
        text:
          "ABI (ankle-brachial index) interpretation, claudication grading, pulse grading scales, Doppler waveform recognition, and venous-vs-arterial wound features show up in both Assessment and Patient Education items. Many cardiac RNs underprepare here — review SVN or PCNA peripheral-vascular CE before test day.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (constructed to mirror ANCC scenario style; not a real item)
  sample: {
    heading: "Sample CV-BC question",
    prose: [
      "This item mirrors ANCC's scenario format: a short clinical stem with a cardiac-vascular patient, an active finding, and four plausibly-correct options where only one is <em>best</em>. Try it before you read the rationale.",
    ],
    q: {
      scenario:
        "A 68-year-old patient presents to the emergency department with crushing substernal chest pain that began 90 minutes ago, radiating to the right shoulder. Vital signs: BP 92/58, HR 54, RR 18, SpO2 96% on room air. A 12-lead ECG shows ST-segment elevation in leads II, III, and aVF with reciprocal depression in I and aVL. The emergency physician orders sublingual nitroglycerin 0.4 mg.",
      stem: "Which nursing action should the cardiac-vascular RN prioritize first?",
      options: [
        "Administer the sublingual nitroglycerin as ordered and recheck blood pressure in 5 minutes.",
        "Hold the nitroglycerin, notify the physician, and prepare to obtain a right-sided ECG (V4R).",
        "Administer a 500 mL normal saline bolus and reassess pain before giving nitroglycerin.",
        "Place the patient supine, apply 4 L oxygen by nasal cannula, and proceed with the nitroglycerin order.",
      ],
      correct: 1,
      rationale:
        "The ECG shows an inferior STEMI (ST elevation in II, III, aVF). Roughly 30 to 50 percent of inferior STEMIs involve the right ventricle, and right-ventricular infarction makes the patient preload-dependent. Nitroglycerin is a venous dilator that drops preload and can cause profound hypotension and hemodynamic collapse in RV infarction. The CV-BC RN holds the nitroglycerin, notifies the physician, and obtains a right-sided ECG (V4R) to confirm RV involvement before any vasodilator is given. Treatment for RV-involving inferior STEMI is IV fluid resuscitation to support preload, plus urgent PCI activation. Administering nitroglycerin as ordered, giving fluids before notifying the provider, or proceeding with the order without escalation all risk hemodynamic collapse.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key CV-BC terms every candidate should know",
    prose: [
      "These terms surface across the four CV-BC domains. Review them until the definitions feel automatic — scenario-based stems often hinge on recognizing which framework (ACC/AHA guidelines, CHA2DS2-VASc), syndrome (HIT, hypertensive crisis), or procedure (TAVR, TTM) applies to the patient in the stem.",
    ],
    rows: [
      { term: "STEMI vs NSTEMI", defn: "ST-elevation MI shows ST elevation in two contiguous leads and requires emergent reperfusion (PCI within 90 minutes of first medical contact). NSTEMI shows ST depression or T-wave inversion with positive troponin and is managed with anticoagulation, antiplatelets, and risk-stratified PCI.", domain: "Planning" },
      { term: "CHA2DS2-VASc", defn: "AFib stroke-risk score (Congestive HF, Hypertension, Age ≥75, Diabetes, Stroke/TIA, Vascular disease, Age 65–74, Sex category female). A score of 2 or more in men (3 or more in women) is the standard threshold to start oral anticoagulation.", domain: "Planning" },
      { term: "HAS-BLED", defn: "AFib bleeding-risk score (Hypertension, Abnormal renal/liver function, Stroke, Bleeding history, Labile INR, Elderly, Drugs/alcohol). High HAS-BLED scores trigger closer monitoring, not anticoagulation withholding.", domain: "Planning" },
      { term: "ABI (Ankle-Brachial Index)", defn: "Ratio of ankle systolic BP to brachial systolic BP. ABI 0.9 to 1.3 is normal; 0.4 to 0.9 indicates peripheral artery disease with claudication; below 0.4 indicates critical limb ischemia.", domain: "Assessment" },
      { term: "Targeted Temperature Management (TTM)", defn: "Controlled cooling (typically 32 to 36 °C) of a post-cardiac-arrest patient for 24 hours to limit neurologic injury. Requires close shivering control, electrolyte monitoring, and slow rewarming.", domain: "Planning" },
      { term: "Heparin-Induced Thrombocytopenia (HIT)", defn: "Immune-mediated platelet drop (typically a 50% or greater fall) developing 5 to 10 days after heparin exposure, paradoxically associated with thrombosis. Stop all heparin and switch to a non-heparin anticoagulant (argatroban, bivalirudin).", domain: "Evaluation" },
      { term: "Pseudoaneurysm", defn: "Contained vascular access complication — typically after femoral cath or sheath removal — where blood collects between arterial wall layers. Presents as a pulsatile mass with a bruit. May require ultrasound-guided compression or thrombin injection.", domain: "Evaluation" },
      { term: "Cardioversion (electrical vs pharmacologic)", defn: "Synchronized delivery of energy (electrical) or rhythm-control medication (pharmacologic, e.g., amiodarone, flecainide) to convert unstable AFib, AFlutter, or stable VT to sinus rhythm. AFib lasting more than 48 hours requires anticoagulation or TEE before cardioversion.", domain: "Planning" },
      { term: "TAVR (Transcatheter Aortic Valve Replacement)", defn: "Minimally invasive aortic-valve replacement delivered via femoral or alternative access. CV-BC RNs manage post-TAVR vascular access, conduction-block monitoring (new LBBB or AV block), and stroke surveillance.", domain: "Planning" },
      { term: "Cardiac rehabilitation phases", defn: "Phase I (inpatient post-event ambulation and education), Phase II (outpatient monitored exercise and risk-factor modification, typically 12 weeks), Phase III (maintenance). CMS covers Phase II for qualifying diagnoses (post-MI, post-PCI/CABG, HFrEF, post-TAVR).", domain: "Education" },
      { term: "Anticoagulation clinic / INR management", defn: "Outpatient warfarin management targeting INR 2.0 to 3.0 (most indications) or 2.5 to 3.5 (mechanical mitral valves). Requires patient teaching on vitamin-K-consistent diet, drug interactions, and bleeding precautions.", domain: "Education" },
      { term: "Hypertensive crisis", defn: "BP ≥180/120 mm Hg. Hypertensive urgency (no end-organ damage) is managed with oral agents over hours. Hypertensive emergency (with end-organ damage — encephalopathy, ACS, pulmonary edema, aortic dissection, eclampsia, stroke) requires IV agents in a monitored setting with a controlled BP reduction of no more than 25% in the first hour.", domain: "Evaluation" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "CV-BC vs. CCRN, CMC, CSC, PCCN, and legacy CVN",
    prose: [
      "CV-BC sits alongside several related credentials for cardiac and vascular RNs. The most common error is comparing CV-BC head-to-head with CCRN as if they fill the same role — CCRN is broad critical care across all ICU patients, while CV-BC is cardiac- and vascular-specific and is available to RNs outside the ICU. Use this table before you apply.",
    ],
    rows: [
      { row: "CV-BC", highlight: true, body: "ANCC", scope: "Cardiac AND vascular nursing across acute, ambulatory, and rehab settings — telemetry, cath lab, CTICU/CVICU, structural heart, cardiac rehab, anticoagulation clinic", who: "Registered nurses with 2 yrs FT practice + 2,000 cardiac-vascular hrs + 30 cardiac-vascular CE hrs" },
      { row: "CCRN (Adult / Pediatric / Neonatal)", body: "AACN", scope: "Broad critical care for acutely or critically ill ICU patients across all body systems", who: "ICU RNs with at least 1,750 to 2,000 critical-care hours" },
      { row: "CMC (Cardiac Medicine Certification)", body: "AACN", scope: "Sub-specialty ADD-ON for acutely ill cardiac-medicine patients (not surgical)", who: "Existing CCRN, PCCN, or ACCNS holders only" },
      { row: "CSC (Cardiac Surgery Certification)", body: "AACN", scope: "Sub-specialty ADD-ON for adult cardiac-surgery patients in the first 48 hours post-op", who: "Existing CCRN, PCCN, or ACCNS holders only" },
      { row: "PCCN (Progressive Care Certified Nurse)", body: "AACN", scope: "Progressive / step-down care across all body systems, not just cardiac-vascular", who: "Telemetry and step-down RNs with at least 1,750 hours of progressive-care patient care" },
      { row: "Certified Vascular Nurse (legacy CVN)", body: "ANCC (renewal only)", scope: "Vascular-only specialty; ANCC retired initial testing — now supports renewals only", who: "Existing certificants only — closed to new candidates" },
    ],
    closingProse:
      "<strong>Take CV-BC if you want a single RN-level ANCC credential covering both cardiac and vascular nursing across acute, ambulatory, and rehab settings.</strong> Stack CCRN on top of CV-BC if most of your work is also in critical care. Take PCCN instead if your patient mix is progressive / step-down across all body systems, not primarily cardiac-vascular. CMC and CSC are sub-specialty add-ons — they require an existing AACN critical-care credential and do not replace CV-BC.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about CV-BC certification",
    items: [
      { q: "What does CV-BC stand for in nursing?", a: "CV-BC stands for Cardiac-Vascular Nurse — Board Certified. The credential is issued by the American Nurses Credentialing Center (ANCC), the credentialing arm of the American Nurses Association." },
      { q: "Is CV-BC the same as CCRN?", a: "No. CV-BC is ANCC's RN-level specialty certification for cardiac-vascular nursing across acute, ambulatory, and rehab settings. CCRN is AACN's broad critical-care credential for acutely or critically ill ICU patients across all body systems. CV-BC is cardiac- and vascular-specific; CCRN is not." },
      { q: "How long does it take to prepare for the CV-BC exam?", a: "Most cardiac-vascular RNs prepare for 8 to 12 weeks. A realistic target is 80 to 120 total study hours spread across the four blueprint domains, with extra time on Planning and Implementation (35%) and Patient and Community Education (25%) — together 60% of the scored items." },
      { q: "Is the CV-BC exam hard?", a: "The CV-BC exam is moderately difficult. The 2025 ANCC first-time pass rate was 67% — 754 of 1,120 candidates passed. Candidates who rely only on bedside cardiac experience tend to struggle with outpatient cardiac-rehab and anticoagulation-clinic content in the Patient and Community Education domain." },
      { q: "Can I take the CV-BC exam without 2,000 cardiac-vascular hours?", a: "No. ANCC enforces all four eligibility rules as hard gates. Applicants must show an active RN license, 2 years of full-time RN practice, 2,000 hours of cardiac-vascular practice in the last 3 years, and 30 hours of cardiac-vascular CE in the last 3 years before sitting the exam." },
      { q: "What happens if I fail the CV-BC exam?", a: "You receive a score report showing performance by domain. You may reapply for a retest after ANCC's mandatory waiting period and must submit a new application with proof of additional preparation. Confirm the current retest fee and policy on the ANCC CV-BC credential page before scheduling." },
      { q: "How much does the CV-BC exam cost?", a: "Non-members pay $395. ANA members pay $295 — the lowest published rate. Society for Vascular Nursing (SVN) members and Preventive Cardiovascular Nurses Association (PCNA) members each pay $340. All initial-application fees include a $140 non-refundable administrative fee." },
      { q: "Does CV-BC certification expire?", a: "Yes. CV-BC is valid for 5 years. Renew through 75 contact hours of cardiac-vascular CE (60 of which must be formally approved) plus one of eight professional-development categories, or by retaking the exam." },
      { q: "Will my employer pay for CV-BC certification?", a: "Many cardiology service lines, Magnet-designated hospitals, and structural-heart programs reimburse the certification fee through clinical-ladder, cardiac-team, or education-budget benefits. Ask your nurse manager or HR before paying personally." },
      { q: "Is CV-BC recognized outside the United States?", a: "ANCC accepts candidates with a legally recognized RN-equivalent license in another country provided the other eligibility requirements (2 years RN practice, 2,000 cardiac-vascular hours, 30 cardiac-vascular CE hours) are met. ANCC publishes additional documentation requirements for international applicants." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following primary sources. Fees, blueprint weights, and renewal rules shift on ANCC's revision cycle — always verify numeric facts against the current ANCC handbook before relying on them for application decisions.",
    ],
    list: [
      "American Nurses Credentialing Center (ANCC) — Cardiac-Vascular Nursing Certification (CV-BC) credential page — eligibility, exam format, fees, and renewal",
      "ANCC — Cardiac-Vascular Nursing Test Content Outline (effective 2025-12-05; PDF updated 2025-08-29) — four-domain blueprint and item counts",
      "ANCC — 2025 Certification Data (PDF) — first-time pass rates (1,120 tested / 754 passed = 67%) and total certified (6,573 active credentials, 771 renewals as of 2025-12-31)",
      "ANCC — 2023 Cardiac-Vascular Nursing Role Delineation Study Executive Summary — methods, panel composition, and 267-respondent survey behind the December 2025 blueprint",
      "ANCC — Certification Renewal Handbook (effective 2025-09-10) — 75 CE hours, 60 formally approved, and the 8 professional-development categories",
      "ANCC — General Certification Handbook (PDF) — scaled passing score (350 on 0–500), application policies, retest rules",
      "ANCC — Cardiac-Vascular Nursing Test Reference List (updated 2025-09-03) — official recommended preparation resources",
      "Society for Vascular Nursing (SVN) — ANCC Certification page — SVN-member fee discount and CE resources",
      "Preventive Cardiovascular Nurses Association (PCNA) — member-fee discount and cardiac-prevention CE catalog",
      "US Bureau of Labor Statistics — Occupational Employment and Wage Statistics, Registered Nurses (May 2024) — RN wage context for cardiac-vascular roles",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice CV-BC-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to the four-domain ANCC CV-BC blueprint. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full CV-BC question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "CCRN",
      title: "CV-BC vs CCRN: which cardiac credential fits your role?",
      blurb: "ANCC cardiac-vascular specialty versus AACN broad critical-care credential — scope, eligibility, and career impact for cardiac RNs.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "Planning and Implementation: the 35% domain that decides CV-BC first-time pass",
      blurb: "Why ACC/AHA guideline framings, cardiac procedures, and pharmacology carry the largest single block of the exam, and the protocols ANCC tests most.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "Cath lab",
      title: "Landing a cath-lab or structural-heart RN role with CV-BC on your badge",
      blurb: "How cath-lab, electrophysiology, structural-heart, and cardiac-rehab hiring managers actually weigh CV-BC during interviews.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
