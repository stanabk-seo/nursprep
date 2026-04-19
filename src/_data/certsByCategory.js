// Groups certs under their category at build time.
// Consumed by templates as `certsByCategory`.
// Each entry: { id, label, accent, certs: [...] }
// Only categories that actually have certs are included.

const categories = require("./categories");
const certs = require("./certs");

module.exports = categories
  .map((cat) => ({
    ...cat,
    certs: certs.filter((c) => c.cat === cat.id),
  }))
  .filter((cat) => cat.certs.length > 0);
