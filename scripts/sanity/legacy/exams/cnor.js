// CNOR exam detail page — structured data.
// Sourced from Content/CNOR Certification.docx (verified against CCI, AORN,
// and CDC primary sources as of the 2026-04 cycle). Lives at
// /certifications/cnor/ via the paginated template.
//
// Note on two content gaps explicitly flagged in the Word doc:
//   1. CCI does not publish per-domain blueprint weights for 2026. Domains
//      are rendered with equal segments (weight: 1) and the prose calls this
//      out so readers do not mistake it for CCI's actual weighting.
//   2. CCI does not publish a CNOR pass rate on a routine schedule. The
//      single bar shows a midpoint estimate of 80% (the doc-cited
//      "high-70s to low-80s" range) with a footnote flagging the estimate.

module.exports = {
  code: "CNOR",
  name: "Certified Perioperative Nurse",
  body: "CCI",
  cat: "periop",
  catLabel: "Perioperative & Anesthesia",
  updated: "2026-04",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title: "CNOR Certification 2026: Complete Guide for OR Nurses | NursPrep",
    description:
      "Earn your CNOR certification in 2026. Eligibility, exam blueprint, prep resources, fees, and renewal — the complete guide for perioperative RNs.",
    ogTitle: "CNOR Certification 2026 — Certified Perioperative Nurse",
    ogDescription:
      "CCI eligibility, the 9-domain exam blueprint, ~$390 member fee, and a 12-week study plan for OR nurses.",
  },

  // ---- HERO
  lede:
    "CNOR is the gold-standard credential for perioperative nurses — awarded by the Competency & Credentialing Institute (CCI), which has certified OR nurses since 1979. The exam validates mastery of aseptic technique, sterile-field management, surgical counts, patient positioning, and intraoperative safety across the full surgical patient journey.",
  heroPills: [
    { k: "Questions", v: "200 items" },
    { k: "Duration", v: "3 hrs 45 min" },
    { k: "Renewal", v: "5 years" },
    { k: "Pass rate", v: "~80% (est.)" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "Competency & Credentialing Institute (CCI)" },
    { k: "Format", v: "PSI testing centres · live online proctoring available" },
    { k: "Scored items", v: "185 of 200 (15 unscored pretest)" },
    { k: "Scoring", v: "Scaled passing standard (CCI psychometric committee)" },
    { k: "Eligibility", v: "Active, unrestricted RN license" },
    { k: "Experience", v: "2 years + 2,400 perioperative hours (1,200 intraop)" },
    { k: "Fee (AORN member)", v: "~$390 · non-member ~$490" },
    { k: "Renewal cycle", v: "5 years — 125 CE hours or re-exam" },
  ],
  heroCardFoot:
    "Verified against 2026 CCI CNOR Candidate Handbook and AORN Guidelines for Perioperative Practice",

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
    { id: "compare", label: "CNOR vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "CNOR certification at a glance",
    prose: [
      "CNOR — Certified Perioperative Nurse — is the nursing-side benchmark for surgical services. The credential is issued by the <strong>Competency & Credentialing Institute (CCI)</strong>, a non-profit that has certified perioperative RNs since 1979. CCI operates independently from the Association of periOperative Registered Nurses (AORN), but the CNOR exam blueprint is built on AORN's evidence-based <em>Guidelines for Perioperative Practice</em>.",
      "CNOR is a specialty certification, not a course. The Joint Commission and the ANCC Magnet Recognition Program both weigh the percentage of certified perioperative nurses when evaluating surgical services — so a CNOR signals both individual competence and unit-level quality.",
    ],
    stats: [
      { n: "200", l: "Total items", sub: "185 scored · 15 pretest" },
      { n: "3 hr 45", l: "Time limit", sub: "Continuous computer-based testing" },
      { n: "~80%", l: "Pass rate (est.)", sub: "CCI does not publish a figure" },
      { n: "5 yrs", l: "Renewal cycle", sub: "125 CE hours or re-exam" },
    ],
    factBox: {
      tone: "info",
      title: "Why CNOR matters beyond your résumé",
      html:
        "Certified-nurse density is a <strong>Magnet Recognition</strong> and <strong>Pathway to Excellence</strong> metric. CCI and AORN have also published research linking higher certified-staff ratios with lower <strong>surgical site infection (SSI)</strong> rates — and the CDC identifies SSIs as among the most common and costly healthcare-associated infections in US hospitals.",
    },
    coverImageLabel:
      "Circulating RN monitoring the sterile field during a laparoscopic case",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the CNOR exam?",
    prose: [
      "Yes — if you hold an <strong>active, unrestricted RN license</strong> in the US, Canada, or a US territory; you have logged <strong>2 years and at least 2,400 hours of perioperative nursing</strong>; and you are <strong>currently employed</strong> in a perioperative role (full-time, part-time, or per diem).",
      "CCI accepts two experience pathways. The <strong>direct-care pathway</strong> requires 2,400 total perioperative hours with at least 1,200 (50%) in the intraoperative setting. The <strong>indirect-care pathway</strong> requires 2,400 total perioperative hours in a manager, educator, researcher, or CNS role, with 50% documented in perioperative practice.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You hold a current, unrestricted RN license.",
      "You have at least 2,400 perioperative hours logged in the past two years, with at least 1,200 intraoperative (direct-care pathway) or 50% documented perioperative practice (indirect-care pathway).",
      "You are currently employed in a perioperative role — inpatient OR, ambulatory surgery centre, endoscopy, PACU, or perioperative education / leadership.",
      "Your manager can verify your hours in writing if CCI audits your application.",
      "You are comfortable with the AORN <em>Guidelines for Perioperative Practice</em> as your primary evidence base — not just local policy.",
    ],
  },

  // ---- BLUEPRINT
  blueprint: {
    heading: "CNOR exam blueprint — nine domains",
    prose: [
      "The CNOR blueprint is organised around the <strong>perioperative patient journey</strong> — from preoperative assessment through intraoperative activities, transfer of care, instrument processing, and post-op outcomes. Nine domains in total.",
      "<strong>CCI does not publish per-domain weights for the 2026 cycle.</strong> The donut below shows the nine domains in equal segments for navigation only — allocate your actual study time against the current CCI 2026 Candidate Handbook once you have it in hand. The high-yield domains most candidates under-prepare are <strong>Instrument Processing</strong>, <strong>Emergency Situations</strong>, and <strong>Professional Accountability</strong> — content that is abstract at the bedside but appears reliably on the exam.",
    ],
    domains: [
      { label: "I. Preoperative Patient Assessment & Diagnosis", weight: 1 },
      { label: "II. Plan of Care & Intraoperative Activities", weight: 1 },
      { label: "III. Communication (SBAR, time-out, interprofessional)", weight: 1 },
      { label: "IV. Transfer of Care (PACU handover, equipment, report)", weight: 1 },
      { label: "V. Instrument Processing & Supply Management", weight: 1 },
      { label: "VI. Emergency Situations (MH, fire, anaphylaxis, arrest)", weight: 1 },
      { label: "VII. Management of Personnel, Services & Materials", weight: 1 },
      { label: "VIII. Professional Accountability (ethics, compliance)", weight: 1 },
      { label: "IX. Perioperative Patient Outcomes (SSI, pressure injury, normothermia)", weight: 1 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and employer benefits",
    prose: [
      "CCI delivers the CNOR through <strong>PSI testing centres</strong>, with <strong>live online proctoring</strong> available for eligible candidates who prefer to test from a private workstation. After CCI approves your application you will receive an Authorization to Test (ATT) email — typically within 10 business days — that opens a <strong>90-day testing window</strong>. Schedule your PSI seat immediately to avoid reapplying.",
    ],
    rows: [
      { k: "Initial exam — AORN member", v: "~$390" },
      { k: "Initial exam — non-member", v: "~$490", highlight: true },
      { k: "Retake (after 90-day wait)", v: "~$290" },
      { k: "Recertification by exam", v: "~$275" },
      { k: "Recertification by CE", v: "Per CCI schedule (verify current)" },
      { k: "AORN annual membership (reduces exam fee)", v: "Pays for itself on one attempt" },
    ],
    factBox: {
      tone: "success",
      title: "Three ways candidates cut the out-of-pocket cost",
      html:
        "<strong>Employer reimbursement:</strong> most hospitals reimburse 50–100% of the exam fee through continuing-education funds — ask your nurse manager or HR before paying. <strong>AORN chapter grants:</strong> local AORN chapters often award grants or scholarships to exam candidates. <strong>AORN membership discount:</strong> the ~$100 fee delta between member and non-member pricing typically covers an AORN membership by itself. Fees are approximate — verify current rates on CCInstitute.org before citing.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "CNOR renews on a <strong>5-year cycle</strong>. Two main pathways. <strong>Pathway 1 — Continuing Education:</strong> complete <strong>125 contact hours</strong> over the 5-year cycle across CCI's defined perioperative categories. The most common renewal rejection reason is logging generic nursing CE that does not meet CCI's perioperative-specific category rules — keep a simple spreadsheet with date, category, hours, and provider for each activity.",
      "<strong>Pathway 2 — Recertification by Exam:</strong> retake and pass the current CNOR exam. Best for candidates with gaps in CE documentation or who prefer a fresh blueprint review every cycle. CCI has also offered a <em>CNOR Advantage Track</em> that rewards leadership, education, and evidence-based-practice contributions — confirm current Advantage Track criteria directly with CCI before relying on it.",
    ],
  },

  // ---- PASS RATE (single midpoint estimate; CCI publishes no figure)
  passrate: {
    heading: "How hard is the CNOR exam?",
    prose: [
      "CCI does not publish a CNOR pass rate on a routine schedule. Historical CCI communications and third-party candidate summaries place the first-time pass rate <strong>in the high-70s to low-80s percent range</strong> — so the ~80% bar shown below is a midpoint estimate, not an official CCI figure.",
      "Whatever the current-cycle number, the pattern among passing candidates is consistent: <strong>10 to 14 weeks of structured study</strong> at 6 to 10 hours per week, at least 500 practice questions with every rationale reviewed, and one or two full-length timed practice tests before exam day. Candidates who rely on daily bedside practice alone tend to stumble on domains they do not touch every shift — instrument processing, emergency management, and professional accountability top that list.",
    ],
    rows: [{ year: "Recent cohorts", pct: 80 }],
    target: 85,
    footnote:
      "The 80% figure is a midpoint estimate of the 'high-70s to low-80s' range described in CCI's historical communications. CCI does not publish a routine CNOR pass rate — verify the current cycle's figure with CCI directly before relying on it for planning.",
    factBox: {
      tone: "info",
      title: "The single biggest pass-rate lever: timed, domain-mapped practice",
      html:
        "Spaced retrieval practice consistently outperforms passive re-reading. Work through at least <strong>500 practice questions</strong> before exam day, and after every set <strong>read every rationale</strong> — not only the ones you missed. That reinforces the items you got right <em>for the right reason</em> and exposes the ones you got right by luck.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 12-week CNOR study plan",
    prose: [
      "A structured 12-week plan is enough for most perioperative RNs with two or more years of experience — roughly <strong>72 to 120 total study hours</strong>. Weeks 1–2 cover the handbook and diagnostic. Weeks 3–9 rotate through the nine blueprint domains. Weeks 10–11 are full-length timed practice. Week 12 is targeted review and rest.",
    ],
    weeks: [
      { n: 1, focus: "Read CCI 2026 Candidate Handbook + baseline diagnostic", qs: 25 },
      { n: 2, focus: "Map weak domains; pick AORN study resources for each", qs: 25 },
      { n: 3, focus: "Domain I — Preoperative assessment & diagnosis", qs: 40 },
      { n: 4, focus: "Domain II — Plan of care & intraoperative activities (positioning, counts, specimens)", qs: 50 },
      { n: 5, focus: "Domain III–IV — Communication + Transfer of Care (SBAR, time-out, PACU handoff)", qs: 50 },
      { n: 6, focus: "Domain V — Instrument Processing & Supply Management (BI, IUSS, sterilization)", qs: 50 },
      { n: 7, focus: "Domain VI — Emergency Situations (MH, fire triangle, anaphylaxis, arrest)", qs: 50 },
      { n: 8, focus: "Domain VII–VIII — Management + Professional Accountability", qs: 50 },
      { n: 9, focus: "Domain IX — Perioperative Patient Outcomes (SSI, pressure injury, normothermia)", qs: 50 },
      { n: 10, focus: "Full-length timed practice exam #1 + error-log review", qs: 200 },
      { n: 11, focus: "Full-length timed practice exam #2 + targeted gap closure", qs: 200 },
      { n: 12, focus: "Review missed questions; rest; avoid night shifts; test day", qs: 40 },
    ],
    tipsHeading: "How CNOR candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Don't rely on daily bedside practice alone",
        text:
          "CNOR is a blueprint exam, not a shift checklist. Candidates who plan their study rarely underperform; those who rely on clinical reps alone stumble on Instrument Processing, Emergencies, and Professional Accountability — domains you don't touch every shift.",
      },
      {
        kicker: "Protect study time against OR shift fatigue",
        text:
          "Schedule short, focused sessions rather than marathon weekends. 6 to 10 hours per week for 10 to 14 weeks beats a cram — and stay off night shifts in the final week before your exam.",
      },
      {
        kicker: "Read every rationale, not just the misses",
        text:
          "Aim for at least 500 practice questions before exam day, and after every set read every rationale. That reinforces what you got right for the right reason, and exposes the ones you got right by luck.",
      },
      {
        kicker: "Use AORN Guidelines as your primary evidence base",
        text:
          "Local policy varies. AORN Guidelines for Perioperative Practice is the evidence base CCI writes items against — cross-check any memorized protocol against the current AORN guideline before trusting it.",
      },
      {
        kicker: "Log CE the way you'll need it for renewal",
        text:
          "Start a renewal spreadsheet the day you pass. Date, category, hours, provider. The most common renewal rejection is 'insufficient perioperative-specific CE' — a clean log from Day 1 prevents a scramble in Year 5.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (verbatim from Word doc Sample 3 — highest-level item)
  sample: {
    heading: "Sample CNOR question",
    prose: [
      "This item mirrors CCI's applied-analysis format: a short clinical stem and four plausible options where only one is <em>best</em>. Try it before you read the rationale.",
    ],
    q: {
      scenario:
        "During a laparoscopic case, the electrosurgical unit sparks near a pool of alcohol-based prep solution at the surgical site.",
      stem: "Which element of the fire safety triangle does the circulator control MOST directly?",
      options: [
        "Oxygen",
        "Fuel",
        "Heat source",
        "Smoke",
      ],
      correct: 1,
      rationale:
        "The alcohol-based prep solution is the fuel element of the fire safety triangle. Proper drying time and drape management remove fuel from the triangle, which is the circulator's primary preventive action. Oxygen is managed by anaesthesia; the heat source is the electrosurgical unit in the surgeon's hand; smoke is a downstream indicator, not a triangle element.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key CNOR terms every candidate should know",
    prose: [
      "These terms surface in most CNOR exam items. Review them until the definitions feel automatic — scenario-based stems often hinge on recognizing which framework (Universal Protocol, biological indicator, fire triangle) applies.",
    ],
    rows: [
      { term: "Aseptic technique", defn: "Practices that prevent contamination of the sterile field and sterile items during an invasive procedure.", domain: "Intraop" },
      { term: "Surgical count", defn: "Systematic count of instruments, sponges, and sharps performed before, during, and after a case to prevent retained surgical items (RSIs).", domain: "Intraop" },
      { term: "Time-out", defn: "Final verification step immediately before incision — confirms correct patient, procedure, site, and side; part of the Joint Commission Universal Protocol.", domain: "Communication" },
      { term: "SBAR", defn: "Situation, Background, Assessment, Recommendation — structured handoff framework used at PACU transfer and team communication.", domain: "Communication" },
      { term: "Biological indicator (BI)", defn: "Spore-based indicator used to verify the effectiveness of a sterilization cycle; instruments should not be used before a BI result is confirmed except in documented emergencies.", domain: "Instrument Processing" },
      { term: "Immediate-use steam sterilization (IUSS)", defn: "Rapid sterilization for critical items required immediately; reserved for true urgency — not a routine workflow.", domain: "Instrument Processing" },
      { term: "Fire safety triangle", defn: "Oxygen, fuel, and heat — the three elements that must be controlled to prevent surgical fires; the circulator most directly controls fuel through prep drying and drape management.", domain: "Emergencies" },
      { term: "Malignant hyperthermia (MH)", defn: "Life-threatening hypermetabolic reaction to volatile anaesthetics or succinylcholine; treated with IV dantrolene, cooling, and supportive care.", domain: "Emergencies" },
      { term: "Universal Protocol", defn: "Joint Commission protocol to prevent wrong-site, wrong-procedure, and wrong-person surgery — pre-procedure verification, site marking, and time-out.", domain: "Professional" },
      { term: "Surgical site infection (SSI)", defn: "Infection occurring at or near a surgical incision within 30 days (or 90 days for implants); driven by perioperative bundles — antibiotic timing, normothermia, glucose control, skin antisepsis.", domain: "Outcomes" },
      { term: "Normothermia", defn: "Maintenance of core body temperature (36.0–37.5 °C) perioperatively to reduce SSI, coagulopathy, and cardiac risk.", domain: "Outcomes" },
      { term: "Pressure injury", defn: "Localized skin and/or underlying tissue damage caused by sustained pressure — perioperative prevention centres on positioning and support surfaces.", domain: "Outcomes" },
      { term: "Reverse Trendelenburg", defn: "Patient positioning with the head elevated above the feet; used in laparoscopic cholecystectomy to improve gallbladder access and displace abdominal organs.", domain: "Intraop" },
      { term: "CFPN", defn: "Certified Foundational Perioperative Nurse — CCI credential for RNs who do not yet meet the CNOR experience bar.", domain: "Career" },
      { term: "CRNFA", defn: "Certified Registered Nurse First Assistant — CCI credential for first-assisting practice; requires CNOR plus completion of an accredited RNFA program.", domain: "Career" },
    ],
  },

  // ---- COMPARE (directly from Word doc comparison table)
  compare: {
    heading: "CNOR vs. CRNFA, CSSM, CNAMB",
    prose: [
      "CNOR is the foundation credential for perioperative nursing, but CCI offers several related certifications for different career stages. Match the credential to your current role.",
    ],
    rows: [
      { row: "CNOR", highlight: true, body: "CCI", scope: "Perioperative RN practice — inpatient or mixed OR", who: "OR staff RNs, charge nurses, perioperative educators" },
      { row: "CRNFA", body: "CCI", scope: "RN first-assisting — scrub in as surgical first assist", who: "RNs who already function as first assistants (CNOR + RNFA program required)" },
      { row: "CSSM", body: "CCI", scope: "Surgical services leadership — management and operations", who: "OR managers and directors (2 yrs perioperative leadership)" },
      { row: "CNAMB", body: "CCI", scope: "Ambulatory perioperative practice — ASC-specific", who: "RNs working exclusively in ambulatory surgery centres" },
      { row: "CFPN", body: "CCI", scope: "Foundational entry-level perioperative practice", who: "New OR RNs who do not yet meet CNOR hours" },
    ],
    closingProse:
      "<strong>Choose CNOR if your practice is inpatient or mixed OR.</strong> Choose <strong>CNAMB</strong> if you work exclusively in an ambulatory surgery centre. Move to <strong>CSSM</strong> once you take on a formal management role. Add <strong>CRNFA</strong> if you already function as a first assistant. Start with <strong>CFPN</strong> if you are new to the OR and do not yet meet CNOR's 2,400-hour bar — the natural ladder is CFPN → CNOR → CSSM or CRNFA.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about CNOR certification",
    items: [
      { q: "How hard is the CNOR exam?", a: "Rigorous but not designed to fail candidates who study the blueprint. Most passers report 10 to 14 weeks of focused preparation at 6 to 10 hours per week, with at least 500 practice questions completed before exam day." },
      { q: "What is the CNOR exam pass rate?", a: "CCI does not publish a public CNOR pass rate on a routine schedule. Historical CCI communications and third-party summaries suggest pass rates in the high-70s to low-80s percent range, though figures vary by cohort. Verify the current figure with CCI." },
      { q: "Can I take the CNOR without 2 years of OR experience?", a: "No — CNOR itself requires 2 years and 2,400 perioperative hours. CCI offers the CFPN (Certified Foundational Perioperative Nurse) credential for RNs who do not yet meet the full CNOR experience bar." },
      { q: "Do ambulatory surgery hours count toward CNOR eligibility?", a: "Yes. Ambulatory surgery, endoscopy, and PACU hours generally count as perioperative, provided the role includes intraoperative or direct perioperative responsibilities. Consult the 2026 CCI Candidate Handbook for edge-case specifics." },
      { q: "How long does CNOR certification last?", a: "Five years from the date you pass the exam. Renew by completing 125 perioperative-specific CE hours or by retaking the exam." },
      { q: "Can I take the CNOR exam online from home?", a: "Yes — live online proctoring is available through PSI for eligible candidates. You will need a quiet, private room and a compliant workstation; test your setup 24 hours in advance." },
      { q: "What happens if I fail the CNOR?", a: "You can retake the exam after a 90-day waiting period. Pay the retake fee (approximately $290) and schedule again through PSI. Use the score report to target your weakest domains rather than re-studying the whole blueprint." },
      { q: "Is the CNOR worth it financially?", a: "For most perioperative RNs, yes. Salary uplift, travel-rate premiums, and career mobility typically recover the cost within the first year. Many hospitals reimburse 50–100% of the exam fee through education funds." },
      { q: "Does the CNOR transfer internationally?", a: "CCI issues CNOR in the United States, Canada, and US territories. Recognition elsewhere varies by institution — check with the relevant national nursing body before relying on it abroad." },
      { q: "What is the difference between CNOR and CRNFA?", a: "CNOR validates general perioperative nursing practice. CRNFA validates first-assisting skills and requires both CNOR and completion of an accredited RNFA program." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following primary sources. Fees, blueprint weights, and recertification rules shift on CCI's revision cycle — always verify numeric facts against the current CCI handbook before relying on them for application decisions.",
    ],
    list: [
      "Competency & Credentialing Institute (CCI) — 2026 CNOR Candidate Handbook, eligibility, application, recertification",
      "CCI — Advantage Track criteria and Specialty Certifications (CRNFA, CSSM, CNAMB, CFPN)",
      "Association of periOperative Registered Nurses (AORN) — Guidelines for Perioperative Practice (current edition)",
      "AORN Journal and AORN member webinars — domain-specific perioperative evidence",
      "PSI Testing Services — test-centre and live-online-proctoring logistics",
      "CDC — Guideline for Prevention of Surgical Site Infection; HAI surveillance data",
      "The Joint Commission — Universal Protocol for Preventing Wrong-Site Surgery and Magnet-relevant standards",
      "ANCC Magnet Recognition Program — nurse-certification metrics",
      "ECRI Institute — perioperative safety briefs and hazard alerts",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice CNOR-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to CCI's nine-domain blueprint — heavy on intraoperative activities, instrument processing, and emergency situations. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full CNOR question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "CRNFA",
      title: "CNOR vs CRNFA: which CCI credential matches your scope?",
      blurb: "Blueprint, experience path, and career impact — for OR nurses deciding whether to add first-assisting to their practice.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "Instrument processing: the domain that quietly decides CNOR pass",
      blurb: "Why biological indicators, IUSS, and sterilization workflows are the content most candidates under-prepare — and how CCI tests them.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "Travel OR",
      title: "Landing a travel OR contract with CNOR on your badge",
      blurb: "How Magnet and ACS-verified facilities actually use CNOR status to triage travel applicants, and what agency recruiters look for beyond the credential.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
