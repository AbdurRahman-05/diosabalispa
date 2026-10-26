'use client';

import './therapy.css';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

// Elegant Luxury SVG Icons
const ClockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: '-1px', marginRight: '5px' }}>
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const PressureIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: '-1px', marginRight: '5px' }}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const RupeeIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: '-1px', marginRight: '3px' }}>
    <path d="M6 3h12M6 8h12M6 13l8.5 8M6 13h3a4.5 4.5 0 0 0 0-9"/>
  </svg>
);

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'inline-block', verticalAlign: '-1px', marginRight: '4px' }}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const LotusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: '-2px', marginRight: '6px' }}>
    <path d="M12 3c-2.5 3-4 6-4 9 0 3.5 2.5 6 6 6s6-2.5 6-6c0-3-1.5-6-4-9z"/>
    <path d="M12 21c-5 0-9-3-9-7 0-3 3-6.5 6-8.5"/>
    <path d="M12 21c5 0 9-3 9-7 0-3-3-6.5-6-8.5"/>
  </svg>
);

const LightningIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: '-2px', marginRight: '6px' }}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const LeafIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: '-2px', marginRight: '6px' }}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 2 9 0 4.9-4 9-9 9z"/>
    <path d="M11 20v-7"/>
  </svg>
);

const SparkleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: '-2px', marginRight: '6px' }}>
    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: '-2px', marginRight: '6px' }}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const treatments = [
  {
    "id": 1,
    "category": "massage",
    "goal": "pain",
    "duration": "60 / 90 / 120 Mins",
    "price": "₹2,700 / ₹3,700 / ₹4,800",
    "pressure": "Firm",
    "title": "Traditional Balinese Massage",
    "desc": "A holistic full-body deep tissue treatment blending acupressure, skin rolling, friction, flicking, and rhythmic percussion. Relieves persistent muscle pain, addresses sleep disorders, boosts blood circulation, promotes skin health, and elevates natural immunity.",
    "img": "/assets/balinese_touch_ai.png"
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
    "img": "/assets/treatments/bali_aroma_facial.jpg"
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
    "img": "/assets/therapy_body_stretches.jpg"
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
    "img": "/assets/master_therapists_ai.png"
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
    "img": "/assets/massage_treatment.png"
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
    "img": "/assets/therapy_arms_back.jpg"
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
    "img": "/assets/massage_treatment.png"
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
    "img": "/assets/product_oil.png"
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
    "img": "/assets/hero_bg.png"
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
    "img": "/assets/therapy_body_stretches.jpg"
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
    "img": "/assets/body_wrap_treatment.jpg"
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
    "img": "/assets/serene_sanctuary_ai.png"
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
    "img": "/assets/organic_botanicals_ai.png"
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
    "img": "/assets/treatments/almond_milk_wrap.jpg"
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
    "img": "/assets/product_oil.png"
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
    "img": "/assets/product_oil.png"
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
    "img": "/assets/treatments/almond_milk_wrap.jpg"
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
    "img": "/assets/product_oil.png"
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
    "img": "/assets/product_oil.png"
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
    "img": "/assets/therapy_shoulders_back.jpg"
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
    "img": "/assets/facial_treatment.png"
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
    "img": "/assets/therapy_arms_back.jpg"
  },
  {
    "id": 23,
    "category": "massage",
    "goal": "pain",
    "duration": "45 / 60 Mins",
    "price": "₹2,200 / ₹2,700",
    "pressure": "Firm",
    "title": "Full Back Massage",
    "desc": "Deep focused relief from the lumbar spine up to the cervical vertebrae. Releases knotting caused by long sitting hours, corrects postural misalignment, eases tension headaches, and alleviates spinal stiffness.",
    "img": "/assets/therapy_arms_back.jpg"
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
    "img": "/assets/therapy_leg_foot.jpg"
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
    "img": "/assets/therapy_reflexology.jpg"
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
    "img": "/assets/therapy_arms_back.jpg"
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
    "img": "/assets/massage_treatment.png"
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
    "img": "/assets/balinese_touch_ai.png"
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
    "img": "/assets/organic_botanicals_ai.png"
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
    "img": "/assets/serene_sanctuary_ai.png"
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
    "img": "/assets/serene_sanctuary_ai.png"
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
    "img": "/assets/therapy_body_stretches.jpg"
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
    "img": "/assets/balinese_touch_ai.png"
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
    "img": "/assets/treatments/sugar_honey_scrub.jpg"
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
    "img": "/assets/serene_sanctuary_ai.png"
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
    "img": "/assets/therapy_body_stretches.jpg"
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
    "img": "/assets/product_oil.png"
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
    "img": "/assets/massage_treatment.png"
  },
  {
    "id": 39,
    "category": "scrub",
    "goal": "skin",
    "duration": "45 Mins",
    "price": "₹2,500",
    "pressure": "Gentle Polish",
    "title": "Sugar & Honey Body Scrub",
    "desc": "Natural cane sugar crystals blended with golden forest honey vigorously rubbed and massaged across the body. Exfoliates dead skin cells, clears blemishes, and locks in natural humectants for velvety, glowing skin.",
    "img": "/assets/treatments/sugar_honey_scrub.jpg"
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
    "img": "/assets/treatments/sugar_honey_scrub.jpg"
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
    "img": "/assets/treatments/coffee_scrub.jpg"
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
    "img": "/assets/treatments/sugar_honey_scrub.jpg"
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
    "img": "/assets/treatments/berry_scrub.jpg"
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
    "img": "/assets/treatments/berry_scrub.jpg"
  },
  {
    "id": 45,
    "category": "wrap",
    "goal": "skin",
    "duration": "45 Mins",
    "price": "₹2,200",
    "pressure": "Cooling Wrap",
    "title": "Cucumber Body Mask",
    "desc": "Soothing, cooling botanical paste made from crisp fresh cucumber extract applied over the entire body. Quenches dehydrated skin, banishes breakouts, reduces redness, and restores bouncy, soft skin.",
    "img": "/assets/treatments/cucumber_mask.jpg"
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
    "img": "/assets/treatments/dead_sea_mask.jpg"
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
    "img": "/assets/treatments/coffee_scrub.jpg"
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
    "img": "/assets/treatments/dead_sea_mask.jpg"
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
    "img": "/assets/treatments/almond_milk_wrap.jpg"
  },
  {
    "id": 50,
    "category": "bath",
    "goal": "pain",
    "duration": "30 / 45 Mins",
    "price": "₹1,200",
    "pressure": "Thermal Steam",
    "title": "Steam Bath",
    "desc": "Pure therapeutic herbal steam opening pores, cleansing deep dirt, and dilating blood vessels to improve systemic circulation. Eases respiratory bronchitis, lowers blood pressure, and relieves joint stiffness.",
    "img": "/assets/treatments/steam_bath.jpg"
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
    "img": "/assets/treatments/jacuzzi.jpg"
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
  {
    "id": 53,
    "category": "facial",
    "goal": "skin",
    "duration": "60 Mins",
    "price": "₹2,700",
    "pressure": "Gentle Facial",
    "title": "Bali Aroma Facial",
    "desc": "Custom facial therapy blending pure botanical aromatherapy oils tailored to your exact skin type. Relieves facial stress, unblocks pores, deeply rehydrates dry skin, and boosts youthful micro-circulation.",
    "img": "/assets/treatments/bali_aroma_facial.jpg"
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
    "img": "/assets/treatments/red_wine_facial.jpg"
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
    "img": "/assets/treatments/thai_whitening_facial.jpg"
  },
  {
    "id": 56,
    "category": "pedicure",
    "goal": "stress",
    "duration": "60 Mins",
    "price": "₹2,700",
    "pressure": "Relaxing Footwork",
    "title": "Spa Pedicure",
    "desc": "Complete classic pedicure featuring an aromatic foot soak, expert nail trimming, cuticle grooming, heel buffing, gentle exfoliation, and relaxing pressure point foot massage.",
    "img": "/assets/treatments/citrus_pedicure.jpg"
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
    "img": "/assets/treatments/citrus_pedicure.jpg"
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
    "img": "/assets/treatments/citrus_pedicure.jpg"
  },
  {
    "id": 59,
    "category": "massage",
    "goal": "stress",
    "duration": "90 / 120 Mins",
    "price": "₹4,200 / ₹5,500",
    "pressure": "Medium",
    "title": "Healing Therapies (Abhyangam & Sound)",
    "desc": "Sacred restorative therapy combining ancient Abhyangam rhythmic warm herbal oil strokes, herbal powder Udvarthana, and harmonic Tibetan singing bowls to re-align internal bio-rhythms.",
    "img": "/assets/flower_bath_ai.png"
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
    "img": "/assets/treatments/almond_milk_wrap.jpg"
  }
];

const horizonSignatureItems = [
  treatments[0],  // Traditional Balinese
  treatments[3],  // Four Hands
  treatments[8],  // Hot Stone
  treatments[38], // Sugar & Honey Body Scrub
  treatments[51], // Fruits & Flowers Bath Tub
  treatments[53], // Red Wine Facial
  treatments[56]  // Crystal Spa Pedicure
];

export default function TherapyPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('all');
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(currentTheme);

    const observer = new MutationObserver(() => {
      const updatedTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      setTheme(updatedTheme);
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  const isLight = theme === 'light';
  const horizonTrackRef = useRef(null);

  const getCategoryCount = (catId) => {
    if (catId === 'all') return treatments.length;
    return treatments.filter(t => t.category === catId).length;
  };

  const filteredTreatments = treatments.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.price.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGoal = selectedGoal === 'all' || item.goal === selectedGoal;
    return matchesCategory && matchesSearch && matchesGoal;
  });

  const scrollHorizon = (direction) => {
    if (horizonTrackRef.current) {
      const scrollAmount = direction === 'left' ? -480 : 480;
      horizonTrackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <main style={{ background: isLight ? '#f8f3eb' : '#0a0b0a', color: isLight ? '#3a281c' : '#f3eee3', minHeight: '100vh' }}>
      {/* CINEMATIC DEEP DARK / LIGHT GOLDEN HERO */}
      <section className="cinematic-emerald-hero">
        {/* Floating Gold Dust Particles */}
        <div className="gold-dust-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="gold-particle"
              style={{
                left: `${(i * 5) % 100}%`,
                animationDelay: `${(i * 0.7) % 8}s`,
                animationDuration: `${7 + (i % 6)}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          {/* AMBIENT GLOW BACKDROP */}
          <div 
            style={{
              position: 'absolute',
              top: '35%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '550px',
              height: '190px',
              background: isLight 
                ? 'radial-gradient(ellipse at center, rgba(212, 160, 23, 0.35) 0%, rgba(184, 134, 11, 0.18) 50%, transparent 75%)' 
                : 'radial-gradient(ellipse at center, rgba(217, 119, 6, 0.35) 0%, rgba(212, 175, 55, 0.18) 50%, transparent 75%)',
              filter: 'blur(50px)',
              zIndex: 0,
              pointerEvents: 'none',
              animation: 'headingGlowPulse 6s ease-in-out infinite alternate'
            }}
          />

          <span style={{ position: 'relative', zIndex: 1, background: isLight ? 'rgba(184,115,51,0.15)' : 'rgba(217,119,6,0.15)', color: '#d97706', padding: '6px 20px', borderRadius: '25px', border: isLight ? '1px solid rgba(184,134,11,0.4)' : '1px solid rgba(217,119,6,0.4)', fontSize: '0.8rem', letterSpacing: '0.2em', fontWeight: 700, textTransform: 'uppercase', display: 'inline-block', marginBottom: '14px' }}>
            DIOSA BALI SPA SANCTUARY · 2026 OFFICIAL TARIFF
          </span>

          <h1 style={{ position: 'relative', zIndex: 1, fontSize: '3.8rem', marginBottom: '14px', fontFamily: "'Cormorant Garamond', serif", color: isLight ? '#5c3a21' : '#d4af37', letterSpacing: '0.02em', textShadow: isLight ? '0 0 25px rgba(184, 134, 11, 0.35)' : '0 0 25px rgba(212, 175, 55, 0.4)' }}>
            Therapies &amp; Healing Rituals
          </h1>

          <p style={{ position: 'relative', zIndex: 1, maxWidth: '750px', margin: '0 auto', color: isLight ? '#523e30' : '#a8a090', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Step into our cave sanctuary — an authentic collection of {treatments.length} ancient Indo-Balinese bodywork rituals, organic body scrubs, detoxifying wraps, spa facials, and sensory hydrotherapy baths.
          </p>

          {/* "FIND YOUR IDEAL RITUAL" GOAL SELECTOR BOX */}
          <div 
            style={{ 
              marginTop: '40px', 
              background: isLight ? 'linear-gradient(135deg, #fffcf8 0%, #f5ebd9 100%)' : 'rgba(20,36,29,0.7)', 
              border: isLight ? '1.5px solid #d4af37' : '1px solid rgba(212,175,55,0.3)', 
              borderRadius: '24px', 
              padding: '24px 30px', 
              maxWidth: '920px', 
              marginLeft: 'auto', 
              marginRight: 'auto', 
              backdropFilter: 'blur(16px)', 
              boxShadow: isLight ? '0 16px 45px rgba(184, 115, 51, 0.22), inset 0 0 25px rgba(212, 175, 55, 0.1)' : '0 15px 40px rgba(0,0,0,0.6)', 
              transition: 'all 0.35s ease' 
            }}
          >
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', color: isLight ? '#5c3a21' : '#d4af37', marginBottom: '16px', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SparkleIcon /> WHAT IS YOUR HEALING GOAL TODAY?
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {[
                { id: 'all', label: `All ${treatments.length} Rituals`, icon: <LotusIcon /> },
                { id: 'pain', label: 'Deep Muscle & Pain Relief', icon: <LightningIcon /> },
                { id: 'stress', label: 'Stress & Anxiety Release', icon: <LeafIcon /> },
                { id: 'skin', label: 'Radiant Skin Glow & Polishing', icon: <SparkleIcon /> },
                { id: 'sleep', label: 'Deep Sleep & Mind Calm', icon: <MoonIcon /> }
              ].map(g => (
                <button
                  key={g.id}
                  onClick={() => setSelectedGoal(g.id)}
                  style={{
                    padding: '11px 22px',
                    borderRadius: '25px',
                    border: '1.5px solid',
                    borderColor: selectedGoal === g.id ? '#b8860b' : (isLight ? 'rgba(184,134,11,0.35)' : 'rgba(212,175,55,0.25)'),
                    background: selectedGoal === g.id 
                      ? (isLight ? 'linear-gradient(135deg, #b8860b 0%, #d4af37 100%)' : '#b8860b') 
                      : (isLight ? '#ffffff' : 'rgba(10,17,14,0.6)'),
                    color: selectedGoal === g.id ? '#ffffff' : (isLight ? '#4a3525' : '#f8f6f0'),
                    fontWeight: selectedGoal === g.id ? '700' : '600',
                    cursor: 'pointer',
                    fontSize: '0.88rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    transition: 'all 0.3s ease',
                    boxShadow: selectedGoal === g.id 
                      ? '0 8px 25px rgba(184,115,51,0.4)' 
                      : (isLight ? '0 4px 12px rgba(184,115,51,0.08)' : 'none')
                  }}
                >
                  {g.icon}
                  {g.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CINEMATIC FULL-WIDTH HORIZON SCROLL SHOWCASE */}
      <section className="cinematic-horizon-section" style={{ background: isLight ? '#f8f3eb' : '#0e1914' }}>
        <div className="horizon-header">
          <div>
            <span style={{ color: '#d97706', fontSize: '0.8rem', letterSpacing: '0.18em', fontWeight: 700, textTransform: 'uppercase' }}>
              CURATED SHOWCASE
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', color: isLight ? '#5c3a21' : '#f8f6f0', margin: '4px 0 0 0' }}>
              Signature Experiences
            </h2>
          </div>
          
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={() => scrollHorizon('left')} style={{ width: '46px', height: '46px', borderRadius: '50%', border: isLight ? '1.5px solid #b8860b' : '1px solid #d4af37', background: isLight ? '#f2e9dc' : 'rgba(212,175,55,0.1)', color: isLight ? '#5c3a21' : '#d4af37', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&larr;</button>
            <button onClick={() => scrollHorizon('right')} style={{ width: '46px', height: '46px', borderRadius: '50%', border: isLight ? '1.5px solid #b8860b' : '1px solid #d4af37', background: isLight ? '#f2e9dc' : 'rgba(212,175,55,0.1)', color: isLight ? '#5c3a21' : '#d4af37', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&rarr;</button>
          </div>
        </div>

        <div className="horizon-track-wrapper" ref={horizonTrackRef}>
          <div className="horizon-track">
            {horizonSignatureItems.map((item, idx) => (
              <div key={item.id} className="horizon-card" onClick={() => setSelectedTreatment(item)}>
                <img src={item.img} alt={item.title} className="horizon-img" />
                <div className="horizon-overlay">
                  <span className="horizon-badge">SIGNATURE 0{idx + 1}</span>
                  <div>
                    <h3 className="horizon-title">{item.title}</h3>
                    <p className="horizon-desc">{item.desc}</p>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.78rem', background: isLight ? 'rgba(184,134,11,0.2)' : 'rgba(212,175,55,0.2)', color: isLight ? '#5c3a21' : '#d4af37', padding: '5px 14px', borderRadius: '12px', border: isLight ? '1px solid rgba(184,134,11,0.4)' : '1px solid rgba(212,175,55,0.4)', fontWeight: 600, display: 'inline-flex', alignItems: 'center' }}>
                        <ClockIcon /> {item.duration}
                      </span>
                      <span style={{ fontSize: '0.78rem', background: isLight ? 'rgba(184,134,11,0.2)' : 'rgba(212,175,55,0.2)', color: isLight ? '#5c3a21' : '#d4af37', padding: '5px 14px', borderRadius: '12px', border: isLight ? '1px solid rgba(184,134,11,0.4)' : '1px solid rgba(212,175,55,0.4)', fontWeight: 600, display: 'inline-flex', alignItems: 'center' }}>
                        <RupeeIcon /> {item.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER & TREATMENTS GRID SECTION */}
      <section style={{ padding: '40px 0 100px 0', background: isLight ? '#f8f3eb' : '#070c0a' }}>
        <div className="container">
          {/* SEARCH & GLASSMORPHISM CATEGORY PILLS */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
            <input 
              type="text"
              placeholder={`Search ${treatments.length} treatments (e.g. Balinese, Sugar Scrub, Red Wine Facial, Steam Bath)...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                maxWidth: '620px',
                padding: '14px 26px',
                borderRadius: '30px',
                border: isLight ? '1.5px solid rgba(184,134,11,0.4)' : '1.5px solid rgba(212,175,55,0.4)',
                background: isLight ? '#f2e9dc' : '#0e1914',
                outline: 'none',
                fontSize: '1rem',
                color: isLight ? '#3a281c' : '#f8f6f0',
                boxShadow: isLight ? '0 10px 30px rgba(184,115,51,0.12)' : '0 10px 30px rgba(0,0,0,0.5)'
              }}
            />

            <div className="emerald-filter-nav">
              {[
                { id: 'all', label: 'All Rituals' },
                { id: 'massage', label: 'Massages & Bodywork' },
                { id: 'scrub', label: 'Body Scrubs' },
                { id: 'wrap', label: 'Body Masks & Wraps' },
                { id: 'facial', label: 'Facial Rituals' },
                { id: 'pedicure', label: 'Hands & Feet' },
                { id: 'bath', label: 'Hydrotherapy & Baths' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`emerald-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                >
                  {cat.label}
                  <span className="emerald-count-tag">{getCategoryCount(cat.id)}</span>
                </button>
              ))}
            </div>
          </div>

          {/* TREATMENT CARDS GRID */}
          <div className="dat-grid">
            {filteredTreatments.map((t, idx) => {
              const isRecommended = selectedGoal !== 'all' && t.goal === selectedGoal;
              return (
                <div key={t.id} className={`dat-card emerald-card ${isRecommended ? 'highlight-recommended' : ''}`} style={{ '--card-index': idx + 1 }}>
                  <div className="dat-img-wrap">
                    <img src={t.img} alt={t.title} className="dat-img" />
                    <div className="dat-img-overlay"></div>
                    <span style={{ position: 'absolute', top: '14px', left: '14px', background: isLight ? 'rgba(242,233,220,0.94)' : 'rgba(7,12,10,0.9)', color: isLight ? '#5c3a21' : '#d4af37', border: isLight ? '1px solid rgba(184,134,11,0.4)' : '1px solid rgba(212,175,55,0.4)', padding: '5px 14px', borderRadius: '15px', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.5px', zIndex: 2 }}>
                      RITUAL {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="dat-body">
                    <div>
                      <div className="dat-card-tags">
                        <span className="dat-tag-pill" style={{ background: isLight ? 'rgba(184,134,11,0.15)' : 'rgba(212,175,55,0.15)', color: isLight ? '#b87333' : '#d4af37', display: 'inline-flex', alignItems: 'center' }}>
                          <ClockIcon /> {t.duration}
                        </span>
                        <span className="dat-tag-pill" style={{ background: isLight ? 'rgba(184,134,11,0.15)' : 'rgba(212,175,55,0.15)', color: isLight ? '#b87333' : '#d4af37', display: 'inline-flex', alignItems: 'center' }}>
                          <PressureIcon /> {t.pressure}
                        </span>
                        <span className="dat-tag-pill dat-price-pill">
                          <RupeeIcon /> {t.price}
                        </span>
                        {isRecommended && (
                          <span className="dat-tag-pill" style={{ background: '#b8860b', color: '#ffffff', fontWeight: 700, display: 'inline-flex', alignItems: 'center' }}>
                            <StarIcon /> IDEAL MATCH
                          </span>
                        )}
                      </div>
                      <h3 className="dat-title">{t.title}</h3>
                      <p className="dat-desc">{t.desc}</p>
                    </div>
                    <div className="dat-action">
                      <button
                        onClick={() => setSelectedTreatment(t)}
                        style={{ padding: '8px 18px', border: isLight ? '1.5px solid #b8860b' : '1.5px solid #d4af37', background: 'transparent', color: isLight ? '#5c3a21' : '#d4af37', fontWeight: '600', borderRadius: '20px', cursor: 'pointer', fontSize: '0.8rem' }}
                      >
                        Quick View Details
                      </button>
                      <Link
                        href={`/booking?therapy=${encodeURIComponent(t.title)}`}
                        style={{ padding: '8px 22px', background: isLight ? '#b8860b' : '#d4af37', color: isLight ? '#ffffff' : '#070c0a', borderRadius: '20px', textDecoration: 'none', fontWeight: '700', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center' }}
                      >
                        Reserve
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUICK VIEW DETAIL MODAL */}
      {selectedTreatment && (
        <div className="modal-overlay active" onClick={() => setSelectedTreatment(null)} style={{ display: 'flex', zIndex: 10000, background: isLight ? 'rgba(248,243,235,0.95)' : 'rgba(0,0,0,0.85)' }}>
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{ background: isLight ? '#f8f3eb' : '#0e1914', color: isLight ? '#3a281c' : '#f8f6f0', padding: '35px', borderRadius: '24px', maxWidth: '640px', width: '90%', position: 'relative', border: isLight ? '1.5px solid #b8860b' : '1.5px solid #d4af37', boxShadow: isLight ? '0 25px 60px rgba(184,115,51,0.25)' : '0 25px 60px rgba(0,0,0,0.8)' }}
          >
            <button onClick={() => setSelectedTreatment(null)} style={{ position: 'absolute', top: '15px', right: '20px', border: 'none', background: 'none', fontSize: '26px', cursor: 'pointer', color: isLight ? '#5c3a21' : '#d4af37' }}>&times;</button>
            <h2 style={{ color: isLight ? '#5c3a21' : '#d4af37', fontFamily: "'Cormorant Garamond', serif", fontSize: '2.4rem', marginBottom: '15px' }}>{selectedTreatment.title}</h2>
            
            <div style={{ height: '260px', width: '100%', borderRadius: '16px', overflow: 'hidden', marginBottom: '20px', border: isLight ? '1px solid rgba(184,134,11,0.3)' : '1px solid rgba(212,175,55,0.3)' }}>
              <img src={selectedTreatment.img} alt={selectedTreatment.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '18px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', background: isLight ? 'rgba(184,134,11,0.15)' : 'rgba(212,175,55,0.15)', color: isLight ? '#b87333' : '#d4af37', padding: '6px 14px', borderRadius: '15px', fontWeight: 600, border: isLight ? '1px solid rgba(184,134,11,0.3)' : '1px solid rgba(212,175,55,0.3)', display: 'inline-flex', alignItems: 'center' }}>
                <ClockIcon /> Duration: {selectedTreatment.duration}
              </span>
              <span style={{ fontSize: '0.8rem', background: isLight ? 'rgba(184,134,11,0.15)' : 'rgba(212,175,55,0.15)', color: isLight ? '#b87333' : '#d4af37', padding: '6px 14px', borderRadius: '15px', fontWeight: 600, border: isLight ? '1px solid rgba(184,134,11,0.3)' : '1px solid rgba(212,175,55,0.3)', display: 'inline-flex', alignItems: 'center' }}>
                <PressureIcon /> Pressure: {selectedTreatment.pressure}
              </span>
              <span className="dat-price-pill" style={{ fontSize: '0.85rem', padding: '6px 16px', borderRadius: '15px', display: 'inline-flex', alignItems: 'center' }}>
                <RupeeIcon /> Tariff: {selectedTreatment.price}
              </span>
            </div>

            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: isLight ? '#523e30' : 'rgba(248,246,240,0.88)', marginBottom: '25px' }}>{selectedTreatment.desc}</p>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
              <span style={{ fontWeight: '600', color: isLight ? '#5c3a21' : '#d4af37', fontSize: '0.88rem' }}>Includes Custom Aromatherapy Oil Consultation</span>
              <Link href={`/booking?therapy=${encodeURIComponent(selectedTreatment.title)}`} style={{ padding: '12px 28px', background: isLight ? '#b8860b' : '#d4af37', color: isLight ? '#ffffff' : '#070c0a', borderRadius: '30px', fontWeight: '700', textDecoration: 'none' }}>
                Book This Treatment
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
