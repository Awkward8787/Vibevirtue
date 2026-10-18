# Vibe Virtue — Product Requirements Document (PRD)

## Problem
Vibe Virtue (consulting) needs a clean marketing website that explains its services, shows its process and credibility, lists consultation packages with prices, and drives prospects to book a call — a brochure/lead site, not an app.

## Audience and users
- **Prospects:** local businesses and founders seeking strategy, launch, brand/entertainment, AI/tech, and operations consulting.
- **Owner:** Dondon (vibevirtue.com). Note the operating entity used across properties is **Vibe Virtue Enterprise LLC**.

## Goals and success measures
- Communicate services, outcomes, process, and credibility clearly.
- List consultation packages with transparent prices and a clear call-to-action (free discovery call).
- Success: discovery-call bookings / inquiries.

## Features in scope
- One-page marketing site: hero, services, why/outcomes, process, about, packages/pricing, credibility (high).
- Content-driven sections from typed data files (`src/data/*`) so copy is easy to edit (high).
- Clear CTAs (book a free discovery call) (high).

## Out of scope
- Accounts, payments, dashboards, or a backend (static brochure site).

## User stories
- As a prospect, I read what Vibe Virtue does, see prices, and book a free discovery call.
- As the owner, I edit a data file to change services/packages without touching layout code.

## Packages (from `src/data/packages.ts`)
- Free Discovery Call (Free); Strategy Consultation ($150); Business Clarity Session ($250); Launch Planning Package ($500); Business Growth Package ($750); Brand & Entertainment Strategy ($500); AI & Technology Consultation ($300); Custom Project Consulting (Custom quote); Monthly Advisory ($750/month).

## Services (from `src/data/services.ts`)
- Business Strategy; Startup and Launch Planning; Brand and Entertainment Consulting; AI and Technology Strategy; Operations and Project Planning; Custom Consulting.

## Constraints
- Static site hosted on Hostinger; no backend, no PII beyond what a contact/booking link collects.

## Open questions
- How are discovery calls booked (scheduler link, email, or form)? The repo is content + layout; confirm the booking destination.
- Is this site distinct from the larger "Vibe Virtue Solutions" app, or the marketing front for it?

## Changelog

- **2026-10-18** — Initial reverse-documented draft from the codebase (executor documentation bot). Facts drawn from the repo/box source at the commit recorded in `/workspace/project-docs/state.json`.
