---
name: nursprep-page-builder
description: Autonomously builds nursing-certification detail pages for the NursPrep 11ty site, end-to-end (research → content brief → page content → unpublished Sanity draft → build with drafts → validate → push to staging for review). Never publishes — a human reviews the draft in Sanity Studio and clicks Publish. Trigger when the user wants to build pages for one or more pending exams, or when invoked by the hourly scheduled task. Always picks the next pending exam from the committed pipeline.json and processes ONE exam per invocation by default. Works entirely inside the sandbox's /tmp/nursprep-work clone to avoid Cowork's file-delete prompts on the mounted folder.
---

# NursPrep Page Builder

You build certification detail pages for the NursPrep 11ty site. Page content lives in **Sanity CMS** (project `4u3xakge`, dataset `production`, Studio at https://nursprep.sanity.studio) — not in the repo. This skill drives the full pipeline for **one** pending exam per invocation: research the cert, write a content brief, generate the page content, upload it as an **unpublished Sanity draft**, build with drafts to validate, and push research/brief/state to the `staging` branch. The staging site (`staging.nursprep.pages.dev`) renders drafts, so the page can be reviewed there; a human then publishes it in Studio, which rebuilds nursprep.com.

**Never publish.** The pipeline only ever writes `drafts.*` documents.

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
pip install cairosvg --break-system-packages --quiet  # for card image generation

# 4b. Sanity Editor token (gitignored; create in sanity.io/manage → API → Tokens, role Editor)
export SANITY_WRITE_TOKEN=$(cat "/sessions/$(ls /sessions | head -1)/mnt/nursing exams website/Website Codebase 11ty/.skill-state/sanity_token" | tr -d '\n')

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
- Look up the exam in Sanity (published content is public, no token needed):
  ```bash
  node --input-type=module -e 'import {createClient} from "@sanity/client"; const c=createClient({projectId:"4u3xakge",dataset:"production",apiVersion:"2025-02-19",useCdn:false}); console.log(JSON.stringify(await c.fetch(`*[_type=="exam" && code==$code][0]{code,name,body,"cat":category->id,questions,blurb}`,{code:process.argv[1]})))' {CODE}
  ```
  If it exists, those values (name, body, cat, questions, blurb) are canonical. If it returns `null` the exam is new: take `cat` from the exam's `pipeline.json` entry if present, otherwise pick the closest category id from `*[_type=="category"]{id,label}`.
- Read the outline cell for this keyword from `../Content Outline Data.csv`... wait, that lives at the mounted parent folder, NOT in the repo. **Read the outline directly from the mounted path via Read tool** (read-only, no prompt risk). Specifically: `/sessions/<id>/mnt/nursing exams website/Content Outline Data.csv`.

### Stage 2 — Research (sub-agent)

Dispatch a sub-agent using `.claude/skills/nursprep-page-builder/stage-prompts/research.md`. Output: `Content/{CODE}_research.json` (inside /tmp/nursprep-work). Sub-agent web-researches the issuing body plus 2–3 corroborating sources.

**Critical:** every numeric figure on the page must trace to a row in `research.json`. No inventing pass rates, fees, or blueprint weights.

**Conflict resolution rule:** if the published Sanity values from Stage 1 and a secondary research source disagree on a basic fact (e.g. question count), TRUST Sanity — it's the project's canonical source. Note the discrepancy in `research.json` `discrepancies` field for the user's review.

### Stage 3 — Brief (sub-agent)

Dispatch a sub-agent using `.claude/skills/nursprep-page-builder/stage-prompts/brief.md`. Inputs: outline text, `Content/{CODE}_research.json`, the Stage 1 catalog values, the SEO + NLP reference docs, and `Content Briefs/CHPN_Content_Brief.md` as gold-standard structure (TCRN brief lives in the user's parent folder and isn't in the repo). Output: `Content Briefs/{CODE}_Content_Brief.md`.

### Stage 4 — Page content (sub-agent)

Dispatch a sub-agent using `.claude/skills/nursprep-page-builder/stage-prompts/data-file.md`. Inputs: brief, research.json, the Stage 1 catalog values, and `scripts/sanity/legacy/exams/tcrn.js` as the gold-standard structure. Output: `/tmp/nursprep-draft-{code-lowercase}.json` — **outside the repo**; page content is never committed to git.

### Stage 4.5 — Generate card image

Quick, no sub-agent needed. Run from `/tmp/nursprep-work/`:

```bash
node scripts/generate-hero.js --out /tmp /tmp/nursprep-draft-{code-lowercase}.json
test -f /tmp/{code-lowercase}-card.png || (echo "Card generation failed"; exit 1)
```

Fills `scripts/cert-template.svg` with the cert's pass rate / fee / renewal / body and writes a 1200×630 PNG. **If `cairosvg` is missing:** `pip install cairosvg --break-system-packages --quiet`.

### Stage 4b — Upload as a Sanity draft

```bash
node scripts/sanity/upsert-draft.mjs --json /tmp/nursprep-draft-{code-lowercase}.json --image /tmp/{code-lowercase}-card.png
```

Validates the content first (required sections, `sample.q.correct` in range, `keyterms.rows` / `sources.list` shapes; SEO length overruns only warn) and exits non-zero without writing on failure — mark the exam failed and log the errors. On success it prints `DRAFT_ID=…` and the Studio review link; record both in the run log. It never overwrites a draft a human may be editing (an existing `drafts.<id>` of a published exam aborts the run — report it, don't use `--force`). Use `--dry-run` to validate without writing.

### Stage 5 — Build & validate

In the main flow:
- Build **with drafts**, so the new page is rendered: `SANITY_PERSPECTIVE=drafts SANITY_READ_TOKEN="$SANITY_WRITE_TOKEN" npx @11ty/eleventy` from `/tmp/nursprep-work/`. Fail fast on non-zero exit. (A draft missing required fields is skipped with a `[sanity] skipping incomplete draft` warning — treat that warning for this exam as a failure.)
- Verify `_site/certifications/{code}/index.html` exists.
- Run `python3 .claude/skills/nursprep-page-builder/scripts/validate-build.py {CODE}` — checks all 12 section IDs, exactly one JSON-LD block, no rendered `undefined`/`null` strings, minimum size sanity.
- If validation fails, mark this exam failed in pipeline.json and exit. The draft stays unpublished in Sanity (harmless; the next attempt replaces it).

### Stage 6 — Commit

In the main flow (no defensive lock cleanup needed — /tmp has no stale locks):
- `git add Content/{CODE}_research.json "Content Briefs/{CODE}_Content_Brief.md" .skill-state/pipeline.json` — the page itself lives in Sanity, not git.
- Commit message format:
  ```
  Add {CODE} research and brief (Sanity draft ready for review)

  Auto-generated via nursprep-page-builder skill.
  Draft: {DRAFT_ID} — review and publish in https://nursprep.sanity.studio
  Research sources cited in Content/{CODE}_research.json.
  ```

### Stage 7 — Push

- `git push origin staging` — credentials are in the remote URL from clone; no helper needed.
- The push triggers a staging build that renders Sanity drafts, so the page appears at `staging.nursprep.pages.dev/certifications/{code}/` within ~60s. It is **not** on nursprep.com until someone publishes the draft in Studio.
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
- **Structure reference:** read `scripts/sanity/legacy/exams/tcrn.js` in full — gold-standard example of the JSON shape Stage 4 writes. The Sanity schema itself is in `studio-nursprep/schemaTypes/documents/exam.ts`; `scripts/sanity/exam-doc.mjs` maps one to the other.
- `scripts/sanity/upsert-draft.mjs` — validates and uploads a draft (Stage 4b)

## Error handling and observability

- Log every run to `.skill-state/runs/{ISO_TIMESTAMP}.log` in the /tmp clone, then commit it as part of the run.
- Maximum 2 attempts per exam. After 2 failures, the exam stays `failed`; user must investigate.
- Never push if validation failed.
- Never publish a Sanity document; only write `drafts.*` via `upsert-draft.mjs`.
- Never modify exams whose `status` is already `done`.

## When invoked by the hourly scheduled task

The task's prompt instructs you to bootstrap, then process the next pending exam, then exit. Don't ask the user clarifying questions — they're asleep or away.

## When invoked interactively

The user may ask "smoke test", "do NE-BC", or "process the next 3". Process the specific count requested.
