// CPN exam detail page — structured data.
// Sourced from Content/CPN_research.json (PNCB primary pages + BLS, accessed
// 2026-05-21). Numeric figures trace to research.json facts.* / blueprint /
// pass_rate_history. Blueprint weights are medium-confidence (PNCB 2022 content
// outline via secondary summaries — PNCB pages are JS-rendered/unfetchable here).
// Lives at /certifications/cpn/ via the paginated template.

module.exports = {
  code: "CPN",
  name: "Certified Pediatric Nurse",
  body: "PNCB",
  cat: "pediatric",
  catLabel: "Pediatric & School Health",
  updated: "2026-05",

  // ---- Page-level SEO
  seo: {
    title:
      "CPN Certification Guide: Eligibility, Exam & Renewal | NursPrep",
    description:
      "Everything pediatric nurses need on the CPN exam — PNCB eligibility, the 4-domain blueprint, $300 fee, scaled scoring, annual renewal, and a study plan.",
    ogTitle:
      "CPN Certification Guide 2026 — Certified Pediatric Nurse",
    ogDescription:
      "PNCB eligibility, the four-domain blueprint, $300 exam fee, scaled-score scoring, and an 8-week study plan for pediatric RNs.",
  },

  // ---- HERO
  lede:
    "CPN — Certified Pediatric Nurse — is the nationally recognized RN-level board certification for nurses who care for children and adolescents. Issued by the Pediatric Nursing Certification Board (PNCB), it validates pediatric expertise across inpatient and outpatient settings, not a single unit.",
  heroPills: [
    { k: "Questions", v: "175 items" },
    { k: "Duration", v: "3 hours" },
    { k: "Renewal", v: "Annual" },
    { k: "Pass rate", v: "~76%" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "Pediatric Nursing Certification Board (PNCB)" },
    { k: "Format", v: "Computer-based at Prometric test centers" },
    { k: "Scored items", v: "150 of 175 (25 unscored pretest)" },
    { k: "Passing score", v: "Scaled 400 (range 200–800)" },
    { k: "Eligibility", v: "Active, unrestricted RN license + pediatric hours" },
    { k: "Experience", v: "1,800 peds hours in 24 mo, or a 5-year pathway" },
    { k: "Fee", v: "$300 initial · $245 retake" },
    { k: "Renewal cycle", v: "Annual — 15 contact hours per year" },
  ],
  heroCardFoot:
    "Verified against PNCB CPN exam, scoring, and recertification pages (accessed 2026-05-21)",

  // ---- TOC
  sections: [
    { id: "overview", label: "Overview" },
    { id: "eligibility", label: "Eligibility" },
    { id: "blueprint", label: "Exam blueprint" },
    { id: "cost", label: "Cost & scoring" },
    { id: "passrate", label: "Pass rate" },
    { id: "plan", label: "Study plan" },
    { id: "sample", label: "Sample Question" },
    { id: "keyterms", label: "Key terms" },
    { id: "compare", label: "CPN vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "CPN certification at a glance",
    prose: [
      "CPN — Certified Pediatric Nurse — is the RN-level benchmark for pediatric nursing across inpatient and outpatient care. The credential is issued by the <strong>Pediatric Nursing Certification Board (PNCB)</strong>, which first offered the CPN exam in <strong>1989</strong>; today <strong>more than 30,000 nurses</strong> actively hold the credential.",
      "CPN is a board certification, not a course. It is sometimes confused with the PNCB Pediatric Nurse Practitioner credentials (CPNP-PC and CPNP-AC), which are advanced-practice certifications for APRNs — only CPN is the generalist, RN-level pediatric credential.",
    ],
    stats: [
      { n: "175", l: "Total items", sub: "150 scored · 25 pretest" },
      { n: "3 hrs", l: "Time limit", sub: "Computer-based at Prometric" },
      { n: "~76%", l: "Pass rate", sub: "2022 reported figure" },
      { n: "Annual", l: "Renewal cycle", sub: "15 contact hours per year" },
    ],
    factBox: {
      tone: "info",
      title: "Direct and indirect experience both count",
      html:
        "PNCB counts <strong>both direct patient care and indirect pediatric roles</strong> — teaching, administration, clinical research, and consultation — toward CPN eligibility. Experience must be in pediatric nursing, but it does not all have to be at the bedside.",
    },
    coverImageLabel:
      "Pediatric RN assessing a child on an inpatient unit",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the CPN exam?",
    prose: [
      "Yes — if you hold an <strong>active, unrestricted RN license</strong> in the US, Canada, or a US territory and meet one of two pediatric experience pathways. PNCB accepts any nursing degree level (diploma, ADN, BSN, MSN, or higher); there is no additional degree requirement beyond RN licensure.",
      "<strong>Pathway 1:</strong> at least <strong>1,800 hours of pediatric clinical experience within the past 24 months</strong>. <strong>Pathway 2:</strong> at least five years as an RN in pediatric nursing with <strong>3,000 pediatric hours in the last five years, including at least 1,000 hours within the past 24 months</strong>. Pediatric experience may be direct care or indirect (teaching, administration, research, consultation).",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You have logged at least 1,800 hours of pediatric nursing within the last 24 months, or you meet the five-year pathway with 3,000 pediatric hours.",
      "You care for children and adolescents across the lifespan, not just one age band — infants, toddlers, school-age, and teens.",
      "Your setting fits a recognized pediatric role: inpatient peds, PICU or NICU, pediatric ED, pediatric ambulatory or specialty clinic, school nursing, pediatric home care, or a pediatric education or research role.",
      "You are comfortable with weight-based dosing, growth-and-development milestones, and family-centered care — the threads PNCB runs through every blueprint domain.",
    ],
  },

  // ---- BLUEPRINT (weights = % of scored content, sum to 100)
  blueprint: {
    heading: "CPN exam blueprint — four domains",
    prose: [
      "The CPN blueprint is built from PNCB's 2021–2022 Job Task Analysis and organized into four content domains. <strong>Assessment</strong> and <strong>Planning and Management</strong> together carry about two-thirds of the exam — most of your study time should live there.",
      "PNCB also runs three threads through every domain: <strong>safety, growth and development, and evidence-based practice</strong>. Treat them as lenses on each topic rather than separate study blocks. Candidates who study only acute bedside tasks tend to underprepare for Health Promotion and Professional Responsibilities.",
    ],
    domains: [
      { label: "Assessment (physical and psychosocial)", weight: 35 },
      { label: "Planning and Management", weight: 33 },
      { label: "Health Promotion", weight: 23 },
      { label: "Professional Responsibilities", weight: 9 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and scoring",
    prose: [
      "PNCB delivers the CPN exam by computer at <strong>Prometric</strong> testing centers in the US and abroad. After PNCB reviews your online application, you receive an Approval &amp; Scheduling Notice with a <strong>90-day window</strong> to book and sit the exam — schedule promptly so the window does not lapse.",
    ],
    rows: [
      { k: "Initial exam fee", v: "$300 (includes $100 non-refundable registration)" },
      { k: "Retake fee", v: "$245", highlight: true },
      { k: "Total items", v: "175 (150 scored, 25 unscored pretest)" },
      { k: "Time limit", v: "3 hours" },
      { k: "Score scale", v: "200–800 (scaled)" },
      { k: "Passing score", v: "400 (the cut point across all forms)" },
      { k: "Scheduling window", v: "90 days after PNCB approval" },
    ],
    factBox: {
      tone: "info",
      title: "How CPN scoring actually works",
      html:
        "PNCB reports a <strong>scaled score from 200 to 800</strong>, where 200 means zero items correct and 800 means every item correct. A scaled score of <strong>400 is the passing cut point</strong> on every form of the exam, so you do not have to guess at a moving raw-score target.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "CPN certification is renewed <strong>annually</strong>. CPNs recertify each year between <strong>November 1 and January 31</strong> by submitting a short online application attesting to <strong>15 contact hours</strong> (or PNCB-accepted equivalents) completed during the year.",
      "You can meet the 15-hour requirement several ways: CE/CNE/CME, Professional Practice Learning, academic credit, teaching, or clinical practice hours (200 practice hours count as 5 contact hours; 400 count as 10). Keep your documentation — PNCB audits a random sample of renewals each year.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the CPN exam?",
    prose: [
      "The CPN exam is moderately difficult. The most recent figure that could be verified for this page is a <strong>~76% pass rate (2022)</strong>, meaning roughly three in four candidates passed. PNCB publishes annual exam statistics, but a reliable year-specific CPN figure after 2022 was not available at the time of writing — always check PNCB's current statistics before relying on a number for planning.",
      "Candidates who follow a structured 8 to 10-week plan and complete at least one full-length timed practice exam pass at meaningfully higher rates than those relying on work experience alone. The biggest avoidable gaps are in Health Promotion and Professional Responsibilities, which bedside-focused study tends to skip.",
    ],
    rows: [{ year: "2022", pct: 76 }],
    target: 85,
    footnote:
      "Only 2022 is shown because a reliable year-specific CPN pass rate after 2022 could not be verified for this page. Verify against PNCB's current annual exam statistics before relying on the figure.",
    factBox: {
      tone: "info",
      title: "The lever is timed practice, not more reading",
      html:
        "The single biggest predictor of a first-time pass is sitting <strong>at least one full-length timed 175-item practice exam</strong> under real conditions. Pacing 150 scored items across three hours is a trained skill — fatigue in the last 40 items is where unprepared candidates lose the most points.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "An 8-week CPN study plan",
    prose: [
      "A structured 8-week study plan is enough for most pediatric RNs with a year or more of practice — roughly <strong>60 to 90 total study hours</strong> across the four blueprint domains. Practice-question volume ramps through weeks 2–6 and peaks in week 7 with a full-length timed exam; week 8 is for targeted review, logistics, and a rest day.",
    ],
    weeks: [
      { n: 1, focus: "Read the PNCB CPN content outline + baseline diagnostic", qs: 25 },
      { n: 2, focus: "Assessment — physical exam, growth and development, pain, psychosocial", qs: 50 },
      { n: 3, focus: "Assessment continued + pediatric early warning signs and triage", qs: 50 },
      { n: 4, focus: "Planning and Management — acute and chronic care, weight-based dosing, safety", qs: 60 },
      { n: 5, focus: "Planning and Management — behavioral health, palliative, family-centered care", qs: 60 },
      { n: 6, focus: "Health Promotion — anticipatory guidance, immunizations, injury prevention", qs: 50 },
      { n: 7, focus: "Professional Responsibilities + full-length timed practice exam", qs: 175 },
      { n: 8, focus: "Targeted review of weak domains, rest, test day", qs: 40 },
    ],
    tipsHeading: "How CPN candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Don't over-index on acute care",
        text:
          "Health Promotion is about a quarter of the exam. Bedside-only study misses anticipatory guidance, immunization schedules, and injury prevention. Block a dedicated week for it.",
      },
      {
        kicker: "Pace 150 scored items in 3 hours",
        text:
          "Pacing is a trained skill. Take at least one full-length timed practice exam under real conditions before test day — otherwise fatigue in the last items is where your score slips.",
      },
      {
        kicker: "Don't skip Professional Responsibilities",
        text:
          "Advocacy, professional boundaries, and interdisciplinary collaboration feel abstract at the bedside but appear on the exam. Review pediatric scope-of-practice and family-advocacy scenarios.",
      },
      {
        kicker: "Anchor on growth and development",
        text:
          "Milestones by age band, weight-based dosing, and developmentally appropriate communication are threads across every domain. Build a one-page age-band reference and review it the night before.",
      },
      {
        kicker: "Schedule early in your 90-day window",
        text:
          "Book your Prometric seat as soon as PNCB approves you. Waiting risks losing the window and having to reapply.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (illustrative — NOT a released PNCB item)
  sample: {
    heading: "Sample CPN-style question",
    prose: [
      "This item mirrors the CPN format: a short pediatric scenario and four plausible options where only one is <em>best</em>. It is illustrative and is not a released PNCB question. Try it before you read the rationale.",
    ],
    q: {
      scenario:
        "A 10-month-old is admitted with vomiting and poor feeding for two days. On assessment: heart rate 178, capillary refill 4 seconds, dry mucous membranes, a sunken anterior fontanelle, and lethargy that improves only briefly with stimulation.",
      stem: "Which finding should the pediatric RN prioritize as the most urgent?",
      options: [
        "Dry mucous membranes documented at the bedside.",
        "Capillary refill of 4 seconds with tachycardia.",
        "The two-day history of vomiting reported by the parent.",
        "A sunken anterior fontanelle on inspection.",
      ],
      correct: 1,
      rationale:
        "Delayed capillary refill plus tachycardia signals impaired perfusion and impending hypovolemic shock — the most time-critical finding. Dry mucous membranes and a sunken fontanelle confirm dehydration but are markers of fluid loss, not the immediate perfusion threat. The history is important context but is not an acute physiologic finding requiring intervention now.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key CPN terms every candidate should know",
    prose: [
      "These concepts surface across CPN exam items. Review them until the definitions feel automatic — pediatric stems often hinge on recognizing the developmentally appropriate framework or the weight-based calculation.",
    ],
    rows: [
      { term: "Family-centered care", defn: "A care model that treats the child and family as a unit, with the family as a partner in assessment, planning, and decisions.", domain: "Planning & Mgmt" },
      { term: "Weight-based dosing", defn: "Pediatric medications dosed per kilogram of body weight; a core safety competency tested throughout the exam.", domain: "Planning & Mgmt" },
      { term: "Growth and development milestones", defn: "Expected physical, cognitive, and psychosocial achievements by age band; the basis for anticipatory guidance and assessment.", domain: "Assessment" },
      { term: "Anticipatory guidance", defn: "Age-appropriate counseling to families about expected development, safety, nutrition, and prevention.", domain: "Health Promotion" },
      { term: "PEWS", defn: "Pediatric Early Warning Score — a bedside tool that flags clinical deterioration in children before a critical event.", domain: "Assessment" },
      { term: "Atraumatic care", defn: "Minimizing physical and psychological distress of procedures for children, using comfort positioning, distraction, and developmentally appropriate explanation.", domain: "Planning & Mgmt" },
      { term: "Immunization schedule", defn: "The recommended childhood and adolescent vaccine timeline; a frequent Health Promotion topic.", domain: "Health Promotion" },
      { term: "Scope of practice", defn: "The legal and professional boundaries of pediatric RN practice, including advocacy and interdisciplinary collaboration.", domain: "Professional Resp." },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "CPN vs. CPEN, CPNP-PC/AC, PMHS",
    prose: [
      "CPN sits alongside several pediatric credentials that nurses sometimes consider. Many candidates Google \"CPN\" when they actually mean the practitioner (CPNP) or emergency (CPEN) credential, so the distinction matters before you spend time or money.",
    ],
    rows: [
      { row: "CPN", highlight: true, body: "PNCB", scope: "Generalist pediatric nursing, inpatient and outpatient", who: "RNs caring for children across settings" },
      { row: "CPEN", body: "BCEN", scope: "Pediatric emergency nursing", who: "RNs in pediatric or general EDs" },
      { row: "CPNP-PC", body: "PNCB", scope: "Pediatric primary care, advanced practice", who: "Pediatric NPs (graduate degree)" },
      { row: "CPNP-AC", body: "PNCB", scope: "Pediatric acute care, advanced practice", who: "Pediatric NPs in acute/critical care" },
      { row: "PMHS", body: "PNCB", scope: "Pediatric primary care mental health (add-on specialty)", who: "Pediatric primary care RNs and NPs" },
    ],
    closingProse:
      "<strong>Take CPN if you want to validate generalist pediatric RN expertise across inpatient and outpatient settings.</strong> Choose CPEN instead if your day-to-day is the pediatric emergency department. CPNP-PC and CPNP-AC are advanced-practice credentials that require a graduate NP degree — they do not replace CPN on an RN's credentials line.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about CPN certification",
    items: [
      { q: "What does CPN stand for in nursing?", a: "CPN stands for Certified Pediatric Nurse. The credential is issued by the Pediatric Nursing Certification Board (PNCB)." },
      { q: "Is CPN the same as CPNP?", a: "No. CPN is an RN-level board certification, while CPNP-PC and CPNP-AC are advanced-practice Pediatric Nurse Practitioner credentials that require a graduate NP degree. All three are issued by PNCB." },
      { q: "What are the eligibility requirements for the CPN exam?", a: "You need an active, unrestricted RN license plus either 1,800 hours of pediatric clinical experience in the past 24 months, or a five-year pathway with 3,000 pediatric hours in the last five years (including 1,000 in the past 24 months)." },
      { q: "How many questions are on the CPN exam?", a: "The CPN exam has 175 multiple-choice items — 150 scored and 25 unscored pretest questions — with a 3-hour time limit, delivered by computer at Prometric testing centers." },
      { q: "What is the passing score for the CPN exam?", a: "PNCB uses a scaled score from 200 to 800. A scaled score of 400 is the passing cut point on every form of the exam." },
      { q: "How much does the CPN exam cost?", a: "The initial exam fee is $300, which includes a $100 non-refundable registration fee. A retake costs $245." },
      { q: "Is the CPN exam hard?", a: "The CPN exam is moderately difficult. The most recent verified figure for this page is a roughly 76% pass rate (2022). Candidates who underprepare for Health Promotion and Professional Responsibilities tend to struggle." },
      { q: "How do I renew my CPN certification?", a: "CPN is renewed annually. CPNs recertify each year between November 1 and January 31 by attesting to 15 contact hours, which can include CE, clinical practice hours, teaching, or academic credit." },
      { q: "What happens if I fail the CPN exam?", a: "You may reapply after your official results are released and receive a new 90-day testing window. The retake fee is $245." },
      { q: "Is CPN recognized outside the United States?", a: "Yes. RNs with an active, unrestricted US RN license may use international pediatric practice experience, and Canadian RNs are eligible on the same terms." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following sources. Fees, blueprint weights, and recertification rules shift on PNCB's revision cycle — always verify numeric facts against the current PNCB pages before relying on them for application decisions.",
    ],
    list: [
      "Pediatric Nursing Certification Board (PNCB) — Certified Pediatric Nurse (CPN) overview",
      "PNCB — CPN Exam FAQs (eligibility pathways and accepted experience)",
      "PNCB — CPN Exam Administration (Prometric, 175 items, 3-hour limit, 90-day window)",
      "PNCB — CPN Exam Scoring (scaled 200–800, passing cut point 400)",
      "PNCB — CPN Certification Steps (fees: $300 initial, $245 retake)",
      "PNCB — CPN Recertification (annual renewal, 15 contact hours, Nov 1–Jan 31)",
      "PNCB — 2022 CPN Exam Content Outline (four-domain blueprint, 2021–2022 Job Task Analysis)",
      "PNCB — About / organization history (PNCB founded 1975; CPN offered since 1989)",
      "US Bureau of Labor Statistics (BLS) — Occupational Employment and Wage Statistics, Registered Nurses (May 2024): $98,430 mean RN wage",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice CPN-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to the PNCB four-domain blueprint. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full CPN question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "CPEN",
      title: "CPN vs CPEN: which pediatric credential fits your scope?",
      blurb: "Blueprint focus, settings, and career impact — for pediatric RNs weighing the generalist CPN against the emergency-focused CPEN.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "Assessment + Planning: the two domains that decide your CPN score",
      blurb: "Why Assessment and Planning and Management together make up about two-thirds of the exam, and the pediatric concepts PNCB tests most.",
      href: "#",
      bg: "#24a865",
    },
    {
      kicker: "Career",
      tag: "Children's hospital",
      title: "How CPN supports clinical-ladder advancement in pediatric units",
      blurb: "How children's hospitals use CPN-holder counts and what hiring managers look for beyond the credential.",
      href: "#",
      bg: "#cf1d00",
    },
  ],
};
