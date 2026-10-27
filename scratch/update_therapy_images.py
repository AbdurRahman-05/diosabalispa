import re
import json

mapping = {
    1: "/assets/balinese_touch_ai.png",
    2: "/assets/treatments/bali_aroma_facial.jpg",
    3: "/assets/therapy_body_stretches.jpg",
    4: "/assets/master_therapists_ai.png",
    5: "/assets/massage_treatment.png",
    6: "/assets/therapy_arms_back.jpg",
    7: "/assets/massage_treatment.png",
    8: "/assets/product_oil.png",
    9: "/assets/hero_bg.png",
    10: "/assets/therapy_body_stretches.jpg",
    11: "/assets/body_wrap_treatment.jpg",
    12: "/assets/serene_sanctuary_ai.png",
    13: "/assets/organic_botanicals_ai.png",
    14: "/assets/treatments/almond_milk_wrap.jpg",
    15: "/assets/product_oil.png",
    16: "/assets/product_oil.png",
    17: "/assets/treatments/almond_milk_wrap.jpg",
    18: "/assets/product_oil.png",
    19: "/assets/product_oil.png",
    20: "/assets/therapy_shoulders_back.jpg",
    21: "/assets/facial_treatment.png",
    22: "/assets/therapy_arms_back.jpg",
    23: "/assets/therapy_arms_back.jpg",
    24: "/assets/therapy_leg_foot.jpg",
    25: "/assets/therapy_reflexology.jpg",
    26: "/assets/therapy_arms_back.jpg",
    27: "/assets/massage_treatment.png",
    28: "/assets/balinese_touch_ai.png",
    29: "/assets/organic_botanicals_ai.png",
    30: "/assets/serene_sanctuary_ai.png",
    31: "/assets/serene_sanctuary_ai.png",
    32: "/assets/therapy_body_stretches.jpg",
    33: "/assets/balinese_touch_ai.png",
    34: "/assets/treatments/sugar_honey_scrub.jpg",
    35: "/assets/serene_sanctuary_ai.png",
    36: "/assets/therapy_body_stretches.jpg",
    37: "/assets/product_oil.png",
    38: "/assets/massage_treatment.png",
    59: "/assets/flower_bath_ai.png"
}

with open('app/therapy/page.js', 'r', encoding='utf-8') as f:
    code = f.read()

# Replace treatments
m = re.search(r'const treatments = (\[.*?\]);', code, re.DOTALL)
if not m:
    print("Could not find treatments array!")
    exit(1)

treatments = json.loads(m.group(1))
for t in treatments:
    tid = t['id']
    if tid in mapping:
        t['img'] = mapping[tid]

new_treatments_json = json.dumps(treatments, indent=2, ensure_ascii=False)
code = code[:m.start(1)] + new_treatments_json + code[m.end(1):]

# Remove BASE declaration
code = re.sub(r"const BASE = 'https://diosabalispa\.in/wp-content/uploads/2025/07/';\n*", "", code)

with open('app/therapy/page.js', 'w', encoding='utf-8') as f:
    f.write(code)

print("Successfully updated app/therapy/page.js!")
