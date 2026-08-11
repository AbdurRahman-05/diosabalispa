'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const hubItems = [
  {
    tag: "01 — SIGNATURE THERAPY",
    title: "Therapeutic Massage",
    desc: "Diosa Bali Spa offers restorative massages that promote relaxation and balance in a tranquil setting and enhance your sense of calm.",
    image: "/assets/massage_treatment.png",
    subhead: "OUR SIGNATURE",
    headline: "Therapy"
  },
  {
    tag: "02 — SIGNATURE THERAPY",
    title: "Wellness & Facial",
    desc: "Diosa Bali Spa offers luxurious facials and wellness treatments with personalized care for optimal skin and well-being.",
    image: "/assets/facial_treatment.png",
    subhead: "BOTANICAL",
    headline: "Facials"
  },
  {
    tag: "03 — SIGNATURE THERAPY",
    title: "Spa Pedicure",
    desc: "Diosa Bali Spa offers therapeutic pedicures in a serene setting, using high-quality ingredients to refresh your feet.",
    image: "/assets/pedicure_treatment.jpg",
    subhead: "RESTORATIVE",
    headline: "Pedicures"
  },
  {
    tag: "04 — SIGNATURE THERAPY",
    title: "Body Wraps, Scrub & Masks Options",
    desc: "Diosa Bali Spa provides luxurious organic wraps, scrubs, and masks to nourish your skin and enhance the sensory experience.",
    image: "/assets/body_wrap_treatment.jpg",
    subhead: "ORGANIC RITUAL",
    headline: "Body Care"
  }
];

export default function HubSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const hubTrackRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!hubTrackRef.current) return;
      const rect = hubTrackRef.current.getBoundingClientRect();
      const trackHeight = hubTrackRef.current.offsetHeight - window.innerHeight;
      
      if (trackHeight <= 0) return;

      const scrolled = -rect.top;
      let progress = scrolled / trackHeight;
      progress = Math.max(0, Math.min(1, progress));

      const targetIndex = Math.min(3, Math.floor(progress * 4));
      setActiveIndex(targetIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (idx) => {
    setActiveIndex(idx);
    if (!hubTrackRef.current) return;

    const trackHeight = hubTrackRef.current.offsetHeight - window.innerHeight;
    if (trackHeight > 0) {
      const targetScrollTop = hubTrackRef.current.offsetTop + (idx / 4) * trackHeight + 50;
      window.scrollTo({ top: targetScrollTop, behavior: 'smooth' });
    }
  };

  const activeItem = hubItems[activeIndex];

  return (
    <section className="hub-pinned-section" id="hub-wellness">
      <div className="hub-pinned-track" id="hubTrack" ref={hubTrackRef}>
        <div className="hub-pinned-sticky">
          <div className="container hub-split-container">
            {/* LEFT PANEL: TABS & CONTENT */}
            <div className="hub-left-panel">
              {/* Nav Links / Tabs */}
              <div className="hub-nav-menu">
                {hubItems.map((item, idx) => (
                  <button 
                    key={idx} 
                    className={`hub-nav-item ${idx === activeIndex ? 'active' : ''}`}
                    onClick={() => handleTabClick(idx)}
                    type="button"
                  >
                    <span className="hub-nav-indicator"></span>
                    <span className="hub-nav-text">{item.title.toUpperCase()}</span>
                  </button>
                ))}
              </div>

              {/* Content Display */}
              <div className="hub-content-box">
                <span className="hub-tag" id="hubTag">{activeItem.tag}</span>
                <h2 className="hub-title" id="hubTitle">{activeItem.title}</h2>
                <p className="hub-desc" id="hubDesc">{activeItem.desc}</p>
                <Link href="/therapy" className="hub-learn-btn" id="hubBtn">
                  <span>LEARN MORE</span>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </Link>
              </div>

              {/* Counter */}
              <div className="hub-counter-box">
                <span className="hub-counter-curr" id="hubCurr">0{activeIndex + 1}</span>
                <span className="hub-counter-total">/ 04</span>
              </div>
            </div>

            {/* RIGHT PANEL: STACKED SLIDING IMAGES */}
            <div className="hub-right-panel">
              <div className="hub-image-header">
                <span className="hub-subhead">{activeItem.subhead}</span>
                <h3 className="hub-headline">{activeItem.headline}</h3>
              </div>

              <div className="hub-image-stack" id="hubImgStack">
                {hubItems.map((item, idx) => {
                  let statusClass = '';
                  if (idx === activeIndex) {
                    statusClass = 'active';
                  } else if (idx < activeIndex) {
                    statusClass = 'previous';
                  }
                  return (
                    <div 
                      key={idx} 
                      className={`hub-img-slide ${statusClass}`}
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="hub-img" 
                      />
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
