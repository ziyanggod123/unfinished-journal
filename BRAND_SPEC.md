# BRAND_SPEC

## Purpose

This file defines non-negotiable brand guardrails for autonomous loop work on this repository.

## Core Identity

- The site remains a calm, editorial, light-first experience.
- The autonomous loop must preserve the current information architecture and content intent.
- Visual work is out of scope unless explicitly requested by a human.

## Hard Visual Constraints

- Do not redesign the site.
- Do not convert the whole site to dark mode.
- Only the star-road page may use a dark starry presentation.
- All other pages must remain light-first.
- Do not change typography, palette, spacing, animations, or layout patterns unless a human task explicitly authorizes that work.

## Product Constraints

- Do not modify submission logic.
- Do not modify routing behavior.
- Do not modify `localStorage` keys, schemas, or persistence rules.
- Do not add auto-merge from `main` into `loop/staging`.

## Autonomous Loop Scope

- Prefer documentation, scripts, workflow glue, reports, tests, and safe maintenance tasks.
- If a requested change conflicts with this file, stop and record the conflict in `LOOP_REPORT.md`.
