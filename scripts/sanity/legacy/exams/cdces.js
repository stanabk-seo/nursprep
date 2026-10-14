// CDCES exam detail page — structured data.
// Sourced from Content/CDCES Certification.docx (verified against CBDCE
// candidate handbook, ADA, ADCES, CDC, BLS primary sources as of the
// 2026-04 cycle).
// Lives at /certifications/cdces/ via the paginated template.

module.exports = {
  code: "CDCES",
  name: "Certified Diabetes Care and Education Specialist",
  body: "CBDCE",
  cat: "specialty",
  catLabel: "Medical-Surgical & Specialty",
  updated: "2026-04",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title:
      "CDCES Certification Guide: Eligibility, Exam & Renewal | NursPrep",
    description:
      "CDCES certification for diabetes care professionals — 1,000 DSMES hours, 2024 blueprint, $350 fee, 73% pass rate (2023), 12-week study plan, and CDCES vs BC-ADM compared.",
    ogTitle:
      "CDCES Certification Guide 2026 — Certified Diabetes Care and Education Specialist",
    ogDescription:
      "CBDCE eligibility, the July 2024 three-domain blueprint, $350 application fee, 73% 2023 pass rate, and a 12-week study plan for diabetes care clinicians.",
  },

  // ---- HERO
  lede:
    "CDCES is the Certified Diabetes Care and Education Specialist credential awarded by CBDCE (formerly CDE, rebranded in 2020). It is the national standard for delivering Diabetes Self-Management Education and Support — DSMES — and it is the credential most ADA- and ADCES-accredited programs require for Medicare-reimbursable DSMES delivery.",
  heroPills: [
    { k: "Questions", v: "175 items" },
    { k: "Duration", v: "4 hours" },
    { k: "Renewal", v: "5 years" },
    { k: "Pass rate", v: "73% (2023)" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "Certification Board for Diabetes Care and Education (CBDCE)" },
    { k: "Format", v: "PSI testing centers + live remote proctoring" },
    { k: "Scored items", v: "150 of 175 (25 unscored pretest)" },
    { k: "Passing score", v: "70 on a scaled 0–99 score" },
    { k: "Eligible licenses", v: "RN, RD/RDN, RPh, MD/DO, PA, OT, PT, psychologist, MSW, MCHES, podiatrist, optometrist, ACSM-CEP" },
    { k: "Practice hours", v: "1,000 DSMES hours in past 5 yrs · 200+ in most recent yr" },
    { k: "Fee", v: "$350 Standard · $200 UQ pathway" },
    { k: "Renewal cycle", v: "5 years — 75 CE + 1,000 DSMES hrs, or re-exam" },
  ],
  heroCardFoot:
    "Verified against the CBDCE Certification Examination Handbook (April 2026) and the July 1, 2024 blueprint update",

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
    { id: "compare", label: "CDCES vs. BC-ADM" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "CDCES certification at a glance",
    prose: [
      "CDCES — Certified Diabetes Care and Education Specialist — is the specialty credential for clinicians who deliver Diabetes Self-Management Education and Support (DSMES). The credential is issued by the <strong>Certification Board for Diabetes Care and Education (CBDCE)</strong>, which rebranded the credential from <strong>CDE to CDCES in 2020</strong>. Older articles that reference \"CDE\" are talking about today's CDCES — the eligibility, exam, and recognition all carried forward.",
      "Roughly <strong>17,000 clinicians</strong> in the US hold the credential across hospitals, ambulatory clinics, primary care, retail pharmacy, community health, and home-based programs. The credential is open to a broad range of disciplines — RNs, dietitians, pharmacists, PAs, physicians, psychologists, and more — as long as your scope of practice includes diabetes self-management education.",
    ],
    stats: [
      { n: "175", l: "Total items", sub: "150 scored · 25 pretest · 4 hours" },
      { n: "73%", l: "2023 pass rate", sub: "Multi-year avg closer to 63%" },
      { n: "1,000", l: "DSMES practice hours", sub: "Over past 5 yrs, 200+ in recent yr" },
      { n: "5 yrs", l: "Renewal cycle", sub: "75 CE + 1,000 hrs or re-exam" },
    ],
    factBox: {
      tone: "info",
      title: "What changed on July 1, 2024",
      html:
        "CBDCE updated the CDCES exam blueprint on <strong>2024-07-01</strong> based on its 2023 practice analysis. The new blueprint reduces the total number of questions to <strong>175 (150 scored + 25 pretest)</strong> and consolidates content into <strong>three weighted task domains</strong>: Assessment (25%), Care and Education Interventions (70%), and Standards and Practices (5%). Starting in 2024, renewal also requires 2 CE activities focused specifically on the ADA Standards of Care.",
    },
    coverImageLabel:
      "Diabetes care specialist reviewing CGM data with a patient during a DSMES visit",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the CDCES exam?",
    prose: [
      "CBDCE offers two eligibility routes. Most candidates qualify under the <strong>Standard Pathway</strong>: an active, unrestricted license in an eligible discipline, two years of professional experience, and <strong>1,000 DSMES practice hours within the past 5 years</strong> (with at least 200 hours in the most recent year), plus 15 diabetes-related CE hours in the 2 years before applying.",
      "The <strong>Unique Qualifications (UQ) Pathway</strong> is a parallel route for candidates who hold a master's degree or higher in a health-related field. The requirements are largely the same — some UQ applicants need 2,000 DSMES hours — but the application fee is lower at $200 vs. $350.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You hold an active, unrestricted license in an eligible discipline: RN, APRN/CNS, RD/RDN, RPh/PharmD, MD/DO, PA, OT, PT, podiatrist, optometrist, clinical psychologist, ACSM-CEP, MSW, or MCHES.",
      "You have logged 1,000+ DSMES practice hours in the past 5 years, with at least 200 hours in the most recent year. Telehealth DSMES and volunteer hours count if a supervisor can verify them.",
      "You have completed at least 15 diabetes-related CE hours in the past 2 years and can produce dated certificates.",
      "Your work centers on teaching diabetes self-management: assessment, pharmacology education, CGM and insulin pump coaching, nutrition counseling, behavior change, and psychosocial support.",
      "If your role is primarily medication titration and prescriptive management rather than education, BC-ADM may be the better fit — see the comparison section below.",
    ],
  },

  // ---- BLUEPRINT (weights = July 2024 CBDCE blueprint — sums to 100%)
  blueprint: {
    heading: "CDCES exam blueprint — three domains (effective 2024-07-01)",
    prose: [
      "The blueprint is three task-based domains. <strong>Domain II — Care and Education Interventions — is 70% of the exam on its own.</strong> If you only have time for one domain, drill Domain II: pharmacology (insulin, GLP-1 RAs, SGLT2 inhibitors, metformin, sulfonylureas), diabetes technology (CGM, pumps, AID systems, smart pens), MNT and carb counting, hypoglycemia and DKA prevention, behavior change, and motivational interviewing.",
      "Domain I (Assessment) anchors the exam in clinical data — labs, ADCES7 self-care behaviors, health literacy, and readiness to change. Domain III (Standards and Practices) is small at 5% but high-leverage: ADA Standards of Care (current year), the 2022 National Standards for DSMES, scope of practice, ethics, documentation, and program quality improvement.",
    ],
    domains: [
      { label: "Assessment", weight: 25 },
      { label: "Care and Education Interventions", weight: 70 },
      { label: "Standards and Practices", weight: 5 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and return on investment",
    prose: [
      "CBDCE delivers CDCES through <strong>PSI testing centers</strong> with <strong>live remote proctoring</strong> also available. The full process from application submission to test day typically runs <strong>6–10 weeks</strong>: CBDCE responds to applications in 4–6 weeks and then gives you a 90-day scheduling window at PSI.",
      "At a $350 application fee and a typical $5,000–$8,000 annual salary lift after certification (per Payscale and ZipRecruiter benchmarks), the credential pays back in roughly <strong>one month of post-certification work</strong> for most full-time clinicians. DSMES delivered at ADA- or ADCES-accredited programs is Medicare-reimbursable — and most accredited programs require CDCES.",
    ],
    rows: [
      { k: "Initial application — Standard Pathway", v: "$350" },
      { k: "Initial application — UQ Pathway (master's degree)", v: "$200" },
      { k: "Exam retake", v: "$340 ($220 ADCES member)" },
      { k: "Renewal by CE (every 5 years)", v: "$350", highlight: true },
      { k: "Renewal by exam (alternative route)", v: "$350" },
      { k: "Avg reported salary lift post-certification", v: "$5,000–$8,000 / yr" },
    ],
    factBox: {
      tone: "success",
      title: "Retake rules to know before you apply",
      html:
        "CBDCE caps attempts across consecutive testing windows: you <strong>may not sit for the exam three times in a row across three consecutive windows</strong>. After two consecutive fails you must skip the next window before reapplying. Retake fee is <strong>$340</strong> ($220 for ADCES members) — plan on Test Assured-equivalent budgeting if you are in doubt on your first attempt.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "CDCES certification is valid for <strong>five years</strong>. Most clinicians renew through continuing education. <strong>Pathway 1 — Renewal by CE:</strong> continue to hold the same active, unrestricted license used for initial certification; accrue at least <strong>1,000 DSMES practice hours</strong> during the 5-year cycle; complete <strong>75 hours of diabetes-related CE</strong>; and starting in 2024, complete <strong>2 CE activities focused on the ADA Standards of Care in Diabetes</strong>. Pay the $350 renewal fee.",
      "<strong>Pathway 2 — Renewal by Examination:</strong> if you cannot meet the practice-hour or CE requirement, retake the CDCES exam. The fee mirrors the initial application. If your credential lapses, CBDCE allows reinstatement within 5 years — but reinstatement requires meeting current eligibility and passing the exam again, so renew on time.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the CDCES exam?",
    prose: [
      "The reported CDCES pass rate was <strong>73% in 2023</strong>, with multi-year averages closer to <strong>63%</strong>. CBDCE publishes annual exam statistics; the 2023 figure is the most recent publicly available number at the time of writing. Pass rate matters less than how you prepare — candidates who complete a structured 10–14 week plan, score ≥ 75% on two timed practice exams, and address weak domains in the final week consistently report higher first-attempt success.",
      "The top failure mode is underestimating Domain II. At 70% of the exam, Care and Education Interventions dominates — candidates who split their time evenly across all three domains walk in under-prepared on insulin pharmacology, CGM interpretation, and behavior change. Skipping the ADCES7 self-care behaviors and motivational-interviewing content alone typically costs 10–15 questions.",
    ],
    rows: [
      { year: "2023", pct: 73 },
      { year: "Multi-yr avg", pct: 63 },
    ],
    target: 80,
    footnote:
      "CBDCE publishes annual pass-rate data. The 2023 figure is the most recent publicly available; multi-year average is an approximation from historical reporting.",
    factBox: {
      tone: "info",
      title: "Domain II is where first-time pass is won or lost",
      html:
        "At <strong>70% of the exam</strong>, Care and Education Interventions is the largest single domain on any major nursing-adjacent certification. Candidates who treat it as \"one of three\" domains and split study time evenly are under-prepared on insulin pharmacology, GLP-1 and SGLT2 classes, CGM data interpretation, and motivational interviewing. Allocate at least half of your total study time to Domain II.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 12-week CDCES study plan",
    prose: [
      "Most successful candidates study for <strong>10–14 weeks at 8–12 hours per week</strong>. The right resources mapped to the new three-domain blueprint save dozens of wasted hours. Anchor your plan around the <strong>ADCES Core Concepts Review Guide (latest edition)</strong>, the <strong>ADA Standards of Care (current year)</strong>, and a third-party question bank with rationales. Drill Domain II heavily — it is 70% of your score.",
    ],
    weeks: [
      { n: 1, focus: "Domain I — Assessment, ADCES7 self-care, lab interpretation", qs: 50 },
      { n: 2, focus: "Domain I — Risk factors, complications screening, health literacy", qs: 50 },
      { n: 3, focus: "Domain II — Pharmacology: insulin, GLP-1 RAs, SGLT2i, metformin, SUs", qs: 75 },
      { n: 4, focus: "Domain II — Insulin therapy: basal/bolus, carb ratios, sensitivity factors", qs: 75 },
      { n: 5, focus: "Domain II — Diabetes technology: CGM, pumps, AID, smart pens", qs: 75 },
      { n: 6, focus: "Domain II — CGM data interpretation + 3 device decision cases", qs: 75 },
      { n: 7, focus: "Domain II — MNT, carb counting, behavior change, motivational interviewing", qs: 75 },
      { n: 8, focus: "Domain II — Hypoglycemia, DKA/HHS prevention, sick-day rules, build a full DSMES plan", qs: 75 },
      { n: 9, focus: "Domain III — ADA Standards summary + 2022 National DSMES Standards", qs: 40 },
      { n: 10, focus: "Full-length timed practice exam + error-log review", qs: 175 },
      { n: 11, focus: "Second full-length timed practice exam — target 75% or higher", qs: 175 },
      { n: 12, focus: "Weak-area review, light practice only, rest before exam day", qs: 40 },
    ],
    tipsHeading: "How CDCES candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Don't under-weight Domain II",
        text:
          "Care and Education Interventions is 70% of the exam. Candidates who split time evenly across all three domains end up under-prepared on pharmacology, CGM interpretation, and behavior change. Allocate at least half your total study hours here.",
      },
      {
        kicker: "Don't skip behavior-change content",
        text:
          "ADCES7 self-care behaviors and motivational-interviewing items show up across multiple domains. Skipping them costs 10–15 questions on its own — a meaningful chunk of your pass/fail margin.",
      },
      {
        kicker: "Don't study outdated CDE-era material",
        text:
          "Use the 2022 National Standards for DSMES and the latest ADA Standards of Care. Pre-2020 CDE-era books miss the updated pharmacology (GLP-1 RAs, tirzepatide-class) and the 2024 blueprint structure.",
      },
      {
        kicker: "Don't cram the last week",
        text:
          "Spaced repetition over 10+ weeks beats marathon weekends. Daily 60-minute sessions outperform weekend sprints. Keep the last 48 hours light — error-log review only.",
      },
      {
        kicker: "Take two full-length timed practice exams",
        text:
          "Weeks 10 and 11 should each include a full 175-item timed exam. Target 75% or higher on both. Pacing endurance for a 4-hour exam matters as much as content recall.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (verbatim from Content/CDCES Certification.docx)
  sample: {
    heading: "Sample CDCES question",
    prose: [
      "This item mirrors CBDCE's scenario format: a short clinical stem, a patient on a real-world regimen, and four plausibly-correct options where only one is <em>best</em>. Try it before you read the rationale.",
    ],
    q: {
      scenario:
        "A 58-year-old adult with type 2 diabetes on metformin and basal insulin reports recurrent hypoglycemia at 3 AM, with morning fasting glucose of 220 mg/dL.",
      stem: "Which intervention should the CDCES recommend first?",
      options: [
        "Increase the basal insulin dose.",
        "Add a bedtime carbohydrate snack.",
        "Apply a continuous glucose monitor for nocturnal data.",
        "Switch to a sliding-scale regimen.",
      ],
      correct: 2,
      rationale:
        "The pattern suggests the Somogyi effect — rebound hyperglycemia after nocturnal hypoglycemia. Confirming the pattern with CGM data is the appropriate first step before changing therapy. Increasing basal insulin (A) would worsen nocturnal hypoglycemia, a bedtime snack (B) may be appropriate later but is premature without data, and sliding-scale (D) is outdated and not evidence-based. This item maps to Domain II — Care and Education Interventions.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key CDCES terms every candidate should know",
    prose: [
      "Use this glossary while you study. Each term appears on the exam in multiple forms, often as a distractor in scenario-based items. Review until the definitions feel automatic.",
    ],
    rows: [
      { term: "A1C (HbA1c)", defn: "Average blood glucose over the previous 2–3 months. ADA target is generally < 7% for most non-pregnant adults.", domain: "Assessment" },
      { term: "ADCES7", defn: "The seven self-care behaviors framework: healthy coping, healthy eating, being active, taking medication, monitoring, reducing risks, problem solving.", domain: "Care & Education" },
      { term: "AID system", defn: "Automated Insulin Delivery — closed-loop system that links a CGM and insulin pump to adjust insulin automatically.", domain: "Care & Education" },
      { term: "CGM", defn: "Continuous Glucose Monitor — wearable sensor that reports glucose every 1–5 minutes.", domain: "Care & Education" },
      { term: "DKA", defn: "Diabetic Ketoacidosis — acute, life-threatening hyperglycemic crisis seen mostly in type 1 diabetes.", domain: "Care & Education" },
      { term: "DSMES", defn: "Diabetes Self-Management Education and Support — the core CDCES service, reimbursable under Medicare at accredited programs.", domain: "Standards" },
      { term: "GLP-1 RA", defn: "Glucagon-like peptide-1 receptor agonists (semaglutide, liraglutide, tirzepatide-class). Weight loss + glycemic benefit.", domain: "Care & Education" },
      { term: "HHS", defn: "Hyperosmolar Hyperglycemic State — hyperglycemic crisis seen mostly in type 2 diabetes; higher glucose and osmolality than DKA, minimal ketosis.", domain: "Care & Education" },
      { term: "MNT", defn: "Medical Nutrition Therapy — dietitian-led nutrition counseling, often paired with DSMES.", domain: "Care & Education" },
      { term: "SGLT2 inhibitor", defn: "Sodium-glucose cotransporter-2 inhibitors (empagliflozin, dapagliflozin); cardio- and renal-protective.", domain: "Care & Education" },
      { term: "Time in Range", defn: "Percentage of CGM readings within target glucose range, typically 70–180 mg/dL. A core CGM outcome metric.", domain: "Assessment" },
      { term: "Somogyi effect", defn: "Rebound hyperglycemia after nocturnal hypoglycemia; diagnosed with CGM before adjusting basal insulin.", domain: "Care & Education" },
      { term: "Dawn phenomenon", defn: "Early-morning hyperglycemia from counter-regulatory hormones; often confused with the Somogyi effect.", domain: "Care & Education" },
      { term: "MI (Motivational Interviewing)", defn: "Evidence-based counseling style that strengthens a patient's own motivation for change; core to Domain II behavior-change items.", domain: "Care & Education" },
      { term: "2022 National DSMES Standards", defn: "ADA and ADCES co-authored standards that define accredited DSMES programs and Medicare reimbursement eligibility.", domain: "Standards" },
    ],
  },

  // ---- COMPARE (directly from the CDCES vs BC-ADM table in the Word doc)
  compare: {
    heading: "CDCES vs. BC-ADM: which credential fits your practice?",
    prose: [
      "CDCES and BC-ADM are sister credentials — both governed by CBDCE since BC-ADM moved from ADCES to CBDCE in January 2025 — but they target different scopes of practice. Many APRNs and PharmDs hold both.",
    ],
    rows: [
      { row: "CDCES", highlight: true, body: "CBDCE", scope: "Education, behavior change, self-management", who: "RN, RD/RDN, RPh, MD/DO, PA, OT, PT, podiatrist, optometrist, psychologist, MSW, MCHES, ACSM-CEP" },
      { row: "BC-ADM", body: "CBDCE (since Jan 2025)", scope: "Advanced clinical management, medication titration", who: "RN, APRN, RD/RDN, PharmD, PA, MD/DO with graduate degree" },
      { row: "CDE (pre-2020 name)", body: "CBDCE", scope: "Historical name for CDCES — same credential", who: "No longer awarded; existing CDE holders became CDCES" },
      { row: "BE-MNT (dietitian subspecialty)", body: "CDR", scope: "Board certification in medical nutrition therapy", who: "RDs who want MNT depth rather than DSMES breadth" },
    ],
    closingProse:
      "<strong>Quick rule of thumb:</strong> choose CDCES if your work centers on teaching self-management. Choose BC-ADM if your license includes prescriptive authority and you adjust medications. BC-ADM requires a graduate degree (MSN, PharmD, MS, etc.) earned within the last 48 months and 500 advanced-management hours over 24 months — a tighter window than CDCES's 1,000 DSMES hours over 5 years. Dual CDCES/BC-ADM is common for APRNs and PharmDs who span both scopes.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about CDCES certification",
    items: [
      { q: "Is CDCES the same as CDE?", a: "Yes. CBDCE renamed the credential from CDE to CDCES in 2020. The eligibility, exam, and recognition all carried forward — older articles that say \"CDE\" are talking about today's CDCES." },
      { q: "How long does it take to prepare for the CDCES exam?", a: "Most candidates study for 10–14 weeks at 8–12 hours per week. Active diabetes clinicians need less structured review than candidates returning to diabetes practice after a break." },
      { q: "Do telehealth DSMES hours count toward the 1,000-hour requirement?", a: "Yes. CBDCE accepts virtual DSMES delivery as long as it falls under your scope of practice and a supervisor can verify the hours if you are audited." },
      { q: "Do volunteer hours count toward CDCES eligibility?", a: "Yes. CBDCE accepts paid and volunteer DSMES hours, but a supervisor or other health professional must verify them if you are audited. Hours are capped at 40 per week regardless of actual time worked." },
      { q: "What happens if I fail the CDCES exam?", a: "You may retake the exam in the next testing window for the $340 retake fee ($220 for ADCES members). You may not test three times across three consecutive windows — you must skip a window after two consecutive attempts." },
      { q: "Does CDCES certification expire?", a: "Yes. CDCES certification is valid for 5 years. Renew by CE (75 diabetes CE hours, 2 ADA Standards activities, and 1,000 DSMES practice hours) or by retaking the exam at the same $350 fee." },
      { q: "Is CDCES recognized outside the United States?", a: "CBDCE certifies candidates who hold US or Canadian licenses. International recognition varies by country; many international diabetes employers accept the credential as a marker of expertise." },
      { q: "How much do CDCES-credentialed clinicians earn?", a: "ZipRecruiter (2026) reports an average of $87,671 per year for diabetes educators; Glassdoor reports $104,147 at the higher end. Pay varies by license type, geography, and setting — APRN and PharmD CDCES holders earn at the high end of the range." },
      { q: "What is the CDCES exam pass rate?", a: "The reported CDCES pass rate was 73% in 2023, with multi-year averages closer to 63%. CBDCE publishes annual exam statistics — the 2023 figure is the most recent publicly available number." },
      { q: "Should I take CDCES or BC-ADM?", a: "Choose CDCES if your work centers on teaching self-management. Choose BC-ADM if your license includes prescriptive authority and you adjust medications. Many APRNs and PharmDs hold both credentials — CDCES has a broader eligible-discipline list, BC-ADM is deeper on clinical management." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following primary sources. Fees, blueprint weights, and renewal rules shift on CBDCE's revision cycle — always verify numeric facts against the current CBDCE handbook before relying on them for application decisions.",
    ],
    list: [
      "CBDCE — CDCES Eligibility Requirements and Certification Examination Handbook (2026)",
      "CBDCE — CDCES Renewal Handbook (2025) and July 2024 blueprint update announcement",
      "American Diabetes Association (ADA) — Standards of Care in Diabetes (current year)",
      "Association of Diabetes Care & Education Specialists (ADCES) — Practice Guidelines, Workforce Reports, Core Concepts Review Guide",
      "CDC — National Diabetes Statistics Report and DSMES Toolkit (~40.1M US adults with diabetes; ~115.2M with prediabetes)",
      "Diabetes Education Services — CDCES exam preparation resources and exam updates",
      "ZipRecruiter, Glassdoor, Payscale — 2026 salary benchmarks for diabetes educators ($87,671 avg; $104,147 at the high end)",
      "US Bureau of Labor Statistics (BLS) — Occupational Employment and Wage Statistics, Registered Nurses (May 2024)",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice CDCES-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to the July 2024 blueprint — heavy on Domain II, where 70% of your score lives. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full CDCES question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "BC-ADM",
      title: "CDCES vs BC-ADM: which CBDCE credential fits your scope?",
      blurb: "Eligibility, scope, and fees for both CBDCE credentials — for APRNs and PharmDs deciding whether to stack them.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Domain II",
      title: "Domain II: the 70% of CDCES that decides first-time pass",
      blurb: "Why Care and Education Interventions dominates the exam — and the insulin pharmacology, CGM data, and MI content candidates miss most.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "DSMES",
      title: "Landing a DSMES program role with CDCES on your badge",
      blurb: "How ADA- and ADCES-accredited programs actually use CDCES — and what program coordinators look for beyond the credential.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
