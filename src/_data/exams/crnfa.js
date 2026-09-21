// CRNFA exam detail page — structured data.
// Sourced from Content/CRNFA_research.json (verified against NASC, AORN, CCI
// and ABSNC primary sources on 2026-09-21).
// Lives at /certifications/crnfa/ via the paginated template.
//
// IMPORTANT correction carried through this file:
//   1. CRNFA is awarded by the National Assistant at Surgery Certification
//      (NASC), not by CCI. The credential transferred from CCI to NASC on
//      2019-01-01 (AORN; NASC). CCI's own 2021–2025 credential statistics and
//      site navigation no longer list CRNFA. A legacy, unlinked CCI page at
//      cc-institute.org/crnfa is stale and is deliberately not cited.
//   2. CRNFA is NOT an exam credential. The CRNFA exam was discontinued at the
//      end of 2020; certification is earned by completing the CRNFA
//      Professional Portfolio. Question count, time limit, scored/pretest split
//      and testing vendor are therefore null in the research file and are
//      absent from this page rather than estimated.
//   3. CCI remains central to the pathway: current CNOR certification is a
//      prerequisite on the RN eligibility path and an admission requirement for
//      AORN-standard RNFA education programmes.

module.exports = {
  code: "CRNFA",
  name: "Certified Registered Nurse First Assistant",
  body: "NASC",
  cat: "periop",
  catLabel: "Perioperative & Anesthesia",
  updated: "2026-09",
  updatedLabel: "September 2026",

  // Page-level SEO
  seo: {
    title:
      "CRNFA Certification 2026: Eligibility, Portfolio & Renewal | NursPrep",
    description:
      "CRNFA certification is awarded by NASC through a portfolio, not an exam. CNOR prerequisite, 2,000 RNFA hours, the $550 fee, 98% pass rate and renewal.",
    ogTitle:
      "CRNFA Certification 2026 — Certified Registered Nurse First Assistant",
    ogDescription:
      "NASC eligibility, the seven-domain portfolio blueprint, the $550 fee, and a 12-week plan for CNOR-certified RNFAs.",
  },

  // ---- HERO
  lede:
    "CRNFA — Certified Registered Nurse First Assistant — is the board credential for registered nurses who first assist at surgery. The credential is awarded by the <strong>National Assistant at Surgery Certification (NASC)</strong>, which took it over from the Competency &amp; Credentialing Institute (CCI) on 1 January 2019. Since 2021 it is earned by completing the CRNFA Professional Portfolio, not by sitting an exam.",
  heroPills: [
    { k: "Format", v: "Portfolio" },
    { k: "Activities", v: "109" },
    { k: "Renewal", v: "5 years" },
    { k: "Pass rate", v: "98% (2024)" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "National Assistant at Surgery Certification (NASC)" },
    { k: "Assessment", v: "CRNFA Professional Portfolio — no exam since 2020" },
    { k: "Portfolio size", v: "109 activities across 3 studies" },
    { k: "Prerequisite", v: "Current CNOR (RN path) or APRN certification" },
    { k: "Education", v: "Bachelor's or higher + AORN-standard RNFA programme" },
    { k: "Experience", v: "2,000 RNFA hours (at least 1,000 intraoperative)" },
    { k: "Fee", v: "$550 · $275 if you hold RNAS-C", highlight: true },
    { k: "Renewal cycle", v: "5 years — contact hours or activity points" },
  ],
  heroCardFoot:
    "Verified against the NASC CRNFA Certification/Recertification Candidate Handbook and the AORN Standards for RN First Assistant Education Programs (2025–2026)",

  // ---- TOC
  sections: [
    { id: "overview", label: "What CRNFA is" },
    { id: "eligibility", label: "Eligibility" },
    { id: "blueprint", label: "Portfolio blueprint" },
    { id: "cost", label: "Cost & renewal" },
    { id: "passrate", label: "Pass rate" },
    { id: "plan", label: "12-week plan" },
    { id: "sample", label: "Practice item" },
    { id: "keyterms", label: "Key terms" },
    { id: "compare", label: "CRNFA vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "What is CRNFA certification?",
    prose: [
      "CRNFA certification is the credential that validates a registered nurse's practice in the RN first assistant role. It is awarded by the <strong>National Assistant at Surgery Certification (NASC)</strong> and is accredited by the <strong>Accreditation Board for Specialty Nursing Certification (ABSNC)</strong>, which granted accreditation on 16 October 2024.",
      "Two facts trip up most candidates. First, NASC — not CCI — owns the credential. The transfer took effect on <strong>1 January 2019</strong>, so guidance written before then is out of date. Second, <strong>there is no CRNFA exam</strong>. NASC retired the exam at the end of 2020 and opened the CRNFA Professional Portfolio in February 2021.",
      "RNFA and CRNFA are not the same thing. <strong>RNFA is a role</strong>; AORN defines it as a perioperative RN, or an APRN, functioning as a first assistant, and the role is recognised in the nurse practice acts of all 50 states. <strong>CRNFA is the certification</strong> that documents achievement in that role.",
    ],
    stats: [
      { n: "109", l: "Portfolio activities", sub: "3 studies · 7 job-analysis domains" },
      { n: "3 mo", l: "Submission window", sub: "From your chosen start date" },
      { n: "98%", l: "2024 pass rate", sub: "46 of 47 candidates" },
      { n: "963", l: "Active CRNFAs", sub: "End of 2024 · NASC" },
    ],
    factBox: {
      tone: "info",
      title: "CNOR and CRNFA are no longer a package deal",
      html:
        "On <strong>18 September 2023</strong> CCI announced it would stop honouring dual CNOR/CRNFA certification. Earning or renewing CRNFA no longer moves your CNOR onto the same schedule. You now meet and submit each credential's requirements separately — contact hours to CCI for CNOR, contact hours or points to NASC for CRNFA — and pay each organisation. NASC cut its one-year CRNFA extension fee from $195 to $100 for certificants caught with two renewals in the same year, and accepts a printout of the contact hours you already logged on the CCI website.",
    },
    coverImageLabel:
      "RN first assistant providing surgical site exposure during an open abdominal case",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for CRNFA certification?",
    prose: [
      "You are eligible if you hold a bachelor's degree or higher, current CNOR certification, an unrestricted RN licence, a certificate from an acceptable RNFA programme, and <strong>2,000 documented hours of RNFA practice</strong>. That is the RN pathway, and every item is a hard gate.",
      "APRNs follow a second pathway. A clinical nurse specialist, nurse practitioner, certified nurse midwife or certified registered nurse anesthetist needs a master's, doctoral or post-master's advanced-practice qualification plus national APRN certification — <strong>CNOR is not required on the APRN path</strong> — along with the same RNFA programme certificate and the same 2,000 hours.",
      "<strong>Definition — acceptable RNFA programme:</strong> a formal RN first assistant programme that meets the AORN Standards for RN First Assistant Education Programs. AORN sets the floor at the equivalent of <strong>six semester credit hours</strong> of post-basic RN education — three didactic and three clinical — with at least <strong>120 intraoperative first-assisting hours</strong> in the clinical component and full coverage of the <em>Core Curriculum for the RN First Assistant</em>, 6th edition. NASC lists <strong>16 acceptable programmes across 13 states</strong>; if yours is not listed, contact NASC before you apply.",
      "The hours rule has four parts that candidates routinely miss. All 2,000 hours must fall in the <strong>five years</strong> immediately before you apply. At least <strong>500</strong> must fall in the last <strong>two years</strong>. At least <strong>1,000</strong> must be first assisting during the intraoperative period. And while you are first assisting you cannot be filling any other perioperative role, so scrub time does not count.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You hold a bachelor's degree or higher in any field — the subject does not matter, but the degree does.",
      "Your CNOR is current, or you are nationally certified as an APRN and taking the advanced-practice route.",
      "You graduated from an RNFA programme on the NASC acceptable list and still have your certificate of completion.",
      "Your practice-hour log already carries 2,000 hours, with 500 in the last two years and 1,000 of intraoperative first assisting.",
      "Each log line records the date, the procedure type, the pre-, intra- and postoperative split, and the initials of the surgeon you assisted — NASC may contact your supervisor to verify it.",
      "You can name one complete surgical patient — preoperative through Phase 1 recovery — that you can write up in depth for the Clinical Case Study.",
    ],
  },

  // ---- BLUEPRINT (seven CRNFA Job Analysis domains; percentages from NASC handbook Table 1)
  blueprint: {
    heading: "What does the CRNFA Professional Portfolio cover?",
    prose: [
      "The portfolio is weighted across <strong>seven CRNFA Job Analysis domains</strong>, and <strong>Intraoperative Patient Care Interventions alone carries 35%</strong>. Professional Practice is second at 15%. Together with Infection Prevention and Perioperative Workplace Safety at 13% each, those four domains account for three-quarters of your score.",
      "Those seven domains are delivered through <strong>three studies and 109 activities</strong>. The <strong>Clinical Case Study</strong> is the bulk of the work: 29 preoperative activities (27% of the portfolio), 35 intraoperative (32%) and 12 postoperative (11%). The <strong>Workplace Safety Study</strong> adds 15 activities (14%) and the <strong>Professional Practice Study</strong> adds 18 (16%).",
      "The domain structure rests on the CRNFA Job Analysis — 104 task statements and 97 knowledge statements — first conducted by task force in September 2019 and repeated by survey in 2024. NASC has not yet published a revised domain table from the 2024 analysis, so the weights above are the current published figures. Verify them against the NASC handbook before you plan your time.",
    ],
    domains: [
      { label: "Intraoperative Patient Care Interventions", weight: 35 },
      { label: "Professional Practice", weight: 15 },
      { label: "Infection Prevention", weight: 13 },
      { label: "Perioperative Workplace Safety", weight: 13 },
      { label: "Preoperative Patient Assessment", weight: 10 },
      { label: "Emergency Situations", weight: 9 },
      { label: "Postoperative Patient Care Interventions", weight: 5 },
    ],
  },

  // ---- COST
  cost: {
    heading: "What does the CRNFA portfolio cost, and how do you renew it?",
    prose: [
      "CRNFA certification costs <strong>$550</strong> for new applicants and <strong>$275</strong> if you currently hold NASC's RNAS-C credential. There is no member or non-member rate — NASC is not a membership body, so the only discount is the RNAS-C one.",
      "Once NASC approves your application you pick a start date, and the clock is strict. You must <strong>start within two months</strong> of approval and <strong>submit within three months</strong> of your start date. Miss either deadline without contacting NASC and your entire fee is forfeited. A one-month extension costs $100 and you may take at most three.",
      "Results arrive within about a month of submission. If you fail, you get <strong>one</strong> revise-and-resubmit, due within 60 days for a $100 fee, reviewed by the same evaluators. Fail the revision and you reapply, pay again, and build a new portfolio around a <em>different</em> patient.",
    ],
    rows: [
      { k: "CRNFA Professional Portfolio — new applicant", v: "$550", highlight: true },
      { k: "CRNFA Professional Portfolio — current RNAS-C certificant", v: "$275" },
      { k: "One-month portfolio extension (max. 3)", v: "$100 each" },
      { k: "Revise and resubmit a failed portfolio", v: "$100" },
      { k: "Recertification — early (1 Jan – 1 Jul)", v: "$450" },
      { k: "Recertification — standard (2 Jul – 31 Dec)", v: "$500" },
      { k: "One-year recertification extension", v: "$100" },
      { k: "CRNFA Emeritus status (one-time)", v: "$125" },
    ],
    factBox: {
      tone: "success",
      title: "Renew early and the discount pays for the audit prep",
      html:
        "Applying between <strong>1 January and 1 July</strong> costs <strong>$450</strong> instead of <strong>$500</strong>. NASC randomly audits <strong>10%</strong> of recertification applications, so upload each CE certificate to your NASC library as you earn it rather than hunting for them in year five. You can log an entire year of AORN contact hours in one entry by attaching your AORN transcript, and you are not required to tag hours as intraoperative or perioperative.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "CRNFA is conferred for <strong>five years</strong>. You choose one of two renewal methods, and the requirement scales with how much you practised during the five-year accrual period — not with your seniority.",
      "<strong>Method 1 — contact hours.</strong> With <strong>1,000 or more</strong> RNFA clinical practice hours you need <strong>200 contact hours</strong>, of which 150 must be RNFA or perioperative related. With <strong>500 to 1,000</strong> practice hours the bar rises to <strong>300 contact hours</strong>, 225 of them RNFA or perioperative related. Hours must come from accredited providers and each certificate needs an accreditation statement or provider number.",
      "<strong>Method 2 — professional activity points.</strong> With 1,000 or more practice hours you need <strong>400 points</strong>; with 500 to 1,000 practice hours you need <strong>500 points</strong>. Points come from continuing education, academic study, precepting, mentoring, board and committee service, volunteering, publication and other perioperative certifications.",
      "Two safety valves exist. A <strong>one-year extension</strong> ($100) keeps the credential active while you finish accruing, available once every 10 years. <strong>CRNFA Emeritus — CRNFA (E)</strong> ($125, one-time) is for nurses leaving the RNFA role; retiring the credential is permanent, and returning would mean a fresh portfolio.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the CRNFA portfolio to pass?",
    prose: [
      "The published pass rate has climbed every year since the portfolio launched: <strong>84% in 2021</strong> (101 of 121), <strong>82% in 2022</strong> (47 of 57), <strong>93% in 2023</strong> (51 of 55) and <strong>98% in 2024</strong> (46 of 47). Only one candidate failed in 2024.",
      "Read those numbers with the eligibility gates in mind. A CRNFA candidate has already cleared a bachelor's degree, CNOR, an AORN-standard RNFA programme and 2,000 documented hours. The screening happens before the portfolio, not during it — so the pass rate measures a pre-filtered group, and cohorts are small.",
      "The portfolio is scored by <strong>two evaluators</strong> from a panel of active and emeritus CRNFAs, working from a detailed rubric. A third evaluator reviews if the first two disagree. The process is double-blind: evaluators do not see your identity and you do not see theirs. NASC does not publish a numeric cut score — the passing standard was set by a standard-setting committee working with a psychometrician.",
    ],
    rows: [
      { year: "2021", pct: 84 },
      { year: "2022", pct: 82 },
      { year: "2023", pct: 93 },
      { year: "2024", pct: 98 },
    ],
    target: 90,
    footnote:
      "Source: NASC CRNFA Statistics. 2025 is not shown — NASC has announced 39 new CRNFAs for 2025 but has not yet published the candidate count, so no 2025 pass rate exists. Candidate volumes are small (47–121 per year), so single-year swings are not trend evidence.",
    factBox: {
      tone: "info",
      title: "The real risk is the calendar, not the rubric",
      html:
        "The forfeiture rules bite harder than the scoring does. Miss your start date or your three-month submission deadline without contacting NASC and <strong>the entire fee is forfeited</strong> — you reapply from scratch. Extensions exist at $100 a month, capped at three. Book the writing time before you pay the $550, not after.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 12-week plan for the CRNFA Professional Portfolio",
    planSubtitle:
      "Portfolio activities drafted per week — the 109 required activities plus review passes.",
    prose: [
      "NASC gives you three months from your chosen start date, so plan in weeks, not months. The schedule below drafts all <strong>109 activities</strong> in eleven weeks and leaves week 12 for a rubric-led read-through, reference checks and submission.",
      "Front-load the Clinical Case Study. It is 76 of the 109 activities and 70% of the portfolio, and it depends on one patient you must choose early — pick a case with genuine preoperative, intraoperative and postoperative complexity, because a routine case gives you little to write about.",
      "Work in Microsoft Word throughout. NASC supplies the templates as Word documents and requires Word files back, so drafting in Pages or Google Docs adds a conversion step at the deadline.",
    ],
    weeks: [
      { n: 1, focus: "Read the NASC handbook; confirm eligibility; gather Core Curriculum 6th ed. and AORN Guidelines", qs: 4 },
      { n: 2, focus: "Select and de-identify the Clinical Case Study patient; map the case to the seven domains", qs: 6 },
      { n: 3, focus: "Case Study preoperative — focused assessment, history and physical, plan of care", qs: 10 },
      { n: 4, focus: "Case Study preoperative — patient education, Universal Protocol, team communication", qs: 10 },
      { n: 5, focus: "Case Study preoperative — finish and self-score all 29 preoperative activities", qs: 9 },
      { n: 6, focus: "Case Study intraoperative — exposure, tissue handling, cutting, hemostasis, suturing", qs: 12 },
      { n: 7, focus: "Case Study intraoperative — instruments and devices, wound management, positioning", qs: 12 },
      { n: 8, focus: "Case Study intraoperative — emergency situations and infection prevention within the case", qs: 11 },
      { n: 9, focus: "Case Study postoperative — PACU handover, postoperative orders, drains, discharge planning", qs: 12 },
      { n: 10, focus: "Workplace Safety Study — sharps, smoke evacuation, radiation, ergonomics, hazardous agents", qs: 15 },
      { n: 11, focus: "Professional Practice Study — scope, ethics, evidence-based practice, advocacy, accountability", qs: 18 },
      { n: 12, focus: "Full read-through against the rubric; verify every citation; Word formatting; submit", qs: 10 },
    ],
    tipsHeading: "Where CRNFA candidates lose ground — and how to avoid it",
    tips: [
      {
        kicker: "Pick the case before you pay",
        text:
          "The Clinical Case Study is 70% of the portfolio and hinges on one patient. Choose a case you followed from preoperative assessment through Phase 1 recovery, with something worth analysing. If you fail twice you must start over with a different patient — so choose well the first time.",
      },
      {
        kicker: "Cite AORN, not local policy",
        text:
          "The portfolio asks you to justify practice, and NASC supplies a recommended reference list. Ground your rationales in the Core Curriculum for the RN First Assistant and the AORN Guidelines for Perioperative Practice rather than your facility's protocol, which evaluators cannot verify.",
      },
      {
        kicker: "Do not treat Workplace Safety as filler",
        text:
          "Perioperative Workplace Safety and Infection Prevention are 13% of the portfolio each — 26% combined, more than Preoperative Assessment and Postoperative Interventions put together. The 15 Workplace Safety activities deserve a dedicated week.",
      },
      {
        kicker: "Log hours the way NASC reads them",
        text:
          "Every log line needs the date, the procedure type, the pre-, intra- and postoperative time split, and the surgeon's initials. NASC may verify your licence through Nursys, your CNOR through CCI, and your hours by contacting your supervisor.",
      },
      {
        kicker: "Start your renewal file on day one",
        text:
          "Your five-year accrual period starts immediately, and CNOR no longer renews alongside CRNFA. Keep one log for CCI and one for NASC from the beginning, and upload CE certificates to your NASC library as you go — 10% of renewals are audited.",
      },
    ],
  },

  // ---- SAMPLE ITEM (NursPrep-written self-check; CRNFA has no exam)
  sample: {
    heading: "What does CRNFA-level clinical reasoning look like?",
    prose: [
      "CRNFA has no exam, so NASC publishes no official items. The self-check below was written by NursPrep to mirror the intraoperative judgement the Clinical Case Study asks you to justify in writing — the kind of decision you will have to defend with a cited rationale, not just make at the field.",
      "Try it, then read the rationale and notice its structure: the action, the reason the alternatives are inferior, and the standard behind the choice. That is the shape a portfolio answer needs.",
    ],
    q: {
      scenario:
        "You are first assisting an open right hemicolectomy. While retracting the transverse colon for exposure, brisk bleeding begins from a small vessel at the base of the mobilised mesentery. The surgeon is working two-handed at the anastomosis and asks you to control it. Pooled blood is obscuring the field and the scrub person has begun the closing count.",
      stem: "What should the RN first assistant do first?",
      options: [
        "Pack the mesentery with a large lap sponge and hold sustained pressure until the surgeon is free.",
        "Suction the pooled blood, identify the bleeding vessel, and apply direct pressure or a clamp at that point.",
        "Sweep the monopolar electrode across the bleeding area until the field appears dry.",
        "Ask the scrub person to suspend the count until the bleeding is controlled.",
      ],
      correct: 1,
      rationale:
        "Hemostasis starts with visualisation. Clearing the pooled blood lets you find the source and apply pressure or a clamp to that specific vessel, which stops the loss without injuring surrounding tissue. Blind lap-sponge packing may slow the bleeding but leaves the source unidentified and can resume the moment pressure comes off. Sweeping electrosurgical activation across an obscured, wet field is unreliable and risks thermal injury to bowel and mesenteric vessels. The surgical count is a patient-safety process for preventing retained surgical items; it is not suspended for a bleed you can control, and any interruption to it must be documented.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key CRNFA and RNFA terms every candidate should know",
    prose: [
      "These terms appear across the NASC handbook, the AORN education standards and the portfolio itself. Several are routinely confused with one another — RNFA against CRNFA, and CRNFA against RNAS-C most of all.",
    ],
    rows: [
      { term: "RNFA", defn: "Registered Nurse First Assistant — a role, not a credential. A perioperative RN, or an APRN, functioning as first assistant during operative and invasive procedures. Recognised in the nurse practice acts of all 50 states.", domain: "Role" },
      { term: "CRNFA", defn: "Certified Registered Nurse First Assistant — the NASC certification that documents professional achievement in the RNFA role. Earned by portfolio, not by exam.", domain: "Credential" },
      { term: "NASC", defn: "National Assistant at Surgery Certification — the body that has awarded CRNFA since 1 January 2019, when the credential transferred from CCI. Also awards RNAS-C.", domain: "Credential" },
      { term: "RNAS-C", defn: "Registered Nurse Assistant at Surgery — Certified. NASC's exam-based first-assisting credential: 150 items in 3 hours, 70% to pass, 120 intraoperative hours, no degree requirement.", domain: "Credential" },
      { term: "CNOR", defn: "Certified Perioperative Nurse, awarded by CCI. A prerequisite for CRNFA on the RN pathway and an admission requirement for AORN-standard RNFA programmes.", domain: "Credential" },
      { term: "ABSNC", defn: "Accreditation Board for Specialty Nursing Certification — the accrediting body for nursing certification programmes and the only one that accredits portfolio-based credentials. Accredited CRNFA in October 2024.", domain: "Credential" },
      { term: "CRNFA Professional Portfolio", defn: "The assessment that replaced the CRNFA exam. 109 activities across three studies, submitted in Microsoft Word within three months of your chosen start date.", domain: "Portfolio" },
      { term: "Clinical Case Study", defn: "The largest of the three portfolio studies — 76 activities and 70% of the portfolio — built around one surgical patient followed from preoperative assessment through Phase 1 recovery.", domain: "Portfolio" },
      { term: "Intraoperative first-assisting hours", defn: "AORN defines these as the time from incision until the dressing is applied. At least 1,000 of your 2,000 CRNFA hours must be first assisting in the intraoperative period.", domain: "Eligibility" },
      { term: "Acceptable RNFA programme", defn: "A formal RNFA programme meeting AORN standards — six semester credit hours minimum, at least 120 intraoperative first-assisting hours, full Core Curriculum coverage. NASC lists 16 across 13 states.", domain: "Eligibility" },
      { term: "Core Curriculum for the RN First Assistant", defn: "The AORN text, now in its 6th edition (2025), that every RNFA education programme must cover and that NASC recommends as a portfolio reference.", domain: "Eligibility" },
      { term: "Accrual period", defn: "The five-year window in which you must earn your recertification contact hours or points and your practice hours. It ends the year before your recertification year.", domain: "Renewal" },
      { term: "Recertification year", defn: "The calendar year your certification expires, during which you may submit your recertification application at any point. Applying by 1 July saves $50.", domain: "Renewal" },
      { term: "Professional activity points", defn: "The alternative to contact hours for renewal — 400 points with 1,000+ practice hours, 500 points below that. Earned through CE, academic study, precepting, service, volunteering and publication.", domain: "Renewal" },
      { term: "CRNFA Emeritus — CRNFA (E)", defn: "A permanent retired designation ($125 one-time) for CRNFAs leaving the RNFA role. It cannot be reactivated; returning would require a new portfolio.", domain: "Renewal" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "CRNFA vs. RNAS-C, CNOR and the other CCI credentials",
    prose: [
      "CRNFA is the senior first-assisting credential for nurses, but it is not the only route and it is not the right first step for everyone. The closest comparison is NASC's own RNAS-C, which covers the same role with a lower entry bar and an exam instead of a portfolio.",
      "The rest of the table is CCI's perioperative ladder. CNOR is the prerequisite that connects the two organisations — you cannot take the CRNFA RN pathway without it.",
    ],
    rows: [
      { row: "CRNFA", highlight: true, body: "NASC", scope: "RN first assisting — portfolio-assessed, 2,000 hours", who: "Experienced RNFAs with a bachelor's degree and current CNOR" },
      { row: "RNAS-C", body: "NASC", scope: "RN first assisting — 150-item exam, 120 intraoperative hours", who: "RNFAs earlier in the role, or without a bachelor's degree" },
      { row: "CNOR", body: "CCI", scope: "Perioperative RN practice across the surgical journey", who: "OR staff RNs — and anyone heading for CRNFA" },
      { row: "CFPN", body: "CCI", scope: "Foundational entry-level perioperative practice", who: "New OR RNs who do not yet meet CNOR's experience bar" },
      { row: "CNAMB", body: "CCI", scope: "Ambulatory perioperative practice — ASC-specific", who: "RNs working exclusively in ambulatory surgery centres" },
      { row: "CSSL", body: "CCI", scope: "Surgical services leadership (formerly CSSM)", who: "OR managers and directors moving into formal leadership" },
    ],
    closingProse:
      "<strong>The usual ladder is CFPN → CNOR → RNAS-C → CRNFA.</strong> Take <strong>RNAS-C</strong> first if you are newer to first assisting, have 120 intraoperative hours rather than 2,000, or do not hold a bachelor's degree — and note that holding RNAS-C later cuts the CRNFA fee from $550 to $275. Go straight to <strong>CRNFA</strong> if you already have the degree, the CNOR and the hours. Choose <strong>CSSL</strong> instead if your next move is management rather than the field.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about CRNFA certification",
    items: [
      { q: "Who awards CRNFA certification — CCI or NASC?", a: "NASC, the National Assistant at Surgery Certification, awards CRNFA. The credential transferred from the Competency & Credentialing Institute (CCI) on 1 January 2019, so any guidance naming CCI as the awarding body is out of date." },
      { q: "Is there a CRNFA exam?", a: "No. NASC discontinued the CRNFA exam at the end of 2020. Certification is earned by completing the CRNFA Professional Portfolio, which opened for applications in February 2021." },
      { q: "What is the difference between RNFA and CRNFA?", a: "RNFA is the role — a perioperative RN or APRN who first assists at surgery. CRNFA is the certification that validates practice in that role. You work as an RNFA first, then certify as a CRNFA." },
      { q: "Do I need CNOR to become a CRNFA?", a: "On the RN pathway, yes — current CNOR certification is required. APRNs follow a separate pathway that requires national APRN certification instead of CNOR." },
      { q: "How many hours do I need for CRNFA certification?", a: "2,000 documented RNFA hours. All must fall within the five years before you apply, at least 500 within the last two years, and at least 1,000 must be first assisting during the intraoperative period." },
      { q: "How much does CRNFA certification cost?", a: "$550 for new applicants, or $275 if you currently hold NASC's RNAS-C credential. There is no member or non-member pricing. Recertification costs $450 before 1 July and $500 after." },
      { q: "What is the CRNFA pass rate?", a: "NASC reported a 98% pass rate in 2024 (46 of 47 candidates), up from 93% in 2023, 82% in 2022 and 84% in 2021. Cohorts are small, and candidates are already filtered by strict eligibility gates." },
      { q: "How long do I have to complete the CRNFA portfolio?", a: "You must select a start date within two months of your application being approved, then submit within three months of that start date. One-month extensions cost $100 each, up to three." },
      { q: "What happens if I fail the CRNFA portfolio?", a: "You get one chance to revise and resubmit within 60 days for a $100 fee, reviewed by the same evaluators. If the revision does not pass, you reapply, pay the full fee again, and build a new portfolio around a different patient." },
      { q: "How long does CRNFA certification last?", a: "Five years. Renew by contact hours (200 or 300, depending on your practice hours) or by professional activity points (400 or 500). A one-year extension is available once every 10 years for $100." },
      { q: "Can I still renew CNOR and CRNFA together?", a: "No. CCI stopped honouring dual CNOR/CRNFA certification on 18 September 2023. You now meet and submit each credential's requirements separately and pay both CCI and NASC." },
      { q: "Should I take RNAS-C or CRNFA?", a: "Take RNAS-C if you have 120 intraoperative first-assisting hours, no bachelor's degree, or prefer an exam — it costs $425 and is 150 items over 3 hours. Take CRNFA once you have the degree, CNOR and 2,000 hours. Holding RNAS-C reduces the CRNFA fee to $275." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources for CRNFA requirements",
    prose: [
      "Every figure on this page comes from the primary sources below. Fees, portfolio structure and recertification rules change on NASC's revision cycle, and the current candidate handbook carries no visible revision date — verify numeric facts against NASC directly before you apply or pay.",
    ],
    list: [
      "NASC — CRNFA Application and Candidate Handbook (RN and APRN eligibility, fees, practice-hour rules): https://nascertification.com/crnfa/application-and-candidate-handbook/",
      "NASC — CRNFA Certification/Recertification Candidate Handbook (PDF; job-analysis domains, portfolio content outline, deadlines, evaluation, failure pathway): https://nascertification.com/wp-content/uploads/2022/03/CRNFA-Certification_Recertification-Candidate-Handbook.pdf",
      "NASC — About the CRNFA Professional Portfolio (three studies, development, double-blind evaluation): https://nascertification.com/crnfa/about-the-crnfa-professional-portfolio/",
      "NASC — CRNFA Statistics (2021–2024 pass rates and certificant counts): https://nascertification.com/crnfa/crnfa-statistics/",
      "NASC — CRNFA Recertification (five-year cycle, contact hours and points, fees, extension, emeritus, 10% audit): https://nascertification.com/crnfa/recertification/",
      "NASC — FAQs (CRNFA exam discontinued end of 2020; CNOR/CRNFA dual certification ended 18 September 2023): https://nascertification.com/resources/faqs/",
      "NASC — Acceptable RNFA Programs (16 programmes across 13 states): https://nascertification.com/resources/acceptable-rnfa-programs/",
      "NASC — CRNFA Achieves ABSNC Accreditation, 16 October 2024: https://nascertification.com/news/crnfa-achieves-absnc-accreditation/",
      "NASC — About the RNAS-C Exam (150 items, 3 hours, 70% pass, Prolydian): https://nascertification.com/rnas-c/about-the-rnas-c-exam/",
      "AORN — RN First Assistant Resources (CCI-to-NASC transfer effective 1 January 2019; RNFA role definition): https://www.aorn.org/guidelines-resources/clinical-resources/rn-first-assistant-resources",
      "AORN — Standards for RN First Assistant Education Programs 2025–2026 (PDF; six semester credit hours, 120 intraoperative first-assisting hours, CNOR admission requirement): https://www.aorn.org/docs/default-source/guidelines-resources/rnfa-education-standards_2025-2026.pdf",
      "CCI — CNOR certification (the prerequisite credential): https://www.cc-institute.org/certify/cnor/",
      "CCI — Credential Statistics (confirms CRNFA is no longer a CCI credential; CNOR 2025 first-time pass rate 68.0%): https://www.cc-institute.org/credentials/credential-statistics/",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to plan your CRNFA portfolio?",
  ctaProse:
    "Start with a 25-question diagnostic mapped to the seven CRNFA job-analysis domains — heaviest on intraoperative interventions, professional practice and infection prevention. Free to start, no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See the CRNFA question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "CNOR",
      title: "CNOR to CRNFA: mapping the first-assisting pathway",
      blurb: "What changes when you move from circulating to first assisting — the degree gate, the 2,000-hour log, and why CNOR no longer renews alongside CRNFA.",
      href: "/certifications/cnor/",
      bg: "#163bf3",
    },
    {
      kicker: "Comparison",
      tag: "RNAS-C",
      title: "CRNFA vs RNAS-C: which NASC credential should you take first?",
      blurb: "120 hours and an exam, or 2,000 hours and a portfolio — how the two NASC first-assisting credentials differ on cost, entry bar and assessment.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Study guide",
      tag: "Portfolio",
      title: "Choosing the patient for your CRNFA Clinical Case Study",
      blurb: "The case study is 70% of the portfolio and rests on one patient. What makes a case rich enough to carry 76 activities across three phases of care.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
