# Stage 3: Content brief sub-agent prompt

Write a content brief for the **{{CODE}}** ({{NAME}}) certification page. The brief mirrors the structure and depth of an existing reference brief.

## Inputs
- `Content/{{CODE}}_research.json` — all verified facts
- `Content Outline Data.csv` (column `content_outline` for keyword `{{KEYWORD}}`) — SEO-derived outline from top-10 SERP analysis
- `Content Briefs/TCRN_Content_Brief.md` — the gold-standard reference; read this fully before writing
- `.claude/skills/nursprep-page-builder/reference/seo-guidelines.md` — project SEO rules
- `.claude/skills/nursprep-page-builder/reference/nlp-techniques.md` — project NLP/writing rules
- `Website Codebase 11ty/src/_data/certs.js` — canonical name, body, category, question count, blurb

## Output

Write to `Content Briefs/{{CODE}}_Content_Brief.md`. Match TCRN_Content_Brief.md's structure section-for-section:

1. Brief Snapshot table (primary keyword, secondary cluster, intent, type, word count, audience, tone)
2. Critical Disambiguation — confused credentials, what they are, how to handle each
3. Title, Meta, URL — H1 candidates, meta title (≤60 chars), meta description (≤155 chars), URL slug
4. Search Intent and SERP Notes — what intents the page must serve, key competing pages, long-tail to cover
5. Content Outline (Headings + Writer Guidance) — H1, intros, every H2/H3 with paragraph-level guidance, definition blocks, internal link targets
6. Voice and Tone notes
7. Fact-checking checklist — list every verifiable claim with its source from research.json

## Rules

- Every numeric/factual claim referenced in the brief must come from `research.json`. Cite inline like `(see facts.fee in research.json)`.
- Apply NLP rules: answer-first, exact units, short sentences, no confusing pronouns.
- Apply SEO rules: descriptive question-based headings, primary keyword in first paragraph and 20–30% of headings, no keyword stuffing, definition blocks for complex terms.
- The outline column from the CSV is a starting point, not a constraint. Common defects to check for:
  - Missing the awarding body's name (e.g. CHPN's outline didn't mention HPCC)
  - Treating the credential as a course to enroll in rather than an exam to sit
  - Generic headings like "Introduction" or "Conclusion"
  - Missing the most-searched sections (eligibility, fee, pass rate, renewal)
  - Mixing the credential with similar courses (e.g. TCRN vs TNCC)

  **If the outline has any of these defects, REWRITE it from scratch.** Open the brief with a "Status" line stating the outline was rewritten and why. TCRN_Content_Brief.md's opening shows the pattern.

## Done criteria

Return: path to the brief, word count, any flagged outline issues, any research gaps that will need follow-up before Stage 4.
