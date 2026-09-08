#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

target_branch="$(node -p "require('./LOOP_CONFIG.json').targetBranch")"
task_file="$(node -p "require('./LOOP_CONFIG.json').taskFile")"
validation_command="$(node -p "require('./LOOP_CONFIG.json').validationCommand")"
commit_message="$(node -p "require('./LOOP_CONFIG.json').autoCommitMessage")"
push_remote="$(node -p "require('./LOOP_CONFIG.json').autoPushRemote")"
push_branch="$(node -p "require('./LOOP_CONFIG.json').autoPushBranch")"

branch="$(git branch --show-current)"
if [[ "$branch" != "$target_branch" ]]; then
  echo "loop-runner must run on branch '$target_branch'. Current branch: '$branch'." >&2
  exit 1
fi

if ! command -v codex >/dev/null 2>&1; then
  echo "The 'codex' CLI was not found in PATH." >&2
  exit 1
fi

required_files=(
  "LOOP_CONFIG.json"
  "$task_file"
  "BRAND_SPEC.md"
  "LOOP_POLICY.md"
  "VISUAL_CHECKLIST.md"
  "LOOP_REPORT.md"
)

missing_files=()
for file in "${required_files[@]}"; do
  if [[ ! -f "$file" ]]; then
    missing_files+=("$file")
  fi
done

if (( ${#missing_files[@]} > 0 )); then
  printf "Missing required loop file(s): %s\n" "${missing_files[*]}" >&2
  exit 1
fi

if [[ -n "$validation_command" ]]; then
  eval "$validation_command"
fi

codex exec --full-auto "$task_file"

if [[ -n "$validation_command" ]]; then
  eval "$validation_command"
fi

has_diff=0
if ! git diff --quiet -- . 2>/dev/null; then
  has_diff=1
fi

if [[ -n "$(git ls-files --others --exclude-standard)" ]]; then
  has_diff=1
fi

if [[ "$has_diff" -eq 0 ]]; then
  echo "No git diff detected after codex run. Skipping auto-commit and push."
  exit 0
fi

git add .
git commit -m "$commit_message"
git push "$push_remote" "$push_branch"
