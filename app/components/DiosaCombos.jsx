'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import './DiosaCombos.css';

const comboData = [
  {
    title: "Bali Aroma Sanctuary",
    duration: "2 Hours 30 Mins",
    offerPrice: "₹5,800",
    actualPrice: "₹7,400",
    details: "Bali Aroma Massage + Sugar & Honey Scrub + Cucumber Body Mask",
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    )
  },
  {
    title: "Bali Thai Radiance",
    duration: "2 Hours 30 Mins",
    offerPrice: "₹6,300",
    actualPrice: "₹7,900",
    details: "Bali Thai Massage + Rice & Oats Scrub + Bali Aroma Facial",
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a10 10 0 0 1-8.4-4.5c4-2 6-4 6-7.5V7a5 5 0 0 1 10 0v3c0 3.5 2 5.5 6 7.5A10 10 0 0 1 12 22Z" />
        <path d="M12 12v10" />
      </svg>
    )
  },
  {
    title: "Balinese Jacuzzi Reset",
    duration: "2 Hours 30 Mins",
    offerPrice: "₹7,000",
    actualPrice: "₹8,600",
    details: "Traditional Balinese Massage + Coffee & Salt Scrub + Jacuzzi Hydro-Jet Therapy",
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a9 9 0 0 0-9 9c0 3.5 2 6.5 5 8" />
        <path d="M12 3a9 9 0 0 1 9 9c0 3.5-2 6.5-5 8" />
        <path d="M12 8a4 4 0 0 0-4 4c0 2 1.5 3.5 4 6 2.5-2.5 4-4 4-6a4 4 0 0 0-4-4Z" />
      </svg>
    )
  },
  {
    title: "Royal Deep Tissue & Flower Tub",
    duration: "3 Hours",
    offerPrice: "₹8,400",
    actualPrice: "₹9,800",
    details: "Deep Tissue Massage + Brown Sugar & Coconut Butter + Steam + Fruit & Flower Bath Tub",
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
    title: "Trigger Point Thai Glow",
    duration: "3 Hours",
    offerPrice: "₹7,400",
    actualPrice: "₹8,600",
    details: "Trigger Point Massage + Thai Whitening Facial + Crystal Spa Pedicure",
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a9 9 0 0 0-9 9c0 4.17 2.84 7.67 6.69 8.69L9 22h6l-.69-2.31C18.16 18.67 21 15.17 21 11a9 9 0 0 0-9-9Z" />
        <path d="M3 11h18" />
      </svg>
    )
  },
  {
    title: "Swedish Citrus Indulgence",
    duration: "3 Hours 45 Mins",
    offerPrice: "₹9,300",
    actualPrice: "₹11,800",
    details: "Swedish Massage + Raspberry Body Scrub + Bali Aroma Facial + Citrus Spa Pedicure",
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    )
  },
  {
    title: "Empress Head-to-Toe Indulgence",
    duration: "4 Hours 30 Mins",
    offerPrice: "₹13,000",
    actualPrice: "₹15,300",
    details: "Coconut Oil Massage + Blueberry Body Scrub + Lavender Clay Body Mask + Redwine Facial + Crystal Spa Pedicure",
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
    title: "Four Hand Synchronized Jacuzzi",
    duration: "3 Hours 30 Mins",
    offerPrice: "₹11,500",
    actualPrice: "₹13,900",
    details: "Four Hand Massage + Coffee & Salt Scrub + Thai Whitening Facial + Jacuzzi Hydro-Jet Therapy",
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
    title: "Couples Romantic Tub Ritual",
    duration: "2 Hours 15 Mins",
    offerPrice: "₹11,900",
    actualPrice: "₹13,900",
    details: "Couple Massage + Raspberry Body Scrub + Jacuzzi Hydro-Jet Therapy in Private Suite",
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    )
  },
  {
    title: "Couples Red Wine Radiance",
    duration: "2 Hours 45 Mins",
    offerPrice: "₹15,600",
    actualPrice: "₹17,600",
    details: "Couple Massage + Blueberry Body Scrub + Red Wine Anti-Aging Facial for Two",
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a9 9 0 0 0-9 9c0 4.17 2.84 7.67 6.69 8.69L9 22h6l-.69-2.31C18.16 18.67 21 15.17 21 11a9 9 0 0 0-9-9Z" />
        <path d="M3 11h18" />
      </svg>
    )
  },
  {
    title: "Couples Grand Spa Journey",
    duration: "5 Hours 30 Mins",
    offerPrice: "₹25,500",
    actualPrice: "₹31,900",
    details: "Couple Massage + Coffee & Salt Scrub + Almond Milk Mask + Thai Whitening Facial + Crystal Spa Pedicure + Steam + Jacuzzi",
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
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
              <div key={idx} className="diosa-combo-card" style={{ minHeight: '350px', justifyContent: 'space-between', padding: '24px 22px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                  <div className="diosa-card-icon" style={{ margin: 0 }}>
                    {card.icon}
                  </div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, background: 'rgba(184, 134, 11, 0.15)', color: '#b8860b', padding: '4px 10px', borderRadius: '12px', border: '1px solid rgba(184, 134, 11, 0.3)' }}>
                    {card.duration}
                  </span>
                </div>
                <div>
                  <h3 className="diosa-card-title" style={{ fontSize: '1.4rem', margin: '10px 0 6px 0' }}>{card.title}</h3>
                  <p className="diosa-card-details" style={{ fontSize: '0.82rem', lineHeight: 1.5, margin: 0 }}>{card.details}</p>
                </div>
                <div style={{ paddingTop: '14px', borderTop: '1px solid rgba(217, 191, 119, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <div>
                    <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#b8860b', marginRight: '6px' }}>
                      {card.offerPrice}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#888', textDecoration: 'line-through' }}>
                      {card.actualPrice}
                    </span>
                  </div>
                  <Link 
                    href={`/booking?therapy=${encodeURIComponent(card.title)}`} 
                    style={{ fontSize: '0.75rem', fontWeight: 700, background: '#b8860b', color: '#fff', padding: '6px 14px', borderRadius: '16px', textDecoration: 'none', display: 'inline-block' }}
                  >
                    Reserve
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
