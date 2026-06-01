# ITfix Technical Specification

Version: 1.0

---

# Architecture Overview

Frontend:

- Next.js
- TypeScript
- TailwindCSS

Backend:

- Next.js API Routes

Database:

- PostgreSQL

Deployment:

- Vercel
- Cloudflare

---

# Project Structure

/app

/components

/lib

/hooks

/services

/public

/docs

---

# Pages

/

/services

/services/computer-repair

/services/windows-reinstall

/services/virus-removal

/services/wifi

/services/networking

/services/cameras

/services/smart-home

/services/ethernet

/pricing

/faq

/contact

/service-area

---

# Components

## Header

Responsibilities:

- Navigation
- Call button
- Mobile menu

---

## Hero

Responsibilities:

- Main offer
- CTA buttons

---

## Services Grid

Responsibilities:

- Display services
- Link to service pages

---

## Pricing Section

Responsibilities:

- Service pricing
- Minimum service call

---

## FAQ Section

Responsibilities:

- Display common questions

---

## Contact Form

Responsibilities:

- Lead collection
- Validation
- Submission

---

# Database Schema

## Leads

Table:

leads

Fields:

id

created_at

name

phone

email

city

service

description

status

---

## Quotes

Table:

quotes

Fields:

id

lead_id

price

notes

status

created_at

---

## Testimonials

Table:

testimonials

Fields:

id

name

city

rating

text

created_at

---

# Lead Status Values

NEW

CONTACTED

QUOTED

SCHEDULED

COMPLETED

CLOSED

---

# Form Workflow

User submits form.

↓

Validate fields.

↓

Store lead.

↓

Send notification.

↓

Display success message.

---

# API Endpoints

POST /api/leads

GET /api/services

POST /api/contact

POST /api/quote

---

# Security Requirements

- Input validation
- Rate limiting
- Spam protection
- CAPTCHA support
- HTTPS only

---

# Performance Requirements

Target Lighthouse:

Performance > 90

Accessibility > 90

SEO > 90

Best Practices > 90

---

# Monitoring

Google Analytics

Google Search Console

Microsoft Clarity

---

# Future Integrations

CRM

Google Calendar

Email Automation

SMS Automation

AI Assistant

Customer Portal
