import os
from PIL import Image

pdf_img_dir = 'scratch/pdf_images'
files = sorted(os.listdir(pdf_img_dir))
print(f"Total files: {len(files)}")

large_imgs = []
for f in files:
    if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
        path = os.path.join(pdf_img_dir, f)
        try:
            with Image.open(path) as img:
                w, h = img.size
                if w >= 300 and h >= 200:
                    large_imgs.append((f, w, h, os.path.getsize(path)))
        except Exception as e:
            pass

print(f"Substantial images (>=300x200): {len(large_imgs)}")
for name, w, h, size in large_imgs[:30]:
    print(f"{name}: {w}x{h}, {size/1024:.1f} KB")
