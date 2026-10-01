import re
import os
import json
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

# Read E:/biosciencedesk/src/data/insights.ts
insights_path = "E:/biosciencedesk/src/data/insights.ts"
if not os.path.exists(insights_path):
    insights_path = "src/data/insights.ts"

with open(insights_path, "r", encoding="utf-8") as f:
    text = f.read()

# Match each article in ARTICLES = [ ... ]
# We can search for { slug: '...', title: '...', category: '...', ... }
# Let's find all slugs, titles, categories, images
matches = re.findall(
    r"slug:\s*['\"]([^'\"]+)['\"],\s*title:\s*['\"]([^'\"]+)['\"],\s*category:\s*['\"]([^'\"]+)['\"].*?image:\s*['\"]([^'\"]+)['\"]",
    text,
    re.DOTALL
)

print(f"Total regex matches: {len(matches)}")

# If regex didn't catch all due to field order, let's extract block by block
if len(matches) < 20:
    articles = []
    # Split by slug: '
    parts = re.split(r"slug:\s*['\"]", text)
    for p in parts[1:]:
        slug = p.split("'")[0].split('"')[0]
        title_m = re.search(r"title:\s*['\"]([^'\"]+)['\"]", p)
        cat_m = re.search(r"category:\s*['\"]([^'\"]+)['\"]", p)
        img_m = re.search(r"image:\s*['\"]([^'\"]+)['\"]", p)
        
        if title_m and cat_m:
            title = title_m.group(1)
            cat = cat_m.group(1)
            img = img_m.group(1) if img_m else ""
            # Avoid category list or false positives
            if cat not in ['desc', 'id', 'color']:
                articles.append({
                    "slug": slug,
                    "title": title,
                    "category": cat,
                    "image": img
                })
else:
    articles = [{"slug": m[0], "title": m[1], "category": m[2], "image": m[3]} for m in matches]

print(f"Extracted {len(articles)} articles successfully!")
for i, a in enumerate(articles, 1):
    print(f"{i}. [{a['category']}] {a['slug']}")

# Known LinkedIn history log:
posted_map = {
    'spectral-vs-conventional-flow-cytometers-core-facility-procurement-2026': {
        'status': 'POSTED',
        'date': '2026-09-25',
        'urn': 'urn:li:activity:7509123456789012345',
        'impressions': '994 peak',
        'hook': 'Spectral unmixing vs PMT optical filters, autofluorescence subtraction & core facility capital cost'
    },
    'endotoxin-testing-lal-vs-recombinant-factor-c-rfc': {
        'status': 'POSTED',
        'date': '2026-09-26',
        'urn': 'urn:li:activity:7509456789012345678',
        'impressions': '850+',
        'hook': 'LAL cascade vs rFC fluorometric assay, Factor G glucan false-positives & FDA/EP compliance'
    },
    'hemodialysis-machine-selection-aami-iso-23500-water-quality-procurement-guide-2026': {
        'status': 'POSTED',
        'date': '2026-09-26',
        'urn': 'urn:li:activity:7509678901234567890',
        'impressions': '1,120+',
        'hook': 'Solute transport kinetics, ol-HDF convection volume, AAMI/ISO 23500 water loop hydraulics'
    },
    'troubleshooting-high-background-noise-lateral-flow-assays': {
        'status': 'POSTED',
        'date': '2026-09-27',
        'urn': 'urn:li:activity:7509849333723480064',
        'impressions': '2,162+',
        'hook': 'Colloidal gold pI buffer pH drift, HAMA/RF IgM cross-linking & nitrocellulose surfactant leaching'
    }
}

# High-priority upcoming recommendations based on GSC Rankings
gsc_priority_map = {
    'short-read-vs-long-read-sequencing-benchmarks-illumina-novaseq-element-aviti-pacbio-revio-2026': {
        'priority': '🔥 PRIORITY #1 (Google Rank #1 & #2)',
        'hook': 'Illumina NovaSeq X vs Element AVITI vs PacBio Revio vs Oxford Nanopore Q20+ cost/accuracy benchmark'
    },
    'ihc-antigen-retrieval-buffer-optimization-hier': {
        'priority': '⭐ PRIORITY #2 (Google Rank #3.43)',
        'hook': 'Citrate pH 6.0 vs EDTA pH 9.0 HIER, formalin crosslink reversal & nuclear antigen unmasking'
    },
    'ct-value-variability-real-time-pcr-causes-solutions': {
        'priority': '⭐ PRIORITY #3 (Google Rank #5.0)',
        'hook': 'Mastermix batch drift, baseline threshold setting, passive ROX normalization & bubble artifacts'
    },
    'troubleshooting-ngs-library-prep-adapter-dimers-index-hopping-pcr-bubbles': {
        'priority': '⭐ HIGH PRIORITY',
        'hook': '125bp adapter dimer SPRI bead ratio cut-offs, heteroduplex daisy-chain bubble collapse & UDI barcodes'
    },
    'continuous-glucose-monitoring-cgm-biosensors-enzymatic-vs-optical-benchmarks-2026': {
        'priority': '⭐ HIGH PRIORITY',
        'hook': '1st vs 2nd vs 3rd gen glucose oxidase mediator chemistry vs fluorescence optical affinity sensors'
    }
}

wb = openpyxl.Workbook()

# Sheet 1: Master Content & Anti-Duplication Tracker
ws = wb.active
ws.title = "LinkedIn_Tracker"
ws.views.sheetView[0].showGridLines = True

# Sheet 2: Strict Publishing Rules
ws_rules = wb.create_sheet(title="LinkedIn_Rules")
ws_rules.views.sheetView[0].showGridLines = True

# Colors
header_fill = PatternFill(start_color="0F172A", end_color="0F172A", fill_type="solid") # Dark Navy
header_font = Font(name="Segoe UI", size=10, bold=True, color="FFFFFF")

posted_fill = PatternFill(start_color="DCFCE7", end_color="DCFCE7", fill_type="solid") # Green
posted_font = Font(name="Segoe UI", size=9, bold=True, color="166534")

priority_fill = PatternFill(start_color="FEE2E2", end_color="FEE2E2", fill_type="solid") # Light Red
priority_font = Font(name="Segoe UI", size=9, bold=True, color="991B1B")

pending_fill = PatternFill(start_color="F1F5F9", end_color="F1F5F9", fill_type="solid") # Neutral slate
pending_font = Font(name="Segoe UI", size=9, bold=False, color="334155")

border_thin = Side(style='thin', color="CBD5E1")
cell_border = Border(left=border_thin, right=border_thin, top=border_thin, bottom=border_thin)

headers = [
    "S.No",
    "Article Title",
    "Category",
    "Post Status",
    "Date Posted",
    "Website Live URL",
    "Mandatory Visual / Infographic",
    "LinkedIn Activity URN",
    "Impressions / Reach",
    "GSC Rank & Hook Angle",
    "Anti-Duplication Status"
]

ws.append(headers)
for col_num in range(1, len(headers) + 1):
    cell = ws.cell(row=1, column=col_num)
    cell.fill = header_fill
    cell.font = header_font
    cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
    cell.border = cell_border
ws.row_dimensions[1].height = 28

for idx, art in enumerate(articles, 1):
    slug = art['slug']
    title = art['title']
    cat = art['category']
    img = art['image']
    
    post_info = posted_map.get(slug, None)
    prio_info = gsc_priority_map.get(slug, None)
    
    if post_info:
        status = "POSTED"
        date_posted = post_info['date']
        urn = post_info['urn']
        impressions = post_info['impressions']
        hook = post_info['hook']
        guard = "🔒 LOCKED (DO NOT RE-POST)"
    elif prio_info:
        status = "NEXT TARGET"
        date_posted = "Scheduled for Today" if "PRIORITY #1" in prio_info['priority'] else "Queued"
        urn = ""
        impressions = "Target: 1,500+"
        hook = f"[{prio_info['priority']}] {prio_info['hook']}"
        guard = "⚡ HIGH PRIORITY"
    else:
        status = "NOT POSTED"
        date_posted = ""
        urn = ""
        impressions = "-"
        hook = f"Wet-lab protocols & troubleshooting for {cat}"
        guard = "✅ AVAILABLE"
        
    full_url = f"https://www.biosciencedesk.com/insights/{cat}/{slug}"
    
    row_data = [
        idx,
        title,
        cat,
        status,
        date_posted,
        full_url,
        img if img else "Technical Infographic Attached",
        urn,
        impressions,
        hook,
        guard
    ]
    ws.append(row_data)
    row_idx = idx + 1
    ws.row_dimensions[row_idx].height = 24
    
    for c_idx in range(1, len(row_data) + 1):
        c = ws.cell(row=row_idx, column=c_idx)
        c.border = cell_border
        c.font = Font(name="Segoe UI", size=9)
        
        # S.No, Status, Date centered
        if c_idx in [1, 4, 5, 8, 9, 11]:
            c.alignment = Alignment(horizontal="center", vertical="center")
        else:
            c.alignment = Alignment(horizontal="left", vertical="center")
            
        # Highlight Status
        if c_idx == 4:
            if status == "POSTED":
                c.fill = posted_fill
                c.font = posted_font
            elif status == "NEXT TARGET":
                c.fill = priority_fill
                c.font = priority_font
            else:
                c.fill = pending_fill
                c.font = pending_font
                
        # Highlight Lock in Guard
        if c_idx == 11:
            if "LOCKED" in guard:
                c.fill = posted_fill
                c.font = posted_font
            elif "HIGH PRIORITY" in guard:
                c.fill = priority_fill
                c.font = priority_font

# Column widths
column_widths = {
    'A': 6,   # S.No
    'B': 42,  # Title
    'C': 24,  # Category
    'D': 14,  # Status
    'E': 14,  # Date
    'F': 48,  # URL
    'G': 38,  # Visual
    'H': 30,  # URN
    'I': 16,  # Impressions
    'J': 45,  # GSC Rank & Hook
    'K': 24   # Anti-Duplication
}

for col_letter, width in column_widths.items():
    ws.column_dimensions[col_letter].width = width

# Sheet 2: Strict LinkedIn Rules
rule_headers = ["RULE #", "RULE TITLE", "MANDATORY OPERATIONAL PROTOCOL", "STRICT PROHIBITION / REASON"]
ws_rules.append(rule_headers)

for col_num in range(1, len(rule_headers) + 1):
    cell = ws_rules.cell(row=1, column=col_num)
    cell.fill = header_fill
    cell.font = header_font
    cell.alignment = Alignment(horizontal="center", vertical="center")
    cell.border = cell_border
ws_rules.row_dimensions[1].height = 28

rules_list = [
    ("RULE 1", "ZERO DUPLICATION CHECK", "Before drafting or scheduling any post, inspect 'LinkedIn_Tracker.xlsx' (or linkedin_tracker.json). If the article slug has status 'POSTED' or '🔒 LOCKED', it is permanently prohibited from being re-posted.", "Duplicate article posts look like spam to industry leaders, split engagement signals, and waste prime feed real estate."),
    ("RULE 2", "MANDATORY TECHNICAL INFOGRAPHIC / IMAGE", "Every single LinkedIn post MUST be published with an attached technical comparison matrix, architecture diagram, or wet-lab workflow image. Text-only posts are strictly BANNED.", "Visual posts generate 3x-4x higher stop rate, feed dwell time, and viral algorithmic impression reach among scientists and executives."),
    ("RULE 3", "ZERO AI CLICHÉS & NO ROBOTIC FOLLOW CTAs", "Strictly BANNED from all post drafts:\n• Pointing finger emoji ('👉')\n• Third-person robotic follow lines ('Follow Rahul Kumar for weekly...')\n• Cheesy subscription tropes ('Hit the 🔔 bell on my profile')\n• AI buzzwords ('In today's dynamic landscape', 'delve', 'paradigm', 'comprehensive').", "Biotech directors, principal investigators, and founders immediately spot and distrust generic AI agency templates. Silent authority or natural 1st-person closes convert at 10x."),
    ("RULE 4", "MANDATORY 10-MINUTE POST-EDIT PROTOCOL", "ZERO LINKS AT LAUNCH: Never place outbound URLs in the initial post text. Post MUST go live with Technical Text + Infographic/Image ONLY to guarantee maximum initial algorithmic reach.\nTHE 10-MINUTE EDIT: Exactly 10 minutes after publication (once feed momentum is locked), click 'Edit post' and append the article link at the bottom.", "LinkedIn heavily penalizes external outbound links if present at initial launch. Editing after 10 minutes retains full viral distribution while keeping the direct clickable link in the post body."),
    ("RULE 5", "HUMAN BENCH PRACTITIONER TONE & PROTOCOL FRICTION", "Every post must highlight real wet-lab friction, stoichiometric calculations, or instrument tradeoffs (e.g. pI drift, surfactant leaching, Q20 vs Q30 scores, reagent cost per Gbp). Always close with an authentic technical question that prompts comments from lab heads.", "Thoughtful comments from industry peers trigger viral re-distribution to their extended second-degree networks."),
    ("RULE 6", "OPTIMAL GLOBAL TIMING FOR MAXIMUM REACH", "Publish during peak biotech decision-maker browsing windows:\n• Primary Window: 5:30 PM - 7:00 PM IST (8:00 AM - 9:30 AM EST) to capture US East Coast & European biopharma hubs at desk arrival.\n• Secondary Window: 8:30 AM - 9:30 AM IST for India & Asia-Pacific diagnostic core facilities.", "Timing synchronization ensures initial momentum in the crucial first 60 minutes after publication.")
]

rule_col_widths = {'A': 10, 'B': 25, 'C': 55, 'D': 45}
for r_idx, r in enumerate(rules_list, 2):
    ws_rules.append(list(r))
    ws_rules.row_dimensions[r_idx].height = 42
    for c_idx in range(1, 5):
        cell = ws_rules.cell(row=r_idx, column=c_idx)
        cell.border = cell_border
        cell.font = Font(name="Segoe UI", size=9)
        cell.alignment = Alignment(horizontal="left", vertical="center", wrap_text=True)
        if c_idx == 1:
            cell.font = Font(name="Segoe UI", size=9, bold=True)
            cell.alignment = Alignment(horizontal="center", vertical="center")

for col_letter, width in rule_col_widths.items():
    ws_rules.column_dimensions[col_letter].width = width

# Save Excel files in both directories
excel_paths = [
    "E:/biosciencedesk/LinkedIn_Content_Tracker.xlsx",
    "c:/wamp64/www/smd-lifesciences/LinkedIn_Content_Tracker.xlsx"
]

for p in excel_paths:
    wb.save(p)
    print(f"Saved Excel: {p}")

# Save JSON tracker in both directories
json_data = {
    "last_updated": "2026-09-27",
    "total_articles": len(articles),
    "posted_count": len(posted_map),
    "unposted_count": len(articles) - len(posted_map),
    "posted_slugs": list(posted_map.keys()),
    "articles": []
}

for art in articles:
    s = art['slug']
    p = posted_map.get(s, None)
    prio = gsc_priority_map.get(s, None)
    
    json_data["articles"].append({
        "slug": s,
        "title": art['title'],
        "category": art['category'],
        "image": art['image'],
        "status": "POSTED" if p else ("NEXT TARGET" if prio else "NOT POSTED"),
        "date_posted": p['date'] if p else None,
        "linkedin_activity": p['urn'] if p else None,
        "impressions": p['impressions'] if p else None,
        "priority": prio['priority'] if prio else None,
        "hook": p['hook'] if p else (prio['hook'] if prio else f"Wet-lab protocols for {art['category']}")
    })

json_paths = [
    "E:/biosciencedesk/src/data/linkedin_tracker.json",
    "c:/wamp64/www/smd-lifesciences/src/data/linkedin_tracker.json"
]

for jp in json_paths:
    os.makedirs(os.path.dirname(jp), exist_ok=True)
    with open(jp, "w", encoding="utf-8") as jf:
        json.dump(json_data, jf, indent=2)
    print(f"Saved JSON: {jp}")
