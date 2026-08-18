import CountUpCounter from '../components/CountUpCounter';
import './about.css';

export const metadata = {
  title: "About Our Sanctuary | Diosa Bali Spa | Luxury Wellness",
  description: "Learn about Diosa Bali Spa, the premier Indo-Bali cave wellness sanctuary built with natural stone walls, dark timber, and warm amber illumination.",
};

export default function AboutPage() {
  return (
    <main style={{ position: 'relative', zIndex: 2, background: '#0a0b0a', color: '#f3eee3', minHeight: '100vh' }}>
      
      {/* ABOUT PAGE HERO */}
      <section className="about-hero-section section-padding" style={{ background: 'linear-gradient(180deg, #121312 0%, #0a0b0a 100%)', textAlign: 'center', paddingTop: '170px', paddingBottom: '50px', borderBottom: '1px solid rgba(212,175,55,0.15)' }}>
        <div className="container" style={{ position: 'relative' }}>
          {/* AMBIENT GLOW BACKDROP */}
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '500px',
              height: '180px',
              background: 'radial-gradient(ellipse at center, rgba(217, 119, 6, 0.35) 0%, rgba(212, 175, 55, 0.18) 50%, transparent 75%)',
              filter: 'blur(50px)',
              zIndex: 0,
              pointerEvents: 'none',
              animation: 'headingGlowPulse 6s ease-in-out infinite alternate'
            }}
          />

          <span style={{ position: 'relative', zIndex: 1, fontSize: '0.8rem', letterSpacing: '0.25em', color: '#d97706', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
            DIOSA BALI SPA
          </span>

          <h1 style={{ position: 'relative', zIndex: 1, fontFamily: "'Cormorant Garamond', serif", fontSize: '3.8rem', color: '#d4af37', marginBottom: '12px', textShadow: '0 0 25px rgba(212, 175, 55, 0.4), 0 0 50px rgba(217, 119, 6, 0.25)' }}>
            About Our Sanctuary
          </h1>

          <p style={{ position: 'relative', zIndex: 1, maxWidth: '640px', margin: '10px auto 0 auto', color: '#a8a090', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Experience standard excellence in cave architecture, natural stone, and restorative Indo-Balinese bodywork.
          </p>
        </div>
      </section>

      {/* ABOUT DIOSA BALI SPA */}
      <section className="dbs-about section-padding" style={{ background: '#0a0b0a' }}>
        <div className="container">
          <div className="dbs-about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '60px', alignItems: 'center' }}>
            
            <div className="dbs-about-text">
              {/* SECTION 2 HEADING BLOCK (PERFECTLY FLUSH LEFT ALIGNED) */}
              <div style={{ position: 'relative', width: '100%', marginBottom: '24px' }}>
                <div 
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '30%',
                    transform: 'translate(-50%, -50%)',
                    width: '450px',
                    height: '180px',
                    background: 'radial-gradient(ellipse at center, rgba(217, 119, 6, 0.35) 0%, rgba(212, 175, 55, 0.18) 50%, transparent 75%)',
                    filter: 'blur(45px)',
                    zIndex: 0,
                    pointerEvents: 'none',
                    animation: 'headingGlowPulse 6s ease-in-out infinite alternate'
                  }}
                />

                <span style={{ position: 'relative', zIndex: 1, fontSize: '0.78rem', letterSpacing: '0.25em', color: '#d97706', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                  UNDERGROUND WELLNESS
                </span>

                <h2 style={{ position: 'relative', zIndex: 1, fontFamily: "'Cormorant Garamond', serif", fontSize: '3.2rem', color: '#d4af37', lineHeight: 1.15, margin: 0, textShadow: '0 0 25px rgba(212, 175, 55, 0.4), 0 0 50px rgba(217, 119, 6, 0.25)' }}>
                  Welcome to <br />
                  Diosa Bali Spa
                </h2>
              </div>

              <p className="dbs-lead" style={{ fontSize: '1.3rem', color: '#d97706', marginBottom: '18px', fontWeight: '500', fontStyle: 'italic' }}>
                Relax. Renew. Recharge.
              </p>
              <p className="dbs-body" style={{ color: '#f3eee3', lineHeight: 1.8, marginBottom: '16px', fontSize: '1.05rem' }}>
                Diosa Bali Spa is a premier ancient-themed wellness sanctuary offering customers exotic touches with the combination of traditional Balinese massage and organic body treatments. Our interiors are carved from dark volcanic basalt, natural timber, and warm filament lighting to create an immersive cave retreat.
              </p>
              <p className="dbs-body" style={{ color: '#a8a090', lineHeight: 1.8, marginBottom: '16px' }}>
                Our sanctuary is a unique haven designed to isolate you from urban noise and restore balance to your nervous system. We provide bespoke spa services to destress your physical body, rehabilitate your mind, and provide profound soul relief.
              </p>
              <p className="dbs-body" style={{ color: '#a8a090', lineHeight: 1.8 }}>
                We strongly believe our certified master professionals adopt a holistic approach to body wellness, making our signature therapies an exhilarating journey back to natural vitality.
              </p>
            </div>

            <div className="dbs-about-visual">
              <div className="dbs-img-stack">
                <img 
                  src="https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-1.jpg" 
                  alt="Diosa Spa Stone Sanctuary Interior" 
                  className="dbs-img-main" 
                />
                <div 
                  className="dbs-badge" 
                  style={{ 
                    position: 'absolute', 
                    bottom: '-20px', 
                    right: '-15px', 
                    background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)', 
                    color: '#0a0b0a', 
                    padding: '22px 18px', 
                    borderRadius: '50%', 
                    textAlign: 'center', 
                    fontWeight: '700',
                    boxShadow: '0 12px 30px rgba(217,119,6,0.45)',
                    zIndex: 5
                  }}
                >
                  <span className="dbs-badge-line1" style={{ display: 'block', fontSize: '0.8rem', letterSpacing: '0.1em' }}>BALI'S</span>
                  <span className="dbs-badge-line2" style={{ display: 'block', fontSize: '1.3rem', fontFamily: "'Cormorant Garamond', serif" }}>FINEST</span>
                  <span className="dbs-badge-line3" style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em' }}>RITUALS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS COUNTER SECTION */}
      <section className="dbs-counter-section" style={{ background: '#050605', padding: '70px 0', borderTop: '1px solid rgba(212,175,55,0.15)', borderBottom: '1px solid rgba(212,175,55,0.15)' }}>
        <div className="container">
          <div className="dbs-counter-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', textAlign: 'center' }}>
            <div className="dbs-counter-card">
              <span className="dbs-counter-num" style={{ fontSize: '3.2rem', color: '#d97706', fontWeight: '700', display: 'block', fontFamily: "'Cormorant Garamond', serif" }}>
                <CountUpCounter end={6000} suffix="+" duration={2200} />
              </span>
              <span className="dbs-counter-label" style={{ color: '#a8a090', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.8rem', fontWeight: 600 }}>Happy Clients</span>
            </div>
            <div className="dbs-counter-card">
              <span className="dbs-counter-num" style={{ fontSize: '3.2rem', color: '#d97706', fontWeight: '700', display: 'block', fontFamily: "'Cormorant Garamond', serif" }}>
                <CountUpCounter end={80000} suffix="+" duration={2500} />
              </span>
              <span className="dbs-counter-label" style={{ color: '#a8a090', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.8rem', fontWeight: 600 }}>Treatments Completed</span>
            </div>
            <div className="dbs-counter-card">
              <span className="dbs-counter-num" style={{ fontSize: '3.2rem', color: '#d97706', fontWeight: '700', display: 'block', fontFamily: "'Cormorant Garamond', serif" }}>
                <CountUpCounter end={25} suffix="+" duration={1800} />
              </span>
              <span className="dbs-counter-label" style={{ color: '#a8a090', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.8rem', fontWeight: 600 }}>Years Experience</span>
            </div>
            <div className="dbs-counter-card">
              <span className="dbs-counter-num" style={{ fontSize: '3.2rem', color: '#d97706', fontWeight: '700', display: 'block', fontFamily: "'Cormorant Garamond', serif" }}>
                <CountUpCounter end={150} suffix="+" duration={2000} />
              </span>
              <span className="dbs-counter-label" style={{ color: '#a8a090', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.8rem', fontWeight: 600 }}>Bespoke Procedures</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DIOSA BALI SPA FOR YOU */}
      <section className="dbs-why-you section-padding" style={{ background: '#0a0b0a' }}>
        <div className="container">
          <div className="dbs-why-you-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div className="dbs-why-you-left">
              {/* GLOWING HEADING 3 */}
              <div style={{ position: 'relative', width: '100%', marginBottom: '24px' }}>
                <div 
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '30%',
                    transform: 'translate(-50%, -50%)',
                    width: '450px',
                    height: '180px',
                    background: 'radial-gradient(ellipse at center, rgba(217, 119, 6, 0.35) 0%, rgba(212, 175, 55, 0.18) 50%, transparent 75%)',
                    filter: 'blur(45px)',
                    zIndex: 0,
                    pointerEvents: 'none',
                    animation: 'headingGlowPulse 6s ease-in-out infinite alternate'
                  }}
                />
                <h2 className="dbs-why-you-heading" style={{ position: 'relative', zIndex: 1, fontSize: '3rem', color: '#d4af37', margin: 0, fontFamily: "'Cormorant Garamond', serif", textShadow: '0 0 25px rgba(212, 175, 55, 0.4), 0 0 50px rgba(217, 119, 6, 0.25)' }}>
                  Why Choose Diosa Bali Spa?
                </h2>
              </div>

              <div className="dbs-why-you-img-wrap" style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(212,175,55,0.3)', boxShadow: '0 20px 50px rgba(0,0,0,0.8)' }}>
                <img src="https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-9.jpg" alt="Diosa Bali Spa Sanctuary Suite" className="dbs-why-you-img" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>

            <div className="dbs-why-you-right" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div className="dbs-why-you-item" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '52px', height: '52px', minWidth: '52px', borderRadius: '50%', background: 'rgba(217, 119, 6, 0.15)', border: '1px solid #d4af37', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d97706', boxShadow: '0 4px 15px rgba(217, 119, 6, 0.3)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h12l4 6-10 12L2 9z"></path>
                    <path d="M11 3 8 9l3 12"></path>
                    <path d="M13 3l3 6-3 12"></path>
                    <path d="M2 9h20"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="dbs-why-you-title" style={{ fontSize: '1.4rem', color: '#d4af37', marginBottom: '6px', fontFamily: "'Cormorant Garamond', serif" }}>Team of Master Professionals</h3>
                  <p className="dbs-why-you-desc" style={{ color: '#a8a090', lineHeight: 1.7 }}>Diosa Bali's skilled therapists provide exceptional service and customized treatments with an emphasis on luxury, quality, and individualized care.</p>
                </div>
              </div>

              <div className="dbs-why-you-item" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '52px', height: '52px', minWidth: '52px', borderRadius: '50%', background: 'rgba(217, 119, 6, 0.15)', border: '1px solid #d4af37', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d97706', boxShadow: '0 4px 15px rgba(217, 119, 6, 0.3)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="dbs-why-you-title" style={{ fontSize: '1.4rem', color: '#d4af37', marginBottom: '6px', fontFamily: "'Cormorant Garamond', serif" }}>Premium Organic Ingredients</h3>
                  <p className="dbs-why-you-desc" style={{ color: '#a8a090', lineHeight: 1.7 }}>Our products use the finest cold-pressed botanical oils, active organic herbs, and natural volcanic clays to deliver luminous skin and deep healing.</p>
                </div>
              </div>

              <div className="dbs-why-you-item" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '52px', height: '52px', minWidth: '52px', borderRadius: '50%', background: 'rgba(217, 119, 6, 0.15)', border: '1px solid #d4af37', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d97706', boxShadow: '0 4px 15px rgba(217, 119, 6, 0.3)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M12 2v3m0 14v3M2 12h3m14 0h3m-3.5-6.5l-2.1 2.1m-8.8 8.8l-2.1 2.1m0-13l2.1 2.1m8.8 8.8l2.1 2.1"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="dbs-why-you-title" style={{ fontSize: '1.4rem', color: '#d4af37', marginBottom: '6px', fontFamily: "'Cormorant Garamond', serif" }}>Tranquil Cave Ambience</h3>
                  <p className="dbs-why-you-desc" style={{ color: '#a8a090', lineHeight: 1.7 }}>Our sanctuary offers a thoughtfully designed cave aesthetic for ultimate relaxation, providing a peaceful escape from daily noise.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
