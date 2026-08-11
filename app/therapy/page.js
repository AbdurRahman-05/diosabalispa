'use client';

import { useState } from 'react';
import Link from 'next/link';

const BASE = 'https://diosabalispa.in/wp-content/uploads/2025/07/';

const treatments = [
  { id: 1, category: 'massage', title: 'Traditional Balinese Massage', desc: 'Uses acupressure, skin rolling, friction, flicking, and percussion to relieve muscle pain, improve sleep, blood circulation, skin health, stress management, energizer, and immunity.', img: BASE + 'ea.jpg' },
  { id: 2, category: 'massage', title: 'Bali Aroma Massage', desc: 'Offers a multi-purpose health treatment, promoting skin suppleness, pain relief, stress reduction, blood flow stimulation, muscle relaxation, detoxification, and skin nourishment.', img: BASE + 't1.webp' },
  { id: 3, category: 'massage', title: 'Bali Thai Massage', desc: 'An oriental bodywork therapy that treats the human body, mind, and spirit, enhancing range of motion, reducing back pain, headache intensity, and stress.', img: BASE + 'caption-e1753253128451.jpg' },
  { id: 4, category: 'massage', title: 'Four Hands Massage', desc: 'Two therapists working on one client, restoring balance, removing blockages, improving sleep, reducing swelling, easing headaches, and increasing wrist and finger flexibility.', img: BASE + 'a6b4261509788cc843fafcac56d38c51.jpg' },
  { id: 5, category: 'massage', title: 'Deep Tissue Massage', desc: 'Designed to target chronic pain, muscle knots, and deep-seated tension. Perfect for those who need real relief.', img: BASE + '8fee7d519bb21d9352817f6de95fcc94.jpg' },
  { id: 6, category: 'massage', title: 'Trigger Point Massage', desc: 'Treats painful knots in muscles to alleviate pain, improve range of motion, posture, and reduce headaches and muscle tension.', img: BASE + 'a1d7e262bc47670ae69b273646ce2e13.jpg' },
  { id: 7, category: 'massage', title: 'Shiatsu Massage', desc: 'Uses fingers, thumbs, and palms to apply pressure to body surfaces, promoting energy flow and improving health, skin, bowel function, fatigue, and mood.', img: BASE + '70a30a7c95949691bc34abd483d689f2.jpg' },
  { id: 8, category: 'massage', title: 'Swedish Massage', desc: 'A manual therapy involving long strokes, kneading, and friction, promoting proper circulation, pain management, flexibility, stress reduction, and immune system improvement.', img: BASE + '532e79679274fb11a8bd80f4d4b2e2fb.jpg' },
  { id: 9, category: 'massage', title: 'Hot Stone Massage', desc: 'A treatment using heated stones to ease muscle tension, reduce stress, promote sleep, decrease cancer symptoms, and boost immunity.', img: BASE + '713a2b3f2852be21624a0b9d4c9b4655.jpg' },
  { id: 10, category: 'massage', title: 'Bamboo Massage', desc: 'Uses smooth bamboo sticks to warm muscles, reduce pain, and stretch fascia. Improves joint stiffness, sleep quality, mental clarity, and lymphatic drainage.', img: BASE + 'ab1ee6256cfba20954cf52a499a094b2.jpg' },
  { id: 11, category: 'facial', title: 'Wellness Spa Facial', desc: 'Facials blending modern and traditional techniques: Bali Aromatherapy Facial, Red Wine Facial, Thai Whitening Spa Facial, Warm Oil Hot Stone Facial, Signature Spa Facial.', img: BASE + '2b82e488ef1e6473f44dab4e672dbfb5.jpg' },
  { id: 12, category: 'facial', title: 'Face & Neck Massage', desc: 'Promotes healthy skin, relaxes muscles, and aids lymphatic drainage. Reduces lines, wrinkles, and acne and improves blood circulation for younger, fresher skin.', img: BASE + '0269e80cfcde2385fe8b62a8409c1cab.jpg' },
  { id: 13, category: 'pedicure', title: 'Spa Pedicure', desc: 'Renowned pedicures including Peppermint Chiller, Citrus Spa Pedicure, Crystal Spa Pedicure, Bali Hot Stone Pedicure, and Aroma Warm Oil Potli Pedicure for refreshing treatments.', img: BASE + '8da7090e9a07de2a8280f189fc9935a3.jpg' },
  { id: 14, category: 'pedicure', title: 'Foot & Leg Massage', desc: 'Improves blood circulation, stretches muscles, reduces stress, promotes recovery, lymphatic drainage, pain reduction, and injury prevention.', img: BASE + '9c3c12f8d53d3e8624ad11ec90ec7c8c-1.jpg' },
  { id: 15, category: 'wrap', title: 'Body Wrap', desc: 'Organic Spirulina Wrap, Seaweed Mud Wrap, Bali Herbs & Sandalwood Wrap, Indian Healing Clay with Banana Leaf, and Chocolate Body Wrap to recreate skin glow and healthy appearance.', img: BASE + '3ef4fda83059431499c1a6994d70354e.jpg' },
  { id: 16, category: 'wrap', title: 'Body Polish & Treatment', desc: 'Renowned for our Bali Coconut Body Polish and Full Body Facial, these services enhance the overall cleansing process, leaving your skin refreshed and rejuvenated.', img: BASE + '24786c6a638f68159b8e75cb1e3813ab.jpg' },
  { id: 17, category: 'bath', title: 'Rejuvenating Bath', desc: 'Herbs-infused baths including Steam Bath, Aroma Hot Tub, Fruits & Flower Bath, Bali Herbal Bath, and Lavender Bath — signature baths that especially heal mind and soul.', img: BASE + '148819288f0738bb3b47c73f6c065eb0.jpg' },
];

export default function TherapyPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const filteredTreatments = treatments.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      {/* THERAPY PAGE HERO */}
      <section className="therapy-hero-section" style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)', textAlign: 'center', paddingTop: '160px', paddingBottom: '40px' }}>
        <div className="container">
          <span className="section-tagline">DIOSA BALI SPA</span>
          <h1 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '12px' }}>Our Therapies &amp; Rituals</h1>
          <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto', opacity: 0.85, fontSize: '1.1rem' }}>
            Explore our complete menu of expertly crafted treatments — each one designed to restore balance, heal strain, and deeply nourish.
          </p>

          {/* Search & Category Filter Bar */}
          <div style={{ marginTop: '35px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
            <input 
              type="text"
              placeholder="Search treatments (e.g. Balinese, Facials, Stone)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                maxWidth: '500px',
                padding: '14px 22px',
                borderRadius: '30px',
                border: '1px solid var(--glass-border)',
                background: 'rgba(255,255,255,0.8)',
                outline: 'none',
                fontSize: '1rem',
                boxShadow: 'var(--shadow-soft)'
              }}
            />

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
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
                  style={{
                    padding: '10px 22px',
                    borderRadius: '25px',
                    border: '1px solid var(--accent-gold)',
                    background: activeCategory === cat.id ? 'var(--accent-gold)' : 'transparent',
                    color: activeCategory === cat.id ? '#1e2420' : 'var(--text-primary)',
                    fontWeight: activeCategory === cat.id ? '600' : '400',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENTS GRID */}
      <section className="dbs-all-treatments" style={{ padding: '40px 0 100px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
            {filteredTreatments.map((t, idx) => (
              <div 
                key={t.id} 
                className="dat-card"
                style={{
                  background: 'var(--bg-secondary)',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  border: '1.5px solid var(--accent-gold)',
                  boxShadow: '0 8px 24px rgba(30, 36, 32, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img src={t.img} alt={t.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '15px', left: '15px', background: 'rgba(30,36,32,0.88)', color: 'var(--accent-gold)', padding: '6px 16px', borderRadius: '15px', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.5px' }}>
                    RITUAL 0{idx + 1}
                  </span>
                </div>
                <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--accent-gold-dark)', fontWeight: '600', marginBottom: '10px' }}>
                    {t.title}
                  </h3>
                  <p style={{ fontSize: '0.94rem', color: '#1e2420', fontWeight: '500', opacity: 1, lineHeight: 1.6, flexGrow: 1, marginBottom: '20px' }}>
                    {t.desc}
                  </p>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      onClick={() => setSelectedTreatment(t)}
                      style={{ padding: '10px 18px', border: '1.5px solid var(--accent-gold)', background: 'transparent', color: '#1e2420', fontWeight: '600', borderRadius: '20px', cursor: 'pointer', fontSize: '0.85rem' }}
                    >
                      Quick View
                    </button>
                    <Link
                      href="/booking"
                      style={{ padding: '10px 20px', background: 'var(--accent-gold)', color: '#1e2420', borderRadius: '20px', textDecoration: 'none', fontWeight: '700', fontSize: '0.85rem' }}
                    >
                      Reserve
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK VIEW DETAIL MODAL */}
      {selectedTreatment && (
        <div className="modal-overlay active" onClick={() => setSelectedTreatment(null)} style={{ display: 'flex', zIndex: 10000 }}>
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{ background: 'var(--bg-primary)', padding: '35px', borderRadius: '20px', maxWidth: '600px', width: '90%', position: 'relative' }}
          >
            <button onClick={() => setSelectedTreatment(null)} style={{ position: 'absolute', top: '15px', right: '20px', border: 'none', background: 'none', fontSize: '24px', cursor: 'pointer' }}>&times;</button>
            <h2 style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-heading)', fontSize: '2.2rem', marginBottom: '15px' }}>{selectedTreatment.title}</h2>
            <img src={selectedTreatment.img} alt={selectedTreatment.title} style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '12px', marginBottom: '20px' }} />
            <p style={{ fontSize: '1rem', lineHeight: 1.7, opacity: 0.9, marginBottom: '25px' }}>{selectedTreatment.desc}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: '600', color: 'var(--accent-gold-dark)' }}>Duration: 60 / 90 / 120 Mins</span>
              <Link href="/booking" style={{ padding: '12px 28px', background: 'var(--accent-gold)', color: '#1e2420', borderRadius: '30px', fontWeight: '600', textDecoration: 'none' }}>
                Book This Treatment
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
