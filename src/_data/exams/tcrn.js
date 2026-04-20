// TCRN exam detail page — structured data.
// Sourced from Content/TCRN Certification.docx (verified against BCEN, ENA,
// STN, ACS, BLS primary sources as of the 2026-04 cycle).
// Lives at /certifications/tcrn/ via the paginated template.

module.exports = {
  code: "TCRN",
  name: "Trauma Certified Registered Nurse",
  body: "BCEN",
  cat: "critical",
  catLabel: "Critical & Emergency Care",
  updated: "2026-04",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title:
      "TCRN Certification Guide: Eligibility, Exam & Renewal | NursPrep",
    description:
      "Everything trauma nurses need about TCRN certification in 2026 — eligibility, exam blueprint, fees, 59% pass rate, 10-week study plan, and renewal explained.",
    ogTitle:
      "TCRN Certification Guide 2026 — Trauma Certified Registered Nurse",
    ogDescription:
      "BCEN eligibility, the Nov 2025 exam blueprint, $285 fee, 59% pass rate, and a 10-week study plan for trauma RNs.",
  },

  // ---- HERO
  lede:
    "TCRN is the only nationally recognized RN-level board certification for trauma nursing in the United States. It validates expertise across the full trauma continuum — pre-hospital, ED, OR, ICU, step-down, and rehabilitation — not just a single unit.",
  heroPills: [
    { k: "Questions", v: "175 items" },
    { k: "Duration", v: "3 hours" },
    { k: "Renewal", v: "4 years" },
    { k: "Pass rate", v: "59%" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "Board of Certification for Emergency Nursing (BCEN)" },
    { k: "Format", v: "Pearson VUE + Live Remote Proctoring" },
    { k: "Scored items", v: "150 of 175 (25 unscored pretest)" },
    { k: "Passing score", v: "96 / 150 scored (~64%)" },
    { k: "Eligibility", v: "Active, unrestricted RN license" },
    { k: "Experience", v: "2 yrs + 1,000–1,870 trauma hours recommended" },
    { k: "Fee (ENA member)", v: "$285 · non-member $380" },
    { k: "Renewal cycle", v: "4 years — 100 CE hours or re-exam" },
  ],
  heroCardFoot:
    "Verified against BCEN 2026 candidate handbook and November 2025 content outline",

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
    { id: "compare", label: "TCRN vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "TCRN certification at a glance",
    prose: [
      "TCRN — Trauma Certified Registered Nurse — is the nursing-side benchmark for trauma care across the full continuum. The credential is issued by the <strong>Board of Certification for Emergency Nursing (BCEN)</strong>, which launched the exam in 2014; by the end of 2024, <strong>8,075 RNs</strong> held the credential.",
      "TCRN is a board certification, not a course. It is often confused with TNCC — the two-day Emergency Nurses Association provider course — but only TCRN appears on your credentials line after RN.",
    ],
    stats: [
      { n: "175", l: "Total items", sub: "150 scored · 25 pretest" },
      { n: "3 hrs", l: "Time limit", sub: "Continuous, no scheduled breaks" },
      { n: "59%", l: "2024 pass rate", sub: "1,142 of 1,929 candidates" },
      { n: "4 yrs", l: "Renewal cycle", sub: "100 CE hours or re-exam" },
    ],
    factBox: {
      tone: "info",
      title: "What changed in November 2025",
      html:
        "BCEN's updated TCRN content outline takes effect <strong>2025-11-29</strong>, built from the 2024 Trauma Nursing Role Delineation Study (more than 1,000 respondents — the largest BCEN trauma job analysis to date). A new passing-point study was introduced with the new outline; expect small year-over-year shifts in pass rates while the new standard beds in.",
    },
    coverImageLabel:
      "Trauma RN leading resuscitation in a Level I ED trauma bay",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the TCRN exam?",
    prose: [
      "Yes — if you hold an <strong>active, unrestricted RN license</strong> in the US, a US territory, Canada, or Australia. BCEN does not enforce a minimum-hours rule.",
      "BCEN <em>strongly recommends</em> two years of RN practice plus <strong>1,000 to 1,870 trauma nursing hours within the last three years</strong>. That recommendation is not a gate; it is the experience profile at which first-time pass rates historically hold up.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You have logged roughly two years of trauma-focused RN practice, with 1,000 to 1,870 trauma hours inside the last three years.",
      "You are comfortable with the primary and secondary survey and can run an MTP activation without a checklist.",
      "You routinely care for blunt, penetrating, and polytrauma patients across at least two points of the continuum — ED plus ICU, ED plus transport, or OR plus rehab.",
      "Your setting fits a recognized trauma role: Level I–IV ED, trauma/surgical/neuro ICU, trauma OR, HEMS or ground CCT, burn unit, trauma step-down, pediatric trauma, inpatient rehab after trauma, or a trauma PI / program-management role.",
    ],
  },

  // ---- BLUEPRINT (weights = 2024 scored-item counts, total 150)
  blueprint: {
    heading: "TCRN exam blueprint — six domains (effective 2025-11-29)",
    prose: [
      "The TCRN blueprint is six domains, weighted by body region and by the points along the trauma continuum where most nursing decisions happen. <strong>Trunk and Pelvis</strong> plus <strong>Continuum of Care</strong> together carry about half of the exam — most of your study time should live there.",
      "Do not neglect Professional Practice. Quality-management, NTDB / TQIP registry work, EMTALA, and disaster-triage items feel abstract at the bedside but reliably appear on the exam. Candidates who rely only on ED experience tend to bleed points in Continuum of Care, Special Populations, and Professional Practice.",
    ],
    domains: [
      { label: "Head and Neck Trauma", weight: 31 },
      { label: "Trunk and Pelvis Trauma", weight: 38 },
      { label: "Musculoskeletal and Wound Trauma", weight: 13 },
      { label: "Special Populations (peds, geri, OB, bariatric, burns, psychosocial)", weight: 22 },
      { label: "Continuum of Care for Trauma", weight: 36 },
      { label: "Professional Practice", weight: 10 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and military benefits",
    prose: [
      "BCEN delivers TCRN through Pearson VUE in-person testing centers and also offers <strong>Live Remote Proctoring (LRP)</strong> for candidates who prefer to test from a private location. After BCEN approves your application, you receive an Authorization to Test (ATT) email with a 90-day scheduling window — book your Pearson VUE seat or LRP slot immediately to avoid reapplying.",
    ],
    rows: [
      { k: "Initial application — ENA member", v: "$285" },
      { k: "Initial application — non-member", v: "$380", highlight: true },
      { k: "Military / veteran application", v: "$195 (or $265 with Test Assurance)" },
      { k: "Retake", v: "Same as initial fee" },
      { k: "Recertification by CE — ENA member", v: "$285" },
      { k: "Recertification by CE — non-member", v: "$380" },
      { k: "Recertification by exam", v: "Same as initial fee" },
      { k: "ENA annual membership (reduces exam fee)", v: "~$135" },
    ],
    factBox: {
      tone: "success",
      title: "10th-anniversary discount window",
      html:
        "BCEN is running a <strong>10% discount on TCRN applications from 2026-02-01 to 2026-04-30</strong> to mark the credential's 10th anniversary. Active-duty, reservist, and veteran pricing stacks on top of the standard rate. Most Level I and Level II trauma centers also reimburse the TCRN fee through an education benefit — ask your trauma program manager before paying out of pocket.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "TCRN certification is valid for <strong>four years</strong>. BCEN offers two renewal pathways. <strong>Pathway 1 — Recertification by CE Attestation:</strong> complete 100 contact hours in the current 4-year cycle, with at least <strong>75 hours tied specifically to emergency and trauma content</strong>. Submit the attestation through the BCEN portal; BCEN audits at least 10% of renewals, so keep CE certificates and transcripts for the full cycle.",
      "<strong>Pathway 2 — Recertification by Examination:</strong> retake and pass the current TCRN exam at the initial-application fee. There is no grace period for a lapsed TCRN — lapsed candidates must sit the full exam again to reinstate the credential.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the TCRN exam?",
    prose: [
      "BCEN reported <strong>1,142 of 1,929</strong> TCRN candidates passed the exam in 2024 — a <strong>59%</strong> pass rate. That is lower than headline pass rates for BCEN's broader CEN exam, partly because TCRN covers the full trauma continuum rather than a single unit, and partly because candidates often underprepare for Professional Practice and Special Populations content.",
      "Candidates who follow a structured 8 to 12-week plan and complete at least one full-length timed practice exam pass at meaningfully higher rates than those relying on work experience alone. The November 2025 blueprint change also introduced a new passing-point study, so small year-over-year pass-rate shifts are expected while the new standard beds in.",
    ],
    rows: [{ year: "2024", pct: 59 }],
    target: 80,
    footnote:
      "Only 2024 is shown because BCEN's November 2025 blueprint update resets temporal comparability; earlier years ran against a different content outline and passing point.",
    factBox: {
      tone: "info",
      title: "The lever is timed practice, not more reading",
      html:
        "In BCEN-reported candidate surveys, the single biggest predictor of first-time pass is <strong>at least one full-length timed 175-item practice exam</strong> under real conditions. Fatigue in the last 40 items is where unprepared candidates lose the most points — it is a trained skill, not a content gap.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 10-week TCRN study plan",
    prose: [
      "A structured 10-week study plan is enough for most trauma RNs with two or more years of practice — roughly <strong>80 to 120 total study hours</strong> across the six blueprint domains. Practice-question volume ramps through weeks 2–8 and peaks in week 9 with a full-length timed exam; week 10 is for targeted review, logistics, and a rest day.",
    ],
    weeks: [
      { n: 1, focus: "Read BCEN TCRN Content Outline + baseline diagnostic exam", qs: 25 },
      { n: 2, focus: "Primary + secondary survey, shock physiology, massive transfusion protocol", qs: 40 },
      { n: 3, focus: "Head and neck trauma — TBI, SCI, maxillofacial, ocular", qs: 60 },
      { n: 4, focus: "Trunk and pelvis trauma — chest, abdominal, pelvic fractures", qs: 60 },
      { n: 5, focus: "Musculoskeletal, wound care, burns, Parkland resuscitation", qs: 60 },
      { n: 6, focus: "Special populations — pediatric, geriatric, OB, bariatric, psychosocial", qs: 60 },
      { n: 7, focus: "Continuum of care — pre-hospital, OR, ICU, rehab handoffs", qs: 60 },
      { n: 8, focus: "Professional practice — quality, disaster, EMTALA, ACS verification", qs: 60 },
      { n: 9, focus: "Full-length timed practice exam + error-log review", qs: 175 },
      { n: 10, focus: "Targeted review of weak domains, rest, test day", qs: 40 },
    ],
    tipsHeading: "How TCRN candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Don't over-index on ED content",
        text:
          "Continuum of Care and Special Populations together make up about 39% of the exam. ED-only study misses most of this. Block dedicated weeks for rehab handoffs, OB, pediatric, and geriatric trauma.",
      },
      {
        kicker: "Pace 150 scored items in 3 hours",
        text:
          "Pacing is a trained skill. Take at least one full-length timed practice exam under real conditions before test day — otherwise fatigue in the last 40 items is where your score slips.",
      },
      {
        kicker: "Don't skip Professional Practice",
        text:
          "Quality, NTDB/TQIP registry, EMTALA, and disaster management feel abstract to bedside nurses but appear on the exam. Study the ACS Orange Book and ENA position statements.",
      },
      {
        kicker: "Memorize mnemonics, not trivia",
        text:
          "ABCDE (primary), FGHI (secondary), AMPLE (history), and the lethal diamond (hypothermia, acidosis, coagulopathy, hypocalcemia) anchor scenario-based items. Talk rationales out loud with a peer.",
      },
      {
        kicker: "Know your scales cold",
        text:
          "GCS, Revised Trauma Score, ISS, ASIA, Rule of Nines / Lund-Browder, Parkland, and FAST show up repeatedly. Build a one-page reference and review it the night before the exam.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (verbatim from Content/TCRN Certification.docx)
  sample: {
    heading: "Sample TCRN question",
    prose: [
      "This item mirrors BCEN's scenario format: a short clinical stem, an unstable patient, and four plausibly-correct options where only one is <em>best</em>. Try it before you read the rationale.",
    ],
    q: {
      scenario:
        "A 28-year-old restrained driver arrives after a high-speed MVC. On arrival: GCS 13, BP 84/52, HR 138, SpO2 94% on 15 L non-rebreather, absent breath sounds on the left, distended abdomen. FAST is positive in the RUQ. The patient becomes hypotensive after one liter of crystalloid.",
      stem: "Which nursing action should the trauma RN prioritize next?",
      options: [
        "Continue crystalloid to target a systolic BP of 110 mm Hg.",
        "Activate the massive transfusion protocol and prepare for needle decompression.",
        "Obtain CT of the chest, abdomen, and pelvis before further intervention.",
        "Administer tranexamic acid and hold blood products pending lab results.",
      ],
      correct: 1,
      rationale:
        "The patient has suspected tension pneumothorax and hemorrhagic shock from likely liver injury. Damage-control resuscitation calls for balanced blood products through MTP and immediate decompression of the chest. Crystalloid chasing worsens dilutional coagulopathy. CT is inappropriate in an unstable patient.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key TCRN terms every candidate should know",
    prose: [
      "These terms surface in most TCRN exam items. Review them until the definitions feel automatic — scenario-based stems often hinge on recognizing which framework (MTP, damage-control resuscitation, lethal diamond) applies.",
    ],
    rows: [
      { term: "MTP", defn: "Massive Transfusion Protocol — balanced delivery of packed red cells, plasma, and platelets, typically in a 1:1:1 ratio, activated for hemorrhagic shock.", domain: "Continuum" },
      { term: "Permissive hypotension", defn: "Deliberately accepting a lower systolic BP (around 80–90 mm Hg) in select trauma patients to limit clot disruption until hemorrhage control.", domain: "Continuum" },
      { term: "Damage-control resuscitation", defn: "Strategy combining permissive hypotension, hemostatic resuscitation, and damage-control surgery to prevent the lethal diamond.", domain: "Continuum" },
      { term: "Lethal diamond", defn: "The four conditions that drive mortality in hemorrhagic shock: hypothermia, acidosis, coagulopathy, and hypocalcemia.", domain: "Continuum" },
      { term: "Le Fort fractures", defn: "Classification of midface fractures (types I, II, III) that guide airway and surgical decisions.", domain: "Head/Neck" },
      { term: "Autonomic dysreflexia", defn: "A medical emergency in SCI patients at T6 or above, triggered by a noxious stimulus below the lesion.", domain: "Head/Neck" },
      { term: "Beck's triad", defn: "Hypotension, muffled heart sounds, and jugular venous distention — the classic sign set for cardiac tamponade.", domain: "Trunk/Pelvis" },
      { term: "Compartment syndrome", defn: "Rising pressure within a closed fascial space that compromises perfusion; the 6 Ps include pain, pallor, paresthesia, paralysis, pulselessness, and poikilothermia.", domain: "MSK/Wound" },
      { term: "TBSA", defn: "Total Body Surface Area burned — estimated by the Rule of Nines or Lund-Browder chart to guide fluid resuscitation.", domain: "Special Pops" },
      { term: "Parkland Formula", defn: "4 mL × kg × %TBSA of Lactated Ringer's over 24 hours for major burns; half given in the first 8 hours.", domain: "Special Pops" },
      { term: "FAST exam", defn: "Focused Assessment with Sonography for Trauma — screens for free intra-peritoneal or pericardial fluid in unstable blunt abdominal trauma.", domain: "Trunk/Pelvis" },
      { term: "GCS", defn: "Glasgow Coma Scale — 3 to 15 score for level of consciousness; drives triage and TBI decisions.", domain: "Head/Neck" },
      { term: "ISS", defn: "Injury Severity Score — 0 to 75 anatomic score used for trauma registry severity stratification.", domain: "Professional" },
      { term: "EMTALA", defn: "Emergency Medical Treatment and Labor Act — federal statute governing ED screening, stabilization, and transfer of trauma patients.", domain: "Professional" },
      { term: "ACS Verification", defn: "American College of Surgeons trauma center verification process that confirms a facility meets trauma care standards.", domain: "Professional" },
    ],
  },

  // ---- COMPARE (directly from Table 7 of the Word doc)
  compare: {
    heading: "TCRN vs. CEN, CFRN, CTRN, CCRN, TNCC, ATCN",
    prose: [
      "TCRN sits alongside several related credentials that trauma RNs sometimes consider. Many candidates Google \"TCRN\" when they actually mean TNCC, so the distinction matters before you spend time or money.",
    ],
    rows: [
      { row: "TCRN", highlight: true, body: "BCEN", scope: "Trauma nursing across the full continuum", who: "RNs in any trauma-touching setting" },
      { row: "CEN", body: "BCEN", scope: "Breadth of emergency nursing", who: "ED RNs covering all presentations" },
      { row: "CFRN", body: "BCEN", scope: "Flight transport nursing", who: "HEMS or fixed-wing transport RNs" },
      { row: "CTRN", body: "BCEN", scope: "Ground critical-care transport", who: "Ground CCT RNs" },
      { row: "CCRN", body: "AACN", scope: "Adult, pediatric, or neonatal critical care", who: "ICU RNs; pairs well with TCRN" },
      { row: "TNCC (course, not cert)", body: "ENA", scope: "Baseline trauma resuscitation", who: "All ED RNs as foundational training" },
      { row: "ATCN (course, not cert)", body: "STN", scope: "Advanced trauma care paired with ATLS", who: "Trauma-team RNs working with ATLS providers" },
    ],
    closingProse:
      "<strong>Take TCRN if you want to validate trauma expertise across the continuum.</strong> Add CFRN or CTRN on top if most of your time is spent in transport. Take CEN instead if your day-to-day is broad ED practice. TNCC and ATCN are baseline education — they do not replace TCRN on your credentials line.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about TCRN certification",
    items: [
      { q: "What does TCRN stand for in nursing?", a: "TCRN stands for Trauma Certified Registered Nurse. The credential is issued by the Board of Certification for Emergency Nursing (BCEN)." },
      { q: "Is TCRN the same as TNCC?", a: "No. TCRN is a board certification earned by passing a 175-item exam, while TNCC is a two-day provider course run by the Emergency Nurses Association." },
      { q: "How long does it take to prepare for the TCRN exam?", a: "Most trauma RNs prepare for 8 to 12 weeks. A realistic target is 80 to 120 total study hours spread across the six blueprint domains." },
      { q: "Is the TCRN exam hard?", a: "The TCRN exam is moderately difficult. The first-time pass rate sits near 59%, and candidates who rely only on ED experience tend to struggle with the Continuum of Care and Special Populations domains." },
      { q: "Can I take the TCRN exam without 1,000 trauma hours?", a: "Yes. BCEN does not enforce an hours requirement. The 1,000 to 1,870 trauma hours within 3 years is a strong recommendation, not a gatekeeping rule." },
      { q: "What happens if I fail the TCRN exam?", a: "You must wait 90 days before retaking the exam and submit a new application with the full fee for each retake attempt." },
      { q: "How many times can I retake the TCRN exam?", a: "BCEN does not cap retake attempts. However, each retake requires a new application, a new 90-day waiting period, and a new fee." },
      { q: "Does TCRN certification expire?", a: "Yes. TCRN certification expires after 4 years. You renew through CE attestation (100 contact hours, at least 75 in emergency/trauma content) or by retaking the exam." },
      { q: "Will my hospital pay for TCRN certification?", a: "Many Level I and Level II trauma centers reimburse the TCRN application fee and offer paid study time. Ask your trauma program manager or HR before paying out of pocket." },
      { q: "Is TCRN recognized outside the United States?", a: "Yes. Canadian and Australian RNs with an unrestricted nursing license may sit for the exam and hold the credential on the same terms as US candidates." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following primary sources. Fees, blueprint weights, and recertification rules shift on BCEN's revision cycle — always verify numeric facts against the current BCEN handbook before relying on them for application decisions.",
    ],
    list: [
      "Board of Certification for Emergency Nursing (BCEN) — TCRN Candidate Handbook and TCRN Examination Content Outline (effective 2025-11-29)",
      "BCEN 2024 Annual Report — TCRN certificant counts and pass-rate data (1,142 of 1,929; 8,075 active holders)",
      "BCEN — Recertification by CE Attestation policy and fee schedule (2026)",
      "Emergency Nurses Association (ENA) — membership tiers and TNCC course materials",
      "Society of Trauma Nurses (STN) — TCRN Review Course and ATCN program",
      "American College of Surgeons Committee on Trauma (ACS COT) — Resources for Optimal Care of the Injured Patient (\"Orange Book\")",
      "US Bureau of Labor Statistics (BLS) — Occupational Employment and Wage Statistics, Registered Nurses (May 2024): $98,430 mean RN wage; ER-focused RNs ~$111,166",
      "Journal of Trauma Nursing — peer-reviewed research on trauma nursing outcomes and certification",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice TCRN-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to the November 2025 blueprint. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full TCRN question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "CEN",
      title: "CEN vs TCRN: which BCEN exam fits your scope?",
      blurb: "Blueprint overlap, career impact, and when to stack both credentials — for ED RNs weighing breadth vs depth.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "Continuum of Care: the domain that decides TCRN first-time pass",
      blurb: "Why Continuum of Care plus Special Populations = 39% of your score, and the pre-hospital-through-rehab concepts BCEN tests most.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "Trauma center",
      title: "Landing a Level I trauma RN role with TCRN on your badge",
      blurb: "How ACS-verified centers actually use TCRN-holder counts, and what Level I hiring managers look for beyond the credential.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
