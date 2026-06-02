# ITfix CRM Specification

Version: 1.0

---

# Purpose

The CRM system is responsible for managing the complete customer lifecycle.

From first contact through completed work and future repeat business.

---

# Business Goals

- Never lose a lead
- Respond quickly
- Track every interaction
- Increase conversion rate
- Increase repeat customers

---

# Lead Lifecycle

New Lead

↓

Contacted

↓

Qualified

↓

Quoted

↓

Scheduled

↓

In Progress

↓

Completed

↓

Review Requested

↓

Follow-Up

↓

Closed

---

# Lead Sources

Track origin of every lead.

Possible values:

- Google Search
- Google Maps
- Referral
- Website
- Facebook
- Nextdoor
- Thumbtack
- Yelp
- Direct Call
- SMS

---

# Lead Record

Fields:

id

created_at

source

name

phone

email

city

address

service_type

description

status

assigned_to

notes

---

# Service Categories

Computer Repair

Virus Removal

Wi-Fi

Networking

Camera Installation

Smart Home

Doorbells

Smart Locks

Ethernet Cabling

Low Voltage

Other

---

# Quote System

Each lead may have multiple quotes.

Fields:

quote_id

lead_id

created_at

price

materials

labor

notes

status

---

# Quote Status

Draft

Sent

Accepted

Rejected

Expired

---

# Scheduling

Fields:

appointment_id

lead_id

scheduled_date

scheduled_time

estimated_duration

technician

status

---

# Appointment Status

Scheduled

Confirmed

Completed

Cancelled

Rescheduled

---

# Customer Record

Created after first completed service.

Fields:

customer_id

name

phone

email

address

city

total_jobs

lifetime_value

notes

---

# Customer History

Track:

- quotes
- jobs
- invoices
- reviews
- photos

---

# Review Workflow

Completed Job

↓

Request Review

↓

Review Received

↓

Review Published

---

# Follow-Up System

Automatic reminders:

30 Days

90 Days

180 Days

365 Days

---

# Future Integrations

Google Calendar

Email Automation

SMS Automation

QuickBooks

Stripe

Customer Portal

AI Assistant

---

# Success Metrics

Lead Response Time

Quote Acceptance Rate

Customer Retention

Average Job Value

Lifetime Customer Value

Review Count