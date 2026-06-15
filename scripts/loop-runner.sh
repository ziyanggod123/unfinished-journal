#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

branch="$(git branch --show-current)"
if [[ "$branch" != "loop/staging" ]]; then
  echo "loop-runner must run on branch 'loop/staging'. Current branch: '$branch'." >&2
  exit 1
fi

if ! command -v codex >/dev/null 2>&1; then
  echo "The 'codex' CLI was not found in PATH." >&2
  exit 1
fi

required_files=(
  "AGENT_TASK.md"
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

codex exec --full-auto AGENT_TASK.md
