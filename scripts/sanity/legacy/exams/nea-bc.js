// NEA-BC exam detail page — structured data.
// Sourced from Content/NEA-BC Certification.docx (verified against ANCC
// General Testing & Renewal Handbook and ANCC NEA-BC Test Content Outline
// effective Nov 11, 2025; ANA scope-and-standards primary source).
// Lives at /certifications/nea-bc/ via the paginated template.

module.exports = {
  code: "NEA-BC",
  name: "Nurse Executive, Advanced — Board Certified",
  body: "ANCC",
  cat: "leadership",
  catLabel: "Leadership & Informatics",
  updated: "2026-04",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title:
      "NEA-BC Certification Guide: Eligibility, Exam & Renewal | NursPrep",
    description:
      "NEA-BC certification for senior nurse executives — 2026 eligibility, Nov 2025 ANCC blueprint, $270–$395 fees, 12-week study plan, and portfolio renewal explained.",
    ogTitle:
      "NEA-BC Certification Guide 2026 — Nurse Executive, Advanced Board Certified",
    ogDescription:
      "ANCC eligibility (2,000 exec hours + 30 CE), the Nov 11 2025 four-domain blueprint, $270/$395 fees, portfolio-only renewal, and a 12-week study plan for CNOs and VPs of Nursing.",
  },

  // ---- HERO
  lede:
    "NEA-BC is the Nurse Executive, Advanced — Board Certified credential issued by ANCC. It validates senior nurse leaders — CNOs, VPs of Nursing, Executive Directors — whose decisions shape nursing strategy, finance, policy, and workforce outcomes across an entire organization or health system. If your scope is a single unit or department, NE-BC is the entry point; NEA-BC is the system-level step above it.",
  heroPills: [
    { k: "Questions", v: "150 items" },
    { k: "Duration", v: "3 hours" },
    { k: "Renewal", v: "5 years · portfolio" },
    { k: "Pass rate", v: "~70–80% (verify)" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "American Nurses Credentialing Center (ANCC)" },
    { k: "Format", v: "Prometric testing centers (no live remote proctoring)" },
    { k: "Scored items", v: "125 of 150 (25 unscored pretest)" },
    { k: "Eligibility", v: "Active RN · MSN in nursing OR BSN + master's/doctoral in related field" },
    { k: "Practice hours", v: "2,000 executive-scope hours in last 3 yrs" },
    { k: "CE requirement", v: "30 hrs leadership/mgmt/admin CE in last 3 yrs (or qualifying MSN)" },
    { k: "Fee", v: "$270 ANA member · $395 non-member" },
    { k: "Renewal cycle", v: "5 years — portfolio only (no retake exam option)" },
  ],
  heroCardFoot:
    "Verified against the ANCC NEA-BC Test Content Outline effective 2025-11-11 and the ANCC 2026 fee schedule",

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
    { id: "compare", label: "NEA-BC vs. NE-BC & CENP" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "NEA-BC certification at a glance",
    prose: [
      "NEA-BC — Nurse Executive, Advanced — Board Certified — is ANCC's senior-executive nursing credential. The letters stand for <strong>Nurse Executive, Advanced — Board Certified</strong>, and the \"Advanced\" in the name is what separates it from NE-BC: it is explicitly built for nurse leaders whose accountability spans an entire organization or health system rather than a single unit or department.",
      "Typical NEA-BC holders include Chief Nursing Officers, Vice Presidents of Nursing, Executive Directors of Nursing, System Directors, and Chief Nurse Executives in federal, military, or public-health roles. The credential signals readiness for system-level accountability to search committees, boards, Magnet® surveyors, and the C-suite — and it is the ANCC-side counterpart to AONL's CENP.",
    ],
    stats: [
      { n: "150", l: "Total items", sub: "125 scored · 25 pretest · 3 hours" },
      { n: "~70–80%", l: "Reported pass rate range", sub: "Verify against latest ANCC data summary" },
      { n: "2,000", l: "Executive practice hours", sub: "Org-wide or system-wide, last 3 yrs" },
      { n: "5 yrs", l: "Renewal cycle", sub: "Portfolio only — no retake exam path" },
    ],
    factBox: {
      tone: "info",
      title: "What changed on November 11, 2025",
      html:
        "ANCC moved NEA-BC to a new Test Content Outline effective <strong>2025-11-11</strong>. The current blueprint weights are <strong>Leadership 34%</strong>, <strong>Health Care Delivery 27%</strong>, <strong>Quality and Safety 24%</strong>, and <strong>Human Capital Management 14%</strong> (the published weights sum to 99% — a rounding artifact in ANCC's outline). The exam remains 150 items over 3 hours at Prometric, with no live remote proctoring option.",
    },
    coverImageLabel:
      "Nurse executive in a hospital boardroom reviewing workforce metrics with the C-suite",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the NEA-BC exam?",
    prose: [
      "You are eligible for the NEA-BC exam if you hold an <strong>active, unencumbered RN license</strong> (US or US territory), a qualifying <strong>master's or doctoral degree</strong>, <strong>2,000 executive practice hours in the last 3 years</strong>, and <strong>30 hours of continuing education in leadership, management, or administration</strong> in the last 3 years. An MSN specifically in nursing administration or nurse executive leadership can substitute for the 30 CE hours.",
      "The \"executive practice\" bar is what filters NEA-BC candidates from NE-BC candidates: the 2,000 hours must involve <strong>organization-wide or system-wide</strong> scope — strategy, multi-unit budget ownership, policy setting, workforce decisions spanning service lines — not single-unit or single-department management. Shared-governance committee chair work counts only when the role carries enterprise authority, not unit authority.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You hold an active, unencumbered RN license in a US state or territory.",
      "You hold a master's or doctoral degree in nursing, or a BSN plus a master's or doctoral degree in a nursing-related field (healthcare administration, public health, business administration, informatics, etc.).",
      "You have logged 2,000+ hours of executive-level leadership — organization-wide or system-wide scope — within the last 3 years. DNP coursework and federal/military executive time both count when aligned.",
      "You have completed 30 hours of CE in leadership, management, or administration in the last 3 years — or you can waive the CE requirement with a qualifying MSN in nursing administration / nurse executive leadership.",
      "Your current title is CNO, Deputy/Associate CNO, VP Nursing, Executive Director of Nursing, System Director, or Chief Nurse Executive — and your decisions regularly extend beyond a single unit or department.",
      "If you are still leading one unit or department, NE-BC is the better starting point — take NEA-BC once you have held org-wide responsibility for at least 2 of the last 3 years.",
    ],
  },

  // ---- BLUEPRINT (weights = ANCC TCO effective 2025-11-11; published weights sum to 99% — rounding)
  blueprint: {
    heading: "NEA-BC exam blueprint — four domains (effective 2025-11-11)",
    prose: [
      "The current ANCC Test Content Outline weights the exam across four domains: <strong>Leadership (34%)</strong>, <strong>Health Care Delivery (27%)</strong>, <strong>Quality and Safety (24%)</strong>, and <strong>Human Capital Management (14%)</strong>. Leadership and Health Care Delivery together account for <strong>61% of scored items</strong> — that is where the pass/fail margin lives. ANCC's published weights sum to 99%; the missing 1% is a rounding artifact, not a real gap.",
      "Do not under-weight Human Capital Management just because it is the smallest domain. Workforce engagement, professional development, employment law, and succession planning items still count — candidates who skip the domain because \"it's only 14%\" routinely lose the pass margin on it.",
    ],
    domains: [
      { label: "Leadership", weight: 34 },
      { label: "Health Care Delivery", weight: 27 },
      { label: "Quality and Safety", weight: 24 },
      { label: "Human Capital Management", weight: 14 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and return on investment",
    prose: [
      "ANCC delivers NEA-BC through <strong>Prometric testing centers only</strong> — there is no live remote proctoring option for this exam. ANCC accepts applications year-round, and approved candidates receive an <strong>Authorization to Test (ATT) valid for 120 days</strong> to schedule and sit for the exam at Prometric. Plan 4–6 weeks for application review before your ATT arrives.",
      "At a $270 (ANA member) or $395 (non-member) application fee and typical CNO / VP-of-Nursing compensation in the $200k–$300k range in US urban markets (per Medscape Nurse Compensation benchmarks), the fee is small relative to the role. The real cost is prep time — budget 80–120 hours of focused study. Many health systems reimburse ANCC certification fees through education or tuition benefit lines; confirm with HR before paying out of pocket.",
    ],
    rows: [
      { k: "Initial application — ANA member", v: "$270" },
      { k: "Initial application — non-member", v: "$395" },
      { k: "Exam retake", v: "$395 (verify current fee with ANCC)" },
      { k: "Renewal by portfolio — ANA member", v: "$250", highlight: true },
      { k: "Renewal by portfolio — non-member", v: "$350" },
      { k: "ATT validity window", v: "120 days (vs. 90 days for many other ANCC exams)" },
    ],
    factBox: {
      tone: "success",
      title: "ANA membership often pays for itself on cycle 1",
      html:
        "ANA membership shifts the initial fee from <strong>$395 → $270</strong> (save $125) and the renewal-by-portfolio fee from <strong>$350 → $250</strong> (save $100). The savings alone — $225 across one 5-year cycle — typically exceed a year of ANA dues, and membership also unlocks discounted ANA journals, CE libraries, and discounted scope-and-standards purchases that feed directly into your portfolio.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "NEA-BC certification is valid for <strong>five years</strong>. ANCC renews NEA-BC through a <strong>portfolio model only</strong> — there is no retake-exam renewal path. You accumulate evidence across multiple portfolio categories throughout the 5-year cycle: <strong>Continuing Education, Academic Credits, Presentations, Publications and Research, Preceptor Hours, Professional Service, Practice Hours, and Professional Development</strong>. A minimum number of points must be earned across multiple categories.",
      "Build your portfolio in <strong>year 1 of the cycle, not year 5</strong>. The portfolio rewards executives who are already doing the work of senior leadership — speaking at AONL or ANA conferences, serving on system or community boards, publishing in <em>JONA</em> or <em>Nurse Leader</em>, precepting DNP students. Treating portfolio categories as a year-5 sprint is where most NEA-BC holders run into trouble.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the NEA-BC exam?",
    prose: [
      "ANCC publishes annual pass rates in its Certification Data Summary. First-time pass rates for NEA-BC <strong>typically run in the 70%–80% range</strong>, reflecting a self-selected senior candidate pool — candidates have already cleared master's coursework and 2,000+ executive hours by the time they sit. As a reference point, the <strong>NE-BC first-time pass rate was approximately 66% (874 of 1,317 candidates)</strong> in the most recent public reporting year.",
      "The pass-rate number matters less than the failure pattern. Candidates who fail NEA-BC tend to share four mistakes: treating the exam as a clinical-recall test, under-weighting Human Capital Management because the percentage is small, skipping financial fluency prep (fiscal scenarios surface across all four domains), and cramming the last week instead of distributing practice. The exam rewards judgment, not memorization — executive scenarios need distributed exposure.",
    ],
    rows: [
      { year: "NEA-BC (typical)", pct: 75 },
      { year: "NE-BC (reference)", pct: 66 },
    ],
    target: 80,
    footnote:
      "The 70–80% NEA-BC range is reported by ANCC's Certification Data Summary; NE-BC's 66% (874 of 1,317) is the most recent publicly available hard figure. Always verify the current NEA-BC number against the latest ANCC data summary before relying on a specific pass rate.",
    factBox: {
      tone: "info",
      title: "Leadership + Health Care Delivery = 61% of your score",
      html:
        "The two largest domains together — <strong>Leadership (34%)</strong> and <strong>Health Care Delivery (27%)</strong> — account for <strong>61% of scored items</strong>. Weight your 12-week plan accordingly: 5 of 12 weeks on those two domains. But do not starve Human Capital Management (14%) — the 4–5 weeks of content across the smaller domains is usually what decides the pass margin for candidates who are otherwise close.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 12-week NEA-BC study plan",
    prose: [
      "Most successful NEA-BC candidates study for <strong>10–12 weeks at 8–10 hours per week</strong>. Anchor your plan around the <strong>ANCC Test Content Outline (Nov 2025 version)</strong>, ANA's <strong>Nursing Administration: Scope and Standards of Practice</strong>, a current healthcare-finance primer covering capital, operating, and value-based budgets, and a practice question bank with 500–800 items. Well-known review vendors include Fitzgerald, Hess, Barkley, Board Vitals, and Mometrix.",
    ],
    weeks: [
      { n: 1, focus: "Read the TCO + diagnostic exam to calibrate weak domains", qs: 50 },
      { n: 2, focus: "Leadership — theory, styles, emotional intelligence, communication", qs: 60 },
      { n: 3, focus: "Leadership — change management, strategic planning, coaching", qs: 60 },
      { n: 4, focus: "Leadership — fiscal stewardship + budget scenarios (capital/operating)", qs: 60 },
      { n: 5, focus: "Health Care Delivery — care delivery models, ethics, health IT", qs: 60 },
      { n: 6, focus: "Health Care Delivery — EBP, research methods, patient experience", qs: 60 },
      { n: 7, focus: "Quality and Safety — regulatory standards, risk management, benchmarking", qs: 60 },
      { n: 8, focus: "Quality and Safety — performance improvement, emergency preparedness", qs: 60 },
      { n: 9, focus: "Human Capital Management — engagement, employment law, succession", qs: 55 },
      { n: 10, focus: "Full-length timed practice exam #1 + error-log review", qs: 150 },
      { n: 11, focus: "Full-length timed practice exam #2 — target 75% or higher", qs: 150 },
      { n: 12, focus: "Weak-area review, light practice only, rest before exam day", qs: 40 },
    ],
    tipsHeading: "How NEA-BC candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Don't study like it's a clinical exam",
        text:
          "NEA-BC tests executive judgment, not clinical recall. Items read as scenarios with four plausibly-correct options where one best balances fiscal, workforce, ethics, and quality constraints. Drill decision frameworks, not facts.",
      },
      {
        kicker: "Don't under-weight Human Capital Management",
        text:
          "Human Capital Management is 14% of the blueprint — roughly 17–18 scored items. Candidates who skip it because the percentage is small routinely lose the pass margin on employment-law and succession-planning questions.",
      },
      {
        kicker: "Don't skip financial fluency prep",
        text:
          "Fiscal scenarios surface across all four domains, not just Leadership. Read a healthcare-finance primer covering capital, operating, and value-based budgets. Being able to read a contribution-margin statement and explain FTE variance is worth 5–10 questions.",
      },
      {
        kicker: "Don't cram the final week",
        text:
          "Executive scenarios reward distributed practice, not last-minute volume. Daily 60-minute sessions for 10+ weeks beat weekend marathons. Keep the last 48 hours light — error-log review only, then rest.",
      },
      {
        kicker: "Take two full-length timed practice exams",
        text:
          "Weeks 10 and 11 should each include a full 150-item timed exam. Target 75% or higher on both. Pacing endurance for a 3-hour exam matters as much as content recall — fatigue is how scenario judgment degrades late in the sitting.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (verbatim from Content/NEA-BC Certification.docx)
  sample: {
    heading: "Sample NEA-BC question",
    prose: [
      "This item mirrors ANCC's scenario format: a short executive stem, a real-world fiscal constraint, and four plausibly-correct options where only one is <em>best</em>. Try it before you read the rationale.",
    ],
    q: {
      scenario:
        "A health system CFO proposes a 5% cut to nursing education spending. As CNO, you must protect workforce development while respecting fiscal targets.",
      stem: "Which response best balances both priorities?",
      options: [
        "Agree to the 5% cut and absorb the impact quietly.",
        "Propose a 5% reduction redistributed as a tiered cut — lower for onboarding, higher for discretionary travel — paired with measurable retention metrics.",
        "Refuse the cut and escalate to the board.",
        "Delay implementation until the next fiscal year.",
      ],
      correct: 1,
      rationale:
        "Option B preserves core education spend where it has the strongest workforce-outcome link (onboarding, competency development), yields on lower-leverage discretionary categories (conference travel, non-required symposia), and — critically — ties the compromise to measurable retention metrics the CFO can track. Option A (absorb quietly) abdicates executive voice. Option C (refuse and escalate) burns political capital without offering an alternative and often backfires with boards. Option D (delay) trades one problem for another without resolving it. This item maps to Leadership — specifically fiscal stewardship paired with strategic negotiation — and illustrates why the exam rewards judgment over recall.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key NEA-BC terms every candidate should know",
    prose: [
      "Use this glossary while you study. Each term appears on the exam in multiple forms, often as a distractor in scenario-based items. Review until the definitions feel automatic — executive vocabulary is where under-prepared candidates give themselves away on ambiguous items.",
    ],
    rows: [
      { term: "Transformational leadership", defn: "Leadership style that motivates teams to achieve a shared vision beyond self-interest; Magnet® model anchor.", domain: "Leadership" },
      { term: "Shared governance", defn: "Structure that gives nurses authority over professional practice decisions — unit, service-line, and system councils.", domain: "Leadership" },
      { term: "Magnet Recognition Program®", defn: "ANCC designation signaling nursing excellence across five model components; NEA-BC often aligns with CNO responsibilities for Magnet redesignation.", domain: "Quality & Safety" },
      { term: "Quadruple Aim", defn: "Framework adding clinician well-being to the Triple Aim (cost, care, health) — core to current Health Care Delivery items.", domain: "Health Care Delivery" },
      { term: "Value-based care", defn: "Payment model tying reimbursement to patient outcomes rather than service volume — CMS VBP, HRRP, HAC programs.", domain: "Health Care Delivery" },
      { term: "Nursing-sensitive indicator (NSI)", defn: "Metric reflecting nursing-specific care quality — falls with injury, pressure injuries, CAUTI, CLABSI — tracked via NDNQI or equivalent.", domain: "Quality & Safety" },
      { term: "Succession planning", defn: "Structured process for identifying and preparing future nurse leaders — bench strength at ADN, director, and exec levels.", domain: "Human Capital" },
      { term: "Span of control", defn: "Number of direct reports a leader can supervise effectively; heavily tested in workforce-design items.", domain: "Human Capital" },
      { term: "ANA Scope and Standards", defn: "ANA publication defining the scope and standards of nursing practice and nursing administration — a primary source for Leadership items.", domain: "Leadership" },
      { term: "Portfolio renewal", defn: "Non-exam renewal based on documented professional activities across 8 ANCC portfolio categories; NEA-BC's only renewal pathway.", domain: "Professional" },
      { term: "STEEP", defn: "Mnemonic for IOM quality aims — Safety, Timeliness, Effectiveness, Efficiency, Patient-centeredness. Fast recall for Quality & Safety items.", domain: "Quality & Safety" },
      { term: "Just Culture", defn: "Framework balancing accountability and learning after error — distinguishes human error, at-risk behavior, and reckless conduct.", domain: "Quality & Safety" },
      { term: "EBP (Evidence-Based Practice)", defn: "Integration of best research evidence, clinical expertise, and patient values into care decisions — often tested alongside research methods.", domain: "Health Care Delivery" },
      { term: "Change management (Kotter's 8 steps)", defn: "Framework for leading organizational change — urgency, coalition, vision, communication, empowerment, short-term wins, consolidation, anchoring.", domain: "Leadership" },
      { term: "Capital vs. operating budget", defn: "Capital funds long-lived assets (equipment, construction); operating funds recurring expenses (labor, supplies). Know both in fiscal scenarios.", domain: "Leadership" },
    ],
  },

  // ---- COMPARE (directly from NEA-BC vs NE-BC and NEA-BC vs CENP tables in the Word doc)
  compare: {
    heading: "NEA-BC vs. NE-BC vs. CENP: which executive credential fits?",
    prose: [
      "Three credentials compete for senior-nurse-leader attention: <strong>NE-BC</strong> (ANCC, unit/department scope), <strong>NEA-BC</strong> (ANCC, organization/system scope), and <strong>CENP</strong> (AONL, system scope, AONL competency framework). Your current role, education, and organization's framework determine the right path.",
    ],
    rows: [
      { row: "NEA-BC", highlight: true, body: "ANCC", scope: "Organization- or system-wide executive scope", who: "CNO, VP Nursing, Exec Director, System Director — MSN nursing or BSN + related master's/doctoral" },
      { row: "NE-BC", body: "ANCC", scope: "Unit- or department-level leadership", who: "Nurse Manager, Clinical Director — BSN minimum; the entry point before NEA-BC" },
      { row: "CENP", body: "AONL", scope: "System-level; maps to AONL Nurse Executive Competencies", who: "CNOs and VPs whose orgs use the AONL framework (AHA/AONL ecosystem)" },
      { row: "CNML", body: "AONL", scope: "Unit- and department-level manager", who: "Nurse managers in AONL-framework organizations — CENP's unit-level counterpart" },
    ],
    closingProse:
      "<strong>Quick rule of thumb:</strong> Take <em>NE-BC</em> if you lead a unit or department. Take <em>NEA-BC</em> once you have held organization-wide executive responsibility for at least 2 of the last 3 years. Choose <em>NEA-BC over CENP</em> if your organization operates in the ANA / Magnet ecosystem; choose <em>CENP over NEA-BC</em> if your organization uses the AONL Nurse Executive Competencies as its leadership framework. <strong>Dual certification (NEA-BC + CENP) is increasingly common at the CNO level</strong> and is allowed — the credentials reinforce each other rather than compete.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about NEA-BC certification",
    items: [
      { q: "What does NEA-BC stand for?", a: "NEA-BC stands for Nurse Executive, Advanced — Board Certified. ANCC issues the credential to nurse leaders whose accountability spans an organization or health system." },
      { q: "What is the difference between NEA-BC and NE-BC?", a: "NEA-BC is for system-level executives such as CNOs and VPs of Nursing with organization-wide scope. NE-BC is for unit- or department-level nurse managers and directors. NE-BC is the entry point; NEA-BC is the advanced step above it." },
      { q: "Can I sit for NEA-BC without a master's in nursing?", a: "Yes. You can qualify with a BSN plus a master's or doctoral degree in a nursing-related field — healthcare administration, public health, business administration, or informatics are all common routes. Your 2,000 executive practice hours and 30 hours of leadership CE still apply." },
      { q: "How long does it take to prepare for the NEA-BC exam?", a: "Most candidates need 10–12 weeks of structured study, averaging 8–10 hours per week. Active senior executives typically need less clinical review and more financial-fluency and research-methods review than mid-career managers stepping up." },
      { q: "What happens if I fail the NEA-BC exam?", a: "You must wait 60 days before retesting and pay the retake fee ($395; verify current fee with ANCC). There is no lifetime limit on total attempts — candidates who fail typically pass on a second sitting after tightening their weak-domain review." },
      { q: "Does NEA-BC expire?", a: "Yes. NEA-BC is valid for 5 years. ANCC renews NEA-BC through a portfolio model only — there is no retake-exam renewal path. Build your portfolio in year 1 of the cycle, not year 5." },
      { q: "Is NEA-BC recognized internationally?", a: "NEA-BC is a US credential issued by ANCC. International employers often recognize it as equivalent to senior nurse executive certification, though local licensure rules apply. Some Canadian and Middle Eastern health systems specifically list NEA-BC or CENP in CNO job descriptions." },
      { q: "Can DNP coursework count toward NEA-BC eligibility?", a: "Yes, when the coursework aligns with leadership, management, or administration content. DNP practice hours involving organization-wide leadership also count toward the 2,000 executive practice hours, as long as the scope is genuinely system-level." },
      { q: "Will my employer pay for NEA-BC certification?", a: "Many health systems reimburse ANCC certification fees through education or tuition benefit lines. Confirm with HR or finance before paying out of pocket — Magnet-designated organizations in particular tend to fund NEA-BC and CENP for qualifying leaders." },
      { q: "What is the NEA-BC exam pass rate?", a: "ANCC-reported NEA-BC first-time pass rates typically run in the 70–80% range, reflecting a self-selected senior candidate pool. As a reference point, NE-BC's first-time pass rate was approximately 66% (874 of 1,317 candidates) in the most recent public reporting year. Verify the current NEA-BC number against the latest ANCC Certification Data Summary." },
      { q: "Is the NEA-BC exam offered through live remote proctoring?", a: "No. ANCC delivers NEA-BC through Prometric testing centers only. You will need to travel to a Prometric site — there is no at-home remote proctoring option for this exam, unlike some other ANCC credentials." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following primary sources. Fees, blueprint weights, and renewal rules shift on ANCC's revision cycle — always verify numeric facts against the current ANCC General Testing & Renewal Handbook before relying on them for application decisions.",
    ],
    list: [
      "American Nurses Credentialing Center (ANCC) — NEA-BC Test Content Outline effective 2025-11-11",
      "ANCC — General Testing & Renewal Handbook and 2026 fee schedule",
      "ANCC — Certification Data Summary (annual pass-rate reporting, most recent NE-BC figure: 874 of 1,317 = ~66%)",
      "American Nurses Association (ANA) — Nursing Administration: Scope and Standards of Practice",
      "American Organization for Nursing Leadership (AONL) — Nurse Executive Competencies and CENP comparison materials",
      "Medscape Nurse Compensation Report — annual nurse leader compensation benchmarks ($200k–$300k range for CNOs in US urban markets)",
      "US Bureau of Labor Statistics (BLS) — Registered Nurse and Medical and Health Services Manager Occupational Employment and Wage Statistics",
      "Magnet Recognition Program® — nurse leader credential expectations for Magnet-designated organizations",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice NEA-BC-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to the Nov 2025 ANCC blueprint — weighted toward Leadership and Health Care Delivery, where 61% of your score lives. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full NEA-BC question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "NE-BC",
      title: "NEA-BC vs NE-BC: which ANCC executive credential fits your scope?",
      blurb: "The scope, eligibility, and career arc that separate ANCC's two nurse executive credentials — and when to step up from NE-BC to NEA-BC.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Comparison",
      tag: "CENP",
      title: "NEA-BC vs CENP: ANCC or AONL for the CNO track?",
      blurb: "How ANCC's ANA/Magnet framework and AONL's Nurse Executive Competencies diverge — and why dual certification is common at the CNO level.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "Portfolio",
      title: "Building a NEA-BC portfolio in year 1 (not year 5)",
      blurb: "Why portfolio-only renewal rewards executives who already publish, present, and serve — and how to stack evidence across the 8 ANCC categories.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
