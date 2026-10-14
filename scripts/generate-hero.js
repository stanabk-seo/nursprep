#!/usr/bin/env node
// generate-hero.js — renders cert-card PNGs for each cert page.
//
// Lives at: Website Codebase 11ty/scripts/generate-hero.js
// Template: scripts/cert-template.svg
// Source data: a page-builder draft JSON (same shape as the legacy data files),
//   or scripts/sanity/legacy/exams/{slug}.js (pre-Sanity copies)
// Output PNG: src/assets/images/certs/{slug}-card.png, or --out <dir>
// (Intermediate SVG written to /tmp and not committed.)
// Exam content now lives in Sanity; the pipeline uploads the PNG with the draft
// (scripts/sanity/upsert-draft.mjs --image).
//
// Usage:
//   node scripts/generate-hero.js --out /tmp /tmp/nursprep-draft-ocn.json   # pipeline
//   node scripts/generate-hero.js tcrn cfrn                                 # legacy slugs
//   node scripts/generate-hero.js                                           # all legacy certs

const fs = require("fs");
const os = require("os");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const EXAMS_DIR = path.join(ROOT, "scripts", "sanity", "legacy", "exams");
const TEMPLATE = path.join(__dirname, "cert-template.svg");
const outIdx = process.argv.indexOf("--out");
const OUT_DIR = outIdx > -1 ? path.resolve(process.argv[outIdx + 1]) : path.join(ROOT, "src", "assets", "images", "certs");
const TMP_SVG_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "nursprep-card-svgs-"));

function normalizePassRate(raw) {
  if (!raw) return { main: "n/a", sub: "" };
  const m = raw.match(/^([~\d%–\-\s.]+%)(.*)$/);
  if (!m) return { main: raw, sub: "" };
  const main = m[1].trim();
  const tail = (m[2] || "").replace(/[()]/g, "").replace(/verify/i, "unverified").trim();
  return { main, sub: tail };
}
function normalizeRenewal(raw) {
  if (!raw) return "—";
  const m = raw.match(/^(\d+)\s*(yr|year)/i);
  return m ? `${m[1]} yrs` : raw.split("·")[0].trim();
}
function normalizeFee(raw) {
  if (!raw) return "—";
  const m = raw.match(/\$\s*([\d,]+)/);
  return m ? `$${m[1]}` : raw;
}
function getField(entries, labelRegex) {
  const hit = entries.find((e) => labelRegex.test(e.k));
  return hit ? hit.v : null;
}
// Badge auto-width based on acronym length so a short code (CAPA) and a long
// code (NEA-BC) both sit proportionally inside the pill. Origin is at the
// SVG group's translate (600,215), so x must be negative to center the badge.
function badgeBox(acronym) {
  const charWidth = 62; // heuristic at font-size 88, weight 900
  const padding = 60;
  const w = acronym.length * charWidth + padding * 2;
  return { w, x: -w / 2 };
}

function fillTemplate(tpl, data) {
  const box = badgeBox(data.ACRONYM);
  return tpl
    .replace(/\{\{ACRONYM\}\}/g, data.ACRONYM)
    .replace(/\{\{NAME\}\}/g, data.NAME)
    .replace(/\{\{BODY\}\}/g, data.BODY)
    .replace(/\{\{PASS_RATE\}\}/g, data.PASS_RATE)
    .replace(/\{\{PASS_RATE_SUB\}\}/g, data.PASS_RATE_SUB || "")
    .replace(/\{\{RENEWAL\}\}/g, data.RENEWAL)
    .replace(/\{\{FEE\}\}/g, data.FEE)
    .replace(/\{\{SLUG\}\}/g, data.SLUG)
    .replace(/\{\{BADGE_W\}\}/g, box.w)
    .replace(/\{\{BADGE_X\}\}/g, box.x);
}

function loadExam(arg) {
  if (arg.endsWith(".json")) return JSON.parse(fs.readFileSync(arg, "utf8"));
  const examPath = path.join(EXAMS_DIR, `${arg}.js`);
  delete require.cache[examPath];
  return require(examPath);
}

function render(arg) {
  const exam = loadExam(arg);
  const slug = exam.code.toLowerCase();
  const pass = normalizePassRate(getField(exam.heroPills || [], /pass rate/i) || "");
  const renewalRaw =
    getField(exam.heroPills || [], /renewal/i) ||
    getField(exam.ataGlance || [], /renewal cycle/i) ||
    getField(exam.ataGlance || [], /renewal/i);
  const feeRaw =
    getField(exam.ataGlance || [], /^fee/i) ||
    getField(exam.ataGlance || [], /fee/i);
  const data = {
    ACRONYM: exam.code,
    NAME: exam.name,
    BODY: exam.body,
    PASS_RATE: pass.main,
    PASS_RATE_SUB: pass.sub,
    RENEWAL: normalizeRenewal(renewalRaw),
    FEE: normalizeFee(feeRaw),
    SLUG: slug,
  };
  const tpl = fs.readFileSync(TEMPLATE, "utf8");
  const svg = fillTemplate(tpl, data);
  if (!fs.existsSync(TMP_SVG_DIR)) fs.mkdirSync(TMP_SVG_DIR, { recursive: true });
  const svgOut = path.join(TMP_SVG_DIR, `${slug}-card.svg`);
  const pngOut = path.join(OUT_DIR, `${slug}-card.png`);
  fs.writeFileSync(svgOut, svg);
  execSync(`python3 -c "import cairosvg; cairosvg.svg2png(url='${svgOut}', write_to='${pngOut}', output_width=1200, output_height=630)"`);
  return { slug, data, pngOut };
}

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const args = process.argv.slice(2).filter((a, i, all) => a !== "--out" && all[i - 1] !== "--out");
const slugs = args.length ? args : fs.readdirSync(EXAMS_DIR).filter(f => f.endsWith(".js")).map(f => f.replace(/\.js$/, ""));

let success = 0, fail = 0;
for (const slug of slugs) {
  try {
    const r = render(slug);
    console.log(`✓ ${r.data.ACRONYM.padEnd(10)} pass=${r.data.PASS_RATE.padEnd(8)} renew=${r.data.RENEWAL.padEnd(8)} fee=${r.data.FEE}  →  ${path.relative(ROOT, r.pngOut)}`);
    success++;
  } catch (e) {
    console.error(`✗ ${slug}: ${e.message}`);
    fail++;
  }
}
console.log(`\n${success} succeeded, ${fail} failed.`);
process.exit(fail > 0 ? 1 : 0);
