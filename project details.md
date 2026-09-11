# Project Details Page — Complete Specification

## Route

`/projects/[slug]`

## Purpose

This is where the portfolio proves engineering depth.

A project detail page must answer:

- What was the product?
- What did Gaurav do?
- What was technically difficult?
- How was it solved?
- What was the outcome?

---

# Universal Project Layout

## 01. Hero

```text
CATEGORY

PROJECT NAME

One-sentence product description.

[Google Play]
[Live product]
```

Large real screenshot/device composition.

---

# 02. Project Facts

Use a compact facts rail:

```text
ROLE
PLATFORM
TECHNOLOGY
INDUSTRY
SCALE
```

Never display an unknown field.

---

# 03. Context

### Heading

# The product

Explain the product in plain language.

---

# 04. My Role

### Heading

# What I worked on

Clearly distinguish personal responsibility from team-level product work.

---

# 05. Challenge

### Heading

# The engineering problem

Describe the difficult part.

---

# 06. Solution

### Heading

# How it was built

Show architecture only when supported.

Example:

```text
UI
 ↓
State
 ↓
Domain
 ↓
Repository
 ↓
REST / Real-Time
```

Add a note:

`Representative architecture diagram — exact architecture varies by project.`

---

# 07. Technical Decisions

Use expandable rows:

### Why this state-management approach?

### Why this communication layer?

### How was reliability handled?

### What changed after implementation?

Do not fabricate answers.

---

# 08. Results

Use large numbers only when verified.

Example:

```text
50K+
MAU

10K+
CONCURRENT

35%
FASTER FEATURE DELIVERY
```

---

# 09. Screenshots

Use a real screenshot gallery.

Layout:

```text
large
large
small small
large
```

Do not crop away important UI.

---

# 10. Technology Strip

Example:

`Flutter` `Kotlin` `BLoC/Cubit` `WebRTC`

Only use project-specific verified technologies.

---

# 11. Links

Buttons:

- Google Play
- Website
- Admin
- Company

Hide empty buttons.

---

# 12. Next Project

At bottom:

```text
NEXT PROJECT

Project Name
→
```

---

# Major Case Study A — Real-Money Gaming

## Hero

**Real-Money Gaming Platform**

Production gaming platform architected with Kotlin and Flutter.

### Core features

- live multiplayer
- wallet transactions
- leaderboards

### Scale

50K+ MAU

### Performance target

Sub-100ms latency target

Important:
Do not phrase the latency target as a measured result unless separately verified.

### Suggested case-study flow

```text
Product
↓
Multiplayer requirements
↓
Real-time state
↓
Wallet/transaction flows
↓
Leaderboard synchronization
↓
Production scale
```

---

# Major Case Study B — Matrimony

## Hero

**Matrimony Application**

A Flutter rebuild using a multi-module architecture and BLoC/Cubit.

### Communication

- Agora
- WebRTC

### Feature

Video calling

### Scale

10K+ concurrent users

### Result

35% faster feature time-to-market

### Visual sequence

Scroll:

1. old/product context if legally usable
2. architecture
3. module separation
4. video calling
5. production screenshots
6. scale metric

---

# Major Case Study C — Ekal Acharya

## Hero

**Ekal Acharya**

Production education application within the Ekal Vidyalaya ecosystem.

### Metric

100K+ downloads

### Case-study structure

- product context
- role
- engineering
- app workflow
- production screenshots
- result
- Google Play

Do not invent internal NGO workflows.

---

# Major Case Study D — DriverGill

## Hero

**DriverGill**

On-demand driver platform.

### Known project context from CV

- on-demand application work
- Razorpay

The CV's cab-booking experience separately mentions:
- Google Maps SDK
- WebSocket live driver tracking
- surge pricing
- Razorpay

Only connect all four technologies to DriverGill if the project history confirms that they belong to the same implementation.

### Admin

`https://admin.drivergill.com/`

---

# Major Case Study E — SnapVisionary

## Hero

**SnapVisionary**

AI-powered photo application.

### Portfolio emphasis

- product experience
- mobile image workflow
- AI integration
- production shipping

Do not name a specific AI model unless verified.

---

# Project Detail Animation System

## Scroll choreography

At the start:
- title fixed
- screenshot moves slowly

As the user scrolls:
- project facts slide upward
- screenshot remains partially pinned
- technical labels appear around it

At the end:
- screenshot exits
- next section expands

Respect reduced-motion preferences.

---

# Project Asset Rules

The screenshot pipeline must output only actual product assets.

Correct:

```text
project/
  icon/
  feature/
  screenshots/
```

Incorrect:

```text
rating badge
share icon
upload icon
age rating
Google Play UI
random recommended images
```
