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

  const therapies = [
    {
      id: 'foot-reflexology',
      isCombo: false,
      title: 'Foot Reflexology',
      desc: 'Relieves stress through pressure points, boosts circulation and promotes total body relaxation',
      pricing: [
        { duration: '30 mins', price: '₹800' },
        { duration: '45 mins', price: '₹1000' },
        { duration: '60 mins', price: '₹1,200' }
      ],
      image: '/assets/therapy_reflexology.jpg',
      reverse: false
    },
    {
      id: 'leg-foot-massage',
      isCombo: false,
      title: 'Leg & Foot Massage',
      desc: 'Instantly soothes tired legs Improves blood circulation and aids muscle recovery',
      pricing: [
        { duration: '45 mins', price: '₹1000' },
        { duration: '60 mins', price: '₹1,200' }
      ],
      image: '/assets/therapy_leg_foot.jpg',
      reverse: true
    },
    {
      id: 'foot-shoulders-back',
      isCombo: true,
      comboParts: [
        { name: 'Foot Reflexology', mins: '45 mins' },
        { name: 'Shoulders & Back', mins: '15 mins' }
      ],
      desc: 'Relieves stiffness and tension knots, helps ease pain caused by long hours of screen use',
      totalPricing: '60 mins - ₹1300',
      totalMins: '60 mins',
      totalPrice: '₹1300',
      image: '/assets/therapy_shoulders_back.jpg',
      reverse: false
    },
    {
      id: 'foot-back-arms-shoulders',
      isCombo: true,
      comboParts: [
        { name: 'Foot Reflexology', mins: '45 mins' },
        { name: 'Back, Arms & Shoulders', mins: '30 mins' }
      ],
      desc: 'Boosts circulation, relieves muscle stiffness from typing or exercise, and aids lymphatic drainage',
      totalPricing: '75 mins - ₹1500',
      totalMins: '75 mins',
      totalPrice: '₹1500',
      image: '/assets/therapy_arms_back.jpg',
      reverse: true
    },
    {
      id: 'foot-body-stretches',
      isCombo: true,
      comboParts: [
        { name: 'Foot Reflexology', mins: '45 mins' },
        { name: 'Body Streches', mins: '45 mins' }
      ],
      desc: 'Revitalize your Body Streches that helps relieve muscle tension, improve circulation, reduce stress, and leave you feeling refreshed, energized, and deeply relaxed.',
      totalPricing: '90 mins - ₹2000',
      totalMins: '90 mins',
      totalPrice: '₹2000',
      image: '/assets/therapy_body_stretches.jpg',
      reverse: false
    }
  ];

  const membershipPackages = [
    {
      hours: '7 HOURS',
      pay: '₹5,000',
      get: 'Therapies Worth ₹7,000',
      bonus: '+₹2,000 Bonus (40% Extra Value)'
    },
    {
      hours: '16 HOURS',
      pay: '₹10,000',
      get: 'Therapies Worth ₹16,000',
      bonus: '+₹6,000 Bonus (60% Extra Value)'
    }
  ];

  const franchiseModels = [
    {
      tier: 'TIER 1 — COMPACT BOUTIQUE',
      name: 'Reflexology Express Studio',
      space: '400 – 600 Sq. Ft. • 4-6 Luxury Recliners',
      investment: '₹18L – ₹24 Lakhs',
      monthlyRevenue: '₹4.5L – ₹6.5 Lakhs / mo',
      payback: '10 – 14 Months',
      capacity: '35–50 Sessions / Day',
      featured: false,
      features: [
        'High session velocity with 30-45 min express reflexology (₹800 - ₹1,000)',
        'Low CAPEX setup with rapid 45-day turnkey opening turnaround',
        '3 to 4 Balinese trained certified master reflexologists provided',
        'Turnkey cave interior design, warm lighting & stone finish blueprints',
        'Pre-paid ₹5,000 / ₹10,000 Membership package recurring cash inflows',
        'Centralized POS, automated CRM & online booking engine'
      ]
    },
    {
      tier: 'TIER 2 — FLAGSHIP EXPERIENCE',
      name: 'Sanctuary Reflexology Lounge',
      space: '700 – 1,200 Sq. Ft. • 8-12 Luxury Recliners + VIP Suite',
      investment: '₹32L – ₹42 Lakhs',
      monthlyRevenue: '₹9.0L – ₹14.0 Lakhs / mo',
      payback: '12 – 16 Months',
      capacity: '70–100 Sessions / Day',
      featured: true,
      features: [
        'High-volume urban wellness format with highest net profit margins (42% - 48%)',
        'Full combo therapy menu: Shoulders, Back, Arms & Body Stretches (₹1,300 - ₹2,000)',
        '6 to 8 certified reflexologists + 1 Senior Spa Concierge Manager provided',
        'VIP private couple recliners and ambient aromatherapy installation',
        'Dominant pre-paid Membership sales driver creating upfront operational liquidity',
        'Comprehensive digital marketing launch campaign and influencer PR'
      ]
    },
    {
      tier: 'TIER 3 — REGIONAL MASTER',
      name: 'Master Spa & Reflexology Center',
      space: '1,500+ Sq. Ft. • Full Sanctuary Suites + Reflexology Zone',
      investment: '₹55L – ₹75 Lakhs',
      monthlyRevenue: '₹18.0L – ₹28.0 Lakhs / mo',
      payback: '14 – 18 Months',
      capacity: '120+ Sessions / Day',
      featured: false,
      features: [
        'Exclusive territorial exclusivity across designated city or high-growth district',
        'Multi-unit expansion rights and sub-franchise royalty revenue share',
        'Full spectrum Balinese spa suites + express foot reflexology theater',
        'Dedicated Master Therapist Onboarding & Continuous Audit Team',
        'Multi-tier Membership passport valid across all regional branches',
        'VIP Concierge customer care line & centralized call center handling'
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
            <Link href={`/booking?category=${encodeURIComponent('Foot Reflexology & Combos')}`} className="btn btn-primary" style={{ borderRadius: '30px', padding: '16px 36px' }}>
              Book Reflexology Session
            </Link>
            <a href="#franchise-section" className="btn btn-secondary" style={{ borderRadius: '30px', padding: '16px 36px' }}>
              Explore Franchise Partnership
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: BROCHURE THERAPIES */}
      <section className="therapies-section">
        <div className="container">
          
          {/* Header Bar matching Brochure Top */}
          <div className="therapies-header-bar">
            <div className="therapies-header-line" />
            <h2 className="therapies-header-title">Therapies</h2>
          </div>

          <div className="therapies-list">
            {therapies.map((therapy) => (
              <div 
                key={therapy.id} 
                className={`therapy-brochure-card ${therapy.reverse ? 'reverse' : ''}`}
              >
                {/* Visual Image Column */}
                <div className="therapy-img-col">
                  <img src={therapy.image} alt={therapy.title || 'Diosa Therapy'} />
                  <div className="therapy-img-overlay" />
                </div>

                {/* Content Details Column */}
                <div className="therapy-info-col">
                  {!therapy.isCombo ? (
                    <h3 className="therapy-gold-title">{therapy.title}</h3>
                  ) : (
                    <div className="therapy-combo-block">
                      {therapy.comboParts.map((part, pIdx) => (
                        <div key={pIdx} className="therapy-combo-item">
                          <span className="therapy-combo-name">{part.name}</span>
                          <span className="therapy-combo-mins">{part.mins}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="therapy-card-desc">{therapy.desc}</p>

                  <div className="therapy-pricing-row">
                    {!therapy.isCombo ? (
                      therapy.pricing.map((p, pIdx) => (
                        <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span className="therapy-price-highlight">
                            {p.duration} - {p.price}
                          </span>
                          {pIdx < therapy.pricing.length - 1 && (
                            <span className="therapy-price-divider">|</span>
                          )}
                        </div>
                      ))
                    ) : (
                      <span className="therapy-price-highlight">
                        {therapy.totalPricing}
                      </span>
                    )}
                  </div>

                  <div className="therapy-action-btns">
                    <Link 
                      href={`/booking?therapy=${therapy.id}&category=${encodeURIComponent('Foot Reflexology & Combos')}`}
                      className="btn-reserve-sm"
                    >
                      Book Session →
                    </Link>
                    <a 
                      href={`https://wa.me/919344781164?text=${encodeURIComponent(`Hi Diosa Spa, I would like to inquire/book the ${therapy.title || therapy.comboParts.map(c => c.name).join(' + ')} therapy.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-wa-sm"
                    >
                      <span>💬 WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3: MEMBERSHIP PACKAGES */}
      <section className="membership-section">
        <div className="container membership-container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px auto' }}>
            <span className="section-tagline" style={{ color: '#d97706' }}>EXCLUSIVE VALUE PASS</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)' }}>
              Membership Packages
            </h2>
            <p className="section-subtitle">
              Enjoy premium flexibility, priority booking, and unmatched savings across all reflexology and restorative therapies.
            </p>
          </div>

          {/* Table from Brochure Image 4 */}
          <div className="membership-table-box">
            <div className="membership-table-title">
              MEMBERSHIP PACKAGES
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table className="membership-table">
                <thead>
                  <tr>
                    <th className="membership-th-hours">HOURS</th>
                    <th className="membership-th-pay">YOU PAY</th>
                    <th className="membership-th-get">YOU GET</th>
                  </tr>
                </thead>
                <tbody>
                  {membershipPackages.map((pkg, idx) => (
                    <tr key={idx}>
                      <td className="membership-hours-col">{pkg.hours}</td>
                      <td className="membership-pay-col">{pkg.pay}</td>
                      <td className="membership-get-col">
                        <div className="membership-get-inner">
                          <span className="membership-get-val">{pkg.get}</span>
                          <span className="membership-bonus-badge">{pkg.bonus}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Membership Perks */}
          <div className="membership-perks-row">
            <div className="membership-perk-card">
              <div className="membership-perk-icon">✦</div>
              <div className="membership-perk-title">100% Transferable</div>
              <div className="membership-perk-desc">Share your hours with family, loved ones, or business guests anytime.</div>
            </div>
            <div className="membership-perk-card">
              <div className="membership-perk-icon">⚖</div>
              <div className="membership-perk-title">All Therapies Included</div>
              <div className="membership-perk-desc">Redeemable towards any foot reflexology, combo sessions, and signature body therapies.</div>
            </div>
            <div className="membership-perk-card">
              <div className="membership-perk-icon">★</div>
              <div className="membership-perk-title">VIP Priority Slots</div>
              <div className="membership-perk-desc">Guaranteed priority scheduling even during peak evening and weekend wellness hours.</div>
            </div>
          </div>

          {/* Membership CTA */}
          <div className="membership-cta-wrap">
            <a 
              href="https://wa.me/919344781164?text=Hi%20Diosa%20Spa%20Team,%20I%20am%20interested%20in%20joining%20the%20Membership%20Packages%20(7%20Hours%20/%2016%20Hours)."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ borderRadius: '30px', padding: '16px 36px', fontSize: '1rem', letterSpacing: '0.08em' }}
            >
              Enroll in Membership via WhatsApp →
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 4: FRANCHISE OPPORTUNITY PROGRAM */}
      <section id="franchise-section" className="franchise-section">
        <div className="container">

          {/* Header Bar matching Brochure Style */}
          <div className="therapies-header-bar">
            <div className="therapies-header-line" />
            <h2 className="therapies-header-title">Franchise Partnership</h2>
          </div>

          {/* FRANCHISE HERO BANNER CARD */}
          <div className="franchise-banner-card">
            <div className="franchise-banner-img-wrap">
              <img 
                src="/assets/reflexology_franchise_lounge.jpg" 
                alt="Diosa Reflexology Lounge Interior" 
                className="franchise-banner-img"
              />
              <div className="franchise-banner-overlay" />
            </div>
            <div className="franchise-banner-content">
              <span className="franchise-banner-tag">HIGH-VELOCITY WELLNESS MODEL</span>
              <h3 className="franchise-banner-title">
                Foot Reflexology Sanctuary &amp; Lounge Format
              </h3>
              <p className="franchise-banner-desc">
                Engineered around high-margin express therapies (₹800 – ₹1,200), restorative combo rituals (₹1,300 – ₹2,000), and pre-paid recurring Membership Packages (₹5,000 &amp; ₹10,000). Enjoy low CAPEX, zero wet-area plumbing risk, and rapid 45-day turnkey launch.
              </p>

              <div className="franchise-metrics-pills">
                <span className="franchise-metric-chip">₹800 – ₹2,000 Avg Ticket</span>
                <span className="franchise-metric-chip">8–12 Turns / Chair Daily</span>
                <span className="franchise-metric-chip">₹5k / ₹10k Pre-paid Inflow</span>
                <span className="franchise-metric-chip">10–14 Months Payback</span>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a 
                  href="#franchise-table" 
                  className="btn btn-primary" 
                  style={{ borderRadius: '30px', padding: '12px 28px', fontSize: '0.9rem' }}
                >
                  View ROI &amp; Models ↓
                </a>
                <a 
                  href="https://wa.me/919344781164?text=Hi%20Diosa%20Spa%20Team,%20I%20am%20interested%20in%20the%20Foot%20Reflexology%20Franchise%20Opportunity." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-wa-sm"
                  style={{ padding: '11px 22px', fontSize: '0.9rem' }}
                >
                  <span>💬 Talk to Franchise Director</span>
                </a>
              </div>
            </div>
          </div>

          {/* FRANCHISE COMPARISON TABLE (IMAGE 4 MATCHING STYLE) */}
          <div id="franchise-table" className="franchise-table-box">
            <div className="franchise-table-title">
              FRANCHISE FORMAT &amp; RETURN ON INVESTMENT
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table className="franchise-table">
                <thead>
                  <tr>
                    <th>FRANCHISE FORMAT</th>
                    <th>SPACE &amp; CAPACITY</th>
                    <th>SETUP CAPEX</th>
                    <th>EST. MONTHLY REVENUE</th>
                    <th>EST. PAYBACK</th>
                  </tr>
                </thead>
                <tbody>
                  {franchiseModels.map((m, idx) => (
                    <tr key={idx}>
                      <td className="franchise-model-cell">
                        <div>{m.name}</div>
                        <small style={{ color: '#a8a090', fontSize: '0.78rem', fontWeight: 400 }}>{m.tier}</small>
                      </td>
                      <td>{m.space}</td>
                      <td className="franchise-capex-cell">{m.investment}</td>
                      <td className="franchise-revenue-cell">
                        <span>{m.monthlyRevenue}</span>
                        {m.featured && (
                          <span className="membership-bonus-badge">TOP ROI</span>
                        )}
                      </td>
                      <td className="franchise-payback-cell">{m.payback}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3 FRANCHISE MODEL CARDS */}
          <div className="franchise-models-grid">
            {franchiseModels.map((m, idx) => (
              <div key={idx} className={`franchise-model-card ${m.featured ? 'featured' : ''}`}>
                {m.featured && (
                  <span className="franchise-featured-badge">MOST POPULAR ROI MODEL</span>
                )}
                <span className="franchise-model-tier">{m.tier}</span>
                <h3 className="franchise-model-name">{m.name}</h3>
                <div className="franchise-model-space">{m.space}</div>

                <div className="franchise-financial-pill">
                  <div className="franchise-financial-item">
                    <div className="franchise-financial-label">Setup Capex</div>
                    <div className="franchise-financial-val">{m.investment}</div>
                  </div>
                  <div className="franchise-financial-item" style={{ textAlign: 'right' }}>
                    <div className="franchise-financial-label">Est. Payback</div>
                    <div className="franchise-financial-val franchise-financial-val-gold">{m.payback}</div>
                  </div>
                </div>

                <ul className="franchise-features-list">
                  {m.features.map((f, fIdx) => (
                    <li key={fIdx}>
                      <span className="franchise-check-icon">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="franchise-card-btns">
                  <a 
                    href="#franchise-form" 
                    onClick={() => setFormData({ ...formData, model: `${m.name} (${m.space.split('•')[0].trim()})` })}
                    className="btn btn-primary" 
                    style={{ width: '100%', textAlign: 'center', borderRadius: '30px', padding: '14px 20px' }}
                  >
                    Apply for {m.name.split(' ')[0]} Model →
                  </a>
                  <a 
                    href={`https://wa.me/919344781164?text=${encodeURIComponent(`Hi Diosa Spa, I am interested in exploring the ${m.name} (${m.tier}) franchise model.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa-sm"
                    style={{ justifyContent: 'center' }}
                  >
                    <span>💬 WhatsApp Quick Inquiry</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* WHY DIOSA REFLEXOLOGY OUTPERFORMS */}
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 36px auto' }}>
            <span className="section-tagline" style={{ color: '#d97706' }}>UNIT ECONOMICS ADVANTAGE</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', color: '#e6be76', margin: '6px 0 10px 0' }}>
              Why This Format Outperforms Traditional Spas
            </h3>
            <p style={{ color: '#a8a090', fontSize: '0.95rem' }}>
              Engineered for commercial efficiency, high client throughput, and resilient recurring revenue streams.
            </p>
          </div>

          <div className="franchise-why-grid">
            <div className="franchise-why-card">
              <div className="franchise-why-icon">✦</div>
              <h4 className="franchise-why-title">Zero Wet-Area Capex</h4>
              <p className="franchise-why-desc">
                No expensive showers, steam generators, or tile leakage risks. Interior buildout is 50% faster with minimal ongoing maintenance.
              </p>
            </div>
            <div className="franchise-why-card">
              <div className="franchise-why-icon">⚡</div>
              <h4 className="franchise-why-title">3x Customer Velocity</h4>
              <p className="franchise-why-desc">
                30 to 60-minute reflexology sessions allow 8–12 turns per recliner daily, delivering 3x higher turnover than single massage rooms.
              </p>
            </div>
            <div className="franchise-why-card">
              <div className="franchise-why-icon">💰</div>
              <h4 className="franchise-why-title">Upfront Membership Liquidity</h4>
              <p className="franchise-why-desc">
                Pre-paid 7-Hour (₹5,000) and 16-Hour (₹10,000) packages secure immediate working capital and long-term customer lock-in.
              </p>
            </div>
            <div className="franchise-why-card">
              <div className="franchise-why-icon">🌿</div>
              <h4 className="franchise-why-title">Certified Master Therapists</h4>
              <p className="franchise-why-desc">
                Sourcing, Indo-Balinese technique training, and ongoing quality audits are fully managed by Diosa Central Spa Academy.
              </p>
            </div>
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
