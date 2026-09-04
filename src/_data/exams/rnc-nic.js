// RNC-NIC exam detail page — structured data.
// Sourced from Content/RNC-NIC_research.json (verified against the NCC 2026
// Neonatal Intensive Care Nursing Candidate Guide, the NCC RNC-NIC exam detail
// page, the NCC Exam Fees and Eligibility page, the NCC public Statistics page
// covering 2016–2025 pass rates, AACN CCRN (Neonatal) pages, and BLS OOH
// May 2024 primary sources as of the 2026-09 cycle).
// Lives at /certifications/rnc-nic/ via the paginated template.

module.exports = {
  code: "RNC-NIC",
  name: "RN Certified in Neonatal Intensive Care Nursing",
  body: "NCC",
  cat: "womens",
  catLabel: "Women’s & Infant Health",
  updated: "2026-09",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title:
      "RNC-NIC Certification Guide: Eligibility, Exam & Renewal | NursPrep",
    description:
      "What NICU nurses need on RNC-NIC in 2026 — NCC eligibility (24 mo / 2,000 hrs), the five-domain blueprint, $325 fee, 68% 2025 pass rate, and 3-year CCA renewal.",
    ogTitle:
      "RNC-NIC Certification Guide 2026 — Neonatal Intensive Care Nursing",
    ogDescription:
      "NCC eligibility, the 2026 five-domain blueprint, $325 fee, 68% pass rate, and a 10-week study plan for NICU RNs.",
  },

  // ---- HERO
  lede:
    "RNC-NIC is the RN-level core board certification for neonatal intensive care nursing in the United States and Canada. The credential comes from the <strong>National Certification Corporation (NCC)</strong> and tests care of <strong>acutely and critically ill neonates and their families within an intensive care environment</strong> — the tier of practice above the special-care and step-down units that NCC assigns to its RNC-LRN exam.",
  heroPills: [
    { k: "Questions", v: "175 items" },
    { k: "Duration", v: "3 hours" },
    { k: "Renewal", v: "3 years" },
    { k: "Pass rate", v: "68% (2025)" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "National Certification Corporation (NCC)" },
    { k: "Format", v: "PSI/AMP test centers + Live Remote Proctoring (LRP)" },
    { k: "Scored items", v: "150 of 175 (25 unscored pretest)" },
    { k: "Answer options", v: "Three per item — one correct, two distractors" },
    { k: "Scoring", v: "Criterion-referenced — Rasch / item response theory" },
    { k: "Eligibility", v: "Active RN license + 24 mo specialty + 2,000 hrs" },
    { k: "Patient focus", v: "Acutely and critically ill neonates in intensive care" },
    { k: "Fee", v: "$325 total ($50 application + $275 testing)" },
    { k: "Renewal cycle", v: "3 years — CCA-driven Education Plan" },
  ],
  heroCardFoot:
    "Verified against NCC's 2026 Neonatal Intensive Care Nursing Candidate Guide and the NCC public Statistics page (2016–2025)",

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
    { id: "compare", label: "RNC-NIC vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "RNC-NIC certification at a glance",
    prose: [
      "RNC-NIC stands for Registered Nurse Certified in Neonatal Intensive Care Nursing, and it is the NICU bedside nurse's core board credential. The <strong>National Certification Corporation (NCC)</strong> — the Chicago certifier behind RNC-OB, RNC-MNN, RNC-LRN, NNP-BC, and the neonatal subspecialty exams — writes the exam as a competency-based test of specialty knowledge for RNs with at least two years of experience caring for acutely and critically ill neonates and their families inside an intensive care environment.",
      "That scope statement is what separates RNC-NIC from its neighbours. NCC assigns level II, chronic care, special care, and step-down units to <strong>RNC-LRN</strong>; birth-to-six-weeks care of the childbearing family to <strong>RNC-MNN</strong>; and the pregnant patient after 20 weeks through discharge to <strong>RNC-OB</strong>. RNC-NIC covers the neonate whose problem is severe enough to need intensive care, which in practice means a level III or level IV NICU, plus neonatal ECMO, cardiac, and surgical populations. NCC delivers the exam through <strong>PSI/AMP</strong> test centers and by <strong>Live Remote Proctoring (LRP)</strong>.",
    ],
    stats: [
      { n: "175", l: "Total items", sub: "150 scored · 25 pretest" },
      { n: "3 hrs", l: "Time limit", sub: "Single block, no scheduled break" },
      { n: "68%", l: "2025 pass rate", sub: "1,928 candidates tested" },
      { n: "3 yrs", l: "Renewal cycle", sub: "CCA-driven Education Plan" },
    ],
    factBox: {
      tone: "warn",
      title: "RNC-NIC and CCRN (Neonatal) are two different credentials",
      html:
        "NICU nurses routinely confuse these. <strong>RNC-NIC</strong> is NCC's neonatal core exam: 175 items, 150 scored, three answer options per item, and an eligibility gate of 24 months plus 2,000 lifetime specialty hours. <strong>CCRN (Neonatal)</strong> is the American Association of Critical-Care Nurses' Synergy Model exam: 150 items, 125 scored, and a direct-care hour gate of 1,750 hours across two years with 875 in the most recent year (or 2,000 hours across five years with 144 in the most recent year). Passing one does not earn the other, and many level IV units recognise both.",
    },
    coverImageLabel:
      "NICU nurse titrating ventilator settings at an isolette in a level III unit",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the RNC-NIC exam?",
    prose: [
      "You qualify if you hold a <strong>current, active, unencumbered RN license</strong> in the U.S. or Canada, <em>and</em> you have <strong>24 months of specialty experience</strong> as a U.S. or Canadian RN totalling <strong>at least 2,000 hours</strong>, <em>and</em> you have worked in the specialty sometime in the last 24 months. NCC states the rule plainly: both practice time and hours must be met, and it is not an either/or criterion.",
      "Prep vendors sometimes print the requirement as “two years <em>or</em> 2,000 hours.” That is wrong and it is the most common reason an RNC-NIC application gets bounced. The 2,000 hours are a lifetime figure — you may have banked them at any point in your career — but the 24 months of specialty experience and the recency test are separate hurdles you clear alongside them. Specialty experience counts whether it came from direct patient care, education, administration, or research. NCC applies the same 24-month / 2,000-hour standard to every CORE RNC exam, so what actually decides which exam you are eligible for is the setting your hours came from.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You have at least 24 months and 2,000 hours of NICU practice and have worked in a neonatal intensive care setting within the past 24 months.",
      "You manage ventilated neonates independently — conventional, high-frequency, and non-invasive modes — and can interpret a blood gas against the current ventilator settings without prompting.",
      "You run the Golden Hour for a 24- to 27-week admission: thermoregulation, airway, umbilical lines, surfactant, glucose, and early antibiotics.",
      "You titrate total parenteral nutrition and calculate a glucose infusion rate, and you recognise the feeding-intolerance pattern that precedes necrotizing enterocolitis.",
      "You care for neonates on therapeutic hypothermia, inhaled nitric oxide, or ECMO, or you support families through neonatal palliative care and end-of-life decisions.",
      "Your unit sits at level III or level IV — if most of your hours are in a level II, special care, or step-down nursery, RNC-LRN is the exam NCC scopes to that work.",
    ],
  },

  // ---- BLUEPRINT (weights from the 2026 NCC NIC Candidate Guide content outline)
  blueprint: {
    heading: "RNC-NIC exam blueprint — five domains (2026 outline)",
    prose: [
      "The RNC-NIC blueprint is five domains, and two of them decide the exam. <strong>Assess & Manage Pathophysiologic States</strong> (44%) and <strong>General Management</strong> (39%) together carry 83% of the questions. <strong>General Assessment</strong> adds 9%, <strong>Psychosocial Support</strong> 5%, and <strong>Professional Issues</strong> 3%.",
      "Pathophysiologic States is organised by body system: cardiovascular, respiratory, gastrointestinal and genitourinary, hematopoietic, neurological/neuromuscular/musculoskeletal, genetic/metabolic/endocrine, head, eyes, ears, nose and throat, and infection and immunology. General Management is organised by intervention: resuscitation and stabilization, fluids, electrolytes and glucose homeostasis, nutrition and feeding, oxygenation, ventilation and acid-base homeostasis, thermoregulation and integumentary care, pharmacology and pharmacokinetics, and neuroprotective and neurodevelopmental care.",
      "Two habits cost candidates points here. The first is treating the small domains as skippable — Psychosocial Support and Professional Issues are reported as a single 8% band on your score report, which is enough to move a borderline result. The second is studying only the diagnoses your own unit sees. Genetic and metabolic disorders, HEENT, and hematopoietic content appear on the exam whether or not your NICU admits those babies.",
    ],
    domains: [
      { label: "Assess & Manage Pathophysiologic States (by body system)", weight: 44 },
      { label: "General Management (resuscitation, fluids, nutrition, ventilation, thermoregulation, pharmacology, neuroprotection)", weight: 39 },
      { label: "General Assessment (antepartum risk factors, birth history, physical and gestational age assessment)", weight: 9 },
      { label: "Psychosocial Support (discharge, family-centered care, grieving, palliative care, mental health)", weight: 5 },
      { label: "Professional Issues (evidence-based practice, legal/ethical, patient safety, quality improvement)", weight: 3 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and testing logistics",
    prose: [
      "RNC-NIC costs <strong>$325</strong>, and NCC has no application deadlines — you apply whenever you are ready. The fee splits into a <strong>$50 non-refundable application submission cost</strong> and a <strong>$275 testing fee</strong>, and it is the same whether you sit at a PSI/AMP test center or test from home under Live Remote Proctoring. Applications take <strong>1 to 14 days</strong> to review. Once NCC confirms eligibility you are placed in the next available <strong>90-day testing window</strong>, and PSI needs at least four business days between booking and your test date.",
      "There are no fixed sittings. LRP appointments run 24 hours a day; test-center appointments run Monday through Saturday, occasionally Sunday, at 9:00 am and 1:30 pm across more than 100 AMP Assessment Centers. Results are never released at the testing station — pass/fail lands in your NCC account within 15 business days, with the score report about 24 hours behind it, and up to 21 business days when a new exam form or test grid is in play.",
    ],
    rows: [
      { k: "Total exam fee (Test Center or LRP)", v: "$325", highlight: true },
      { k: "→ Non-refundable application submission cost", v: "$50" },
      { k: "→ Testing fee", v: "$275" },
      { k: "Self-service cancellation after purchase", v: "6-hour window" },
      { k: "Incomplete application reprocessing", v: "$30" },
      { k: "Change request (window, method, or category)", v: "$125" },
      { k: "Withdrawal partial refund", v: "$160 returned of $325" },
      { k: "Hand-score request", v: "$55" },
      { k: "Retake fee", v: "Full $325 — no discount" },
    ],
    factBox: {
      tone: "success",
      title: "Book inside the first 30 days of your window",
      html:
        "NCC requires exams to be <strong>scheduled within the first 30 days of the 90-day eligibility window</strong>. Wait longer and the nearby seats may be gone, which leaves you travelling to another site or paying <strong>$125</strong> to move your window. Have your RN license number, licensing state or province, expiration date, and hours documentation ready before you submit — an incomplete application triggers a <strong>$30</strong> reprocessing fee and is marked ineligible if you do not fix it within 14 days. Many children's hospitals and level III/IV NICUs reimburse the $325 through a clinical-ladder or specialty-recognition benefit, so ask your educator before paying out of pocket.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "RNC-NIC lasts <strong>three years</strong> and renews through NCC's <strong>Continuing Competency Assessment (CCA)</strong> rather than a flat continuing-education total. At the start of each cycle you take the CCA, an online competency assessment, and it generates a personalized <strong>Education Plan</strong> naming the content areas where you need CE and how much. Two RNC-NIC holders in the same unit can finish the CCA with different requirements — that is the design, not a glitch.",
      "Only CE earned <em>after</em> you take the CCA, and inside the areas the new Education Plan defines, counts toward maintenance. You then submit a maintenance application with the maintenance fee before your maintenance due date, which is the last day your certification is active. NCC audits maintenance applications at random, so keep certificates and course descriptions for the full cycle. Because the requirement is individualised, no honest source can quote you a fixed CE hour count for RNC-NIC — treat any page that does as unreliable.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the RNC-NIC exam?",
    prose: [
      "NCC reported a <strong>68% pass rate on 1,928 RNC-NIC candidates in 2025</strong>, the lowest figure in the ten-year run it publishes. The exam has trended down almost every year: 84% in 2016, 82% in 2018, 80% in 2020, 79% in 2022, 77% in 2023, 76% in 2024, then 68%. Roughly one candidate in three now leaves without the credential.",
      "That puts RNC-NIC below RNC-MNN (86% in 2025) and above RNC-OB (65%) and RNC-LRN (54%) among NCC's core exams. Scoring is criterion-referenced, so the drop is not a curve moving against you: NCC calculates an ability level from the number of items you answer correctly, with no penalty for guessing, and compares it to a standard the Content Team sets from content criticality and past item statistics. Different forms are equated to one scale, so a candidate who draws a harder form needs fewer correct answers to clear the same bar. There is no published percentage cut score and no raw score to chase.",
    ],
    rows: [
      { year: "2016", pct: 84 },
      { year: "2017", pct: 86 },
      { year: "2018", pct: 82 },
      { year: "2020", pct: 80 },
      { year: "2021", pct: 81 },
      { year: "2022", pct: 79 },
      { year: "2023", pct: 77 },
      { year: "2024", pct: 76 },
      { year: "2025", pct: 68 },
    ],
    target: 80,
    footnote:
      "All figures from NCC's public Statistics page (NIC rows). Candidates tested: 1,502 (2016); 1,481 (2017); 1,848 (2018); 1,696 (2020); 1,528 (2021); 1,997 (2022); 1,058 (2023); 2,470 (2024); 1,928 (2025). NCC's table has no 2019 row for any exam. Source: nccwebsite.org/certification-exams/other-helpful-information/statistics, accessed 2026-09-04.",
    factBox: {
      tone: "warn",
      title: "Ignore the 93% figure floating around review-course pages",
      html:
        "Several prep vendors advertise a <strong>93% pass rate</strong> for RNC-NIC. NCC's own statistics page has never published a NIC pass rate that high in any year from 2016 to 2025. Vendor numbers of that kind describe a course cohort, not the exam. Plan against NCC's <strong>68%</strong> and build a 10-week study block with at least one full-length timed 175-item practice exam in it.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 10-week RNC-NIC study plan",
    prose: [
      "Ten weeks suits most NICU RNs with two or more years at the bedside — roughly <strong>70 to 100 total study hours</strong>, weighted toward the two domains that carry 83% of the exam. Question volume ramps from week 2, peaks in week 9 with a full-length 175-item timed exam under real conditions, and week 10 covers weak areas and logistics. Aim for <strong>600 to 1,000 practice items</strong> before test day.",
    ],
    weeks: [
      { n: 1, focus: "Read the NCC 2026 NIC Candidate Guide outline + baseline diagnostic", qs: 25 },
      { n: 2, focus: "General assessment — antepartum risk factors, birth history, Ballard gestational age scoring", qs: 50 },
      { n: 3, focus: "Resuscitation, stabilization, Golden Hour, thermoregulation and skin integrity", qs: 60 },
      { n: 4, focus: "Oxygenation, ventilation, acid-base — conventional, HFOV, non-invasive, blood-gas interpretation", qs: 60 },
      { n: 5, focus: "Fluids, electrolytes, glucose homeostasis, TPN, feeding advancement, human milk fortification", qs: 60 },
      { n: 6, focus: "Cardiovascular and respiratory pathophysiology — PDA, CHD, PPHN, RDS, BPD, air leaks", qs: 60 },
      { n: 7, focus: "GI/GU, hematopoietic, infection and immunology — NEC, hyperbilirubinemia, sepsis, gastroschisis", qs: 60 },
      { n: 8, focus: "Neurological, genetic, metabolic, endocrine, HEENT — IVH, HIE and cooling, ROP, inborn errors", qs: 60 },
      { n: 9, focus: "Full-length timed practice (175 items in 3 hours) + error-log review", qs: 175 },
      { n: 10, focus: "Neuroprotective care, psychosocial and professional issues, targeted review, test day", qs: 40 },
    ],
    tipsHeading: "How RNC-NIC candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Study the systems your unit does not admit",
        text:
          "Assess & Manage Pathophysiologic States is 44% of the exam and it is written across every body system. If your NICU transfers out cardiac, surgical, or metabolic babies, those items are still on your form. Block dedicated sessions for congenital heart lesions, inborn errors of metabolism, HEENT anomalies, and hematologic disorders using Verklan's Core Curriculum or Avery's Diseases of the Newborn.",
      },
      {
        kicker: "Know the numbers behind the interventions",
        text:
          "General Management is 39% and it rewards precision: glucose infusion rate calculation, surfactant dosing and redosing criteria, therapeutic hypothermia inclusion criteria and rewarming rate, umbilical line tip positions, bilirubin thresholds by hour of life and risk category, and drug half-lives in a preterm liver. Scenario stems change one variable to see whether you recognise the threshold.",
      },
      {
        kicker: "Practise the three-option format before test day",
        text:
          "NCC items give you a stem and three answer choices — one correct, two distractors. That format rewards a different reading habit than the four- and five-option questions most nursing question banks use, because eliminating one weak option leaves you at a coin flip. Read the stem for the time point and the acuity before you look at the options.",
      },
      {
        kicker: "Do not write off the 8% band",
        text:
          "Psychosocial Support and Professional Issues report together as one 8% band. The content is learnable in a couple of evenings: family-centered care, developmental and neuroprotective positioning, grieving and neonatal palliative care, discharge teaching, parental mental health, the four ethical principles, staffing and legal liability, and quality improvement. Candidates who skip it hand back points they could have kept.",
      },
      {
        kicker: "Pace 175 items across 3 hours",
        text:
          "You get just over a minute per item in a single block with no scheduled break. Sit at least one full-length timed practice exam under real conditions. Accuracy on the last 40 items is where unprepared candidates lose the most ground, and it is a trained skill rather than a knowledge gap.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (original item written in NCC's three-option format)
  sample: {
    heading: "Sample RNC-NIC question",
    prose: [
      "This item is written in NCC's published three-option format: a short clinical stem, one correct answer, and two distractors. Work it before you read the rationale.",
    ],
    q: {
      scenario:
        "A term neonate born by emergency cesarean for placental abruption is 8 hours old and intubated on conventional ventilation. Pre-ductal SpO2 reads 95% while post-ductal reads 82%. The infant desaturates to the low 70s with suctioning and repositioning, and recovers slowly. Echocardiography shows suprasystemic pulmonary pressures with right-to-left shunting at the ductus and no structural defect.",
      stem: "Which nursing action should the neonatal intensive care RN prioritize?",
      options: [
        "Increase the suctioning interval to every hour to clear secretions and improve post-ductal saturations.",
        "Cluster care to minimize handling, maintain the ordered sedation and alkalinization plan, and prepare to initiate inhaled nitric oxide.",
        "Hold further intervention and repeat a post-ductal blood gas in four hours to establish a trend.",
      ],
      correct: 1,
      rationale:
        "The pre-ductal to post-ductal split of more than 10 percentage points with right-to-left ductal shunting and no structural lesion is persistent pulmonary hypertension of the newborn. Labile hypoxemia with handling is the hallmark: every stimulus triggers further pulmonary vasoconstriction. Minimal-stimulation care, adequate sedation, and readiness for inhaled nitric oxide address the pulmonary vascular resistance driving the shunt. Hourly suctioning adds the exact stimulus that worsens the spiral. Waiting four hours for a trend delays treatment in an infant already showing suprasystemic pulmonary pressures.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key RNC-NIC terms every candidate should know",
    prose: [
      "These concepts sit under the majority of RNC-NIC items. Review them until the numbers and the grading systems come back without effort — stems frequently hinge on whether you can name the stage, grade, or threshold the scenario describes.",
    ],
    rows: [
      { term: "PPHN", defn: "Persistent pulmonary hypertension of the newborn — sustained high pulmonary vascular resistance causing right-to-left shunting at the ductus or foramen ovale. Suspect it when pre-ductal SpO2 exceeds post-ductal by more than 10 points.", domain: "Pathophysiologic States" },
      { term: "PDA", defn: "Patent ductus arteriosus. Left-to-right shunting presents with bounding pulses, a widened pulse pressure, an active precordium, and rising ventilator requirements. Management ranges from fluid restriction to indomethacin, ibuprofen, acetaminophen, or catheter closure.", domain: "Pathophysiologic States" },
      { term: "Bell staging (NEC)", defn: "Classification of necrotizing enterocolitis. Stage I is suspected disease, Stage II confirmed with pneumatosis intestinalis on radiograph, Stage III advanced with perforation or shock. Feeding intolerance, bloody stools, and abdominal discoloration drive escalation.", domain: "Pathophysiologic States" },
      { term: "Papile grading (IVH)", defn: "Grades I through IV for intraventricular hemorrhage in the preterm brain: germinal matrix only, intraventricular without dilatation, with ventricular dilatation, and with parenchymal involvement. Peak risk is the first 72 hours of life.", domain: "Pathophysiologic States" },
      { term: "Sarnat staging / HIE", defn: "Hypoxic-ischemic encephalopathy graded mild, moderate, or severe by level of consciousness, tone, reflexes, and seizure activity. Moderate-to-severe HIE in an infant 36 weeks or older is the entry criterion for therapeutic hypothermia.", domain: "Pathophysiologic States" },
      { term: "Therapeutic hypothermia", defn: "Whole-body or selective head cooling to a core temperature near 33.5°C for 72 hours, started within 6 hours of birth, followed by controlled rewarming of about 0.5°C per hour. Nursing focus is temperature stability, seizure watch, and coagulation monitoring.", domain: "General Management" },
      { term: "Golden Hour", defn: "The first 60 minutes after a preterm admission, run as a protocolised bundle: thermoregulation, delayed cord clamping where appropriate, airway and surfactant, umbilical line placement, glucose, early antibiotics, and parent contact.", domain: "General Management" },
      { term: "Neutral thermal environment", defn: "The narrow ambient temperature range at which a neonate maintains a normal core temperature with minimal oxygen consumption and metabolic expenditure. Cold stress drives hypoglycemia, acidosis, and increased oxygen demand.", domain: "General Management" },
      { term: "GIR", defn: "Glucose infusion rate in mg/kg/min, calculated from dextrose concentration and total fluid volume. It is the standard way to titrate parenteral glucose in hypoglycemia or hyperglycemia rather than adjusting rate and concentration by eye.", domain: "General Management" },
      { term: "Surfactant replacement", defn: "Exogenous surfactant given for respiratory distress syndrome, delivered by INSURE (intubate-surfactant-extubate) or less invasive administration. Watch for rapid compliance change and adjust ventilator pressures before barotrauma develops.", domain: "General Management" },
      { term: "BPD", defn: "Bronchopulmonary dysplasia — chronic lung disease defined by supplemental oxygen or respiratory support requirement at 36 weeks post-menstrual age. Prevention centers on gentle ventilation, volume targeting, and avoiding hyperoxia.", domain: "Pathophysiologic States" },
      { term: "ROP", defn: "Retinopathy of prematurity, staged 1 through 5 by zone and extent of abnormal retinal vascularization, with plus disease marking activity. Screening is driven by gestational age, birth weight, and oxygen exposure.", domain: "Pathophysiologic States" },
      { term: "New Ballard Score", defn: "Gestational age assessment scoring six neuromuscular and six physical maturity signs, valid from 20 to 44 weeks and most accurate within 12 hours of birth for extremely preterm infants.", domain: "General Assessment" },
      { term: "Neuroprotective care", defn: "Developmentally supportive practice that limits stress on the immature brain: clustered care, positioning and containment, light and noise reduction, non-nutritive sucking, skin-to-skin holding, and pain management.", domain: "General Management" },
      { term: "Family-centered care", defn: "Parents treated as partners in caregiving rather than visitors — participation in rounds, care conferences, skin-to-skin holding, feeding decisions, and discharge planning. It anchors much of the Psychosocial Support domain.", domain: "Psychosocial Support" },
      { term: "Neonatal palliative care", defn: "Comfort-focused care for infants with life-limiting conditions, covering symptom control, redirection-of-care conversations, sibling and grandparent support, bereavement follow-up, and organ or tissue donation discussions.", domain: "Psychosocial Support" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "RNC-NIC vs. CCRN (Neonatal), RNC-LRN, RNC-MNN, and the NCC subspecialties",
    prose: [
      "Neonatal nurses have more credential options than almost any other specialty, and the acronyms sit close enough to cause real mistakes — C-NNIC is one letter from RNC-NIC and appears in the same NCC statistics table. Work out which one matches your patients before you spend $325.",
    ],
    rows: [
      { row: "RNC-NIC", highlight: true, body: "NCC", scope: "Acutely and critically ill neonates in an intensive care environment — level III/IV practice", who: "NICU RNs with 24 months and 2,000 specialty hours" },
      { row: "CCRN (Neonatal)", body: "AACN", scope: "Acutely/critically ill neonatal patients through the AACN Synergy Model; 150 items, 125 scored", who: "NICU, neonatal cardiac, and transport RNs meeting AACN's direct-care hour options" },
      { row: "RNC-LRN", body: "NCC", scope: "Acutely and chronically ill neonates in level II, chronic care, special care, or step-down units", who: "Special-care nursery and step-down RNs" },
      { row: "RNC-MNN", body: "NCC", scope: "The childbearing family from birth to six weeks, hospital or outpatient", who: "Mother-baby and postpartum RNs" },
      { row: "RNC-OB", body: "NCC", scope: "The pregnant patient after 20 weeks of gestation through discharge", who: "L&D, antepartum, and OB triage RNs" },
      { row: "C-ELBW", body: "NCC", scope: "Care of the extremely low birth weight neonate — $210 subspecialty add-on, no hour requirement", who: "NICU clinicians across several disciplines" },
      { row: "C-NNIC", body: "NCC", scope: "Neonatal neuro-intensive care — $210 subspecialty add-on", who: "Neuro-NICU and cooling-program teams" },
      { row: "C-NPT", body: "NCC", scope: "Neonatal pediatric transport — $210 subspecialty add-on", who: "Transport RNs, respiratory therapists, paramedics" },
      { row: "NNP-BC", body: "NCC", scope: "Neonatal Nurse Practitioner — APRN role certification", who: "Graduates of an accredited NNP program" },
    ],
    closingProse:
      "<strong>Take RNC-NIC if your hours come from a level III or level IV NICU and you want the credential NCC built for that setting.</strong> Choose RNC-LRN instead when most of your practice is level II, special care, or step-down. CCRN (Neonatal) validates the same population through a different lens, and plenty of senior NICU nurses hold both — check which one your unit's clinical ladder recognises before deciding the order. C-ELBW, C-NNIC, and C-NPT are $210 add-ons that stack on top of a core credential rather than replacing one, and NNP-BC needs a graduate NNP program behind it.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about RNC-NIC certification",
    items: [
      { q: "What does RNC-NIC stand for in nursing?", a: "RNC-NIC stands for Registered Nurse Certified in Neonatal Intensive Care Nursing. The National Certification Corporation (NCC) issues it as the RN-level core board credential for nurses caring for acutely and critically ill neonates and their families in an intensive care environment." },
      { q: "Who issues the RNC-NIC certification?", a: "The National Certification Corporation (NCC), based in Chicago, issues RNC-NIC. NCC also runs RNC-OB, RNC-MNN, RNC-LRN, the NNP-BC and WHNP-BC nurse practitioner exams, and the neonatal subspecialty exams C-ELBW, C-NNIC, and C-NPT." },
      { q: "What are the eligibility requirements for the RNC-NIC exam?", a: "You need a current, active, unencumbered RN license in the U.S. or Canada, 24 months of specialty experience as a U.S. or Canadian RN totalling at least 2,000 hours, and employment in the specialty sometime in the last 24 months. NCC states that both practice time and hours must be met — it is not an either/or criterion." },
      { q: "How much does the RNC-NIC exam cost?", a: "The exam costs $325, made up of a $50 non-refundable application submission cost and a $275 testing fee. The price is identical for PSI/AMP test centers and Live Remote Proctoring. Retakes pay the full $325 with no discount, and an incomplete application adds a $30 reprocessing fee." },
      { q: "How long is the RNC-NIC exam?", a: "The exam runs three hours and contains 175 multiple-choice items — 150 scored plus 25 unscored pretest items that NCC uses to collect statistics for future forms. Each item has a stem and three answer options, one correct and two distractors." },
      { q: "What is the pass rate for the RNC-NIC exam?", a: "NCC reported 68% on 1,928 candidates in 2025, the lowest in its published series. Earlier years ran 84% (2016), 82% (2018), 80% (2020), 79% (2022), 77% (2023), and 76% (2024). Prep-vendor claims of 93% do not match anything NCC has published." },
      { q: "How is the RNC-NIC exam scored and what is the passing score?", a: "Scoring is criterion-referenced using item response theory (Rasch analysis). NCC calculates an ability level from the number of items you answer correctly, with no penalty for wrong answers, and compares it to a standard set by the Content Team. There is no fixed percentage cut score, and forms of differing difficulty are equated to a common scale." },
      { q: "How do I register for the RNC-NIC certification exam?", a: "Apply online through your NCC account — mailed, faxed, and emailed applications are returned. There are no deadlines. NCC reviews applications in 1 to 14 days, then places eligible candidates in a 90-day window. Schedule your PSI/AMP seat or LRP appointment within the first 30 days of that window." },
      { q: "Is RNC-NIC the same as CCRN Neonatal?", a: "No. RNC-NIC comes from NCC and runs 175 items with a 24-month, 2,000-hour eligibility gate. CCRN (Neonatal) comes from the American Association of Critical-Care Nurses, runs 150 items on the Synergy Model, and asks for 1,750 direct-care hours over two years with 875 in the most recent year, or 2,000 hours over five years with 144 in the most recent year. Each is earned separately." },
      { q: "What happens if I fail the RNC-NIC exam?", a: "You wait 45 days before reapplying and pay the full $325 again. NCC caps attempts at the same exam at two per calendar year. Candidates who do not reach the passing standard receive no refund and no credit toward a later NCC exam, but the score report does show word descriptors by content area to target your next study block." },
      { q: "Does RNC-NIC certification expire?", a: "Yes, after three years. Renewal runs through NCC's Continuing Competency Assessment, which produces a personalized Education Plan listing the CE you need and in which areas. CE only counts if you earn it after taking the CCA. You then file a maintenance application and fee by your maintenance due date, and NCC audits some renewals at random." },
      { q: "What study resources does NCC recommend for the RNC-NIC exam?", a: "NCC's 2026 candidate guide bibliography names Verklan's Core Curriculum for Neonatal Intensive Care Nursing (6th ed.), Gardner's Handbook of Neonatal Intensive Care (9th ed.), Gleason's Avery's Diseases of the Newborn (11th ed.), Fanaroff and Martin's Neonatal-Perinatal Medicine, Yaffe and Aranda's neonatal and pediatric pharmacology, and NCC's own Golden Hours and Neonatal Imaging titles." },
      { q: "Is RNC-NIC recognized in Canada?", a: "Yes. NCC accepts current, active, unencumbered Canadian RN licensure on the same footing as U.S. licensure, and specialty hours earned in Canadian neonatal intensive care units count toward the 24-month and 2,000-hour requirements." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "Every figure on this page traces to a primary source below. NCC revises fees, blueprint weights, and maintenance rules on its own cycle — check the current NCC Neonatal Intensive Care Nursing Candidate Guide before you act on any number here.",
    ],
    list: [
      "National Certification Corporation (NCC) — Neonatal Intensive Care Nursing exam detail page (purpose statement, eligibility, $325 fee, 90-day window, 175/150 item split, 3-hour limit, results timing) — nccwebsite.org/certification-exams/details/5/neonatal-intensive-care-nursing",
      "NCC 2026 Candidate Guide — Neonatal Intensive Care Nursing (RNC-NIC®) PDF (five-domain content outline with 9/39/44/5/3 weights, competency statements, Rasch scoring method, three-option sample questions, study bibliography, maintenance terms) — nccwebsite.org/content/documents/cms/nic-candidate_guide.pdf",
      "NCC Statistics — NIC candidates tested and pass rates 2016–2025 (84%, 86%, 82%, 80%, 81%, 79%, 77%, 76%, 68%) — nccwebsite.org/certification-exams/other-helpful-information/statistics",
      "NCC Exam Fees and Eligibility — $325 core / $210 subspecialty pricing and the shared CORE RNC eligibility rule — nccwebsite.org/certification-exams/exam-fees-and-eligibility",
      "NCC CORE RNC Examination Registration Catalog (PDF) — nccwebsite.org/content/documents/cms/exam-core.pdf",
      "NCC — Low Risk Neonatal Intensive Care Nursing exam purpose statement (level II, chronic care, special care, step-down scope) — nccwebsite.org/certification-exams",
      "NCC Live Remote Proctoring program — nccwebsite.org/certification-exams/testing-with-live-remote-proctoring",
      "NCC Continuing Competency Assessment (CCA) and Education Plan resources — nccwebsite.org/maintain-your-certification",
      "American Association of Critical-Care Nurses (AACN) — CCRN (Neonatal) Direct Care Eligibility Pathway: 1,750/875 and 2,000/144 hour options, $260 member / $375 nonmember fees — aacn.org/certification/get-certified/ccrn-neo",
      "AACN CCRN Exam Handbook, Direct Care Pathway (PDF) — 150 items, 125 scored, 3 hours, Synergy Model 80% Clinical Judgment / 20% Professional Caring and Ethical Practice — aacn.org/certification/preparation-tools-and-handbooks",
      "U.S. Bureau of Labor Statistics — Registered Nurses Occupational Outlook Handbook (May 2024): $93,600 median RN wage; BLS publishes no separate NICU RN occupation code — bls.gov/ooh/healthcare/registered-nurses.htm",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice RNC-NIC-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to NCC's five-domain 2026 blueprint, in the three-option format NCC actually uses. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full RNC-NIC question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "CCRN Neonatal",
      title: "RNC-NIC vs CCRN (Neonatal): which NICU credential should you sit first?",
      blurb: "Eligibility hours, exam length, scoring models, and how level III and IV units treat each one on the clinical ladder.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "The 83%: mastering Pathophysiologic States and General Management",
      blurb: "Why two RNC-NIC domains decide most first-time results, and the body systems NICU nurses skip because their own unit transfers those babies out.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "NICU career",
      title: "What RNC-NIC changes about your NICU role",
      blurb: "How children's hospitals use certified-nurse counts in Magnet reporting, and where the credential shows up in charge, transport, and educator pathways.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
