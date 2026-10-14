// AMB-BC exam detail page — structured data.
// Sourced from Content/AMB-BC_research.json (verified against the ANCC AMB-BC
// product page, the current Test Content Outline effective 2021-05-01 last
// updated 2025-09-03, the upcoming Test Content Outline effective 2026-09-11,
// the ANCC 2025 Certification Data PDF, the ANCC Test Scores & Retest
// Application Procedures page, the AAACN RN-BC -> AMB-BC rename announcement,
// and the AAACN Ambulatory Care Nursing Certification Fact Sheet — accessed
// 2026-05-20).
// Lives at /certifications/amb-bc/ via the paginated template.
//
// NOTE on canonical question count: src/_data/certs.js lists 175 questions
// (matching ANCC's legacy 2017 outline where the exam was 175 items / 150
// scored). Both the current ANCC TCO (effective 2021-05-01) and the upcoming
// TCO (effective 2026-09-11) state 150 items / 125 scored / 25 pretest. Per
// the project canonical-source rule, certs.js wins for the hero pill; the
// ANCC primary-source 150/125/25 is surfaced explicitly in at-a-glance and
// in the blueprint section. Discrepancy is flagged in research.json for
// editorial review.

module.exports = {
  code: "AMB-BC",
  name: "Ambulatory Care Nursing — Board Certified",
  body: "ANCC",
  cat: "community",
  catLabel: "Community & Ambulatory",
  updated: "2026-05",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title:
      "AMB-BC Certification Guide: Eligibility, Exam & Renewal | NursPrep",
    description:
      "Everything ambulatory RNs need on the ANCC AMB-BC — eligibility, blueprint, $295 ANA fee, 77% pass rate, 5-year renewal, and a 10-week study plan.",
    ogTitle:
      "AMB-BC Certification Guide 2026 — Ambulatory Care Nurse Board Certified",
    ogDescription:
      "ANCC eligibility (2,000 ambulatory hours + 30 CE), four-domain blueprint, $295 ANA-member fee, 77% pass rate, 5-year renewal, and the Sep 11, 2026 TCO change.",
  },

  // ---- HERO
  lede:
    "AMB-BC — Ambulatory Care Nurse Board Certified — is the ANCC credential for registered nurses practicing in ambulatory, outpatient, clinic, primary care, telehealth, and specialty-clinic settings. The credential is issued by the <strong>American Nurses Credentialing Center (ANCC)</strong>, developed in partnership with the <strong>American Academy of Ambulatory Care Nursing (AAACN)</strong>, and was previously named RN-BC before ANCC renamed it AMB-BC.",
  heroPills: [
    { k: "Questions", v: "175 items" },
    { k: "Duration", v: "3 hours" },
    { k: "Renewal", v: "5 years" },
    { k: "Pass rate", v: "77%" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "American Nurses Credentialing Center (ANCC)" },
    { k: "Format", v: "Prometric computer-based testing (year-round, 120-day window)" },
    { k: "Total items", v: "150 — 125 scored + 25 pretest" },
    { k: "Time limit", v: "3 hours (continuous)" },
    { k: "Eligibility", v: "Active RN license + 2 yrs RN + 2,000 ambulatory hours + 30 CE hours" },
    { k: "Fee (ANA / AAACN member)", v: "$295 · non-member $395" },
    { k: "Retake fee", v: "$270 flat (60-day wait)" },
    { k: "Renewal cycle", v: "5 years — Practice + PD, or PD + retest" },
  ],
  heroCardFoot:
    "Verified against the ANCC AMB-BC product page, the ANCC 2025 Certification Data PDF, and the current ANCC Test Content Outline (last updated 2025-09-03)",

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
    { id: "compare", label: "AMB-BC vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "AMB-BC certification at a glance",
    prose: [
      "AMB-BC — Ambulatory Care Nurse Board Certified — is the RN-level board credential for nurses practicing across the ambulatory care continuum: primary care, specialty clinics, outpatient infusion, ambulatory surgery, telehealth triage, occupational health, college health, and federally qualified health centers (FQHCs). The credential is issued by the <strong>American Nurses Credentialing Center (ANCC)</strong>, the credentialing arm of the American Nurses Association (ANA), and was developed with the <strong>American Academy of Ambulatory Care Nursing (AAACN)</strong>. The first ANCC Ambulatory Care Nursing exam was administered in <strong>October 1999</strong> with <strong>92 nurses</strong> in the inaugural cohort.",
      "AMB-BC was previously known as <strong>RN-BC</strong>. ANCC's Commission on Board Certification updated specialty acronyms to better distinguish each specialty practice, so the credential now appears as AMB-BC — the exam, eligibility, and renewal rules carried over unchanged. As of <strong>December 31, 2025, 7,956 nurses held the AMB-BC credential</strong>, with 1,209 first-time passers and 618 renewals in 2025 (ANCC 2025 Certification Data).",
    ],
    stats: [
      { n: "150", l: "Total items", sub: "125 scored · 25 pretest" },
      { n: "3 hrs", l: "Time limit", sub: "Continuous, one form" },
      { n: "77%", l: "2025 pass rate", sub: "1,209 of 1,562 first-time takers" },
      { n: "5 yrs", l: "Renewal cycle", sub: "Practice + PD, or PD + retest" },
    ],
    factBox: {
      tone: "info",
      title: "RN-BC is now AMB-BC — same credential, new acronym",
      html:
        "If you trained against an older study guide that referenced <strong>RN-BC (Ambulatory Care)</strong>, that is the same credential. ANCC's Commission on Board Certification renamed the acronym to <strong>AMB-BC</strong> to disambiguate ambulatory care from the other RN-BC specialties. Eligibility, the exam, the fee structure, and the 5-year renewal cycle did not change. Older holders may still display RN-BC on legacy badges; new candidates earn the AMB-BC acronym.",
    },
    coverImageLabel:
      "Ambulatory RN performing a telehealth triage call in a primary-care clinic",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the AMB-BC exam?",
    prose: [
      "Yes — if you hold an <strong>active RN license</strong> in the United States, a US territory, or the professional legally recognized equivalent in another country, <em>and</em> you meet ANCC's three additional rules. Unlike credentials where hours are recommended but not enforced, ANCC enforces these as hard application gates — applicants who fall short must accumulate the hours and CE before applying.",
      "The four eligibility rules are: (1) active RN license, (2) the equivalent of <strong>2 years full-time RN practice</strong>, (3) a minimum of <strong>2,000 hours of clinical practice in ambulatory care nursing within the last 3 years</strong>, and (4) <strong>30 hours of continuing education in ambulatory care nursing within the last 3 years</strong>. ANCC accepts educators, administrators, and other non-bedside roles if the role aligns with the Test Content Outline — if your role fits the TCO, apply and let ANCC evaluate your documentation.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You staff an outpatient primary-care or specialty clinic and own the full visit — rooming, assessment, point-of-care testing, patient education, telephone triage, and care-plan follow-up.",
      "You work in a federally qualified health center (FQHC), community clinic, college health, occupational health, or rural health clinic where ambulatory RN practice spans triage, teaching, and care coordination.",
      "Your role includes telephone or video triage, secure-message triage, or ambulatory care coordination — AMB-BC's blueprint folds telehealth into the Assess and Evaluate domain.",
      "You provide ambulatory infusion, ambulatory surgical preop/postop care, or outpatient procedural nursing where day-of-visit assessment, education, and clinical-tasks competence drive your day.",
      "Your last three years of timesheets show at least 2,000 ambulatory practice hours and your CE transcript holds 30 hours of ambulatory care, telehealth, or care-coordination content — clinical inpatient med-surg CE does not count toward this gate.",
    ],
  },

  // ---- BLUEPRINT (weights = current ANCC TCO, effective 2021-05-01, last updated 2025-09-03)
  blueprint: {
    heading: "AMB-BC exam blueprint — four domains (current TCO)",
    prose: [
      "ANCC's current Test Content Outline splits 100% of scored content across four domains. <strong>Assess and Evaluate is the heaviest domain at 40%</strong> — half of the 125 scored items live in assessment, triage (in-person, virtual, telehealth), medication management, and clinical data interpretation. Professional Role carries 22%, Education 19%, and Plan and Implement 18%. Together that footprint rewards bedside ambulatory experience plus comfort with scope-of-practice, fiscal-health, and patient-education content.",
      "Effective <strong>September 11, 2026</strong> ANCC publishes a new TCO. The new outline keeps the 150-item / 125-scored / 25-pretest structure and the four-domain footprint, but renames the domains (Assessment and Diagnosis · Planning and Implementation · Evaluation and Modification · Patient and Community Education) and shifts weights: Assess and Evaluate to 41%, Plan and Implement to 16%, Professional Role to 24%, Education unchanged at 19%. Candidates testing on or after September 11, 2026 should study against the new TCO; candidates testing on or before August 27, 2026 should use the current outline. ANCC suspends scheduling Aug 28 – Sep 10, 2026 to swap the exam.",
    ],
    domains: [
      { label: "Assess and Evaluate (assessment, triage, medication management, clinical data interpretation)", weight: 40 },
      { label: "Plan and Implement (care coordination, disease-specific interventions, clinical tasks)", weight: 18 },
      { label: "Professional Role (scope and standards, professional development, fiscal health, advocacy, leadership, safety)", weight: 22 },
      { label: "Education (modes of delivery, diverse populations, communication barriers, professional communication)", weight: 19 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and the 2026 TCO change",
    prose: [
      "ANCC delivers AMB-BC through <strong>Prometric computer-based testing centers</strong> year-round, with a <strong>120-day window</strong> to schedule after ANCC issues your Authorization to Test. Apply online through the ANCC certification portal, then schedule directly with Prometric using your certification number. The exam is <strong>3 hours</strong> for 150 items (125 scored + 25 pretest), and ANCC reports pass/fail with diagnostic feedback for each content area; third-party prep vendors describe a scaled score of 350 on a 0–500 scale as the passing mark.",
    ],
    rows: [
      { k: "Initial certification — ANA member", v: "$295" },
      { k: "Initial certification — AAACN member", v: "$295" },
      { k: "Initial certification — non-member", v: "$395", highlight: true },
      { k: "Retake fee (no discounts apply)", v: "$270" },
      { k: "Renewal — ANA member", v: "as low as $250" },
      { k: "Renewal — AAACN member", v: "$295" },
      { k: "Renewal — non-member", v: "$350" },
      { k: "Test format", v: "150 items, 3-hour Prometric session" },
    ],
    factBox: {
      tone: "success",
      title: "Plan around the September 11, 2026 TCO change",
      html:
        "ANCC publishes an <strong>updated Test Content Outline and Reference List effective September 11, 2026</strong>. ANCC suspends scheduling for <strong>7 business days (Aug 28 – Sep 10, 2026)</strong> to swap the exam. You can test <strong>BEFORE August 28, 2026</strong> or <strong>AFTER September 10, 2026</strong>, but not in between. If your study materials are dated, confirm which outline they target before you sit. The new TCO keeps 150 items / 125 scored / 25 pretest and a four-domain footprint, but renames domains and shifts weights (Assess and Evaluate to 41%, Plan and Implement to 16%, Professional Role to 24%, Education unchanged at 19%).",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "AMB-BC certification is valid for <strong>five years</strong>. ANCC offers two renewal pathways. <strong>Option A — Professional Development plus Practice Hours:</strong> hold a current active RN license + current ANCC certification, complete the certification specialty's professional development requirements within the 5-year cycle, document <strong>1,000 practice hours</strong> in the certification role and specialty within the 5-year cycle, and pay the renewal fee. <strong>Option B — Professional Development plus Testing:</strong> same prerequisites minus the practice-hours requirement, but the candidate must pass the current AMB-BC exam.",
      "Renewal applications may be submitted up to <strong>12 months prior</strong> to the certification expiration date. Failing the renewal exam under Option B invalidates the certification. Track professional development through the ANCC online account before starting the renewal application — stored activities transfer directly to the online renewal form.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the AMB-BC exam?",
    prose: [
      "ANCC reported that <strong>1,209 of 1,562 first-time test takers passed the AMB-BC exam in 2025</strong> — a <strong>77% pass rate</strong> (ANCC 2025 Certification Data, page 2). That is consistent with the credential's historical pattern: AAACN's published fact sheet reported a <strong>76% pass rate in 2016</strong>, when 3,268 nurses held the credential. By the end of 2025 the active certificant base had grown to 7,956 — a steady, mid-single-digit annual growth pattern reflecting ambulatory care's expanding share of US nursing practice.",
      "Candidates who fall short of 77% most often do so by under-studying Professional Role (22%) and Education (19%) — domains that feel administrative compared with hands-on assessment but together carry over 40% of the scored items. ANCC reports pass/fail with diagnostic feedback by content area; if you fail, the diagnostic report tells you which domain to rebuild before retesting after the mandatory 60-day wait.",
    ],
    rows: [
      { year: "2016", pct: 76 },
      { year: "2025", pct: 77 },
    ],
    target: 80,
    footnote:
      "Pass rates are first-time test takers, reported in the AAACN Ambulatory Care Nursing Fact Sheet (2016) and the ANCC 2025 Certification Data PDF (2025). Years between are not published as separate snapshots; the credential's mid-to-high-70s first-time pass rate has been stable across the decade.",
    factBox: {
      tone: "info",
      title: "How ANCC scores the AMB-BC",
      html:
        "ANCC reports the exam as <strong>pass / fail</strong> with a <strong>diagnostic content-area feedback report</strong> for failing candidates. Third-party prep vendors widely describe a <strong>scaled score of 350 on a 0–500 scale</strong> as the passing point; verify against your official ANCC score report. Of the 150 items on the test, <strong>125 are scored and 25 are pretest items</strong> being evaluated for future use — candidates cannot tell which is which, so answer every item.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 10-week AMB-BC study plan",
    prose: [
      "A structured 10-week plan suits most working ambulatory RNs — about <strong>80 to 110 total study hours</strong> across the four blueprint domains. Practice-question volume ramps through weeks 2–8 and peaks in week 9 with a full-length timed 150-item exam under real conditions; week 10 is for targeted review of weak domains, logistics, and a rest day. Aim for <strong>400 to 700 practice items</strong> total before test day, anchored on the AAACN Core Curriculum, the ANCC Sample Test Questions, and the AAACN Review Course materials.",
    ],
    weeks: [
      { n: 1, focus: "Read ANCC's current AMB-BC Test Content Outline + Reference List + baseline diagnostic exam", qs: 30 },
      { n: 2, focus: "Assess and Evaluate I — disease process, medication management, preventative care, expected outcomes", qs: 50 },
      { n: 3, focus: "Assess and Evaluate II — triage (in-person, virtual, telehealth), physical/psychosocial assessment, clinical data interpretation", qs: 50 },
      { n: 4, focus: "Plan and Implement — care coordination, disease-specific interventions, clinical tasks (POCT, wound care, procedures)", qs: 40 },
      { n: 5, focus: "Professional Role I — ANA + AAACN Scope and Standards, scope-of-practice, professional development", qs: 40 },
      { n: 6, focus: "Professional Role II — fiscal health (reimbursement, billable services, prior auth), leadership, safety and security", qs: 40 },
      { n: 7, focus: "Education — modes of delivery, diverse populations, health literacy, communication barriers, teach-back", qs: 40 },
      { n: 8, focus: "Telehealth deep dive + AAACN Core Curriculum review chapters + targeted weak-domain drills", qs: 50 },
      { n: 9, focus: "Full-length timed practice exam (150 items in 3 hours) + error-log review", qs: 150 },
      { n: 10, focus: "Targeted review of weak domains, rest day, logistics, test day", qs: 30 },
    ],
    tipsHeading: "How AMB-BC candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Don't under-study Professional Role",
        text:
          "Professional Role carries 22% of the scored items (24% in the new 2026 TCO). Scope-of-practice, fiscal health (reimbursement, prior authorization, billable services), advocacy, and safety/risk-management content feel administrative compared with hands-on assessment, but they are reliably tested. Read the ANA + AAACN Scope and Standards documents end-to-end at least once.",
      },
      {
        kicker: "Pace 125 scored items in 3 hours",
        text:
          "That averages roughly 72 seconds per item. Take at least one full-length timed 150-item practice exam under real conditions before test day so you know whether you naturally run fast or slow on ambulatory content. Twenty-five of the items are pretest — do not second-guess oddly worded items, just answer and move on.",
      },
      {
        kicker: "Lean on the AAACN Core Curriculum",
        text:
          "ANCC's Reference List points to the <em>Core Curriculum for Ambulatory Care Nursing</em> as the anchor text. Chapters on telephone triage, care coordination, patient education, and ambulatory-specific clinical workflows map directly onto the four blueprint domains. AAACN members get the Core Curriculum at a discount.",
      },
      {
        kicker: "Don't over-index on inpatient med-surg content",
        text:
          "AMB-BC is the outpatient counterpart of MEDSURG-BC. Items center on clinic workflows, ambulatory triage, day-of-visit assessment, and care coordination — not multi-day inpatient management. If most of your CE has been hospital-based, intentionally pivot week 4 onward to clinic-style case scenarios.",
      },
      {
        kicker: "Plan around the September 11, 2026 TCO swap",
        text:
          "ANCC swaps the Test Content Outline on September 11, 2026 with a 7-business-day scheduling suspension (Aug 28 – Sep 10, 2026). If your test date falls on or after September 11, 2026, study against the new outline (Assessment and Diagnosis · Planning and Implementation · Evaluation and Modification · Patient and Community Education) with shifted weights. Older study guides may still reference the legacy 175-item / 5-domain outline from 2017 — that outline is retired.",
      },
    ],
  },

  // ---- SAMPLE QUESTION
  sample: {
    heading: "Sample AMB-BC question",
    prose: [
      "This item mirrors the ANCC AMB-BC format: a short ambulatory clinical stem with four plausibly-correct options where only one is best. Telephone triage sits inside the Assess and Evaluate domain — the largest scored block on the test — so triage-style stems are high-yield practice.",
    ],
    q: {
      scenario:
        "A 58-year-old man with a history of type 2 diabetes and hypertension calls the primary-care clinic at 3 PM. He reports a dull, pressure-like chest discomfort that started 90 minutes ago while gardening, rates the discomfort 4/10, denies shortness of breath but is mildly nauseated, and says the discomfort has not resolved with rest. He took one of his wife's nitroglycerin tablets without relief. His last HbA1c was 8.1%; he is on metformin, lisinopril, and atorvastatin.",
      stem: "What is the ambulatory care RN's most appropriate triage disposition?",
      options: [
        "Schedule a same-day clinic appointment within the next 4 hours and instruct him to drive himself in.",
        "Instruct him to call 911 immediately, stay on the line, and chew an adult-strength aspirin if he is not allergic.",
        "Advise him to take his own nitroglycerin (after the clinic provider prescribes it) and re-assess in 30 minutes.",
        "Tell him to come to the clinic now and ask the front desk to walk him back as soon as he arrives.",
      ],
      correct: 1,
      rationale:
        "The presentation — pressure-like chest discomfort lasting more than 30 minutes, unresolved with rest, in a 58-year-old with diabetes and hypertension — meets the ambulatory triage red-flag criteria for acute coronary syndrome. The RN's correct action is to activate EMS (911), keep the caller on the line, and instruct the patient to chew an adult-strength aspirin if no contraindication. Driving the patient or routing him to clinic delays definitive care and exposes him to arrest in transit. Borrowing a family member's nitroglycerin is not safe practice. The AMB-BC blueprint places telephone triage inside domain I (Assess and Evaluate) — items frequently test the difference between a same-day clinic appointment and a 911 activation.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key AMB-BC terms every candidate should know",
    prose: [
      "These terms surface in most AMB-BC exam items. Review them until the definitions feel automatic — scenario stems hinge on whether the candidate can name which framework applies (telephone triage red flags, motivational interviewing, teach-back, scope-of-practice delegation rules, population health management).",
    ],
    rows: [
      { term: "Ambulatory care nursing", defn: "RN practice in outpatient settings — primary care, specialty clinics, ambulatory surgery, outpatient infusion, urgent care, FQHCs, occupational health, college health, and telehealth — characterized by brief visits, high patient volume, and a focus on prevention, education, and care coordination.", domain: "Foundations" },
      { term: "Telephone triage", defn: "Structured nursing decision-making conducted by phone (or virtual platform) to determine the urgency of a patient's complaint and the appropriate disposition: 911, ED, same-day clinic, scheduled appointment, or self-care advice. Sits inside domain I (Assess and Evaluate).", domain: "Assess and Evaluate" },
      { term: "Care coordination", defn: "Deliberate organization of patient-care activities across providers, settings, and time to facilitate appropriate delivery of health-care services — including referrals, prior authorization, transitions of care, and population-management workflows. Sits inside domain II (Plan and Implement).", domain: "Plan and Implement" },
      { term: "Motivational interviewing", defn: "Patient-centered counseling technique that elicits the patient's own reasons for behavior change — used in ambulatory smoking cessation, weight management, medication adherence, and chronic-disease self-management coaching.", domain: "Education" },
      { term: "Teach-back method", defn: "Patient-education technique in which the RN asks the patient to repeat instructions in their own words to confirm understanding — closes the loop on health-literacy gaps without making the patient feel tested.", domain: "Education" },
      { term: "ANA + AAACN Scope and Standards", defn: "Two foundational documents that define ambulatory care RN scope and standards of practice. ANA's Scope and Standards sets the profession-wide baseline; AAACN's Scope and Standards adds ambulatory-specific competencies. Both are core ANCC reference texts.", domain: "Professional Role" },
      { term: "Population health management", defn: "Proactive, data-driven approach to managing the health outcomes of a defined panel of patients — registry-based outreach, gap-closure campaigns, chronic-disease cohort monitoring, and quality-metric tracking (HEDIS, CMS Star Ratings).", domain: "Plan and Implement" },
      { term: "Prior authorization", defn: "Payer requirement that a clinical service, medication, or imaging study receive insurer approval before the service is rendered or reimbursed. Ambulatory RNs frequently coordinate PAs, which sits inside Professional Role > fiscal health.", domain: "Professional Role" },
      { term: "Patient-generated health data (PGHD)", defn: "Health data created, recorded, or gathered by patients (or their caregivers) — including home blood pressures, glucose logs, wearable data, and patient-reported outcomes — surfaced into the EHR for ambulatory clinical decision-making. Named in the 2026 TCO.", domain: "Assess and Evaluate" },
      { term: "Patient-Centered Medical Home (PCMH)", defn: "Care-delivery model in which a primary-care team coordinates a patient's care across the health system; NCQA-recognized PCMH practices employ ambulatory RNs in care-coordination, transitions, and population-management roles.", domain: "Plan and Implement" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "AMB-BC vs. RN-BC, CCTM, MEDSURG-BC, Telehealth, FNP-BC",
    prose: [
      "AMB-BC sits inside ANCC's RN specialty credential family. Several adjacent credentials confuse candidates, especially the legacy RN-BC acronym and the CCTM care-coordination credential. The distinction matters before paying the application fee.",
    ],
    rows: [
      { row: "AMB-BC", highlight: true, body: "ANCC", scope: "Ambulatory care nursing across outpatient settings — primary care, specialty clinics, telehealth, FQHCs", who: "RNs with 2 yrs experience + 2,000 ambulatory hours + 30 ambulatory CE in last 3 yrs" },
      { row: "RN-BC (Ambulatory Care)", body: "ANCC", scope: "Same credential as AMB-BC — legacy acronym before ANCC's 2018 specialty-acronym update", who: "Older holders; new candidates earn the AMB-BC acronym" },
      { row: "CCTM (Care Coordination & Transition Management)", body: "ANCC (renewal only)", scope: "Care-coordination and transitions specialty — adjacent to AMB-BC but narrower in scope", who: "Renewal only — no new candidates can sit the exam" },
      { row: "Telehealth Nursing Certification", body: "NCC (AAACN-aligned)", scope: "Telephone triage and telehealth nursing", who: "RNs focused exclusively on telehealth; AMB-BC covers telehealth within a broader scope" },
      { row: "MEDSURG-BC", body: "ANCC", scope: "Inpatient medical-surgical nursing — the broadest US nursing specialty", who: "Acute-care inpatient RNs; the inpatient counterpart of AMB-BC's outpatient focus" },
      { row: "FNP-BC", body: "ANCC", scope: "Family Nurse Practitioner — APRN level with prescriptive authority", who: "Master's-prepared APRNs, not RN-level staff nurses" },
    ],
    closingProse:
      "<strong>Take AMB-BC if you practice across ambulatory settings</strong> — primary care, specialty clinics, telehealth triage, ambulatory infusion, ambulatory surgery, FQHCs, occupational or college health — and you can document 2,000 ambulatory practice hours in the last 3 years. Take Telehealth Nursing Certification instead if 100% of your role is phone or video triage. CCTM is closed to new candidates. MEDSURG-BC is the inpatient credential for hospital med-surg units. FNP-BC is the APRN credential — a separate, master's-level career step. Older nurses holding RN-BC (Ambulatory Care) already hold the same credential under its legacy acronym.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about AMB-BC certification",
    items: [
      { q: "What does AMB-BC stand for in nursing?", a: "AMB-BC stands for Ambulatory Care Nurse — Board Certified. The credential is issued by the American Nurses Credentialing Center (ANCC) in partnership with the American Academy of Ambulatory Care Nursing (AAACN) and validates RN-level expertise in ambulatory care nursing practice across outpatient clinic, primary care, specialty, telehealth, and FQHC settings." },
      { q: "Is AMB-BC the same as RN-BC?", a: "Yes. AMB-BC and the legacy RN-BC (Ambulatory Care) acronym refer to the same ANCC credential. ANCC's Commission on Board Certification updated specialty acronyms to better distinguish each specialty, so the credential is now called AMB-BC. Older holders may still display RN-BC on legacy materials; new candidates earn the AMB-BC acronym. Eligibility, the exam, fees, and the 5-year renewal cycle did not change." },
      { q: "Who issues the AMB-BC certification?", a: "ANCC — the American Nurses Credentialing Center — issues the AMB-BC credential. ANCC is the credentialing affiliate of the American Nurses Association (ANA). The credential was developed in partnership with the American Academy of Ambulatory Care Nursing (AAACN) and was first administered in October 1999. AMB-BC is accredited by the Accreditation Board for Specialty Nursing Certification (ABSNC)." },
      { q: "What are the eligibility requirements for the AMB-BC exam?", a: "Candidates need a current active RN license in a US state, US territory, or the legally recognized equivalent in another country; the equivalent of 2 years full-time RN practice; a minimum of 2,000 hours of clinical practice in ambulatory care nursing within the last 3 years; and 30 hours of continuing education in ambulatory care nursing within the last 3 years. Educators and administrators whose roles align with the Test Content Outline are also eligible." },
      { q: "How much does the AMB-BC exam cost?", a: "ANCC charges $295 for ANA members, $295 for AAACN members, and $395 for non-members. The retake fee is $270 flat (no discounts apply). Renewal fees are $250 (ANA member, as low as), $295 (AAACN member), and $350 (non-member). All initial-application prices include a $140 non-refundable administrative fee." },
      { q: "How many questions are on the AMB-BC exam?", a: "The current ANCC Test Content Outline specifies 150 multiple-choice items in a 3-hour Prometric session: 125 scored items plus 25 pretest items that ANCC is evaluating for future use. Candidates cannot distinguish pretest from scored items, so it is important to answer every question. (Note: the legacy 2017 outline used a 175-item / 150-scored format that some older study guides still reference — both the current TCO and the new TCO effective September 11, 2026 use the 150-item format.)" },
      { q: "What is the AMB-BC pass rate?", a: "ANCC's 2025 Certification Data PDF reports a 77% first-time pass rate — 1,209 of 1,562 candidates passed the AMB-BC exam in 2025. AAACN's earlier fact sheet reported a 76% pass rate in 2016 with 3,268 certificants then; by the end of 2025 the active certificant base had grown to 7,956." },
      { q: "When can I take the AMB-BC exam?", a: "ANCC offers year-round testing through Prometric. After ANCC approves your application, you receive an Authorization to Test and have a 120-day window to schedule your seat. Effective September 11, 2026 ANCC publishes a new Test Content Outline and suspends scheduling for 7 business days (August 28 – September 10, 2026) to swap the exam — you can test BEFORE August 28, 2026 or AFTER September 10, 2026, but not in between." },
      { q: "Does AMB-BC certification expire?", a: "Yes. AMB-BC certification is valid for 5 years. ANCC offers two renewal pathways. Option A combines professional development requirements with 1,000 practice hours in the certification role within the 5-year cycle. Option B combines professional development requirements with successful retesting on the current AMB-BC exam. Renewal applications may be submitted up to 12 months prior to expiration." },
      { q: "What happens if I fail the AMB-BC exam?", a: "You may retest after a mandatory 60 calendar-day wait from your last test date, and may not test more than three times in any 12-month period. The retake fee is $270 flat. ANCC reports pass/fail with a diagnostic content-area feedback report — use the diagnostic to identify which of the four domains to rebuild before retesting." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following primary sources. Fees, blueprint weights, and renewal rules shift on ANCC's revision cycle, and the AMB-BC Test Content Outline is scheduled for an update on September 11, 2026. Always verify numeric facts against the current ANCC AMB-BC product page and the active Test Content Outline before relying on them for application decisions.",
    ],
    list: [
      "ANCC — Ambulatory Care Nursing Certification (AMB-BC) product page: eligibility, fees, Prometric scheduling, renewal options — nursingworld.org/our-certifications/ambulatory-care-nursing",
      "ANCC — Ambulatory Care Nursing Test Content Outline (current, effective 2021-05-01, last updated 2025-09-03): four-domain blueprint with section-level detail — nursingworld.org/globalassets/acn-tco-09032025.pdf",
      "ANCC — Ambulatory Care Nursing Test Content Outline (new, effective 2026-09-11): renamed domains and shifted weights — nursingworld.org/globalassets/certification/certification-specialty-pages/resources/test-content-outlines/amb-tco_08292025-for-webposting.pdf",
      "ANCC — 2025 Certification Data PDF: AMB-BC first-time pass rate (1,209 of 1,562 = 77%), 618 renewals, 7,956 total certified as of 12/31/2025 — nursingworld.org/globalassets/docs/ancc/ancc-cert-data-website.pdf",
      "ANCC — Test Score Reports & Retest Application Procedures: 60-day retest wait, 3-per-12-month cap — nursingworld.org/certification/certification-policies/scores-retest-application",
      "AAACN — Updated Ambulatory Care Nursing Certification Credential (RN-BC to AMB-BC rename announcement) — aaacn.org/updated-ambulatory-care-nursing-certification-credential",
      "AAACN — Ambulatory Care Nursing Certification Fact Sheet (PDF, includes the historical 2017 outline and the $270 retake fee) — aaacn.org/sites/default/files/Ambulatory_TCO.pdf",
      "ANCC — Certification General Testing and Renewal Handbook (PDF) — nursingworld.org/globalassets/certification/renewals/ancc-generaltestingrenewalrequirements.pdf",
      "ANCC — All Certifications catalog — nursingworld.org/our-certifications/",
      "US Bureau of Labor Statistics — Occupational Employment and Wage Statistics, Registered Nurses (OEWS, May 2024): national mean RN wage $98,430, median $93,600; ambulatory-care RN sub-aggregate roughly $94,480/yr — bls.gov/oes/current/oes291141.htm",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice AMB-BC-style items?",
  ctaProse:
    "Work through a diagnostic mapped to the current four-domain ANCC blueprint, including telephone triage, care coordination, and patient-education items. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full AMB-BC question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Rename FAQ",
      tag: "RN-BC",
      title: "RN-BC vs AMB-BC: what changed when ANCC renamed the credential",
      blurb: "The rename in plain English — what's the same (eligibility, hours, CE, exam, 5-year cycle) and what's new (the AMB-BC acronym and how to update your credentials line).",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Triage",
      title: "Telephone triage on the AMB-BC: how the largest domain decides first-time pass",
      blurb: "Why telephone triage and ambulatory assessment together drive 40% of the exam, the red-flag protocols ANCC tests most often, and how to practice triage items under timed conditions.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "PCMH",
      title: "From clinic RN to AMB-BC: building ambulatory hours toward certification",
      blurb: "How to document the 2,000 ambulatory practice hours, what counts (primary care, specialty clinics, telehealth, FQHCs), and how AAACN's Core Curriculum maps onto the ANCC Test Content Outline.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
