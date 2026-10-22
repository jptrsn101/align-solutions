# Align Solutions: content and IA plan

Status: **revision 4 for review (22 October 2026).** Updated with the review decisions in section 1. Nothing from the build has started. The client-name fix on `case-studies.html` and the automatic sectors count on `index.html` are live (commit 088a7f3).

Conventions in this doc:
- **[MARK TO CONFIRM]** needs Mark's input before going live.
- **[UNCONFIRMED SERVICE]** the whole page is speculative until Mark confirms Align offers it.
- **[DECISION]** a choice for you to make at review.

Benchmark research: [mcp-research.md](mcp-research.md).

---

## Contents

1. Review decisions
2. Sitemap
3. Navigation
4. Service page template
5. Services overview page
6. Maintenance Management (category + 4 services)
7. Reliability Management (category + 3 services)
8. Spares Management (category + 4 services)
8A. Design Engineering (Engineering Services)
8B. Asset Management (Engineering Services)
8C. Project Delivery (Engineering Services)
9. Facilities Management (hidden until confirmed)
10. Digital Solutions (hidden until confirmed)
11. HSEQ
12. Lubricants
13. Packages
14. Our Method (replaces How We Work)
15. Align Insights
16. About Align and About Mark
17. Sectors
18. Accreditations block
19. Existing content to fix
20. Stats

---

## 1. Review decisions

### Resolved at review 1

1. **Design Engineering, Asset Management and Project Delivery stay.** Mark only ruled out MCP-style Physical Asset Management (ISO 55001 work), not his own live services. Each is now its own group in the Services dropdown with its own page (sections 8A to 8C). All three pages are marked **[MARK TO CONFIRM]** for scope. Packages copy and founder letter references stay as they are. The Asset Management page deliberately avoids ISO 55001 content.
2. **Lubricants stays under Other Services** next to HSEQ. Nav label "Lubricant Supply and Oil Analysis". Copy adds the environmentally acceptable range (section 12).
3. **Client names removed.** Swept every page, the sitemap, image filenames, alt text, schema and both docs. The only client name on the site was in case study 01, which is now **already fixed** on `case-studies.html`: the title reads "Offshore stimulation, data-driven reliability optimisation" and the description opens "For an offshore operator on the Norwegian Continental Shelf". The project code that followed the client name was removed too, as it could identify them. No other client names were found on the site or in the docs. Rule from here on: sector and region only, in all copy, alt text, comments and filenames.
4. **Our Method approved.** Replaces How We Work, built on the 10-step Full Systems Assessment, with the "Where to start" problem finder at the bottom (section 14).
5. **Facilities Management and Digital Solutions** get built as single pages but stay out of the nav, the sitemap and the Services overview until Mark confirms. Until then they also carry `<meta name="robots" content="noindex">` so search engines skip them, and nothing on the site links to them.
6. **Stats stay live.** *(Revised at review 3.)* The figures on the site are Mark's own and stay as they are: the home "By the numbers" bento, the About stats row (including "6 Disciplines, one team"), the sector figures and the case study figures. There is no [MARK TO CONFIRM] or hiding logic for existing stats. New service-page copy still doesn't state how many services there are (section 5).

### Resolved at review 2

7. **Engineering Services is its own heading.** Design Engineering, Asset Management and Project Delivery are delivery work, not consultancy, so they sit under a separate "Engineering Services" heading in the dropdown and on the Services overview. Consulting Services stays as tight as MCP's (section 3).
8. **Sectors served is counted automatically** (done). The home tile fetches `sectors.html` and counts its `.sector-band` sections, so adding or removing a sector updates the number. If the fetch fails, the tile stays hidden rather than showing a stale figure. The home intro line no longer states a count.
9. ~~Case studies 01 and 04 priority sign-off.~~ Dropped at review 3: the figures are Mark's and stay live.
10. ~~Unverified stats taken down.~~ Reverted at review 3. Every figure is back on the four pages exactly as it was before, and the hiding markup and CSS are gone.

### Still open

- **URL style. [DECISION]** Recommendation unchanged: flat `.html` files at the root, matching the current site (e.g. `/equipment-criticality.html`), with article posts in an `/insights/` folder. Vercel `cleanUrls` stays off, because turning it on changes every indexed URL.

---

## 2. Sitemap

New pages marked **NEW**. Moved or renamed marked **MOVED**.

```
/                                   Home (nav + accreditations block only)
/services.html                      Services overview (rewritten as the hub)

  Consulting Services
  /maintenance-management.html               NEW  category
    /equipment-criticality.html              NEW
    /fmeca-rcm.html                          NEW
    /maintenance-rationalisation.html        NEW
    /work-planning-scheduling.html           NEW
  /reliability-management.html               NEW  category
    /risk-based-maintenance.html             NEW
    /root-cause-analysis.html                NEW
    /condition-monitoring.html               NEW
  /spares-management.html                    NEW  category
    /spare-parts-strategy.html               NEW
    /critical-spares-review.html             NEW
    /obsolescence-review.html                NEW
    /spares-data-enhancement.html            NEW
  /facilities-management.html                NEW  HIDDEN: not in nav/sitemap, noindex
  /digital-solutions.html                    NEW  HIDDEN: not in nav/sitemap, noindex

  Engineering Services
  /design-engineering.html                   NEW  [MARK TO CONFIRM scope]
  /asset-management.html                     NEW  [MARK TO CONFIRM scope]
  /project-delivery.html                     NEW  [MARK TO CONFIRM scope]

  Other Services
  /hseq.html                                 NEW
  /lubricants.html                           existing, copy addition (section 12)

  Packages
  /packages.html                             existing, unchanged content

/our-method.html                    NEW, replaces how-we-work.html (301 redirect)
/sectors.html                       existing, adds image and fact slots

/insights.html                      NEW  Align Insights hub
  /articles.html                    NEW  article listing
    /insights/<slug>.html           NEW  one file per article
  /case-studies.html                MOVED under Insights in the nav, URL unchanged
  /resources.html                   NEW  downloads

/about.html                         About Align (rewritten)
/about-mark.html                    NEW  About Mark

/contact.html, /privacy.html, /terms.html   unchanged
```

**Page count:** 23 new pages (2 of them hidden) plus 1 article template. `sitemap.xml` gets the 21 visible new pages, and `vercel.json` gets a 301 redirect from `how-we-work.html` to `our-method.html`.

---

## 3. Navigation

### Desktop top bar

```
[logo]   Services ▾   Sectors   Align Insights ▾   About ▾        [Get In Touch]
```

Home is reached via the logo (current nav lists it as a link; dropped to make room). "Our Method" sits inside the Services dropdown's footer row and on the About dropdown so it stays one click away. **[DECISION]** keep a visible Home link if you prefer.

### Services mega dropdown

One glass panel, full nav width. Four groups: MCP's Consulting / Other split, plus Engineering Services for Align's delivery work, plus Packages.

```
CONSULTING SERVICES
Maintenance Management      Reliability Management     Spares Management
  Equipment Criticality       Risk-Based Maintenance     Spare Parts Strategy
  FMECA and RCM               Root Cause Analysis        Critical Spares Review
  Maintenance Rationalisation Condition Monitoring       Obsolescence Review
  Work Planning and                                      Spares Data Enhancement
  Scheduling

ENGINEERING SERVICES
Design Engineering          Asset Management           Project Delivery
  Concept to detailed design  Lifecycle planning         Project management
  P&IDs and CAD               Risk assessment            Commissioning and testing
  Modifications               Compliance assurance       Handover

OTHER SERVICES                         PACKAGES
  HSEQ                                   Essentials
  Lubricant Supply and Oil Analysis      Advanced
                                         Enterprise
                                         Compare packages

All services  ->        Our method  ->
```

- Category names are links (to the category page) styled as column headings. Sub-links sit under them.
- Design Engineering, Asset Management and Project Delivery each have one page. Their sub-links go to anchors on that page (e.g. `design-engineering.html#modifications`), so they can become full pages later without changing the nav.
- Facilities Management and Digital Solutions are left out until Mark confirms them. When he does, they slot in as a second row in Consulting Services.
- Mobile overlay: four accordions (Consulting Services, Engineering Services, Other Services, Packages).
- Package links go to anchors on `packages.html` (`#essentials`, `#advanced`, `#enterprise`).
- Mobile: the existing full-screen glass overlay gets three accordions (Consulting Services, Other Services, Packages). Category pages are the accordion rows; sub-services are reached from the category page, to keep the mobile list short.

### Align Insights dropdown
- Articles
- Case Studies
- Resources

### About dropdown
- About Align
- About Mark
- Our Method

---

## 4. Service page template

Adapted from MCP's template, with their weaknesses fixed. MCP's "Objectives" and "Approach" sections are merged into one, and every block uses the full formula.

| # | Section | Content |
|---|---|---|
| 1 | Hero | Eyebrow = parent category. H1 = service name. One-line subline. "Talk to an engineer" button. |
| 2 | Intro | 2 to 3 sentences: problem, "we help operators...", outcome. |
| 3 | How we do it | 3 to 5 blocks. Each block is **one paragraph**: why it matters, what we do, what changes. |
| 4 | What you get | Deliverables list. Concrete documents and data, not benefits. |
| 5 | Proof | One sector-only case study snippet relevant to this page, or [MARK TO CONFIRM]. |
| 6 | FAQs | 3 to 4. Written as search queries. Marked up with FAQPage schema. |
| 7 | Related services | 2 to 3 links (sibling and cross-category). |
| 8 | CTA | Shared CTA band. |

Category pages use: hero, intro, "what it is" (2 to 3 sentences), service cards (one line each), method highlight, proof, FAQs, CTA.

**Voice rules applied to everything below:** UK English, no em dashes, short sentences, active voice, no client names. Positioning: an AI-first reliability engineering consultancy. AI is described as a tool that does the slow data work so engineers spend their time on judgement, never as the product.

---

## 5. Services overview (`services.html`)

**Eyebrow:** Services
**H1:** Reliability engineering, built on your own data.
**Subline:** Maintenance, reliability and spares consultancy from engineers who have run the plant, using AI to do in days what used to take months.

**Intro:**
Most maintenance regimes are inherited. Tasks get added after every incident and nothing ever gets taken away, so crews spend hours on work that prevents nothing. We help operators rebuild their maintenance around how their assets actually fail, using their own P&IDs, O&M manuals and CMMS history. The result is less unplanned downtime, fewer wasted hours and a spares holding you can justify line by line.

**Section: Consulting services** (one card per category, one line each)
- **Maintenance Management.** Criticality, FMECA and planning that strip your regime back to work that matters.
- **Reliability Management.** Find out why assets fail, and catch it before it happens again.
- **Spares Management.** Hold the parts that protect production. Release the cash tied up in the rest.

**Section: Engineering services** (one card per group, one line each)
- **Design Engineering.** Concept to detailed design, with maintainability designed in from the start.
- **Asset Management.** Lifecycle, risk and compliance decisions for the assets you already own.
- **Project Delivery.** Managed, commissioned and handed over with the maintenance ready on day one.

Facilities Management and Digital Solutions cards are added only once Mark confirms them. No copy on this page states how many services there are.

**Section: Other services**
- **HSEQ.** Health, safety, environment and quality support across the asset lifecycle.
- **Lubricant Supply and Oil Analysis.** Shell and Castrol lubricants, chosen by the engineers who set your maintenance strategy.

**Section: Packages** (existing three cards, condensed) + "Compare packages" link.

**Section: How it fits together.** Keep the existing Weibull chart and Reliability Journey (reactive, preventive, predictive) here. They explain the method behind every service. The 10-step Full Systems Assessment moves to Our Method.

**Keep:** Shell/Castrol strip, Reliatic partner block (moves to Digital Solutions if that page is confirmed).

**Remove:** the hero subline "Six integrated disciplines delivered by..." and the heading "Six disciplines. One integrated approach." Replacement heading: "Every discipline. One integrated team." Replacement subline is the one above.

---

## 6. Maintenance Management

### 6.0 Category page (`maintenance-management.html`)

**Eyebrow:** Consulting services
**H1:** Maintenance management
**Subline:** A maintenance regime built on failure modes, not habit.

**Intro:**
Most maintenance regimes grow by accident. A task gets added after a breakdown, an OEM schedule gets copied in whole, and nobody goes back to ask whether any of it still earns its place. We help operators rebuild their maintenance from the asset up: rank what matters, work out how it fails, and plan only the work that prevents those failures. Crews spend their hours where the risk is, and planned work actually gets done.

**What it is:**
Maintenance management is the system that decides what gets maintained, how often, by whom and with what parts. Done well, it is the difference between a site that runs to plan and one that runs from breakdown to breakdown.

**Services:**
- **Equipment Criticality.** Every asset rated C1 to C3, so effort goes where failure costs most.
- **FMECA and RCM.** Maintenance tasks tied to real failure modes. Everything else comes out.
- **Maintenance Rationalisation.** A line-by-line review of your existing regime: keep, change or remove.
- **Work Planning and Scheduling.** Jobs that are ready before the crew arrives, scheduled around production.

**Method highlight:** System-by-system assessment. We work through the plant one system at a time, using P&IDs, O&M manuals and CMMS data, with AI extraction doing the first pass. Engineers then verify every asset and every task.

**Proof:** [MARK TO CONFIRM] e.g. "On a North Sea gas platform, FMECA removed X% of PM hours with no rise in failures."

**FAQs:**
- *Where should we start: criticality or FMECA?* Criticality. It tells you which assets justify a full FMECA and which can take a simpler strategy.
- *Do we need a new CMMS?* Rarely. We work with the system you have and load the new strategy into it.
- *How long does a system-by-system review take?* It depends on asset count and data quality. [MARK TO CONFIRM typical durations]

---

### 6.1 Equipment Criticality (`equipment-criticality.html`)

**Eyebrow:** Maintenance management
**H1:** Equipment criticality assessment
**Subline:** Know which assets can stop production, and which can run to failure.

**Intro:**
If every asset is treated as important, none of them are. Maintenance effort spreads evenly across the plant while the few assets that can shut you down get the same attention as a toilet extract fan. We help operators rate every asset by the consequence of its failure, using the NORSOK approach, so maintenance, spares and engineering time follow the risk.

**How we do it:**

**System by system, from your own documents.** Criticality done from a spreadsheet of tag numbers misses how assets work together. We assess one system at a time from P&IDs, O&M manuals and CMMS data, with AI extracting the asset list and functions on the first pass. Engineers then check every tag against the drawings, so nothing is rated in isolation.

**Consequence rated C1 to C3.** Vague high, medium and low ratings get argued about and then ignored. We rate each asset C1 to C3 against safety, environment and production consequence using the NORSOK method, with redundancy taken into account. [MARK TO CONFIRM: C1 = highest consequence, and whether Align references NORSOK Z-008 by name.] Every rating has a written reason you can defend at audit.

**Workshops with the people who run the plant.** A rating your operators disagree with will not survive the first breakdown. We test the draft ratings in short workshops with operations and maintenance, so the final register reflects how the plant actually runs.

**Loaded into your CMMS.** A criticality register that lives in a report changes nothing. We load the ratings into your CMMS so they drive work order priority, PM strategy and spares decisions from day one.

**What you get:**
- Criticality register, every asset rated C1 to C3 with rationale
- Consequence matrix agreed with your team
- CMMS-ready upload file
- Shortlist of C1 assets recommended for FMECA

**Proof:** [MARK TO CONFIRM] sector-only example.

**FAQs:**
- *What is equipment criticality?* A ranking of assets by the consequence of their failure on safety, environment and production. It decides where maintenance effort and spares spend go first.
- *What does C1, C2 and C3 mean?* C1 assets have the most severe consequence of failure, C3 the least. [MARK TO CONFIRM scale definitions]
- *What is the NORSOK approach to criticality?* A consequence-based method from the Norwegian offshore standards, now used well beyond oil and gas. It rates the effect of losing a function, taking redundancy into account.
- *How often should criticality be reviewed?* After any significant plant change, and as a rule every few years. [MARK TO CONFIRM]

**Related:** FMECA and RCM, Critical Spares Review, Risk-Based Maintenance

---

### 6.2 FMECA and RCM (`fmeca-rcm.html`)

**Eyebrow:** Maintenance management
**H1:** FMECA and RCM
**Subline:** Every maintenance task tied to a failure mode. Every other task removed.

**Intro:**
Most PM routines are a mix of OEM recommendations, old incident fixes and tasks nobody can explain. A large share prevent nothing, and some cause failures by disturbing equipment that was running fine. We help operators work out how each critical asset actually fails and build the maintenance around those failure modes. Crews get fewer, better tasks, and failures that do happen were expected and planned for.

**How we do it:**

**Start from the failure, not the task.** Reviewing tasks one by one keeps the bad ones in. We list the functions of each critical asset, the ways it can fail and the effect of each failure, drawing on O&M manuals, failure history in your CMMS and the people who maintain it. AI pre-fills likely failure modes from manuals and work order text so workshops start at the review stage, not from a blank sheet.

**Strip out tasks with no failure mode behind them.** If a task does not prevent, detect or reveal a failure mode, it is cost with no return. We map every existing task to a failure mode and remove or change the ones that do not map. Freed hours go back to work that protects production.

**Pick the right strategy for each failure mode.** Time-based replacement only works for failures that wear out on a predictable curve. Using Weibull analysis on your failure data where it exists, we choose between condition monitoring, scheduled restoration, failure-finding tests, redesign or run to failure. Each failure mode gets the cheapest strategy that controls the risk.

**RCM where it is justified.** Full RCM on every asset is slow and expensive. We apply full RCM to C1 assets and a lighter FMECA-based review to C2, so the depth of analysis matches the consequence of failure.

**What you get:**
- FMECA worksheets per asset or asset type
- Task-to-failure-mode map with keep, change and remove decisions
- New PM routines with intervals and justifications
- CMMS-ready task lists
- Summary of hours removed and added

**Proof:** [MARK TO CONFIRM] e.g. a North Sea gas operator, PM hours reduced by X%.

**FAQs:**
- *What is the difference between FMECA and RCM?* FMECA is the analysis: how an asset fails, what happens and how bad it is. RCM is the decision process that uses that analysis to pick a maintenance strategy for each failure mode.
- *Does every asset need a FMECA?* No. Criticality decides that. C1 assets get the full treatment, low-criticality assets often do not justify it.
- *How much maintenance does FMECA typically remove?* It varies with how the regime was built. [MARK TO CONFIRM typical range from Align projects]
- *Can FMECA be done without good failure history?* Yes. Manuals, OEM data and experienced technicians fill the gaps, and the gaps themselves tell you what to start recording.

**Related:** Equipment Criticality, Maintenance Rationalisation, Condition Monitoring

---

### 6.3 Maintenance Rationalisation (`maintenance-rationalisation.html`)

**Eyebrow:** Maintenance management
**H1:** Maintenance rationalisation
**Subline:** A review of your existing maintenance. Keep what works, cut what does not.

**Intro:**
Not every site needs to start again. Often the regime is broadly right but bloated: duplicated routines, intervals set too short, tasks for equipment that no longer exists. We help operators review their existing maintenance line by line against criticality and failure history. The output is a leaner regime that can actually be completed, without the cost and time of a full rebuild.

**How we do it:**

**Pull everything into one view.** PM routines are usually spread across the CMMS, contractor scopes and paper checklists. We extract and consolidate them, using AI to read task descriptions, group duplicates and match tasks to assets, then check the result by hand.

**Test each task against the evidence.** A task justified by "we have always done it" is a candidate for removal. We compare every routine against asset criticality, failure history and OEM requirements, and flag tasks that are duplicated, too frequent, mis-targeted or orphaned. Each one gets a keep, change or remove recommendation with a reason.

**Fix the intervals.** Intervals copied from OEM manuals often assume worst-case duty. Where failure data supports it, we extend intervals, and where it does not, we flag the asset for condition monitoring. Workload drops without adding risk.

**Agree and implement.** Changes that nobody signs off do not happen. We take recommendations through review with your maintenance and operations leads, then update the CMMS.

**What you get:**
- Consolidated register of every existing maintenance task
- Keep, change or remove decision and rationale for each
- Revised intervals and task wording
- Workload before and after, in hours per year
- CMMS update file

**FAQs:**
- *How is this different from FMECA?* Rationalisation starts from your existing tasks and tests them. FMECA starts from failure modes and builds tasks. Rationalisation is faster and is often the right first step.
- *How much maintenance can a review remove?* [MARK TO CONFIRM typical range]
- *Is it safe to remove maintenance tasks?* Every removal is checked against criticality and failure modes, and signed off by your team. Statutory and safety-critical tasks are never removed without explicit agreement.

**Related:** FMECA and RCM, Work Planning and Scheduling, Equipment Criticality

---

### 6.4 Work Planning and Scheduling (`work-planning-scheduling.html`)

**Eyebrow:** Maintenance management
**H1:** Work planning and scheduling
**Subline:** Jobs ready before the crew arrives. Schedules that survive contact with production.

**Intro:**
A technician who spends the first two hours of a job finding parts, permits and drawings is a planning problem, not a people problem. Poor planning shows up as low wrench time, jobs carried over week after week and a backlog nobody trusts. We help operators set up planning and scheduling that prepares every job properly and fits it around production. More planned work gets done, on time, by the right people.

**How we do it:**

**Separate planning from scheduling.** Planning decides how a job is done. Scheduling decides when. Sites that mix the two end up doing neither well. We define the roles, the process and the hand-off between them.

**Build job packs that work.** A job is ready when parts, tools, permits, isolations and procedures are in place before it is scheduled. We set up job pack standards and templates, and use AI to pull task steps and parts lists from manuals and past work orders to speed up preparation.

**Clean up the backlog.** A backlog full of duplicates and dead jobs hides the work that matters. We review it, close what is no longer needed and prioritise what is left by criticality.

**Schedule against real capacity.** We set up a weekly scheduling routine that matches available hours to prioritised, ready work, agreed with operations. Schedule compliance becomes something you can measure and improve.

**What you get:**
- Planning and scheduling process with defined roles
- Job pack standard and templates
- Cleansed, prioritised backlog
- Weekly scheduling routine and meeting format
- KPIs: schedule compliance, backlog weeks, planned versus reactive ratio

**FAQs:**
- *What is the difference between maintenance planning and scheduling?* Planning prepares the job: scope, parts, tools, permits. Scheduling fixes the date and the crew.
- *What is a healthy maintenance backlog?* Typically two to four weeks of ready work per crew. Much more and work is being lost. Much less and crews will be idle.
- *What is wrench time?* The share of a shift spent actually working on equipment. Planning is the biggest lever on it.

**Related:** Maintenance Rationalisation, Equipment Criticality, Spare Parts Strategy

---

## 7. Reliability Management

### 7.0 Category page (`reliability-management.html`)

**Eyebrow:** Consulting services
**H1:** Reliability management
**Subline:** Understand why your assets fail. Then stop it happening.

**Intro:**
Reactive sites fix the same failures over and over because nobody has time to ask why. Every repeat breakdown costs production, parts and overtime, and the root cause stays in the plant. We help operators find out why their assets fail, using their own failure data and the right analysis for the problem. Repeat failures stop, and maintenance moves from reacting to predicting.

**What it is:**
Reliability management is the discipline of keeping assets doing their job for as long as they need to. It uses failure data, risk and condition information to decide where to intervene and when.

**Services:**
- **Risk-Based Maintenance.** Maintenance effort set by risk, so high-consequence assets get the attention.
- **Root Cause Analysis.** Find the real cause of a failure and fix it once.
- **Condition Monitoring.** Detect failure early enough to plan the repair.

**Method highlight:** Keep the existing Weibull chart. "Different failure patterns need different responses. Weibull analysis on your failure data tells us which pattern each asset follows."

**Proof:** HPU reliability retainer case study (existing, already anonymous). Hydraulic pump and gearbox wear traced to identical pressure settings causing resonance.

**FAQs:**
- *What is the difference between reliability and maintenance?* Maintenance is the work. Reliability is the engineering that decides which work is worth doing and finds the causes of failure.
- *What is Weibull analysis used for?* It shows whether failures are early-life, random or wear-out, which decides whether time-based maintenance will help at all.

---

### 7.1 Risk-Based Maintenance (`risk-based-maintenance.html`)

**Eyebrow:** Reliability management
**H1:** Risk-based maintenance
**Subline:** Spend maintenance effort where failure would cost most.

**Intro:**
Fixed maintenance plans treat a standby pump the same as the pump that feeds the whole process. That wastes hours on low-risk assets and leaves high-risk ones under-protected. We help operators set maintenance effort by the risk of failure, combining likelihood with consequence. Effort shifts to where it protects people and production, and spend on low-risk assets comes down.

**How we do it:**

**Risk from two sides.** Risk is likelihood times consequence, and most sites only know one of the two. We take consequence from the criticality assessment and likelihood from failure history, condition data and asset age, then plot every asset on one risk matrix.

**Strategy matched to risk.** High-risk assets get condition monitoring, tighter inspection or redesign. Low-risk assets move to longer intervals or run to failure. Each change is documented with its risk reasoning, so it can be defended to auditors and insurers.

**Data-led likelihood.** Gut feel overstates the risk of some assets and misses others entirely. Where failure data exists we use it, with AI reading free-text work order history to find failures that were never coded properly. [MARK TO CONFIRM wording on AI use]

**Review on a cycle.** Risk changes as assets age and plant changes. We set up a review cycle so the strategy keeps up.

**What you get:**
- Risk matrix and ranking for every assessed asset
- Recommended maintenance strategy per risk band
- Interval changes with justification
- Review schedule

**FAQs:**
- *What is risk-based maintenance?* A way of setting maintenance effort by the likelihood and consequence of failure, rather than applying the same plan to every asset.
- *Is risk-based maintenance the same as RBI?* RBI (risk-based inspection) applies the same thinking to static equipment like vessels and pipework. RBM covers maintenance more broadly. [MARK TO CONFIRM whether Align offers RBI]
- *Does RBM need a lot of failure data?* No. Consequence is assessed from the plant design, and likelihood can start from industry data and improve as your own history builds.

**Related:** Equipment Criticality, Condition Monitoring, FMECA and RCM

---

### 7.2 Root Cause Analysis (`root-cause-analysis.html`)

**Eyebrow:** Reliability management
**H1:** Root cause analysis
**Subline:** Fix the cause once, instead of the symptom every month.

**Intro:**
A failure that gets repaired without being understood will come back. Repeat failures are often blamed on the part, when the cause sits in the system: operating conditions, design, installation or the maintenance itself. We help operators find the real cause of significant and repeat failures and put in fixes that last. Breakdowns stop recurring and the lesson is applied across similar assets.

**How we do it:**

**Evidence before opinion.** Root cause investigations go wrong when the first plausible answer is accepted. We collect the physical evidence, process data, maintenance records and witness accounts before forming a view.

**The right tool for the failure.** A simple failure needs a structured 5 Whys. A complex one needs fault tree analysis or failure data modelling. We pick the method that fits, and use Weibull analysis to tell age-related wear from system-driven failure.

**Look at the system, not just the part.** On one hydraulic power unit, pumps were wearing early. The cause was not the pumps. Identical pressure settings across all units were creating resonance. We look at how the asset sits in its system, because that is often where the cause is.

**Actions that close the loop.** An RCA report that sits in a folder changes nothing. Every investigation ends with corrective actions, owners and a check that the failure has stopped.

**What you get:**
- RCA report with evidence, cause and contributing factors
- Corrective and preventive actions with owners and dates
- Recommendations for similar assets across the site
- Follow-up review to confirm the fix has held

**Proof:** HPU reliability retainer (existing case study).

**FAQs:**
- *When should we carry out a root cause analysis?* After any failure with a significant safety, environmental or production impact, and for any failure that repeats.
- *What is the difference between 5 Whys and fault tree analysis?* 5 Whys follows one chain of cause and effect. Fault tree analysis maps every combination of events that could lead to the failure, so it suits complex systems.
- *Can you train our team to run RCAs?* [MARK TO CONFIRM; brief excludes training, so this answer may need to be removed]

**Related:** Condition Monitoring, FMECA and RCM, Risk-Based Maintenance

---

### 7.3 Condition Monitoring (`condition-monitoring.html`)

**Eyebrow:** Reliability management
**H1:** Condition monitoring
**Subline:** See failure coming early enough to plan the repair.

**Intro:**
Most failures give warning signs weeks before they happen: a change in vibration, heat, oil condition or noise. Without monitoring, those signs are missed and the first warning is the breakdown. We help operators decide which assets to monitor, with which technique, and how to act on the results. Repairs get planned instead of rushed, and parts are ordered before they are needed.

**How we do it:**

**Monitor what the failure modes call for.** Monitoring every asset with every technique wastes money. FMECA tells us which failure modes give a detectable warning and how long that warning lasts. We pick the technique and frequency to match: vibration, thermography, oil analysis, ultrasound or process data.

**Baseline and alarm limits.** A reading means nothing without a reference. We set baselines for each monitored asset and alarm limits that trigger action, not just a report.

**Make the data drive work orders.** Condition data that nobody acts on is wasted. We connect findings to the CMMS so an alarm becomes a planned job with parts and a date. Oil analysis runs through our Shell LubeAnalyst service where it fits.

**Review what the data is telling you.** Over time, condition data shows which assets degrade fastest and which intervals can stretch. We use it to keep refining the maintenance strategy. [MARK TO CONFIRM: does Align carry out monitoring itself, or design and manage programmes delivered by specialist contractors?]

**What you get:**
- Condition monitoring plan: assets, techniques, frequencies
- Baselines and alarm limits
- Process for turning findings into work orders
- Periodic review of results and strategy changes

**FAQs:**
- *What is condition monitoring?* Measuring the condition of equipment in service, through vibration, temperature, oil condition and similar indicators, to detect failure before it happens.
- *What is the difference between condition monitoring and predictive maintenance?* Condition monitoring collects the data. Predictive maintenance uses it to forecast when a failure will occur and schedule work ahead of it.
- *Which assets are worth monitoring?* Critical assets with failure modes that give detectable warning. Criticality and FMECA identify them.

**Related:** Lubricant Supply and Oil Analysis, FMECA and RCM, Risk-Based Maintenance

---

## 8. Spares Management

### 8.0 Category page (`spares-management.html`)

**Eyebrow:** Consulting services
**H1:** Spares management
**Subline:** The right parts on the shelf. Nothing else tying up cash.

**Intro:**
Most stores hold too much of the wrong stock and not enough of the right parts. Cash sits in obsolete items and duplicates while a critical breakdown waits weeks for a part nobody thought to hold. We help operators base their spares holding on asset criticality and failure history, so every line on the shelf has a reason to be there. Downtime waiting for parts falls and stockholding comes down.

**What it is:**
Spares management decides which parts to hold, how many and where, and keeps the data behind those decisions accurate. It links directly to criticality and maintenance strategy: the parts you need depend on how your assets fail.

**Services:**
- **Spare Parts Strategy.** Stocking rules set by criticality, lead time and failure rate.
- **Critical Spares Review.** Make sure the parts that protect production are actually there.
- **Obsolescence Review.** Find parts that are no longer supported before a failure finds them for you.
- **Spares Data Enhancement.** Clean, structured materials data, extracted and checked with AI.

**Proof:** Vessel maintenance case study (spare parts rationalisation, existing). [MARK TO CONFIRM details]

**FAQs:**
- *How much spares stock should we hold?* Enough to cover the lead time on parts whose failure would stop production, and little else. Criticality and failure rates set the numbers.
- *Where do we start?* Usually with the critical spares review. It deals with the biggest risk first.

---

### 8.1 Spare Parts Strategy (`spare-parts-strategy.html`)

**Eyebrow:** Spares management
**H1:** Spare parts strategy
**Subline:** Stock decisions based on risk, not habit.

**Intro:**
Most stock holdings are set by whoever ordered last. Without clear rules, stores overstock cheap parts, understock long-lead critical ones and keep reordering items nobody uses. We help operators set a stocking strategy built on asset criticality, failure rate and supplier lead time. Stockholding goes down while the risk of waiting for parts goes down too.

**How we do it:**

**Link every part to an asset.** A part with no known use cannot be managed. We link stock items to the assets and maintenance tasks that consume them, using the bill of materials, CMMS history and AI matching of part descriptions.

**Classify by risk.** We set stocking classes based on the criticality of the parent asset, failure rate and lead time. A C1 asset with a 20-week lead time part is treated very differently from a C3 asset with a part on next-day delivery.

**Set min, max and reorder points.** Generic reorder rules ignore how often parts actually fail. We calculate holdings from usage and failure data, and flag items for removal or consignment.

**Agree supply options.** Not every critical part needs to sit on your shelf. We look at shared pools, supplier stock agreements and consignment where they reduce cost without adding risk.

**What you get:**
- Spares strategy document with stocking rules
- Stock classification for every line
- Recommended min, max and reorder levels
- List of items to remove, dispose of or move to supplier stock
- Expected change in stock value [MARK TO CONFIRM typical range]

**FAQs:**
- *What is a spare parts strategy?* A set of rules that decide which parts are held, in what quantity and where, based on the risk of not having them.
- *How does criticality affect spares?* Parts for high-criticality assets with long lead times justify holding stock. Parts for low-criticality assets often do not.

**Related:** Critical Spares Review, Spares Data Enhancement, Equipment Criticality

---

### 8.2 Critical Spares Review (`critical-spares-review.html`)

**Eyebrow:** Spares management
**H1:** Critical spares review
**Subline:** The parts that protect production, checked and in place.

**Intro:**
The worst time to find a critical spare is missing is during the breakdown. Many sites have never formally identified which spares are critical, so gaps only show up when a C1 asset is down and the part is weeks away. We help operators identify the spares that protect their most critical assets and confirm they are held, in good condition and correctly recorded. Long outages waiting for parts stop happening.

**How we do it:**

**Start from criticality and failure modes.** We take the C1 and C2 assets and their failure modes, and work out which parts each failure would need. AI extracts candidate parts from O&M manuals and BOMs, and engineers confirm them.

**Check the shelf, not just the system.** CMMS stock records are often wrong. We check that critical spares physically exist, are in the right condition and are stored correctly. Rotating equipment stored without preservation can fail on installation.

**Close the gaps.** Every missing or doubtful critical spare gets a recommendation: buy, refurbish, share with a nearby site or accept the risk with a documented reason.

**What you get:**
- Critical spares list linked to assets and failure modes
- Gap analysis: missing, under-held, poor condition
- Storage and preservation recommendations
- Prioritised purchase list with costs and lead times

**FAQs:**
- *What makes a spare critical?* A spare is critical when the asset it serves is critical and the part's lead time is longer than you can tolerate the asset being down.
- *How often should critical spares be reviewed?* After any criticality change, and on a regular cycle. [MARK TO CONFIRM]

**Related:** Spare Parts Strategy, Obsolescence Review, Equipment Criticality

---

### 8.3 Obsolescence Review (`obsolescence-review.html`)

**Eyebrow:** Spares management
**H1:** Obsolescence review
**Subline:** Find unsupported parts before a breakdown does.

**Intro:**
Ageing plants run on equipment that manufacturers stopped supporting years ago. The risk stays hidden until a part fails and there is no replacement, only a redesign and a long outage. We help operators find obsolete and at-risk parts across their critical assets and plan a response before it becomes an emergency. Obsolescence becomes a planned cost instead of an unplanned shutdown.

**How we do it:**

**Build the list.** We take part numbers from critical assets and spares records, with AI extracting manufacturer and model data from manuals and nameplates where records are incomplete.

**Check supply status.** Each part is checked for manufacturer support: current, end of life announced, or obsolete. [MARK TO CONFIRM how Align checks status: OEM enquiries, databases, supplier network]

**Rank by risk.** An obsolete part on a C3 asset is a note. An obsolete part on a C1 asset is a project. We rank findings by criticality and lead time to an alternative.

**Plan the response.** For each high-risk item we set out the options: last-time buy, alternative part, reverse engineering, refurbishment or planned upgrade, with indicative costs.

**What you get:**
- Obsolescence register with supply status for each part
- Risk ranking by asset criticality
- Mitigation plan with options and indicative costs
- Watch list for parts approaching end of life

**FAQs:**
- *What is obsolescence management?* Identifying parts and equipment that are no longer supported by their manufacturer and planning how to replace or sustain them before they fail.
- *When should we review obsolescence?* For any plant over about 10 to 15 years old, and before major life extension decisions. [MARK TO CONFIRM]

**Related:** Critical Spares Review, Spares Data Enhancement, Spare Parts Strategy

---

### 8.4 Spares Data Enhancement (`spares-data-enhancement.html`)

**Eyebrow:** Spares management
**H1:** Spares data enhancement
**Subline:** Materials data you can search, trust and order from.

**Intro:**
Bad materials data costs money quietly. Duplicate part numbers, vague descriptions and missing manufacturer details mean stores order parts they already hold and technicians cannot find what they need. We help operators clean and structure their spares data, using AI to do the bulk extraction and engineers to check it. Duplicates come out, parts can be found first time, and every line is fit to order from.

**How we do it:**

**AI extraction from the source documents.** Manually cleansing thousands of material lines takes months. We use AI to read O&M manuals, datasheets, BOMs and existing records, and extract manufacturer, part number and key attributes into a standard structure. [MARK TO CONFIRM tools and turnaround]

**Engineer verification.** AI gets most lines right and some confidently wrong. Engineers review the output, prioritising critical spares, so every line that matters has been checked by a person.

**Standard descriptions.** Free-text descriptions make parts impossible to search. We apply a consistent naming convention (noun, modifier, attributes) so the same part always looks the same.

**Find duplicates and dead stock.** With clean data, duplicates and unused stock become visible. We flag them for consolidation or disposal, which often releases cash on its own.

**What you get:**
- Cleansed materials master in your CMMS or ERP format
- Duplicate and dead stock report
- Naming convention and data standard
- Data quality score before and after

**FAQs:**
- *What is spares data cleansing?* Correcting and standardising materials records so each part has an accurate, unique and searchable entry.
- *How does AI help with spares data?* It reads manuals, datasheets and old records at speed and extracts the key fields. Engineers then check the results, so the work takes weeks instead of months.
- *Will this work with our system?* We deliver in a format ready to load into the common CMMS and ERP platforms. [MARK TO CONFIRM which systems Align has loaded into]

**Related:** Spare Parts Strategy, Obsolescence Review, Critical Spares Review (add Digital Solutions once confirmed)

---

## 8A. Design Engineering, Engineering Services (`design-engineering.html`)

> **[MARK TO CONFIRM]** Whole page. Kept from the live site. Scope below is drawn from the current Services page (concept to detailed design, P&IDs, CAD, structural and process engineering). Mark to confirm the blocks and deliverables.

**Eyebrow:** Engineering services
**H1:** Design engineering
**Subline:** Concept to detailed design, by engineers who will have to maintain it.

**Intro:**
Most maintenance problems are designed in. A pump with no isolation, a valve nobody can reach, a system with no way to test the standby: each one costs years of extra work after handover. We help operators design new plant and modifications with reliability and maintainability built in from the first sketch. Designs get built right first time and stay cheap to run.

**How we do it:**

**Concept and feasibility.** A weak concept cannot be rescued by good detail. We test options against cost, operability and maintenance burden before any detailed design starts, so the decision is made on the whole-life picture. {#concept}

**Detailed design.** Drawings that do not match the plant cause errors on site and in every future job. We produce P&IDs, CAD models and drawings, and structural and process design, to your standards and checked against site surveys. {#detailed-design}

**Design for reliability.** Designers rarely see how their plant fails. Our reliability engineers review designs with criticality and FMECA thinking, catching single points of failure, missing isolations and access problems while they are still cheap to fix.

**Modifications and brownfield work.** Changes to existing plant are where drawings and reality drift apart. We survey, update as-builts and design modifications that fit the plant as it is, not as it was drawn. {#modifications}

**What you get:** [MARK TO CONFIRM]
- Concept options report
- P&IDs, CAD models and general arrangement drawings
- Design reliability review findings
- Updated as-built documentation

**Proof:** Automated line redesign (existing case study, FMCG manufacturer in the East Midlands, 18% OEE improvement).

**FAQs:**
- *Can you work to our drawing standards?* Yes. [MARK TO CONFIRM CAD platforms used]
- *Do you design for hazardous areas?* [MARK TO CONFIRM; ties to Mark's CompEx and the team's ATEX experience]

**Related:** Project Delivery, FMECA and RCM, Asset Management

---

## 8B. Asset Management, Engineering Services (`asset-management.html`)

> **[MARK TO CONFIRM]** Whole page. Kept from the live site (lifecycle planning, risk assessment, compliance assurance). This is Align's own asset management offer, not MCP-style Physical Asset Management: no ISO 55001 gap analysis or certification support.

**Eyebrow:** Engineering services
**H1:** Asset management
**Subline:** Repair, refurbish or replace: decisions made on evidence.

**Intro:**
Ageing assets force hard choices. Without condition and cost data, capital goes to whichever asset failed most recently, and the next crisis is already building somewhere else. We help operators plan the life of their assets using condition, risk and cost evidence, and keep them compliant along the way. Capital goes where it reduces the most risk, and nothing gets missed at audit.

**How we do it:**

**Know what you have and what state it is in.** Lifecycle decisions need a reliable register and condition baseline. We build or verify both, with AI extracting asset data from existing records and engineers confirming it on site.

**Lifecycle plans.** Running an asset to the end of its life by accident is the most expensive way to do it. We set out repair, refurbish, life-extend or replace options for each major asset, with costs and timing, so spend can be planned years ahead. {#lifecycle}

**Risk assessment.** Not every old asset is a problem. We rank assets by condition, criticality and consequence, so capital and attention go to the ones carrying real risk. {#risk}

**Compliance assurance.** Statutory inspections and written schemes slip when nobody owns them. We check that every regulated asset has the right inspection regime, that it is being done and that the records will stand up to a regulator. {#compliance}

**What you get:** [MARK TO CONFIRM]
- Verified asset register with condition baseline
- Lifecycle plans with cost and timing
- Asset risk ranking
- Compliance gap report and action plan

**Proof:** Cleanroom engineering review (existing case study, pharmaceutical, zero compliance failures across two inspections).

**FAQs:**
- *What is asset lifecycle planning?* Deciding in advance when each major asset will be maintained, refurbished or replaced, based on its condition, risk and cost.
- *Do you offer ISO 55001 certification support?* No. We focus on the practical engineering decisions behind asset management.

**Related:** Equipment Criticality, Obsolescence Review, Risk-Based Maintenance

---

## 8C. Project Delivery, Engineering Services (`project-delivery.html`)

> **[MARK TO CONFIRM]** Whole page. Kept from the live site (project management, commissioning, testing and structured handover).

**Eyebrow:** Engineering services
**H1:** Project delivery
**Subline:** Delivered on scope, commissioned properly and handed over ready to maintain.

**Intro:**
Projects are usually judged on the day they finish, and maintenance lives with them for the next 20 years. Missing documents, no spares and an empty CMMS are common at handover, and the first failures arrive before anyone knows how to fix them. We help operators deliver projects that are complete on handover day: built, tested and loaded into the maintenance system. The plant runs from the day it starts, not from the day the paperwork catches up.

**How we do it:**

**Project management.** Projects slip when scope, cost and interfaces are managed in separate places. We run scope, programme, budget and contractor interfaces as one plan, with one point of contact. {#project-management}

**Procurement and installation.** Late or wrong equipment is the most common cause of delay. We support procurement, expedite long-lead items and coordinate installation contractors on site.

**Commissioning and testing.** Equipment that is not properly commissioned fails early. We plan and run commissioning and testing against defined acceptance criteria, with every result recorded. {#commissioning}

**Handover into maintenance.** This is where most projects fall short. Before handover, we set up the maintenance strategy, critical spares and CMMS data for the new equipment, so it is maintained properly from day one. {#handover}

**What you get:** [MARK TO CONFIRM]
- Project plan, programme and reporting
- Commissioning and test records
- Handover pack: as-builts, manuals, certificates
- Maintenance strategy, critical spares list and CMMS data for new assets

**Proof:** [MARK TO CONFIRM] sector-only example.

**FAQs:**
- *Do you manage contractors on our behalf?* [MARK TO CONFIRM]
- *What is included in a handover pack?* As-built drawings, O&M manuals, test and inspection certificates, and the maintenance and spares set-up for the new equipment.

**Related:** Design Engineering, Critical Spares Review, Work Planning and Scheduling

---

## 9. Facilities Management (`facilities-management.html`)

> **[UNCONFIRMED SERVICE]** Built as a single page, no sub-pages. Until Mark confirms the scope it is left out of the nav, the sitemap and the Services overview, carries a `noindex` meta tag, and nothing on the site links to it. The "unconfirmed" flag lives in this doc only, never on the page.

**Eyebrow:** Consulting services
**H1:** Facilities management
**Subline:** Reliability engineering for the buildings and infrastructure around your process.

**Intro:**
Site infrastructure is often maintained to a contractor's standard schedule, with little link to what matters most on your site. HVAC, power distribution, fire systems and utilities get the same treatment whether they serve an office or a control room. We help operators apply the same criticality-led thinking to facilities that we apply to process plant. Compliance is met, spend goes where it counts and the critical building services stay up.

**How we do it:** [MARK TO CONFIRM every block]

**Criticality for building services.** We rate facilities assets by consequence, so the HVAC serving a server room or cleanroom is not treated like the HVAC serving a canteen.

**Planned maintenance and statutory compliance.** We review planned maintenance against statutory and good-practice requirements [MARK TO CONFIRM: SFG20 or other standard], removing duplication and closing compliance gaps.

**FM contract review.** We check what your FM contractor is delivering against what the contract and the assets need.

**What you get:** [MARK TO CONFIRM]

---

## 10. Digital Solutions (`digital-solutions.html`)

> **[UNCONFIRMED SERVICE]** Built as a single page. Same rule as Facilities Management: not in the nav, sitemap or Services overview, `noindex`, nothing links to it. This page carries the AI-first positioning most directly, so it is worth confirming early. Until then, the Reliatic block stays on the Services overview, and service pages link to Spares Data Enhancement instead of Digital Solutions.

**Eyebrow:** Consulting services
**H1:** Digital solutions
**Subline:** AI that turns your scattered asset data into something you can use.

**Intro:**
Every plant has the data it needs to run better. It is just locked in PDF manuals, scanned P&IDs, decades of free-text work orders and spreadsheets nobody trusts. We help operators extract, structure and analyse that data using AI, checked by reliability engineers. Asset registers, failure histories and maintenance strategies that used to take months now take weeks.

**How we do it:**

**AI data extraction.** Building an asset register by hand from drawings and manuals is slow and error-prone. We use AI to read P&IDs, O&M manuals, datasheets and nameplate photos, and extract tags, functions, manufacturers and parts into a structured register. Engineers verify the output before it goes anywhere near your CMMS.

**Asset data analysis.** Work order history holds the story of how your plant fails, but most of it is free text with poor failure coding. We use AI to classify historical work orders into failure modes, then apply reliability analysis, including Weibull, to show which assets fail most, how and why.

**Digital Reliability Engineer.** Through our partnership with Reliatic, clients keep a working reliability tool after we leave, not just a report. [MARK TO CONFIRM current status of the Reliatic partnership and how to describe it]

**Engineers in the loop.** AI is fast but not accountable. Every output that drives a maintenance or safety decision is reviewed by an engineer. That is the difference between AI-assisted engineering and a software demo.

**What you get:** [MARK TO CONFIRM]
- Structured asset register from your existing documents
- Classified failure history with reliability analysis
- CMMS-ready data loads

**FAQs:**
- *Is our data safe?* [MARK TO CONFIRM data handling: where processing happens, what tools are used, NDAs]
- *Do we need to buy new software?* No. Outputs are delivered in formats your existing systems can use.

---

## 11. HSEQ (`hseq.html`)

Under Other Services. Currently "coming soon" on the live site. **[MARK TO CONFIRM scope of every block.]**

**Eyebrow:** Other services
**H1:** HSEQ
**Subline:** Health, safety, environment and quality support built into engineering, not bolted on.

**Intro:**
Safety and quality findings often sit apart from maintenance and engineering decisions, so the same risks get raised in audits year after year. We help operators bring HSEQ into the engineering work: hazards identified during design and maintenance reviews, controls built into procedures, and systems ready for audit. Fewer findings, safer plant and a clear audit trail.

**How we do it:**

**Hazard studies.** HAZID and HAZOP support for new projects, modifications and existing plant, facilitated by engineers who know the equipment. (HAZID / HAZOP already appears in the 10-step assessment.)

**Hazardous area competence.** Mark holds CompEx certification, and the team has ATEX experience from offshore operations. [MARK TO CONFIRM what hazardous area services Align offers: inspection, DSEAR assessments, compliance reviews]

**Management system readiness.** Support preparing for ISO 9001, ISO 14001 and ISO 45001. [MARK TO CONFIRM, and check consistency with Align's own certifications being in progress]

**Safety-critical maintenance.** Making sure safety-critical elements are identified, maintained and verified, and that the evidence is there when the regulator asks.

**What you get:** [MARK TO CONFIRM]

---

## 12. Lubricants (`lubricants.html`)

Existing page, confirmed as a real offer. Moves under Other Services in the nav, next to HSEQ, labelled "Lubricant Supply and Oil Analysis". Cross-linked from Condition Monitoring.

**Copy addition: environmentally friendly options.** The page already lists Shell Panolin, but doesn't say why it matters. Add a short block:

**Eyebrow:** Environmentally acceptable lubricants
**Heading:** Lower-impact options where they matter.
**Copy:** Where oil can reach water or soil, a standard mineral lubricant is a liability. We supply environmentally acceptable lubricants, including the biodegradable Shell Panolin range, for hydraulics, gearboxes and stern tubes on marine, offshore, forestry and water sites. We help you choose where an environmentally acceptable lubricant is required, where it is worth the cost and where a conventional oil is the better choice. [MARK TO CONFIRM the ranges Align supplies beyond Panolin, and the applications to name]

Add one FAQ: *Do you supply biodegradable lubricants?* Yes. We supply environmentally acceptable lubricants, including Shell Panolin, and advise on where they are needed. [MARK TO CONFIRM]

---

## 13. Packages (`packages.html`)

Content unchanged: Essentials, Advanced, Enterprise, plus "Not sure which package fits?". Changes:
- Add IDs `#essentials`, `#advanced`, `#enterprise` for dropdown links.
- Eyebrow changes from "Packages" to "Services / Packages" to show it now sits under Services.
- Package copy stays as it is, including "Full asset management" and "Custom project delivery" under Enterprise, now that those services are kept. "Technical advisory (10 hrs/mo)" is a package term, not a performance stat, so it stays.

---

## 14. Our Method (replaces How We Work)

**Approved at review 1:** option A, with the option B "Where to start" problem finder at the bottom. The options below are kept for the record.

The current page is a generic Discover, Design, Deliver, Support process. It could belong to any consultancy. Options:

**A. Our Method (recommended).** A page that shows exactly how an Align engagement runs, built on the existing 10-step Full Systems Assessment (asset register, criticality, failure history, reliability analysis, scoring, spares, HAZID/HAZOP, condition monitoring, implementation, lifecycle). Each step gets: what we do, which data we use, where AI does the heavy lifting, what you receive. This is the strongest proof of the AI-first, data-led positioning, and it gives every service page something concrete to link to.

**B. Where to start.** A problem-led page: "Too many breakdowns", "PM backlog out of control", "Spares costs too high", "Asset data is a mess", "Audit coming up". Each problem links to the right service and package. Good for conversion, weaker for SEO.

**C. Our data and AI approach.** A page about how Align uses AI on P&IDs, manuals and CMMS data, with the engineer-in-the-loop principle and data handling. Strong for positioning. Overlaps with Digital Solutions if that is confirmed.

**D. Free health check.** A short self-assessment (10 questions on criticality, PM compliance, backlog, spares, data) that gives a score and books a call. Strong lead capture. Needs form handling.

**Recommendation:** Build A now, with a short "Where to start" block (B) at the bottom of it. Consider D later as a resource.

### Draft copy for Our Method (`our-method.html`)

**Eyebrow:** Our method
**H1:** Ten steps from inherited maintenance to a reliability programme.
**Subline:** The same structured sequence on every engagement. Your data in, a working strategy out.

**Intro:**
Most consultancies start with workshops and opinions. We start with your data: P&IDs, O&M manuals and CMMS history. AI does the first pass on extraction and classification. Engineers then do what AI cannot: check it against the plant, challenge it with your team and make the calls. Each step builds on the last, and you can stop at any point with something usable.

**Steps** (existing 10, each expanded to: what we do / data used / what you get):
01 Asset register. 02 Criticality. 03 Failure history. 04 Reliability analysis. 05 Reliability scoring. 06 Spare parts. 07 HAZID / HAZOP. 08 Condition monitoring. 09 Implementation. 10 Lifecycle upgrade.

**Where to start** (problem finder, bottom of the page):
**Heading:** Not sure where to start? Start with the problem.
Six problem tiles. Each one has a one-line description and links to the right service, with a suggested package:

| Problem | Line | Links to |
|---|---|---|
| Too many breakdowns | The same failures keep coming back. | Root Cause Analysis, Risk-Based Maintenance |
| PM work never gets finished | More planned work than hours to do it. | Maintenance Rationalisation, Work Planning and Scheduling |
| Spares cost too much, or are never there | Cash on the shelf, but not the part you need. | Critical Spares Review, Spare Parts Strategy |
| Our asset data is a mess | Registers, manuals and CMMS do not agree. | Spares Data Enhancement, Equipment Criticality |
| Ageing plant, unclear future | Repair, refurbish or replace, and when. | Asset Management, Obsolescence Review |
| New project or modification | Plant that is ready to maintain from day one. | Design Engineering, Project Delivery |

Built as plain links in a glass-card grid. No quiz logic and no form, so it needs no JS.

**Keep from current page:** "Why Align" three cards (integrated expertise, industry-led, outcome focused). The integrated expertise card keeps its reference to design, since those services stay. The "Outcome focused" card mentions uptime and cost avoidance in general terms, with no figures, so it stays.

---

## 15. Align Insights

Nav label: **Align Insights.** Built for SEO blog content.

### 15.1 Hub (`insights.html`)
**H1:** Align Insights
**Subline:** Practical writing on maintenance, reliability and spares, from engineers who do the work.
Three blocks: latest 3 articles, latest 2 case studies, featured resources.

### 15.2 Articles (`articles.html`)
- Card grid: category tag, title, 1-line excerpt, date, read time. Author is Mark on every post (E-E-A-T, unlike MCP).
- Category filter (vanilla JS, no reload): Maintenance, Reliability, Spares, Digital, HSEQ, News. Categories mirror the service categories so every article supports a service page.
- Each article (`/insights/<slug>.html`): Article and BreadcrumbList schema, author box linking to About Mark, "Related service" CTA, 2 to 3 related articles.

**Seed article list** (titles written as search queries; each maps to a service page) [MARK TO CONFIRM topics and who drafts]:
1. How to rate equipment criticality using the NORSOK approach (Equipment Criticality)
2. FMECA vs RCM: what is the difference and when do you need each? (FMECA and RCM)
3. Why so many PM tasks have no failure mode behind them (Maintenance Rationalisation)
4. Planning vs scheduling: why mixing them kills wrench time (Work Planning)
5. What Weibull beta tells you about your maintenance strategy (Reliability)
6. Root cause analysis: when 5 Whys is not enough (Root Cause Analysis)
7. Which assets are worth condition monitoring? (Condition Monitoring)
8. What makes a spare part critical? (Critical Spares Review)
9. Obsolescence: how to find unsupported parts before they fail (Obsolescence Review)
10. Using AI to build an asset register from P&IDs and O&M manuals (Spares Data Enhancement; Digital Solutions once confirmed)
11. Designing for maintainability: the problems we see after handover (Design Engineering)
12. Repair, refurbish or replace? A practical guide to asset lifecycle decisions (Asset Management)
13. What a good project handover pack looks like (Project Delivery)
14. Environmentally acceptable lubricants: where they are required and where they make sense (Lubricants)

### 15.3 Case Studies (`case-studies.html`)
Existing page, URL unchanged, now under Align Insights. Changes:
- Case study 01 anonymised (done): "Offshore stimulation, data-driven reliability optimisation", for "an offshore operator on the Norwegian Continental Shelf".
- Add a service filter alongside the existing sector filter, matching the new service names.
- Retag "Related" lines to the new service names (case study 02 links to Design Engineering, 05 to Asset Management).
- Figures stay as they are on every card.
- **[MARK TO CONFIRM]** all six are real projects. Card 01 and card 04 are detailed and clearly genuine, so they're the quickest to get signed off. Ask Mark for those first so the page has numbers again soon.

### 15.4 Resources (`resources.html`)
Downloadable tools. Placeholder until content exists. [MARK TO CONFIRM which to produce]
- Criticality matrix template (C1 to C3)
- FMECA worksheet template
- Critical spares checklist
- Maintenance health check (self-assessment)
- Glossary of reliability terms (good SEO page in its own right)

Downloads ungated to start. Gating would need a form flow (FormSubmit is already in the CSP).

---

## 16. About

### 16.1 About Align (`about.html`)
**Eyebrow:** About
**H1:** An engineering consultancy built by engineers.  (keep)
**Intro (new):**
Align Solutions is a reliability engineering consultancy based in Norwich, working across the UK and offshore. We help operators get more from their assets through better maintenance, reliability and spares management. We work from your data, use AI to move faster, and stay until the change is working on your plant.

**Sections:**
- What we do: one line per service group (Maintenance, Reliability, Spares, Design Engineering, Asset Management, Project Delivery, HSEQ, Lubricants) plus Our Method. No count stated.
- How we are different: keep the existing four cards (No handoffs, We stay till it works, Field-proven, One relationship) unchanged.
- AI-first, engineer-led: short block. "We use AI to do the slow work: reading manuals, extracting asset data, classifying failure history. Engineers make every decision that matters."
- Stats band: stays as it is (20+, 150+, 6, 98%).
- Accreditations block (section 18).
- Partners: Shell, Castrol, Reliatic.
- Short founder teaser linking to About Mark.

### 16.2 About Mark (`about-mark.html`)
**Eyebrow:** About
**H1:** Mark Pitt
**Subline:** Founder and Managing Director

Content: the existing founder letter moves here in full (offshore career from mechanic on the Norwegian Continental Shelf to Engineering Manager, why he set up Align), plus:
- Credentials: Chartered Manager, FInstLM, HND Engineering, CompEx (existing).
- Career timeline [MARK TO CONFIRM roles, dates and sectors, no client names].
- Areas of expertise: three to five bullets.
- Articles by Mark (auto-listed from Insights once they exist).
- LinkedIn link [MARK TO CONFIRM URL; also still missing site-wide].
- Person schema for search.

Founder letter: moves across unchanged, including "six disciplines" and its list of services.

---

## 17. Sectors (`sectors.html`)

Keep the six sectors and the page structure. Add to each sector card:
- **Image slot.** A `.mark-band` photo panel per sector, empty-state placeholder until photography is supplied. [MARK TO CONFIRM photos: one per sector, real site photography preferred, raw files into `Brand_Assets/Images/`]
- **Facts slot.** The existing three fact tiles per sector stay as they are. New facts Mark supplies are added alongside them.
- **Typical problems line.** One sentence on the reliability problems common in that sector, and links to the two or three most relevant services.

Example for Oil and Gas:
> Ageing offshore assets, tight weather windows and long lead times for critical spares. Related: Equipment Criticality, Critical Spares Review, Obsolescence Review.

---

## 18. Accreditations block

A shared block on Home and About Align (not in the footer, which is unchanged).

**Eyebrow:** Accreditations
**Heading:** Working towards ISO certification.
**Copy:** We are working towards ISO 9001 (quality), ISO 14001 (environment) and ISO 45001 (health and safety) certification. [MARK TO CONFIRM which standards, certifying body and expected dates]
**Layout:** three glass tiles, each with the standard number, its name and an "In progress" label. Logo slots to swap in once certified. Never display a certification body's logo before certification.

---

## 19. Existing content to fix (found during the audit)

- ~~`case-studies.html`: client named in case study 01.~~ **Fixed in this revision** (title, description and HTML comment). Not committed yet.
- **"Six disciplines" on `services.html`** is replaced when that page is rewritten (section 5), because the new service map no longer has six groups:
  - `services.html` hero: "Six integrated disciplines delivered by engineers..." replaced (section 5).
  - `services.html` section heading: "Six disciplines. One integrated approach." becomes "Every discipline. One integrated team."
  - `services.html` CSS comment "six disciplines on a 12-column bento": updated to match.
- ~~**Sector counts.**~~ **Done.** The `index.html` "Sectors served" tile is counted at runtime from the `.sector-band` sections on `sectors.html` (`data-count-from`, `initSectorCount`). The intro statement now reads "works across the sectors where failure costs most".
- `about.html` founder letter and the "6 Disciplines" stat: unchanged (Mark's wording and stat).
- `services.html`: HSEQ marked "Coming soon / In development". Replaced by the HSEQ page.
- Every page: nav block replaced site-wide (shared block, applied to all pages per CLAUDE.md).
- `sitemap.xml`: add the visible new pages, remove `how-we-work.html`. Facilities Management and Digital Solutions stay out.
- `vercel.json`: 301 from `how-we-work.html` to `our-method.html`.
- Stats: the takedown was reverted at review 3. All figures are live as before.
- LinkedIn URL still missing (carried over from the September audit).

---

## 20. Stats

*(Revised at review 3.)* Existing figures are Mark's own and stay live exactly as they are on the site. There is no hiding logic.

The only figures still needing input are ones that don't exist yet. These are placeholders in this plan for the **new** service pages:

- Proof lines such as "PM hours reduced by X%" [MARK TO CONFIRM]. These aren't built until Mark supplies a real figure.
- Typical ranges in FAQs (FMECA reduction, review durations) [MARK TO CONFIRM]. These answers are written without numbers until he does.

"Sectors served" on the home page is counted automatically from the sector bands on `sectors.html`, with 6 as the fallback (live, commit 088a7f3).
