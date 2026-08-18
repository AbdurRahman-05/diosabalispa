'use client';

import { useState } from 'react';
import Link from 'next/link';
import './foot-reflexology.css';

export default function FootReflexologyPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    model: 'Reflexology Express Studio',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const zones = [
    {
      num: '01',
      name: 'Head & Brain Calming Zone',
      desc: 'Toe tips and upper digit acupressure stimulating neurotransmitter balance, relieving migraines, reducing mental fatigue and promoting rapid REM sleep.'
    },
    {
      num: '02',
      name: 'Spinal Column Alignment Zone',
      desc: 'Medial foot edge reflex arches corresponding directly to the cervical, thoracic, and lumbar spine to release chronic back pain and posture stiffness.'
    },
    {
      num: '03',
      name: 'Solar Plexus & Lung Zone',
      desc: 'Ball of foot compression releasing diaphragm tightness, lowering cortisol stress hormones, and restoring deep oxygenation throughout the lungs.'
    },
    {
      num: '04',
      name: 'Lymphatic & Pelvic Drainage Zone',
      desc: 'Ankle heel perimeter pressure points draining trapped fluid retention, alleviating leg swelling, and accelerating full-body metabolic detox.'
    }
  ];

  const rituals = [
    {
      tag: 'SIGNATURE REFLEXOLOGY',
      title: 'Traditional Balinese Foot Reflexology',
      desc: 'Authentic pressure point therapy using organic virgin coconut elixir, wooden reflexology sticks, and hot towel acupressure to restore energy pathways.',
      duration: '45 / 60 Mins',
      image: '/assets/pedicure_treatment.jpg'
    },
    {
      tag: 'THERMAL VOLCANIC THERAPY',
      title: 'Volcanic Heated Basalt Foot Ritual',
      desc: 'Heated smooth basalt stones placed along energetic reflex meridians combined with warm herbal oil to melt deep calf tightness and foot fatigue.',
      duration: '60 / 90 Mins',
      image: '/assets/massage_treatment.png'
    },
    {
      tag: 'REVITALIZING DETOX',
      title: 'Peppermint & Camphor Chiller Ritual',
      desc: 'Invigorating sea salt scrub followed by cooling peppermint botanical butter and intense arch reflexology for revitalized, refreshed feet.',
      duration: '60 Mins',
      image: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-11.jpg'
    },
    {
      tag: 'HERBAL COMPRESS',
      title: 'Royal Thai Herbal Compress Foot Soak',
      desc: 'Warm hydro-foot soak with lemongrass and kaffir lime, followed by steamed medicinal Thai herb potlis pressed rhythmically along reflex zones.',
      duration: '60 / 90 Mins',
      image: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-12.jpg'
    }
  ];

  const franchiseModels = [
    {
      tier: 'TIER 1 — COMPACT BOUTIQUE',
      name: 'Reflexology Express Studio',
      space: '400 – 600 Sq. Ft. • 4-6 Luxury Recliners',
      featured: false,
      features: [
        'Low CAPEX setup with rapid 45-day opening turnaround',
        '3 to 4 Balinese trained certified master reflexologists provided',
        'Turnkey cave interior design, warm lighting & stone finish blueprints',
        'Complete supply of organic oils, herbal compresses & uniforms',
        'Centralized POS, automated CRM & online booking engine',
        'Estimated payback period: 10 – 14 Months'
      ]
    },
    {
      tier: 'TIER 2 — FLAGSHIP EXPERIENCE',
      name: 'Sanctuary Reflexology Lounge',
      space: '700 – 1,200 Sq. Ft. • 8-12 Luxury Recliners + Private VIP Nook',
      featured: true,
      features: [
        'High-volume urban wellness format with highest profit margins',
        '6 to 8 certified reflexologists + 1 Senior Spa Concierge Manager',
        'Full acoustic soundscape design + signature ambient aroma installation',
        'Integrated Hydro-foot soak flower tubs and heated basalt stone suites',
        'Comprehensive digital marketing launch campaign and influencer PR',
        'Estimated payback period: 12 – 16 Months'
      ]
    },
    {
      tier: 'TIER 3 — REGIONAL MASTER',
      name: 'Master Spa & Reflexology Center',
      space: '1,500+ Sq. Ft. • Full Sanctuary Suites + Reflexology Zone',
      featured: false,
      features: [
        'Exclusive territorial exclusivity across designated city/district',
        'Multi-unit expansion rights and sub-franchise royalty share',
        'Dedicated Master Therapist Onboarding & Continuous Audit Team',
        'Custom architectural rendering and 3D architectural site supervision',
        'VIP Concierge customer care line & centralized call center handling',
        'Highest revenue potential with multi-channel revenue streams'
      ]
    }
  ];

  const handleFranchiseSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setSubmitted(true);

    const message = encodeURIComponent(
      `*NEW DIOSA FOOT REFLEXOLOGY FRANCHISE INQUIRY*\n` +
      `------------------------------------------\n` +
      `👤 *Investor Name:* ${formData.name}\n` +
      `📞 *Mobile Phone:* ${formData.phone}\n` +
      `✉️ *Email:* ${formData.email || 'N/A'}\n` +
      `📍 *Preferred City/State:* ${formData.city || 'N/A'}\n` +
      `🏢 *Preferred Franchise Model:* ${formData.model}\n` +
      `📝 *Investor Notes:* ${formData.message || 'Interested in franchise details and ROI prospectus.'}\n` +
      `------------------------------------------\n` +
      `Sent via Diosa Foot Reflexology Portal`
    );

    const adminPhoneNumber = '919344781164';
    window.open(`https://wa.me/${adminPhoneNumber}?text=${message}`, '_blank');
  };

  return (
    <main style={{ position: 'relative', zIndex: 2, background: '#0a0b0a', minHeight: '100vh', color: '#f3eee3' }}>
      
      {/* HERO SECTION */}
      <section className="reflex-hero-section section-padding">
        <div className="container" style={{ position: 'relative' }}>
          
          {/* Ambient Glow Backdrop */}
          <div 
            style={{
              position: 'absolute',
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '600px',
              height: '220px',
              background: 'radial-gradient(ellipse at center, rgba(217, 119, 6, 0.38) 0%, rgba(212, 175, 55, 0.2) 50%, transparent 75%)',
              filter: 'blur(55px)',
              zIndex: 0,
              pointerEvents: 'none',
              animation: 'headingGlowPulse 6s ease-in-out infinite alternate'
            }}
          />

          <span className="reflex-badge-pill" style={{ position: 'relative', zIndex: 1 }}>
            ✦ SUBTERRANEAN ZONE THERAPY &amp; MASTER FRANCHISE ✦
          </span>

          <h1 className="reflex-hero-title" style={{ position: 'relative', zIndex: 1 }}>
            Foot Reflexology Sanctuary <br />&amp; Franchise Opportunity
          </h1>

          <p className="reflex-hero-desc" style={{ position: 'relative', zIndex: 1 }}>
            Experience ancient Indo-Balinese pressure point therapy calibrated to restore organic balance to 7,000+ nerve endings — and explore India’s premier luxury wellness franchise partnership.
          </p>

          <div className="reflex-hero-btns" style={{ position: 'relative', zIndex: 1 }}>
            <Link href="/booking" className="btn btn-primary" style={{ borderRadius: '30px', padding: '16px 36px' }}>
              Book Reflexology Session
            </Link>
            <a href="#franchise-section" className="btn btn-secondary" style={{ borderRadius: '30px', padding: '16px 36px' }}>
              Explore Franchise Partnership
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE SCIENCE OF REFLEXOLOGY ZONES */}
      <section className="section-padding" style={{ background: '#0a0b0a' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px auto' }}>
            <span className="section-tagline">ANCIENT HOLISTIC SCIENCE</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)' }}>
              How Foot Reflexology Works
            </h2>
            <p className="section-subtitle">
              Every organ, gland, and muscle system in the human body mirrors specific meridian zones on the soles of your feet.
            </p>
          </div>

          <div className="reflex-zones-grid">
            {zones.map((zone, idx) => (
              <div key={idx} className="reflex-zone-card">
                <div className="reflex-zone-icon-wrap">
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700 }}>
                    {zone.num}
                  </span>
                </div>
                <h3 className="reflex-zone-name">{zone.name}</h3>
                <p className="reflex-zone-desc">{zone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SIGNATURE REFLEXOLOGY RITUALS MENU */}
      <section className="section-padding" style={{ background: '#121312', borderTop: '1px solid rgba(212, 175, 55, 0.15)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px auto' }}>
            <span className="section-tagline">EXECUTIVE SPA MENU</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)' }}>
              Signature Foot Rituals
            </h2>
            <p className="section-subtitle">
              Delivered in individual dark timber acoustic alcoves with soothing botanical aromas and warm tea service.
            </p>
          </div>

          <div className="reflex-menu-grid">
            {rituals.map((ritual, idx) => (
              <div key={idx} className="reflex-menu-card">
                <div className="reflex-menu-img-wrap">
                  <img src={ritual.image} alt={ritual.title} className="reflex-menu-img" />
                </div>
                <div className="reflex-menu-content">
                  <span className="reflex-menu-tag">{ritual.tag}</span>
                  <h3 className="reflex-menu-title">{ritual.title}</h3>
                  <p className="reflex-menu-desc">{ritual.desc}</p>
                  <div className="reflex-menu-footer">
                    <span className="reflex-duration-pill">
                      ⏱ {ritual.duration}
                    </span>
                    <Link href="/booking" style={{ color: '#d4af37', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none' }}>
                      Reserve Now →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FRANCHISE OPPORTUNITY PROGRAM */}
      <section id="franchise-section" className="franchise-section section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px auto' }}>
            <span className="section-tagline" style={{ color: '#d97706' }}>INVESTMENT &amp; PARTNERSHIP</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}>
              Own a Diosa Foot Reflexology Franchise
            </h2>
            <p className="section-subtitle" style={{ fontSize: '1.1rem' }}>
              Tap into India's booming ₹25,000+ Crore wellness economy with our proven, high-margin, low-space sanctuary format.
            </p>
          </div>

          {/* 3 FRANCHISE MODELS */}
          <div className="franchise-models-grid">
            {franchiseModels.map((m, idx) => (
              <div key={idx} className={`franchise-model-card ${m.featured ? 'featured' : ''}`}>
                {m.featured && (
                  <span className="franchise-featured-badge">MOST POPULAR ROI MODEL</span>
                )}
                <span className="franchise-model-tier">{m.tier}</span>
                <h3 className="franchise-model-name">{m.name}</h3>
                <div className="franchise-model-space">{m.space}</div>
                <ul className="franchise-features-list">
                  {m.features.map((f, fIdx) => (
                    <li key={fIdx}>
                      <span className="franchise-check-icon">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#franchise-form" 
                  className="btn btn-primary" 
                  style={{ width: '100%', textAlign: 'center', borderRadius: '30px', padding: '14px 20px', marginTop: 'auto' }}
                >
                  Apply for {m.name.split(' ')[0]} Model
                </a>
              </div>
            ))}
          </div>

          {/* FRANCHISE APPLICATION FORM */}
          <div id="franchise-form" className="franchise-form-wrap">
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span className="section-tagline" style={{ color: '#d97706' }}>FRANCHISE APPLICATION</span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', color: '#d4af37', margin: '6px 0 10px 0' }}>
                Request Franchise Prospectus &amp; Financials
              </h3>
              <p style={{ color: '#a8a090', fontSize: '0.95rem' }}>
                Fill out the confidential investor form below to connect directly with our Master Franchise Expansion Team.
              </p>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px', background: 'rgba(217, 119, 6, 0.12)', borderRadius: '20px', border: '1px solid #d4af37' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: '#d4af37', marginBottom: '10px' }}>
                  Inquiry Dispatched Successfully
                </h4>
                <p style={{ color: '#f3eee3', fontSize: '1rem', maxWidth: '500px', margin: '0 auto 20px auto' }}>
                  Your franchise application has been forwarded to our Executive Director. Our team will contact you via WhatsApp and Phone within 24 hours.
                </p>
                <a 
                  href="https://wa.me/919344781164?text=Hi%20Diosa%20Spa%20Team,%20I%20have%20submitted%20my%20franchise%20inquiry." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ borderRadius: '30px' }}
                >
                  Chat with Franchise Director on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleFranchiseSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', color: 'var(--accent-gold-dark)', fontWeight: 600 }}>
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', background: '#0a0b0a', border: '1px solid rgba(212,175,55,0.3)', color: '#f3eee3', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', color: 'var(--accent-gold-dark)', fontWeight: 600 }}>
                      Mobile Phone (WhatsApp) *
                    </label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', background: '#0a0b0a', border: '1px solid rgba(212,175,55,0.3)', color: '#f3eee3', outline: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', color: 'var(--accent-gold-dark)', fontWeight: 600 }}>
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      placeholder="e.g. rajesh@investor.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', background: '#0a0b0a', border: '1px solid rgba(212,175,55,0.3)', color: '#f3eee3', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', color: 'var(--accent-gold-dark)', fontWeight: 600 }}>
                      Target City / Location *
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Chennai, Bangalore, Madurai"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', background: '#0a0b0a', border: '1px solid rgba(212,175,55,0.3)', color: '#f3eee3', outline: 'none' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', color: 'var(--accent-gold-dark)', fontWeight: 600 }}>
                    Preferred Franchise Tier Model
                  </label>
                  <select
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', background: '#0a0b0a', border: '1px solid rgba(212,175,55,0.3)', color: '#f3eee3', outline: 'none' }}
                  >
                    <option value="Reflexology Express Studio (400-600 sq.ft)">Reflexology Express Studio (400-600 sq.ft)</option>
                    <option value="Sanctuary Reflexology Lounge (700-1200 sq.ft)">Sanctuary Reflexology Lounge (700-1200 sq.ft)</option>
                    <option value="Master Spa & Reflexology Center (1500+ sq.ft)">Master Spa &amp; Reflexology Center (1500+ sq.ft)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', color: 'var(--accent-gold-dark)', fontWeight: 600 }}>
                    Investor Message / Space Availability
                  </label>
                  <textarea 
                    rows="3" 
                    placeholder="Tell us about your background, existing commercial space, or investment timeframe..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', background: '#0a0b0a', border: '1px solid rgba(212,175,55,0.3)', color: '#f3eee3', outline: 'none', resize: 'vertical' }}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ width: '100%', padding: '18px', borderRadius: '30px', fontSize: '0.92rem', letterSpacing: '0.15em' }}
                >
                  Submit Franchise Application →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </main>
  );
}
