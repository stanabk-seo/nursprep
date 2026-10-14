// NCSN exam detail page — structured data.
// Sourced from Content/NCSN_research.json and Content Briefs/NCSN_Content_Brief.md
// (verified against NBCSN primary sources as of 2026-05-20).
// Lives at /certifications/ncsn/ via the paginated template.

module.exports = {
  code: "NCSN",
  name: "Nationally Certified School Nurse",
  body: "NBCSN",
  cat: "pediatric",
  catLabel: "Pediatric & School Health",
  updated: "2026-05",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title:
      "NCSN Certification Guide: Eligibility, Exam & Renewal | NursPrep",
    description:
      "Everything K-12 school nurses need on NCSN certification — NBCSN eligibility, four-domain blueprint, $370 fee, 70.6% pass rate, and 5-year renewal.",
    ogTitle:
      "NCSN Certification Guide 2026 — Nationally Certified School Nurse",
    ogDescription:
      "NBCSN eligibility, the Summer 2025 four-domain blueprint, $370 fee, 70.6% pass rate, and a 10-week study plan for school RNs.",
  },

  // ---- HERO
  lede:
    "NCSN is the national board credential for K-12 school nursing in the United States. It validates a working RN's knowledge of school health appraisal, health promotion, school health practice, and the leadership skills the role demands across elementary, middle, and high school settings.",
  heroPills: [
    { k: "Questions", v: "250 items" },
    { k: "Duration", v: "~4 hours" },
    { k: "Renewal", v: "5 years" },
    { k: "Pass rate", v: "70.6%" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "National Board for Certification of School Nurses (NBCSN)" },
    { k: "Format", v: "PSI test centers + live online proctoring" },
    { k: "Question count", v: "250 multiple-choice items" },
    { k: "Passing score", v: "Scaled 620 on a 200-800 scale" },
    { k: "Eligibility", v: "Active RN license + baccalaureate degree" },
    { k: "Experience", v: "1,000 school-nursing hours in past 3 years" },
    { k: "Fee (Early Bird)", v: "$370 · Regular $390 · Late +$50" },
    { k: "Renewal cycle", v: "5 years — 75 CEUs + practice hours or re-exam" },
  ],
  heroCardFoot:
    "Verified against NBCSN Summer 2025 Exam Content Outline and 2024 NCSN Certification Handbook",

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
    { id: "compare", label: "NCSN vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "NCSN certification at a glance",
    prose: [
      "NCSN — Nationally Certified School Nurse — is the voluntary national board credential for K-12 school nurses in the United States. The credential is issued by the <strong>National Board for Certification of School Nurses (NBCSN)</strong>, an independent credentialing body that is separate from the National Association of School Nurses (NASN).",
      "NCSN is a board certification, not a course, and it is separate from any state-level school-nurse certification or teaching endorsement. State certification is a licensure-style permission to practice as a school nurse in that state; NCSN is the portable national credential that validates school-nursing knowledge regardless of which state employs you.",
    ],
    stats: [
      { n: "250", l: "Total items", sub: "Multiple-choice, scenario-based" },
      { n: "~4 hrs", l: "Time limit", sub: "Computer-based at PSI" },
      { n: "70.6%", l: "2023 pass rate", sub: "847 of 1,199 candidates" },
      { n: "5 yrs", l: "Renewal cycle", sub: "75 CEUs + practice hours or re-exam" },
    ],
    factBox: {
      tone: "info",
      title: "What changed in Summer 2025",
      html:
        "NBCSN restructured the NCSN Exam Content Outline from <strong>five domains to four domains</strong>, effective with the <strong>Summer 2025 (July-August 2025)</strong> administration. The first three domains - Health Appraisal & Nursing Practice (52 items), Health Promotion / Disease Prevention (41 items), and School Health Practice Considerations (32 items) - have published item counts; the fourth domain's verbatim label and item count should be confirmed against the current NBCSN Candidate Handbook.",
    },
    coverImageLabel:
      "School nurse performing a hearing screening in a K-12 health office",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the NCSN exam?",
    prose: [
      "Yes — if you hold an <strong>active, unrestricted RN license</strong> in the United States, hold a <strong>baccalaureate or higher degree</strong>, and have logged <strong>at least 1,000 hours of clinical practice in school nursing within the past three years</strong>.",
      "NBCSN counts both direct clinical care and indirect contributions to student health and education toward the 1,000-hour rule, so school district coordinator and health-services administrator hours generally qualify.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You are a working K-12 school RN with at least one to two full school years of practice already documented.",
      "You hold a BSN, or a non-nursing baccalaureate or graduate degree alongside an active RN license.",
      "You routinely manage school health screenings, IHPs, 504 plans, emergency care plans, and medication administration in the school setting.",
      "Your role fits a recognized school-nursing context: public school district, charter or magnet school, independent or boarding school, school-based health center, lead nurse role, or district health-services coordinator.",
    ],
  },

  // ---- BLUEPRINT (Summer 2025 four-domain ECO; item counts where published)
  blueprint: {
    heading: "NCSN exam blueprint — four domains (effective Summer 2025)",
    prose: [
      "The Summer 2025 NCSN Exam Content Outline moved from five domains to four. <strong>Health Appraisal & Nursing Practice</strong> carries the largest published weight (52 items), followed by <strong>Health Promotion / Disease Prevention</strong> (41 items) and <strong>School Health Practice Considerations</strong> (32 items). The fourth domain covers leadership, professionalism, and systems-level practice; confirm its exact label and item count against the current NBCSN Candidate Handbook before relying on it for study allocation.",
      "Candidates who treat NCSN as a clinical-screening exam tend to underprepare for the school-health-practice and leadership content — FERPA and HIPAA in the school setting, delegation to UAPs, mandated reporting, and district-level program work appear reliably.",
    ],
    domains: [
      { label: "Health Appraisal & Nursing Practice", weight: 52 },
      { label: "Health Promotion / Disease Prevention", weight: 41 },
      { label: "School Health Practice Considerations", weight: 32 },
      { label: "Leadership, Professionalism & Systems (confirm count in current handbook)", weight: 25 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and application windows",
    prose: [
      "NBCSN delivers NCSN through <strong>PSI</strong> test centers across the United States and also offers <strong>live online proctoring</strong> for candidates who prefer to test from a private location. Apply during a published NBCSN application window; the Early Bird fee runs from the time the window opens until two weeks before the deadline, when the fee rises to the Regular rate.",
    ],
    rows: [
      { k: "Initial application — Early Bird", v: "$370" },
      { k: "Initial application — Regular", v: "$390", highlight: true },
      { k: "Late application fee", v: "+$50 on top of Regular" },
      { k: "Recertification application fee", v: "$255" },
      { k: "Re-exam (recertification by exam)", v: "Current initial fee" },
    ],
    factBox: {
      tone: "success",
      title: "Apply during Early Bird and skip the late fee",
      html:
        "Applying during the <strong>Early Bird window saves $20</strong> versus the Regular rate, and avoiding the deadline saves another <strong>$50 late fee</strong>. Many school districts reimburse the NCSN fee through a certification or professional-development benefit — ask your district HR or health-services coordinator before paying out of pocket.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "NCSN certification is valid for <strong>5 years</strong>. NBCSN offers two recertification pathways. <strong>Pathway 1 — Continuing Education:</strong> accumulate <strong>at least 75 contact hours</strong> of continuing education during the 5-year cycle AND document <strong>at least 2,000 hours of school nursing clinical practice</strong> during the cycle, with <strong>at least 750 of those hours within the most recent 3 years</strong>. Submit the recertification application with the <strong>$255 fee</strong>.",
      "<strong>Pathway 2 — Recertification by Examination:</strong> retake and pass the current NCSN exam at the standard initial-application fee. Candidates whose NCSN lapses generally must sit the current exam again to reinstate the credential — confirm the current reinstatement policy in the NCSN Recertification Handbook before relying on it for planning.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the NCSN exam?",
    prose: [
      "NBCSN publishes year-by-year pass-rate data on its Statistics page. In <strong>2023</strong>, NBCSN administered <strong>1,199</strong> NCSN examinations and <strong>847 candidates passed</strong> — a <strong>70.6%</strong> pass rate. Across recent years, annual pass rates have ranged from roughly <strong>50% to 83.6%</strong>, so a single year's number can swing meaningfully.",
      "Passing the NCSN exam requires a <strong>scaled score of 620</strong> on a 200-800 scale. Scoring is criterion-referenced and item-weighted, so simply counting correct answers does not map directly to the scaled score. Candidates who follow a structured study plan and complete at least one full-length timed practice exam pass at meaningfully higher rates than those relying on classroom experience alone.",
    ],
    rows: [{ year: "2023", pct: 70.6 }],
    target: 80,
    footnote:
      "Only the most recent NBCSN-published year (2023) is shown. NBCSN reports annual pass rates have ranged from approximately 50% to 83.6% across recent years; consult the NBCSN Statistics page for the latest data before relying on a single figure.",
    factBox: {
      tone: "info",
      title: "The lever is timed practice plus school-practice content",
      html:
        "School RNs who fail NCSN most often lose points in <strong>School Health Practice Considerations</strong> and leadership/systems content — FERPA, HIPAA in school settings, delegation to UAPs, and mandated reporting. A full-length timed practice exam plus targeted review of these areas is a higher-leverage intervention than another pass through screening protocols.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 10-week NCSN study plan",
    prose: [
      "A structured 10-week study plan is enough for most school RNs with one or more full school years of practice — roughly <strong>80 to 120 total study hours</strong> across the four blueprint domains. Practice-question volume ramps through weeks 2-8 and peaks in week 9 with a full-length timed exam; week 10 is for targeted review, logistics, and a rest day.",
    ],
    weeks: [
      { n: 1, focus: "Read NBCSN Summer 2025 Exam Content Outline + baseline diagnostic", qs: 25 },
      { n: 2, focus: "Health appraisal — vision, hearing, scoliosis, growth/BMI, vital signs", qs: 60 },
      { n: 3, focus: "Nursing practice — IHPs, 504/IEP integration, emergency care plans", qs: 60 },
      { n: 4, focus: "Health promotion — immunization schedules and exemptions, mental health", qs: 60 },
      { n: 5, focus: "Disease prevention — communicable disease in classrooms, screening follow-up", qs: 60 },
      { n: 6, focus: "School health practice — FERPA, HIPAA, mandated reporting, delegation", qs: 60 },
      { n: 7, focus: "Chronic conditions — asthma, diabetes, anaphylaxis, seizures, allergies", qs: 60 },
      { n: 8, focus: "Leadership, professionalism, systems — policy, advocacy, supervision, ethics", qs: 60 },
      { n: 9, focus: "Full-length timed practice exam + error-log review", qs: 200 },
      { n: 10, focus: "Targeted review of weak domains, rest, test day", qs: 40 },
    ],
    tipsHeading: "How NCSN candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Don't treat NCSN as a clinical-screening exam",
        text:
          "School Health Practice and leadership/systems content together carry meaningful weight. Block dedicated weeks for FERPA, HIPAA in schools, delegation to UAPs, and mandated reporting.",
      },
      {
        kicker: "Pace 250 items in roughly 4 hours",
        text:
          "Pacing is a trained skill. Take at least one full-length timed practice exam under real conditions before test day — fatigue in the last 60 items is where unprepared candidates lose the most points.",
      },
      {
        kicker: "Know your immunization schedules cold",
        text:
          "CDC/ACIP childhood and adolescent immunization schedules, state-level exemption rules, and catch-up logic appear reliably. Build a one-page reference and review it weekly.",
      },
      {
        kicker: "Master emergency care plan execution",
        text:
          "Anaphylaxis (epinephrine auto-injector), asthma rescue inhaler protocols, seizure first aid, and diabetes (glucagon, low/high glucose) scenarios anchor several items. Drill the action sequences, not just the disease background.",
      },
      {
        kicker: "Don't skip the four-to-five domain change",
        text:
          "If your prep materials predate Summer 2025, they reflect the older five-domain structure. Verify your study bank against the current four-domain Exam Content Outline before relying on it.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (NBCSN scenario style — original; do not reprint vendor items)
  sample: {
    heading: "Sample NCSN question",
    prose: [
      "This item mirrors NBCSN's scenario format: a short stem grounded in a school health office, a student with a chronic condition, and four plausibly-correct options where only one is <em>best</em>. Try it before you read the rationale.",
    ],
    q: {
      scenario:
        "A 9-year-old student with a documented IHP for moderate persistent asthma reports to the school health office during recess. He is using accessory muscles, has audible wheezing, and his peak flow is 55% of personal best. His IHP authorizes albuterol MDI 2 puffs via spacer for symptoms, with reassessment in 15 minutes.",
      stem: "Which action should the school nurse take first?",
      options: [
        "Call the student's parent or guardian before administering any medication.",
        "Administer albuterol 2 puffs via spacer per the IHP and recheck peak flow in 15 minutes.",
        "Activate EMS immediately and document the peak flow value.",
        "Have the student sit quietly and observe him for 15 minutes before any intervention.",
      ],
      correct: 1,
      rationale:
        "The IHP is the authoritative document for this student. Albuterol 2 puffs via spacer is the protocol-driven response for symptomatic asthma with a yellow-zone peak flow (50-79% of personal best). Notify the parent after the intervention and reassessment, not before. EMS activation is reserved for red-zone (under 50%), no improvement after rescue inhaler, or severe respiratory distress. Watchful waiting without intervention is not appropriate when the IHP authorizes treatment.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key NCSN terms every candidate should know",
    prose: [
      "These terms surface in most NCSN exam items. Review them until the definitions feel automatic — scenario-based stems often hinge on recognizing which framework (IHP, 504, IEP, FERPA, mandated reporting) applies.",
    ],
    rows: [
      { term: "IHP", defn: "Individualized Healthcare Plan — nursing-led plan documenting a student's health needs, interventions, and emergency response for use across the school day.", domain: "Practice" },
      { term: "504 Plan", defn: "Plan under Section 504 of the Rehabilitation Act providing accommodations so a student with a disability can access general education.", domain: "Practice" },
      { term: "IEP", defn: "Individualized Education Program — IDEA-mandated plan with measurable goals and specially designed instruction for a student receiving special education services.", domain: "Practice" },
      { term: "ECP", defn: "Emergency Care Plan — concise action plan for a school-day emergency (anaphylaxis, severe asthma, seizure, diabetes crisis) accessible to non-nursing staff.", domain: "Practice" },
      { term: "FERPA", defn: "Family Educational Rights and Privacy Act — federal law governing the confidentiality of student education records, including most school health records.", domain: "School Practice" },
      { term: "HIPAA in schools", defn: "HIPAA generally does not apply to records that meet the FERPA definition of education records; school nurses operate primarily under FERPA for student health information.", domain: "School Practice" },
      { term: "Delegation to UAP", defn: "Transfer of nursing tasks to unlicensed assistive personnel under the nurse's supervision, within state nurse practice act limits and district policy.", domain: "School Practice" },
      { term: "Mandated reporting", defn: "Legal duty of school personnel — including school nurses — to report suspected child abuse or neglect to designated state agencies.", domain: "School Practice" },
      { term: "ACIP schedule", defn: "CDC Advisory Committee on Immunization Practices recommended childhood and adolescent vaccine schedule used to evaluate compliance and catch-up needs.", domain: "Health Promotion" },
      { term: "Yellow / red zone (asthma)", defn: "Peak-flow zones used in asthma action plans — yellow (50-79% of personal best) prompts rescue inhaler; red (under 50%) prompts emergency response.", domain: "Practice" },
      { term: "Anaphylaxis", defn: "Severe, rapid-onset systemic allergic reaction; first-line treatment in the school setting is intramuscular epinephrine via auto-injector, followed by EMS activation.", domain: "Practice" },
      { term: "Glucagon", defn: "Hormone administered for severe hypoglycemia in a student with diabetes who cannot safely swallow; school staff trained on administration per state delegation rules.", domain: "Practice" },
      { term: "Communicable disease exclusion", defn: "District- and state-defined criteria for excluding a student from school due to a contagious condition, and the criteria for safe return.", domain: "Disease Prevention" },
      { term: "Vision and hearing screening", defn: "Mass screenings school nurses conduct on a state-defined schedule, with referral criteria triggering follow-up to primary care or specialists.", domain: "Health Appraisal" },
      { term: "Scope of practice in education settings", defn: "The intersection of the state nurse practice act, state education code, and district policy that defines what a school nurse may do and delegate.", domain: "Leadership" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "NCSN vs. state certification, NASN membership, and PHN",
    prose: [
      "NCSN sits alongside several related credentials and memberships that school RNs sometimes consider. Many readers Google \"NCSN\" when they actually mean their state school-nurse certification, so the distinction matters before you spend time or money.",
    ],
    rows: [
      { row: "NCSN", highlight: true, body: "NBCSN", scope: "National board credential for K-12 school nursing", who: "Practicing school RNs nationwide" },
      { row: "State school-nurse certification / endorsement", body: "State Dept of Education", scope: "Required permission to work as a school nurse in that state", who: "RNs employed by public schools in that state" },
      { row: "NASN membership", body: "National Association of School Nurses", scope: "Professional society membership and CE", who: "Any nurse interested in school nursing" },
      { row: "PHN certification", body: "State boards / ANCC", scope: "Public health nursing (community-wide scope)", who: "RNs in public health agencies and community settings" },
      { row: "School Nurse Practitioner (SNP)", body: "State APRN boards", scope: "Advanced practice nursing in school settings", who: "NPs employed by schools or school-based health centers" },
    ],
    closingProse:
      "<strong>Take NCSN if you are an RN already practicing in K-12 school nursing and want a portable, peer-validated national credential.</strong> Hold the state certification if your employer requires it to work in their schools. NASN membership is a complement — it is not a substitute for either NCSN or state certification.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about NCSN certification",
    items: [
      { q: "What does NCSN stand for in nursing?", a: "NCSN stands for Nationally Certified School Nurse. The credential is issued by the National Board for Certification of School Nurses (NBCSN), an independent national credentialing body." },
      { q: "Is NCSN the same as my state school-nurse certification?", a: "No. State school-nurse certification or endorsement is issued by your state's Department of Education and is required permission to work as a school nurse in that state. NCSN is a separate, voluntary, nationally portable board credential issued by NBCSN." },
      { q: "How long does it take to prepare for the NCSN exam?", a: "Most school RNs prepare for 8 to 12 weeks. A realistic target is 80 to 120 total study hours spread across the four blueprint domains in the Summer 2025 Exam Content Outline." },
      { q: "Is the NCSN exam hard?", a: "The NCSN exam is moderately difficult. The 2023 pass rate was 70.6%, and historical annual pass rates have ranged from approximately 50% to 83.6%. Candidates who rely only on clinical screening content often underperform on School Health Practice and leadership domains." },
      { q: "What is the passing score on the NCSN exam?", a: "NBCSN uses a scaled scoring system from 200 to 800; the passing score is 620. Items are weighted by difficulty, so counting raw correct answers does not directly equal the scaled score." },
      { q: "What happens if I fail the NCSN exam?", a: "You may reapply for a future testing window per NBCSN policy. Each retake requires a new application and the full current application fee. Consult the current NCSN Candidate Handbook for any waiting-period requirements." },
      { q: "Does NCSN certification expire?", a: "Yes. NCSN certification is valid for 5 years. You recertify by accumulating at least 75 contact hours of continuing education plus at least 2,000 hours of school nursing practice during the cycle (with at least 750 of those hours in the most recent 3 years), or by retaking the current NCSN exam." },
      { q: "Do my district-coordinator or health-services hours count toward eligibility?", a: "Yes. NBCSN counts both direct clinical care and indirect contributions to student health and education toward the 1,000-hour eligibility rule for the initial exam." },
      { q: "Can I sit the NCSN exam with a non-nursing bachelor's degree?", a: "Yes. NBCSN accepts a baccalaureate or higher degree alongside an active RN license — the degree does not have to be a BSN. Confirm current degree-acceptance language in the NCSN Candidate Handbook." },
      { q: "Will my school district pay for NCSN certification?", a: "Many districts reimburse the NCSN application fee through a certification or professional-development benefit. Ask your district HR or health-services coordinator before paying out of pocket." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following primary sources. Fees, blueprint structure, and recertification rules shift on NBCSN's revision cycle — always verify numeric facts against the current NBCSN Candidate Handbook before relying on them for application decisions.",
    ],
    list: [
      "National Board for Certification of School Nurses (NBCSN) — Examination page and 2024 NCSN Certification Handbook",
      "NBCSN — Updated Exam Content - Summer 2025 (four-domain Exam Content Outline)",
      "NBCSN — Eligibility & Readiness page",
      "NBCSN — Recertification and Recertification Procedures pages, including the February 2025 NCSN Recertification Handbook",
      "NBCSN — Statistics page (pass-rate history)",
      "NBCSN — FAQs page (renewal, scope of practice, common questions)",
      "Centers for Disease Control and Prevention (CDC) — ACIP childhood and adolescent immunization schedules",
      "U.S. Department of Education — Family Educational Rights and Privacy Act (FERPA) guidance for school health records",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice NCSN-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to the Summer 2025 NBCSN blueprint. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full NCSN question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "State vs. national",
      title: "NCSN vs. state school-nurse certification: which one do I actually need?",
      blurb: "How state Department of Education endorsements differ from the NBCSN national credential, and when school RNs benefit from holding both.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "School Health Practice: the NCSN domain that decides first-time pass",
      blurb: "Why FERPA, delegation, and mandated reporting items derail otherwise prepared school RNs, and the resources NBCSN recommends.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "School nursing",
      title: "Building a national-credential school nursing role with NCSN",
      blurb: "How districts use NCSN-holder counts in lead-nurse hiring, and how the credential supports career mobility across state lines.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
