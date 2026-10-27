import json
import re

with open('app/therapy/page.js', 'r', encoding='utf-8') as f:
    content = f.read()

m = re.search(r'const treatments = (\[.*?\]);', content, re.DOTALL)
treatments = json.loads(m.group(1))
for t in treatments:
    if 'wp-content' not in t.get('img', ''):
        print(f"{t['id']}: {t['title']} -> {t['img']}")
