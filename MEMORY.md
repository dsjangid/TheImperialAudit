# Project Memory: The Imperial Audit (1757–1947)

**Document Created:** 2026-11-03  
**Repository:** `git@github.com:dsjangid/TheImperialAudit.git`  
**Branch:** `main`  
**Framework:** Next.js 14 (App Router, Static HTML Export `output: 'export'`)  

---

## 1. Executive Summary of Work Accomplished

Today's work centered on transforming **The Imperial Audit** from an experimental interactive draft into a rigorous, production-grade, minimalist historical monograph and declassified archival repository. 

Key achievements include:
1. **Elimination of Visual Clutter & AI Slop**: Removed heavy boxes, floating corner badges, custom cursor overrides, decorative eye animations, and emojis in favor of strict Swiss-inspired editorial typography, thin hairline dividers (`#2A2A2A`), and high-contrast archival typography.
2. **Dedicated Archival Record Pages**: Replaced popup modals with 13 full, SEO-optimized standalone static pages (`/records/[id]` and `/en/records/[id]`) complete with accession shelfmarks, verified external archival links (British Library / National Archives), unredacted transcriptions, and JSON-LD schema metadata.
3. **Reactive Multilingual System (EN / BN / HI)**: Built a lightweight, client-side reactive language switching architecture supporting English (`en`), Bangla (`bn`), and Hindi (`hi`) with `localStorage` persistence and instant component re-rendering.
4. **Mobile Typography & Layout Polish**: Calibrated fluid font sizes (`clamp()`), spacing, and padding to provide optimal reading cadence across phone, tablet, and desktop screens without breaking desktop styling.
5. **Git Architecture & 83 Structured Commits**: Authored and pushed 83 thematic, semantic commits documenting every dataset, test, style refactor, and component addition to GitHub `main`.
6. **Zero-Error Build & Static Export**: Resolved all Next.js cache artifacts (`./819.js`), TypeScript interface discrepancies (`RecordPageProps`), and validated that all 67 static routes compile cleanly (`npm run build`).

---

## 2. Core Architectural & Code Changes

### A. Reactive Internationalization (i18n)
- **`src/context/LanguageContext.tsx`**:
  - Context provider managing `language` state (`'en' | 'bn' | 'hi'`).
  - Automatically loads and synchronizes with `localStorage.getItem('imperial_audit_lang')` and `document.documentElement.lang`.
  - Exposes `language`, `setLanguage`, and typed `dict` translation dictionary.
- **`src/locales/translations.ts`**:
  - Bundles translation keys from `src/locales/{en,bn,hi}/` (`common.json`, `chapters.json`, `archive.json`) and `cover` narrative strings.
  - Ensures zero external runtime HTTP requests for dictionary fetching during static hosting on GitHub Pages.
- **`src/components/LanguageSelector.tsx`**:
  - Clean inline text switcher: `EN / BN / HI`.
  - Placed immediately to the left of the Night Light toggle in the top navbar.
  - Minimal underline indicator for active language.
- **Components Wired to `useLanguage()`**:
  - `Navbar.tsx`: Tagline, drawer header (`[ CLOSE × ]`), and chapter list titles with native Bengali (`০, ১, ২...`) and Devanagari numerals.
  - `CoverInteractive.tsx`: Editorial thesis, provenance metadata, $45T benchmark cards, section headings (*The Five Dispatches*, *Document of the Record*, *The Analytical Suite*, *Archival Portraits*), and call-to-action buttons.
  - `RecordDetailView.tsx`: Back button, repository labels, transcription header, provenance, and verification links.
  - `SearchableArchive.tsx`, `DocumentOfTheRecord.tsx`, `AuditFigureModal.tsx`: Search inputs, buttons, and drawer dialogs.

### B. Standalone Archival Record Architecture
- **Route Handlers**:
  - `src/app/en/records/[id]/page.tsx`
  - `src/app/records/[id]/page.tsx`
  - Both export `generateStaticParams()` dynamically matching all 13 primary document records in `src/data/primary-documents.ts`.
- **`src/components/RecordDetailView.tsx`**:
  - Dedicated full-width reader layout replacing popup drawers.
  - Accession metadata grid (Shelfmark, Repository, Collection Series, Accession Reference).
  - Unredacted primary transcription blockquote with accent border.
  - Dual-column historical context and systemic historiographical significance.
  - Outbound external verification links to original institutions (British Library IOR, Kew National Archives).
  - Cross-chapter navigation to corresponding long-form monograph dispatches.
- **`src/lib/schema-generator.ts`**:
  - Injects `HistoricalDocument` JSON-LD Schema.org metadata for rich search indexing.

### C. Design & Minimalism Refactoring
- **Restored Native OS Pointer**: Purged custom cursor styles and script listeners from CSS.
- **Removed Box Containers**: Eliminated card borders and backgrounds from hero cards, metric sections, and interactive tools; replaced with subtle typographic dividers (`border-b border-[#2A2A2A]`).
- **Navbar Streamlining**:
  - Removed explicit text `[ INDEX ]`.
  - Added minimalist 3-bar SVG trigger for the navigation drawer.
  - Integrated inline `EN / BN / HI` selector beside Night Light toggle.
  - Added responsive display (`hidden md:block`) for secondary subtitle to maintain desktop dignity and mobile lightness.
- **Removed Gimmicks**: Removed floating corner badges and decorative eye illustration with "open the case" trigger.
- **Color Discipline**: Enforced dark canvas `#0A0A0A`, text `#F5F5F0`, muted gray `#A3A39D`, and accent `#C62828` / `#E53935`.

### D. Mobile Responsiveness Tuning
- Calibrated fluid heading sizes using `clamp(32px, 7.8vw, 112px)`.
- Balanced grid columns on small displays (`col-span-12` stacked neatly on mobile, multi-column on `lg:`).
- Refined padding across the viewport (`px-4 sm:px-8 md:px-12 lg:px-20`).
- Prevented horizontal overflow on mobile screens in data tables and interactive modules.

---

## 3. Bug Fixes & Diagnostics Resolved

1. **Next.js Webpack Cache Collision (`./819.js`)**:
   - *Issue:* Stale pre-compiled Webpack chunk in `.next/server/webpack-runtime.js` during dev server hot reloading.
   - *Resolution:* Purged `.next` build cache and re-triggered clean compilation.
2. **Missing `RecordPageProps` Interface**:
   - *Issue:* TypeScript error `Cannot find name 'RecordPageProps'` during GitHub Actions build.
   - *Resolution:* Explicitly defined `interface RecordPageProps { params: { id: string } }` in both `src/app/en/records/[id]/page.tsx` and `src/app/records/[id]/page.tsx`.
3. **Property Mismatch in `schema-generator.ts`**:
   - *Issue:* `PrimaryDocument` accessed `quote` instead of `excerpt`, and `shelfmark` instead of `archiveRef`.
   - *Resolution:* Aligned schema generator property accessors with `PrimaryDocument` interface definition.
4. **ReferenceError `lang is not defined`**:
   - *Issue:* `Navbar.tsx` had an unresolved `lang` variable reference when constructing the root link.
   - *Resolution:* Destructured `language` from `useLanguage()` and used `language === 'en' ? '/en' : '/'`.

---

## 4. Verification & Testing Status

| Verification Step | Status | Details |
|---|---|---|
| **TypeScript Validation** | Passed (`code 0`) | `npx tsc --noEmit` reports 0 errors across all 70+ files. |
| **Next.js Static Build** | Passed (`code 0`) | `npm run build` generated all 67 static pages (`/`, `/en`, `/records/*`, `/chapters/*`). |
| **Dev Server HTTP Health** | Passed (`200 OK`) | `GET http://localhost:3000/TheImperialAudit/en/` returns HTTP 200. |
| **GitHub Deployment** | Pushed to `main` | Commit `4e3cdb5` verified on `git@github.com:dsjangid/TheImperialAudit.git`. |

---

## 5. File Structure Reference

```
The-Imperial-Audit/
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout with LanguageProvider & NightLightProvider
│   │   ├── page.tsx                  # Root redirect / landing
│   │   ├── en/                       # English route tree
│   │   │   ├── page.tsx              # English cover page
│   │   │   └── records/[id]/page.tsx # Standalone primary document route
│   │   └── records/[id]/page.tsx     # Static root fallback record route
│   ├── components/
│   │   ├── CoverInteractive.tsx      # Main 6-act monograph landing component
│   │   ├── Navbar.tsx                # Top navigation header & slide-in index drawer
│   │   ├── LanguageSelector.tsx      # Inline EN / BN / HI switcher
│   │   ├── RecordDetailView.tsx      # Standalone archival document reader
│   │   ├── SearchableArchive.tsx     # Primary document search & filter interface
│   │   ├── DocumentOfTheRecord.tsx   # Archival spotlight card
│   │   ├── AuditFigureModal.tsx      # $45 Trillion methodology examination modal
│   │   └── LiveSpendCounter.tsx      # Compound drain counter display
│   ├── context/
│   │   ├── LanguageContext.tsx       # React context for reactive i18n
│   │   └── NightLightContext.tsx     # Amber eye-comfort reading mode
│   ├── data/
│   │   ├── primary-documents.ts      # 13 verified archival documents & shelfmarks
│   │   └── econometric-datasets/     # Trade, famine mortality, and drain calculations
│   └── locales/
│       ├── translations.ts           # Central dictionary aggregator
│       ├── en/                       # English dictionaries
│       ├── bn/                       # Bangla dictionaries
│       └── hi/                       # Hindi dictionaries
├── docs/                             # Architecture, methodology, and changelog records
├── scripts/                          # Automated verification and linting test scripts
└── MEMORY.md                         # This project memory log
```

---

## 6. Guidelines for Future Maintenance
- **Adding New Primary Documents**: Add entry to `src/data/primary-documents.ts` with shelfmark, repository, excerpt, and external verification URL. Both `/records/[id]` and `/en/records/[id]` will automatically generate static pages on the next build.
- **Updating Translations**: Add corresponding string pairs across `src/locales/en/`, `src/locales/bn/`, and `src/locales/hi/`. If adding cover-level narrative copy, update `src/locales/translations.ts`.
- **Maintaining Minimalism**: Avoid introducing colored box cards, heavy drop shadows, or decorative borders. Retain hairline `#2A2A2A` divider borders and high-contrast typography.
