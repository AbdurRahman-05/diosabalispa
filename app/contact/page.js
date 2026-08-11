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

  return (
    <main style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      {/* PAGE HERO */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)', textAlign: 'center', paddingTop: '160px', paddingBottom: '40px' }}>
        <div className="container">
          <span className="section-tagline">FEEL THE DIFFERENCE</span>
          <h1 className="section-title" style={{ fontSize: '3.8rem', marginBottom: '12px' }}>Get In Touch With Us</h1>
          <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto', opacity: 0.85 }}>
            Reach out to any of our luxury Indo-Bali sanctuaries across Tamil Nadu &amp; Pondicherry.
          </p>
        </div>
      </section>

      {/* QUICK INFO CARDS */}
      <section style={{ padding: '30px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            
            <div style={{ background: 'var(--bg-secondary)', padding: '25px', borderRadius: '16px', border: '1px solid var(--glass-border)', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', margin: '0 auto 14px auto', borderRadius: '50%', background: 'rgba(217,191,119,0.15)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--accent-gold)' }}>Website</h4>
              <a href="https://diosabalispa.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', opacity: 0.85, textDecoration: 'none' }}>www.diosabalispa.in</a>
            </div>

            <div style={{ background: 'var(--bg-secondary)', padding: '25px', borderRadius: '16px', border: '1px solid var(--glass-border)', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', margin: '0 auto 14px auto', borderRadius: '50%', background: 'rgba(217,191,119,0.15)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--accent-gold)' }}>Email Helpline</h4>
              <a href="mailto:diosabalispa@gmail.com" style={{ color: 'var(--text-primary)', opacity: 0.85, textDecoration: 'none' }}>diosabalispa@gmail.com</a>
            </div>

            <div style={{ background: 'var(--bg-secondary)', padding: '25px', borderRadius: '16px', border: '1px solid var(--glass-border)', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', margin: '0 auto 14px auto', borderRadius: '50%', background: 'rgba(217,191,119,0.15)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--accent-gold)' }}>Direct Phone</h4>
              <a href="tel:+919344781164" style={{ color: 'var(--text-primary)', opacity: 0.85, textDecoration: 'none' }}>+91 9344781164</a>
            </div>

            <div style={{ background: 'var(--bg-secondary)', padding: '25px', borderRadius: '16px', border: '1px solid var(--glass-border)', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', margin: '0 auto 14px auto', borderRadius: '50%', background: 'rgba(217,191,119,0.15)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--accent-gold)' }}>Sanctuary Hours</h4>
              <span style={{ color: 'var(--text-primary)', opacity: 0.85 }}>Mon – Sun: 8:00 AM – 9:00 PM</span>
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE BRANCH MAP */}
      <BranchMap />

      {/* INQUIRY FORM */}
      <section style={{ padding: '40px 0 100px 0' }}>
        <div className="container">
          <div style={{ background: 'var(--bg-secondary)', borderRadius: '24px', padding: '45px', border: '1px solid var(--glass-border)', maxWidth: '750px', margin: '0 auto', boxShadow: 'var(--shadow-medium)' }}>
            <div className="text-center" style={{ marginBottom: '30px' }}>
              <span className="section-tagline">SEND AN INQUIRY</span>
              <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Write to Our Concierge</h2>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                  <input 
                    type="text" 
                    placeholder="Your Full Name *" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ padding: '14px', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--bg-primary)' }}
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address *" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ padding: '14px', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--bg-primary)' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ padding: '14px', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--bg-primary)' }}
                  />
                  <select 
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    style={{ padding: '14px', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--bg-primary)' }}
                  >
                    <option value="Madurai">Madurai Branch</option>
                    <option value="Kumbakonam">Kumbakonam Branch</option>
                    <option value="Coimbatore">Coimbatore Branch</option>
                    <option value="Dindigul">Dindigul Branch</option>
                    <option value="Pondicherry">Pondicherry Branch</option>
                  </select>
                </div>

                <textarea 
                  rows={4} 
                  placeholder="How can we assist your sanctuary experience?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ padding: '14px', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--bg-primary)', resize: 'vertical' }}
                ></textarea>

                <button type="submit" style={{ padding: '16px', background: 'var(--accent-gold)', color: '#1e2420', border: 'none', borderRadius: '30px', fontWeight: '700', fontSize: '1.05rem', cursor: 'pointer', textTransform: 'uppercase' }}>
                  Send Message
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '30px 0' }}>
                <div style={{ fontSize: '3rem', color: 'var(--accent-gold)', marginBottom: '15px' }}>🌿</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-gold)', fontSize: '2rem', marginBottom: '10px' }}>Message Received</h3>
                <p style={{ opacity: 0.85, maxWidth: '500px', margin: '0 auto' }}>
                  Thank you, {formData.name}. Our spa concierge at the {formData.branch} sanctuary will connect with you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
