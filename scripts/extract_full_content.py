with open("E:/biosciencedesk/src/data/insights.ts", "r", encoding="utf-8") as f:
    text = f.read()

slug = "short-read-vs-long-read-sequencing-benchmarks-illumina-novaseq-element-aviti-pacbio-revio-2026"
part = text.split(f"slug: '{slug}'")[1]

# Extract content between content: and faqs:
content_chunk = part.split("content:")[1].split("faqs:")[0].strip()
# Remove leading and trailing quotes / backticks / commas
if content_chunk.startswith('"') and content_chunk.endswith('",'):
    content_chunk = content_chunk[1:-2]
elif content_chunk.startswith('`') and content_chunk.endswith('`,'):
    content_chunk = content_chunk[1:-2]

print("Full Content length:", len(content_chunk))
print("First 200 chars:\n", content_chunk[:200])
print("Last 200 chars:\n", content_chunk[-200:])

with open("scripts/medium_story_content.txt", "w", encoding="utf-8") as out:
    out.write(content_chunk.replace('\\"', '"').replace('\\n', '\n'))

print("Saved clean content to scripts/medium_story_content.txt")
