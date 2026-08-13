'use client';

import { useState } from 'react';

// Professional Luxury SVG Icons
const SearchIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const AlertIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

const SparkleIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, display: 'inline-block', verticalAlign: '-2px' }}>
    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14"/>
  </svg>
);

const LotusStarIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3c-2.5 3-4 6-4 9 0 3.5 2.5 6 6 6s6-2.5 6-6c0-3-1.5-6-4-9z"/>
    <path d="M12 21c-5 0-9-3-9-7 0-3 3-6.5 6-8.5"/>
    <path d="M12 21c5 0 9-3 9-7 0-3-3-6.5-6-8.5"/>
  </svg>
);

const WhatsappIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const massageTypes = [
  { id: 'balinese', name: 'Traditional Balinese Massage', duration: '60 / 90 Mins', category: 'Balinese Signature', desc: 'Uses acupressure, skin rolling, friction, and percussion to relieve muscle pain and improve blood circulation.' },
  { id: 'bali-aroma', name: 'Bali Aroma Massage', duration: '60 / 90 Mins', category: 'Aromatherapy', desc: 'Promotes skin suppleness, pain relief, stress reduction, and deep muscle relaxation.' },
  { id: 'bali-thai', name: 'Bali Thai Massage', duration: '60 / 90 / 120 Mins', category: 'Eastern Bodywork', desc: 'Treats body, mind, and spirit, enhancing range of motion and reducing back pain.' },
  { id: 'four-hands', name: 'Four Hands Massage', duration: '60 / 90 Mins', category: 'Signature Dual', desc: 'Two therapists working in harmony to restore balance and relieve deep fatigue.' },
  { id: 'deep-tissue', name: 'Deep Tissue Massage', duration: '60 / 90 Mins', category: 'Therapeutic Relief', desc: 'Targeted deep muscle manipulation designed to release chronic knotting and tension.' },
  { id: 'trigger-point', name: 'Trigger Point Massage', duration: '60 Mins', category: 'Therapeutic Relief', desc: 'Treats painful muscle knots to alleviate pain and improve posture.' },
  { id: 'shiatsu', name: 'Shiatsu Massage', duration: '60 / 90 Mins', category: 'Eastern Bodywork', desc: 'Finger and palm pressure promoting energy flow, improving health, skin, and fatigue.' },
  { id: 'swedish', name: 'Swedish Massage', duration: '60 / 90 Mins', category: 'Classic Healing', desc: 'Long strokes, kneading, and friction promoting circulation and flexibility.' },
  { id: 'hot-oil', name: 'Hot Oil Massage', duration: '60 / 90 Mins', category: 'Thermal Therapy', desc: 'Relaxes and nourishes body tone, promoting deep sleep and skin rejuvenation.' },
  { id: 'hot-stone', name: 'Hot Stone Massage', duration: '75 / 90 Mins', category: 'Thermal Therapy', desc: 'Heated volcanic stones ease muscle tension, reduce stress, and boost immunity.' },
  { id: 'bamboo', name: 'Bamboo Massage', duration: '60 / 90 Mins', category: 'Therapeutic Relief', desc: 'Smooth bamboo sticks warm muscles, stretch fascia, and improve lymphatic drainage.' },
  { id: 'herbal-potli', name: 'Herbal Potli Massage', duration: '60 / 90 Mins', category: 'Traditional Thai', desc: 'Hot compress of medicinal herbs to soothe muscles and relieve chronic pain.' },
  { id: 'candlelight', name: 'Candlelight Massage', duration: '60 Mins', category: 'Relaxation & Mind', desc: 'Warm botanical candle oil applied in a calming room to ease deep tension.' },
  { id: 'sports', name: 'Sports Massage', duration: '60 / 90 Mins', category: 'Therapeutic Relief', desc: 'Soft tissue manipulation to improve performance and post-workout recovery.' },
  { id: 'pregnancy', name: 'Pregnancy Massage', duration: '60 Mins', category: 'Gentle Care', desc: 'Hands-on treatment designed to support mother-to-be, alleviating back discomfort.' },
  { id: 'tai-chi', name: 'Tai-chi Massage', duration: '60 / 90 Mins', category: 'Eastern Bodywork', desc: 'Barefoot & hand massage reducing chronic pain, improving flexibility and mood.' },
  { id: 'chocolate', name: 'Chocolate Massage', duration: '60 / 90 Mins', category: 'Nourishing Specialty', desc: 'Deep nourishing therapy using real chocolate oil to stimulate endorphins.' },
  { id: 'soft-touch', name: 'Soft Touch Massage', duration: '60 Mins', category: 'Relaxation & Mind', desc: 'Soft touching to relieve stress, improve sleep, and release blocked energy.' },
  { id: 'couple', name: 'Couple Massage', duration: '60 / 90 Mins', category: 'Couples Sanctuary', desc: 'Shared side-by-side therapy experience creating harmony and closer bonds.' },
  { id: 'bali-ayurvedic', name: 'Bali Ayurvedic Massage', duration: '60 / 90 Mins', category: 'Ayurvedic Healing', desc: 'Organic oil blends infused with Ayurvedic herbs for detox and nervous system calm.' },
  { id: 'honey', name: 'Honey Massage', duration: '60 Mins', category: 'Nourishing Specialty', desc: 'Natural honey therapy clearing skin, warming tissue, and promoting cell repair.' },
  { id: 'relaxation', name: 'Relaxation Massage', duration: '60 / 90 Mins', category: 'Classic Healing', desc: 'Gentle pressure lowering heart rate, soothing muscle tension, and restoring energy.' },
  { id: 'dry-massage', name: 'Dry Massage', duration: '60 Mins', category: 'Non-Oil Bodywork', desc: 'Deep pressing & rhythmic stretching without oil to balance internal energy.' },
  { id: 'cream-massage', name: 'Cream Massage', duration: '60 Mins', category: 'Skincare & Moisture', desc: 'Soothing cream treatment counteracting premature aging and dry skin.' },
  { id: 'ghee-massage', name: "Cow's Ghee Massage", duration: '60 Mins', category: 'Ayurvedic Healing', desc: 'Omega fatty acids & antioxidants transforming dull skin into glowing health.' },
  { id: 'olive-oil', name: 'Olive Oil Massage', duration: '60 Mins', category: 'Skincare & Moisture', desc: 'Rich in Vitamin E, locking in moisture and relaxing tired muscles.' },
  { id: 'almond-oil', name: 'Almond Oil Massage', duration: '60 Mins', category: 'Skincare & Moisture', desc: 'Deep moisturizer with antioxidants soothing sensitive skin and aging.' },
  { id: 'coconut-oil', name: 'Coconut Oil Massage', duration: '60 Mins', category: 'Skincare & Moisture', desc: 'Pure coconut oil trapping hydration, preventing infections, and softening skin.' },
  { id: 'sesame-oil', name: 'Sesame Oil Massage', duration: '60 Mins', category: 'Ayurvedic Healing', desc: 'Antimicrobial properties aiding cell repair, reducing body heat, and restoring skin.' },
  { id: 'mustard-oil', name: 'Mustard Oil Massage', duration: '60 Mins', category: 'Thermal Therapy', desc: 'Warming oil improving blood circulation, strengthening muscles, and reducing pain.' },
  { id: 'head-shoulder', name: 'Head & Shoulder Massage', duration: '45 / 60 Mins', category: 'Express Treatments', desc: 'Aromatic head & shoulder pressure reducing migraines, eye strain, and stress.' },
  { id: 'face-neck', name: 'Face & Neck Massage', duration: '60 Mins', category: 'Skincare Rituals', desc: 'Lymphatic drainage face massage reducing lines and promoting youthful glow.' },
  { id: 'full-hand', name: "Full Hand's Massage", duration: '45 Mins', category: 'Express Treatments', desc: 'Acupressure & friction on hands to relieve tension and restore balance.' },
  { id: 'chest-abdomen', name: 'Chest & Abdomen Massage', duration: '45 Mins', category: 'Express Treatments', desc: 'Kneading & skin rolling supporting digestion and strengthening abdomen posture.' },
  { id: 'full-back', name: 'Full Back Massage', duration: '45 / 60 Mins', category: 'Express Treatments', desc: 'Focuses on spinal alignment, relieving back tightness, anxiety, and poor posture.' },
  { id: 'foot-leg', name: 'Foot & Leg Massage', duration: '45 / 60 Mins', category: 'Reflexology & Feet', desc: 'Leg circulation stretching, reducing swelling, pain, and promoting recovery.' },
  { id: 'foot-reflexology', name: 'Foot Reflexology', duration: '45 / 60 Mins', category: 'Reflexology & Feet', desc: 'Pressure points linking foot zones to body organs for holistic internal healing.' },
  { id: 'hand-reflexology', name: 'Hand Reflexology', duration: '45 Mins', category: 'Reflexology & Feet', desc: 'Hand reflex points alleviating headaches, back pain, and shoulder pressure.' },
  { id: 'healing-therapies', name: 'Healing Therapies (Abhyangam & Sound)', duration: '90 / 120 Mins', category: 'Holistic Mind', desc: 'Abhyangam, Herbal Powder, and Tibetan Healing Sound Therapy.' },
  { id: 'body-wrap', name: 'Body Wrap Rituals (Spirulina & Mud)', duration: '60 / 90 Mins', category: 'Body Wraps & Scrubs', desc: 'Spirulina, Seaweed Mud, Sandalwood & Clay Wraps for radiant skin glow.' },
  { id: 'body-polish', name: 'Body Polish & Treatment', duration: '60 / 90 Mins', category: 'Body Wraps & Scrubs', desc: 'Bali Coconut Body Polish and Full Body Facial for deep cleansing.' },
  { id: 'wellness-facial', name: 'Wellness Spa Facial Rituals', duration: '60 / 90 Mins', category: 'Skincare Rituals', desc: 'Aromatherapy, Red Wine, Thai Whitening & Hot Stone Facial treatments.' },
  { id: 'spa-pedicure', name: 'Spa Pedicure Rituals', duration: '60 Mins', category: 'Reflexology & Feet', desc: 'Peppermint Chiller, Citrus, Crystal & Hot Stone Spa Pedicures.' },
  { id: 'rejuvenating-bath', name: 'Rejuvenating Hydro Bath Rituals', duration: '45 / 60 Mins', category: 'Hydro Therapy Baths', desc: 'Steam Bath, Aroma Hot Tub, Flower Bath & Bali Herbal Baths.' }
];

const timeSlots = [
  '09:00 AM', 
  '10:30 AM', 
  '12:00 PM', 
  '01:30 PM', 
  '03:00 PM', 
  '04:30 PM', 
  '06:00 PM', 
  '07:30 PM'
];

const branches = [
  { id: 'madurai', name: 'Madurai Sanctuary', address: 'KK Nagar, Madurai, Tamil Nadu' },
  { id: 'coimbatore', name: 'Coimbatore Sanctuary', address: 'Race Course Rd, Coimbatore' },
  { id: 'kumbakonam', name: 'Kumbakonam Sanctuary', address: 'Town Hall Rd, Kumbakonam' },
  { id: 'dindigul', name: 'Dindigul Sanctuary', address: 'Collectorate Complex Rd, Dindigul' },
  { id: 'pondicherry', name: 'Pondicherry Sanctuary', address: 'Heritage Town, Pondicherry' }
];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Form State
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [selectedMassage, setSelectedMassage] = useState(massageTypes[0]);
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [selectedTime, setSelectedTime] = useState(timeSlots[2]); // 12:00 PM
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);
  const [adminMessage, setAdminMessage] = useState('');
  const [validationError, setValidationError] = useState('');

  // Modal / Confirmation state
  const [isVoucherOpen, setIsVoucherOpen] = useState(false);

  const categories = ['All', ...new Set(massageTypes.map(m => m.category))];

  const filteredMassages = massageTypes.filter(m => {
    const matchesCat = selectedCategory === 'All' || m.category === selectedCategory;
    const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          m.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleNextStep = () => {
    setValidationError('');
    if (step < 4) setStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setValidationError('');
    if (step > 1) setStep(prev => prev - 1);
  };

  const buildWhatsappMessage = () => {
    return encodeURIComponent(
      `*NEW DIOSA BALI SPA BOOKING REQUEST*\n` +
      `-------------------------------------\n` +
      `👤 *Guest Name:* ${guestName}\n` +
      `📞 *Mobile No:* ${guestPhone}\n` +
      `✉️ *Email:* ${guestEmail}\n` +
      `💆 *Massage Type:* ${selectedMassage.name} (${selectedMassage.duration})\n` +
      `📍 *Branch:* ${selectedBranch.name}\n` +
      `📅 *Date:* ${selectedDate}\n` +
      `⏰ *Slot Timing:* ${selectedTime}\n` +
      `📝 *Message to Admin:* ${adminMessage ? adminMessage : 'None'}\n` +
      `-------------------------------------\n` +
      `Sent via Diosa Spa Experience Booking Portal`
    );
  };

  const handleBookNowSubmit = (e) => {
    if (e) e.preventDefault();
    if (!guestName.trim()) {
      setValidationError('Please enter your Full Name.');
      setStep(3);
      return;
    }
    if (!guestPhone.trim()) {
      setValidationError('Please enter your Mobile Number.');
      setStep(3);
      return;
    }
    if (!guestEmail.trim()) {
      setValidationError('Please enter your Email Address.');
      setStep(3);
      return;
    }

    setValidationError('');
    setIsVoucherOpen(true);

    const adminPhoneNumber = '919344781164'; // Official Diosa Spa Admin Contact
    const waUrl = `https://wa.me/${adminPhoneNumber}?text=${buildWhatsappMessage()}`;
    window.open(waUrl, '_blank');
  };

  return (
    <main style={{ background: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)' }}>
      
      {/* HERO SECTION */}
      <section style={{ 
        background: 'radial-gradient(ellipse at top, rgba(217,191,119,0.15) 0%, var(--bg-primary) 70%)', 
        textAlign: 'center', 
        paddingTop: '160px', 
        paddingBottom: '40px',
        position: 'relative' 
      }}>
        <div className="container">
          <span className="section-tagline" style={{ letterSpacing: '3px', fontSize: '0.85rem' }}>
            APPOINTMENT &amp; CONCIERGE RESERVATION
          </span>
          <h1 className="section-title" style={{ fontSize: '3.2rem', marginBottom: '14px' }}>
            Book Your Spa Experience
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto', opacity: 0.88, lineHeight: 1.6 }}>
            Select your preferred therapy from our complete 44 spa rituals, choose your date &amp; slot timing, enter your contact details, and send your request directly to the Admin.
          </p>
        </div>
      </section>

      {/* MAIN BOOKING FORM CONTAINER */}
      <section style={{ padding: '20px 0 100px 0' }}>
        <div className="container">
          <div style={{ 
            background: 'var(--bg-secondary)', 
            borderRadius: '28px', 
            padding: '40px 30px', 
            border: '1px solid var(--glass-border)', 
            boxShadow: '0 20px 50px rgba(0,0,0,0.35)', 
            maxWidth: '1060px', 
            margin: '0 auto' 
          }}>
            
            {/* STEP PROGRESS NAVIGATION */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(4, 1fr)', 
              gap: '10px', 
              marginBottom: '35px', 
              borderBottom: '1px solid var(--glass-border)', 
              paddingBottom: '25px' 
            }}>
              {[
                { num: 1, label: '1. Massage Type' },
                { num: 2, label: '2. Slot Timing' },
                { num: 3, label: '3. Contact Details' },
                { num: 4, label: '4. Check Details & Book Now' }
              ].map(s => (
                <button
                  key={s.num}
                  onClick={() => setStep(s.num)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '12px 6px',
                    borderRadius: '16px',
                    border: step === s.num ? '1.5px solid var(--accent-gold)' : '1px solid transparent',
                    background: step === s.num ? 'rgba(217, 191, 119, 0.12)' : 'transparent',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '50%', 
                    background: step >= s.num ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', 
                    color: step >= s.num ? '#1e2420' : '#888', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontWeight: '700',
                    fontSize: '0.9rem'
                  }}>
                    {s.num}
                  </div>
                  <span style={{ 
                    fontWeight: step === s.num ? '700' : '400', 
                    fontSize: '0.82rem',
                    color: step === s.num ? 'var(--accent-gold)' : 'var(--text-primary)',
                    textAlign: 'center'
                  }}>
                    {s.label.substring(3)}
                  </span>
                </button>
              ))}
            </div>

            {/* VALIDATION ERROR DISPLAY */}
            {validationError && (
              <div style={{
                background: 'rgba(235, 87, 87, 0.15)',
                border: '1px solid #eb5757',
                color: '#ff8a8a',
                padding: '14px 20px',
                borderRadius: '14px',
                marginBottom: '25px',
                fontSize: '0.92rem',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <AlertIcon />
                <span>{validationError}</span>
              </div>
            )}

            {/* STEP 1: CHOOSE MASSAGE TYPE */}
            {step === 1 && (
              <div>
                <div style={{ marginBottom: '25px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--accent-gold-dark)', fontWeight: '700' }}>
                      STEP 1 OF 4 — ALL 44 MASSAGES &amp; RITUALS
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.1rem', color: 'var(--accent-gold)', margin: '4px 0 8px 0' }}>
                      Select Your Massage Ritual
                    </h3>
                    <p style={{ opacity: 0.8, fontSize: '0.92rem' }}>
                      Browse through all 44 authentic therapies from our Therapy &amp; Rituals collection.
                    </p>
                  </div>

                  {/* SEARCH AND CATEGORY FILTER */}
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <div style={{ position: 'relative', flex: '1 1 260px' }}>
                      <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', pointerEvents: 'none' }}>
                        <SearchIcon />
                      </span>
                      <input 
                        type="text"
                        placeholder="Search massage by name or benefit..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 18px 12px 42px',
                          borderRadius: '20px',
                          border: '1px solid var(--glass-border)',
                          background: 'var(--bg-primary)',
                          color: 'var(--text-primary)',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      style={{
                        padding: '12px 18px',
                        borderRadius: '20px',
                        border: '1px solid var(--glass-border)',
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat === 'All' ? 'All Categories (44)' : cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', maxHeight: '550px', overflowY: 'auto', paddingRight: '6px' }}>
                  {filteredMassages.map(m => {
                    const isSelected = selectedMassage.id === m.id;
                    return (
                      <div
                        key={m.id}
                        onClick={() => setSelectedMassage(m)}
                        style={{
                          padding: '20px',
                          borderRadius: '18px',
                          border: isSelected ? '2px solid var(--accent-gold)' : '1px solid var(--glass-border)',
                          background: isSelected ? 'rgba(217, 191, 119, 0.12)' : 'var(--bg-primary)',
                          boxShadow: isSelected ? '0 8px 25px rgba(217, 191, 119, 0.15)' : 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                            <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', background: 'rgba(217, 191, 119, 0.2)', color: 'var(--accent-gold)', padding: '3px 10px', borderRadius: '12px', fontWeight: '600' }}>
                              {m.category}
                            </span>
                            <span style={{ fontSize: '0.78rem', opacity: 0.85, color: 'var(--accent-gold)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                              <ClockIcon /> {m.duration}
                            </span>
                          </div>

                          <h4 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', marginBottom: '6px' }}>
                            {m.name}
                          </h4>

                          <p style={{ fontSize: '0.84rem', opacity: 0.75, lineHeight: 1.4, marginBottom: '10px' }}>
                            {m.desc}
                          </p>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--glass-border)', paddingTop: '10px', marginTop: '8px' }}>
                          <span style={{
                            width: '22px',
                            height: '22px',
                            borderRadius: '50%',
                            border: isSelected ? '6px solid var(--accent-gold)' : '2px solid rgba(255,255,255,0.3)',
                            background: isSelected ? '#1e2420' : 'transparent',
                            display: 'inline-block'
                          }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: CHOOSE SLOT TIMING & BRANCH */}
            {step === 2 && (
              <div>
                <div style={{ marginBottom: '25px' }}>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--accent-gold-dark)', fontWeight: '700' }}>
                    STEP 2 OF 4
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.1rem', color: 'var(--accent-gold)', margin: '4px 0 8px 0' }}>
                    Choose Slot Timing &amp; Branch
                  </h3>
                  <p style={{ opacity: 0.8, fontSize: '0.92rem' }}>
                    Pick your preferred date, convenient time slot, and sanctuary branch.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                  
                  {/* Left Column: Date & Branch */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', color: 'var(--accent-gold-dark)', fontWeight: '700' }}>
                        1. Select Preferred Date *
                      </label>
                      <input 
                        type="date"
                        value={selectedDate}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '14px',
                          border: '1px solid var(--glass-border)',
                          background: 'var(--bg-primary)',
                          color: 'var(--text-primary)',
                          fontSize: '1rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', color: 'var(--accent-gold-dark)', fontWeight: '700' }}>
                        2. Select Branch Location *
                      </label>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {branches.map(b => (
                          <div
                            key={b.id}
                            onClick={() => setSelectedBranch(b)}
                            style={{
                              padding: '12px 16px',
                              borderRadius: '12px',
                              border: selectedBranch.id === b.id ? '2px solid var(--accent-gold)' : '1px solid var(--glass-border)',
                              background: selectedBranch.id === b.id ? 'rgba(217, 191, 119, 0.12)' : 'var(--bg-primary)',
                              cursor: 'pointer',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center'
                            }}
                          >
                            <div>
                              <div style={{ fontWeight: '600', fontSize: '0.95rem', color: selectedBranch.id === b.id ? 'var(--accent-gold)' : 'var(--text-primary)' }}>
                                {b.name}
                              </div>
                              <div style={{ fontSize: '0.78rem', opacity: 0.7 }}>{b.address}</div>
                            </div>
                            {selectedBranch.id === b.id && <span style={{ color: 'var(--accent-gold)', display: 'flex', alignItems: 'center' }}><CheckIcon /></span>}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Time Slots */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px', color: 'var(--accent-gold-dark)', fontWeight: '700' }}>
                      3. Available Slot Timing *
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                      {timeSlots.map(slot => {
                        const isSelected = selectedTime === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            style={{
                              padding: '16px 12px',
                              borderRadius: '14px',
                              border: isSelected ? '2px solid var(--accent-gold)' : '1px solid var(--glass-border)',
                              background: isSelected ? 'var(--accent-gold)' : 'var(--bg-primary)',
                              color: isSelected ? '#1e2420' : 'var(--text-primary)',
                              fontWeight: isSelected ? '700' : '500',
                              fontSize: '0.95rem',
                              cursor: 'pointer',
                              transition: 'all 0.25s ease',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '8px'
                            }}
                          >
                            <ClockIcon />
                            <span>{slot}</span>
                          </button>
                        );
                      })}
                    </div>
                    <div style={{ marginTop: '16px', padding: '12px', borderRadius: '12px', background: 'rgba(217, 191, 119, 0.08)', fontSize: '0.8rem', opacity: 0.85, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                      <SparkleIcon />
                      <span>Selected Slot: <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong> ({selectedBranch.name})</span>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* STEP 3: GUEST CONTACT DETAILS */}
            {step === 3 && (
              <div>
                <div style={{ marginBottom: '25px' }}>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--accent-gold-dark)', fontWeight: '700' }}>
                    STEP 3 OF 4
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.1rem', color: 'var(--accent-gold)', margin: '4px 0 8px 0' }}>
                    Guest Details
                  </h3>
                  <p style={{ opacity: 0.8, fontSize: '0.92rem' }}>
                    Provide your name, mobile number, and email address so our concierge can reach you.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                  
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px', color: 'var(--accent-gold-dark)', fontWeight: '700' }}>
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. Ananya Sharma" 
                      required 
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      style={{ 
                        width: '100%',
                        padding: '14px 18px', 
                        borderRadius: '14px', 
                        border: '1px solid var(--glass-border)', 
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        fontSize: '1rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px', color: 'var(--accent-gold-dark)', fontWeight: '700' }}>
                      Mobile Number *
                    </label>
                    <input 
                      type="tel" 
                      placeholder="e.g. +91 98765 43210" 
                      required 
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      style={{ 
                        width: '100%',
                        padding: '14px 18px', 
                        borderRadius: '14px', 
                        border: '1px solid var(--glass-border)', 
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        fontSize: '1rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px', color: 'var(--accent-gold-dark)', fontWeight: '700' }}>
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      placeholder="e.g. ananya@example.com" 
                      required 
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      style={{ 
                        width: '100%',
                        padding: '14px 18px', 
                        borderRadius: '14px', 
                        border: '1px solid var(--glass-border)', 
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        fontSize: '1rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                </div>
              </div>
            )}

            {/* STEP 4: CHECK DETAILS & BOOK NOW */}
            {step === 4 && (
              <div>
                <div style={{ marginBottom: '25px' }}>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--accent-gold-dark)', fontWeight: '700' }}>
                    STEP 4 OF 4
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.1rem', color: 'var(--accent-gold)', margin: '4px 0 8px 0' }}>
                    Check Details &amp; Book Now
                  </h3>
                  <p style={{ opacity: 0.8, fontSize: '0.92rem' }}>
                    Review your booking information, write any message for the admin, and submit your reservation.
                  </p>
                </div>

                {/* BOOKING SUMMARY BOX */}
                <div style={{ 
                  background: 'var(--bg-primary)', 
                  padding: '24px 28px', 
                  borderRadius: '20px', 
                  marginBottom: '25px', 
                  border: '1px solid var(--glass-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--glass-border)', paddingBottom: '10px' }}>
                    <span style={{ opacity: 0.7 }}>Massage Type:</span>
                    <strong style={{ color: 'var(--accent-gold)' }}>{selectedMassage.name} ({selectedMassage.duration})</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--glass-border)', paddingBottom: '10px' }}>
                    <span style={{ opacity: 0.7 }}>Slot Timing:</span>
                    <strong>{selectedDate} at {selectedTime}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--glass-border)', paddingBottom: '10px' }}>
                    <span style={{ opacity: 0.7 }}>Sanctuary Branch:</span>
                    <strong>{selectedBranch.name}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ opacity: 0.7 }}>Guest Info:</span>
                    <strong>{guestName || 'Not filled'} ({guestPhone || 'No Mobile'})</strong>
                  </div>
                </div>

                {/* MESSAGE TO ADMIN INPUT */}
                <div style={{ marginBottom: '25px' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', color: 'var(--accent-gold-dark)', fontWeight: '700' }}>
                    Message to Admin / Special Requests
                  </label>
                  <textarea 
                    rows={4} 
                    placeholder="Write a message to the spa admin (e.g. pressure preferences, therapist choice, medical considerations, or arrival details)..."
                    value={adminMessage}
                    onChange={(e) => setAdminMessage(e.target.value)}
                    style={{ 
                      width: '100%',
                      padding: '16px', 
                      borderRadius: '16px', 
                      border: '1px solid var(--glass-border)', 
                      background: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  ></textarea>
                </div>

                {/* SINGLE BOOKING SUBMIT ACTION BUTTON */}
                <div>
                  <button 
                    type="button"
                    onClick={handleBookNowSubmit}
                    style={{
                      width: '100%',
                      padding: '18px 24px',
                      background: 'linear-gradient(135deg, var(--accent-gold) 0%, #b89b4f 100%)',
                      color: '#1e2420',
                      border: 'none',
                      borderRadius: '35px',
                      fontWeight: '700',
                      fontSize: '1.05rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      boxShadow: '0 8px 25px rgba(217, 191, 119, 0.35)',
                      transition: 'all 0.3s ease',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}
                  >
                    <WhatsappIcon />
                    <span>Book Now &amp; Send to Admin</span>
                  </button>
                </div>
              </div>
            )}

            {/* NAVIGATION BUTTONS */}
            <div style={{ 
              display: 'flex', 
              justify: 'space-between', 
              marginTop: '35px', 
              borderTop: '1px solid var(--glass-border)', 
              paddingTop: '22px' 
            }}>
              {step > 1 ? (
                <button 
                  onClick={handlePrevStep} 
                  style={{ 
                    padding: '12px 28px', 
                    borderRadius: '25px', 
                    border: '1px solid var(--accent-gold)', 
                    background: 'transparent', 
                    color: 'var(--text-primary)', 
                    cursor: 'pointer',
                    fontWeight: '600' 
                  }}
                >
                  ← Back
                </button>
              ) : <div />}

              {step < 4 && (
                <button 
                  onClick={handleNextStep} 
                  style={{ 
                    padding: '12px 36px', 
                    borderRadius: '25px', 
                    background: 'var(--accent-gold)', 
                    color: '#1e2420', 
                    border: 'none', 
                    fontWeight: '700', 
                    cursor: 'pointer' 
                  }}
                >
                  Continue →
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* CONFIRMATION & VOUCHER MODAL */}
      {isVoucherOpen && (
        <div className="modal-overlay active" style={{ 
          display: 'flex', 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(8px)',
          zIndex: 10000,
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{ 
            background: 'var(--bg-secondary)', 
            padding: '36px 30px', 
            borderRadius: '28px', 
            maxWidth: '560px', 
            width: '100%', 
            position: 'relative', 
            textAlign: 'center',
            border: '1px solid var(--accent-gold)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)'
          }}>
            <button 
              onClick={() => setIsVoucherOpen(false)} 
              style={{ 
                position: 'absolute', 
                top: '18px', 
                right: '22px', 
                border: 'none', 
                background: 'none', 
                fontSize: '26px', 
                color: 'var(--text-primary)',
                cursor: 'pointer' 
              }}
            >
              &times;
            </button>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
              <LotusStarIcon />
            </div>
            
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.1rem', color: 'var(--accent-gold)', marginBottom: '8px' }}>
              Booking Sent to Admin!
            </h3>
            
            <p style={{ opacity: 0.88, fontSize: '0.92rem', marginBottom: '22px', lineHeight: 1.5 }}>
              Your reservation details and message have been sent to our Spa Admin.
            </p>

            {/* VOUCHER CARD */}
            <div style={{ 
              background: 'var(--bg-primary)', 
              color: 'var(--text-primary)', 
              padding: '24px', 
              borderRadius: '20px', 
              textAlign: 'left', 
              marginBottom: '24px', 
              border: '1px solid var(--accent-gold)' 
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(217,191,119,0.4)', paddingBottom: '12px', marginBottom: '14px' }}>
                <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-gold)', fontSize: '1.2rem', fontWeight: '700' }}>
                  DIOSA BALI SPA
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--accent-gold-dark)', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '700' }}>
                  OFFICIAL VOUCHER
                </span>
              </div>

              <div style={{ fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div><span style={{ opacity: 0.6 }}>GUEST NAME:</span> <strong>{guestName}</strong></div>
                <div><span style={{ opacity: 0.6 }}>MOBILE NO:</span> <strong>{guestPhone}</strong></div>
                <div><span style={{ opacity: 0.6 }}>EMAIL:</span> <strong>{guestEmail}</strong></div>
                <div><span style={{ opacity: 0.6 }}>MASSAGE TYPE:</span> <strong>{selectedMassage.name}</strong></div>
                <div><span style={{ opacity: 0.6 }}>SLOT TIMING:</span> <strong>{selectedDate} at {selectedTime}</strong></div>
                <div><span style={{ opacity: 0.6 }}>BRANCH:</span> <strong>{selectedBranch.name}</strong></div>
                {adminMessage && (
                  <div style={{ marginTop: '6px', paddingTop: '8px', borderTop: '1px solid var(--glass-border)' }}>
                    <span style={{ opacity: 0.6 }}>MESSAGE TO ADMIN:</span>
                    <p style={{ margin: '4px 0 0 0', fontStyle: 'italic', fontSize: '0.85rem' }}>"{adminMessage}"</p>
                  </div>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button 
                onClick={() => setIsVoucherOpen(false)} 
                style={{ 
                  padding: '14px 30px', 
                  background: 'var(--accent-gold)', 
                  color: '#1e2420', 
                  border: 'none', 
                  borderRadius: '30px', 
                  fontWeight: '700', 
                  cursor: 'pointer' 
                }}
              >
                Done &amp; Close
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
