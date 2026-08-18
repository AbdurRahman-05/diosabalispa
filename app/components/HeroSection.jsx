'use client';

import { useState, useEffect } from 'react';
import './HeroSection.css';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const singleLineContent = "DIOSA BALI SPA ✦ LUXURY WELLNESS SANCTUARY ✦ HOLISTIC HEALING ✦ BOTANICAL MASSAGE RITUALS ✦ ESCAPE INTO STILLNESS ✦ AUTHENTIC BALINESE TOUCH ✦ 100% ORGANIC BOTANICALS ✦ PRIVATE SERENE SANCTUARY ✦ BESPOKE FLOWER BATHS ✦ RESTORATIVE MASSAGE ✦ MIND & BODY REJUVENATION ✦ HEALING HANDS ✦ DISCOVER TRANQUILITY ✦ ";

  // Image comes up smoothly from under (starts at +100px offset) and settles cleanly at 0px so the top is NEVER cut off
  const imageTranslateY = Math.max(0, 100 - scrollY * 0.35);

  return (
    <section 
      className="hero-section" 
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: '#0a0b0a',
        padding: '0'
      }}
    >
      {/* AMBIENT GLOWING BACKGROUND BEHIND THE HEADING */}
      <div 
        className="hero-heading-glow"
        style={{
          position: 'absolute',
          top: '50%',
          left: '35%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '480px',
          background: 'radial-gradient(ellipse at center, rgba(217, 119, 6, 0.38) 0%, rgba(212, 175, 55, 0.22) 45%, transparent 75%)',
          filter: 'blur(95px)',
          zIndex: 0,
          pointerEvents: 'none',
          animation: 'headingGlowPulse 6s ease-in-out infinite alternate'
        }}
      />

      {/* AUTOMATICALLY RUNNING SINGLE LINE BACKGROUND CONTENT BEHIND THE IMAGE */}
      <div className="hero-single-bg-marquee">
        <div className="hero-single-marquee-track">
          <span className="hero-single-marquee-text">{singleLineContent}</span>
          <span className="hero-single-marquee-text">{singleLineContent}</span>
        </div>
      </div>

      {/* RIGHT SIDE FEATURED IMAGE (SCROLLS UP FROM UNDER WITHOUT CUTTING TOP EDGE) */}
      <div className="hero-right-container" style={{ zIndex: 20 }}>
        <div 
          className="hero-right-image-wrapper"
          style={{
            transform: `translateY(${imageTranslateY}px)`,
            willChange: 'transform',
            transition: 'transform 0.1s linear'
          }}
        >
          <img 
            src="/assets/ChatGPT Image Jul 23, 2026, 12_23_40 PM.png" 
            alt="Diosa Bali Spa Featured Sanctuary" 
            className="hero-right-image"
          />

          {/* SMOOTH BOTTOM GRADIENT BLUR OVERLAY TO ELIMINATE BOTTOM SHARP CUT EDGE */}
          <div className="hero-image-bottom-blur" />
        </div>
      </div>
    </section>
  );
}
