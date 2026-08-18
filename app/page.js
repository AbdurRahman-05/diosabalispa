'use client';

import './home.css';

import { useState } from 'react';
import Link from 'next/link';
import HubSection from './components/HubSection';
import DiosaCombos from './components/DiosaCombos';
import MeditationModal from './components/MeditationModal';
import FlowingMenu from './components/FlowingMenu';
import IntroSanctuary from './components/IntroSanctuary';
import SensoryJourney from './components/SensoryJourney';
import AromaSection from './components/AromaSection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingCTA from './components/BookingCTA';

import HeroSection from './components/HeroSection';

const whyYouNeedItems = [
  { 
    link: '/therapy', 
    text: 'Authentic Balinese Touch', 
    image: '/assets/balinese_touch_ai.png' 
  },
  { 
    link: '/therapy', 
    text: '100% Organic Botanicals', 
    image: '/assets/organic_botanicals_ai.png' 
  },
  { 
    link: '/about', 
    text: 'Private Serene Sanctuary', 
    image: '/assets/serene_sanctuary_ai.png' 
  },
  { 
    link: '/therapy', 
    text: 'Bespoke Flower Bath Rituals', 
    image: '/assets/flower_bath_ai.png' 
  },
  { 
    link: '/booking', 
    text: 'Certified Master Therapists', 
    image: '/assets/master_therapists_ai.png' 
  }
];

export default function HomePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <main style={{ position: 'relative', zIndex: 2, background: '#0a0b0a', color: '#f3eee3' }}>
      
      {/* REDESIGNED HERO SECTION */}
      <HeroSection />

      {/* INTRO SECTION — "ENTER THE SANCTUARY" */}
      <IntroSanctuary />

      {/* HUB OF WELLNESS / SIGNATURE EXPERIENCES SECTION */}
      <HubSection />

      {/* DIOSA COMBO PACKAGES SECTION */}
      <DiosaCombos />

      {/* "A JOURNEY THROUGH THE SENSES" */}
      <SensoryJourney />

      {/* WHY YOU NEED DIOSA BALI SPA - FLOWING MENU SHOWCASE */}
      <section className="dbs-why-you-section" style={{ background: '#0a0b0a', padding: '100px 0' }}>
        <div className="container" style={{ marginBottom: '40px' }}>
          <div className="section-header text-center" style={{ position: 'relative' }}>
            <div 
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '500px',
                height: '180px',
                background: 'radial-gradient(ellipse at center, rgba(217, 119, 6, 0.35) 0%, rgba(212, 175, 55, 0.18) 50%, transparent 75%)',
                filter: 'blur(45px)',
                zIndex: 0,
                pointerEvents: 'none',
                animation: 'headingGlowPulse 6s ease-in-out infinite alternate'
              }}
            />
            <span className="section-tagline" style={{ position: 'relative', zIndex: 1, color: '#d97706' }}>HOLISTIC WELLNESS</span>
            <h2 className="section-title" style={{ position: 'relative', zIndex: 1, fontSize: 'clamp(2rem, 3.8vw, 3.4rem)', whiteSpace: 'nowrap', color: '#d4af37', textShadow: '0 0 25px rgba(212, 175, 55, 0.4), 0 0 50px rgba(217, 119, 6, 0.25)' }}>
              Why You Need Diosa Bali Spa
            </h2>
          </div>
        </div>

        <div 
          style={{ 
            height: '520px', 
            position: 'relative', 
            width: '100%', 
            borderTop: '1px solid rgba(212, 175, 55, 0.3)', 
            borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
            boxShadow: '0 15px 40px rgba(0,0,0,0.6)' 
          }}
        >
          <FlowingMenu
            items={whyYouNeedItems}
            speed={14}
            textColor="#f3eee3"
            bgColor="#0a0b0a"
            marqueeBgColor="#181918"
            marqueeTextColor="#d4af37"
            borderColor="rgba(212, 175, 55, 0.35)"
          />
        </div>
      </section>

      {/* AROMA & FRAGRANCE EXPERIENCE */}
      <AromaSection />

      {/* GUEST TESTIMONIALS */}
      <TestimonialsSection />

      {/* BOOKING CTA */}
      <BookingCTA />

      {/* MEDITATION VIDEO MODAL */}
      <MeditationModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </main>
  );
}
