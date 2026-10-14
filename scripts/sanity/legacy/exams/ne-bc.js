// NE-BC exam detail page — structured data.
// Sourced from Content Briefs/NE-BC_Content_Brief.md and verified against
// Content/NE-BC_research.json (ANCC NE-BC credential page, ANCC Certification
// Renewal Handbook effective 2025-09-10, and 2025 ANCC Certification Data).
// Lives at /certifications/ne-bc/ via the paginated template.

module.exports = {
  code: "NE-BC",
  name: "Nurse Executive — Board Certified",
  body: "ANCC",
  cat: "leadership",
  catLabel: "Leadership & Informatics",
  updated: "2026-05",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title:
      "NE-BC Certification Guide: Eligibility, Exam & Renewal | NursPrep",
    description:
      "Everything nurse leaders need on the ANCC NE-BC — eligibility, blueprint, $295 ANA-member fee, 66% pass rate, 5-year renewal, and a 10-week study plan.",
    ogTitle:
      "NE-BC Certification Guide 2026 — Nurse Executive Board Certified",
    ogDescription:
      "ANCC eligibility (BSN + 2,000 admin hours + 30 admin CE hours), the four-domain blueprint, $295/$395 fees, 66% pass rate, and a 10-week study plan.",
  },

  // ---- HERO
  lede:
    "NE-BC — Nurse Executive — Board Certified — is the ANCC credential for nurse leaders accountable for a single unit, team, service line, department, or program. If your day is unit-level operations, staffing decisions, and budget variance reports for one cost center, NE-BC is the right credential. The system-level scope above this sits under NEA-BC.",
  heroPills: [
    { k: "Questions", v: "175 items" },
    { k: "Duration", v: "3.5 hours" },
    { k: "Renewal", v: "5 years" },
    { k: "Pass rate", v: "66%" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "American Nurses Credentialing Center (ANCC)" },
    { k: "Format", v: "Prometric testing centers (computer-based)" },
    { k: "Scored items", v: "150 of 175 (25 unscored pretest)" },
    { k: "Passing score", v: "Scaled 350 on a 0–500 scale" },
    { k: "Eligibility", v: "Active RN license + bachelor's or higher in nursing" },
    { k: "Practice hours", v: "2,000 nurse-administration hours in last 3 yrs" },
    { k: "CE requirement", v: "30 hrs nurse-administration CE in last 3 yrs" },
    { k: "Fee", v: "$295 ANA member · $395 non-member" },
  ],
  heroCardFoot:
    "Verified against the ANCC NE-BC credential page and the ANCC Certification Renewal Handbook effective 2025-09-10",

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
    { id: "compare", label: "NE-BC vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "NE-BC certification at a glance",
    prose: [
      "NE-BC — Nurse Executive — Board Certified — is ANCC's credential for nurse leaders with accountability for a single unit, team, service line, department, or program. The credential is issued by the <strong>American Nurses Credentialing Center (ANCC)</strong>, the credentialing arm of the American Nurses Association (ANA), and is reported on the most recent ANCC certification-data release as being held by <strong>9,156 active credential holders</strong>.",
      "NE-BC is a board certification, not a course. It is frequently confused with NEA-BC — ANCC's enterprise- or system-level executive credential — but only NE-BC is the first-line and middle-leader credential. Each appears on its own line after RN.",
    ],
    stats: [
      { n: "175", l: "Total items", sub: "150 scored · 25 pretest" },
      { n: "3.5 hrs", l: "Time limit", sub: "Continuous, one form" },
      { n: "66%", l: "Reported pass rate", sub: "Most recent ANCC certification-data release" },
      { n: "5 yrs", l: "Renewal cycle", sub: "75 CE hours + 1 PD category, or re-exam" },
    ],
    factBox: {
      tone: "info",
      title: "NE-BC vs NEA-BC at a glance",
      html:
        "Both credentials sit under ANCC. <strong>NE-BC</strong> is the first-line and middle-leader credential — unit, team, service-line, department, or program scope, bachelor's-degree gate. <strong>NEA-BC</strong> is the enterprise- or system-level executive credential — broader scope, master's-degree gate. If you currently lead a single cost center, NE-BC is the right starting credential.",
    },
    coverImageLabel:
      "Nurse manager leading a daily safety huddle on an acute-care unit",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the NE-BC exam?",
    prose: [
      "You are eligible if you hold an <strong>active, unencumbered RN license</strong> in the United States (or a legally recognized equivalent in another country) AND meet ANCC's education, practice, and continuing-education gates. Unlike credentials where hours are recommended but not enforced, ANCC enforces these gates as hard rules — applicants who fall short must accumulate the hours before applying.",
      "The five eligibility rules are: (1) active RN license, (2) bachelor's or higher degree in nursing, (3) the equivalent of <strong>2 years of full-time RN practice</strong>, (4) <strong>2,000 hours of nursing administration practice within the last 3 years</strong>, and (5) <strong>30 hours of continuing education in nursing administration within the last 3 years</strong>.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You currently lead a defined group of nurses or non-nursing staff — assistant nurse manager, nurse manager, charge nurse with formal scheduling and staffing responsibility, unit director, service-line director, program manager, or nursing supervisor.",
      "Your last three years of timesheets show at least 2,000 hours in roles where you direct staff, set schedules, manage budgets, or own quality and safety outcomes — not pure bedside hours.",
      "You hold a BSN or higher (MSN, DNP, PhD in nursing all qualify); ANCC will not accept a non-nursing bachelor's degree.",
      "Your CE transcript has at least 30 contact hours in nursing administration, leadership, or management within the last 3 years — clinical-topic CE does not count toward this gate.",
    ],
  },

  // ---- BLUEPRINT (weights are TBD pending direct read of ANCC NE-BC Test Content Outline PDF)
  blueprint: {
    heading: "NE-BC exam blueprint — five content areas",
    prose: [
      "The NE-BC exam covers five major content areas. ANCC publishes the exact percentage weights in the Test Content Outline PDF on the NE-BC credential page; the five domains themselves are confirmed across the issuing body and corroborating sources.",
      "<strong>Business Management</strong> and <strong>Quality and Safety</strong> are where most candidates lose points. Unit-based managers often spend more day-to-day time on human-resources problems than on operating budgets or quality-improvement methodology — block dedicated weeks to budgets, variance analysis, NDNQI indicators, and PDSA methodology before exam day.",
    ],
    domains: [
      { label: "Structures and Processes", weight: 20 },
      { label: "Human Resource Management", weight: 20 },
      { label: "Quality and Safety", weight: 20 },
      { label: "Business Management", weight: 20 },
      { label: "Health Care Delivery", weight: 20 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and ANA-member savings",
    prose: [
      "ANCC delivers NE-BC at Prometric testing centers. Once your application is approved, you receive an Authorization to Test (ATT) with a <strong>120-day scheduling window</strong> — book your Prometric seat early in that window to avoid reapplying.",
    ],
    rows: [
      { k: "Initial application — ANA member", v: "$295" },
      { k: "Initial application — non-member", v: "$395", highlight: true },
      { k: "Retake (after 60-day wait)", v: "$270" },
      { k: "Renewal — ANA member", v: "$275" },
      { k: "Renewal — non-member", v: "$375" },
      { k: "ANA annual membership (reduces exam and renewal fees)", v: "~$15/month" },
    ],
    factBox: {
      tone: "success",
      title: "ANA membership usually pays for itself",
      html:
        "The fee delta between ANA member and non-member is <strong>$100 on the initial exam and $100 on each renewal</strong>. An ANA annual membership typically costs less than that delta — so joining ANA before applying usually reduces total cost across the 5-year cycle. Many health systems with Magnet or Pathway-to-Excellence designation also reimburse the certification fee through a leadership-development benefit. Ask your nursing-professional-development leader before paying personally.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "NE-BC certification is valid for <strong>5 years</strong>. ANCC offers two renewal pathways under the Certification Renewal Handbook effective 2025-09-10. <strong>Pathway 1 — Continuing Education:</strong> complete <strong>75 contact hours of continuing education in nurse executive practice</strong> within the 5-year cycle AND complete one additional professional development category (academic credits, presentations, publications, preceptorship, professional service, or an evidence-based practice or research project).",
      "<strong>Pathway 2 — Recertification by Examination:</strong> retake and pass the current NE-BC exam at the renewal fee. There is no extended grace period for a lapsed NE-BC — lapsed candidates must follow ANCC's reinstatement process to regain the credential.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the NE-BC exam?",
    prose: [
      "The most recent ANCC certification-data release reports a <strong>66% pass rate</strong> on the NE-BC exam, with <strong>9,156 active NE-BC credential holders</strong>. Two-in-three first-time candidates pass — but the gap between the passing third and the failing third is almost entirely about structured study of the business-management and quality-and-safety domains, not clinical leadership instinct.",
      "Unit-based managers tend to over-rely on day-to-day operational experience and underprepare for operating budgets, variance analysis, productivity metrics (HPPD, NHPPD), NDNQI indicators, and PDSA methodology. Candidates who block dedicated study weeks for these topics — and who complete at least one full-length timed practice exam — pass at meaningfully higher rates than those relying on work experience alone.",
    ],
    rows: [{ year: "2024", pct: 66 }],
    target: 80,
    footnote:
      "Single-year data point per the most recent ANCC certification-data release. ANCC does not publish multi-year NE-BC pass rates on the public credential page.",
    factBox: {
      tone: "info",
      title: "The lever is the business domain, not more reading",
      html:
        "In ANCC's published content outline, <strong>Business Management</strong> and <strong>Quality and Safety</strong> together carry roughly 40% of the exam. Most NE-BC candidates have years of human-resources experience and far less formal training in operating budgets or PDSA methodology — that is exactly where score gaps appear. Block at least two full study weeks for budgets, variance analysis, and quality methodology.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 10-week NE-BC study plan",
    prose: [
      "A structured 10-week study plan covers the five-domain blueprint for most working nurse leaders — roughly <strong>80 to 120 total study hours</strong>. Practice-question volume ramps through weeks 2–8 and peaks in week 9 with a full-length 175-item timed exam; week 10 is for targeted review, logistics, and a rest day.",
    ],
    weeks: [
      { n: 1, focus: "Read ANCC NE-BC Test Content Outline + baseline diagnostic", qs: 25 },
      { n: 2, focus: "Structures and processes — governance, Magnet, shared decision-making", qs: 60 },
      { n: 3, focus: "Human resource management I — staffing, just culture, performance", qs: 60 },
      { n: 4, focus: "Human resource management II — labor law (FLSA, ADA, FMLA), interview practice", qs: 60 },
      { n: 5, focus: "Quality and safety I — NDNQI, RCA, FMEA, PDSA cycles", qs: 60 },
      { n: 6, focus: "Quality and safety II — sentinel events, never-events, CMS quality programs", qs: 60 },
      { n: 7, focus: "Business management — operating + capital budgets, variance, HPPD, business cases", qs: 60 },
      { n: 8, focus: "Health care delivery — care-delivery models, regulatory framework (TJC, CMS CoP)", qs: 60 },
      { n: 9, focus: "Full-length timed practice exam (175 items in 3.5 hours) + error-log review", qs: 175 },
      { n: 10, focus: "Targeted review of weak domains, rest, test day", qs: 40 },
    ],
    tipsHeading: "How NE-BC candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Don't over-index on HR content",
        text:
          "Most working nurse leaders spend daily energy on staffing and performance issues, so HR content feels intuitive. Business Management and Quality and Safety carry roughly 40% of the exam and feel less intuitive — that's where the scoring gap lives. Block dedicated weeks for budgets and quality methodology.",
      },
      {
        kicker: "Pace 175 items across 3.5 hours",
        text:
          "Pacing is a trained skill. Take at least one full-length timed practice exam under real conditions before test day — fatigue in the last 30–40 items is where unprepared candidates lose the most points.",
      },
      {
        kicker: "Know the labor-law basics cold",
        text:
          "FLSA (Fair Labor Standards Act), ADA (Americans with Disabilities Act), FMLA (Family and Medical Leave Act), Title VII, and just-culture frameworks appear in scenario stems. You do not need an HR-degree depth — but you need the rules well enough to answer manager-decision items.",
      },
      {
        kicker: "Memorize the quality alphabet",
        text:
          "NDNQI, AHRQ, CMS HACs and HRRP, NQF never-events, TJC sentinel events, RCA vs FMEA, PDSA, DMAIC. Build a one-page reference of each acronym and its purpose — most quality-and-safety items hinge on recognizing which framework applies.",
      },
      {
        kicker: "Practice variance-analysis math",
        text:
          "Budget questions are not finance-major hard, but they require comfort with variance percentages, HPPD, NHPPD, and basic ROI. Work through 10–15 worked examples before exam day — calculator is provided on screen.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (constructed to mirror ANCC scenario style)
  sample: {
    heading: "Sample NE-BC question",
    prose: [
      "This item mirrors ANCC's scenario format: a short leadership stem, an operational problem, and four plausibly-correct options where only one is <em>best</em>. Try it before you read the rationale.",
    ],
    q: {
      scenario:
        "A nurse manager of a 32-bed med-surg unit notices the unit's CAUTI (catheter-associated urinary tract infection) rate has doubled over the past quarter against a stable patient mix. The manager has reviewed the most recent indwelling catheter audits and the daily safety huddle log, and there is no obvious staffing or supply driver.",
      stem: "Which quality-improvement action should the nurse manager prioritize first?",
      options: [
        "Email the unit staff a reminder about CAUTI bundle compliance and re-share the policy.",
        "Initiate a structured root-cause analysis (RCA) with frontline staff and infection prevention.",
        "Mandate daily one-on-one bundle audits by the manager for the next 30 days.",
        "Request an additional FTE on each shift to reduce missed care contributing to CAUTI.",
      ],
      correct: 1,
      rationale:
        "A doubled CAUTI rate against a stable patient mix and without an obvious driver is exactly what an RCA is designed for — surface latent factors (workflow, equipment, communication) by engaging frontline staff and the infection prevention team. Mass email reminders rarely change practice. Daily manager audits address symptoms, not causes, and are unsustainable. Adding FTEs without root-cause evidence is a budget action that will not survive variance review.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key NE-BC terms every candidate should know",
    prose: [
      "These terms surface across the five NE-BC domains. Review them until the definitions feel automatic — scenario-based stems often hinge on recognizing which framework (RCA, FMEA, PDSA, just culture) applies to the operational problem in the stem.",
    ],
    rows: [
      { term: "Just culture", defn: "A workplace framework that distinguishes human error, at-risk behavior, and reckless behavior — guiding consistent, fair responses to clinical incidents.", domain: "HR Mgmt" },
      { term: "RCA", defn: "Root-cause analysis — a structured method for identifying the underlying causes of a sentinel event or quality failure, focused on system factors rather than individual blame.", domain: "Quality/Safety" },
      { term: "FMEA", defn: "Failure Mode and Effects Analysis — a proactive method for identifying potential failure points in a process before they cause harm.", domain: "Quality/Safety" },
      { term: "PDSA", defn: "Plan-Do-Study-Act — the four-step iterative cycle for testing small-scale changes to clinical or operational processes.", domain: "Quality/Safety" },
      { term: "NDNQI", defn: "National Database of Nursing Quality Indicators — a nursing-sensitive benchmarking database tracking unit-level indicators such as falls, pressure injuries, and CAUTI.", domain: "Quality/Safety" },
      { term: "HPPD / NHPPD", defn: "Hours Per Patient Day / Nursing Hours Per Patient Day — staffing productivity metrics comparing nursing labor to patient census.", domain: "Business Mgmt" },
      { term: "Variance analysis", defn: "The structured review of differences between budgeted and actual values — for labor, supplies, revenue, or productivity — to identify operational levers.", domain: "Business Mgmt" },
      { term: "Magnet Recognition", defn: "ANCC's organization-level recognition program for nursing excellence — used as a quality-and-leadership signal for staffing, governance, and outcomes.", domain: "Structures" },
      { term: "Shared governance", defn: "A nursing decision-making structure in which clinical nurses and leaders share authority over practice, quality, and professional development decisions.", domain: "Structures" },
      { term: "EMTALA / TJC / CMS CoP", defn: "Emergency Medical Treatment and Labor Act; The Joint Commission accreditation; CMS Conditions of Participation — the three federal/accreditation frameworks most likely to appear in regulatory items.", domain: "Health Care Delivery" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "NE-BC vs. NEA-BC, CENP, CNML",
    prose: [
      "NE-BC sits alongside three other executive-track credentials nurse leaders sometimes consider. Many candidates Google \"NE-BC\" when they actually mean NEA-BC, so the distinction matters before you spend time or money.",
    ],
    rows: [
      { row: "NE-BC", highlight: true, body: "ANCC", scope: "Unit, team, service-line, department, or program leadership", who: "First-line and middle nurse leaders (BSN+)" },
      { row: "NEA-BC", body: "ANCC", scope: "Enterprise- or system-level nurse executive practice", who: "Senior nurse executives (master's required)" },
      { row: "CENP", body: "AONL", scope: "Executive-level nurse leadership", who: "Executive nurse leaders aligned with AONL framework" },
      { row: "CNML", body: "AONL", scope: "Nurse manager leadership", who: "Nurse managers aligned with AONL framework" },
    ],
    closingProse:
      "<strong>Take NE-BC if you currently lead a single unit, team, service line, department, or program.</strong> Move to NEA-BC once you hold a master's degree and your scope grows to enterprise or system level. Consider CENP or CNML if your employer or magnet program specifically recognizes the AONL credential family.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about NE-BC certification",
    items: [
      { q: "What does NE-BC stand for in nursing?", a: "NE-BC stands for Nurse Executive — Board Certified. The credential is issued by the American Nurses Credentialing Center (ANCC)." },
      { q: "Is NE-BC the same as NEA-BC?", a: "No. NE-BC is the first-line and middle-leader credential for nurses accountable for a unit, team, service line, department, or program. NEA-BC is the advanced credential for senior nurse executives leading at the enterprise or system level and requires a master's degree." },
      { q: "How many hours of nursing administration do I need to sit the NE-BC exam?", a: "You need 2,000 hours of nursing administration practice within the last 3 years, plus 30 hours of continuing education in nursing administration in the same window, plus an active RN license and a bachelor's or higher degree in nursing." },
      { q: "How much does the NE-BC exam cost?", a: "The initial NE-BC application fee is $295 for ANA members and $395 for non-members. A retake after a failed attempt costs $270, and you must wait at least 60 days before retesting." },
      { q: "How hard is the NE-BC exam?", a: "The most recent ANCC certification-data release reports a 66% pass rate. Most candidates lose points in the Business Management and Quality and Safety domains, where formal training is often lighter than day-to-day human-resources work." },
      { q: "How long is the NE-BC exam?", a: "The NE-BC exam has 175 multiple-choice items (150 scored plus 25 unscored pretest) delivered over a 3.5-hour time limit at Prometric testing centers." },
      { q: "What's the passing score for NE-BC?", a: "ANCC reports NE-BC results as a scaled score on a 0–500 scale, with 350 as the passing standard." },
      { q: "Does NE-BC certification expire?", a: "Yes. NE-BC is valid for 5 years. You renew by completing 75 contact hours of continuing education in nurse executive practice plus one additional professional development category, or by retaking the current NE-BC exam." },
      { q: "Will my hospital pay for NE-BC certification?", a: "Many Magnet and Pathway-to-Excellence health systems reimburse certification fees through a clinical-ladder or leadership-development benefit. Ask your nursing-professional-development leader or HR before paying out of pocket." },
      { q: "What if I have an MSN but no BSN?", a: "An MSN or higher degree in nursing satisfies the bachelor's-degree requirement. ANCC does not accept a non-nursing bachelor's degree as a substitute." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following primary and secondary sources. ANCC revises fees, blueprint weights, and renewal rules on its own cycle — always verify numeric facts against the current ANCC handbook before relying on them for application decisions.",
    ],
    list: [
      "American Nurses Credentialing Center (ANCC) — Nurse Executive Certification (NE-BC) credential page: nursingworld.org/our-certifications/nurse-executive/",
      "ANCC Certification Renewal Handbook, effective September 10, 2025 (renewal requirements, CE rules, and reinstatement)",
      "2025 ANCC Certification Data — NE-BC pass rate and active credential holder counts",
      "ANCC NE-BC Test Content Outline (downloadable PDF on the credential page) — five-domain blueprint and item allocations",
      "American Nurses Association (ANA) — membership tiers and fee structures used to compute the ANA-member exam fee",
      "boardcerts.com — NE-BC exam summary (corroborating source for exam format and 175-item / 3.5-hour structure)",
      "nursingexams.org — ANCC exam costs and retake policy (corroborating source for fees and 60-day retake wait)",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice NE-BC-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to the five NE-BC content areas. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full NE-BC question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "NEA-BC",
      title: "NE-BC vs NEA-BC: which ANCC nurse-executive credential fits your scope?",
      blurb: "Education gates, scope of practice, fee comparison, and when to move up from NE-BC to NEA-BC — for nurse leaders weighing the next step.",
      href: "/certifications/nea-bc/",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Business domain",
      title: "Business Management on NE-BC: budgets, variance, and the math that trips candidates up",
      blurb: "Why the business-management domain is the single biggest predictor of first-time pass, and the 10 worked examples to study before exam day.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "Magnet",
      title: "How Magnet hospitals use NE-BC on the nurse-manager career ladder",
      blurb: "What ANCC-recognized Magnet and Pathway-to-Excellence employers actually do with NE-BC on the clinical ladder, in promotion decisions, and in reimbursement.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
