'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

const BASE = 'https://diosabalispa.in/wp-content/uploads/2025/07/';

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
  { id: 1, category: 'massage', goal: 'pain', duration: '60 / 90 Mins', pressure: 'Firm', title: 'Traditional Balinese Massage', desc: 'Uses acupressure, skin rolling, friction, flicking, and percussion to relieve muscle pain, improve sleep, blood circulation, skin health, stress management, energizer, and immunity.', img: BASE + 'ea.jpg' },
  { id: 2, category: 'massage', goal: 'stress', duration: '60 / 90 Mins', pressure: 'Gentle', title: 'Bali Aroma Massage', desc: 'Offers a multi-purpose health treatment, promoting skin suppleness, pain relief, stress reduction, blood flow stimulation, muscle relaxation, detoxification, and skin nourishment.', img: BASE + 't1.webp' },
  { id: 3, category: 'massage', goal: 'pain', duration: '60 / 90 / 120 Mins', pressure: 'Deep', title: 'Bali Thai Massage', desc: 'An oriental bodywork therapy that treats the human body, mind, and spirit, enhancing range of motion, reducing back pain, headache intensity, and stress.', img: BASE + 'caption-e1753253128451.jpg' },
  { id: 4, category: 'massage', goal: 'stress', duration: '60 / 90 Mins', pressure: 'Medium', title: 'Four Hands Massage', desc: 'Two therapists working on one client, restoring balance, removing blockages, improving sleep, reducing swelling, easing headaches, and increasing wrist and finger flexibility.', img: BASE + 'a6b4261509788cc843fafcac56d38c51.jpg' },
  { id: 5, category: 'massage', goal: 'pain', duration: '60 / 90 Mins', pressure: 'Deep', title: 'Deep Tissue Massage', desc: 'Designed to target chronic pain, muscle knots, and deep-seated tension. Perfect for those who need real relief.', img: BASE + '8fee7d519bb21d9352817f6de95fcc94.jpg' },
  { id: 6, category: 'massage', goal: 'pain', duration: '60 Mins', pressure: 'Firm', title: 'Trigger Point Massage', desc: 'Treats painful knots in muscles to alleviate pain, improve range of motion, posture, and reduce headaches and muscle tension.', img: BASE + 'a1d7e262bc47670ae69b273646ce2e13.jpg' },
  { id: 7, category: 'massage', goal: 'stress', duration: '60 / 90 Mins', pressure: 'Medium', title: 'Shiatsu Massage', desc: 'Uses fingers, thumbs, and palms to apply pressure to body surfaces, promoting energy flow and improving health, skin, bowel function, fatigue, and mood.', img: BASE + '70a30a7c95949691bc34abd483d689f2.jpg' },
  { id: 8, category: 'massage', goal: 'sleep', duration: '60 / 90 Mins', pressure: 'Light to Medium', title: 'Swedish Massage', desc: 'A manual therapy involving long strokes, kneading, and friction, promoting proper circulation, pain management, flexibility, stress reduction, and immune system improvement.', img: BASE + '532e79679274fb11a8bd80f4d4b2e2fb.jpg' },
  { id: 9, category: 'massage', goal: 'sleep', duration: '60 / 90 Mins', pressure: 'Gentle', title: 'Hot Oil Massage', desc: 'Relaxes and nourishes, restoring balance, promoting muscle tone, stimulating creativity, rejuvenating skin, increasing stamina, and encouraging deep sleep.', img: BASE + 'a7ab8bb31ebfe25f3fb4870906c320a9.jpg' },
  { id: 10, category: 'massage', goal: 'pain', duration: '75 / 90 Mins', pressure: 'Medium to Firm', title: 'Hot Stone Massage', desc: 'A treatment using heated stones to ease muscle tension, reduce stress, promote sleep, decrease cancer symptoms, and boost immunity.', img: BASE + '713a2b3f2852be21624a0b9d4c9b4655.jpg' },
  { id: 11, category: 'massage', goal: 'pain', duration: '60 / 90 Mins', pressure: 'Firm', title: 'Bamboo Massage', desc: 'Uses smooth bamboo sticks to warm muscles, reduce pain, and stretch fascia. Improves joint stiffness, sleep quality, mental clarity, and lymphatic drainage.', img: BASE + 'ab1ee6256cfba20954cf52a499a094b2.jpg' },
  { id: 12, category: 'massage', goal: 'pain', duration: '60 / 90 Mins', pressure: 'Medium', title: 'Herbal Potli Massage', desc: 'A traditional Thai treatment using a hot compress of herbs to soothe muscles, stimulate vital organs, reduce tension, relieve chronic pain, and improve skin quality.', img: BASE + '489d82b6234fd0db30994966b7367c54.jpg' },
  { id: 13, category: 'massage', goal: 'sleep', duration: '60 Mins', pressure: 'Gentle', title: 'Candlelight Massage', desc: 'A relaxing and calming experience that promotes healing, relaxation, and well-being by calming the mind, promoting better breathing and easing tension in a warm, intimate room.', img: BASE + 'afa5eed5ac7f258999b24aff33ec4dcd.jpg' },
  { id: 14, category: 'massage', goal: 'pain', duration: '60 / 90 Mins', pressure: 'Firm to Deep', title: 'Sports Massage', desc: 'Involves manipulating soft tissue to improve performance, sleep, and reduce neurological excitability, addressing issues caused by repetitive physical activity and trauma.', img: BASE + '39e5907c2d7b25017b695c6ddfdb14c9.jpg' },
  { id: 15, category: 'massage', goal: 'stress', duration: '60 Mins', pressure: 'Gentle', title: 'Pregnancy Massage', desc: 'Hands-on treatments designed to support the mother-to-be\'s body during pregnancy, aiming to alleviate back pain, leg discomfort, anxiety, depression, and insomnia.', img: BASE + 'd84ade4d4f8d0f844ca5dad9849861df.jpg' },
  { id: 16, category: 'massage', goal: 'stress', duration: '60 / 90 Mins', pressure: 'Medium', title: 'Tai-chi Massage', desc: 'A barefoot massage using feet and hands, reducing chronic pain, improving flexibility, mood, and muscle strength, and reducing anxiety and depression.', img: BASE + '48882ebcc4bf0c10e56db981f0790401.jpg' },
  { id: 17, category: 'massage', goal: 'skin', duration: '60 / 90 Mins', pressure: 'Medium', title: 'Chocolate Massage', desc: 'A deep, nourishing therapy using real chocolate oil, which stimulates endorphins, combats anxiety, and stimulates circulation, promoting skin rejuvenation and healing.', img: BASE + 'c8d3863df8b76bce280f5f33b20e546a.jpg' },
  { id: 18, category: 'massage', goal: 'sleep', duration: '60 Mins', pressure: 'Soft', title: 'Soft Touch Massage', desc: 'Softly touches your body with fingers to relieve stress, give good sleep, reduce pain, and help your body\'s systems circulate more freely, releasing blocked energy.', img: BASE + '4f6fa076117c2b4be43e4444a99d868c.jpg' },
  { id: 19, category: 'massage', goal: 'stress', duration: '60 / 90 Mins', pressure: 'Medium', title: 'Couple Massage', desc: 'Allows two people to have a shared experience that can result in a closer bond, relaxing and enjoying the experience together in harmony.', img: BASE + '5564b5f29edb5ad1e8edf0ba485c8088.jpg' },
  { id: 20, category: 'massage', goal: 'stress', duration: '60 / 90 Mins', pressure: 'Medium', title: 'Bali Ayurvedic Massage', desc: 'Organic oil blends infused with Ayurvedic herbs promote relaxation, detoxification, pain relief, immunity boost, sleep, nervous system calmness, and reduced dryness.', img: BASE + 'ee7e103328cef3b3bafdeff65f2aaf1c.jpg' },
  { id: 21, category: 'massage', goal: 'skin', duration: '60 Mins', pressure: 'Medium', title: 'Honey Massage', desc: 'Stimulates tissue healing, clears wound infections, reduces pain, improves blood circulation, warms and tones skin, promotes nutrition and waste removal.', img: BASE + 'e3bee3deb3b5e8e8852482601818d5cf.jpg' },
  { id: 22, category: 'massage', goal: 'sleep', duration: '60 / 90 Mins', pressure: 'Gentle', title: 'Relaxation Massage', desc: 'Involves gentle pressure on soft tissues, promoting relaxation, lowering heart rate and blood pressure, reducing muscle tension and soreness, and improving energy alertness.', img: BASE + '7c6c7766997cc000b9e18765c36c5354.jpg' },
  { id: 23, category: 'massage', goal: 'pain', duration: '60 Mins', pressure: 'Firm', title: 'Dry Massage', desc: 'A non-oil-based method involving deep compressing, rhythmic pressing, and stretching to improve blood circulation, relieve headaches, support detoxification, and balance energy.', img: BASE + 'fb8f02d3bddc19264b1218484e3fbc10.jpg' },
  { id: 24, category: 'massage', goal: 'skin', duration: '60 Mins', pressure: 'Gentle', title: 'Cream Massage', desc: 'Provides soothing, relaxing, and rejuvenating benefits for tired, dull skin, counteracting premature ageing and offering aromatherapy for relaxation and potential pain relief.', img: BASE + '9f2e3a87c1c095568417d7c66aa352d1.jpg' },
  { id: 25, category: 'massage', goal: 'skin', duration: '60 Mins', pressure: 'Medium', title: "Cow's Ghee Massage", desc: 'A rich source of omega fatty acids and antioxidants, nourishing and moisturizing the skin, transforming dull skin into healthy, glowing and repairing dry or damaged skin.', img: BASE + 'Ghee-7th.avif' },
  { id: 26, category: 'massage', goal: 'skin', duration: '60 Mins', pressure: 'Light', title: 'Olive Oil Massage', desc: 'Ideal for a light massage as it gets absorbed slowly into the skin, perfect for relaxing muscles and locking in moisture while lowering cholesterol and being rich in vitamin E.', img: BASE + '23e7c690d7db70ca4a3b3b33bc8caf44.jpg' },
  { id: 27, category: 'massage', goal: 'skin', duration: '60 Mins', pressure: 'Gentle', title: 'Almond Oil Massage', desc: 'A powerful moisturizer, antifungal, and anti-inflammatory. Contains vitamin E, antioxidants, and magnesium, which can lower cancer risk, reduce aging, and soothe sensitive skin.', img: BASE + '6fdde8cfa66e7b94ec57c85b7636dd49.jpg' },
  { id: 28, category: 'massage', goal: 'skin', duration: '60 Mins', pressure: 'Medium', title: 'Coconut Oil Massage', desc: 'Rich in saturated fats, effectively traps moisture, protecting the skin from dehydration. Promotes healthy skin, prevents infections, and diminishes stretch marks.', img: BASE + '130e379bb2e2c1b84627580513bd2e0a.jpg' },
  { id: 29, category: 'massage', goal: 'skin', duration: '60 Mins', pressure: 'Medium', title: 'Sesame Oil Massage', desc: 'Helps moisturize skin, prevents dryness, and repairs skin growth. Anti-inflammatory, antimicrobial properties aid in cell repair, reduce body heat, and act as a natural sunscreen.', img: BASE + '83cb880d5505782657397c4a31ecb396.jpg' },
  { id: 30, category: 'massage', goal: 'pain', duration: '60 Mins', pressure: 'Firm', title: 'Mustard Oil Massage', desc: 'Improves blood circulation, relieves joint and muscle pain, retains body heat, and is rich in omega-3 fatty acids. Reduces congestion and strengthens red blood cells.', img: BASE + '3e28bdd794cf50d71c71884f68925f38.jpg' },
  { id: 31, category: 'pedicure', goal: 'stress', duration: '45 / 60 Mins', pressure: 'Medium', title: 'Head & Shoulder Massage', desc: 'A relaxing aromatic massage with cool fingertips to reduce stress, improve mood, and strengthen the immune system, reducing migraines, eye strains, and muscle soreness.', img: BASE + 'f8f10338fbfc0ed0610bc69854ee098f.jpg' },
  { id: 32, category: 'facial', goal: 'skin', duration: '60 Mins', pressure: 'Gentle', title: 'Face & Neck Massage', desc: 'Promotes healthy skin, relaxes muscles, and aids lymphatic drainage. Reduces lines, wrinkles, and acne and improves blood circulation for younger, fresher skin.', img: BASE + '0269e80cfcde2385fe8b62a8409c1cab.jpg' },
  { id: 33, category: 'pedicure', goal: 'pain', duration: '45 Mins', pressure: 'Medium', title: "Full Hand's Massage", desc: 'Uses friction, trigger-pointing, skin rolling, and acupressure to reduce pain, increase relaxation, reduce scarring, restore balance, improve sleep, and relieve headaches.', img: BASE + 'd6f687360e3fbc52814588d48d9b6eab.jpg' },
  { id: 34, category: 'massage', goal: 'stress', duration: '45 Mins', pressure: 'Medium', title: 'Chest & Abdomen Massage', desc: 'Uses kneading, trigger pointing, and skin rolling to relax, tighten muscles. Supports digestion, promotes healthy posture, strengthens the abdomen, and releases tension.', img: BASE + '4046309770822a9e6e450a225ed05f3c-1.jpg' },
  { id: 35, category: 'massage', goal: 'pain', duration: '45 / 60 Mins', pressure: 'Firm', title: 'Full Back Massage', desc: 'Reduces tightness, relaxes muscles, improves circulation, relieves pain, realigns muscles, relieves headaches, soothes anxiety, and counteracts poor posture.', img: BASE + '34ee4e8034437873ea656fd427a6b860-2.jpg' },
  { id: 36, category: 'pedicure', goal: 'pain', duration: '45 / 60 Mins', pressure: 'Firm', title: 'Foot & Leg Massage', desc: 'Improves blood circulation, stretches muscles, reduces stress, promotes recovery, lymphatic drainage, pain reduction, and injury prevention.', img: BASE + '9c3c12f8d53d3e8624ad11ec90ec7c8c-1.jpg' },
  { id: 37, category: 'pedicure', goal: 'pain', duration: '45 / 60 Mins', pressure: 'Medium to Firm', title: 'Foot Reflexology', desc: 'A relaxing therapy linking foot areas to body organs, promoting healing and relaxation. Improves blood circulation, sleep, pain, mood, and foot health.', img: BASE + '19f0fb00b13e67e435731ee5847f3ba3-1.jpg' },
  { id: 38, category: 'pedicure', goal: 'pain', duration: '45 Mins', pressure: 'Medium', title: 'Hand Reflexology', desc: 'A massage technique targeting reflex points around the hands, believed to alleviate headaches, back pain, shoulder pain, allergies, and neck pressure.', img: BASE + '0d34ee49bfd7e6a108cb1f978dc7b83b-6.jpg' },
  { id: 39, category: 'wrap', goal: 'stress', duration: '90 / 120 Mins', pressure: 'Medium', title: 'Healing Therapies', desc: 'Unique healing therapies including Abhyangam Massage, Herbal Powder Massage, and Tibetan Healing Sound Therapy, stimulating sensory points and aiding in healing of various illnesses.', img: BASE + '526e4b3ecafaa18612d14b5fa918fd97.jpg' },
  { id: 40, category: 'wrap', goal: 'skin', duration: '60 / 90 Mins', pressure: 'Gentle', title: 'Body Wrap', desc: 'Organic Spirulina Wrap, Seaweed Mud Wrap, Bali Herbs & Sandalwood Wrap, Indian Healing Clay with Banana Leaf, and Chocolate Body Wrap to recreate skin glow and healthy appearance.', img: BASE + '3ef4fda83059431499c1a6994d70354e.jpg' },
  { id: 41, category: 'wrap', goal: 'skin', duration: '60 / 90 Mins', pressure: 'Medium', title: 'Body Polish & Treatment', desc: 'Renowned for our Bali Coconut Body Polish and Full Body Facial, these services enhance the overall cleansing process, leaving your skin refreshed and rejuvenated.', img: BASE + '24786c6a638f68159b8e75cb1e3813ab.jpg' },
  { id: 42, category: 'facial', goal: 'skin', duration: '60 / 90 Mins', pressure: 'Gentle', title: 'Wellness Spa Facial', desc: 'Facials blending modern and traditional techniques: Bali Aromatherapy Facial, Red Wine Facial, Thai Whitening Spa Facial, Warm Oil Hot Stone Facial, Signature Spa Facial.', img: BASE + '2b82e488ef1e6473f44dab4e672dbfb5.jpg' },
  { id: 43, category: 'pedicure', goal: 'stress', duration: '60 Mins', pressure: 'Gentle', title: 'Spa Pedicure', desc: 'Renowned pedicures including Peppermint Chiller, Citrus Spa Pedicure, Crystal Spa Pedicure, Bali Hot Stone Pedicure, and Aroma Warm Oil Potli Pedicure for refreshing treatments.', img: BASE + '8da7090e9a07de2a8280f189fc9935a3.jpg' },
  { id: 44, category: 'bath', goal: 'sleep', duration: '45 / 60 Mins', pressure: 'Hydro-Therapy', title: 'Rejuvenating Bath', desc: 'Herbs-infused baths including Steam Bath, Aroma Hot Tub, Fruits & Flower Bath, Bali Herbal Bath, and Lavender Bath — signature baths that especially heal mind and soul.', img: BASE + '148819288f0738bb3b47c73f6c065eb0.jpg' }
];

const horizonSignatureItems = [
  treatments[0],  // Traditional Balinese
  treatments[3],  // Four Hands
  treatments[9],  // Hot Stone
  treatments[11], // Herbal Potli
  treatments[41], // Wellness Facial
  treatments[43]  // Rejuvenating Bath
];

export default function TherapyPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('all');
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const horizonTrackRef = useRef(null);

  const getCategoryCount = (catId) => {
    if (catId === 'all') return treatments.length;
    return treatments.filter(t => t.category === catId).length;
  };

  const filteredTreatments = treatments.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
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
    <main style={{ background: '#070c0a', color: '#f8f6f0', minHeight: '100vh' }}>
      {/* CINEMATIC DEEP DARK EMERALD HERO */}
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

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span style={{ background: 'rgba(212,175,55,0.15)', color: '#d4af37', padding: '6px 20px', borderRadius: '25px', border: '1px solid rgba(212,175,55,0.4)', fontSize: '0.8rem', letterSpacing: '0.2em', fontWeight: 700, textTransform: 'uppercase' }}>
            DIOSA BALI SPA SANCTUARY
          </span>
          <h1 style={{ fontSize: '3.8rem', marginTop: '18px', marginBottom: '14px', fontFamily: "'Cormorant Garamond', serif", color: '#f8f6f0', letterSpacing: '0.02em' }}>
            Therapies &amp; Healing Rituals
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'rgba(248,246,240,0.85)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Step into our dark emerald sanctuary — a high-art collection of 44 ancient Indo-Balinese bodywork rituals, hot stone therapies, and sensory hydro-baths.
          </p>

          {/* "FIND YOUR IDEAL RITUAL" GOAL SELECTOR WITH ELEGANT SVG ICONS */}
          <div style={{ marginTop: '40px', background: 'rgba(20,36,29,0.7)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '24px', padding: '24px 30px', maxWidth: '880px', marginLeft: 'auto', marginRight: 'auto', backdropFilter: 'blur(16px)' }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', color: '#d4af37', marginBottom: '16px', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SparkleIcon /> WHAT IS YOUR HEALING GOAL TODAY?
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {[
                { id: 'all', label: 'All 44 Rituals', icon: <LotusIcon /> },
                { id: 'pain', label: 'Deep Muscle & Pain Relief', icon: <LightningIcon /> },
                { id: 'stress', label: 'Stress & Anxiety Release', icon: <LeafIcon /> },
                { id: 'skin', label: 'Radiant Skin Glow', icon: <SparkleIcon /> },
                { id: 'sleep', label: 'Deep Sleep & Mind Calm', icon: <MoonIcon /> }
              ].map(g => (
                <button
                  key={g.id}
                  onClick={() => setSelectedGoal(g.id)}
                  style={{
                    padding: '11px 22px',
                    borderRadius: '25px',
                    border: '1px solid',
                    borderColor: selectedGoal === g.id ? '#d4af37' : 'rgba(212,175,55,0.25)',
                    background: selectedGoal === g.id ? '#d4af37' : 'rgba(10,17,14,0.6)',
                    color: selectedGoal === g.id ? '#070c0a' : '#f8f6f0',
                    fontWeight: selectedGoal === g.id ? '700' : '500',
                    cursor: 'pointer',
                    fontSize: '0.88rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    transition: 'all 0.3s ease'
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
      <section className="cinematic-horizon-section">
        <div className="horizon-header">
          <div>
            <span style={{ color: '#d4af37', fontSize: '0.8rem', letterSpacing: '0.18em', fontWeight: 700, textTransform: 'uppercase' }}>
              CURATED SHOWCASE
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', color: '#f8f6f0', margin: '4px 0 0 0' }}>
              Signature Experiences
            </h2>
          </div>
          
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={() => scrollHorizon('left')} style={{ width: '46px', height: '46px', borderRadius: '50%', border: '1px solid #d4af37', background: 'rgba(212,175,55,0.1)', color: '#d4af37', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&larr;</button>
            <button onClick={() => scrollHorizon('right')} style={{ width: '46px', height: '46px', borderRadius: '50%', border: '1px solid #d4af37', background: 'rgba(212,175,55,0.1)', color: '#d4af37', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&rarr;</button>
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
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.78rem', background: 'rgba(212,175,55,0.2)', color: '#d4af37', padding: '5px 14px', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.4)', fontWeight: 600, display: 'inline-flex', alignItems: 'center' }}>
                        <ClockIcon /> {item.duration}
                      </span>
                      <span style={{ fontSize: '0.78rem', background: 'rgba(212,175,55,0.2)', color: '#d4af37', padding: '5px 14px', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.4)', fontWeight: 600, display: 'inline-flex', alignItems: 'center' }}>
                        <PressureIcon /> {item.pressure}
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
      <section style={{ padding: '40px 0 100px 0', background: '#070c0a' }}>
        <div className="container">
          {/* SEARCH & GLASSMORPHISM CATEGORY PILLS */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
            <input 
              type="text"
              placeholder="Search 44 treatments by keyword (e.g. Balinese, Facials, Hot Stone)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                maxWidth: '560px',
                padding: '14px 26px',
                borderRadius: '30px',
                border: '1.5px solid rgba(212,175,55,0.4)',
                background: '#0e1914',
                outline: 'none',
                fontSize: '1rem',
                color: '#f8f6f0',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }}
            />

            <div className="emerald-filter-nav">
              {[
                { id: 'all', label: 'All Rituals' },
                { id: 'massage', label: 'Massages' },
                { id: 'facial', label: 'Facials' },
                { id: 'pedicure', label: 'Hand & Feet' },
                { id: 'wrap', label: 'Body Wraps' },
                { id: 'bath', label: 'Rejuvenating Baths' }
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

          {/* TREATMENT CARDS GRID WITH STICKY SCROLL STACKING */}
          <div className="dat-grid">
            {filteredTreatments.map((t, idx) => {
              const isRecommended = selectedGoal !== 'all' && t.goal === selectedGoal;
              return (
                <div key={t.id} className={`dat-card emerald-card ${isRecommended ? 'highlight-recommended' : ''}`} style={{ '--card-index': idx + 1 }}>
                  <div className="dat-img-wrap">
                    <img src={t.img} alt={t.title} className="dat-img" />
                    <div className="dat-img-overlay"></div>
                    <span style={{ position: 'absolute', top: '14px', left: '14px', background: 'rgba(7,12,10,0.9)', color: '#d4af37', border: '1px solid rgba(212,175,55,0.4)', padding: '5px 14px', borderRadius: '15px', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.5px', zIndex: 2 }}>
                      RITUAL {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="dat-body">
                    <div>
                      <div className="dat-card-tags">
                        <span className="dat-tag-pill" style={{ background: 'rgba(212,175,55,0.15)', color: '#d4af37', display: 'inline-flex', alignItems: 'center' }}>
                          <ClockIcon /> {t.duration}
                        </span>
                        <span className="dat-tag-pill" style={{ background: 'rgba(212,175,55,0.15)', color: '#d4af37', display: 'inline-flex', alignItems: 'center' }}>
                          <PressureIcon /> {t.pressure}
                        </span>
                        {isRecommended && (
                          <span className="dat-tag-pill" style={{ background: '#d4af37', color: '#070c0a', fontWeight: 700, display: 'inline-flex', alignItems: 'center' }}>
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
                        style={{ padding: '8px 18px', border: '1.5px solid #d4af37', background: 'transparent', color: '#d4af37', fontWeight: '600', borderRadius: '20px', cursor: 'pointer', fontSize: '0.8rem' }}
                      >
                        Quick View Details
                      </button>
                      <Link
                        href="/booking"
                        style={{ padding: '8px 22px', background: '#d4af37', color: '#070c0a', borderRadius: '20px', textDecoration: 'none', fontWeight: '700', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center' }}
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

      {/* QUICK VIEW DETAIL MODAL IN DEEP DARK EMERALD STYLING */}
      {selectedTreatment && (
        <div className="modal-overlay active" onClick={() => setSelectedTreatment(null)} style={{ display: 'flex', zIndex: 10000, background: 'rgba(0,0,0,0.85)' }}>
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{ background: '#0e1914', color: '#f8f6f0', padding: '35px', borderRadius: '24px', maxWidth: '640px', width: '90%', position: 'relative', border: '1.5px solid #d4af37', boxShadow: '0 25px 60px rgba(0,0,0,0.8)' }}
          >
            <button onClick={() => setSelectedTreatment(null)} style={{ position: 'absolute', top: '15px', right: '20px', border: 'none', background: 'none', fontSize: '26px', cursor: 'pointer', color: '#d4af37' }}>&times;</button>
            <h2 style={{ color: '#d4af37', fontFamily: "'Cormorant Garamond', serif", fontSize: '2.4rem', marginBottom: '15px' }}>{selectedTreatment.title}</h2>
            
            <div style={{ height: '260px', width: '100%', borderRadius: '16px', overflow: 'hidden', marginBottom: '20px', border: '1px solid rgba(212,175,55,0.3)' }}>
              <img src={selectedTreatment.img} alt={selectedTreatment.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ display: 'flex', gap: '12px', marginBottom: '18px' }}>
              <span style={{ fontSize: '0.8rem', background: 'rgba(212,175,55,0.15)', color: '#d4af37', padding: '5px 14px', borderRadius: '15px', fontWeight: 600, border: '1px solid rgba(212,175,55,0.3)', display: 'inline-flex', alignItems: 'center' }}>
                <ClockIcon /> Duration: {selectedTreatment.duration}
              </span>
              <span style={{ fontSize: '0.8rem', background: 'rgba(212,175,55,0.15)', color: '#d4af37', padding: '5px 14px', borderRadius: '15px', fontWeight: 600, border: '1px solid rgba(212,175,55,0.3)', display: 'inline-flex', alignItems: 'center' }}>
                <PressureIcon /> Pressure: {selectedTreatment.pressure}
              </span>
            </div>

            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(248,246,240,0.88)', marginBottom: '25px' }}>{selectedTreatment.desc}</p>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: '600', color: '#d4af37', fontSize: '0.9rem' }}>Includes Custom Aromatherapy Oil Consultation</span>
              <Link href="/booking" style={{ padding: '12px 28px', background: '#d4af37', color: '#070c0a', borderRadius: '30px', fontWeight: '700', textDecoration: 'none' }}>
                Book This Treatment
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
