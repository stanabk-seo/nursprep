// RNC-OB exam detail page — structured data.
// Sourced from Content/RNC-OB_research.json (verified against the NCC 2026
// Inpatient Obstetric Nursing Candidate Guide, NCC exam detail page, NCC
// public Statistics page covering 2016–2025 pass rates, and BLS OOH May 2024
// primary sources as of the 2026-05 cycle).
// Lives at /certifications/rnc-ob/ via the paginated template.

module.exports = {
  code: "RNC-OB",
  name: "Registered Nurse Certified - Inpatient Obstetric Nursing",
  body: "NCC",
  cat: "womens",
  catLabel: "Women’s & Infant Health",
  updated: "2026-05",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title:
      "RNC-OB Certification Guide: Eligibility, Exam & Renewal | NursPrep",
    description:
      "Everything L&D nurses need on RNC-OB in 2026 — NCC eligibility (24 mo / 2,000 hrs), 5-domain blueprint, $325 fee, 2025 pass rate, and 3-year CCA renewal.",
    ogTitle:
      "RNC-OB Certification Guide 2026 — Inpatient Obstetric Nursing",
    ogDescription:
      "NCC eligibility, the five-domain 2026 blueprint, $325 fee, 65% 2025 pass rate, and a 10-week study plan for inpatient OB and L&D RNs.",
  },

  // ---- HERO
  lede:
    "RNC-OB is the RN-level core board certification for inpatient obstetric nursing in the United States and Canada. The credential is issued by the <strong>National Certification Corporation (NCC)</strong> and validates expert practice across the full inpatient OB continuum — antepartum, intrapartum, immediate postpartum, and normal newborn care for pregnant people after 20 weeks of gestation through discharge.",
  heroPills: [
    { k: "Questions", v: "175 items" },
    { k: "Duration", v: "3 hours" },
    { k: "Renewal", v: "3 years" },
    { k: "Pass rate", v: "65% (2025)" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "National Certification Corporation (NCC)" },
    { k: "Format", v: "PSI/AMP test centers + Live Remote Proctoring (LRP)" },
    { k: "Scored items", v: "150 of 175 (25 unscored pretest)" },
    { k: "Scoring", v: "Criterion-referenced — Rasch / item response theory" },
    { k: "Eligibility", v: "Active RN license + 24 mo specialty + 2,000 hrs" },
    { k: "Scope", v: "Pregnant patients after 20 weeks through discharge" },
    { k: "Fee", v: "$325 total ($50 application + $275 testing)" },
    { k: "Renewal cycle", v: "3 years — CCA-driven Education Plan" },
  ],
  heroCardFoot:
    "Verified against NCC's 2026 Inpatient Obstetric Nursing Candidate Guide and the NCC public Statistics page (2016–2025)",

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
    { id: "compare", label: "RNC-OB vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "RNC-OB certification at a glance",
    prose: [
      "RNC-OB — Registered Nurse Certified - Inpatient Obstetric Nursing — is the RN-level benchmark for hospitalized obstetric care across labor and delivery, high-risk antepartum units, OB triage, postpartum, and mother-baby settings. The credential is issued by the <strong>National Certification Corporation (NCC)</strong>, the same Chicago-based certifier that issues RNC-MNN, RNC-LRN, the WHNP-BC women's-health nurse-practitioner credential, and the OB subspecialty exams (C-EFM, OBE).",
      "RNC-OB is a core board credential, not a course. The exam is delivered through <strong>PSI/AMP</strong> at PSI test centers and via <strong>Live Remote Proctoring (LRP)</strong>. The scope is bounded — focus is on care of pregnant patients <strong>after 20 weeks of gestation through discharge</strong>, across antepartum, intrapartum, postpartum, and normal newborn periods. NCC's core RNC programs are accredited by the National Commission for Certifying Agencies (NCCA).",
    ],
    stats: [
      { n: "175", l: "Total items", sub: "150 scored · 25 pretest" },
      { n: "3 hrs", l: "Time limit", sub: "Single block, no scheduled break" },
      { n: "65%", l: "2025 pass rate", sub: "2,079 candidates tested" },
      { n: "3 yrs", l: "Renewal cycle", sub: "CCA-driven Education Plan" },
    ],
    factBox: {
      tone: "info",
      title: "2025 pass rate dropped sharply — plan accordingly",
      html:
        "Between 2020 and 2024, RNC-OB pass rates ran in a tight band of <strong>86% to 93%</strong>. In 2025 NCC reported a drop to <strong>65% (2,079 candidates)</strong> — a 21-point year-over-year shift from 86% in 2024. NCC has not publicly attributed the change, but it is consistent with a revised exam form or passing point taking effect. Candidates testing in 2026 windows should plan to over-prepare relative to historical advice and lean on the 2026 NCC Candidate Guide as the authoritative blueprint reference.",
    },
    coverImageLabel:
      "Labor and delivery RN reading a fetal monitor strip during second-stage labor",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the RNC-OB exam?",
    prose: [
      "You are eligible if you hold a <strong>current, active, unencumbered RN license</strong> in the U.S. or Canada, <em>and</em> you have completed <strong>24 months of specialty experience</strong> in inpatient obstetric nursing along with a <strong>minimum of 2,000 specialty hours</strong>. Both criteria must be met — NCC's rule is not an either/or.",
      "Specialty experience may consist of direct patient care, education, administration, or research. You must have worked in the specialty <strong>sometime within the last 24 months</strong> to qualify. The 2,000 hours are a lifetime figure — they may be accumulated at any point in your career, but recent work in the specialty is required. NCC does not waive these thresholds.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You have logged at least 24 months of inpatient OB practice with a minimum of 2,000 specialty hours and have worked in the specialty sometime in the past 24 months.",
      "You routinely interpret NICHD-categorized fetal heart-rate tracings (Category I, II, III) and can initiate intrauterine resuscitation without an order set.",
      "You are comfortable managing magnesium sulfate for preeclampsia or fetal neuroprotection — including loading dose, maintenance, and toxicity monitoring.",
      "Your setting fits a recognized inpatient OB role: labor and delivery, high-risk antepartum, OB triage, postpartum / mother-baby, OB house supervision or charge, or perinatal education attached to an inpatient unit.",
      "You can run a postpartum hemorrhage response — recognize the 4 Ts (tone, tissue, trauma, traction), activate the OB massive transfusion protocol, and assist with uterotonic escalation.",
    ],
  },

  // ---- BLUEPRINT (weights from 2026 NCC Inpatient OB Candidate Guide)
  blueprint: {
    heading: "RNC-OB exam blueprint — five domains (2026 outline)",
    prose: [
      "The RNC-OB blueprint is five domains. <strong>Labor and Birth</strong> (36%) plus <strong>Pregnancy Complications</strong> (28%) together carry 64% of scored items — most study time should live there. <strong>Fetal Assessment</strong> (17%) and <strong>Recovery, Postpartum, and Newborn Care</strong> (16%) make up another third, and <strong>Professional Practice Issues</strong> is a small but reliable 3%.",
      "Do not underestimate Fetal Assessment. NICHD electronic fetal monitoring terminology — Category I/II/III, baseline variability, accelerations, decelerations, and intrauterine resuscitation steps — is heavily tested and is where bedside L&D RNs sometimes lose points if they have never sat for a formal EFM review.",
    ],
    domains: [
      { label: "Pregnancy Complications, Treatment, and Management", weight: 28 },
      { label: "Fetal Assessment (NICHD EFM, antenatal testing, acid-base)", weight: 17 },
      { label: "Labor and Birth", weight: 36 },
      { label: "Recovery, Postpartum, and Newborn Care", weight: 16 },
      { label: "Professional Practice Issues (legal, ethics, EBP, safety, QI)", weight: 3 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and testing logistics",
    prose: [
      "NCC delivers RNC-OB through <strong>PSI/AMP</strong> at computer test centers and via <strong>Live Remote Proctoring (LRP)</strong>, which lets candidates test from home, office, or another private location. There are <strong>no application deadlines</strong> — candidates may apply at any time, and NCC processes most applications within <strong>1 to 14 days</strong>. Once eligibility is confirmed, NCC assigns a <strong>90-day testing window</strong>. Schedule within the first 30 days to secure your seat.",
    ],
    rows: [
      { k: "Total exam fee (Test Center or LRP)", v: "$325", highlight: true },
      { k: "→ Non-refundable application fee", v: "$50" },
      { k: "→ Testing fee", v: "$275" },
      { k: "Incomplete application reprocessing", v: "$30" },
      { k: "Change request (window, method, or category)", v: "$125" },
      { k: "Withdrawal partial refund", v: "$160 returned of $325" },
      { k: "Retake fee", v: "Full $325 — no discount" },
      { k: "Hand-score request", v: "$55" },
    ],
    factBox: {
      tone: "success",
      title: "Apply when you can sit within 90 days",
      html:
        "NCC's 90-day window is short. <strong>Exams must be scheduled within the first 30 days of the eligibility window</strong> or seats may not be available later. Build a complete application packet — RN license, employer verification, hours documentation — before you click submit so the 1–14 day review does not eat into your scheduling buffer. Many hospitals reimburse the $325 through a clinical-ladder or specialty-recognition benefit — ask your manager before paying out of pocket.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "RNC-OB certification is valid for <strong>three years</strong>. NCC's renewal program is the <strong>Continuing Competency Assessment (CCA)</strong>. At the start of each new 3-year cycle the certificant completes the CCA, which generates a personalized <strong>Education Plan</strong> listing the specific CE hours needed in defined content areas. Only CE earned <em>after</em> taking the CCA and aligned to the resulting Education Plan counts toward maintenance.",
      "A maintenance application and maintenance fee are submitted before the maintenance due date. Maintenance applications are subject to random audit — keep CE certificates and course descriptions for the full cycle (NCC modules are already on file with NCC and not subject to audit). Lapsed credentials cannot be reactivated through a CE catch-up; holders must reapply and sit the current RNC-OB exam to reinstate. Unlike credentials with a single fixed CE-hour count, <strong>RNC-OB's CE requirement is individualized by the CCA</strong> — there is no universal hour figure.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the RNC-OB exam?",
    prose: [
      "NCC publishes year-by-year pass-rate data for its Inpatient Obstetric Nursing exam on the public Statistics page. From 2020 through 2024 the pass rate ran between <strong>86% and 93%</strong>. <strong>In 2025, NCC reported a pass rate of 65% on 2,079 candidates</strong> — a 21-point drop from the 86% rate in 2024 (3,098 candidates). NCC has not published an explanation, but the shift is consistent with a revised exam form or passing point coming online.",
      "Practical implication: candidates testing in 2026 windows should treat historical 86–93% headline rates with skepticism and over-prepare relative to advice tuned to those years. NCC uses <strong>item response theory (Rasch) scoring</strong> with equating across exam forms, so there is no fixed percentage cutoff and no released raw score — pass/fail is determined against an ability criterion set by the Content Team.",
    ],
    rows: [
      { year: "2020", pct: 90 },
      { year: "2021", pct: 93 },
      { year: "2022", pct: 87 },
      { year: "2023", pct: 90 },
      { year: "2024", pct: 86 },
      { year: "2025", pct: 65 },
    ],
    target: 80,
    footnote:
      "All figures from NCC's public Statistics page (INPT rows). Candidate totals: 2,257 (2020); 1,963 (2021); 2,424 (2022); 1,546 (2023); 3,098 (2024); 2,079 (2025). Source: nccwebsite.org/certification-exams/other-helpful-information/statistics, accessed 2026-05-19.",
    factBox: {
      tone: "warn",
      title: "The 2025 drop is real — adjust your study plan",
      html:
        "Historical pass-rate aggregators (IntelyCare, Vivian Health, prep vendors) still quote RNC-OB at <strong>87% to 93%</strong>. Those numbers are stale. The 2025 data point from NCC's own Statistics page is <strong>65%</strong>. If you are sitting in a 2026 window, build a 10-week study plan, complete at least one full-length timed practice exam, and lean on AWHONN <em>Perinatal Nursing</em> and the 2026 NCC Candidate Guide as primary references — not on third-party summaries written for the older exam form.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 10-week RNC-OB study plan",
    prose: [
      "A structured 10-week plan suits most inpatient OB RNs with 24 or more months of practice — roughly <strong>70 to 100 total study hours</strong> across the five blueprint domains. Question-bank volume ramps from week 2, peaks in week 9 with one full-length 175-item timed exam, and week 10 is for targeted review and logistics. Target <strong>600 to 1,000 practice items</strong> total before test day.",
    ],
    weeks: [
      { n: 1, focus: "Read NCC 2026 Inpatient OB Candidate Guide + baseline diagnostic", qs: 25 },
      { n: 2, focus: "Labor and birth I — stages of labor, physiology, normal labor management", qs: 60 },
      { n: 3, focus: "Labor and birth II — induction, augmentation, pain management, cesarean", qs: 60 },
      { n: 4, focus: "Pregnancy complications I — hypertensive disorders, diabetes, hematologic", qs: 60 },
      { n: 5, focus: "Pregnancy complications II — placental disorders, preterm labor, infections", qs: 60 },
      { n: 6, focus: "Fetal assessment — NICHD EFM categories, antenatal testing, acid-base", qs: 60 },
      { n: 7, focus: "Recovery / postpartum — hemorrhage (4 Ts), complications, lactation", qs: 60 },
      { n: 8, focus: "Newborn care — transition, resuscitation, hyperbilirubinemia, IDM", qs: 60 },
      { n: 9, focus: "Full-length timed practice (175 items in 3 hours) + error-log review", qs: 175 },
      { n: 10, focus: "Targeted review of weak domains, rest, logistics, test day", qs: 40 },
    ],
    tipsHeading: "How RNC-OB candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Treat NICHD EFM as a graded subject, not background noise",
        text:
          "Fetal Assessment is 17% of scored items. NICHD Category I/II/III patterns, baseline variability, accelerations, decelerations, intrauterine resuscitation steps, and sinusoidal pattern recognition appear on most candidates' exams. Work through the AWHONN Fetal Heart Monitoring Principles and Practices book and at least 100 dedicated EFM strip questions.",
      },
      {
        kicker: "Drill postpartum hemorrhage cold",
        text:
          "Recovery/Postpartum is 16% of the exam. PPH content is densely tested — know the 4 Ts (tone, tissue, trauma, traction), uterotonic order of escalation, tranexamic acid use, massive transfusion protocol thresholds, and Rh immune globulin indications. Candidates lose points when stems shift between primary vs secondary PPH framing.",
      },
      {
        kicker: "Pace 175 items in 3 hours",
        text:
          "Pacing is a trained skill — you have just over one minute per item. Take at least one full-length timed practice exam under real conditions before test day. NCC delivers the exam in a single block; fatigue in the last 40 items is where unprepared candidates lose the most points.",
      },
      {
        kicker: "Memorize magnesium sulfate management",
        text:
          "Magnesium sulfate appears across hypertensive disorders, preterm labor (fetal neuroprotection), and intrapartum complications. Know loading dose (4–6 g over 20–30 min IV), maintenance (1–2 g/hr), therapeutic range (4–7 mEq/L), toxicity signs (loss of DTRs, respiratory depression), and the calcium gluconate reversal dose. Scenario items will trade one variable to test recognition.",
      },
      {
        kicker: "Don't skip Professional Practice Issues",
        text:
          "Professional Practice is only 3% of scored items but it includes Perinatal Core Measures, Maternal Safety Bundles, consent and documentation, and ethics frameworks (autonomy, beneficence, nonmaleficence, justice). Quick to study — easy points to give away if you skip them.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (NCC three-option format)
  sample: {
    heading: "Sample RNC-OB question",
    prose: [
      "This item mirrors NCC's published three-option format: a short clinical stem and three answer choices — one correct, two distractors. Try it before reading the rationale.",
    ],
    q: {
      scenario:
        "A 32-year-old G2P1 at 38 weeks gestation is admitted in active labor. The labor RN observes a fetal heart-rate baseline of 120 with minimal variability, recurrent late decelerations across the last three contractions, and uterine activity of five contractions in ten minutes lasting 50–70 seconds each. The patient is lying supine and has been pushing without progress for the past 30 minutes.",
      stem: "Which nursing action should the inpatient OB RN prioritize next?",
      options: [
        "Continue coached pushing and reassess fetal heart-rate tracing after the next contraction.",
        "Document the strip pattern and notify the provider at the end of the second stage.",
        "Reposition the patient to left lateral, administer an IV fluid bolus, and apply supplemental oxygen by non-rebreather while notifying the provider.",
      ],
      correct: 2,
      rationale:
        "The tracing is Category II (minimal variability with recurrent late decelerations) which calls for immediate intrauterine resuscitation. Repositioning to left lateral improves uteroplacental perfusion, an IV crystalloid bolus addresses maternal hypotension, and supplemental oxygen — when used as part of a bundled resuscitation response — supports fetal oxygenation. Provider notification is concurrent, not deferred. Continued pushing in the face of recurrent late decelerations risks fetal acidemia. Deferred documentation alone does not address an evolving Category II tracing.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key RNC-OB terms every candidate should know",
    prose: [
      "These terms surface in most RNC-OB exam items. Review them until the definitions feel automatic — scenario stems often hinge on whether the candidate can name which framework applies (Category I vs II vs III, primary vs secondary PPH, preeclampsia with severe features vs HELLP, late vs variable decelerations).",
    ],
    rows: [
      { term: "NICHD Categories (I / II / III)", defn: "Standardized fetal heart-rate tracing categories. Category I is normal; Category II is indeterminate and most common; Category III (recurrent late decelerations with absent variability, or sinusoidal pattern) is abnormal and requires immediate intervention.", domain: "Fetal Assessment" },
      { term: "Intrauterine resuscitation", defn: "Bundled steps to improve fetal oxygenation during a Category II/III tracing: reposition to left lateral, IV fluid bolus, reduce or stop oxytocin, address maternal hypotension, consider supplemental oxygen, notify provider.", domain: "Fetal Assessment" },
      { term: "4 Ts of postpartum hemorrhage", defn: "Tone (uterine atony — most common), Tissue (retained products), Trauma (lacerations, hematomas), and Traction (uterine inversion). Framework guides differential and management.", domain: "Recovery/Postpartum" },
      { term: "Magnesium sulfate (OB use)", defn: "Used for seizure prophylaxis in preeclampsia/eclampsia and fetal neuroprotection in preterm labor. Loading 4–6 g IV over 20–30 min, maintenance 1–2 g/hr. Therapeutic 4–7 mEq/L. Toxicity: loss of DTRs, respiratory depression; reverse with calcium gluconate 1 g IV.", domain: "Pregnancy Complications" },
      { term: "HELLP syndrome", defn: "Severe variant of preeclampsia: Hemolysis, Elevated Liver enzymes, Low Platelets. Often presents with right-upper-quadrant or epigastric pain and may occur with normal blood pressure.", domain: "Pregnancy Complications" },
      { term: "Bishop score", defn: "Cervical readiness score (dilation, effacement, station, consistency, position). A score of 8 or higher predicts a successful induction; lower scores suggest cervical ripening before oxytocin.", domain: "Labor and Birth" },
      { term: "TOLAC / VBAC", defn: "Trial of Labor After Cesarean / Vaginal Birth After Cesarean. Candidacy depends on prior incision type, interpregnancy interval, and absence of contraindications. Continuous EFM is standard during a TOLAC.", domain: "Labor and Birth" },
      { term: "Apgar score", defn: "0–10 newborn-assessment score at 1 and 5 minutes (Appearance, Pulse, Grimace, Activity, Respirations). Does not by itself diagnose perinatal asphyxia but guides immediate care decisions.", domain: "Newborn" },
      { term: "Rh immune globulin (RhIG)", defn: "Anti-D immunoglobulin given to Rh-negative pregnant patients at 28 weeks and within 72 hours after delivery of an Rh-positive newborn to prevent alloimmunization in future pregnancies.", domain: "Recovery/Postpartum" },
      { term: "Placenta accreta spectrum (PAS)", defn: "Abnormal placental adherence (accreta), invasion (increta), or penetration through the uterine wall (percreta). Major risk factor for catastrophic PPH; delivery is typically planned at a tertiary center.", domain: "Pregnancy Complications" },
      { term: "Perinatal Core Measures", defn: "Joint Commission measures tracking inpatient OB quality: elective delivery prior to 39 weeks (PC-01), cesarean birth rate in low-risk first births (PC-02), antenatal steroids (PC-03), exclusive breast milk feeding (PC-05), and unexpected newborn complications (PC-06).", domain: "Professional Practice" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "RNC-OB vs. RNC-MNN, C-EFM, OBE, WHNP-BC",
    prose: [
      "RNC-OB sits alongside several adjacent NCC credentials. Many candidates Google \"RNC-OB\" when they actually need a different NCC core or subspecialty, so the distinction matters before paying the $325 application fee.",
    ],
    rows: [
      { row: "RNC-OB", highlight: true, body: "NCC", scope: "Full inpatient OB continuum from 20 weeks through discharge — including L&D", who: "L&D, antepartum, postpartum, OB triage RNs" },
      { row: "RNC-MNN", body: "NCC", scope: "Level I postpartum and well-newborn (mother-baby)", who: "Postpartum / mother-baby RNs" },
      { row: "RNC-LRN", body: "NCC", scope: "Low-risk neonatal nursing (well-newborn nursery)", who: "Newborn nursery RNs" },
      { row: "C-EFM", body: "NCC", scope: "Electronic fetal monitoring subspecialty (add-on, not standalone)", who: "L&D RNs, providers, perinatal educators" },
      { row: "OBE (Obstetric Emergencies)", body: "NCC", scope: "New OB emergencies subspecialty (launched 2025)", who: "OB rapid-response and emergency-team RNs" },
      { row: "WHNP-BC", body: "NCC", scope: "Women's Health Nurse Practitioner — APRN role", who: "APRNs in women's health" },
      { row: "CNM", body: "AMCB", scope: "Certified Nurse-Midwife — APRN-level midwifery (different certifier)", who: "APRN midwives" },
    ],
    closingProse:
      "<strong>Take RNC-OB if most of your hours are in L&D, antepartum, or full-scope inpatient OB.</strong> Move to RNC-MNN if your day is almost entirely postpartum or mother-baby. Stack C-EFM on top of RNC-OB if you spend significant time at the monitor strip — many L&D RNs hold both. OBE is the new 2025 option for emergency-team focus. WHNP-BC and CNM are APRN credentials with different educational paths.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about RNC-OB certification",
    items: [
      { q: "What does RNC-OB stand for in nursing?", a: "RNC-OB stands for Registered Nurse Certified - Inpatient Obstetric Nursing. The credential is issued by the National Certification Corporation (NCC) and is the RN-level board certification for inpatient obstetric nursing across antepartum, intrapartum, postpartum, and normal newborn care." },
      { q: "Who issues the RNC-OB certification?", a: "The National Certification Corporation (NCC) issues RNC-OB. NCC is an NCCA-accredited certifier headquartered in Chicago that also issues RNC-MNN, RNC-LRN, WHNP-BC, and the obstetric and neonatal subspecialty exams including C-EFM and OBE." },
      { q: "What are the eligibility requirements for the RNC-OB exam?", a: "Candidates need a current, active, unencumbered RN license in the U.S. or Canada, 24 months of specialty experience in inpatient obstetric nursing, and a minimum of 2,000 hours of specialty practice. Both criteria must be met and you must have worked in the specialty within the past 24 months. NCC does not waive these requirements." },
      { q: "How much does the RNC-OB exam cost?", a: "NCC charges $325 total for the RNC-OB exam — a $50 non-refundable application fee plus a $275 testing fee. The same rate applies to both PSI/AMP test-center and Live Remote Proctoring (LRP) formats. Retakes pay the full $325." },
      { q: "How long is the RNC-OB exam?", a: "The RNC-OB exam contains 175 multiple-choice items — 150 scored plus 25 unscored pretest items — and runs three hours in a single block. PSI/AMP delivers the exam at computer test centers and via Live Remote Proctoring." },
      { q: "What is the RNC-OB pass rate?", a: "NCC reported a 65% pass rate in 2025 (2,079 candidates), down from 86% in 2024 (3,098 candidates). From 2020 through 2024 the pass rate ran between 86% and 93%. The 2025 drop is consistent with a revised exam form or passing point — candidates testing in 2026 windows should over-prepare relative to historical advice." },
      { q: "How is the RNC-OB exam scored?", a: "NCC uses item response theory (Rasch analysis) with equating across exam forms. There is no fixed percentage cutoff and no released raw score. Pass/fail is based on an ability score against a predetermined criterion set by the Content Team. Test reports include word descriptors (very weak, weak, average, strong, very strong) for each content area." },
      { q: "What happens if I fail the RNC-OB exam?", a: "Candidates who do not pass must wait 45 days before reapplying and pay the full $325 fee for each retake. The maximum number of attempts at the same NCC exam is two per calendar year. There is no fee discount on a retake." },
      { q: "Does RNC-OB certification expire?", a: "Yes. RNC-OB is valid for three years. Renewal runs through NCC's Continuing Competency Assessment (CCA), which generates a personalized Education Plan listing the CE hours needed in defined areas. CE must be earned after the CCA and aligned to the plan. Lapsed credentials require re-examination." },
      { q: "Is RNC-OB recognized in Canada?", a: "Yes. NCC accepts active, unencumbered Canadian RN licensure on equal terms with U.S. RN licensure for RNC-OB eligibility. Specialty experience in Canadian inpatient OB settings counts toward the 24-month and 2,000-hour requirements." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following primary sources. Fees, blueprint weights, and recertification rules shift on NCC's revision cycle — always verify numeric facts against the current NCC Inpatient Obstetric Nursing Candidate Guide before relying on them for application decisions.",
    ],
    list: [
      "National Certification Corporation (NCC) — Inpatient Obstetric Nursing exam detail page (eligibility, $325 fee, 90-day window, scheduling rules) — nccwebsite.org/certification-exams/details/2/inpatient-obstetric-nursing",
      "NCC 2026 Candidate Guide — Inpatient Obstetric Nursing (RNC-OB®) PDF (fees, 175-item / 150-scored format, 5-domain blueprint with 28/17/36/16/3 weights, sample questions, study resources) — nccwebsite.org/content/documents/cms/inpt-candidate_guide.pdf",
      "NCC CORE RNC Examination Registration Catalog (PDF) — nccwebsite.org/content/documents/cms/exam-core.pdf",
      "NCC Statistics — INPT pass-rate history 2016–2025 (90%, 93%, 87%, 90%, 86%, 65%) — nccwebsite.org/certification-exams/other-helpful-information/statistics",
      "NCC Exam Fees and Eligibility — nccwebsite.org/certification-exams/exam-fees-and-eligibility",
      "NCC Live Remote Proctoring program — nccwebsite.org/certification-exams/testing-with-live-remote-proctoring",
      "NCC Continuing Competency Assessment (CCA) and Education Plan resources — nccwebsite.org/maintain-your-certification",
      "U.S. Bureau of Labor Statistics — Registered Nurses Occupational Outlook Handbook (May 2024): $93,600 median RN wage; 5% projected RN growth 2024–2034 — bls.gov/ooh/healthcare/registered-nurses.htm",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice RNC-OB-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to NCC's five-domain 2026 blueprint. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full RNC-OB question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "RNC-MNN",
      title: "RNC-OB vs RNC-MNN: which NCC core credential fits your unit?",
      blurb: "Eligibility differences, blueprint overlap, and which credential L&D vs mother-baby RNs should sit first.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "NICHD EFM: the 17% of RNC-OB where bedside L&D RNs lose points",
      blurb: "Why Category I/II/III interpretation, intrauterine resuscitation, and acid-base content decide more first-time outcomes than candidates expect.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "L&D career",
      title: "Landing a high-risk L&D role with RNC-OB on your badge",
      blurb: "How tertiary perinatal centers use RNC-OB-holder counts in Magnet and Joint Commission perinatal-core-measure reporting.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
