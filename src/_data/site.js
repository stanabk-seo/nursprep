// Site-wide metadata. Available in templates as `site.xxx`.
const CERT_COUNT = require("./certs.js").length;
module.exports = {
  title: "NursPrep — Pass your nursing certification. With confidence.",
  // Cert count is derived from certs.js so it can never drift out of date.
  description: `Structured study plans, 30,000+ practice questions, and board-style rationales for ${CERT_COUNT} nursing certifications — built by nurses who've sat the exam.`,
  url: "https://nursprep.com", // production domain
  author: "NursPrep",
  year: new Date().getFullYear(),

  // Stats shown in the Hero trust bar
  stats: {
    questions: "30K+",
    passRate: "94%",
    nursesCertified: "48K",
  },

  // Chips surfaced in the hero as "popular" searches
  featuredChips: ["CNOR", "PCCN", "CEN", "OCN", "CPN", "MEDSURG-BC", "CHPN", "TCRN"],
};
