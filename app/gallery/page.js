'use client';

import { useState } from 'react';
import DriftWall from '../components/DriftWall';

const galleryItems = [
  { id: 1, title: 'Diosa Bali Sanctuary Suite', category: 'ambience', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-1.jpg' },
  { id: 2, title: 'Aromatherapy Oil Blends', category: 'botanicals', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-2.jpg' },
  { id: 3, title: 'Balinese Herbal Bath Ritual', category: 'treatments', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-3.jpg' },
  { id: 4, title: 'Botanical Skincare Facial', category: 'treatments', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-4.jpg' },
  { id: 5, title: 'Volcanic Basalt Stones', category: 'botanicals', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-6.jpg' },
  { id: 6, title: 'Therapeutic Deep Pressure Massage', category: 'treatments', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-8.jpg' },
  { id: 7, title: 'Luxury Double Suite', category: 'ambience', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-9.jpg' },
  { id: 8, title: 'Sanctuary Lounge & Tea Service', category: 'ambience', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-10-e1752860173718.jpg', wide: true },
  { id: 9, title: 'Pedicure & Foot Care Sanctuary', category: 'treatments', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-11.jpg' },
  { id: 10, title: 'Organic Herbal Scrubs & Spices', category: 'botanicals', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-12.jpg' },
  { id: 11, title: 'Thai Whitening Spa Facial', category: 'treatments', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-13.jpg' },
  { id: 12, title: 'Private Flower Soak Tub', category: 'ambience', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-14.jpg' },
  { id: 13, title: 'Four Hands Synchronized Ritual', category: 'treatments', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-15.jpg' },
  { id: 14, title: 'Pure Organic Essential Oils', category: 'botanicals', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-16.jpg' },
  { id: 15, title: 'Bamboo Massage Sticks & Oils', category: 'treatments', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-17.jpg' },
  { id: 16, title: 'Relaxation Meditation Suite', category: 'ambience', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-18.jpg' },
  { id: 17, title: 'Indo-Bali Cultural Ambience', category: 'ambience', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-19.jpg', wide: true }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = galleryItems.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const driftWallItems = filteredItems.map(item => ({
    image: item.img,
    title: item.title
  }));

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  return (
    <main style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      {/* GALLERY PAGE HERO HEADER */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)', textAlign: 'center', paddingTop: '160px', paddingBottom: '30px' }}>
        <div className="container">
          <span className="section-tagline">3D IMMERSIVE EXPERIENCE</span>
          <h1 className="section-title" style={{ fontSize: '3.8rem', marginBottom: '10px' }}>Sanctuary Gallery</h1>
          <p className="section-subtitle" style={{ maxWidth: '640px', margin: '0 auto', opacity: 0.85, fontSize: '1.1rem', lineHeight: '1.6' }}>
            Immerse yourself in our 3D drifting wall. Move your pointer to tilt the perspective, or hover over tiles to focus on our pristine spa sanctuary.
          </p>

          {/* Filter Bar */}
          <div style={{ marginTop: '30px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'treatments', label: 'Treatments & Rituals' },
              { id: 'ambience', label: 'Sanctuary Ambience' },
              { id: 'botanicals', label: 'Organic Botanicals' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '30px',
                  border: '1px solid var(--accent-gold)',
                  background: activeCategory === cat.id ? 'var(--accent-gold)' : 'transparent',
                  color: activeCategory === cat.id ? '#1e2420' : 'var(--text-primary)',
                  fontWeight: activeCategory === cat.id ? '600' : '400',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: activeCategory === cat.id ? '0 4px 15px rgba(217,191,119,0.3)' : 'none'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3D DRIFT WALL SHOWCASE - FULL SECTION DISPLAY */}
      <section style={{ padding: '10px 0 40px 0', width: '100%' }}>
        <div 
          style={{
            width: '100%',
            height: 'calc(100vh - 140px)',
            minHeight: '680px',
            maxHeight: '900px',
            position: 'relative',
            background: '#0a0e0b',
            overflow: 'hidden',
            borderTop: '1px solid rgba(217,191,119,0.15)',
            borderBottom: '1px solid rgba(217,191,119,0.15)',
            boxShadow: 'inset 0 0 100px rgba(0,0,0,0.8)'
          }}
        >
          <DriftWall
            items={driftWallItems}
            columns={6}
            tileWidth={240}
            tileHeight={158}
            gap={22}
            tilt={16}
            turn={-14}
            perspective={1200}
            depth={120}
            speed={42}
            direction="up"
            variance={0.45}
            parallax={0.65}
            lift={72}
            fade={0.5}
            dim={0.65}
            overlayColor="#0a0e0b"
          />
          <div 
            style={{
              position: 'absolute',
              bottom: '24px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(30,36,32,0.88)',
              backdropFilter: 'blur(12px)',
              border: '1px solid var(--accent-gold)',
              color: 'var(--accent-gold)',
              padding: '10px 26px',
              borderRadius: '30px',
              fontSize: '0.88rem',
              letterSpacing: '0.06em',
              pointerEvents: 'none',
              zIndex: 10,
              boxShadow: '0 12px 30px rgba(0,0,0,0.4)'
            }}
          >
            ✦ Move cursor to tilt perspective • Hover tile to expand ✦
          </div>
        </div>
      </section>

      {/* FULL GALLERY GRID SECTION */}
      <section style={{ padding: '40px 0 100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Full Collection</h2>
            <p className="section-subtitle">Click any image to view in high definition</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px' }}>
            {filteredItems.map((item, idx) => (
              <div 
                key={item.id}
                onClick={() => openLightbox(idx)}
                style={{
                  gridColumn: item.wide ? 'span 2' : 'span 1',
                  height: '280px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-soft)',
                  border: '1px solid var(--glass-border)'
                }}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(0deg, rgba(30,36,32,0.85) 0%, transparent 60%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '20px',
                  color: 'var(--accent-gold)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.4rem',
                  fontWeight: '500'
                }}>
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div className="modal-overlay active" onClick={closeLightbox} style={{ display: 'flex', zIndex: 10000, background: 'rgba(15,18,16,0.92)' }}>
          <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', maxWidth: '1000px', width: '90%', textAlign: 'center' }}>
            <button onClick={closeLightbox} style={{ position: 'absolute', top: '-40px', right: '0', color: '#fff', border: 'none', background: 'none', fontSize: '32px', cursor: 'pointer' }}>&times;</button>
            <img 
              src={filteredItems[lightboxIndex].img} 
              alt={filteredItems[lightboxIndex].title} 
              style={{ width: '100%', maxHeight: '75vh', objectFit: 'contain', borderRadius: '16px', border: '1px solid var(--accent-gold)' }} 
            />
            <h3 style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginTop: '15px' }}>
              {filteredItems[lightboxIndex].title}
            </h3>

            {/* Next / Prev Controls */}
            <button onClick={prevImage} style={{ position: 'absolute', left: '-50px', top: '45%', color: 'var(--accent-gold)', border: 'none', background: 'none', fontSize: '40px', cursor: 'pointer' }}>&#10094;</button>
            <button onClick={nextImage} style={{ position: 'absolute', right: '-50px', top: '45%', color: 'var(--accent-gold)', border: 'none', background: 'none', fontSize: '40px', cursor: 'pointer' }}>&#10095;</button>
          </div>
        </div>
      )}
    </main>
  );
}
