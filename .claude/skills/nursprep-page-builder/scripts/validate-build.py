#!/usr/bin/env python3
"""Validate that a built cert page has the expected structure.

Usage: python validate-build.py CODE
Exits 0 if all checks pass, nonzero with a diagnostic if any fail.
Run from repo root after `npx @11ty/eleventy`.
"""
import sys, os, re, subprocess

REQUIRED_SECTIONS = [
    "overview","eligibility","blueprint","cost","passrate",
    "plan","sample","keyterms","compare","faq","sources","cta",
]

def repo_root():
    r = subprocess.run(['git','rev-parse','--show-toplevel'], capture_output=True, text=True, check=True)
    return r.stdout.strip()

def main(code):
    code_lc = code.lower()
    html_path = os.path.join(repo_root(), '_site', 'certifications', code_lc, 'index.html')
    if not os.path.exists(html_path):
        sys.exit(f"FAIL: built HTML missing at {html_path}")
    html = open(html_path).read()

    failures = []

    # All required sections present
    for sid in REQUIRED_SECTIONS:
        if f'id="{sid}"' not in html:
            failures.append(f"missing section id=\"{sid}\"")

    # Exactly one JSON-LD block of type combined
    jsonld_count = len(re.findall(r'application/ld\+json', html))
    if jsonld_count != 1:
        failures.append(f"expected 1 JSON-LD block, found {jsonld_count}")

    # No literal undefined / null / NaN strings outside script bodies
    for needle in ['>undefined<','>NaN<','> undefined<','>null<']:
        if needle.lower() in html.lower():
            failures.append(f"page contains rendered placeholder: {needle.strip('<>')}")

    # Page must include the canonical URL with the code
    if f'/certifications/{code_lc}/' not in html:
        failures.append(f"canonical/internal URL /certifications/{code_lc}/ not found")

    # Minimum file size sanity (real pages are 60–80KB)
    size = os.path.getsize(html_path)
    if size < 20_000:
        failures.append(f"HTML is suspiciously small ({size} bytes) — likely missing sections")

    if failures:
        print(f"FAIL: {code} page failed {len(failures)} check(s):")
        for f in failures:
            print(f"  • {f}")
        sys.exit(1)

    print(f"PASS: {code} — {size:,} bytes, all 12 sections present, 1 JSON-LD block")

if __name__ == '__main__':
    if len(sys.argv) != 2:
        sys.exit("Usage: validate-build.py CODE")
    main(sys.argv[1].upper())
