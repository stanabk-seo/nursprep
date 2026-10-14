// NPD-BC exam detail page — structured data.
// Sourced from Content Briefs/NPD-BC_Content_Brief.md and verified against
// Content/NPD-BC_research.json (ANCC NPD-BC credential page, ANCC NPD-BC
// Test Content Outline effective 2026-02-26, ANCC Certification Renewal
// Handbook effective 2025-09-10, and 2024 ANCC Certification Data).
// Lives at /certifications/npd-bc/ via the paginated template.
//
// Note on internal data: src/_data/certs.js lists 175 questions for NPD-BC,
// but both ANCC primary sources (the credential page and the Test Content
// Outline PDF) state 150 items / 3 hours. This page uses 150 / 3 hours per
// ANCC; certs.js should be reconciled in a follow-up commit.

module.exports = {
  code: "NPD-BC",
  name: "Nursing Professional Development — Board Certified",
  body: "ANCC",
  cat: "leadership",
  catLabel: "Leadership & Informatics",
  updated: "2026-05",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title:
      "NPD-BC Certification Guide: Eligibility, Exam & Renewal | NursPrep",
    description:
      "Everything NPD practitioners need on the ANCC NPD-BC — eligibility, six-domain blueprint, $295 ANA-member fee, 76% pass rate, 5-year renewal, and a 10-week study plan.",
    ogTitle:
      "NPD-BC Certification Guide 2026 — Nursing Professional Development Board Certified",
    ogDescription:
      "ANCC eligibility (BSN + 2,000 NPD hours + 30 NPD CE hours), the six-domain blueprint, $295/$395 fees, 76% pass rate, and a 10-week study plan.",
  },

  // ---- HERO
  lede:
    "NPD-BC — Nursing Professional Development — Board Certified — is the ANCC specialty credential for registered nurses who design, deliver, and evaluate staff education inside healthcare organizations. If your day is orientation design, competency validation, simulation, transition-to-practice, or in-service teaching, NPD-BC is the credential that formalizes the NPD specialty role.",
  heroPills: [
    { k: "Questions", v: "150 items" },
    { k: "Duration", v: "3 hours" },
    { k: "Renewal", v: "5 years" },
    { k: "Pass rate", v: "76%" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "American Nurses Credentialing Center (ANCC)" },
    { k: "Format", v: "Prometric testing centers (computer-based)" },
    { k: "Scored items", v: "125 of 150 (25 unscored pretest)" },
    { k: "Passing score", v: "Scaled 350 on a 0–500 scale" },
    { k: "Eligibility", v: "Active RN license + bachelor's or higher in nursing" },
    { k: "Practice hours", v: "2,000 NPD practice hours in last 3 yrs" },
    { k: "CE requirement", v: "30 hrs NPD continuing education in last 3 yrs" },
    { k: "Fee", v: "$295 ANA member · $395 non-member" },
  ],
  heroCardFoot:
    "Verified against the ANCC NPD-BC credential page, the ANCC NPD-BC Test Content Outline effective 2025-02-26, and the ANCC Certification Renewal Handbook effective 2025-09-10",

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
    { id: "compare", label: "NPD-BC vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "NPD-BC certification at a glance",
    prose: [
      "NPD-BC — Nursing Professional Development — Board Certified — is ANCC's specialty board certification for registered nurses who lead the design, delivery, and evaluation of staff education inside healthcare organizations. The credential is issued by the <strong>American Nurses Credentialing Center (ANCC)</strong>, the credentialing arm of the American Nurses Association (ANA), and is reported on the 2024 ANCC certification-data release as being held by <strong>6,574 active credential holders</strong>.",
      "NPD-BC is a board certification, not a course. It is frequently confused with NPDA-BC — the <em>advanced</em> NPD credential issued by the Competency & Credentialing Institute (CCI) — and with the legacy ANCC RN-BC (in NPD) label that NPD-BC replaced. Each is a distinct credential; see the comparison section below before deciding which one applies to your role.",
    ],
    stats: [
      { n: "150", l: "Total items", sub: "125 scored · 25 pretest" },
      { n: "3 hrs", l: "Time limit", sub: "Continuous, one form" },
      { n: "76%", l: "Reported pass rate", sub: "2024 ANCC certification data" },
      { n: "5 yrs", l: "Renewal cycle", sub: "75 NPD CE hours + 1 PD category, or re-exam" },
    ],
    factBox: {
      tone: "info",
      title: "NPD-BC vs NPDA-BC at a glance",
      html:
        "Different credentials, different issuing bodies. <strong>NPD-BC</strong> is ANCC's specialty board certification for the NPD practitioner — staff-development educators, clinical educators, NPD specialists. <strong>NPDA-BC</strong> is the <em>advanced</em> NPD credential issued by the Competency & Credentialing Institute (CCI), targeting NPD practitioners with deeper leadership scope. Most candidates starting in the specialty sit NPD-BC first.",
    },
    coverImageLabel:
      "Nursing professional development specialist running a simulation debrief with new-graduate RNs",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the NPD-BC exam?",
    prose: [
      "You are eligible if you hold an <strong>active, unencumbered RN license</strong> in the United States (or a legally recognized equivalent in another country) AND meet ANCC's education, practice, and continuing-education gates. Unlike credentials where hours are recommended but not enforced, ANCC enforces these gates as hard rules — applicants who fall short must accumulate the hours before applying.",
      "The five eligibility rules are: (1) active RN license, (2) bachelor's or higher degree in nursing, (3) the equivalent of <strong>2 years of full-time RN practice</strong>, (4) <strong>2,000 hours of clinical practice in nursing professional development within the last 3 years</strong>, and (5) <strong>30 hours of continuing education in nursing professional development within the last 3 years</strong>.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You currently work as a staff-development educator, clinical educator, nursing professional development specialist, simulation educator, transition-to-practice coordinator, orientation coordinator, or NPD program manager.",
      "Your last three years of timesheets show at least 2,000 hours in NPD practice — designing, delivering, and evaluating education for nursing or interprofessional staff — not pure bedside hours.",
      "You hold a BSN or higher (MSN, DNP, PhD in nursing all qualify); ANCC will not accept a non-nursing bachelor's degree.",
      "Your CE transcript has at least 30 contact hours in nursing professional development within the last 3 years — clinical-topic CE does not count toward this gate. ANPD-hosted CE is an obvious source.",
    ],
  },

  // ---- BLUEPRINT (exact weights from ANCC NPD-BC Test Content Outline effective 2025-02-26)
  blueprint: {
    heading: "NPD-BC exam blueprint — six content domains",
    prose: [
      "The NPD-BC exam covers six content domains with the percentage weights below, taken directly from the ANCC NPD-BC Test Content Outline effective <strong>2025-02-26</strong>. The total scored items (125) plus 25 unscored pretest items make up the 150-item exam.",
      "<strong>Leadership</strong> and <strong>Educational Process Standards</strong> together carry <strong>53% of the scored items</strong> — over half the exam. Most failing candidates underprepare for the theoretical-models content (adult learning principles, novice-to-expert, transition-to-practice) and the leadership content (change management, healthy-work-environment, DEI advocacy) and over-rely on day-to-day teaching experience. Block dedicated weeks for both.",
    ],
    domains: [
      { label: "Educational Process Standards", weight: 26 },
      { label: "Leadership", weight: 27 },
      { label: "Ethical, Legal, and Regulatory Standards", weight: 15 },
      { label: "Evidence-based Practice and Research", weight: 6 },
      { label: "Technology", weight: 15 },
      { label: "Program/Project Management and Process Improvement", weight: 11 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and ANA-member savings",
    prose: [
      "ANCC delivers NPD-BC at Prometric testing centers. Once your application is approved, you receive an Authorization to Test (ATT) with a <strong>120-day scheduling window</strong> — book your Prometric seat early in that window to avoid reapplying. ANCC's initial-application price includes a <strong>$140 non-refundable administrative fee</strong>.",
    ],
    rows: [
      { k: "Initial application — ANA member", v: "$295" },
      { k: "Initial application — non-member", v: "$395", highlight: true },
      { k: "Retake (after 60-day wait; max 3 attempts in 12 months)", v: "$270" },
      { k: "Renewal — ANA member", v: "$250" },
      { k: "Renewal — non-member", v: "$350" },
      { k: "ANA annual membership (reduces exam and renewal fees)", v: "~$15/month" },
    ],
    factBox: {
      tone: "success",
      title: "ANA membership usually pays for itself",
      html:
        "The fee delta between ANA member and non-member is <strong>$100 on the initial exam and $100 on each renewal</strong>. An ANA annual membership typically costs less than that delta — so joining ANA before applying usually reduces total cost across the 5-year cycle. Many health systems with Magnet or Pathway-to-Excellence designation reimburse the certification fee through a clinical-ladder, NPD-team, or education-budget benefit. Ask your NPD director or HR before paying personally.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "NPD-BC certification is valid for <strong>5 years</strong>. ANCC offers two renewal pathways under the Certification Renewal Handbook effective 2025-09-10. <strong>Pathway 1 — Continuing Education:</strong> complete <strong>75 contact hours of continuing education in nursing professional development</strong> within the 5-year cycle AND complete one additional professional development category (academic credits, presentations, publications, preceptorship, professional service, or an evidence-based practice or research project).",
      "<strong>Pathway 2 — Recertification by Examination:</strong> retake and pass the current NPD-BC exam at the renewal fee. There is no extended grace period for a lapsed NPD-BC — lapsed candidates must follow ANCC's reinstatement process to regain the credential. Existing <strong>RN-BC (in NPD)</strong> holders renew under the NPD-BC label at their next renewal; the pathway is the same, the credential name changes on certificates issued from that cycle forward.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the NPD-BC exam?",
    prose: [
      "The 2024 ANCC certification-data release reports a <strong>76% pass rate</strong> on the NPD-BC exam, with <strong>1,316 examinees, 1,006 passes, and 6,574 active NPD-BC credential holders</strong>. Three-in-four first-time candidates pass — but the failing quarter rarely fails on classroom-delivery skill. They fail on the theory frameworks and the leadership domain.",
      "The most common failure pattern: NPD practitioners over-rely on day-to-day teaching experience and underprepare for the Leadership domain (27% — the largest single block) and the Educational Process Standards domain (26%), where the exam tests teaching/learning theories (behaviorism, cognitivism, social constructivism, adult-learning principles, educational neuroscience), professional-development models (novice-to-expert, transition-to-practice, performance-based competencies), and NPD Scope and Standards content that many candidates last reviewed in graduate coursework.",
    ],
    rows: [{ year: "2024", pct: 76 }],
    target: 85,
    footnote:
      "Pass-rate figures per 2024 ANCC certification data (1,316 examinees / 1,006 passes). 6,574 active credential holders reported in the same release.",
    factBox: {
      tone: "info",
      title: "The lever is theory and leadership, not classroom skill",
      html:
        "In the ANCC NPD-BC Test Content Outline, <strong>Educational Process Standards</strong> and <strong>Leadership</strong> together carry <strong>53% of the scored items</strong> — over half the exam. Most NPD practitioners can teach a competency without a textbook, but fewer can name Knowles's andragogy assumptions, Lewin's change model, or the AACN healthy-work-environment standards on demand. That's where score gaps appear. Block at least two full study weeks for theory frameworks and leadership content.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 10-week NPD-BC study plan",
    prose: [
      "A structured 10-week study plan covers the six-domain blueprint for most working NPD practitioners — roughly <strong>80 to 120 total study hours</strong>. Practice-question volume ramps through weeks 2–8 and peaks in week 9 with a full-length 150-item timed exam; week 10 is for targeted review, logistics, and a rest day.",
    ],
    weeks: [
      { n: 1, focus: "Read ANCC NPD-BC Test Content Outline (effective 2025-02-26) + baseline diagnostic", qs: 25 },
      { n: 2, focus: "Educational Process Standards I — NPD Scope and Standards, adult learning theory (andragogy)", qs: 60 },
      { n: 3, focus: "Educational Process Standards II — ADDIE design, types of educational activities, competency management", qs: 60 },
      { n: 4, focus: "Leadership I — change management (Lewin, Kotter), healthy work environment, DEI advocacy", qs: 60 },
      { n: 5, focus: "Leadership II — communication, conflict resolution, mentoring, professional standards and credentialing", qs: 60 },
      { n: 6, focus: "Ethical/Legal/Regulatory — ANA Scope & Standards, Code of Ethics, risk management (RCA, FMEA, just culture), HIPAA, copyright", qs: 60 },
      { n: 7, focus: "Evidence-based Practice + Technology — EBP models, LMS, simulation pedagogy, clinical technologies", qs: 60 },
      { n: 8, focus: "Program/Project Management — PDSA, DMAIC, organizational performance indicators, sustainment strategies", qs: 60 },
      { n: 9, focus: "Full-length timed practice exam (150 items in 3 hours) + error-log review", qs: 150 },
      { n: 10, focus: "Targeted review of weak domains, rest, test day", qs: 40 },
    ],
    tipsHeading: "How NPD-BC candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Don't over-index on classroom delivery",
        text:
          "Most NPD practitioners can teach a competency without a textbook. The exam tests the theory underneath — andragogy assumptions, Benner's novice-to-expert, transition-to-practice frameworks, ADDIE phases — and the leadership content above it (change management, healthy work environment, DEI advocacy). That's where the 24% who fail lose points.",
      },
      {
        kicker: "Pace 150 items across 3 hours",
        text:
          "Pacing is a trained skill. Take at least one full-length timed practice exam under real conditions before test day — fatigue in the last 30–40 items is where unprepared candidates lose the most points. Average: 72 seconds per item.",
      },
      {
        kicker: "Memorize the standards alphabet",
        text:
          "NPD Scope and Standards of Practice (ANA / ANPD), ANA Code of Ethics, TJC, Magnet, ANCC NCPD, AACN healthy-work-environment standards. Build a one-page reference of each acronym and its purpose — Ethical/Legal/Regulatory items hinge on recognizing which standard or framework applies.",
      },
      {
        kicker: "Know the EBP models even though the domain is small",
        text:
          "Evidence-based Practice and Research is only 6% — but that's still 7 scored items, and the models (Iowa, JHN, Stetler, ARCC) are easy to confuse under time pressure. A one-hour review of model purpose, phases, and use cases pays for itself.",
      },
      {
        kicker: "Practice simulation and learning-technology pedagogy",
        text:
          "Technology (15%) is heavier than most candidates expect because it includes simulation pedagogy, debriefing models (PEARLS, debriefing-with-good-judgment), gaming, virtual reality, and LMS administration — not just smart pumps and EHRs. Block at least one full week.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (constructed to mirror ANCC scenario style; not a real item)
  sample: {
    heading: "Sample NPD-BC question",
    prose: [
      "This item mirrors ANCC's scenario format: a short education-design stem, an operational problem, and four plausibly-correct options where only one is <em>best</em>. Try it before you read the rationale.",
    ],
    q: {
      scenario:
        "A nursing professional development specialist reviews 90-day evaluations for a cohort of new-graduate RNs completing orientation on a 28-bed cardiac stepdown unit. Preceptors report that new RNs can recite the chest-pain pathway during didactic but consistently miss the trigger for escalation when caring for actual patients. Vital-signs documentation, EHR navigation, and bedside skills are all on target.",
      stem: "Which education-design action should the NPD specialist prioritize first?",
      options: [
        "Email the cohort a one-page reminder of the chest-pain pathway and re-share the policy.",
        "Add a high-fidelity simulation with a deteriorating chest-pain patient and a structured debrief.",
        "Extend orientation by two weeks and re-deliver the didactic chest-pain module.",
        "Audit each new RN's chart documentation daily for the next 30 days.",
      ],
      correct: 1,
      rationale:
        "The gap is between knowledge and application — recognized theory-of-practice transfer failure. A high-fidelity simulation with a structured debrief moves learners from declarative knowledge (the pathway exists) to procedural and conditional knowledge (when to escalate). One-page reminders rarely change practice. Re-delivering didactic that learners already passed will not address the transfer gap. Daily chart audits address symptoms, not the underlying learning need, and burn NPD bandwidth.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key NPD-BC terms every candidate should know",
    prose: [
      "These terms surface across the six NPD-BC domains. Review them until the definitions feel automatic — scenario-based stems often hinge on recognizing which framework (ADDIE, Benner, PDSA, just culture) applies to the education or quality problem in the stem.",
    ],
    rows: [
      { term: "Andragogy", defn: "Malcolm Knowles's framework for adult learning — adults learn best when material is relevant, problem-centered, self-directed, and respects prior experience.", domain: "Ed Process" },
      { term: "ADDIE", defn: "Analyze, Design, Develop, Implement, Evaluate — the canonical five-phase instructional-design model for building educational activities.", domain: "Ed Process" },
      { term: "Novice-to-expert (Benner)", defn: "Patricia Benner's five-stage model of clinical skill acquisition: novice, advanced beginner, competent, proficient, expert. The backbone of transition-to-practice programs.", domain: "Ed Process" },
      { term: "Competency management", defn: "The structured process of defining, validating, and documenting role-based competencies — initial competency at hire and ongoing competency through the practice cycle.", domain: "Ed Process" },
      { term: "Change management (Lewin / Kotter)", defn: "Lewin's three-stage unfreeze–change–refreeze model and Kotter's 8-step model — the two leadership frameworks for moving teams and organizations through planned change.", domain: "Leadership" },
      { term: "Healthy work environment (HWE)", defn: "AACN's six-standard framework — skilled communication, true collaboration, effective decision-making, appropriate staffing, meaningful recognition, and authentic leadership.", domain: "Leadership" },
      { term: "Just culture", defn: "A workplace framework that distinguishes human error, at-risk behavior, and reckless behavior — guiding consistent, fair responses to clinical incidents.", domain: "Ethical/Legal" },
      { term: "NCPD", defn: "Nursing Continuing Professional Development — ANCC's accreditation framework for organizations providing continuing-education contact hours.", domain: "Ed Process" },
      { term: "Iowa Model / JHN / Stetler", defn: "The three most-tested evidence-based-practice translation models — used to move research findings into bedside practice.", domain: "EBP/Research" },
      { term: "PDSA / DMAIC", defn: "Plan-Do-Study-Act (rapid-cycle improvement) and Define-Measure-Analyze-Improve-Control (Six Sigma) — the two most-tested process-improvement methodologies.", domain: "Program Mgmt" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "NPD-BC vs. NPDA-BC, legacy RN-BC, and CNE",
    prose: [
      "NPD-BC sits alongside three other credentials NPD practitioners sometimes consider. Many candidates Google \"NPD-BC\" when they actually mean the CCI-issued NPDA-BC, or they wonder what to do with a legacy RN-BC. The distinctions matter before you spend time or money.",
    ],
    rows: [
      { row: "NPD-BC", highlight: true, body: "ANCC", scope: "Specialty board certification for the NPD practitioner — staff education in healthcare organizations", who: "Staff-development educators, clinical educators, NPD specialists (BSN+)" },
      { row: "NPDA-BC", body: "CCI", scope: "Advanced NPD credential, separate eligibility track and issuing body", who: "Advanced NPD practitioners with deeper leadership scope" },
      { row: "RN-BC (legacy, NPD)", body: "ANCC", scope: "Same ANCC specialty content as NPD-BC under the prior credential label", who: "Existing holders certified before the NPD-BC rebrand — renew into NPD-BC" },
      { row: "CNE", body: "NLN", scope: "Academic educator credential — pre-licensure and graduate nursing faculty", who: "Nursing faculty teaching in colleges and universities, not staff education" },
    ],
    closingProse:
      "<strong>Take NPD-BC if you currently lead the design, delivery, and evaluation of staff education in a healthcare organization.</strong> Move toward NPDA-BC if your scope grows into advanced NPD leadership and your employer recognizes the CCI credential family. Choose CNE if you teach pre-licensure or graduate students in academia. If you already hold the legacy RN-BC in NPD, your next renewal converts you to NPD-BC under the same ANCC content.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about NPD-BC certification",
    items: [
      { q: "What does NPD-BC stand for in nursing?", a: "NPD-BC stands for Nursing Professional Development — Board Certified. The credential is issued by the American Nurses Credentialing Center (ANCC) and recognizes registered nurses who design, deliver, and evaluate staff education inside healthcare organizations." },
      { q: "Is NPD-BC the same as NPDA-BC?", a: "No. NPD-BC is ANCC's specialty board certification for the NPD practitioner. NPDA-BC is the advanced NPD credential issued by the Competency & Credentialing Institute (CCI) — a different issuing body, a different eligibility track, and an advanced scope." },
      { q: "How many hours of NPD practice do I need to sit the NPD-BC exam?", a: "You need 2,000 hours of clinical practice in nursing professional development within the last 3 years, plus 30 hours of continuing education in nursing professional development in the same window, plus an active RN license and a bachelor's or higher degree in nursing." },
      { q: "How much does the NPD-BC exam cost?", a: "The initial NPD-BC application fee is $295 for ANA members and $395 for non-members. The price includes a $140 non-refundable administrative fee. A retake after a failed attempt costs $270, and you must wait at least 60 days before retesting." },
      { q: "How hard is the NPD-BC exam?", a: "The 2024 ANCC certification-data release reports a 76% pass rate — three in four first-time candidates pass. Most candidates lose points in the Leadership and Educational Process Standards domains, where the exam tests theoretical models (andragogy, novice-to-expert, change management) that working NPDs may not have revisited since graduate coursework." },
      { q: "How long is the NPD-BC exam?", a: "The NPD-BC exam has 150 multiple-choice items (125 scored plus 25 unscored pretest) delivered over a 3-hour time limit at Prometric testing centers." },
      { q: "What's the passing score for NPD-BC?", a: "ANCC reports NPD-BC results as a scaled score on a 0–500 scale, with 350 as the passing standard." },
      { q: "Does NPD-BC certification expire?", a: "Yes. NPD-BC is valid for 5 years. You renew by completing 75 contact hours of continuing education in nursing professional development plus one additional professional development category, or by retaking the current NPD-BC exam at the renewal fee." },
      { q: "I hold RN-BC in NPD — do I need to retest as NPD-BC?", a: "No. Existing RN-BC (in NPD) holders renew under the new NPD-BC label at their next renewal cycle. The exam content and renewal pathway are the same; the credential name on certificates updates from that cycle forward." },
      { q: "Will my hospital pay for NPD-BC certification?", a: "Many Magnet and Pathway-to-Excellence health systems reimburse certification fees through a clinical-ladder, NPD-team, or education-budget benefit. Ask your NPD director or HR before paying out of pocket." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following primary and secondary sources. ANCC revises fees, blueprint weights, and renewal rules on its own cycle — always verify numeric facts against the current ANCC handbook before relying on them for application decisions.",
    ],
    list: [
      "American Nurses Credentialing Center (ANCC) — Nursing Professional Development Certification (NPD-BC) credential page: nursingworld.org/our-certifications/nursing-professional-development/",
      "ANCC NPD-BC Test Content Outline, effective 2025-02-26 (six domains, 125 scored items, exact percentage weights)",
      "ANCC Certification Renewal Handbook, effective 2025-09-10 (renewal requirements, CE rules, and reinstatement)",
      "2024 ANCC Certification Data — NPD-BC pass rate, examinee counts, and active credential holders",
      "American Nurses Association (ANA) — membership tiers and fee structures used to compute the ANA-member exam fee",
      "Association for Nursing Professional Development (ANPD) — certification-preparation resources and NPD specialty CE",
      "Competency & Credentialing Institute (CCI) — NPDA-BC credential page (disambiguation source for the advanced NPD credential)",
      "boardcerts.com — NPD-BC exam summary (corroborating source for exam format)",
      "nursingexams.org — ANCC exam costs and retake policy (corroborating source for fees and 60-day retake wait)",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice NPD-BC-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to the six NPD-BC content domains. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full NPD-BC question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "NE-BC",
      title: "NPD-BC vs NE-BC: when NPD practitioners need the nurse-executive credential",
      blurb: "What changes when an NPD specialist takes on operational leadership of a unit or department — and why NE-BC, not NPD-BC, fits that scope.",
      href: "/certifications/ne-bc/",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Leadership domain",
      title: "The NPD-BC Leadership domain: the 27% most candidates underprepare for",
      blurb: "Why Leadership is the single biggest predictor of first-time pass, and the 10 frameworks (Lewin, Kotter, AACN HWE, DEI) to study before exam day.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "Magnet",
      title: "How Magnet hospitals use NPD-BC on the clinical-ladder",
      blurb: "What ANCC-recognized Magnet and Pathway-to-Excellence employers actually do with NPD-BC on the clinical ladder, in promotion decisions, and in reimbursement.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
