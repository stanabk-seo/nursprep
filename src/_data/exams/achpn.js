// ACHPN exam detail page — structured data.
// Sourced from Content/ACHPN_research.json (verified against the HPCC ACHPN
// credential page, HPCC Exam Statistics, HPCC History, HPCC HPAR, the 2026
// ACHPN Detailed Content Outline PDF, and BLS OOH for nurse practitioners,
// accessed 2026-05-20).
// Lives at /certifications/achpn/ via the paginated template.

module.exports = {
  code: "ACHPN",
  name: "Advanced Certified Hospice and Palliative Nurse",
  body: "HPCC",
  cat: "palliative",
  catLabel: "Hospice & Palliative",
  updated: "2026-05",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title:
      "ACHPN Certification Guide: APRN Exam, Fees & Renewal | NursPrep",
    description:
      "Everything palliative NPs and CNSs need on ACHPN in 2026 — HPCC APRN eligibility, the 4-domain blueprint, $355 fee, 70% pass rate, and HPAR renewal.",
    ogTitle:
      "ACHPN Certification Guide 2026 — Advanced Certified Hospice and Palliative Nurse",
    ogDescription:
      "HPCC's APRN-level credential for NPs and CNSs. 500-hour eligibility, the four-domain 2026 DCO, $355 member fee, 70.4% first-time pass rate, and HPAR renewal explained.",
  },

  // ---- HERO
  lede:
    "ACHPN is the APRN-level board certification for hospice and palliative nursing in the United States. The credential is issued by the <strong>Hospice and Palliative Credentialing Center (HPCC)</strong> and is restricted to Nurse Practitioners and Clinical Nurse Specialists — distinct from CHPN, which is HPCC's RN-level credential.",
  heroPills: [
    { k: "Questions", v: "150 items" },
    { k: "Domains", v: "4 domains" },
    { k: "Renewal", v: "4 years" },
    { k: "Pass rate", v: "70% (2025)" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "Hospice and Palliative Credentialing Center (HPCC)" },
    { k: "Format", v: "PSI test centers + Live Remote Proctoring (LRP)" },
    { k: "Scored items", v: "150 across four domains" },
    { k: "Eligibility", v: "APRN license + accredited NP or CNS program + 500 hrs/12 mo or 1,000 hrs/24 mo" },
    { k: "Testing windows", v: "March, June, September, December" },
    { k: "Fee (HPNA member)", v: "$355 · non-member $515" },
    { k: "reTEST Assured retake", v: "$135 prepaid" },
    { k: "Renewal cycle", v: "4 years — HPAR (100 points) + SJE" },
  ],
  heroCardFoot:
    "Verified against HPCC's 2026 ACHPN credential page, 2025 exam statistics, and the 2026 ACHPN Detailed Content Outline",

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
    { id: "compare", label: "ACHPN vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "ACHPN certification at a glance",
    prose: [
      "ACHPN — Advanced Certified Hospice and Palliative Nurse — is the APRN-level benchmark for hospice and palliative nursing across inpatient palliative consult services, home hospice with APRN visit roles, oncology palliative clinics, and hospice IDT medical-director-support roles. The credential is issued by the <strong>Hospice and Palliative Credentialing Center (HPCC)</strong>, the credentialing arm of the Hospice and Palliative Nurses Association (HPNA). First national testing of the advanced-practice exam was held in <strong>May 2003</strong> in partnership with ANCC; HPCC acquired the exam in December 2004 and ABSNC accredited it in February 2007.",
      "ACHPN is a board certification, not a course, and is restricted to Nurse Practitioners and Clinical Nurse Specialists. As of <strong>February 2026</strong>, HPCC reports <strong>2,628 active ACHPN credentials</strong>. The exam is accredited by the Accreditation Board for Specialty Nursing Certification (ABSNC) through February 2027 and is the APRN-nurse parallel to the physician-side Hospice and Palliative Medicine (HPM) subspecialty.",
    ],
    stats: [
      { n: "150", l: "Scored items", sub: "Four domains, per 2026 DCO" },
      { n: "70.4%", l: "2025 first-time pass", sub: "200 of 284 candidates" },
      { n: "4 yrs", l: "Renewal cycle", sub: "100 HPAR points + SJE" },
      { n: "2,628", l: "Active credentials", sub: "HPCC, February 2026" },
    ],
    factBox: {
      tone: "info",
      title: "New 2026 ACHPN Detailed Content Outline guides the 2027 testing cycle",
      html:
        "HPCC published the <strong>2026 ACHPN Detailed Content Outline (DCO)</strong> in May 2026, drawn from an April 2026 role-delineation study. The DCO is HPCC's authoritative source for blueprint weights and item-level coverage — APRNs testing in 2027 windows should download the DCO directly from HPCC before finalizing a study plan.",
    },
    coverImageLabel:
      "Palliative APRN leading a goals-of-care meeting with patient and family at hospital bedside",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the ACHPN exam?",
    prose: [
      "You are eligible if you hold a <strong>current, active APRN license</strong> in the United States, US territories, or the equivalent in Canada, <em>and</em> you have completed an accredited graduate, postgraduate, or doctoral <strong>Nurse Practitioner (NP) or Clinical Nurse Specialist (CNS) educational program</strong>. The transcript must demonstrate three separate comprehensive graduate-level courses in <strong>advanced pathophysiology, advanced health assessment, and advanced pharmacology</strong>, plus a clinical practicum of at least 500 hours.",
      "Beyond the academic gate, candidates must be functioning as an NP or CNS with <strong>500 hours of hospice and palliative advanced nursing practice in the most recent 12 months</strong> — or <strong>1,000 hours in the most recent 24 months</strong>. The practice hours must be in direct hospice or palliative APRN work, not generalist NP practice. HPCC enforces both the educational and practice-hour requirements as hard gates; there is no waiver.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You are functioning as an NP or CNS with a documented hospice or palliative caseload — inpatient palliative consult service, home hospice with APRN visit role, oncology palliative clinic, or hospice IDT medical-director-support role.",
      "You routinely manage opioid stewardship and equianalgesic conversions — including methadone, which has the most complex conversion math and is the rotation most often missed at end of life.",
      "You can recognize and manage hospice and palliative emergencies — spinal cord compression, hemorrhage, seizures, and superior vena cava (SVC) syndrome — and align urgent management with the patient's goals of care.",
      "You lead family meetings, document POLST and MOLST, facilitate goals-of-care conversations, and address the ethics of withholding, withdrawing, or not escalating treatment.",
      "You are comfortable distinguishing palliative sedation, medical aid in dying (MAID), and voluntary stopping of eating and drinking (VSED) — three frameworks the DCO explicitly tests under biomedical ethics.",
    ],
  },

  // ---- BLUEPRINT (weights = scored-item percentages, sum to 100)
  blueprint: {
    heading: "ACHPN exam blueprint — four domains across 150 scored items",
    prose: [
      "The 2026 ACHPN blueprint is four domains summing to 150 scored items. <strong>Evaluation and Management is the heaviest domain at 49 items (32.7%)</strong>; Professionalism and Practice is the smallest at 21 items (14.0%). The distribution is the inverse of CHPN's five near-equal domains — ACHPN concentrates its weight in clinical decision-making and management rather than spreading items across symptom management as discrete sections.",
      "The smallest domain still rewards preparation. <strong>Professionalism and Practice covers biomedical ethics</strong> (withholding/withdrawing treatment, non-beneficial care, palliative sedation, medical aid in dying, voluntary stopping of eating and drinking), professional boundaries, scope of practice, and consultant professionalism. APRNs with strong clinical skills but lighter exposure to ethics committee work tend to lose points here.",
    ],
    domains: [
      { label: "Assessment and Data Collection", weight: 28 },
      { label: "Evaluation and Management", weight: 33 },
      { label: "Education and Communication", weight: 25 },
      { label: "Professionalism and Practice", weight: 14 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and testing windows",
    prose: [
      "HPCC delivers ACHPN through <strong>PSI Exams</strong> at PSI test centers and via <strong>Live Remote Proctoring (LRP)</strong>, which lets candidates test from a private location. The exam runs in four annual testing windows — <strong>March, June, September, and December</strong> — with online application deadlines about two weeks before each window opens (Feb 15, May 15, Aug 15, Nov 15). Application start dates open three months before each window. Missing a deadline pushes you to the next quarter.",
    ],
    rows: [
      { k: "Initial certification — HPNA member", v: "$355" },
      { k: "Initial certification — non-member", v: "$515", highlight: true },
      { k: "reTEST Assured (prepaid retake)", v: "$135" },
      { k: "HPNA annual membership (reduces exam fee)", v: "~$135" },
      { k: "Sandra Lee Schafer Certification Scholarship", v: "Covers fee for selected applicants" },
      { k: "Application start date", v: "Three months before each exam window" },
      { k: "Score reporting", v: "On-site at test center · within 24 hrs for LRP" },
      { k: "Payment methods", v: "Visa, MasterCard, Discover, American Express" },
    ],
    factBox: {
      tone: "success",
      title: "Join HPNA before you apply",
      html:
        "The <strong>$160 fee delta</strong> between HPNA-member ($355) and non-member ($515) pricing is larger than annual HPNA membership (~$135). Joining HPNA <em>before</em> submitting the ACHPN application pays for itself on the first sitting and unlocks discounted prep courses and the <em>Journal of Hospice and Palliative Nursing</em>. The <strong>reTEST Assured</strong> add-on prepays one retake at $135 — meaningfully cheaper than a second full $355 / $515 application if a candidate fails the first attempt.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "ACHPN certification is valid for <strong>four years</strong>. HPCC's renewal program is the <strong>Hospice and Palliative Accrual for Recertification (HPAR)</strong> — an online portfolio managed in LearningBuilder where holders accumulate <strong>100 HPAR points</strong> over the cycle. <strong>1 CE contact hour = 1 HPAR point</strong>, and other professional-development activities (publishing, presentations, precepting, mentoring) also earn points.",
      "Since 2014, HPAR has been the standard recertification path for ACHPN; the 100-point requirement was standardized in 2017. The <strong>Situational Judgment Exercise (SJE)</strong> — case-based scenarios testing critical reasoning and clinical application beyond the initial-exam level — is also required at renewal. ACHPN holders must maintain practice hours during the cycle: <strong>500 hours in the most recent 12 months or 1,000 hours in the most recent 24 months</strong>. Lapsed credentials cannot be reactivated by CE catch-up — holders must sit the current ACHPN exam again to reinstate. In 2025, HPCC processed 368 ACHPN renewals and 37 reactivations.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the ACHPN exam?",
    prose: [
      "HPCC reported <strong>200 of 284 first-time ACHPN candidates passed in 2025</strong> — a <strong>70.4% first-time pass rate</strong>. The total pass rate (first-time plus repeaters) was 68.1% (226 of 332). In 2024, the first-time pass rate was meaningfully higher: <strong>76.0%</strong> (222 of 292). Year-over-year drift is expected because HPCC's published 2026 Detailed Content Outline introduces content shifts.",
      "<strong>Repeater performance is the bigger story.</strong> Repeaters in 2025 passed at only 54.2% (26 of 48) — about 16 percentage points below first-time test-takers. The practical implication: a casual second sitting without rebuilt study habits is risky. <strong>reTEST Assured</strong> (HPCC's $135 prepaid retake) makes sense only when paired with a real restudy plan targeting the domains the candidate underperformed on the first attempt.",
    ],
    rows: [
      { year: "2024", pct: 76.0 },
      { year: "2025", pct: 70.4 },
    ],
    target: 80,
    footnote:
      "Pass rates shown are first-time only. Total pass rates including repeaters were 71.8% (2024) and 68.1% (2025). Source: HPCC Exam Statistics, accessed 2026-05-20.",
    factBox: {
      tone: "info",
      title: "Repeater pass rate is the warning sign",
      html:
        "The <strong>2025 repeater pass rate was 54.2%</strong> — about 16 points below the 70.4% first-time rate. Repeating without changing study approach is close to coin-flip odds. Use the score report from the first attempt to identify weak domains, then dedicate at least four weeks of targeted question-bank work before a second sitting.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 10-week ACHPN study plan",
    prose: [
      "A structured 10-week plan suits most practicing palliative APRNs — about <strong>80 to 110 total study hours</strong> across the four blueprint domains. Because APRNs already have advanced pathophysiology and pharmacology coursework behind them, most catch-up effort goes into the regulatory/ethics content of Professionalism and Practice plus the high-acuity emergencies in Evaluation and Management. Aim for <strong>600–1,000 practice items</strong> total before test day.",
    ],
    weeks: [
      { n: 1, focus: "Read HPCC 2026 ACHPN Detailed Content Outline + baseline diagnostic exam", qs: 25 },
      { n: 2, focus: "Assessment and Data Collection — prognostic tools (PPS/KPS), advance care planning, hospice criteria", qs: 50 },
      { n: 3, focus: "Evaluation and Management I — pharmacologic interventions, opioid stewardship, methadone rotation math", qs: 60 },
      { n: 4, focus: "Evaluation and Management II — palliative-care emergencies (spinal cord compression, hemorrhage, seizures, SVC syndrome)", qs: 60 },
      { n: 5, focus: "Evaluation and Management III — palliative sedation, life-support devices, complex clinical decision-making", qs: 60 },
      { n: 6, focus: "Education and Communication — serious-news delivery, conflict resolution, hospice vs. palliative framing", qs: 60 },
      { n: 7, focus: "Professionalism and Practice — biomedical ethics, MAID, VSED, scope of practice, IDT/IDG role", qs: 50 },
      { n: 8, focus: "Weak-domain remediation based on diagnostic and week-by-week error log", qs: 60 },
      { n: 9, focus: "Full-length timed practice exam (150 scored items, paced) + error log review", qs: 150 },
      { n: 10, focus: "Targeted review of weak domains, rest, logistics, test day", qs: 40 },
    ],
    tipsHeading: "How ACHPN candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Don't under-study biomedical ethics",
        text:
          "Professionalism and Practice is 21 of 150 scored items (14%) — the smallest domain, and the one APRNs most often skip. Withholding versus withdrawing treatment, non-beneficial care, palliative sedation, MAID, and VSED are all explicitly listed in the 2026 DCO. Clinical skill alone will not carry this domain.",
      },
      {
        kicker: "Know your methadone conversion cold",
        text:
          "Evaluation and Management is 49 of 150 scored items (33%) — the heaviest domain. Methadone equianalgesic conversion is the most complex of any opioid (non-linear, dose-dependent ratios) and is a recurring item type. Build a one-page methadone reference and review it nightly during weeks 3–4.",
      },
      {
        kicker: "Recognize the four palliative emergencies",
        text:
          "Spinal cord compression, hemorrhage, seizures, and superior vena cava syndrome are each named in the DCO as palliative-care emergencies. Item stems test whether you can recognize the presentation, initiate evidence-based management (dexamethasone for cord compression; closure plan for arterial hemorrhage), and align the urgent response with the patient's documented goals of care.",
      },
      {
        kicker: "Distinguish palliative sedation, MAID, and VSED",
        text:
          "All three appear under DCO 4A4 (ethics related to palliative sedation, medical aid in dying, and voluntary stopping of eating and drinking). They are not interchangeable. Palliative sedation: proportionate sedation for refractory symptoms; intent is symptom relief. MAID: physician-prescribed lethal medication taken by the patient where legal; intent includes hastened death. VSED: patient-initiated cessation of oral intake; APRN role is supportive symptom management.",
      },
      {
        kicker: "Pace 150 items in a single block",
        text:
          "Pacing is a trained skill. Take at least one full-length timed practice exam under real conditions before test day — otherwise fatigue in the final 30 items is where APRN-level critical-thinking items slip. PSI delivers the exam in a single block; plan accordingly.",
      },
    ],
  },

  // ---- SAMPLE QUESTION
  sample: {
    heading: "Sample ACHPN question",
    prose: [
      "This item mirrors the ACHPN scenario format: an APRN-scope clinical stem and four plausibly-correct options where only one is <em>best</em>. Try it before reading the rationale.",
    ],
    q: {
      scenario:
        "A 64-year-old man with metastatic prostate cancer to spine reports two days of progressive mid-thoracic back pain with new bilateral lower-extremity weakness and a single episode of urinary incontinence this morning. Performance status was ECOG 1 last week and is now ECOG 3. The patient is enrolled in home palliative care, has a POLST indicating full code, and his stated goal is to remain functional long enough to attend his daughter's wedding in six weeks.",
      stem: "Which action should the palliative APRN prioritize next?",
      options: [
        "Initiate an opioid titration for breakthrough pain and arrange in-home physical therapy evaluation within 48 hours.",
        "Order urgent same-day MRI of the thoracic spine and initiate IV dexamethasone while arranging neurosurgery and radiation oncology consultation.",
        "Recommend transfer to inpatient hospice for comfort-focused management given the rapid functional decline.",
        "Schedule a goals-of-care meeting later this week to revisit the POLST before any further imaging.",
      ],
      correct: 1,
      rationale:
        "The presentation — progressive back pain, new lower-extremity weakness, and a single sphincter event in a patient with known vertebral metastases — is impending malignant spinal cord compression, a hospice and palliative emergency listed explicitly in the 2026 ACHPN DCO (2A2). Urgent MRI plus IV dexamethasone plus neurosurgery and radiation oncology consult is the evidence-based standard and is fully consistent with the patient's documented goal (functional independence through the wedding). Opioid titration alone misses the diagnosis and the functional window. Transfer to inpatient hospice is premature and goal-incongruent. Delaying imaging for a goals-of-care meeting risks irreversible neurologic injury when the patient's stated goal already endorses time-limited aggressive intervention.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key ACHPN terms every APRN candidate should know",
    prose: [
      "These terms surface in most ACHPN exam items. Review them until the definitions feel automatic — scenario stems often hinge on whether the candidate can name which framework applies (palliative sedation vs MAID vs VSED, spinal cord compression vs back pain workup, methadone vs morphine equianalgesic math).",
    ],
    rows: [
      { term: "Palliative sedation", defn: "Proportionate use of sedating medications to relieve refractory symptoms in the dying patient. Intent is symptom relief, not hastened death. Distinct from MAID and VSED.", domain: "Evaluation and Management" },
      { term: "Medical aid in dying (MAID)", defn: "Physician-prescribed lethal medication that the patient self-administers, where legal. APRN scope of involvement varies by state law; the ACHPN exam tests recognition of the ethical and legal framework.", domain: "Professionalism and Practice" },
      { term: "Voluntary stopping of eating and drinking (VSED)", defn: "Patient-initiated cessation of oral intake to hasten death in the context of irreversible serious illness. APRN role is supportive symptom management; explicitly listed in DCO 4A4.", domain: "Professionalism and Practice" },
      { term: "Opioid stewardship", defn: "Evidence-based prescribing of opioids that balances analgesia, opioid-induced toxicity, diversion risk, and stewardship metrics. Explicitly listed as DCO 2H, unique to the APRN-level blueprint.", domain: "Evaluation and Management" },
      { term: "Methadone equianalgesic conversion", defn: "Non-linear, dose-dependent cross-titration math used when rotating to or from methadone. Higher baseline morphine equivalents require larger reduction factors than other opioid rotations.", domain: "Evaluation and Management" },
      { term: "Palliative-care emergencies", defn: "DCO 2E. Includes spinal cord compression, hemorrhage, seizures, and superior vena cava (SVC) syndrome. Each requires recognition, evidence-based urgent management, and alignment with the patient's documented goals of care.", domain: "Evaluation and Management" },
      { term: "PPS (Palliative Performance Scale)", defn: "0–100 scale measuring functional status in advanced illness. Used in prognostication and hospice eligibility decisions.", domain: "Assessment and Data Collection" },
      { term: "POLST / MOLST", defn: "Physician (or Medical) Orders for Life-Sustaining Treatment. Portable, actionable medical orders covering CPR, intubation, artificial nutrition, and antibiotics that travel with the patient across settings.", domain: "Assessment and Data Collection" },
      { term: "Interdisciplinary group (IDG/IDT)", defn: "Required hospice care team — APRN/RN, physician, social worker, chaplain, hospice aide, volunteer — that develops and updates the plan of care at least every 15 days under the Medicare Hospice Benefit.", domain: "Professionalism and Practice" },
      { term: "Hospice eligibility", defn: "Physician-certified life expectancy of six months or less if the disease runs its expected course. ACHPN candidates must recognize disease-specific criteria (e.g., FAST scale for dementia, NYHA Class IV for heart failure).", domain: "Assessment and Data Collection" },
      { term: "Prolonged grief disorder (PGD)", defn: "DSM-5-TR diagnosis (added 2022) characterized by persistent, impairing grief lasting at least 12 months after the death. Distinct from anticipatory grief and from culturally normal grief responses.", domain: "Education and Communication" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "ACHPN vs. CHPN, CHPPN, HPM, APHSW-C",
    prose: [
      "ACHPN sits alongside several related credentials. Many APRNs Google \"ACHPN\" when they actually need a different HPCC credential, or when they confuse the APRN exam with its physician (HPM) or social-work (APHSW-C) parallels. The distinction matters before paying the application fee.",
    ],
    rows: [
      { row: "ACHPN", highlight: true, body: "HPCC", scope: "Advanced-practice hospice and palliative nursing", who: "Nurse Practitioners and Clinical Nurse Specialists" },
      { row: "CHPN", body: "HPCC", scope: "Hospice and palliative nursing for adult patients", who: "RNs in hospice, palliative, or serious-illness roles" },
      { row: "CHPPN", body: "HPCC", scope: "Pediatric hospice and palliative", who: "RNs caring for pediatric end-of-life patients" },
      { row: "HPM", body: "ABIM / ABMS member boards", scope: "Hospice and Palliative Medicine subspecialty", who: "Physicians (MD/DO) subspecializing in HPM" },
      { row: "APHSW-C", body: "HPCC", scope: "Advanced palliative hospice social work", who: "Licensed clinical social workers in palliative/hospice settings" },
    ],
    closingProse:
      "<strong>Take ACHPN if you are an NP or CNS with at least 500 documented hospice or palliative APRN practice hours in the past 12 months.</strong> Take CHPN if you are an RN. Take CHPPN if your patients are pediatric. HPM is the physician parallel. APHSW-C is the social-work parallel. Note that AGACNP-BC, FNP-BC, and AGPCNP-BC are population-focus APRN certifications used to obtain APRN licensure — ACHPN is a specialty add-on credential, not a replacement.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about ACHPN certification",
    items: [
      { q: "What does ACHPN stand for in nursing?", a: "ACHPN stands for Advanced Certified Hospice and Palliative Nurse. The credential is issued by the Hospice and Palliative Credentialing Center (HPCC) and is the APRN-level board certification for hospice and palliative nursing, restricted to Nurse Practitioners and Clinical Nurse Specialists." },
      { q: "Who issues the ACHPN certification?", a: "HPCC — the Hospice and Palliative Credentialing Center — issues the ACHPN credential. HPCC is the credentialing arm of the Hospice and Palliative Nurses Association (HPNA). First national testing of the advanced-practice exam was held in May 2003 in partnership with ANCC; HPCC acquired the exam in December 2004 and ABSNC accredited it in February 2007." },
      { q: "What are the eligibility requirements for the ACHPN exam?", a: "Candidates need a current, active APRN license; completion of an accredited graduate, postgraduate, or doctoral NP or CNS program with three required graduate-level courses (advanced pathophysiology, advanced health assessment, advanced pharmacology) and a 500-hour clinical practicum; and 500 hours of hospice or palliative APRN practice in the most recent 12 months — or 1,000 hours in the most recent 24 months." },
      { q: "How much does the ACHPN exam cost?", a: "HPCC charges $355 for HPNA members and $515 for non-members. The optional reTEST Assured add-on prepays a single retake for $135. HPNA membership runs about $135 per year, so joining HPNA before applying typically pays for itself on the first sitting." },
      { q: "How many questions are on the ACHPN exam?", a: "HPCC's 2026 ACHPN Detailed Content Outline lists 150 scored items across four domains — Assessment and Data Collection (42), Evaluation and Management (49), Education and Communication (38), and Professionalism and Practice (21). Some third-party prep vendors describe additional unscored pretest items; HPCC's published DCO sums to 150 scored." },
      { q: "What is the ACHPN pass rate?", a: "HPCC reported a 70.4% first-time pass rate in 2025 (200 of 284 candidates). The 2024 first-time pass rate was 76.0% (222 of 292). Repeater pass rates run about 16 points lower, so a casual second attempt without rebuilt study habits carries meaningful risk." },
      { q: "When can I take the ACHPN exam?", a: "HPCC offers the ACHPN exam during four annual windows: March, June, September, and December. Online application deadlines fall about two weeks before each window opens — Feb 15, May 15, Aug 15, and Nov 15. Application start dates open three months before each window." },
      { q: "Does ACHPN certification expire?", a: "Yes. ACHPN is valid for four years. Renewal runs through HPAR — Hospice and Palliative Accrual for Recertification — where holders accumulate 100 points (1 CE contact hour = 1 HPAR point) and complete the Situational Judgment Exercise. ACHPN holders must also maintain 500/1,000 practice hours during the cycle. Lapsed credentials cannot be renewed by CE catch-up and require re-examination." },
      { q: "What is the difference between CHPN and ACHPN?", a: "CHPN is the RN-level credential — any registered nurse with 500/1,000 hospice or palliative practice hours can sit it. ACHPN is the APRN-level credential, restricted to Nurse Practitioners and Clinical Nurse Specialists who completed an accredited graduate NP or CNS program. Both are issued by HPCC. The blueprints, eligibility, and exam content differ; RNs progressing through an APRN program typically move from CHPN to ACHPN." },
      { q: "Will my hospital pay for ACHPN certification?", a: "Many academic medical centers, hospice agencies, and palliative-care consult services reimburse the ACHPN application fee through an APRN-specific education benefit. The Hospice and Palliative Nurses Foundation (HPNF) also runs the Sandra Lee Schafer Certification Scholarship, which covers fees for selected applicants paying out of pocket." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following primary sources. Fees, blueprint counts, and recertification rules shift on HPCC's revision cycle — always verify numeric facts against the current HPCC handbook before relying on them for application decisions.",
    ],
    list: [
      "Hospice and Palliative Credentialing Center (HPCC) — ACHPN credential page: eligibility, fees, testing windows, PSI scheduling — advancingexpertcare.org/hpcc/credentials/achpn/",
      "HPCC — Exam Statistics: 2024 and 2025 ACHPN pass rates and active certificant counts — advancingexpertcare.org/hpcc/why-certification/exam-statistics/",
      "HPCC — History: NBCHN 1993 founding, 2003 first advanced-practice testing, 2004 ACHPN acquisition, 2007 ABSNC accreditation through Feb 2027 — advancingexpertcare.org/hpcc/why-certification/hpcc-history/",
      "HPCC — 2026 ACHPN Detailed Content Outline (PDF, April 2026 role-delineation study report) — advancingexpertcare.org/wp-content/uploads/2026/05/2026-ACHPN-DCO_for-website.pdf",
      "HPCC — HPAR recertification program: 100 points, Situational Judgment Exercise — advancingexpertcare.org/hpcc/recertification/hpar/",
      "HPCC — How to Recertify ACHPN (4-year cycle, practice hours, HPAR + SJE) — advancingexpertcare.org/hpcc/recertification/how-to-recertify-achpn/",
      "HPCC — reTEST Assured program ($135 prepaid retake) — advancingexpertcare.org/hpcc/retest-assured/",
      "US Bureau of Labor Statistics — Nurse Anesthetists, Nurse Midwives, and Nurse Practitioners OOH: $129,210 median NP wage (May 2024); hospital setting median $137,790",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice ACHPN-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to HPCC's four-domain blueprint. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full ACHPN question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "CHPN",
      title: "CHPN vs ACHPN: when to move from RN to APRN certification",
      blurb: "Eligibility differences, blueprint contrast, and career timing for nurses progressing from bedside hospice work to advanced palliative practice.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Emergencies",
      title: "Palliative-care emergencies: the high-acuity ACHPN items APRNs underestimate",
      blurb: "Spinal cord compression, hemorrhage, seizures, and SVC syndrome — recognition, evidence-based urgent management, and alignment with documented goals of care.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "Palliative APRN",
      title: "Building an inpatient palliative consult service with ACHPN-credentialed APRNs",
      blurb: "How academic medical centers use specialty-certification rates to justify APRN-led consult services, and what hiring directors actually ask in ACHPN interviews.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
