module.exports = function (eleventyConfig) {
  // Passthrough: static assets are copied from src/ to _site/ unchanged
  eleventyConfig.addPassthroughCopy({ "src/tokens.css": "tokens.css" });
  eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });
  eleventyConfig.addPassthroughCopy({ "src/fonts": "fonts" });
  eleventyConfig.addPassthroughCopy({ "src/icons": "icons" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Watch targets — trigger rebuild when these change
  eleventyConfig.addWatchTarget("src/tokens.css");
  eleventyConfig.addWatchTarget("src/styles.css");
  eleventyConfig.addWatchTarget("src/assets/js");

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
