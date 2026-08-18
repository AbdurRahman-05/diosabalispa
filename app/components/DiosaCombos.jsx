'use client';

import { useEffect, useRef } from 'react';
import './DiosaCombos.css';

const comboData = [
  {
    title: "Chocolate Body Massage",
    details: "Bamboo Massage, Herbal Potli Hot Compress, Apricot & Lemongrass Scrub, Bamboo Charcoal Mask, Steam Bath, Fruits & Flower Bath, Bali Aromatherapy Facial, Crystal Spa Pedicure",
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 12h18" />
        <path d="M9 5v14" />
        <path d="M15 5v14" />
      </svg>
    )
  },
  {
    title: "Four Hand Massage",
    details: "Four Hand Massage, Herbal Potli Hot Compress, Indian Healing Clay With Banana Leaf Body Wrap, Steam Bath, Bali Herbal Bath, Signature Spa Facial, Crystal Spa Pedicure",
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 11V5a1.5 1.5 0 0 1 3 0v6" />
        <path d="M10 8.5V4a1.5 1.5 0 0 1 3 0v4.5" />
        <path d="M14 11V5a1.5 1.5 0 0 1 3 0v6" />
        <path d="M17 11.5a6.5 6.5 0 1 1-13 0" />
      </svg>
    )
  },
  {
    title: "Bali Aroma",
    details: "Bali Aroma Massage, Bali Herbal Scrub, Bali Ayurvedic Mask",
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    )
  },
  {
    title: "Bali Thai",
    details: "Bali Thai Massage, Apricot & Lemongrass Scrub, Bali Aromatherapy Facial",
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a10 10 0 0 1-8.4-4.5c4-2 6-4 6-7.5V7a5 5 0 0 1 10 0v3c0 3.5 2 5.5 6 7.5A10 10 0 0 1 12 22Z" />
        <path d="M12 12v10" />
      </svg>
    )
  },
  {
    title: "Red Wine",
    details: "Deep Tissue Massage, Sugar & Honey Scrub, Red Wine Facial, Crystal Spa Pedicure",
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a9 9 0 0 0-9 9c0 4.17 2.84 7.67 6.69 8.69L9 22h6l-.69-2.31C18.16 18.67 21 15.17 21 11a9 9 0 0 0-9-9Z" />
        <path d="M3 11h18" />
      </svg>
    )
  },
  {
    title: "Bali Mixed",
    details: "Trigger Point Massage, Bali Mixed Fruits Scrub, Purifying Clay Mask, Thai Whitening Facial, Peppermint Mint Chiller Spa Pedicure",
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18" />
        <path d="M12 3c-4 3-7 7-7 12a7 7 0 0 0 14 0c0-5-3-9-7-12Z" />
        <path d="M6 13c3 1 5 3 6 8" />
        <path d="M18 13c-3 1-5 3-6 8" />
      </svg>
    )
  },
  {
    title: "Traditional",
    details: "Traditional Balinese Massage, Sugar & Honey Scrub, Aroma Hot Tub",
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a9 9 0 0 0-9 9c0 3.5 2 6.5 5 8" />
        <path d="M12 3a9 9 0 0 1 9 9c0 3.5-2 6.5-5 8" />
        <path d="M12 8a4 4 0 0 0-4 4c0 2 1.5 3.5 4 6 2.5-2.5 4-4 4-6a4 4 0 0 0-4-4Z" />
      </svg>
    )
  },
  {
    title: "Shiatsu",
    details: "Shiatsu Massage, Thai Whitening Spa Facial, Peppermint Chiller Spa Pedicure",
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20c4-4 4-10 10-14" />
        <path d="M10 14c3-1 6-4 7-8" />
        <path d="M6 18c2-3 5-6 9-8" />
        <path d="M14 6c2.5 0 4.5 2 4.5 4.5S16.5 15 14 15" />
      </svg>
    )
  },
  {
    title: "Hot Stone",
    details: "Hot Stone Massage, Rice & Oats Scrub, Signature Spa Facial, Citrus Spa Pedicure",
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="18" rx="8" ry="4" />
        <ellipse cx="12" cy="12" rx="6" ry="3" />
        <ellipse cx="12" cy="7" rx="4" ry="2" />
      </svg>
    )
  }
];

export default function DiosaCombos() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    let posX = 0;
    let animId;
    const speed = 1.1;

    const handleMouseEnter = () => { isHoveredRef.current = true; };
    const handleMouseLeave = () => { isHoveredRef.current = false; };

    wrapper.addEventListener('mouseenter', handleMouseEnter);
    wrapper.addEventListener('mouseleave', handleMouseLeave);
    wrapper.addEventListener('touchstart', handleMouseEnter, { passive: true });
    wrapper.addEventListener('touchend', handleMouseLeave, { passive: true });

    const animate = () => {
      if (!isHoveredRef.current) {
        const halfWidth = track.scrollWidth / 2;
        if (halfWidth > 0) {
          posX -= speed;
          if (Math.abs(posX) >= halfWidth) {
            posX = 0;
          }
          track.style.transform = `translateX(${posX}px)`;
        }
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      wrapper.removeEventListener('mouseenter', handleMouseEnter);
      wrapper.removeEventListener('mouseleave', handleMouseLeave);
      wrapper.removeEventListener('touchstart', handleMouseEnter);
      wrapper.removeEventListener('touchend', handleMouseLeave);
    };
  }, []);

  // Double the cards array to create a seamless infinite loop
  const infiniteCards = [...comboData, ...comboData];

  return (
    <section 
      className="diosa-combo-section section-padding" 
      id="combo-packages"
      style={{
        background: 'transparent',
        color: '#f3eee3',
      }}
    >
      <div className="diosa-combo-container">
        <div className="diosa-combo-header text-center" style={{ marginBottom: '60px', position: 'relative' }}>
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '450px',
              height: '180px',
              background: 'radial-gradient(ellipse at center, rgba(217, 119, 6, 0.35) 0%, rgba(212, 175, 55, 0.18) 50%, transparent 75%)',
              filter: 'blur(45px)',
              zIndex: 0,
              pointerEvents: 'none',
              animation: 'headingGlowPulse 6s ease-in-out infinite alternate'
            }}
          />
          <span style={{ position: 'relative', zIndex: 1, fontSize: '0.78rem', letterSpacing: '0.25em', color: '#d97706', fontWeight: 700, textTransform: 'uppercase', display: 'inline-block', marginBottom: '10px' }}>
            CURATED SPA JOURNEYS
          </span>
          <h2 className="diosa-combo-main-title" style={{ position: 'relative', zIndex: 1, fontFamily: "'Cormorant Garamond', serif", fontSize: '3.4rem', color: '#d4af37', margin: 0, textShadow: '0 0 25px rgba(212, 175, 55, 0.4), 0 0 50px rgba(217, 119, 6, 0.25)' }}>
            Diosa Combo Packages
          </h2>
        </div>

        <div className="diosa-combo-track-wrapper" id="comboTrackWrapper" ref={wrapperRef}>
          <div className="diosa-combo-track" id="diosaComboTrack" ref={trackRef}>
            {infiniteCards.map((card, idx) => (
              <div key={idx} className="diosa-combo-card">
                <div className="diosa-card-icon">
                  {card.icon}
                </div>
                <h3 className="diosa-card-title">{card.title}</h3>
                <p className="diosa-card-details">{card.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
