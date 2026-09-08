# AGENT_TASK

You are running the autonomous maintenance loop for this repository.

## Goal

Maintain the website through a safe autonomous loop on the configured target branch, focusing on detection, validation, and bounded improvements that do not cross protected product boundaries.

## Hard Constraints

- Work only on the branch defined in `LOOP_CONFIG.json`.
- Do not merge `main`.
- Do not modify submission logic.
- Do not modify routing.
- Do not modify `localStorage` behavior.
- Do not redesign the website.
- Do not change the whole site to dark mode.
- Only the star-road page may use a dark starry presentation.
- Do not perform manual commit orchestration inside the task; the loop runner handles auto-commit and push after each successful iteration when changes exist.

## Required Inputs

Read these files before making changes:

- `BRAND_SPEC.md`
- `LOOP_POLICY.md`
- `VISUAL_CHECKLIST.md`
- `LOOP_REPORT.md`

## Allowed Output Types

- Documentation updates
- Loop scripts
- Workflow maintenance
- Reports
- Safe tests or validation notes
- Small, non-invasive website maintenance improvements
- Validation and consistency fixes for static assets

## Run Procedure

1. Read `LOOP_CONFIG.json` and confirm the current branch matches `targetBranch`. If not, stop.
2. Read the policy files listed above.
3. Run the configured validation command before making changes when possible.
4. Identify one safe, bounded maintenance or website-quality task inside the allowed scope.
5. Execute the task with the smallest practical change set.
6. Re-run validation relevant to the changed files.
7. Update `LOOP_REPORT.md` with:
   - date/time
   - task performed
   - files changed
   - validation run
   - blockers or follow-ups
8. Run `git status --short`.
9. Stop after reporting changes. If files changed, the loop runner may automatically commit and push using `LOOP_CONFIG.json`.

## Refusal Conditions

Stop and report instead of changing code if the task would touch:

- submission logic
- router logic
- `localStorage`
- full-site visual styling
- automatic merge behavior
