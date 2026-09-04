// CNML exam detail page — structured data.
// Sourced from Content/CNML_research.json (verified against the AONL CNML
// Examination and Program Handbook revised 05/2025, the AONL CNML programme
// and FAQ pages, the AONL-CC Annual Statistics 2022–2024 PDF, and the AONL
// recertification-methods fee table).
// Lives at /certifications/cnml/ via the paginated template.

module.exports = {
  code: "CNML",
  name: "Certified Nurse Manager and Leader",
  body: "AONL",
  cat: "leadership",
  catLabel: "Leadership & Informatics",
  updated: "2026-09",

  // Page-level SEO (built from the Content Brief meta table, with the brief's
  // banned-word list applied to its own suggestions)
  seo: {
    title:
      "CNML Certification Guide: Eligibility, Exam & Renewal | NursPrep",
    description:
      "What nurse managers need on CNML certification — AONL eligibility routes, the 115-question exam, five-domain blueprint, $300 member fee, 64.9% pass rate, and 3-year renewal.",
    ogTitle:
      "CNML Certification Guide 2026 — Certified Nurse Manager and Leader",
    ogDescription:
      "AONL eligibility (BSN or higher + 2,080 or 4,160 leadership hours), the 05/2025 five-domain blueprint, exam fees, pass rates, and a 10-week study plan.",
  },

  // ---- HERO
  lede:
    "CNML — Certified Nurse Manager and Leader — is the AONL credential for the nurse who holds full clinical and administrative accountability for a unit or department. It is developed and administered by the AONL Credentialing Center (AONL-CC), the credentialing arm of the American Organization for Nursing Leadership. If your week is built around staffing, budget variance, throughput, and the people on your roster, CNML is the credential that matches that job.",
  heroPills: [
    { k: "Questions", v: "115 items" },
    { k: "Duration", v: "2 hours" },
    { k: "Renewal", v: "3 years" },
    { k: "Pass rate", v: "64.9%" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "AONL Credentialing Center (AONL-CC)" },
    { k: "Format", v: "PSI test centres + online remote proctoring" },
    { k: "Scored items", v: "100 of 115 (15 unscored pretest)" },
    { k: "Passing score", v: "75 of 100 scored items correct" },
    { k: "Eligibility", v: "Unrestricted RN licence + baccalaureate or higher, at least one degree in nursing" },
    { k: "Experience", v: "2,080 hrs as nurse manager OR 4,160 hrs in a leadership support role" },
    { k: "Fee (AONL member)", v: "$300 · non-member $425–$450 (see note)" },
    { k: "Renewal cycle", v: "3 years — 45 CPD hours or re-examination" },
  ],
  heroCardFoot:
    "Verified against the AONL CNML Examination and Program Handbook revised 05/2025 and the AONL-CC Annual Statistics 2022–2024",

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
    { id: "compare", label: "CNML vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "What is CNML certification?",
    prose: [
      "CNML certification is a board credential for nurse managers, issued by the <strong>AONL Credentialing Center (AONL-CC)</strong> — an activity of the American Organization for Nursing Leadership (AONL), which is a subsidiary of the American Hospital Association. Earning it means passing a 115-question exam built on the AONL Nurse Manager Competencies and holding the letters CNML after your name for three years at a time.",
      "One point of confusion is worth clearing up early. CNML launched in 2008 as a joint programme of the AONE Credentialing Center and <strong>AACN Certification Corporation</strong>. AONE became AONL in 2019, and the current handbook states that CNML is developed and administered by AONL-CC alone. AACN Certification Corporation's present credential list — CCRN, PCCN, CMC, CSC and the advanced-practice exams — no longer includes CNML. Pages that still describe CNML as an AACN credential are working from stale copy.",
      "AONL-CC contracts the American Hospital Association Certification Center for programme management, and that body engages <strong>PSI</strong> to build, deliver and score the exam. PSI is the test vendor, not the certifying body. The programme is accredited by both the National Commission for Certifying Agencies (NCCA) and the Accreditation Board for Specialty Nursing Certification (ABSNC).",
    ],
    stats: [
      { n: "115", l: "Total items", sub: "100 scored · 15 pretest" },
      { n: "2 hrs", l: "Time limit", sub: "Computer-based, calculator allowed" },
      { n: "64.9%", l: "2024 first-time pass rate", sub: "411 of 633 candidates" },
      { n: "3 yrs", l: "Renewal cycle", sub: "45 CPD hours or re-examination" },
    ],
    factBox: {
      tone: "warn",
      title: "AONL publishes two different blueprints — use the handbook",
      html:
        "The CNML programme page and preparation page still describe <strong>four practice areas</strong> (financial management; human resource management; performance improvement; strategic management and technology) drawn from the Nurse Manager Learning Domain Framework. The <strong>handbook revised 05/2025</strong> publishes a different, item-weighted <strong>five-domain</strong> Examination Content Outline. The handbook is the dated, item-level source and is what this page uses. Study from the four-area description and you will under-prepare Leadership and Professionalism.",
    },
    coverImageLabel:
      "Nurse manager reviewing unit staffing and budget variance with a charge nurse",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "What are the CNML certification requirements?",
    prose: [
      "You need three things: an <strong>active, unrestricted Registered Nurse licence</strong>; a <strong>baccalaureate degree or higher</strong>, with at least one of your degrees in nursing from an accredited institution; and qualifying leadership hours under one of two options.",
      "<strong>Option 1</strong> is at least <strong>2,080 hours</strong> in a nurse manager or primary unit leader role — roughly one full-time year. <strong>Option 2</strong> is at least <strong>4,160 hours</strong> in a comprehensive nursing leadership support role, which is the route for educators, clinical coordinators, supervisors and project leads whose accountability is broader than one unit but not a manager line.",
      "AONL sets no expiry date on those hours. It asks only that your practice was recent enough to have been guided by the AONL competencies. Expect scrutiny: AONL-CC audits <strong>10% of applications</strong> each year, and an applicant who cannot document eligibility is barred from testing.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You hold an unrestricted RN licence and a BSN, MSN, or a bachelor's or higher in another field alongside a nursing degree.",
      "You have logged at least 2,080 hours running a unit or department — budget, roster, performance conversations, and quality metrics all sitting with you.",
      "Or you have 4,160 hours in a leadership support role: nurse educator, clinical coordinator, house supervisor, quality or throughput lead, or nurse manager in training.",
      "You can read a variance report, explain your worked-hours-per-patient-day trend, and defend a skill-mix decision without pulling in your director.",
      "You handle the people side of the job directly — corrective action, peer conflict, retention conversations — rather than routing it all to HR.",
    ],
  },

  // ---- BLUEPRINT (item counts from the 05/2025 Examination Content Outline; total 100 scored)
  blueprint: {
    heading: "CNML exam blueprint — five domains, 100 scored items",
    prose: [
      "The CNML Examination Content Outline in the handbook revised 05/2025 splits 100 scored items across five domains. Because the counts sum to exactly 100, each item count is also its percentage weight — a rare convenience in nursing certification blueprints.",
      "<strong>Communication and Relationship Building</strong> and <strong>Leadership</strong> carry 25 items each, so half the exam sits in the people-and-systems half of the manager role. Candidates who prepare by rereading finance material tend to lose points here. Business Skills and Principles — the domain that holds financial management, strategic management and human resource management — is 18 items, the same weight as the health care environment domain.",
      "Professionalism is the smallest domain at 14 items, but it is also the one most managers have never studied formally: governance structures, organisational accountability, and health equity and social determinants of health.",
    ],
    domains: [
      { label: "Communication and Relationship Building (relationship management, effective communication, influencing behaviours)", weight: 25 },
      { label: "Leadership (systems thinking, change management, DEBI, decision making, transformation and innovation)", weight: 25 },
      { label: "Health Care Environment & Clinical Principles (nursing practice, economics and policy, regulation, EBP, patient safety and quality)", weight: 18 },
      { label: "Business Skills and Principles (financial management, strategic management, human resource management)", weight: 18 },
      { label: "Professionalism (professional and organisational accountability, health equity and SDOH, governance)", weight: 14 },
    ],
  },

  // ---- COST
  cost: {
    heading: "How much does CNML certification cost?",
    prose: [
      "The CNML exam costs <strong>$300 for AONL members</strong>. The non-member fee is where AONL contradicts itself: the CNML programme page lists <strong>$425</strong> and the CNML FAQ lists <strong>$450</strong>. The candidate handbook publishes no fee schedule at all and simply refers readers to the AONL-CC website. Confirm the figure on the application screen before you pay, and price an AONL membership against the gap while you are there.",
      "Once you register and pay, your application is valid for <strong>90 days</strong>. Inside that window you schedule with PSI — a test centre in any of the 50 states, an international location, or online remote proctoring from home. Miss the window and you forfeit the application and every dollar paid, so book the seat the day your approval lands.",
    ],
    rows: [
      { k: "Exam — AONL member", v: "$300" },
      { k: "Exam — non-member", v: "$425 or $450 (AONL sources conflict)", highlight: true },
      { k: "Recertification by CPD — AONL member", v: "$200" },
      { k: "Recertification by CPD — non-member", v: "$275" },
      { k: "Recertification within 30 days after expiry — member", v: "$250 (late fee applied)" },
      { k: "Recertification within 30 days after expiry — non-member", v: "$325 (late fee applied)" },
      { k: "Recertification by re-examination", v: "Standard exam fee; no processing fee" },
      { k: "CNML practice exam", v: "Sold via the PSI store, discounted member rate (price not published)" },
    ],
    factBox: {
      tone: "info",
      title: "Testing from home, and what the proctor checks",
      html:
        "AONL offers PSI online remote proctoring as well as test centres. Some items require arithmetic, so bring a <strong>silent, non-programmable, non-scientific calculator with no paper tape and no alpha keypad</strong>. Phones and computers do not count. The proctor inspects the calculator during check-in, in a test centre and at home alike. Looking away from the screen, mouthing words, or leaving the webcam's field of view can close the session and score it as a fail.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "CNML certification runs for <strong>three years</strong> and expires on the last day of its expiry month. <strong>Method 1 — continuing professional development:</strong> complete at least <strong>45 hours</strong> of eligible CPD activity in the three years before your expiry date, report it under AONL's activity and content codes, and pay the recertification fee ($200 member, $275 non-member).",
      "<strong>Method 2 — re-examination:</strong> retake and pass the CNML exam no more than one year before your expiry date, and submit the passing score report with the application. An exam sat earlier than that one-year mark does not count toward renewal.",
      "Applications open one year before expiry and close 30 days after it. Anything later is delinquent and will not be accepted — at that point the credential can only be regained by sitting the full exam again. AONL-CC sends reminders, but keeps responsibility for current contact details with the certificant.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the CNML exam?",
    prose: [
      "AONL reported a <strong>64.9% first-time pass rate for 2024</strong> — 411 of 633 candidates. That continues a three-year slide: 71% in 2022 and 68.2% in 2023. Roughly one first-time candidate in three does not pass, which puts CNML in the same difficulty band as other leadership credentials rather than in easy territory.",
      "The passing standard is concrete rather than scaled: <strong>75 of the 100 scored items correct</strong>. AONL notes that this standard applies to exams from 10/30/2023 and holds until the next exam form is built. The cut is set by the modified Angoff method and equated across forms, so it can move when a new form appears.",
      "The pattern behind the failures is predictable. Managers arrive fluent in their own unit's finances and thin on governance, regulation, health equity, and formal change-management models. Fifty of the 100 scored items live in Communication and Relationship Building plus Leadership — domains that reward studied frameworks, not day-job instinct.",
    ],
    rows: [
      { year: "2022", pct: 71 },
      { year: "2023", pct: 68.2 },
      { year: "2024", pct: 64.9 },
    ],
    target: 80,
    footnote:
      "First-time candidate cohort, from the AONL Credentialing Center Annual Statistics 2022–2024. The 2024 repeater and total rows in that PDF do not reconcile internally (633 + 2 first-time and repeat candidates against a stated total of 625), so only the first-time figures are shown here.",
    factBox: {
      tone: "info",
      title: "Two hours for 115 items is about 62 seconds each",
      html:
        "CNML gives you less time per item than most nursing certifications. Calculation items in Business Skills and Principles are where candidates burn the clock. Practise the arithmetic — FTE conversions, worked hours per patient day, budget variance, turnover rate — until each takes under a minute with a basic calculator, then let the recall items run fast.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 10-week CNML study plan",
    prose: [
      "Ten weeks at six to eight hours a week suits most nurse managers with a year or more in the role. AONL publishes no official preparation benchmark, so treat this as NursPrep guidance rather than an AONL requirement. Weight your weeks the way the blueprint is weighted: half the plan belongs to Communication and Relationship Building and Leadership.",
      "Start by downloading the CNML Candidate Handbook and running the AONL Nurse Leader Competency self-assessment. Both are free, and the self-assessment gives you an honest read on which domains you can skim.",
    ],
    weeks: [
      { n: 1, focus: "CNML Candidate Handbook + AONL Nurse Manager Competency self-assessment; baseline diagnostic", qs: 25 },
      { n: 2, focus: "Relationship management — alliances across the care continuum, conflict resolution, stakeholder mapping", qs: 40 },
      { n: 3, focus: "Effective communication and influencing behaviours — feedback models, crucial conversations, negotiation", qs: 50 },
      { n: 4, focus: "Systems and complex adaptive thinking; change management models (Lewin, Kotter, ADKAR)", qs: 50 },
      { n: 5, focus: "Decision making, transformation and innovation, diversity, equity, belonging and inclusion", qs: 50 },
      { n: 6, focus: "Business skills — budget variance, FTE and skill mix, productivity, capital vs operating", qs: 55 },
      { n: 7, focus: "Strategic and human resource management — workforce planning, corrective action, retention", qs: 50 },
      { n: 8, focus: "Health care environment — reimbursement models, regulation, EBP, patient safety and quality", qs: 55 },
      { n: 9, focus: "Professionalism — governance, organisational accountability, health equity and SDOH; full timed 115-item exam", qs: 115 },
      { n: 10, focus: "Error-log review of weakest domains, calculation drills, logistics and rest", qs: 40 },
    ],
    tipsHeading: "Where CNML candidates lose points — and how to fix it",
    tips: [
      {
        kicker: "Study the current blueprint, not the marketing copy",
        text:
          "AONL's programme page still lists four practice areas. The handbook lists five domains with item counts. Prepare against the handbook outline or you will walk in having skipped Professionalism entirely.",
      },
      {
        kicker: "Your unit's finances are not the finance domain",
        text:
          "Business Skills and Principles is 18 items covering reimbursement models, healthcare economics, capital planning and workforce cost — broader than the variance report you sign each month. Read AONL's Nurse Manager Examination Reading List for this domain specifically.",
      },
      {
        kicker: "Name the change model",
        text:
          "Leadership items reward candidates who can identify which framework a scenario is describing. Learn Lewin, Kotter, ADKAR and just-culture decision trees by name and by stage, not by vibe.",
      },
      {
        kicker: "Do the calculations under time",
        text:
          "Bring a plain calculator and practise with one. FTE conversion, worked hours per patient day, turnover and vacancy rates, and budget variance percentages all show up. Sixty-two seconds per item leaves no room to rederive a formula.",
      },
      {
        kicker: "Buy the AONL practice exam early, not late",
        text:
          "Sitting it in week 3 tells you where to spend weeks 4 through 8. Sitting it in week 10 only tells you how you feel. AONL sells it through the PSI store at a discounted member rate.",
      },
      {
        kicker: "Book the PSI seat the day you are approved",
        text:
          "Your application dies 90 days after payment. Candidates who wait for a quiet month at work lose the fee and start the application over.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (NursPrep-authored, modelled on the blueprint's
  // Business Skills and Principles domain; not reproduced from AONL material)
  sample: {
    heading: "Sample CNML question",
    prose: [
      "CNML items lean on management judgement rather than clinical recall. This one sits in Business Skills and Principles, where several options are defensible and only one is the manager's first move.",
    ],
    q: {
      scenario:
        "A 32-bed medical-surgical unit budgeted 6.2 worked hours per patient day. The month closes at 7.1 worked hours per patient day with a $46,000 unfavourable salary variance. Census ran 4% below budget, agency use was flat, and overtime rose 18%. Two experienced charge nurses resigned during the month and the unit is running four RN vacancies.",
      stem: "Which action should the nurse manager take first?",
      options: [
        "Freeze all overtime for the coming month to bring worked hours back to the budgeted target.",
        "Analyse the variance by shift and skill mix to separate volume-driven from staffing-driven cost, then take the findings to the finance partner.",
        "Submit a budget revision request raising the worked-hours-per-patient-day target to 7.1 to reflect current acuity.",
        "Open agency contracts to cover the four RN vacancies until permanent hires are onboarded.",
      ],
      correct: 1,
      rationale:
        "A variance is a question, not an answer. Census fell while worked hours rose, which points to a fixed-coverage or skill-mix problem rather than overspending on volume. Decomposing the variance by shift and skill mix identifies the driver before any spend decision is made. Freezing overtime on a unit with four vacancies risks coverage and safety. Revising the target to match the overrun removes accountability rather than explaining it. Agency coverage may follow, but committing to it before the analysis buys cost without evidence.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key CNML terms every candidate should know",
    prose: [
      "These terms recur across CNML scenario items. The exam rarely asks for a definition outright — it presents a situation and expects you to recognise which concept governs it.",
    ],
    rows: [
      { term: "WHPPD", defn: "Worked Hours Per Patient Day — total worked hours divided by patient days; the core productivity measure a nurse manager defends each pay period.", domain: "Business Skills" },
      { term: "FTE", defn: "Full-Time Equivalent — 2,080 paid hours a year. Productive FTEs cover direct care; non-productive FTEs cover PTO, orientation and education.", domain: "Business Skills" },
      { term: "Budget variance", defn: "The gap between budgeted and actual cost, split into volume-driven and rate- or efficiency-driven components before any corrective action.", domain: "Business Skills" },
      { term: "Skill mix", defn: "The proportion of RN to LPN to unlicensed assistive personnel hours on a unit; a lever for both cost and outcome measures.", domain: "Business Skills" },
      { term: "Value-based purchasing", defn: "CMS reimbursement that ties payment to quality and outcome measures rather than volume of services delivered.", domain: "Health Care Environment" },
      { term: "Just culture", defn: "An accountability model that distinguishes human error, at-risk behaviour and reckless behaviour, and matches the response to the category rather than to the outcome.", domain: "Professionalism" },
      { term: "Professional governance", defn: "The structure through which direct-care nurses hold decision authority over practice, quality and professional development on their unit.", domain: "Professionalism" },
      { term: "SDOH", defn: "Social Determinants of Health — the non-clinical conditions shaping patient outcomes; CNML tests the manager's role in identifying and escalating them.", domain: "Professionalism" },
      { term: "Kotter's 8 steps", defn: "A change-management sequence beginning with urgency and a guiding coalition; CNML items often ask which step a described action belongs to.", domain: "Leadership" },
      { term: "ADKAR", defn: "Awareness, Desire, Knowledge, Ability, Reinforcement — an individual-level change model useful when a unit-wide rollout stalls at one of the five stages.", domain: "Leadership" },
      { term: "Complex adaptive system", defn: "A view of the unit as interdependent agents whose behaviour cannot be predicted from the parts alone; underpins the systems-thinking sub-domain.", domain: "Leadership" },
      { term: "Crucial conversation", defn: "A high-stakes exchange with opposing opinions and strong emotion; CNML tests structured approaches to opening and holding one.", domain: "Communication" },
      { term: "Healthy work environment", defn: "A practice setting meeting standards for skilled communication, true collaboration, effective decision making, appropriate staffing, meaningful recognition and authentic leadership.", domain: "Communication" },
      { term: "Span of control", defn: "The number of direct reports a manager carries; a documented driver of manager burnout, turnover and unit outcome measures.", domain: "Communication" },
      { term: "Never event", defn: "A serious, largely preventable adverse event that is non-reimbursable and triggers mandatory review; sits at the intersection of regulation and quality.", domain: "Health Care Environment" },
      { term: "AONL Nurse Manager Competencies", defn: "The competency framework the CNML exam is built on, covering the science, the art and the leader within the nurse manager role.", domain: "All domains" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "CNML vs. CENP, NE-BC, NEA-BC, and CNL",
    prose: [
      "Nurse leaders routinely compare CNML against three other credentials, and a fourth that only looks similar. The deciding factor is scope: how far your accountability reaches, and which body's competency framework your organisation recognises.",
      "AONL runs two credentials — CNML for the manager and CENP for the executive. ANCC runs its own pair, NE-BC and NEA-BC, on a different framework, a different exam length and a five-year cycle. CNL is a clinical role credential from a different organisation altogether and is frequently mistyped for CNML.",
    ],
    rows: [
      { row: "CNML", highlight: true, body: "AONL Credentialing Center", scope: "Unit or department management — finance, staffing, quality, people", who: "Nurse managers and primary unit leaders with 2,080+ hours" },
      { row: "CENP", body: "AONL Credentialing Center", scope: "Executive nursing practice, built on the AONL Nurse Executive Competencies", who: "CNOs, VPs and directors with organisation-wide accountability" },
      { row: "NE-BC", body: "ANCC", scope: "Unit, service line or department leadership on the ANCC framework", who: "Nurse leaders whose employers recognise ANCC credentials" },
      { row: "NEA-BC", body: "ANCC", scope: "System-level executive nursing leadership", who: "Senior executives; the ANCC counterpart to CENP" },
      { row: "CNL", body: "Commission on Nurse Certification (AACN, colleges of nursing)", scope: "Master's-prepared clinical leadership at the point of care", who: "Clinical Nurse Leaders — a clinical role, not a management credential" },
    ],
    closingProse:
      "<strong>Take CNML if you manage a unit or department and want a credential built on the nurse manager role itself.</strong> Move to CENP once your accountability spans the organisation. Choose <a href=\"/certifications/ne-bc/\">NE-BC</a> over CNML when your employer's clinical ladder or Magnet documentation specifically recognises ANCC credentials, and <a href=\"/certifications/nea-bc/\">NEA-BC</a> when that ANCC preference meets an executive scope. CNL answers a different question entirely — it is a clinical role, and holding it does not substitute for a management credential.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about CNML certification",
    items: [
      { q: "What does CNML mean?", a: "CNML stands for Certified Nurse Manager and Leader. It is a board credential issued by the AONL Credentialing Center for nurses with full clinical and administrative accountability for a unit or department." },
      { q: "Who certifies the CNML — AONL or AACN?", a: "AONL. The CNML Examination and Program Handbook revised 05/2025 states that CNML is developed and administered by the AONL Credentialing Center. AACN Certification Corporation co-launched the credential with AONE in 2008 but is no longer a partner, and CNML does not appear on AACN's current credential list." },
      { q: "How much is CNML certification?", a: "The exam is $300 for AONL members. AONL's own pages disagree on the non-member price — the CNML programme page says $425 and the CNML FAQ says $450 — so confirm the figure on the application screen before paying." },
      { q: "What are the requirements to become a CNML certified nurse?", a: "An active, unrestricted RN licence; a baccalaureate degree or higher with at least one degree in nursing from an accredited institution; and either 2,080 hours in a nurse manager or primary unit leader role, or 4,160 hours in a comprehensive nursing leadership support role." },
      { q: "What is the CNML certification exam about?", a: "The exam covers five domains from the AONL Nurse Manager Competencies: Communication and Relationship Building (25 items), Leadership (25), Health Care Environment and Clinical Principles (18), Business Skills and Principles (18), and Professionalism (14). It tests management judgement rather than clinical recall." },
      { q: "How many questions are on the CNML exam?", a: "115 multiple-choice questions, of which 100 are scored and 15 are unscored pretest items. You have two hours to complete it." },
      { q: "What is the CNML passing score?", a: "You must answer 75 of the 100 scored items correctly. AONL set this standard for exams from 10/30/2023 and it holds until a new exam form is developed." },
      { q: "How hard is the CNML exam?", a: "The first-time pass rate was 64.9% in 2024, down from 68.2% in 2023 and 71% in 2022. About one first-time candidate in three does not pass, most often on the Leadership and Professionalism domains rather than on finance." },
      { q: "How can I prepare for the CNML certification exam?", a: "Start with the free CNML Candidate Handbook and the AONL Nurse Leader Competency self-assessment, then work through the Nurse Manager Examination Reading List. AONL also sells a CNML practice exam through PSI and runs the CNML Essentials Review Course, worth up to 7.0 contact hours." },
      { q: "Where can I take the CNML exam?", a: "At PSI test centres in all 50 states and at international locations, or from home through PSI online remote proctoring. You schedule directly with PSI inside the 90-day window that opens when your application and payment are complete." },
      { q: "What happens if I fail the CNML exam?", a: "You may retake it no sooner than 90 days after your most recent attempt, with a new application and fee. You may apply for and sit the same exam up to four times in a two-year period." },
      { q: "How does CNML recertification work?", a: "CNML is valid for three years. Renew either by completing at least 45 hours of eligible continuing professional development in the three years before expiry and paying the fee ($200 AONL member, $275 non-member), or by retaking and passing the exam within one year of your expiry date." },
      { q: "What happens if my CNML certification lapses?", a: "Renewal applications are accepted up to 30 days after expiry with a late fee ($250 member, $325 non-member). Beyond 30 days the application is delinquent and refused, and the credential can only be regained by retaking and passing the exam." },
      { q: "Can international nurse leaders take the CNML exam?", a: "Yes. Foreign-educated RNs verify their education, licensure and employment credentials through the AONL International Credentials Evaluation Service, run with TruMerit and CGFNS International. Eligible candidates can test outside the United States for an additional fee." },
      { q: "How do I verify someone's CNML certification?", a: "AONL runs a public CNML verification portal through the AHA association-management system, which lists current certificants so employers can confirm a credential." },
      { q: "What is the difference between CNML and NE-BC?", a: "CNML comes from AONL and is built on the AONL Nurse Manager Competencies — 115 items, two hours, a three-year cycle. NE-BC comes from ANCC on a separate framework, with a 175-item exam and a five-year cycle. Scope overlaps; the deciding factor is usually which body your employer's clinical ladder recognises." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "Every figure on this page traces to the primary sources below. Where AONL's own pages disagree — most notably on the non-member exam fee and on how many domains the blueprint has — this page says so rather than picking one silently. Fees and blueprints move on AONL's revision cycle, so verify numbers against the current handbook before you apply.",
    ],
    list: [
      "AONL — CNML Examination and Program Handbook, revised 05/2025 (administering body, eligibility, 115-item format, Angoff standard setting, full Examination Content Outline with scored-item counts): https://www.aonl.org/system/files/media/file/2025/06/CNML-Handbook.pdf",
      "AONL — Certified Nurse Manager and Leader certification page (fee line, PSI remote proctoring, calculator policy, verification portal): https://www.aonl.org/initiatives/cnml",
      "AONL — CNML Frequently Asked Questions (eligibility options, 75/100 passing score, retake policy, 90-day application validity, NCCA and ABSNC accreditation): https://www.aonl.org/initiatives/cnml-faq",
      "AONL Credentialing Center — Annual Statistics 2022–2024, CNML (2022 71%, 2023 68.2%, 2024 64.9% first-time pass rates; certificant and recertification counts): https://www.aonl.org/system/files/media/file/2024/12/AnnualStatistics22.24-CNML.pdf",
      "AONL — CNML Methods for Recertification (45 CPD hours, re-examination route, full recertification fee table): https://www.aonl.org/certification/cnml/recertification-methods",
      "AONL — CNML Recertification (three-year cycle, submission window, delinquency rule): https://www.aonl.org/initiatives/cnml/recertification",
      "AONL — CNML Certification Preparation (candidate handbook, practice exam, reading list, 7.0 contact hours for the Essentials Review Course): https://www.aonl.org/initiatives/cnml-prepare",
      "AONL — Credentialing Center Certification Programs (CNML built on the AONL Nurse Manager Competencies; TruMerit and CGFNS International credentials evaluation): https://www.aonl.org/initiatives/certification",
      "AACN — About AACN Certification Corporation (current credential list, confirming CNML is no longer an AACN programme): https://www.aacn.org/about-aacn/about-aacn-cert-corp",
      "TruMerit / CGFNS International — AONL International Credentials Evaluation Service: https://www.trumerit.org/services/credentials-evaluation/aonl/",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practise CNML-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to the five domains in AONL's 05/2025 content outline. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full CNML question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "NE-BC",
      title: "CNML vs NE-BC: which nurse leader credential fits your role?",
      blurb: "AONL and ANCC test the same job against different frameworks. How exam length, renewal cycle and employer recognition should decide it for you.",
      href: "/certifications/ne-bc/",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "Fifty of 100 items: why Leadership and Communication decide CNML",
      blurb: "The two domains that carry half the scored exam, the change models AONL expects you to name, and the reading that actually covers them.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "Nurse manager",
      title: "From charge nurse to CNML: building the 2,080 hours",
      blurb: "What counts toward Option 1 and Option 2 eligibility, how AONL's 10% application audit works, and how to document leadership hours before you apply.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
