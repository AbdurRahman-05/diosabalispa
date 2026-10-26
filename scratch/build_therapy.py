# -*- coding: utf-8 -*-
import json
import os
import sys

# Import treatments list from generate_therapy_page
from generate_therapy_page import treatments

template = """'use client';

import './therapy.css';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const BASE = 'https://diosabalispa.in/wp-content/uploads/2025/07/';

// Elegant Luxury SVG Icons
const ClockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: '-1px', marginRight: '5px' }}>
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const PressureIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: '-1px', marginRight: '5px' }}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const RupeeIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: '-1px', marginRight: '3px' }}>
    <path d="M6 3h12M6 8h12M6 13l8.5 8M6 13h3a4.5 4.5 0 0 0 0-9"/>
  </svg>
);

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'inline-block', verticalAlign: '-1px', marginRight: '4px' }}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const LotusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: '-2px', marginRight: '6px' }}>
    <path d="M12 3c-2.5 3-4 6-4 9 0 3.5 2.5 6 6 6s6-2.5 6-6c0-3-1.5-6-4-9z"/>
    <path d="M12 21c-5 0-9-3-9-7 0-3 3-6.5 6-8.5"/>
    <path d="M12 21c5 0 9-3 9-7 0-3-3-6.5-6-8.5"/>
  </svg>
);

const LightningIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: '-2px', marginRight: '6px' }}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const LeafIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: '-2px', marginRight: '6px' }}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 2 9 0 4.9-4 9-9 9z"/>
    <path d="M11 20v-7"/>
  </svg>
);

const SparkleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: '-2px', marginRight: '6px' }}>
    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: '-2px', marginRight: '6px' }}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const treatments = %TREATMENTS_JSON%;

const horizonSignatureItems = [
  treatments[0],  // Traditional Balinese
  treatments[3],  // Four Hands
  treatments[8],  // Hot Stone
  treatments[38], // Sugar & Honey Body Scrub
  treatments[51], // Fruits & Flowers Bath Tub
  treatments[53], // Red Wine Facial
  treatments[56]  // Crystal Spa Pedicure
];

export default function TherapyPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('all');
  const [selectedTreatment, setSelectedTreatment] = useState(null);
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
  const horizonTrackRef = useRef(null);

  const getCategoryCount = (catId) => {
    if (catId === 'all') return treatments.length;
    return treatments.filter(t => t.category === catId).length;
  };

  const filteredTreatments = treatments.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.price.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGoal = selectedGoal === 'all' || item.goal === selectedGoal;
    return matchesCategory && matchesSearch && matchesGoal;
  });

  const scrollHorizon = (direction) => {
    if (horizonTrackRef.current) {
      const scrollAmount = direction === 'left' ? -480 : 480;
      horizonTrackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <main style={{ background: isLight ? '#f8f3eb' : '#0a0b0a', color: isLight ? '#3a281c' : '#f3eee3', minHeight: '100vh' }}>
      {/* CINEMATIC DEEP DARK / LIGHT GOLDEN HERO */}
      <section className="cinematic-emerald-hero">
        {/* Floating Gold Dust Particles */}
        <div className="gold-dust-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="gold-particle"
              style={{
                left: `${(i * 5) % 100}%`,
                animationDelay: `${(i * 0.7) % 8}s`,
                animationDuration: `${7 + (i % 6)}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          {/* AMBIENT GLOW BACKDROP */}
          <div 
            style={{
              position: 'absolute',
              top: '35%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '550px',
              height: '190px',
              background: isLight 
                ? 'radial-gradient(ellipse at center, rgba(212, 160, 23, 0.35) 0%, rgba(184, 134, 11, 0.18) 50%, transparent 75%)' 
                : 'radial-gradient(ellipse at center, rgba(217, 119, 6, 0.35) 0%, rgba(212, 175, 55, 0.18) 50%, transparent 75%)',
              filter: 'blur(50px)',
              zIndex: 0,
              pointerEvents: 'none',
              animation: 'headingGlowPulse 6s ease-in-out infinite alternate'
            }}
          />

          <span style={{ position: 'relative', zIndex: 1, background: isLight ? 'rgba(184,115,51,0.15)' : 'rgba(217,119,6,0.15)', color: '#d97706', padding: '6px 20px', borderRadius: '25px', border: isLight ? '1px solid rgba(184,134,11,0.4)' : '1px solid rgba(217,119,6,0.4)', fontSize: '0.8rem', letterSpacing: '0.2em', fontWeight: 700, textTransform: 'uppercase', display: 'inline-block', marginBottom: '14px' }}>
            DIOSA BALI SPA SANCTUARY · 2026 OFFICIAL TARIFF
          </span>

          <h1 style={{ position: 'relative', zIndex: 1, fontSize: '3.8rem', marginBottom: '14px', fontFamily: "'Cormorant Garamond', serif", color: isLight ? '#5c3a21' : '#d4af37', letterSpacing: '0.02em', textShadow: isLight ? '0 0 25px rgba(184, 134, 11, 0.35)' : '0 0 25px rgba(212, 175, 55, 0.4)' }}>
            Therapies &amp; Healing Rituals
          </h1>

          <p style={{ position: 'relative', zIndex: 1, maxWidth: '750px', margin: '0 auto', color: isLight ? '#523e30' : '#a8a090', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Step into our cave sanctuary — an authentic collection of {treatments.length} ancient Indo-Balinese bodywork rituals, organic body scrubs, detoxifying wraps, spa facials, and sensory hydrotherapy baths.
          </p>

          {/* "FIND YOUR IDEAL RITUAL" GOAL SELECTOR BOX */}
          <div 
            style={{ 
              marginTop: '40px', 
              background: isLight ? 'linear-gradient(135deg, #fffcf8 0%, #f5ebd9 100%)' : 'rgba(20,36,29,0.7)', 
              border: isLight ? '1.5px solid #d4af37' : '1px solid rgba(212,175,55,0.3)', 
              borderRadius: '24px', 
              padding: '24px 30px', 
              maxWidth: '920px', 
              marginLeft: 'auto', 
              marginRight: 'auto', 
              backdropFilter: 'blur(16px)', 
              boxShadow: isLight ? '0 16px 45px rgba(184, 115, 51, 0.22), inset 0 0 25px rgba(212, 175, 55, 0.1)' : '0 15px 40px rgba(0,0,0,0.6)', 
              transition: 'all 0.35s ease' 
            }}
          >
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', color: isLight ? '#5c3a21' : '#d4af37', marginBottom: '16px', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SparkleIcon /> WHAT IS YOUR HEALING GOAL TODAY?
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {[
                { id: 'all', label: `All ${treatments.length} Rituals`, icon: <LotusIcon /> },
                { id: 'pain', label: 'Deep Muscle & Pain Relief', icon: <LightningIcon /> },
                { id: 'stress', label: 'Stress & Anxiety Release', icon: <LeafIcon /> },
                { id: 'skin', label: 'Radiant Skin Glow & Polishing', icon: <SparkleIcon /> },
                { id: 'sleep', label: 'Deep Sleep & Mind Calm', icon: <MoonIcon /> }
              ].map(g => (
                <button
                  key={g.id}
                  onClick={() => setSelectedGoal(g.id)}
                  style={{
                    padding: '11px 22px',
                    borderRadius: '25px',
                    border: '1.5px solid',
                    borderColor: selectedGoal === g.id ? '#b8860b' : (isLight ? 'rgba(184,134,11,0.35)' : 'rgba(212,175,55,0.25)'),
                    background: selectedGoal === g.id 
                      ? (isLight ? 'linear-gradient(135deg, #b8860b 0%, #d4af37 100%)' : '#b8860b') 
                      : (isLight ? '#ffffff' : 'rgba(10,17,14,0.6)'),
                    color: selectedGoal === g.id ? '#ffffff' : (isLight ? '#4a3525' : '#f8f6f0'),
                    fontWeight: selectedGoal === g.id ? '700' : '600',
                    cursor: 'pointer',
                    fontSize: '0.88rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    transition: 'all 0.3s ease',
                    boxShadow: selectedGoal === g.id 
                      ? '0 8px 25px rgba(184,115,51,0.4)' 
                      : (isLight ? '0 4px 12px rgba(184,115,51,0.08)' : 'none')
                  }}
                >
                  {g.icon}
                  {g.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CINEMATIC FULL-WIDTH HORIZON SCROLL SHOWCASE */}
      <section className="cinematic-horizon-section" style={{ background: isLight ? '#f8f3eb' : '#0e1914' }}>
        <div className="horizon-header">
          <div>
            <span style={{ color: '#d97706', fontSize: '0.8rem', letterSpacing: '0.18em', fontWeight: 700, textTransform: 'uppercase' }}>
              CURATED SHOWCASE
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', color: isLight ? '#5c3a21' : '#f8f6f0', margin: '4px 0 0 0' }}>
              Signature Experiences
            </h2>
          </div>
          
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={() => scrollHorizon('left')} style={{ width: '46px', height: '46px', borderRadius: '50%', border: isLight ? '1.5px solid #b8860b' : '1px solid #d4af37', background: isLight ? '#f2e9dc' : 'rgba(212,175,55,0.1)', color: isLight ? '#5c3a21' : '#d4af37', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&larr;</button>
            <button onClick={() => scrollHorizon('right')} style={{ width: '46px', height: '46px', borderRadius: '50%', border: isLight ? '1.5px solid #b8860b' : '1px solid #d4af37', background: isLight ? '#f2e9dc' : 'rgba(212,175,55,0.1)', color: isLight ? '#5c3a21' : '#d4af37', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&rarr;</button>
          </div>
        </div>

        <div className="horizon-track-wrapper" ref={horizonTrackRef}>
          <div className="horizon-track">
            {horizonSignatureItems.map((item, idx) => (
              <div key={item.id} className="horizon-card" onClick={() => setSelectedTreatment(item)}>
                <img src={item.img} alt={item.title} className="horizon-img" />
                <div className="horizon-overlay">
                  <span className="horizon-badge">SIGNATURE 0{idx + 1}</span>
                  <div>
                    <h3 className="horizon-title">{item.title}</h3>
                    <p className="horizon-desc">{item.desc}</p>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.78rem', background: isLight ? 'rgba(184,134,11,0.2)' : 'rgba(212,175,55,0.2)', color: isLight ? '#5c3a21' : '#d4af37', padding: '5px 14px', borderRadius: '12px', border: isLight ? '1px solid rgba(184,134,11,0.4)' : '1px solid rgba(212,175,55,0.4)', fontWeight: 600, display: 'inline-flex', alignItems: 'center' }}>
                        <ClockIcon /> {item.duration}
                      </span>
                      <span style={{ fontSize: '0.78rem', background: isLight ? 'rgba(184,134,11,0.2)' : 'rgba(212,175,55,0.2)', color: isLight ? '#5c3a21' : '#d4af37', padding: '5px 14px', borderRadius: '12px', border: isLight ? '1px solid rgba(184,134,11,0.4)' : '1px solid rgba(212,175,55,0.4)', fontWeight: 600, display: 'inline-flex', alignItems: 'center' }}>
                        <RupeeIcon /> {item.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER & TREATMENTS GRID SECTION */}
      <section style={{ padding: '40px 0 100px 0', background: isLight ? '#f8f3eb' : '#070c0a' }}>
        <div className="container">
          {/* SEARCH & GLASSMORPHISM CATEGORY PILLS */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
            <input 
              type="text"
              placeholder={`Search ${treatments.length} treatments (e.g. Balinese, Sugar Scrub, Red Wine Facial, Steam Bath)...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                maxWidth: '620px',
                padding: '14px 26px',
                borderRadius: '30px',
                border: isLight ? '1.5px solid rgba(184,134,11,0.4)' : '1.5px solid rgba(212,175,55,0.4)',
                background: isLight ? '#f2e9dc' : '#0e1914',
                outline: 'none',
                fontSize: '1rem',
                color: isLight ? '#3a281c' : '#f8f6f0',
                boxShadow: isLight ? '0 10px 30px rgba(184,115,51,0.12)' : '0 10px 30px rgba(0,0,0,0.5)'
              }}
            />

            <div className="emerald-filter-nav">
              {[
                { id: 'all', label: 'All Rituals' },
                { id: 'massage', label: 'Massages & Bodywork' },
                { id: 'scrub', label: 'Body Scrubs' },
                { id: 'wrap', label: 'Body Masks & Wraps' },
                { id: 'facial', label: 'Facial Rituals' },
                { id: 'pedicure', label: 'Hands & Feet' },
                { id: 'bath', label: 'Hydrotherapy & Baths' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`emerald-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                >
                  {cat.label}
                  <span className="emerald-count-tag">{getCategoryCount(cat.id)}</span>
                </button>
              ))}
            </div>
          </div>

          {/* TREATMENT CARDS GRID */}
          <div className="dat-grid">
            {filteredTreatments.map((t, idx) => {
              const isRecommended = selectedGoal !== 'all' && t.goal === selectedGoal;
              return (
                <div key={t.id} className={`dat-card emerald-card ${isRecommended ? 'highlight-recommended' : ''}`} style={{ '--card-index': idx + 1 }}>
                  <div className="dat-img-wrap">
                    <img src={t.img} alt={t.title} className="dat-img" />
                    <div className="dat-img-overlay"></div>
                    <span style={{ position: 'absolute', top: '14px', left: '14px', background: isLight ? 'rgba(242,233,220,0.94)' : 'rgba(7,12,10,0.9)', color: isLight ? '#5c3a21' : '#d4af37', border: isLight ? '1px solid rgba(184,134,11,0.4)' : '1px solid rgba(212,175,55,0.4)', padding: '5px 14px', borderRadius: '15px', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.5px', zIndex: 2 }}>
                      RITUAL {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="dat-body">
                    <div>
                      <div className="dat-card-tags">
                        <span className="dat-tag-pill" style={{ background: isLight ? 'rgba(184,134,11,0.15)' : 'rgba(212,175,55,0.15)', color: isLight ? '#b87333' : '#d4af37', display: 'inline-flex', alignItems: 'center' }}>
                          <ClockIcon /> {t.duration}
                        </span>
                        <span className="dat-tag-pill" style={{ background: isLight ? 'rgba(184,134,11,0.15)' : 'rgba(212,175,55,0.15)', color: isLight ? '#b87333' : '#d4af37', display: 'inline-flex', alignItems: 'center' }}>
                          <PressureIcon /> {t.pressure}
                        </span>
                        <span className="dat-tag-pill dat-price-pill">
                          <RupeeIcon /> {t.price}
                        </span>
                        {isRecommended && (
                          <span className="dat-tag-pill" style={{ background: '#b8860b', color: '#ffffff', fontWeight: 700, display: 'inline-flex', alignItems: 'center' }}>
                            <StarIcon /> IDEAL MATCH
                          </span>
                        )}
                      </div>
                      <h3 className="dat-title">{t.title}</h3>
                      <p className="dat-desc">{t.desc}</p>
                    </div>
                    <div className="dat-action">
                      <button
                        onClick={() => setSelectedTreatment(t)}
                        style={{ padding: '8px 18px', border: isLight ? '1.5px solid #b8860b' : '1.5px solid #d4af37', background: 'transparent', color: isLight ? '#5c3a21' : '#d4af37', fontWeight: '600', borderRadius: '20px', cursor: 'pointer', fontSize: '0.8rem' }}
                      >
                        Quick View Details
                      </button>
                      <Link
                        href={`/booking?therapy=${encodeURIComponent(t.title)}`}
                        style={{ padding: '8px 22px', background: isLight ? '#b8860b' : '#d4af37', color: isLight ? '#ffffff' : '#070c0a', borderRadius: '20px', textDecoration: 'none', fontWeight: '700', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center' }}
                      >
                        Reserve
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUICK VIEW DETAIL MODAL */}
      {selectedTreatment && (
        <div className="modal-overlay active" onClick={() => setSelectedTreatment(null)} style={{ display: 'flex', zIndex: 10000, background: isLight ? 'rgba(248,243,235,0.95)' : 'rgba(0,0,0,0.85)' }}>
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{ background: isLight ? '#f8f3eb' : '#0e1914', color: isLight ? '#3a281c' : '#f8f6f0', padding: '35px', borderRadius: '24px', maxWidth: '640px', width: '90%', position: 'relative', border: isLight ? '1.5px solid #b8860b' : '1.5px solid #d4af37', boxShadow: isLight ? '0 25px 60px rgba(184,115,51,0.25)' : '0 25px 60px rgba(0,0,0,0.8)' }}
          >
            <button onClick={() => setSelectedTreatment(null)} style={{ position: 'absolute', top: '15px', right: '20px', border: 'none', background: 'none', fontSize: '26px', cursor: 'pointer', color: isLight ? '#5c3a21' : '#d4af37' }}>&times;</button>
            <h2 style={{ color: isLight ? '#5c3a21' : '#d4af37', fontFamily: "'Cormorant Garamond', serif", fontSize: '2.4rem', marginBottom: '15px' }}>{selectedTreatment.title}</h2>
            
            <div style={{ height: '260px', width: '100%', borderRadius: '16px', overflow: 'hidden', marginBottom: '20px', border: isLight ? '1px solid rgba(184,134,11,0.3)' : '1px solid rgba(212,175,55,0.3)' }}>
              <img src={selectedTreatment.img} alt={selectedTreatment.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '18px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', background: isLight ? 'rgba(184,134,11,0.15)' : 'rgba(212,175,55,0.15)', color: isLight ? '#b87333' : '#d4af37', padding: '6px 14px', borderRadius: '15px', fontWeight: 600, border: isLight ? '1px solid rgba(184,134,11,0.3)' : '1px solid rgba(212,175,55,0.3)', display: 'inline-flex', alignItems: 'center' }}>
                <ClockIcon /> Duration: {selectedTreatment.duration}
              </span>
              <span style={{ fontSize: '0.8rem', background: isLight ? 'rgba(184,134,11,0.15)' : 'rgba(212,175,55,0.15)', color: isLight ? '#b87333' : '#d4af37', padding: '6px 14px', borderRadius: '15px', fontWeight: 600, border: isLight ? '1px solid rgba(184,134,11,0.3)' : '1px solid rgba(212,175,55,0.3)', display: 'inline-flex', alignItems: 'center' }}>
                <PressureIcon /> Pressure: {selectedTreatment.pressure}
              </span>
              <span className="dat-price-pill" style={{ fontSize: '0.85rem', padding: '6px 16px', borderRadius: '15px', display: 'inline-flex', alignItems: 'center' }}>
                <RupeeIcon /> Tariff: {selectedTreatment.price}
              </span>
            </div>

            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: isLight ? '#523e30' : 'rgba(248,246,240,0.88)', marginBottom: '25px' }}>{selectedTreatment.desc}</p>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
              <span style={{ fontWeight: '600', color: isLight ? '#5c3a21' : '#d4af37', fontSize: '0.88rem' }}>Includes Custom Aromatherapy Oil Consultation</span>
              <Link href={`/booking?therapy=${encodeURIComponent(selectedTreatment.title)}`} style={{ padding: '12px 28px', background: isLight ? '#b8860b' : '#d4af37', color: isLight ? '#ffffff' : '#070c0a', borderRadius: '30px', fontWeight: '700', textDecoration: 'none' }}>
                Book This Treatment
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
"""

final_code = template.replace("%TREATMENTS_JSON%", json.dumps(treatments, indent=2, ensure_ascii=False))

with open("app/therapy/page.js", "w", encoding="utf-8") as f:
    f.write(final_code)

print("Successfully wrote updated app/therapy/page.js!")
