# MCP Consulting Group: structure and copy research

Benchmark for the Align Solutions services and navigation restructure.
Source: https://www.mcpconsultinggroup.com, fetched 22 October 2026.
Purpose: borrow structure and copy formula only. No MCP wording is to be reused on the Align site.

---

## 1. Navigation

Four top-level menus plus contact. Each menu item is a folder that also has its own landing page.

| Top level | Landing page | Children |
|---|---|---|
| Consulting Services | `/our-services` | Maintenance Management, Physical Asset Management, Reliability Management, Spares Management, Facilities Management, Digital Solutions |
| Other Services | `/other-services` | The AMIS Journey, MCP Technical Training, MCP Management Training (all external sites) |
| MCP Insights | `/mcp-insights` | Our Resources, Our Case Studies, Our Articles, Our Quizzes, Our Upcoming Events |
| About Us | `/about-us` | About MCP, Our History, Our Core Values, Our Partners, Our Team, Contact Us |

Note: `/insights` itself returns a 404. The folder is called "MCP Insights" and its landing page is `/mcp-insights`.

### Grouping depth: category > sub-group > service

The nav only shows the six categories. The third level (individual services) is surfaced in two places: the homepage "Our Services" cards and each category page's tiles. Only two categories use a middle sub-group layer.

**Maintenance Management** (three levels)
- Strategy and Organisations: Maintenance Strategy, Processes, Procedures, Organisation Review
- Work Management Support: Work Planning, Work Scheduling, CMMS Selection (URS), CMMS Implementation
- Maintenance Plans: Asset Importance Analysis, Equipment Criticality, FMECA and RCM, Planned Maintenance Programmes, Review of Existing Maintenance
- Total Productive Maintenance: TPM (8 Pillars), Autonomous Maintenance, Operator Asset Care
- Continuous Improvement: KPIs, Continuous Improvement Support (5S Kaizen)
- Benchmarking and Assessments: AMIS Assessments, Spares Assessments, Energy Audits

**Reliability Management** (two levels): Risk-Based Maintenance, Condition Monitoring, Predictive Maintenance (IIoT), Root Cause Analysis

**Spares Management** (two levels): Spare Parts Assessment, Spare Parts Strategy, Critical Spares Review, Spares Data Enhancement, Inventory Level Optimisation, Spares Outsourcing

**Facilities Management** (three levels): FM Strategy and Governance, FM Contract Review, Statutory Compliance, Maintenance Life Plans, CAFM Systems, Sustainability in FM (each with 2 to 4 services)

**Digital Solutions** (two levels): Energy Cost Reduction, Digital Twins, AI and Machine Learning in Maintenance, CAFM, CMMS, Sensor Technology

**Physical Asset Management** (two levels): ISO 55001 Gap Analysis, ISO 55001 Implementation, Asset Condition Surveys, Asset Life Cycle Plans, Asset Master Data. *Out of scope for Align.*

**Not present on MCP:** HSEQ (only mentioned inside FM copy), Obsolescence (covered inside spares pages, no page of its own).

### Takeaways for Align
- Category > service (two levels) is enough for Align's size. MCP's middle layer only exists because Maintenance and FM have 15+ services each.
- MCP cross-lists services (CMMS and CAFM appear under two categories). Avoid that: one canonical page per service.
- Putting the full service list in a mega dropdown, which MCP does not do, is an easy win for Align. Every service is one click from anywhere.

---

## 2. Service page template

The same template is used on every category and service page. Sequence:

1. **Eyebrow / breadcrumb.** "Consultancy" on category pages, the parent category on service pages.
2. **H1.** The service name, sometimes with "Consultants" or "Support Services" appended for SEO (e.g. "Risk-Based Maintenance Consultants"). No sub-heading.
3. **Intro.** 2 to 3 sentences. This is where the formula is cleanest (see section 3).
4. **"What is [service]".** 2 to 4 sentence definition. Built for search snippets.
5. **"Key Objectives of [service]".** 5 to 8 numbered items, H4 heading plus one sentence each.
6. **"[Brand] Approach to [service]".** 5 to 7 H4 blocks, one or two sentences each.
7. **Category tiles / "Explore More".** Links to sibling services.
8. **"Speak to one of our [X] consultants".** 2 to 3 sentence CTA block.
9. **FAQs.** 4 to 6 questions. Clearly written for search.
10. **Site-wide furniture.** Event banner, the same four case studies on every page, newsletter sign-up, client logo wall, accreditations, footer.

**CTAs:** "Contact Us" three times in the body (after tiles, after Explore More, in the speak block). No contact form on service pages. No hero CTA.

### Weaknesses to avoid
- **Case studies are not page-specific.** The same four appear everywhere, so a spares page shows a beverage training case study.
- **Copy misalignment.** On roughly half the pages, approach headings sit over the wrong paragraph and several headings have no body. Looks like a CMS offset.
- **Objectives and Approach overlap.** Two lists saying similar things in different grammar.
- **Generic outcomes.** "Optimise", "efficiency", "reduce downtime" repeat on every page. Hard numbers appear only in case studies (79% PM hour reduction, breakdowns cut from 14.6% to under 5%, "up to 35%" workload reduction on REM).
- **Typos in headings** ("Review of Exiting Maintenance", "Spares Oursourcing").

---

## 3. Copy formula

### Intro (most consistent)
Three moves in two or three sentences:

1. **Why it matters / the problem.** A premise sentence about what goes wrong without it.
2. **"We help organisations do X."** Always phrased as a service that helps organisations take an action.
3. **The outcome.** Tagged on with "ensuring" or "enabling": less downtime, lower stockholding, better compliance.

### Approach blocks
- Heading names an activity, not a benefit (e.g. "Structured Failure Analysis").
- Body is one sentence: "We [verb] [activity], ensuring [outcome]."
- The problem stage is usually skipped inside blocks. The full problem > help > outcome sequence only appears in intros and a few blocks.

### Voice
- Third person corporate ("At MCP Consulting Group, we provide..."). Objectives sometimes switch to second person ("your organisation").
- Heavy on "optimise", "ensure", "enhance". Very little method detail (no named standards beyond ISO 55001, no deliverables).

### What Align should do differently
- Apply the full three-move formula to **every** block, not just the intro. Each block becomes one short paragraph: problem, what we do, what changes.
- Name the method (NORSOK criticality, FMECA from P&IDs and CMMS history, Weibull). This is Align's real edge over MCP's generic copy.
- Merge "Objectives" and "Approach" into one section and add a concrete **"What you get"** deliverables list.
- One page-specific proof point per page, sector-only.
- One CTA style, used twice (after intro and at the end), not three identical "Contact Us" links.

---

## 4. Insights and About

### MCP Insights
| Page | Content | Structure |
|---|---|---|
| `/resources` | Hub | Five tiles: Case Studies, Downloads, Quizzes, Brochures, Videos |
| `/case-studies` | 38 studies | Filters by business line and by sector, with counts. Card: image, tags, author, date, title, excerpt, Read More. 20 per page. |
| `/blog` ("Our Articles") | Articles | Filters by service category (Maintenance, Asset, Reliability, Spares, FM, Digital, News). Card: image, tag, author, date, title, excerpt. 10 per page. |
| `/downloads` | eBooks, white papers, top tips | Filter by type, gated "Download Now" |
| `/quizzes` | 5 skills-gap quizzes | External forms (lead capture) |
| `/upcoming-events` | Open days | Eventbrite links |

**Patterns worth borrowing:**
- Article categories mirror the service categories exactly. Every article feeds a service page's topic cluster.
- Article titles are search queries: "Does Every Asset Need a FMECA?", "What Is Your Maintenance History Telling You?".
- Case studies filter by sector as well as service.

**Weaknesses:** every article and case study is authored by the marketing executive, not an engineer, which wastes the E-E-A-T signal. Align should author everything under Mark.

### About Us
- `/about-us` and `/about-mcp` render the same page (company story, founded 1976, what we do, accreditations, video).
- `/our-team`: filterable team grid with photo, title, three areas of expertise, a personal line, LinkedIn.
- History, Core Values, Partners: separate thin pages.

**For Align:** two pages is right for a founder-led firm. About Align (company) and About Mark (the person and his credentials). History, values and partners fold into those two.

---

## 5. Homepage (for reference only)

Hero ("trusted asset management and maintenance consultancy"), Other Services tiles, event banner, Our Services (six cards, each listing its services), Resources feed (case studies, downloads, articles, events, quizzes), About, newsletter, contact, client logo wall, accreditations (BSI, City and Guilds, EAL, JOSCAR, IAM, Institute of Consulting). No stats band.

The accreditations strip sits at the bottom of every page above the footer. Align's equivalent is the ISO placeholder block.
