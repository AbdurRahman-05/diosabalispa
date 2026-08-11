'use client';

import { useState } from 'react';

const branches = [
  {
    city: 'Madurai',
    badge: 'Madurai Sanctuary',
    address: 'Plot no - 17, K.K Nagar, East 1st Cross Street, opp. to Aishwarya silks, near MIOT Hospital, Melur Main Rd, Madurai - 625020.',
    phone: '+91-93447 81164',
    mapUrl: 'https://www.google.com/maps/place/Diosa+Bali+Spa/@9.9377056,78.1461347,17z'
  },
  {
    city: 'Kumbakonam',
    badge: 'Kumbakonam Sanctuary',
    address: 'Cholaa Dynasty Hotel, 2/9, Labour Office Street, Sundaraperumal kovil, Thiruvalanjuli, Kumbakonam - 614208.',
    phone: '+91-80565 54539',
    mapUrl: 'https://www.google.com/maps/place/Diosa+Bali+Spa+(Cholaa+Dynasty)/@10.9418678,79.3140704,17z'
  },
  {
    city: 'Coimbatore',
    badge: 'Coimbatore Sanctuary',
    address: 'No.9, Lakshmi Urshimha Graham, L.N Nagar, Thulasi Garden, Nehru Nagar West, Kalapatti, Coimbatore - 641048.',
    phone: '+91-90250 06428',
    mapUrl: 'https://www.google.com/maps/place/Diosa+Bali+Spa+-+Coimbatore/@11.0647739,77.0284834,983m'
  },
  {
    city: 'Dindigul',
    badge: 'Dindigul Sanctuary',
    address: 'D.no M2/3, RM Colony, 2nd Cross St, Dindigul - 624001.',
    phone: '+91-93447 81164',
    mapUrl: 'https://www.google.com/maps'
  },
  {
    city: 'Pondicherry',
    badge: 'Pondicherry Sanctuary',
    address: 'Grand Serene Hotel, ECR Road, Lawspet, Pondicherry - 605008.',
    phone: '+91-93447 81164',
    mapUrl: 'https://www.google.com/maps'
  }
];

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
              <div style={{ fontSize: '1.8rem', color: 'var(--accent-gold)', marginBottom: '10px' }}>🌐</div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--accent-gold)' }}>Website</h4>
              <a href="https://diosabalispa.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', opacity: 0.85, textDecoration: 'none' }}>www.diosabalispa.in</a>
            </div>

            <div style={{ background: 'var(--bg-secondary)', padding: '25px', borderRadius: '16px', border: '1px solid var(--glass-border)', textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', color: 'var(--accent-gold)', marginBottom: '10px' }}>✉️</div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--accent-gold)' }}>Email Helpline</h4>
              <a href="mailto:diosabalispa@gmail.com" style={{ color: 'var(--text-primary)', opacity: 0.85, textDecoration: 'none' }}>diosabalispa@gmail.com</a>
            </div>

            <div style={{ background: 'var(--bg-secondary)', padding: '25px', borderRadius: '16px', border: '1px solid var(--glass-border)', textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', color: 'var(--accent-gold)', marginBottom: '10px' }}>📞</div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--accent-gold)' }}>Direct Phone</h4>
              <a href="tel:+919344781164" style={{ color: 'var(--text-primary)', opacity: 0.85, textDecoration: 'none' }}>+91 9344781164</a>
            </div>

            <div style={{ background: 'var(--bg-secondary)', padding: '25px', borderRadius: '16px', border: '1px solid var(--glass-border)', textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', color: 'var(--accent-gold)', marginBottom: '10px' }}>🕒</div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--accent-gold)' }}>Sanctuary Hours</h4>
              <span style={{ color: 'var(--text-primary)', opacity: 0.85 }}>Mon – Sun: 8:00 AM – 9:00 PM</span>
            </div>

          </div>
        </div>
      </section>

      {/* BRANCH LOCATIONS */}
      <section style={{ padding: '40px 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <span className="section-tagline">SANCTUARY LOCATIONS</span>
            <h2 className="section-title">Our Branches</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
            {branches.map((b, idx) => (
              <div key={idx} style={{ background: 'var(--bg-secondary)', borderRadius: '18px', padding: '30px', border: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ background: 'rgba(217,191,119,0.15)', color: 'var(--accent-gold-dark)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase' }}>
                    {b.badge}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--accent-gold)', margin: '12px 0 8px 0' }}>{b.city}</h3>
                  <p style={{ fontSize: '0.9rem', opacity: 0.85, lineHeight: 1.6, marginBottom: '20px' }}>{b.address}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '15px' }}>
                  <a href={`tel:${b.phone}`} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '600', fontSize: '0.85rem' }}>
                    📞 {b.phone}
                  </a>
                  <a href={b.mapUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600' }}>
                    Map ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
