// CWCN exam detail page — structured data.
// Sourced from Content/CWCN_research.json (verified against WOCNCB primary sources
// and the 2024 Detailed Content Outline as of the 2026-05 cycle).
// Lives at /certifications/cwcn/ via the paginated template.

module.exports = {
  code: "CWCN",
  name: "Certified Wound Care Nurse",
  body: "WOCNCB",
  cat: "specialty",
  catLabel: "Specialty Practice",
  updated: "2026-05",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title:
      "CWCN Certification Guide: Eligibility, Exam & Renewal | NursPrep",
    description:
      "Everything wound care RNs need on CWCN certification in 2026 — eligibility, 5-domain blueprint, $395 fee, 68% pass rate, PGP renewal, and study plan.",
    ogTitle:
      "CWCN Certification Guide 2026 — Certified Wound Care Nurse",
    ogDescription:
      "WOCNCB eligibility, the 2024 exam blueprint, $395 fee, 68% pass rate, and a 10-week study plan for wound care RNs.",
  },

  // ---- HERO
  lede:
    "CWCN is the WOCNCB board credential for BSN-prepared RNs who specialize in wound care across the healthcare continuum. It validates expertise in assessment, intervention, treatment, care planning, and education for acute and chronic wounds — pressure injuries, lower-extremity arterial and venous wounds, neuropathic and surgical wounds, and atypical lesions.",
  heroPills: [
    { k: "Questions", v: "120 items" },
    { k: "Duration", v: "2 hours" },
    { k: "Renewal", v: "5 years" },
    { k: "Pass rate", v: "68%" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "Wound, Ostomy and Continence Nursing Certification Board (WOCNCB)" },
    { k: "Format", v: "Computer-based at PSI testing centers" },
    { k: "Scored items", v: "110 of 120 (10 unscored pretest)" },
    { k: "Passing score", v: "500 scaled score" },
    { k: "Eligibility", v: "Active RN license + BSN or higher" },
    { k: "Experience", v: "WOCNEP graduate (5 yrs) OR 50 CE + 1,500 hrs wound care" },
    { k: "Fee (single specialty)", v: "$395 · bundle discounts available" },
    { k: "Renewal cycle", v: "5 years — 80 PGP points or re-exam" },
  ],
  heroCardFoot:
    "Verified against WOCNCB 2024 Detailed Content Outline and WOCNCB fees, eligibility, and recertification pages",

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
    { id: "compare", label: "CWCN vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "CWCN certification at a glance",
    prose: [
      "CWCN — Certified Wound Care Nurse — is the wound-only board credential for BSN-prepared RNs. The credential is issued by the <strong>Wound, Ostomy and Continence Nursing Certification Board (WOCNCB)</strong>, a separate entity from the WOCN Society (the membership and education body). WOCNCB credentials are accredited by both the Accreditation Board for Specialty Nursing Certification (ABSNC) and the National Commission for Certifying Agencies (NCCA).",
      "CWCN is a board certification, not a course. It is often confused with WCC (a NAWCO credential open to many clinician types) and with CWOCN (the WOCNCB credential that bundles wound, ostomy, and continence). Only CWCN appears on your credentials line after RN once you pass the WOCNCB exam.",
    ],
    stats: [
      { n: "120", l: "Total items", sub: "110 scored · 10 pretest" },
      { n: "2 hrs", l: "Time limit", sub: "Continuous, no scheduled breaks" },
      { n: "68%", l: "2024 pass rate", sub: "1,417 candidates · WOCNCB-reported" },
      { n: "5 yrs", l: "Renewal cycle", sub: "80 PGP points or re-exam" },
    ],
    factBox: {
      tone: "info",
      title: "What changed with the 2024 Detailed Content Outline",
      html:
        "WOCNCB published an updated <strong>2024 CWCN Detailed Content Outline</strong> reaffirming the five-domain blueprint with task-level weights for Assessment, Intervention, Treatment, Care Planning, and Education & Referral. The complexity mix is now formally published as <strong>25% Recall, 61% Application, 14% Analysis</strong> — the exam emphasizes applying wound care knowledge to clinical scenarios, not memorization.",
    },
    coverImageLabel:
      "Wound care RN documenting a Stage 3 pressure injury assessment in a long-term care setting",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the CWCN exam?",
    prose: [
      "Yes — if you hold an <strong>active, unrestricted RN license</strong> in the US or its territories <strong>AND</strong> a <strong>Baccalaureate (BSN) or higher degree in nursing</strong>. The BSN gate is a hard requirement; ASN and diploma RNs must complete BSN coursework before applying.",
      "Candidates choose one of two pathways. <strong>Traditional Pathway:</strong> graduation from an accredited WOC Nursing Education Program (WOCNEP) within the past 5 years. <strong>Experiential Pathway:</strong> 50 continuing education hours in wound care plus 1,500 direct patient-care hours in wound care within the past 5 years, with <strong>at least 375 of those hours completed in the 12 months immediately preceding application</strong>.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You hold a BSN or higher and an active RN license in the US or its territories.",
      "You spend most of your direct-care time on wound assessment, intervention, and education — not ostomy or continence.",
      "You can document 1,500 wound-care patient-care hours over 5 years with at least 375 in the past year, or you completed an accredited WOCNEP within the past 5 years.",
      "Your setting fits a recognized wound role: inpatient wound and skin care consult team, home health wound nursing, long-term care wound program, outpatient wound clinic, hyperbaric oxygen therapy program, or surgical and burn unit wound responsibility.",
    ],
  },

  // ---- BLUEPRINT (weights from 2024 Detailed Content Outline, scored items total 110)
  blueprint: {
    heading: "CWCN exam blueprint — five domains (2024 Detailed Content Outline)",
    prose: [
      "The CWCN blueprint is five domains. <strong>Treatment is the heaviest domain at 29.5% (32 scored items)</strong> — most of your study time should live there. Assessment (23.5%) and Education & Referral (18.6%) round out the top three. Intervention (16.6%) and Care Planning (11.8%) are smaller but still test in clinical-scenario format.",
      "Do not neglect Care Planning. It is the lightest domain at 11.8% but covers goal-setting language (preventive, palliative, maintenance, curative) and plan-evaluation skills that appear in scenario stems across other domains. Candidates who skim it tend to lose points on multi-step Treatment items where the right answer depends on aligning the intervention to the documented care goal.",
    ],
    domains: [
      { label: "Assessment", weight: 23.5 },
      { label: "Intervention", weight: 16.6 },
      { label: "Treatment", weight: 29.5 },
      { label: "Care Planning", weight: 11.8 },
      { label: "Education and Referral", weight: 18.6 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and employer discounts",
    prose: [
      "WOCNCB delivers CWCN through <strong>PSI testing centers</strong>. After WOCNCB approves your application, PSI issues an Authorization to Test (ATT) and you have a <strong>6-month window</strong> to schedule and complete the exam. The CWCN exam is offered year-round — there are no fixed testing windows. WOCNCB charges no annual maintenance fees during the 5-year certification cycle.",
    ],
    rows: [
      { k: "Single specialty (CWCN)", v: "$395" },
      { k: "Two specialties (e.g., CWCN + CCCN)", v: "$510", highlight: true },
      { k: "Three specialties", v: "$610" },
      { k: "Four specialties", v: "$670" },
      { k: "First-attempt retake discount", v: "$100 off (one-time)" },
      { k: "Developing-country applicants", v: "$100 per specialty" },
      { k: "Recertification by exam", v: "Same as initial fee" },
      { k: "Annual maintenance fee", v: "None — $0" },
    ],
    factBox: {
      tone: "success",
      title: "Bundle pricing rewards multi-specialty candidates",
      html:
        "If you also qualify for CCCN, COCN, or CFCN, applying for two specialties in one submission costs <strong>$510 (saves $280)</strong>; three costs $610 (saves $575). WOCNCB also runs an <strong>Employer Discount Voucher Program</strong> that lets hospitals and health systems prepay vouchers for staff — ask your wound care program manager or HR before paying out of pocket.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "CWCN certification is valid for <strong>five years</strong>. WOCNCB offers two renewal pathways. <strong>Pathway 1 — Professional Growth Program (PGP):</strong> submit an online portfolio totaling <strong>80 PGP points</strong>, of which at least <strong>10 must be continuing education hours in the clinical specialty (wound care)</strong>. The PGP recognizes CE, publishing, precepting, professional society membership, presentations, and committee service.",
      "<strong>Pathway 2 — Recertification by Examination:</strong> retake and pass the current CWCN exam at the initial-application fee. There is no extended grace period for a lapsed CWCN — lapsed candidates must sit the full exam again to reinstate the credential.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the CWCN exam?",
    prose: [
      "WOCNCB reported that <strong>1,417 candidates sat the wound care exam in 2024 with a 68.3% pass rate</strong>. That figure sits in the same band as third-party vendor estimates of approximately 71% — both summarize the same WOCNCB statistics. The exam is meaningfully harder than entry-level RN credentials but accessible to BSN-prepared RNs who study the five-domain blueprint and target the heavy Treatment and Assessment domains.",
      "First-attempt failure carries a <strong>one-time $100 retake discount</strong>. WOCNCB does not impose a long mandatory wait between attempts beyond the application processing window, but candidates who fail should plan a structured restudy block — particularly in Treatment and Assessment — before rebooking rather than scheduling immediately.",
    ],
    rows: [{ year: "2024", pct: 68 }],
    target: 80,
    footnote:
      "Only 2024 is shown because WOCNCB publishes year-specific pass-rate data through annual reports and the 2024 figure is the most recent confirmed via third-party summaries of WOCNCB statistics.",
    factBox: {
      tone: "info",
      title: "The lever is question application, not memorization",
      html:
        "The published complexity mix is <strong>25% Recall, 61% Application, 14% Analysis</strong>. Most candidates lose points not from missing a fact but from failing to apply the right framework to a scenario — pressure injury staging vs MASD vs MARSI, autolytic vs sharp debridement selection, dressing categories matched to exudate volume. Practice with scenario-based items, not flashcards alone.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 10-week CWCN study plan",
    prose: [
      "A structured 10-week study plan is enough for most wound care RNs already meeting the eligibility hours — roughly <strong>80 to 120 total study hours</strong> across the five blueprint domains. Practice-question volume ramps through weeks 2–8 and peaks in week 9 with a full-length timed exam; week 10 is for targeted review, logistics, and a rest day.",
    ],
    weeks: [
      { n: 1, focus: "Read WOCNCB 2024 CWCN Detailed Content Outline + baseline diagnostic", qs: 25 },
      { n: 2, focus: "Assessment — pressure injury staging, vascular assessment, risk tools (Braden, ABI, TBI)", qs: 60 },
      { n: 3, focus: "Assessment — wound etiology, periwound characteristics, phases of healing", qs: 60 },
      { n: 4, focus: "Treatment — wound bed preparation (TIME), debridement modalities", qs: 60 },
      { n: 5, focus: "Treatment — topical therapies, dressing categories, antimicrobials", qs: 60 },
      { n: 6, focus: "Treatment — advanced / adjunctive (NPWT, HBOT, compression, total contact casting)", qs: 60 },
      { n: 7, focus: "Intervention — prevention bundles, support surfaces, offloading, friction/shear", qs: 60 },
      { n: 8, focus: "Care Planning + Education and Referral — goal-setting, patient ed, multidisciplinary referrals", qs: 60 },
      { n: 9, focus: "Full-length timed practice exam (120 items in 2 hours) + error-log review", qs: 120 },
      { n: 10, focus: "Targeted review of weak domains, rest, test day", qs: 40 },
    ],
    tipsHeading: "How CWCN candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Don't under-weight Treatment",
        text:
          "Treatment carries 29.5% of the exam (32 scored items) — by far the heaviest domain. Block dedicated weeks for debridement modality selection, dressing-category matching, and advanced/adjunctive therapies (NPWT, HBOT, compression, TCC).",
      },
      {
        kicker: "Pace 110 scored items in 2 hours",
        text:
          "Pacing is a trained skill. Take at least one full-length timed practice exam under real conditions before test day — about 60 seconds per item with buffer for marked review.",
      },
      {
        kicker: "Distinguish look-alike skin damage",
        text:
          "Pressure injury staging, MASD (moisture-associated skin damage), MARSI (medical adhesive-related skin injury), skin tears, and Wagner ulcers test repeatedly. Build a side-by-side comparison sheet — staging vs etiology vs management diverges quickly.",
      },
      {
        kicker: "Memorize the debridement decision tree",
        text:
          "Autolytic, enzymatic, mechanical, conservative sharp, surgical, and biologic each have distinct indications and contraindications. Practice picking the correct modality for adherent slough, eschar with cellulitis, painful arterial ulcer, and stalled granulation.",
      },
      {
        kicker: "Know your assessment tools cold",
        text:
          "Braden Scale, Norton Plus, ABI/TBI cutoffs (ABI <0.5 = severe LEAD, >1.3 = falsely elevated), and Wagner staging show up across Assessment and Treatment items. Build a one-page reference and review it the night before the exam.",
      },
    ],
  },

  // ---- SAMPLE QUESTION
  sample: {
    heading: "Sample CWCN question",
    prose: [
      "This item mirrors the WOCNCB scenario format: a short clinical stem, a wound care decision point, and four plausibly-correct options where only one is <em>best</em>. Try it before you read the rationale.",
    ],
    q: {
      scenario:
        "A 72-year-old long-term care resident has a Stage 3 sacral pressure injury measuring 4 cm x 3 cm x 0.5 cm with 70% adherent yellow slough across the wound bed. Periwound skin is intact. The patient is on chronic warfarin therapy with an INR of 2.6. Pain at rest is rated 2/10; the patient declines transfer to surgery.",
      stem: "Which debridement approach should the CWCN recommend?",
      options: [
        "Conservative sharp debridement at the bedside.",
        "Surgical debridement under anesthesia in the operating room.",
        "Autolytic debridement using a hydrogel and secondary dressing.",
        "Mechanical debridement with wet-to-dry gauze every shift.",
      ],
      correct: 2,
      rationale:
        "Autolytic debridement is the appropriate modality here. Conservative sharp debridement is contraindicated with the elevated INR of 2.6 (bleeding risk). Surgical debridement is inappropriate because the patient declined transfer. Wet-to-dry gauze is non-selective, painful, and damages healthy granulation tissue — it is no longer considered standard of care. A hydrogel donates moisture to support endogenous enzyme activity and is well tolerated.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key CWCN terms every candidate should know",
    prose: [
      "These terms surface in most CWCN exam items. Review them until the definitions feel automatic — scenario-based stems often hinge on recognizing which framework or staging system applies.",
    ],
    rows: [
      { term: "Pressure Injury Staging (NPIAP)", defn: "Six categories — Stage 1, Stage 2, Stage 3, Stage 4, Unstageable, and Deep Tissue Pressure Injury — defined by visible tissue damage rather than wound depth alone.", domain: "Assessment" },
      { term: "MASD", defn: "Moisture-Associated Skin Damage — inflammation and erosion of skin from prolonged exposure to urine, stool, perspiration, or wound exudate; not staged as a pressure injury.", domain: "Assessment" },
      { term: "MARSI", defn: "Medical Adhesive-Related Skin Injury — tears, blisters, or maceration caused by adhesive products; distinct from pressure injury or skin tear etiology.", domain: "Assessment" },
      { term: "ABI", defn: "Ankle-Brachial Index — ratio of ankle to brachial systolic BP screening for lower-extremity arterial disease; <0.9 abnormal, <0.5 severe, >1.3 non-compressible (often diabetic calcification).", domain: "Assessment" },
      { term: "TIME framework", defn: "Tissue management, Inflammation/Infection control, Moisture balance, Edge of wound advancement — the standard mental model for wound bed preparation.", domain: "Treatment" },
      { term: "Autolytic debridement", defn: "Use of moisture-retentive dressings (hydrogels, hydrocolloids) to let the body's endogenous enzymes liquefy devitalized tissue; selective and well tolerated.", domain: "Treatment" },
      { term: "Conservative sharp debridement", defn: "Bedside removal of clearly devitalized tissue using sterile instruments by a trained clinician; requires bleeding-risk and pain assessment before performing.", domain: "Treatment" },
      { term: "NPWT", defn: "Negative Pressure Wound Therapy — application of sub-atmospheric pressure to a sealed wound to remove exudate and promote granulation; contraindicated over malignancy and untreated osteomyelitis.", domain: "Treatment" },
      { term: "Braden Scale", defn: "Six-subscale tool (sensory perception, moisture, activity, mobility, nutrition, friction/shear) scoring 6–23; lower scores indicate higher pressure injury risk.", domain: "Assessment" },
      { term: "Wagner Classification", defn: "0–5 grading system for diabetic foot ulcers based on depth and presence of infection or gangrene; guides surgical and offloading decisions.", domain: "Assessment" },
      { term: "Total Contact Casting", defn: "Gold-standard offloading device for plantar neuropathic ulcers; redistributes pressure over the entire foot and lower leg, requires intact arterial supply.", domain: "Treatment" },
      { term: "PGP", defn: "Professional Growth Program — WOCNCB's portfolio-based recertification path requiring 80 points (10 in clinical specialty CE) over 5 years as an alternative to re-exam.", domain: "Renewal" },
      { term: "WOCNEP", defn: "WOC Nursing Education Program — an accredited specialty program graduates can use as the Traditional Pathway to CWCN eligibility within 5 years of completion.", domain: "Eligibility" },
      { term: "Periwound", defn: "Skin within 4 cm of the wound edge; assessed for induration, temperature, fluctuance, denudation, maceration, and cellulitis — drives dressing choice.", domain: "Assessment" },
      { term: "Epibole", defn: "Rolled or curled wound edge that has rolled inward, signaling stalled migration of epithelial cells; commonly requires edge optimization.", domain: "Assessment" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "CWCN vs. CWOCN, CWON, WCC, CWS",
    prose: [
      "CWCN sits alongside several related credentials that wound care clinicians sometimes consider. Many candidates Google \"CWCN\" when they actually mean WCC or CWOCN, so the distinction matters before you spend time or money.",
    ],
    rows: [
      { row: "CWCN", highlight: true, body: "WOCNCB", scope: "Wound care only", who: "BSN-prepared RNs focused on wound management" },
      { row: "CWOCN", body: "WOCNCB", scope: "Wound + ostomy + continence", who: "BSN-prepared RNs spanning all three specialties" },
      { row: "CWON", body: "WOCNCB", scope: "Wound + ostomy (no continence)", who: "BSN-prepared RNs in dual wound/ostomy roles" },
      { row: "CFCN", body: "WOCNCB", scope: "Foot care nursing", who: "BSN-prepared RNs in diabetic and high-risk foot programs" },
      { row: "WCC", body: "NAWCO", scope: "Wound care — interdisciplinary", who: "RNs, LPNs, PTs, MDs, and other clinicians; no BSN required" },
      { row: "CWS", body: "ABWM", scope: "Wound care — advanced interdisciplinary", who: "Any clinician with a bachelor's degree (RN, PT, MD, etc.)" },
      { row: "CWCA", body: "NAWCO", scope: "Entry-level wound care", who: "Non-licensed wound care staff" },
    ],
    closingProse:
      "<strong>Take CWCN if you are a BSN-prepared RN focused on wound care and not on ostomy or continence.</strong> Pick CWOCN if your role spans all three specialties; CWON if you cover wound and ostomy. Consider WCC or CWS if you do not hold a BSN, or if you are a non-RN clinician — both accept broader eligibility but are not WOCNCB credentials.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about CWCN certification",
    items: [
      { q: "What does CWCN stand for in nursing?", a: "CWCN stands for Certified Wound Care Nurse. The credential is issued by the Wound, Ostomy and Continence Nursing Certification Board (WOCNCB)." },
      { q: "Is CWCN the same as CWOCN?", a: "No. CWCN covers wound care only. CWOCN — Certified Wound, Ostomy, and Continence Nurse — covers wound, ostomy, and continence in a single credential. Both are WOCNCB-issued." },
      { q: "Do I need a BSN to take the CWCN exam?", a: "Yes. WOCNCB requires a Baccalaureate or higher degree in nursing as a hard eligibility gate. ASN and diploma RNs must complete BSN coursework before applying." },
      { q: "How long does it take to prepare for the CWCN exam?", a: "Most wound care RNs prepare for 8 to 12 weeks. A realistic target is 80 to 120 total study hours weighted toward the Treatment (29.5%) and Assessment (23.5%) domains." },
      { q: "Is the CWCN exam hard?", a: "The CWCN exam is moderately difficult. The 2024 pass rate was 68.3% across 1,417 candidates. Candidates who skim the Treatment domain or rely on memorization rather than scenario practice tend to struggle." },
      { q: "What's the difference between the Traditional and Experiential eligibility pathways?", a: "The Traditional Pathway requires graduation from an accredited WOC Nursing Education Program within the past 5 years. The Experiential Pathway requires 50 CE hours plus 1,500 wound-care patient-care hours in the past 5 years, with at least 375 of those hours in the past 12 months." },
      { q: "What happens if I fail the CWCN exam?", a: "WOCNCB offers a one-time $100 discount on the next application after a failed first attempt. There is no long mandatory wait beyond the application processing window, but plan a structured restudy block before rebooking." },
      { q: "Does CWCN certification expire?", a: "Yes. CWCN certification is valid for 5 years. Renew through the Professional Growth Program (80 PGP points including 10 clinical-specialty CE hours) or by retaking the current exam." },
      { q: "Will my hospital pay for CWCN certification?", a: "Many health systems reimburse the WOCNCB application fee through a certification benefit. Employers can also use the WOCNCB Employer Discount Voucher Program. Ask your wound care program manager or HR before paying out of pocket." },
      { q: "Is CWCN recognized outside the United States?", a: "WOCNCB credentials are US-focused, with eligibility tied to a US or US-territory RN license. International applicants should contact WOCNCB directly to confirm eligibility before applying." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following primary sources. Fees, blueprint weights, and recertification rules shift on WOCNCB's revision cycle — always verify numeric facts against the current WOCNCB candidate examination handbook before relying on them for application decisions.",
    ],
    list: [
      "Wound, Ostomy and Continence Nursing Certification Board (WOCNCB) — WOC Certification page (eligibility, exam format, pathways)",
      "WOCNCB — 2024 CWCN Detailed Content Outline (PDF) — five-domain blueprint, task-level weights, complexity mix",
      "WOCNCB — Fees page (single-specialty $395, bundle pricing, retake discount, developing-country tier)",
      "WOCNCB — Recertification page (Professional Growth Program, 80 points, 10 clinical-specialty CE, re-exam pathway)",
      "WOCNCB — WOC Exam page (PSI delivery, 6-month eligibility window, year-round scheduling)",
      "WOCN Society — Core Curriculum for Wound Management (companion study text)",
      "Mometrix — Free CWCN Practice Test summary (scaled passing score of 500, current pass-rate range)",
      "WoundEducators — Wound Care Certification difficulty review (2024 wound exam pass rate 68.3% across 1,417 candidates)",
      "Vivian Health — CWCN Complete Guide (eligibility pathways and salary context)",
      "Research.com — How To Become a Wound Care Nurse (BLS salary context and career paths)",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice CWCN-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to the 2024 WOCNCB blueprint. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full CWCN question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "CWOCN",
      title: "CWCN vs CWOCN: which WOCNCB credential fits your role?",
      blurb: "Blueprint overlap, eligibility differences, and when stacking ostomy and continence is worth the extra study time.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "Treatment: the 29.5% domain that decides CWCN first-time pass",
      blurb: "Why Treatment is the heaviest CWCN domain — debridement modalities, dressing categories, NPWT, HBOT, compression, and TCC.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "Wound clinic",
      title: "Landing an outpatient wound clinic role with CWCN on your badge",
      blurb: "How wound clinics actually use CWCN-holder counts and what hiring managers look for beyond the credential.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
