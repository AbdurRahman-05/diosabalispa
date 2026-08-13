'use client';

export default function AromaSection() {
  return (
    <section 
      id="aroma-experience"
      style={{
        background: 'radial-gradient(ellipse at center, #1a1410 0%, #0a0b0a 80%)',
        padding: '130px 0',
        position: 'relative',
        borderTop: '1px solid rgba(212, 175, 55, 0.2)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
      }}
    >
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '40px',
            alignItems: 'center'
          }}
        >
          <style jsx>{`
            @media (min-width: 992px) {
              .aroma-text-col {
                grid-column: span 6 !important;
              }
              .aroma-img-col {
                grid-column: span 6 !important;
              }
            }
          `}</style>

          {/* LEFT: ATMOSPHERIC TEXT */}
          <div 
            style={{
              gridColumn: 'span 12'
            }}
            className="aroma-text-col"
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
              OLFACTORY SANCTUARY
            </span>

            <div style={{ position: 'relative', display: 'inline-block' }}>
              <div 
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '40%',
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
                Aroma, Warm Timber &amp; Natural Botanicals
              </h2>
            </div>

            <p 
              style={{
                fontSize: '1.1rem',
                color: '#f3eee3',
                lineHeight: 1.8,
                marginBottom: '20px',
                fontWeight: 300
              }}
            >
              The moment you enter our stone corridors, your sense of smell registers a subtle transformation. Warm natural teakwood, steam infused with crushed Balinese spices, and cold-pressed frangipani oils release therapeutic compounds directly into the air.
            </p>

            <p 
              style={{
                fontSize: '0.98rem',
                color: '#a8a090',
                lineHeight: 1.8,
                marginBottom: '35px'
              }}
            >
              Every ritual begins with a custom fragrance selection — allowing your instinct to choose between soothing sandalwood for deep sleep, invigorating lemongrass for vital energy, or rare botanical florals to calm an anxious mind.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              <div 
                style={{
                  background: 'rgba(34, 24, 17, 0.7)',
                  padding: '20px',
                  borderRadius: '16px',
                  border: '1px solid rgba(212, 175, 55, 0.25)'
                }}
              >
                <div style={{ color: '#d97706', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '4px' }}>
                  100% ORGANIC
                </div>
                <div style={{ color: '#f3eee3', fontSize: '0.92rem' }}>
                  Pure cold-pressed botanical oils &amp; wild-harvested herbs
                </div>
              </div>

              <div 
                style={{
                  background: 'rgba(34, 24, 17, 0.7)',
                  padding: '20px',
                  borderRadius: '16px',
                  border: '1px solid rgba(212, 175, 55, 0.25)'
                }}
              >
                <div style={{ color: '#d97706', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '4px' }}>
                  TIMBER &amp; STEAM
                </div>
                <div style={{ color: '#f3eee3', fontSize: '0.92rem' }}>
                  Natural wood grain aromas combined with herbal steam baths
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CLOSE-UP BOTTLE / ATMOSPHERIC PHOTO */}
          <div 
            style={{
              gridColumn: 'span 12'
            }}
            className="aroma-img-col"
          >
            <div 
              style={{
                height: '520px',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1.5px solid #d4af37',
                boxShadow: '0 25px 60px rgba(0,0,0,0.9)',
                position: 'relative'
              }}
            >
              <img 
                src="/assets/product_oil.png" 
                alt="Organic Aromatherapy Oils and Herbs" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'contrast(1.08) brightness(0.95)'
                }}
              />
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 50%, rgba(10,11,10,0.85) 100%)'
                }}
              />
              <div 
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  right: '24px',
                  color: '#d4af37',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.35rem',
                  fontStyle: 'italic'
                }}
              >
                "Scent is the fastest doorway to parasympathetic stillness."
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
