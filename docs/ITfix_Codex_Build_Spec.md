# ITfix Codex Build Specification

Version: 1.0

Purpose:

This document instructs Codex, Cursor Agent, Claude Code, OpenClaw, or any autonomous software engineering agent how to build the ITfix platform.

---

# Project Goal

Build a production-ready lead generation website for ITfix.

Primary objective:

Generate qualified leads from homeowners and small businesses.

Secondary objectives:

- Establish trust
- Support local SEO
- Scale into a customer platform

---

# Technology Stack

Frontend:

- Next.js 15+
- TypeScript
- TailwindCSS

Backend:

- Next.js API Routes

Database:

- PostgreSQL
- Supabase preferred

Deployment:

- Vercel
- Cloudflare

---

# Development Phases

## Phase 1

Project Bootstrap

Tasks:

- Create Next.js application
- Configure TypeScript
- Configure Tailwind
- Configure ESLint
- Configure Prettier

Deliverables:

Working application skeleton.

---

## Phase 2

Core Layout

Tasks:

- Header
- Footer
- Navigation
- Mobile menu
- Layout system

Deliverables:

Responsive layout.

---

## Phase 3

Homepage

Sections:

- Hero
- Services
- Common Problems
- Why ITfix
- Pricing
- Service Area
- FAQ
- Contact CTA

Deliverables:

Fully responsive homepage.

---

## Phase 4

Services Pages

Create:

/services/computer-repair

/services/windows-reinstall

/services/virus-removal

/services/wifi

/services/networking

/services/cameras

/services/smart-home

/services/ethernet

Deliverables:

SEO-ready service pages.

---

## Phase 5

Lead Generation

Create:

- Contact Form
- Quote Request Form

Required Fields:

- Name
- Phone
- Email
- City
- Service
- Description

Optional:

- Photos

Deliverables:

Functional lead collection.

---

## Phase 6

Database Integration

Create:

Tables:

- leads
- quotes
- testimonials

Deliverables:

Persistent storage.

---

## Phase 7

SEO

Implement:

- Metadata
- OpenGraph
- Structured Data
- Sitemap
- Robots.txt

Deliverables:

SEO-ready website.

---

## Phase 8

Analytics

Install:

- Google Analytics
- Search Console
- Microsoft Clarity

Deliverables:

Tracking enabled.

---

## Phase 9

Testing

Requirements:

- Mobile testing
- Desktop testing
- Form testing
- SEO testing

Deliverables:

Production readiness report.

---

## Phase 10

Production Deployment

Deploy:

- Vercel
- Cloudflare

Deliverables:

Public website.

---

# Coding Standards

Requirements:

- Strong typing
- Reusable components
- No duplicated code
- Responsive design
- Accessibility compliance

---

# Acceptance Criteria

Project is complete when:

- Website deployed
- Forms functional
- Database operational
- Mobile optimized
- Lighthouse score above 90
- Documentation updated
