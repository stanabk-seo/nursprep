// Site-wide metadata. Available in templates as `site.xxx`.
module.exports = {
  title: "NursPrep — Pass your nursing certification. With confidence.",
  description:
    "Structured study plans, 30,000+ practice questions, and board-style rationales for 30 nursing certifications — built by nurses who've sat the exam.",
  url: "https://nursprep.pages.dev", // Cloudflare Pages deployment
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
