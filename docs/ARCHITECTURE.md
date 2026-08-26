# System Architecture and Design Specifications

This document outlines the technical design, architectural principles, and component hierarchy of The Imperial Audit digital publication.

---

## 1. Architectural Principles

The application is engineered around three foundational requirements:

1. **Academic Durability**: Content is structured in deterministic TypeScript models and static React Server Components to ensure permanent archival access without dependence on external content management systems.
2. **Design System Fidelity**: Strict adherence to a dual-font editorial design system (Source Serif 4 and JetBrains Mono) with high-contrast monochrome imagery and signal vermilion highlights.
3. **Optimized Performance**: Zero runtime layout shift, optimized variable font loading, and pre-rendered static paths yielding sub-millisecond route transitions.

---

## 2. Technology Stack

* **Core Framework**: Next.js 14 (App Router)
* **Language Runtime**: Node.js 18+ / 20+ with TypeScript 5.6
* **Styling Layer**: Tailwind CSS 3.4
* **Typography Engine**: Variable Optical Sizing via Google Fonts (`Source Serif 4` and `JetBrains Mono`)
* **Component Primitives**: Custom unstyled accessible components with Lucide icons

---

## 3. Visual Tokens and Design Constraints

| Design Token | CSS Variable | Hex Value | Purpose |
| :--- | :--- | :--- | :--- |
| **Background** | `--background` | `#0A0A0A` | Deep obsidian canvas |
| **Foreground Text** | `--text` | `#F2F2F2` | High-legibility editorial text |
| **Signal Accent** | `--accent` | `#FF0000` | Critical historical emphasis and metadata |
| **Border Muted** | `border-text/10` | `rgba(242, 242, 242, 0.10)` | Structural layout boundaries |
| **Border Active** | `border-text/30` | `rgba(242, 242, 242, 0.30)` | Interactive focus states |

### Image Processing Pipeline
Historical archival photography is displayed without borders or cards, simulating authentic early-twentieth-century newspaper cutlines:
```css
filter: grayscale(100%) contrast(1.12) brightness(0.93);
```

---

## 4. Component Structure

* **`Navbar.tsx`**: Global fixed navigation bar maintaining active state across all five historical dispatches with automatic route matching.
* **`PageCornerBadges.tsx`**: Fixed archival dossier badge and real-time scroll progress indicator.
* **`LiveSpendCounter.tsx`**: Client-side reactive econometric counter modeling the compounded rate of historical wealth transfer based on the Patnaik (2018) macroeconomic dataset.
* **`LiveClock.tsx`**: Tabular-figure elapsed time reader formatted in JetBrains Mono.
* **`EyeIllustration.tsx`**: High-precision vector transition element linking sections.

---

## 5. Route Tree and Page Hierarchy

```
/ (Root Redirect / Landing)
└── /en (English Primary Masthead & Table of Contents)
    ├── /chapters/timer       -> Part I: The Corporate Takeover (1757–1857)
    ├── /chapters/comparison  -> Part II: The Great Rupture (1857–1858)
    ├── /chapters/dossiers    -> Part III: The Actors of Empire & Resistance
    ├── /chapters/share       -> Part IV: Ten Minutes in Amritsar (1919)
    └── /chapters/action      -> Part V: The Subcontinental Corpus & Regional Atlas
```
