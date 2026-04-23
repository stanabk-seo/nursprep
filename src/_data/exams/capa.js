// CAPA exam detail page — structured data.
// Sourced from Content/CAPA Certification.docx (verified against ABPANC
// candidate handbook, ASPAN, BLS primary sources as of the 2026-04 cycle).
// Lives at /certifications/capa/ via the paginated template.

module.exports = {
  code: "CAPA",
  name: "Certified Ambulatory Perianesthesia Nurse",
  body: "ABPANC",
  cat: "periop",
  catLabel: "Perioperative & Perianesthesia",
  updated: "2026-04",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title:
      "CAPA Certification Guide: Eligibility, Exam & Renewal | NursPrep",
    description:
      "CAPA certification for ambulatory perianesthesia RNs — 1,200-hour eligibility, five-domain blueprint, $350 fee, ~65% pass rate, 8-week study plan, and 3-year renewal rules.",
    ogTitle:
      "CAPA Certification Guide 2026 — Certified Ambulatory Perianesthesia Nurse",
    ogDescription:
      "ABPANC eligibility, the 2023–2027 blueprint, $350 member fee, ~65% pass rate, and an 8-week study plan for ambulatory and Phase II RNs.",
  },

  // ---- HERO
  lede:
    "CAPA is the Certified Ambulatory Perianesthesia Nurse credential, issued by the American Board of Perianesthesia Nursing Certification (ABPANC) since 1994. It validates RN competence across preoperative screening, day-surgery care, and Phase II recovery — the care continuum that sits outside the immediate PACU, in ambulatory surgery centers, preadmission clinics, and extended-observation units.",
  heroPills: [
    { k: "Questions", v: "Multi-domain blueprint" },
    { k: "Eligibility", v: "1,200 hrs / 2 yrs" },
    { k: "Renewal", v: "3 years" },
    { k: "Pass rate", v: "~65%" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "ABPANC (American Board of Perianesthesia Nursing Certification)" },
    { k: "Credential since", v: "1994" },
    { k: "Setting focus", v: "Preadmission, preoperative, ambulatory, Phase II, extended observation" },
    { k: "Eligibility", v: "Active US RN license + 1,200 direct care hours in past 2 years" },
    { k: "Blueprint cycle", v: "2023–2027 (based on 2020–2021 Role Delineation Study)" },
    { k: "Fee (ASPAN member)", v: "$350 · non-member $424" },
    { k: "Renewal cycle", v: "3 years — 70 CE hours + 900 practice hours, or re-exam" },
    { k: "Sister credential", v: "CPAN (Phase I PACU)" },
  ],
  heroCardFoot:
    "Verified against the ABPANC candidate handbook and ABPANC exam statistics reports (April 2026)",

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
    { id: "compare", label: "CAPA vs. CPAN" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "CAPA certification at a glance",
    prose: [
      "CAPA — Certified Ambulatory Perianesthesia Nurse — is the board credential for registered nurses who work outside the immediate PACU: preadmission clinics, day-surgery floors, ambulatory surgery centers, endoscopy suites, Phase II recovery, and extended-observation units. The credential is issued by the <strong>American Board of Perianesthesia Nursing Certification (ABPANC)</strong>, which has awarded it since <strong>1994</strong>.",
      "CAPA sits alongside CPAN — the sister credential for Phase I PACU nurses — under the same professional umbrella. Both exams are shaped by ASPAN practice standards and the ABPANC Role Delineation Study cycle. Hospitals, ambulatory surgery centers, and office-based surgery sites all recognize CAPA as a mark of advanced clinical skill across the perianesthesia continuum.",
    ],
    stats: [
      { n: "1,200", l: "Eligibility hours", sub: "Direct perianesthesia care in past 2 yrs" },
      { n: "~65%", l: "Recent pass rate", sub: "48%–81% range across recent windows" },
      { n: "3 yrs", l: "Renewal cycle", sub: "70 CE hours + 900 practice hours, or re-exam" },
      { n: "$350", l: "ASPAN member fee", sub: "Non-member $424" },
    ],
    factBox: {
      tone: "info",
      title: "Re-exam renewal has a deadline",
      html:
        "ABPANC offers two renewal paths — the standard <strong>70 CE hours</strong> track and a <strong>re-examination</strong> track. The re-exam renewal option is only available <strong>through November 15, 2026</strong>. If you plan to renew by sitting the exam again instead of logging CE, schedule before that cutoff or fall back to the CE pathway.",
    },
    coverImageLabel:
      "Perianesthesia RN reviewing preoperative assessment in an ambulatory surgery center",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the CAPA exam?",
    prose: [
      "ABPANC requires two things: an <strong>active, unrestricted US RN license</strong> (based on NCLEX) and <strong>1,200 hours of direct perianesthesia RN care within the past 2 years</strong>. Hours must be in direct patient care — management and academic roles do not count toward the eligibility total.",
      "Agency, per-diem, and part-time hours all count as long as they meet the clinical-hours criteria. There is no degree requirement beyond RN licensure. Always confirm the current rule in the ABPANC Candidate Handbook before you apply, since ABPANC updates the handbook on its revision cycle.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You have logged 1,200+ direct patient-care hours in the past 2 years across preadmission, preoperative, Phase II, ambulatory, or extended-observation settings.",
      "Your work site is an ambulatory surgery center (ASC), hospital-based outpatient surgery unit, office-based surgery practice, preoperative assessment clinic, GI/endoscopy suite, or Phase II PACU.",
      "You are comfortable with preoperative screening, moderate sedation monitoring, Aldrete and PADSS scoring, PONV management, and discharge teaching across the perianesthesia continuum.",
      "If most of your shifts happen in Phase I PACU instead, the CPAN credential is the better fit — but dual CPAN/CAPA is common for nurses who rotate across the full continuum.",
    ],
  },

  // ---- BLUEPRINT (ABPANC publishes 4 aggregate domains; Safety/Advocacy/Education are combined in the doc)
  blueprint: {
    heading: "CAPA exam blueprint — four domains (2023–2027 cycle)",
    prose: [
      "The current CAPA blueprint runs through 2027 and is based on the 2020–2021 ABPANC Role Delineation Study. ABPANC publishes four aggregate domains — the largest combined block (Safety + Patient Advocacy + Education) accounts for nearly half of the exam, so do not treat it as peripheral content.",
      "Perianesthesia Care Considerations covers the full continuum across preadmission, preoperative, Phase I, and Phase II. Anesthesia covers general, regional, local, moderate sedation, MAC, and TIVA. Professional Nursing Practice and Guidelines covers multidisciplinary collaboration and evidence-based care. The combined Safety / Patient Advocacy / Education block covers MH protocols, informed consent, discharge teaching, and psychosocial support.",
    ],
    domains: [
      { label: "Perianesthesia Care Considerations", weight: 25 },
      { label: "Anesthesia", weight: 20 },
      { label: "Professional Nursing Practice and Guidelines", weight: 9 },
      { label: "Safety, Patient Advocacy, and Education (combined)", weight: 46 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and Test Assured",
    prose: [
      "The CAPA application is an online workflow that takes about 20 minutes once you have your hours documented. After ABPANC approves your application and fee, you receive an <strong>Authorization to Test (ATT) email within 10 business days</strong> and then have a <strong>90-day scheduling window</strong> to book your seat through the ABPANC testing vendor.",
      "ASPAN membership pays for itself if you plan to certify or renew — the member discount on the exam fee alone roughly covers annual dues. Test Assured is an optional add-on that lets you retake the exam free if you do not pass on the first try.",
    ],
    rows: [
      { k: "CAPA exam application — ASPAN member", v: "$350" },
      { k: "CAPA exam application — non-member", v: "$424", highlight: true },
      { k: "Test Assured (includes one free retake) — member", v: "$400" },
      { k: "Recertification by CE (3-year cycle)", v: "~$275 member / ~$350 non-member" },
      { k: "Prep materials and CE courses", v: "~$150–$500 (plan-dependent)" },
      { k: "ASPAN membership (reduces all ABPANC fees)", v: "Annual dues vary by tier" },
    ],
    factBox: {
      tone: "success",
      title: "Most ASCs and Magnet hospitals reimburse CAPA",
      html:
        "Magnet Recognition Program hospitals and accredited ambulatory surgery centers often prefer or require specialty certification — and most of them reimburse the <strong>$350–$424 CAPA application fee</strong> once you pass. Many also add a certification differential to the base RN rate, typically <strong>$1–$3 per hour</strong>. Ask your nurse manager or HR benefits specialist before paying out of pocket.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "CAPA certification is valid for <strong>three years</strong>. ABPANC offers two renewal pathways. <strong>Pathway 1 — Recertification by CE:</strong> complete <strong>70 contact hours of perianesthesia-relevant continuing education</strong> (the 70-hour requirement took effect for 2025 and later renewal cycles) <em>plus</em> <strong>900 hours of perianesthesia nursing practice</strong> during the 3-year cycle. Track your CE hours in the ABPANC online portal as you complete them.",
      "<strong>Pathway 2 — Recertification by Examination:</strong> retake and pass the current CAPA exam. <em>Note:</em> the re-examination renewal option is only available <strong>through November 15, 2026</strong>. Letting your certification lapse forces you to restart the full initial application, so renew before your expiration date.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the CAPA exam?",
    prose: [
      "The CAPA exam pass rate averages around <strong>65%</strong>. Recent testing windows have ranged from <strong>48% to 81%</strong> depending on the quarter — the Spring 2024 window came in at 53%, one of the lower recent cycles. Pass-rate swings reflect candidate preparation more than exam difficulty.",
      "Candidates who pair the ASPAN PeriAnesthesia Nursing Core Curriculum with a timed third-party question bank tend to pass on the first attempt. Most CAPA candidates report that <em>timing</em>, not knowledge, is the hardest part of the real exam, so at least one full-length timed practice run before test day is the single highest-leverage prep task.",
    ],
    rows: [
      { year: "Spring 2024", pct: 53 },
      { year: "Recent avg", pct: 65 },
      { year: "High window", pct: 81 },
    ],
    target: 80,
    footnote:
      "Pass rates are reported as quarterly testing windows rather than calendar years. ABPANC publishes quarterly and annual exam statistics reports that detail the pass percentage for each window.",
    factBox: {
      tone: "info",
      title: "The lever is pacing, not more reading",
      html:
        "Recent candidate surveys consistently point to <strong>exam pacing</strong> as the top failure driver — not content gaps. Take at least one full-length timed practice exam under real conditions before test day. Fatigue in the final third of the exam is where unprepared candidates lose the most points, and it is a trained skill, not a knowledge problem.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "An 8-week CAPA study plan",
    prose: [
      "A focused <strong>8-week plan</strong> is enough for most candidates who are working full time. Anchor your plan around three core resources: the <strong>ASPAN PeriAnesthesia Nursing Core Curriculum</strong>, the <strong>ABPANC self-assessment exam</strong>, and a third-party question bank with rationales. Study in short daily blocks of 30–45 minutes rather than weekend binges, and use spaced repetition for scoring tools like PADSS, Aldrete, and the malignant hyperthermia treatment sequence.",
    ],
    weeks: [
      { n: 1, focus: "Perianesthesia Care Considerations — master Phase II discharge criteria + PADSS", qs: 30 },
      { n: 2, focus: "Anesthesia fundamentals — classify techniques and typical recovery patterns", qs: 40 },
      { n: 3, focus: "Safety + malignant hyperthermia — MH protocol + safe patient handoffs", qs: 50 },
      { n: 4, focus: "Patient advocacy + ethics — informed consent + advance directives", qs: 50 },
      { n: 5, focus: "Education + communication — practice discharge teaching scenarios", qs: 50 },
      { n: 6, focus: "Professional practice — ASPAN standards + evidence-based care", qs: 50 },
      { n: 7, focus: "Mixed practice questions — target 75% average on timed sets", qs: 100 },
      { n: 8, focus: "Full-length simulation + weak-area review, rest before exam day", qs: 125 },
    ],
    tipsHeading: "How CAPA candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Don't under-weight the combined Safety/Advocacy/Education block",
        text:
          "This block is ~46% of the exam — nearly half. Candidates who focus only on Perianesthesia Care Considerations and Anesthesia leave 46% of the exam under-prepared.",
      },
      {
        kicker: "Drill pacing, not just content",
        text:
          "Recent candidate surveys say timing — not knowledge — is the single hardest part. Take at least one full-length timed practice exam under real conditions before test day.",
      },
      {
        kicker: "Memorize scoring tools cold",
        text:
          "PADSS (for Phase II discharge), Aldrete (for Phase I discharge), and the malignant hyperthermia treatment sequence show up in multiple forms. Build flashcards and review them daily for the last two weeks.",
      },
      {
        kicker: "Study the ASPAN core curriculum, not your unit's protocols",
        text:
          "Day-to-day practice varies by facility. The exam tests ASPAN standards and ABPANC's national blueprint, not local workflows. Use the core curriculum as your primary reference.",
      },
      {
        kicker: "Join an ASPAN local component for study groups",
        text:
          "Peer study groups and shared question sets through your ASPAN local component chapter measurably lift first-time pass rates. Talking rationales out loud with a peer is worth more than re-reading solo.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (verbatim from Content/CAPA Certification.docx)
  sample: {
    heading: "Sample CAPA question",
    prose: [
      "This item mirrors ABPANC's scenario format: a short clinical stem, a Phase II recovery context, and four plausibly-correct options where only one is <em>best</em>. Try it before you read the rationale.",
    ],
    q: {
      scenario:
        "A Phase II patient scores a PADSS of 8, reports mild nausea, and asks when he can drink.",
      stem: "What is the most appropriate next step?",
      options: [
        "Discharge the patient immediately.",
        "Offer a small volume of clear fluids and reassess.",
        "Administer a second antiemetic dose.",
        "Delay discharge until PADSS reaches 10.",
      ],
      correct: 1,
      rationale:
        "A PADSS score of 9–10 is the standard discharge threshold, but small volumes of clear fluid can reduce mild PONV and help the patient progress toward that threshold. Immediate discharge at PADSS 8 is unsafe, a second antiemetic may be premature at this severity, and waiting for a perfect score is not required by PADSS criteria.",
    },
  },

  // ---- KEY TERMS (verbatim glossary from the Word doc, expanded with a few supporting terms)
  keyterms: {
    heading: "Key CAPA terms every candidate should know",
    prose: [
      "Use this glossary while you study. Each term appears on the exam in multiple forms, often as a distractor in scenario-based items. Review until the definitions feel automatic.",
    ],
    rows: [
      { term: "Preadmission testing", defn: "Pre-surgical screening for health risks before the procedure date.", domain: "Perianesthesia Care" },
      { term: "Phase I recovery", defn: "Immediate recovery from anesthesia with close airway and hemodynamic monitoring.", domain: "Perianesthesia Care" },
      { term: "Phase II recovery", defn: "Transition to home-readiness after Phase I criteria are met.", domain: "Perianesthesia Care" },
      { term: "Aldrete score", defn: "Scoring tool used for Phase I discharge readiness (airway, circulation, consciousness, activity, oxygen saturation).", domain: "Perianesthesia Care" },
      { term: "PADSS", defn: "Post Anesthesia Discharge Scoring System used to clear Phase II patients for home; 9–10 is the standard discharge threshold.", domain: "Perianesthesia Care" },
      { term: "PONV", defn: "Postoperative Nausea and Vomiting — a common Phase II concern and a frequent cause of delayed discharge.", domain: "Anesthesia" },
      { term: "Moderate sedation", defn: "Drug-induced depression of consciousness where the patient still responds purposefully to verbal cues.", domain: "Anesthesia" },
      { term: "MAC", defn: "Monitored Anesthesia Care — anesthetic service where a provider monitors the patient's vitals during local or regional anesthesia.", domain: "Anesthesia" },
      { term: "TIVA", defn: "Total Intravenous Anesthesia — anesthesia delivered entirely through IV agents rather than inhaled gases.", domain: "Anesthesia" },
      { term: "Malignant hyperthermia", defn: "Rare inherited reaction to certain anesthetic agents; life-threatening; first-line treatment is dantrolene.", domain: "Safety" },
      { term: "Dantrolene", defn: "The antidote for malignant hyperthermia — mixed urgently and administered IV once MH is recognized.", domain: "Safety" },
      { term: "ERAS", defn: "Enhanced Recovery After Surgery — evidence-based protocols to speed post-surgical recovery and shorten length of stay.", domain: "Professional Practice" },
      { term: "Informed consent", defn: "The process confirming a patient has the information, capacity, and voluntariness to authorize a procedure.", domain: "Advocacy" },
      { term: "Discharge teaching", defn: "Structured, teach-back style instruction delivered before the patient leaves Phase II, covering wound care, medications, and warning signs.", domain: "Education" },
      { term: "Extended observation", defn: "A post-procedure stay beyond standard Phase II, used for patients who need additional monitoring but not inpatient admission.", domain: "Perianesthesia Care" },
    ],
  },

  // ---- COMPARE (directly from the CAPA vs CPAN table in the Word doc)
  compare: {
    heading: "CAPA vs. CPAN: which should you take?",
    prose: [
      "CAPA and CPAN are sister ABPANC credentials, but they serve different settings within the perianesthesia continuum. Choose the one that matches where most of your direct-care hours live — or sit for both if you rotate across the full continuum.",
    ],
    rows: [
      { row: "CAPA", highlight: true, body: "ABPANC", scope: "Preop, ambulatory, Phase II — lower acuity, ambulatory-stable", who: "ASCs, endoscopy, preadmission clinics, Phase II PACU" },
      { row: "CPAN", body: "ABPANC", scope: "Immediate Phase I PACU — higher acuity, post-anesthesia recovery", who: "Hospital PACU — airway + hemodynamic focus" },
      { row: "CPAN/CAPA (dual)", body: "ABPANC", scope: "Full perianesthesia continuum", who: "Nurses rotating across Phase I, Phase II, and ambulatory" },
      { row: "CNOR", body: "CCI", scope: "Intraoperative perioperative nursing", who: "OR circulators and scrub RNs" },
      { row: "CRNFA", body: "CCI", scope: "First-assistant subspecialty", who: "RN first assistants in the OR" },
    ],
    closingProse:
      "<strong>Take CAPA if most of your hours are in ambulatory or Phase II.</strong> Take CPAN if you primarily work Phase I. Take both (CPAN/CAPA dual credential) if you rotate across the full perianesthesia continuum — the same board administers both exams, and dual-certified nurses often see the strongest career momentum.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about CAPA certification",
    items: [
      { q: "Is CAPA certification worth it for ambulatory surgery nurses?", a: "Yes. CAPA signals validated competence in preoperative and Phase II care, and many ambulatory surgery centers prefer or require certified staff. Most Magnet hospitals and ASCs reimburse the application fee and add a certification differential to your base hourly rate." },
      { q: "How long does it take to prepare for the CAPA exam?", a: "Most candidates prepare for 8 to 12 weeks while working full time — roughly 50 to 80 total study hours spread across the four blueprint domains. Candidates returning from a long study break often need closer to 10–12 weeks." },
      { q: "Can I take CAPA if I only work part-time?", a: "Yes. Part-time, per-diem, and agency hours all count toward the 1,200-hour eligibility rule, as long as they are direct perianesthesia clinical hours in a qualifying setting (preadmission, preoperative, Phase II, ambulatory, or extended observation)." },
      { q: "What happens if I fail the CAPA exam?", a: "You can retake the exam after a short waiting period. The Test Assured program, purchased with the initial application, covers one free retake if you do not pass on the first attempt." },
      { q: "Does CAPA certification expire?", a: "Yes. The credential renews every 3 years through 70 CE hours plus 900 perianesthesia practice hours, or by retaking the CAPA exam. The re-examination renewal option is only available through November 15, 2026." },
      { q: "Is CAPA recognized outside the United States?", a: "CAPA is open only to RNs licensed in the US and its territories, though the credential is internationally respected in perianesthesia circles." },
      { q: "Can I use CAPA hours toward CPAN eligibility?", a: "Yes, if those hours meet CPAN's Phase I clinical criteria. Time spent in Phase II alone usually does not qualify for CPAN — CPAN requires Phase I PACU direct-care hours specifically." },
      { q: "What is the CAPA exam pass rate?", a: "The CAPA exam pass rate averages around 65%. Recent testing windows have ranged from 48% to 81%, with Spring 2024 reported at 53%. ABPANC publishes quarterly and annual pass-rate data in its exam statistics reports." },
      { q: "How much does the CAPA exam cost?", a: "The application fee is $350 for ASPAN members and $424 for non-members. Optional Test Assured (covers one free retake) is around $400. Recertification by CE is approximately $275 for members and $350 for non-members." },
      { q: "What is the difference between CAPA and CPAN?", a: "CAPA covers preoperative, ambulatory, and Phase II care — lower-acuity, ambulatory-stable patients. CPAN covers immediate Phase I PACU — higher-acuity post-anesthesia recovery with airway and hemodynamic focus. Both are ABPANC credentials, and dual CPAN/CAPA is common for nurses who rotate across the continuum." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following primary sources. Fees, blueprint weights, and recertification rules shift on ABPANC's revision cycle — always verify numeric facts against the current ABPANC candidate handbook before relying on them for application decisions.",
    ],
    list: [
      "ABPANC candidate handbook (cpancapa.org) — eligibility hours, fees, blueprint, recertification rules",
      "ABPANC exam statistics page — quarterly and annual pass-rate windows",
      "ABPANC Role Delineation Study 2020–2021 — basis for the 2023–2027 CAPA blueprint",
      "ASPAN (American Society of PeriAnesthesia Nurses) — PeriAnesthesia Nursing Core Curriculum and practice standards",
      "US Bureau of Labor Statistics (BLS) — Occupational Employment and Wage Statistics, Registered Nurses (May 2024): $93,600 median RN wage",
      "Magnet Recognition Program — specialty certification as a preferred criterion in nurse staffing",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice CAPA-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to the 2023–2027 blueprint. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full CAPA question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "CPAN",
      title: "CAPA vs CPAN: which ABPANC exam fits your unit?",
      blurb: "Blueprint differences, eligibility hours, and when to pursue the dual CPAN/CAPA credential — for perianesthesia RNs weighing Phase I vs Phase II.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "The Safety/Advocacy/Education block: 46% of your CAPA score",
      blurb: "Why the combined Safety + Advocacy + Education domain decides first-time CAPA pass — and the ASPAN standards candidates miss most.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "Ambulatory",
      title: "Landing an ASC leadership role with CAPA on your badge",
      blurb: "How ambulatory surgery centers and Magnet hospitals actually use CAPA — and what Phase II charge hiring managers look for beyond the credential.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
