'use client';

import { useState } from 'react';
import Link from 'next/link';
import './FootReflexologyFloating.css';

export default function FootReflexologyFloating() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside 
      className="foot-reflex-floating-widget"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Foot Reflexology and Franchise Opportunities"
    >
      <Link 
        href="/foot-reflexology" 
        className="foot-reflex-floating-btn"
        title="Foot Reflexology & Franchise"
      >
        <span className="floating-pulse-ring"></span>
        <div className="floating-icon-wrap">
          {/* Custom Elegant Foot Reflexology SVG Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 16v-2.38C4 11.5 5.5 8 9 8c2.5 0 3.5 1.5 4.5 3 .8 1.2 1.8 2 3.5 2 2 0 3-1.5 3-3V7" />
            <path d="M4 17a3 3 0 0 0 6 0v-1" />
            <circle cx="16" cy="5" r="1" fill="currentColor" />
            <circle cx="19" cy="7" r="1" fill="currentColor" />
            <circle cx="13" cy="4" r="1" fill="currentColor" />
          </svg>
        </div>
        <div className="floating-badge-text">
          <span className="floating-badge-tag">NEW SERVICE &amp; FRANCHISE</span>
          <span className="floating-badge-title">Foot Reflexology</span>
        </div>
      </Link>
    </aside>
  );
}
