// CIC exam detail page — structured data.
// Sourced from Content/CIC_research.json (verified against CBIC primary
// sources — About the CIC Exam, CIC Eligibility Guidelines, 2021 Content
// Outline, Recertification, and APIC History of CBIC — as of 2026-05-21).
// Lives at /certifications/cic/ via the paginated template.
//
// NOTE: CBIC does not publicly publish a CIC pass rate. Per the no-invention
// rule, passrate.rows is left empty and the footnote states this explicitly.
// Fee shown is $445 (current CBIC About-the-Examination page); a January 2025
// CBIC fee-schedule PDF listed $430 — discrepancy flagged in research.json.

module.exports = {
  code: "CIC",
  name: "Certification in Infection Control",
  body: "CBIC",
  cat: "specialty",
  catLabel: "Medical-Surgical & Specialty",
  updated: "2026-05",

  // ---- Page-level SEO
  seo: {
    title:
      "Infection Preventionist Certification: CIC Guide | NursPrep",
    description:
      "Everything infection preventionists need on CIC certification — CBIC eligibility, the 8-domain blueprint, the 150-item exam, $445 fee, and 5-year renewal.",
    ogTitle:
      "Infection Preventionist Certification (CIC) — Complete 2026 Guide",
    ogDescription:
      "CBIC eligibility, the 8-domain blueprint, scaled passing score of 700, $445 fee, and the 5-year recertification cycle for infection preventionists.",
  },

  // ---- HERO
  lede:
    "CIC — Certification in Infection Control — is the board credential for infection preventionists, awarded by the Certification Board of Infection Control and Epidemiology (CBIC). It validates the core knowledge an infection preventionist applies across acute care, ambulatory, and public-health settings — surveillance, transmission prevention, sterilization, and program management.",
  heroPills: [
    { k: "Questions", v: "150 items" },
    { k: "Duration", v: "3 hours" },
    { k: "Renewal", v: "5 years" },
    { k: "Pass rate", v: "Not published" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "Certification Board of Infection Control and Epidemiology (CBIC)" },
    { k: "Format", v: "Prometric test center or ProProctor remote" },
    { k: "Scored items", v: "135 of 150 (15 unscored pretest)" },
    { k: "Passing score", v: "Scaled 700 (300–900 scale)" },
    { k: "Eligibility", v: "Direct responsibility for IPC + qualifying experience" },
    { k: "Experience", v: "1 yr full-time, 2 yrs part-time, or 3,000 hours in 3 years" },
    { k: "Fee", v: "$445 examination fee" },
    { k: "Renewal cycle", v: "5 years — IPU portfolio or re-examination" },
  ],
  heroCardFoot:
    "Verified against the CBIC About-the-Examination page, CIC Eligibility Guidelines, and 2021 Content Outline",

  // ---- TOC
  sections: [
    { id: "overview", label: "Overview" },
    { id: "eligibility", label: "Eligibility" },
    { id: "blueprint", label: "Exam blueprint" },
    { id: "cost", label: "Cost & scheduling" },
    { id: "passrate", label: "Scoring & difficulty" },
    { id: "plan", label: "Study plan" },
    { id: "sample", label: "Sample Question" },
    { id: "keyterms", label: "Key terms" },
    { id: "compare", label: "CIC vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "CIC certification at a glance",
    prose: [
      "CIC — Certification in Infection Control — is the recognized board credential for infection preventionists. It is issued by the <strong>Certification Board of Infection Control and Epidemiology, Inc. (CBIC)</strong>, an independent body created by APIC in 1981; CBIC administered its first certification exam in <strong>1983</strong>.",
      "CIC is a board certification, not a course. \"Infection preventionist\" is the job role; CIC is the credential that role earns. Candidates often confuse CIC with CBIC's entry-level <strong>a-IPC</strong> credential and its long-term-care <strong>LTC-CIP</strong> credential — only CIC is the experience-gated, all-settings certification.",
    ],
    stats: [
      { n: "150", l: "Total items", sub: "135 scored · 15 pretest" },
      { n: "3 hrs", l: "Testing time", sub: "Two 90-minute sections" },
      { n: "700", l: "Passing score", sub: "Scaled, on a 300–900 range" },
      { n: "5 yrs", l: "Renewal cycle", sub: "IPU portfolio or re-exam" },
    ],
    factBox: {
      tone: "info",
      title: "Forward-navigation format (effective 2025-01-02)",
      html:
        "Since <strong>January 2, 2025</strong>, the CIC exam uses <strong>forward navigation</strong>: candidates answer each item in order and cannot skip questions or return to earlier ones. The text highlight and strikeout tools remain available. Plan your pacing accordingly — the first 75 questions must be completed in the first 90-minute section.",
    },
    coverImageLabel:
      "Infection preventionist reviewing surveillance data on a hospital unit",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the CIC exam?",
    prose: [
      "Likely yes — if you are <strong>directly responsible</strong> for infection prevention and control program activities and meet CBIC's experience recommendation. CBIC does not enforce a nursing-only rule or a fixed degree gate; nurses, microbiologists, public-health practitioners, and epidemiologists all sit the same exam.",
      "CBIC recommends <strong>post-secondary education in a health-related field</strong> and qualifying work experience: <strong>at least one year full-time</strong>, <strong>two years part-time</strong>, or <strong>3,000 hours of infection-prevention work within the previous three years</strong>. Your activity must span the five core IPC areas plus at least two of the remaining three components.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You hold direct responsibility for your facility's infection prevention and control program, reflected in your current job description.",
      "You have at least one year of full-time IPC experience (or two years part-time, or 3,000 hours within the last three years).",
      "Your work covers identification of infectious disease processes, surveillance and epidemiologic investigation, transmission prevention, environment of care, and cleaning/sterilization/disinfection/asepsis.",
      "You also engage in at least two of: employee/occupational health, management and communication, or education and research.",
    ],
  },

  // ---- BLUEPRINT (weights = NursPrep-computed % from CBIC scored-item counts; sum to 100)
  blueprint: {
    heading: "What does the CIC exam cover? Eight domains",
    prose: [
      "The CIC blueprint spans <strong>eight domains</strong>, drawn from CBIC's 2021 content outline (built on the 2020 practice analysis). The three largest domains — <strong>Preventing/Controlling Transmission</strong>, <strong>Surveillance and Epidemiologic Investigation</strong>, and <strong>Identification of Infectious Disease Processes</strong> — together carry about half of the scored items, so most study time should live there.",
      "Do not neglect the smaller program domains. Employee/occupational health, management and communication, and education and research feel administrative at the bedside but reliably appear on the exam. The percentages below are NursPrep-computed from CBIC's published scored-item counts (135 scored items total) and are rounded for clarity.",
    ],
    domains: [
      { label: "Preventing/Controlling Transmission of Infectious Agents", weight: 19 },
      { label: "Surveillance and Epidemiologic Investigation", weight: 18 },
      { label: "Identification of Infectious Disease Processes", weight: 16 },
      { label: "Cleaning, Sterilization, Disinfection, Asepsis", weight: 11 },
      { label: "Environment of Care", weight: 10 },
      { label: "Management and Communications", weight: 10 },
      { label: "Employee/Occupational Health", weight: 8 },
      { label: "Education and Research", weight: 8 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and exam format",
    prose: [
      "The CIC examination fee is <strong>$445 USD</strong>, submitted with your application (a January 2025 CBIC fee-schedule PDF listed $430; CBIC's current About-the-Examination page lists $445 — verify the live figure before you pay). CBIC delivers the exam through <strong>Prometric test centers</strong> and Prometric's <strong>ProProctor</strong> remote-proctoring system, so you can test in person or from a private location.",
      "The exam runs as <strong>two 90-minute sections</strong> (180 minutes of testing) with a 10-minute tutorial, an optional 16-minute break after Section 1, and a short closing survey. The first 75 questions must be completed in the first 90-minute section, and you cannot return to Section 1 after the break.",
    ],
    rows: [
      { k: "CIC initial examination fee", v: "$445", highlight: true },
      { k: "CIC recertification by examination", v: "$430" },
      { k: "CIC recertification by IPU portfolio", v: "$430" },
      { k: "Delivery", v: "Prometric center or ProProctor remote" },
      { k: "Total items", v: "150 (135 scored, 15 pretest)" },
      { k: "Testing time", v: "Two 90-minute sections" },
    ],
    factBox: {
      tone: "info",
      title: "Check for employer reimbursement first",
      html:
        "Many hospitals and health systems reimburse the CIC application fee and offer paid study time for infection preventionists. Ask your IPC director or HR before paying out of pocket. APIC also offers CIC preparation resources for members.",
    },
    renewalHeading: "Recertification",
    renewalProse: [
      "CIC certification is valid for <strong>five years</strong>; all certifications expire on December 31 at the end of the five-year cycle. Effective <strong>January 1, 2026</strong>, CBIC offers two recertification pathways: <strong>Infection Prevention Units (IPU portfolio)</strong> or <strong>retaking the proctored CIC examination</strong>. Both pathways cost $430.",
      "Plan recertification well before your expiration date. Keep documentation of your IPUs throughout the cycle so the portfolio pathway is straightforward when your renewal window opens.",
    ],
  },

  // ---- PASS RATE / SCORING
  passrate: {
    heading: "How is the CIC exam scored, and how hard is it?",
    prose: [
      "CIC scoring uses a <strong>scaled score from 300 to 900</strong>, and you need at least <strong>700 to pass</strong>. Passing candidates receive only a \"Pass\" message — no numeric score — while failing candidates receive a scaled score between 300 and 699. The scaled score adjusts for small differences between exam forms, so a 700 reflects the same standard of knowledge regardless of which version you take.",
      "<strong>CBIC does not publicly publish a CIC pass rate</strong>, so any specific percentage you see quoted elsewhere is not an official figure. Treat the exam as content-broad rather than trick-based: candidates who underprepare for the program domains (employee health, management, education) tend to lose the most points relative to their bedside strengths.",
    ],
    rows: [],
    target: 80,
    footnote:
      "No pass-rate bar is shown because CBIC does not publish a CIC pass rate. The passing standard is a scaled score of 700 on a 300–900 scale.",
    factBox: {
      tone: "info",
      title: "The lever is breadth, not depth in one area",
      html:
        "The CIC exam rewards <strong>broad coverage across all eight domains</strong>. Strong clinical IPs often over-index on transmission and surveillance and underprepare for environment of care, sterilization, and the program/communication domains — which together still carry meaningful weight.",
    },
  },

  // ---- STUDY PLAN
  plan: {
    heading: "A study plan for the CIC exam",
    prose: [
      "Most working infection preventionists prepare over <strong>8 to 12 weeks</strong>, roughly <strong>60 to 100 total study hours</strong>, weighting time toward the three largest domains. Use the APIC text as your spine, then drive retention with practice questions across all eight domains rather than re-reading.",
    ],
    weeks: [
      { n: 1, focus: "Read the CBIC content outline + baseline diagnostic across all 8 domains", qs: 25 },
      { n: 2, focus: "Identification of infectious disease processes — transmission, signs/symptoms, lab interpretation", qs: 40 },
      { n: 3, focus: "Surveillance and epidemiologic investigation — risk assessment, definitions, outbreak workups", qs: 50 },
      { n: 4, focus: "Preventing/controlling transmission — standard + transmission-based precautions, stewardship", qs: 50 },
      { n: 5, focus: "Cleaning, sterilization, disinfection, asepsis — reprocessing, Spaulding classification", qs: 45 },
      { n: 6, focus: "Environment of care — construction/renovation, water, ventilation, emergency management", qs: 45 },
      { n: 7, focus: "Program domains — occupational health, management/communication, education/research", qs: 45 },
      { n: 8, focus: "Full-length timed practice exam + error-log review across all domains", qs: 135 },
    ],
    tipsHeading: "How CIC candidates trip up — and how to avoid it",
    tips: [
      {
        kicker: "Cover all eight domains",
        text:
          "The program domains (occupational health, management, education) feel administrative but appear on the exam. Block dedicated time for them instead of leaning entirely on clinical strengths.",
      },
      {
        kicker: "Practice forward-only pacing",
        text:
          "Since January 2025 you cannot skip or return to questions. Practice answering in strict order under time so you do not stall on a single item — the first 75 questions must be done in 90 minutes.",
      },
      {
        kicker: "Anchor on the APIC text",
        text:
          "The APIC Text of Infection Control and Epidemiology maps closely to the blueprint. Use it as your spine and supplement with question banks for retention.",
      },
      {
        kicker: "Know the precaution frameworks cold",
        text:
          "Standard precautions, the three transmission-based precaution types, and the Spaulding classification for device reprocessing recur across scenario items. Build a one-page reference.",
      },
      {
        kicker: "Confirm your eligibility before applying",
        text:
          "Make sure your job description shows direct responsibility for IPC and that your hours meet the 1-year full-time / 2-year part-time / 3,000-hour rule before paying the fee.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (NursPrep-authored; not a CBIC item)
  sample: {
    heading: "Sample CIC-style question",
    prose: [
      "This NursPrep-authored item mirrors the scenario format of the CIC exam — a short clinical/program stem with four plausible options where only one is <em>best</em>. It is not a CBIC question. Try it before reading the rationale.",
    ],
    q: {
      scenario:
        "An infection preventionist reviews three new cases of carbapenem-resistant Enterobacterales (CRE) on a single medical unit within two weeks. All three patients had indwelling urinary catheters, and two shared the same care assignment.",
      stem: "Which action should the infection preventionist prioritize first?",
      options: [
        "Educate the unit staff on hand hygiene at the next monthly in-service.",
        "Initiate an outbreak investigation, including line listing and a review of shared exposures.",
        "Recommend empiric contact precautions be discontinued to reduce isolation burden.",
        "Wait for two additional cases before notifying the infection control committee.",
      ],
      correct: 1,
      rationale:
        "A cluster of an epidemiologically significant multidrug-resistant organism on one unit warrants a prompt outbreak investigation. Building a line listing and reviewing shared exposures (staffing, devices, environment) is the first step to identify and interrupt transmission. Delaying for more cases or relaxing precautions would allow continued spread, and routine education is not the immediate priority.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key infection-control terms every CIC candidate should know",
    prose: [
      "These terms surface across CIC exam items. Review them until the definitions feel automatic — scenario stems often hinge on recognizing which framework applies.",
    ],
    rows: [
      { term: "HAI", defn: "Healthcare-associated infection — an infection a patient acquires while receiving care for another condition, not present or incubating at admission.", domain: "Surveillance" },
      { term: "Standard precautions", defn: "The baseline infection-prevention practices applied to all patients regardless of diagnosis, including hand hygiene and appropriate PPE.", domain: "Transmission" },
      { term: "Transmission-based precautions", defn: "Added precautions — contact, droplet, or airborne — used when standard precautions alone cannot interrupt a known or suspected pathogen.", domain: "Transmission" },
      { term: "Antimicrobial stewardship", defn: "Coordinated efforts to optimize antimicrobial use, improving outcomes and reducing resistance and adverse effects.", domain: "Transmission" },
      { term: "Surveillance", defn: "Ongoing, systematic collection and analysis of health data to detect, monitor, and guide control of infections.", domain: "Surveillance" },
      { term: "Spaulding classification", defn: "A framework that categorizes devices as critical, semi-critical, or non-critical to determine the required level of reprocessing.", domain: "Cleaning/Sterilization" },
      { term: "MDRO", defn: "Multidrug-resistant organism — a microbe resistant to one or more classes of antimicrobials, such as MRSA, VRE, or CRE.", domain: "Identification" },
      { term: "Risk assessment", defn: "A structured evaluation of a facility's infection risks used to set surveillance priorities and program goals.", domain: "Surveillance" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "CIC vs. a-IPC, LTC-CIP, and AL-CIP",
    prose: [
      "CIC sits within a family of CBIC credentials. Candidates sometimes apply for the wrong one, so the distinction matters before you spend time or money.",
    ],
    rows: [
      { row: "CIC", highlight: true, body: "CBIC", scope: "Infection prevention across acute, ambulatory, and public-health settings", who: "Experienced infection preventionists with direct IPC responsibility" },
      { row: "a-IPC", body: "CBIC", scope: "Entry-level IPC knowledge", who: "Newcomers to IPC; no experience requirement, no renewal" },
      { row: "LTC-CIP", body: "CBIC", scope: "Infection prevention in long-term care", who: "IPs working in nursing homes and LTC facilities" },
      { row: "AL-CIP", body: "CBIC", scope: "Advanced IPC leadership and program direction", who: "Senior IPC leaders and program directors" },
    ],
    closingProse:
      "<strong>Take CIC if you hold direct responsibility for an infection prevention program and meet the experience recommendation.</strong> Start with a-IPC if you are new to the field, choose LTC-CIP if you work in long-term care, and pursue AL-CIP once you move into senior IPC leadership.",
  },

  // ---- FAQ
  faq: {
    heading: "Frequently asked questions about CIC certification",
    items: [
      { q: "What does CIC stand for in infection control?", a: "CIC stands for Certification in Infection Control. It is the board credential for infection preventionists, awarded by the Certification Board of Infection Control and Epidemiology (CBIC)." },
      { q: "Who awards the CIC certification?", a: "CBIC — the Certification Board of Infection Control and Epidemiology — awards the CIC. CBIC was created by APIC in 1981 and administered its first exam in 1983." },
      { q: "How many questions are on the CIC exam?", a: "The CIC exam has 150 multiple-choice questions. 135 are scored and 15 are unscored pretest items." },
      { q: "What is the passing score for the CIC exam?", a: "You need a scaled score of at least 700 on a 300-to-900 scale. Passing candidates receive a Pass message with no numeric score." },
      { q: "How much does the CIC exam cost?", a: "The CIC examination fee is $445 (a January 2025 CBIC fee-schedule PDF listed $430, so verify the current figure before applying). Recertification by exam or by IPU portfolio costs $430." },
      { q: "What are the eligibility requirements for the CIC exam?", a: "CBIC requires direct responsibility for infection prevention and control activities plus qualifying experience: at least one year full-time, two years part-time, or 3,000 hours within the previous three years. There is no nursing-only or fixed degree requirement." },
      { q: "Is the CIC exam hard?", a: "The CIC exam is content-broad rather than trick-based, covering eight domains. CBIC does not publish a pass rate, so any quoted percentage is unofficial. Candidates most often lose points on the program domains they use less day to day." },
      { q: "How is CIC different from a-IPC?", a: "a-IPC is CBIC's entry-level Associate credential with no experience requirement and no renewal. CIC is the experience-gated, renewable credential for practicing infection preventionists." },
      { q: "How often do I renew my CIC certification?", a: "CIC is valid for five years and expires December 31 at the end of the cycle. From January 1, 2026, you recertify through an IPU portfolio or by retaking the proctored exam." },
      { q: "Can I take the CIC exam remotely?", a: "Yes. CBIC delivers the CIC exam at Prometric test centers and through Prometric's ProProctor remote-proctoring system, so you can test in person or from a private location." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following primary sources. CBIC revises fees, the content outline, and recertification rules over time — always verify numeric facts against the current CBIC pages before relying on them for application decisions.",
    ],
    list: [
      "CBIC — About the CIC Exam (exam format, 150/135 items, scaled 700 passing score, $445 fee, break structure)",
      "CBIC — CIC Eligibility Guidelines (direct responsibility, 1-year full-time / 2-year part-time / 3,000-hour experience rule, activity components)",
      "CBIC — 2021 CIC Examination Content Outline (eight domains; scored-item counts based on the 2020 practice analysis)",
      "CBIC — CIC Recertification by Proctored Examination and by IPUs (five-year cycle, pathways effective 2026-01-01, $430 fees)",
      "CBIC — Examination Fees schedule (effective January 6, 2025)",
      "CBIC — a-IPC (Associate Infection Prevention and Control) credential page",
      "APIC — History of CBIC (CBIC created 1981; first exam 1983)",
      "CBIC — Exam & Certification FAQ",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice CIC-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to CBIC's eight content domains. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full CIC question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "a-IPC",
      title: "CIC vs a-IPC: which CBIC credential should you sit first?",
      blurb: "Eligibility, renewal, and career timing — for IPs deciding between the entry-level and experience-gated credentials.",
      href: "#",
      bg: "#0089e3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "The three domains that decide your CIC score",
      blurb: "Why transmission, surveillance, and identification carry about half the exam, and the concepts CBIC tests most.",
      href: "#",
      bg: "#24a865",
    },
    {
      kicker: "Career",
      tag: "Infection preventionist",
      title: "Becoming an infection preventionist: the path to CIC",
      blurb: "How IPs build the direct-responsibility experience CBIC requires, and when to sit the exam.",
      href: "#",
      bg: "#cf1d00",
    },
  ],
};
