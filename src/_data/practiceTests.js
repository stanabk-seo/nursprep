// BoardCerts practice test linked from each cert page's "Start {code} practice"
// hero button, keyed by exam code. Merged onto each exam in examsList.js.
//
// Source: https://www.boardcerts.com/sitemap_practice_test.xml (checked 2026-09-27).
// Only add codes that appear in that sitemap: BoardCerts answers 200 for ANY
// /exams/{slug}/{slug}-practice-test URL (soft 404), so a live-looking URL is
// not proof the page exists. Certs not listed here keep the placeholder button.

const BASE = "https://www.boardcerts.com/exams";

// UTM tags so BoardCerts analytics attributes this referral traffic to NursPrep.
const UTM = {
  utm_source: "nursprep",
  utm_medium: "referral",
  utm_campaign: "cert_pages",
  utm_content: "hero_cta",
};

// NursPrep exam code -> BoardCerts practice test slug
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
};

module.exports = Object.fromEntries(
  Object.entries(SLUGS).map(([code, slug]) => [
    code,
    `${BASE}/${slug}/${slug}-practice-test?${new URLSearchParams(UTM)}`,
  ])
);
