# Gaurav Shukla — Portfolio Website Master Specification

## 01. Product Direction

This portfolio should feel like a **senior mobile engineer's product laboratory**, not a template portfolio and not a generic AI-generated developer landing page.

The visual identity should communicate:

- shipped software
- technical depth
- product thinking
- architecture ownership
- real production constraints
- mobile craftsmanship
- measurable engineering impact

Avoid the common portfolio pattern of:
- giant gradient blobs
- floating 3D laptops
- fake terminal windows
- generic "passionate developer" copy
- skill percentage bars
- excessive neon
- stock developer illustrations
- meaningless particle backgrounds
- repetitive card grids

## 02. Recommended Technology Stack

### Application

**Next.js + TypeScript**

Use the App Router.

### Styling

**Tailwind CSS**

Use CSS variables for the design system rather than hard-coding styles throughout components.

### Animation

**Motion for React**

Use it for:
- page transitions
- scroll-linked reveals
- project transitions
- timeline movement
- subtle navigation state
- image choreography

### Advanced interaction

**GSAP only where Motion is insufficient**

Use GSAP selectively for:
- pinned case-study sequences
- horizontal project galleries
- scroll-controlled device transitions

Do not use both libraries for the same animation.

### 3D

Do **not** make 3D a default dependency.

Use **Three.js / React Three Fiber only if a real product visual benefits from it**.

The portfolio should remain fast without 3D.

### Icons

**Lucide React**

Use icons sparingly.

### Content

Markdown / MDX content files.

Suggested structure:

```text
content/
  pages/
  projects/
  experience/
  apps/
  admin-panels/
```

### Images

Use:
- Next/Image
- WebP or AVIF
- responsive image sizes
- lazy loading
- explicit dimensions

### Forms

Use:
- React Hook Form
- Zod

Contact delivery can use a transactional email provider or a small server endpoint.

### Analytics

Use a privacy-conscious analytics platform or lightweight event tracking.

Track:
- CV download
- project view
- Play Store click
- admin panel click
- contact submission

### Deployment

Recommended:

**Vercel**

### Source control

**GitHub**

### CI/CD

GitHub Actions.

## 03. Site Architecture

```text
/
├── Home
├── Experience
├── Projects
│   ├── Project List
│   └── Project Details
├── Apps
├── Admin Panels
├── Engineering
├── Resume
└── Contact
```

## 04. Visual System

### Background

Use a deep neutral background.

Instead of a flat black background, create depth through:
- subtle noise
- fine grid lines
- section-specific lighting
- image contrast
- large empty space

### Accent

Use one restrained accent.

The accent should communicate interaction rather than decorate the entire page.

### Typography

Recommended:
- Geist or Inter for UI
- Geist Mono or JetBrains Mono for technical labels

### Type scale

Hero:
`clamp(3.5rem, 8vw, 8rem)`

Section:
`clamp(2.25rem, 4vw, 4.5rem)`

Body:
`1rem–1.25rem`

Do not overuse uppercase text.

## 05. Signature Interaction System

The site should have **three recognizable interactions**.

### Interaction A — "Build Line"

A thin animated line travels through the page as the user scrolls.

It connects:
- experience
- projects
- engineering
- contact

This becomes the visual metaphor for a career/product pipeline.

### Interaction B — "Device Stage"

Featured mobile projects are shown as a sequence of real screenshots inside device frames.

As the user scrolls:
- the current device rotates slightly
- screenshot changes
- project metadata changes
- technology tags move with the project

Do not use fake app screens.

### Interaction C — "Engineering Signal"

Small technical labels appear near sections:

```text
REAL-TIME
10K+ CONCURRENT

CI/CD
2 DAYS → 4 HOURS

RELIABILITY
92% → 99.1%
```

They animate in like measurement readouts.

## 06. Motion Principles

Animation should answer one of these questions:

1. What is changing?
2. Where should I look?
3. What relationship exists between these elements?
4. What result was achieved?

If animation answers none of these, remove it.

### Timing

- micro interaction: 150–250ms
- component reveal: 350–600ms
- major sequence: 700–1200ms

### Easing

Use smooth, restrained easing.

Avoid:
- bounce everywhere
- elastic text
- constant rotation
- infinite loops

## 07. Accessibility

- keyboard accessible
- visible focus
- semantic headings
- reduced-motion mode
- descriptive image alt text
- accessible forms
- no interaction dependent only on hover

## 08. Performance

Targets:
- excellent Core Web Vitals
- optimized images
- minimal client-side JavaScript
- server-rendered content where possible
- lazy-loaded project galleries
- font subsetting
- no unnecessary 3D

## 09. Responsive Strategy

### Desktop

Editorial layout:
- large type
- asymmetric project compositions
- large screenshot stages

### Tablet

Reduce:
- visual overlap
- animation distance
- multi-column density

### Mobile

Prioritize:
- content
- screenshots
- CV CTA
- project navigation

Use a persistent bottom action:

**Download CV**

## 10. Navigation

Desktop:

```text
GAURAV SHUKLA

Experience   Projects   Apps   Engineering

                         Download CV
```

On scroll:
- navigation becomes compact
- background gains opacity
- active section appears as a small indicator

## 11. Footer

```text
GAURAV SHUKLA

Senior Mobile Application Engineer

Android · Flutter · iOS
Real-Time · AI · IoT

LinkedIn
GitHub
Email

© 2026 Gaurav Shukla
```
