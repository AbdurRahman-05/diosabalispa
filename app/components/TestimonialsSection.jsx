'use client';

import { useState } from 'react';
import './TestimonialsSection.css';

const testimonials = [
  {
    quote: "An incredibly peaceful experience. From the stone surroundings to the warm lighting, everything made me completely disconnect from my hectic week. Hands down the finest spa sanctuary.",
    author: "Elena Rostova",
    location: "Senior Designer & Wellness Traveler"
  },
  {
    quote: "Stepping inside feels like entering a hidden subterranean temple. The scent of warm wood, soft amber lamps, and authentic Balinese pressure work created a state of deep relaxation I haven't felt in years.",
    author: "Dr. Marcus Vance",
    location: "Holistic Physician"
  },
  {
    quote: "The Four Hands ritual in their double cave suite was pure artistry. Natural stone architecture, soft water sounds, and absolute privacy. A masterclass in luxury spa experience.",
    author: "Sophia Chen",
    location: "Frequent Sanctuary Guest"
  }
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[index];

  return (
    <section 
      id="testimonials-section"
      style={{
        background: '#0a0b0a',
        padding: '120px 0',
        position: 'relative',
        textAlign: 'center'
      }}
    >
      <div className="container" style={{ maxWidth: '860px', position: 'relative' }}>
        <div 
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '450px',
            height: '160px',
            background: 'radial-gradient(ellipse at center, rgba(217, 119, 6, 0.35) 0%, rgba(212, 175, 55, 0.18) 50%, transparent 75%)',
            filter: 'blur(45px)',
            zIndex: 0,
            pointerEvents: 'none',
            animation: 'headingGlowPulse 6s ease-in-out infinite alternate'
          }}
        />
        <span 
          style={{
            position: 'relative',
            zIndex: 1,
            fontSize: '0.78rem',
            letterSpacing: '0.25em',
            color: '#d97706',
            fontWeight: 700,
            textTransform: 'uppercase',
            display: 'inline-block',
            marginBottom: '16px'
          }}
        >
          GUEST REFLECTIONS
        </span>

        {/* 5 Warm Amber Stars */}
        <div style={{ position: 'relative', zIndex: 1, color: '#d97706', fontSize: '1.4rem', letterSpacing: '6px', marginBottom: '30px', textShadow: '0 0 20px rgba(217, 119, 6, 0.6)' }}>
          ★★★★★
        </div>

        {/* Large Editorial Quote */}
        <div style={{ minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p 
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)',
              color: '#f3eee3',
              lineHeight: 1.45,
              fontWeight: 400,
              fontStyle: 'italic',
              marginBottom: '28px',
              transition: 'opacity 0.4s ease'
            }}
          >
            “{current.quote}”
          </p>

          <div>
            <h4 
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.4rem',
                color: '#d4af37',
                margin: 0,
                letterSpacing: '0.04em'
              }}
            >
              {current.author}
            </h4>
            <span style={{ fontSize: '0.82rem', color: '#a8a090', letterSpacing: '0.1em' }}>
              {current.location}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '40px' }}>
          <button 
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '1px solid #d4af37',
              background: 'transparent',
              color: '#d4af37',
              fontSize: '1.2rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
          >
            ←
          </button>
          <button 
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '1px solid #d4af37',
              background: 'transparent',
              color: '#d4af37',
              fontSize: '1.2rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
