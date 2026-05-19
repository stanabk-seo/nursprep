---
name: nursprep-page-builder
description: Autonomously builds nursing-certification detail pages for the NursPrep 11ty site, end-to-end (research → content brief → data file → build → validate → commit → push to staging). Trigger when the user wants to build pages for one or more pending exams, or when invoked by the hourly scheduled task. Always picks the next pending exam from .skill-state/pipeline.json and processes ONE exam per invocation by default.
---

# NursPrep Page Builder

You build certification detail pages for the NursPrep 11ty site. The site already has 9 cert pages live; 21 remain pending. This skill drives the full pipeline for **one** pending exam per invocation: research the cert, write a content brief, generate the page data file, build, validate, and push to the `staging` branch (which auto-deploys to `staging.nursprep.pages.dev`).

**Default invocation = process exactly ONE pending exam, then stop.** If the user explicitly says "process 3" or "process all remaining", loop that many times, dispatching a fresh sub-agent per exam to keep main context clean.

## Working directory

All paths below are relative to the repo root: `Website Codebase 11ty/` (in the user's mounted folder). Always `cd` there first.

## State management

The pipeline is tracked in `.skill-state/pipeline.json`. It has:

```json
{
  "exams": [
    {
      "code": "CHPN",
      "csv_keyword": "chpn",
      "status": "pending|in_progress|done|failed",
      "stages": { "research": "...", "brief": "...", "data_file": "...", "build_validated": "...", "committed": "..." },
      "attempts": 0,
      "last_error": null,
      "last_attempt_at": null,
      "completed_at": null
    }
  ]
}
```

**Rules:**
1. Pick the **first exam with `status === "pending"` AND `attempts < 2`**. If none, look for `status === "failed"` with `attempts < 2`. If still none, report "queue empty" and exit cleanly.
2. Set `status` to `in_progress` and increment `attempts` BEFORE starting work. Save `pipeline.json` immediately.
3. After each stage, update its key in `stages` from `pending` → `done`. Save after each stage so a crash leaves accurate state.
4. On success, set `status: done`, `completed_at: <ISO timestamp>`, clear `last_error`.
5. On failure, set `status: failed`, populate `last_error` with a one-line summary. Do NOT raise — log and exit cleanly so the next scheduled run can retry.

Use `scripts/state.py` for atomic reads/writes (it handles ISO timestamps and JSON formatting consistently).

## The 7-stage pipeline

Each stage has a dedicated prompt in `stage-prompts/`. Run each stage in a **sub-agent** (Agent tool) so the main session stays lean. The sub-agent reads the relevant prompt file plus inputs, executes, and returns a terse summary.

### Stage 1 — Resolve

Quick, no sub-agent needed. In the main session:
- Load `.skill-state/keyword-to-code.json` to get the canonical `code` for this exam's CSV keyword.
- Load `src/_data/certs.js` and extract the row for this `code` (name, body, cat, questions, blurb).
- Load the outline cell for this keyword from `Content Outline Data.csv` (column: `content_outline`).
- Pass these as inputs to subsequent stages.

### Stage 2 — Research (sub-agent)

Dispatch a sub-agent with the prompt at `stage-prompts/research.md`. It must return a `research.json` file at `Content/{CODE}_research.json` containing every numeric/factual claim with a source URL. The sub-agent web-researches the issuing body (e.g., BCEN for CFRN, HPCC for CHPN) plus 2–3 corroborating sources.

**Critical:** every numeric figure that ends up on the page must trace to a row in `research.json`. No inventing pass rates, fees, or blueprint weights.

### Stage 3 — Brief (sub-agent)

Dispatch a sub-agent with the prompt at `stage-prompts/brief.md`. Inputs: outline text, `research.json`, `certs.js` row, `reference/seo-guidelines.md`, `reference/nlp-techniques.md`. Output: `Content Briefs/{CODE}_Content_Brief.md` matching the TCRN brief's structure (the project already has TCRN, CFRN, CAPA, CDCES, CRRN, NEA-BC briefs as references — read TCRN's first; it's the most thorough).

### Stage 4 — Data file (sub-agent)

Dispatch a sub-agent with the prompt at `stage-prompts/data-file.md`. Inputs: brief, research.json, schema reference (`reference/schema-reference.md`, plus the existing `src/_data/exams/tcrn.js` as the gold-standard example). Output: `src/_data/exams/{code}.js` (lowercase filename) matching the TCRN schema exactly — all 12 sections, every numeric traceable to research.json.

### Stage 5 — Build & validate

In the main session (no sub-agent — small, fast):
- Run `npx @11ty/eleventy` from `Website Codebase 11ty/`. Fail fast on non-zero exit.
- Verify `_site/certifications/{code}/index.html` exists.
- Verify it contains: all 12 section IDs (`id="overview"`, `id="eligibility"`, `id="blueprint"`, `id="cost"`, `id="passrate"`, `id="plan"`, `id="sample"`, `id="keyterms"`, `id="compare"`, `id="faq"`, `id="sources"`, `id="cta"`), exactly one `application/ld+json` block, and no literal `undefined` strings.
- If any check fails, set this exam's `status: failed`, log the failure, exit.

### Stage 6 — Commit

In the main session:
- **Defensively clean any stale git locks first:** `find .git -name '*.lock' -delete` (FUSE-mounted filesystems occasionally leave a zero-byte `.git/index.lock` that blocks all git ops). If you still hit a lock-related error after this, the file may need `mcp__cowork__allow_cowork_file_delete` + `rm`.
- `git add src/_data/exams/{code}.js Content/{CODE}_research.json "Content Briefs/{CODE}_Content_Brief.md" .skill-state/pipeline.json` — all paths relative to the `Website Codebase 11ty/` repo root (research and brief files live INSIDE the repo so the page's evidence trail is versioned alongside the data file).
- Commit message: `Add {CODE} certification page\n\nAuto-generated via nursprep-page-builder skill.\nResearch sources cited in Content/{CODE}_research.json.`

### Stage 7 — Push

- `git push origin staging` (credential helper is pre-configured in `.git/config`; the token lives at `.skill-state/github_token`).
- Cloudflare Pages auto-deploys to `staging.nursprep.pages.dev` within ~60s.
- Final check: wait 90 seconds, then `curl -sI https://staging.nursprep.pages.dev/certifications/{code}/` and confirm `HTTP/2 200`. If the deploy hasn't propagated yet, that's OK — don't fail the run on this, just log it.

After Stage 7, mark `status: done`, save state, exit cleanly.

## Reference files

- `reference/seo-guidelines.md` — SEO Content Guidelines extracted from the project PDF
- `reference/nlp-techniques.md` — NLP Writing Techniques extracted from the project PDF
- **Schema reference:** read `src/_data/exams/tcrn.js` in full — it's the gold-standard structural example. No separate schema doc is maintained because it tends to drift.
- `stage-prompts/*.md` — Per-stage sub-agent prompts
- `scripts/state.py` — Atomic pipeline.json reader/writer
- `scripts/validate-build.py` — Stage 5 build validation logic

## Error handling and observability

- Log every run to `.skill-state/runs/{ISO_TIMESTAMP}.log`. Capture: which exam, which stage, outcome.
- Maximum 2 attempts per exam. After 2 failures, the exam stays at `status: failed`; the user must investigate manually.
- Never push if any validation check failed — staging deploys must always be working pages.
- Never modify exams whose `status` is already `done`.

## When invoked by the hourly scheduled task

The task's prompt will be: "Use the nursprep-page-builder skill to process the next pending exam." Process exactly one, exit cleanly. Don't ask the user clarifying questions — the user is asleep.

## When invoked interactively

The user may ask "smoke test" or "do CHPN" or "process the next 3". In those cases process the specific count requested, and feel free to ask if anything is genuinely ambiguous.
