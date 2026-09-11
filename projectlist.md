# Project List Page — Complete Specification

## Route

`/projects`

## Page Purpose

This page is the portfolio's product archive.

It should feel like browsing a **software portfolio**, not a résumé.

---

# Header

Eyebrow:

`SELECTED PRODUCTION WORK`

Heading:

# Products, systems and applications.

Intro:

A selection of mobile products I've built, shipped, maintained or architected across gaming, education, healthcare, on-demand services, AI and business software.

---

# Filter System

Desktop:

```text
ALL
ANDROID
FLUTTER
REAL-TIME
AI
EDUCATION
GAMING
HEALTHCARE
ON-DEMAND
BUSINESS
```

Mobile:

Horizontal scrollable chips.

---

# Project Card

Each card contains:

1. project number
2. real product icon
3. real screenshot
4. project name
5. category
6. one-line summary
7. technology tags
8. verified metric
9. case-study CTA
10. external link when available

---

# Featured Projects

## 01 — Real-Money Gaming Platform

Category:
`Gaming · Real-Time · Transactions`

Description:

A production real-money gaming platform architected using Kotlin and Flutter, with live multiplayer, wallet transactions and leaderboards.

Metric:

`50K+ MAU`

Technical tags:

`Kotlin`
`Flutter`
`Real-Time`

CTA:

`View case study`

---

## 02 — Ekal Acharya

Category:
`Education`

Description:

A production mobile application within the Ekal Vidyalaya rural-education ecosystem.

Metric:

`100K+ downloads`

CTA:

`View case study`

---

## 03 — DriverGill

Category:
`On-Demand · Mobility`

Description:

An on-demand driver platform with mobile workflows, payment integration and operational tooling.

Known external admin:

`https://admin.drivergill.com/`

CTA:

`View case study`

---

## 04 — Matrimony Application

Category:
`Matrimony · Real-Time · Video`

Description:

A Flutter rebuild using multi-module architecture and BLoC/Cubit, with video calling using Agora and WebRTC.

Metrics:

`10K+ concurrent users`
`35% faster feature time-to-market`

---

## 05 — SnapVisionary

Category:
`AI · Photo`

Description:

An AI-powered photo application shipped as a production mobile product.

---

## 06 — FILEkavach

Category:
`Utility · File Security`

Description:

A production file-focused mobile application.

Asset rule:

Use only actual:
- app icon
- feature graphic
- screenshots

Never use Play Store interface assets.

---

## 07 — Caring Patient

Category:
`Healthcare`

Show together with:

`Caregiver`

Treat as an ecosystem if their relationship is confirmed.

---

## 08 — AAG

Category:
`Gaming`

Related:

`AAG Veer`

---

## 09 — SalarySlip

Category:
`Business · HR`

Apps:
- SalarySlip Employee
- SalarySlip Employer

---

## 10 — Garment Factory

Category:
`Business · Operations`

Only publish detailed feature claims after confirming actual contribution.

---

## 11 — Spin Cycle / Laundrology

Category:
`Laundry · On-Demand`

Present as a product group.

Detailed claims require project confirmation.

---

# Project List Animation

Do not animate every card independently.

Use a **single visual cursor/line** moving through the list.

When a card becomes active:

- image grows from 0.96 → 1
- metadata fades in
- project number moves 8px
- technical signal appears

When leaving:

- reverse gently

---

# Project Detail CTA

Every card:

`Open project →`

Secondary:

`Google Play ↗`

Only show Google Play when a verified link exists.
