import CountUpCounter from '../components/CountUpCounter';

export const metadata = {
  title: "About Us | Diosa Bali Spa | Luxury Wellness Sanctuary",
  description: "Learn about Diosa Bali Spa, the premier Indo-Bali luxury wellness sanctuary offering authentic Balinese massage, organic skincare facials, and holistic body rituals.",
};

export default function AboutPage() {
  return (
    <main>
      {/* ABOUT PAGE HERO */}
      <section className="about-hero-section section-padding" style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)', textAlign: 'center', paddingTop: '170px', paddingBottom: '50px' }}>
        <div className="container">
          <span className="section-tagline">DIOSA BALI SPA</span>
          <h1 className="section-title" style={{ fontSize: '3.8rem', marginBottom: '10px' }}>About Our Sanctuary</h1>
          <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
            Experience standard excellence in luxury and relaxation at Indo-Bali spa.
          </p>
        </div>
      </section>

      {/* ABOUT DIOSA BALI SPA */}
      <section className="dbs-about section-padding">
        <div className="container">
          <div className="dbs-about-grid">
            <div className="dbs-about-text">
              <span className="section-tagline">ABOUT US</span>
              <h2 className="section-title">
                Welcome to <br />
                Diosa Bali Spa
              </h2>
              <p className="dbs-lead" style={{ fontSize: '1.4rem', color: 'var(--accent-gold)', marginBottom: '15px', fontWeight: '500' }}>
                Relax. Renew. Recharge.
              </p>
              <p className="dbs-body">
                Diosa Bali Spa is a premier ancient-themed wellness sanctuary offering customers exotic touches with the combination of traditional Balinese massage and organic body treatments placed in Madurai District, India. Diosa Bali Spa's interiors are upscale, serene, and beautifully crafted to offer a world-class professional spa experience.
              </p>
              <p className="dbs-body">
                Our sanctuary is a unique haven to feel peace and rejuvenate your body, mind, and soul. We cater to both men and women by providing bespoke spa services to destress your physical body, rehabilitate your mind, and provide profound soul relief.
              </p>
              <p className="dbs-body">
                We strongly believe our certified professionals adopt a holistic approach to body wellness, making our signature therapies an exhilarating journey back to natural vitality.
              </p>
            </div>

            <div className="dbs-about-visual">
              <div className="dbs-img-stack" style={{ position: 'relative' }}>
                <img src="/assets/massage_treatment.png" alt="Diosa Bali Spa Treatment" className="dbs-img-main" style={{ borderRadius: '16px', width: '100%' }} />
                <div className="dbs-badge" style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: 'var(--accent-gold)', color: '#1e2420', padding: '20px', borderRadius: '50%', textAlign: 'center', fontWeight: '600' }}>
                  <span className="dbs-badge-line1" style={{ display: 'block' }}>Bali's</span>
                  <span className="dbs-badge-line2" style={{ display: 'block', fontSize: '1.2rem' }}>Finest</span>
                  <span className="dbs-badge-line3" style={{ display: 'block', fontSize: '0.8rem' }}>Rituals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS COUNTER SECTION */}
      <section className="dbs-counter-section" style={{ background: 'var(--bg-dark)', padding: '60px 0', color: '#fff' }}>
        <div className="container">
          <div className="dbs-counter-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', textAlign: 'center' }}>
            <div className="dbs-counter-card">
              <span className="dbs-counter-num" style={{ fontSize: '3rem', color: 'var(--accent-gold)', fontWeight: '600', display: 'block' }}>
                <CountUpCounter end={6000} suffix="+" duration={2200} />
              </span>
              <span className="dbs-counter-label" style={{ opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Happy Clients</span>
            </div>
            <div className="dbs-counter-card">
              <span className="dbs-counter-num" style={{ fontSize: '3rem', color: 'var(--accent-gold)', fontWeight: '600', display: 'block' }}>
                <CountUpCounter end={80000} suffix="+" duration={2500} />
              </span>
              <span className="dbs-counter-label" style={{ opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Treatments Completed</span>
            </div>
            <div className="dbs-counter-card">
              <span className="dbs-counter-num" style={{ fontSize: '3rem', color: 'var(--accent-gold)', fontWeight: '600', display: 'block' }}>
                <CountUpCounter end={25} suffix="+" duration={1800} />
              </span>
              <span className="dbs-counter-label" style={{ opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Years Experience</span>
            </div>
            <div className="dbs-counter-card">
              <span className="dbs-counter-num" style={{ fontSize: '3rem', color: 'var(--accent-gold)', fontWeight: '600', display: 'block' }}>
                <CountUpCounter end={150} suffix="+" duration={2000} />
              </span>
              <span className="dbs-counter-label" style={{ opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Bespoke Procedures</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DIOSA BALI SPA FOR YOU */}
      <section className="dbs-why-you section-padding">
        <div className="container">
          <div className="dbs-why-you-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div className="dbs-why-you-left">
              <h2 className="dbs-why-you-heading" style={{ fontSize: '2.8rem', color: 'var(--accent-gold)', marginBottom: '20px' }}>Why Choose Diosa Bali Spa?</h2>
              <div className="dbs-why-you-img-wrap" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                <img src="/assets/facial_treatment.png" alt="Diosa Bali Spa Ambience" className="dbs-why-you-img" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>

            <div className="dbs-why-you-right" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div className="dbs-why-you-item" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', minWidth: '48px', borderRadius: '50%', background: 'rgba(217, 191, 119, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', boxShadow: '0 4px 15px rgba(217, 191, 119, 0.2)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h12l4 6-10 12L2 9z"></path>
                    <path d="M11 3 8 9l3 12"></path>
                    <path d="M13 3l3 6-3 12"></path>
                    <path d="M2 9h20"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="dbs-why-you-title" style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '8px' }}>Team of Master Professionals</h4>
                  <p className="dbs-why-you-desc" style={{ opacity: 0.85 }}>Diosa Bali's skilled therapists provide exceptional service and customized treatments with an emphasis on luxury, quality, and individualized care.</p>
                </div>
              </div>

              <div className="dbs-why-you-item" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', minWidth: '48px', borderRadius: '50%', background: 'rgba(217, 191, 119, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', boxShadow: '0 4px 15px rgba(217, 191, 119, 0.2)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="dbs-why-you-title" style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '8px' }}>Premium Organic Ingredients</h4>
                  <p className="dbs-why-you-desc" style={{ opacity: 0.85 }}>Our products use the finest cold-pressed botanical oils, active organic herbs, and natural volcanic clays to deliver luminous skin and deep healing.</p>
                </div>
              </div>

              <div className="dbs-why-you-item" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', minWidth: '48px', borderRadius: '50%', background: 'rgba(217, 191, 119, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', boxShadow: '0 4px 15px rgba(217, 191, 119, 0.2)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M12 2v3m0 14v3M2 12h3m14 0h3m-3.5-6.5l-2.1 2.1m-8.8 8.8l-2.1 2.1m0-13l2.1 2.1m8.8 8.8l2.1 2.1"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="dbs-why-you-title" style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '8px' }}>Tranquil Serene Ambience</h4>
                  <p className="dbs-why-you-desc" style={{ opacity: 0.85 }}>Our sanctuary offers a thoughtfully designed aesthetic for ultimate relaxation, providing a peaceful escape from daily noise.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
