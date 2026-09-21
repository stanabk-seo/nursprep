// NursPrep — certification catalog
// Source: original certs-data.js (window.CERTS)
// Each entry maps to a .cat in categories.js
// Accessible in templates as `certs`

module.exports = [
  // Critical & Emergency
  { code: "PCCN",  name: "Progressive Care Certified Nurse",       body: "AACN",       cat: "critical",  questions: 125, blurb: "For nurses caring for moderately-to-acutely ill adult patients in progressive care settings." },
  { code: "TCRN",  name: "Trauma Certified Registered Nurse",      body: "BCEN",       cat: "critical",  questions: 175, blurb: "Validates expertise across the trauma continuum — from injury prevention through rehabilitation." },
  { code: "CFRN",  name: "Certified Flight Registered Nurse",      body: "BCEN",       cat: "critical",  questions: 175, blurb: "For RNs providing critical care transport via rotor-wing aircraft." },
  { code: "CEN",   name: "Certified Emergency Nurse",              body: "BCEN",       cat: "critical",  questions: 175, blurb: "The standard certification for nurses practicing in emergency departments." },
  { code: "CPEN",  name: "Certified Pediatric Emergency Nurse",    body: "BCEN/PNCB",  cat: "critical",  questions: 175, blurb: "Validates the specialized knowledge needed to care for pediatric patients in emergency settings." },
  { code: "CMC",   name: "Cardiac Medicine Certification",         body: "AACN",       cat: "critical",  questions: 90,  blurb: "Subspecialty credential for critical-care nurses caring for acutely ill cardiac patients." },
  { code: "CSC",   name: "Cardiac Surgery Certification",          body: "AACN",       cat: "critical",  questions: 90,  blurb: "Subspecialty credential for the first 48 hours post-cardiac-surgery patient care." },
  { code: "CCRN",  name: "Critical Care Registered Nurse",           body: "AACN",       cat: "critical",  questions: 150, blurb: "The core AACN credential for nurses caring for acutely and critically ill adult, pediatric, or neonatal patients." },

  // Perioperative & Anesthesia
  { code: "CNOR",  name: "Certified Perioperative Nurse",                  body: "CCI",     cat: "periop",    questions: 200, blurb: "The gold-standard credential for perioperative registered nurses working in the OR." },
  { code: "CAPA",  name: "Certified Ambulatory Perianesthesia Nurse",      body: "ABPANC",  cat: "periop",    questions: 180, blurb: "For RNs providing perianesthesia care in the preoperative and Phase II recovery phases." },
  { code: "CPAN",  name: "Certified Post Anesthesia Nurse",                body: "ABPANC",  cat: "periop",    questions: 180, blurb: "Recognizes expertise in caring for patients in the immediate Phase I recovery period." },
  { code: "CRNFA", name: "Certified Registered Nurse First Assistant",            body: "NASC",    cat: "periop",    questions: null, blurb: "Portfolio-based credential for perioperative RNs who serve as first assistant during surgery. Requires CNOR and an accredited RNFA program." },

  // Pediatric & Family
  { code: "CPN",   name: "Certified Pediatric Nurse",               body: "PNCB",   cat: "pediatric", questions: 175, blurb: "For RNs providing direct care to children and adolescents across inpatient and outpatient settings." },
  { code: "NCSN",  name: "National Certified School Nurse",         body: "NBCSN",  cat: "pediatric", questions: 250, blurb: "Validates the knowledge base required for school nursing practice in K–12 settings." },

  // Women's & Infant
  { code: "RNC-OB", name: "RN Certified in Inpatient Obstetric Nursing", body: "NCC", cat: "womens", questions: 175, blurb: "For RNs providing care during labor, delivery, and the immediate postpartum period." },
  { code: "RNC-MNN", name: "RN Certified in Maternal Newborn Nursing",       body: "NCC", cat: "womens", questions: 175, blurb: "For RNs caring for mothers and newborns during the postpartum and newborn hospital stay." },
  { code: "RNC-NIC", name: "RN Certified in Neonatal Intensive Care Nursing", body: "NCC", cat: "womens", questions: 175, blurb: "For RNs delivering intensive care to critically ill and premature newborns in the NICU." },

  // Oncology & Transplant
  { code: "OCN",   name: "Oncology Certified Nurse",                           body: "ONCC", cat: "oncology", questions: 165, blurb: "The foundational certification for oncology nursing practice across adult care settings." },
  { code: "BMTCN", name: "Blood and Marrow Transplant Certified Nurse",        body: "ONCC", cat: "oncology", questions: 150, blurb: "Specialized credential for RNs caring for HSCT and cellular-therapy patients." },

  // Medical-Surgical & Specialty
  { code: "MEDSURG-BC", name: "Medical\u2011Surgical Nursing — Board Certified",      body: "ANCC",    cat: "specialty", questions: 175, blurb: "For RNs practicing in the broad medical-surgical specialty — the most populated nursing specialty in the U.S." },
  { code: "CRRN",       name: "Certified Rehabilitation Registered Nurse",            body: "ARN",     cat: "specialty", questions: 175, blurb: "Validates expertise in helping patients with disability and chronic illness attain optimal function." },
  { code: "CWCN",       name: "Certified Wound Care Nurse",                            body: "WOCNCB",  cat: "specialty", questions: 120, blurb: "For RNs specializing in the management of acute and chronic wounds across care settings." },
  { code: "CV-BC",      name: "Cardiovascular Nursing — Board Certified",              body: "ANCC",    cat: "specialty", questions: 150, blurb: "For RNs caring for patients with cardiovascular conditions across acute and ambulatory settings." },
  { code: "SCRN",       name: "Stroke Certified Registered Nurse",                     body: "ABNN",    cat: "specialty", questions: 170, blurb: "For RNs caring for stroke patients across the continuum — from prevention through acute care and recovery." },
  { code: "CDCES",      name: "Certified Diabetes Care and Education Specialist",      body: "CBDCE",   cat: "specialty", questions: 200, blurb: "For health professionals who provide diabetes self-management education and support." },
  { code: "PMH-BC",     name: "Psychiatric\u2011Mental Health Nurse — Board Certified", body: "ANCC",    cat: "specialty", questions: 175, blurb: "For RNs providing mental-health care across inpatient, outpatient, and community settings." },
  { code: "CIC",        name: "Certification in Infection Control",                    body: "CBIC",    cat: "specialty", questions: 150, blurb: "For professionals preventing and controlling infections across healthcare settings." },
  { code: "CRNI",  name: "Certified Registered Nurse Infusion",                   body: "INCC",    cat: "specialty", questions: 140,  blurb: "The RN-only credential for infusion therapy \u2014 vascular access, infusion delivery, and related complications." },
  { code: "CRNO",  name: "Certified Registered Nurse in Ophthalmology",            body: "NCBORN",  cat: "specialty", questions: 250,  blurb: "For RNs practicing in ophthalmic clinics, surgical suites, and eye-care settings." },
  { code: "CDDN",  name: "Certified Developmental Disabilities Nurse",             body: "DDNA",    cat: "specialty", questions: null, blurb: "For RNs supporting people with intellectual and developmental disabilities across community and residential settings." },
  { code: "CLPN",  name: "Certified Licensed Practical Nurse",                     body: "NADONA/LTC", cat: "specialty", questions: null, blurb: "Long-term-care specialty certification for licensed practical nurses \u2014 distinct from LPN licensure." },
  { code: "CCHT",     name: "Certified Clinical Hemodialysis Technician",            body: "NNCC",    cat: "specialty", questions: 150, blurb: "For dialysis technicians delivering hemodialysis treatment and monitoring patients during therapy." },
  { code: "PMHNP-BC", name: "Psychiatric-Mental Health Nurse Practitioner \u2014 Board Certified", body: "ANCC", cat: "specialty", questions: 175, blurb: "Advanced-practice credential for NPs diagnosing and treating mental-health conditions across the lifespan." },
  { code: "VA-BC",    name: "Vascular Access Board Certified",                        body: "VACC",    cat: "specialty", questions: 150, blurb: "Multi-disciplinary credential for clinicians who place, manage, and troubleshoot vascular access devices." },
  { code: "NIHSS",    name: "NIH Stroke Scale Certification",                         body: "Multiple providers", cat: "specialty", questions: 15, blurb: "Competency certification in administering the 15-item NIH Stroke Scale \u2014 a training credential, not a board certification." },

  // Leadership & Informatics
  { code: "NE-BC",  name: "Nurse Executive — Board Certified",                   body: "ANCC", cat: "leadership", questions: 175, blurb: "For nurse managers and directors leading individual units or departments." },
  { code: "NEA-BC", name: "Nurse Executive Advanced — Board Certified",          body: "ANCC", cat: "leadership", questions: 175, blurb: "For senior nurse executives leading at the enterprise or system level." },
  { code: "NPD-BC", name: "Nursing Professional Development — Board Certified",  body: "ANCC", cat: "leadership", questions: 175, blurb: "For RNs who design, implement, and evaluate educational programs for nursing staff." },
  { code: "NI-BC",  name: "Nursing Informatics — Board Certified",               body: "ANCC", cat: "leadership", questions: 175, blurb: "For RNs integrating nursing science with information and analytical sciences." },
  { code: "CNML",   name: "Certified Nurse Manager and Leader",                  body: "AONL", cat: "leadership", questions: 115, blurb: "For nurse managers leading units or departments, focused on operational and business leadership." },

  // Community & Ambulatory
  { code: "AMB-BC", name: "Ambulatory Care Nursing — Board Certified", body: "ANCC", cat: "community", questions: 175, blurb: "For RNs practicing in ambulatory, clinic, and outpatient care settings." },

  // Hospice & Palliative
  { code: "CHPN",  name: "Certified Hospice and Palliative Nurse",         body: "HPCC", cat: "palliative", questions: 150, blurb: "For RNs providing end-of-life and serious-illness care in hospice and palliative settings." },
  { code: "ACHPN", name: "Advanced Certified Hospice and Palliative Nurse", body: "HPCC", cat: "palliative", questions: 150, blurb: "Advanced-practice credential for APRNs specializing in palliative and hospice care." },
];
