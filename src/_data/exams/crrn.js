// CRRN exam detail page — structured data.
// Sourced from Content/CRRN Certification.docx (verified against the RNCB
// 2026 Candidate Handbook, ARN fee schedule, CMS IRF-PPS guidance, and
// BLS OEWS RN wage data).
// Lives at /certifications/crrn/ via the paginated template.

module.exports = {
  code: "CRRN",
  name: "Certified Rehabilitation Registered Nurse",
  body: "RNCB",
  cat: "specialty",
  catLabel: "Medical-Surgical & Specialty",
  updated: "2026-04",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title:
      "CRRN Certification Guide: Eligibility, Exam & Renewal | NursPrep",
    description:
      "CRRN certification for rehabilitation RNs — 2026 eligibility (2 yrs rehab practice), 175-item exam, $285/$425 fees, 65–75% pass rate, 10-week study plan, and 5-year POC renewal.",
    ogTitle:
      "CRRN Certification Guide 2026 — Certified Rehabilitation Registered Nurse",
    ogDescription:
      "RNCB eligibility, the 4-domain blueprint (Functional Patterns 58% · Legislative/Economic 23% · Team 13% · Theory 6%), $285 ARN-member fee, 10-week plan, and Points-of-Credit renewal.",
  },

  // ---- HERO
  lede:
    "CRRN is the Certified Rehabilitation Registered Nurse credential issued by the Rehabilitation Nursing Certification Board (RNCB) — the credentialing arm of the Association of Rehabilitation Nurses (ARN). In continuous offering since 1984, it is the only active RN-level rehabilitation nursing credential in the US after ANCC retired its RN-BC, Rehabilitation credential around 2018. CARF-accredited rehab programs and Magnet® hospitals expect CRRN on their rehab floors.",
  heroPills: [
    { k: "Questions", v: "175 items" },
    { k: "Duration", v: "3 hours" },
    { k: "Renewal", v: "5 years · POC or re-exam" },
    { k: "Pass rate", v: "~65–75% (historical)" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "Rehabilitation Nursing Certification Board (RNCB), credentialing arm of ARN" },
    { k: "Format", v: "Prometric testing centers (two annual windows — June + fall)" },
    { k: "Scored items", v: "150 of 175 (25 unscored pretest)" },
    { k: "Passing score", v: "500 on a scaled scoring system" },
    { k: "Eligibility", v: "Active RN + 2 yrs rehab practice in last 5 yrs (or 1 yr + 1 yr graduate study)" },
    { k: "References", v: "2 colleague references — at least one must be your supervisor or a CRRN" },
    { k: "Fee", v: "$285 ARN member · $425 non-member" },
    { k: "Renewal cycle", v: "5 years — 60 Points of Credit + 1,000 practice hrs, or re-exam" },
  ],
  heroCardFoot:
    "Verified against the RNCB CRRN Candidate Handbook (2026 cycle), ARN fee schedule, and CMS IRF-PPS guidance",

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
    { id: "compare", label: "CRRN vs. adjacent credentials" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "CRRN certification at a glance",
    prose: [
      "CRRN — Certified Rehabilitation Registered Nurse — is the specialty credential for RNs practicing in rehabilitation settings. The credential is issued by the <strong>Rehabilitation Nursing Certification Board (RNCB)</strong>, which is the credentialing arm of the <strong>Association of Rehabilitation Nurses (ARN)</strong>. RNCB has offered CRRN continuously since <strong>1984</strong>, making it the oldest nationally recognized rehabilitation nursing certification in the United States.",
      "CRRN is now the <strong>only active RN-level rehabilitation nursing credential</strong> in the US — ANCC retired its RN-BC, Rehabilitation credential around 2018. The exam covers the full rehab continuum: inpatient rehab facilities (IRFs), skilled nursing facilities, long-term acute care, outpatient clinics, home health, and pediatric and geriatric rehab units. CARF-accredited programs and Magnet®-recognized hospitals routinely expect CRRN-credentialed RNs on rehab floors.",
    ],
    stats: [
      { n: "175", l: "Total items", sub: "150 scored · 25 pretest · 3 hours" },
      { n: "~65–75%", l: "Historical pass-rate range", sub: "RNCB does not publish annual figures" },
      { n: "2 yrs", l: "Rehab practice required", sub: "Within last 5 yrs (or 1 yr + 1 yr grad study)" },
      { n: "5 yrs", l: "Renewal cycle", sub: "60 POC + 1,000 hrs, or re-exam" },
    ],
    factBox: {
      tone: "info",
      title: "Two testing windows per year — not year-round",
      html:
        "Unlike ANCC and CBDCE exams, RNCB administers CRRN at Prometric during <strong>two annual testing windows</strong>: a <strong>spring window in June</strong> and a <strong>fall window</strong>. Your Authorization to Test (ATT) is valid for <strong>90 days</strong> inside that window. Plan backwards from your target window — late applications incur a surcharge, and the next opportunity is roughly six months away. Verify the current window dates against the RNCB handbook before you apply.",
    },
    coverImageLabel:
      "Rehabilitation RN working with PT on gait training in an inpatient rehab facility",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the CRRN exam?",
    prose: [
      "You qualify for CRRN through one of two practice pathways. Both require a <strong>current, active, unrestricted RN license</strong> in the US, US territories, or Canada. <strong>Pathway A — Practice</strong> is the standard route: two years of RN practice in rehabilitation nursing within the last five years. <strong>Pathway B — Practice + Study</strong> is a shorter clinical route for candidates pursuing graduate work: one year of rehab RN practice <em>plus</em> one year of advanced study (graduate-level coursework beyond the BSN) in nursing, both within the last five years.",
      "The two years under Pathway A do <strong>not need to be consecutive</strong>, but all hours must fall within the 5-year window ending on your application date. Setting and role are flexible: hours earned as a staff nurse, charge nurse, manager, educator, clinical nurse leader, researcher, or consultant in rehabilitation all count. Hours from inpatient, outpatient, home health, or long-term care rehab all qualify.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You hold an active, unrestricted RN license in a US state, US territory, or Canadian province.",
      "You have logged at least 2 years of rehab nursing practice in the last 5 years (Pathway A), OR 1 year of rehab practice plus 1 year of graduate-level nursing coursework in the last 5 years (Pathway B).",
      "You are comfortable with FIM or Section GG scoring, autonomic dysreflexia management, Rancho Los Amigos staging, and interdisciplinary team rounds with PT, OT, SLP, physiatry, case management, and social work.",
      "You routinely manage core rehab diagnoses: stroke, spinal cord injury, traumatic brain injury, amputation, post-op orthopedic recovery, and chronic pain — across adult or pediatric lifespan settings.",
      "You can list 2 professional references who can verify your rehab experience — at least one must be your immediate supervisor or a current CRRN.",
      "Med-surg RNs with occasional rehab admissions usually do NOT qualify — RNCB counts only hours where rehabilitation nursing is your primary role. Verify borderline cases with RNCB before you apply.",
    ],
  },

  // ---- BLUEPRINT (weights = RNCB TCO — sums to 100%)
  blueprint: {
    heading: "CRRN exam blueprint — four domains",
    prose: [
      "The RNCB Test Content Outline weights the exam heavily on clinical function: <strong>Functional Health Patterns at ~58%</strong> dominates the exam — almost three-fifths of your score lives in physiology, assessment, standards of care, and interventions across the lifespan. The second-largest domain is the one most candidates under-prepare for: <strong>Legislative, Economic, Ethical, and Legal Issues at ~23%</strong>, covering Medicare IRF-PPS rules, IRF-PAI assessment, the 60% Rule, and the three-hour therapy rule.",
      "<strong>The Rehabilitation Team and Community Reintegration (~13%)</strong> covers interdisciplinary roles, family teaching, durable medical equipment, and home-safety assessment. <strong>Rehabilitation Nursing Models, Theories, and Concepts (~6%)</strong> is the smallest domain — Roy's Adaptation Model, Orem's Self-Care Deficit Theory, the ARN Competency Model, and the WHO ICF framework. Do not ignore it — 6% is still 9–10 scored items, enough to decide a pass margin.",
    ],
    domains: [
      { label: "Functional Health Patterns", weight: 58 },
      { label: "Legislative, Economic, Ethical, Legal", weight: 23 },
      { label: "Rehab Team & Community Reintegration", weight: 13 },
      { label: "Models, Theories, Concepts", weight: 6 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and return on investment",
    prose: [
      "RNCB delivers CRRN at <strong>Prometric testing centers</strong> during two annual testing windows. The <strong>ARN-member application fee is $285</strong>; the non-member fee is $425 — a $140 gap. ARN membership runs approximately $120/year, so joining before applying usually pays for itself on the first fee alone and also unlocks ARN journal access and review-course discounts that you will use during prep.",
      "At a one-time fee under $500, typical prep spend of $150–$400, and an RN mean wage of <strong>$94,480/year</strong> with the upper quartile at <strong>$132,680/year</strong> (BLS OEWS), the payback period is short when your IRF or Magnet® employer runs a certification pay differential — commonly $0.50–$2.00/hour or a lump-sum bonus. Many Magnet® IRFs reimburse the fee through an education benefit; ask HR or nursing professional development before paying out of pocket.",
    ],
    rows: [
      { k: "Exam application — ARN member", v: "$285" },
      { k: "Exam application — non-member", v: "$425" },
      { k: "ARN annual membership (recovers the delta)", v: "~$120" },
      { k: "Late application surcharge", v: "Additional fee during late window" },
      { k: "Renewal by Points of Credit — ARN member", v: "~$180", highlight: true },
      { k: "Renewal by Points of Credit — non-member", v: "~$280" },
      { k: "Renewal by re-examination", v: "$285 member / $425 non-member" },
      { k: "Typical certification pay differential", v: "$0.50–$2.00 / hr at IRFs and Magnet® hospitals" },
    ],
    factBox: {
      tone: "success",
      title: "Join ARN before you apply",
      html:
        "ARN membership costs <strong>~$120/year</strong> but shifts the exam fee from <strong>$425 → $285</strong> (save $140) and the renewal fee from <strong>~$280 → ~$180</strong> (save $100). The membership more than recovers itself on cycle 1, and ARN members get discounted access to the <strong>ARN Core Curriculum for Rehabilitation Nursing</strong> and the <strong>ARN Review Course</strong> — the two highest-ROI study resources for CRRN.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "CRRN certification is valid for <strong>five years</strong>. RNCB offers two renewal pathways. <strong>Pathway 1 — Points of Credit (POC):</strong> hold a current, unrestricted RN license; complete <strong>1,000 hours of rehabilitation nursing practice</strong> during the 5-year cycle; and earn <strong>60 points of credit</strong> across approved professional activities. One contact hour of CE equals 1 point, and at least two-thirds of CE points must come from nursing-approved providers. ACLS, BLS, CPR, bloodborne pathogens, and fire-safety refreshers do <em>not</em> count.",
      "<strong>Pathway 2 — Re-examination:</strong> retake and pass the current CRRN exam during an active testing window. The re-exam fee matches the current application fee. Start logging CE, committee work, and presentations in <strong>year 1 of the cycle, not year 5</strong> — assembling a 60-point portfolio in the final year is the single most common renewal mistake. <strong>RNCB does not offer a grace period.</strong> A lapsed CRRN must sit and pass the full exam again to reinstate the credential.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the CRRN exam?",
    prose: [
      "RNCB does not publish a single pass-rate figure every year. Historically, first-time pass rates sit in the <strong>65–75% range</strong>, with retake candidates scoring lower on average. Candidates who complete a structured 8–12 week study plan and at least one full-length timed practice exam pass at meaningfully higher rates. Contact RNCB directly or check the most recent ARN annual report for the current reporting year.",
      "The top failure mode on CRRN is not clinical content — it's <strong>under-weighting the Legislative, Economic, Ethical, and Legal domain (~23%)</strong>. Candidates who spend their prep on stroke and SCI content and skim Medicare IRF-PPS, the 60% Rule, the three-hour therapy rule, and the IRF-PAI assessment walk in weak on roughly one-quarter of the exam. Block two full weeks of prep on regulatory and economic content, not two days.",
    ],
    rows: [
      { year: "Historical (RNCB)", pct: 70 },
      { year: "Structured 8–12 wk prep", pct: 80 },
    ],
    target: 85,
    footnote:
      "RNCB does not publish annual pass-rate figures. The 65–75% range is historical and approximate; the structured-prep figure is reported by ARN Review Course alumni surveys. Verify the current year's data against the latest ARN annual report before relying on a specific number.",
    factBox: {
      tone: "info",
      title: "The 23% regulatory domain is where clinical RNs fail",
      html:
        "Rehab RNs arrive comfortable with stroke, SCI, TBI, and amputation content — the 58% clinical domain feels familiar. Where they lose the pass margin is the <strong>23% legislative and economic block</strong>: Medicare IRF-PPS, the IRF-PAI assessment, the 60% Rule, and the three-hour therapy rule. These are <em>testable</em> facts with specific thresholds, not concepts. Schedule two dedicated weeks on regulatory content — not a few days of cramming.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 10-week CRRN study plan",
    prose: [
      "Most rehab RNs with 2+ years of practice succeed on a <strong>10-week plan at 8–12 hours per week</strong> — roughly 80–120 total study hours. Anchor your plan around the <strong>RNCB Test Content Outline</strong>, the <strong>ARN Core Curriculum for Rehabilitation Nursing</strong> (current edition), and at least one question bank with rationales (Pocket Prep CRRN, Board Vitals CRRN, or Mometrix CRRN). The ARN Review Course — in-person or on-demand — is the highest-ROI single investment.",
    ],
    weeks: [
      { n: 1, focus: "Read the RNCB TCO + baseline diagnostic exam to calibrate weaknesses", qs: 25 },
      { n: 2, focus: "Models, theories, rehab nursing process, and ARN Competency Model", qs: 40 },
      { n: 3, focus: "Stroke rehab — hemiparesis, dysphagia screening, aphasia, unilateral neglect", qs: 60 },
      { n: 4, focus: "Spinal cord injury — autonomic dysreflexia, neurogenic bowel/bladder, ASIA staging", qs: 60 },
      { n: 5, focus: "Traumatic brain injury (Rancho), amputation, post-op orthopedic rehab", qs: 60 },
      { n: 6, focus: "Pediatric rehab, geriatric rehab, chronic pain, and lifespan adaptations", qs: 60 },
      { n: 7, focus: "IRF-PAI, CMS 60% Rule, three-hour rule, Medicare Part A, ADA, HIPAA, ethics", qs: 60 },
      { n: 8, focus: "Interdisciplinary team roles, family teaching, DME, community reintegration", qs: 60 },
      { n: 9, focus: "Full-length timed practice exam + error-log review", qs: 175 },
      { n: 10, focus: "Targeted review of weak domains, light practice only, rest before test day", qs: 40 },
    ],
    tipsHeading: "How CRRN candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Don't under-weight the regulatory domain",
        text:
          "The 23% Legislative / Economic / Ethical / Legal block is where clinical-focused candidates lose their margin. Block two full weeks on Medicare IRF-PPS, the 60% Rule, three-hour therapy rule, IRF-PAI, ADA, and informed-consent ethics in the rehab setting.",
      },
      {
        kicker: "Don't rely on work experience alone",
        text:
          "CRRN tests breadth across the lifespan and every rehab setting. If you work adult inpatient only, you still need pediatric and geriatric rehab content. If you work SCI-heavy, you still need stroke, TBI, amputation, and chronic pain depth.",
      },
      {
        kicker: "Don't skip a timed practice exam",
        text:
          "Pacing for 150 scored items in 3 hours is a trained skill. Week 9 should be one full-length 175-item timed exam under real conditions — proctored if possible. Candidates who skip this typically run out of time in the final 30 items, where the regulatory scenarios cluster.",
      },
      {
        kicker: "Don't memorize scales without application",
        text:
          "Items ask <em>when to use</em> a scale, not just what it is. Study Braden, Morse, FIM, GCS, Rancho, and ASIA in clinical scenarios — admission, shift assessment, discharge planning — not in isolation. The exam will show you a scenario and ask which tool fits.",
      },
      {
        kicker: "Use FLUSHES for autonomic dysreflexia",
        text:
          "Autonomic dysreflexia items appear every cycle — usually paired with a T4 or higher SCI scenario. Mnemonic: <strong>F</strong>lushed face, <strong>L</strong>ift HOB, <strong>U</strong>ncheck catheter/bowel for kinks or impaction, <strong>S</strong>crutinize BP q2–5 min, <strong>H</strong>igh-BP meds if unresolved, <strong>E</strong>ducate patient, <strong>S</strong>ettle the trigger. Bladder distention is the #1 cause — check the catheter first.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (verbatim from Content/CRRN Certification.docx)
  sample: {
    heading: "Sample CRRN question",
    prose: [
      "This item mirrors RNCB's clinical-scenario format: a rehab-setting stem with a patient on a specific therapy plan, and four plausibly-correct options where only one is <em>best</em>. Try it before you read the rationale.",
    ],
    q: {
      scenario:
        "A 32-year-old patient with a T4 complete spinal cord injury on the rehab unit develops a pounding headache, flushing above the lesion, and a blood pressure of 190/110. The indwelling catheter has not drained in 4 hours.",
      stem: "Which nursing action should the rehab RN take first?",
      options: [
        "Administer the PRN antihypertensive ordered by the physiatrist.",
        "Sit the patient upright and check the urinary catheter for kinks or blockage.",
        "Call rapid response and prepare to transfer the patient to the ICU.",
        "Place the patient supine and elevate the legs to improve perfusion.",
      ],
      correct: 1,
      rationale:
        "This is autonomic dysreflexia — a medical emergency in SCI patients at T6 or above triggered by a noxious stimulus below the lesion. The first rehab nursing action is to <strong>raise the head of the bed and remove the noxious stimulus</strong>, which is almost always bladder distention. Medication (A) follows only if symptoms persist after the trigger is cleared. Option D (supine, legs elevated) would worsen the hypertension — it is the correct move for orthostatic hypotension, not dysreflexia. Option C (rapid response to ICU) is premature before the rehab RN tries the first-line intervention. This item maps to Functional Health Patterns — the 58% clinical domain.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key CRRN terms every candidate should know",
    prose: [
      "Use this glossary while you study. Each term appears on the exam in multiple forms, often as a distractor in scenario items. Review until the definitions feel automatic — regulatory vocabulary is where the 23% legal/economic domain gets you.",
    ],
    rows: [
      { term: "IRF-PAI", defn: "Inpatient Rehab Facility Patient Assessment Instrument — the CMS-required dataset for every IRF admission, interim, and discharge.", domain: "Legislative/Economic" },
      { term: "60% Rule", defn: "CMS rule requiring at least 60% of an IRF's admissions to fall within 13 qualifying diagnoses (stroke, SCI, TBI, amputation, major multiple trauma, etc.).", domain: "Legislative/Economic" },
      { term: "Three-Hour Rule", defn: "Medicare expectation that IRF patients receive at least 3 hours of therapy per day, 5 days per week — combined across PT, OT, and SLP.", domain: "Legislative/Economic" },
      { term: "FIM / Section GG", defn: "Standardized tools that measure a patient's functional independence. FIM scores 18–126; Section GG is item-level and now the CMS standard for IRF reporting.", domain: "Functional Patterns" },
      { term: "Autonomic Dysreflexia", defn: "Medical emergency in SCI patients at T6 or above triggered by a noxious stimulus below the lesion — usually bladder distention. First action: sit the patient up, remove the trigger.", domain: "Functional Patterns" },
      { term: "Neurogenic Bladder", defn: "Loss of normal bladder control from nerve injury; managed with timed voiding, intermittent catheterization, or anticholinergic meds.", domain: "Functional Patterns" },
      { term: "Rancho Los Amigos", defn: "10-level scale describing cognitive recovery after TBI — Level 1 no response to Level 10 purposeful with modified independence.", domain: "Functional Patterns" },
      { term: "ASIA Impairment Scale", defn: "American Spinal Injury Association A–E scale grading SCI severity (A = complete, E = normal) — used at admission and follow-up.", domain: "Functional Patterns" },
      { term: "Dysphagia", defn: "Difficulty swallowing, common after stroke; managed with SLP-led screening, diet modification, and aspiration-precaution positioning.", domain: "Functional Patterns" },
      { term: "Modified Ashworth Scale", defn: "0–4 scale grading spasticity — commonly used post-stroke and post-SCI for tone assessment and response to therapy.", domain: "Functional Patterns" },
      { term: "Interdisciplinary Team (IDT)", defn: "The integrated rehab team — nurse, PT, OT, SLP, physiatry, case manager, social worker, recreational therapist — that holds team rounds and co-owns the plan of care.", domain: "Rehab Team" },
      { term: "Community Reintegration", defn: "The process of returning a patient to home, school, work, or community roles after rehabilitation — measured by participation, not just function.", domain: "Rehab Team" },
      { term: "Magnet® Recognition", defn: "ANCC program identifying hospitals that meet high nursing quality standards — specialty certification (including CRRN) supports Magnet® designation.", domain: "Rehab Team" },
      { term: "Roy's Adaptation Model", defn: "Nursing theory framing patients as adaptive systems responding to environmental stimuli; the rehab nurse facilitates adaptation across physiologic, self-concept, role, and interdependence modes.", domain: "Models/Theory" },
      { term: "WHO ICF", defn: "WHO International Classification of Functioning, Disability and Health — the framework underpinning modern rehab outcome measurement.", domain: "Models/Theory" },
    ],
  },

  // ---- COMPARE (directly from CRRN vs adjacent credentials table in the Word doc)
  compare: {
    heading: "CRRN vs. adjacent credentials: which one fits your role?",
    prose: [
      "CRRN sits alongside several credentials that rehab RNs sometimes stack. Use this table to decide whether CRRN alone fits, or whether a second credential makes sense for your scope.",
    ],
    rows: [
      { row: "CRRN", highlight: true, body: "RNCB / ARN", scope: "Rehabilitation nursing at the RN level, full lifespan and all settings", who: "Staff RNs, charge nurses, educators, managers in any rehab setting — the primary credential" },
      { row: "CCM (Certified Case Manager)", body: "CCMC", scope: "Cross-specialty case management — utilization review, transitions of care", who: "Rehab RNs transitioning into case management or discharge planning roles" },
      { row: "CBIS (Certified Brain Injury Specialist)", body: "BIAA / ACBIS", scope: "Brain-injury-focused practice across multiple disciplines", who: "Rehab RNs with a TBI-heavy caseload — stacks naturally with CRRN" },
      { row: "RN-BC, Rehabilitation (ANCC)", body: "ANCC (retired ~2018)", scope: "Rehabilitation nursing — no longer offered", who: "Mentioned only because it still appears in older materials; not available to new candidates" },
      { row: "CRRN-A (Advanced)", body: "RNCB (legacy — verify)", scope: "Advanced rehabilitation nursing", who: "Verify current status with RNCB — credential consolidation has been discussed; not safe to rely on without confirmation" },
    ],
    closingProse:
      "<strong>Quick rule of thumb:</strong> Take <em>CRRN</em> if you want to validate specialty knowledge as a bedside, charge, or leadership RN in rehabilitation — it is the primary RN-level credential and the only currently active one. Stack <em>CCM</em> if you move into case management, or <em>CBIS</em> if your caseload is predominantly brain injury. The retired ANCC RN-BC Rehabilitation still appears in older job postings — if an employer lists it, they mean CRRN.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about CRRN certification",
    items: [
      { q: "What does CRRN stand for in nursing?", a: "CRRN stands for Certified Rehabilitation Registered Nurse. The credential is issued by the Rehabilitation Nursing Certification Board (RNCB), the credentialing arm of the Association of Rehabilitation Nurses (ARN). RNCB has offered the credential continuously since 1984." },
      { q: "How long does it take to prepare for the CRRN exam?", a: "Most rehab RNs prepare for 8–12 weeks. A realistic target is 80–120 total study hours, spread across the four exam domains. Candidates who have been out of direct rehab practice for a year or more usually need the upper end of the range." },
      { q: "Is the CRRN exam hard?", a: "The CRRN exam is moderately difficult. Clinical content feels familiar to practicing rehab RNs — the 58% Functional Health Patterns domain is the comfort zone. The 23% Legislative, Economic, Ethical, and Legal block is where clinical-focused candidates lose their margin. Block two full weeks of dedicated regulatory study." },
      { q: "Can I take the CRRN exam if my rehab experience is in outpatient or home health only?", a: "Yes. RNCB accepts rehab nursing hours earned in any setting — inpatient, outpatient, home health, or long-term care. Hours as a staff nurse, manager, educator, researcher, or consultant in rehabilitation all count." },
      { q: "What happens if I fail the CRRN exam?", a: "You can retake the exam in the next testing window. Because there are only two windows per year, your next opportunity may be about six months away. You must submit a new application and pay the full application fee for each retake. RNCB does not cap retake attempts." },
      { q: "How many times can I retake the CRRN exam?", a: "RNCB does not cap retake attempts. However, each retake requires a new application and a new fee, and you are limited to the two annual testing windows (June and a fall window)." },
      { q: "Does CRRN certification expire?", a: "Yes. CRRN certification is valid for 5 years. Renew through Points of Credit (60 POC + 1,000 practice hours over the cycle) or by retaking the current exam. RNCB does not offer a grace period — a lapsed credential must be reinstated by passing the full exam again." },
      { q: "Is CRRN recognized in Canada?", a: "Yes. Canadian RNs with a current, unrestricted license may sit for the exam and hold the credential on the same terms as US candidates." },
      { q: "Will my hospital pay for CRRN certification?", a: "Many Magnet®-recognized IRFs and large health systems reimburse the CRRN application fee through an education benefit. Ask your nursing professional development office or HR before paying out of pocket." },
      { q: "What is the CRRN exam pass rate?", a: "RNCB does not publish a single pass-rate figure every year. Historically, first-time pass rates sit in the 65–75% range, with retake candidates scoring lower on average. Candidates who complete a structured 8–12 week plan and at least one full-length timed practice exam pass at meaningfully higher rates." },
      { q: "Is CRRN the same as the ANCC Rehabilitation Nurse credential?", a: "No. ANCC retired its RN-BC, Rehabilitation credential around 2018, so CRRN is now the only active RN-level rehabilitation nursing credential in the US. Older job postings that list 'ANCC Rehabilitation Nurse certification' effectively mean CRRN." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following primary sources. Fees, blueprint weights, and renewal rules shift on RNCB's revision cycle — always verify numeric facts against the current RNCB Candidate Handbook before relying on them for application decisions.",
    ],
    list: [
      "Rehabilitation Nursing Certification Board (RNCB) — CRRN Candidate Handbook (2026 cycle) and Test Content Outline",
      "Association of Rehabilitation Nurses (ARN) — Earn Your CRRN page, Renewal page, and ARN Core Curriculum for Rehabilitation Nursing",
      "RNCB — Points of Credit Renewal Criteria and Process",
      "US Bureau of Labor Statistics (BLS) — Occupational Employment and Wage Statistics, Registered Nurses (mean $94,480; upper quartile $132,680)",
      "Centers for Medicare & Medicaid Services (CMS) — IRF-PPS, IRF-PAI, 60% Rule, and three-hour therapy rule guidance",
      "<em>Rehabilitation Nursing</em> (peer-reviewed journal) — research linking specialty certification to reduced falls, pressure injuries, and CAUTI rates",
      "ANCC — Magnet Recognition Program® requirements that reference specialty certification",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice CRRN-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to the RNCB blueprint — weighted toward Functional Health Patterns (58%) with dedicated regulatory scenarios. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full CRRN question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Study guide",
      tag: "IRF-PAI",
      title: "The 23% regulatory domain: what every CRRN candidate misses",
      blurb: "Medicare IRF-PPS, the 60% Rule, the three-hour therapy rule, and IRF-PAI — the testable facts clinical RNs skim and lose their pass margin on.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Comparison",
      tag: "CCM",
      title: "CRRN vs CCM: stacking case management on your rehab credential",
      blurb: "When rehab RNs benefit from pairing CRRN with Certified Case Manager — transitions of care, utilization review, and IRF discharge planning.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Renewal",
      tag: "POC",
      title: "Building 60 Points of Credit across a 5-year cycle",
      blurb: "Which CE providers count, why ACLS/BLS don't qualify, and how to log committee service and presentations as you earn them — not in year 5.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
