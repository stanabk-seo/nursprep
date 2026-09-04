// NIHSS detail page — structured data.
// Sourced from Content/NIHSS_research.json (verified against NINDS, the AHA
// Professional Education Hub product pages, Apex Innovations, BlueCloudX,
// MDCalc, Shirley Ryan AbilityLab RehabMeasures and The Joint Commission as of
// the 2026-09 cycle).
// NOTE: NIHSS is a rater-competency certification, not a board credential.
// Fields that assume a single credentialing body (fee, pass rate, eligibility)
// carry a range or an explicit "not published" rather than a fabricated figure.
// Lives at /certifications/nihss/ via the paginated template.

module.exports = {
  code: "NIHSS",
  name: "NIH Stroke Scale Certification",
  body: "multiple providers",
  cat: "specialty",
  catLabel: "Medical-Surgical & Specialty",
  updated: "2026-09",

  // Page-level SEO (structure per Content Brief section 3)
  seo: {
    title:
      "NIHSS Certification: What It Is and Who Needs It | NursPrep",
    description:
      "NIHSS certification explained: what the 15-item NIH Stroke Scale scores, the 0–42 range, which providers certify raters and what they charge, how Groups A–F work, and why this is a competency certificate rather than a board credential.",
    ogTitle:
      "NIHSS Certification 2026 — NIH Stroke Scale Rater Competency",
    ogDescription:
      "Free through Apex Innovations, $10.30 a group through the AHA. The 15 scale items, the Group A–F sequence, and how NIHSS differs from SCRN.",
  },

  // ---- HERO
  lede:
    "NIHSS certification confirms that you can administer and score the NIH Stroke Scale the same way every other trained rater would. It is a competency certification in one assessment instrument, not a nursing board certification — there is no credentialing body behind it, no post-nominal letters, and no single national standard. Several independent training providers certify raters, and your employer decides which one counts.",
  heroPills: [
    { k: "Scale items", v: "15 scored" },
    { k: "Score range", v: "0–42" },
    { k: "Providers", v: "AHA · Apex · BlueCloudX" },
    { k: "Validity", v: "1–2 years, varies" },
  ],
  ataGlance: [
    { k: "Certification type", v: "Rater competency — not a board credential" },
    { k: "Issuing body", v: "None; several independent training providers" },
    { k: "Scale developer", v: "NINDS-supported research (Brott et al., 1989)" },
    { k: "Format", v: "Online video patient scenarios, all 15 items scored" },
    { k: "Eligibility", v: "No license, degree, or practice-hour requirement" },
    { k: "Fee", v: "$0 (Apex Innovations) · $10.30 per group (AHA)" },
    { k: "Test groups", v: "A through F, taken in sequence" },
    { k: "Published pass rate", v: "None — no provider reports one" },
  ],
  heroCardFoot:
    "Verified against NINDS, AHA Professional Education Hub and Apex Innovations provider pages, September 2026",

  // ---- TOC
  sections: [
    { id: "overview", label: "Overview" },
    { id: "eligibility", label: "Eligibility" },
    { id: "blueprint", label: "The 15 items" },
    { id: "cost", label: "Cost & renewal" },
    { id: "passrate", label: "Difficulty" },
    { id: "plan", label: "Study plan" },
    { id: "sample", label: "Sample Question" },
    { id: "keyterms", label: "Key terms" },
    { id: "compare", label: "NIHSS vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "What NIHSS certification actually certifies",
    prose: [
      "NIHSS certification certifies one skill: scoring the <strong>NIH Stroke Scale</strong> consistently. The scale is a 15-item bedside neurological examination that quantifies stroke-related deficit on a <strong>0 to 42</strong> point range, developed through research supported by the <strong>National Institute of Neurological Disorders and Stroke (NINDS)</strong> and first published by Brott and colleagues in 1989. Higher totals mean greater deficit.",
      "This is a competency certification, not a board certification. No credentialing body issues it, no accredited certification board reports statistics on it, and nothing goes after your name when you pass. What you receive is a completion certificate that your employer files as evidence of competency. Compare that with <strong>SCRN</strong>, the Stroke Certified Registered Nurse credential from the American Board of Neuroscience Nursing, which gates on licensure and 2,080 stroke nursing hours and does add letters after RN.",
      "Because there is no single issuer, the details vary by provider. The American Heart Association sells its course through the Professional Education Hub, Apex Innovations gives its version away free, and BlueCloudX runs a version aimed at clinical trial sites. All three teach the same public NINDS instrument. Search results that treat &ldquo;AHA NIHSS certification&rdquo;, &ldquo;BlueCloud NIHSS&rdquo; and &ldquo;Apex Innovations NIHSS&rdquo; as competing credentials are describing three delivery platforms for one scale.",
    ],
    stats: [
      { n: "15", l: "Scored items", sub: "Across 11 numbered categories" },
      { n: "0–42", l: "Score range", sub: "Higher = greater deficit" },
      { n: "~6 min", l: "Bedside administration", sub: "Once the rater is trained" },
      { n: "A–F", l: "Test groups", sub: "Sequential, different patients" },
    ],
    factBox: {
      tone: "info",
      title: "Why rater certification exists at all",
      html:
        "The scale is only useful if two clinicians watching the same patient produce the same number. Goldstein and Samsa reported <strong>interrater ICC 0.95</strong> and <strong>test-retest ICC 0.93</strong> for trained raters — but Goldstein's earlier item-level work found agreement collapses on specific items, with kappa of <strong>0.22 for facial palsy</strong> and <strong>−0.16 for limb ataxia</strong>. Standardized video certification exists to hold those items in line, which is why the test is scenario-based rather than a knowledge quiz.",
    },
    coverImageLabel:
      "Clinician scoring the NIH Stroke Scale at the bedside during an acute stroke alert",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Who can take NIHSS certification, and who has to?",
    prose: [
      "Anyone can take it. No provider publishes a licensure, degree, or practice-hour prerequisite — you create an account and start. The AHA names its target audience as emergency physicians, neurologists, nurses, clinical researchers, and medical students, which is a description of who benefits rather than a gate.",
      "Whether you <em>have</em> to hold it is your employer's decision, not a national rule. The Joint Commission's Comprehensive Stroke Center standard (DSDF.1 EP 7) requires core stroke team members to complete <strong>8 hours of stroke education annually</strong> and ED nurses <strong>2 hours</strong> of cerebrovascular disease education, but the standard sets hours rather than naming NIHSS certification specifically. Stroke program coordinators are the ones who turn that into a policy, and most do.",
      "Because the requirement travels with the employer, so does the renewal cadence. A nurse moving between two stroke centers can find that a certificate accepted at one is out of date at the other.",
    ],
    candidateHeading: "You probably need NIHSS certification if…",
    candidateList: [
      "You perform or document neurological assessments on acute stroke patients — ED, stroke unit, neuro ICU, or telestroke.",
      "Your unit's post-thrombolytic neuro-check protocol asks for a full NIHSS rather than a focused exam.",
      "You work at a hospital pursuing or holding Primary or Comprehensive Stroke Center certification, where the stroke program sets an annual competency list.",
      "You screen or enroll patients into acute stroke trials, where sponsors typically require documented rater certification and current certificates for audit.",
      "You are studying for SCRN, where NIHSS administration sits inside the hyperacute care content and the certification course is a cheap way to learn the item order cold.",
    ],
  },

  // ---- BLUEPRINT (item maxima as a share of the 42-point total)
  blueprint: {
    heading: "The 15 items the NIH Stroke Scale scores",
    prose: [
      "The scale scores 15 items, which NINDS and some providers describe as 11 categories — both are right. Category 1 splits into 1a, 1b and 1c, and categories 5 and 6 are scored separately for the left and right limb, so the record sheet has 15 lines under 11 numbered headings. The percentages below are each item's maximum contribution to the 42-point total, which is the closest thing NIHSS certification has to a domain weight: every test scenario asks you to score all 15.",
      "The four motor items carry <strong>38%</strong> of the maximum score between them, so a dense hemiplegia dominates the total before any other finding is recorded. Language and dysarthria together carry 5 points against the 2 points available for extinction and inattention, which is why a left-hemisphere stroke scores higher than a right-hemisphere stroke of comparable volume. Know that bias before you use a score to compare two patients.",
    ],
    domains: [
      { label: "1a Level of consciousness (max 3)", weight: 7.1 },
      { label: "1b LOC questions — month and age (max 2)", weight: 4.8 },
      { label: "1c LOC commands — open eyes, grip hand (max 2)", weight: 4.8 },
      { label: "2 Best gaze — horizontal only (max 2)", weight: 4.8 },
      { label: "3 Visual fields (max 3)", weight: 7.1 },
      { label: "4 Facial palsy (max 3)", weight: 7.1 },
      { label: "5a Motor arm, left — 10-second drift (max 4)", weight: 9.5 },
      { label: "5b Motor arm, right — 10-second drift (max 4)", weight: 9.5 },
      { label: "6a Motor leg, left — 5-second drift (max 4)", weight: 9.5 },
      { label: "6b Motor leg, right — 5-second drift (max 4)", weight: 9.5 },
      { label: "7 Limb ataxia — finger-nose-finger, heel-shin (max 2)", weight: 4.8 },
      { label: "8 Sensory (max 2)", weight: 4.8 },
      { label: "9 Best language — aphasia (max 3)", weight: 7.1 },
      { label: "10 Dysarthria (max 2)", weight: 4.8 },
      { label: "11 Extinction and inattention (max 2)", weight: 4.8 },
    ],
  },

  // ---- COST
  cost: {
    heading: "What NIHSS certification costs and how often you retake it",
    prose: [
      "Anywhere from nothing to about ten dollars a test group. <strong>Apex Innovations</strong> provides its NIH Stroke Scale Training and Certification free and awards 3.00 ANCC contact hours with a 60-minute minimum testing time. The <strong>American Heart Association</strong> sells each test group through its Professional Education Hub at <strong>$10.30</strong> (product 28-3269 for Group A) with 2.00 contact hours, and discounts heavily for hospitals buying in bulk. <strong>BlueCloudX</strong> does not publish individual pricing; access there is normally arranged through an institution or a trial sponsor.",
      "The scale itself costs nothing in any case. NINDS publishes the full instrument and its administration instructions as a free PDF, most recently revised in March 2025. What you are paying for is the video scenario library and the certificate.",
    ],
    rows: [
      { k: "Apex Innovations — NIHSS Training & Certification", v: "$0" },
      { k: "AHA Professional Education Hub — one test group", v: "$10.30", highlight: true },
      { k: "AHA — 100-seat institutional order", v: "$9.25 per seat" },
      { k: "AHA — 250-seat institutional order", v: "$8.50 per seat" },
      { k: "AHA — 1,000-seat institutional order", v: "$7.00 per seat" },
      { k: "BlueCloudX — individual pricing", v: "Not published" },
      { k: "NINDS scale PDF and instructions", v: "$0" },
      { k: "Retake after a failed group", v: "Not published by any provider" },
    ],
    factBox: {
      tone: "success",
      title: "Check what your hospital already licenses",
      html:
        "Many stroke centers already hold an institutional Apex Innovations or BlueCloudX account, in which case your certification is free and your completion is reported straight to the stroke program. Ask the stroke coordinator before buying an AHA seat yourself — and if you do buy one, the AHA course carries <strong>2.00 ANCC contact hours</strong> and Apex carries <strong>3.00</strong>, both claimable toward the annual stroke education hours your employer is already tracking.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "There is no universal renewal cycle, which is the single most confusing thing about this certification. The <strong>AHA</strong> states its test completion certificates are &ldquo;valid for up to one (1) year.&rdquo; <strong>Apex Innovations</strong> states its certification is valid for one or two years depending on the patient group selected. Your employer can impose something stricter than either.",
      "Recertification works by moving through the test groups rather than repeating one. The AHA program runs <strong>Groups A through F</strong>: each group is equivalent in size and scope but uses different patient scenarios, a group opens only after the one before it is passed, and a CE certificate may be claimed once per group. The published intervals are <strong>6 months from Group A to Group B</strong>, then <strong>12 months</strong> for every step after that — B to C, C to D, D to E, E to F. A passed group should not be repeated, which is why raters who have been certified for years are working through the later letters.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is NIHSS certification?",
    prose: [
      "No one knows, because no provider publishes a pass rate. The AHA, Apex Innovations and BlueCloudX are training companies rather than certification boards, so none of them carries an accreditation obligation to report candidate volumes, first-time pass rates, or the score needed to pass. Any percentage you see quoted for NIHSS certification is unsourced.",
      "What is documented is where raters disagree. Goldstein's item-level work found adequate to excellent agreement on 9 of 13 items examined, with facial palsy (kappa 0.22) and limb ataxia (kappa −0.16) at the bottom; a Korean-version study found the same two items plus dysarthria weakest. Those are the items that decide whether your scoring matches the reference standard, and they are also the ones clinicians tend to score from impression rather than from the written criteria.",
      "The practical difficulty is not knowledge but discipline. The three governing rules — score what you see rather than what you think, score the first response rather than the best (item 9 excepted), and do not coach — are the ones experienced clinicians break most often, because bedside instinct is to help the patient succeed.",
    ],
    rows: [],
    target: 80,
    footnote:
      "This chart is deliberately empty. Unlike ABNN, BCEN or HPCC, NIHSS training providers publish no pass-rate data, so there is nothing verifiable to plot. We would rather show you nothing than a number we cannot source.",
    factBox: {
      tone: "info",
      title: "The four items that decide your agreement score",
      html:
        "Kasner's review flags <strong>level of consciousness, facial weakness, ataxia and dysarthria</strong> as the items with poor reliability or redundancy. Before you test, read those four sections of the NINDS instructions word for word and score three practice videos against a colleague on those items alone. Reconciling one disagreement out loud teaches more than another pass through the full scale.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 4-week plan to become a reliable NIHSS rater",
    prose: [
      "The certification itself takes an afternoon — the AHA designates 2.00 contact hours and Apex 3.00, with a 60-minute minimum on the test. This four-week plan is not about passing that; it is about scoring the same as the next rater six months later, which is the part that changes patient care. Practice counts below are patient scorings, not multiple-choice questions.",
    ],
    weeks: [
      { n: 1, focus: "Read the NINDS scale PDF end to end; memorize the three scoring rules; build a pocket card of the 15 items with their point maxima", qs: 10 },
      { n: 2, focus: "Left-hemisphere-weighted items — LOC 1a–1c, gaze, visual fields, facial palsy, best language, dysarthria", qs: 20 },
      { n: 3, focus: "Motor drift, limb ataxia, sensory, extinction; then the caveats — amputation, joint fusion, intubation, aphasia, pre-existing blindness", qs: 20 },
      { n: 4, focus: "Complete the provider course and Group A test, then score your next real stroke alert alongside an already-certified rater and reconcile every difference", qs: 15 },
    ],
    tipsHeading: "Where raters lose agreement — and how to avoid it",
    tips: [
      {
        kicker: "Score what you see, not what you think",
        text:
          "If the patient has a flat nasolabial fold, score facial palsy 1 even when you are convinced it is old. The scale measures the exam in front of you. Baseline deficits get documented in the note, not subtracted from the score.",
      },
      {
        kicker: "First response, not best response",
        text:
          "Item 1b and 1c are scored on the first attempt. Item 9, best language, is the single exception. Clinicians who repeat the command until the patient gets it right are scoring a different instrument.",
      },
      {
        kicker: "Untestable items score zero, they do not drop out",
        text:
          "Amputation or joint fusion scores 0 on the affected motor item and is annotated. Limb ataxia scores 0 when the patient is plegic or cannot understand the instruction. The denominator stays at 42 either way.",
      },
      {
        kicker: "Know that the scale leans left",
        text:
          "Language carries up to 3 points and dysarthria 2, while right-hemisphere signs land almost entirely on the 2-point extinction item. A right-hemisphere stroke of the same volume scores lower. That is a property of the instrument, not an error to correct at the bedside.",
      },
      {
        kicker: "Do not chase shared answer keys",
        text:
          "Groups A through F exist so that no rater sees the same scenarios twice, and certificates are auditable by the stroke program and by trial sponsors. Working from someone else's answers produces a certificate and an unreliable rater, which is the failure mode the whole program was designed to prevent.",
      },
      {
        kicker: "Book your test group by the calendar",
        text:
          "Group A to Group B is a 6-month wait and every step after that is 12 months. Put the date in your calendar when you pass, because a lapsed certificate discovered during a stroke center survey is a documentation problem for the whole unit.",
      },
    ],
  },

  // ---- SAMPLE QUESTION
  sample: {
    heading: "Sample NIHSS scoring item",
    prose: [
      "NIHSS test scenarios ask you to score a patient, not to choose a treatment. This item uses the caveat raters get wrong most often — what to do when weakness makes another item untestable. Try it before you read the rationale.",
    ],
    q: {
      scenario:
        "A 74-year-old presents with acute left-hemisphere stroke. She scores 4 on item 5b (motor arm, right — no movement) and 4 on item 6b (motor leg, right — no movement). Finger-nose-finger and heel-shin cannot be performed on the right side because of the plegia. On the left side she performs both smoothly with no ataxia.",
      stem: "What should the rater record for item 7, limb ataxia?",
      options: [
        "2 — ataxia cannot be excluded in either right limb, so score both.",
        "1 — ataxia is present in one limb region, the right side.",
        "0 — ataxia is scored absent when weakness or comprehension prevents testing.",
        "Mark the item untestable and score the exam out of 40.",
      ],
      correct: 2,
      rationale:
        "Item 7 is scored 0 when the patient is plegic, does not understand the instruction, or has an amputation or joint fusion in the tested limb. Ataxia only counts when it is out of proportion to weakness, which cannot be demonstrated in a limb with no movement. The left side is clean, so the item scores 0. There is no untestable option that removes points from the denominator — the maximum stays 42 regardless of which items are unscorable.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key NIHSS terms every rater should know",
    prose: [
      "These terms appear in the scoring instructions and in the test scenarios. The distinction that matters most is between the scale (a free public instrument) and the certification (a paid or free training product built around it).",
    ],
    rows: [
      { term: "NIHSS", defn: "National Institutes of Health Stroke Scale — a 15-item bedside neurological examination scoring stroke-related deficit from 0 to 42.", domain: "The scale" },
      { term: "NIHSS certification", defn: "A provider-issued certificate confirming you scored a set of video patient scenarios in line with the reference standard. Not a board credential.", domain: "Certification" },
      { term: "Test group", defn: "A set of scenarios labelled A through F. Groups are equivalent in scope but use different patients, and each is taken once.", domain: "Certification" },
      { term: "NINDS", defn: "National Institute of Neurological Disorders and Stroke, part of the NIH. Supported the scale's development and publishes it free; does not certify raters.", domain: "Bodies" },
      { term: "Motor drift", defn: "Item 5 tests the arm at 90° sitting or 45° supine for 10 seconds; item 6 tests the leg at 30° supine for 5 seconds. Each side is scored separately.", domain: "Scale item" },
      { term: "Limb ataxia", defn: "Item 7 — finger-nose-finger and heel-shin, looking for incoordination out of proportion to weakness. Scores 0 if the limb is plegic or the patient cannot comprehend.", domain: "Scale item" },
      { term: "Extinction and inattention", defn: "Item 11 — neglect in any modality, including extinction to bilateral simultaneous stimulation. The scale's main right-hemisphere item, worth 2 points.", domain: "Scale item" },
      { term: "Best language", defn: "Item 9 — describe the picture, name the items, read the sentences. The only item scored on best rather than first response.", domain: "Scale item" },
      { term: "Score what you see", defn: "The first governing rule: record the deficit present at this exam, including pre-existing deficits, rather than adjusting for what you believe is new.", domain: "Scoring rule" },
      { term: "mNIHSS", defn: "Modified NIH Stroke Scale — a shortened, validated subset of the full scale, used mainly in research. It has no separate certification program.", domain: "Related tool" },
      { term: "mRS", defn: "Modified Rankin Scale — functional outcome from 0 to 6, usually measured at 90 days. Measures recovery, not acute severity.", domain: "Related tool" },
      { term: "SCRN", defn: "Stroke Certified Registered Nurse — a board certification from the American Board of Neuroscience Nursing that requires 2,080 stroke nursing hours in 3 years.", domain: "Related credential" },
      { term: "Stroke mimic", defn: "A presentation that scores on the NIHSS without being a stroke — recrudescence of old stroke, Todd's paralysis, complex migraine, conversion disorder. The scale cannot rule these out.", domain: "Clinical use" },
      { term: "Ceiling effect", defn: "The scale's loss of sensitivity in recovered patients; Pickard and colleagues observed it in about 20% of patients at 6 months, which is why NIHSS is an acute measure.", domain: "Clinical use" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "NIHSS certification vs. SCRN, CNRN, and the annual education requirement",
    prose: [
      "Nurses searching for NIHSS certification are often actually deciding between a competency certificate and a board credential. These sit at genuinely different levels, and holding one does not substitute for the other.",
    ],
    rows: [
      { row: "NIHSS certification", highlight: true, body: "AHA, Apex Innovations, BlueCloudX", scope: "Administering and scoring one 15-item scale correctly", who: "Anyone who assesses acute stroke patients" },
      { row: "SCRN", body: "ABNN", scope: "Stroke nursing across hyperacute, acute and post-acute care", who: "RNs with 2,080 stroke hours in the last 3 years" },
      { row: "CNRN", body: "ABNN", scope: "Broad neuroscience nursing — stroke, TBI, tumour, epilepsy", who: "Neuro ICU and neurosurgery RNs" },
      { row: "Annual stroke education hours", body: "Employer, under Joint Commission certification", scope: "8 hours of stroke content a year for core stroke team members", who: "Stroke team and stroke-unit nurses at certified centers" },
      { row: "mNIHSS (no certification exists)", body: "—", scope: "Shortened, validated subset of the full scale", who: "Researchers and some registry programs" },
    ],
    closingProse:
      "<strong>Take NIHSS certification because your unit requires it and because reliable scoring changes what happens to the patient in front of you — not because it advances your credentials.</strong> It costs an afternoon and, at most providers, nothing. If you want a stroke credential that a hiring manager will weigh, SCRN is the one that carries letters, an eligibility bar, and a certification board behind it. The two work well together: SCRN's hyperacute content assumes you can already run an NIHSS.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about NIHSS certification",
    items: [
      { q: "What does NIHSS stand for?", a: "NIHSS stands for the National Institutes of Health Stroke Scale. It is a 15-item bedside neurological examination that quantifies stroke-related deficit on a 0 to 42 point scale." },
      { q: "Is NIHSS certification a nursing board certification?", a: "No. It is a competency certification in administering one assessment tool, issued by training providers rather than a credentialing board. It adds no letters after your name and no accredited body reports statistics on it. SCRN, issued by the American Board of Neuroscience Nursing, is the stroke board certification for RNs." },
      { q: "What is a normal NIHSS score?", a: "A score of 0 means no measurable deficit on any of the 15 items. MDCalc notes that patients scoring under 4 are highly likely to have good clinical outcomes, and roughly 80% of stroke survivors scoring under 5 at admission are discharged home." },
      { q: "What do different NIHSS scores indicate about stroke severity?", a: "Two stratifications circulate and they do not match. The original Brott 1989 bands are mild 1–5, mild to moderately severe 5–14, severe 15–24 and very severe above 25. The bands quoted more often in clinical practice are minor 1–4, moderate 5–15, moderate to severe 16–20 and severe 21–42. Neither NINDS nor the AHA publishes an authoritative table, so cite whichever your program uses." },
      { q: "How do I get NIHSS certification?", a: "Create an account with a training provider, work through the instruction and demonstration videos, then score a set of test patient scenarios. Apex Innovations offers it free; the American Heart Association sells each test group through its Professional Education Hub for $10.30. Both issue a printable certificate immediately on passing." },
      { q: "Is NIHSS certification free?", a: "Through Apex Innovations, yes — the course is free and carries 3.00 ANCC contact hours. The AHA charges $10.30 per test group, discounted to as little as $7.00 a seat on institutional orders of 1,000. Many hospitals already hold an account, so check with your stroke coordinator first." },
      { q: "How long is NIHSS certification good for?", a: "It depends on the provider and on your employer. The AHA states its certificates are valid for up to one year. Apex Innovations states one or two years depending on the patient group selected. Employers commonly set their own annual or biennial requirement on top of that." },
      { q: "What are Groups A, B and C in NIHSS certification?", a: "They are sequential sets of test scenarios. Each group is equivalent in size and scope but uses different patients, and a group opens only once the previous one is passed. The published intervals are 6 months from Group A to Group B, then 12 months for each step after that." },
      { q: "What are the categories evaluated in the NIH Stroke Scale?", a: "Level of consciousness, orientation questions, command following, horizontal gaze, visual fields, facial palsy, motor arm, motor leg, limb ataxia, sensation, language, dysarthria, and extinction or inattention. That is 11 numbered categories and 15 scored lines, because category 1 splits three ways and the motor items are scored separately for each side." },
      { q: "Where can I find NIHSS Group A answers?", a: "We do not publish them and you should not use them. The Group A through F structure exists specifically so no rater scores the same patients twice, and certificates are auditable by stroke programs and trial sponsors. A certificate earned from an answer key produces exactly the unreliable rater the program was built to prevent." },
      { q: "Do I need NIHSS certification to work on a stroke unit?", a: "That is your employer's call. The Joint Commission requires core stroke team members at Comprehensive Stroke Centers to complete 8 hours of stroke education a year and ED nurses 2 hours of cerebrovascular education, but the standard sets hours rather than naming NIHSS certification. In practice most stroke programs make it an annual competency." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "Every figure on this page is verified against the following primary sources. Provider fees, certificate validity and test-group intervals are set independently by each company and change without notice — verify against the provider you are actually using before relying on a date.",
    ],
    list: [
      "NINDS — NIH Stroke Scale, scale description and free instrument download (March 2025 edition) — https://www.ninds.nih.gov/health-information/stroke/assess-and-treat/nih-stroke-scale",
      "AHA Professional Education Hub — NIH Stroke Scale Test Group A: $10.30 fee, product 28-3269, volume pricing, 2.00 contact hours, certificate valid up to one year — https://store.education.heart.org/nih-stroke-scale-test-group-a",
      "AHA Professional Education Hub — NIH Stroke Scale Test Group C: Group A–F structure, 6-month then 12-month intervals, one CE certificate per group — https://store.education.heart.org/nih-stroke-scale-test-group-c",
      "Apex Innovations — NIHSS Training and Certification: free program, certification valid one or two years by patient group — https://www.apexinnovations.com/products.html",
      "Apex Innovations — NIHSS CE breakdown: 3.00 ANCC contact hours, 60-minute minimum testing time, joint accreditation — https://www.apexinnovations.com/CEBreakdown.php?ID=10",
      "BlueCloudX — NIH Stroke Scale multilingual competency training and certification — https://www.bluecloudx.net/nihss/",
      "MDCalc — NIH Stroke Scale/Score: all 15 scored items with point values, the three scoring rules, and the under-4 outcome threshold — https://www.mdcalc.com/calc/715/nih-stroke-scale-score-nihss",
      "Shirley Ryan AbilityLab RehabMeasures — NIHSS: 15 items, 0–42 range, Brott severity strata, reliability ICCs, ceiling effect — https://www.sralab.org/rehabilitation-measures/national-institutes-health-stroke-scale",
      "Brott T, Adams HP Jr, et al. Measurements of acute cerebral infarction: a clinical examination scale. Stroke. 1989;20(7):864–870 — https://pubmed.ncbi.nlm.nih.gov/2749846/",
      "Goldstein LB, Samsa GP. Reliability of the National Institutes of Health Stroke Scale. Stroke. 1997;28(2):307–310 — https://pubmed.ncbi.nlm.nih.gov/9040680/",
      "Kasner SE. Clinical interpretation and use of stroke scales. Lancet Neurol. 2006;5(7):603–612 — https://pubmed.ncbi.nlm.nih.gov/16781990/",
      "The Joint Commission — staff education requirements for Comprehensive Stroke Program Certification, standard DSDF.1 EP 7 — https://www.jointcommission.org/standards/standard-faqs/advanced-dsc---comprehensive-stroke/delivering-or-facilitating-clinical-care-dsdf/000002144/",
      "ABNN Certification — SCRN eligibility, used for the NIHSS versus SCRN comparison — https://abnncertification.org/scrn/eligibility",
    ],
  },

  // ---- SIDEBAR (overrides the default "approved test centers" box, which does
  // not apply to an online, provider-delivered competency certification)
  sidebarFactBox: {
    tone: "info",
    title: "There is no test center and no exam board",
    html:
      "NIHSS certification is delivered entirely online by independent training providers. There is no proctored test center, no application window, no eligibility review, and no certification board holding a candidate handbook. If a site quotes you a national NIHSS pass rate, an official fee, or a single eligibility standard, it is describing something that does not exist.",
  },

  // ---- CTA
  ctaHeading: "Ready to practice NIHSS scoring?",
  ctaProse:
    "Work through a 15-item scoring drill built around the items where raters disagree most — facial palsy, limb ataxia, dysarthria, and level of consciousness. Free to start — no card required.",
  ctaPrimary: { label: "Start scoring drill", href: "#" },
  ctaSecondary: { label: "See the full NIHSS item bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "SCRN",
      title: "NIHSS certification vs SCRN: which one does your career need?",
      blurb: "A competency certificate and a board credential do different jobs. What each costs, what each requires, and why stroke nurses end up holding both.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Scoring",
      title: "The four NIHSS items that wreck interrater agreement",
      blurb: "Facial palsy, limb ataxia, dysarthria and level of consciousness — the published kappa values, why they slip, and how to score them the same way twice.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Clinical",
      tag: "Interpretation",
      title: "Reading an NIHSS score: severity bands, disposition, and what the scale misses",
      blurb: "Why two severity band sets are in circulation, what a score under 5 predicts about discharge, and the right-hemisphere blind spot built into the instrument.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
