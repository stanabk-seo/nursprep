// CRNI exam detail page — structured data.
// Sourced from Content/CRNI_research.json (verified against INCC primary
// pages, the CRNI Exam Handbook revised January 2026, the content outline
// effective September 2025, and INCC's published exam statistics, as of the
// 2026-09 cycle). VA-BC comparison figures carried from src/_data/exams/va-bc.js
// and its vacert.org sources.
// Lives at /certifications/crni/ via the paginated template.

module.exports = {
  code: "CRNI",
  name: "Certified Registered Nurse Infusion",
  body: "INCC",
  cat: "specialty",
  catLabel: "Medical-Surgical & Specialty",
  updated: "2026-09",
  updatedLabel: "September 2026",

  // Page-level SEO (primary keyword: "CRNI certification")
  seo: {
    title:
      "CRNI Certification Guide: Eligibility, Exam & Renewal | NursPrep",
    description:
      "What CRNI certification takes in 2026 — the 1,600-hour RN eligibility rule, the 140-item INCC exam, $335–$575 fees, a 66% pass rate, and 3-year renewal by 40 recertification units.",
    ogTitle:
      "CRNI Certification Guide 2026 — Certified Registered Nurse Infusion",
    ogDescription:
      "INCC eligibility, the three-area content outline, 120 scored items in 2.5 hours, March and September windows, and how CRNI differs from VA-BC.",
  },

  // ---- HERO
  lede:
    "CRNI certification is the RN-only board credential for infusion therapy nursing, awarded by the Infusion Nurses Certification Corporation (INCC). It validates knowledge across the whole of infusion practice — the principles behind safe therapy, the access devices that deliver it, and the infusates themselves — rather than one device or one care setting.",
  heroPills: [
    { k: "Questions", v: "140 items" },
    { k: "Duration", v: "2.5 hours" },
    { k: "Renewal", v: "3 years" },
    { k: "Pass rate", v: "66% (2025)" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "Infusion Nurses Certification Corporation (INCC)" },
    { k: "Format", v: "PSI test centers · March and September windows" },
    { k: "Scored items", v: "120 of 140 (20 unscored pretest)" },
    { k: "Passing score", v: "Angoff-set raw score — INCC publishes no cut score" },
    { k: "Eligibility", v: "Active, unrestricted RN license (US or Canada)" },
    { k: "Experience", v: "1,600 infusion therapy hours within 2 years" },
    { k: "Fee (INS member)", v: "$335 early bird · non-member $475" },
    { k: "Renewal cycle", v: "3 years — 40 recertification units or re-exam" },
  ],
  heroCardFoot:
    "Verified against the INCC CRNI Exam Handbook (revised January 2026), the content outline effective September 2025, and INCC's published exam and recertification statistics",

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
    { id: "compare", label: "CRNI vs. VA-BC" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "What is CRNI certification and who awards it?",
    prose: [
      "CRNI certification is a specialty board certification for registered nurses who practice infusion therapy, granted by the <strong>Infusion Nurses Certification Corporation (INCC)</strong>. CRNI stands for <strong>Certified Registered Nurse Infusion</strong>. INCC describes it as the only nationally recognized, accredited specialty certification built specifically for infusion nurses.",
      "The credential is accredited twice over: by the <strong>Accreditation Board for Specialty Nursing Certification (ABSNC)</strong> and by the <strong>National Commission for Certifying Agencies (NCCA)</strong>. INCC reports <strong>2,378 CRNIs</strong>, which makes this a small credential relative to how routinely patients receive infusions.",
      "CRNI is a certification, not a course and not a scope-of-practice permit. Passing the exam does not authorize a procedure your license, state rules, or facility policy do not already allow.",
    ],
    stats: [
      { n: "140", l: "Total items", sub: "120 scored · 20 unscored pretest" },
      { n: "2.5 hrs", l: "Time limit", sub: "150 minutes, four-option items" },
      { n: "66%", l: "2025 pass rate", sub: "323 of 487 candidates" },
      { n: "3 yrs", l: "Renewal cycle", sub: "40 recertification units or re-exam" },
    ],
    factBox: {
      tone: "info",
      title: "INCC and INS are two different organizations",
      html:
        "The <strong>Infusion Nurses Society (INS)</strong> is the professional membership society: it publishes the <em>Infusion Therapy Standards of Practice</em> and runs the education. The <strong>Infusion Nurses Certification Corporation (INCC)</strong> owns and administers the CRNI exam. The January 2026 CRNI handbook states the two are <strong>legally and financially independent</strong>. INS membership is never required to sit the exam — it simply reduces the fee by <strong>$140</strong> at every deadline tier.",
    },
    coverImageLabel:
      "Infusion nurse assessing a PICC site and programming an infusion pump at the bedside",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Am I eligible for the CRNI exam?",
    prose: [
      "You are eligible if you hold an <strong>active, unrestricted RN license</strong> in the United States or Canada and have logged <strong>at least 1,600 hours of infusion therapy experience as an RN within the past two years</strong>. Both conditions are hard requirements, not recommendations.",
      "CRNI is <strong>RN-only</strong>. There is no LPN, LVN, technician, or non-nursing pathway, and no advanced-practice variant.",
      "The 1,600 hours do not have to be bedside hours. INCC counts infusion-specialty time spent in nursing education, administration, research, or clinical practice. INCC frames the requirement as roughly <strong>15 hours a week</strong>, or about 42% of a 36-hour week, spent on infusion therapy.",
      "Expect the hours to be checked. The application asks for your supervisor's contact details, and INCC states it may contact your employer to verify the experience you claim.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You hold an active, unrestricted RN license in the US or Canada and can document 1,600 infusion therapy hours inside the last two years.",
      "Your practice spans all three core content areas, not just one — the principles behind safe therapy, the access devices, and the infusates that run through them.",
      "You work with the full device range the exam covers: short and long peripheral catheters, midlines, PICCs, tunneled and non-tunneled central catheters, implanted ports, subcutaneous access, and intraosseous access.",
      "You routinely handle the therapy classes the exam weights most heavily — anti-infectives, antineoplastics, biologics, blood products, parenteral nutrition, and fluid and electrolyte replacement.",
      "You practice outside the US or Canada but hold an active, unrestricted RN license where you work, can supply a credentials evaluation, and accept that the exam tests United States practice and regulation. A $140 international site fee applies.",
    ],
  },

  // ---- BLUEPRINT (item counts and percentages published by INCC; 120 scored items)
  blueprint: {
    heading: "What does the CRNI exam cover?",
    prose: [
      "The CRNI exam covers three core content areas: <strong>Principles of Practice (35 scored items, 29%)</strong>, <strong>Access Devices (39 items, 33%)</strong>, and <strong>Infusion Therapies (46 items, 38%)</strong>. The counts sum to the 120 scored items; the other 20 items on your form are unscored pretest questions you cannot identify.",
      "Infusion Therapies is the heaviest area and the one candidates most often under-study. It covers pain management, cardiovascular and anti-infective therapy, antineoplastics, biologics, blood products, fluid and electrolyte balance, parenteral nutrition, and therapy-related complications including adverse reactions and hazardous drug exposure.",
      "Access Devices spans device technology, the devices themselves, care and maintenance, special populations such as older adults and pediatric and oncology patients, and device-related complications like infiltration, extravasation, and occlusion. Principles of Practice covers anatomy and physiology, infection prevention and control, and phlebotomy.",
      "Items are written at two cognitive levels. <strong>Recall</strong> items ask \"what is X?\" <strong>Application</strong> items give you a clinical picture and ask what follows from it. The application items are where experience helps and rote memorisation does not.",
    ],
    domains: [
      { label: "Principles of Practice (35 scored items)", weight: 29 },
      { label: "Access Devices (39 scored items)", weight: 33 },
      { label: "Infusion Therapies (46 scored items)", weight: 38 },
    ],
  },

  // ---- COST
  cost: {
    heading: "How much does CRNI certification cost?",
    prose: [
      "CRNI certification costs <strong>$335 for INS members and $475 for non-members</strong> at the early-bird deadline, rising to <strong>$385 and $525</strong> in the regular window and <strong>$435 and $575</strong> after the late deadline. INS membership is worth exactly <strong>$140</strong> off at every tier.",
      "INCC runs two exam windows a year: the month of <strong>March</strong> and the month of <strong>September</strong> (excluding Labor Day). For the March exam, the early-bird deadline is <strong>November 10</strong>, the regular window runs November 11 to January 10, and anything after January 10 is late. For September, the dates are <strong>June 10</strong>, June 11 to July 10, and after July 10.",
      "INCC emails a receipt and mails a confirmation letter within 7 to 14 days of processing your application. That letter carries the unique PSI code you need to book a seat. PSI invites candidates to schedule roughly three weeks before the window opens, at hundreds of PSI test centers across the US and Canada plus more than 570 international sites.",
    ],
    rows: [
      { k: "Early-bird application — INS member", v: "$335 · non-member $475" },
      { k: "Regular application — INS member", v: "$385 · non-member $525", highlight: true },
      { k: "Late application — INS member", v: "$435 · non-member $575" },
      { k: "International site fee", v: "+$140" },
      { k: "Retake discount (previously unsuccessful candidates)", v: "−$50" },
      { k: "Application received after a published deadline", v: "May incur a $50 late fee" },
      { k: "Cancellation before the regular deadline", v: "Refund less a $75 processing fee" },
      { k: "Transfer to the next exam window", v: "$75 · offered once, non-refundable" },
      { k: "Recertification — INS member", v: "$200 · non-member $325" },
      { k: "CRNI Exam Study Guide and Practice Questions", v: "$40 member · $50 non-member" },
      { k: "Duplicate score report (from PSI)", v: "$25" },
    ],
    factBox: {
      tone: "success",
      title: "Apply at the early-bird deadline and join INS first",
      html:
        "Applying by <strong>November 10</strong> (March exam) or <strong>June 10</strong> (September exam) instead of missing the regular deadline saves <strong>$100</strong>. INS membership saves a further <strong>$140</strong> on the exam and <strong>$125</strong> on every later recertification, so the membership largely pays for itself on the first application. Many infusion teams and home-infusion employers reimburse the fee — ask before you pay out of pocket.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "CRNI certification is valid for <strong>three years</strong>. The credential takes effect on <strong>April 1</strong> for March passers and <strong>October 1</strong> for September passers, and expires on that date three years later. Validity depends on continuous RN licensure throughout.",
      "<strong>Pathway 1 — recertification by continuing education:</strong> earn <strong>40 CRNI Recertification Units (RUs)</strong> within the cycle, of which at least <strong>30 must come from national INS meetings or INS Virtual Education Conferences</strong>. RUs are not the same thing as contact hours or CEs, which is the single most common recertification mistake. You must also document <strong>1,000 hours of infusion therapy clinical experience within the previous three years</strong> and a current, unrestricted RN license.",
      "<strong>Pathway 2 — recertification by exam:</strong> pass the current CRNI exam during the final year of your cycle. Choosing this route forfeits the CE option for that cycle.",
      "Deadlines are <strong>March 31</strong> for March-cycle CRNIs and <strong>September 30</strong> for September-cycle CRNIs; late applications may be accepted with a $50 fee. Miss the deadline and INCC revokes the credential — there is no grace period, and the only way back is to sit and pass the exam again.",
    ],
  },

  // ---- PASS RATE
  passrate: {
    heading: "How hard is the CRNI exam?",
    prose: [
      "The CRNI exam is failed by about a third of the people who sit it. INCC reported <strong>323 of 487 candidates passed in 2025, a 66% pass rate</strong>, following 63% in 2024 and 67% in 2023. That is a meaningfully tougher result than the 84% VACC reports for the adjacent VA-BC exam.",
      "The eligibility rule explains part of it. Every candidate already has 1,600 infusion hours behind them, so this is not a pass rate softened by novices dropping out — it is a specialist cohort, and a third of them still miss.",
      "INCC publishes no numeric passing score. The cut score is set by the <strong>Angoff method</strong>, in which expert judges estimate the probability that a minimally competent nurse answers each item correctly, and is carried across forms by pre-equating. Your score report shows pass or fail plus raw scores by content area, so a failed attempt tells you exactly which of the three core areas to rebuild.",
    ],
    rows: [
      { year: "2023", pct: 67 },
      { year: "2024", pct: 63 },
      { year: "2025", pct: 66 },
    ],
    target: 75,
    footnote:
      "Calendar-year pass rates published by INCC across all attempts — INCC does not separate first-time takers from repeaters, and does not publish years before 2023.",
    factBox: {
      tone: "info",
      title: "Where candidates lose points",
      html:
        "Infusion Therapies is <strong>38% of scored items</strong> and is the area least likely to match your daily caseload. A nurse who places and maintains lines all week can still be shaky on parenteral nutrition complications, transfusion reactions, electrolyte replacement, and hazardous drug handling. Recertification data shows the same pattern of drift: <strong>about 70% of CRNIs due to expire actually recertify</strong> (547 of 786 in 2025).",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 10-week CRNI study plan",
    prose: [
      "Ten weeks maps cleanly onto INCC's calendar: the regular application deadline falls about eight weeks before the window opens, so you can start the week you apply and finish before your PSI appointment. Weight your weeks to the blueprint — Infusion Therapies is 38% of scored items, Access Devices 33%, Principles of Practice 29%.",
      "Start with INCC's Detailed Content Outline and run a self-assessment against it before you read anything else. INCC explicitly recommends this, and it is the only way to find out which of the three core areas your daily practice has left thin.",
    ],
    weeks: [
      { n: 1, focus: "Read the CRNI Exam Handbook and Detailed Content Outline; self-assess against all three core areas", qs: 20 },
      { n: 2, focus: "Principles of Practice — anatomy and physiology, vessel and site selection, body positioning", qs: 35 },
      { n: 3, focus: "Principles of Practice — infection prevention, chain of infection, bloodstream infection, phlebotomy and blood cultures", qs: 40 },
      { n: 4, focus: "Access Devices — solution containers, administration sets, filters, add-on devices, pumps, vein location and tip-locating technology", qs: 45 },
      { n: 5, focus: "Access Devices — peripheral, midline, PICC, tunneled, non-tunneled, implanted port, subcutaneous and intraosseous access", qs: 50 },
      { n: 6, focus: "Access Devices — care and maintenance, special populations, infiltration, extravasation and occlusion", qs: 50 },
      { n: 7, focus: "Infusion Therapies — anti-infectives, cardiovascular, pain management, biologics and immunologics", qs: 50 },
      { n: 8, focus: "Infusion Therapies — antineoplastics, blood products, fluid and electrolyte balance", qs: 50 },
      { n: 9, focus: "Infusion Therapies — parenteral nutrition and therapy-related complications; full-length timed 140-item set", qs: 140 },
      { n: 10, focus: "Rebuild the weakest core area from your error log, review approved abbreviations, confirm PSI appointment and ID", qs: 40 },
    ],
    tipsHeading: "How CRNI candidates trip up — and how to avoid it",
    tips: [
      {
        kicker: "Study the infusates, not only the lines",
        text:
          "Infusion Therapies carries 46 of the 120 scored items. Drug classes, blood products, parenteral nutrition, and electrolyte replacement are exam-heavy even for nurses whose day job is device insertion and maintenance.",
      },
      {
        kicker: "Work from the references INCC's item writers use",
        text:
          "INCC publishes an Approved Exam Reference List. The core texts are the INS Infusion Therapy Standards of Practice (9th edition), the Core Curriculum for Infusion Nursing (5th edition), and the Policies and Procedures for Infusion Therapy series. Your facility policy is not the exam's source of truth.",
      },
      {
        kicker: "Read the approved abbreviation list",
        text:
          "INCC publishes the abbreviations it uses without expansion on the exam. Anything on that list appears bare; anything off it is spelled out. Reading it once removes a whole class of avoidable confusion on test day.",
      },
      {
        kicker: "Practise at exam pace",
        text:
          "140 items in 150 minutes gives you just over a minute per question. Sit at least one full-length timed set so the application-level items late in the paper do not catch you rushing.",
      },
      {
        kicker: "Treat review courses with care",
        text:
          "INCC states plainly that it does not endorse or sponsor any CRNI review course and is not responsible for misinformation they provide. CRNI Academy and the CRNI Exam Study Guide are INCC's own materials; everything else is third-party.",
      },
    ],
  },

  // ---- SAMPLE QUESTION
  // Written to the INCC content outline (Access Devices → device-related
  // complications; Infusion Therapies → antineoplastics). Not reproduced from
  // INCC's copyrighted item bank.
  sample: {
    heading: "Sample CRNI exam question",
    prose: [
      "This item mirrors INCC's application level: a short clinical picture and four options that all describe things nurses really do, where only one is correct. Answer it before you read the rationale.",
    ],
    q: {
      scenario:
        "A patient is receiving doxorubicin through a 20-gauge short peripheral catheter in the dorsum of the hand. Forty minutes into the infusion the patient reports burning at the site. The nurse finds swelling around the insertion site, no blood return, and a sluggish infusion.",
      stem: "Which action should the infusion nurse take first?",
      options: [
        "Flush the catheter with 0.9% sodium chloride to confirm patency.",
        "Stop the infusion, disconnect the administration set, and attempt to aspirate residual drug through the catheter.",
        "Apply a warm compress and restart the infusion at a reduced rate.",
        "Remove the catheter immediately and elevate the extremity.",
      ],
      correct: 1,
      rationale:
        "The findings describe extravasation of a vesicant. The first action is to stop the infusion and leave the catheter in place while attempting to aspirate residual drug, because the catheter is the route for aspiration and, for some agents, for antidote administration. Flushing pushes more vesicant into the tissue. Restarting the infusion continues the injury, and a warm compress is the wrong thermal treatment for an anthracycline, which calls for dry cold. Removing the catheter first discards the aspiration and antidote route before it has been used.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key CRNI terms every candidate should know",
    prose: [
      "These terms carry the exam's application items. Most stems turn on recognising which definition applies — vesicant versus irritant, infiltration versus extravasation, thrombotic versus non-thrombotic occlusion — before any nursing action is chosen.",
    ],
    rows: [
      { term: "Vesicant", defn: "A solution or medication that causes tissue blistering or necrosis if it escapes the vein. Vesicant status, not drug class, drives device selection and the extravasation response.", domain: "Infusion Therapies" },
      { term: "Irritant", defn: "A solution that causes pain, aching, or inflammation along the vein without causing tissue necrosis on escape.", domain: "Infusion Therapies" },
      { term: "Infiltration vs. extravasation", defn: "Infiltration is leakage of a non-vesicant solution into surrounding tissue. Extravasation is leakage of a vesicant, which can cause necrosis and may require an antidote.", domain: "Access Devices" },
      { term: "Osmolarity", defn: "Solute concentration of an infusate in mOsm/L. Together with pH it determines whether a solution can run through a peripheral catheter or needs central access.", domain: "Infusion Therapies" },
      { term: "Midline catheter", defn: "A peripheral catheter with the tip at or below the axilla. It is not central access and is inappropriate for continuous vesicants and parenteral nutrition.", domain: "Access Devices" },
      { term: "PICC", defn: "Peripherally Inserted Central Catheter — a central catheter inserted through an upper-arm vein with the tip in the lower superior vena cava or cavoatrial junction.", domain: "Access Devices" },
      { term: "Implanted port", defn: "A central device with a subcutaneous reservoir accessed through the skin with a non-coring needle; suited to intermittent long-term therapy.", domain: "Access Devices" },
      { term: "Thrombotic vs. non-thrombotic occlusion", defn: "Fibrin or clot occlusion responds to a thrombolytic. Occlusion from drug precipitate or lipid residue needs a different clearing agent, so identifying the cause comes before treating it.", domain: "Access Devices" },
      { term: "CLABSI", defn: "Central Line-Associated Bloodstream Infection — the surveillance-defined infection that infusion maintenance bundles are built to prevent.", domain: "Principles of Practice" },
      { term: "Chain of infection", defn: "The six-link model — agent, reservoir, portal of exit, mode of transmission, portal of entry, susceptible host — that infection prevention items are written against.", domain: "Principles of Practice" },
      { term: "Phlebitis", defn: "Inflammation of the vein wall, classified as mechanical, chemical, or bacterial; the cause determines whether the fix is the device, the infusate, or technique.", domain: "Access Devices" },
      { term: "Parenteral nutrition", defn: "Intravenous delivery of nutrients. Exam items focus on solution composition and on infectious, metabolic, and mechanical complications, including refeeding risk and filtration requirements.", domain: "Infusion Therapies" },
      { term: "Hazardous drug exposure", defn: "Occupational risk from antineoplastic and other hazardous agents, governed by OSHA and NIOSH guidance on handling, personal protective equipment, and waste disposal.", domain: "Infusion Therapies" },
      { term: "Infusion Therapy Standards of Practice", defn: "The INS evidence-based standards, now in their 9th edition, that underpin much of the exam's content and appear on INCC's approved reference list.", domain: "Principles of Practice" },
      { term: "Angoff method", defn: "The criterion-referenced standard-setting method INCC uses to fix the CRNI passing score. Expert judges estimate each item's passing probability, and pre-equating carries that standard to later forms.", domain: "Scoring" },
      { term: "Recertification Unit (RU)", defn: "INCC's own renewal currency. 40 RUs are required per three-year cycle, at least 30 from national INS meetings or INS Virtual Education Conferences. RUs are not contact hours or CEs.", domain: "Recertification" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "CRNI vs. VA-BC: which infusion credential should an RN take?",
    prose: [
      "CRNI and VA-BC are the two credentials in this space that clinicians most often confuse, and the difference is scope plus who may sit. <strong>CRNI is RN-only and covers infusion therapy end to end</strong> — the principles, the access devices, and the drugs, blood products, and nutrition running through them. <strong>VA-BC is multidisciplinary and vascular-access-specific</strong>: the Vascular Access Certification Corporation (VACC) certifies LPNs, physicians, PAs, NPs, respiratory and radiologic therapists, paramedics, and pharmacists alongside RNs, and the exam stops at the device, the vessel, and the complications.",
      "The entry rules differ just as sharply. CRNI requires <strong>1,600 hours of infusion therapy as an RN within two years</strong>, a number INCC audits against your supervisor. VACC sets <strong>no numeric hour threshold</strong> — one year of professional experience plus current vascular access practice. If you have seen the 1,600-hour rule quoted for VA-BC, it has been borrowed from CRNI. Our <a href=\"/certifications/va-bc/\">VA-BC certification guide</a> covers that exam's eight-domain blueprint in full.",
      "The exams themselves are close in shape and different in emphasis. CRNI is 140 items with 120 scored in 2.5 hours across three content areas; VA-BC is 150 items with 125 scored in 2.5 hours across eight domains. Nurses who both manage devices and run complex infusions sometimes hold both.",
    ],
    rows: [
      { row: "CRNI", highlight: true, body: "INCC", scope: "Infusion therapy nursing end to end — principles, access devices, and infusates", who: "RNs only, with 1,600 infusion hours in 2 years" },
      { row: "VA-BC", body: "VACC", scope: "Vascular access device selection, insertion, maintenance, and complications", who: "RNs, LPNs, MDs, PAs, NPs, RTs, paramedics, pharmacists; 1 year experience, no hour count" },
      { row: "LPN/LVN IV therapy certification", body: "State boards of nursing", scope: "Authorisation to perform IV therapy within the LPN/LVN scope", who: "LPNs and LVNs; a scope permission, not a board certification" },
      { row: "PICC or ultrasound-guided PIV insertion course", body: "Varies by vendor", scope: "Procedural training in one insertion skill", who: "Clinicians building a technique, not a credential" },
      { row: "INS membership", body: "INS", scope: "Professional society membership, standards, and education", who: "Anyone in infusion practice; cuts $140 off every CRNI fee tier" },
    ],
    closingProse:
      "<strong>Take CRNI if you are an RN, you meet the 1,600-hour rule, and the therapies matter to your practice as much as the devices.</strong> Take VA-BC instead — or as well — if your specialty is the vascular access device itself, or if your team includes clinicians who are not RNs and you want one shared standard across it. Insertion courses and LPN IV certification belong on your training record, but neither goes after your name.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about CRNI certification",
    items: [
      { q: "What does CRNI stand for in nursing?", a: "CRNI stands for Certified Registered Nurse Infusion. The credential is awarded by the Infusion Nurses Certification Corporation (INCC) and is accredited by both ABSNC and the NCCA." },
      { q: "What are the eligibility requirements for the CRNI exam?", a: "You need a current, active, unrestricted RN license in the United States or Canada, plus a minimum of 1,600 hours of infusion therapy experience as an RN within the past two years. Direct bedside hours are not required — education, administration, research, and clinical practice within the infusion specialty all count." },
      { q: "How do I get my CRNI certification?", a: "Confirm you meet the RN license and 1,600-hour requirements, apply to INCC before the deadline for the March or September window, wait 7 to 14 days for the confirmation letter carrying your PSI code, schedule your seat with PSI, and pass the 140-item exam. The credential takes effect on April 1 for March passers and October 1 for September passers." },
      { q: "Can an LPN or LVN take the CRNI exam?", a: "No. CRNI is RN-only. LPNs and LVNs who administer IV therapy do so under state-level IV therapy certification, which is a scope-of-practice authorisation from their board of nursing rather than a national board certification." },
      { q: "How many questions are on the CRNI exam?", a: "The exam has 140 four-option multiple-choice items, of which 120 are scored and 20 are unscored pretest questions. You have 2.5 hours, and an untimed on-screen practice exam comes first." },
      { q: "How hard is the CRNI exam?", a: "About a third of candidates fail. INCC reported a 66% pass rate in 2025 (323 of 487 candidates), 63% in 2024, and 67% in 2023 — and every one of those candidates already had 1,600 infusion hours behind them." },
      { q: "What is the passing score for the CRNI exam?", a: "INCC does not publish a numeric passing score. The cut score is set by the Angoff method on a base form and carried to later forms by pre-equating, so the required number of correct answers shifts slightly with form difficulty. Score reports show pass or fail plus raw scores by content area." },
      { q: "How much does CRNI certification cost?", a: "The exam is $335 for INS members and $475 for non-members at the early-bird deadline, $385 and $525 in the regular window, and $435 and $575 after the late deadline. International candidates add a $140 site fee, and previously unsuccessful candidates get $50 off a retake." },
      { q: "When can I take the CRNI exam?", a: "INCC offers the exam in two windows a year: the month of March and the month of September, excluding Labor Day. Applications close on November 10 (early bird) and January 10 (regular) for March, and June 10 and July 10 for September." },
      { q: "How long does it take to get CRNI certified?", a: "Plan on several months end to end. Applications close six to eight weeks before the window opens, most candidates study for eight to twelve weeks, and the credential takes effect on the April 1 or October 1 following the exam." },
      { q: "What is the recertification process for CRNI certification?", a: "CRNI lasts three years. Recertify by earning 40 CRNI Recertification Units, at least 30 of them from national INS meetings or INS Virtual Education Conferences, or by passing the exam again in your final year. Either route also requires 1,000 hours of infusion therapy experience in the previous three years and a current RN license." },
      { q: "What happens if my CRNI certification lapses?", a: "It is revoked, with no grace period. Missing your March 31 or September 30 recertification deadline means you must reapply, pay the full exam fee, and pass the CRNI exam again to regain the credential." },
      { q: "Is CRNI the same as VA-BC?", a: "No. CRNI is RN-only and covers infusion therapy as a whole, including the infusates; VA-BC comes from VACC, is open to LPNs, physicians, PAs, NPs, allied health clinicians and paramedics as well as RNs, and is limited to vascular access devices. The 1,600-hour requirement belongs to CRNI, not VA-BC." },
      { q: "What study materials are recommended for the CRNI exam?", a: "INCC's own resources are CRNI Academy, its online prep platform, and the CRNI Exam Study Guide and Practice Questions, which holds 125 items with rationales for $40 (member) or $50. The approved reference list is led by the INS Infusion Therapy Standards of Practice, 9th edition, and the Core Curriculum for Infusion Nursing, 5th edition. INCC endorses no third-party review course." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources",
    prose: [
      "Every figure on this page traces to the INCC and INS sources below. Fees, deadlines, content-outline weights, and recertification rules change on INCC's revision cycle, so confirm numbers against the current CRNI Exam Handbook before you apply.",
    ],
    list: [
      "INCC — CRNI Exam Overview: eligibility, the three core content areas with item counts and percentages, ABSNC and NCCA accreditation (https://www.ins1.org/crni/exam/overview/)",
      "INCC — CRNI Exam Handbook, revised January 2026 (PDF): eligibility, fee and deadline tables, PSI scheduling, scoring method, content outline effective September 2025, recertification rules (https://www.ins1.org/wp-content/uploads/2026/01/CRNI-Handbook-Revised-1-2026-1.pdf)",
      "INCC — Exam Score and Data: Angoff standard setting, 2023–2025 pass rates, recertification rates, total CRNIs (https://www.ins1.org/crni/exam/score-and-data/)",
      "INCC — CRNI Exam Preparation: CRNI Academy, the CRNI Exam Study Guide and Practice Questions, approved reference and abbreviation lists (https://www.ins1.org/crni/exam/prepare/)",
      "INCC — CRNI Exam Registration: registration criteria, confirmation letter, PSI code, scheduling windows (https://www.ins1.org/crni/exam/register/)",
      "INCC — 2025 CRNI Exam Content Outline, PDF (https://www.ins1.org/wp-content/uploads/2025/11/2025-INCC-CRNI-Exam-Content-Outline.pdf)",
      "INCC — Job Analysis Executive Summary, PDF (https://www.ins1.org/wp-content/uploads/2025/12/JA-Executive-Summary.pdf)",
      "INCC — Recertification overview and Recertification Unit (RU) options (https://www.ins1.org/crni/recertification/)",
      "Infusion Nurses Society (INS) — Infusion Therapy Standards of Practice, 9th edition (https://www.ins1.org/publications/infusion-therapy-standards-of-practice/)",
      "VACC — VA-BC eligibility and exam structure, used for the CRNI vs. VA-BC comparison (https://www.vacert.org/eligibility/)",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice CRNI-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to INCC's three core content areas. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full CRNI question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "VA-BC",
      title: "CRNI vs VA-BC: which vascular access credential fits your role?",
      blurb: "Who may sit each exam, the 1,600-hour rule and where it really belongs, and how a three-area infusion blueprint differs from an eight-domain device blueprint.",
      href: "/certifications/va-bc/",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "Infusion Therapies: the CRNI content area that decides your score",
      blurb: "Why 46 of 120 scored items sit in drug classes, blood products, parenteral nutrition and electrolytes — and how device-focused nurses close that gap.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "Recertification",
      title: "Planning 40 recertification units across a three-year CRNI cycle",
      blurb: "Why RUs are not contact hours, how the 30-unit INS meeting rule shapes your conference budget, and what happens if the deadline slips.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
