// Certs grouped under their category, from Sanity (see src/_lib/sanity.mjs).
// Consumed by templates as `certsByCategory`.
// Each entry: { id, label, accent, certs: [...] }
// Only categories that actually have certs are included.
module.exports = ({ sanity }) => sanity.certsByCategory;
