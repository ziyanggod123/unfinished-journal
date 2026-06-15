$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

$branch = (git branch --show-current).Trim()
if ($branch -ne "loop/staging") {
  Write-Error "loop-runner must run on branch 'loop/staging'. Current branch: '$branch'."
}

if (-not (Get-Command codex -ErrorAction SilentlyContinue)) {
  Write-Error "The 'codex' CLI was not found in PATH."
}

$requiredFiles = @(
  "AGENT_TASK.md",
  "BRAND_SPEC.md",
  "LOOP_POLICY.md",
  "VISUAL_CHECKLIST.md",
  "LOOP_REPORT.md"
)

$missingFiles = $requiredFiles | Where-Object { -not (Test-Path $_) }
if ($missingFiles.Count -gt 0) {
  Write-Error ("Missing required loop file(s): " + ($missingFiles -join ", "))
}

codex exec --full-auto AGENT_TASK.md
