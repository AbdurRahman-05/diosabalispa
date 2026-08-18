'use client';

import './MeditationModal.css';

export default function MeditationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay active" onClick={onClose} style={{ display: 'flex', zIndex: 10000 }}>
      <div 
        className="meditation-video-modal" 
        onClick={(e) => e.stopPropagation()} 
        style={{
          position: 'relative',
          width: '90%',
          maxWidth: '900px',
          background: 'var(--bg-dark)',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-medium)'
        }}
      >
        <button 
          onClick={onClose} 
          style={{
            position: 'absolute',
            top: '15px',
            right: '20px',
            background: 'rgba(0,0,0,0.6)',
            color: '#fff',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          aria-label="Close Video"
        >
          &times;
        </button>

        <video controls autoPlay style={{ width: '100%', height: 'auto', display: 'block' }}>
          <source src="/One_minute_guided_meditation(1080p).mp4" type="video/mp4" />
          Your browser does not support video playback.
        </video>
      </div>
    </div>
  );
}
