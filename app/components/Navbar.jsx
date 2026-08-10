'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`} id="mainHeader">
      <div className="header-container">
        <Link href="/" className="logo" onClick={closeMobileMenu}>
          <img 
            src="https://diosabalispa.in/wp-content/uploads/2021/12/Diosa-Logo.f4d3aed9506b8b5b69a0-1-scaled.png" 
            alt="Diosa Bali Spa Logo" 
            className="logo-img"
          />
        </Link>

        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="navMenu">
          <Link 
            href="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            About Us
          </Link>
          <Link 
            href="/therapy" 
            className={`nav-link ${isActive('/therapy') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Therapy
          </Link>
          <Link 
            href="/gallery" 
            className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Gallery
          </Link>
          <Link 
            href="/booking" 
            className={`nav-link ${isActive('/booking') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Book Now
          </Link>
          <Link 
            href="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </nav>

        <div className="header-actions">
          <Link href="/booking" className="cta-btn-nav" onClick={closeMobileMenu}>
            Book an Experience
          </Link>

          <button 
            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`} 
            id="mobileMenuBtn" 
            aria-label="Toggle menu"
            onClick={toggleMobileMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
