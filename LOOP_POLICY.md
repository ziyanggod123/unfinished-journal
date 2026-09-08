# LOOP_POLICY

## Branch Policy

- Autonomous loop work is allowed only on the branch configured in `LOOP_CONFIG.json`.
- If the current branch does not match `targetBranch` from `LOOP_CONFIG.json`, the loop must stop with a non-zero exit code.
- After a successful loop iteration, if the working tree has a git diff, the runner must automatically run `git add .`, create the configured commit message, and push to the configured remote and branch.
- The loop must not merge `main` automatically.

## Execution Contract

- The runner executes the configured task file through `codex exec --full-auto`.
- The loop should update `LOOP_REPORT.md` during or after each run.
- The loop should favor small, reversible changes.
- Automatic commit/push behavior applies only after codex exec exits successfully and only when tracked or untracked file changes exist.
- The loop should run the configured validation command before and after changes when the command is available.

## Protected Areas

- Do not change submission behavior.
- Do not change route definitions or page-switching behavior.
- Do not change any `localStorage` read/write logic.
- Do not broaden dark mode beyond the star-road page.
- Do not perform visual refresh work unless a human explicitly asks for it.
- Do not merge, rebase, or otherwise integrate `main` into the target branch automatically.

## Allowed Work

- Add or update docs for loop governance.
- Add or update runner scripts.
- Add or update CI workflow files.
- Add reports, checklists, and operational notes.
- Make non-invasive maintenance changes that do not cross the protected areas above.
- Fix static asset drift, broken references, validation failures, and other low-risk website-quality issues.

## Escalation

- If the loop detects conflicts, blocked commands, or ambiguous instructions, it should log the issue in `LOOP_REPORT.md` and stop instead of guessing.
