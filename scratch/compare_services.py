import re

with open('app/therapy/page.js', 'r', encoding='utf-8') as f:
    content = f.read()

titles = re.findall(r"title:\s*['\"]([^'\"]+)['\"]", content)
print(f"Total current titles: {len(titles)}")
for i, t in enumerate(titles):
    print(f"{i+1}: {t}")
