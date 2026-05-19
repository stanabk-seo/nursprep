# Stage 4: Data file sub-agent prompt

Generate `src/_data/exams/{{code}}.js` (lowercase filename) for the **{{CODE}}** certification. This is the page itself — every text string here renders directly to the user.

## Inputs
- `Content Briefs/{{CODE}}_Content_Brief.md` — the brief from Stage 3
- `Content/{{CODE}}_research.json` — verified facts with citations
- `Website Codebase 11ty/src/_data/exams/tcrn.js` — gold-standard structural reference. Read it in full.
- `Website Codebase 11ty/.claude/skills/nursprep-page-builder/reference/schema-reference.md` — annotated schema

## Output

Write `Website Codebase 11ty/src/_data/exams/{{code-lowercase}}.js`. Match `tcrn.js` exactly in structure:
- 12 sections, all populated
- Top header comment naming sources and verification date
- Every numeric figure traceable to a `facts.*` or `blueprint[*]` or `pass_rate_history[*]` entry in research.json
- `sample.q.correct` is zero-indexed
- `sources.items` lists 6–10 entries, all from `research.json.sources_index`
- `compare.rows` compares against 2–4 nearest credentials (see `tcrn.js` and `cfrn.js` for tone)
- `faq.items` answers 6–10 real candidate questions
- `keyterms.terms` has 5–8 domain-specific definitions

## Rules

- If a section can't be substantively populated from the brief + research (e.g. no pass-rate data exists for this credential), OMIT the data key entirely so the template skips it — don't stub with empty values.
- Page-level SEO: `seo.title` should be 50–65 chars (tcrn.js is 64; match that band), `seo.description` ≤ 155 chars, both contain the primary keyword naturally.
- Use the NLP writing rules: answer-first, numeric where expected, short sentences, repeat the noun not "it/they/this".
- For blueprint domains, prefer percentage weights summing to 100 unless the handbook only publishes raw scored-item counts.

## Done criteria

Return: file path, line count, list of section keys populated, list of any sections intentionally omitted with reason, and any research-gap blockers (facts that the brief assumed but research.json didn't actually verify).
