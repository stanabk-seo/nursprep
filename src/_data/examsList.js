// Aggregates every exam data file in _data/exams/ into a single array.
// Pagination template in src/certifications/certification.njk iterates over this.
//
// To publish a new cert page: drop a new file at _data/exams/{code}.js that
// exports the exam schema (same shape as cfrn.js). It's picked up automatically
// on the next build — no registration required.

const fs = require("fs");
const path = require("path");

module.exports = function () {
  const dir = path.join(__dirname, "exams");
  const entries = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".js"))
    .map((f) => {
      // Require with a clean cache so dev reloads pick up edits
      const full = path.join(dir, f);
      delete require.cache[require.resolve(full)];
      return require(full);
    })
    // Only include entries that have a code — guards against draft stubs
    .filter((e) => e && e.code);

  // Sort by code for stable ordering (deterministic builds)
  entries.sort((a, b) => a.code.localeCompare(b.code));

  return entries;
};
