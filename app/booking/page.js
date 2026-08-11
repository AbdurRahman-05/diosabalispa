'use client';

import { useState } from 'react';

const services = [
  { id: 'basalt', name: 'Basalt Stone Therapeutic', duration: '75 Mins', price: 165 },
  { id: 'himalayan', name: 'Himalayan Salt Detox', duration: '90 Mins', price: 180 },
  { id: 'aromatherapy', name: 'Aromatherapy Deep Flow', duration: '60 Mins', price: 145 },
  { id: 'radiance', name: 'Radiance Botanical Facial', duration: '60 Mins', price: 150 },
  { id: 'collagen', name: 'Age-Defying Collagen Infusion', duration: '75 Mins', price: 195 },
  { id: 'seaweed', name: 'Seaweed & Mud Detoxifying Wrap', duration: '90 Mins', price: 210 }
];

const therapists = [
  { id: 'elena', name: 'Elena Vance', title: 'Aromatherapy & Stone Specialist', avatar: 'EV' },
  { id: 'kenji', name: 'Kenji Sato', title: 'Deep Tissue & Thermal Master', avatar: 'KS' },
  { id: 'maya', name: 'Maya Lin', title: 'Organic Skincare Specialist', avatar: 'ML' },
  { id: 'any', name: 'First Available Practitioner', title: 'Assigned automatically', avatar: 'AP' }
];

const timeSlots = ['09:00 AM', '10:30 AM', '12:00 PM', '01:30 PM', '03:00 PM', '04:30 PM', '06:00 PM'];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(services[0]);
  const [selectedTherapist, setSelectedTherapist] = useState(therapists[0]);
  const [selectedDate, setSelectedDate] = useState('2026-08-15');
  const [selectedTime, setSelectedTime] = useState('12:00 PM');
  
  // Guest Details
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  
  const [isVoucherOpen, setIsVoucherOpen] = useState(false);

  const handleNextStep = () => {
    if (step < 4) setStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(prev => prev - 1);
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!guestName || !guestEmail) {
      alert('Please fill in your name and email address.');
      return;
    }
    setIsVoucherOpen(true);
  };

  return (
    <main style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      {/* PAGE HERO */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)', textAlign: 'center', paddingTop: '160px', paddingBottom: '30px' }}>
        <div className="container">
          <span className="section-tagline">APPOINTMENT RESERVATIONS</span>
          <h1 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '10px' }}>Schedule Your Wellness Escape</h1>
          <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.85 }}>
            Select your desired options below to instantly coordinate your time at our sanctuary.
          </p>
        </div>
      </section>

      {/* SCHEDULER WIZARD */}
      <section style={{ padding: '30px 0 100px 0' }}>
        <div className="container">
          <div style={{ background: 'var(--bg-secondary)', borderRadius: '24px', padding: '40px', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-medium)', maxWidth: '900px', margin: '0 auto' }}>
            
            {/* Step Indicators */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '25px', flexWrap: 'wrap', gap: '15px' }}>
              {[
                { num: 1, label: 'Treatment' },
                { num: 2, label: 'Therapist' },
                { num: 3, label: 'Date & Time' },
                { num: 4, label: 'Confirmation' }
              ].map(s => (
                <div key={s.num} style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: step >= s.num ? 1 : 0.4 }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: step >= s.num ? 'var(--accent-gold)' : 'transparent', border: '1px solid var(--accent-gold)', color: step >= s.num ? '#1e2420' : 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600' }}>
                    {s.num}
                  </div>
                  <span style={{ fontWeight: step === s.num ? '600' : '400', fontSize: '0.95rem' }}>{s.label}</span>
                </div>
              ))}
            </div>

            {/* STEP 1: SERVICE SELECTION */}
            {step === 1 && (
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--accent-gold)', marginBottom: '25px' }}>
                  Choose a Wellness Therapy
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {services.map(s => (
                    <div 
                      key={s.id}
                      onClick={() => setSelectedService(s)}
                      style={{
                        padding: '20px 25px',
                        borderRadius: '16px',
                        border: selectedService.id === s.id ? '2px solid var(--accent-gold)' : '1px solid var(--glass-border)',
                        background: selectedService.id === s.id ? 'rgba(217, 191, 119, 0.1)' : 'var(--bg-primary)',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <div>
                        <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '4px' }}>{s.name}</h4>
                        <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>{s.duration}</span>
                      </div>
                      <span style={{ fontSize: '1.3rem', fontWeight: '600', color: 'var(--accent-gold-dark)' }}>${s.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: THERAPIST SELECTION */}
            {step === 2 && (
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--accent-gold)', marginBottom: '10px' }}>
                  Choose a Holistic Therapist
                </h3>
                <p style={{ opacity: 0.8, marginBottom: '25px' }}>Each practitioner is fully certified and carries unique healing methodologies.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                  {therapists.map(t => (
                    <div 
                      key={t.id}
                      onClick={() => setSelectedTherapist(t)}
                      style={{
                        padding: '25px',
                        borderRadius: '16px',
                        border: selectedTherapist.id === t.id ? '2px solid var(--accent-gold)' : '1px solid var(--glass-border)',
                        background: selectedTherapist.id === t.id ? 'rgba(217, 191, 119, 0.1)' : 'var(--bg-primary)',
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--accent-gold)', color: '#1e2420', margin: '0 auto 15px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '1.2rem' }}>
                        {t.avatar}
                      </div>
                      <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '5px' }}>{t.name}</h4>
                      <span style={{ fontSize: '0.82rem', opacity: 0.85, color: 'var(--accent-gold-dark)', display: 'block' }}>{t.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: DATE & TIME SELECTION */}
            {step === 3 && (
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--accent-gold)', marginBottom: '25px' }}>
                  Select Date &amp; Time
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '10px' }}>Select Date</label>
                    <input 
                      type="date" 
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--bg-primary)', fontSize: '1rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '10px' }}>Available Time Slots</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                      {timeSlots.map(slot => (
                        <button
                          key={slot}
                          onClick={() => setSelectedTime(slot)}
                          style={{
                            padding: '12px',
                            borderRadius: '10px',
                            border: selectedTime === slot ? '2px solid var(--accent-gold)' : '1px solid var(--glass-border)',
                            background: selectedTime === slot ? 'var(--accent-gold)' : 'var(--bg-primary)',
                            color: selectedTime === slot ? '#1e2420' : 'var(--text-primary)',
                            fontWeight: selectedTime === slot ? '600' : '400',
                            cursor: 'pointer'
                          }}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: GUEST DETAILS & CONFIRMATION */}
            {step === 4 && (
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--accent-gold)', marginBottom: '20px' }}>
                  Complete Your Reservation
                </h3>

                {/* Reservation Summary */}
                <div style={{ background: 'var(--bg-primary)', padding: '20px 25px', borderRadius: '16px', marginBottom: '30px', border: '1px solid var(--glass-border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>Service:</span>
                    <strong>{selectedService.name} ({selectedService.duration})</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>Practitioner:</span>
                    <strong>{selectedTherapist.name}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>Date &amp; Time:</span>
                    <strong>{selectedDate} at {selectedTime}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--glass-border)', paddingTop: '12px', marginTop: '12px', fontSize: '1.2rem', color: 'var(--accent-gold)' }}>
                    <span>Total Amount:</span>
                    <strong>${selectedService.price}</strong>
                  </div>
                </div>

                <form onSubmit={handleConfirmBooking} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '15px' }}>
                    <input 
                      type="text" 
                      placeholder="Full Name *" 
                      required 
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      style={{ padding: '14px', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--bg-primary)' }}
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address *" 
                      required 
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      style={{ padding: '14px', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--bg-primary)' }}
                    />
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    style={{ padding: '14px', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--bg-primary)' }}
                  />
                  <textarea 
                    rows={3} 
                    placeholder="Special requests or medical considerations..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    style={{ padding: '14px', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--bg-primary)', resize: 'vertical' }}
                  ></textarea>
                  <button type="submit" style={{ padding: '16px', background: 'var(--accent-gold)', color: '#1e2420', border: 'none', borderRadius: '30px', fontWeight: '700', fontSize: '1.1rem', cursor: 'pointer', textTransform: 'uppercase', marginTop: '10px' }}>
                    Confirm &amp; Generate Voucher Ticket
                  </button>
                </form>
              </div>
            )}

            {/* Navigation Buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '35px', borderTop: '1px solid var(--glass-border)', paddingTop: '20px' }}>
              {step > 1 ? (
                <button onClick={handlePrevStep} style={{ padding: '12px 25px', borderRadius: '25px', border: '1px solid var(--accent-gold)', background: 'transparent', color: 'var(--text-primary)', cursor: 'pointer' }}>
                  Back
                </button>
              ) : <div></div>}
              {step < 4 && (
                <button onClick={handleNextStep} style={{ padding: '12px 30px', borderRadius: '25px', background: 'var(--accent-gold)', color: '#1e2420', border: 'none', fontWeight: '600', cursor: 'pointer' }}>
                  Continue
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* DIGITAL VOUCHER MODAL */}
      {isVoucherOpen && (
        <div className="modal-overlay active" style={{ display: 'flex', zIndex: 10000 }}>
          <div style={{ background: 'var(--bg-primary)', padding: '40px', borderRadius: '24px', maxWidth: '550px', width: '90%', position: 'relative', textAlign: 'center' }}>
            <button onClick={() => setIsVoucherOpen(false)} style={{ position: 'absolute', top: '15px', right: '20px', border: 'none', background: 'none', fontSize: '24px', cursor: 'pointer' }}>&times;</button>
            <div style={{ fontSize: '3rem', color: 'var(--accent-gold)', marginBottom: '10px' }}>✨</div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', color: 'var(--accent-gold)', marginBottom: '10px' }}>Your Sanctuary Awaits</h3>
            <p style={{ opacity: 0.85, fontSize: '0.95rem', marginBottom: '25px' }}>
              Your appointment has been successfully recorded. A digital voucher has been generated below:
            </p>

            <div style={{ background: 'var(--bg-dark)', color: '#fff', padding: '25px', borderRadius: '16px', textAlign: 'left', marginBottom: '25px', border: '1px solid var(--accent-gold)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(217,191,119,0.3)', paddingBottom: '10px', marginBottom: '15px' }}>
                <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-gold)', fontSize: '1.2rem' }}>AURA &amp; ZEN</span>
                <span style={{ fontSize: '0.75rem', opacity: 0.8, letterSpacing: '1px' }}>CONFIRMED VOUCHER</span>
              </div>
              <div style={{ fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div><span style={{ opacity: 0.6 }}>GUEST:</span> {guestName}</div>
                <div><span style={{ opacity: 0.6 }}>RITUAL:</span> {selectedService.name}</div>
                <div><span style={{ opacity: 0.6 }}>PRACTITIONER:</span> {selectedTherapist.name}</div>
                <div><span style={{ opacity: 0.6 }}>DATE &amp; TIME:</span> {selectedDate} at {selectedTime}</div>
                <div><span style={{ opacity: 0.6 }}>TOTAL:</span> ${selectedService.price}</div>
              </div>
            </div>

            <button onClick={() => setIsVoucherOpen(false)} style={{ padding: '14px 32px', background: 'var(--accent-gold)', color: '#1e2420', border: 'none', borderRadius: '30px', fontWeight: '600', cursor: 'pointer' }}>
              Done &amp; Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
