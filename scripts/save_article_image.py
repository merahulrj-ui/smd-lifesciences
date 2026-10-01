import urllib.request
import io
from PIL import Image

url = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})

with urllib.request.urlopen(req) as resp:
    data = resp.read()

img = Image.open(io.BytesIO(data))
output_path = 'E:/biosciencedesk/public/images/articles/assayed-tumor-marker-quality-control-matrix-effects-hook-artifact-clsi-c24.webp'
img.save(output_path, 'WEBP', quality=85)
print(f"Saved webp image: {output_path} | Size: {img.size}")
