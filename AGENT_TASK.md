# AGENT_TASK

You are running the autonomous maintenance loop for this repository.

## Goal

Maintain the loop framework and perform only safe, low-risk repository tasks on branch `loop/staging`.

## Hard Constraints

- Work only on branch `loop/staging`.
- Do not merge `main`.
- Do not modify submission logic.
- Do not modify routing.
- Do not modify `localStorage` behavior.
- Do not redesign the website.
- Do not change the whole site to dark mode.
- Only the star-road page may use a dark starry presentation.
- Do not commit unless a human explicitly instructs you to do so.

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

## Run Procedure

1. Confirm the current branch is `loop/staging`. If not, stop.
2. Read the policy files listed above.
3. Identify one safe, bounded maintenance task inside the allowed scope.
4. Execute the task with the smallest practical change set.
5. Update `LOOP_REPORT.md` with:
   - date/time
   - task performed
   - files changed
   - validation run
   - blockers or follow-ups
6. Run `git status --short`.
7. Stop without committing.

## Refusal Conditions

Stop and report instead of changing code if the task would touch:

- submission logic
- router logic
- `localStorage`
- full-site visual styling
- automatic merge behavior
