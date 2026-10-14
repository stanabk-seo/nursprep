// CDDN exam detail page — structured data.
// Sourced from Content/CDDN_research.json (verified against DDNA's certification,
// application, fees/FAQ, renewal and exam-prep pages, read 2026-09-21).
// DDNA publishes no item count, no cut score, no weighted content outline and no
// pass rate for CDDN. Those fields are deliberately absent here — see the
// "gaps" array in Content/CDDN_research.json. Do not backfill them from
// third-party pages.
// Lives at /certifications/cddn/ via the paginated template.

module.exports = {
  code: "CDDN",
  name: "Certified Developmental Disabilities Nurse",
  body: "DDNA",
  cat: "specialty",
  catLabel: "Medical‑Surgical & Specialty",
  updated: "2026-09",

  // Page-level SEO (primary keyword: "CDDN certification")
  seo: {
    title:
      "CDDN Certification: Eligibility, Exam, Cost & Renewal | NursPrep",
    description:
      "CDDN certification is DDNA's RN credential in developmental disabilities nursing. Eligibility, fees, the 90-minute exam and 2-year renewal explained.",
    ogTitle:
      "CDDN Certification Guide — Certified Developmental Disabilities Nurse",
    ogDescription:
      "DDNA eligibility (4,000 practice hours), $104.50–$209 application fees, a 90-minute exam at Prometric, and the 2-year renewal cycle for IDD nurses.",
  },

  // ---- HERO
  lede:
    "CDDN is the registered-nurse certification in intellectual and developmental disabilities (IDD) nursing, awarded by the Developmental Disabilities Nurses Association (DDNA). The credential is RN-only — DDNA certifies licensed practical and vocational nurses under a separate credential, DDC. Certification is competency-based: DDNA measures documented IDD practice and an exam, not your degree.",
  heroPills: [
    { k: "Time limit", v: "90 minutes" },
    { k: "Experience", v: "4,000 hours" },
    { k: "Renewal", v: "2 years" },
    { k: "Exam fee", v: "$150–$250" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "Developmental Disabilities Nurses Association (DDNA)" },
    { k: "Credential line", v: "RN, CDDN — LPNs and LVNs earn DDC instead" },
    { k: "Format", v: "Computer-based at Prometric, or the annual DDNA conference group exam" },
    { k: "Time limit", v: "Up to 90 minutes — most finish in 45–60" },
    { k: "Eligibility", v: "Active RN licence plus current DDNA membership" },
    { k: "Experience", v: "4,000 IDD nursing hours in the previous 60 months" },
    { k: "Application fee", v: "$104.50 member · $209 with new membership", highlight: true },
    { k: "Exam fee", v: "$150 local Prometric · $250 group exam" },
    { k: "Renewal cycle", v: "2 years — 25 to 60 CE contact hours" },
  ],
  heroCardFoot:
    "Verified against DDNA's certification, application, fees and renewal pages, read 2026-09-21",

  // ---- TOC
  sections: [
    { id: "overview", label: "What CDDN is" },
    { id: "eligibility", label: "Eligibility" },
    { id: "blueprint", label: "Exam content" },
    { id: "cost", label: "Cost & renewal" },
    { id: "passrate", label: "Exam difficulty" },
    { id: "plan", label: "Study plan" },
    { id: "sample", label: "Sample question" },
    { id: "keyterms", label: "Key terms" },
    { id: "compare", label: "CDDN vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "What is CDDN certification?",
    prose: [
      "CDDN certification is a national nursing credential for registered nurses who care for people with intellectual and developmental disabilities. The <strong>Developmental Disabilities Nurses Association (DDNA)</strong> awards it, and only DDNA-certified RNs may use the title Certified Developmental Disabilities Nurse or the letters <strong>RN, CDDN</strong>.",
      "DDNA certifies two groups under two different credentials. Registered nurses earn <strong>CDDN</strong>. Licensed practical and vocational nurses earn <strong>DDC</strong> — Developmental Disabilities Certified — and sign as LPN, DDC or LVN, DDC. Several career sites get this wrong, so check the credential before you pay an application fee.",
      "The exam covers IDD nursing across the lifespan. Expect content on <strong>Down syndrome</strong>, <strong>cerebral palsy</strong>, <strong>autism spectrum disorder</strong> and <strong>Fragile X syndrome</strong>, plus seizure care, medication management, delegation to direct support professionals, and the laws that protect the rights of people with developmental disabilities.",
      "DDNA built the RN programme in 1995 with the National League for Nursing. Health Education Systems, Inc. (HESI) rebuilt the exam in 2003, and Elsevier, Inc. now distributes it. Certification is voluntary — no state or federal body requires it — but employers and third-party payers may treat it as a preferred credential.",
    ],
    stats: [
      { n: "4,000", l: "Practice hours required", sub: "Within the previous 60 months" },
      { n: "90 min", l: "Maximum testing time", sub: "Most candidates finish in 45–60" },
      { n: "2 yrs", l: "Renewal cycle", sub: "25 to 60 CE hours, by practice hours" },
      { n: "$150", l: "Local exam fee", sub: "Group exam at the DDNA conference is $250" },
    ],
    factBox: {
      tone: "info",
      title: "Membership is part of the credential, not a discount",
      html:
        "You must be a DDNA member to sit the exam, and you must <strong>keep membership current for the entire certification period</strong>. If your membership lapses, your certification lapses with it and you may not use CDDN or DDC until you reinstate. DDNA dues are <strong>$80 per year</strong> and renew on a separate date from your certification — the two renewal notices are easy to confuse.",
    },
    coverImageLabel:
      "IDD nurse reviewing a medication plan with a direct support professional in a group home",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Who is eligible for the CDDN exam?",
    prose: [
      "You are eligible if you hold an active registered-nurse licence, belong to DDNA, and can document <strong>4,000 hours of active developmental disabilities nursing practice within the previous 60 months</strong>. Hours worked before that five-year window do not count.",
      "There is no degree requirement. DDNA states plainly that certification rests on competency rather than academic background, so an ADN-prepared RN and a master's-prepared RN apply on the same terms.",
      "Four thousand hours is close to two years of full-time work — DDNA counts a full-time year as 2,080 hours. Part-time IDD nurses simply take longer to reach the threshold.",
      "One trap catches career changers. If you logged your IDD hours as an LPN or LVN and have since become an RN, those hours do not transfer. You need <strong>4,000 hours of active practice as an RN</strong> before you may sit the CDDN exam.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You have about two years of full-time IDD nursing practice inside the last five years, documented by a supervisor on DDNA's employment verification form.",
      "Your role fits one DDNA recognises: practising nurse in an institutional or community IDD setting, nurse administrator, nurse educator, nurse consultant, or a nurse in the expanded role including nurse practitioners.",
      "You work across the lifespan, or you are willing to study the age group you do not see — DDNA warns that paediatric nurses must revise adult and ageing content, and vice versa.",
      "You can supply an employer-written job description specific to IDD nursing for every position you claim. Generic job descriptions are rejected.",
      "Your practice hours are paid, verifiable work. Caring for a family member with a developmental disability at home does not meet the requirement, paid or unpaid.",
    ],
  },

  // ---- BLUEPRINT (DDNA publishes no weighted content outline — domains intentionally empty)
  blueprint: {
    heading: "What does the CDDN exam cover?",
    prose: [
      "The CDDN exam covers day-to-day IDD nursing practice across the lifespan. <strong>DDNA does not publish a weighted content outline</strong> — there are no official domain percentages, no item counts and no published blueprint chart for this exam. What DDNA does publish is a study-area list on its exam-prep page, reproduced below.",
      "<ul>" +
        "<li><strong>Syndromes and conditions</strong> — recognise common syndromes and the health problems that travel with them, including their signs, symptoms and treatment.</li>" +
        "<li><strong>Seizure care</strong> — seizure types, rescue medication, safety planning and documentation.</li>" +
        "<li><strong>Medication management</strong> — drugs commonly prescribed to people with IDD, and whether a given drug suits a given person, syndrome and situation.</li>" +
        "<li><strong>Laboratory values</strong> — what the tests ordered most often for people with developmental disabilities actually mean.</li>" +
        "<li><strong>Delegation</strong> — what may be delegated to caregivers and direct support professionals, and what may not.</li>" +
        "<li><strong>Rights and law</strong> — the statutes that protect people with developmental disabilities.</li>" +
        "<li><strong>Lifespan coverage</strong> — paediatric through ageing adult content in a single exam.</li>" +
        "</ul>",
      "Two format details matter more than any content list. DDNA states the exam <strong>contains no drug-calculation items</strong> and contains no trick questions. It also states that once you skip a question you cannot return to it, and <strong>a skipped question is scored as incorrect</strong> — so answer every item as you reach it.",
      "Treat any third-party page that advertises a fixed item count or six weighted domains with suspicion. Those figures are not on ddna.org, and they sit awkwardly beside DDNA's own statement that the exam usually takes 45 to 60 minutes. Confirm current format details with DDNA's certification committee before you build a study schedule around them.",
    ],
    domains: [],
  },

  // ---- COST
  cost: {
    heading: "How much does CDDN certification cost?",
    prose: [
      "CDDN certification costs <strong>$254.50 to $459</strong> in DDNA fees for a first attempt, depending on membership status and which exam option you choose. DDNA charges the application fee and the exam fee separately, and every fee is non-refundable.",
      "The application fee buys a review of your eligibility, not a seat. You pay it first because approval is valid for two years — the exam fee comes later, when you are ready to test.",
      "Prometric adds its own sitting fee for the local exam, paid directly to Prometric by credit card. DDNA does not publish that amount, so confirm it when you schedule. The group exam carries no sitting fee.",
    ],
    rows: [
      { k: "Application — current DDNA member (online)", v: "$104.50" },
      { k: "Application — new member option (online)", v: "$209.00", highlight: true },
      { k: "DDNA annual membership dues", v: "$80" },
      { k: "Exam — local Prometric testing centre", v: "$150 + Prometric sitting fee" },
      { k: "Exam — group exam at the DDNA conference", v: "$250, no sitting fee" },
      { k: "Retake", v: "Applicable exam fee again, per attempt" },
      { k: "Renewal — member in good standing", v: "$100" },
      { k: "Renewal — member with expired membership", v: "$200 (includes membership reinstatement)" },
      { k: "Late renewal surcharge", v: "+$50 under 6 months · +$100 at 6 months or more" },
    ],
    factBox: {
      tone: "info",
      title: "Local exam or group exam — the $100 question",
      html:
        "The <strong>local exam costs $150</strong> and runs by appointment year-round at Prometric centres, which DDNA numbers at more than 400 across the United States and Canada. The <strong>group exam costs $250</strong>, runs once a year at DDNA's Annual Education Conference, and has limited seating allocated in order of approval. Group exam fees are transferable; local exam fees are not. Nurses who want to test on their own schedule usually take the local option.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "CDDN certification is valid for <strong>two years</strong>, expiring on the last day of the month in which you sat the exam. DDNA offers no re-examination pathway for renewal — every renewal runs on practice hours plus continuing education.",
      "Your CE requirement scales inversely with your practice hours. <strong>Option 1:</strong> at least 1,000 hours of IDD practice in the cycle plus <strong>25 contact hours</strong> of IDD-specific CE. <strong>Option 2:</strong> 500 to 999 hours plus <strong>40 contact hours</strong>. <strong>Option 3:</strong> under 500 hours, or none at all, plus <strong>60 contact hours</strong>.",
      "DDNA is strict about what counts. CE must be IDD-specific or IDD-related and approved by DDNA or an accredited provider such as ANCC or a state board of nursing. At most <strong>10 hours</strong> of merely IDD-related content counts toward the total. General courses — HIPAA, infection control, CPR, medication administration, general nursing ethics — are rejected, as is CE from several named commercial CE websites.",
      "Allow at least <strong>60 days</strong> for DDNA to process a renewal packet, and remember that renewing membership does not renew certification. Late renewals carry a $50 surcharge under six months and $100 at six months or more.",
    ],
  },

  // ---- PASS RATE (DDNA publishes none — rows intentionally empty)
  passrate: {
    heading: "How hard is the CDDN exam?",
    prose: [
      "<strong>DDNA does not publish a CDDN pass rate.</strong> No annual figure, no first-time or repeater split, and no cohort counts appear anywhere on ddna.org. Any percentage you see quoted for this exam is unsourced — treat it as marketing.",
      "DDNA also publishes no cut score or scaled-score range. It warns that the number some candidates see on screen at a Prometric centre immediately after testing does not necessarily indicate a pass. Official results arrive by email roughly <strong>4 to 6 weeks</strong> after a local exam and <strong>6 to 8 weeks</strong> after the conference group exam.",
      "What the retake policy tells you is more useful than a missing percentage. A first failure costs you nothing but the exam fee — you may test again without new documentation. A <strong>second failure triggers a 30-contact-hour CE requirement</strong>, earned after that attempt and reviewed by the Certification Committee, before DDNA will approve you to test again.",
      "The practical difficulty for most candidates is breadth, not depth. A 90-minute exam that spans childhood through ageing forces nurses who work in one setting to revise the rest of the lifespan.",
    ],
    rows: [],
    target: 80,
    footnote:
      "No chart is shown because DDNA publishes no pass-rate data for CDDN.",
    factBox: {
      tone: "warn",
      title: "Never skip a question",
      html:
        "The CDDN exam does not let you return to a skipped item. DDNA states that once you skip a question, <strong>it is counted as incorrect</strong>. With up to 90 minutes available and a typical completion time of 45 to 60 minutes, there is time to reason through an item you dislike. Answer everything in order.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "An 8-week CDDN study plan",
    prose: [
      "Eight weeks suits most IDD nurses with the required 4,000 hours behind them — roughly <strong>40 to 60 total study hours</strong>. Because DDNA publishes no weighted blueprint, this plan spreads time evenly across the study areas DDNA names, then front-loads whichever age group you rarely see at work.",
      "Start by requesting approval early. DDNA takes up to 60 days to review an application, and your approval then stays valid for two years — so there is no penalty for applying before you feel ready to study.",
    ],
    weeks: [
      { n: 1, focus: "Read DDNA's exam-prep guidance; baseline self-assessment; list your weakest age group", qs: 20 },
      { n: 2, focus: "Common syndromes — Down syndrome, Fragile X, cerebral palsy, autism spectrum disorder", qs: 35 },
      { n: 3, focus: "Co-occurring health problems by syndrome — cardiac, GI, endocrine, orthopaedic, sensory", qs: 40 },
      { n: 4, focus: "Seizure disorders — types, rescue medication, antiepileptic monitoring, safety planning", qs: 40 },
      { n: 5, focus: "Medication management, polypharmacy, psychotropic monitoring, lab value interpretation", qs: 45 },
      { n: 6, focus: "Delegation to direct support professionals, supervision, documentation, ISP participation", qs: 40 },
      { n: 7, focus: "Rights, consent, guardianship, abuse reporting, and ageing with IDD", qs: 40 },
      { n: 8, focus: "Timed 90-minute rehearsal, error-log review, and test-day logistics", qs: 60 },
    ],
    tipsHeading: "How CDDN candidates lose points — and how to avoid it",
    tips: [
      {
        kicker: "Revise the age group you never see",
        text:
          "DDNA says the exam covers the lifespan and tells paediatric nurses to study adult and ageing issues, and adult-focused nurses to study paediatrics. Whichever end you skip is where your score drops.",
      },
      {
        kicker: "Know syndromes by their complications",
        text:
          "Items rarely ask what a syndrome is. They ask which complication to anticipate — atlantoaxial instability in Down syndrome, hypertension in Turner syndrome, aspiration risk in cerebral palsy. Study the comorbidity, not the definition.",
      },
      {
        kicker: "Practise delegation decisions, not drug maths",
        text:
          "DDNA states the exam contains no drug calculations. It does test whether a medication suits a particular person, syndrome and situation, and what you may delegate to a direct support professional.",
      },
      {
        kicker: "Rehearse under a 90-minute clock",
        text:
          "Because skipped items are scored as incorrect, pacing matters differently here than on longer nursing exams. Do one timed rehearsal so committing to an answer feels routine.",
      },
      {
        kicker: "Document employment before you study",
        text:
          "Most rejected applications fail on paperwork, not knowledge. DDNA names the usual causes: experience not specific to IDD nursing, too few IDD hours, illegible forms, faxed forms, and wrong fees.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (original item written in DDNA's clinical-judgement style)
  sample: {
    heading: "Sample CDDN-style question",
    prose: [
      "This item mirrors the style DDNA describes: a realistic IDD scenario, no drug calculation, and four plausible actions where only one is the priority. Try it before reading the rationale.",
    ],
    q: {
      scenario:
        "A 34-year-old man with Down syndrome lives in a group home and trains weekly with a Special Olympics team. Over the past two weeks, direct support professionals report new neck pain, a changed gait, and two episodes of urinary incontinence in a man who has been continent for years. His only regular medication is levothyroxine for hypothyroidism.",
      stem: "Which action should the IDD nurse take first?",
      options: [
        "Reinforce the fall-prevention plan with the support team and reassess in one week.",
        "Restrict athletic participation and arrange urgent evaluation for atlantoaxial instability.",
        "Request a repeat TSH level, because untreated hypothyroidism can alter gait.",
        "Begin a bowel and bladder retraining programme with the support team.",
      ],
      correct: 1,
      rationale:
        "Neck pain, a new gait change and new incontinence together suggest cervical cord compression from atlantoaxial instability, which occurs far more often in people with Down syndrome than in the general population. Cord compression is a time-critical problem, so the nurse restricts activities that load the cervical spine and escalates for imaging and evaluation. Fall prevention, a TSH recheck and continence retraining all treat the symptoms as chronic and delay recognition of a neurological emergency.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Which IDD nursing terms should CDDN candidates know?",
    prose: [
      "These terms carry most of the reasoning on the CDDN exam. Definitions are grouped by the study area they usually appear in — the grouping is ours, since DDNA publishes no official domain taxonomy.",
    ],
    rows: [
      { term: "Developmental disability", defn: "A severe, chronic disability caused by a mental or physical impairment that appears before adulthood and substantially limits several major life activities.", domain: "Foundations" },
      { term: "IDD", defn: "Intellectual and developmental disabilities — DDNA's preferred term, covering intellectual disability alongside conditions such as cerebral palsy and autism.", domain: "Foundations" },
      { term: "Down syndrome", defn: "A genetic condition caused by an extra copy of chromosome 21, associated with congenital heart defects, hypothyroidism, early-onset dementia and atlantoaxial instability.", domain: "Syndromes" },
      { term: "Fragile X syndrome", defn: "An X-linked condition and the most common inherited cause of intellectual disability, often presenting with anxiety, sensory sensitivity and autistic features.", domain: "Syndromes" },
      { term: "Cerebral palsy", defn: "A group of permanent movement and posture disorders caused by injury to the developing brain, frequently accompanied by dysphagia, seizures and contractures.", domain: "Syndromes" },
      { term: "Autism spectrum disorder", defn: "A neurodevelopmental condition affecting social communication and behaviour, with wide variation in support needs across the spectrum.", domain: "Syndromes" },
      { term: "Atlantoaxial instability", defn: "Excess movement between the first and second cervical vertebrae, a recognised risk in Down syndrome that can compress the spinal cord.", domain: "Syndromes" },
      { term: "Diagnostic overshadowing", defn: "Attributing a new physical symptom to a person's disability rather than investigating it, a leading cause of missed diagnoses in IDD care.", domain: "Assessment" },
      { term: "Dual diagnosis", defn: "The co-occurrence of a developmental disability and a mental health condition, requiring coordinated behavioural and medical care.", domain: "Assessment" },
      { term: "Polypharmacy", defn: "Concurrent use of multiple medications, common in IDD and a frequent source of interaction, sedation and metabolic problems.", domain: "Medications" },
      { term: "Psychotropic monitoring", defn: "Scheduled review of metabolic, movement and behavioural effects for people prescribed antipsychotics, antidepressants or mood stabilisers.", domain: "Medications" },
      { term: "Direct support professional (DSP)", defn: "An unlicensed staff member who provides daily support in community settings and may receive delegated nursing tasks where state law allows.", domain: "Delegation" },
      { term: "Delegation", defn: "Transferring authority to perform a selected nursing task to a competent person in a selected situation, while the nurse retains accountability.", domain: "Delegation" },
      { term: "Individualized Service Plan (ISP)", defn: "The interdisciplinary plan that documents a person's goals and supports; the nurse contributes the health section and monitors outcomes.", domain: "Practice" },
      { term: "Person-centred planning", defn: "A planning approach that starts from the person's own preferences and goals rather than from programme availability.", domain: "Practice" },
      { term: "Olmstead decision", defn: "The 1999 US Supreme Court ruling that unjustified institutional segregation of people with disabilities violates the Americans with Disabilities Act.", domain: "Rights & law" },
      { term: "HCBS waiver", defn: "A Medicaid Home and Community-Based Services waiver that funds supports in the community instead of an institution.", domain: "Rights & law" },
      { term: "Guardianship and supported decision-making", defn: "Two legal frameworks for consent; supported decision-making preserves the person's own authority, while guardianship transfers it.", domain: "Rights & law" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "CDDN vs. DDC and related nursing credentials",
    prose: [
      "CDDN is the only certification aimed specifically at registered nurses in developmental disabilities nursing. The credentials nurses most often confuse it with either sit at a different licence level or cover an adjacent population.",
      "The distinction that costs candidates money is CDDN versus DDC. Both come from DDNA, both require 4,000 IDD practice hours in five years, and both renew on the same two-year cycle — but the licence you hold decides which one you may apply for.",
    ],
    rows: [
      { row: "CDDN", highlight: true, body: "DDNA", scope: "IDD nursing across the lifespan", who: "RNs with 4,000 IDD hours in 5 years" },
      { row: "DDC", body: "DDNA", scope: "Same specialty at LPN/LVN scope", who: "LPNs and LVNs with 4,000 IDD hours in 5 years" },
      { row: "CRRN", body: "ARN", scope: "Rehabilitation nursing after injury or chronic illness", who: "RNs restoring function, often overlapping IDD caseloads" },
      { row: "CPN", body: "PNCB", scope: "Paediatric nursing", who: "RNs caring for children, including children with IDD" },
      { row: "NCSN", body: "NBCSN", scope: "School nursing", who: "RNs supporting students on IEPs and health plans" },
      { row: "PMH-BC", body: "ANCC", scope: "Psychiatric-mental health nursing", who: "RNs managing dual diagnosis and behavioural support" },
    ],
    closingProse:
      "<strong>Take CDDN if IDD nursing is your specialty and you hold an RN licence.</strong> If you practise at LPN or LVN level, apply for DDC through the same DDNA programme. Nurses whose caseload leans toward regaining function after injury may find <a href=\"/certifications/crrn/\">CRRN rehabilitation nursing certification</a> a closer fit; school nurses supporting students with IEPs should compare <a href=\"/certifications/ncsn/\">the NCSN school nursing credential</a>; and nurses spending most of their week on dual diagnosis should look at <a href=\"/certifications/pmh-bc/\">PMH-BC psychiatric-mental health certification</a>. None of these replaces CDDN on your credentials line.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about CDDN certification",
    items: [
      { q: "What does CDDN stand for in nursing?", a: "CDDN stands for Certified Developmental Disabilities Nurse. The Developmental Disabilities Nurses Association (DDNA) awards the credential, and certified nurses sign as RN, CDDN." },
      { q: "Who offers the CDDN certification?", a: "DDNA administers the programme directly, with no separate credentialing board. Elsevier distributes the exam and Prometric delivers it at local testing centres." },
      { q: "Can an LPN or LVN sit for the CDDN exam?", a: "No. CDDN is the RN-level credential. DDNA certifies licensed practical and vocational nurses under a separate credential, DDC, through a parallel application with the same 4,000-hour practice requirement." },
      { q: "What are the eligibility requirements for CDDN certification?", a: "You need an active nursing licence, current DDNA membership, and 4,000 hours of active developmental disabilities nursing practice within the previous 60 months. There is no degree requirement." },
      { q: "How do I apply for CDDN certification?", a: "Submit DDNA's application with your licence copy, a code of ethics agreement, an employment verification form and employer-written job description for each IDD position, your CV, and the application fee. DDNA replies within 60 days." },
      { q: "How long is my CDDN approval valid before I have to test?", a: "Two years from the date DDNA approves your application. After that you must submit a new application packet and a new application fee." },
      { q: "How long is the CDDN exam?", a: "You have up to 90 minutes. DDNA says most candidates finish in 45 to 60 minutes. Skipped questions cannot be revisited and are scored as incorrect." },
      { q: "How much does CDDN certification cost?", a: "DDNA fees run from $254.50 for a current member taking the local exam to $459 for a new member taking the group exam. Prometric charges a separate sitting fee for the local exam." },
      { q: "When do I get my CDDN exam results?", a: "DDNA emails results about 4 to 6 weeks after a local Prometric exam and about 6 to 8 weeks after the group exam at the annual conference." },
      { q: "What happens if I fail the CDDN exam?", a: "You may retake it once without new documentation, within your two-year eligibility window, paying the exam fee again. After a second failure you must complete 30 contact hours of IDD-specific CE and have them approved before testing again." },
      { q: "How often do I need to renew my CDDN certification?", a: "Every two years, by the last day of the month in which you sat the exam. Renewal costs $100 for a member in good standing, plus a late surcharge if you miss the date." },
      { q: "What are the continuing education requirements for renewing CDDN certification?", a: "It depends on your practice hours. With 1,000 or more IDD hours in the cycle you need 25 CE contact hours; with 500 to 999 hours you need 40; with under 500 hours you need 60. CE must be IDD-specific or IDD-related and accredited." },
      { q: "Do I have to stay a DDNA member while certified?", a: "Yes. DDNA membership is a condition of certification. If membership lapses, the certification lapses and you may not use CDDN until you reinstate. Dues are $80 per year and renew separately from certification." },
      { q: "Does the CDDN exam include drug calculations?", a: "No. DDNA states the exam contains no drug-calculation items. It does test whether a specific medication is appropriate for a person with a particular syndrome or condition in a particular situation." },
      { q: "What is the CDDN exam pass rate?", a: "DDNA does not publish one. No pass rate, cut score or cohort data for CDDN appears on ddna.org, so any percentage quoted elsewhere is unsourced." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "Every figure on this page traces to a DDNA-published source listed below. Fees, CE rules and process details change without notice, and parts of ddna.org are visibly out of date — the home page and conference page still carry older content while the certification pages are maintained. Confirm fees and deadlines with DDNA's certification committee before you apply.",
      "Where a figure is missing here, it is missing because DDNA does not publish it. This page states no item count, no cut score, no domain weights and no pass rate for CDDN, because none of those exist in a primary source.",
    ],
    list: [
      "DDNA — Certification Program: credential scope, RN, CDDN versus LPN/LVN, DDC — https://ddna.org/certification/",
      "DDNA — Certification Application & Exam Process: 4,000-hour requirement, 60-day approval, two-year eligibility, 90-minute exam, no-skip rule, retake policy, results turnaround — https://ddna.org/certification/apply/",
      "DDNA — Certification Fees & FAQ: $104.50 and $209.00 application fees, $150 local and $250 group exam fees, membership requirement — https://ddna.org/certification/fees-faq/",
      "DDNA — Certification Renewal: two-year cycle, the 25/40/60 CE options, CE eligibility rules, $100 and $200 renewal fees, late surcharges — https://ddna.org/certification/renew/",
      "DDNA — Exam Prep: published study areas, lifespan coverage, no drug calculations — https://ddna.org/certification/study/",
      "DDNA — Home: $80 annual membership dues and member benefits — https://ddna.org/",
      "DDNA — Registered Nurse Certification Application packet (PDF): 1995 National League for Nursing origin, 2003 HESI revision, Elsevier distribution, 2,080 hours as a full-time year — https://www.georgiacollaborative.com/wp-content/uploads/sites/15/2017/08/DDRN-Certification.pdf",
      "US Bureau of Labor Statistics — Registered Nurses, Occupational Outlook Handbook: wage and employment outlook reference; BLS publishes no occupation code specific to developmental disabilities nursing — https://www.bls.gov/ooh/healthcare/registered-nurses.htm",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practise CDDN-style items?",
  ctaProse:
    "Work through a 25-question diagnostic built around DDNA's published study areas — syndromes, seizure care, medications, delegation and rights. Free to start, no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full CDDN question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "DDC",
      title: "CDDN vs DDC: which DDNA credential matches your licence?",
      blurb: "Same specialty, same 4,000-hour rule, two different credentials — how RNs, LPNs and LVNs should choose before paying an application fee.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Syndromes",
      title: "Syndrome-linked complications every IDD nurse should anticipate",
      blurb: "Atlantoaxial instability, aspiration risk, early-onset dementia and the other comorbidities the CDDN exam asks about by scenario rather than by name.",
      href: "#",
      bg: "#24a865",
    },
    {
      kicker: "Practice",
      tag: "Delegation",
      title: "Delegating to direct support professionals without losing your licence",
      blurb: "What may be delegated in community IDD settings, what may not, and how the nurse keeps accountability after handing a task over.",
      href: "#",
      bg: "#cf1d00",
    },
  ],
};
