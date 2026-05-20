---
name: nursprep-page-builder
description: Autonomously builds nursing-certification detail pages for the NursPrep 11ty site, end-to-end (research → content brief → data file → build → validate → commit → push to staging). Trigger when the user wants to build pages for one or more pending exams, or when invoked by the hourly scheduled task. Always picks the next pending exam from the committed pipeline.json and processes ONE exam per invocation by default. Works entirely inside the sandbox's /tmp/nursprep-work clone to avoid Cowork's file-delete prompts on the mounted folder.
---

# NursPrep Page Builder

You build certification detail pages for the NursPrep 11ty site. 11 cert pages are live; 19 remain pending (as of 2026-05-20). This skill drives the full pipeline for **one** pending exam per invocation: research the cert, write a content brief, generate the page data file, build, validate, and push to the `staging` branch (which auto-deploys to `staging.nursprep.pages.dev`).

**Default invocation = process exactly ONE pending exam, then stop.** If the user explicitly says "process 3" or "process all remaining", loop that many times.

## CRITICAL: Where work happens

**All file creation, builds, and git operations happen in `/tmp/nursprep-work/` — a sandbox-only path.** The mounted user folder (`/sessions/<id>/mnt/nursing exams website/Website Codebase 11ty/`) is read-only from this skill's perspective. This avoids Cowork's file-delete safety prompts that fire on every git operation against the mounted folder.

## Bootstrap (run this once per invocation, before Stage 1)

```bash
# 1. Read the PAT from the mounted folder (read-only)
TOKEN=$(cat "/sessions/$(ls /sessions | head -1)/mnt/nursing exams website/Website Codebase 11ty/.skill-state/github_token" | tr -d '\n')
# Or in path-mapping form, the mounted root is at:
#   /sessions/<your-session-id>/mnt/nursing exams website/Website Codebase 11ty/
# Find the session ID via:  ls /sessions | head -1

# 2. Clean any prior /tmp/nursprep-work (sandbox only — no Cowork prompt)
rm -rf /tmp/nursprep-work

# 3. Clone the staging branch with token-in-URL
git clone --branch staging --depth 1 \
  "https://x-access-token:${TOKEN}@github.com/stanabk-seo/nursprep" \
  /tmp/nursprep-work

# 4. Install dependencies
cd /tmp/nursprep-work
npm install --silent --no-audit --no-fund

# 5. Configure git identity for this clone
git config user.email "ripabhishek37@gmail.com"
git config user.name "nursprep-skill"
```

After bootstrap, **`cd /tmp/nursprep-work` and stay there for the rest of the pipeline.** Every relative path mentioned below is relative to `/tmp/nursprep-work/`.

## State management

The pipeline state lives in the cloned repo at `.skill-state/pipeline.json`. It's committed to git, so the freshest copy comes with each clone. After the run, the push back to GitHub updates state for the next run.

```json
{
  "exams": [
    { "code": "CHPN", "status": "pending|in_progress|done|failed",
      "stages": { "research": "...", "brief": "...", "data_file": "...", "build_validated": "...", "committed": "..." },
      "attempts": 0, "last_error": null, "last_attempt_at": null, "completed_at": null }
  ]
}
```

**Rules:**
1. Pick the **first exam with `status === "pending"` AND `attempts < 2`**. If none, look for `status === "failed"` with `attempts < 2`. If still none, report "queue empty" and exit cleanly.
2. Set `status` to `in_progress` and increment `attempts` BEFORE starting work. Save `pipeline.json` immediately.
3. After each stage, update its key in `stages` from `pending` → `done`. Save after each stage so a crash leaves accurate state.
4. On success, set `status: done`, `completed_at: <ISO timestamp>`, clear `last_error`.
5. On failure, set `status: failed`, populate `last_error` with a one-line summary. Do NOT raise — log and exit cleanly so the next scheduled run can retry.

Use `.claude/skills/nursprep-page-builder/scripts/state.py` for atomic reads/writes. Run it via `python3` from inside `/tmp/nursprep-work/`.

## The 7-stage pipeline

Each stage has a dedicated prompt in `.claude/skills/nursprep-page-builder/stage-prompts/`. Run each in a **sub-agent** (Agent tool) when the work is heavy (research, brief, data file). Build/validate/commit are quick enough to run inline.

### Stage 1 — Resolve

In the main flow (no sub-agent):
- Load `.skill-state/keyword-to-code.json` to get the canonical `code` for the CSV keyword.
- Read `src/_data/certs.js` to get the row for this `code` (name, body, cat, questions, blurb).
- Read the outline cell for this keyword from `../Content Outline Data.csv`... wait, that lives at the mounted parent folder, NOT in the repo. **Read the outline directly from the mounted path via Read tool** (read-only, no prompt risk). Specifically: `/sessions/<id>/mnt/nursing exams website/Content Outline Data.csv`.

### Stage 2 — Research (sub-agent)

Dispatch a sub-agent using `.claude/skills/nursprep-page-builder/stage-prompts/research.md`. Output: `Content/{CODE}_research.json` (inside /tmp/nursprep-work). Sub-agent web-researches the issuing body plus 2–3 corroborating sources.

**Critical:** every numeric figure on the page must trace to a row in `research.json`. No inventing pass rates, fees, or blueprint weights.

**Conflict resolution rule:** if `src/_data/certs.js` and a secondary research source disagree on a basic fact (e.g. question count), TRUST `certs.js` — it's the project's canonical source. Note the discrepancy in `research.json` `discrepancies` field for the user's review.

### Stage 3 — Brief (sub-agent)

Dispatch a sub-agent using `.claude/skills/nursprep-page-builder/stage-prompts/brief.md`. Inputs: outline text, `Content/{CODE}_research.json`, certs.js row, the SEO + NLP reference docs, and `Content Briefs/CHPN_Content_Brief.md` as gold-standard structure (TCRN brief lives in the user's parent folder and isn't in the repo). Output: `Content Briefs/{CODE}_Content_Brief.md`.

### Stage 4 — Data file (sub-agent)

Dispatch a sub-agent using `.claude/skills/nursprep-page-builder/stage-prompts/data-file.md`. Inputs: brief, research.json, and `src/_data/exams/tcrn.js` as the gold-standard schema. Output: `src/_data/exams/{code}.js` (lowercase filename) matching the TCRN schema exactly.

### Stage 5 — Build & validate

In the main flow:
- `npx @11ty/eleventy` from `/tmp/nursprep-work/`. Fail fast on non-zero exit.
- Verify `_site/certifications/{code}/index.html` exists.
- Run `python3 .claude/skills/nursprep-page-builder/scripts/validate-build.py {CODE}` — checks all 12 section IDs, exactly one JSON-LD block, no rendered `undefined`/`null` strings, minimum size sanity.
- If validation fails, mark this exam failed in pipeline.json and exit. **Do not push a broken page.**

### Stage 6 — Commit

In the main flow (no defensive lock cleanup needed — /tmp has no stale locks):
- `git add src/_data/exams/{code}.js Content/{CODE}_research.json "Content Briefs/{CODE}_Content_Brief.md" .skill-state/pipeline.json`
- Commit message format:
  ```
  Add {CODE} certification page

  Auto-generated via nursprep-page-builder skill.
  Research sources cited in Content/{CODE}_research.json.
  ```

### Stage 7 — Push

- `git push origin staging` — credentials are in the remote URL from clone; no helper needed.
- Cloudflare Pages auto-deploys to `staging.nursprep.pages.dev/certifications/{code}/` within ~60s.
- Verify deploy WITHOUT blowing the bash timeout: run `sleep 40` in one bash call, then `sleep 30 && curl -sI https://staging.nursprep.pages.dev/certifications/{code-lowercase}/ | head -1` in a separate call. If status isn't 200, log it but don't fail the run — Cloudflare may still be propagating.
- **Mark done + push the state update:** Run `python3 .claude/skills/nursprep-page-builder/scripts/state.py done {CODE}`. Then make a small follow-up commit: `git add .skill-state/pipeline.json && git commit -m 'Mark {CODE} done in pipeline.json' && git push origin staging`. This ensures the next scheduled run sees the latest done status on GitHub.

After the state-update push, exit cleanly.

## Post-run: sync state back to mounted folder (optional but helpful)

In the scheduled task's main session (NOT a sub-agent), after the sub-agent reports success:
- Use the **Write tool** (not bash rm/copy) to overwrite the mounted `.skill-state/pipeline.json` with the updated copy from `/tmp/nursprep-work/.skill-state/pipeline.json`. Write tool doesn't trigger Cowork's delete prompt.
- This keeps the user's local view current without needing them to `git pull`.

## Reference files

- `.claude/skills/nursprep-page-builder/reference/seo-guidelines.md` — SEO Content Guidelines
- `.claude/skills/nursprep-page-builder/reference/nlp-techniques.md` — NLP Writing Techniques
- `.claude/skills/nursprep-page-builder/stage-prompts/*.md` — Per-stage sub-agent prompts
- `.claude/skills/nursprep-page-builder/scripts/state.py` — Atomic state file reader/writer
- `.claude/skills/nursprep-page-builder/scripts/validate-build.py` — Build validation
- **Schema reference:** read `src/_data/exams/tcrn.js` in full — gold-standard structural example. No separate schema doc.

## Error handling and observability

- Log every run to `.skill-state/runs/{ISO_TIMESTAMP}.log` in the /tmp clone, then commit it as part of the run.
- Maximum 2 attempts per exam. After 2 failures, the exam stays `failed`; user must investigate.
- Never push if validation failed.
- Never modify exams whose `status` is already `done`.

## When invoked by the hourly scheduled task

The task's prompt instructs you to bootstrap, then process the next pending exam, then exit. Don't ask the user clarifying questions — they're asleep or away.

## When invoked interactively

The user may ask "smoke test", "do NE-BC", or "process the next 3". Process the specific count requested.
