import os
from PIL import Image

pdf_dir = 'scratch/pdf_images'
for p in range(4, 13):
    matches = [f for f in os.listdir(pdf_dir) if f.startswith(f"p{p}_") and f.endswith(('.jpeg', '.jpg', '.png'))]
    print(f"--- Page {p} ---")
    for m in sorted(matches):
        path = os.path.join(pdf_dir, m)
        with Image.open(path) as img:
            print(f"  {m}: size={img.size}, bytes={os.path.getsize(path)}")
