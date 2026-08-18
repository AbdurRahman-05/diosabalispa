'use client';

import { useState } from 'react';
import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="main-footer section-padding" id="footer">
      {/* Video Background */}
      <div className="footer-video-bg">
        <video className="footer-video-element" autoPlay loop muted playsInline>
          <source src="/One_minute_guided_meditation(1080p).mp4" type="video/mp4" />
        </video>
        <div className="footer-video-overlay"></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="footer-grid">
          {/* Branding & Hours */}
          <div className="footer-col branding-col">
            <h3 className="footer-logo">
              <img
                src="https://diosabalispa.in/wp-content/uploads/2021/12/Diosa-Logo.f4d3aed9506b8b5b69a0-1-scaled.png"
                alt="Diosa Bali Spa Logo"
                className="footer-logo-img"
              />
            </h3>
            <p className="footer-desc">
              A peaceful sanctuary of natural stone, warm light and restorative experiences.
            </p>
            <div className="opening-hours">
              <h4 className="footer-subheading">Hours of Sanctuary</h4>
              <p>Monday - Friday: 08:00 AM - 08:00 PM</p>
              <p>Saturday - Sunday: 09:00 AM - 09:00 PM</p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="footer-col">
            <h4 className="footer-subheading">Sanctuary Maps</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/therapy">Therapy</Link></li>
              <li><Link href="/foot-reflexology">Foot Reflexology &amp; Franchise</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/booking">Book Now</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4 className="footer-subheading">Reach Us</h4>
            <p className="footer-contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <a href="https://diosabalispa.in" target="_blank" rel="noopener noreferrer">www.diosabalispa.in</a>
            </p>
            <p className="footer-contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a href="mailto:diosabalispa@gmail.com">diosabalispa@gmail.com</a>
            </p>
            <p className="footer-contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <a href="tel:+919344781164">+91 9344781164</a>
            </p>
          </div>

          {/* Newsletter */}
          <div className="footer-col newsletter-col">
            <h4 className="footer-subheading">Newsletter Subscription</h4>
            <p className="newsletter-text">
              Join the Inner Circle. Receive wellness tips, early reservation access, and 15% off your first ritual booking.
            </p>
            {!subscribed ? (
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@domain.com"
                  required
                  aria-label="Email for newsletter"
                />
                <button type="submit" className="newsletter-submit-btn">Subscribe</button>
              </form>
            ) : (
              <div className="newsletter-success-message" style={{ display: 'block', color: 'var(--accent-gold)' }}>
                Thank you for joining our Diosa Bali Spa Sanctuary newsletter!
              </div>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Diosa Bali Spa Sanctuary. All rights reserved. Designed for holistic restoration.</p>
        </div>
      </div>
    </footer>
  );
}
