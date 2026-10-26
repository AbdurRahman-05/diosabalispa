# -*- coding: utf-8 -*-
import json

BASE = "https://diosabalispa.in/wp-content/uploads/2025/07/"

# Full list of 60 services from Diosa Menu Card Old and New 2026
treatments = [
    # --- MASSAGES (PDF Pages 4 - 12) ---
    {
        "id": 1,
        "category": "massage",
        "goal": "pain",
        "duration": "60 / 90 / 120 Mins",
        "price": "₹2,700 / ₹3,700 / ₹4,800",
        "pressure": "Firm",
        "title": "Traditional Balinese Massage",
        "desc": "A holistic full-body deep tissue treatment blending acupressure, skin rolling, friction, flicking, and rhythmic percussion. Relieves persistent muscle pain, addresses sleep disorders, boosts blood circulation, promotes skin health, and elevates natural immunity.",
        "img": BASE + "ea.jpg"
    },
    {
        "id": 2,
        "category": "massage",
        "goal": "stress",
        "duration": "60 / 90 / 120 Mins",
        "price": "₹2,700 / ₹3,700 / ₹4,800",
        "pressure": "Gentle",
        "title": "Bali Aroma Massage",
        "desc": "A beloved multi-purpose aromatherapy therapy using exotic botanical essential oils absorbed deeply into the dermis. Delivers profound muscular relaxation, stress reduction, pain alleviation, blood stimulation, and full-body detoxification.",
        "img": BASE + "t1.webp"
    },
    {
        "id": 3,
        "category": "massage",
        "goal": "pain",
        "duration": "60 / 90 / 120 Mins",
        "price": "₹2,700 / ₹3,700 / ₹4,800",
        "pressure": "Deep",
        "title": "Bali Thai Massage",
        "desc": "Ancient oriental bodywork combining assisted yoga-like stretching, passive joint mobilization, and rhythmic acupressure. Dramatically increases joint range of motion, alleviates chronic lower back pain, eases migraine tension, and resets nervous energy.",
        "img": BASE + "caption-e1753253128451.jpg"
    },
    {
        "id": 4,
        "category": "massage",
        "goal": "stress",
        "duration": "60 Mins",
        "price": "₹4,800",
        "pressure": "Medium",
        "title": "Four Hands Massage",
        "desc": "Two master therapists working in seamless synchronized choreography on one client. Like experiencing two full-body therapies at once, this synchronized ritual swiftly removes energetic blockages, eases tension headaches, decreases swelling, and restores deep balance.",
        "img": BASE + "a6b4261509788cc843fafcac56d38c51.jpg"
    },
    {
        "id": 5,
        "category": "massage",
        "goal": "pain",
        "duration": "60 / 90 / 120 Mins",
        "price": "₹2,700 / ₹3,700 / ₹4,800",
        "pressure": "Deep",
        "title": "Deep Tissue Massage",
        "desc": "Intense focused manipulation reaching deep muscle fibers and connective fascia. Targets chronic muscle stiffness, breaks up stubborn scar tissue, lowers heart rate and blood pressure, and rehabilitates injured muscular groups.",
        "img": BASE + "8fee7d519bb21d9352817f6de95fcc94.jpg"
    },
    {
        "id": 6,
        "category": "massage",
        "goal": "pain",
        "duration": "60 / 90 / 120 Mins",
        "price": "₹2,700 / ₹3,700 / ₹4,800",
        "pressure": "Firm",
        "title": "Trigger Point Massage",
        "desc": "Precision pressure therapy focused on hypersensitive taut bands and knots within muscle tissue that radiate pain across the body. Effectively deactivates trigger points to relieve referred pain, improve posture, and regain full physical flexibility.",
        "img": BASE + "a1d7e262bc47670ae69b273646ce2e13.jpg"
    },
    {
        "id": 7,
        "category": "massage",
        "goal": "sleep",
        "duration": "60 / 90 / 120 Mins",
        "price": "₹2,700 / ₹3,700 / ₹4,800",
        "pressure": "Light to Medium",
        "title": "Swedish Massage",
        "desc": "Classic therapeutic manual bodywork emphasizing long gliding strokes (effleurage), kneading (petrissage), and friction toward the heart. Encourages healthy blood flow, flushes metabolic wastes, aids pain management, and fosters peaceful relaxation.",
        "img": BASE + "532e79679274fb11a8bd80f4d4b2e2fb.jpg"
    },
    {
        "id": 8,
        "category": "massage",
        "goal": "sleep",
        "duration": "60 / 90 / 120 Mins",
        "price": "₹3,000 / ₹4,000 / ₹5,000",
        "pressure": "Gentle",
        "title": "Hot Oil Massage",
        "desc": "Specially formulated heated botanical oils poured and stroked over the body to pacify internal bioenergies and release deep tissue toxins. Tones muscles, awakens creative mental clarity, restores stamina, and ensures deeply restful sleep.",
        "img": BASE + "a7ab8bb31ebfe25f3fb4870906c320a9.jpg"
    },
    {
        "id": 9,
        "category": "massage",
        "goal": "pain",
        "duration": "60 / 90 / 120 Mins",
        "price": "₹3,200 / ₹4,200 / ₹7,500",
        "pressure": "Medium to Firm",
        "title": "Hot Stone Massage",
        "desc": "Smooth, heated volcanic basalt stones glide with herbal oils over vital energy meridians. Penetrating warmth relaxes stiff muscle fibers, melts persistent stress and anxiety, enhances tissue circulation, and strengthens the immune system.",
        "img": BASE + "713a2b3f2852be21624a0b9d4c9b4655.jpg"
    },
    {
        "id": 10,
        "category": "massage",
        "goal": "pain",
        "duration": "60 / 90 / 120 Mins",
        "price": "₹2,700 / ₹3,700 / ₹4,800",
        "pressure": "Firm to Deep",
        "title": "Sports Massage",
        "desc": "Specialized soft tissue therapy for athletes and active individuals. Corrects imbalances from repetitive strenuous training, reduces muscle spasms and neurological excitability, eliminates lactic acid, and dramatically accelerates recovery.",
        "img": BASE + "39e5907c2d7b25017b695c6ddfdb14c9.jpg"
    },
    {
        "id": 11,
        "category": "massage",
        "goal": "skin",
        "duration": "60 / 90 / 120 Mins",
        "price": "₹3,200 / ₹4,200 / ₹5,300",
        "pressure": "Medium",
        "title": "Chocolate Massage",
        "desc": "Indulgent comprehensive therapy utilizing real antioxidant-rich chocolate oil. Pure cocoa stimulates brain endorphins to combat anxiety and stress while the velvety texture intensely hydrates, stimulates micro-circulation, and repairs tired skin.",
        "img": BASE + "c8d3863df8b76bce280f5f33b20e546a.jpg"
    },
    {
        "id": 12,
        "category": "massage",
        "goal": "stress",
        "duration": "60 / 90 / 120 Mins",
        "price": "₹4,800 / ₹6,300 / ₹8,500",
        "pressure": "Medium",
        "title": "Couple Massage",
        "desc": "A tranquil shared journey for two in our private luxury couple suite. Creates intimacy, resets emotional serenity, and lowers mutual tension as two experienced therapists provide synchronized relaxation side by side.",
        "img": BASE + "5564b5f29edb5ad1e8edf0ba485c8088.jpg"
    },
    {
        "id": 13,
        "category": "massage",
        "goal": "stress",
        "duration": "60 / 90 / 120 Mins",
        "price": "₹3,200 / ₹4,200 / ₹5,300",
        "pressure": "Medium",
        "title": "Bali Ayurvedic Massage",
        "desc": "Traditional Ayurvedic herbal oils infused with organic botanical extracts to stimulate vital marma points. Cleanses and revitalizes internal prana life force, calms the central nervous system, and treats rough cracked skin.",
        "img": BASE + "ee7e103328cef3b3bafdeff65f2aaf1c.jpg"
    },
    {
        "id": 14,
        "category": "massage",
        "goal": "skin",
        "duration": "60 / 90 / 120 Mins",
        "price": "₹2,700 / ₹3,700 / ₹4,800",
        "pressure": "Gentle",
        "title": "Cream Massage",
        "desc": "Nourishing, relaxing treatment formulated with gentle natural moisturizing creams. Restores moisture to dehydrated, rough skin areas, combats premature aging with gentle effleurage, and leaves an ultra-silky, smooth finish.",
        "img": BASE + "9f2e3a87c1c095568417d7c66aa352d1.jpg"
    },
    {
        "id": 15,
        "category": "massage",
        "goal": "skin",
        "duration": "60 / 90 / 120 Mins",
        "price": "₹3,200 / ₹4,200 / ₹5,300",
        "pressure": "Medium",
        "title": "Cow's Ghee Massage",
        "desc": "Pure organic cow's ghee enriched with omega fatty acids and antioxidants. Neutralizes harmful free radicals, hydrates dry or weather-damaged tissues, softens skin texture, and provides a timeless healthy natural luster.",
        "img": BASE + "Ghee-7th.avif"
    },
    {
        "id": 16,
        "category": "massage",
        "goal": "skin",
        "duration": "60 / 90 / 120 Mins",
        "price": "₹3,200 / ₹4,200 / ₹5,300",
        "pressure": "Gentle",
        "title": "Almond Oil Massage",
        "desc": "Fast-absorbing cold-pressed sweet almond oil rich in Vitamin E and magnesium. Delivers intense cellular hydration, fades scars and stretch marks, combats environmental skin aging, and soothes sensitive skin redness.",
        "img": BASE + "6fdde8cfa66e7b94ec57c85b7636dd49.jpg"
    },
    {
        "id": 17,
        "category": "massage",
        "goal": "skin",
        "duration": "60 / 90 / 120 Mins",
        "price": "₹3,200 / ₹4,200 / ₹5,300",
        "pressure": "Medium",
        "title": "Coconut Oil Massage",
        "desc": "Natural virgin coconut oil rich in nourishing medium-chain fatty acids that form a protective barrier against dryness. Restores elastic resilience, prevents bacterial skin irritations, and softens dry, cracked elbows and knees.",
        "img": BASE + "130e379bb2e2c1b84627580513bd2e0a.jpg"
    },
    {
        "id": 18,
        "category": "massage",
        "goal": "skin",
        "duration": "60 / 90 / 120 Mins",
        "price": "₹3,200 / ₹4,200 / ₹5,300",
        "pressure": "Medium",
        "title": "Sesame Oil Massage",
        "desc": "Ancient Ayurvedic sesame seed oil renowned for cooling excess body heat and detoxifying tissues. Packed with natural antioxidants, antimicrobial properties, and cell-repairing minerals that shield skin and prevent scaly textures.",
        "img": BASE + "83cb880d5505782657397c4a31ecb396.jpg"
    },
    {
        "id": 19,
        "category": "massage",
        "goal": "pain",
        "duration": "60 / 90 / 120 Mins",
        "price": "₹3,200 / ₹4,200 / ₹5,300",
        "pressure": "Firm",
        "title": "Mustard Oil Massage",
        "desc": "Traditional thermal massage using pure warm mustard oil rich in Omega-3 fatty acids and allyl isothiocyanate. Retains deep internal heat, eases arthritic joint stiffness, relieves respiratory congestion, and boosts peripheral circulation.",
        "img": BASE + "3e28bdd794cf50d71c71884f68925f38.jpg"
    },
    {
        "id": 20,
        "category": "pedicure",
        "goal": "stress",
        "duration": "45 / 60 Mins",
        "price": "₹2,200 / ₹2,700",
        "pressure": "Medium",
        "title": "Head & Shoulder Massage",
        "desc": "Targeted revitalizing therapy focusing on scalp, neck, and shoulder tension lines. Cool fingertips and warm aromatic oils dissolve mental fatigue, reduce migraines, relieve screen eye strain, and boost mood.",
        "img": BASE + "f8f10338fbfc0ed0610bc69854ee098f.jpg"
    },
    {
        "id": 21,
        "category": "facial",
        "goal": "skin",
        "duration": "45 / 60 Mins",
        "price": "₹2,200 / ₹2,700",
        "pressure": "Gentle",
        "title": "Face & Neck Massage",
        "desc": "Delicate lymphatic drainage massage across the jawline, cheeks, and neck. Unblocks stagnant lymph, diminishes fine wrinkles, tones facial muscles, and kicks out impurities for a brighter, sculpted glow.",
        "img": BASE + "0269e80cfcde2385fe8b62a8409c1cab.jpg"
    },
    {
        "id": 22,
        "category": "pedicure",
        "goal": "pain",
        "duration": "45 / 60 Mins",
        "price": "₹2,200 / ₹2,700",
        "pressure": "Medium",
        "title": "Full Hand's Massage",
        "desc": "Dedicated hand and forearm treatment using friction, trigger-pointing, and acupressure. Restores wrist and finger mobility, relieves repetitive typing strain, and delivers nourishing botanical balm to overworked tendons.",
        "img": BASE + "d6f687360e3fbc52814588d48d9b6eab.jpg"
    },
    {
        "id": 23,
        "category": "massage",
        "goal": "pain",
        "duration": "45 / 60 Mins",
        "price": "₹2,200 / ₹2,700",
        "price": "₹2,200 / ₹2,700",
        "pressure": "Firm",
        "title": "Full Back Massage",
        "desc": "Deep focused relief from the lumbar spine up to the cervical vertebrae. Releases knotting caused by long sitting hours, corrects postural misalignment, eases tension headaches, and alleviates spinal stiffness.",
        "img": BASE + "34ee4e8034437873ea656fd427a6b860-2.jpg"
    },
    {
        "id": 24,
        "category": "pedicure",
        "goal": "pain",
        "duration": "45 / 60 Mins",
        "price": "₹2,200 / ₹2,700",
        "pressure": "Firm",
        "title": "Foot & Leg Massage",
        "desc": "Comprehensive lower-limb therapy with rhythmic stretching, compression, and effleurage from toes to thighs. Stimulates venous blood return, drains accumulated edema, and prevents athletic tendon injuries.",
        "img": BASE + "9c3c12f8d53d3e8624ad11ec90ec7c8c-1.jpg"
    },
    {
        "id": 25,
        "category": "pedicure",
        "goal": "pain",
        "duration": "45 / 60 Mins",
        "price": "₹2,200 / ₹2,700",
        "pressure": "Medium to Firm",
        "title": "Foot Reflexology",
        "desc": "Authentic pressure point reflexology mapping the sole of the foot to vital organs and bodily systems. Calms nervous overstimulation, alleviates bodily pain, reduces foot swelling, and promotes deep sound sleep.",
        "img": BASE + "19f0fb00b13e67e435731ee5847f3ba3-1.jpg"
    },
    {
        "id": 26,
        "category": "pedicure",
        "goal": "pain",
        "duration": "45 / 60 Mins",
        "price": "₹2,200 / ₹2,700",
        "pressure": "Medium",
        "title": "Hand Reflexology",
        "desc": "Targeted pressure on key reflex zones across palms and fingers correlating to spine, sinus, and cranial points. Relieves shoulder tension, eases sinus pressure, and restores harmonic bio-energies.",
        "img": BASE + "0d34ee49bfd7e6a108cb1f978dc7b83b-6.jpg"
    },
    {
        "id": 27,
        "category": "massage",
        "goal": "stress",
        "duration": "60 / 90 Mins",
        "price": "₹2,700 / ₹3,700",
        "pressure": "Medium",
        "title": "Shiatsu Massage",
        "desc": "Traditional Japanese acupressure using rhythmic finger and palm pressure along meridian lines. Restores unimpeded Qi energy flow, improves bowel regularity, relieves fatigue, and lifts mood.",
        "img": BASE + "70a30a7c95949691bc34abd483d689f2.jpg"
    },
    {
        "id": 28,
        "category": "massage",
        "goal": "pain",
        "duration": "60 / 90 Mins",
        "price": "₹3,200 / ₹4,200",
        "pressure": "Firm",
        "title": "Bamboo Massage",
        "desc": "Smooth heated organic bamboo stalks rolled, kneaded, and pressed across muscle groups. Elongates tight fascia, eases deep muscular knots, promotes lymphatic flushing, and restores fluid joint flexibility.",
        "img": BASE + "ab1ee6256cfba20954cf52a499a094b2.jpg"
    },
    {
        "id": 29,
        "category": "massage",
        "goal": "pain",
        "duration": "60 / 90 Mins",
        "price": "₹3,200 / ₹4,200",
        "pressure": "Medium",
        "title": "Herbal Potli Massage",
        "desc": "Warm steamed muslin poultice bags packed with traditional Ayurvedic healing herbs stamped rhythmically along the body. Relieves inflammation, eases arthritis, dispels muscular stiffness, and nourishes skin.",
        "img": BASE + "489d82b6234fd0db30994966b7367c54.jpg"
    },
    {
        "id": 30,
        "category": "massage",
        "goal": "sleep",
        "duration": "60 Mins",
        "price": "₹3,200",
        "pressure": "Gentle",
        "title": "Candlelight Massage",
        "desc": "Pure soy and botanical warm candle oil drizzled over the body in a dimmed candlelit sanctuary. Calms frantic thoughts, deepens restorative breathing, and blankets the body in silky warmth.",
        "img": BASE + "afa5eed5ac7f258999b24aff33ec4dcd.jpg"
    },
    {
        "id": 31,
        "category": "massage",
        "goal": "stress",
        "duration": "60 Mins",
        "price": "₹2,700",
        "pressure": "Gentle",
        "title": "Pregnancy Massage",
        "desc": "Gentle specialized prenatal therapy adapted for the expectant mother's comfort. Safely relieves lower back strain, reduces leg swelling, eases joint fatigue, and calms prenatal anxiety and insomnia.",
        "img": BASE + "d84ade4d4f8d0f844ca5dad9849861df.jpg"
    },
    {
        "id": 32,
        "category": "massage",
        "goal": "stress",
        "duration": "60 / 90 Mins",
        "price": "₹2,700 / ₹3,700",
        "pressure": "Medium",
        "title": "Tai-chi Massage",
        "desc": "Barefoot and hand rhythmic bodywork inspired by Tai Chi flow. Balances postural equilibrium, relieves chronic tension, stimulates deep relaxation, and encourages emotional harmony.",
        "img": BASE + "48882ebcc4bf0c10e56db981f0790401.jpg"
    },
    {
        "id": 33,
        "category": "massage",
        "goal": "sleep",
        "duration": "60 Mins",
        "price": "₹2,700",
        "pressure": "Soft",
        "title": "Soft Touch Massage",
        "desc": "Featherlight rhythmic fingertip contact that soothes the sensory nervous system. Releases energetic blockages, reduces stress hormones, and guides the mind into serene meditative slumber.",
        "img": BASE + "4f6fa076117c2b4be43e4444a99d868c.jpg"
    },
    {
        "id": 34,
        "category": "massage",
        "goal": "skin",
        "duration": "60 Mins",
        "price": "₹2,700",
        "pressure": "Medium",
        "title": "Honey Massage",
        "desc": "Natural wild forest honey stroked and patted over the skin to stimulate micro-circulation and dermal healing. Draws out toxins, tones skin, and infuses natural antibacterial nutrients.",
        "img": BASE + "e3bee3deb3b5e8e8852482601818d5cf.jpg"
    },
    {
        "id": 35,
        "category": "massage",
        "goal": "sleep",
        "duration": "60 / 90 Mins",
        "price": "₹2,700 / ₹3,700",
        "pressure": "Gentle",
        "title": "Relaxation Massage",
        "desc": "Gentle, flowing rhythmic strokes on soft tissues designed to quiet neural activity. Lowers heart rate, eases muscle tightness, and leaves you floating in peaceful lightness.",
        "img": BASE + "7c6c7766997cc000b9e18765c36c5354.jpg"
    },
    {
        "id": 36,
        "category": "massage",
        "goal": "pain",
        "duration": "60 Mins",
        "price": "₹2,700",
        "pressure": "Firm",
        "title": "Dry Massage",
        "desc": "Non-oil bodywork incorporating deep compression, rhythmic thumb presses, and yoga-based stretching. Stimulates internal circulation, relieves tension headaches, and promotes body alignment.",
        "img": BASE + "fb8f02d3bddc19264b1218484e3fbc10.jpg"
    },
    {
        "id": 37,
        "category": "massage",
        "goal": "skin",
        "duration": "60 Mins",
        "price": "₹3,200",
        "pressure": "Light",
        "title": "Olive Oil Massage",
        "desc": "Pure extra-virgin olive oil rich in Vitamin E, oleic acids, and antioxidants. Slowly absorbed to lock in deep hydration, ease muscular tightness, and leave skin supple and glowing.",
        "img": BASE + "23e7c690d7db70ca4a3b3b33bc8caf44.jpg"
    },
    {
        "id": 38,
        "category": "massage",
        "goal": "stress",
        "duration": "45 Mins",
        "price": "₹2,200",
        "pressure": "Medium",
        "title": "Chest & Abdomen Massage",
        "desc": "Gentle kneading, skin rolling, and acupressure targeting abdominal and diaphragm tension. Aids sluggish digestion, strengthens posture, and releases internal emotional tightness.",
        "img": BASE + "4046309770822a9e6e450a225ed05f3c-1.jpg"
    },

    # --- BODY SCRUBS (PDF Page 13) ---
    {
        "id": 39,
        "category": "scrub",
        "goal": "skin",
        "duration": "45 Mins",
        "price": "₹2,500",
        "pressure": "Gentle Polish",
        "title": "Sugar & Honey Body Scrub",
        "desc": "Natural cane sugar crystals blended with golden forest honey vigorously rubbed and massaged across the body. Exfoliates dead skin cells, clears blemishes, and locks in natural humectants for velvety, glowing skin.",
        "img": "/assets/treatments/body_scrub.jpg"
    },
    {
        "id": 40,
        "category": "scrub",
        "goal": "skin",
        "duration": "45 Mins",
        "price": "₹2,500",
        "pressure": "Gentle Polish",
        "title": "Rice & Oats Body Scrub",
        "desc": "Organic Balinese ground rice powder and finely milled colloidal oats. Gently sloughs away impurities while calming sensitive or irritated skin, leaving your body touchably soft and balanced.",
        "img": BASE + "a7ab8bb31ebfe25f3fb4870906c320a9.jpg"
    },
    {
        "id": 41,
        "category": "scrub",
        "goal": "pain",
        "duration": "45 Mins",
        "price": "₹3,200",
        "pressure": "Medium Polish",
        "title": "Coffee & Salt Body Scrub",
        "desc": "A vigorous scrub combining freshly roasted coffee grounds and mineral sea salts. Stimulates sluggish lymphatic circulation, combats stubborn cellulite, flushes toxins, and leaves skin energized.",
        "img": BASE + "8fee7d519bb21d9352817f6de95fcc94.jpg"
    },
    {
        "id": 42,
        "category": "scrub",
        "goal": "skin",
        "duration": "45 Mins",
        "price": "₹2,700",
        "pressure": "Gentle Polish",
        "title": "Brown Sugar & Coconut Butter Body Scrub",
        "desc": "Unrefined caramel brown sugar infused with decadent raw coconut butter. Delivers intense moisture replenishment as it exfoliates, melting into dry areas to eliminate flakiness and renew luminosity.",
        "img": "/assets/treatments/body_scrub.jpg"
    },
    {
        "id": 43,
        "category": "scrub",
        "goal": "skin",
        "duration": "45 Mins",
        "price": "₹3,200",
        "pressure": "Gentle Polish",
        "title": "Raspberry Body Scrub",
        "desc": "Exotic fruit polish packed with real raspberry seed extract, natural antioxidants, and Vitamin C. Polishes rough skin texture, defends against environmental aging, and imparts a refreshing berry glow.",
        "img": BASE + "c8d3863df8b76bce280f5f33b20e546a.jpg"
    },
    {
        "id": 44,
        "category": "scrub",
        "goal": "skin",
        "duration": "45 Mins",
        "price": "₹3,200",
        "pressure": "Gentle Polish",
        "title": "Blueberry Body Scrub",
        "desc": "Revitalizing botanical scrub enriched with antioxidant blueberry flavonoids and gentle fruit AHAs. Removes dull surface layers, refines pores, and boosts micro-circulation for firm, bouncy skin.",
        "img": "/assets/treatments/body_scrub.jpg"
    },

    # --- BODY MASKS (PDF Page 14) ---
    {
        "id": 45,
        "category": "wrap",
        "goal": "skin",
        "duration": "45 Mins",
        "price": "₹2,200",
        "pressure": "Cooling Wrap",
        "title": "Cucumber Body Mask",
        "desc": "Soothing, cooling botanical paste made from crisp fresh cucumber extract applied over the entire body. Quenches dehydrated skin, banishes breakouts, reduces redness, and restores bouncy, soft skin.",
        "img": "/assets/treatments/body_mask.jpg"
    },
    {
        "id": 46,
        "category": "wrap",
        "goal": "skin",
        "duration": "45 Mins",
        "price": "₹2,200",
        "pressure": "Detox Wrap",
        "title": "Dead Sea Mineral Body Mask",
        "desc": "Authentic mineral-dense Dead Sea mud wrap infused with potassium and magnesium. Extracts deep cellular toxins, clears skin blemishes, refines pore structure, and leaves skin tightened and firmer.",
        "img": "/assets/body_wrap_treatment.jpg"
    },
    {
        "id": 47,
        "category": "wrap",
        "goal": "stress",
        "duration": "45 Mins",
        "price": "₹2,700",
        "pressure": "Firming Wrap",
        "title": "Coffee Body Mask",
        "desc": "Active caffeine-rich firming wrap that stimulates dermal micro-circulation and lymphatic drainage. Tones slackened tissue, tightens contours, and infuses cells with protective antioxidants.",
        "img": "/assets/treatments/body_mask.jpg"
    },
    {
        "id": 48,
        "category": "wrap",
        "goal": "sleep",
        "duration": "45 Mins",
        "price": "₹3,200",
        "pressure": "Calming Wrap",
        "title": "Lavender Clay Body Mask",
        "desc": "Fine therapeutic kaolin clay infused with French lavender essential oil. Detoxifies environmental impurities, smooths rough epidermis, relaxes nervous anxiety, and yields radiant, silky skin.",
        "img": BASE + "3ef4fda83059431499c1a6994d70354e.jpg"
    },
    {
        "id": 49,
        "category": "wrap",
        "goal": "skin",
        "duration": "45 Mins",
        "price": "₹3,200",
        "pressure": "Nourishing Wrap",
        "title": "Almond Milk Body Mask",
        "desc": "Ultra-rich conditioning cream wrap enriched with almond milk proteins and natural plant lipids. Deeply nourishes cracked skin, restores lipid barriers, and leaves skin wonderfully luminous.",
        "img": "/assets/treatments/body_mask.jpg"
    },

    # --- REJUVENATING BATHS & HYDROTHERAPY (PDF Pages 15 & 16) ---
    {
        "id": 50,
        "category": "bath",
        "goal": "pain",
        "duration": "30 / 45 Mins",
        "price": "₹1,200",
        "pressure": "Thermal Steam",
        "title": "Steam Bath",
        "desc": "Pure therapeutic herbal steam opening pores, cleansing deep dirt, and dilating blood vessels to improve systemic circulation. Eases respiratory bronchitis, lowers blood pressure, and relieves joint stiffness.",
        "img": "/assets/treatments/steam_jacuzzi.jpg"
    },
    {
        "id": 51,
        "category": "bath",
        "goal": "stress",
        "duration": "45 Mins",
        "price": "₹2,700",
        "pressure": "Hydro-Therapy",
        "title": "Jacuzzi Hydro-Jet Therapy",
        "desc": "Thermal immersion with pressurized swirling water jets targeting knotted muscle groups. Widens blood vessels to send nutrient-rich blood throughout your body, releasing tension in pure serenity.",
        "img": "/assets/treatments/steam_jacuzzi.jpg"
    },
    {
        "id": 52,
        "category": "bath",
        "goal": "sleep",
        "duration": "45 / 60 Mins",
        "price": "₹3,200",
        "pressure": "Aromatherapy Bath",
        "title": "Fruits & Flowers Bath Tub",
        "desc": "The signature Balinese bath tub filled with thousands of fresh tropical flower petals, citrus fruit slices, and botanical essential oils. Soothes deep aches, resets the spirit, and promotes profound restorative sleep.",
        "img": "/assets/treatments/flower_bath.jpg"
    },

    # --- WELLNESS SPA FACIALS (PDF Pages 17 & 18) ---
    {
        "id": 53,
        "category": "facial",
        "goal": "skin",
        "duration": "60 Mins",
        "price": "₹2,700",
        "pressure": "Gentle Facial",
        "title": "Bali Aroma Facial",
        "desc": "Custom facial therapy blending pure botanical aromatherapy oils tailored to your exact skin type. Relieves facial stress, unblocks pores, deeply rehydrates dry skin, and boosts youthful micro-circulation.",
        "img": "/assets/treatments/spa_facial.jpg"
    },
    {
        "id": 54,
        "category": "facial",
        "goal": "skin",
        "duration": "60 Mins",
        "price": "₹3,200",
        "pressure": "Anti-Aging Facial",
        "title": "Red Wine Facial",
        "desc": "Antioxidant-dense blend of natural red wine polyphenols and grape seed extracts. Cleanses deep pores, fights fine lines and aging, suppresses acne breakouts with natural antiseptics, and produces radiant skin.",
        "img": BASE + "2b82e488ef1e6473f44dab4e672dbfb5.jpg"
    },
    {
        "id": 55,
        "category": "facial",
        "goal": "skin",
        "duration": "60 Mins",
        "price": "₹3,200",
        "pressure": "Brightening Facial",
        "title": "Thai Whitening Spa Facial",
        "desc": "Specialized Thai facial ritual using gentle botanical equipment and whitening herbal actives. Fades dark spots and sun pigmentation, eliminates blackheads and whiteheads, and reveals clearer, luminous skin.",
        "img": "/assets/facial_treatment.png"
    },

    # --- SPA PEDICURES (PDF Page 18) ---
    {
        "id": 56,
        "category": "pedicure",
        "goal": "stress",
        "duration": "60 Mins",
        "price": "₹2,700",
        "pressure": "Relaxing Footwork",
        "title": "Spa Pedicure",
        "desc": "Complete classic pedicure featuring an aromatic foot soak, expert nail trimming, cuticle grooming, heel buffing, gentle exfoliation, and relaxing pressure point foot massage.",
        "img": "/assets/treatments/pedicure.jpg"
    },
    {
        "id": 57,
        "category": "pedicure",
        "goal": "pain",
        "duration": "60 Mins",
        "price": "₹3,000",
        "pressure": "Therapeutic Footwork",
        "title": "Crystal Spa Pedicure",
        "desc": "Sensory heat-retaining crystal jelly foot bath that envelops tired feet in warm soothing comfort. Melts muscle fatigue and calluses, followed by crystal polish scrub and nourishing foot massage.",
        "img": "/assets/pedicure_treatment.jpg"
    },
    {
        "id": 58,
        "category": "pedicure",
        "goal": "stress",
        "duration": "60 Mins",
        "price": "₹3,200",
        "pressure": "Refreshing Footwork",
        "title": "Citrus Spa Pedicure",
        "desc": "Refreshing foot ceremony infused with fresh citrus slices, Vitamin C, and invigorating citrus essential oils. Brightens tired feet, stimulates circulation, eliminates odor, and leaves skin refreshed.",
        "img": BASE + "8da7090e9a07de2a8280f189fc9935a3.jpg"
    },

    # --- HEALING & SPECIALTY RITUALS ---
    {
        "id": 59,
        "category": "massage",
        "goal": "stress",
        "duration": "90 / 120 Mins",
        "price": "₹4,200 / ₹5,500",
        "pressure": "Medium",
        "title": "Healing Therapies (Abhyangam & Sound)",
        "desc": "Sacred restorative therapy combining ancient Abhyangam rhythmic warm herbal oil strokes, herbal powder Udvarthana, and harmonic Tibetan singing bowls to re-align internal bio-rhythms.",
        "img": BASE + "526e4b3ecafaa18612d14b5fa918fd97.jpg"
    },
    {
        "id": 60,
        "category": "wrap",
        "goal": "skin",
        "duration": "60 / 90 Mins",
        "price": "₹3,200 / ₹4,200",
        "pressure": "Gentle",
        "title": "Bali Coconut Body Polish & Wrap",
        "desc": "Traditional Balinese coconut cream polish and organic herbal cocoon wrap. Gently sloughs away environmental impurities, deeply seals in hydration, and restores complete full-body radiance.",
        "img": BASE + "24786c6a638f68159b8e75cb1e3813ab.jpg"
    }
]

print(f"Total treatments defined: {len(treatments)}")

# Check category counts
cat_counts = {}
for t in treatments:
    c = t["category"]
    cat_counts[c] = cat_counts.get(c, 0) + 1
print("Category counts:", cat_counts)
