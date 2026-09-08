$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

$config = Get-Content -Raw "LOOP_CONFIG.json" | ConvertFrom-Json
$targetBranch = [string]$config.targetBranch
$taskFile = [string]$config.taskFile
$validationCommand = [string]$config.validationCommand
$commitMessage = [string]$config.autoCommitMessage
$pushRemote = [string]$config.autoPushRemote
$pushBranch = [string]$config.autoPushBranch

$branch = (git branch --show-current).Trim()
if ($branch -ne $targetBranch) {
  Write-Error "loop-runner must run on branch '$targetBranch'. Current branch: '$branch'."
}

if (-not (Get-Command codex -ErrorAction SilentlyContinue)) {
  Write-Error "The 'codex' CLI was not found in PATH."
}

$requiredFiles = @(
  "LOOP_CONFIG.json",
  $taskFile,
  "BRAND_SPEC.md",
  "LOOP_POLICY.md",
  "VISUAL_CHECKLIST.md",
  "LOOP_REPORT.md"
)

$missingFiles = $requiredFiles | Where-Object { -not (Test-Path $_) }
if ($missingFiles.Count -gt 0) {
  Write-Error ("Missing required loop file(s): " + ($missingFiles -join ", "))
}

if ($validationCommand) {
  Invoke-Expression $validationCommand
}

codex exec --full-auto $taskFile

if ($validationCommand) {
  Invoke-Expression $validationCommand
}

$hasDiff = $false

git diff --quiet -- . 2>$null
if ($LASTEXITCODE -eq 1) {
  $hasDiff = $true
} elseif ($LASTEXITCODE -gt 1) {
  Write-Error "Failed to inspect tracked git diff after codex run."
}

$untrackedFiles = git ls-files --others --exclude-standard
if ($untrackedFiles) {
  $hasDiff = $true
}

if (-not $hasDiff) {
  Write-Host "No git diff detected after codex run. Skipping auto-commit and push."
  exit 0
}

git add .
git commit -m $commitMessage
git push $pushRemote $pushBranch
