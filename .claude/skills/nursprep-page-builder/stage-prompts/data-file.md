# Stage 4: Page content sub-agent prompt

Generate the page content for the **{{CODE}}** certification as JSON at `/tmp/nursprep-draft-{{code-lowercase}}.json` (outside the repo). Stage 4b uploads it to Sanity as an unpublished draft; every text string renders directly on the page once a human publishes it.

## Inputs
- `Content Briefs/{{CODE}}_Content_Brief.md` — the brief from Stage 3
- `Content/{{CODE}}_research.json` — verified facts with citations
- Stage 1 catalog values (name, body, cat, questions, blurb) — canonical when the exam already exists in Sanity
- `scripts/sanity/legacy/exams/tcrn.js` (in your /tmp clone) — gold-standard structure. **Read it in full** and mirror its keys exactly; `cfrn.js` in the same folder is a second example for tone.

## Output

A single JSON object (not a JS module — no comments, no trailing commas) with the same keys and nesting as `tcrn.js`, plus:
- `cat` — category id (e.g. `"critical"`; list them with `*[_type=="category"]{id,label}`)
- `catalog` — `{ "questions": <number or null>, "blurb": "<one-line homepage card description>" }`
- optional `boardcertsSlug` (e.g. `"tcrn"`) only if BoardCerts has a page for this exam; leave it out otherwise

Structure rules (`scripts/sanity/upsert-draft.mjs` rejects files that break them):
- `sections` lists the 11 TOC entries, ids exactly: overview, eligibility, blueprint, cost, passrate, plan, sample, keyterms, compare, faq, sources
- All 11 section objects present, each with a `heading`. If data is genuinely unavailable (e.g. no published pass rate), keep the section, say so plainly in its `prose`, and leave its chart array empty (`passrate.rows: []`, `blueprint.domains: []`) — never invent numbers and never drop the section
- `plan.weeks` non-empty; `sample.q.correct` is a zero-based index into `sample.q.options`
- `keyterms.rows` is an array of `{ "term", "defn", "domain" }` — 8 to 15 rows
- `sources.list` is an array of plain strings — 6 to 10 entries, all from `research.json.sources_index`
- `faq.items` is an array of `{ "q", "a" }` — 8 to 12 real candidate questions
- `compare.rows` compares against 2–4 nearest credentials; set `"highlight": true` on this exam's own row
- `ctaHeading`, `ctaProse`, `ctaPrimary` / `ctaSecondary` (`{ "label", "href": "#" }` — real BoardCerts links are added automatically)
- Every numeric figure traceable to a `facts.*`, `blueprint[*]` or `pass_rate_history[*]` entry in research.json

## HTML rules

Rich-text fields may use only `<strong>`, `<em>`, and `<a href="/certifications/{code}/">` links to other NursPrep exam pages (`<ul><li>` is allowed only as a standalone `prose` item). Rich-text fields are: `lede`, every `prose` array, `eligibility.candidateList`, `cost.renewalProse`, `compare.closingProse`, every `factBox.html`, `sample.q.rationale`.

Every other field is **plain text — no HTML tags**: headings, `heroPills`, `ataGlance`, table rows, `plan.tips[].text`, `sources.list`, `faq` answers (they feed Google's FAQ structured data), `sample.q.scenario` / `stem` / `options`.

## Writing rules

- Page-level SEO: `seo.title` 50–65 chars, `seo.description` ≤ 155 chars, both containing the primary keyword naturally.
- Use the NLP writing rules: answer-first, numeric where expected, short sentences, repeat the noun not "it/they/this".
- For blueprint domains, prefer percentage weights summing to 100 unless the handbook only publishes raw scored-item counts.

## Done criteria

Run `node scripts/sanity/upsert-draft.mjs --json /tmp/nursprep-draft-{{code-lowercase}}.json --dry-run` and fix every error it reports (warnings are acceptable but mention them). Return: file path, section keys populated, any sections left without chart data and why, SEO warnings, and any research-gap blockers (facts that the brief assumed but research.json didn't actually verify).
