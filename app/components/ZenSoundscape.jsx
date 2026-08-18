'use client';

import { useState, useRef, useEffect } from 'react';
import './ZenSoundscape.css';

const tracks = [
  { 
    name: 'Zen Mind Relaxation Sanctuary', 
    src: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=zen-meditation-113824.mp3' 
  },
  { 
    name: 'Balinese Serenity Waves', 
    src: 'https://cdn.pixabay.com/download/audio/2021/09/06/audio_8b05615d6a.mp3?filename=meditation-relaxing-music-9430.mp3' 
  },
  { 
    name: 'Forest Rain & Chimes', 
    src: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=relaxing-mountains-rivers-141319.mp3' 
  }
];

export default function ZenSoundscape() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [prevVolume, setPrevVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [isLooping, setIsLooping] = useState(true);
  const audioRef = useRef(null);
  const hasInteractedRef = useRef(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = isLooping;
    }
  }, [volume, isLooping]);

  // AUTO-PLAY MIND RELAXATION BGM ON SITE ENTER / USER INTERACTION
  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current && !hasInteractedRef.current) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            hasInteractedRef.current = true;
            removeListeners();
          })
          .catch(() => {});
      }
    };

    const removeListeners = () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('scroll', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
    };

    window.addEventListener('click', handleUserInteraction, { passive: true });
    window.addEventListener('touchstart', handleUserInteraction, { passive: true });
    window.addEventListener('scroll', handleUserInteraction, { passive: true });
    window.addEventListener('keydown', handleUserInteraction, { passive: true });

    // Initial direct attempt if browser allows unmuted autoplay
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          hasInteractedRef.current = true;
          removeListeners();
        })
        .catch(() => {});
    }

    return () => {
      removeListeners();
    };
  }, []);

  const togglePlay = (e) => {
    e?.stopPropagation();
    if (!audioRef.current) return;
    hasInteractedRef.current = true;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  };

  const selectTrack = (index) => {
    setCurrentTrackIndex(index);
    if (audioRef.current) {
      audioRef.current.src = tracks[index].src;
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const handleNextTrack = () => {
    const nextIdx = (currentTrackIndex + 1) % tracks.length;
    selectTrack(nextIdx);
  };

  const handlePrevTrack = () => {
    const prevIdx = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    selectTrack(prevIdx);
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      setVolume(prevVolume || 0.5);
    } else {
      setPrevVolume(volume);
      setIsMuted(true);
      setVolume(0);
    }
  };

  return (
    <div className="zen-soundscape-widget" id="soundscapeWidget" style={{ position: 'fixed', bottom: '25px', left: '25px', zIndex: 99999 }}>
      <audio 
        ref={audioRef} 
        loop={isLooping}
        src={tracks[currentTrackIndex].src} 
        preload="auto"
      />

      {/* Floating BGM Control Bar */}
      <div 
        className="soundscape-control-bar"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: 'rgba(18, 19, 18, 0.94)',
          border: '1.5px solid rgba(212, 175, 55, 0.5)',
          borderRadius: '40px',
          padding: '6px 18px 6px 8px',
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.7), 0 0 25px rgba(217, 119, 6, 0.25)',
          backdropFilter: 'blur(12px)'
        }}
      >
        {/* ONE-TOUCH PLAY / PAUSE BUTTON */}
        <button 
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause Mind Relaxation BGM" : "Play Mind Relaxation BGM"}
          title={isPlaying ? "Pause Mind Relaxation BGM" : "Play Mind Relaxation BGM"}
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: isPlaying ? 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)' : '#221811',
            color: isPlaying ? '#0a0b0a' : '#d4af37',
            border: '1px solid #d4af37',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(217, 119, 6, 0.35)',
            flexShrink: 0,
            transition: 'all 0.3s ease'
          }}
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ marginLeft: '2px' }}>
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* EQUALIZER & TITLE (CLICK TO TOGGLE OPTIONS OR PLAY/PAUSE) */}
        <div 
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          {/* Waveform Equalizer */}
          <span className={`waveform ${isPlaying ? 'playing' : ''}`}>
            <span className="bar-wf" style={{ background: isPlaying ? '#d97706' : '#a8a090' }}></span>
            <span className="bar-wf" style={{ background: isPlaying ? '#d97706' : '#a8a090' }}></span>
            <span className="bar-wf" style={{ background: isPlaying ? '#d97706' : '#a8a090' }}></span>
            <span className="bar-wf" style={{ background: isPlaying ? '#d97706' : '#a8a090' }}></span>
          </span>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', color: '#d97706', fontWeight: 700, textTransform: 'uppercase' }}>
              MIND RELAXATION BGM
            </span>
            <span style={{ fontSize: '0.82rem', color: '#f3eee3', fontWeight: 500 }}>
              {isPlaying ? 'Playing • Click for options' : 'Paused • Click to play'}
            </span>
          </div>
        </div>
      </div>

      {/* Expanded Controls Window */}
      <div 
        className="soundscape-panel" 
        id="soundscapePanel" 
        style={{ 
          display: isOpen ? 'block' : 'none',
          position: 'fixed',
          bottom: '90px',
          left: '25px',
          width: '340px',
          maxWidth: 'calc(100vw - 35px)',
          background: '#161d18',
          border: '2px solid var(--accent-gold, #d9bf77)',
          borderRadius: '20px',
          padding: '24px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(217, 191, 119, 0.25)',
          backdropFilter: 'blur(16px)',
          zIndex: 999999,
          color: '#ffffff'
        }}
      >
        <div className="panel-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(217, 191, 119, 0.3)', paddingBottom: '12px', marginBottom: '16px' }}>
          <h4 style={{ margin: 0, fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--accent-gold)' }}>Sanctuary BGM Options</h4>
          <button className="panel-close-btn" onClick={() => setIsOpen(false)} aria-label="Close Audio Panel" style={{ background: 'none', border: 'none', color: 'var(--accent-gold)', fontSize: '1.6rem', cursor: 'pointer' }}>&times;</button>
        </div>

        <div className="panel-body">
          <p className="track-info" style={{ fontSize: '0.88rem', color: '#e0d8c8', marginBottom: '14px' }}>
            Now Playing: <span style={{ color: 'var(--accent-gold)', fontWeight: '700' }}>{tracks[currentTrackIndex].name}</span>
          </p>

          <div className={`audio-visualizer ${isPlaying ? 'active' : ''}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '5px', height: '32px', marginBottom: '18px' }}>
            {[...Array(10)].map((_, i) => (
              <div key={i} className="vis-bar" style={{ width: '4px', background: 'var(--accent-gold)', borderRadius: '2px' }}></div>
            ))}
          </div>

          {/* FULL PLAYBACK CONTROLS BAR */}
          <div className="player-controls" style={{ display: 'flex', flexDirection: 'column', gap: '14px', background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(217, 191, 119, 0.25)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px' }}>
              {/* PREVIOUS TRACK */}
              <button 
                onClick={handlePrevTrack} 
                title="Previous Track" 
                style={{ background: 'none', border: 'none', color: 'var(--accent-gold)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <polygon points="19 20 9 12 19 4 19 20"></polygon>
                  <line x1="5" y1="19" x2="5" y2="5"></line>
                </svg>
              </button>

              {/* PLAY / PAUSE BUTTON */}
              <button 
                className="play-pause-btn" 
                onClick={togglePlay} 
                aria-label="Play/Pause" 
                title={isPlaying ? "Pause BGM" : "Play BGM"}
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: 'var(--accent-gold, #d9bf77)',
                  color: '#161d18',
                  border: '2px solid #ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(217, 191, 119, 0.4)',
                  flexShrink: 0
                }}
              >
                {!isPlaying ? (
                  <svg className="play-icon" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M8 5v14l11-7z" fill="currentColor" />
                  </svg>
                ) : (
                  <svg className="pause-icon" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="currentColor" />
                  </svg>
                )}
              </button>

              {/* NEXT TRACK */}
              <button 
                onClick={handleNextTrack} 
                title="Next Track" 
                style={{ background: 'none', border: 'none', color: 'var(--accent-gold)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <polygon points="5 4 15 12 5 20 5 4"></polygon>
                  <line x1="19" y1="5" x2="19" y2="19"></line>
                </svg>
              </button>
            </div>

            {/* VOLUME SLIDER & MUTE TOGGLE */}
            <div className="volume-slider-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '6px' }}>
              <button 
                onClick={toggleMute} 
                title={isMuted ? "Unmute" : "Mute"} 
                style={{ background: 'none', border: 'none', color: 'var(--accent-gold)', cursor: 'pointer', padding: 0 }}
              >
                {isMuted || volume === 0 ? (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                    <path d="M9 9l3 3v5l-5-4H3V9h4l2-2z"></path>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 5L6 9H2v6h4l5 4V5z" />
                    <path d="M15.54 8.46a5 5 0 010 7.07" />
                  </svg>
                )}
              </button>
              <input 
                type="range" 
                className="volume-slider" 
                min="0" 
                max="1" 
                step="0.05" 
                value={volume}
                onChange={(e) => {
                  setVolume(parseFloat(e.target.value));
                  if (parseFloat(e.target.value) > 0) setIsMuted(false);
                }}
                aria-label="Volume" 
                style={{ width: '100%', accentColor: 'var(--accent-gold)' }}
              />
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', width: '36px', textAlign: 'right', fontWeight: '600' }}>
                {Math.round(volume * 100)}%
              </span>
            </div>
          </div>

          {/* MUSIC SELECTION BUTTONS */}
          <div className="track-options" style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--accent-gold)', letterSpacing: '0.8px', fontWeight: '700', marginBottom: '2px', display: 'block' }}>
              Music Selection
            </span>
            {tracks.map((t, idx) => (
              <button 
                key={idx} 
                className={`track-select-btn ${idx === currentTrackIndex ? 'active' : ''}`}
                onClick={() => selectTrack(idx)}
                style={{
                  background: idx === currentTrackIndex ? 'var(--accent-gold, #d9bf77)' : 'rgba(255, 255, 255, 0.08)',
                  color: idx === currentTrackIndex ? '#161d18' : '#ffffff',
                  border: idx === currentTrackIndex ? '1.5px solid var(--accent-gold)' : '1px solid rgba(217, 191, 119, 0.3)',
                  fontWeight: idx === currentTrackIndex ? '700' : '500',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  fontSize: '0.86rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease'
                }}
              >
                <span>{t.name}</span>
                {idx === currentTrackIndex && isPlaying && (
                  <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.5px', background: '#161d18', color: 'var(--accent-gold)', padding: '2px 8px', borderRadius: '10px', fontWeight: '700' }}>Playing</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
