'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const hubItems = [
  {
    num: "01",
    tag: "01 — SIGNATURE THERAPY",
    title: "Therapeutic Massage",
    desc: "Diosa Bali Spa offers restorative massages that promote relaxation and balance in a tranquil setting and enhance your sense of calm.",
    image: "/assets/massage_treatment.png",
    subhead: "OUR SIGNATURE",
    headline: "Therapy",
    highlights: ["Balinese Deep Pressure", "Herbal Hot Compress", "100% Organic Oils", "Underground Stillness"]
  },
  {
    num: "02",
    tag: "02 — SIGNATURE THERAPY",
    title: "Wellness & Facial",
    desc: "Diosa Bali Spa offers luxurious facials and wellness treatments with personalized care for optimal skin and well-being.",
    image: "/assets/facial_treatment.png",
    subhead: "BOTANICAL",
    headline: "Facials",
    highlights: ["Bali Aromatherapy", "Pure Frangipani Oils", "Crystal Quartz Facial", "Deep Skin Renewal"]
  },
  {
    num: "03",
    tag: "03 — SIGNATURE THERAPY",
    title: "Spa Pedicure",
    desc: "Diosa Bali Spa offers therapeutic pedicures in a serene setting, using high-quality ingredients to refresh your feet.",
    image: "/assets/pedicure_treatment.jpg",
    subhead: "RESTORATIVE",
    headline: "Pedicures",
    highlights: ["Peppermint Chiller", "Volcanic Basalt Stone", "Sea Salt Exfoliation", "Hydrating Foot Mask"]
  },
  {
    num: "04",
    tag: "04 — SIGNATURE THERAPY",
    title: "Body Wraps & Masks",
    desc: "Diosa Bali Spa provides luxurious organic wraps, scrubs, and masks to nourish your skin and enhance the sensory experience.",
    image: "/assets/body_wrap_treatment.jpg",
    subhead: "ORGANIC RITUAL",
    headline: "Body Care",
    highlights: ["Healing Clay Mask", "Apricot & Lemongrass Scrub", "Banana Leaf Body Wrap", "Steam Bath Finish"]
  }
];

export default function HubSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);
  const horizontalTrackRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current || !horizontalTrackRef.current) return;

      const rect = trackRef.current.getBoundingClientRect();
      const totalScroll = trackRef.current.offsetHeight - window.innerHeight;

      if (totalScroll <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScroll));
      
      setScrollProgress(progress);

      const calculatedIdx = Math.min(
        hubItems.length - 1,
        Math.floor(progress * hubItems.length)
      );
      setActiveIndex(calculatedIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (idx) => {
    setActiveIndex(idx);
    if (!trackRef.current) return;

    const totalScroll = trackRef.current.offsetHeight - window.innerHeight;
    if (totalScroll > 0) {
      const targetScrollTop = trackRef.current.offsetTop + (idx / (hubItems.length - 1)) * totalScroll;
      window.scrollTo({ top: targetScrollTop, behavior: 'smooth' });
    }
  };

  // Compute horizontal translate offset (px)
  let translateXPx = 0;
  if (horizontalTrackRef.current && typeof window !== 'undefined') {
    const trackWidth = horizontalTrackRef.current.scrollWidth;
    const windowWidth = window.innerWidth;
    const maxTranslate = Math.max(0, trackWidth - windowWidth + 120);
    translateXPx = scrollProgress * maxTranslate;
  }

  return (
    <section className="hub-horizontal-section" id="hub-wellness" ref={trackRef}>
      <div className="hub-horizontal-sticky">
        {/* HEADER BAR */}
        <div className="hub-header-bar">
          <div className="hub-header-left" style={{ position: 'relative' }}>
            <div 
              style={{
                position: 'absolute',
                top: '50%',
                left: '40%',
                transform: 'translate(-50%, -50%)',
                width: '130%',
                height: '180%',
                background: 'radial-gradient(ellipse at center, rgba(217, 119, 6, 0.35) 0%, rgba(212, 175, 55, 0.18) 50%, transparent 75%)',
                filter: 'blur(45px)',
                zIndex: 0,
                pointerEvents: 'none',
                animation: 'headingGlowPulse 6s ease-in-out infinite alternate'
              }}
            />
            <span className="hub-header-tag" style={{ position: 'relative', zIndex: 1 }}>SIGNATURE EXPERIENCES</span>
            <h2 className="hub-header-title" style={{ position: 'relative', zIndex: 1, textShadow: '0 0 25px rgba(212, 175, 55, 0.4), 0 0 50px rgba(217, 119, 6, 0.25)' }}>Hub of Wellness</h2>
          </div>

          {/* TAB NAV BUTTONS */}
          <div className="hub-header-tabs">
            {hubItems.map((item, idx) => (
              <button
                key={idx}
                type="button"
                className={`hub-header-tab ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => handleTabClick(idx)}
              >
                <span className="tab-num">{item.num}</span>
                <span className="tab-text">{item.headline}</span>
              </button>
            ))}
          </div>
        </div>

        {/* HORIZONTAL CARDS TRACK (SCROLLS OUT OF DISPLAY LEFT TO RIGHT ON SCROLL) */}
        <div className="hub-horizontal-track-container">
          <div
            className="hub-horizontal-track"
            ref={horizontalTrackRef}
            style={{
              transform: `translateX(-${translateXPx}px)`,
              willChange: 'transform'
            }}
          >
            {hubItems.map((item, idx) => (
              <div key={idx} className={`hub-horizontal-card ${idx === activeIndex ? 'active-card' : ''}`}>
                <div className="hub-card-split">
                  {/* LEFT TEXT PANEL */}
                  <div className="hub-card-left">
                    <div className="hub-card-top-content">
                      <span className="hub-card-tag">{item.tag}</span>
                      <h3 className="hub-card-title">{item.title}</h3>
                      <p className="hub-card-desc">{item.desc}</p>

                      {/* HIGHLIGHT BADGES */}
                      <div className="hub-card-highlights">
                        {item.highlights.map((h, hIdx) => (
                          <span key={hIdx} className="hub-badge">
                            <span className="badge-dot">✦</span> {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="hub-card-footer">
                      <Link href="/therapy" className="hub-card-btn">
                        <span>LEARN MORE</span>
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </Link>
                      <div className="hub-card-counter">
                        <span className="curr">{item.num}</span>
                        <span className="total">/ 04</span>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT IMAGE PANEL */}
                  <div className="hub-card-right">
                    <div className="hub-card-img-wrap">
                      <img src={item.image} alt={item.title} className="hub-card-img" />
                      <div className="hub-card-img-overlay">
                        <span className="img-subhead">{item.subhead}</span>
                        <span className="img-headline">{item.headline}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM PROGRESS BAR */}
        <div className="hub-bottom-progress-bar">
          <div 
            className="hub-bottom-progress-fill" 
            style={{ width: `${Math.max(5, scrollProgress * 100)}%` }} 
          />
        </div>
      </div>
    </section>
  );
}
