'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import './WelcomeGateway.css';

export default function WelcomeGateway() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [hoveredOption, setHoveredOption] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if user already chose an experience during this session
    const hasChosen = typeof window !== 'undefined' ? sessionStorage.getItem('diosa_experience_chosen') : null;
    const searchParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
    const forceOpen = searchParams?.get('welcome') === 'true' || searchParams?.get('switch') === 'true';

    // If opening site for the first time or explicitly requested
    if (!hasChosen || forceOpen) {
      setIsOpen(true);
    }

    // Global event listener to reopen gateway anytime
    const handleOpenEvent = () => {
      setIsExiting(false);
      setIsOpen(true);
    };

    window.addEventListener('diosa:open-gateway', handleOpenEvent);
    return () => {
      window.removeEventListener('diosa:open-gateway', handleOpenEvent);
    };
  }, []);

  const handleSelectExperience = (type, targetPath) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('diosa_experience_chosen', type);
    }
    
    setIsExiting(true);

    setTimeout(() => {
      setIsOpen(false);
      setIsExiting(false);
      if (pathname !== targetPath) {
        router.push(targetPath);
      }
    }, 360);
  };

  const handleDismiss = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsExiting(false);
    }, 320);
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`diosa-gateway-backdrop ${isExiting ? 'diosa-gateway-exit' : 'diosa-gateway-enter'}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="gateway-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleDismiss();
      }}
    >
      {/* Dynamic Ambient Background Glows */}
      <div 
        className="gateway-ambient-glow glow-bali" 
        style={{ opacity: hoveredOption === 'bali' ? 0.8 : 0.4 }} 
      />
      <div 
        className="gateway-ambient-glow glow-reflex" 
        style={{ opacity: hoveredOption === 'reflexology' ? 0.8 : 0.4 }} 
      />

      <div className="diosa-gateway-container">
        
        {/* Subtle Close Button */}
        <button 
          type="button" 
          className="gateway-close-btn" 
          onClick={handleDismiss}
          title="Continue to website"
          aria-label="Close gateway"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Compact, Ultra-Luxury Header */}
        <div className="gateway-header">
          <img 
            src="/assets/diosa-logo.png" 
            alt="Diosa Bali Spa Logo" 
            className="gateway-brand-logo" 
          />
          <h3 id="gateway-title" className="gateway-title">
            Welcome to DIOSA
          </h3>
          <p className="gateway-question">
            Where would you like to begin?
          </p>
        </div>

        {/* Symmetrical Dual Experience Cards */}
        <div className="gateway-cards-grid">
          
          {/* OPTION 1: DIOSA Bali Spa */}
          <div 
            className={`gateway-card card-bali ${hoveredOption === 'bali' ? 'is-hovered' : ''}`}
            onMouseEnter={() => setHoveredOption('bali')}
            onMouseLeave={() => setHoveredOption(null)}
            onClick={() => handleSelectExperience('bali_spa', '/')}
          >
            {/* Atmospheric Balinese Spa Photography Layer */}
            <div 
              className="card-bg-layer card-bg-bali" 
              style={{ backgroundImage: `url('/assets/flower_bath_ai.png')` }} 
            />
            <div className="card-gradient-overlay overlay-bali" />

            <div className="card-inner-content">
              {/* Card Top Pill Badge */}
              <div className="card-top-bar">
                <span className="card-badge badge-bali">
                  AUTHENTIC SANCTUARY
                </span>
              </div>

              {/* Glowing Frangipani Lotus Crest */}
              <div className="card-icon-wrapper bali-icon">
                <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
                  <path 
                    d="M24 4C24 4 28 14 34 18C40 22 44 24 44 24C44 24 40 26 34 30C28 34 24 44 24 44C24 44 20 34 14 30C8 26 4 24 4 24C4 24 8 22 14 18C20 14 24 4 24 4Z" 
                    fill="url(#goldFloralGrad)" 
                    stroke="#d4af37" 
                    strokeWidth="1.6" 
                  />
                  <circle cx="24" cy="24" r="4.5" fill="#fdfaf3" />
                  <defs>
                    <radialGradient id="goldFloralGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#fff7e6" stopOpacity="0.95" />
                      <stop offset="50%" stopColor="#d4af37" stopOpacity="0.75" />
                      <stop offset="100%" stopColor="#8a6e27" stopOpacity="0.4" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>

              {/* Symmetrical Text Block */}
              <div className="card-text-block">
                <h4 className="card-title title-bali">
                  DIOSA Bali Spa
                </h4>
                <p className="card-desc">
                  Relax, rejuvenate, and indulge in our luxurious Balinese spa experience.
                </p>
              </div>

              {/* Symmetrical Feature Tags */}
              <div className="card-features-row">
                <span className="feature-pill pill-bali">✦ Deep Tissue Rituals</span>
                <span className="feature-pill pill-bali">✦ Organic Botanicals</span>
                <span className="feature-pill pill-bali">✦ Flower Baths</span>
              </div>

              {/* Shimmering Gold Button */}
              <button 
                type="button" 
                className="gateway-action-btn btn-bali"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectExperience('bali_spa', '/');
                }}
                aria-label="Enter Bali Spa"
              >
                <span>Enter Bali Spa</span>
                <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* OPTION 2: Foot Reflexology */}
          <div 
            className={`gateway-card card-reflex ${hoveredOption === 'reflexology' ? 'is-hovered' : ''}`}
            onMouseEnter={() => setHoveredOption('reflexology')}
            onMouseLeave={() => setHoveredOption(null)}
            onClick={() => handleSelectExperience('foot_reflexology', '/foot-reflexology')}
          >
            {/* Atmospheric Foot Reflexology Photography Layer */}
            <div 
              className="card-bg-layer card-bg-reflex" 
              style={{ backgroundImage: `url('/assets/pedicure_treatment.jpg')` }} 
            />
            <div className="card-gradient-overlay overlay-reflex" />

            <div className="card-inner-content">
              {/* Card Top Pill Badge */}
              <div className="card-top-bar">
                <span className="card-badge badge-reflex">
                  ACUPRESSURE &amp; WELLNESS
                </span>
              </div>

              {/* Glowing Meridian Foot Crest */}
              <div className="card-icon-wrapper reflex-icon">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 16v-2.38C4 11.5 5.5 8 9 8c2.5 0 3.5 1.5 4.5 3 .8 1.2 1.8 2 3.5 2 2 0 3-1.5 3-3V7" />
                  <path d="M4 17a3 3 0 0 0 6 0v-1" />
                  <circle cx="16" cy="5" r="1.5" fill="#f59e0b" />
                  <circle cx="19" cy="7" r="1.5" fill="#f59e0b" />
                  <circle cx="13" cy="4" r="1.5" fill="#f59e0b" />
                  <circle cx="10" cy="4" r="1.2" fill="#f59e0b" />
                  <circle cx="7.5" cy="5" r="1" fill="#f59e0b" />
                </svg>
              </div>

              {/* Symmetrical Text Block */}
              <div className="card-text-block">
                <h4 className="card-title title-reflex">
                  Foot Reflexology
                </h4>
                <p className="card-desc">
                  Refresh your body and mind with our relaxing foot reflexology treatments.
                </p>
              </div>

              {/* Symmetrical Feature Tags */}
              <div className="card-features-row">
                <span className="feature-pill pill-reflex">✦ 7,000+ Acupoints</span>
                <span className="feature-pill pill-reflex">✦ Heated Volcanic Stones</span>
                <span className="feature-pill pill-reflex">✦ Express Studio</span>
              </div>

              {/* Shimmering Amber-Gold Button */}
              <button 
                type="button" 
                className="gateway-action-btn btn-reflex"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectExperience('foot_reflexology', '/foot-reflexology');
                }}
                aria-label="Enter Foot Reflexology"
              >
                <span>Enter Foot Reflexology</span>
                <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

        </div>

        {/* Footer Note */}
        <div className="gateway-footer">
          <p className="gateway-prompt-text">
            *Select an option to continue.*
          </p>
        </div>

      </div>
    </div>
  );
}
