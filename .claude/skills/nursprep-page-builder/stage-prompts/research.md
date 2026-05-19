# Stage 2: Research sub-agent prompt

You are researching the **{{CODE}}** nursing certification ({{NAME}}, issued by {{BODY}}). Your job is to produce a `research.json` file that any downstream content stage can cite without ambiguity.

## Working directory
`Website Codebase 11ty/` (the 11ty repo root). Outputs go in `Content/{{CODE}}_research.json` INSIDE the repo so they get versioned with the data file.

## What to find

Primary source = the issuing body's own pages (e.g. BCEN for CFRN, HPCC for CHPN, ANCC for *-BC creds). Secondary = 2–3 corroborating sources (professional society, prep vendor with disclosed pass-rate stats, BLS OEWS for salary, peer-reviewed studies where applicable).

For every claim below, capture the **numeric/date/quote**, the **source URL**, and a **confidence** flag (`high` if from issuing body, `medium` if from corroborating source, `low` if only one weak source).

Required facts:

1. **Awarding body** — full name + abbreviation
2. **Year credential launched**
3. **Eligibility** — license, experience requirements, any prerequisites (verbatim from handbook if possible)
4. **Exam format** — computer-based vs. paper, vendor (Pearson VUE, etc.), question count, scored vs. pretest items, time limit
5. **Passing score** — raw number or scaled score, with explanation
6. **Blueprint** — domains and their weights (% or item counts). Use the most recent published version. Note effective date.
7. **Fee** — current member and non-member prices, retake fee if known
8. **Pass rate** — most recent year(s) with citation. If only one year is published, note it.
9. **Renewal** — cycle length (years), CE hour requirement (split between specialty-specific vs. general if applicable), re-exam option
10. **Common confusions** — similar credentials candidates conflate this with (e.g. TCRN vs TNCC), with one-line disambiguation
11. **Salary / employment context** — BLS OEWS or comparable. Optional but valuable.
12. **Recent changes** — any blueprint update, fee change, or eligibility shift in the last 2 years

## Output

Write the JSON to `Content/{{CODE}}_research.json`. Structure:

```json
{
  "code": "{{CODE}}",
  "researched_at": "2026-05-19T...Z",
  "facts": {
    "awarding_body": {"value": "...", "source": "https://...", "confidence": "high"},
    "year_launched": {"value": 2014, "source": "...", "confidence": "high"},
    "eligibility": {"value": "...", "source": "...", "confidence": "high"},
    "...etc": "..."
  },
  "blueprint": [
    {"domain": "...", "weight_pct": 25, "source": "...", "confidence": "high"}
  ],
  "pass_rate_history": [
    {"year": 2024, "pass_rate_pct": 62, "source": "...", "confidence": "high"}
  ],
  "sources_index": [
    {"title": "...", "url": "...", "accessed": "2026-05-19"}
  ]
}
```

## Rules

- If a fact is genuinely unavailable, set `"value": null, "confidence": "missing"` and note why. Do NOT invent.
- If sources conflict (e.g. two different pass rates), capture BOTH with their sources and flag in a `discrepancies` field.
- Source URLs must be specific pages, not site root.
- Use WebSearch and WebFetch. If WebFetch returns a JS-rendered shell, escalate to the Chrome MCP tools.

## Done criteria

Return a one-sentence summary: which sources, how many facts captured, any gaps. The downstream agent will refuse to write the page if `awarding_body`, `eligibility`, `blueprint`, `fee`, and `renewal` are not all populated.
