import os
import re

with open("E:/biosciencedesk/src/data/insights.ts", "r", encoding="utf-8") as f:
    text = f.read()

# Find the article
slug = "short-read-vs-long-read-sequencing-benchmarks-illumina-novaseq-element-aviti-pacbio-revio-2026"
part = text.split(f"slug: '{slug}'")[1].split("},\n  {")[0]

title = re.search(r"title:\s*'([^']+)'", part).group(1)
excerpt = re.search(r"excerpt:\s*'([^']+)'", part).group(1)
image = re.search(r"image:\s*'([^']+)'", part).group(1)
content = re.search(r"content:\s*\"([^\"]+)\"", part)
if not content:
    content = re.search(r"content:\s*`([^`]+)`", part)
content_text = content.group(1) if content else ""

print("Title:", title)
print("Excerpt:", excerpt)
print("Image:", image)
print("Content length:", len(content_text))
print("First 300 chars of content:\n", content_text[:300])

# Prepare markdown/medium story
canonical_url = f"https://www.biosciencedesk.com/insights/genomics-precision-medicine/{slug}"
print("\nCanonical URL:", canonical_url)
