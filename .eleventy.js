module.exports = function (eleventyConfig) {
  // Passthrough: static assets are copied from src/ to _site/ unchanged
  eleventyConfig.addPassthroughCopy({ "src/tokens.css": "tokens.css" });
  eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });
  eleventyConfig.addPassthroughCopy({ "src/exam-styles.css": "exam-styles.css" });
  eleventyConfig.addPassthroughCopy({ "src/fonts": "fonts" });
  eleventyConfig.addPassthroughCopy({ "src/icons": "icons" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  // Favicons — served from site root so browsers resolve /favicon.svg etc.
  eleventyConfig.addPassthroughCopy({ "src/favicon.svg": "favicon.svg" });
  eleventyConfig.addPassthroughCopy({ "src/favicon-32.png": "favicon-32.png" });
  eleventyConfig.addPassthroughCopy({ "src/favicon-192.png": "favicon-192.png" });
  eleventyConfig.addPassthroughCopy({ "src/apple-touch-icon.png": "apple-touch-icon.png" });

  // Watch targets — trigger rebuild when these change
  eleventyConfig.addWatchTarget("src/tokens.css");
  eleventyConfig.addWatchTarget("src/styles.css");
  eleventyConfig.addWatchTarget("src/exam-styles.css");
  eleventyConfig.addWatchTarget("src/assets/js");

  // ---- Content from Sanity ----
  // One GROQ request per build (re-run on every --serve rebuild). The data
  // files in src/_data/ (site, certs, certsByCategory, categories, examsList)
  // read their slice of this, so templates keep using the same global names.
  eleventyConfig.addGlobalData("sanity", async () => {
    const { fetchContent, buildSiteData } = await import("./src/_lib/sanity.mjs");
    const perspective = process.env.SANITY_PERSPECTIVE || "published";
    const content = await fetchContent({ perspective });
    return buildSiteData(content, { perspective, siteUrl: "https://nursprep.com" });
  });

  // ---- Filters ----
  // Pre-computes the dash length and running offset for each slice of the
  // blueprint donut. Nunjucks can't mutate a running total across {% for %}
  // iterations, so we hand the macro an already-resolved array.
  eleventyConfig.addFilter("arcSegments", function (domains) {
    const size = 220;
    const stroke = 36;
    const r = (size - stroke) / 2;
    const circumference = 2 * Math.PI * r;
    const total = domains.reduce((a, d) => a + d.weight, 0);
    const colors = [
      "var(--accent-50)",
      "#24a865",
      "#c98600",
      "#0089e3",
      "#cf1d00",
    ];
    let running = 0;
    return domains.map((d, i) => {
      const len = (d.weight / total) * circumference;
      const seg = {
        label: d.label,
        weight: d.weight,
        dashLen: +len.toFixed(3),
        gap: +(circumference - len).toFixed(3),
        offset: +(-running).toFixed(3),
        color: colors[i % colors.length],
      };
      running += len;
      return seg;
    });
  });

  // Maximum practice-question load across all weeks of the study plan.
  // Used to compute bar widths for the plan visualization.
  eleventyConfig.addFilter("maxQs", function (weeks) {
    return weeks.reduce((m, w) => (w.qs > m ? w.qs : m), 0);
  });

  // JSON.stringify that's safe to interpolate into a <script> tag.
  eleventyConfig.addFilter("jsonSafe", function (value) {
    return JSON.stringify(value)
      .replace(/</g, "\\u003c")
      .replace(/-->/g, "--\\u003e");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
