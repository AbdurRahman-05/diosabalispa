'use client';

import { useState } from 'react';
import Link from 'next/link';
import HubSection from './components/HubSection';
import DiosaCombos from './components/DiosaCombos';
import MeditationModal from './components/MeditationModal';
import FlowingMenu from './components/FlowingMenu';

const whyYouNeedItems = [
  { 
    link: '/therapy', 
    text: 'Authentic Balinese Touch', 
    image: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-8.jpg' 
  },
  { 
    link: '/therapy', 
    text: '100% Organic Botanicals', 
    image: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-2.jpg' 
  },
  { 
    link: '/about', 
    text: 'Private Serene Sanctuary', 
    image: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-1.jpg' 
  },
  { 
    link: '/therapy', 
    text: 'Bespoke Flower Bath Rituals', 
    image: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-14.jpg' 
  },
  { 
    link: '/booking', 
    text: 'Certified Master Therapists', 
    image: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-15.jpg' 
  }
];

export default function HomePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <main>
      {/* HERO SECTION - EXACT ORIGINAL DIOSA BALI SPA MATCH */}
      <section className="hero-section" id="hero">
        <div className="hero-bg-wrapper">
          <img src="/assets/massage_treatment.png" alt="Aura & Zen Spa Sanctuary Background" className="hero-bg-img" />
          <div className="hero-overlay"></div>
        </div>

        {/* Scrolling Spa Name Marquee */}
        <div className="hero-marquee-wrapper">
          <div className="hero-marquee-track">
            <span className="hero-marquee-text">Diosa Bali Spa</span>
            <span className="hero-marquee-dot"></span>
            <span className="hero-marquee-text">Diosa Bali Spa</span>
            <span className="hero-marquee-dot"></span>
            <span className="hero-marquee-text">Diosa Bali Spa</span>
            <span className="hero-marquee-dot"></span>
            <span className="hero-marquee-text">Diosa Bali Spa</span>
            <span className="hero-marquee-dot"></span>
            <span className="hero-marquee-text">Diosa Bali Spa</span>
            <span className="hero-marquee-dot"></span>
            <span className="hero-marquee-text">Diosa Bali Spa</span>
            <span className="hero-marquee-dot"></span>
            <span className="hero-marquee-text">Diosa Bali Spa</span>
            <span className="hero-marquee-dot"></span>
            <span className="hero-marquee-text">Diosa Bali Spa</span>
            <span className="hero-marquee-dot"></span>
          </div>
        </div>

        {/* Floating Sticker Image - Right Corner */}
        <div className="hero-sticker">
          <img 
            src="/assets/ChatGPT Image Jul 23, 2026, 12_23_40 PM.png" 
            alt="Relaxing Woman at Diosa Bali Spa" 
            className="hero-sticker-img" 
          />
        </div>
      </section>

      {/* HUB OF WELLNESS SECTION (SECOND SCROLL SECTION) */}
      <HubSection />

      {/* DIOSA COMBO PACKAGES (THIRD SCROLL SECTION - HORIZONTAL MARQUEE) */}
      <DiosaCombos />

      {/* WHY YOU NEED DIOSA BALI SPA - FLOWING MENU SHOWCASE */}
      <section className="dbs-why-you-section" style={{ background: 'var(--bg-secondary)', padding: '80px 0 100px 0' }}>
        <div className="container" style={{ marginBottom: '40px' }}>
          <div className="section-header text-center">
            <span className="section-tagline">HOLISTIC WELLNESS</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3.2vw, 3rem)', whiteSpace: 'nowrap' }}>Why You Need Diosa Bali Spa</h2>
          </div>
        </div>

        <div 
          style={{ 
            height: '520px', 
            position: 'relative', 
            width: '100%', 
            borderTop: '1px solid rgba(217, 191, 119, 0.3)', 
            borderBottom: '1px solid rgba(217, 191, 119, 0.3)',
            boxShadow: '0 15px 40px rgba(0,0,0,0.04)' 
          }}
        >
          <FlowingMenu
            items={whyYouNeedItems}
            speed={14}
            textColor="#1e2420"
            bgColor="var(--bg-secondary)"
            marqueeBgColor="#1e2420"
            marqueeTextColor="#d9bf77"
            borderColor="rgba(217, 191, 119, 0.35)"
          />
        </div>
      </section>

      {/* MEDITATION VIDEO MODAL */}
      <MeditationModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </main>
  );
}
