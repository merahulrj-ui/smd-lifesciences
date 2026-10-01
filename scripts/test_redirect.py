import urllib.request

urls = [
    'http://localhost:3005/insights/quality-control/endotoxin-testing-lal-vs-recombinant-factor-c-rfc',
    'http://localhost:3005/insights/microbiology/endotoxin-testing-lal-vs-recombinant-factor-c-rfc'
]

for u in urls:
    try:
        resp = urllib.request.urlopen(u)
        print(f"{resp.status} OK: Final URL = {resp.geturl()}")
    except urllib.error.HTTPError as e:
        print(f"{e.code} Error for {u}")
