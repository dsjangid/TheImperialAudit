# The Imperial Audit — Technical Architecture

## Overview
Next.js 14 App Router project statically exported (`output: 'export'`) for hosting on GitHub Pages under `/TheImperialAudit`.

## Routing Model
- `/` — Static cover redirect
- `/en` — Primary English interactive monograph
- `/en/chapters/*` — Six thematic investigation chapters
- `/en/records/[id]` — Dedicated archival primary source detail pages (13 records)
- `/records/[id]` — Root fallback routes for static export compliance

## Design Principles
- Strict minimalism: no heavy card containers or gratuitous borders
- Typographic hierarchy using system serif and monospace rules
- Zero intrusive animations; native OS laptop cursor
- Multilingual selector supporting English (`en`), Bengali (`bn`), and Hindi (`hi`)
