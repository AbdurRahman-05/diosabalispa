'use client';

import { useState, useEffect } from 'react';
import DriftWall from '../components/DriftWall';

const galleryItems = [
  { id: 1, title: 'Natural Rock Architecture & Stone Wall', category: 'architecture', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-1.jpg', tall: true },
  { id: 2, title: 'Botanical Oils & Handcrafted Timber', category: 'botanicals', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-2.jpg' },
  { id: 3, title: 'Subterranean Flower Soak Hydro Tub', category: 'ambience', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-3.jpg', wide: true },
  { id: 4, title: 'Botanical Skincare Facial Treatment', category: 'treatments', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-4.jpg' },
  { id: 5, title: 'Volcanic Basalt Heated Stones', category: 'botanicals', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-6.jpg' },
  { id: 6, title: 'Balinese Pressure Bodywork Suite', category: 'treatments', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-8.jpg', tall: true },
  { id: 7, title: 'Double Cave Sanctuary Suite', category: 'ambience', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-9.jpg', wide: true },
  { id: 8, title: 'Sanctuary Lounge & Warm Lamp Tea Ritual', category: 'ambience', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-10-e1752860173718.jpg', fullWidth: true },
  { id: 9, title: 'Pedicure & Foot Care Warm Stone Nook', category: 'treatments', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-11.jpg' },
  { id: 10, title: 'Organic Herbal Scrubs & Raw Spices', category: 'botanicals', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-12.jpg' },
  { id: 11, title: 'Thai Whitening Spa Facial Technique', category: 'treatments', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-13.jpg' },
  { id: 12, title: 'Private Hydro Flower Soak Tub', category: 'ambience', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-14.jpg', wide: true },
  { id: 13, title: 'Four Hands Synchronized Body Ritual', category: 'treatments', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-15.jpg' },
  { id: 14, title: 'Cold-Pressed Essential Oil Elixirs', category: 'botanicals', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-16.jpg' },
  { id: 15, title: 'Bamboo Sticks & Organic Oils', category: 'treatments', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-17.jpg' },
  { id: 16, title: 'Relaxation & Sound Meditation Corridor', category: 'ambience', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-18.jpg', tall: true },
  { id: 17, title: 'Indo-Bali Cultural Stone & Wood Ambience', category: 'architecture', img: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-19.jpg', fullWidth: true }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
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
    <main className="gallery-main" style={{ minHeight: '100vh', background: isLight ? '#f8f3eb' : '#0a0b0a', color: isLight ? '#3a281c' : '#f3eee3' }}>
      
      {/* GALLERY PAGE HERO HEADER */}
      <section className="gallery-hero-section" style={{ background: isLight ? 'linear-gradient(180deg, #f8f3eb 0%, #f2e9dc 100%)' : 'linear-gradient(180deg, #121312 0%, #0a0b0a 100%)', textAlign: 'center', paddingTop: '160px', paddingBottom: '40px', borderBottom: isLight ? '1px solid rgba(184,134,11,0.2)' : '1px solid rgba(212,175,55,0.15)' }}>
        <div className="container" style={{ position: 'relative' }}>
          {/* AMBIENT GLOW BACKDROP */}
          <div 
            style={{
              position: 'absolute',
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '500px',
              height: '180px',
              background: isLight 
                ? 'radial-gradient(ellipse at center, rgba(212, 160, 23, 0.35) 0%, rgba(184, 134, 11, 0.18) 50%, transparent 75%)' 
                : 'radial-gradient(ellipse at center, rgba(217, 119, 6, 0.35) 0%, rgba(212, 175, 55, 0.18) 50%, transparent 75%)',
              filter: 'blur(50px)',
              zIndex: 0,
              pointerEvents: 'none',
              animation: 'headingGlowPulse 6s ease-in-out infinite alternate'
            }}
          />

          <span style={{ position: 'relative', zIndex: 1, fontSize: '0.8rem', letterSpacing: '0.25em', color: '#d97706', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
            EDITORIAL VISUAL JOURNEY
          </span>

          <h1 className="section-title" style={{ position: 'relative', zIndex: 1, fontFamily: "'Cormorant Garamond', serif", fontSize: '3.8rem', color: isLight ? '#5c3a21' : '#d4af37', marginBottom: '12px', textShadow: isLight ? '0 0 25px rgba(184, 134, 11, 0.35)' : '0 0 25px rgba(212, 175, 55, 0.4), 0 0 50px rgba(217, 119, 6, 0.25)' }}>
            Sanctuary Gallery
          </h1>

          <p style={{ position: 'relative', zIndex: 1, maxWidth: '640px', margin: '0 auto', color: isLight ? '#523e30' : '#a8a090', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Explore the authentic stone architecture, dark timber details, soft amber lighting, and tranquil corridors of Diosa Bali Spa.
          </p>

          {/* Filter Bar */}
          <div style={{ marginTop: '35px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'All Sanctuary Views' },
              { id: 'architecture', label: 'Stone & Architecture' },
              { id: 'treatments', label: 'Rituals & Treatments' },
              { id: 'ambience', label: 'Warm Light & Ambience' },
              { id: 'botanicals', label: 'Organic Botanicals' }
            ].map(cat => (
              <button
                key={cat.id}
                className={`gallery-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '30px',
                  border: activeCategory === cat.id ? '1px solid #b8860b' : (isLight ? '1px solid rgba(184,134,11,0.3)' : '1px solid rgba(212,175,55,0.3)'),
                  background: activeCategory === cat.id ? '#b8860b' : (isLight ? '#f2e9dc' : 'rgba(18, 19, 18, 0.6)'),
                  color: activeCategory === cat.id ? '#ffffff' : (isLight ? '#4a3525' : '#f3eee3'),
                  fontWeight: activeCategory === cat.id ? '700' : '400',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  letterSpacing: '0.05em',
                  transition: 'all 0.3s ease',
                  boxShadow: activeCategory === cat.id ? '0 4px 18px rgba(184,115,51,0.35)' : 'none'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3D DRIFT WALL SHOWCASE */}
      <section style={{ padding: '10px 0 40px 0', width: '100%' }}>
        <div 
          className="driftwall-container"
          style={{
            width: '100%',
            height: 'calc(80vh - 100px)',
            minHeight: '580px',
            maxHeight: '800px',
            position: 'relative',
            background: isLight ? '#f8f3eb' : '#050605',
            overflow: 'hidden',
            borderTop: isLight ? '1px solid rgba(184,134,11,0.2)' : '1px solid rgba(212,175,55,0.15)',
            borderBottom: isLight ? '1px solid rgba(184,134,11,0.2)' : '1px solid rgba(212,175,55,0.15)',
            boxShadow: isLight ? 'inset 0 0 80px rgba(184, 115, 51, 0.15)' : 'inset 0 0 100px rgba(0,0,0,0.9)'
          }}
        >
          <DriftWall
            items={driftWallItems}
            columns={6}
            tileWidth={250}
            tileHeight={165}
            gap={24}
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
            dim={isLight ? 0.85 : 0.65}
            overlayColor={isLight ? '#f8f3eb' : '#050605'}
          />
          <div 
            className="driftwall-instruction-pill"
            style={{
              position: 'absolute',
              bottom: '24px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: isLight ? 'rgba(242, 233, 220, 0.94)' : 'rgba(18,19,18,0.9)',
              backdropFilter: 'blur(12px)',
              border: isLight ? '1.5px solid #b8860b' : '1px solid #d4af37',
              color: isLight ? '#5c3a21' : '#d4af37',
              padding: '10px 26px',
              borderRadius: '30px',
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              pointerEvents: 'none',
              zIndex: 10,
              boxShadow: isLight ? '0 12px 30px rgba(184, 115, 51, 0.25)' : '0 12px 30px rgba(0,0,0,0.6)'
            }}
          >
            ✦ Move cursor to tilt perspective • Hover tile to expand ✦
          </div>
        </div>
      </section>

      {/* EDITORIAL MASONRY GALLERY GRID */}
      <section className="gallery-masonry-section" style={{ padding: '60px 0 120px 0', background: isLight ? '#f8f3eb' : '#0a0b0a' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ fontSize: '0.78rem', letterSpacing: '0.25em', color: '#d97706', fontWeight: 700, textTransform: 'uppercase' }}>
              COMPLETE COLLECTION
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.8rem', color: isLight ? '#5c3a21' : '#d4af37', marginTop: '6px' }}>
              Architectural &amp; Sensory Journey
            </h2>
            <p style={{ color: isLight ? '#523e30' : '#a8a090', fontSize: '0.98rem' }}>Click any photograph for an immersive high-definition view</p>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
              gridAutoRows: '280px',
              gap: '24px' 
            }}
          >
            {filteredItems.map((item, idx) => {
              return (
                <div 
                  key={item.id}
                  className="gallery-masonry-item"
                  onClick={() => openLightbox(idx)}
                  style={{
                    gridColumn: item.fullWidth ? '1 / -1' : item.wide ? 'span 2' : 'span 1',
                    gridRow: item.tall ? 'span 2' : 'span 1',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    position: 'relative',
                    cursor: 'pointer',
                    boxShadow: isLight ? '0 15px 40px rgba(184, 115, 51, 0.15)' : '0 15px 40px rgba(0,0,0,0.6)',
                    border: isLight ? '1.5px solid rgba(184, 134, 11, 0.35)' : '1px solid rgba(212, 175, 55, 0.25)',
                    transition: 'transform 0.4s ease, border-color 0.4s ease'
                  }}
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      filter: 'contrast(1.05) brightness(0.95)',
                      transition: 'transform 0.6s ease' 
                    }} 
                  />
                  <div 
                    className="gallery-masonry-overlay"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: isLight 
                        ? 'linear-gradient(0deg, rgba(248, 243, 235, 0.95) 0%, transparent 60%)' 
                        : 'linear-gradient(0deg, rgba(10,11,10,0.9) 0%, transparent 60%)',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '24px',
                      color: isLight ? '#5c3a21' : '#d4af37',
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.4rem',
                      fontWeight: '500',
                      letterSpacing: '0.02em'
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '0.72rem', color: '#d97706', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '4px', fontFamily: 'Montserrat, sans-serif' }}>
                        {item.category}
                      </span>
                      {item.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div className="modal-overlay active" onClick={closeLightbox} style={{ display: 'flex', zIndex: 10000, background: isLight ? 'rgba(248,243,235,0.95)' : 'rgba(5,6,5,0.94)' }}>
          <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', maxWidth: '1060px', width: '90%', textAlign: 'center' }}>
            <button onClick={closeLightbox} style={{ position: 'absolute', top: '-45px', right: '0', color: isLight ? '#5c3a21' : '#d4af37', border: 'none', background: 'none', fontSize: '36px', cursor: 'pointer' }}>&times;</button>
            <img 
              src={filteredItems[lightboxIndex].img} 
              alt={filteredItems[lightboxIndex].title} 
              style={{ width: '100%', maxHeight: '78vh', objectFit: 'contain', borderRadius: '20px', border: isLight ? '1.5px solid #b8860b' : '1.5px solid #d4af37', boxShadow: '0 30px 80px rgba(0,0,0,0.4)' }} 
            />
            <h3 style={{ color: isLight ? '#5c3a21' : '#d4af37', fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', marginTop: '20px' }}>
              {filteredItems[lightboxIndex].title}
            </h3>

            {/* Next / Prev Controls */}
            <button onClick={prevImage} style={{ position: 'absolute', left: '-60px', top: '45%', color: isLight ? '#5c3a21' : '#d4af37', border: 'none', background: 'none', fontSize: '44px', cursor: 'pointer' }}>&#10094;</button>
            <button onClick={nextImage} style={{ position: 'absolute', right: '-60px', top: '45%', color: isLight ? '#5c3a21' : '#d4af37', border: 'none', background: 'none', fontSize: '44px', cursor: 'pointer' }}>&#10095;</button>
          </div>
        </div>
      )}
    </main>
  );
}
