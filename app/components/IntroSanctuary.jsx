'use client';

import Link from 'next/link';

export default function IntroSanctuary() {
  return (
    <section 
      id="intro-sanctuary" 
      style={{ 
        background: 'linear-gradient(180deg, #0a0b0a 0%, #121312 100%)',
        padding: '120px 0 100px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Ambient background glow */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(217, 119, 6, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(80px)'
        }}
      />

      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '30px',
            alignItems: 'center'
          }}
        >
          <style jsx>{`
            @media (min-width: 992px) {
              .intro-text-col {
                grid-column: span 6 !important;
              }
              .intro-img-col {
                grid-column: span 6 !important;
              }
            }
          `}</style>

          {/* LEFT: ATMOSPHERIC COPY */}
          <div 
            style={{
              gridColumn: 'span 12',
              paddingRight: '10px'
            }}
            className="intro-text-col"
          >
            <span 
              style={{
                fontSize: '0.78rem',
                letterSpacing: '0.25em',
                color: '#d97706',
                fontWeight: 700,
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '14px'
              }}
            >
              THE PHILOSOPHY
            </span>

            <div style={{ position: 'relative', display: 'inline-block' }}>
              <div 
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '120%',
                  height: '180%',
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
                  fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
                  color: '#d4af37',
                  lineHeight: 1.15,
                  marginBottom: '24px',
                  fontWeight: 400,
                  textShadow: '0 0 25px rgba(212, 175, 55, 0.4), 0 0 50px rgba(217, 119, 6, 0.25)'
                }}
              >
                Enter The Sanctuary
              </h2>
            </div>

            <p 
              style={{
                fontSize: '1.12rem',
                color: '#f3eee3',
                lineHeight: 1.8,
                marginBottom: '20px',
                fontWeight: 300
              }}
            >
              Beyond the heavy timber doors lies a hidden world carved from raw stone, grounded in dark timber, and illuminated by soft amber lamps. Here, time loses its urgency, and the noise of the outside world slowly fades into silence.
            </p>

            <p 
              style={{
                fontSize: '0.98rem',
                color: '#a8a090',
                lineHeight: 1.8,
                marginBottom: '35px'
              }}
            >
              Diosa Bali Spa was conceived as a subterranean haven — an intimate space where ancient Indo-Balinese bodywork, natural botanicals, and warm thermal pools guide your nervous system into profound rest.
            </p>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <Link 
                href="/about"
                style={{
                  padding: '14px 32px',
                  background: 'transparent',
                  color: '#d4af37',
                  border: '1.5px solid #d4af37',
                  borderRadius: '30px',
                  fontSize: '0.85rem',
                  letterSpacing: '0.15em',
                  fontWeight: 600,
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s ease'
                }}
              >
                OUR HERITAGE
              </Link>
              <Link 
                href="/booking"
                style={{
                  padding: '14px 32px',
                  background: '#d97706',
                  color: '#0a0b0a',
                  borderRadius: '30px',
                  fontSize: '0.85rem',
                  letterSpacing: '0.15em',
                  fontWeight: 700,
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  boxShadow: '0 8px 25px rgba(217, 119, 6, 0.35)',
                  transition: 'all 0.3s ease'
                }}
              >
                RESERVE SPACE
              </Link>
            </div>
          </div>

          {/* RIGHT: EDITORIAL ASYMMETRIC IMAGES OVERLAP */}
          <div 
            style={{
              gridColumn: 'span 12',
              position: 'relative',
              minHeight: '480px'
            }}
            className="intro-img-col"
          >
            {/* Main Large Architecture Photo */}
            <div 
              style={{
                width: '85%',
                height: '460px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
                position: 'relative',
                marginLeft: 'auto'
              }}
            >
              <img 
                src="https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-1.jpg" 
                alt="Diosa Spa Stone & Wood Sanctuary Interior" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.9) contrast(1.05)'
                }}
              />
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(10, 11, 10, 0.8) 100%)'
                }}
              />
            </div>

            {/* Smaller Overlapping Photo */}
            <div 
              style={{
                position: 'absolute',
                bottom: '-30px',
                left: '0',
                width: '52%',
                height: '280px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '2px solid #d4af37',
                boxShadow: '0 20px 50px rgba(0,0,0,0.9)',
                zIndex: 2
              }}
            >
              <img 
                src="/assets/serene_sanctuary_ai.png" 
                alt="Handcrafted Wood Details and Warm Ambient Lights" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div 
                style={{
                  position: 'absolute',
                  bottom: '14px',
                  left: '16px',
                  background: 'rgba(10, 11, 10, 0.85)',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  color: '#d4af37',
                  fontSize: '0.72rem',
                  letterSpacing: '0.15em',
                  fontWeight: 600
                }}
              >
                CAVE SANCTUARY ARCHITECTURE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
