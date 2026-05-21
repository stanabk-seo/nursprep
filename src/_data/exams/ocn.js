// OCN exam detail page — structured data.
// Sourced from Content/OCN_research.json (verified against ONCC primary
// sources: OCN credential page, 2026 OCN Test Content Outline PDF,
// Certification Renewal Guide, and corroborating prep sources, as of 2026-05-21).
// Lives at /certifications/ocn/ via the paginated template.
//
// Confidence notes: question split (145/20), passing score (scaled 55),
// 2024 pass rate (~62%), and renewal point total (~100 ILNA) are MEDIUM
// confidence — see research.json. year_launched was not verified (null).

module.exports = {
  code: "OCN",
  name: "Oncology Certified Nurse",
  body: "ONCC",
  cat: "oncology",
  catLabel: "Oncology",
  updated: "2026-05",

  // ---- Page-level SEO
  seo: {
    title:
      "OCN Certification Guide 2026: Exam, Cost & Renewal | NursPrep",
    description:
      "Adult oncology RNs: OCN certification in 2026 — ONCC eligibility, six-domain blueprint, $300 fee, ~62% pass rate, and ILNA renewal explained.",
    ogTitle:
      "OCN Certification Guide 2026 — Oncology Certified Nurse",
    ogDescription:
      "ONCC's foundational adult-oncology RN credential: 2,000-hour eligibility, six-domain blueprint, $300 member fee, 165-question PSI exam, and ILNA renewal.",
  },

  // ---- HERO
  lede:
    "OCN — Oncology Certified Nurse — is the foundational board certification for adult oncology nursing in the United States. Issued by the Oncology Nursing Certification Corporation (ONCC), it validates specialty knowledge across the full cancer continuum, from screening through treatment, symptom management, and end-of-life care.",
  heroPills: [
    { k: "Questions", v: "165 items" },
    { k: "Duration", v: "3 hours" },
    { k: "Renewal", v: "4 years" },
    { k: "Pass rate", v: "~62%" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "Oncology Nursing Certification Corporation (ONCC)" },
    { k: "Format", v: "Computer-based via PSI (psiexams.com)" },
    { k: "Scored items", v: "145 of 165 (20 unscored pretest)" },
    { k: "Passing score", v: "Scaled score of at least 55" },
    { k: "Eligibility", v: "Active RN license + 2,000 oncology hours" },
    { k: "Experience", v: "24 mo RN + 10 oncology CE contact hours" },
    { k: "Fee (ONS/APHON member)", v: "$300 · non-member $420" },
    { k: "Renewal cycle", v: "4 years — ILNA points or re-exam" },
  ],
  heroCardFoot:
    "Verified against the ONCC OCN credential page and 2026 OCN Test Content Outline",

  // ---- TOC
  sections: [
    { id: "overview", label: "Overview" },
    { id: "eligibility", label: "Eligibility" },
    { id: "blueprint", label: "Exam blueprint" },
    { id: "cost", label: "Cost & renewal" },
    { id: "passrate", label: "Pass rate" },
    { id: "plan", label: "Study plan" },
    { id: "sample", label: "Sample Question" },
    { id: "keyterms", label: "Key terms" },
    { id: "compare", label: "OCN vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "OCN certification at a glance",
    prose: [
      "OCN — Oncology Certified Nurse — is the benchmark RN-level credential for adult oncology nursing. It is issued by the <strong>Oncology Nursing Certification Corporation (ONCC)</strong>, the certifying arm affiliated with the Oncology Nursing Society, and is an NCCA-accredited certification program. OCN is the foundational ONCC credential that more specialized oncology certifications build on.",
      "OCN is a board certification, not a course. It is sometimes confused with the ONS chemotherapy/immunotherapy certificate — a continuing-education course — but only OCN appears on your credentials line after RN. To earn it, you sit and pass a 165-item exam based on ONCC's published Test Content Outline.",
    ],
    stats: [
      { n: "165", l: "Total items", sub: "145 scored · 20 pretest" },
      { n: "3 hrs", l: "Time limit", sub: "Computer-based via PSI" },
      { n: "~62%", l: "Recent pass rate", sub: "2024, medium-confidence estimate" },
      { n: "4 yrs", l: "Renewal cycle", sub: "ILNA points or re-exam" },
    ],
    factBox: {
      tone: "info",
      title: "What the 2026 Test Content Outline covers",
      html:
        "ONCC's <strong>2026 OCN Test Content Outline</strong> keeps the same six subject areas and weights as the 2025 version, built on a 2020–2021 role delineation study of basic adult oncology nursing practice. Only <strong>generic drug names</strong> appear on the test, and candidates receive <strong>same-day results</strong>. An ONCC Passing Score Task Force reviewed the OCN cut score in 2025.",
    },
    coverImageLabel:
      "Oncology RN administering infusion therapy in an outpatient cancer center",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the OCN exam?",
    prose: [
      "Eligibility for OCN is <strong>gated, not recommended</strong>. Unlike some certifications that only suggest experience, ONCC requires you to meet <strong>all four</strong> criteria below at the time of application <em>and</em> at the time you test.",
      "The headline gate is <strong>2,000 hours of adult oncology nursing practice within the four years (48 months) before you apply</strong>. Those hours can come from clinical practice, nursing administration, education, research, or consultation — they do not have to be bedside.",
    ],
    candidateHeading: "You are eligible if…",
    candidateList: [
      "You hold a current, active, unencumbered RN license in the US, a US territory, or Canada — at both application and examination.",
      "You have completed at least 2,000 hours of adult oncology nursing practice within the four years (48 months) prior to application.",
      "You have at least two years (24 months) of experience as an RN within the four years (48 months) prior to application.",
      "You have completed at least 10 contact hours of oncology nursing continuing education — or an academic oncology nursing elective — within the three years (36 months) prior to application.",
    ],
  },

  // ---- BLUEPRINT (official 2026 ONCC percentages, sum to 100)
  blueprint: {
    heading: "OCN exam blueprint — six subject areas",
    prose: [
      "The OCN blueprint is six subject areas, each weighted by percentage; the weights sum to 100%. <strong>Symptom Management and Supportive Care</strong> (25%) and <strong>Treatment Modalities</strong> (20%) together carry nearly half the exam — most of your study time should live there.",
      "Do not neglect Psychosocial Dimensions of Care. At 10% it is the smallest domain and the most under-studied, but it reliably appears on the exam. Candidates who lean only on hands-on chemotherapy experience tend to lose points in Care Continuum, Oncology Nursing Practice, and the psychosocial items.",
    ],
    domains: [
      { label: "Symptom Management and Supportive Care", weight: 25 },
      { label: "Treatment Modalities", weight: 20 },
      { label: "Oncologic Emergencies", weight: 16 },
      { label: "Oncology Nursing Practice", weight: 15 },
      { label: "Care Continuum", weight: 14 },
      { label: "Psychosocial Dimensions of Care", weight: 10 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and renewal",
    prose: [
      "ONCC delivers the OCN exam by computer through <strong>PSI (psiexams.com)</strong>. After ONCC approves your application, you receive an Authorization to Test (ATT) email within about <strong>4–6 weeks</strong>; the ATT opens an almost-immediate <strong>90-day testing window</strong>, so schedule your PSI seat right away. Results are reported the same day.",
    ],
    rows: [
      { k: "Initial exam — ONS/APHON member", v: "$300" },
      { k: "Initial exam — non-member", v: "$420", highlight: true },
      { k: "DoubleTake add-on (retake insurance)", v: "+$100 at registration" },
      { k: "Oncology Nursing Month promo", v: "Periodic 20% off test fees" },
    ],
    factBox: {
      tone: "success",
      title: "DoubleTake and member pricing can lower your cost",
      html:
        "Joining ONS/APHON drops the OCN fee from <strong>$420 to $300</strong>, often more than covering the membership cost. The optional <strong>DoubleTake</strong> add-on (+$100, selected at registration) gives you a retake without paying the full fee again if you do not pass the first attempt. ONCC also runs periodic promotions — for example a 20% Oncology Nursing Month discount — so check for an active code before you apply.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "OCN certification is valid for <strong>four years</strong>. Most nurses renew through <strong>Option 1 — Practice Hours plus Professional Development (Renewal Points)</strong> under ONCC's ILNA (Individual Learning Needs Assessment) model. You need a current OCN, an active unencumbered RN license, at least 12 months of RN experience within the prior 36 months, and at least <strong>1,000 hours of adult oncology nursing practice within the prior 30 months</strong>.",
      "Renewal points are earned mainly through continuing education and must match the subject areas and weighting of the current Test Content Outline. A standard OCN learning plan is typically <strong>about 100 points</strong>, though the exact number is set by each nurse's Test or Assessment Results Report. Options 2 (Practice Hours plus successful re-testing) and 3 (Points plus successful re-testing) are also available.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the OCN exam?",
    prose: [
      "Recent OCN pass rates run about <strong>62% overall</strong>, with first-time candidates passing at a somewhat higher rate (roughly 65%). These figures are a medium-confidence estimate drawn from corroborating prep sources and ONCC's annual examination statistics — verify the current year against ONCC's published statistics before relying on them.",
      "The OCN passing standard is a <strong>scaled score of at least 55</strong>, not a simple percentage of items correct. ONCC sets the cut score through a criterion-referenced Passing Score Study using the judgment of panels of oncology nursing professionals, and a 2025 OCN Passing Score Task Force reviewed that standard. The biggest lever for a first-time pass is structured study plus at least one full-length timed practice exam.",
    ],
    rows: [{ year: "2024", pct: 62 }],
    target: 80,
    footnote:
      "The ~62% figure is a medium-confidence estimate; ONCC's 2024 Examination Statistics PDF is image-based and the exact OCN figure could not be machine-verified. Confirm against ONCC's current statistics before relying on it.",
    factBox: {
      tone: "info",
      title: "Scaled score, not percent correct",
      html:
        "OCN is scored on a <strong>scaled-score</strong> system with a passing point of <strong>55</strong>. Because scoring is criterion-referenced, you cannot simply translate \"X correct out of 145\" into a pass — focus your prep on mastering the blueprint, especially the 25% Symptom Management and 20% Treatment Modalities domains, rather than chasing a raw item count.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 10-week OCN study plan",
    prose: [
      "A structured 10-week plan suits most oncology RNs who already meet the 2,000-hour gate — roughly <strong>80 to 120 total study hours</strong> across the six blueprint domains. Practice-question volume ramps through weeks 2–8 and peaks in week 9 with a full-length timed exam; week 10 is for targeted review and rest.",
    ],
    weeks: [
      { n: 1, focus: "Read the ONCC OCN Test Content Outline + baseline diagnostic exam", qs: 25 },
      { n: 2, focus: "Oncology Nursing Practice — carcinogenesis, staging, scope & standards", qs: 40 },
      { n: 3, focus: "Treatment Modalities — chemotherapy, radiation, targeted & oral therapies", qs: 60 },
      { n: 4, focus: "Symptom Management I — hematologic, GI, integumentary, pain", qs: 60 },
      { n: 5, focus: "Symptom Management II — VADs, nutrition, complementary modalities", qs: 60 },
      { n: 6, focus: "Oncologic Emergencies — TLS, SIADH, sepsis, cord compression, CRS", qs: 60 },
      { n: 7, focus: "Care Continuum — screening, survivorship, palliative & end-of-life care", qs: 60 },
      { n: 8, focus: "Psychosocial Dimensions — coping, distress, sexuality, financial concerns", qs: 60 },
      { n: 9, focus: "Full-length timed practice exam + error-log review", qs: 165 },
      { n: 10, focus: "Targeted review of weak domains, rest, test day", qs: 40 },
    ],
    tipsHeading: "How OCN candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Front-load Symptom Management and Treatment Modalities",
        text:
          "These two domains are 45% of the exam. If you study them well, you bank nearly half your score. Build dedicated weeks for symptom etiology by body system and for each treatment modality.",
      },
      {
        kicker: "Don't skip Psychosocial and Care Continuum",
        text:
          "At 10% and 14%, these feel minor, but they are where experience-only candidates lose points. Study survivorship, end-of-life care, distress screening, and financial-toxicity concepts deliberately.",
      },
      {
        kicker: "Know only generic drug names",
        text:
          "ONCC uses generic drug names exclusively on the test. Drill generic names for common chemotherapy, biotherapy, immunotherapy, and supportive-care agents before test day.",
      },
      {
        kicker: "Master the oncologic emergencies cold",
        text:
          "Tumor lysis syndrome, SIADH, neutropenic sepsis, hypercalcemia, spinal cord compression, SVC syndrome, and CRS/ICANS recur in scenario items. Memorize the early signs and first nursing actions for each.",
      },
      {
        kicker: "Take a full-length timed exam",
        text:
          "Pacing 165 items in 3 hours is a trained skill. Sit at least one full-length timed practice exam under real conditions so fatigue in the final stretch doesn't cost you the pass.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (original, mirrors ONCC scenario format)
  sample: {
    heading: "Sample OCN question",
    prose: [
      "This item mirrors ONCC's scenario format: a short clinical stem and four plausible options where only one is the <em>best</em> next action. Try it before reading the rationale.",
    ],
    q: {
      scenario:
        "A patient with bulky Burkitt lymphoma is 24 hours into induction chemotherapy. Labs now show potassium 6.2 mEq/L, phosphorus 7.1 mg/dL, calcium 7.0 mg/dL, uric acid 11 mg/dL, and a rising creatinine. The patient reports muscle cramps and palpitations.",
      stem: "Which finding most urgently requires the oncology nurse's intervention?",
      options: [
        "The elevated uric acid level.",
        "The hyperkalemia of 6.2 mEq/L.",
        "The hyperphosphatemia of 7.1 mg/dL.",
        "The hypocalcemia of 7.0 mg/dL.",
      ],
      correct: 1,
      rationale:
        "This is tumor lysis syndrome. While all values are deranged, the potassium of 6.2 mEq/L with palpitations is the most immediately life-threatening because hyperkalemia can precipitate fatal cardiac dysrhythmias. The nurse should prioritize cardiac monitoring and potassium-lowering measures while supporting hydration and rasburicase/allopurinol therapy.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key OCN terms every candidate should know",
    prose: [
      "These terms surface across OCN exam items. Review them until the definitions and first nursing actions feel automatic — scenario stems often hinge on recognizing which oncologic emergency or concept applies.",
    ],
    rows: [
      { term: "Tumor lysis syndrome (TLS)", defn: "Metabolic emergency from rapid tumor cell breakdown: hyperkalemia, hyperphosphatemia, hyperuricemia, and hypocalcemia, risking dysrhythmias and renal failure.", domain: "Oncologic Emergencies" },
      { term: "Neutropenic fever / sepsis", defn: "A single temperature ≥38.3°C (or ≥38.0°C sustained) with an absolute neutrophil count <500 — an oncologic emergency requiring prompt blood cultures and broad-spectrum antibiotics.", domain: "Oncologic Emergencies" },
      { term: "Nadir", defn: "The lowest point of blood counts (especially neutrophils) after chemotherapy, typically 7–14 days post-treatment, when infection risk peaks.", domain: "Symptom Management" },
      { term: "Extravasation / vesicant", defn: "Leakage of a vesicant chemotherapy agent into surrounding tissue, causing local necrosis; demands immediate stop, aspiration, and agent-specific antidote.", domain: "Treatment Modalities" },
      { term: "Cytokine release syndrome (CRS)", defn: "A systemic inflammatory response to immune-effector therapies such as CAR-T, ranging from fever to hypotension and organ dysfunction.", domain: "Treatment Modalities" },
      { term: "ECOG performance status", defn: "A 0–5 scale rating a patient's functional ability, used to guide treatment decisions and prognosis.", domain: "Oncology Nursing Practice" },
      { term: "Spinal cord compression", defn: "An oncologic emergency from tumor compressing the cord; back pain with neurologic changes requires urgent imaging and corticosteroids.", domain: "Oncologic Emergencies" },
      { term: "SIADH", defn: "Syndrome of inappropriate antidiuretic hormone secretion — a paraneoplastic cause of hyponatremia, common with small cell lung cancer.", domain: "Oncologic Emergencies" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "OCN vs. BMTCN, CBCN, CPHON, AOCNP",
    prose: [
      "OCN sits at the center of ONCC's oncology credential family as the broad, foundational adult-oncology certification. Several narrower ONCC credentials branch off it; many candidates Google \"OCN\" when they actually want a population- or practice-specific credential, so the distinction matters before you apply.",
    ],
    rows: [
      { row: "OCN", highlight: true, body: "ONCC", scope: "Broad adult oncology nursing across the cancer continuum", who: "Adult oncology RNs in any oncology setting" },
      { row: "BMTCN / TCTCN", body: "ONCC", scope: "Blood & marrow transplant and cellular therapy", who: "RNs in HSCT and cellular-therapy units" },
      { row: "CBCN", body: "ONCC", scope: "Breast care nursing", who: "RNs focused on breast cancer care" },
      { row: "CPHON", body: "ONCC", scope: "Pediatric hematology / oncology", who: "RNs in pediatric oncology (not adult)" },
      { row: "AOCNP", body: "ONCC", scope: "Advanced-practice oncology", who: "Oncology nurse practitioners (graduate-level)" },
    ],
    closingProse:
      "<strong>Take OCN if you are an adult oncology RN seeking the foundational specialty credential.</strong> Choose BMTCN/TCTCN if your practice is transplant and cellular therapy, CBCN for breast care, or CPHON for pediatric oncology. AOCNP is for nurse practitioners, not staff RNs. The ONS chemotherapy/immunotherapy certificate is a course, not a board certification, and does not replace OCN.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about OCN certification",
    items: [
      { q: "What does OCN stand for in nursing?", a: "OCN stands for Oncology Certified Nurse. The credential is issued by the Oncology Nursing Certification Corporation (ONCC) and is the foundational board certification for adult oncology nursing." },
      { q: "What are the eligibility requirements for the OCN exam?", a: "You need an active, unencumbered RN license, 2,000 hours of adult oncology nursing practice within the prior 48 months, at least 24 months of RN experience within the prior 48 months, and 10 oncology continuing-education contact hours within the prior 36 months. All criteria must be met at application and examination." },
      { q: "How much does the OCN exam cost?", a: "The OCN exam costs $300 for ONS/APHON members and $420 for non-members. The optional DoubleTake retake add-on is an additional $100, selected at registration." },
      { q: "How many questions are on the OCN exam?", a: "The OCN exam has 165 multiple-choice questions, of which 145 are scored and 20 are unscored pretest items. You have 3 hours to complete it." },
      { q: "What is the passing score for the OCN exam?", a: "The OCN passing standard is a scaled score of at least 55. ONCC sets the cut score through a criterion-referenced Passing Score Study, so it is not a simple percentage of items correct." },
      { q: "What is the OCN exam pass rate?", a: "Recent OCN pass rates run about 62% overall, with first-time candidates passing at a somewhat higher rate. This is a medium-confidence estimate; verify against ONCC's current examination statistics." },
      { q: "Is the OCN the same as the ONS chemotherapy certificate?", a: "No. OCN is a board certification earned by passing an exam, while the ONS chemotherapy/immunotherapy certificate is a continuing-education course. Only OCN appears on your credentials line after RN." },
      { q: "How long does it take to prepare for the OCN exam?", a: "Most oncology RNs prepare for 8 to 12 weeks, roughly 80 to 120 total study hours across the six blueprint domains, including at least one full-length timed practice exam." },
      { q: "Does OCN certification expire?", a: "Yes. OCN certification is valid for four years. You renew through ONCC's ILNA model — practice hours plus professional-development points matched to the current blueprint — or by re-testing." },
      { q: "What is DoubleTake?", a: "DoubleTake is an optional ONCC add-on, selected and paid at initial registration for an extra $100, that gives you a retake without paying the full exam fee again if you do not pass on the first attempt." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following sources. Fees, blueprint weights, passing standards, and renewal rules shift on ONCC's revision cycle — always confirm numeric facts against the current ONCC candidate materials before relying on them for application decisions.",
    ],
    list: [
      "Oncology Nursing Certification Corporation (ONCC) — Oncology Certified Nurse (OCN) credential page (eligibility, fees, exam format)",
      "ONCC — 2026 OCN Test Content Outline (PDF): six subject areas and weights (Symptom Management 25%, Treatment Modalities 20%, Oncologic Emergencies 16%, Oncology Nursing Practice 15%, Care Continuum 14%, Psychosocial 10%)",
      "ONCC — Certification Renewal Guide (4-year cycle, Option 1 ILNA renewal, 1,000-hour practice requirement)",
      "ONCC — 2025 OCN Passing Score Task Force (criterion-referenced passing standard)",
      "ONCC — 2024 Examination Statistics and Pass Rates (annual pass-rate report)",
      "ONCC — Testing and Renewal resource page",
      "Oncology Certified Nurse (OCN) Complete Guide — Vivian Health (corroborating fee and eligibility detail)",
      "Oncology Nurse Certification (OCN) Exam Review — TestPrepReview (scored/pretest split, scaled passing score)",
      "US Bureau of Labor Statistics — Occupational Employment and Wage Statistics, Registered Nurses (May 2024): $98,430 mean RN wage",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice OCN-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to the six-domain ONCC blueprint. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full OCN question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "BMTCN",
      title: "OCN vs BMTCN/TCTCN: which ONCC credential fits your unit?",
      blurb: "Scope, eligibility, and career impact for adult oncology RNs weighing the foundational OCN against the transplant-and-cellular-therapy credential.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "Symptom Management: the domain that decides OCN first-time pass",
      blurb: "Why Symptom Management plus Treatment Modalities = 45% of your score, and the supportive-care concepts ONCC tests most heavily.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "Oncology",
      title: "Earning the OCN: eligibility, the 2,000-hour gate, and what comes next",
      blurb: "How to log the adult oncology practice hours, meet the CE requirement, and use OCN as a springboard to advanced ONCC credentials.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
