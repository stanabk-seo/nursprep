// CPEN exam detail page — structured data.
// Sourced from Content/CPEN_research.json (verified against BCEN primary
// sources: CPEN program page, eligibility, cost, about-the-exam, program
// overview, the 2016 sole-ownership news release, and BCEN recertification,
// plus CPEN-101 pass-rate data and BLS OEWS, as of 2026-05-21).
// Lives at /certifications/cpen/ via the paginated template.

module.exports = {
  code: "CPEN",
  name: "Certified Pediatric Emergency Nurse",
  body: "BCEN",
  cat: "critical",
  catLabel: "Critical & Emergency Care",
  updated: "2026-05",

  // Page-level SEO (primary keyword "CPEN exam" in title + description)
  seo: {
    title:
      "CPEN Exam Guide: Eligibility, Cost & Renewal | NursPrep",
    description:
      "Everything pediatric ED nurses need on the CPEN exam in 2026 — BCEN eligibility, the 150-item blueprint, $285 fee, ~64% pass rate, and a study plan.",
    ogTitle:
      "CPEN Exam Guide 2026 — Certified Pediatric Emergency Nurse",
    ogDescription:
      "BCEN eligibility, the six-domain CPEN blueprint, $285 ENA-member fee, ~64% pass rate, and an 8-week study plan for pediatric emergency RNs.",
  },

  // ---- HERO
  lede:
    "CPEN — Certified Pediatric Emergency Nurse — is the board certification for registered nurses who care for children in emergency settings. The credential is issued by the Board of Certification for Emergency Nursing (BCEN) and validates the clinical judgment a pediatric emergency RN uses every shift, from triage through resuscitation.",
  heroPills: [
    { k: "Questions", v: "175 items" },
    { k: "Duration", v: "3 hours" },
    { k: "Renewal", v: "4 years" },
    { k: "Pass rate", v: "~64%" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "Board of Certification for Emergency Nursing (BCEN)" },
    { k: "Format", v: "Pearson VUE + Live Remote Proctoring" },
    { k: "Scored items", v: "150 of 175 (25 unscored pretest)" },
    { k: "Passing score", v: "~110 / 150 scored (~73%, scaled)" },
    { k: "Eligibility", v: "Current, unencumbered RN license" },
    { k: "Experience", v: "2 yrs pediatric ED recommended (not required)" },
    { k: "Fee (ENA member)", v: "$285 · non-member $380" },
    { k: "Renewal cycle", v: "4 years — 100 CE hours or re-exam" },
  ],
  heroCardFoot:
    "Verified against BCEN's CPEN program, eligibility, and cost pages as of 2026-05",

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
    { id: "compare", label: "CPEN vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "CPEN certification at a glance",
    prose: [
      "CPEN — Certified Pediatric Emergency Nurse — is the RN-level benchmark for pediatric emergency nursing. The credential is issued by the <strong>Board of Certification for Emergency Nursing (BCEN)</strong>, which launched the exam in <strong>January 2009</strong>.",
      "CPEN began as a 50-50 partnership between BCEN and the <strong>Pediatric Nursing Certification Board (PNCB)</strong>. In June 2016 the two boards dissolved that partnership, and BCEN became the sole owner of CPEN. You may still see the credential listed as \"BCEN/PNCB\" in older references.",
      "CPEN is a board certification, not a course. It is sometimes confused with CPN — the PNCB's general Certified Pediatric Nurse credential — but only CPEN validates pediatric <em>emergency</em> nursing specifically.",
    ],
    stats: [
      { n: "175", l: "Total items", sub: "150 scored · 25 pretest" },
      { n: "3 hrs", l: "Time limit", sub: "Continuous, computer-based" },
      { n: "~64%", l: "2024 pass rate", sub: "673 of 1,058 candidates" },
      { n: "4 yrs", l: "Renewal cycle", sub: "100 CE hours or re-exam" },
    ],
    factBox: {
      tone: "info",
      title: "Who owns CPEN today?",
      html:
        "BCEN is the <strong>sole owner of CPEN as of June 2016</strong>. The credential was co-sponsored with PNCB from its 2009 launch, which is why some directories still print \"BCEN/PNCB.\" For applications, fees, and recertification, BCEN is the single point of contact today.",
    },
    coverImageLabel:
      "Pediatric emergency RN assessing a child in a children's hospital ED",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the CPEN exam?",
    prose: [
      "Yes — if you hold a <strong>current, unencumbered RN license</strong> in the United States, a US territory, Canada, or Australia. BCEN does not enforce a minimum-hours rule for CPEN.",
      "An international nursing certificate equivalent to a US RN license is also accepted, provided it is verified through <strong>TruMerit</strong> (BCEN's international credential-evaluation partner). Any active restriction, suspension, or probation on a nursing license disqualifies a candidate.",
      "BCEN <em>recommends</em> at least two years of pediatric emergency nursing experience before testing. That recommendation is guidance, not a gate — you may sit the exam without it.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You have roughly two years of pediatric emergency RN practice, in a pediatric ED, mixed ED, or children's hospital.",
      "You triage children confidently using the Pediatric Assessment Triangle (PAT) and an acuity tool such as ESI.",
      "You routinely manage respiratory, cardiac, neurologic, and multi-system pediatric emergencies, including sepsis and anaphylaxis.",
      "Your setting fits a recognized pediatric emergency role: pediatric or mixed ED, children's hospital, pediatric trauma center, urgent care, or prehospital and critical-care transport.",
    ],
  },

  // ---- BLUEPRINT (scored-item counts, total 150; pcts computed and rounded)
  blueprint: {
    heading: "CPEN exam blueprint — six domains (150 scored items)",
    prose: [
      "The CPEN blueprint is six domains, weighted by where most pediatric emergency nursing decisions happen. <strong>System-Focused Emergencies</strong> alone carries about 37% of the scored exam — most of your study time should live there.",
      "Do not neglect Triage and Assessment. Together they account for roughly 30% of scored items and anchor nearly every scenario stem. Professional Issues feels abstract at the bedside but reliably appears on the exam.",
    ],
    domains: [
      { label: "Triage Process (PAT, ESI, emergency preparedness)", weight: 20 },
      { label: "Assessment (history, physical, pain)", weight: 25 },
      { label: "System-Focused Emergencies (respiratory, cardiac, neuro, GI/GU, ENT, MSK, heme/onc, endocrine)", weight: 56 },
      { label: "Special Considerations (neonatal, behavioral health, maltreatment, environmental, toxicology, communicable disease)", weight: 25 },
      { label: "Multi-System Considerations (sepsis, anaphylaxis, sedation)", weight: 12 },
      { label: "Professional Issues", weight: 12 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and military benefits",
    prose: [
      "BCEN delivers CPEN through Pearson VUE in-person testing centers and via <strong>Live Remote Proctoring (LRP)</strong> for candidates who prefer to test from a private location. After BCEN approves your application, you receive an Authorization to Test with a scheduling window — book your Pearson VUE seat or LRP slot promptly.",
    ],
    rows: [
      { k: "Initial application — ENA member", v: "$285" },
      { k: "Initial application — non-member", v: "$380", highlight: true },
      { k: "Military / veteran application", v: "$195 (or $265 with Test Assurance)" },
      { k: "Retest (within one year of initial exam)", v: "$200" },
      { k: "Initial with BCEN Test Assurance — non-member", v: "$450" },
      { k: "Initial with BCEN Test Assurance — ENA member", v: "$355" },
    ],
    factBox: {
      tone: "success",
      title: "BCEN Test Assurance gives a free second attempt",
      html:
        "For an upfront add-on (initial exam $450, ENA member $355, military $265), <strong>BCEN Test Assurance covers a free retest</strong> if your first attempt is unsuccessful. Many children's hospitals and Level I/II EDs also reimburse the CPEN fee — ask your educator or manager before paying out of pocket.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "CPEN certification is valid for <strong>four years</strong>. BCEN offers two renewal pathways. <strong>Pathway 1 — Recertification by CE Attestation:</strong> complete <strong>100 continuing education contact hours</strong> in the cycle and attest to an active, unencumbered RN license. Keep your CE certificates, because BCEN audits a share of renewals.",
      "<strong>Pathway 2 — Recertification by Examination:</strong> retake and pass the current CPEN exam. Recertification fees mirror the initial-application schedule, and military/veteran and voucher discounts also apply to recertification.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the CPEN exam?",
    prose: [
      "In 2024, <strong>673 of 1,058</strong> CPEN candidates passed the exam — a pass rate near <strong>64%</strong>. That sits in the moderate range for BCEN specialty exams, partly because CPEN spans the full breadth of pediatric emergencies rather than a single body system.",
      "Candidates who follow a structured 8 to 10-week plan and complete at least one full-length timed practice exam pass at meaningfully higher rates than those relying on work experience alone. The biggest avoidable gap is under-studying System-Focused Emergencies, which is more than a third of the scored exam.",
    ],
    rows: [{ year: "2024", pct: 64 }],
    target: 80,
    footnote:
      "2024 pass-rate counts (673 of 1,058) are reported by CPEN-101, a corroborating source; BCEN publishes summary statistics on its certification-statistics page. The displayed 64% rounds 63.6%.",
    factBox: {
      tone: "info",
      title: "The lever is timed practice, not more reading",
      html:
        "The single biggest predictor of a first-time pass is <strong>at least one full-length timed 175-item practice exam</strong> under real conditions. Pacing 150 scored items in 3 hours is a trained skill — fatigue in the last block is where unprepared candidates lose the most points.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "An 8-week CPEN study plan",
    prose: [
      "A structured 8-week study plan is enough for most pediatric emergency RNs with two or more years of practice — roughly <strong>60 to 100 total study hours</strong> across the six blueprint domains. Practice-question volume ramps through weeks 2–6 and peaks in week 7 with a full-length timed exam; week 8 is for targeted review and a rest day.",
    ],
    weeks: [
      { n: 1, focus: "Read the BCEN CPEN content outline + a baseline diagnostic exam", qs: 25 },
      { n: 2, focus: "Triage (PAT, ESI) and assessment — history, physical, pain", qs: 40 },
      { n: 3, focus: "Respiratory and cardiac emergencies (highest-yield systems)", qs: 60 },
      { n: 4, focus: "Neurologic, GI/GU, ENT, MSK, heme/onc, endocrine emergencies", qs: 60 },
      { n: 5, focus: "Special considerations — neonatal, maltreatment, toxicology, environmental", qs: 60 },
      { n: 6, focus: "Multi-system — sepsis, anaphylaxis, sedation — and professional issues", qs: 60 },
      { n: 7, focus: "Full-length timed practice exam + error-log review", qs: 175 },
      { n: 8, focus: "Targeted review of weak domains, rest, test day", qs: 40 },
    ],
    tipsHeading: "How CPEN candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Don't under-study System-Focused Emergencies",
        text:
          "System-Focused Emergencies is about 37% of the scored exam. Block dedicated weeks for respiratory, cardiac, and neurologic pediatric emergencies — these systems carry the most items.",
      },
      {
        kicker: "Master pediatric triage frameworks",
        text:
          "The Pediatric Assessment Triangle (PAT) and ESI anchor most triage and scenario stems. Know how appearance, work of breathing, and circulation drive your acuity decision.",
      },
      {
        kicker: "Pace 150 scored items in 3 hours",
        text:
          "Take at least one full-length timed practice exam under real conditions before test day. Pacing is a trained skill — otherwise fatigue in the last block is where your score slips.",
      },
      {
        kicker: "Don't skip Special Considerations",
        text:
          "Child maltreatment, toxicology, environmental emergencies, and behavioral health are tested even though they are less frequent at the bedside. Review the recognition and reporting steps.",
      },
      {
        kicker: "Know your weight-based dosing and equipment cold",
        text:
          "Pediatric resuscitation hinges on weight-based drug doses, length-based tape sizing, and age-appropriate vital-sign ranges. Build a one-page reference and review it the night before.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (illustrative, mirrors BCEN scenario format)
  sample: {
    heading: "Sample CPEN question",
    prose: [
      "This item mirrors BCEN's scenario format: a short pediatric clinical stem, an unstable child, and four plausible options where only one is <em>best</em>. Try it before you read the rationale.",
    ],
    q: {
      scenario:
        "A 2-year-old is brought to the pediatric ED with 2 days of fever, lethargy, and poor feeding. On arrival: HR 190, RR 60, capillary refill 4 seconds, mottled skin, and a weak cry. The Pediatric Assessment Triangle shows abnormal appearance and abnormal circulation.",
      stem: "Which nursing action should the pediatric emergency RN prioritize first?",
      options: [
        "Obtain a full set of vital signs and reassess in 15 minutes.",
        "Establish vascular access and begin a 20 mL/kg isotonic fluid bolus.",
        "Administer an oral antipyretic and place the child in a quiet room.",
        "Send blood cultures and wait for results before any intervention.",
      ],
      correct: 1,
      rationale:
        "The child shows compensated-to-decompensated septic shock — abnormal appearance plus abnormal circulation on the PAT, tachycardia, and delayed capillary refill. Early, aggressive fluid resuscitation (a 20 mL/kg isotonic bolus through prompt vascular access) is the priority. Antipyretics and waiting on cultures delay the time-critical intervention.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key CPEN terms every candidate should know",
    prose: [
      "These terms surface across CPEN exam items. Review them until the definitions feel automatic — scenario stems often hinge on recognizing which pediatric framework applies.",
    ],
    rows: [
      { term: "PAT", defn: "Pediatric Assessment Triangle — a rapid, hands-off first impression using appearance, work of breathing, and circulation to the skin.", domain: "Triage" },
      { term: "ESI", defn: "Emergency Severity Index — a five-level triage acuity tool that ranks patients by severity and predicted resource needs.", domain: "Triage" },
      { term: "Length-based tape", defn: "A color-coded tape (e.g., Broselow) that estimates a child's weight from length to guide drug dosing and equipment sizing.", domain: "Assessment" },
      { term: "Compensated shock", defn: "Early shock where blood pressure is maintained by tachycardia and vasoconstriction; recognized by delayed capillary refill before hypotension appears.", domain: "Multi-System" },
      { term: "Weight-based dosing", defn: "Pediatric medication dosing calculated in mg/kg, the foundation of safe resuscitation and a frequent CPEN item type.", domain: "System-Focused" },
      { term: "Croup vs. epiglottitis", defn: "Two upper-airway emergencies CPEN tests: croup (viral, barky cough, stridor) versus epiglottitis (bacterial, drooling, tripod posture, toxic appearance).", domain: "System-Focused" },
      { term: "Child maltreatment", defn: "Suspected abuse or neglect; CPEN tests recognition of red-flag injury patterns and the nurse's mandatory-reporting duty.", domain: "Special" },
      { term: "Criterion-referenced score", defn: "A pass/fail standard set against a fixed competency benchmark, not a curve — your result does not depend on other candidates.", domain: "Professional" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "CPEN vs. CPN, CEN, and ENPC",
    prose: [
      "CPEN sits alongside several pediatric and emergency credentials that nurses sometimes confuse. Many candidates Google \"CPEN\" when they actually mean CPN or ENPC, so the distinction matters before you spend time or money.",
    ],
    rows: [
      { row: "CPEN", highlight: true, body: "BCEN", scope: "Pediatric emergency nursing", who: "RNs caring for children in emergency settings" },
      { row: "CPN", body: "PNCB", scope: "General pediatric nursing across settings", who: "RNs in inpatient or outpatient peds" },
      { row: "CEN", body: "BCEN", scope: "Adult and pediatric emergency nursing", who: "ED RNs covering all presentations" },
      { row: "ENPC (course, not cert)", body: "ENA", scope: "Baseline pediatric emergency assessment", who: "ED RNs as foundational training" },
      { row: "TCRN", body: "BCEN", scope: "Trauma nursing across the continuum", who: "RNs in trauma-touching roles" },
    ],
    closingProse:
      "<strong>Take CPEN if you want to validate pediatric emergency expertise specifically.</strong> Take CPN instead if your work is general pediatrics across inpatient and outpatient settings. Take CEN if your day-to-day is broad, all-ages ED practice. ENPC is baseline education — it does not replace CPEN on your credentials line.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about the CPEN exam",
    items: [
      { q: "What does CPEN stand for in nursing?", a: "CPEN stands for Certified Pediatric Emergency Nurse. The credential is issued by the Board of Certification for Emergency Nursing (BCEN)." },
      { q: "Who issues the CPEN certification?", a: "BCEN issues CPEN and has been its sole owner since June 2016. The exam launched in 2009 as a 50-50 partnership between BCEN and the Pediatric Nursing Certification Board (PNCB)." },
      { q: "Is CPEN the same as CPN?", a: "No. CPEN is BCEN's pediatric emergency nursing certification, while CPN is the PNCB's general Certified Pediatric Nurse credential covering pediatric care across all settings." },
      { q: "Am I eligible for the CPEN exam without 2 years of experience?", a: "Yes. BCEN recommends two years of pediatric emergency experience but does not require it. You only need a current, unencumbered RN license." },
      { q: "How many questions are on the CPEN exam?", a: "The CPEN exam has 175 multiple-choice items — 150 scored and 25 unscored pretest items — with a 3-hour time limit." },
      { q: "How much does the CPEN exam cost?", a: "The CPEN exam costs $285 for ENA members and $380 for non-members. Active-duty service members, reservists, and veterans pay $195, and the retest fee is $200." },
      { q: "Is the CPEN exam hard?", a: "The CPEN exam is moderately difficult. The 2024 pass rate was about 64% (673 of 1,058 candidates). Most failures come from under-studying System-Focused Emergencies." },
      { q: "How do I renew my CPEN certification?", a: "CPEN is valid for four years. You renew by completing 100 continuing education contact hours and attesting to an active RN license, or by retaking and passing the exam." },
      { q: "What happens if I fail the CPEN exam?", a: "You can apply to retake the exam at a discounted retest fee of $200 within one year of your initial exam date. BCEN Test Assurance covers a free retest if purchased upfront." },
      { q: "Is CPEN recognized for Magnet status?", a: "Yes. CPEN is accredited by the Accreditation Board for Specialty Nursing Certification (ABSNC) and accepted by the ANCC Magnet Recognition Program." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following sources. Fees, blueprint weights, and recertification rules shift on BCEN's revision cycle — always verify numeric facts against the current BCEN materials before relying on them for application decisions.",
    ],
    list: [
      "Board of Certification for Emergency Nursing (BCEN) — CPEN Certification program page (bcen.org/cpen/)",
      "BCEN — CPEN Exam Fees & Discounts ($380 / $285 ENA / $195 military / $200 retest; Test Assurance)",
      "BCEN — CPEN Eligibility (unencumbered RN license; TruMerit for international; 2-year recommendation)",
      "BCEN — About the CPEN Exam (175 items, 150 scored / 25 pretest, 3 hours, Pearson VUE + LRP)",
      "BCEN — Pediatric Emergency Excellence: CPEN Program Overview (2009 launch; co-sponsorship history)",
      "BCEN — News release: CPEN Certification to be Solely Owned by BCEN (June 2016)",
      "BCEN — How to Recertify (4-year cycle; 100 CE hours or re-exam)",
      "CPEN 101 — CPEN Pass Rates (2024: 673 of 1,058; ~63.6%)",
      "US Bureau of Labor Statistics (BLS) — Occupational Employment and Wage Statistics, Registered Nurses (May 2024): $98,430 mean RN wage",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice CPEN-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to the six-domain CPEN blueprint. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full CPEN question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "CPN",
      title: "CPEN vs CPN: which pediatric nursing certification fits you?",
      blurb: "Scope, issuing board, and career impact — for peds RNs deciding between emergency-focused CPEN and the broader CPN credential.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "System-Focused Emergencies: the domain that decides CPEN first-time pass",
      blurb: "Why System-Focused Emergencies is more than a third of your score, and the respiratory, cardiac, and neuro concepts BCEN tests most.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "Pediatric ED",
      title: "Landing a children's-hospital ED role with CPEN on your badge",
      blurb: "How pediatric emergency departments use CPEN-holder counts, and what hiring managers look for beyond the credential.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
