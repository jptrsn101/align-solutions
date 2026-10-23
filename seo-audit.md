# SEO audit: Align Solutions

Date: 23 October 2026
Scope: all 35 HTML pages in the repo, plus sitemap.xml and robots.txt.
Live domain: https://www.alignsolutions.co.uk

## Keyword data

The DataForSEO MCP server did not connect for this pass (connection timeout after 30s). No search volumes were used. Titles and descriptions below were written from the terms that appear in each page's own copy, using the phrasing a buyer would type (for example "equipment criticality analysis", "maintenance management consultancy", "spare parts strategy"). Once DataForSEO is reachable, the phrasing choices on the service pages are worth checking against real volumes.

## Findings

### 1. Title tags (target 50 to 60 characters)

Pass (6): index, about, about-mark, contact, lubricants, services.

Too short (25 pages). Most of the 20 service pages use the pattern "Service name | Align Solutions" and carry no qualifier a buyer searches with:

| Page | Length | Current title |
|---|---|---|
| hseq.html | 22 | HSEQ \| Align Solutions |
| articles.html | 26 | Articles \| Align Solutions |
| resources.html | 27 | Resources \| Align Solutions |
| fmeca-rcm.html | 31 | FMECA and RCM \| Align Solutions |
| privacy.html | 32 | Privacy Policy \| Align Solutions |
| asset-management.html | 34 | Asset management \| Align Solutions |
| project-delivery.html | 34 | Project delivery \| Align Solutions |
| spares-management.html | 35 | Spares management \| Align Solutions |
| digital-solutions.html | 35 | Digital solutions \| Align Solutions (noindex) |
| design-engineering.html | 36 | Design engineering \| Align Solutions |
| terms.html | 36 | Terms & Conditions \| Align Solutions |
| obsolescence-review.html | 37 | Obsolescence review \| Align Solutions |
| root-cause-analysis.html | 37 | Root cause analysis \| Align Solutions |
| condition-monitoring.html | 38 | Condition monitoring \| Align Solutions |
| spare-parts-strategy.html | 38 | Spare parts strategy \| Align Solutions |
| facilities-management.html | 39 | Facilities management \| Align Solutions (noindex) |
| critical-spares-review.html | 40 | Critical spares review \| Align Solutions |
| maintenance-management.html | 40 | Maintenance management \| Align Solutions |
| reliability-management.html | 40 | Reliability management \| Align Solutions |
| risk-based-maintenance.html | 40 | Risk-based maintenance \| Align Solutions |
| spares-data-enhancement.html | 41 | Spares data enhancement \| Align Solutions |
| maintenance-rationalisation.html | 45 | Maintenance rationalisation \| Align Solutions |
| packages.html | 46 | Engineering Retainer Packages, Align Solutions |
| work-planning-scheduling.html | 46 | Work planning and scheduling \| Align Solutions |
| equipment-criticality.html | 48 | Equipment criticality analysis \| Align Solutions |

Too long (2): insights.html (61), our-method.html (62).

Brand missing or inconsistent separator (3): sectors.html ("Industry Sectors, Oil & Gas, Manufacturing & Energy", no brand), case-studies.html and packages.html (comma instead of the "|" used everywhere else).

No duplicate titles found.

### 2. Meta descriptions (target 140 to 155 characters)

Pass (5): index, about, about-mark, contact, services. None of the 20 service pages pass.

Too short (24 pages), ranging from 59 (terms) to 138 (spares-management). The service-page descriptions are one-line ledes that drop the service name, for example fmeca-rcm.html: "We help operators work out how each critical asset actually fails..." (119), with no mention of FMECA or RCM.

Too long (6): equipment-criticality (172), lubricants (160), packages (160), case-studies (158), maintenance-management (157), sectors (156).

No duplicate descriptions found.

### 3. H1

Every page has exactly one H1. No issue.

### 4. Canonical URLs

Every page has an absolute canonical on https://www.alignsolutions.co.uk, matching its own URL (index canonicalises to "/"). og:url matches the canonical on every page. No issue.

### 5. Open Graph and Twitter tags

Open Graph is complete on every page (type, url, title, description, image with width, height and alt, site_name, locale). og:title and og:description mirror the title and description on every page, so they inherit the length problems above.

Twitter card tags are missing entirely on privacy.html and terms.html.

The shared og:image (Brand_Assets/og-image.jpg) and logo-512.png return 200 on the live site.

### 6. Image alt text

No image is missing an alt attribute. The 15 images with alt="" are all the decorative white logomark (`.blend-mark`) laid over photography, which is correct. No issue.

### 7. Heading order

One skip: resources.html goes from H1 straight to five H3 card titles, with no H2. Every other page steps down correctly.

### 8. Internal links

- Every page (35) links to how-we-work.html from the footer. That file does not exist; Vercel 301-redirects it to our-method.html. Each crawl of the footer link costs a redirect hop.
- The OfferCatalog JSON-LD on index.html and services.html still points four services at old anchors (services.html#reliability, #maintenance, #design, #asset-management, #project-delivery) although each now has its own page.
- facilities-management.html and digital-solutions.html have no inbound links. This is intentional (hidden until Mark confirms them).
- No other broken internal links.

### 9. sitemap.xml and robots.txt

- robots.txt allows everything and names the sitemap. Correct.
- sitemap.xml lists all 31 indexable pages and none of the noindexed ones. Correct. lastmod is 2026-10-22 throughout and will need bumping for pages changed in this pass.

### 10. JSON-LD

- Organization: only index.html carries it (as ProfessionalService with @id #organization). The other 34 pages only reference the organisation inside Service.provider, or not at all (about, contact, case-studies, sectors, insights, privacy, terms, articles, resources, about-mark, our-method).
- Service: present on all 20 service pages plus services.html, packages.html and lubricants.html. No issue.
- BreadcrumbList: present on all 20 service pages, about-mark, our-method and insights. Missing on pages that sit a level down in the nav: lubricants.html and packages.html (under Services), case-studies.html, articles.html and resources.html (under Align Insights).
- All JSON-LD blocks parse as valid JSON.

### 11. Noindexed, duplicated or missing pages

Noindexed (4), all with `noindex, follow`, all absent from the sitemap:

- facilities-management.html and digital-solutions.html: deliberate, hidden until Mark confirms.
- articles.html and resources.html: placeholder hubs, linked from the nav under Align Insights. Deliberate while they hold no real content. Leave noindexed until articles or downloadable templates exist.

No duplicated pages. No indexable page missing from the sitemap.

### Outside scope, flagged only

- hseq.html shows an editorial note in live copy under "Hazard studies": "(HAZID / HAZOP already appears in the 10-step assessment.)". It reads like an internal comment. Not changed, as this pass doesn't touch copy.
- No LinkedIn or other sameAs profile exists, so Organization carries no sameAs.

## Changes made

No design, layout or visible copy was changed. Every edit is in `<head>`, in JSON-LD, in a link target or in a heading tag.

### Titles and meta descriptions (29 pages)

New title and description on every failing page, mirrored into og:title, og:description, twitter:title and twitter:description. All are now 50 to 60 and 140 to 155 characters, unique, and use terms from each page's own copy.

| Page | New title |
|---|---|
| services.html | Reliability Engineering Services UK \| Align Solutions (title kept, description rewritten to name spares management) |
| maintenance-management.html | Maintenance Management Consultancy UK \| Align Solutions |
| reliability-management.html | Reliability Management and Engineering \| Align Solutions |
| spares-management.html | Spares Management Consultancy UK \| Align Solutions |
| equipment-criticality.html | Equipment Criticality Analysis UK \| Align Solutions |
| fmeca-rcm.html | FMECA and Reliability Centred Maintenance \| Align Solutions |
| maintenance-rationalisation.html | Maintenance Rationalisation and Review \| Align Solutions |
| work-planning-scheduling.html | Maintenance Work Planning and Scheduling \| Align Solutions |
| risk-based-maintenance.html | Risk-Based Maintenance (RBM) Consultancy \| Align Solutions |
| root-cause-analysis.html | Root Cause Analysis for Equipment Failure \| Align Solutions |
| condition-monitoring.html | Condition Monitoring Strategy and Advice \| Align Solutions |
| spare-parts-strategy.html | Spare Parts Strategy and Stocking Policy \| Align Solutions |
| critical-spares-review.html | Critical Spares Review and Assessment \| Align Solutions |
| obsolescence-review.html | Obsolescence Review and Management UK \| Align Solutions |
| spares-data-enhancement.html | Spares Data Cleansing and Enhancement \| Align Solutions |
| design-engineering.html | Design Engineering for Plant Modifications \| Align Solutions |
| asset-management.html | Asset Management and Lifecycle Planning \| Align Solutions |
| project-delivery.html | Project Delivery and Commissioning \| Align Solutions |
| hseq.html | HSEQ Support for Engineering Operations \| Align Solutions |
| lubricants.html | Title kept, description trimmed to 154 |
| packages.html | Reliability and Maintenance Retainers \| Align Solutions |
| sectors.html | Oil & Gas, Energy and Industry Sectors \| Align Solutions |
| case-studies.html | Reliability Engineering Case Studies \| Align Solutions |
| our-method.html | Our Method: Ten-Step Systems Assessment \| Align Solutions |
| insights.html | Maintenance and Reliability Insights \| Align Solutions |
| articles.html | Maintenance and Reliability Articles \| Align Solutions |
| resources.html | Maintenance and Reliability Templates \| Align Solutions |
| privacy.html | Privacy Policy and Your Personal Data \| Align Solutions |
| terms.html | Website Terms and Conditions of Use \| Align Solutions |

Left unchanged: index, about, about-mark and contact (already passing), and facilities-management and digital-solutions (hidden and noindexed until Mark confirms the services; rewrite them when they go live).

### Open Graph and Twitter

- Added the full Twitter card block to privacy.html and terms.html.

### JSON-LD

- Organization block (`@id` https://www.alignsolutions.co.uk/#organization, name, url, logo, email, Norwich address, founder) added to the 34 pages that lacked it. It shares the `@id` that every Service.provider already referenced, so the graph now resolves on every page.
- index.html: `@type` changed from `ProfessionalService` to `["Organization", "ProfessionalService"]`.
- index.html and services.html OfferCatalog: five service URLs moved from old services.html anchors to their own pages (reliability-management, maintenance-management, design-engineering, asset-management, project-delivery).
- BreadcrumbList added to lubricants.html and packages.html (Home > Services > page) and to case-studies.html, articles.html and resources.html (Home > Align Insights > page).

### Internal links

- Footer "How We Work" link on all 35 pages now points at our-method.html instead of the redirecting how-we-work.html. The link label is unchanged.

### Headings

- resources.html: the five card titles changed from H3 to H2, so the page steps H1 > H2. Styling comes from `.link-card-title`, so the cards look identical.

### Sitemap

- lastmod bumped to 2026-10-23 on all 31 URLs. No URLs added or removed.

### Verification

- Re-ran the audit script: every indexable page passes title length, description length, Organization schema, Twitter tags, OG/Twitter match, heading order and internal links. All JSON-LD parses. No duplicate titles or descriptions. sitemap.xml validates with xmllint.
- No em dashes in any added text.
- There is no build step (static site). All 35 pages were loaded from localhost:3000 in headless Chrome: every page returned 200 with no console errors, failed requests or 4xx assets. resources.html was screenshotted to confirm the heading change didn't move anything.

### Still open

- Check the service-page phrasing against search volumes once DataForSEO connects.
- hseq.html editorial note in live copy (see Findings, outside scope).
- No sameAs on Organization until a LinkedIn URL exists.
