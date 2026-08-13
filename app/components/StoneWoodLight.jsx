'use client';

export default function StoneWoodLight() {
  const pillars = [
    {
      num: '01',
      title: 'STONE',
      subtitle: 'Natural Rock Architecture',
      desc: 'Carved from dark volcanic basalt and irregular natural rock walls, creating a subterranean sanctuary that absorbs outside vibrations and grounds the physical body.',
      image: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-6.jpg',
      tag: 'GROUNDING & SILENCE'
    },
    {
      num: '02',
      title: 'WOOD',
      subtitle: 'Handcrafted Natural Timber',
      desc: 'Rich dark walnut, teak wood carvings, and raw timber beams radiate organic warmth, bringing tactile tactile richness and natural scent to every treatment corridor.',
      image: '/assets/product_oil.png',
      tag: 'ORGANIC TACTILITY'
    },
    {
      num: '03',
      title: 'LIGHT',
      subtitle: 'Warm Amber Illumination',
      desc: 'Soft filament lamps and glowing pools of amber light cast deep, gentle shadows designed to slow the heart rate, quiet brainwaves, and induce natural relaxation.',
      image: '/assets/flower_bath_ai.png',
      tag: 'ATMOSPHERIC CALM'
    }
  ];

  return (
    <section 
      id="stone-wood-light"
      style={{
        background: '#050605',
        padding: '130px 0',
        position: 'relative',
        borderTop: '1px solid rgba(212, 175, 55, 0.15)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.15)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span 
            style={{
              fontSize: '0.78rem',
              letterSpacing: '0.25em',
              color: '#d97706',
              fontWeight: 700,
              textTransform: 'uppercase',
              display: 'inline-block',
              marginBottom: '12px'
            }}
          >
            OUR THREE ELEMENTAL PILLARS
          </span>
          <h2 
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)',
              color: '#d4af37',
              margin: 0,
              fontWeight: 400
            }}
          >
            Stone • Wood • Light
          </h2>
          <p 
            style={{
              maxWidth: '620px',
              margin: '16px auto 0 auto',
              color: '#a8a090',
              fontSize: '1.05rem',
              lineHeight: 1.7
            }}
          >
            An atmospheric harmony engineered to return your physical body to stillness.
          </p>
        </div>

        {/* Editorial Alternating Pillars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '90px' }}>
          {pillars.map((pillar, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div 
                key={pillar.num}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  gap: '40px',
                  alignItems: 'center'
                }}
              >
                {/* Image Box */}
                <div 
                  style={{
                    gridColumn: 'span 12',
                    order: isEven ? 2 : 1,
                    position: 'relative'
                  }}
                  className="swl-img-box"
                >
                  <style jsx>{`
                    @media (min-width: 992px) {
                      .swl-img-box {
                        grid-column: span 6 !important;
                      }
                      .swl-text-box {
                        grid-column: span 6 !important;
                      }
                    }
                  `}</style>

                  <div 
                    style={{
                      height: '380px',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      boxShadow: '0 20px 50px rgba(0,0,0,0.85)',
                      position: 'relative'
                    }}
                  >
                    <img 
                      src={pillar.image} 
                      alt={pillar.title} 
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
                        background: 'linear-gradient(0deg, rgba(5,6,5,0.7) 0%, transparent 60%)'
                      }}
                    />
                    <span 
                      style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        fontSize: '3.5rem',
                        fontFamily: "'Cormorant Garamond', serif",
                        color: 'rgba(217, 119, 6, 0.4)',
                        fontWeight: 700,
                        lineHeight: 1
                      }}
                    >
                      {pillar.num}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div 
                  style={{
                    gridColumn: 'span 12',
                    order: isEven ? 1 : 2,
                    padding: isEven ? '0 30px 0 0' : '0 0 0 30px'
                  }}
                  className="swl-text-box"
                >
                  <span 
                    style={{
                      background: 'rgba(217, 119, 6, 0.12)',
                      color: '#d97706',
                      border: '1px solid rgba(217, 119, 6, 0.3)',
                      padding: '4px 14px',
                      borderRadius: '15px',
                      fontSize: '0.72rem',
                      letterSpacing: '0.18em',
                      fontWeight: 700,
                      display: 'inline-block',
                      marginBottom: '16px'
                    }}
                  >
                    {pillar.tag}
                  </span>

                  <h3 
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '2.8rem',
                      color: '#d4af37',
                      margin: '4px 0 6px 0',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {pillar.title}
                  </h3>

                  <h4 
                    style={{
                      fontSize: '1.05rem',
                      color: '#f3eee3',
                      fontWeight: 500,
                      marginBottom: '18px',
                      letterSpacing: '0.02em'
                    }}
                  >
                    {pillar.subtitle}
                  </h4>

                  <p 
                    style={{
                      fontSize: '1rem',
                      color: '#a8a090',
                      lineHeight: 1.8,
                      maxWidth: '520px'
                    }}
                  >
                    {pillar.desc}
                  </p>

                  <div 
                    style={{
                      width: '80px',
                      height: '1px',
                      background: 'linear-gradient(90deg, #d97706 0%, transparent 100%)',
                      marginTop: '30px'
                    }}
                  />
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
