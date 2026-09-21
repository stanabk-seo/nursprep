// CRNO exam detail page — structured data.
// Sourced from Content/CRNO_research.json (verified against the NCBORN
// Candidate Handbook hosted by ASORN, the ASORN/NCBORN recertification page,
// Professional Testing Corporation, Prometric, IJCAHPO and BLS).
// Figures NCBORN does not publish — pass rate, passing score, certificant
// count, current-cycle exam dates — are deliberately absent, not estimated.
// Lives at /certifications/crno/ via the paginated template.

module.exports = {
  code: "CRNO",
  name: "Certified Registered Nurse in Ophthalmology",
  body: "NCBORN",
  cat: "specialty",
  catLabel: "Medical‑Surgical & Specialty",
  updated: "2026-09",
  updatedLabel: "September 2026",

  // Page-level SEO — primary keyword "CRNO certification" in title + description
  seo: {
    title:
      "CRNO Certification Guide: Eligibility, Exam & Renewal | NursPrep",
    description:
      "CRNO certification for ophthalmic nurses: the 4,000-hour rule, the 250-question NCBORN exam, $350 member fee, content weights and 5-year renewal.",
    ogTitle:
      "CRNO Certification Guide 2026 — Certified Registered Nurse in Ophthalmology",
    ogDescription:
      "NCBORN eligibility, the five-domain content outline, $350 ASORN-member fee, Prometric testing windows, and a 12-week study plan for ophthalmic RNs.",
  },

  // ---- HERO
  lede:
    "CRNO certification is the board credential for registered nurses who specialize in eye care. The National Certifying Board for Ophthalmic Registered Nurses (NCBORN) awards it to RNs who pass a 250-question examination covering ocular conditions, ophthalmic pharmacology, nursing assessment, and perioperative eye surgery.",
  heroPills: [
    { k: "Questions", v: "Up to 250" },
    { k: "Duration", v: "4 hours" },
    { k: "Renewal", v: "5 years" },
    { k: "Experience", v: "4,000 hours" },
  ],
  ataGlance: [
    { k: "Issuing body", v: "National Certifying Board for Ophthalmic Registered Nurses (NCBORN)" },
    { k: "Administered by", v: "Professional Testing Corporation (PTC)" },
    { k: "Delivered at", v: "Prometric test centers · two-week windows" },
    { k: "Items", v: "Maximum 250 multiple-choice questions" },
    { k: "Time limit", v: "4 hours (240 minutes), no scheduled breaks" },
    { k: "Eligibility", v: "Active RN license + 2 years or 4,000 hours ophthalmic nursing" },
    { k: "Fee (ASORN member)", v: "$350 · non-member $450 · NOVA member $400" },
    { k: "Renewal cycle", v: "5 years — 75 contact hours or re-examination" },
  ],
  heroCardFoot:
    "Verified against the NCBORN Candidate Handbook and the ASORN/NCBORN recertification requirements",

  // ---- TOC
  sections: [
    { id: "overview", label: "Overview" },
    { id: "eligibility", label: "Eligibility" },
    { id: "blueprint", label: "Exam blueprint" },
    { id: "cost", label: "Cost & scheduling" },
    { id: "passrate", label: "Exam difficulty" },
    { id: "plan", label: "Study plan" },
    { id: "sample", label: "Sample Question" },
    { id: "keyterms", label: "Key terms" },
    { id: "compare", label: "CRNO vs. alternates" },
    { id: "faq", label: "FAQ" },
    { id: "sources", label: "Sources" },
  ],

  // ---- OVERVIEW
  overview: {
    heading: "What is CRNO certification?",
    prose: [
      "CRNO certification is a voluntary board credential for registered nurses in ophthalmology. CRNO stands for <strong>Certified Registered Nurse in Ophthalmology</strong>. Nurses who pass the examination may write CRNO after their name, and <strong>NCBORN</strong> keeps a registry of every holder.",
      "NCBORN is a separately incorporated board supported by the <strong>American Society of Ophthalmic Registered Nurses (ASORN)</strong>. NCBORN owns the credential and sets the rules. <strong>Professional Testing Corporation (PTC)</strong> in New York builds and administers the exam, and <strong>Prometric</strong> delivers it at computer-based test centers.",
      "The credential sits on the nursing ladder, not the technician ladder. That distinction matters because ophthalmic clinics also employ <strong>IJCAHPO</strong>-certified staff holding COA, COT, or COMT. Those are allied-health credentials that do not require an RN license.",
    ],
    stats: [
      { n: "250", l: "Maximum items", sub: "Multiple-choice, objective" },
      { n: "4 hrs", l: "Time limit", sub: "No scheduled breaks" },
      { n: "4,000", l: "Practice hours", sub: "Or two years full-time" },
      { n: "5 yrs", l: "Renewal cycle", sub: "75 contact hours or re-exam" },
    ],
    factBox: {
      tone: "info",
      title: "Definition: ophthalmic registered nursing",
      html:
        "<strong>Ophthalmic registered nursing</strong> is RN practice devoted to the eye and its adnexa across the full care setting — physician office, clinic, ambulatory surgery center, and hospital operating room. It spans triage of ocular complaints, diagnostic testing, instillation and monitoring of ophthalmic drugs, perioperative care for cataract and retinal surgery, and teaching patients with low vision. CRNO certification tests that scope.",
    },
    coverImageLabel:
      "Ophthalmic RN preparing a patient for cataract surgery in an ambulatory surgery center",
  },

  // ---- ELIGIBILITY
  eligibility: {
    heading: "Who is eligible for the CRNO exam?",
    prose: [
      "You are eligible if you hold a current RN license and have <strong>two years of full-time ophthalmic nursing experience, or the equivalent 4,000 hours</strong>. NCBORN lists four requirements in total: the license, the experience, a completed application, and payment of the fee.",
      "The license may be issued in the United States <em>or the equivalent in another country</em>, so CRNO is open to internationally licensed nurses. NCBORN does not require ASORN membership, though members pay $100 less.",
      "One detail is widely reported wrongly. NCBORN places <strong>no recency window on the 4,000 hours</strong>. Unlike several other nursing boards, the handbook does not say the hours must fall inside the last two, three, or five years.",
    ],
    candidateHeading: "You are a strong candidate if…",
    candidateList: [
      "You hold an active RN license and have logged at least 4,000 hours, or two years full-time, in ophthalmic registered nursing practice.",
      "Your day-to-day work spans more than one setting — an ophthalmology clinic plus an ambulatory surgery center, or a hospital eye OR plus a pre-admission unit.",
      "You instill and monitor ophthalmic drugs routinely: mydriatics, cycloplegics, miotics, anesthetics, anti-VEGF agents, and prostaglandin analogues.",
      "You can run the basic diagnostic battery unprompted — Snellen and Jaeger acuity, pinhole, Amsler grid, Ishihara plates, tonometry, and pupil assessment.",
      "You circulate or recover cataract, glaucoma, keratoplasty, oculoplastic, and retinal-vitreal cases, and you recognize post-operative red flags on a phone triage call.",
      "NCBORN warns that two years of experience alone does not mean you are ready. The board states the average nurse spends three or more months preparing.",
    ],
  },

  // ---- BLUEPRINT (percentages straight from the NCBORN content outline)
  blueprint: {
    heading: "What does the CRNO exam cover?",
    prose: [
      "The CRNO exam covers five content areas, weighted by how much of an ophthalmic nurse's day each one occupies. <strong>Clinical and Perioperative Procedures carries 35%</strong> — more than twice any other area except Pharmacology and Assessment, which take 20% each. Ocular Conditions accounts for 15% and Professional Issues for 10%.",
      "Weight your study the same way. Clinical and Perioperative Procedures alone covers laser work (YAG, argon, excimer, diode), intraocular surgery, extraocular and oculoplastic procedures, refractive surgery, aseptic technique, discharge teaching, complications such as toxic anterior segment syndrome and vasovagal response, and care of patients with low vision.",
      "Do not treat Professional Issues as filler. Ten percent of 250 items is roughly 25 questions on ethics, informed consent, confidentiality, documentation, supervision, infection control, and National Patient Safety Goals. Those points are cheap to win and easy to skip.",
      "NCBORN publishes these figures as approximate percentages of the examination. The board does not release per-domain item counts, and it does not say how many of the 250 items are unscored pretest questions.",
    ],
    domains: [
      { label: "Ocular Conditions", weight: 15 },
      { label: "Pharmacology", weight: 20 },
      { label: "Nursing Assessment of the Ophthalmic Patient", weight: 20 },
      { label: "Clinical and Perioperative Procedures", weight: 35 },
      { label: "Professional Issues", weight: 10 },
    ],
  },

  // ---- COST
  cost: {
    heading: "What does CRNO certification cost, and when can you test?",
    prose: [
      "CRNO certification costs <strong>$350 for ASORN members and $450 for non-members</strong>. Active members of the <strong>Nurses Organization of Veterans Affairs (NOVA)</strong> pay $50 below the non-member rate, or $400. NOVA and ASORN discounts cannot be stacked.",
      "The application fee includes testing-center charges and a <strong>$75 non-refundable administrative fee</strong>. Apply through PTC at ptcny.com. NCBORN runs <strong>two testing windows a year</strong>, each two weeks long — historically one in spring and one in fall — and applications close roughly a month before each window opens.",
      "PTC emails a <strong>Scheduling Authorization about eleven weeks</strong> before the window opens. You cannot book a Prometric seat until it arrives, and seats are first-come, first-served. Candidates who never book forfeit the whole fee.",
      "Confirm the current window dates and deadlines with PTC before you apply. Published dates move each cycle, and applications are not accepted after the deadline.",
    ],
    rows: [
      { k: "Application — ASORN member", v: "$350" },
      { k: "Application — non-member", v: "$450", highlight: true },
      { k: "Application — NOVA member", v: "$400" },
      { k: "Retest — ASORN member", v: "$250 (within 2 years of last attempt)" },
      { k: "Retest — non-member", v: "$350 (within 2 years of last attempt)" },
      { k: "Transfer to a new testing period", v: "$182 (one time only)" },
      { k: "Reschedule inside a window", v: "$50, paid to Prometric" },
      { k: "Hand score after a fail", v: "$25" },
      { k: "Recertification by CE", v: "$350 member · $450 non-member" },
    ],
    factBox: {
      tone: "warn",
      title: "Three fee traps in the NCBORN handbook",
      html:
        "<strong>1. The fee is non-refundable and non-transferable.</strong> Miss your appointment and you reapply at full price. <strong>2. You get one transfer.</strong> A single move to a future testing period costs $182; a second move costs the full exam fee again. <strong>3. Rescheduling has a cliff.</strong> Thirty days out it is free, 29 to 5 days out it costs $50 paid to Prometric, and inside 5 days it is not permitted at all.",
    },
    renewalHeading: "Renewal",
    renewalProse: [
      "CRNO certification lasts <strong>five years</strong>. NCBORN accepts two renewal routes: continuing education or re-examination.",
      "<strong>Route 1 — recertification by continuing education.</strong> Earn <strong>75 contact hours in the five years before your renewal date</strong>. At least <strong>60 must be ophthalmology-specific</strong>, matching Topics I to IV of the content outline; all 75 may be. Up to 15 hours may be academic coursework or Professional Issues content, and up to 5 hours may come from ophthalmology courses you taught, capped at 1 hour per presentation.",
      "Provider accreditation is checked. Hours must come from an <strong>ANCC Commission on Accreditation</strong> provider, a State Nurses Association, an RN or RN organization accredited as a provider by a State Board of Registered Nursing, or an <strong>ACCME</strong>-accredited provider for ophthalmology topics only. NCBORN audits 10% of applications and will ask for transcripts.",
      "Deadlines are fixed: <strong>July 31</strong> for certifications expiring in August or September, and <strong>January 31</strong> for those expiring in February or March.",
      "<strong>Route 2 — recertification by examination.</strong> Retake and pass the current exam. This route is mandatory if you let the credential lapse: any lapse in status makes you ineligible to recertify by continuing education.",
    ],
  },

  // ---- PASS RATE (NCBORN publishes none — say so plainly)
  passrate: {
    heading: "How hard is the CRNO exam?",
    prose: [
      "<strong>NCBORN does not publish a CRNO pass rate.</strong> Neither ASORN nor Professional Testing Corporation releases candidate volumes, pass percentages, or a passing score. Any percentage you find on a careers blog is unsourced, and a widely repeated \"75%\" appears to be a misread of a supposed cut score rather than a pass rate.",
      "What NCBORN does say is useful. The board states that two years of ophthalmic nursing experience does not guarantee readiness, and that <strong>the average nurse spends three or more months preparing</strong>. PTC reports subscores for each of the five content areas plus a total score, and automatically hand-scores any candidate who lands within 3 points of passing.",
      "Treat volume and pacing as the difficulty, not obscurity. <strong>250 items in 240 minutes leaves 57 seconds per question</strong>, with no scheduled breaks. Candidates who have never sat a timed 250-item paper tend to lose time in the first hour and rush the Clinical and Perioperative block, which is the heaviest-weighted content area on the exam.",
    ],
    rows: [],
    target: 80,
    footnote:
      "No bars are shown because NCBORN, ASORN and PTC publish no CRNO pass-rate data for any year. The 80% marker is NursPrep's generic practice-score target, not an NCBORN figure. If you see a CRNO pass rate quoted elsewhere, ask which primary source it came from.",
    factBox: {
      tone: "info",
      title: "Buy the practice test before you buy anything else",
      html:
        "NCBORN sells a <strong>75-question, 2-hour online practice test</strong> through PTC. It returns your overall score plus a breakdown by content area, which tells you exactly where your 4,000 hours have left gaps. It does not return an answer key or rationales, so use it as a diagnostic, not as study material. The ASORN <em>CRNO Examination Study Guide</em> carries three full 250-question practice exams weighted like the real paper.",
    },
  },

  // ---- STUDY PLAN + TIPS
  plan: {
    heading: "A 12-week CRNO study plan",
    prose: [
      "Twelve weeks matches what NCBORN describes as typical preparation — three or more months. Budget roughly <strong>90 to 130 total study hours</strong>, weighted toward Clinical and Perioperative Procedures, which is 35% of the exam. Question volume ramps from week 2 and peaks in week 11 with a full-length 250-item timed run.",
      "Anchor each week to a section of the NCBORN content outline rather than to a textbook chapter. The outline is the exam specification, and it names the specific conditions, drugs, tests, and procedures the item writers work from.",
    ],
    weeks: [
      { n: 1, focus: "Read the NCBORN content outline end to end + take the 75-item PTC practice test as a baseline", qs: 75 },
      { n: 2, focus: "Ocular anatomy, physiology, and developmental conditions — presbyopia, myopia, hyperopia, astigmatism", qs: 40 },
      { n: 3, focus: "Congenital and hereditary conditions — strabismus, amblyopia, retinoblastoma, ROP, retinitis pigmentosa", qs: 50 },
      { n: 4, focus: "Systemic and acquired disease — diabetic retinopathy, Graves' orbitopathy, glaucoma subtypes, AMD, uveitis", qs: 60 },
      { n: 5, focus: "Pharmacology part 1 — routes and technique: drops, ointments, intravitreal, retrobulbar, subconjunctival", qs: 55 },
      { n: 6, focus: "Pharmacology part 2 — mydriatics, cycloplegics, miotics, beta blockers, prostaglandins, anti-VEGF, CAIs", qs: 60 },
      { n: 7, focus: "Nursing assessment — history, Snellen and Jaeger acuity, pinhole, Ishihara, Amsler, visual fields, pupils", qs: 55 },
      { n: 8, focus: "Special diagnostics — tonometry, gonioscopy, pachymetry, keratometry, OCT, B-scan, angiography, topography", qs: 60 },
      { n: 9, focus: "Perioperative part 1 — phacoemulsification, IOL, keratoplasty, glaucoma and retinal-vitreal procedures, laser", qs: 70 },
      { n: 10, focus: "Perioperative part 2 — oculoplastics, complications, TASS, endophthalmitis, discharge teaching, low vision", qs: 70 },
      { n: 11, focus: "Full-length timed 250-item practice exam + error-log review by content area", qs: 250 },
      { n: 12, focus: "Professional Issues — ethics, consent, documentation, supervision, safety — then targeted weak-area review", qs: 50 },
    ],
    tipsHeading: "Where CRNO candidates lose points — and how to stop it",
    tips: [
      {
        kicker: "Give perioperative content a third of your time",
        text:
          "Clinical and Perioperative Procedures is 35% of the exam, which is roughly 85 of 250 items. Clinic-only nurses routinely underprepare here. Book two full weeks on laser, intraocular and extraocular surgery, complications, and discharge teaching.",
      },
      {
        kicker: "Learn drug classes by effect, not by brand",
        text:
          "Pharmacology is 20% of the paper. Items test what a class does to the pupil, the IOP, and the ciliary muscle. Build one table: mydriatic, cycloplegic, miotic, beta blocker, prostaglandin analogue, carbonic anhydrase inhibitor, anti-VEGF, viscoelastic, antimetabolite.",
      },
      {
        kicker: "Rehearse 57 seconds per question",
        text:
          "250 items in 4 hours with no scheduled break is a pacing exercise. Sit at least one full-length timed 250-question paper before test day so the back half of the exam is familiar rather than a surprise.",
      },
      {
        kicker: "Study the sight-threatening red flags",
        text:
          "Triage sits inside the Nursing Assessment area, and complications sit inside Clinical and Perioperative Procedures. Know cold the presentations of acute angle-closure glaucoma, endophthalmitis, retinal detachment, chemical burn, and central retinal artery occlusion.",
      },
      {
        kicker: "Do not skip the 25 easy points",
        text:
          "Professional Issues is 10% of the exam — about 25 items on ethics, informed consent, confidentiality, documentation, delegation, infection control, and National Patient Safety Goals. It is the cheapest block on the paper and the one candidates most often leave unread.",
      },
      {
        kicker: "Work from the ASORN reference list",
        text:
          "NCBORN names its sources: Essentials of Ophthalmic Nursing Books 1 to 4, Ophthalmic Procedures in the Office and Clinic, Ophthalmic Procedures in the Operating Room and Ambulatory Surgery Center, Care and Handling of Ophthalmic Microsurgical Instruments, and Scope and Standards of Ophthalmic Clinical Nursing Practice. Items are written from those texts.",
      },
    ],
  },

  // ---- SAMPLE QUESTION (written by NursPrep in the NCBORN item format)
  sample: {
    heading: "Sample CRNO exam question",
    prose: [
      "NCBORN items are short and single-best-answer, with four options and no \"all of the above\". Many sit in the Clinical and Perioperative Procedures area, which is 35% of the exam. Try this one before you open the rationale.",
    ],
    q: {
      scenario:
        "A 74-year-old patient underwent uncomplicated phacoemulsification with intraocular lens implantation in the right eye yesterday. On the day-one follow-up call the patient reports severe aching pain in the operated eye that woke them overnight, nausea, and vision that has gone from usable to \"a grey blur\" since discharge. The patient has taken the prescribed prednisolone and moxifloxacin drops as directed.",
      stem: "Which action should the ophthalmic registered nurse take?",
      options: [
        "Reassure the patient that aching and blurred vision are expected on day one and advise acetaminophen.",
        "Advise the patient to stop the prednisolone drops and call back in 24 hours if symptoms persist.",
        "Arrange immediate same-day evaluation, because pain with nausea and falling vision suggests raised intraocular pressure or endophthalmitis.",
        "Advise cold compresses and doubling the moxifloxacin frequency until the scheduled one-week visit.",
      ],
      correct: 2,
      rationale:
        "Pain out of proportion to the procedure, nausea, and worsening vision after intraocular surgery are red flags for an acute intraocular pressure rise or endophthalmitis. Both are sight-threatening and need same-day slit-lamp examination and tonometry by the ophthalmologist. Normal day-one discomfort is mild foreign-body sensation with vision that improves, not deteriorates. Stopping the steroid, increasing the antibiotic, or applying compresses without examination all delay diagnosis while the eye is at risk.",
    },
  },

  // ---- KEY TERMS
  keyterms: {
    heading: "Key ophthalmic nursing terms on the CRNO exam",
    prose: [
      "These terms map directly onto the NCBORN content outline. Learn the definition and the nursing implication together — items usually ask what you do next, not what a word means.",
    ],
    rows: [
      { term: "Phacoemulsification", defn: "Ultrasonic fragmentation and aspiration of the cataractous lens through a small incision, followed by intraocular lens implantation. The most common ophthalmic surgical case an RN will circulate.", domain: "Clinical/Periop" },
      { term: "IOL", defn: "Intraocular lens — the synthetic lens implanted after cataract extraction. Types include monofocal, toric for astigmatism, and multifocal.", domain: "Clinical/Periop" },
      { term: "YAG capsulotomy", defn: "Laser opening of a cloudy posterior capsule after cataract surgery. Outpatient, needs dilation, and carries a short-term IOP spike risk.", domain: "Clinical/Periop" },
      { term: "TASS", defn: "Toxic Anterior Segment Syndrome — sterile inflammation 12 to 48 hours after anterior segment surgery, usually traced to instrument reprocessing residue. Distinguished from endophthalmitis by the absence of pain and infection.", domain: "Clinical/Periop" },
      { term: "Endophthalmitis", defn: "Infection of the intraocular fluids after surgery or injection. Presents with pain, hypopyon, and rapid vision loss, and is a same-day emergency.", domain: "Clinical/Periop" },
      { term: "Viscoelastic", defn: "Ophthalmic viscosurgical device injected to maintain anterior-chamber depth and protect the corneal endothelium during surgery. Retained viscoelastic can spike IOP post-operatively.", domain: "Clinical/Periop" },
      { term: "Mydriatic vs. cycloplegic", defn: "A mydriatic (phenylephrine) dilates the pupil only. A cycloplegic (tropicamide, cyclopentolate, atropine) also paralyzes accommodation. Miotics such as pilocarpine constrict the pupil.", domain: "Pharmacology" },
      { term: "Anti-VEGF agent", defn: "Intravitreal drug that blocks vascular endothelial growth factor, used for wet AMD, diabetic macular edema, and retinal vein occlusion. Requires sterile injection setup and post-injection IOP checks.", domain: "Pharmacology" },
      { term: "Prostaglandin analogue", defn: "First-line topical glaucoma drug that increases uveoscleral outflow. Counsel patients about iris darkening, lash growth, and periorbital changes.", domain: "Pharmacology" },
      { term: "Carbonic anhydrase inhibitor", defn: "Reduces aqueous production. Topical (dorzolamide) or oral (acetazolamide). Oral forms carry sulfa-allergy, paresthesia, and electrolyte cautions.", domain: "Pharmacology" },
      { term: "Retrobulbar block", defn: "Anesthetic injection behind the globe for intraocular surgery. Watch for retrobulbar hemorrhage, globe perforation, and brainstem anesthesia.", domain: "Pharmacology" },
      { term: "Snellen and Jaeger", defn: "Snellen measures distance visual acuity; Jaeger measures near acuity. A pinhole test separates refractive blur from pathological loss.", domain: "Assessment" },
      { term: "Tonometry", defn: "Measurement of intraocular pressure, by Goldmann applanation, rebound, or non-contact method. Pachymetry corrects the reading for corneal thickness.", domain: "Assessment" },
      { term: "Gonioscopy", defn: "Slit-lamp examination of the anterior chamber angle using a mirrored lens. Distinguishes open-angle from angle-closure glaucoma.", domain: "Assessment" },
      { term: "Amsler grid", defn: "A bedside grid that screens central macular function. Wavy or missing squares suggest metamorphopsia or a scotoma in macular disease.", domain: "Assessment" },
      { term: "Ishihara plates", defn: "Pseudoisochromatic plates used to screen red-green color vision deficiency, congenital or acquired from optic nerve disease.", domain: "Assessment" },
      { term: "Acute angle-closure glaucoma", defn: "Sudden blockage of aqueous outflow producing severe pain, nausea, halos, a mid-dilated fixed pupil, and a hard globe. An immediate sight-threatening emergency.", domain: "Ocular Conditions" },
      { term: "Retinopathy of prematurity (ROP)", defn: "Abnormal retinal vascular development in preterm infants. Screening schedules follow gestational age and birth weight.", domain: "Ocular Conditions" },
      { term: "Amblyopia", defn: "Reduced vision in one eye from disuse during visual development, typically from strabismus or unequal refractive error. Treated with patching or penalization in childhood.", domain: "Ocular Conditions" },
      { term: "Informed consent", defn: "Documented agreement to a specific procedure after disclosure of risks, benefits, and alternatives. The nurse witnesses the signature; the surgeon obtains the consent.", domain: "Professional" },
    ],
  },

  // ---- COMPARE
  compare: {
    heading: "CRNO vs. COA, COT, COMT, CNOR and CRNP",
    prose: [
      "CRNO is the only one of these credentials that certifies <em>ophthalmic nursing</em>. The IJCAHPO credentials — COA, COT and COMT — certify ophthalmic allied health personnel and sit on a separate career ladder that does not require an RN license.",
      "Searchers conflate them constantly, so the table below sets out who awards each credential, what it covers, and who it is for.",
    ],
    rows: [
      { row: "CRNO", highlight: true, body: "NCBORN (supported by ASORN)", scope: "Ophthalmic nursing across clinic, ASC and OR", who: "RNs with 2 years or 4,000 hours of ophthalmic practice" },
      { row: "COA", body: "IJCAHPO", scope: "Entry-level ophthalmic assisting", who: "Allied health staff; no RN license required" },
      { row: "COT", body: "IJCAHPO", scope: "Intermediate ophthalmic technician practice", who: "COAs with 2,000 supervised hours, or technician-program graduates" },
      { row: "COMT", body: "IJCAHPO", scope: "Advanced ophthalmic technology and testing", who: "COTs with 6,000 supervised hours, or technologist-program graduates" },
      { row: "CNOR", body: "CCI", scope: "Perioperative nursing across all surgical specialties", who: "OR RNs; pairs well with CRNO for eye-OR nurses" },
      { row: "CRNP", body: "State boards / APRN bodies", scope: "Advanced practice nursing — diagnosis and prescribing", who: "Nurse practitioners; commonly mistyped for CRNO" },
    ],
    closingProse:
      "<strong>Take CRNO if you are an RN and eye care is your specialty.</strong> The IJCAHPO ladder is the right path for technicians and assistants, and it recertifies on a three-year cycle rather than CRNO's five. If you spend most of your time circulating eye cases in a hospital OR, CNOR and CRNO complement each other — CNOR validates perioperative practice generally, CRNO validates the ophthalmology.",
  },

  // ---- FAQ (drives FAQPage JSON-LD)
  faq: {
    heading: "Frequently asked questions about CRNO certification",
    items: [
      { q: "What does CRNO stand for in nursing?", a: "CRNO stands for Certified Registered Nurse in Ophthalmology. The credential is awarded by the National Certifying Board for Ophthalmic Registered Nurses (NCBORN), an independently incorporated board supported by the American Society of Ophthalmic Registered Nurses (ASORN)." },
      { q: "Who offers the CRNO certification exam?", a: "NCBORN owns the credential. Professional Testing Corporation (PTC) in New York develops and administers the examination, handles applications and score reports, and Prometric delivers the exam at its computer-based test centers." },
      { q: "What are the eligibility requirements for CRNO certification?", a: "You need a current RN license in the United States or its equivalent in another country, plus at least two years of full-time experience or 4,000 hours in ophthalmic registered nursing practice. You also submit a completed application and pay the fee. NCBORN sets no recency window on the hours." },
      { q: "What is the format of the CRNO exam?", a: "The CRNO exam is computer-based with a maximum of 250 multiple-choice questions and a four-hour time limit. It is delivered at Prometric test centers during a two-week testing window, with no scheduled breaks." },
      { q: "How much does the CRNO exam cost?", a: "The application fee is $350 for ASORN members and $450 for non-members. Active NOVA members pay $400. The fee includes testing-center charges and a non-refundable $75 administrative fee, and it is not refundable or transferable." },
      { q: "What is the CRNO exam pass rate?", a: "NCBORN does not publish a CRNO pass rate, and neither does ASORN or Professional Testing Corporation. Pass percentages quoted on third-party careers sites are not traceable to a primary source. NCBORN does state that the average nurse spends three or more months preparing." },
      { q: "Can I retake the CRNO exam if I do not pass?", a: "Yes. There is no limit on attempts, but you cannot retest within the same testing period and you must file a new application each time. The reduced retesting fee of $250 for ASORN members or $350 for non-members applies only within two years of your previous attempt." },
      { q: "How often do I need to renew my CRNO certification?", a: "CRNO certification is recognized for five years. You then either retake and pass the current examination or apply to recertify by continuing education before the credential expires." },
      { q: "What are the continuing education requirements for recertifying CRNO?", a: "You need 75 contact hours earned in the five years before your renewal date, of which at least 60 must be ophthalmology-specific. Up to 15 hours may be academic coursework or Professional Issues content, and up to 5 hours may come from ophthalmology courses you taught. NCBORN audits 10% of applications." },
      { q: "What happens if my CRNO certification lapses?", a: "Any lapse in certification status makes you ineligible to recertify by continuing education. A lapsed CRNO must retake and pass the current examination to regain the credential, so apply before your expiry date — July 31 for August or September expiries, January 31 for February or March expiries." },
      { q: "Is CRNO the same as COA, COT or COMT?", a: "No. COA, COT and COMT are IJCAHPO credentials for ophthalmic allied health personnel and do not require a nursing license. CRNO is an RN-only board certification from NCBORN. The two ladders have different eligibility, different exams, and different renewal cycles." },
      { q: "How long should I study for the CRNO exam?", a: "NCBORN states that the average nurse spends three or more months preparing. A 12-week plan of roughly 90 to 130 study hours works for most ophthalmic RNs, weighted toward Clinical and Perioperative Procedures, which is 35% of the exam." },
    ],
  },

  // ---- SOURCES
  sources: {
    heading: "Trusted sources for CRNO exam facts",
    prose: [
      "Every figure on this page is taken from the sources below. Fees, testing windows, and recertification rules change on NCBORN's revision cycle — confirm numbers against the current Candidate Handbook and the PTC test-sponsor page before you apply.",
      "Where NCBORN publishes nothing — pass rate, passing score, certificant count — this page says so rather than repeating an unsourced number.",
    ],
    list: [
      "NCBORN — Certification Examination for Ophthalmic Registered Nurses, Candidate Handbook (eligibility, fees, 250 items in 4 hours, content outline and weights, retake and revocation policy): https://asorn.org/assets/PDF-Documents/NCBORN2023-Handbook.pdf",
      "ASORN / NCBORN — Recertification by Continuing Education (5-year cycle, 75 contact hours, 60 ophthalmology-specific, January 31 and July 31 deadlines, 10% audit, fees): https://asorn.org/certification/recertification/",
      "Professional Testing Corporation (PTC) — NCBORN test sponsor page, current testing periods, application deadlines and online application: https://ptcny.com/test-sponsors/ncborn/",
      "Prometric — NCBORN scheduling portal for test-center appointments, rescheduling and closures: https://www.prometric.com/NCBORN",
      "ASORN — certification program information and CRNO study materials, including the CRNO Examination Study Guide: https://asorn.org/certification/",
      "IJCAHPO — Certifications overview for the COA, COT and COMT ophthalmic technician ladder, which is distinct from CRNO: https://www.jcahpo.org/certification/certifications/",
      "IJCAHPO — Criteria for Certification and Recertification (COA, COT, COMT, CCOA eligibility hours and three-year renewal): https://documents.jcahpo.org/documents/certification/criteria_for_certification.pdf",
      "US Bureau of Labor Statistics — Registered Nurses, Occupational Outlook Handbook: $97,550 median annual RN wage in May 2025 and 6% projected employment growth from 2025 to 2035. BLS publishes no ophthalmic-nursing-specific wage: https://www.bls.gov/ooh/healthcare/registered-nurses.htm",
    ],
  },

  // ---- CTA
  ctaHeading: "Ready to practice CRNO-style items?",
  ctaProse:
    "Work through a 25-question diagnostic mapped to the five NCBORN content areas, weighted the way the real exam is. Free to start — no card required.",
  ctaPrimary: { label: "Start diagnostic", href: "#" },
  ctaSecondary: { label: "See full CRNO question bank", href: "#" },

  // ---- RELATED READING
  related: [
    {
      kicker: "Comparison",
      tag: "IJCAHPO",
      title: "CRNO vs COA, COT and COMT: two different eye-care ladders",
      blurb: "Why the nursing credential and the IJCAHPO technician credentials are not interchangeable — eligibility, exams, and renewal cycles side by side.",
      href: "#",
      bg: "#163bf3",
    },
    {
      kicker: "Study guide",
      tag: "Blueprint",
      title: "Clinical and Perioperative Procedures: 35% of the CRNO exam",
      blurb: "Laser, intraocular and extraocular surgery, TASS, endophthalmitis, and discharge teaching — the block that decides most CRNO scores.",
      href: "#",
      bg: "#cf1d00",
    },
    {
      kicker: "Career",
      tag: "Ophthalmic nursing",
      title: "What ophthalmic RNs actually do across clinic, ASC and OR",
      blurb: "Triage, diagnostic testing, ophthalmic drug administration, and perioperative care — the scope CRNO certification is built to validate.",
      href: "#",
      bg: "#24a865",
    },
  ],
};
