// CLPN exam detail page — structured data.
// Sourced from Content/CLPN_research.json (verified against NADONA/LTC primary
// pages and NADONA's own archived product pages, 2026-09 research pass).
//
// IMPORTANT FOR EDITORS: CLPN is a voluntary LONG-TERM-CARE specialty
// certification awarded by NADONA/LTC to nurses who ALREADY hold an LPN/LVN
// licence. It is NOT LPN licensure and NOT the NCLEX-PN. NADONA publishes no
// item count, time limit, passing score, pass rate or weighted blueprint for
// this exam — those fields are deliberately absent here rather than estimated.
// See the "gaps" array in Content/CLPN_research.json before adding numbers.
//
// Lives at /certifications/clpn/ via the paginated template.

module.exports = {
  code: "CLPN",
  name: "Certified Licensed Practical Nurse",
  body: "NADONA/LTC",
  cat: "specialty",
  catLabel: "Medical-Surgical & Specialty",
  updated: "2026-09",

  // Page-level SEO
  seo: {
    title:
      "CLPN Certification: NADONA Eligibility, Cost & Renewal | NursPrep",
    description:
      "CLPN certification is NADONA/LTC's long-term-care credential for already-licensed LPNs — not LPN licensure. Eligibility, fees, the 3-year renewal, and what NADONA does not publish.",
    ogTitle:
      "CLPN Certification — NADONA/LTC's Long-Term-Care Credential for LPNs",
    ogDescription:
      "Why CLPN is a specialty certification and not a licence: NADONA eligibility, the 3-year / 1,000-hour renewal, and the exam facts NADONA never published.",
  },

  // ---- HERO
  lede:
    "CLPN certification is a voluntary long-term-care specialty credential awarded by NADONA/LTC to nurses who already hold an LPN or LVN licence. It is not a nursing licence, and it is not the NCLEX-PN. Licensure comes first; CLPN sits on top of it.",
  heroPills: [
    { k: "Awarding body", v: "NADONA/LTC" },
    { k: "Prerequisite", v: "LPN/LVN licence" },
    { k: "Renewal", v: "3 years" },
    { k: "Renewal CE", v: "50 contact hours" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "National Association of Directors of Nursing Administration in Long Term Care (NADONA/LTC)" },
    { k: "Credential type", v: "Voluntary specialty certification — not a licence" },
    { k: "Prerequisite", v: "Active, current LPN or LVN licence" },
    { k: "Practice setting", v: "Long-term care and skilled nursing" },
    { k: "Registration", v: "NADONA MemberClicks exam portal" },
    { k: "Exam fee", v: "$200 member · $300 non-member (last published Jan 2025)" },
    { k: "Renewal cycle", v: "3 years" },
    { k: "Renewal requirement", v: "1,000 LTC employment hours + 50 contact hours" },
    { k: "Not published by NADONA", v: "Item count, time limit, passing score, pass rate" },
  ],
  heroCardFoot:
    "Verified against NADONA/LTC's published CLPN pages, September 2026. NADONA does not publish this exam's item count, time limit, passing score, blueprint weights or pass rate.",

  // ---- TOC
  sections: [
    { id: "overview", label: "Overview" },
    { id: "eligibility", label: "Eligibility" },
    { id: "blueprint", label: "Exam content" },
    { id: "cost", label: "Cost & applying" },
    { id: "passrate", label: "Difficulty" },
    { id: "plan", label: "Study plan" },
    { id: "sample", label: "Sample Question" },
    { id: "keyterms", label: "Key terms" },
    { id: "compare", label: "CLPN vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "What is CLPN certification?",
    prose: [
      "CLPN certification is a voluntary long-term-care specialty credential awarded by <strong>NADONA/LTC</strong> — the National Association of Directors of Nursing Administration in Long Term Care. It is granted to nurses who already hold an active LPN or LVN licence. Passing the exam earns the right to write CLPN after your name.",
      "CLPN is not a licence. A practical nurse becomes licensed by completing an approved practical nursing programme, passing the <strong>NCLEX-PN</strong>, and registering with a state board of nursing. That licence is the prerequisite. CLPN certification is the optional specialty layer on top of it.",
      "NADONA/LTC is a long-term-care body. It describes itself as the association for directors of nursing and infection preventionists in long-term care and skilled nursing facilities. CLPN therefore validates practice in nursing homes, skilled nursing facilities and post-acute care — not practical nursing in general.",
    ],
    coverImageLabel:
      "LPN reviewing a resident care plan in a skilled nursing facility",
    stats: [
      { n: "3 yrs", l: "Renewal cycle", sub: "Due the last day of your certification month" },
      { n: "1,000", l: "LTC employment hours", sub: "Required across each 3-year cycle" },
      { n: "50", l: "Contact hours per cycle", sub: "25 in leadership/regulatory topics · 20 ANCC-accredited" },
      { n: "—", l: "Published exam specs", sub: "NADONA lists no item count, time limit or pass rate" },
    ],
    factBox: {
      tone: "warn",
      title: "CLPN, LPN licensure and NCLEX-PN are three different things",
      html:
        "<strong>LPN / LVN</strong> is a state licence to practise, issued by a state board of nursing. <strong>NCLEX-PN</strong> is the licensure examination that earns that licence, administered under the National Council of State Boards of Nursing (NCSBN). <strong>CLPN</strong> is a voluntary certification from NADONA/LTC, taken after licensure, that validates long-term-care expertise. You cannot sit the CLPN exam without an LPN or LVN licence already in hand, and passing CLPN neither grants nor renews a licence.",
    },
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Who is eligible for CLPN certification?",
    prose: [
      "You need an <strong>active, current LPN or LVN licence</strong> plus practice in a long-term care setting. NADONA/LTC publishes no minimum number of years or hours for initial CLPN certification.",
      "That absence matters. NADONA's live CLPN exam page carries no eligibility criteria at all — it states only that more information is coming. The licence-plus-LTC-practice description comes from secondary nursing-career sources, so treat it as a guide and confirm your own case with NADONA before paying.",
      "Watch one common error. The <strong>1,000-hour</strong> long-term-care figure quoted widely online is the <em>renewal</em> requirement, not an entry requirement. It applies to nurses who are already certified.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You hold a current, unencumbered LPN or LVN licence issued by a state board of nursing.",
      "You work in long-term care — a nursing home, skilled nursing facility or post-acute unit — rather than acute-care med-surg.",
      "You are comfortable with the conditions that dominate LTC caseloads: dementia, diabetes, wounds and skin integrity, polypharmacy, and end-of-life care.",
      "You can act confidently within the LPN scope of practice, including knowing when a task must be escalated to the RN or director of nursing.",
      "You already work with your facility's incident reporting, care planning, and CMS survey expectations.",
    ],
  },

  // ---- BLUEPRINT
  // No `domains` array: NADONA publishes no weighted content outline.
  // Do not add invented percentages here.
  blueprint: {
    heading: "What does the CLPN exam cover?",
    prose: [
      "NADONA/LTC does not publish a weighted blueprint for the CLPN exam. There is no official content outline, no domain percentages and no item count on its public site — the CLPN exam page currently states only that more information is coming.",
      "The best available guide is NADONA's own CLPN preparation course, which covered six topic areas: the role of the LPN; medical conditions in long-term care; Alzheimer's disease, dementia, death and dying; medication and skin; incidents, accidents and care plans; and human resources, regulations and scope of practice. Those areas carry no weights — NADONA has never stated how the exam distributes items across them.",
      "Archived NADONA descriptions do characterise the exam's style. It covers the medical conditions encountered in long-term care and the symptoms they produce, and it uses scenario items that ask the nurse to choose the best course of action for a resident within the LPN scope of practice. Expect judgement questions rather than recall drills.",
      "Treat any published CLPN exam blueprint on a third-party prep site with suspicion. Item counts circulating online usually belong to the NAPNES CLTC credential or the PAC-LPN exam, both of which are different certifications from different organisations.",
    ],
  },

  // ---- COST
  cost: {
    heading: "What does the CLPN exam cost, and how do you apply?",
    prose: [
      "NADONA/LTC does not publish a current CLPN exam price on its public site. Pricing appears only after you create an account in NADONA's MemberClicks portal. The figures below are the last prices NADONA published — verify them before budgeting.",
      "Applying takes three steps. Create a NADONA account, open the exam registration portal, then purchase and sit the CLPN exam. Renewals run through a separate certification renewal portal.",
    ],
    rows: [
      { k: "Exam — NADONA member", v: "$200 (last published Jan 2025)" },
      { k: "Exam — non-member", v: "$300 (last published Jan 2025)", highlight: true },
      { k: "Recertification — NADONA member", v: "$355 (last published Mar 2025)" },
      { k: "Recertification — non-member", v: "$465 (last published Mar 2025)" },
      { k: "Current published price", v: "Not listed — sign in to the NADONA portal" },
      { k: "NADONA membership", v: "Optional and separate — certification does not include membership" },
    ],
    factBox: {
      tone: "warn",
      title: "These prices are dated, not current",
      html:
        "Every CLPN fee above comes from an archived NADONA product page, because NADONA's live site no longer lists a price. NADONA's own pricing has already moved once — an earlier capture showed a flat <strong>$250</strong> with no member tier before the $200 / $300 split appeared. Confirm the current fee inside the MemberClicks portal or by contacting NADONA directly before you apply. Many skilled nursing facilities reimburse certification fees, so ask your director of nursing first.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "CLPN certification lasts <strong>three years</strong>. NADONA states the requirements plainly: <strong>1,000 employed hours in long-term care over the past three years</strong>, plus <strong>50 contact hours</strong> of continuing education.",
      "The contact hours are not a free choice. <strong>25 of the 50</strong> must fall in leadership, budgeting, the aging process, Medicare and Medicaid, or regulatory requirements. At least <strong>20</strong> must be ANCC-accredited. Track these as you earn them — reconstructing three years of CE certificates at renewal time is the most common avoidable failure.",
      "Your renewal date is the last day of the month in which you originally certified. NADONA's own worked example: certify on 1 January 2019 and you have until 31 January 2022 to renew. NADONA also notes that holding the certification does not make you a NADONA member — membership is separate, and it is what reduces the fee.",
    ],
  },

  // ---- PASS RATE
  // No `rows`: NADONA publishes no pass-rate data for CLPN in any year.
  passrate: {
    heading: "How hard is the CLPN exam?",
    prose: [
      "Nobody outside NADONA can answer that with a number. NADONA/LTC publishes no pass rate and no passing score for the CLPN exam in any year, and publishes none for its other certification exams either.",
      "What is known is the exam's shape. Archived NADONA copy describes scenario-based items set in long-term care, where the task is to choose the best action for a resident within the LPN scope of practice. For an experienced LTC nurse, the difficulty usually sits in the non-clinical material: Medicare and Medicaid rules, survey and regulatory requirements, documentation, and delegation boundaries.",
      "Do not borrow figures from neighbouring credentials. An 80% pass mark circulates online attached to CLPN, but it belongs to the PAC-LPN exam from a different organisation. NADONA's separate long-term-care prep course also requires 80% on its post-tests, which is a course rule rather than the certification standard.",
    ],
    factBox: {
      tone: "info",
      title: "Judge readiness by scope, not by a pass-rate number",
      html:
        "With no published pass rate, the useful self-test is coverage. Can you explain the difference between Medicare Part A skilled coverage and long-term Medicaid placement? Can you describe what triggers an incident report and who reviews it? Can you name the point at which an LPN task must be escalated to the RN? Candidates who struggle with this exam usually know the clinical content and lose points on regulation, documentation and scope.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "An 8-week CLPN exam study plan",
    prose: [
      "Eight weeks is a realistic runway for an LPN already working in long-term care — roughly <strong>40 to 60 total study hours</strong>. Because NADONA publishes no blueprint weights, this plan spreads time evenly across the six prep-course topic areas and reserves the last fortnight for regulation and review.",
      "The question counts below are a practice target, not an exam specification. NADONA does not disclose how many items the CLPN exam contains.",
    ],
    weeks: [
      { n: 1, focus: "Confirm licence status, open a NADONA account, map the six topic areas", qs: 15 },
      { n: 2, focus: "Role of the LPN — scope of practice, delegation, escalation to the RN", qs: 25 },
      { n: 3, focus: "Medical conditions in long-term care — diabetes, heart failure, COPD, infection", qs: 35 },
      { n: 4, focus: "Alzheimer's disease, dementia, behavioural symptoms, death and dying", qs: 35 },
      { n: 5, focus: "Medication administration, polypharmacy, skin integrity and wound care", qs: 35 },
      { n: 6, focus: "Incidents, accidents, falls, care planning and documentation", qs: 30 },
      { n: 7, focus: "HR, Medicare and Medicaid, survey readiness, regulatory requirements", qs: 30 },
      { n: 8, focus: "Mixed scenario review, weakest topic areas, exam-day logistics", qs: 40 },
    ],
    tipsHeading: "Where CLPN candidates lose points",
    tips: [
      {
        kicker: "Study the regulations, not just the residents",
        text:
          "The clinical content is your day job. Medicare and Medicaid coverage rules, CMS survey expectations and documentation standards are not. NADONA's own prep course gave HR, regulations and scope of practice a full topic area — weight your study the same way.",
      },
      {
        kicker: "Know the edge of your scope",
        text:
          "Scenario items frequently test whether an action belongs to the LPN at all. The best answer is often to assess, document and notify the RN or director of nursing rather than to intervene.",
      },
      {
        kicker: "Dementia care is a topic area, not a footnote",
        text:
          "Alzheimer's disease, dementia, death and dying sit together in one NADONA topic area. Behavioural symptom management, capacity, advance directives and comfort-focused care all live here.",
      },
      {
        kicker: "Don't study from the wrong credential",
        text:
          "Prep material sold for NAPNES CLTC, PAC-LPN or the NCLEX-PN does not match this exam. NCLEX-PN material in particular targets entry-level licensure, while CLPN assumes you already practise.",
      },
      {
        kicker: "Sort your CE records from day one",
        text:
          "Renewal needs 1,000 LTC employment hours and 50 contact hours across three years, 20 of them ANCC-accredited. Start the folder on the day you certify, not in month 34.",
      },
    ],
  },

  // ---- SAMPLE QUESTION
  // NADONA releases no retired CLPN items; this is modelled on the exam style
  // NADONA describes, not reproduced from a live form.
  sample: {
    heading: "Sample CLPN-style question",
    prose: [
      "NADONA does not release retired CLPN items. The question below is modelled on the exam style NADONA describes — a long-term-care scenario with four plausible actions, where only one fits the LPN scope of practice.",
    ],
    q: {
      scenario:
        "An 84-year-old resident with moderate Alzheimer's disease has become increasingly agitated over three days. She is pacing the hallway, refusing meals, and struck out at a nursing assistant this morning. Her temperature is 37.9 °C (100.2 °F), she has been incontinent twice overnight after months of continence, and her urine is cloudy. Her family is asking why she is suddenly so difficult.",
      stem: "What should the licensed practical nurse do first?",
      options: [
        "Document the behaviour as dementia-related progression and update the behavioural care plan.",
        "Ask the director of nursing to arrange a one-to-one sitter for the resident's safety.",
        "Report the fever, new incontinence and cloudy urine to the registered nurse as possible delirium from infection.",
        "Reassure the family that agitation is an expected stage of Alzheimer's disease and continue current care.",
      ],
      correct: 2,
      rationale:
        "An acute change in behaviour, a low-grade fever and new incontinence with cloudy urine point to delirium from a possible urinary tract infection, not to dementia progression. Sudden behavioural change in long-term care is treated as a medical finding until proven otherwise. Assessment findings must be reported to the RN, who can obtain orders. Documenting it as progression, arranging a sitter, or reassuring the family all delay the assessment the resident needs.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key long-term-care terms CLPN candidates should know",
    prose: [
      "These terms run through NADONA's CLPN topic areas. Regulatory and reimbursement vocabulary is where experienced bedside nurses most often lose points, so review those rows even when the clinical ones feel obvious.",
    ],
    rows: [
      { term: "LPN scope of practice", defn: "The set of nursing tasks a licensed practical nurse may perform, defined by each state's nurse practice act. It sets the point at which an LPN must escalate to the RN.", domain: "Scope" },
      { term: "Delegation", defn: "Transferring responsibility for a task to another worker while retaining accountability for the outcome. RNs delegate to LPNs; LPNs may direct nursing assistants where state law allows.", domain: "Scope" },
      { term: "ADLs", defn: "Activities of Daily Living — bathing, dressing, toileting, transferring, eating and continence. ADL dependency drives staffing and reimbursement in long-term care.", domain: "Conditions" },
      { term: "Delirium", defn: "An acute, fluctuating disturbance of attention and awareness, often caused by infection, medication or dehydration. Unlike dementia, delirium is usually reversible.", domain: "Dementia" },
      { term: "Sundowning", defn: "Increased confusion and agitation in people with dementia during the late afternoon and evening.", domain: "Dementia" },
      { term: "Advance directive", defn: "A resident's written instructions for future care, including living wills and healthcare power of attorney.", domain: "Dementia" },
      { term: "Polypharmacy", defn: "The use of multiple medications by one resident, raising the risk of interactions, falls and adverse drug events.", domain: "Medication/Skin" },
      { term: "Pressure injury staging", defn: "The Stage 1 to Stage 4 classification of pressure damage, plus unstageable and deep tissue injury, used for wound documentation and prevention planning.", domain: "Medication/Skin" },
      { term: "Braden Scale", defn: "A screening tool that scores pressure injury risk across six factors, including mobility, moisture and nutrition.", domain: "Medication/Skin" },
      { term: "Care plan", defn: "The individualised written plan of care for a resident, updated after any significant change in condition.", domain: "Incidents" },
      { term: "Incident report", defn: "The internal record of a fall, medication error, injury or other unexpected event. It is a quality document, not part of the resident's clinical chart.", domain: "Incidents" },
      { term: "MDS", defn: "Minimum Data Set — the standardised resident assessment completed in Medicare- and Medicaid-certified nursing facilities. It drives care planning and reimbursement.", domain: "Regulatory" },
      { term: "F-tag", defn: "A citation code used by CMS surveyors to record a deficiency against a specific federal nursing home requirement.", domain: "Regulatory" },
      { term: "Survey", defn: "The unannounced state inspection of a nursing facility against federal requirements, resulting in a statement of deficiencies.", domain: "Regulatory" },
      { term: "QAPI", defn: "Quality Assurance and Performance Improvement — the CMS-required programme through which facilities track and improve care outcomes.", domain: "Regulatory" },
      { term: "Medicare Part A skilled benefit", defn: "Time-limited Medicare coverage of skilled nursing or rehabilitation after a qualifying hospital stay. It is distinct from long-stay Medicaid coverage.", domain: "Reimbursement" },
      { term: "Medicaid custodial care", defn: "State and federally funded coverage for long-stay nursing facility residents who need help with daily living rather than skilled care.", domain: "Reimbursement" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "CLPN vs. LPN licensure, NCLEX-PN, CLTC, CLTCN and CDONA",
    prose: [
      "Most confusion about CLPN certification is really confusion between a licence and a certification. The table below separates them. Only one row is a licence; the rest are voluntary credentials or the exam that earns the licence.",
    ],
    rows: [
      { row: "CLPN", highlight: true, body: "NADONA/LTC", scope: "Long-term care nursing at the LPN level", who: "Licensed LPNs and LVNs in nursing homes and skilled nursing facilities" },
      { row: "LPN / LVN licence", body: "State board of nursing", scope: "Legal authority to practise practical nursing", who: "Everyone — the prerequisite for CLPN, not an alternative to it" },
      { row: "NCLEX-PN (exam, not a certification)", body: "NCSBN", scope: "Entry-level practical nursing competence for licensure", who: "Practical nursing graduates seeking a first licence" },
      { row: "CLTC", body: "NAPNES", scope: "Long-term care practice", who: "LPNs wanting an LTC credential from a practical-nursing education body" },
      { row: "CLTCN", body: "NADONA/LTC", scope: "Long-term care nursing, scoped more broadly than CLPN", who: "Nurses seeking NADONA's general long-term-care nurse credential" },
      { row: "CDONA", body: "NADONA/LTC", scope: "Nursing administration in long-term care", who: "Directors and assistant directors of nursing" },
      { row: "CNA (unlicensed role)", body: "State nurse aide registries", scope: "Assisting residents with activities of daily living", who: "Nursing assistants — below LPN, and not a step toward CLPN" },
    ],
    closingProse:
      "<strong>Get licensed first, then certify.</strong> If you are not yet an LPN, the NCLEX-PN and your state board of nursing are the only route — CLPN cannot substitute for a licence. If you are already licensed and working in long-term care, CLPN is NADONA/LTC's credential for that setting. If you are moving into a director of nursing role, CDONA is the credential that matches, not CLPN.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about CLPN certification",
    items: [
      { q: "What does CLPN stand for in nursing?", a: "CLPN stands for Certified Licensed Practical Nurse. It is a voluntary long-term-care specialty certification awarded by NADONA/LTC, the National Association of Directors of Nursing Administration in Long Term Care." },
      { q: "Who offers CLPN certification?", a: "NADONA/LTC awards the CLPN credential. No other organisation issues it. It does not come from ANCC, from NCSBN, or from any state board of nursing." },
      { q: "Is CLPN the same as being an LPN?", a: "No. LPN is a state licence to practise, earned by passing the NCLEX-PN and registering with a state board of nursing. CLPN is an optional certification taken after you already hold that licence." },
      { q: "Do I need to pass the NCLEX-PN before CLPN certification?", a: "Yes. An active LPN or LVN licence is the prerequisite for CLPN, and in the United States that licence requires passing the NCLEX-PN. CLPN neither replaces nor renews a licence." },
      { q: "How many questions are on the CLPN exam?", a: "NADONA does not publish the number of questions, the time limit, or the passing score for the CLPN exam. Question counts found online usually belong to the NAPNES CLTC or PAC-LPN exams, which are different credentials." },
      { q: "What is the CLPN exam pass rate?", a: "NADONA publishes no pass-rate data for the CLPN exam in any year, and none for its other certification exams. Any specific pass rate quoted online is unsourced." },
      { q: "How much does CLPN certification cost?", a: "NADONA does not list a current price publicly. The last prices it published were $200 for members and $300 for non-members, in January 2025. Sign in to NADONA's MemberClicks portal or contact NADONA for the current fee." },
      { q: "How often does CLPN certification need renewing?", a: "Every three years. Renewal requires 1,000 employed hours in long-term care across those three years plus 50 contact hours of continuing education." },
      { q: "What continuing education counts toward CLPN renewal?", a: "Of the 50 contact hours, 25 must cover leadership, budgeting, the aging process, Medicare and Medicaid, or regulatory requirements. At least 20 of the 50 must be ANCC-accredited." },
      { q: "When exactly is my CLPN renewal due?", a: "On the last day of the month in which you originally certified. NADONA's worked example: certify on 1 January 2019 and renewal is due by 31 January 2022." },
      { q: "Does CLPN certification make me a NADONA member?", a: "No. NADONA states that certification does not confer membership. Membership is purchased separately, and it is what reduces the exam and renewal fees." },
      { q: "How do I apply for the CLPN exam?", a: "Create an account on NADONA's site, then register and pay through the MemberClicks exam registration portal. NADONA's public CLPN exam page currently carries no further detail." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Where the facts on this page come from",
    prose: [
      "Every figure on this page traces to NADONA/LTC. NADONA publishes very little about the CLPN exam, so this page states what is published and marks what is not, rather than filling the gaps with numbers borrowed from other credentials.",
      "Fees are the weakest item here. NADONA's live site shows no CLPN price, so the figures come from its own archived product pages and are dated. Confirm the current fee with NADONA before you apply.",
    ],
    list: [
      "NADONA/LTC — CLPN Certification Renewal: the 3-year cycle, 1,000 LTC employment hours, and the 50 / 25 / 20 contact-hour rules (https://www.nadona.org/clpn-certification-renewal)",
      "NADONA/LTC — CLPN Exam page, which currently publishes no exam specifics (https://www.nadona.org/clpn-exam)",
      "NADONA/LTC — organisation scope and long-term care remit (https://www.nadona.org/)",
      "NADONA/LTC — archived CLPN exam product page, source of the $200 member and $300 non-member fees, captured 2025-01-15 (http://web.archive.org/web/20250115123730/https://nadona.org/product/long-term-care-cltc-lpn/)",
      "NADONA/LTC — archived CLPN recertification listing, source of the $355 member and $465 non-member renewal fees, captured 2025-03-14 (http://web.archive.org/web/20250314200514/https://www.nadona.org/products/p/certified-lpn-certificate-of-mastery-program-xml3s)",
      "NADONA/LTC — archived CLPN Certificate of Mastery prep course, source of the six unweighted topic areas, captured 2023-06-08 (http://web.archive.org/web/20230608141339/https://nadona.org/product/clpn-certificate-of-mastery-class/)",
      "National Council of State Boards of Nursing (NCSBN) — NCLEX-PN, the licensure examination that precedes CLPN certification (https://www.ncsbn.org/exams/about-nclex.page)",
      "Vivian Health — CLPN (NADONA) profile, source of the qualitative eligibility description; it states plainly that cost and exam duration are not published (https://www.vivian.com/certifications/clpn-nadona/)",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practise CLPN-style scenarios?",
  ctaProse:
    "Work through long-term-care scenario items covering scope of practice, dementia care, medication safety and CMS regulation. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full CLPN question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "Licensure",
      title: "CLPN vs LPN licensure: which one do you actually need?",
      blurb: "Why the NCLEX-PN and a state board licence come first, and what CLPN certification adds once you already practise in long-term care.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Regulation",
      title: "Medicare, Medicaid and CMS survey rules for long-term-care LPNs",
      blurb: "The reimbursement and regulatory content NADONA gives its own topic area — and where experienced bedside nurses lose the most points.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "Long-term care",
      title: "From CLPN to CDONA: NADONA credentials on the LTC career ladder",
      blurb: "How NADONA's LPN, long-term-care nurse and director of nursing credentials stack up, and which one fits your next role.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
