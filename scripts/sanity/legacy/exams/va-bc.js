// VA-BC exam detail page — structured data.
// Sourced from Content/VA-BC_research.json (verified against VACC primary
// pages, the 2025 VA-BC Test Content Outline, VACC published exam statistics,
// and INCC/INS for the CRNI comparison, as of the 2026-09 cycle).
// Lives at /certifications/va-bc/ via the paginated template.

module.exports = {
  code: "VA-BC",
  name: "Vascular Access Board Certified",
  body: "VACC",
  cat: "specialty",
  catLabel: "Medical-Surgical & Specialty",
  updated: "2026-09",

  // Page-level SEO (verified against Content Brief meta table)
  seo: {
    title:
      "VA-BC Certification Guide: Eligibility, Exam & Renewal | NursPrep",
    description:
      "What VA-BC certification takes in 2026 — who qualifies across nursing, medicine and allied health, the eight-domain blueprint, $300–$475 fees, an 84% pass rate, and 3-year renewal.",
    ogTitle:
      "VA-BC Certification Guide 2026 — Vascular Access Board Certified",
    ogDescription:
      "VACC eligibility for RNs, MDs, PAs, RTs and paramedics, the 2025 content outline, 150-item exam, scaled passing score of 90, and 30-CE renewal.",
  },

  // ---- HERO
  lede:
    "VA-BC — Vascular Access-Board Certified — is the multidisciplinary board certification for clinicians who assess, place, maintain, and troubleshoot vascular access devices. The Vascular Access Certification Corporation (VACC) grants it to registered nurses, licensed practical nurses, physicians, physician assistants, nurse practitioners, pharmacists, radiologic technologists, respiratory therapists, and EMS clinicians alike, which makes it unusual among nursing-adjacent credentials: your license type decides how you practice, not whether you can certify.",
  heroPills: [
    { k: "Questions", v: "150 items" },
    { k: "Duration", v: "2.5 hours" },
    { k: "Renewal", v: "3 years" },
    { k: "Pass rate", v: "84% (2025)" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "Vascular Access Certification Corporation (VACC)" },
    { k: "Format", v: "Prometric test centers + ProProctor remote" },
    { k: "Scored items", v: "125 of 150 (25 unscored)" },
    { k: "Passing score", v: "Scaled 90 on a 30–140 scale" },
    { k: "Eligibility", v: "Post-secondary education + credentialed clinical role" },
    { k: "Experience", v: "1 yr professional experience + current vascular access practice" },
    { k: "Fee", v: "$300–$475 depending on AVA membership and window" },
    { k: "Renewal cycle", v: "3 years — 30 vascular access CEs or re-exam" },
  ],
  heroCardFoot:
    "Verified against VACC's 2026 Candidate Handbook pages, the 2025 VA-BC Test Content Outline, and VACC's published exam statistics",

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
    { id: "compare", label: "VA-BC vs. CRNI" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "What VA-BC stands for and why it matters",
    prose: [
      "VA-BC stands for <strong>Vascular Access-Board Certified™</strong>, a credential issued by the <strong>Vascular Access Certification Corporation (VACC)</strong> to clinicians who demonstrate the knowledge behind safe device selection, insertion, care, and complication management. VACC counts <strong>6,295 active VA-BC™ professionals</strong> against roughly <strong>15 million catheter days</strong> in US care each year — a small certified population relative to how often patients receive a line.",
      "The credential is accredited by the National Commission for Certifying Agencies (NCCA) and is recognized by the American Nurses Credentialing Center for the Magnet Recognition Program. It also appears on the Veterans Administration approved listing for nursing certifications and qualifies for GI Bill reimbursement.",
      "VA-BC certifies knowledge, not procedural privileges. Passing the exam does not authorize you to insert a device your license, scope, or facility policy does not already allow.",
    ],
    stats: [
      { n: "150", l: "Total items", sub: "125 scored · 25 unscored" },
      { n: "2.5 hrs", l: "Time limit", sub: "Plus 15-min tutorial and 15-min survey" },
      { n: "84%", l: "2025 pass rate", sub: "1,162 exams taken" },
      { n: "3 yrs", l: "Renewal cycle", sub: "30 vascular access CEs or re-exam" },
    ],
    factBox: {
      tone: "info",
      title: "VACC and AVA are not the same organization",
      html:
        "VACC describes itself as an <strong>independent non-profit</strong> certifying body. The Association for Vascular Access (AVA) is a separate membership society. AVA membership is <strong>not required</strong> to sit the exam — it only discounts the fee by $100. Third-party pages that call VACC \"AVA's certification department\" are describing a relationship VACC's own materials do not claim.",
    },
    coverImageLabel:
      "Vascular access clinician performing ultrasound-guided PICC placement at the bedside",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Who is eligible to take the VA-BC certification exam?",
    prose: [
      "Any credentialed healthcare professional whose clinical practice requires vascular access skills can apply — VACC names MDs, PAs, NPs, RNs, LPNs/LVNs, respiratory therapists, radiologic technologists, EMTs and paramedics, pharmacists, infection preventionists, and educators who teach in these areas.",
      "Four requirements apply to every candidate: a minimum of post-secondary education (LPN program, nursing diploma, associate, or bachelor's degree); a credentialed clinical role that uses vascular access skills; at least <strong>one year of professional experience</strong> with current practice in vascular access; and an attestation that you work either in vascular access directly or in a complementary field such as education, administration, infection control, or nutrition support.",
      "VACC sets no numeric practice-hour threshold. If you have seen an hours requirement quoted for this credential, it almost certainly belongs to CRNI, which requires 1,600 infusion hours in two years.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You hold a clinical credential — RN, LPN/LVN, MD, PA, NP, RRT, RT, paramedic, or pharmacist — and vascular access is a routine part of what you do.",
      "You have at least a year of professional experience behind you and are currently practicing in vascular access rather than returning to it.",
      "Your current practice covers at least two of VACC's five activities: direct patient care, education in best practice, policy development and revision, management of vascular access activities, or consultation.",
      "You work with the device range the exam covers — peripheral IVs, midlines, PICCs, non-tunneled and tunneled central catheters, implanted ports, and dialysis access — rather than one device in one unit.",
      "You are ready to be verified: VACC staff audit attestations, and the credential is closed to sales, marketing, and other non-clinical industry roles, who are directed to the separate Vascular Access Industry Partner™ Program.",
    ],
  },

  // ---- BLUEPRINT (2025 job analysis; weights are percentages of 125 scored items)
  blueprint: {
    heading: "VA-BC exam blueprint — eight domains from the 2025 job analysis",
    prose: [
      "The blueprint splits 125 scored items across eight domains. <strong>Patient Assessment (18%)</strong>, <strong>Troubleshooting Complications and Interventions (16%)</strong>, <strong>Device Assessment and Selection (14%)</strong>, and <strong>Care and Maintenance (14%)</strong> together carry 62% of the exam, so assessment and downstream device management outweigh insertion technique.",
      "Insertion is only 11%, which surprises candidates who do line placement all day. Items are written at three cognitive levels — recall, application, and analysis — and the analysis-level items cluster in complications and device selection, where you must justify one choice over three defensible-looking alternatives.",
      "Professional Development and Evidence-Based Practice plus Legal and Ethical Considerations add 16% between them. These are the domains that experienced inserters skip and then lose points on.",
    ],
    domains: [
      { label: "I. Device Assessment and Selection", weight: 14 },
      { label: "II. Patient Assessment", weight: 18 },
      { label: "III. Preparation", weight: 11 },
      { label: "IV. Insertion", weight: 11 },
      { label: "V. Care and Maintenance", weight: 14 },
      { label: "VI. Troubleshooting Complications and Interventions", weight: 16 },
      { label: "VII. Professional Development and Evidence-Based Practice", weight: 8 },
      { label: "VIII. Legal and Ethical Considerations", weight: 8 },
    ],
  },

  // ---- COST
  cost: {
    heading: "Cost, testing windows, and scheduling",
    prose: [
      "The VA-BC exam costs <strong>$400 for non-members and $300 for AVA members</strong> in the early registration window, rising to <strong>$475 and $375</strong> in the final window. VACC runs two seatings a year: the full month of June and the full month of December.",
      "Applications for the June seating open March 1 and close April 15, with the early rate ending March 20. Applications for December open September 1 and close October 15, with the early rate ending September 20. After VACC confirms eligibility — usually 2 to 5 business days — you receive an Authorization to Test (ATT) letter by email and book your Prometric appointment.",
      "You can test at a Prometric center across the US, its territories, and Canada, at select international sites, or remotely through ProProctor. Run the Prometric system check before you book a remote seat.",
    ],
    rows: [
      { k: "Exam application — early window", v: "$400 · $300 AVA member" },
      { k: "Exam application — final window", v: "$475 · $375 AVA member", highlight: true },
      { k: "Retest after a failed attempt", v: "$375 · $275 AVA member" },
      { k: "Late application (online only)", v: "$550 · $450 AVA member" },
      { k: "Late retest application", v: "$450 · $350 AVA member" },
      { k: "Mailed or faxed application", v: "Adds $25 administrative fee" },
      { k: "Withdrawal refund", v: "Full fee less $50 administrative fee" },
      { k: "Transfer to another window", v: "$25 · maximum of two transfers" },
      { k: "Recertification — early window", v: "$340 · $240 AVA member" },
      { k: "Recertification — final window", v: "$390 · $290 AVA member" },
    ],
    factBox: {
      tone: "success",
      title: "Apply early and check the voucher program",
      html:
        "Applying in the early window instead of the final one saves <strong>$75</strong>, and AVA membership saves another <strong>$100</strong> on top. Employers can go lower still: VACC's <strong>Voucher Program</strong> gives institutions its cheapest per-seat rate for both initial exams and recertifications. Ask your vascular access team lead or education department before you pay out of pocket.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "VA-BC is valid for <strong>three years</strong>, and there are two ways to keep it. <strong>Pathway 1 — recertification by continuing education:</strong> log <strong>30 CE credits, all related to vascular access</strong>, in the VACC certificant portal. The CEs may be earned entirely online, must come from more than one activity, and must not all fall inside a single calendar year of your cycle. Once 30 credits are logged with proof of completion, the recertification application opens.",
      "<strong>Pathway 2 — recertification by examination:</strong> sit the current VA-BC exam again at the standard application fee. Renewal documents and fees are due <strong>June 1</strong> for June-expiring credentials and <strong>December 1</strong> for December-expiring ones, and applications are accepted within 10 months of that date. VACC randomly audits a share of applications, so keep every CE certificate for the full cycle.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the VA-BC exam?",
    prose: [
      "The VA-BC exam is passed by most people who sit it: <strong>84% of 1,162 candidates passed in 2025</strong>, and the rate has held between 77% and 89% since 2014. The June 2026 window came in at 88%, with 592 clinicians passing.",
      "That headline hides a selection effect. VACC requires current vascular access practice and audits the attestation, so the candidate pool is already filtered toward people who do this work daily. A high pass rate among practising specialists is not the same as an easy exam.",
      "Scoring is scaled. You need a <strong>scaled score of 90</strong> on a scale that runs from 30 to 140, and that 90 maps to different raw scores depending on the difficulty of the form you receive. Pass reports show only the word PASS; fail reports show the scaled score plus a Proficient, Marginal, or Deficient rating for each content area, which is the study map for your retake.",
    ],
    rows: [
      { year: "2020", pct: 77 },
      { year: "2021", pct: 89 },
      { year: "2022", pct: 85 },
      { year: "2023", pct: 88 },
      { year: "2024", pct: 86 },
      { year: "2025", pct: 84 },
    ],
    target: 90,
    footnote:
      "Calendar-year pass rates published by VACC across all attempts; VACC does not separate first-time from repeat takers. Earlier years back to 2014 range from 77% to 87%.",
    factBox: {
      tone: "info",
      title: "Where candidates lose points",
      html:
        "The exam rewards judgment over technique. Device selection, complication management, and patient assessment carry <strong>48% of scored items</strong> between them, while insertion carries 11%. Clinicians who place lines all week but rarely choose them, or who never touch policy, legal, and evidence-based practice content, are the ones who end up retesting.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "An 8-week VA-BC study plan",
    prose: [
      "Eight weeks fits the VACC calendar well: applications close six to eight weeks before each window opens, so you can start studying the day you receive your ATT letter. Work through the eight domains in blueprint order, then spend the last two weeks on timed practice and weak-area review.",
      "VACC cannot sell you a study guide — NCCA accreditation requires a firewall between its certification and education functions — and it endorses no external review course. Build your plan around the published test content outline, the exam reference list, and VACC's own practice questions.",
    ],
    weeks: [
      { n: 1, focus: "Read the 2025 Test Content Outline and Candidate Handbook; baseline self-assessment", qs: 20 },
      { n: 2, focus: "Patient assessment — vessel health, catheter-to-vein ratio, comorbidity and therapy history", qs: 40 },
      { n: 3, focus: "Device assessment and selection — MAGIC criteria, PIV vs midline vs PICC vs port vs tunneled CVAD", qs: 50 },
      { n: 4, focus: "Preparation and insertion — aseptic technique, skin antisepsis, ultrasound guidance, tip location", qs: 50 },
      { n: 5, focus: "Care and maintenance — dressings, securement, flushing and locking, needleless connectors, dwell decisions", qs: 50 },
      { n: 6, focus: "Complications — CLABSI, thrombosis, occlusion, infiltration and extravasation, phlebitis, air embolism", qs: 60 },
      { n: 7, focus: "Professional practice, evidence appraisal, consent, documentation, scope and delegation", qs: 40 },
      { n: 8, focus: "Full-length timed practice set, error log review, logistics and ID check", qs: 150 },
    ],
    tipsHeading: "How VA-BC candidates trip up — and how to avoid it",
    tips: [
      {
        kicker: "Study device selection, not only placement",
        text:
          "Device assessment and selection is 14% of the exam and threads through the complication items too. Know when a midline is wrong for a vesicant, when a PICC beats a tunnelled catheter, and how expected dwell time changes the answer.",
      },
      {
        kicker: "Read the guidelines VACC actually cites",
        text:
          "Items are written from a published reference list: the INS Infusion Therapy Standards of Practice, AVA's clinical practice guidelines, the SHEA/IDSA CLABSI prevention strategies, WHO's 2024 peripheral catheter guidance, and MAGIC. Your facility policy is not the exam's source of truth.",
      },
      {
        kicker: "Do not skip legal and ethical content",
        text:
          "Consent, documentation, delegation, scope of practice, and patient refusal make up 8% of scored items. These are quick points for anyone who reads the section once and expensive misses for anyone who assumes clinical instinct covers it.",
      },
      {
        kicker: "Practise at exam pace",
        text:
          "150 items in 150 minutes is one minute per question with nothing to spare. Sit at least one full-length timed set before test day so the analysis-level items late in the paper do not catch you rushed.",
      },
      {
        kicker: "Study outside your own patient population",
        text:
          "Because the credential is multidisciplinary, the exam spans neonatal through geriatric care, oncology infusion, dialysis access, home infusion, and long-term care. A clinician who only sees adult inpatients has real blind spots to close.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (written to the 2025 content outline, Domain I/VI style)
  sample: {
    heading: "Sample VA-BC question",
    prose: [
      "This item mirrors the exam's analysis level: a short clinical picture, a device decision, and four options that all sound reasonable until you apply the selection criteria. Answer it before you read the rationale.",
    ],
    q: {
      scenario:
        "A 54-year-old patient is discharged home on intravenous vancomycin for six weeks to treat vertebral osteomyelitis. The patient has adequate upper-arm vessels on ultrasound, normal renal function, no history of thrombosis, and no dialysis needs. The referring team asks the vascular access clinician to recommend a device.",
      stem: "Which device recommendation is most appropriate?",
      options: [
        "A 22-gauge peripheral IV, rotated per protocol for the duration of therapy.",
        "A single-lumen midline catheter placed in the upper arm.",
        "A single-lumen PICC with tip confirmed at the cavoatrial junction.",
        "A tunneled cuffed central venous catheter placed by interventional radiology.",
      ],
      correct: 2,
      rationale:
        "Vancomycin is an irritant with a low pH and is not appropriate for peripheral or midline administration over a prolonged course, which rules out the peripheral IV and the midline. Six weeks of therapy sits squarely in the PICC range under appropriateness criteria such as MAGIC, and a single lumen limits infection and occlusion risk. A tunneled cuffed catheter is over-selection for a defined six-week course in a patient with usable upper-arm vessels.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key VA-BC terms every candidate should know",
    prose: [
      "These terms carry the exam's scenario items. Most stems hinge on recognizing which framework applies — appropriateness criteria for selection, catheter-to-vein ratio for assessment, or the infiltration and extravasation distinction for complications.",
    ],
    rows: [
      { term: "CVAD", defn: "Central Vascular Access Device — any catheter whose tip terminates in the lower third of the superior vena cava, the cavoatrial junction, or the inferior vena cava.", domain: "Device Selection" },
      { term: "PICC", defn: "Peripherally Inserted Central Catheter — a central catheter placed through an upper-arm vein, typically for therapy lasting more than a week.", domain: "Device Selection" },
      { term: "Midline catheter", defn: "A peripheral catheter with the tip at or below the axilla; not appropriate for vesicants, parenteral nutrition, or solutions outside a tolerated pH and osmolarity range.", domain: "Device Selection" },
      { term: "MAGIC", defn: "Michigan Appropriateness Guide for Intravenous Catheters — panel-derived criteria matching device choice to therapy type and expected duration.", domain: "Device Selection" },
      { term: "Catheter-to-vein ratio", defn: "Catheter outer diameter compared with the internal vein diameter; keeping the catheter at or below 45% of the vessel preserves flow and lowers thrombosis risk.", domain: "Patient Assessment" },
      { term: "Vessel health and preservation", defn: "The framework for protecting a patient's venous capital across an admission and across a lifetime of care, rather than one line at a time.", domain: "Patient Assessment" },
      { term: "Tip location technology", defn: "Methods for confirming catheter tip position, including intracavitary ECG, tip tracking, and radiographic confirmation.", domain: "Insertion" },
      { term: "Ultrasound-guided access", defn: "Real-time imaging for vein assessment and cannulation; reduces attempts and complications compared with the landmark method.", domain: "Insertion" },
      { term: "Engineered stabilization device", defn: "A securement product designed to prevent catheter movement at the insertion site, reducing dislodgement, phlebitis, and infection.", domain: "Care & Maintenance" },
      { term: "Needleless connector", defn: "The access point on the catheter hub; design, disinfection time, and clamping sequence all affect occlusion and infection rates.", domain: "Care & Maintenance" },
      { term: "CLABSI", defn: "Central Line-Associated Bloodstream Infection — a surveillance-defined infection in a patient with a central line, and the outcome most maintenance bundles target.", domain: "Complications" },
      { term: "Infiltration vs. extravasation", defn: "Infiltration is leakage of a non-vesicant solution into surrounding tissue; extravasation is leakage of a vesicant, which can cause tissue necrosis and needs an antidote pathway.", domain: "Complications" },
      { term: "Catheter-related thrombosis", defn: "Clot formation on or around a catheter; risk rises with larger catheter-to-vein ratio, malposition, and multiple insertion attempts.", domain: "Complications" },
      { term: "Thrombotic vs. non-thrombotic occlusion", defn: "Occlusion from fibrin or clot responds to a thrombolytic; occlusion from drug precipitate or lipid residue requires a different clearing agent or catheter exchange.", domain: "Complications" },
      { term: "Air embolism", defn: "Air entry into the vascular system during insertion, access, or removal; prevention relies on positioning, clamping, and occlusive dressing at removal.", domain: "Complications" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "VA-BC vs. CRNI and the courses people confuse with both",
    prose: [
      "VA-BC and CRNI are the two credentials in this space that nurses most often mix up. CRNI — Certified Registered Nurse Infusion — is issued by the Infusion Nurses Certification Corporation (INCC) and is RN-only, requiring an active US RN license plus <strong>1,600 hours of infusion therapy experience within the past two years</strong>. Its exam is 140 items with 120 scored in 2.5 hours across three content areas: Principles of Practice, Access Devices, and Infusion Therapies.",
      "The practical split: CRNI validates infusion therapy as a nursing specialty, including the drugs going through the line. VA-BC validates vascular access itself — the device, the vessel, and the complications — for any qualifying discipline. Clinicians who both insert and manage infusions sometimes hold both.",
    ],
    rows: [
      { row: "VA-BC", highlight: true, body: "VACC", scope: "Vascular access device selection, insertion, maintenance, complications", who: "RNs, LPNs, MDs, PAs, NPs, RTs, paramedics, pharmacists, educators" },
      { row: "CRNI", body: "INCC", scope: "Infusion therapy nursing, including access devices and infusates", who: "RNs with 1,600 infusion hours in 2 years" },
      { row: "PICC or UGPIV insertion course", body: "Varies by vendor", scope: "Procedural training for one insertion skill", who: "Clinicians building a specific technique, not a credential" },
      { row: "Vascular Access Industry Partner™ (certificate)", body: "VACC", scope: "Vascular access knowledge for non-clinical roles", who: "Sales, marketing, and industry staff, who cannot sit VA-BC" },
      { row: "AVA membership", body: "AVA", scope: "Professional society membership, education, and conference access", who: "Anyone in the field; discounts the VA-BC fee by $100" },
    ],
    closingProse:
      "<strong>Take VA-BC if vascular access devices are your specialty and your team is multidisciplinary.</strong> Take CRNI instead if you are an RN whose work centres on infusion therapy and you meet the 1,600-hour rule. Insertion courses build a skill and belong on your CE record, but they are education, not board certification, and they do not go after your name.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about VA-BC certification",
    items: [
      { q: "What does VA-BC stand for?", a: "VA-BC stands for Vascular Access-Board Certified. The credential is issued by the Vascular Access Certification Corporation (VACC) and is accredited by the National Commission for Certifying Agencies." },
      { q: "Who is eligible to take the VA-BC certification exam?", a: "Credentialed healthcare professionals whose clinical practice requires vascular access skills, including RNs, LPNs/LVNs, MDs, PAs, NPs, respiratory therapists, radiologic technologists, paramedics, and pharmacists. You need post-secondary education, at least one year of professional experience, and current vascular access practice." },
      { q: "Is VA-BC only for nurses?", a: "No. VA-BC is multidisciplinary by design and VACC certifies physicians, physician assistants, allied health clinicians, and educators alongside nurses. It is closed to non-clinical sales and marketing roles." },
      { q: "How many hours of vascular access experience do I need?", a: "VACC sets no hour count. The requirement is one year of professional experience plus current practice in vascular access. The 1,600-hour rule people cite belongs to CRNI, a different credential from a different body." },
      { q: "What is the format of the VA-BC certification exam?", a: "The exam is 150 four-option multiple-choice questions, of which 125 are scored, with a 2.5-hour time limit. A 15-minute tutorial before and a 15-minute survey after do not count against your testing time." },
      { q: "What is the passing score for the VA-BC exam?", a: "A scaled score of 90 on a scale that runs from 30 to 140. Because forms differ in difficulty, that 90 corresponds to different numbers of correct answers depending on the version you receive." },
      { q: "Is the VA-BC exam difficult?", a: "It is passable but not easy. VACC reported an 84% pass rate in 2025 across 1,162 exams, and rates have sat between 77% and 89% since 2014. The pool is already filtered to practising vascular access clinicians." },
      { q: "How much does VA-BC certification cost?", a: "The exam costs $400 in the early registration window and $475 in the final window, discounted to $300 and $375 for AVA members. A retest after a failed attempt is $375, or $275 for members." },
      { q: "What are the requirements for maintaining VA-BC certification?", a: "VA-BC lasts three years. Renew with 30 vascular access continuing education credits from more than one activity, not all earned in a single year, or by retaking the exam. Renewal is due June 1 or December 1 depending on your expiry date." },
      { q: "What happens if I fail the VA-BC exam?", a: "You may reapply for the next testing window with a new application and the retest fee. There is no lifetime limit on attempts, but after three consecutive failures you must wait a minimum of one year before testing again." },
      { q: "How can I prepare for the VA-BC exam?", a: "Work from VACC's published test content outline, the Candidate Handbook, the exam reference list, and VACC's practice questions. NCCA accreditation prevents VACC from selling a study guide or endorsing any external review course." },
      { q: "How do I verify someone's VA-BC certification?", a: "Use the VACC verification search on vacert.org, which employers can use to confirm a clinician's current status and expiry date." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "Every figure on this page traces to the primary sources below. Fees, blueprint weights, and renewal rules change on VACC's revision cycle, so confirm numbers against the current VACC pages and Candidate Handbook before you apply.",
    ],
    list: [
      "VACC — About the Exam: 150 items with 125 scored, 2.5-hour limit, June and December windows, Prometric delivery, three-year term (https://www.vacert.org/about-the-exam/)",
      "VACC — Eligibility: post-secondary education, credentialed clinical role, one year of experience, two-of-five practice activities (https://www.vacert.org/eligibility/)",
      "VACC — Detailed Content Outline: eight domains with percentage weights from the 2025 job analysis (https://www.vacert.org/detail-content-outline/)",
      "VACC — Dates, Deadlines & Fees: registration windows, exam and retest fee tables, testing environments (https://www.vacert.org/dates-and-deadlines/)",
      "VACC — Recertification Dates and Fees: expiry schedule and recertification fee table (https://www.vacert.org/dates-fees/)",
      "VACC — FAQs: scaled passing score of 90 on a 30–140 scale, 30-CE renewal rule, retake policy, NCCA and ANCC Magnet recognition (https://www.vacert.org/faq/)",
      "VACC — Exam Summary: annual exam volumes and pass rates 2014–2025 and total certificant count (https://www.vacert.org/exam-summary/)",
      "VACC — Window Results: June 2026 seating, 592 passers at an 88% pass rate and 695 CE renewals (https://www.vacert.org/window-results/)",
      "VACC — About Us: independent non-profit status and the multidisciplinary candidate list (https://www.vacert.org/about-us/)",
      "VACC — Exam References: INS Infusion Therapy Standards of Practice, AVA clinical practice guidelines, SHEA/IDSA CLABSI strategies, WHO 2024 peripheral catheter guidance, MAGIC (https://www.vacert.org/exam-references/)",
      "VACC — 2026 Candidate Handbook, PDF (https://www.vacert.org/wp-content/uploads/2026/02/Candidate-Handbook-2026.pdf)",
      "VACC — 2025 VA-BC Test Content Outline, PDF (https://www.vacert.org/wp-content/uploads/2026/01/2025-VA-BC-Test-Content-Outline.pdf)",
      "INCC / Infusion Nurses Society — CRNI exam overview: RN-only eligibility, 1,600 hours in two years, 140 items with 120 scored (https://www.ins1.org/crni/exam/overview/)",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice VA-BC-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to the 2025 VACC content outline. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full VA-BC question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "CRNI",
      title: "VA-BC vs CRNI: which vascular access credential fits your role?",
      blurb: "Eligibility, hour requirements, exam structure, and the scope difference between device-focused and infusion-focused certification.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "Device selection: the VA-BC domain that decides your score",
      blurb: "How appropriateness criteria, dwell time, and infusate characteristics combine into the exam's hardest analysis-level items.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "Multidisciplinary",
      title: "Building a vascular access team where everyone holds VA-BC",
      blurb: "What managers do with VACC's voucher program, and how mixed-discipline teams use one shared credential standard.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
