'use client';

import Link from 'next/link';

export default function BookingCTA() {
  return (
    <section 
      id="booking-cta"
      style={{
        position: 'relative',
        padding: '140px 0',
        overflow: 'hidden',
        textAlign: 'center'
      }}
    >
      {/* Background Image with Dark Atmospheric Overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1
        }}
      >
        <img 
          src="https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-9.jpg" 
          alt="Diosa Spa Underground Sanctuary Suite" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.35) contrast(1.15)',
            transition: 'all 0.5s ease'
          }}
        />
        <div 
          className="cta-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(217, 119, 6, 0.18) 0%, rgba(10,11,10,0.92) 80%)',
            transition: 'all 0.5s ease'
          }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
        <span 
          style={{
            fontSize: '0.8rem',
            letterSpacing: '0.25em',
            color: '#d97706',
            fontWeight: 700,
            textTransform: 'uppercase',
            display: 'inline-block',
            marginBottom: '16px'
          }}
        >
          AN INVITATION INTO STILLNESS
        </span>

        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '480px',
              height: '180px',
              background: 'radial-gradient(ellipse at center, rgba(217, 119, 6, 0.35) 0%, rgba(212, 175, 55, 0.18) 50%, transparent 75%)',
              filter: 'blur(45px)',
              zIndex: 0,
              pointerEvents: 'none',
              animation: 'headingGlowPulse 6s ease-in-out infinite alternate'
            }}
          />
          <h2 
            style={{
              position: 'relative',
              zIndex: 1,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
              color: '#d4af37',
              lineHeight: 1.1,
              marginBottom: '20px',
              fontWeight: 400,
              textShadow: '0 0 25px rgba(212, 175, 55, 0.4), 0 0 50px rgba(217, 119, 6, 0.25)'
            }}
          >
            Your Time To Unwind
          </h2>
        </div>

        <p 
          style={{
            fontSize: '1.2rem',
            color: '#f3eee3',
            lineHeight: 1.7,
            marginBottom: '40px',
            fontWeight: 300,
            maxWidth: '640px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          Leave the noise behind. Give yourself a moment to breathe, reset and reconnect inside our cave sanctuary.
        </p>

        <Link 
          href="/booking"
          style={{
            display: 'inline-block',
            padding: '18px 48px',
            background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
            color: '#0a0b0a',
            borderRadius: '40px',
            fontSize: '0.95rem',
            letterSpacing: '0.18em',
            fontWeight: 700,
            textDecoration: 'none',
            textTransform: 'uppercase',
            boxShadow: '0 12px 35px rgba(217, 119, 6, 0.45)',
            transition: 'all 0.3s ease'
          }}
        >
          BOOK YOUR EXPERIENCE
        </Link>
      </div>
    </section>
  );
}
