'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import ThemeToggle from './ThemeToggle';

import './BubbleMenu.css';

const DEFAULT_ITEMS = [
  {
    label: 'Home',
    href: '/',
    ariaLabel: 'Home',
    rotation: -6,
    hoverStyles: { bgColor: '#d9bf77', textColor: '#1e2420' }
  },
  {
    label: 'About Us',
    href: '/about',
    ariaLabel: 'About Us',
    rotation: 6,
    hoverStyles: { bgColor: '#4e6550', textColor: '#fbf9f6' }
  },
  {
    label: 'Therapy & Rituals',
    href: '/therapy',
    ariaLabel: 'Therapy & Rituals',
    rotation: -5,
    hoverStyles: { bgColor: '#b69c4a', textColor: '#1e2420' }
  },
  {
    label: 'Sanctuary Gallery',
    href: '/gallery',
    ariaLabel: 'Sanctuary Gallery',
    rotation: 5,
    hoverStyles: { bgColor: '#89a58b', textColor: '#1e2420' }
  },
  {
    label: 'Book Now',
    href: '/booking',
    ariaLabel: 'Book Now',
    rotation: -6,
    hoverStyles: { bgColor: '#d9bf77', textColor: '#1e2420' }
  },
  {
    label: 'Contact',
    href: '/contact',
    ariaLabel: 'Contact',
    rotation: 6,
    hoverStyles: { bgColor: '#4e6550', textColor: '#fbf9f6' }
  }
];

export default function BubbleMenu({
  logo,
  onMenuClick,
  className,
  style,
  menuAriaLabel = 'Toggle menu',
  menuBg = '#1e2420',
  menuContentColor = '#d9bf77',
  useFixedPosition = true,
  items,
  animationEase = 'back.out(1.5)',
  animationDuration = 0.5,
  staggerDelay = 0.12
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const overlayRef = useRef(null);
  const bubblesRef = useRef([]);
  const labelRefs = useRef([]);

  const menuItems = items?.length ? items : DEFAULT_ITEMS;
  const containerClassName = ['bubble-menu', useFixedPosition ? 'fixed' : 'absolute', className]
    .filter(Boolean)
    .join(' ');

  const handleToggle = () => {
    const nextState = !isMenuOpen;
    if (nextState) setShowOverlay(true);
    setIsMenuOpen(nextState);
    onMenuClick?.(nextState);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
    onMenuClick?.(false);
  };

  useEffect(() => {
    const overlay = overlayRef.current;
    const bubbles = bubblesRef.current.filter(Boolean);
    const labels = labelRefs.current.filter(Boolean);

    if (!overlay || !bubbles.length) return;

    if (isMenuOpen) {
      gsap.set(overlay, { display: 'flex' });
      gsap.killTweensOf([...bubbles, ...labels]);
      gsap.set(bubbles, { scale: 0, transformOrigin: '50% 50%' });
      gsap.set(labels, { y: 24, autoAlpha: 0 });

      bubbles.forEach((bubble, i) => {
        const delay = i * staggerDelay + gsap.utils.random(-0.05, 0.05);
        const tl = gsap.timeline({ delay });

        tl.to(bubble, {
          scale: 1,
          duration: animationDuration,
          ease: animationEase
        });
        if (labels[i]) {
          tl.to(
            labels[i],
            {
              y: 0,
              autoAlpha: 1,
              duration: animationDuration,
              ease: 'power3.out'
            },
            `-=${animationDuration * 0.9}`
          );
        }
      });
    } else if (showOverlay) {
      gsap.killTweensOf([...bubbles, ...labels]);
      gsap.to(labels, {
        y: 24,
        autoAlpha: 0,
        duration: 0.2,
        ease: 'power3.in'
      });
      gsap.to(bubbles, {
        scale: 0,
        duration: 0.2,
        ease: 'power3.in',
        onComplete: () => {
          gsap.set(overlay, { display: 'none' });
          setShowOverlay(false);
        }
      });
    }
  }, [isMenuOpen, showOverlay, animationEase, animationDuration, staggerDelay]);

  useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen) {
        const bubbles = bubblesRef.current.filter(Boolean);
        const isDesktop = window.innerWidth >= 900;

        bubbles.forEach((bubble, i) => {
          const item = menuItems[i];
          if (bubble && item) {
            const rotation = isDesktop ? (item.rotation ?? 0) : 0;
            gsap.set(bubble, { rotation });
          }
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen, menuItems]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const defaultLogo = (
    <Link href="/" onClick={handleClose} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
      <img
        src="https://diosabalispa.in/wp-content/uploads/2021/12/Diosa-Logo.f4d3aed9506b8b5b69a0-1-scaled.png"
        alt="Diosa Bali Spa Logo"
        style={{ height: '110px', width: 'auto', objectFit: 'contain' }}
      />
    </Link>
  );

  return (
    <>
      <nav className={containerClassName} style={style} aria-label="Main navigation">
        <div
          className="bubble logo-bubble"
          aria-label="Logo"
          style={{
            opacity: isScrolled ? 0 : 1,
            transform: isScrolled ? 'translateY(-20px)' : 'translateY(0)',
            pointerEvents: isScrolled ? 'none' : 'auto',
            transition: 'opacity 0.4s ease, transform 0.4s ease'
          }}
        >
          <span className="logo-content">
            {logo ? (
              typeof logo === 'string' ? <img src={logo} alt="Logo" className="bubble-logo" /> : logo
            ) : (
              defaultLogo
            )}
          </span>
        </div>

        {/* RIGHT ACTION BUBBLES (THEME TOGGLE + MENU BUTTON ON EXACT SAME LINE) */}
        <div className="nav-right-actions" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <ThemeToggle />

          <button
            type="button"
            className={`bubble toggle-bubble menu-btn ${isMenuOpen ? 'open' : ''}`}
            onClick={handleToggle}
            aria-label={menuAriaLabel}
            aria-pressed={isMenuOpen}
          >
            <span className="menu-line" />
            <span className="menu-line short" />
          </button>
        </div>
      </nav>
      {showOverlay && (
        <div
          ref={overlayRef}
          className={`bubble-menu-items ${useFixedPosition ? 'fixed' : 'absolute'}`}
          aria-hidden={!isMenuOpen}
          onClick={handleClose}
        >
          <ul className="pill-list" role="menu" aria-label="Menu links" onClick={e => e.stopPropagation()}>
            {menuItems.map((item, idx) => (
              <li key={idx} role="none" className="pill-col">
                <Link
                  role="menuitem"
                  href={item.href}
                  aria-label={item.ariaLabel || item.label}
                  className="pill-link"
                  onClick={handleClose}
                  style={{
                    '--item-rot': `${item.rotation ?? 0}deg`,
                    '--pill-bg': menuBg,
                    '--pill-color': menuContentColor,
                    '--hover-bg': item.hoverStyles?.bgColor || '#d9bf77',
                    '--hover-color': item.hoverStyles?.textColor || '#1e2420'
                  }}
                  ref={el => {
                    if (el) bubblesRef.current[idx] = el;
                  }}
                >
                  <span
                    className="pill-label"
                    ref={el => {
                      if (el) labelRefs.current[idx] = el;
                    }}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
