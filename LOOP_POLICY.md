# LOOP_POLICY

## Branch Policy

- Autonomous loop work is allowed only on `loop/staging`.
- If the current branch is not `loop/staging`, the loop must stop with a non-zero exit code.
- The loop must not create commits automatically unless a human explicitly changes this policy later.
- The loop must not merge `main` automatically.

## Execution Contract

- The runner executes `AGENT_TASK.md` through `codex exec --full-auto`.
- The loop should update `LOOP_REPORT.md` during or after each run.
- The loop should favor small, reversible changes.

## Protected Areas

- Do not change submission behavior.
- Do not change route definitions or page-switching behavior.
- Do not change any `localStorage` read/write logic.
- Do not broaden dark mode beyond the star-road page.
- Do not perform visual refresh work unless a human explicitly asks for it.

## Allowed Work

- Add or update docs for loop governance.
- Add or update runner scripts.
- Add or update CI workflow files.
- Add reports, checklists, and operational notes.
- Make non-invasive maintenance changes that do not cross the protected areas above.

## Escalation

- If the loop detects conflicts, blocked commands, or ambiguous instructions, it should log the issue in `LOOP_REPORT.md` and stop instead of guessing.
