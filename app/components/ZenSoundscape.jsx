'use client';

import { useState, useRef, useEffect } from 'react';

const tracks = [
  { 
    name: 'Zen Meditation Sanctuary', 
    src: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=zen-meditation-113824.mp3' 
  },
  { 
    name: 'Forest Rain & Chimes', 
    src: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=relaxing-mountains-rivers-141319.mp3' 
  },
  { 
    name: 'Balinese Serenity Waves', 
    src: 'https://cdn.pixabay.com/download/audio/2021/09/06/audio_8b05615d6a.mp3?filename=meditation-relaxing-music-9430.mp3' 
  }
];

export default function ZenSoundscape() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolume] = useState(0.6);
  const [prevVolume, setPrevVolume] = useState(0.6);
  const [isMuted, setIsMuted] = useState(false);
  const [isLooping, setIsLooping] = useState(true);
  const audioRef = useRef(null);
  const synthRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = isLooping;
    }
    if (synthRef.current?.masterGain && synthRef.current?.ctx) {
      synthRef.current.masterGain.gain.setValueAtTime(volume * 0.25, synthRef.current.ctx.currentTime);
    }
  }, [volume, isLooping]);

  useEffect(() => {
    if (isPlaying) {
      setIsOpen(true);
    }
  }, [isPlaying]);

  // Web Audio Synth Fallback for 100% guaranteed ambient music playback
  const startSynthFallback = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!synthRef.current) {
        const ctx = new AudioCtx();
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(volume * 0.25, ctx.currentTime);
        masterGain.connect(ctx.destination);

        // Zen chord drone (432Hz tuning: F3, C4, E4, A4)
        const freqs = [174.61, 261.63, 329.63, 432.00];
        const oscs = freqs.map(f => {
          const osc = ctx.createOscillator();
          const g = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(f, ctx.currentTime);
          g.gain.setValueAtTime(0.08, ctx.currentTime);
          osc.connect(g);
          g.connect(masterGain);
          osc.start();
          return osc;
        });

        synthRef.current = { ctx, masterGain, oscs };
      } else {
        if (synthRef.current.ctx.state === 'suspended') {
          synthRef.current.ctx.resume();
        }
      }
    } catch (err) {
      console.warn('Synth fallback notice:', err);
    }
  };

  const stopSynthFallback = () => {
    if (synthRef.current) {
      try {
        synthRef.current.ctx.suspend();
      } catch (e) {}
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      stopSynthFallback();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          startSynthFallback();
          setIsPlaying(true);
        });
    }
  };

  const selectTrack = (index) => {
    setCurrentTrackIndex(index);
    stopSynthFallback();
    if (audioRef.current) {
      audioRef.current.src = tracks[index].src;
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          startSynthFallback();
          setIsPlaying(true);
        });
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
      setVolume(prevVolume || 0.6);
    } else {
      setPrevVolume(volume);
      setIsMuted(true);
      setVolume(0);
    }
  };

  const toggleLoop = () => {
    setIsLooping(prev => !prev);
  };

  const handleTriggerClick = (e) => {
    e?.stopPropagation();
    setIsOpen(true);
    if (!isPlaying) {
      togglePlay();
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

      {/* Floating Trigger Button */}
      <button 
        className="soundscape-trigger" 
        onClick={handleTriggerClick}
        aria-label="Toggle Sanctuary Audio"
        title="Sanctuary Zen Audio Options"
        style={{
          background: isPlaying ? 'var(--accent-gold)' : '#1e2420',
          color: isPlaying ? '#1e2420' : 'var(--accent-gold)',
          border: '1.5px solid var(--accent-gold)',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease'
        }}
      >
        <span className={`waveform ${isPlaying ? 'playing' : ''}`} id="waveform">
          <span className="bar-wf" style={{ background: isPlaying ? '#1e2420' : 'var(--accent-gold)' }}></span>
          <span className="bar-wf" style={{ background: isPlaying ? '#1e2420' : 'var(--accent-gold)' }}></span>
          <span className="bar-wf" style={{ background: isPlaying ? '#1e2420' : 'var(--accent-gold)' }}></span>
          <span className="bar-wf" style={{ background: isPlaying ? '#1e2420' : 'var(--accent-gold)' }}></span>
        </span>
        <svg className="audio-volume-icon" viewBox="0 0 24 24" width="18" height="18">
          <path d="M11 5L6 9H2v6h4l5 4V5z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

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
          <h4 style={{ margin: 0, fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--accent-gold)' }}>Sanctuary Music Options</h4>
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
                title={isPlaying ? "Pause Music" : "Play Music"}
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

              {/* REPEAT LOOP TOGGLE */}
              <button 
                onClick={toggleLoop} 
                title={isLooping ? "Repeat On" : "Repeat Off"} 
                style={{ background: 'none', border: 'none', color: isLooping ? 'var(--accent-gold)' : '#888', cursor: 'pointer', display: 'flex', alignItems: 'center', opacity: isLooping ? 1 : 0.5 }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <polyline points="17 1 21 5 17 9"></polyline>
                  <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                  <polyline points="7 23 3 19 7 15"></polyline>
                  <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
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
