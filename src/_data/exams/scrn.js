// SCRN exam detail page — structured data.
// Sourced from Content/SCRN Certification.docx (verified against ABNN / AANN
// handbook, AHA/ASA 2019 guidelines, and CDC 2025 stroke statistics as of the
// 2026-04 cycle). Lives at /certifications/scrn/ via the paginated template.

module.exports = {
  code: "SCRN",
  name: "Stroke Certified Registered Nurse",
  body: "ABNN",
  cat: "specialty",
  catLabel: "Medical-Surgical & Specialty",
  updated: "2026-04",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title: "SCRN Certification 2026: Complete Guide for Nurses | NursPrep",
    description:
      "Earn your Stroke Certified Registered Nurse (SCRN) credential in 2026. Eligibility, exam blueprint, fees, 67% pass rate, 8-week study plan, and clinical facts.",
    ogTitle: "SCRN Certification 2026 — Stroke Certified Registered Nurse",
    ogDescription:
      "ABNN eligibility, the 2026 SCRN blueprint, $300 member fee, 67% 2024 pass rate, and an 8-week study plan for stroke nurses.",
  },

  // ---- HERO
  lede:
    "SCRN is the specialty certification offered by the American Board of Neuroscience Nursing (ABNN) that validates an RN's expertise in time-critical stroke care — from NIHSS administration to alteplase screening to post-thrombectomy monitoring. Launched in 2012, it is the credential The Joint Commission surveyors look for in Primary and Comprehensive Stroke Centers.",
  heroPills: [
    { k: "Questions", v: "170 items" },
    { k: "Duration", v: "3 hours" },
    { k: "Renewal", v: "5 years" },
    { k: "Pass rate", v: "67% (2024)" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "American Board of Neuroscience Nursing (ABNN)" },
    { k: "Format", v: "Computer-based at PSI centers or remote proctoring" },
    { k: "Scored items", v: "150 of 170 (20 unscored pretest)" },
    { k: "Pacing", v: "~63 seconds per item" },
    { k: "Eligibility", v: "Active, unrestricted RN license" },
    { k: "Experience", v: "1 year (2,080 hrs) stroke nursing in last 3 years" },
    { k: "Fee (AANN member)", v: "$300 credit · $325 check" },
    { k: "Renewal cycle", v: "5 years — CE pathway or re-exam" },
  ],
  heroCardFoot:
    "Verified against 2026 ABNN SCRN Candidate Handbook and AANN prep resources",

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
    { id: "compare", label: "SCRN vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "SCRN certification at a glance",
    prose: [
      "SCRN — Stroke Certified Registered Nurse — is the nursing-side benchmark for time-critical stroke care. The credential is issued by the <strong>American Board of Neuroscience Nursing (ABNN)</strong>, the credentialing arm of the American Association of Neuroscience Nurses (AANN). ABNN launched the SCRN in 2012 in response to the rapid expansion of Primary Stroke Centers and Comprehensive Stroke Centers certified by The Joint Commission.",
      "SCRN is a specialty certification, not a course. The blueprint maps directly to the AHA/ASA Guidelines for the Early Management of Acute Ischemic Stroke — the exact playbook Joint Commission surveyors audit during Stroke Center visits.",
    ],
    stats: [
      { n: "170", l: "Total items", sub: "150 scored · 20 pretest" },
      { n: "3 hrs", l: "Time limit", sub: "~63 seconds per item" },
      { n: "67%", l: "2024 pass rate", sub: "932 of 1,389 candidates" },
      { n: "5 yrs", l: "Renewal cycle", sub: "CE pathway or re-exam" },
    ],
    factBox: {
      tone: "info",
      title: "Why the SCRN matters in 2026",
      html:
        "Every 40 seconds, someone in the United States has a stroke — more than <strong>795,000</strong> per year, and stroke is now the <strong>4th leading cause of death</strong> (162,639 deaths in 2023, per CDC WONDER). Roughly 1.9 million neurons die per minute in an untreated acute ischemic stroke, so every minute the stroke nurse shaves off door-to-needle time translates into preserved brain.",
    },
    coverImageLabel:
      "Stroke RN administering NIHSS at the bedside in a comprehensive stroke center",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the SCRN exam?",
    prose: [
      "Yes — if you hold an <strong>active, unrestricted RN license</strong> in the US, Canada, or a participating US territory, and you have logged at least <strong>2,080 hours of stroke nursing experience in the last 3 years</strong>.",
      "The hours can be direct bedside or indirect (program administration, stroke coordinator roles). ABNN audits a random sample of applications, so keep job-title and employer documentation in case your file is selected.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You have at least 2,080 hours of stroke-nursing experience inside the last three years, in direct or indirect roles.",
      "You are comfortable naming at least three stroke assessment scales you use in practice and have performed NIHSS on real patients.",
      "You have administered or directly supported the administration of tPA / alteplase, including the post-tPA neuro-check schedule.",
      "Your setting fits a recognized stroke role: acute stroke unit, neuro ICU, ED at a Primary or Comprehensive Stroke Center, stroke rehab, stroke-focused home health, or stroke program administration.",
      "You are comfortable with both ischemic and hemorrhagic stroke pathophysiology — including post-SAH vasospasm monitoring and ICH management.",
    ],
  },

  // ---- BLUEPRINT (weights as percentages from 2026 blueprint)
  blueprint: {
    heading: "SCRN exam blueprint — six domains (2026)",
    prose: [
      "The SCRN blueprint is six domains weighted by the points in the stroke continuum where most nursing decisions happen. <strong>Hyperacute Care</strong> and <strong>Acute Care</strong> together carry about <strong>49.4%</strong> of the exam — roughly half of your study time should live there.",
      "Do not under-index Systems, Leadership & Quality Care just because it feels non-clinical. GWTG-Stroke metrics, Joint Commission stroke-center standards, and interdisciplinary team coordination reliably show up on the exam. Candidates who rely only on bedside experience tend to bleed points in Systems and in Primary/Secondary Prevention.",
    ],
    domains: [
      { label: "Anatomy, Physiology & Pathophysiology of Stroke", weight: 16.5 },
      { label: "Primary & Secondary Preventative Care", weight: 11.2 },
      { label: "Hyperacute Care (NIHSS, tPA, LVO, thrombectomy workflow)", weight: 24.7 },
      { label: "Acute Care (post-tPA monitoring, BP targets, complications)", weight: 24.7 },
      { label: "Post-Acute Care (rehab transitions, mRS, caregiver support)", weight: 11.2 },
      { label: "Systems, Leadership & Quality Care (GWTG-Stroke, TJC standards)", weight: 11.7 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and testing windows",
    prose: [
      "ABNN delivers the SCRN through <strong>PSI testing centers</strong> and also offers <strong>remote proctoring</strong> for candidates who prefer to test from a private, controlled space. After you apply online through the ABNN portal, you schedule into one of three testing windows: Winter (February), Spring (May), or Fall (September). Apply early — each window has a hard application deadline roughly 4 weeks before the testing period opens.",
    ],
    rows: [
      { k: "Exam — AANN member (credit card)", v: "$300" },
      { k: "Exam — AANN member (check / money order)", v: "$325" },
      { k: "Exam — non-member (credit card)", v: "$400", highlight: true },
      { k: "Exam — non-member (check / money order)", v: "$425" },
      { k: "Recertification by exam", v: "Same as initial exam fee" },
      { k: "CE Exam (recertification, per exam) — non-member", v: "$40" },
      { k: "AANN annual membership (individual, approx.)", v: "~$109" },
    ],
    factBox: {
      tone: "success",
      title: "Membership ROI: pays for itself on your first attempt",
      html:
        "An AANN membership (~$109) typically <strong>pays for itself on your first exam attempt</strong> through the $100 fee discount (non-member $400 vs member $300) — plus you get member pricing on the SCRN Review Course, Self-Assessment Exam, and Prep Package. Many Comprehensive and Primary Stroke Centers also reimburse the exam fee through clinical-ladder or education benefits; ask your stroke coordinator before paying out of pocket.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "The SCRN is valid for <strong>five years</strong>. ABNN offers two renewal pathways. <strong>Pathway 1 — Recertification by Exam:</strong> retake the current SCRN exam in your renewal window at the standard exam fee. This is most suitable for nurses who find test-taking easier than accumulating targeted stroke-specific CE, or who want a fresh blueprint review every cycle.",
      "<strong>Pathway 2 — Recertification by CE:</strong> under Option A, log <strong>4,160 practice hours</strong> (about 2 years full-time) across the 5-year cycle plus <strong>50 stroke-specific CE contact hours</strong>, with a minimum of <strong>20 hours in Category 1</strong>. Option B accepts a lower 2,500 practice-hour floor but requires a higher CE load with a minimum of 30 Category 1 hours. All CE hours must be stroke-related — the most common audit failure is generic nursing CE that isn't stroke-specific. Keep certificates for six years in case of audit.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the SCRN exam?",
    prose: [
      "ABNN reported <strong>932 of 1,389</strong> SCRN candidates passed the exam in 2024 — a <strong>67%</strong> pass rate, below the published <strong>5-year average of 71%</strong>. Most passing candidates report 8 to 12 weeks of focused study; candidates without direct bedside stroke exposure typically need 12 to 16 weeks.",
      "The exam rewards guideline-based reasoning over rote memorization. Fluency with the AHA/ASA Early Management of AIS guidelines, the pre-tPA and post-tPA BP target grid, and the NIHSS item order is the single biggest pass-rate lever. 2022–2023 candidate volumes trend similarly to 2024, though official year-level counts are pending publication in the 2026 ABNN handbook.",
    ],
    rows: [{ year: "2024", pct: 67 }],
    target: 80,
    footnote:
      "Only 2024 is charted here because it is the only year with official candidate counts published in the 2026 ABNN handbook cycle. 2022 and 2023 year-level pass rates are listed by ABNN as trend estimates pending publication; the 71% 5-year average quoted above is based on those preliminary figures.",
    factBox: {
      tone: "info",
      title: "The lever is guideline fluency, not bedside experience",
      html:
        "Candidates who <strong>complete the AANN Self-Assessment Exam around week 4</strong> and then rebuild study time around the resulting domain-score report pass at meaningfully higher rates than candidates relying on bedside experience alone. The Hyperacute + Acute Care block is nearly half the exam — <strong>allocate at least 50% of your study hours</strong> to those two domains.",
    },
  },

  // ---- STUDY PLAN + TIPS (verbatim 8-week plan from Word doc)
  plan: {
    heading: "An 8-week SCRN study plan",
    prose: [
      "A structured 8-week plan is enough for most RNs with stroke-unit or ED experience — roughly <strong>69 total study hours</strong> across the six blueprint domains. Hyperacute and Acute Care each get two dedicated weeks (weeks 3–6), and the plan wraps with a full-length practice exam and targeted review.",
    ],
    weeks: [
      { n: 1, focus: "Anatomy & pathophysiology — map all vascular territories + stroke subtypes", qs: 8 },
      { n: 2, focus: "Primary & secondary prevention — HTN, AF, dyslipidemia targets", qs: 6 },
      { n: 3, focus: "Hyperacute care (Part 1) — NIHSS certified; tPA inclusion/exclusion", qs: 10 },
      { n: 4, focus: "Hyperacute care (Part 2) — LVO recognition + thrombectomy window", qs: 10 },
      { n: 5, focus: "Acute care (Part 1) — BP management targets nailed", qs: 10 },
      { n: 6, focus: "Acute care (Part 2) — complications + DVT prophylaxis", qs: 8 },
      { n: 7, focus: "Post-acute + systems — mRS scoring + GWTG-Stroke metrics", qs: 7 },
      { n: 8, focus: "Full-length practice exams (×2) + gap review", qs: 10 },
    ],
    tipsHeading: "How SCRN candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Allocate ≥50% of study to Hyperacute + Acute Care",
        text:
          "Those two domains combine for 49.4% of the exam. Candidates who split study time evenly across all six domains consistently under-perform on the highest-weighted material.",
      },
      {
        kicker: "Build a one-page BP target grid",
        text:
          "Memorizing pre-tPA (≤185/110), post-tPA (≤180/105), and post-thrombectomy BP cutoffs without context is the most common memorization trap. Build a one-page grid and review it daily — context matters.",
      },
      {
        kicker: "Don't skip the systems/quality content",
        text:
          "GWTG-Stroke metrics and Joint Commission stroke-center standards make up roughly 12% of the exam. Drill GWTG core measures, door-to-needle phased targets (≤60 min, ≤45 min Phase II, ≤30 min Phase III), and TJC Primary vs. Comprehensive Stroke Center differences.",
      },
      {
        kicker: "Complete AHA/ASA guideline summaries before the Self-Assessment",
        text:
          "Relying on bedside experience alone without reviewing the current AHA/ASA Early Management of AIS guidelines is a reliable way to lose hyperacute points. Summarize the 2019 guidelines and subsequent focused updates before week 4's self-assessment.",
      },
      {
        kicker: "Schedule the exam within a week of a PTO block",
        text:
          "Taking the SCRN during a high-census work stretch is a predictable failure pattern. Book your exam within one week of a PTO block so you arrive rested — a 3-hour computer-based exam is fatigue-sensitive.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (verbatim Q1 from Word doc)
  sample: {
    heading: "Sample SCRN question",
    prose: [
      "This item mirrors ABNN's scenario format: a short clinical stem, a time-pressured decision, and four plausible options where only one is <em>most appropriate</em>. Try it before you read the rationale.",
    ],
    q: {
      scenario:
        "A 68-year-old patient arrives with acute left hemiplegia. Last known well was 2 hours ago. Non-contrast head CT is negative for hemorrhage. BP is 192/108.",
      stem: "What is the MOST appropriate next nursing action?",
      options: [
        "Administer IV alteplase immediately.",
        "Lower BP to ≤185/110 with labetalol per protocol, then administer alteplase.",
        "Wait 1 hour and reassess BP.",
        "Obtain a repeat CT before any intervention.",
      ],
      correct: 1,
      rationale:
        "Pre-tPA BP must be ≤185/110 per AHA/ASA guidelines. Administering tPA with uncontrolled BP significantly increases hemorrhagic conversion risk, so labetalol (or nicardipine) is given first to lower BP into range. Option A is unsafe; Option C wastes the tPA window; Option D is unnecessary when the initial CT was diagnostic and negative for hemorrhage.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key SCRN terms every candidate should know",
    prose: [
      "These terms surface in most SCRN exam items. Review them until the definitions feel automatic — scenario-based stems often hinge on recognizing which framework (tPA window, LVO criteria, GWTG metric) applies.",
    ],
    rows: [
      { term: "Penumbra", defn: "Region of ischemic but salvageable brain tissue surrounding the infarct core — the target of reperfusion therapy.", domain: "Pathophysiology" },
      { term: "LVO", defn: "Large Vessel Occlusion — proximal blockage of the ICA, M1 MCA, basilar, or P1 PCA; candidate for mechanical thrombectomy.", domain: "Hyperacute" },
      { term: "tPA / Alteplase", defn: "IV thrombolytic; standard window 0–4.5 hours from last known well in eligible acute ischemic stroke patients.", domain: "Hyperacute" },
      { term: "TNK / Tenecteplase", defn: "Newer IV thrombolytic; increasingly preferred for AIS per the 2024 AHA focused update.", domain: "Hyperacute" },
      { term: "Door-to-Needle (DTN)", defn: "Time from ED arrival to IV thrombolytic bolus; AHA Target: Stroke goal ≤60 min, Phase II ≤45 min, Phase III ≤30 min.", domain: "Systems" },
      { term: "NIHSS", defn: "NIH Stroke Scale — 0–42 points across 11 items; assesses stroke severity and drives serial post-tPA neuro checks.", domain: "Assessment" },
      { term: "mRS", defn: "Modified Rankin Scale — 0 (no symptoms) to 6 (death); the functional-outcome measure used at discharge and follow-up.", domain: "Post-Acute" },
      { term: "Last Known Well (LKW)", defn: "Last time the patient was observed at baseline neuro status; the anchor point for tPA and thrombectomy eligibility.", domain: "Hyperacute" },
      { term: "ICH", defn: "Intracerebral Hemorrhage — a hemorrhagic stroke subtype; contraindicates tPA; BP management is central.", domain: "Pathophysiology" },
      { term: "SAH", defn: "Subarachnoid Hemorrhage — often aneurysmal; complication watch includes vasospasm (days 3–14) and hydrocephalus.", domain: "Pathophysiology" },
      { term: "Watershed Infarct", defn: "Ischemia at border zones between two major vascular territories — often hypoperfusion-related rather than embolic.", domain: "Pathophysiology" },
      { term: "GWTG-Stroke", defn: "Get With The Guidelines–Stroke — the AHA quality-improvement registry that drives hospital-level stroke metrics.", domain: "Systems" },
      { term: "BE-FAST", defn: "Balance, Eyes, Face, Arm, Speech, Time — stroke screening mnemonic; adds Balance + Eyes beyond FAST to catch posterior-circulation strokes.", domain: "Prevention" },
      { term: "Dysphagia Screen", defn: "Bedside swallow check required before any PO intake (including oral medications) in all stroke patients.", domain: "Acute" },
      { term: "ABCD² Score", defn: "Post-TIA stroke-risk stratification: Age, BP, Clinical features, Duration, Diabetes — 0 to 7; ≥4 drives admission.", domain: "Prevention" },
    ],
  },

  // ---- COMPARE (directly from Word doc comparison table)
  compare: {
    heading: "SCRN vs. CNRN vs. CCRN",
    prose: [
      "If you're weighing neuroscience certifications, the decision usually comes down to breadth versus depth. Here's how SCRN stacks up against the two credentials it gets compared with most often.",
    ],
    rows: [
      { row: "SCRN", highlight: true, body: "ABNN (AANN)", scope: "Stroke specifically — hyperacute through post-acute", who: "Stroke unit, stroke coordinator, ED at stroke centers" },
      { row: "CNRN", body: "ABNN (AANN)", scope: "Broad neuroscience — stroke, TBI, tumor, epilepsy, neurosurgery", who: "Neuro ICU generalists, neurosurgery floor RNs" },
      { row: "CCRN (Adult, Neuro population)", body: "AACN", scope: "Adult critical care (neuro patients included)", who: "Neuro/critical-care crossover ICU RNs" },
    ],
    closingProse:
      "<strong>Choose SCRN if stroke patients are at least 60% of your caseload.</strong> Choose CNRN if your population spans TBI, tumor, epilepsy, and stroke in roughly equal measure. CCRN is the right fit if you are primarily a critical-care nurse who happens to see neuro — it renews every 3 years rather than 5 and has a different blueprint.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about SCRN certification",
    items: [
      { q: "How hard is the SCRN exam?", a: "Moderate. The published 5-year average pass rate is 71%, with 2024 dipping to 67% (932 of 1,389 candidates). Most passing candidates report 8 to 12 weeks of focused study. The exam rewards guideline-based reasoning over rote memorization." },
      { q: "Is the SCRN worth it financially?", a: "For most candidates, yes. The $300–$425 exam fee often pays back within a few months once the credential is reflected in compensation, hiring preference, or role access at Comprehensive or Primary Stroke Centers." },
      { q: "Can I take the SCRN without dedicated stroke-unit experience?", a: "Technically yes — the 2,080-hour requirement allows indirect stroke care from ED, rehab, or administration roles. But candidates without direct bedside stroke experience typically struggle on the Hyperacute and Acute Care domains, which together are nearly half the exam." },
      { q: "How long should I study for the SCRN?", a: "8 to 12 weeks is the typical range, at 6 to 10 hours per week. Candidates without strong stroke bedside exposure often need 12 to 16 weeks." },
      { q: "What's the difference between SCRN and CNRN?", a: "SCRN is stroke-focused. CNRN covers the full neuroscience spectrum — stroke, TBI, tumors, epilepsy, neurosurgery. Pick based on your patient population: SCRN if stroke is ≥60% of your caseload, CNRN if your population is mixed." },
      { q: "Does the SCRN expire?", a: "Yes — every 5 years. Renew by exam or by completing 50 stroke-specific CE hours plus 4,160 practice hours (Option A). Option B accepts 2,500 practice hours with a higher CE requirement. All CE must be stroke-related." },
      { q: "Does my employer reimburse the SCRN exam fee?", a: "Many Comprehensive and Primary Stroke Centers reimburse fees as part of clinical-ladder programs. Check your unit's education benefits or ask the stroke program coordinator before paying out of pocket." },
      { q: "Can I take the SCRN remotely from home?", a: "Yes — ABNN offers remote proctoring through PSI. Test your equipment, webcam, and room-scan setup 24 hours in advance to avoid day-of disqualification." },
      { q: "What happens if I fail the SCRN?", a: "You can retake the exam in the next testing window after a waiting period. Use the score report to target your weakest domains rather than re-studying the whole blueprint." },
      { q: "Is the SCRN recognized outside the United States?", a: "The credential is recognized in the US and Canada. Some international hospitals affiliated with US stroke networks recognize it as well, but outside North America recognition varies by institution." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following primary sources. Fees, blueprint weights, and recertification rules shift on ABNN's revision cycle — always verify numeric facts against the current ABNN handbook before relying on them for application decisions.",
    ],
    list: [
      "American Board of Neuroscience Nursing (ABNN) — 2026 SCRN Candidate Handbook, eligibility, application, recertification",
      "American Association of Neuroscience Nurses (AANN) — SCRN Review Course, Self-Assessment Exam, membership pricing",
      "AHA/ASA 2019 Guidelines for the Early Management of Acute Ischemic Stroke (and subsequent focused updates)",
      "AHA Target: Stroke — Phase I, II, III door-to-needle targets and GWTG-Stroke quality metrics",
      "CDC Stroke Facts — 795,000+ annual strokes; 162,639 deaths in 2023; stroke as 4th leading cause of death",
      "DAWN and DEFUSE 3 trials — 24-hour thrombectomy window eligibility in imaging-selected LVO",
      "The Joint Commission — Primary Stroke Center and Comprehensive Stroke Center certification standards",
      "US Bureau of Labor Statistics — Occupational Employment and Wage Statistics for Registered Nurses ($98,430 median)",
      "Saver JL. Time is brain — quantified. Stroke. 2006 (1.9 million neurons lost per minute in untreated AIS)",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice SCRN-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to the 2026 ABNN blueprint — weighted toward Hyperacute and Acute Care. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full SCRN question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "CNRN",
      title: "SCRN vs CNRN: which ABNN credential fits your scope?",
      blurb: "Blueprint overlap, career impact, and when stroke-focused depth beats neuroscience breadth — for nurses deciding between the two.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "Hyperacute + Acute Care: the 49% of SCRN that decides your pass",
      blurb: "Why these two domains carry nearly half your score, and the tPA, thrombectomy, and BP-target workflows ABNN tests most.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "Stroke center",
      title: "Landing a Comprehensive Stroke Center role with SCRN on your badge",
      blurb: "How TJC-certified stroke centers actually use SCRN-holder counts, and what stroke coordinators look for beyond the credential.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
