// NI-BC exam detail page — structured data.
// Sourced from Content/NI-BC_research.json (verified against ANCC primary
// sources: NI-BC certification page, Test Content Outline effective 2023-05-03,
// and the 2025 ANCC Certification Data report).
// Lives at /certifications/ni-bc/ via the paginated template.
//
// NOTE ON QUESTION COUNT: project canonical certs.js lists 175 questions
// (a pre-2023 figure). The current verified ANCC value (effective 2023-05-03)
// is 150 questions (125 scored + 25 pretest). This page uses the verified
// current value of 150. See Content/NI-BC_research.json `discrepancies`.

module.exports = {
  code: "NI-BC",
  name: "Informatics Nursing — Board Certified",
  body: "ANCC",
  cat: "leadership",
  catLabel: "Leadership & Informatics",
  updated: "2026-05",

  // Page-level SEO
  seo: {
    title:
      "NI-BC Certification Guide: Eligibility, Exam & Renewal | NursPrep",
    description:
      "Everything informatics nurses need about NI-BC certification in 2026 — ANCC eligibility, the 3-domain blueprint, $395 fee, 65% pass rate, an 8-week study plan, and 5-year renewal explained.",
    ogTitle:
      "NI-BC Certification Guide 2026 — Nursing Informatics-Board Certified",
    ogDescription:
      "ANCC eligibility, the three-domain blueprint, $395 fee, 65% pass rate, and a study plan for informatics RNs (formerly RN-BC).",
  },

  // ---- HERO
  lede:
    "NI-BC — Nursing Informatics-Board Certified — is the ANCC's board credential for registered nurses who bridge clinical practice and health information technology. It validates expertise across the full informatics lifecycle: foundations of practice, system design, and data management. Until 2023 this same credential was designated RN-BC.",
  heroPills: [
    { k: "Questions", v: "150 items" },
    { k: "Duration", v: "3 hours" },
    { k: "Renewal", v: "5 years" },
    { k: "Pass rate", v: "65%" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "American Nurses Credentialing Center (ANCC)" },
    { k: "Format", v: "Computer-based at Prometric test centers" },
    { k: "Scored items", v: "125 of 150 (25 unscored pretest)" },
    { k: "Passing score", v: "Scaled 350 / 500" },
    { k: "Eligibility", v: "Active RN license + BSN or higher" },
    { k: "Experience", v: "2 yrs RN + informatics practice hours" },
    { k: "Fee (ANA member)", v: "$295 · non-member $395" },
    { k: "Renewal cycle", v: "5 years — professional development" },
  ],
  heroCardFoot:
    "Verified against the ANCC NI-BC certification page and the Test Content Outline effective 2023-05-03",

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
    { id: "compare", label: "NI-BC vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "NI-BC certification at a glance",
    prose: [
      "NI-BC — Nursing Informatics-Board Certified — is the nursing-side benchmark for informatics practice across the health-IT lifecycle. The credential is issued by the <strong>American Nurses Credentialing Center (ANCC)</strong>, the certification arm of the American Nurses Association. ANCC first offered an informatics nursing certification in <strong>1995</strong>; by the end of 2025, <strong>3,536 nurses</strong> held the active credential.",
      "The single most common point of confusion: <strong>this credential was renamed</strong>. Until 2023 it carried the designation <strong>RN-BC</strong> (Registered Nurse-Board Certified). ANCC updated it to NI-BC in 2023 to distinguish nursing informatics from other RN-BC specialties — so RN-BC informatics holders carry the same credential under the old name. NI-BC is a board certification, not a course.",
    ],
    stats: [
      { n: "150", l: "Total items", sub: "125 scored · 25 pretest" },
      { n: "3 hrs", l: "Time limit", sub: "Computer-based at Prometric" },
      { n: "65%", l: "2025 pass rate", sub: "229 of 352 first-time candidates" },
      { n: "5 yrs", l: "Renewal cycle", sub: "Professional development" },
    ],
    factBox: {
      tone: "info",
      title: "RN-BC is now NI-BC",
      html:
        "If you are searching for the <strong>RN-BC informatics</strong> credential, you are in the right place. ANCC renamed it <strong>NI-BC</strong> in 2023. Nurses certified before the change may still display RN-BC on their badge — it is the same credential lineage. The exam itself was also trimmed from 175 to 150 questions with the 2023 content-outline update.",
    },
    coverImageLabel:
      "Nurse informaticist reviewing EHR clinical decision support workflows on a dashboard",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the NI-BC exam?",
    prose: [
      "NI-BC has a real eligibility gate — unlike some board certifications, ANCC enforces both an education floor and a practice-hour requirement. You must hold an <strong>active, unrestricted RN license</strong> in a US state or territory (or the legally recognized equivalent abroad), a <strong>bachelor's or higher degree in nursing</strong>, the equivalent of <strong>two years full-time RN practice</strong>, and <strong>30 hours of continuing education in informatics nursing within the last three years</strong>.",
      "On top of that, you must satisfy <strong>one</strong> of three practice-hour options. Most candidates qualify through Option 1 — logged informatics hours on the job. The graduate-coursework and graduate-practicum routes exist for nurses moving into informatics through formal education rather than accumulated work hours.",
    ],
    candidateHeading: "You meet the eligibility gate if…",
    candidateList: [
      "You hold an active RN license and a BSN (or higher nursing degree), with at least two years of full-time-equivalent RN practice behind you.",
      "You have completed 30 contact hours of informatics-nursing continuing education within the last three years.",
      "Option 1: you have practiced a minimum of 2,000 hours in informatics nursing within the last three years.",
      "Option 2: you have practiced a minimum of 1,000 informatics hours in the last three years AND completed 12 semester hours of graduate-level informatics nursing coursework.",
      "Option 3: you have completed a graduate program in informatics nursing that included at least 200 hours of faculty-supervised informatics practicum.",
    ],
  },

  // ---- BLUEPRINT
  blueprint: {
    heading: "NI-BC exam blueprint — three domains (effective 2023-05-03)",
    prose: [
      "The NI-BC blueprint is three weighted domains across 125 scored items. <strong>Foundations of Practice</strong> and <strong>System Design Lifecycle</strong> together carry about 71% of the exam — most of your study time should live there.",
      "Do not assume your day-job tooling covers the blueprint. Candidates who work deep in one EHR module tend to under-prepare for the standards, regulations (HIPAA, HITECH, 21st Century Cures), and full system-development-lifecycle content that the exam tests broadly.",
    ],
    domains: [
      { label: "Foundations of Practice", weight: 36 },
      { label: "System Design Lifecycle", weight: 35 },
      { label: "Data Management and Healthcare Technology", weight: 29 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and membership discounts",
    prose: [
      "ANCC delivers the NI-BC exam year-round through <strong>Prometric</strong> test centers. After ANCC approves your application, you receive an Authorization to Test and schedule within a <strong>120-day testing window</strong> — book your Prometric seat early. All fees below include a $140 non-refundable administrative fee.",
    ],
    rows: [
      { k: "Initial application — non-member", v: "$395", highlight: true },
      { k: "Initial application — ANA member", v: "$295" },
      { k: "Initial application — ANIA member", v: "$340" },
      { k: "Renewal — non-member", v: "$350" },
      { k: "Renewal — ANA member (as low as)", v: "$250" },
      { k: "Renewal — ANIA member", v: "$295" },
      { k: "Non-refundable administrative fee (included above)", v: "$140" },
      { k: "ANA annual membership (reduces exam fee)", v: "Varies by state" },
    ],
    factBox: {
      tone: "success",
      title: "Two membership routes to a discount",
      html:
        "Both <strong>ANA</strong> (the association behind ANCC) and <strong>ANIA</strong> (the American Nursing Informatics Association) offer NI-BC fee discounts, but they are separate memberships at different tiers — ANA members pay the lowest exam fee at <strong>$295</strong>. Many employers reimburse the application fee, so ask your informatics director or HR before paying out of pocket. Discounts must be claimed within five business days of ANCC receiving your application.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "NI-BC certification is valid for <strong>five years</strong>. You renew by maintaining your RN license and completing ANCC's professional-development requirements during the certification period, then reporting them on the renewal application. ANCC accepts renewal applications up to <strong>one year before</strong> your expiration date.",
      "ANCC's renewal categories combine continuing education with options such as academic credit, presentations, publications, preceptorship, and professional service. Track every activity in your ANCC account as you complete it — the online renewal pulls directly from those stored records, which is far easier than reconstructing five years of CE at the deadline.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the NI-BC exam?",
    prose: [
      "ANCC reported <strong>229 of 352</strong> first-time NI-BC candidates passed in 2025 — a <strong>65%</strong> pass rate. That sits in the middle of ANCC's specialty exams, lower than headline NP pass rates partly because the blueprint spans practice foundations, system design, and data management rather than a single clinical domain.",
      "To pass you need a <strong>scaled score of about 350 out of 500</strong>. Candidates who study the full blueprint — not just the EHR they use daily — and complete at least one full-length timed practice exam pass at meaningfully higher rates than those relying on work experience alone.",
    ],
    rows: [{ year: "2025", pct: 65 }],
    target: 80,
    footnote:
      "Pass rate reflects first-time test takers in 2025 per the ANCC Certification Data report (229 of 352 candidates). The passing scaled score is reported by third-party prep sources and should be confirmed against the current ANCC candidate handbook.",
    factBox: {
      tone: "info",
      title: "The lever is breadth, not depth",
      html:
        "Most NI-BC candidates already live inside one part of the blueprint at work. The points are lost in the parts they do not touch daily — standardized terminologies, the full system-development lifecycle, regulations, and data-standards content. A full-length timed practice exam exposes those gaps before test day, when there is still time to close them.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "An 8-week NI-BC study plan",
    prose: [
      "A structured 8-week plan is enough for most informatics RNs who already meet the practice-hour gate — roughly <strong>80 to 120 total study hours</strong> across the three blueprint domains. Practice-question volume ramps through weeks 2–7 and peaks in week 7 with a full-length timed exam; week 8 is for targeted review and logistics.",
    ],
    weeks: [
      { n: 1, focus: "Read the ANCC Test Content Outline + baseline diagnostic exam", qs: 25 },
      { n: 2, focus: "Foundations: scope & standards, ethics, regulations (HIPAA, HITECH, Cures Act)", qs: 40 },
      { n: 3, focus: "Foundations: theories (DIKW), change management, interprofessional collaboration", qs: 50 },
      { n: 4, focus: "System Design Lifecycle: planning, analysis, design and build", qs: 50 },
      { n: 5, focus: "System Design Lifecycle: testing, training, implementation, maintenance", qs: 50 },
      { n: 6, focus: "Data management: standards (SNOMED, LOINC, HL7, FHIR), warehousing, analytics", qs: 50 },
      { n: 7, focus: "Full-length timed practice exam + error-log review", qs: 150 },
      { n: 8, focus: "Targeted review of weak domains, rest, test day", qs: 40 },
    ],
    tipsHeading: "How NI-BC candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Don't over-index on your daily EHR",
        text:
          "Working deep in one system does not cover the blueprint. Foundations of Practice (36%) and System Design Lifecycle (35%) test breadth across the whole informatics role, not just your build queue.",
      },
      {
        kicker: "Learn the standards cold",
        text:
          "Standardized terminologies and technical standards — SNOMED CT, LOINC, HL7, FHIR, NMDS, ICD — recur across Data Management items. Build a one-page reference and review it the night before.",
      },
      {
        kicker: "Know the SDLC phases in order",
        text:
          "Planning and analysis, design and build, testing and training, implementation, and monitoring/maintenance anchor a third of the exam. Be able to place any scenario in the correct lifecycle phase.",
      },
      {
        kicker: "Study the regulations",
        text:
          "HIPAA, the HITECH Act, the 21st Century Cures Act, CMS reimbursement, and Joint Commission requirements feel administrative but appear reliably on Foundations items.",
      },
      {
        kicker: "Take one full-length timed exam",
        text:
          "Pacing 150 items in 3 hours is a trained skill. A single timed practice run under real conditions surfaces both content gaps and fatigue patterns while you can still fix them.",
      },
    ],
  },

  // ---- SAMPLE QUESTION
  sample: {
    heading: "Sample NI-BC question",
    prose: [
      "This item mirrors the ANCC single-best-answer format: a short scenario and four plausible options where only one is <em>best</em>. Try it before you read the rationale.",
    ],
    q: {
      scenario:
        "A hospital is preparing to migrate from a legacy electronic health record to a new vendor system. The nurse informaticist is asked to ensure that nursing documentation captured in the legacy system can be reliably exchanged with the new platform and with external partners after go-live.",
      stem: "Which standard should the nurse informaticist prioritize to support semantic interoperability of clinical data?",
      options: [
        "Configure single sign-on (SSO) for all clinical end-users.",
        "Adopt a standardized terminology such as SNOMED CT and LOINC for coded clinical data.",
        "Increase the frequency of scheduled database backups during the migration.",
        "Expand the help-desk staffing model for the first two weeks after go-live.",
      ],
      correct: 1,
      rationale:
        "Semantic interoperability — the ability of systems to exchange data with shared meaning — depends on standardized terminologies such as SNOMED CT and LOINC, which give clinical concepts consistent codes across systems and organizations. SSO addresses access, backups address data integrity, and help-desk staffing addresses support — all important, but none deliver semantic interoperability.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key NI-BC terms every candidate should know",
    prose: [
      "These terms surface across the three NI-BC domains. Review them until the definitions feel automatic — scenario items often hinge on recognizing which standard, framework, or lifecycle phase applies.",
    ],
    rows: [
      { term: "DIKW", defn: "Data-Information-Knowledge-Wisdom — the foundational metastructure describing how raw data is transformed into actionable wisdom in nursing informatics.", domain: "Foundations" },
      { term: "Nursing informatics", defn: "The specialty that integrates nursing science with information science, computer science, and analytical sciences to manage data and support decision-making.", domain: "Foundations" },
      { term: "HIPAA", defn: "Health Insurance Portability and Accountability Act — the federal statute governing the privacy and security of protected health information.", domain: "Foundations" },
      { term: "HITECH Act", defn: "Health Information Technology for Economic and Clinical Health Act — promotes adoption and meaningful use of health IT and strengthens HIPAA enforcement.", domain: "Foundations" },
      { term: "21st Century Cures Act", defn: "Federal law advancing interoperability and prohibiting information blocking, including patient access to electronic health information.", domain: "Foundations" },
      { term: "SDLC", defn: "System Development Life Cycle — the structured phases of planning, analysis, design, build, testing, implementation, and maintenance for clinical systems.", domain: "System Design" },
      { term: "Clinical decision support (CDS)", defn: "Tools that deliver patient-specific, evidence-based guidance to clinicians at the point of care, often built into the EHR.", domain: "System Design" },
      { term: "User acceptance testing", defn: "Non-functional testing in which end-users verify a system meets requirements before go-live.", domain: "System Design" },
      { term: "Backout plan", defn: "A predefined procedure to revert to the prior system state if an implementation or upgrade fails.", domain: "System Design" },
      { term: "SNOMED CT", defn: "A comprehensive, multidisciplinary clinical terminology used to code clinical findings, procedures, and concepts for interoperability.", domain: "Data Management" },
      { term: "LOINC", defn: "Logical Observation Identifiers Names and Codes — a standard for identifying laboratory and clinical observations.", domain: "Data Management" },
      { term: "HL7 / FHIR", defn: "Health Level Seven standards for health-data exchange; FHIR (Fast Healthcare Interoperability Resources) is the modern API-based standard.", domain: "Data Management" },
      { term: "NMDS", defn: "Nursing Minimum Data Set — a standardized set of essential nursing data elements for comparison across settings.", domain: "Data Management" },
      { term: "Interoperability", defn: "The ability of systems to exchange data and use it; semantic interoperability adds shared meaning via standardized terminologies.", domain: "Data Management" },
      { term: "Data warehouse", defn: "A central repository that integrates data from multiple sources to support reporting, analytics, and decision-making.", domain: "Data Management" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "NI-BC vs. RN-BC, CAHIMS, and CPHIMS",
    prose: [
      "NI-BC sits alongside a few related credentials that informatics nurses sometimes consider — or confuse it with. The most important distinction is simply that RN-BC (informatics) is the former name of NI-BC, not a separate certification.",
    ],
    rows: [
      { row: "NI-BC", highlight: true, body: "ANCC", scope: "Nursing informatics across foundations, system design, data management", who: "BSN-prepared RNs in informatics roles" },
      { row: "RN-BC (informatics)", body: "ANCC", scope: "Same credential — pre-2023 designation", who: "Nurses certified before the 2023 rename" },
      { row: "CAHIMS", body: "HIMSS", scope: "Associate-level health IT and management systems", who: "Early-career health-IT staff; open to non-nurses" },
      { row: "CPHIMS", body: "HIMSS", scope: "Professional-level health information and management systems", who: "Experienced health-IT professionals, any discipline" },
    ],
    closingProse:
      "<strong>Take NI-BC if you are an RN validating nursing-specific informatics expertise.</strong> If you already hold RN-BC in informatics, you hold this credential under its old name. Consider CAHIMS or CPHIMS instead — or in addition — if your role is broader health IT rather than nursing-anchored informatics.",
  },

  // ---- FAQ
  faq: {
    heading: "Frequently asked questions about NI-BC certification",
    items: [
      { q: "What does NI-BC stand for in nursing?", a: "NI-BC stands for Nursing Informatics-Board Certified. The credential is issued by the American Nurses Credentialing Center (ANCC)." },
      { q: "Is RN-BC the same as NI-BC?", a: "Yes. RN-BC (informatics) was the designation for this credential until 2023, when ANCC renamed it NI-BC. Nurses certified before the change may still display RN-BC; it is the same credential." },
      { q: "Do I need a BSN to sit for the NI-BC exam?", a: "Yes. ANCC requires a bachelor's or higher degree in nursing, an active RN license, two years of full-time-equivalent RN practice, 30 informatics CE hours within three years, and one of three informatics practice-hour options." },
      { q: "How many practice hours do I need for NI-BC?", a: "One of three options: 2,000 informatics hours in three years; or 1,000 hours plus 12 graduate semester hours of informatics coursework; or a graduate informatics program with at least 200 hours of supervised practicum." },
      { q: "How hard is the NI-BC exam?", a: "The NI-BC exam is moderately difficult. The 2025 first-time pass rate was 65% (229 of 352 candidates). Candidates who study the full three-domain blueprint rather than only their daily EHR tend to do better." },
      { q: "How much does NI-BC certification cost?", a: "The initial application is $395 for non-members, $295 for ANA members, and $340 for ANIA members. All fees include a $140 non-refundable administrative fee." },
      { q: "How long is NI-BC certification valid?", a: "NI-BC certification is valid for five years. You renew by maintaining your RN license and completing ANCC's professional-development requirements during the certification period." },
      { q: "How is the NI-BC exam delivered?", a: "It is a computer-based test delivered year-round at Prometric test centers. You have three hours to answer 150 questions (125 scored plus 25 unscored pretest items)." },
      { q: "What happens if I fail the NI-BC exam?", a: "You may retest under ANCC's retest policy, which requires a new application and fee and a waiting period before retaking the exam." },
      { q: "Is NI-BC worth it for an informatics nurse?", a: "For BSN-prepared RNs in informatics roles, NI-BC is a recognized, ABSNC- and NCCA-accredited credential that signals validated expertise to employers and supports Magnet program goals." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following primary sources. Fees, blueprint weights, and renewal rules shift on ANCC's revision cycle — always verify numeric facts against the current ANCC NI-BC page and candidate handbook before relying on them for application decisions.",
    ],
    list: [
      "American Nurses Credentialing Center (ANCC) — Informatics Nursing Certification (NI-BC) official page: eligibility, fees, exam format, and renewal",
      "ANCC — Informatics Nursing Test Content Outline (effective 2023-05-03): three-domain blueprint, 125 scored of 150 items",
      "ANCC — 2025 Certification Data report: 65% first-time pass rate (229 of 352), 3,536 active certificants as of 12/31/2025",
      "Alliance for Nursing Informatics — Nursing Informatics Credential From RN-BC to NI-BC: credential history and 2023 designation change",
      "HIMSS — coverage of the ANCC RN-BC to NI-BC designation change",
      "US Bureau of Labor Statistics (BLS) — Occupational Employment and Wage Statistics (May 2024) as salary context; BLS does not track nursing informaticists as a discrete occupation",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice NI-BC-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to the ANCC three-domain blueprint. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full NI-BC question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Naming",
      tag: "RN-BC",
      title: "RN-BC to NI-BC: what the 2023 rename means for your badge",
      blurb: "Why ANCC renamed the informatics credential, whether you need to do anything, and how to display it correctly.",
      href: "#",
      bg: "#24a865",
    },
    {
      kicker: "Eligibility",
      tag: "Practice hours",
      title: "The NI-BC practice-hour math, decoded",
      blurb: "How to count your 2,000 informatics hours — or qualify through the graduate-coursework and practicum routes instead.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "The standards that decide NI-BC: SNOMED, LOINC, HL7, FHIR",
      blurb: "A focused review of the data-standards content that bedside-only experience under-prepares you for.",
      href: "#",
      bg: "#cf1d00",
    },
  ],
};
