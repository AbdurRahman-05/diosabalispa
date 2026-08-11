'use client';

import { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';

const branches = [
  {
    id: 'madurai',
    city: 'Madurai',
    badge: 'Madurai Sanctuary',
    address: 'Plot no - 17, K.K Nagar, East 1st Cross Street, opp. to Aishwarya silks, near MIOT Hospital, Melur Main Rd, Madurai - 625020.',
    phone: '+91-93447 81164',
    lat: 9.9377056,
    lng: 78.1461347,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Diosa+Bali+Spa+Madurai+9.9377056,78.1461347'
  },
  {
    id: 'kumbakonam',
    city: 'Kumbakonam',
    badge: 'Kumbakonam Sanctuary',
    address: 'Cholaa Dynasty Hotel, 2/9, Labour Office Street, Sundaraperumal kovil, Thiruvalanjuli, Kumbakonam - 614208.',
    phone: '+91-80565 54539',
    lat: 10.9418678,
    lng: 79.3140704,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Diosa+Bali+Spa+Kumbakonam+10.9418678,79.3140704'
  },
  {
    id: 'coimbatore',
    city: 'Coimbatore',
    badge: 'Coimbatore Sanctuary',
    address: 'No.9, Lakshmi Urshimha Graham, L.N Nagar, Thulasi Garden, Nehru Nagar West, Kalapatti, Coimbatore - 641048.',
    phone: '+91-90250 06428',
    lat: 11.0647739,
    lng: 77.0284834,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Diosa+Bali+Spa+Coimbatore+11.0647739,77.0284834'
  },
  {
    id: 'dindigul',
    city: 'Dindigul',
    badge: 'Dindigul Sanctuary',
    address: 'D.no M2/3, RM Colony, 2nd Cross St, Dindigul - 624001.',
    phone: '+91-99941 71561',
    lat: 10.3673,
    lng: 77.9803,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Diosa+Bali+Spa+Dindigul+10.3673,77.9803'
  },
  {
    id: 'pondicherry',
    city: 'Pondicherry',
    badge: 'Pondicherry Sanctuary',
    address: 'Grand Serene Hotel, ECR Road, Lawspet, Pondicherry - 605008.',
    phone: '+91-86106 19552',
    lat: 11.9610,
    lng: 79.8242,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Diosa+Bali+Spa+Pondicherry+11.9610,79.8242'
  }
];

export default function BranchMap() {
  const mapRef = useRef(null);
  const leafletMapRef = useRef(null);
  const markersRef = useRef({});
  const [activeBranch, setActiveBranch] = useState('all');

  useEffect(() => {
    let isMounted = true;

    // Dynamically import leaflet on client side only
    import('leaflet').then((L) => {
      if (!isMounted || !mapRef.current) return;

      // Prevent duplicate map initialization
      if (leafletMapRef.current) return;

      // Center map on Tamil Nadu / Pondicherry area
      const map = L.map(mapRef.current, {
        center: [10.8, 78.5],
        zoom: 7,
        scrollWheelZoom: false,
        zoomControl: true
      });

      leafletMapRef.current = map;

      // Clean luxury CartoDB tile layer with no country/coastal outline lines
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd',
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
      }).addTo(map);

      // Create luxury custom pin SVG HTML icon
      const createCustomIcon = (cityName, isActive) => {
        const pinBg = isActive ? '#b69c4a' : '#d9bf77';
        const shadowColor = isActive ? 'rgba(182,156,74,0.45)' : 'rgba(217,191,119,0.3)';
        
        return L.divIcon({
          className: 'custom-branch-marker',
          html: `
            <div style="
              position: relative;
              display: flex;
              flex-direction: column;
              align-items: center;
              transform: translate(-50%, -100%);
              cursor: pointer;
            ">
              <div style="
                background: ${pinBg};
                color: #1e2420;
                padding: 5px 12px;
                border-radius: 20px;
                font-family: 'Montserrat', sans-serif;
                font-weight: 700;
                font-size: 11px;
                box-shadow: 0 6px 16px ${shadowColor};
                white-space: nowrap;
                border: 2px solid #ffffff;
                letter-spacing: 0.5px;
                text-transform: uppercase;
                margin-bottom: 3px;
                transition: all 0.3s ease;
              ">
                ${cityName}
              </div>
              <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.37258 0 0 5.37258 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37258 18.6274 0 12 0Z" fill="${pinBg}"/>
                <circle cx="12" cy="12" r="5" fill="#1e2420"/>
              </svg>
            </div>
          `,
          iconSize: [30, 42],
          iconAnchor: [15, 42],
          popupAnchor: [0, -42]
        });
      };

      // Add markers for all branches
      const bounds = L.latLngBounds();

      branches.forEach((b) => {
        const marker = L.marker([b.lat, b.lng], {
          icon: createCustomIcon(b.city, false)
        }).addTo(map);

        bounds.extend([b.lat, b.lng]);

        marker.on('click', () => {
          handleSelectBranch(b.id);
        });

        markersRef.current[b.id] = marker;
      });

      // Set exact map view alignment matching all branches overview
      map.setView([10.92, 78.35], 7);
    });

    return () => {
      isMounted = false;
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, []);

  const handleSelectBranch = (branchId) => {
    setActiveBranch(branchId);
    const map = leafletMapRef.current;
    if (!map) return;

    if (branchId === 'all') {
      map.flyTo([10.92, 78.35], 7, { duration: 1.2 });
    } else {
      const selected = branches.find(b => b.id === branchId);
      if (selected) {
        map.flyTo([selected.lat - 0.003, selected.lng], 14, { duration: 1.2 });
      }
    }
  };

  return (
    <section style={{ padding: '20px 0 60px 0' }}>
      <div className="container">
        
        {/* SECTION HEADER */}
        <div className="text-center" style={{ marginBottom: '30px' }}>
          <span className="section-tagline">INTERACTIVE SANCTUARY MAP</span>
          <h2 className="section-title">Locate Our Sanctuaries</h2>
          <p className="section-subtitle" style={{ maxWidth: '640px', margin: '10px auto 0 auto', opacity: 0.85 }}>
            Explore our luxury wellness destinations across Tamil Nadu &amp; Pondicherry on the map. Select a branch to focus and navigate.
          </p>
        </div>

        {/* BRANCH SELECTOR TABS */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '25px'
        }}>
          <button
            onClick={() => handleSelectBranch('all')}
            style={{
              padding: '10px 20px',
              borderRadius: '25px',
              border: activeBranch === 'all' ? '2px solid var(--accent-gold)' : '1px solid var(--glass-border)',
              background: activeBranch === 'all' ? 'var(--accent-gold)' : 'var(--bg-secondary)',
              color: activeBranch === 'all' ? '#1e2420' : 'var(--text-primary)',
              fontWeight: '700',
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: activeBranch === 'all' ? '0 4px 15px rgba(217,191,119,0.3)' : 'none'
            }}
          >
            All Branches Overview
          </button>

          {branches.map((b) => (
            <button
              key={b.id}
              onClick={() => handleSelectBranch(b.id)}
              style={{
                padding: '10px 20px',
                borderRadius: '25px',
                border: activeBranch === b.id ? '2px solid var(--accent-gold)' : '1px solid var(--glass-border)',
                background: activeBranch === b.id ? 'var(--accent-gold)' : 'var(--bg-secondary)',
                color: activeBranch === b.id ? '#1e2420' : 'var(--text-primary)',
                fontWeight: '700',
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeBranch === b.id ? '0 4px 15px rgba(217,191,119,0.3)' : 'none'
              }}
            >
              {b.city}
            </button>
          ))}
        </div>

        {/* MAP CONTAINER */}
        <div style={{
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          border: '1px solid var(--glass-border)',
          boxShadow: 'var(--shadow-medium)',
          background: 'var(--bg-secondary)'
        }}>
          <div
            ref={mapRef}
            style={{
              width: '100%',
              height: '520px',
              zIndex: 1
            }}
          />

          {/* ACTIVE BRANCH INFO BADGE OVERLAY */}
          {activeBranch !== 'all' && (
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              zIndex: 1000,
              background: 'var(--bg-primary)',
              backdropFilter: 'blur(12px)',
              padding: '18px 20px',
              borderRadius: '18px',
              border: '1px solid var(--glass-border)',
              boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
              width: 'calc(100% - 32px)',
              maxWidth: '340px',
              boxSizing: 'border-box'
            }}>
              {(() => {
                const b = branches.find(item => item.id === activeBranch);
                if (!b) return null;
                return (
                  <div style={{ position: 'relative' }}>
                    <button
                      onClick={() => handleSelectBranch('all')}
                      style={{
                        position: 'absolute',
                        top: '-6px',
                        right: '-4px',
                        background: 'none',
                        border: 'none',
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        color: 'var(--text-primary)',
                        opacity: 0.6
                      }}
                      title="Close Card"
                    >
                      ✕
                    </button>
                    <span style={{ background: 'rgba(217,191,119,0.2)', color: 'var(--accent-gold-dark)', padding: '3px 10px', borderRadius: '10px', fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase' }}>
                      {b.badge}
                    </span>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--accent-gold)', margin: '8px 0 4px 0' }}>{b.city} Sanctuary</h4>
                    <p style={{ fontSize: '0.82rem', opacity: 0.85, lineHeight: 1.4, marginBottom: '12px' }}>{b.address}</p>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', paddingTop: '4px' }}>
                      <a
                        href={b.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: 'var(--accent-gold)',
                          color: '#1e2420',
                          padding: '6px 12px',
                          borderRadius: '16px',
                          textDecoration: 'none',
                          fontWeight: '600',
                          fontSize: '0.75rem',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        Google Maps ↗
                      </a>
                      <a
                        href={`tel:${b.phone}`}
                        style={{
                          color: 'var(--text-primary)',
                          textDecoration: 'none',
                          fontSize: '0.78rem',
                          fontWeight: '600',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px'
                        }}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        {b.phone}
                      </a>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>

        {/* ALL BRANCHES OVERVIEW GRID WHEN 'ALL' IS SELECTED */}
        {activeBranch === 'all' && (
          <div style={{
            marginTop: '45px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '30px 20px',
            paddingBottom: '20px'
          }}>
            {branches.map((b) => (
              <div
                key={b.id}
                onClick={() => handleSelectBranch(b.id)}
                style={{
                  position: 'relative',
                  background: 'var(--bg-secondary)',
                  padding: '30px 20px 20px 20px',
                  borderRadius: '26px 26px 14px 14px',
                  border: '1px solid var(--glass-border)',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '190px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-gold)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 14px 30px rgba(217,191,119,0.2)';
                  const tip = e.currentTarget.querySelector('.map-pin-tip');
                  if (tip) tip.style.borderColor = 'var(--accent-gold)';
                  const badge = e.currentTarget.querySelector('.map-pin-badge');
                  if (badge) badge.style.transform = 'translateX(-50%) scale(1.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
                  const tip = e.currentTarget.querySelector('.map-pin-tip');
                  if (tip) tip.style.borderColor = 'var(--glass-border)';
                  const badge = e.currentTarget.querySelector('.map-pin-badge');
                  if (badge) badge.style.transform = 'translateX(-50%) scale(1)';
                }}
              >
                {/* TOP MAP PIN ICON BADGE */}
                <div 
                  className="map-pin-badge"
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--accent-gold) 0%, #b69c4a 100%)',
                    color: '#1e2420',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 6px 16px rgba(217,191,119,0.35)',
                    border: '2px solid var(--bg-primary)',
                    zIndex: 3,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>

                {/* BOTTOM POINTER TIP OF MAP PIN */}
                <div 
                  className="map-pin-tip"
                  style={{
                    position: 'absolute',
                    bottom: '-9px',
                    left: '50%',
                    transform: 'translateX(-50%) rotate(45deg)',
                    width: '16px',
                    height: '16px',
                    background: 'var(--bg-secondary)',
                    borderRight: '1px solid var(--glass-border)',
                    borderBottom: '1px solid var(--glass-border)',
                    zIndex: 2,
                    transition: 'all 0.3s ease'
                  }} 
                />

                <div style={{ textAlign: 'center', paddingTop: '4px' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--accent-gold-dark)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {b.city}
                  </span>
                  <h5 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--accent-gold)', margin: '4px 0 8px 0' }}>
                    {b.city} Sanctuary
                  </h5>
                  <p style={{ fontSize: '0.78rem', opacity: 0.85, lineHeight: 1.4, marginBottom: '12px' }}>
                    {b.address}
                  </p>
                </div>

                <div style={{ 
                  fontSize: '0.78rem', 
                  color: 'var(--accent-gold)', 
                  fontWeight: '700', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  gap: '4px',
                  borderTop: '1px solid var(--glass-border)',
                  paddingTop: '10px'
                }}>
                  Focus on Map ↗
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
