// CCHT exam detail page — structured data.
// Sourced from Content/CCHT_research.json (verified against NNCC, the NNCC/C-NET
// 2021 test blueprint and specifications PDFs, the NNCC 2025-2026 Annual Report,
// and BONENT/NNCO primary pages as of the 2026-09 cycle).
// Lives at /certifications/ccht/ via the paginated template.

module.exports = {
  code: "CCHT",
  name: "Certified Clinical Hemodialysis Technician",
  body: "NNCC",
  cat: "specialty",
  catLabel: "Medical-Surgical & Specialty",
  updated: "2026-09",

  // Page-level SEO (structure per Content Brief section 3)
  seo: {
    title:
      "CCHT Certification: Eligibility, Exam & Renewal | NursPrep",
    description:
      "A complete guide to CCHT certification for dialysis technicians. Covers NNCC eligibility, the 150-question exam, the four-domain blueprint, the $225 fee, the 2025 pass rate of 65%, an 8-week study plan, and the 3-year recertification rules — every figure checked against NNCC's own pages and its 2025-2026 annual report.",
    ogTitle:
      "CCHT Certification Guide 2026 — Certified Clinical Hemodialysis Technician",
    ogDescription:
      "NNCC eligibility, the 150-item blueprint, the $225 exam fee, a 65% pass rate, and what recertifying every three years actually takes.",
  },

  // ---- HERO
  lede:
    "CCHT stands for Certified Clinical Hemodialysis Technician, the entry-level national credential for dialysis patient care technicians. The Nephrology Nursing Certification Commission (NNCC) awards it, and roughly 39,000 technicians held it at the end of 2025 — making CCHT the most widely held credential in nephrology care.",
  heroPills: [
    { k: "Questions", v: "150 items" },
    { k: "Duration", v: "3 hours" },
    { k: "Renewal", v: "3 years" },
    { k: "Pass rate", v: "65%" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "Nephrology Nursing Certification Commission (NNCC)" },
    { k: "Who it is for", v: "Dialysis technicians, not RNs" },
    { k: "Format", v: "Computer-based testing, year-round by appointment" },
    { k: "Passing score", v: "Standard score of 95 (~74% correct)" },
    { k: "Education", v: "High school diploma or GED" },
    { k: "Experience", v: "Training program required; 1,000 hours only recommended" },
    { k: "Exam fee", v: "$225 (includes $50 processing fee)" },
    { k: "Renewal cycle", v: "3 years — 3,000 work hours plus 30 CE hours, or re-exam" },
  ],
  heroCardFoot:
    "Verified against NNCC's CCHT and recertification pages, the 2021 CCHT test blueprint, and the NNCC 2025-2026 Annual Report",

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
    { id: "compare", label: "CCHT vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "What a Certified Clinical Hemodialysis Technician does",
    prose: [
      "A Certified Clinical Hemodialysis Technician runs the hemodialysis treatment at the chair: cannulating the patient's vascular access, setting the machine to the prescribed treatment, monitoring the patient through several hours of therapy, and taking the patient off at the end. NNCC's own blueprint devotes roughly half the exam to that clinical work, and the rest to the machine, the water treatment system, the clinic environment, and the technician's professional role.",
      "The credential sits at the entry level of NNCC's technician track. NNCC describes CCHT as \"an entry level certification credential,\" with <strong>CCHT-A</strong> as the advanced tier for technicians with five years and 5,000 hours who precept and work at a broader scope. Neither is a nursing certification — CCHT does not require a nursing license and does not authorize nursing practice.",
      "Certification matters more here than in most technician roles because the Centers for Medicare &amp; Medicaid Services (CMS) Conditions for Coverage for End Stage Renal Disease Facilities require dialysis patient care technicians to hold a state or national certification. In practice that is why most dialysis employers treat CCHT as a condition of continued employment rather than a nice-to-have.",
    ],
    stats: [
      { n: "150", l: "Exam items", sub: "Multiple choice, one 3-hour session" },
      { n: "38,990", l: "Certified CCHTs", sub: "As of 2025-12-31" },
      { n: "65%", l: "2025 pass rate", sub: "7,091 exams administered" },
      { n: "3 yrs", l: "Renewal cycle", sub: "3,000 work hours plus 30 CE hours" },
    ],
    factBox: {
      tone: "info",
      title: "CCHT, CHT, and CCNT are three different credentials",
      html:
        "Three national bodies certify dialysis technicians. <strong>CCHT</strong> comes from NNCC. <strong>CHT</strong> (Certified Hemodialysis Technologist/Technician) comes from the Board of Nephrology Examiners Nursing and Technology (BONENT). <strong>CCNT</strong> comes from the National Nephrology Certification Organization (NNCO). All three are recognized nationally, and NNCC accepts any of them as the prior certification that qualifies you for the CCHT-A exam. Check which one your employer and your state board name before you apply — searches for \"bonent ccht\" usually mean someone is comparing these two, not looking for a single combined credential.",
    },
    coverImageLabel:
      "Dialysis technician monitoring a hemodialysis machine during an in-center treatment",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the CCHT exam?",
    prose: [
      "You are eligible if you hold a high school diploma or a General Educational Development (GED) certificate <em>and</em> you have completed a clinical hemodialysis technician training program that combined classroom instruction with supervised clinical experience. NNCC requires a copy of a government-approved diploma, and the name on it must match the name on your application or you must attach proof of a name change.",
      "There is no mandatory hours requirement for initial certification. NNCC states that six months, or 1,000 hours, of clinical experience is <strong>recommended but not required</strong>. Anyone telling you that CCHT needs 2,000 hours is quoting a different NNCC credential.",
      "What NNCC does require is a signature trail. Your educator signs off on the training program, or you submit a certificate of completion. If you have not yet worked as a technician, you report the hands-on clinical hours from your training program and the facility where they happened, and the facility administrator or manager signs to confirm a registered nurse supervised that experience. If you have held a technician position within the last 18 months, your supervisor signs instead. If you have been out of the field for 18 months or longer, you have to show proof of current retraining before NNCC will process the application.",
      "One requirement is easy to skip past: you must be in compliance with the federal and state rules governing hemodialysis patient care technicians, which means meeting the training and experience requirements of the CMS Conditions for Coverage for End Stage Renal Disease Facilities and of the state where you practice. Some states layer their own registration on top of NNCC certification, with its own fees and its own number.",
    ],
    candidateHeading: "You are ready to apply if…",
    candidateList: [
      "You hold a high school diploma or GED and can produce a copy that matches the name on your application.",
      "You finished a hemodialysis technician training program with both classroom hours and supervised clinical hours, and you can get the educator's signature or a certificate of completion.",
      "You can name the facility where your hands-on experience happened and get an administrator, manager, or supervisor to sign for it.",
      "You have been working as a dialysis technician within the last 18 months, or you have documented retraining if you have been away longer.",
      "You are comfortable cannulating access, setting the machine to the prescription, and handling an intradialytic blood pressure drop without reaching for a checklist — the exam is weighted toward applying that judgment, not reciting facts.",
      "You have checked whether your state requires a separate technician registration alongside the NNCC credential.",
    ],
  },

  // ---- BLUEPRINT (midpoints of NNCC's published ranges; sum to 100)
  blueprint: {
    heading: "CCHT exam blueprint — four practice areas across 150 items",
    prose: [
      "NNCC splits the CCHT exam into four dialysis practice areas, and <strong>Clinical</strong> alone carries about half of it. NNCC publishes these as ranges rather than fixed percentages, so treat the bars below as midpoints: Clinical 48–52% (71–78 items), Technical 21–25% (32–38 items), Environment 13–17% (19–25 items), and Role Responsibilities 10–14% (15–20 items).",
      "The blueprint's companion test specifications document lists 88 individual activity statements behind those four areas, and it is the single most useful free study tool NNCC publishes. Clinical accounts for 44 of them, covering cannulation, machine setup to prescription, pre- and post-dialysis access assessment, fluid status, heparin protocol, and the recognition-and-report items that dominate scenario questions.",
      "Weight your study time by cognitive level as well as by domain. Roughly two-thirds of the exam sits at the <strong>Application</strong> level — you are given a new clinical situation and asked what to do — while straight recall accounts for only about one item in ten. Reading the Core Curriculum cover to cover without working through scenarios trains the wrong skill.",
      "Technical is where candidates who learned one machine at one clinic tend to lose points. Conductivity and pH verification with an independent device, water treatment principles such as ion exchange and adsorption, mixing concentrates from powder, and troubleshooting a malfunctioning machine all appear here, and they are tested as principles rather than as one manufacturer's button sequence.",
    ],
    domains: [
      { label: "Clinical (cannulation, monitoring, access, fluid status)", weight: 50 },
      { label: "Technical (machine, dialysate, water treatment, troubleshooting)", weight: 23 },
      { label: "Environment (infection control, safety, emergencies)", weight: 15 },
      { label: "Role Responsibilities (privacy, documentation, communication, precepting)", weight: 12 },
    ],
  },

  // ---- COST
  cost: {
    heading: "What CCHT certification costs and how to schedule it",
    prose: [
      "The CCHT exam fee is <strong>$225</strong>, which already includes a $50 non-refundable application processing fee. NNCC publishes the full fee schedule below, and the extras matter more than the headline number for anyone whose paperwork is incomplete or whose timing slips.",
      "The application is a mailed paper packet, not an online form. You download the CCHT exam application from NNCC, collect the diploma copy and the required signatures, and mail it with your fee directly to the <strong>Center for Nursing Education and Testing (C-NET)</strong>, NNCC's testing partner. Allow up to four weeks from receipt for your permit to be issued. Expedited review costs $75 and turns the permit around in one to three business days.",
      "Once C-NET issues the permit, you have a <strong>90-day testing window</strong> to sit the exam. NNCC delivers all its exams by computer-based testing at approved test centers, open year-round by appointment, so there are no fixed testing windows to wait for. NNCC does not offer at-home or internet-proctored testing. If the 90 days run out, another $125 buys a second 90-day window.",
      "Refunds are tight. A written request from the payee has to reach NNCC no later than two weeks before your 90-day window closes, and NNCC deducts the processing fee and any other non-refundable fees before refunding the rest.",
    ],
    rows: [
      { k: "Exam fee (includes $50 processing fee)", v: "$225", highlight: true },
      { k: "Online practice exam — 50 questions, 90-day access", v: "$30" },
      { k: "Expedited review (permit in 1–3 business days)", v: "$75" },
      { k: "CBT 90-day testing window extension", v: "$125" },
      { k: "Incomplete application fee", v: "$50" },
      { k: "Late fee", v: "$50" },
      { k: "Returned check or cancelled payment", v: "$50" },
      { k: "Duplicate wallet card or certificate", v: "$25" },
      { k: "Certification validation letter", v: "$20" },
      { k: "Recertification by continuing education", v: "$100" },
      { k: "Recertification by examination", v: "$225" },
      { k: "Emeritus status (one-time)", v: "$100" },
    ],
    factBox: {
      tone: "info",
      title: "Buy the official practice test, not a shortcut course",
      html:
        "NNCC sells a <strong>$30 online practice test</strong> through C-NET: 50 multiple-choice questions, 90 days of access, and several scrambled versions for retesting. It runs in Practice Mode, which shows the answer and rationale after each item, or Test Mode, which holds results to the end. Both produce a score report broken down by blueprint area, which tells you exactly which of the four practice areas to work on. None of its items appear on the real exam. NNCC separately warns candidates away from sites promising \"tricks of testing\" — the exam is written to defeat test-taking strategy and reward content knowledge.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "CCHT certification lasts <strong>three years</strong>, running from the last day of the month in which you passed the exam. Both renewal routes require the same work-experience floor: <strong>3,000 hours</strong> as a dialysis technician during the three-year period, verified by a current or previous supervisor. Fall short of 3,000 hours and you are not eligible to recertify by either route.",
      "<strong>Route 1 — recertify by continuing education</strong> ($100). Complete 30 contact hours of approved continuing education during the cycle, of which at least 10 must be nephrology-specific. Acceptable sources are nursing CE programs, independent study offering nursing contact hours, and academic credit toward a health or science degree (five contact hours per semester credit, three per quarter credit, usable once). Preceptors can claim a maximum of 8 contact hours for 160 precepting hours. NNCC strongly recommends, without requiring, that CE be approved by an American Nurses' Credentialing Center Commission on Accreditation (ANCC-COA) organization, the American Association of Critical-Care Nurses (AACN), the Council of Continuing Education, or a state board of nursing. Keep every certificate — NNCC audits applications at random.",
      "<strong>Route 2 — recertify by examination</strong> ($225). Retake and pass the CCHT exam at a testing centre before your expiration date. Everything except the CE submission still applies, including the 3,000 hours.",
      "Timing is the part people get wrong. CE-route applications must be postmarked by the last day of your expiration month to dodge the late fee, but NNCC review can take up to eight weeks, so NNCC advises submitting at least three months early. Reminders go out roughly every 30 days starting 120 days before expiration, though NNCC is explicit that the responsibility to file is yours. Late applications are accepted for up to 18 months past expiration with a $50 late fee, provided all requirements were met during the expired period.",
      "If your certification lapses and you did not meet the requirements, the path back depends on how long you have been away. Worked as a dialysis technician within the last 18 months? Re-apply using the initial CCHT exam application. Longer than 18 months? NNCC treats you as a new technician and requires retraining before you can apply again. Technicians over 50 who have retired from active practice can instead apply for <strong>Emeritus status</strong> with a one-time $100 fee, which recognises the former credential without keeping it active.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the CCHT exam?",
    prose: [
      "NNCC reported a <strong>65% pass rate</strong> for the CCHT examination in 2025, across <strong>7,091</strong> exams administered that year. CCHT is by a wide margin NNCC's highest-volume exam — the other five NNCC credentials together accounted for only 822 administrations in the same period.",
      "That figure puts CCHT in the middle of NNCC's own range for 2025: the Certified Dialysis Nurse (CDN) exam also came in at 65%, the advanced CCHT-A at 61%, the Certified Nephrology Nurse (CNN) at 56%, and the Certified Nephrology Nurse – Nurse Practitioner (CNN-NP) at 39%. Roughly one CCHT candidate in three does not pass on the attempt they sit.",
      "To pass you need a <strong>standard score of 95</strong>, which NNCC states corresponds to answering <strong>74%</strong> of the items correctly. A standard score is a scaled score, so the raw number of correct answers needed can shift slightly between test forms; 74% is NNCC's own stated equivalent. The advanced CCHT-A exam uses the same standard score of 95 against a 70% threshold, which is why you will find both numbers on NNCC's site — 74% is the one that applies to CCHT.",
      "NNCC reports a single overall percentage rather than splitting first-time candidates from repeaters, so there is no published first-time pass rate for CCHT. Treat 65% as the figure for everyone who sat the exam that year.",
    ],
    rows: [{ year: "2025", pct: 65 }],
    target: 80,
    footnote:
      "Only 2025 is shown. NNCC publishes pass percentages in its annual report at a single URL that is replaced each year, so earlier CCHT figures could not be verified against a primary source.",
    factBox: {
      tone: "info",
      title: "Two-thirds of the exam asks you to act, not recall",
      html:
        "NNCC's blueprint puts <strong>63–67% of items at the Application cognitive level</strong> — a new clinical situation, and a question about what you do next. Comprehension takes another 23–27%. Straight recall of terms and facts is 8–12% of the exam. Candidates who fail often knew the material and had never practised choosing between four defensible actions under a clock.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "An 8-week CCHT study plan",
    prose: [
      "Eight weeks is a realistic runway for a working dialysis technician preparing for the CCHT exam, and the schedule below allocates weeks in proportion to the blueprint rather than evenly. Clinical gets three weeks because it is half the exam; Role Responsibilities gets a shared week because it is about one item in eight.",
      "Start by downloading two free NNCC documents: the CCHT test blueprint and the test specifications. The specifications list all 88 activity statements the exam is built from, which effectively turns them into a syllabus. Work through them and mark each one as confident, shaky, or unfamiliar before you plan anything else.",
      "The question counts below are a guide, not a rule. What matters is that you finish the official 50-question practice test under timed conditions in week 7, with enough of week 8 left to fix whatever it exposes.",
    ],
    weeks: [
      { n: 1, focus: "Read the NNCC blueprint and test specifications; self-rate all 88 activity statements; baseline questions", qs: 25 },
      { n: 2, focus: "Clinical I — vascular access, cannulation, thrill and bruit, access complications, post-dialysis access care", qs: 40 },
      { n: 3, focus: "Clinical II — machine setup to prescription, initiating and discontinuing treatment, heparin protocol, extracorporeal circuit", qs: 45 },
      { n: 4, focus: "Clinical III — fluid status and dry weight, intradialytic hypotension and cramping, recognising and reporting complications", qs: 45 },
      { n: 5, focus: "Technical — machine pressure and alarm tests, conductivity and pH, dialysate temperature, water treatment, concentrates, troubleshooting", qs: 40 },
      { n: 6, focus: "Environment — standard and dialysis precautions, disinfection, isolation, fall risk, facility start-up and shut-down, fire and evacuation", qs: 35 },
      { n: 7, focus: "Role Responsibilities plus the official 50-question practice test under timed conditions; review the blueprint-area score report", qs: 50 },
      { n: 8, focus: "Rework every activity statement still marked shaky, redo a scrambled practice version, confirm test-centre logistics, rest", qs: 40 },
    ],
    tipsHeading: "Where CCHT candidates lose points",
    tips: [
      {
        kicker: "Study principles, not your clinic's machine",
        text:
          "The Technical area is written around dialysis principles — ultrafiltration, ion exchange, adsorption, conductivity — rather than one manufacturer's interface. If your entire experience is on a single machine at a single facility, that is the gap most likely to cost you the exam.",
      },
      {
        kicker: "Practise choosing between four defensible answers",
        text:
          "Application-level items give you a situation where several options are reasonable and only one is best. Reading a textbook does not train that. Work scenario questions, and force yourself to say out loud why each wrong option is wrong.",
      },
      {
        kicker: "Do not treat Role Responsibilities as filler",
        text:
          "Privacy, confidentiality, documentation, hand-off reporting, and de-escalation are 15 to 20 items. That is enough to decide a borderline result, and it is the area technicians most often skip because it feels like common sense rather than content.",
      },
      {
        kicker: "Use the score report, not just the score",
        text:
          "The official practice test breaks your result down by blueprint area. A 70% overall that hides a 45% in Technical tells you exactly where week 8 goes. The raw percentage on its own tells you almost nothing useful.",
      },
      {
        kicker: "Know the water treatment chain",
        text:
          "Monitoring the water treatment system and verifying conductivity and pH with an independent device are explicit activity statements. Candidates who have never been assigned to water treatment duties need to seek that exposure out before test day — ask to shadow a colleague for a shift.",
      },
      {
        kicker: "Skip the shortcut sites",
        text:
          "NNCC states plainly that exam content is confidential and is not shared with anyone involved in test preparation, and that it deliberately designs out \"tricks of testing.\" Prep sites claiming leaked or real items are selling something NNCC says does not exist.",
      },
    ],
  },

  // ---- SAMPLE QUESTION
  sample: {
    heading: "Sample CCHT question",
    prose: [
      "This item is written in the style the blueprint describes: an Application-level Clinical scenario where more than one option looks reasonable and only one is the correct next action. Decide on your answer before you read the rationale.",
    ],
    q: {
      scenario:
        "A patient is 90 minutes into a four-hour hemodialysis treatment with an ultrafiltration goal of 3.2 L. Blood pressure has fallen from 138/82 to 82/48 mm Hg, heart rate is 108, and the patient reports nausea, dizziness, and cramping in both legs.",
      stem: "Which action should the clinical hemodialysis technician take first?",
      options: [
        "Increase the blood flow rate to raise the patient's blood pressure.",
        "Reduce or stop ultrafiltration, position the patient supine with the legs elevated, and notify the registered nurse.",
        "Discontinue the treatment immediately and return the patient's blood.",
        "Offer the patient oral fluids and continue at the prescribed ultrafiltration rate.",
      ],
      correct: 1,
      rationale:
        "This is intradialytic hypotension driven by an aggressive fluid removal rate. The first action is to stop taking volume off and restore central circulation: reduce or stop ultrafiltration, lay the patient flat with the legs raised, and tell the RN, who directs any saline bolus or prescription change per facility protocol. Raising the blood flow rate moves blood through the dialyzer faster but does nothing for intravascular volume. Terminating the treatment is premature — most episodes resolve with ultrafiltration held and the patient repositioned, and ending early leaves the patient volume-overloaded. Oral fluids add to the fluid burden the treatment is trying to remove, act far too slowly for an acute drop, and risk aspiration in a nauseated patient.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key CCHT terms every candidate should know",
    prose: [
      "These terms run through the CCHT blueprint's activity statements and show up repeatedly in scenario stems. The domain column maps each one to the practice area it is tested under, so you can fold this table into the week it belongs to in the study plan.",
    ],
    rows: [
      { term: "Ultrafiltration (UF)", defn: "Removal of fluid across the dialyzer membrane by a pressure gradient. The UF goal and UF rate are the settings behind most intradialytic hypotension scenarios.", domain: "Clinical" },
      { term: "Dry weight", defn: "The target post-dialysis weight at which a patient is neither fluid overloaded nor depleted. Drives the UF goal for each treatment.", domain: "Clinical" },
      { term: "AV fistula / AV graft", defn: "Arteriovenous fistula (a surgically joined artery and vein) or graft (a synthetic conduit between them) — the two permanent vascular accesses a technician cannulates.", domain: "Clinical" },
      { term: "Thrill and bruit", defn: "The vibration felt and the whooshing sound heard over a functioning access. Assessing both by looking, listening, and feeling is an explicit blueprint activity for detecting access failure.", domain: "Clinical" },
      { term: "Buttonhole cannulation", defn: "Repeated needle placement through the same tunnelled track in a mature fistula, using blunt needles. Cannulating a mature buttonhole is a listed Clinical activity.", domain: "Clinical" },
      { term: "Access recirculation", defn: "Dialysed blood re-entering the dialyzer instead of returning to systemic circulation, which lowers treatment adequacy. Often the first hint of access stenosis.", domain: "Clinical" },
      { term: "Extracorporeal circuit", defn: "The blood path outside the body — arterial line, dialyzer, venous line, and drip chamber. Setting it up is a core Clinical activity.", domain: "Clinical" },
      { term: "Dialysis disequilibrium syndrome", defn: "Neurological symptoms including headache, nausea, and confusion caused by rapid solute shifts, most often in patients new to dialysis.", domain: "Clinical" },
      { term: "Exsanguination risk", defn: "Blood loss from a dislodged venous needle or a disconnected line. Identifying patients at risk of \"bleeding out\" is a named blueprint activity.", domain: "Clinical" },
      { term: "Dialysate", defn: "The solution flowing on the far side of the dialyzer membrane, mixed from acid and bicarbonate concentrate with treated water, that drives diffusion.", domain: "Technical" },
      { term: "Conductivity", defn: "An electrical measure of dialysate ion concentration, used to confirm the solution is mixed correctly. NNCC requires verification with an independent device, not just the machine's own reading.", domain: "Technical" },
      { term: "Transmembrane pressure (TMP)", defn: "The pressure difference across the dialyzer membrane that governs the fluid removal rate. A rising TMP can signal a clotting dialyzer.", domain: "Technical" },
      { term: "Reverse osmosis (RO)", defn: "The core purification stage of the dialysis water treatment system, which forces water through a semipermeable membrane to strip out dissolved contaminants.", domain: "Technical" },
      { term: "Ion exchange", defn: "A water treatment process that swaps unwanted ions in the feed water for others held on a resin bed — one of the water treatment principles the blueprint names directly.", domain: "Technical" },
      { term: "Standard precautions", defn: "The baseline infection-control practices applied to every patient. Dialysis units add specific precautions beyond them, and both are tested under Environment.", domain: "Environment" },
      { term: "Two patient identifiers", defn: "The national patient safety goal requiring two distinct identifiers before any treatment or procedure. Participating in this is a listed Clinical activity.", domain: "Environment" },
      { term: "Hand-off report", defn: "The structured transfer of patient information to another staff member before a break or shift change, so care continues without gaps.", domain: "Role" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "CCHT vs. CCHT-A, CHT, CCNT, CDN, and CNN",
    prose: [
      "CCHT is one of several nephrology credentials, and the dividing line that matters is licensure: CCHT, CCHT-A, CHT, and CCNT are technician credentials, while CDN, CD-LPN/CD-LVN, and CNN require a nursing licence. Choosing between them starts with what licence you hold, not with which exam looks easier.",
      "Among the technician credentials, CCHT, CHT, and CCNT are direct alternatives from three separate certifying bodies. Your employer or state board usually decides which is acceptable, and NNCC accepts all three as the prior national certification that makes you eligible for CCHT-A.",
    ],
    rows: [
      { row: "CCHT", highlight: true, body: "NNCC", scope: "Entry-level clinical hemodialysis technician practice", who: "Dialysis technicians with a diploma or GED plus a training program" },
      { row: "CCHT-A", body: "NNCC", scope: "Advanced dialysis technician practice, including precepting", who: "CCHT, CHT, or CCNT holders with 5 years and 5,000 hours" },
      { row: "CHT", body: "BONENT", scope: "Hemodialysis technologist / technician practice", who: "Technicians whose employer or state recognises BONENT" },
      { row: "CCNT", body: "NNCO", scope: "Clinical nephrology technology", who: "Technicians certified through the NNCO route" },
      { row: "CDN", body: "NNCC", scope: "In-center hemodialysis nursing", who: "RNs with at least 2,500 hours of nephrology experience" },
      { row: "CD-LPN / CD-LVN", body: "NNCC", scope: "Dialysis practice at the practical / vocational nurse level", who: "LPNs and LVNs with at least 2,000 hours" },
      { row: "CNN", body: "NNCC", scope: "Nephrology nursing across acute care", who: "RNs with at least 2,500 hours in acute nephrology" },
    ],
    closingProse:
      "<strong>Take CCHT if you work at the chair and hold no nursing licence</strong> — it is the credential CMS-regulated dialysis facilities expect, and the one nearly 39,000 technicians already hold. Move to CCHT-A once you pass five years and 5,000 hours and start precepting; NNCC's FailSafe policy automatically recertifies your CCHT if you sit the CCHT-A exam and do not pass, so attempting it costs you nothing in credential terms. If you later earn an RN licence, CDN and CNN are the nursing-side continuations of the same nephrology track.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about CCHT certification",
    items: [
      { q: "What does CCHT mean?", a: "CCHT stands for Certified Clinical Hemodialysis Technician. It is the entry-level national credential for dialysis patient care technicians, awarded by the Nephrology Nursing Certification Commission (NNCC)." },
      { q: "What are the eligibility requirements for the CCHT certification exam?", a: "You need a high school diploma or GED and completion of a hemodialysis technician training program that included classroom instruction and supervised clinical experience, verified by signature. You must also comply with the CMS Conditions for Coverage for End Stage Renal Disease Facilities and your state's rules. NNCC recommends but does not require six months, or 1,000 hours, of clinical experience." },
      { q: "How long does it take to get your CCHT certification?", a: "Allow up to four weeks for C-NET to process a mailed application and issue your permit, or one to three business days with the $75 expedited review. Once the permit is issued you have a 90-day window to book and sit the exam at a computer-based testing centre." },
      { q: "How hard is the CCHT exam?", a: "NNCC reported a 65% pass rate for CCHT in 2025 across 7,091 exams, so roughly one candidate in three does not pass. You need a standard score of 95, which NNCC states means answering about 74% of the 150 items correctly." },
      { q: "What kind of training is required to apply for the CCHT certification?", a: "A clinical hemodialysis technician training program that combined classroom instruction with supervised, hands-on clinical experience. Your educator signs the application or you submit a certificate of completion, and a facility administrator or manager confirms that a registered nurse supervised the clinical hours." },
      { q: "What fees are associated with the CCHT certification process?", a: "The exam fee is $225, including a $50 non-refundable processing fee. The optional official practice test is $30. Expedited review costs $75 and a 90-day extension of your testing window costs $125. Recertification is $100 by continuing education or $225 by examination." },
      { q: "How do I verify a CCHT certification?", a: "Use the NNCC Certified Directory on the NNCC website, which lists certificants and expiration dates by state. Your expiration date is also printed on your certification wallet card. NNCC does not issue certification numbers — any number you hold comes from a state registration, which is separate." },
      { q: "How often do I need to renew my CCHT certification?", a: "Every three years, counted from the last day of the month in which you passed the exam. Both renewal routes require 3,000 hours of dialysis technician work during the cycle, plus either 30 contact hours of continuing education with at least 10 nephrology-specific, or passing the exam again." },
      { q: "What happens if my CCHT certification expires?", a: "NNCC accepts late recertification applications for up to 18 months past expiration with a $50 late fee, provided you met all requirements during the expired period. If you did not, and you have worked as a dialysis technician within the last 18 months, you can re-apply using the initial exam application. Beyond 18 months out of the field, NNCC treats you as a new technician and requires retraining first." },
      { q: "What is the difference between CCHT and CCHT-A?", a: "CCHT is the entry-level credential. CCHT-A is the advanced credential for technicians with five years of continuous employment, at least 5,000 hours, and 30 contact hours of recent continuing education, who are working at an advanced level such as precepting. You cannot convert a CCHT to a CCHT-A by recertifying — you have to pass the CCHT-A exam." },
      { q: "Is CCHT the same as the BONENT CHT?", a: "No. CCHT comes from NNCC and CHT comes from the Board of Nephrology Examiners Nursing and Technology (BONENT). They are separate credentials from separate certifying bodies with different applications and renewal models. NNCC accepts either one, along with the NNCO's CCNT, as qualifying prior certification for the CCHT-A exam." },
      { q: "Can I take the CCHT exam online from home?", a: "No. NNCC states that all its examinations are administered through computer-based testing by appointment at approved testing sites, and that it does not offer at-home or internet testing. Test centres are open year-round, so there are no fixed testing windows to wait for." },
      { q: "How many times can I retake the CCHT exam?", a: "NNCC does not publish a retake waiting period or a limit on attempts for CCHT. Contact C-NET, NNCC's testing partner, at 800-463-0786 to confirm the current policy before planning a retake." },
      { q: "Is there an official CCHT practice test?", a: "Yes. NNCC sells a $30 online practice test through C-NET with 50 multiple-choice questions and 90 days of access, available in Practice Mode with rationales or Test Mode. It reports your score by blueprint area. None of its questions appear on the real exam." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "Every figure on this page is verified against the primary sources below, nearly all of them published by NNCC itself. Fees, blueprint weights, and recertification rules change on NNCC's own revision cycle — confirm any number against the current NNCC pages before you apply or pay.",
    ],
    list: [
      "NNCC — CCHT certification page: eligibility, 150 items in 3 hours, standard score of 95 equal to 74% correct, standard fee schedule, practice test details, and FAQ (https://www.nncc-exam.org/certification/ccht)",
      "NNCC / C-NET — Test Blueprint for Certified Clinical Hemodialysis Technician, 2021: ideal distribution of 150 items by practice area and cognitive level (https://www.nncc-exam.org/sites/default/files/blueprints/cchtExamBlueprint_2021.pdf)",
      "NNCC / C-NET — CCHT Test Specifications, 2021: blueprint category weights plus all 88 activity statements (https://www.nncc-exam.org/sites/default/files/cchtSpecifications_2021_08272021.pdf)",
      "NNCC — CCHT Recertification page: three-year cycle, 3,000 work hours, 30 contact hours with 10 nephrology-specific, recertification fees, emeritus status, and submission timing (https://www.nncc-exam.org/recertification/ccht)",
      "NNCC — 2025-2026 Annual Report: 7,091 CCHT exams administered in 2025, 65% pass percentage, and 38,990 certified CCHTs as of 2025-12-31 (https://www.nncc-exam.org/about/annualReport.pdf)",
      "NNCC — Exam Sites: computer-based testing open year-round for all NNCC certification exams (https://www.nncc-exam.org/resources/exam-sites)",
      "NNCC — Policies: refund rules and the 90-day permit window, right of appeal, and late recertification up to 18 months past expiration (https://www.nncc-exam.org/policies)",
      "NNCC — CCHT-A certification page: five years and 5,000 hours, the FailSafe policy, and the CCHT-A 70% threshold that is often mistaken for CCHT's 74% (https://www.nncc-exam.org/certification/ccht-a)",
      "NNCC — CCHT Certification Preparation Guide: NNCC founded 1987, the C-NET testing partnership, and NNCC's charter membership of the American Board of Nursing Specialties (https://www.nncc-exam.org/sites/default/files/prepguide/cchtPrepGuide.pdf)",
      "BONENT — Certified Hemodialysis Technologist/Technician (CHT), the main alternative technician credential (https://bonent.org/certified-hemodialysis-technologist-technician-cht/)",
      "NNCO — National Nephrology Certification Organization, awarding body for the CCNT credential (https://nnco-certification.org/about/)",
      "Medical Education Institute — Core Curriculum for the Dialysis Technician, 6th ed. (2018), and Kallenbach, J.Z., Review of Hemodialysis for Nurses and Dialysis Personnel, 9th ed. (2016): the core references NNCC lists for the CCHT exam",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice CCHT-style items?",
  ctaProse:
    "Work through a 25-question diagnostic weighted to NNCC's four practice areas, with a rationale on every item. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full CCHT question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "CCHT-A",
      title: "CCHT vs CCHT-A: when to move up to the advanced credential",
      blurb: "The five-year, 5,000-hour threshold, what \"advanced level of practice\" means to NNCC, and why the FailSafe policy makes attempting CCHT-A risk-free.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "The Technical domain: dialysate, water treatment, and troubleshooting",
      blurb: "Conductivity, pH, ion exchange, and mixing concentrates make up a quarter of the CCHT exam — and it is the area single-machine experience leaves thinnest.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "Renewal",
      title: "Tracking 3,000 hours and 30 CE contact hours across three years",
      blurb: "How to log work hours and nephrology-specific continuing education from day one, so CCHT recertification is paperwork rather than a scramble.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
