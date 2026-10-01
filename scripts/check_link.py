import urllib.request
import re

url = 'https://lnkd.in/dzrZPBgD'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})

with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

# Look for destination url or window.location or href
matches = re.findall(r'href=[\'"]([^\'"]+)[\'"]', html)
print("href matches:")
for m in matches:
    print(m)

# Also check for data-url or redirect url
scripts = re.findall(r'https?://[a-zA-Z0-9\.\-_/:\?=%&;~]+', html)
print("\nUnique URLs found in HTML:")
for s in set(scripts):
    if 'linkedin' not in s and 'licdn' not in s and 'w3.org' not in s:
        print("-> TARGET:", s)
