'use client';

import './SensoryJourney.css';

const senses = [
  {
    id: 'see',
    num: '01',
    sense: 'SEE',
    title: 'Warm Light & Natural Stone',
    desc: 'Soft amber lamp pools illuminating rough, hand-carved stone walls and deep shadows designed to rest tired eyes and quiet the mind.',
    image: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-1.jpg'
  },
  {
    id: 'feel',
    num: '02',
    sense: 'FEEL',
    title: 'Handcrafted Wood & Oils',
    desc: 'Warm polished timber surfaces, volcanic basalt stones, and synchronized Balinese pressure techniques releasing knotting.',
    image: '/assets/massage_treatment.png'
  },
  {
    id: 'breathe',
    num: '03',
    sense: 'BREATHE',
    title: 'Pure Botanical Aromas',
    desc: 'Exotic infusions of cold-pressed frangipani, sandalwood, lemongrass, and active organic herbs comforting the respiratory system.',
    image: '/assets/organic_botanicals_ai.png'
  },
  {
    id: 'hear',
    num: '04',
    sense: 'HEAR',
    title: 'Underground Stillness',
    desc: 'Subtle soundscapes of trickling hydro-water, Tibetan healing bowls, and complete isolation from street noise and digital distraction.',
    image: 'https://diosabalispa.in/wp-content/uploads/2025/07/Diosa-18.jpg'
  },
  {
    id: 'rest',
    num: '05',
    sense: 'REST',
    title: 'Deep Mind & Body Reset',
    desc: 'A state of effortless parasympathetic rest where your heart rate slows, skin glows, and vitality is fully renewed.',
    image: '/assets/serene_sanctuary_ai.png'
  }
];

export default function SensoryJourney() {
  return (
    <section 
      id="sensory-journey"
      style={{
        background: '#0a0b0a',
        padding: '110px 0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px', position: 'relative' }}>
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '500px',
              height: '180px',
              background: 'radial-gradient(ellipse at center, rgba(217, 119, 6, 0.35) 0%, rgba(212, 175, 55, 0.18) 50%, transparent 75%)',
              filter: 'blur(45px)',
              zIndex: 0,
              pointerEvents: 'none',
              animation: 'headingGlowPulse 6s ease-in-out infinite alternate'
            }}
          />
          <span 
            style={{
              position: 'relative',
              zIndex: 1,
              fontSize: '0.78rem',
              letterSpacing: '0.25em',
              color: '#d97706',
              fontWeight: 700,
              textTransform: 'uppercase',
              display: 'inline-block',
              marginBottom: '12px'
            }}
          >
            IMMERSIVE EXPERIENCE
          </span>
          <h2 
            style={{
              position: 'relative',
              zIndex: 1,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
              color: '#d4af37',
              margin: 0,
              fontWeight: 400,
              textShadow: '0 0 25px rgba(212, 175, 55, 0.4), 0 0 50px rgba(217, 119, 6, 0.25)'
            }}
          >
            A Journey Through the Senses
          </h2>
          <p 
            style={{
              maxWidth: '620px',
              margin: '14px auto 0 auto',
              color: '#a8a090',
              fontSize: '1.05rem',
              lineHeight: 1.7
            }}
          >
            Every touchpoint inside Diosa Bali Spa is calibrated to engage your five senses and slow down inner momentum.
          </p>
        </div>

        {/* 5 UNIFORM EQUAL-SIZED SENSORY BOXES GRID */}
        <div className="sensory-grid">
          {senses.map((s) => (
            <div key={s.id} className="sensory-box">
              <div className="sensory-box-image-wrap">
                <img src={s.image} alt={s.title} className="sensory-box-img" />
                <div className="sensory-box-overlay" />
                <div className="sensory-box-badge">
                  <span className="sensory-num">{s.num}</span>
                  <span className="sensory-sense">{s.sense}</span>
                </div>
              </div>
              <div className="sensory-box-content">
                <h3 className="sensory-box-title">{s.title}</h3>
                <p className="sensory-box-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
