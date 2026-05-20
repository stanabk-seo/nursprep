#!/usr/bin/env node
// generate-hero.js — renders cert-card PNGs for each cert page.
//
// Lives at: Website Codebase 11ty/scripts/generate-hero.js
// Template: scripts/cert-template.svg
// Source data: src/_data/exams/{slug}.js
// Output PNG: src/assets/images/certs/{slug}-card.png
// (Intermediate SVG written to /tmp and not committed.)
//
// Usage:
//   node scripts/generate-hero.js               # all certs
//   node scripts/generate-hero.js tcrn cfrn     # specific slugs

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const EXAMS_DIR = path.join(ROOT, "src", "_data", "exams");
const TEMPLATE = path.join(__dirname, "cert-template.svg");
const OUT_DIR = path.join(ROOT, "src", "assets", "images", "certs");
const TMP_SVG_DIR = "/tmp/nursprep-card-svgs";

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
function fillTemplate(tpl, data) {
  const len = data.ACRONYM.length;
  const w = len <= 4 ? 200 : len <= 6 ? 240 : len <= 8 ? 280 : 320;
  const x = 60;
  return tpl
    .replace(/\{\{ACRONYM\}\}/g, data.ACRONYM)
    .replace(/\{\{NAME\}\}/g, data.NAME)
    .replace(/\{\{BODY\}\}/g, data.BODY)
    .replace(/\{\{PASS_RATE\}\}/g, data.PASS_RATE)
    .replace(/\{\{PASS_RATE_SUB\}\}/g, data.PASS_RATE_SUB || "")
    .replace(/\{\{RENEWAL\}\}/g, data.RENEWAL)
    .replace(/\{\{FEE\}\}/g, data.FEE)
    .replace(/\{\{SLUG\}\}/g, data.SLUG)
    .replace(/\{\{BADGE_W\}\}/g, w)
    .replace(/\{\{BADGE_X\}\}/g, x);
}

function render(slug) {
  const examPath = path.join(EXAMS_DIR, `${slug}.js`);
  delete require.cache[examPath];
  const exam = require(examPath);
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

const args = process.argv.slice(2);
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
