// BMTCN exam detail page — structured data.
// Sourced from Content/BMTCN_research.json (verified against the ONCC BMTCN
// credential page, the 2025 BMTCN Test Content Outline PDF, the 2026 ONCC
// Test Registration Manual PDF, the ONCC BMTCN-to-TCTCN Name Change FAQ,
// and the ONCC History page, accessed 2026-05-20).
// Lives at /certifications/bmtcn/ via the paginated template.
//
// NOTE on rename: ONCC renamed BMTCN to TCTCN effective 2026-01-01.
// This page is the SEO/discovery entry point for nurses searching "BMTCN"
// and signposts the TCTCN successor consistently.

module.exports = {
  code: "BMTCN",
  name: "Blood and Marrow Transplant Certified Nurse",
  body: "ONCC",
  cat: "oncology",
  catLabel: "Oncology",
  updated: "2026-05",

  // Page-level SEO
  seo: {
    title:
      "BMTCN Certification (Now TCTCN) Guide 2026 | NursPrep",
    description:
      "Everything BMT and cellular-therapy RNs need on BMTCN in 2026 — ONCC eligibility, blueprint, $300 fee, the TCTCN rename, and four-year renewal explained.",
    ogTitle:
      "BMTCN Certification Guide 2026 — Blood & Marrow Transplant Certified Nurse (now TCTCN)",
    ogDescription:
      "ONCC's transplant credential, renamed TCTCN in January 2026. 2,000-hour eligibility, six-domain blueprint, $300 member fee, year-round PSI testing, and ILNA renewal.",
  },

  // ---- HERO
  lede:
    "BMTCN is the RN-level board certification for blood and marrow transplant nursing in the United States. The credential is issued by the <strong>Oncology Nursing Certification Corporation (ONCC)</strong>, and effective <strong>January 1, 2026</strong> ONCC renamed it the <strong>Transplantation and Cellular Therapy Certified Nurse (TCTCN)</strong> to reflect expanded cellular-therapy practice.",
  heroPills: [
    { k: "Questions", v: "150 items" },
    { k: "Duration", v: "3 hours" },
    { k: "Renewal", v: "4 years" },
    { k: "Now", v: "TCTCN (2026)" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "Oncology Nursing Certification Corporation (ONCC)" },
    { k: "Format", v: "Computer-based at PSI test centers (year-round in North America)" },
    { k: "Total items", v: "165 — 125 scored + 40 pretest" },
    { k: "Time limit", v: "3 hours (includes 15-min tutorial + post-test survey)" },
    { k: "Eligibility", v: "Active RN license + 2 yrs RN + 2,000 HSCT hours + 10 CE hours" },
    { k: "Fee (ONS / APHON member)", v: "$300 · non-member $420" },
    { k: "DoubleTake retake option", v: "$100 prepaid" },
    { k: "Renewal cycle", v: "4 years — three ILNA renewal options" },
  ],
  heroCardFoot:
    "Verified against ONCC's 2026 Test Registration Manual, the 2025 BMTCN Test Content Outline, and the BMTCN-to-TCTCN Name Change FAQ",

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
    { id: "compare", label: "BMTCN vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "BMTCN certification at a glance",
    prose: [
      "BMTCN — Blood and Marrow Transplant Certified Nurse — is the RN-level benchmark for nurses working in hematopoietic stem cell transplantation and cellular therapy. The credential is issued by the <strong>Oncology Nursing Certification Corporation (ONCC)</strong>, the credentialing affiliate of the Oncology Nursing Society (ONS). ONCC was separately incorporated in Pennsylvania in 1984, administered its first OCN exam in April 1986, and launched the BMTCN exam in <strong>2014</strong> — <strong>524 nurses earned the BMTCN credential</strong> in its first year of testing.",
      "Effective <strong>January 1, 2026</strong>, ONCC renamed the credential to <strong>Transplantation and Cellular Therapy Certified Nurse (TCTCN)</strong> to better reflect the evolving practice of transplant and cellular therapy — including CAR-T, TIL, NK-cell, bispecific-antibody, and gene-therapy nursing. The rename was driven by ONCC's 2024 BMTCN role delineation study. All currently certified BMTCN holders automatically had their credentials updated to TCTCN on January 1, 2026; eligibility hours and CE rules are unchanged. The exam is NCCA-accredited and delivered at more than 1,500 PSI test centers worldwide.",
    ],
    stats: [
      { n: "165", l: "Total items", sub: "125 scored · 40 pretest" },
      { n: "3 hrs", l: "Time limit", sub: "Includes tutorial + survey" },
      { n: "4 yrs", l: "Renewal cycle", sub: "Three ILNA renewal options" },
      { n: "524", l: "First-year passers", sub: "Inaugural BMTCN cohort, 2014" },
    ],
    factBox: {
      tone: "info",
      title: "BMTCN is now TCTCN — same credential, new name",
      html:
        "On <strong>January 1, 2026</strong>, ONCC renamed BMTCN to <strong>TCTCN — Transplantation and Cellular Therapy Certified Nurse</strong>. The last BMTCN-branded application deadline was <strong>September 1, 2025</strong>; from January 2026 onward all exams are offered under the TCTCN name. Eligibility hours and CE rules are unchanged; ONCC updated the wording from \"blood and marrow stem cell transplantation\" to \"hematopoietic stem cell transplantation or cellular therapy nursing.\" Current BMTCN holders auto-converted to TCTCN — no action is required, and BMTCN should not be used after the change.",
    },
    coverImageLabel:
      "Transplant RN administering a cellular-therapy infusion to an inpatient on a BMT unit",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the BMTCN/TCTCN exam?",
    prose: [
      "You are eligible if you hold a <strong>current, active, unencumbered RN license</strong> in the United States, its territories, or Canada at the time of application and examination, <em>and</em> you have a <strong>minimum of two years (24 months) of experience as an RN</strong> within the four years (48 months) prior to applying. The exam is open to RNs in clinical practice, nursing administration, education, research, or consultation roles — the position must require an RN or APRN.",
      "Beyond the licensure and experience gates, candidates must document <strong>at least 2,000 hours of HSCT or cellular-therapy nursing practice within the four years prior to application</strong>, plus a <strong>minimum of 10 contact hours of continuing education</strong> in HSCT or cellular-therapy nursing (or an academic elective in oncology nursing) within the three years prior. Up to 5 of the 10 required CE hours may be accredited CME or CPE. Beginning with the 2026 TCTCN renaming, ONCC updated the specialty wording from \"blood and marrow stem cell transplantation\" to \"hematopoietic stem cell transplantation or cellular therapy nursing\" — the hours requirement itself did not change.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You work on an inpatient BMT/HCT unit — autologous, allogeneic (matched related, MUD, haploidentical, umbilical cord), or mixed-modality — and routinely manage conditioning regimens, infusions, and engraftment monitoring.",
      "You administer cellular therapies in a CAR-T or cellular-immunotherapy program and can recognize and grade cytokine release syndrome (CRS) and ICANS/neurotoxicity at the bedside.",
      "You staff an ambulatory BMT clinic, BMT survivorship long-term follow-up clinic, or a pediatric transplant service that supports adults and children across the continuum.",
      "You can differentiate acute GVHD presentations from engraftment syndrome, infectious complications, and drug reactions in the early post-transplant window.",
      "You document infection prevention, transfusion support, immunosuppressive titration, and chimerism trends as part of routine post-transplant nursing care.",
    ],
  },

  // ---- BLUEPRINT (weights = 2025 BMTCN scored-item percentages, sum to 100)
  blueprint: {
    heading: "BMTCN exam blueprint — six domains (2025 outline)",
    prose: [
      "The 2025 BMTCN blueprint splits 100% of test content across six domains. <strong>Early Post-Transplant Management is the heaviest domain at 21%</strong>, followed closely by Late Post-Transplant Management at 20%; together the two post-transplant management blocks carry <strong>41% of the test</strong> — the right place to put the most study weight. Foundations of Transplant (basic concepts, indications, donor types, stem-cell sources) carries 19%, and Transplant Process and Infusion (mobilization, conditioning, cellular infusion, donor lymphocyte infusion) carries 17%.",
      "Effective with the <strong>January 2026 TCTCN renaming</strong>, ONCC restructured the blueprint based on the 2024 role delineation study: the new TCTCN blueprint splits HSCT and cellular-therapy management into parallel post-treatment domains (each ~22%), raises Foundations to 22%, and trims Quality of Life to 8% and Professional Performance to 4%. Candidates testing in 2026 windows should study against the TCTCN content outline — not the legacy BMTCN one. Both outlines are published on ONCC's site.",
    ],
    domains: [
      { label: "Foundations of Transplant", weight: 19 },
      { label: "Transplant Process and Infusion", weight: 17 },
      { label: "Early Post-Transplant Management", weight: 21 },
      { label: "Late Post-Transplant Management", weight: 20 },
      { label: "Quality of Life", weight: 11 },
      { label: "Professional Performance", weight: 12 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, scheduling, and renewal",
    prose: [
      "ONCC delivers BMTCN/TCTCN through <strong>PSI computer-based test centers</strong> — more than 1,500 PSI locations worldwide, including hundreds in the United States. <strong>Year-round testing</strong> has been available in North America since 2015. After ONCC approves the application, PSI emails an Authorization to Test (ATT) within 4–6 weeks; the ATT is valid for 90 days. International testing is offered once per year — for the 2026 cycle, international testing runs <strong>June 1 to 30, 2026</strong>, with an application deadline of <strong>March 1, 2026</strong> and a <strong>$75 international surcharge</strong>.",
    ],
    rows: [
      { k: "Initial certification — ONS or APHON member", v: "$300" },
      { k: "Initial certification — non-member", v: "$420", highlight: true },
      { k: "DoubleTake (prepaid retake)", v: "$100" },
      { k: "International testing surcharge", v: "$75" },
      { k: "May 2026 Oncology Nursing Month promo", v: "20% off (code ONM2026, May 1–31)" },
      { k: "ONCC FreeTake employer program", v: "Employer-covered, free retest" },
      { k: "Test format", v: "165 multiple-choice items, 3-hour session" },
      { k: "Payment methods", v: "Visa, MasterCard, American Express, Discover" },
    ],
    factBox: {
      tone: "success",
      title: "Join ONS before you apply — and ask about FreeTake",
      html:
        "The <strong>$120 fee delta</strong> between ONS/APHON-member ($300) and non-member ($420) pricing is roughly the cost of annual ONS membership. Joining ONS or APHON before applying typically pays for itself on the first sitting and unlocks the <em>Oncology Nursing Forum</em>, ONS Congress access, and discounted prep resources. The <strong>$100 DoubleTake</strong> add-on prepays one retake within 180 days — meaningfully cheaper than a second full application if you fail the first attempt. If your hospital participates in <strong>ONCC FreeTake</strong>, your employer covers the test fee and a free retest.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "BMTCN/TCTCN certification is valid for <strong>four years</strong>. ONCC offers <strong>three renewal options</strong>. <strong>Option 1 (most popular):</strong> Practice hours plus Professional Development Points entered through the <strong>Individual Learning Needs Assessment (ILNA)</strong> framework in LearningBuilder. ILNA has been the primary renewal method since 2016. <strong>Option 2:</strong> Practice hours plus successful retesting. <strong>Option 3:</strong> Points plus successful retesting.",
      "Renewal eligibility requires an active, unencumbered RN license; <strong>one year (12 months) of RN experience within the three years prior</strong>; and <strong>1,000 hours of blood and marrow stem cell transplantation nursing experience within the 30 months prior</strong> to application. Renewal applications and learning plans are due <strong>September 15</strong> (early-bird, saves $100 off the final deadline fee) or <strong>October 15</strong> (final deadline) of the year a certification expires. Lapsed credentials can be reinstated by <strong>March 31</strong> of the year after expiration; after that, candidates must sit the current TCTCN exam to reinstate.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the BMTCN exam?",
    prose: [
      "ONCC publishes annual examination statistics on its <em>Test Scores and More</em> page and in an annual Examination Statistics and Pass Rates PDF. The most recent BMTCN-specific first-time pass-rate figure is not surfaced as a hero number on this page because the 2024 statistics PDF was not directly verifiable against ONCC's published candidate-facing pages in our research pass — and the project's editorial rule is to leave numeric facts null rather than fabricate them. Multiple third-party prep sites characterize BMTCN annual pass rates as generally between 68% and 70%, but these are not anchored to a primary ONCC citation.",
      "What we do know is structural. ONCC uses a <strong>criterion-referenced standard-setting process</strong> (Angoff method) with a Passing Score Task Force of certified nurses, rather than a fixed percentage cutoff. A <strong>2025 BMTCN Passing Score Task Force</strong> reviewed the exam and recommended the score required to demonstrate minimum competence; the new TCTCN blueprint may shift year-over-year pass rates while the new standard beds in. The exam itself is a three-hour PSI session with 165 items — pacing matters as much as content mastery.",
    ],
    rows: [],
    target: 80,
    footnote:
      "First-time pass rate not displayed because ONCC's 2024 BMTCN-specific statistics PDF was not directly verified in this research pass. Refer to ONCC's Examination Statistics and Pass Rates document for the current cycle.",
    factBox: {
      tone: "info",
      title: "How ONCC scores the BMTCN/TCTCN",
      html:
        "ONCC uses a <strong>criterion-referenced</strong> standard-setting process — a panel of subject-matter experts uses the Angoff method to determine the score a minimally competent transplant nurse must achieve, rather than ranking candidates against each other. Of the 165 items on the test, <strong>125 are scored and 40 are pretest items</strong> being evaluated for future use; candidates cannot tell which is which. Practical implication: don't waste time second-guessing items that feel oddly worded — they may be pretest, and stewarding the clock is more valuable than perfecting a single answer.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 10-week BMTCN/TCTCN study plan",
    prose: [
      "A structured 10-week plan suits most working BMT and cellular-therapy RNs — about <strong>80 to 110 total study hours</strong> across the six blueprint domains. Practice-question volume ramps through weeks 2–8 and peaks in week 9 with a full-length timed 165-item exam under real conditions; week 10 is for targeted review of weak domains, logistics, and a rest day. Aim for <strong>500 to 900 practice items</strong> total before test day, anchored on ONCC's free 50-question practice test plus the paid practice test.",
    ],
    weeks: [
      { n: 1, focus: "Read ONCC's 2025 BMTCN (or 2026 TCTCN) Test Content Outline + baseline 50-item ONCC practice test", qs: 50 },
      { n: 2, focus: "Foundations — hematopoietic lineage, immune function, HLA typing, donor types (allo, auto, haplo, MUD, cord)", qs: 50 },
      { n: 3, focus: "Transplant Process and Infusion — mobilization, conditioning regimens (chemo, radiation, biotherapy), cellular infusion, DLI", qs: 60 },
      { n: 4, focus: "Early Post-Transplant I — acute GVHD presentations, organ staging, immunosuppression titration", qs: 60 },
      { n: 5, focus: "Early Post-Transplant II — infection prevention, sepsis, engraftment syndrome, CRS, ICANS, VOD/SOS", qs: 60 },
      { n: 6, focus: "Late Post-Transplant — chronic GVHD, photopheresis, late effects (bronchiolitis obliterans, cataracts, infertility), relapse surveillance", qs: 60 },
      { n: 7, focus: "Cellular therapies deep dive — CAR-T, TIL, NK, bispecific antibodies, gene therapy (TCTCN content)", qs: 60 },
      { n: 8, focus: "Quality of Life + Professional Performance — survivorship, palliative care, FACT accreditation, safe handling", qs: 50 },
      { n: 9, focus: "Full-length timed practice exam (165 items in 3 hours) + error-log review", qs: 165 },
      { n: 10, focus: "Targeted review of weak domains, rest day, logistics, test day", qs: 40 },
    ],
    tipsHeading: "How BMTCN candidates actually fail — and how to avoid it",
    tips: [
      {
        kicker: "Don't under-study cellular therapy",
        text:
          "The 2026 TCTCN blueprint splits cellular-therapy management into a parallel 22% domain. CAR-T cytokine release syndrome (CRS), ICANS neurotoxicity grading, and the tocilizumab/corticosteroid algorithm are each named explicitly. Bedside experience on a CAR-T floor is the strongest predictor of confidence on these items.",
      },
      {
        kicker: "Distinguish acute GVHD from its imitators",
        text:
          "Early Post-Transplant Management is 21% of the BMTCN exam. The classic item-stem ambiguity is differentiating acute GVHD (skin, GI, liver — usually day +14 to day +100) from engraftment syndrome (fever, rash, capillary leak — around neutrophil engraftment), drug reactions, and viral reactivation (CMV, HHV-6). Memorize the staging and grading criteria for acute GVHD cold.",
      },
      {
        kicker: "Pace 165 items in 3 hours",
        text:
          "ONCC's three-hour session has no scheduled breaks; the clock continues if you step away. That averages about 65 seconds per item. Take at least one full-length timed practice exam before test day so you know whether you naturally run fast or slow on transplant content.",
      },
      {
        kicker: "Know your conditioning intensity classes",
        text:
          "Myeloablative, reduced-intensity, and non-myeloablative regimens have different toxicity profiles and post-transplant courses. Items frequently test recognition of conditioning-related toxicities (mucositis, VOD/SOS, idiopathic pneumonia syndrome, hemorrhagic cystitis). Build a one-page comparison chart and review it nightly during week 3.",
      },
      {
        kicker: "Don't skip Professional Performance",
        text:
          "Only 12% of the 2025 blueprint and 4% of the 2026 TCTCN blueprint, but high-yield because it's structured: FACT accreditation, REMS for cellular therapies, informed consent for transplant, professional boundaries with families during long admissions, and safe handling of cytotoxic conditioning agents. Easy points if you have the framework.",
      },
    ],
  },

  // ---- SAMPLE QUESTION
  sample: {
    heading: "Sample BMTCN/TCTCN question",
    prose: [
      "This item mirrors the ONCC BMTCN/TCTCN format: a transplant-nursing clinical stem and four plausibly-correct options where only one is best. The topic — distinguishing acute GVHD from engraftment syndrome in the early post-transplant window — is a recurring high-yield exam pattern in domain III (Early Post-Transplant Management).",
    ],
    q: {
      scenario:
        "A 42-year-old man on day +18 after a matched-unrelated donor (MUD) allogeneic peripheral blood stem cell transplant develops a non-pruritic maculopapular rash covering 30% of his body surface area, a temperature of 38.6°C, weight gain of 4 kg over 48 hours, and an oxygen requirement of 2 L by nasal cannula. His ANC has recovered to 1,200/microL over the previous three days. Tacrolimus and methotrexate are on schedule and his tacrolimus trough is therapeutic.",
      stem: "Which diagnosis best fits this presentation, and what is the nurse's most appropriate next action?",
      options: [
        "Acute graft-versus-host disease, skin Stage 2 — escalate immunosuppression with high-dose IV methylprednisolone after confirming with skin biopsy.",
        "Engraftment syndrome — anticipate diuresis and a short course of corticosteroids while continuing tacrolimus and methotrexate as ordered.",
        "Drug fever from methotrexate — hold the next methotrexate dose and obtain blood cultures before further intervention.",
        "Idiopathic pneumonia syndrome — initiate broad-spectrum antibiotics and prepare the patient for transfer to ICU.",
      ],
      correct: 1,
      rationale:
        "The constellation — non-pruritic rash, low-grade fever, fluid retention with weight gain, and a mild oxygen requirement appearing within 96 hours of neutrophil engraftment — is the classic picture of engraftment syndrome (also called pre-engraftment syndrome or peri-engraftment respiratory distress). It is named explicitly in the 2025 BMTCN blueprint section III.F. Acute GVHD typically presents with a pruritic rash and follows a different time course; staging requires biopsy confirmation rather than reactive high-dose steroids. Methotrexate drug fever does not produce capillary leak or rash. Idiopathic pneumonia syndrome causes pulmonary infiltrates with significant hypoxia, not the mild oxygen requirement described. Recognition of engraftment syndrome and initiation of supportive diuresis plus a short corticosteroid taper, while maintaining baseline immunosuppression, is the right nursing-driven response.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key BMTCN/TCTCN terms every candidate should know",
    prose: [
      "These terms surface in most BMTCN/TCTCN exam items. Review them until the definitions feel automatic — scenario stems hinge on whether the candidate can name which framework applies (engraftment syndrome vs acute GVHD, CRS vs ICANS, allogeneic vs autologous donor sources, myeloablative vs reduced-intensity conditioning).",
    ],
    rows: [
      { term: "Acute GVHD", defn: "Graft-versus-host disease occurring typically within the first 100 days after allogeneic HSCT. Target organs are skin (maculopapular rash), gastrointestinal tract (diarrhea, abdominal pain), and liver (cholestasis, elevated bilirubin). Staged and graded by organ involvement.", domain: "Early Post-Transplant Management" },
      { term: "Chronic GVHD", defn: "GVHD occurring beyond day +100 (though increasingly defined by clinical features rather than day-of-onset). Affects skin, mouth, eyes, lungs, GI tract, joints, and other organs. Management may include corticosteroids, ruxolitinib, and extracorporeal photopheresis.", domain: "Late Post-Transplant Management" },
      { term: "Conditioning regimen", defn: "Chemotherapy, radiation, biotherapy, or immunotherapy administered before stem-cell infusion to eradicate disease, suppress recipient immunity, and create marrow space. Classified by intensity as myeloablative, reduced-intensity (RIC), or non-myeloablative.", domain: "Transplant Process and Infusion" },
      { term: "Engraftment", defn: "Recovery of donor-derived hematopoiesis. Neutrophil engraftment is conventionally defined as ANC at least 500/microL for three consecutive days; platelet engraftment as platelets at least 20,000/microL without transfusion for seven days.", domain: "Early Post-Transplant Management" },
      { term: "Engraftment syndrome", defn: "Peri-engraftment fever, non-infectious rash, weight gain, capillary leak, and sometimes hypoxia occurring within 96 hours of neutrophil recovery. Distinct from acute GVHD; usually responds to a short corticosteroid course plus diuresis.", domain: "Early Post-Transplant Management" },
      { term: "Sinusoidal obstructive syndrome (VOD/SOS)", defn: "Sinusoidal obstruction of hepatic venules from conditioning-related endothelial injury. Triad of weight gain, painful hepatomegaly, and hyperbilirubinemia, typically within the first 21 days. Severe SOS may be treated with defibrotide.", domain: "Early Post-Transplant Management" },
      { term: "CAR-T (chimeric antigen receptor T-cell therapy)", defn: "Autologous (or rarely allogeneic) T cells genetically modified to express a CAR targeting a tumor antigen (e.g., CD19, BCMA). Administered after lymphodepleting chemotherapy. Major toxicities are CRS and ICANS.", domain: "Transplant Process and Infusion / Cellular Therapy" },
      { term: "Cytokine release syndrome (CRS)", defn: "Systemic inflammatory response after CAR-T or bispecific-antibody administration. Graded 1–4 by ASTCT consensus (fever, hypotension, hypoxia). Tocilizumab is first-line for grade 2 and above; corticosteroids added for refractory or higher-grade CRS.", domain: "Cellular Therapy Management" },
      { term: "ICANS (immune effector cell-associated neurotoxicity syndrome)", defn: "Neurotoxicity following CAR-T or other immune-effector-cell therapies. Assessed with the ICE score and graded 1–4 by ASTCT consensus. Tocilizumab does not cross the blood-brain barrier; corticosteroids are the mainstay of treatment.", domain: "Cellular Therapy Management" },
      { term: "Chimerism", defn: "Proportion of donor versus recipient hematopoietic cells after allo-HSCT, measured by short tandem repeat (STR) or VNTR analysis. Used to monitor engraftment, predict relapse, and guide donor lymphocyte infusion (DLI) decisions.", domain: "Early Post-Transplant Management" },
      { term: "FACT accreditation", defn: "Foundation for the Accreditation of Cellular Therapy — voluntary accreditation standard for cellular-therapy programs covering clinical, collection, and processing facilities. Items often test the nurse's role in FACT-required documentation and quality metrics.", domain: "Professional Performance" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "BMTCN vs. OCN, CPHON, AOCNP, AOCNS",
    prose: [
      "BMTCN/TCTCN sits alongside ONCC's broader oncology credential family. Nurses considering BMTCN sometimes confuse it with OCN (the adult oncology credential) or with the pediatric and advanced-practice exams. The distinction matters before paying the application fee.",
    ],
    rows: [
      { row: "BMTCN / TCTCN", highlight: true, body: "ONCC", scope: "Blood and marrow transplantation and cellular therapy (renamed TCTCN in 2026)", who: "RNs working in HSCT or cellular-therapy practice" },
      { row: "OCN", body: "ONCC", scope: "Adult oncology nursing — broad scope across the cancer continuum", who: "RNs caring for adult oncology patients" },
      { row: "CPHON", body: "ONCC", scope: "Pediatric hematology and oncology nursing", who: "RNs caring for pediatric oncology and BMT patients" },
      { row: "AOCNP", body: "ONCC", scope: "Advanced practice — adult oncology nurse practitioner", who: "NPs (or graduates of NP programs) practicing in adult oncology" },
      { row: "AOCNS (renewal only)", body: "ONCC", scope: "Advanced practice — adult oncology clinical nurse specialist", who: "CNSs already certified; exam retired in 2017" },
    ],
    closingProse:
      "<strong>Take BMTCN/TCTCN if you work in HSCT or cellular therapy</strong> and have 2,000 hours of specialty practice in the last four years. Take OCN if your adult oncology practice is broader than transplant. Take CPHON if your patients are pediatric. AOCNP is for adult-oncology NPs at the advanced-practice level. AOCNS is available for renewal only — new candidates cannot sit it. Many transplant nurses pair BMTCN/TCTCN with OCN or CPHON depending on the population they care for.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about BMTCN certification",
    items: [
      { q: "What does BMTCN stand for in nursing?", a: "BMTCN stands for Blood and Marrow Transplant Certified Nurse. The credential is issued by the Oncology Nursing Certification Corporation (ONCC) and validates RN expertise in hematopoietic stem cell transplantation and cellular therapy. Effective January 1, 2026, ONCC renamed the credential Transplantation and Cellular Therapy Certified Nurse (TCTCN)." },
      { q: "Is BMTCN going away?", a: "The exam name and credential designation changed to TCTCN on January 1, 2026, but the credential itself continues. All currently certified BMTCN nurses automatically have their credentials updated to TCTCN; no action is required to maintain certification. Eligibility, hours, and CE requirements are unchanged. ONCC asks holders to use the TCTCN credential after the change." },
      { q: "Who issues the BMTCN/TCTCN certification?", a: "ONCC — the Oncology Nursing Certification Corporation — issues the BMTCN/TCTCN credential. ONCC is the credentialing affiliate of the Oncology Nursing Society (ONS), was separately incorporated in Pennsylvania in 1984, administered its first OCN exam in April 1986, and offered the first BMTCN exam in 2014. The credential is NCCA-accredited." },
      { q: "What are the eligibility requirements for the BMTCN exam?", a: "Candidates need a current, active, unencumbered RN license in the US, its territories, or Canada; at least two years (24 months) of RN experience within the four years prior to application; 2,000 hours of HSCT or cellular-therapy nursing practice within the four years prior; and 10 contact hours of nursing CE in HSCT or cellular-therapy nursing (or an academic oncology elective) within the three years prior. Up to 5 of 10 CE hours may be CME or CPE." },
      { q: "How much does the BMTCN/TCTCN exam cost?", a: "ONCC charges $300 for ONS or APHON members and $420 for non-members. The optional DoubleTake retake add-on costs $100 and must be purchased at the time of initial application. International testing carries a $75 surcharge. ONS membership runs about $130–$140 annually, so joining ONS before applying typically pays for itself on the first sitting." },
      { q: "How many questions are on the BMTCN/TCTCN exam?", a: "The exam contains 165 multiple-choice items in a three-hour session. Of those, 125 are scored and 40 are pretest/experimental items that ONCC is evaluating for future use; candidates cannot tell which is which. The session also includes a 15-minute computer-based testing tutorial and a post-test survey." },
      { q: "What is the BMTCN pass rate?", a: "ONCC publishes annual examination statistics on its Test Scores and More page and in an annual Examination Statistics and Pass Rates PDF. The most recent BMTCN-specific first-time pass-rate figure is not displayed on this page because the 2024 statistics PDF was not directly verifiable in our research pass; refer to ONCC's published statistics for the current cycle. Third-party prep sites characterize BMTCN annual pass rates as generally between 68% and 70%." },
      { q: "When can I take the BMTCN/TCTCN exam?", a: "ONCC offers year-round testing at PSI test centers in the United States, its territories, and Canada (year-round testing began in 2015). International testing is offered once per year — for the 2026 cycle, international testing runs June 1 to 30, 2026, with an application deadline of March 1, 2026 and a $75 international surcharge. The last BMTCN-branded application deadline was September 1, 2025; from January 2026 onward all exams are offered as TCTCN." },
      { q: "Does BMTCN/TCTCN certification expire?", a: "Yes. The certification is valid for four years. ONCC offers three renewal options: Option 1 (most popular) combines practice hours and Professional Development Points via the Individual Learning Needs Assessment (ILNA) framework in LearningBuilder; Option 2 combines practice hours and successful retesting; Option 3 combines points and retesting. Renewal eligibility requires one year of RN experience in the last 36 months plus 1,000 hours of BMT/HSCT practice in the last 30 months." },
      { q: "What is the difference between BMTCN and OCN?", a: "OCN is ONCC's broad adult-oncology credential and was the first ONCC exam (offered since 1986). BMTCN/TCTCN is the specialty credential for nurses focused on hematopoietic stem cell transplantation and cellular therapy. Both require 2 years of RN experience, 2,000 specialty hours, and 10 CE hours, but the specialty wording differs (adult oncology for OCN; HSCT and cellular therapy for BMTCN/TCTCN). Many transplant nurses hold both." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "All figures on this page are verified against the following primary sources. Fees, blueprint counts, and renewal rules shift on ONCC's revision cycle, and the BMTCN-to-TCTCN rename took effect on January 1, 2026. Always verify numeric facts against the current ONCC credential page and 2026 Test Registration Manual before relying on them for application decisions.",
    ],
    list: [
      "ONCC — Blood & Marrow Transplant Certified Nurse (BMTCN) credential page: eligibility, fees, PSI scheduling — oncc.org/blood-marrow-transplant-certified-nurse-bmtcn",
      "ONCC — BMTCN renewal page: 4-year cycle, three renewal options, deadlines, ILNA — oncc.org/blood-marrow-transplant-certified-nurse-bmtcn-renew",
      "ONCC — 2025 BMTCN Test Content Outline (PDF): six-domain blueprint with section-level detail — oncc.org/sites/default/files/2024-11/2025_BMTCN_Test_Content_Outline.pdf",
      "ONCC — 2026 Oncology Nursing Certification Test Registration Manual (PDF, January 1, 2026): TCTCN content outline, fees, DoubleTake, international testing — oncc.org/sites/default/files/2025-12/2026_ONCC_Test_Registration_Manual_Web_121925.pdf",
      "ONCC — BMTCN-to-TCTCN Name Change FAQ — oncc.org/bmtcn-tctcn-name-change-faq",
      "ONCC — ONCC Changing Name of BMTCN Certification to TCTCN (news release) — oncc.org/about-oncc/news/oncc-changing-name-bmtcn-certification-tctcn",
      "ONCC — Transplantation and Cellular Therapy Certified Nurse (TCTCN) credential page (successor name effective January 2026) — oncc.org/transplantation-cellular-therapy-certified-nurse-tctcn",
      "ONCC — History of ONCC: 1984 incorporation, 1986 first OCN exam, 2014 first BMTCN exam (524 first-year passers), 2026 BMTCN-to-TCTCN rename — oncc.org/our-history",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice BMTCN/TCTCN-style items?",
  ctaProse:
    "Work through a diagnostic mapped to ONCC's six-domain blueprint, including engraftment, acute GVHD, and CAR-T cellular-therapy items. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full BMTCN question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Rename FAQ",
      tag: "TCTCN",
      title: "BMTCN vs TCTCN: what changed in January 2026",
      blurb: "The rename in plain English — what's the same (eligibility, hours, CE, renewal cycle) and what's new (cellular-therapy blueprint, restructured domains, updated specialty wording).",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "GVHD",
      title: "Acute GVHD vs engraftment syndrome: how to tell the high-yield difference on exam day",
      blurb: "Skin distribution, timing relative to neutrophil engraftment, the role of biopsy, and how each presentation should drive nursing-level next actions on a BMT inpatient unit.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "Cellular therapy",
      title: "From BMT nurse to CAR-T-trained nurse: building cellular-therapy hours toward TCTCN",
      blurb: "How to document cellular-therapy practice hours, what CRS and ICANS grading workflows hiring managers look for, and how TCTCN's 2026 blueprint shapes role descriptions.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
