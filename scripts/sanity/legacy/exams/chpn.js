// CHPN exam detail page — structured data.
// Sourced from Content/CHPN_research.json (verified against HPCC credential
// page, HPCC Exam Statistics, HPCC History, HPCC HPAR, and BLS OOH primary
// sources as of the 2026-05 cycle).
// Lives at /certifications/chpn/ via the paginated template.

module.exports = {
  code: "CHPN",
  name: "Certified Hospice and Palliative Nurse",
  body: "HPCC",
  cat: "palliative",
  catLabel: "Hospice & Palliative",
  updated: "2026-05",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title:
      "CHPN Certification Guide: Eligibility, Exam & Renewal | NursPrep",
    description:
      "Everything hospice and palliative RNs need on CHPN in 2026 — 500-hour eligibility, 5-domain blueprint, $305 fee, 69% pass rate, and HPAR renewal explained.",
    ogTitle:
      "CHPN Certification Guide 2026 — Certified Hospice and Palliative Nurse",
    ogDescription:
      "HPCC eligibility, the five-domain blueprint, $305 member fee, 69.3% first-time pass rate, and a 10-week study plan for hospice and palliative RNs.",
  },

  // ---- HERO
  lede:
    "CHPN is the RN-level board certification for hospice and palliative nursing in the United States. The credential is issued by the <strong>Hospice and Palliative Credentialing Center (HPCC)</strong> and validates expert practice across the full hospice and serious-illness continuum — home hospice, inpatient hospice units, palliative consult services, and oncology palliative roles.",
  heroPills: [
    { k: "Questions", v: "150 items" },
    { k: "Duration", v: "3 hours" },
    { k: "Renewal", v: "4 years" },
    { k: "Pass rate", v: "69% (2025)" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "Hospice and Palliative Credentialing Center (HPCC)" },
    { k: "Format", v: "PSI test centers + Live Remote Proctoring (LRP)" },
    { k: "Scored items", v: "135 of 150 (15 unscored pretest)" },
    { k: "Eligibility", v: "Active RN license + 500 hrs/12 mo or 1,000 hrs/24 mo" },
    { k: "Testing windows", v: "March, June, September, December" },
    { k: "Fee (HPNA member)", v: "$305 · non-member $445" },
    { k: "reTEST Assured retake", v: "$135 prepaid" },
    { k: "Renewal cycle", v: "4 years — HPAR (100 points) + SJE" },
  ],
  heroCardFoot:
    "Verified against HPCC's 2026 CHPN credential page, 2025 exam statistics, and the 2026 Detailed Content Outline",

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
    { id: "compare", label: "CHPN vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "CHPN certification at a glance",
    prose: [
      "CHPN — Certified Hospice and Palliative Nurse — is the RN-level benchmark for hospice and palliative nursing across home hospice, inpatient hospice units, palliative consult services, and serious-illness care teams. The credential is issued by the <strong>Hospice and Palliative Credentialing Center (HPCC)</strong>, the credentialing arm of the Hospice and Palliative Nurses Association (HPNA). HPCC launched the CHPN credential in <strong>1999</strong>; its 1994–2002 predecessor, CRNH, is no longer used.",
      "CHPN is a board certification, not a course. As of <strong>February 2026</strong>, HPCC reports <strong>7,283 active CHPN credentials</strong> — by volume, the largest credential in HPCC's portfolio. The exam is accredited by the Accreditation Board for Specialty Nursing Certification (ABSNC) through February 2027.",
    ],
    stats: [
      { n: "150", l: "Total items", sub: "135 scored · 15 pretest" },
      { n: "3 hrs", l: "Time limit", sub: "Single block, no scheduled break" },
      { n: "69.3%", l: "2025 first-time pass", sub: "825 of 1,190 candidates" },
      { n: "4 yrs", l: "Renewal cycle", sub: "100 HPAR points + SJE" },
    ],
    factBox: {
      tone: "info",
      title: "New 2027 Detailed Content Outline now published",
      html:
        "HPCC published the <strong>2026 CHPN Detailed Content Outline (DCO)</strong> in May 2026, which guides the 2027 testing cycle. The DCO is HPCC's authoritative source for blueprint weights and item-level coverage — candidates testing in 2027 windows should download the DCO directly from HPCC before finalizing a study plan.",
    },
    coverImageLabel:
      "Hospice RN reviewing comfort care plan with family at home bedside",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the CHPN exam?",
    prose: [
      "You are eligible if you hold a <strong>current, active, unencumbered RN license</strong> in the United States, US territories, or the equivalent in Canada, <em>and</em> you have completed <strong>500 hours of hospice or palliative nursing practice in the most recent 12 months</strong> — or <strong>1,000 hours in the most recent 24 months</strong>.",
      "Unlike some BCEN credentials where practice hours are recommended but not enforced, <strong>HPCC enforces the 500/1,000-hour rule as a hard gate</strong>. There is no hours waiver: candidates short of the threshold must accumulate the hours before submitting an application. Direct clinical experience in either hospice or palliative care counts toward the requirement.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You have logged at least 500 hospice or palliative practice hours in the past 12 months (or 1,000 hours across 24 months) as a primary case-manager, visit RN, inpatient hospice RN, or palliative consult RN.",
      "You routinely manage pain with opioid rotation and equianalgesic conversions, including breakthrough vs background dosing decisions at end of life.",
      "You are comfortable assessing and treating terminal symptoms — refractory dyspnea, terminal secretions, delirium, nausea, and constipation — without reaching for an order set every time.",
      "Your setting fits a recognized hospice or palliative role: home hospice, free-standing or hospital-based inpatient hospice, palliative consult service, oncology palliative team, long-term care palliative champion, or pediatric-adolescent palliative transition role.",
      "You facilitate family meetings and surrogate-decision-making conversations and document advance directives, POLST, and code-status changes in the medical record.",
    ],
  },

  // ---- BLUEPRINT (weights = scored-item counts, total 135)
  blueprint: {
    heading: "CHPN exam blueprint — five near-equal domains",
    prose: [
      "The CHPN blueprint is five domains, with each carrying close to 20% of the scored items. Unlike credentials with one or two dominant domains, <strong>CHPN candidates cannot afford to skip any section</strong> — the Patient Care cluster (Assessment, Pain, Symptom) makes up 58.5% of scored items, and the Support/Advocacy and Practice Issues domains make up the remaining 41.5%.",
      "Practice Issues feels abstract at the bedside — it covers the Medicare Hospice Benefit certification windows (90/90/60/60), interdisciplinary team composition, CMS Conditions of Participation, ethics of withdrawing nutrition and hydration, and quality reporting. Candidates with strong clinical skills but light regulatory exposure tend to lose points here.",
    ],
    domains: [
      { label: "Patient Care — Assessment and Planning", weight: 25 },
      { label: "Patient Care — Pain Management", weight: 26 },
      { label: "Patient Care — Symptom Management", weight: 28 },
      { label: "Support, Education, and Advocacy", weight: 28 },
      { label: "Practice Issues", weight: 28 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and testing windows",
    prose: [
      "HPCC delivers CHPN through <strong>PSI Exams</strong> at PSI test centers and via <strong>Live Remote Proctoring (LRP)</strong>, which lets candidates test from a private location. The exam runs in four annual testing windows — <strong>March, June, September, and December</strong> — with online application deadlines about two weeks before each window opens (Feb 15, May 15, Aug 15, Nov 15). Missing a deadline pushes you to the next quarter.",
    ],
    rows: [
      { k: "Initial certification — HPNA member", v: "$305" },
      { k: "Initial certification — non-member", v: "$445", highlight: true },
      { k: "reTEST Assured (prepaid retake)", v: "$135" },
      { k: "HPNA annual membership (reduces exam fee)", v: "~$135" },
      { k: "Sandra Lee Schafer Certification Scholarship", v: "Covers fee for selected applicants" },
      { k: "Application window", v: "Opens 3 months before each exam window" },
      { k: "Score reporting", v: "On-site at test center · within 24 hrs for LRP" },
      { k: "Payment methods", v: "Visa, MasterCard, Discover, American Express" },
    ],
    factBox: {
      tone: "success",
      title: "Join HPNA before you apply",
      html:
        "The <strong>$140 fee delta</strong> between HPNA-member ($305) and non-member ($445) pricing is larger than annual HPNA membership (~$135). Joining HPNA <em>before</em> submitting the CHPN application pays for itself on the first sitting and unlocks discounted prep courses and the <em>Journal of Hospice and Palliative Nursing</em>. The <strong>reTEST Assured</strong> add-on prepays one retake at $135 — meaningfully cheaper than a second full $305 / $445 application if a candidate fails the first attempt.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "CHPN certification is valid for <strong>four years</strong>. HPCC's renewal program is the <strong>Hospice and Palliative Accrual for Recertification (HPAR)</strong> — an online portfolio managed in LearningBuilder where holders accumulate <strong>100 HPAR points</strong> over the cycle. <strong>1 CE contact hour = 1 HPAR point</strong>, and other professional-development activities (publishing, precepting, committee service) also earn points.",
      "Since 2014, HPAR has been the standard recertification path; the <strong>Situational Judgment Exercise (SJE)</strong> — case-based scenarios testing clinical decision-making beyond initial-exam content — is also required at renewal. CHPN holders must additionally maintain clinical-practice hours during the cycle; the exact hour minimum is published in each candidate's HPAR Packet at the time of renewal. Lapsed credentials cannot be reactivated by CE catch-up — holders must sit the current CHPN exam again to reinstate.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the CHPN exam?",
    prose: [
      "HPCC reported <strong>825 of 1,190 first-time CHPN candidates passed in 2025</strong> — a <strong>69.3% first-time pass rate</strong>. The total pass rate (first-time plus repeaters) was 66.8% (907 of 1,358). In 2024, the first-time pass rate was meaningfully higher: <strong>72.9%</strong> (939 of 1,288). Year-over-year drift is expected as HPCC's published 2026 Detailed Content Outline introduces small content shifts.",
      "<strong>Repeater performance is the bigger story.</strong> Repeaters in 2025 passed at only 48.8% (82 of 168) — about 20 percentage points below first-time test-takers. The practical implication: a casual second sitting without rebuilt study habits is risky. <strong>reTEST Assured</strong> (HPCC's $135 prepaid retake) makes sense only when paired with a real restudy plan that targets the domains the candidate underperformed on the first attempt.",
    ],
    rows: [
      { year: "2024", pct: 72.9 },
      { year: "2025", pct: 69.3 },
    ],
    target: 80,
    footnote:
      "Pass rates shown are first-time only. Total pass rates including repeaters were 71.4% (2024) and 66.8% (2025). Source: HPCC Exam Statistics, accessed 2026-05-19.",
    factBox: {
      tone: "info",
      title: "Repeater pass rate is the warning sign",
      html:
        "The <strong>2025 repeater pass rate was 48.8%</strong> — about 20 points below the 69.3% first-time rate. Repeating without changing study approach has roughly coin-flip odds. Use the score report from the first attempt to identify weak domains, then dedicate at least four weeks of targeted question-bank work before a second sitting.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 10-week CHPN study plan",
    prose: [
      "A structured 10-week plan suits most hospice or palliative RNs with at least one year of practice — about <strong>70 to 100 total study hours</strong> across the five blueprint domains. Question-bank volume ramps from week 2 and peaks in week 9 with one full-length timed exam; week 10 is for targeted review and logistics. Aim for <strong>600–1,000 practice items</strong> total before test day.",
    ],
    weeks: [
      { n: 1, focus: "Read HPCC 2026 CHPN Detailed Content Outline + baseline diagnostic exam", qs: 25 },
      { n: 2, focus: "Assessment and planning — PPS/KPS, hospice eligibility, advance care planning", qs: 50 },
      { n: 3, focus: "Pain management — WHO ladder, opioid rotation, equianalgesic conversions", qs: 60 },
      { n: 4, focus: "Symptom management I — dyspnea, secretions, nausea, constipation", qs: 60 },
      { n: 5, focus: "Symptom management II — delirium, anxiety, terminal sedation, refractory symptoms", qs: 60 },
      { n: 6, focus: "Support, education, advocacy — grief types, family meetings, cultural humility", qs: 60 },
      { n: 7, focus: "Practice issues — Medicare Hospice Benefit, IDG/IDT, ethics, CoPs", qs: 60 },
      { n: 8, focus: "Weak-domain remediation based on diagnostic and week-by-week error log", qs: 60 },
      { n: 9, focus: "Full-length timed practice exam (150 items in 3 hours) + error log review", qs: 150 },
      { n: 10, focus: "Targeted review of weak domains, rest, logistics, test day", qs: 40 },
    ],
    tipsHeading: "How CHPN candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Don't under-study Practice Issues",
        text:
          "Practice Issues is 28 of 135 scored items (~20.7%). Medicare Hospice Benefit certification windows (90/90/60/60), IDG composition, CMS Conditions of Participation, and ethics of withdrawing artificial nutrition and hydration are all routinely tested. Bedside skill alone will not carry this domain.",
      },
      {
        kicker: "Know your opioid conversions cold",
        text:
          "Pain Management is 26 of 135 scored items. Equianalgesic ratios (morphine, oxycodone, hydromorphone, methadone, fentanyl), breakthrough-dose math (10–20% of total daily dose), and rotation safety factors are recurring item types. Build a one-page conversion reference and review it nightly during weeks 3–4.",
      },
      {
        kicker: "Pace 150 items in 3 hours",
        text:
          "Pacing is a trained skill. Take at least one full-length timed practice exam under real conditions before test day — otherwise fatigue in the final 30 items is where score slips. PSI delivers the exam in a single block with no scheduled break, so plan accordingly.",
      },
      {
        kicker: "Distinguish hospice vs palliative scope",
        text:
          "Hospice care is bounded by the Medicare Hospice Benefit (life expectancy of six months or less if the disease runs its expected course). Palliative care has no prognostic requirement and can run concurrently with curative treatment. Item stems that mix these frames are testing whether you can name which framework applies.",
      },
      {
        kicker: "Memorize the grief frameworks, not just trivia",
        text:
          "Anticipatory grief, normal grief, complicated grief, prolonged grief disorder (DSM-5-TR), and disenfranchised grief each have item-level distinctions. Pair them with culturally informed practices so you can answer scenario-based items in the Support/Advocacy domain.",
      },
    ],
  },

  // ---- SAMPLE QUESTION
  sample: {
    heading: "Sample CHPN question",
    prose: [
      "This item mirrors HPCC's scenario format: a short clinical stem and four plausibly-correct options where only one is <em>best</em>. Try it before reading the rationale.",
    ],
    q: {
      scenario:
        "A 78-year-old home-hospice patient with advanced COPD reports refractory dyspnea at rest despite optimized bronchodilators and a fentanyl patch increased two days ago. The patient is alert, says he is \"tired of being short of breath,\" and asks the nurse what else can be done. SpO2 is 89% on home oxygen at 4 L. The family is at the bedside and visibly anxious.",
      stem: "Which nursing action should the hospice RN prioritize next?",
      options: [
        "Increase the supplemental oxygen flow rate to 6 L/min and reassess in one hour.",
        "Administer low-dose immediate-release oral morphine and coach the family on breathing-pattern observation.",
        "Recommend transfer to an inpatient hospice unit for continuous nebulized albuterol.",
        "Hold all opioids pending a stat ABG to rule out CO2 retention.",
      ],
      correct: 1,
      rationale:
        "Low-dose oral immediate-release morphine is the evidence-based first-line treatment for refractory dyspnea in advanced disease and is the standard of care in hospice and palliative practice. Increasing oxygen above the patient's baseline saturation does not relieve dyspnea perception and may dry secretions. Inpatient transfer is premature for a symptom managed effectively at home. Holding opioids in a hospice patient with refractory dyspnea — citing a non-indicated stat ABG — runs against the patient's expressed goals and the published evidence base.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key CHPN terms every candidate should know",
    prose: [
      "These terms surface in most CHPN exam items. Review them until the definitions feel automatic — scenario stems often hinge on whether the candidate can name which framework applies (hospice vs palliative, anticipatory vs complicated grief, hyperactive vs hypoactive delirium).",
    ],
    rows: [
      { term: "Medicare Hospice Benefit", defn: "Federal benefit covering hospice care for Medicare beneficiaries with a physician-certified life expectancy of six months or less if the disease runs its expected course. Recertification windows follow a 90/90/60/60 schedule.", domain: "Practice Issues" },
      { term: "Palliative care", defn: "Specialized care focused on relief of serious-illness symptoms and stress; no prognostic requirement and may run concurrently with curative treatment.", domain: "Practice Issues" },
      { term: "PPS (Palliative Performance Scale)", defn: "0–100 scale measuring functional status in advanced illness; used in prognostication and hospice eligibility decisions.", domain: "Assessment" },
      { term: "Equianalgesic conversion", defn: "Cross-titration math comparing potencies of different opioids by route. A reduction factor of 25–50% is applied during rotation to account for incomplete cross-tolerance.", domain: "Pain" },
      { term: "Breakthrough pain", defn: "Transient flare of pain on a background of stable analgesia. Typical immediate-release dose is 10–20% of the 24-hour scheduled opioid total.", domain: "Pain" },
      { term: "Terminal secretions", defn: "Audible upper-airway secretions in the dying patient, sometimes called the death rattle. Family education and repositioning are first-line; anticholinergics are second-line.", domain: "Symptom" },
      { term: "Palliative sedation", defn: "Proportionate use of sedating medications to relieve refractory symptoms in the dying patient. Distinct from euthanasia: intent is symptom relief, not hastened death.", domain: "Symptom" },
      { term: "Anticipatory grief", defn: "Grief experienced by patient or family before the actual death, in response to expected loss. Differs from complicated grief, which arises after death and persists with impairment.", domain: "Support" },
      { term: "Interdisciplinary group (IDG/IDT)", defn: "Required hospice care team — RN, physician, social worker, chaplain, hospice aide, volunteer — that develops and updates the plan of care at least every 15 days.", domain: "Practice Issues" },
      { term: "POLST / MOLST", defn: "Physician Orders for Life-Sustaining Treatment (or Medical Orders) — portable, actionable medical orders covering CPR, intubation, artificial nutrition, and antibiotics that travel with the patient across settings.", domain: "Assessment" },
      { term: "Delirium subtypes", defn: "Hyperactive (agitated), hypoactive (withdrawn), and mixed presentations. Hypoactive delirium is the most commonly missed at end of life.", domain: "Symptom" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "CHPN vs. ACHPN, CHPPN, CHPLN, OCN",
    prose: [
      "CHPN sits alongside several related credentials. Many candidates Google \"CHPN\" when they actually need a different HPCC credential, so the distinction matters before paying the application fee.",
    ],
    rows: [
      { row: "CHPN", highlight: true, body: "HPCC", scope: "Hospice and palliative nursing for adult patients", who: "RNs in hospice, palliative, or serious-illness roles" },
      { row: "ACHPN", body: "HPCC", scope: "Advanced-practice hospice and palliative", who: "Nurse Practitioners and Clinical Nurse Specialists" },
      { row: "CHPPN", body: "HPCC", scope: "Pediatric hospice and palliative", who: "RNs caring for pediatric end-of-life patients" },
      { row: "CHPLN", body: "HPCC", scope: "Hospice and palliative practice at the LPN scope", who: "LPNs and LVNs" },
      { row: "OCN", body: "ONCC", scope: "Oncology nursing across the cancer continuum", who: "Oncology RNs (may pair with CHPN for oncology palliative work)" },
    ],
    closingProse:
      "<strong>Take CHPN if you are an RN spending most of your time in hospice or palliative care.</strong> Move to ACHPN once you complete an APRN program. CHPPN is the parallel credential if your patients are pediatric. CHPLN is the scope-appropriate option for LPN/LVN colleagues. OCN may be a better fit if you work in oncology where curative treatment is still the primary frame.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about CHPN certification",
    items: [
      { q: "What does CHPN stand for in nursing?", a: "CHPN stands for Certified Hospice and Palliative Nurse. The credential is issued by the Hospice and Palliative Credentialing Center (HPCC) and is the RN-level board certification for hospice and palliative nursing." },
      { q: "Who issues the CHPN certification?", a: "HPCC — the Hospice and Palliative Credentialing Center — issues the CHPN credential. HPCC is the credentialing arm of the Hospice and Palliative Nurses Association (HPNA). HPCC launched CHPN in 1999 after expanding its earlier CRNH credential to cover palliative care." },
      { q: "What are the eligibility requirements for the CHPN exam?", a: "Candidates need a current, active, unencumbered RN license in the US, US territories, or the equivalent in Canada, plus 500 hours of hospice or palliative nursing practice in the most recent 12 months — or 1,000 hours in the most recent 24 months. HPCC enforces the hours rule as a hard gate; there is no waiver." },
      { q: "How much does the CHPN exam cost?", a: "HPCC charges $305 for HPNA members and $445 for non-members. The optional reTEST Assured add-on prepays a single retake for $135. HPNA membership runs about $135 per year, so joining HPNA before applying typically pays for itself on the first sitting." },
      { q: "How long is the CHPN exam?", a: "The CHPN exam contains 150 multiple-choice items — 135 scored plus 15 unscored pretest items — and runs three hours in a single block. PSI delivers the exam at PSI test centers and via Live Remote Proctoring." },
      { q: "What is the CHPN pass rate?", a: "HPCC reported a 69.3% first-time pass rate in 2025 (825 of 1,190 candidates). The 2024 first-time pass rate was 72.9% (939 of 1,288). Repeater pass rates run roughly 20 points lower, so a casual second attempt without rebuilt study habits carries meaningful risk." },
      { q: "When can I take the CHPN exam?", a: "HPCC offers the CHPN exam during four annual windows: March, June, September, and December. Online application deadlines fall about two weeks before each window opens — Feb 15, May 15, Aug 15, and Nov 15." },
      { q: "Does CHPN certification expire?", a: "Yes. CHPN is valid for four years. Renewal runs through HPAR — Hospice and Palliative Accrual for Recertification — where holders accumulate 100 points (1 CE contact hour = 1 HPAR point) and complete the Situational Judgment Exercise. Lapsed credentials cannot be renewed by CE catch-up and require re-examination." },
      { q: "What is the difference between CHPN and ACHPN?", a: "CHPN is the RN-level credential. ACHPN is the advanced-practice version for Nurse Practitioners and Clinical Nurse Specialists. Both are issued by HPCC, but the eligibility, scope, and exam content are different. RNs progressing through an APRN program typically move from CHPN to ACHPN." },
      { q: "Will my hospital pay for CHPN certification?", a: "Many hospice agencies and health systems reimburse the CHPN application fee through an education benefit. The Hospice and Palliative Nurses Foundation (HPNF) also runs the Sandra Lee Schafer Certification Scholarship, which covers fees for selected applicants paying out of pocket." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following primary sources. Fees, blueprint counts, and recertification rules shift on HPCC's revision cycle — always verify numeric facts against the current HPCC handbook before relying on them for application decisions.",
    ],
    list: [
      "Hospice and Palliative Credentialing Center (HPCC) — CHPN credential page: eligibility, fees, testing windows, PSI scheduling — advancingexpertcare.org/hpcc/credentials/chpn/",
      "HPCC — Exam Statistics: 2024 and 2025 CHPN pass rates and active certificant counts — advancingexpertcare.org/hpcc/why-certification/exam-statistics/",
      "HPCC — History: 1994 CRNH launch, 1999 CHPN renaming, ABSNC accreditation through Feb 2027 — advancingexpertcare.org/hpcc/why-certification/hpcc-history/",
      "HPCC — HPAR recertification program: 100 points, Situational Judgment Exercise — advancingexpertcare.org/hpcc/recertification/hpar/",
      "HPCC — 2026 CHPN Detailed Content Outline (PDF, published May 2026) — advancingexpertcare.org/wp-content/uploads/2026/05/2026-CHPN-DCO_for-website.pdf",
      "HPCC — Live Remote Proctoring program — advancingexpertcare.org/hpcc/live-remote-proctoring/",
      "HPCC — reTEST Assured program ($135 prepaid retake) — advancingexpertcare.org/hpcc/retest-assured/",
      "US Bureau of Labor Statistics — Registered Nurses Occupational Outlook Handbook: $93,600 median RN wage (May 2024), 5% projected RN growth 2024–2034",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice CHPN-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to HPCC's five-domain blueprint. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full CHPN question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "ACHPN",
      title: "CHPN vs ACHPN: when to move from RN to APRN certification",
      blurb: "Eligibility differences, blueprint overlap, and career timing for nurses progressing from bedside hospice work to advanced palliative practice.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "Practice Issues: the 20% of CHPN that bedside RNs underestimate",
      blurb: "Medicare Hospice Benefit certification windows, IDG composition, ethics of withholding nutrition — the regulatory content HPCC tests most.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "Hospice career",
      title: "Landing a home hospice case-manager role with CHPN on your badge",
      blurb: "How hospice agencies actually use specialty-certification rates in Magnet and CMS quality reporting, and what hiring managers ask in CHPN interviews.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
