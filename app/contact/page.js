'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const BranchMap = dynamic(() => import('../components/BranchMap'), {
  ssr: false,
  loading: () => (
    <div style={{ padding: '60px 0', textAlign: 'center', color: 'var(--accent-gold)' }}>
      Loading Sanctuary Map...
    </div>
  )
});

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', branch: 'Madurai', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  const contactInfos = [
    {
      title: 'Direct Phone',
      value: '+91 93447 81164',
      link: 'tel:+919344781164',
      subtext: 'Available 8:00 AM – 9:00 PM daily',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      )
    },
    {
      title: 'Email Helpline',
      value: 'diosabalispa@gmail.com',
      link: 'mailto:diosabalispa@gmail.com',
      subtext: 'We reply within 24 hours',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    },
    {
      title: 'Official Website',
      value: 'www.diosabalispa.in',
      link: 'https://diosabalispa.in',
      target: '_blank',
      subtext: 'Explore services & packages',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
    },
    {
      title: 'Sanctuary Hours',
      value: 'Mon – Sun: 8:00 AM – 9:00 PM',
      link: null,
      subtext: 'Open all days of the week',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    }
  ];

  return (
    <main style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      {/* PAGE HERO */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)', textAlign: 'center', paddingTop: '150px', paddingBottom: '30px' }}>
        <div className="container">
          <span className="section-tagline">FEEL THE DIFFERENCE</span>
          <h1 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '12px' }}>Get In Touch With Us</h1>
          <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto', opacity: 0.85 }}>
            Reach out to any of our luxury Indo-Bali sanctuaries across Tamil Nadu &amp; Pondicherry.
          </p>
        </div>
      </section>

      {/* FIRST SECTION: 4 CONTACT INFOS (LEFT) + CONTACT FORM (RIGHT) */}
      <section style={{ padding: '20px 0 60px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'stretch'
          }}>
            
            {/* LEFT SIDE: 4 CONTACT INFOS */}
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ marginBottom: '24px', minHeight: '90px' }}>
                <span className="section-tagline">REACH OUR CONCIERGE</span>
                <h2 className="section-title" style={{ fontSize: '2.2rem', margin: '6px 0 8px 0' }}>Contact Details</h2>
                <p style={{ opacity: 0.8, fontSize: '0.9rem', lineHeight: 1.5 }}>
                  Have questions about our authentic Balinese therapies or membership benefits? Connect with our dedicated support team.
                </p>
              </div>

              <div style={{ 
                flex: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                gap: '16px' 
              }}>
                {contactInfos.map((info, idx) => (
                  <div 
                    key={idx}
                    style={{
                      background: 'var(--bg-secondary)',
                      padding: '20px 24px',
                      borderRadius: '18px',
                      border: '1px solid var(--glass-border)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                      transition: 'all 0.3s ease',
                      flex: 1
                    }}
                  >
                    <div style={{
                      width: '48px',
                      height: '48px',
                      flexShrink: 0,
                      borderRadius: '14px',
                      background: 'rgba(217,191,119,0.12)',
                      border: '1px solid var(--glass-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-gold)'
                    }}>
                      {info.icon}
                    </div>
                    <div style={{ flexGrow: 1 }}>
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent-gold-dark)', fontWeight: '700' }}>
                        {info.title}
                      </span>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          target={info.target || '_self'} 
                          rel="noopener noreferrer"
                          style={{ 
                            display: 'block', 
                            fontFamily: 'var(--font-heading)', 
                            fontSize: '1.15rem', 
                            color: 'var(--accent-gold)', 
                            textDecoration: 'none',
                            margin: '1px 0 2px 0',
                            fontWeight: '600'
                          }}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div style={{ 
                          fontFamily: 'var(--font-heading)', 
                          fontSize: '1.1rem', 
                          color: 'var(--accent-gold)', 
                          margin: '1px 0 2px 0',
                          fontWeight: '600'
                        }}>
                          {info.value}
                        </div>
                      )}
                      <span style={{ fontSize: '0.78rem', opacity: 0.7, color: 'var(--text-primary)' }}>
                        {info.subtext}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: CONTACT FORM */}
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ marginBottom: '24px', minHeight: '90px' }}>
                <span className="section-tagline">SEND AN INQUIRY</span>
                <h2 className="section-title" style={{ fontSize: '2.2rem', margin: '6px 0 8px 0' }}>Write to Our Concierge</h2>
                <p style={{ opacity: 0.8, fontSize: '0.9rem', lineHeight: 1.5 }}>
                  Fill in your details below and select your preferred branch to submit an inquiry to our team.
                </p>
              </div>

              <div style={{
                flex: 1,
                background: 'var(--bg-secondary)',
                borderRadius: '24px',
                padding: '32px 36px',
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--shadow-medium)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                {!submitted ? (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px', color: 'var(--accent-gold-dark)', fontWeight: '600' }}>
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        placeholder="e.g. Rajesh Kumar" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{ 
                          width: '100%',
                          padding: '13px 16px', 
                          borderRadius: '12px', 
                          border: '1px solid var(--glass-border)', 
                          background: 'var(--bg-primary)',
                          color: 'var(--text-primary)',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px', color: 'var(--accent-gold-dark)', fontWeight: '600' }}>
                          Email Address *
                        </label>
                        <input 
                          type="email" 
                          placeholder="e.g. rajesh@example.com" 
                          required 
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={{ 
                            width: '100%',
                            padding: '13px 16px', 
                            borderRadius: '12px', 
                            border: '1px solid var(--glass-border)', 
                            background: 'var(--bg-primary)',
                            color: 'var(--text-primary)',
                            outline: 'none',
                            boxSizing: 'border-box'
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px', color: 'var(--accent-gold-dark)', fontWeight: '600' }}>
                          Phone Number
                        </label>
                        <input 
                          type="tel" 
                          placeholder="e.g. +91 98765 43210" 
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          style={{ 
                            width: '100%',
                            padding: '13px 16px', 
                            borderRadius: '12px', 
                            border: '1px solid var(--glass-border)', 
                            background: 'var(--bg-primary)',
                            color: 'var(--text-primary)',
                            outline: 'none',
                            boxSizing: 'border-box'
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px', color: 'var(--accent-gold-dark)', fontWeight: '600' }}>
                        Preferred Sanctuary Branch
                      </label>
                      <select 
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        style={{ 
                          width: '100%',
                          padding: '13px 16px', 
                          borderRadius: '12px', 
                          border: '1px solid var(--glass-border)', 
                          background: 'var(--bg-primary)',
                          color: 'var(--text-primary)',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      >
                        <option value="Madurai">Madurai Sanctuary</option>
                        <option value="Kumbakonam">Kumbakonam Sanctuary</option>
                        <option value="Coimbatore">Coimbatore Sanctuary</option>
                        <option value="Dindigul">Dindigul Sanctuary</option>
                        <option value="Pondicherry">Pondicherry Sanctuary</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px', color: 'var(--accent-gold-dark)', fontWeight: '600' }}>
                        Your Message
                      </label>
                      <textarea 
                        rows={3} 
                        placeholder="Tell us about your requested therapy, date preferences, or general questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{ 
                          width: '100%',
                          padding: '13px 16px', 
                          borderRadius: '12px', 
                          border: '1px solid var(--glass-border)', 
                          background: 'var(--bg-primary)',
                          color: 'var(--text-primary)',
                          outline: 'none',
                          resize: 'vertical',
                          boxSizing: 'border-box'
                        }}
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      style={{ 
                        marginTop: '4px',
                        padding: '15px', 
                        background: 'var(--accent-gold)', 
                        color: '#1e2420', 
                        border: 'none', 
                        borderRadius: '30px', 
                        fontWeight: '700', 
                        fontSize: '0.95rem', 
                        cursor: 'pointer', 
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        boxShadow: '0 4px 18px rgba(217,191,119,0.3)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Send Inquiry
                    </button>
                  </form>
                ) : (
                  <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                    <div style={{ fontSize: '3.5rem', color: 'var(--accent-gold)', marginBottom: '15px' }}>🌿</div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-gold)', fontSize: '2rem', marginBottom: '10px' }}>
                      Message Received
                    </h3>
                    <p style={{ opacity: 0.85, maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>
                      Thank you, <strong style={{ color: 'var(--accent-gold)' }}>{formData.name}</strong>. Our concierge at the {formData.branch} sanctuary will get back to you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', branch: 'Madurai', message: '' });
                      }}
                      style={{
                        marginTop: '20px',
                        padding: '10px 24px',
                        borderRadius: '20px',
                        border: '1px solid var(--accent-gold)',
                        background: 'transparent',
                        color: 'var(--accent-gold)',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECOND SECTION: MAPS */}
      <section style={{ padding: '20px 0 80px 0', borderTop: '1px solid var(--glass-border)' }}>
        <BranchMap />
      </section>
    </main>
  );
}

