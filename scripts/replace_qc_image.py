import os
from PIL import Image

src_img = r"C:\Users\merah\.gemini\antigravity\brain\13524222-9ede-4876-918c-b99ec81b9f49\assayed_tumor_marker_qc_1790493402031.jpg"
dest_webp = r"E:\biosciencedesk\public\images\articles\assayed-tumor-marker-quality-control-matrix-effects-hook-artifact-clsi-c24.webp"

img = Image.open(src_img)
# Resize or save at high quality webp
img.save(dest_webp, "WEBP", quality=88)

size = os.path.getsize(dest_webp)
print(f"Successfully converted and replaced webp image: {dest_webp} (Size: {size} bytes, dimensions: {img.size})")
