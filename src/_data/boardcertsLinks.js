// BoardCerts pages linked from each cert page, keyed by exam code.
// Merged onto each exam in examsList.js as `exam.boardcerts`.
//
// Sources (checked 2026-09-27):
//   https://www.boardcerts.com/sitemap_practice_test.xml
//   https://www.boardcerts.com/sitemap_question_bank.xml
// Only add codes that appear in those sitemaps: BoardCerts answers 200 for ANY
// /exams/{slug}/... URL (soft 404), so a live-looking URL is not proof the page
// exists. Certs not listed here keep the "#" placeholder hrefs.

const BASE = "https://www.boardcerts.com/exams";

// UTM tags so BoardCerts analytics attributes this referral traffic to NursPrep.
// utm_content identifies which button on the cert page was clicked.
const UTM = {
  utm_source: "nursprep",
  utm_medium: "referral",
  utm_campaign: "cert_pages",
};

const link = (path, content, hash = "") =>
  `${BASE}/${path}?${new URLSearchParams({ ...UTM, utm_content: content })}${hash}`;

// NursPrep exam code -> BoardCerts exam slug
const SLUGS = {
  "ACHPN": "achpn",
  "AMB-BC": "amb-bc",
  "CAPA": "capa",
  "CDCES": "cdces",
  "CEN": "cen",
  "CFRN": "cfrn",
  "CHPN": "chpn",
  "CIC": "cic",
  "CMC": "cmc",
  "CNOR": "cnor",
  "CPAN": "cpan",
  "CPEN": "cpen",
  "CPN": "cpn",
  "CRRN": "crrn",
  "CSC": "csc",
  "CV-BC": "cv-bc",
  "CWCN": "cwcn",
  "MEDSURG-BC": "medsurg-bc",
  "NCSN": "ncsn",
  "NE-BC": "ne-bc",
  "NEA-BC": "nea-bc",
  "NI-BC": "ni-bc",
  "NPD-BC": "npd-bc",
  "OCN": "ocn",
  "PCCN": "pccn",
  "PMH-BC": "pmh-bc",
  "RNC-OB": "rnc-ob",
  "SCRN": "scrn",
  "TCRN": "tcrn",
  "BMTCN": "tctcn", // ONCC renamed BMTCN to TCTCN on 2026-01-01
  "PMHNP-BC": "pmhnp-bc",
};

// In the question bank sitemap but not the practice test sitemap
const NO_PRACTICE_TEST = new Set(["PMHNP-BC"]);

module.exports = Object.fromEntries(
  Object.entries(SLUGS).map(([code, slug]) => {
    const test = `${slug}/${slug}-practice-test`;
    const hasTest = !NO_PRACTICE_TEST.has(code);
    return [
      code,
      {
        practiceTest: hasTest ? link(test, "hero_cta") : undefined,
        diagnostic: hasTest ? link(test, "cta_diagnostic") : undefined,
        questionBank: link(`${slug}/${slug}-question-bank`, "cta_question_bank", "#buy-now"),
      },
    ];
  })
);
