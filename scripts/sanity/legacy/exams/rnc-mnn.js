// RNC-MNN exam detail page — structured data.
// Sourced from Content/RNC-MNN_research.json (verified against the NCC 2026
// Maternal Newborn Nursing Candidate Guide, the NCC MNN exam detail page, the
// NCC Continuing Competency Assessment brochure, and the NCC public Statistics
// page covering 2016–2025 pass rates, as of the 2026-09 cycle).
// Lives at /certifications/rnc-mnn/ via the paginated template.

module.exports = {
  code: "RNC-MNN",
  name: "RN Certified in Maternal Newborn Nursing",
  body: "NCC",
  cat: "womens",
  catLabel: "Women’s & Infant Health",
  updated: "2026-09",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title:
      "RNC-MNN Certification Guide: Eligibility, Exam & Renewal | NursPrep",
    description:
      "Everything mother-baby nurses need on RNC-MNN in 2026 — NCC eligibility (24 mo / 2,000 hrs), the five-domain blueprint, $325 fee, 86% 2025 pass rate, and 3-year CCA renewal.",
    ogTitle:
      "RNC-MNN Certification Guide 2026 — Maternal Newborn Nursing",
    ogDescription:
      "NCC eligibility, the 2026 five-domain blueprint, $325 fee, 86% 2025 pass rate, and an 8-week study plan for postpartum and mother-baby RNs.",
  },

  // ---- HERO
  lede:
    "RNC-MNN is the RN-level core board certification for maternal newborn nursing in the United States and Canada. The credential is issued by the <strong>National Certification Corporation (NCC)</strong> and tests care of the childbearing family <strong>from birth to six weeks</strong> — the postpartum patient and the newborn together, across hospital and outpatient settings.",
  heroPills: [
    { k: "Questions", v: "175 items" },
    { k: "Duration", v: "3 hours" },
    { k: "Renewal", v: "3 years" },
    { k: "Pass rate", v: "86% (2025)" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "National Certification Corporation (NCC)" },
    { k: "Format", v: "AMP/PSI test centers + Live Remote Proctoring (LRP)" },
    { k: "Scored items", v: "150 of 175 (25 unscored pretest)" },
    { k: "Item style", v: "Three options — one answer, two distractors" },
    { k: "Eligibility", v: "Active RN license + 24 mo specialty + 2,000 hrs" },
    { k: "Scope", v: "Childbearing family, birth through six weeks" },
    { k: "Fee", v: "$325 total ($50 application + $275 testing)" },
    { k: "Renewal cycle", v: "3 years — CCA-driven Education Plan" },
  ],
  heroCardFoot:
    "Verified against NCC’s 2026 Maternal Newborn Nursing Candidate Guide and the NCC public Statistics page (2016–2025)",

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
    { id: "compare", label: "RNC-MNN vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "What RNC-MNN certification means in nursing",
    prose: [
      "RNC-MNN stands for Registered Nurse Certified – Maternal Newborn Nursing, and it is the credential NCC awards to RNs who pass the Maternal Newborn Nursing core exam. The <strong>National Certification Corporation (NCC)</strong> — a Chicago-based certifier whose core and subspecialty programs are accredited by the National Commission for Certifying Agencies (NCCA) — also issues RNC-OB, RNC-NIC, RNC-LRN, WHNP-BC, and the obstetric and neonatal subspecialty exams.",
      "The scope is what separates this credential from its neighbours. NCC defines the MNN exam as testing care of the childbearing family <strong>from birth to six weeks</strong>, in hospital and outpatient settings. Mother and baby are graded on the same exam: maternal postpartum content carries 51% of the items and newborn content carries 42%.",
      "Certification is voluntary and separate from licensure. NCC says so directly — its certification carries no licensing authority, and the right to practise is regulated by state boards of nursing such as the California Board of Registered Nursing and the Florida Board of Nursing. Employers, not regulators, are what give RNC-MNN its weight.",
    ],
    stats: [
      { n: "175", l: "Total items", sub: "150 scored · 25 pretest" },
      { n: "3 hrs", l: "Time limit", sub: "Single block, no scheduled break" },
      { n: "86%", l: "2025 pass rate", sub: "1,656 candidates tested" },
      { n: "3 yrs", l: "Renewal cycle", sub: "CCA-driven Education Plan" },
    ],
    factBox: {
      tone: "success",
      title: "The most forgiving of NCC’s core RNC exams in 2025",
      html:
        "NCC’s Statistics page reports 2025 pass rates of <strong>86% for Maternal Newborn Nursing</strong>, 68% for Neonatal Intensive Care (RNC-NIC), 68% for Inpatient Antepartum (RNC-IAP), 65% for Inpatient Obstetric (RNC-OB), and 54% for Low Risk Neonatal (RNC-LRN). MNN has held 84% or better in every year NCC has published since 2016. Treat that as encouragement, not as permission to skip the blueprint — the same year that RNC-OB fell 21 points shows how quickly a new exam form can move a number.",
    },
    coverImageLabel:
      "Mother-baby RN assessing a postpartum fundus while the newborn feeds skin-to-skin",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the RNC-MNN exam?",
    prose: [
      "You are eligible if you hold a <strong>current, active, unencumbered RN license</strong> in the U.S. or Canada, <em>and</em> you have <strong>24 months of specialty experience</strong> in maternal newborn nursing built on a <strong>minimum of 2,000 specialty hours</strong>. NCC is explicit that both criteria must be met — this is not an either/or rule.",
      "Two details trip candidates up. The 2,000 hours may have been accumulated at any point in your career, so early mother-baby years still count. But you must <em>also</em> have been employed in the specialty sometime in the last 24 months, so a nurse who left postpartum practice five years ago no longer qualifies on career hours alone. Specialty experience may be direct patient care, education, administration, or research.",
      "There is no degree requirement beyond RN licensure, no minimum GPA, and no employer sign-off gate. NCC verifies licensure from documentation you upload with the application, and an incomplete application costs $30 to reprocess.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You have at least 24 months in postpartum, mother-baby, couplet care, or newborn nursery practice, with 2,000 or more specialty hours logged and recent employment in the specialty.",
      "You assess fundus, lochia, perineum, and bladder as a single sequence and can tell atony from a full bladder before you reach for a uterotonic.",
      "You can grade a latch, troubleshoot engorgement and nipple trauma, and name the contraindications to breastfeeding without looking them up.",
      "You are comfortable with newborn transition — thermoregulation, glucose screening in the infant of a diabetic mother, bilirubin risk plotting, and the CCHD and metabolic screens your unit runs before discharge.",
      "You hold current Neonatal Resuscitation Program (NRP) provider status and have run the first minutes of a delivery-room or couplet-room resuscitation.",
      "You teach post-birth warning signs at discharge and can recognise postpartum preeclampsia, endometritis, and a perinatal mood or anxiety disorder in a patient who is already home.",
    ],
  },

  // ---- BLUEPRINT (weights from the 2026 NCC MNN Candidate Guide)
  blueprint: {
    heading: "What does the RNC-MNN exam cover?",
    prose: [
      "The 2026 blueprint is five content categories. <strong>Maternal Postpartum Assessment, Management, and Education</strong> (26%) and <strong>Maternal Postpartum Complications</strong> (25%) together carry just over half the exam; <strong>Newborn Complications</strong> (22%) and <strong>Newborn Assessment and Management</strong> (20%) carry another 42%. <strong>Pregnancy, Birth Risk Factors and Complications</strong> is the smallest category at 7%.",
      "That 7% is the section candidates misread. It is not a labour-and-delivery domain — it asks how antenatal and intrapartum events (gestational diabetes, preeclampsia, shoulder dystocia, chorioamnionitis, operative delivery, meconium) shape the couplet you receive afterwards. If you are studying fetal monitoring strips for this exam, you are studying for RNC-OB.",
      "Lactation sits inside the largest category rather than standing alone, which understates how much of it appears. NCC's outline puts anatomy and physiology of lactation, latch, feeding cues, milk supply, mastitis, storage, and formula composition under Maternal Postpartum Assessment, Management, and Education alongside physiologic changes, medications, and psychosocial and ethical issues.",
      "NCC notes that the percentages represent a range of items per area and may total slightly more or less than 100. The sample score report merges the 7% and 25% categories into one 32% feedback line, so your results letter shows four content rows, not five.",
    ],
    domains: [
      { label: "Maternal Postpartum Assessment, Management, and Education (physiologic changes, nursing care, psychosocial and ethical issues, lactation and feeding)", weight: 26 },
      { label: "Maternal Postpartum Complications (hematologic, cardiopulmonary, infection, diabetes, psychological conditions and substance use)", weight: 25 },
      { label: "Newborn Complications (cardiorespiratory, neuro and GI, hematologic, infectious disease, genetic/metabolic/endocrine)", weight: 22 },
      { label: "Newborn Assessment and Management (transition, gestational age and physical assessment, care and family education, resuscitation)", weight: 20 },
      { label: "Pregnancy, Birth Risk Factors and Complications (antenatal and intrapartum factors)", weight: 7 },
    ],
  },

  // ---- COST
  cost: {
    heading: "What does RNC-MNN cost, and when can I test?",
    prose: [
      "The exam costs <strong>$325</strong> — a $50 non-refundable application fee plus a $275 testing fee — at the same price whether you sit at an AMP/PSI test center or take the exam through <strong>Live Remote Proctoring (LRP)</strong> from home. There are <strong>no application deadlines and no fixed testing windows</strong>: apply whenever you are ready, and NCC takes 1 to 14 days to review.",
      "Once NCC confirms eligibility you are placed in the next available <strong>90-day window</strong>, and you must book your appointment inside the <strong>first 30 days</strong> of it. Test-center seats run Monday through Saturday at 9:00 am and 1:30 pm across more than 100 AMP assessment centers; LRP appointments are available around the clock. Scheduling requires at least four business days of lead time.",
      "Nothing is scored at the test site. Pass/fail lands in your NCC account within 15 business days, with the content-area score report a day later — longer when NCC is running a new exam form.",
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
      { k: "Maintenance fee (CCA pathway)", v: "$100 — as low as $60 with NCC CE" },
      { k: "Maintenance fee (alternative pathway)", v: "$175" },
    ],
    factBox: {
      tone: "info",
      title: "You get six hours to change your mind, then it costs money",
      html:
        "An application can be cancelled outright from your NCC account for <strong>six hours</strong> after you submit it. After that, backing out means a withdrawal request that returns <strong>$160 of the $325</strong>, or a <strong>$125</strong> change request to move to a later window. Moving your date or switching between test center and LRP <em>inside</em> your original 90-day window is free. Many hospitals reimburse the $325 through a clinical-ladder or specialty-recognition benefit — ask before you pay out of pocket.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "RNC-MNN is awarded for <strong>three years</strong>, and NCC's maintenance program is competency-driven rather than a flat CE tally. At the start of each cycle you complete the <strong>Continuing Competency Assessment (CCA)</strong>: 125 items mirroring the current MNN exam content, free, on demand, no pass/fail, 2 hours 15 minutes in one session, and worth 5 NCC CE hours.",
      "The CCA produces a <strong>specialty index</strong> from 1 to 10 in each of four MNN competency areas — Pregnancy, Birth Risk Factors and Complications (5 hours); Postpartum Assessment, Management and Complications (20 hours); Newborn Assessment, Management and Complications (20 hours); Professional Practice (5 hours). Score <strong>7.5 or higher</strong> in an area and you owe no CE there. Score below it and that area's hours land on your Education Plan.",
      "A 15-hour baseline sits under the plan, so even a certificant who clears 7.5 everywhere owes 15 hours — less the 5 CE hours the CCA itself awards, which is <strong>10 hours in the best case and 45 in the worst</strong>. Only CE earned <em>after</em> the CCA and matching the plan counts, which is why taking the assessment late in a cycle is the most common self-inflicted renewal problem.",
      "You then submit a maintenance application with the <strong>$100</strong> fee before your due date; using 15, 30, or 45 hours of NCC CE modules drops that to $80, $70, or $60. Applications are randomly audited, so keep certificates and course descriptions for outside CE — NCC module records are already on file. Opting out of the CCA is possible through <strong>alternative maintenance</strong>: 50 CE hours across every core content area, no discounts, no preceptorship or presentation substitutions, and a $175 fee. A certification that is not maintained lapses, and reinstatement is a one-year window with a fee.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the RNC-MNN exam?",
    prose: [
      "The RNC-MNN pass rate has stayed between <strong>84% and 94%</strong> in every year NCC has published since 2016, and landed at <strong>86% on 1,656 candidates in 2025</strong>. That makes it the highest-scoring of NCC's core RNC exams and one of the more approachable specialty certifications in women's and infant health.",
      "The number reflects who sits for it. NCC gates the exam behind 24 months and 2,000 specialty hours, so the candidate pool is experienced mother-baby nurses testing on work they do daily. The roughly one candidate in seven who does not pass usually loses ground in the two complications categories — maternal postpartum and newborn complications total 47% of scored items and cover conditions many couplet-care nurses see a handful of times a year.",
      "There is no percentage cutoff to aim at. NCC scores criterion-referenced with <strong>item response theory (Rasch analysis)</strong>, equating forms to a common scale, so a candidate on a harder form needs fewer correct answers than one on an easier form. Your report returns word descriptors — very weak through very strong — by content area, never a raw or scaled score.",
    ],
    rows: [
      { year: "2016", pct: 87 },
      { year: "2017", pct: 84 },
      { year: "2018", pct: 90 },
      { year: "2020", pct: 92 },
      { year: "2021", pct: 93 },
      { year: "2022", pct: 90 },
      { year: "2023", pct: 94 },
      { year: "2024", pct: 90 },
      { year: "2025", pct: 86 },
    ],
    target: 90,
    footnote:
      "All figures from NCC’s public Statistics page (MNN rows). Candidates tested: 844 (2016); 916 (2017); 1,259 (2018); 1,233 (2020); 925 (2021); 1,335 (2022); 761 (2023); 1,696 (2024); 1,656 (2025). NCC publishes no 2019 row for any exam, and no first-time versus repeater split. Accessed 2026-09-04.",
    factBox: {
      tone: "warn",
      title: "A high pass rate is not a low-effort exam",
      html:
        "Passing rates near 90% describe a screened population, not an easy test. NCC caps you at <strong>two attempts per calendar year</strong>, enforces a <strong>45-day wait</strong> before you can reapply, and charges the full <strong>$325</strong> again — so a failed attempt costs a season and a fee, not an afternoon. Build the plan around the 47% of items sitting in maternal and newborn complications.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "An 8-week RNC-MNN study plan",
    prose: [
      "Eight weeks suits most mother-baby RNs who already meet the 24-month eligibility bar, with question volume ramping from week 2 and a full-length timed run in week 7. Weight your calendar the way NCC weights the exam: about half the time on maternal postpartum content, a little over 40% on newborn content, and a single focused block on antenatal and intrapartum risk factors.",
      "NCC neither sponsors nor endorses any review course, and it does not release retired items. Anything marketed as an RNC-MNN review course is independent of NCC. The Candidate Guide's own reference list is the closest thing to an official syllabus — it names 20 texts, including the Core Curriculum for Maternal-Newborn Nursing, AWHONN's Perinatal Nursing, Breastfeeding and Human Lactation, and the Textbook of Neonatal Resuscitation.",
    ],
    weeks: [
      { n: 1, focus: "Read the 2026 NCC MNN Candidate Guide outline end to end + baseline diagnostic", qs: 25 },
      { n: 2, focus: "Postpartum physiology and assessment — involution, lochia, REEDA, bladder, cardiopulmonary and hematologic shifts", qs: 60 },
      { n: 3, focus: "Postpartum nursing care and medications — analgesia, antihypertensives, uterotonics, RhIG, vaccines, patient education", qs: 60 },
      { n: 4, focus: "Lactation and feeding — latch, supply, mastitis, contraindications, storage, formula composition, newborn fluid and caloric needs", qs: 60 },
      { n: 5, focus: "Maternal postpartum complications — hemorrhage and TXA, DVT and PE, endometritis and sepsis, postpartum preeclampsia, PMADs, substance use", qs: 60 },
      { n: 6, focus: "Newborn assessment and care — transition, thermoregulation, gestational age, screening, NRP, cord and skin care, safe sleep", qs: 60 },
      { n: 7, focus: "Newborn complications + full-length timed practice (175 items in 3 hours) and error-log review", qs: 175 },
      { n: 8, focus: "Antenatal and intrapartum risk factors, psychosocial and ethical issues, targeted weak-area review, logistics, test day", qs: 50 },
    ],
    tipsHeading: "How RNC-MNN candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Study the complications you rarely see",
        text:
          "Maternal postpartum complications and newborn complications are 47% of scored items, and they are exactly the content a well-run couplet unit exposes you to least. Septic pelvic thrombophlebitis, postpartum cardiomyopathy, G6PD deficiency, inborn errors of metabolism, and neonatal seizures all sit on the outline. Schedule them, because your shifts will not.",
      },
      {
        kicker: "Do not study for RNC-OB by mistake",
        text:
          "Fetal heart-rate patterns appear once, inside a 7% category, framed as an intrapartum factor that explains the newborn in front of you. There is no fetal assessment domain and no labour and birth domain on this exam. Candidates who drill EFM strips for RNC-MNN are spending weeks on a sliver of the blueprint.",
      },
      {
        kicker: "Treat lactation as a graded subject",
        text:
          "Lactation, feeding, and newborn nutrition are one of four subsections inside the largest category on the exam. Anatomy and physiology of lactation, positioning and latch, feeding cues, insufficient supply, mastitis, milk expression and storage, contraindications, and formula composition are all named in the outline. Bedside fluency is not the same as knowing the reference answer.",
      },
      {
        kicker: "Practise the three-option format before test day",
        text:
          "Every NCC item has a stem and three choices — one correct, two distractors, alphabetised by first word so position tells you nothing. Three options make guessing feel cheaper and rushing feel safer. Take at least one full 175-item timed run so the last 40 items are not where your accuracy quietly drops.",
      },
      {
        kicker: "Know the psychosocial and ethical section exists",
        text:
          "Parent-infant interaction, family transition, adoption and surrogacy and gestational carriers, intimate partner violence, perinatal grief and palliative care, and the four ethical principles are all listed under the 26% category. They are quick to review and easy to lose points on if you assume the exam is purely clinical.",
      },
      {
        kicker: "Keep the six-week horizon in mind",
        text:
          "NCC scopes this exam from birth to six weeks, in hospital and community settings. Items can put the patient at home: postpartum preeclampsia at day 8, mastitis at week 3, jaundice readmission, a late-presenting perinatal mood disorder. Discharge teaching and post-birth warning signs are testable content, not filler.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (mirrors NCC’s published three-option format)
  sample: {
    heading: "Sample RNC-MNN question",
    prose: [
      "This item mirrors NCC's published three-option format: a short stem and three answer choices — one correct, two distractors, alphabetised by first word. NCC's own sample items are deliberately simpler than the real exam, so this one is pitched closer to test-day difficulty. Try it before reading the rationale.",
    ],
    q: {
      scenario:
        "A patient is 6 hours past a vaginal birth of a 4,100-gram newborn following an oxytocin-augmented labour. The mother-baby RN finds the fundus boggy and two fingerbreadths above the umbilicus, deviated to the right, with a peripad saturated in the last 15 minutes. Blood pressure is 108/62 and heart rate is 104.",
      stem: "Which nursing action should the mother-baby RN take first?",
      options: [
        "Administer the next uterotonic in the postpartum hemorrhage protocol and recheck the fundus afterward.",
        "Assist the patient to the bathroom to empty her bladder, then reassess fundal tone and position.",
        "Massage the fundus until firm while assessing bladder distention and the volume of blood expressed.",
      ],
      correct: 2,
      rationale:
        "The findings describe uterine atony with a contributing distended bladder — a boggy, high, right-deviated fundus with heavy bleeding after macrosomia and prolonged oxytocin exposure, both atony risk factors. Fundal massage is the immediate intervention because it restores tone and slows blood loss within seconds, and it can be performed while assessing the bladder in the same sequence. Emptying the bladder is the correct second step, not the first, because it takes minutes the patient is actively bleeding through. Escalating uterotonics is appropriate if massage and bladder emptying do not firm the fundus, but medication follows the mechanical intervention rather than replacing it.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key RNC-MNN terms every candidate should know",
    prose: [
      "These terms recur across MNN items. Review them until recall is automatic — three-option stems often turn on whether you can name which framework or finding applies before you compare the choices.",
    ],
    rows: [
      { term: "Involution", defn: "Return of the uterus to pre-pregnancy size, descending roughly one fingerbreadth per day after birth. A fundus that is high, boggy, or deviated points to atony, retained products, or a full bladder.", domain: "Postpartum" },
      { term: "Lochia progression", defn: "Rubra (days 1–3), serosa (days 4–10), alba (up to about six weeks). A return to bright red bleeding after serosa suggests retained placental fragments or subinvolution.", domain: "Postpartum" },
      { term: "REEDA", defn: "Redness, Edema, Ecchymosis, Discharge, Approximation — the structured perineal or cesarean incision assessment used to distinguish normal healing from infection or hematoma.", domain: "Postpartum" },
      { term: "Post-birth warning signs", defn: "Discharge-teaching content named in NCC's outline; AWHONN publishes the version most U.S. units use. Covers the symptoms — chest pain, obstructed breathing, seizure, heavy bleeding, severe headache, fever — that send a postpartum patient back for care.", domain: "Postpartum" },
      { term: "Postpartum preeclampsia", defn: "New or persistent hypertension with severe features after birth, including presentations that first appear days after discharge. Magnesium sulfate seizure prophylaxis and antihypertensive thresholds are testable.", domain: "PP Complications" },
      { term: "Endometritis", defn: "Uterine infection presenting with fever, uterine tenderness, and foul-smelling lochia, most often after cesarean, prolonged rupture, or chorioamnionitis (Triple I).", domain: "PP Complications" },
      { term: "PMADs", defn: "Perinatal Mood and Anxiety Disorders — postpartum depression, anxiety, OCD, and postpartum psychosis. Psychosis is the emergency: onset is typically early, and it carries acute risk to parent and infant.", domain: "PP Complications" },
      { term: "Ballard score", defn: "New Ballard Score — neuromuscular and physical maturity assessment used to assign gestational age, and the tool that identifies the late preterm infant whose feeding, glucose, and bilirubin risks differ from a term newborn's.", domain: "Newborn" },
      { term: "Transition to extrauterine life", defn: "NCC scopes this as birth to four hours: initial physiologic adaptation and thermoregulation, including heat loss by convection, conduction, radiation, and evaporation.", domain: "Newborn" },
      { term: "IDM hypoglycemia", defn: "The infant of a diabetic mother is hyperinsulinemic at birth and prone to early hypoglycemia, along with macrosomia, birth injury, polycythemia, and hypocalcemia. Screening timing and feeding response are commonly tested.", domain: "Newborn" },
      { term: "Hyperbilirubinemia risk", defn: "Bilirubin assessed by transcutaneous or serum measurement and plotted against hour-specific thresholds. ABO and Rh incompatibility, G6PD deficiency, bruising, and poor feeding all raise risk.", domain: "NB Complications" },
      { term: "TTN", defn: "Transient Tachypnea of the Newborn — retained fetal lung fluid causing tachypnea and mild distress in the first hours, more common after cesarean without labour. Usually resolves within 24 to 72 hours.", domain: "NB Complications" },
      { term: "NRP", defn: "Neonatal Resuscitation Program — the AAP and AHA algorithm behind the exam's resuscitation and stabilisation items, covering initial steps, positive-pressure ventilation, and evaluation of intervention effectiveness.", domain: "Newborn" },
      { term: "Delayed cord clamping", defn: "Deferring cord clamping after birth to improve neonatal iron stores and transitional circulation. Listed in NCC's intrapartum factors alongside method of delivery and TOLAC.", domain: "Pregnancy/Birth" },
      { term: "CCA specialty index", defn: "The 1-to-10 rating the Continuing Competency Assessment returns per competency area at renewal. A 7.5 or higher clears that area's CE requirement; anything lower generates hours on your Education Plan.", domain: "Renewal" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "RNC-MNN vs. RNC-OB, RNC-NIC, RNC-LRN, C-EFM, IBCLC",
    prose: [
      "RNC-MNN sits among several credentials that cover neighbouring patients, and the wrong choice costs $325 plus a 90-day window. Match the credential to where your hours actually are, not to the unit name on your badge.",
    ],
    rows: [
      { row: "RNC-MNN", highlight: true, body: "NCC", scope: "Childbearing family from birth to six weeks — postpartum patient and newborn on one exam", who: "Postpartum, mother-baby, couplet care, and newborn nursery RNs" },
      { row: "RNC-OB", body: "NCC", scope: "Inpatient obstetric care after 20 weeks of gestation through discharge, including labour and birth and fetal assessment", who: "L&D, antepartum, and OB triage RNs" },
      { row: "RNC-NIC", body: "NCC", scope: "Acutely and critically ill neonates within an intensive care environment", who: "Level III and IV NICU RNs" },
      { row: "RNC-LRN", body: "NCC", scope: "Low-risk neonatal intensive care — newborn only, no maternal content", who: "Level I and II nursery RNs who want a newborn-only credential" },
      { row: "C-EFM", body: "NCC", scope: "Electronic fetal monitoring subspecialty — an add-on, not a standalone core credential", who: "Intrapartum RNs, providers, perinatal educators" },
      { row: "C-OBE", body: "NCC", scope: "Obstetric emergencies subspecialty, first reported in NCC’s 2025 statistics", who: "OB rapid-response and emergency-team RNs" },
      { row: "IBCLC", body: "IBLCE", scope: "Lactation consulting — a separate certifier with its own clinical-hour and education pathways, open beyond nursing", who: "Nurses and non-nurses practising as lactation consultants" },
    ],
    closingProse:
      "<strong>Take RNC-MNN if your day is the couplet — postpartum assessment, feeding support, newborn care, and discharge teaching.</strong> Choose RNC-OB instead if you spend most shifts at a labour bedside, and RNC-NIC if your patients are intubated. RNC-LRN is the newborn-only alternative when maternal content is not part of your assignment. If lactation is the whole job rather than a shift task, IBCLC through IBLCE is the credential that matches, and it can sit alongside RNC-MNN rather than replacing it.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about RNC-MNN certification",
    items: [
      { q: "What does RNC-MNN mean in nursing?", a: "RNC-MNN stands for Registered Nurse Certified – Maternal Newborn Nursing. It is a core board certification from the National Certification Corporation (NCC) covering care of the childbearing family from birth to six weeks — the postpartum patient and the newborn on the same exam." },
      { q: "What are the eligibility requirements for the RNC-MNN certification?", a: "You need a current, active, unencumbered RN license in the U.S. or Canada, 24 months of maternal newborn specialty experience, and a minimum of 2,000 specialty hours. Both must be met, the hours can come from any point in your career, and you must have worked in the specialty sometime in the last 24 months." },
      { q: "How do I get RNC-MNN certified?", a: "Apply online at the NCC website — mail, fax, and email applications are not accepted — and upload your licensure documentation with the $325 fee. NCC reviews in 1 to 14 days, then places you in a 90-day testing window. Schedule your AMP/PSI test-center seat or Live Remote Proctoring slot within the first 30 days of that window." },
      { q: "What does the RNC-MNN exam cover?", a: "Five categories: Maternal Postpartum Assessment, Management, and Education (26%), Maternal Postpartum Complications (25%), Newborn Complications (22%), Newborn Assessment and Management (20%), and Pregnancy, Birth Risk Factors and Complications (7%). There is no labour and birth or fetal monitoring domain." },
      { q: "How much does the RNC-MNN exam cost?", a: "NCC charges $325 total — a $50 non-refundable application fee plus a $275 testing fee — at the same rate for test-center and Live Remote Proctoring formats. Retakes pay the full $325 again, and an incomplete application adds a $30 reprocessing fee." },
      { q: "How long is the RNC-MNN exam?", a: "Three hours for 175 multiple-choice items — 150 scored plus 25 unscored pretest items — in a single block. Each item has a stem and three answer options: one correct answer and two distractors, alphabetised by first word." },
      { q: "What is the pass rate for the RNC-MNN exam?", a: "NCC reported an 86% pass rate in 2025 on 1,656 candidates. The rate has run between 84% and 94% in every year NCC has published since 2016, which makes RNC-MNN the highest-scoring of NCC's core RNC exams." },
      { q: "What is the passing score for RNC-MNN?", a: "There is no fixed percentage. NCC scores criterion-referenced using item response theory (Rasch analysis) and equates exam forms to a common scale, so pass or fail depends on your ability estimate against a criterion set by the Content Team. Reports return word descriptors by content area, not scores." },
      { q: "What is the difference between RNC-OB and RNC-MNN?", a: "RNC-OB covers inpatient obstetric care from 20 weeks of gestation through discharge and includes labour and birth and fetal assessment domains. RNC-MNN starts at birth and runs to six weeks, splitting its items between maternal postpartum content and newborn content. Choose by where your hours are — labour bedside or couplet care." },
      { q: "What happens if I fail the RNC-MNN exam?", a: "You wait 45 days from your test date before reapplying, pay the full $325 again, and re-establish eligibility. There is no cap on lifetime attempts, but you may sit the same NCC exam only twice in a calendar year." },
      { q: "Does RNC-MNN certification expire?", a: "Yes, after three years. Renewal runs through NCC's Continuing Competency Assessment, which generates an individualised Education Plan of between 10 and 45 CE hours depending on your results. Only CE earned after the assessment and matching the plan counts, and a maintenance application plus a $100 fee is due before your maintenance date." },
      { q: "Are there RNC-MNN review courses from NCC?", a: "No. NCC states that it does not offer or sponsor review courses or review materials and does not release test questions, so every commercial RNC-MNN review course is independent of NCC. The reference list in the 2026 Candidate Guide is the closest thing to an official study syllabus." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "Every figure on this page traces to the primary sources below. Fees, blueprint weights, and maintenance rules move on NCC's revision cycle — check the current Maternal Newborn Nursing Candidate Guide before you make an application decision on a number you read here.",
    ],
    list: [
      "National Certification Corporation (NCC) — Maternal Newborn Nursing exam detail page (exam purpose, eligibility, $325 fee, 175 items / 3 hours, 90-day window, scheduling and results rules) — nccwebsite.org/certification-exams/details/4",
      "NCC 2026 Candidate Guide — Maternal Newborn Nursing (RNC-MNN®) PDF (fees and policies, three-option item format, five-category content chart with 7/26/20/25/22 weights, full test content outline, competency statements, study resources, sample questions, Rasch scoring, maintenance terms) — nccwebsite.org/content/documents/cms/mnn-candidate_guide.pdf",
      "NCC — Four Steps to Continuing Competency (CCA brochure PDF): 125-item assessment, specialty index 7.5 threshold, MNN competency categories and hour weights, 15-hour baseline, $100 / $80 / $70 / $60 maintenance fees, $175 alternative maintenance — nccwebsite.org/content/documents/cms/cca-steps.pdf",
      "NCC Statistics — MNN pass-rate history 2016–2025 (87%, 84%, 90%, 92%, 93%, 90%, 94%, 90%, 86%) with candidates tested, plus INPT, NIC, LRN, and IAP comparison rows — nccwebsite.org/certification-exams/other-helpful-information/statistics",
      "NCC — Maintain your Certification (three-year term for all NCC certifications, core versus subspecialty lists, audit and unencumbered-licence rules) — nccwebsite.org/maintain-your-certification",
      "NCC — CORE RNC Examination Registration Catalog PDF — nccwebsite.org/content/documents/cms/exam-core.pdf",
      "NCC — Neonatal Intensive Care Nursing exam detail page, used for the RNC-MNN versus RNC-NIC scope distinction — nccwebsite.org/certification-exams/details/5",
      "NCC — Testing with Live Remote Proctoring — nccwebsite.org/certification-exams/testing-with-live-remote-proctoring",
      "Study references named in NCC's 2026 MNN Candidate Guide, including Baker et al., Core Curriculum for Maternal-Newborn Nursing (6th ed.); AWHONN's Perinatal Nursing (5th ed.); Wambach & Spencer, Breastfeeding and Human Lactation (7th ed.); and Weiner et al., Textbook of Neonatal Resuscitation (9th ed.)",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice RNC-MNN-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to NCC's five-category 2026 blueprint, in the same three-option format the exam uses. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full RNC-MNN question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "RNC-OB",
      title: "RNC-MNN vs RNC-OB: which NCC core credential fits your unit?",
      blurb: "Where the two blueprints stop overlapping, why fetal monitoring belongs to only one of them, and how to choose when you float between both.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "The 47%: maternal and newborn complications on the RNC-MNN exam",
      blurb: "Postpartum hemorrhage, sepsis, PMADs, hyperbilirubinemia, and hypoglycemia — the content couplet-care nurses see least and the exam tests most.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Renewal",
      tag: "CCA",
      title: "How NCC's Continuing Competency Assessment sets your CE hours",
      blurb: "What the specialty index measures, why 7.5 is the number that matters, and how certificants end up owing 10 hours instead of 45.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
